import { chromium } from 'playwright';

async function findOverflow() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  for (const urlPath of ['/locations/ramanathapuram', '/services/home-construction']) {
    await page.goto(`http://localhost:3000${urlPath}`, { waitUntil: 'networkidle' });
    const overflowingElements = await page.evaluate(() => {
      const results = [];
      const docWidth = document.documentElement.clientWidth;
      document.querySelectorAll('*').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 1) {
          results.push({
            tag: el.tagName,
            className: el.className,
            id: el.id,
            right: rect.right,
            width: rect.width,
            outerHTML: el.outerHTML.slice(0, 100)
          });
        }
      });
      return results;
    });

    console.log(`\nOverflowing elements on ${urlPath}:`, overflowingElements.slice(0, 5));
  }

  await browser.close();
}

findOverflow();
