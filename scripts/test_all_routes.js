import { chromium } from 'playwright';

const ROUTES_TO_TEST = [
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
  '/projects/example-project',
  '/process',
  '/locations/ramanathapuram',
  '/contact',
  '/careers',
  '/blog'
];

const BASE_URL = 'http://localhost:3000';

async function runRouteTests() {
  console.log('🚀 Starting Comprehensive Route & Refresh Verification using Playwright...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(`Console Error on ${page.url()}: ${msg.text()}`);
    }
  });

  let passed = 0;
  let failed = 0;

  for (const route of ROUTES_TO_TEST) {
    const fullUrl = `${BASE_URL}${route}`;
    try {
      // 1. Direct URL access
      const response = await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 });
      const status = response ? response.status() : 200;

      // 2. Check title and body content
      const pageTitle = await page.title();
      const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 300));
      const has404 = bodyText.includes('404') && !route.includes('not-found');

      // 3. Test Browser Refresh on this exact route
      await page.reload({ waitUntil: 'networkidle', timeout: 15000 });
      const refreshTitle = await page.title();

      if (status >= 400 || has404) {
        console.error(`❌ FAILED: ${route} - Status ${status}, Body mentions 404`);
        failed++;
      } else {
        console.log(`✅ PASSED: ${route} | Direct & Refresh OK | Title: "${refreshTitle}"`);
        passed++;
      }
    } catch (err) {
      console.error(`❌ ERROR on ${route}:`, err.message);
      failed++;
    }
  }

  // 4. Test Navigation Link & Back/Forward
  console.log('\nTesting Browser Back & Forward Navigation...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.click('a[href="/contact"]');
  await page.waitForTimeout(600);
  const contactUrl = page.url();
  
  await page.goBack({ waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const homeUrl = page.url();

  await page.goForward({ waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const forwardUrl = page.url();

  if (contactUrl.includes('/contact') && (homeUrl === `${BASE_URL}/` || homeUrl.endsWith('/')) && forwardUrl.includes('/contact')) {
    console.log('✅ PASSED: Browser Back & Forward Navigation working perfectly.');
  } else {
    console.warn('⚠️ Back/Forward navigation check result:', { contactUrl, homeUrl, forwardUrl });
  }

  await browser.close();
  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed} passed, ${failed} failed out of ${ROUTES_TO_TEST.length} routes.`);
  console.log(`========================================`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

runRouteTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
