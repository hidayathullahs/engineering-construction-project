import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const PORT = 4174;
const BASE = `http://localhost:${PORT}`;

async function testHeroMotion() {
  const outDir = path.resolve('screenshots/hero_motion');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Starting preview server...');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
    shell: true,
    stdio: 'pipe'
  });

  await new Promise((r) => setTimeout(r, 2500));

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  console.log('Navigating to hero...');
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });

  // 1. Capture early entrance (0.3s)
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, '01_hero_entrance_early.png') });
  console.log('Captured 01_hero_entrance_early.png');

  // 2. Capture mid entrance (0.9s)
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '02_hero_entrance_mid.png') });
  console.log('Captured 02_hero_entrance_mid.png');

  // 3. Capture fully settled state (2.2s)
  await page.waitForTimeout(1300);
  await page.screenshot({ path: path.join(outDir, '03_hero_settled.png') });
  console.log('Captured 03_hero_settled.png');

  // 4. Test hovering over metric card
  const card = await page.$('.hero-metric-card');
  if (card) {
    await card.hover();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outDir, '04_hero_card_hover.png') });
    console.log('Captured 04_hero_card_hover.png');
  }

  // 5. Test hovering over CTA button
  const ctaBtn = await page.$('.btn-primary');
  if (ctaBtn) {
    await ctaBtn.hover();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(outDir, '05_hero_button_hover.png') });
    console.log('Captured 05_hero_button_hover.png');
  }

  // Check stat text
  const statTexts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.hero-metric-card')).map(
      (c) => c.querySelector('div')?.innerText
    );
  });
  console.log('Final Animated Numbers:', statTexts);

  await browser.close();
  server.kill();

  if (errors.length > 0) {
    console.error('Console errors detected:', errors);
    process.exit(1);
  } else {
    console.log('✅ Clean motion design test passed with 0 console errors!');
  }
}

testHeroMotion().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
