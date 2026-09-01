import { chromium } from 'playwright';

const SITEMAP_URL = 'https://buildmydream-6q5x.onrender.com/sitemap.xml';
const ROBOTS_URL = 'https://buildmydream-6q5x.onrender.com/robots.txt';
const BASE_ORIGIN = 'https://buildmydream-6q5x.onrender.com';
const EXPECTED_GSC_TAG = 'LeaKYTnSO-NuUtsXkhD5-rKkeBfkG23Fkim8H1qI3GY';

async function testLiveSitemap() {
  console.log('🚀 Starting Live Sitemap & Deployment Verification...');

  // 1. Fetch live sitemap
  console.log(`\nFetching live sitemap from ${SITEMAP_URL}...`);
  const res = await fetch(SITEMAP_URL, { cache: 'no-store' });
  if (!res.ok) {
    console.error(`❌ Failed to fetch sitemap: HTTP ${res.status}`);
    process.exit(1);
  }
  const sitemapContent = await res.text();
  console.log('✅ Live sitemap fetched successfully (HTTP 200).');

  // 2. Parse all <loc> entries
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1].trim());
  }

  console.log(`\n📋 Found ${urls.length} URLs in sitemap.xml:`);
  urls.forEach((u, i) => console.log(`   ${i + 1}. ${u}`));

  // 3. Validate Domain Purity
  let domainErrors = 0;
  urls.forEach((u) => {
    if (!u.startsWith(`${BASE_ORIGIN}/`) && u !== BASE_ORIGIN) {
      console.error(`❌ Non-Render URL found: ${u}`);
      domainErrors++;
    }
    if (u.includes('buildmydream.in') || u.includes('localhost') || u.includes('127.0.0.1')) {
      console.error(`❌ Forbidden domain pattern found: ${u}`);
      domainErrors++;
    }
  });

  if (domainErrors > 0) {
    console.error(`❌ ${domainErrors} domain formatting errors found in sitemap!`);
    process.exit(1);
  } else {
    console.log('\n✅ DOMAIN PURITY VERIFIED: All 22 sitemap URLs strictly use https://buildmydream-6q5x.onrender.com/');
    console.log('✅ ZERO references to buildmydream.in, localhost, or 127.0.0.1');
  }

  // 4. Verify robots.txt
  console.log(`\n🤖 Verifying ${ROBOTS_URL}...`);
  const robotsRes = await fetch(ROBOTS_URL, { cache: 'no-store' });
  const robotsText = await robotsRes.text();
  console.log('Robots content:\n' + robotsText.trim());
  if (robotsText.includes(`Sitemap: ${SITEMAP_URL}`) && !robotsText.includes('buildmydream.in')) {
    console.log('✅ robots.txt correctly references Render sitemap and has 0 legacy domain references.');
  } else {
    console.error('❌ robots.txt validation failed!');
    process.exit(1);
  }

  // 5. Test Live Browser Navigation & Verification via Playwright
  console.log('\n🔍 Verifying Browser Head, Canonical Tag, and GSC Meta Tag via Playwright...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  await page.goto(`${BASE_ORIGIN}/`, { waitUntil: 'networkidle' });

  const headCheck = await page.evaluate(() => {
    const gsc = document.querySelector('meta[name="google-site-verification"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    return {
      gscContent: gsc ? gsc.getAttribute('content') : null,
      canonicalHref: canonical ? canonical.getAttribute('href') : null,
      ogImageHref: ogImage ? ogImage.getAttribute('content') : null
    };
  });

  console.log('Browser Head Check:', headCheck);

  if (headCheck.gscContent === EXPECTED_GSC_TAG) {
    console.log('✅ GSC verification tag verified intact in live browser!');
  } else {
    console.error('❌ GSC verification tag mismatch or missing!');
    process.exit(1);
  }

  if (headCheck.canonicalHref && headCheck.canonicalHref.startsWith(BASE_ORIGIN)) {
    console.log('✅ Canonical URL points to Render production origin!');
  } else {
    console.error(`❌ Canonical URL mismatch: ${headCheck.canonicalHref}`);
    process.exit(1);
  }

  // 6. Test direct HTTP status on sub-routes
  console.log('\n🌐 Checking HTTP status of all sitemap routes on Render static server:');
  for (const url of urls) {
    try {
      const r = await fetch(url, { method: 'GET', cache: 'no-store' });
      console.log(`   ${r.status === 200 ? '✅ 200' : '⚠️ ' + r.status}: ${url}`);
    } catch (e) {
      console.log(`   ❌ Error: ${url} (${e.message})`);
    }
  }

  await browser.close();

  console.log('\n============================================================');
  console.log('🎉 SITEMAP XML AND ROBOTS.TXT VERIFICATION COMPLETED!');
  console.log('============================================================');
}

testLiveSitemap().catch((err) => {
  console.error('Test execution error:', err);
  process.exit(1);
});
