import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function capture() {
  const outDir = path.resolve('screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Launching installed Chrome...');
  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch (e) {
    console.log('Fallback to default chromium launch...');
    browser = await chromium.launch({ headless: true });
  }

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Hero
  console.log('Capturing Hero...');
  await page.screenshot({ path: path.join(outDir, '01_hero.png') });

  // 2. Scroll into Construction Journey
  console.log('Capturing Construction Scrubber Stage 01...');
  await page.evaluate(() => {
    const el = document.getElementById('construction-journey');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '02_scrubber_stage1.png') });

  // 3. Scroll deeper to Stage 08
  console.log('Capturing Construction Scrubber Mid Stage...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1800, behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '03_scrubber_mid.png') });

  // 4. Scroll to 3D BIM Viewer
  console.log('Capturing 3D BIM Viewer Section...');
  await page.evaluate(() => {
    window.scrollBy({ top: 4000, behavior: 'instant' });
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, '04_sections.png') });

  // 5. Navigate to Projects Page
  console.log('Capturing Projects Page...');
  await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '05_projects.png') });

  // 6. Navigate to Technology Page
  console.log('Capturing Technology Page with 3D BIM...');
  await page.goto('http://localhost:3000/technology', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, '06_technology.png') });

  // 7. Navigate to Contact Page
  console.log('Capturing Contact Page...');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '07_contact.png') });

  await browser.close();
  console.log('SUCCESS: All screenshots captured in screenshots/ directory.');
}

capture().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
