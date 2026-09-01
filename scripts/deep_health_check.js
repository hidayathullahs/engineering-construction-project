import { chromium } from 'playwright';
import { spawn } from 'child_process';

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/home-construction',
  '/services/architectural-design',
  '/services/structural-engineering',
  '/services/interior-design',
  '/services/turnkey-construction',
  '/services/renovation',
  '/projects',
  '/projects/contemporary-villa-ramanathapuram',
  '/process',
  '/guides',
  '/guides/house-construction-cost-in-ramanathapuram',
  '/guides/how-to-choose-a-home-builder-in-ramanathapuram',
  '/guides/house-construction-process-foundation-to-handover',
  '/locations/ramanathapuram',
  '/technology',
  '/sustainability',
  '/safety-quality',
  '/careers',
  '/contact'
];

async function runCheck() {
  console.log('🚀 Starting Vite preview server...');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
    shell: true,
    stdio: 'pipe'
  });

  // Wait for server to start
  await new Promise((resolve) => {
    server.stdout.on('data', (d) => {
      const msg = d.toString();
      if (msg.includes(String(PORT))) resolve();
    });
    setTimeout(resolve, 3000);
  });

  console.log(`📡 Preview server running on ${BASE}`);

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext();

  const issues = [];
  const linkSet = new Set();

  for (const route of ROUTES) {
    const page = await context.newPage();
    const url = `${BASE}${route}`;
    const pageErrors = [];
    const failedRequests = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        pageErrors.push(`[Console Error] ${msg.text()}`);
      }
    });

    page.on('requestfailed', (req) => {
      failedRequests.push(`[Request Failed] ${req.url()} (${req.failure()?.errorText})`);
    });

    page.on('response', (res) => {
      if (res.status() >= 400) {
        failedRequests.push(`[HTTP ${res.status()}] ${res.url()}`);
      }
    });

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });

      // 1. Check for horizontal overflow
      const overflow = await page.evaluate(() => {
        const body = document.body;
        const html = document.documentElement;
        const hasHorizontalScroll =
          html.scrollWidth > html.clientWidth || body.scrollWidth > body.clientWidth;
        return {
          hasHorizontalScroll,
          scrollWidth: Math.max(html.scrollWidth, body.scrollWidth),
          clientWidth: html.clientWidth
        };
      });

      if (overflow.hasHorizontalScroll) {
        issues.push({
          route,
          type: 'OVERFLOW',
          detail: `Horizontal overflow detected: scrollWidth=${overflow.scrollWidth}, clientWidth=${overflow.clientWidth}`
        });
      }

      // 2. Check for broken images
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs
          .filter((img) => img.naturalWidth === 0 && !img.src.includes('data:image'))
          .map((img) => ({ src: img.src, alt: img.alt }));
      });

      if (brokenImages.length > 0) {
        issues.push({
          route,
          type: 'BROKEN_IMAGE',
          detail: brokenImages
        });
      }

      // 3. Collect internal links to verify later
      const pageLinks = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'))
          .map((a) => a.getAttribute('href'))
          .filter((href) => href && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/#'));
      });

      pageLinks.forEach((l) => linkSet.add(l));

      // 4. Record any console errors or failed network requests
      if (pageErrors.length > 0) {
        issues.push({ route, type: 'CONSOLE_ERROR', detail: pageErrors });
      }
      if (failedRequests.length > 0) {
        issues.push({ route, type: 'FAILED_NETWORK', detail: failedRequests });
      }

      console.log(`✅ Audited route: ${route} (0 critical crashes)`);
    } catch (err) {
      issues.push({ route, type: 'PAGE_CRASH', detail: err.message });
      console.error(`❌ Error on ${route}:`, err.message);
    } finally {
      await page.close();
    }
  }

  // 5. Verify all collected internal links
  console.log(`\n🔗 Verifying ${linkSet.size} discovered internal links...`);
  const brokenLinks = [];
  for (const link of linkSet) {
    const testPage = await context.newPage();
    try {
      const res = await testPage.goto(`${BASE}${link}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
      const status = res?.status() || 0;
      const is404Page = await testPage.evaluate(() => {
        return document.title.includes('404') || document.body.innerText.includes('Page Not Found');
      });

      if (status >= 400 || is404Page) {
        brokenLinks.push({ link, status, is404Page });
      }
    } catch (err) {
      brokenLinks.push({ link, error: err.message });
    } finally {
      await testPage.close();
    }
  }

  if (brokenLinks.length > 0) {
    issues.push({ type: 'BROKEN_INTERNAL_LINKS', detail: brokenLinks });
  }

  await browser.close();
  server.kill();

  console.log('\n============================================================');
  console.log('🩺 AUDIT RESULTS:');
  console.log(`Total Issues Discovered: ${issues.length}`);
  console.log(JSON.stringify(issues, null, 2));
  console.log('============================================================');
}

runCheck().catch((err) => {
  console.error('Fatal runner error:', err);
  process.exit(1);
});
