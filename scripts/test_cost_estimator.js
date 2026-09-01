import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const PORT = 4175;
const BASE = `http://localhost:${PORT}`;

async function testCostEstimator() {
  console.log('Starting preview server on port ' + PORT + '...');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
    shell: true,
    stdio: 'pipe'
  });

  await new Promise((r) => setTimeout(r, 3000));

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  try {
    console.log('Navigating to ' + BASE + '/...');
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    // Scroll to Cost Estimator section
    console.log('Locating #cost-estimator...');
    const estimator = page.locator('#cost-estimator');
    await estimator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Take screenshot of the Cost Estimator
    const outDir = path.resolve('screenshots');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    await page.screenshot({ path: path.join(outDir, 'cost_estimator_preview.png') });
    console.log('Captured screenshots/cost_estimator_preview.png');

    // Verify elements
    const heading = await page.locator('#cost-estimator h2').innerText();
    console.log('Estimator Heading:', heading);

    // Check WhatsApp button link
    const waLink = await page.locator('#cost-estimator a[href*="wa.me"]').getAttribute('href');
    console.log('WhatsApp Lead Gen URL:', waLink ? 'Valid (contains wa.me)' : 'Missing');

    // Test route navigation to a code-split page (e.g. /about)
    console.log('Testing code-split navigation to /about...');
    await page.goto(`${BASE}/about`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);
    const aboutTitle = await page.title();
    console.log('Navigated to About page successfully. Title:', aboutTitle);

    console.log('Console Errors encountered:', errors.length);
    if (errors.length > 0) {
      console.log('Errors:', errors);
    }
  } finally {
    await browser.close();
    server.kill();
    console.log('Test completed and server stopped.');
  }
}

testCostEstimator().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
