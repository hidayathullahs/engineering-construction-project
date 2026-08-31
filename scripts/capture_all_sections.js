import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function captureAll() {
  const outDir = path.resolve('screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Launching installed Chrome for comprehensive capture...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to Homepage...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Hero
  console.log('1. Hero...');
  await page.screenshot({ path: path.join(outDir, '01_hero.png') });

  // 2. Who We Are
  console.log('2. Who We Are...');
  await page.evaluate(() => {
    const el = document.querySelector('.who-we-are-section') || document.querySelectorAll('section')[1];
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '02_who_we_are.png') });

  // 3. Scrubber Stage 01
  console.log('3. Scrubber Stage 01...');
  await page.evaluate(() => {
    const el = document.getElementById('construction-journey');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '04_scrubber_stage_01.png') });

  // 4. Scrubber Stage 08 (Mid)
  console.log('4. Scrubber Stage 08...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1800, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '05_scrubber_stage_08.png') });

  // 5. Scrubber Stage 16 (Completion)
  console.log('5. Scrubber Stage 16...');
  await page.evaluate(() => {
    window.scrollBy({ top: 2200, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '06_scrubber_stage_16.png') });

  // 6. Featured Projects
  console.log('6. Featured Projects...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1000, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '07_featured_projects.png') });

  // 7. Services Showcase
  console.log('7. Services Showcase...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1000, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '08_services_showcase.png') });

  // 8. Engineering Process Pipeline
  console.log('8. Engineering Process Pipeline...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1000, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '09_engineering_process.png') });

  // 9. Technology Preview (3D BIM)
  console.log('9. Technology Preview (3D BIM)...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1000, behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '10_technology_bim.png') });

  // 10. Safety & Sustainability
  console.log('10. Safety & Sustainability...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1200, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '11_safety_sustainability.png') });

  // 11. Industries & Trust
  console.log('11. Industries & Trust...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1200, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '13_industries_trust.png') });

  // 12. Careers & Footer
  console.log('12. Careers & Footer...');
  await page.evaluate(() => {
    window.scrollBy({ top: 1200, behavior: 'instant' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '15_careers_footer.png') });

  // Pages
  console.log('Capturing About Page...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '17_about_page.png') });

  console.log('Capturing Services Page...');
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '18_services_page.png') });

  console.log('Capturing Projects Page...');
  await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '19_projects_page.png') });

  console.log('Capturing Project Detail Page...');
  await page.goto('http://localhost:3000/projects/horizon-villa-residences', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '20_project_detail_page.png') });

  console.log('Capturing Technology Page (3D BIM)...');
  await page.goto('http://localhost:3000/technology', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '21_technology_page.png') });

  console.log('Capturing Contact Page...');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '22_contact_page.png') });

  await browser.close();
  console.log('SUCCESS: All 18 screenshots captured.');
}

captureAll().catch(err => {
  console.error('Failed to capture:', err);
  process.exit(1);
});
