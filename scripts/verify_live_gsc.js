import { chromium } from 'playwright';

const TARGET_URL = 'https://buildmydream-6q5x.onrender.com/';
const EXPECTED_CODE = 'LeaKYTnSO-NuUtsXkhD5-rKkeBfkG23Fkim8H1qI3GY';

async function verifyLive() {
  console.log(`🔍 Checking live deployment on: ${TARGET_URL}...`);
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  let verified = false;
  let attempts = 0;
  const maxAttempts = 12; // 12 * 10s = 120s max wait for Render to deploy

  while (!verified && attempts < maxAttempts) {
    attempts++;
    console.log(`\n[Attempt ${attempts}/${maxAttempts}] Fetching ${TARGET_URL}...`);
    try {
      await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });

      // Check meta tag in head
      const metaTag = await page.evaluate(() => {
        const meta = document.querySelector('head meta[name="google-site-verification"]');
        return meta ? {
          outerHTML: meta.outerHTML,
          content: meta.getAttribute('content'),
          parent: meta.parentElement ? meta.parentElement.tagName : null
        } : null;
      });

      if (metaTag && metaTag.content === EXPECTED_CODE) {
        console.log('✅ Google Search Console verification meta tag detected on LIVE site!');
        console.log(`   Tag HTML: ${metaTag.outerHTML}`);
        console.log(`   Parent container: <${metaTag.parent}>`);
        console.log(`   Code matches expected: ${metaTag.content === EXPECTED_CODE}`);
        verified = true;
        break;
      } else if (metaTag) {
        console.log(`⚠️ Found tag but content is: ${metaTag.content}`);
      } else {
        console.log('⏳ Tag not yet present in live HTML. Render build might still be in progress. Waiting 10s...');
      }
    } catch (e) {
      console.warn(`Fetch attempt error: ${e.message}`);
    }

    if (!verified) {
      await new Promise((res) => setTimeout(res, 10000));
    }
  }

  console.log(`\nConsole Errors count: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Console errors:', consoleErrors);
  }

  await browser.close();

  if (!verified) {
    console.error('❌ Failed to verify tag on live site within time limit.');
    process.exit(1);
  } else {
    console.log('\n🎉 SUCCESS: Live site has been verified and matches all requirements perfectly.');
  }
}

verifyLive().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
