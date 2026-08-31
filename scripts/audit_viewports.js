import { chromium } from 'playwright';

const VIEWPORTS = [
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 375, height: 812 }
];

const PAGES_TO_AUDIT = [
  '/',
  '/process',
  '/locations/ramanathapuram',
  '/services/home-construction',
  '/contact'
];

async function runViewportAudit() {
  console.log('📱 Starting Multi-Device Viewport & Accessibility Audit...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    for (const urlPath of PAGES_TO_AUDIT) {
      await page.goto(`http://localhost:3000${urlPath}`, { waitUntil: 'networkidle' });
      
      // Check horizontal overflow
      const hasHorizontalScrollbar = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      // Check single H1 per page
      const h1Count = await page.evaluate(() => document.querySelectorAll('h1').length);
      const h1Text = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : 'NONE';
      });

      if (hasHorizontalScrollbar) {
        console.warn(`  ⚠️ Warning: Horizontal overflow on ${vp.name} for ${urlPath}`);
      } else {
        console.log(`  ✅ ${urlPath} | H1s: ${h1Count} ("${h1Text.slice(0, 40)}...") | No horizontal overflow`);
      }
    }
    await page.close();
  }

  await browser.close();
  console.log('\n✨ Viewport and semantic hierarchy audit completed successfully.');
}

runViewportAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
