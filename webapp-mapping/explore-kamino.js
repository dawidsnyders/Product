const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = './screenshots';
const RESULTS_FILE = './mapping-results.json';

// URLs to explore
const DISCONNECTED_URL = 'https://kamino.com';
const CONNECTED_URL = 'https://app.kamino.finance/?DEBUG_WALLET=8fYoBSrBwoa9g1daXeaHhigpRWdKnaXgFHe3arSiW73F';

// Store all discovered data
const siteMap = {
  disconnected: {
    pages: {},
    navigation: [],
    routes: new Set(),
  },
  connected: {
    pages: {},
    navigation: [],
    routes: new Set(),
  }
};

// Track visited URLs to avoid duplicates
const visitedUrls = new Set();

async function extractPageInfo(page, url, mode) {
  const pageInfo = {
    url: url,
    title: await page.title(),
    timestamp: new Date().toISOString(),
    links: [],
    buttons: [],
    navigation: [],
    modals: [],
    forms: [],
    interactiveElements: [],
  };

  // Extract all links
  const links = await page.$$eval('a[href]', elements =>
    elements.map(el => ({
      href: el.href,
      text: el.innerText?.trim().substring(0, 100),
      classes: el.className,
      isNavigation: el.closest('nav, header, [role="navigation"]') !== null,
    })).filter(l => l.href && !l.href.startsWith('javascript:'))
  );
  pageInfo.links = links;

  // Extract buttons
  const buttons = await page.$$eval('button, [role="button"], input[type="submit"]', elements =>
    elements.map(el => ({
      text: el.innerText?.trim().substring(0, 100) || el.value || el.getAttribute('aria-label'),
      classes: el.className,
      type: el.tagName.toLowerCase(),
      disabled: el.disabled,
    }))
  );
  pageInfo.buttons = buttons;

  // Extract navigation elements
  const navElements = await page.$$eval('nav, [role="navigation"], header', elements =>
    elements.map(el => ({
      tag: el.tagName.toLowerCase(),
      classes: el.className,
      links: Array.from(el.querySelectorAll('a')).map(a => ({
        href: a.href,
        text: a.innerText?.trim().substring(0, 50)
      }))
    }))
  );
  pageInfo.navigation = navElements;

  // Extract any tabs
  const tabs = await page.$$eval('[role="tab"], [role="tablist"], .tab, .tabs', elements =>
    elements.map(el => ({
      text: el.innerText?.trim().substring(0, 100),
      classes: el.className,
      selected: el.getAttribute('aria-selected') === 'true',
    }))
  );
  pageInfo.tabs = tabs;

  // Extract dropdown/select elements
  const dropdowns = await page.$$eval('select, [role="listbox"], [role="combobox"], [class*="dropdown"], [class*="select"]', elements =>
    elements.map(el => ({
      type: el.tagName.toLowerCase(),
      classes: el.className,
      options: el.tagName === 'SELECT' ? Array.from(el.options).map(o => o.text) : [],
    }))
  );
  pageInfo.dropdowns = dropdowns;

  // Extract form elements
  const forms = await page.$$eval('form, [role="form"]', elements =>
    elements.map(el => ({
      action: el.action,
      method: el.method,
      inputs: Array.from(el.querySelectorAll('input, textarea, select')).map(input => ({
        type: input.type || input.tagName.toLowerCase(),
        name: input.name,
        placeholder: input.placeholder,
      }))
    }))
  );
  pageInfo.forms = forms;

  // Extract input fields (for DeFi - deposit/withdraw amounts etc)
  const inputs = await page.$$eval('input[type="number"], input[type="text"], input[placeholder*="amount" i], input[placeholder*="enter" i]', elements =>
    elements.map(el => ({
      type: el.type,
      placeholder: el.placeholder,
      classes: el.className,
      name: el.name,
    }))
  );
  pageInfo.inputs = inputs;

  // Look for modal triggers and modals
  const modalTriggers = await page.$$eval('[data-modal], [aria-haspopup="dialog"], [class*="modal"]', elements =>
    elements.map(el => ({
      text: el.innerText?.trim().substring(0, 50),
      classes: el.className,
    }))
  );
  pageInfo.modalTriggers = modalTriggers;

  // Get page sections/regions
  const sections = await page.$$eval('main, section, [role="main"], [role="region"], article', elements =>
    elements.map(el => ({
      tag: el.tagName.toLowerCase(),
      classes: el.className,
      heading: el.querySelector('h1, h2, h3')?.innerText?.trim().substring(0, 100),
    }))
  );
  pageInfo.sections = sections;

  return pageInfo;
}

async function takeScreenshot(page, name, mode) {
  const filename = `${mode}-${name.replace(/[^a-z0-9]/gi, '-')}.png`;
  const filepath = path.join(SCREENSHOT_DIR, filename);
  await page.screenshot({ path: filepath, fullPage: true });
  console.log(`  📸 Screenshot: ${filename}`);
  return filename;
}

async function exploreUrl(page, url, mode, depth = 0) {
  if (depth > 3) return; // Limit depth
  if (visitedUrls.has(url)) return;

  // Filter out external links and non-http
  if (!url.startsWith('http')) return;
  const urlObj = new URL(url);
  if (!urlObj.hostname.includes('kamino')) return;

  visitedUrls.add(url);

  console.log(`\n${'  '.repeat(depth)}🔍 Exploring: ${url}`);

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000); // Wait for dynamic content

    const pageInfo = await extractPageInfo(page, url, mode);
    const screenshotName = urlObj.pathname === '/' ? 'home' : urlObj.pathname;
    pageInfo.screenshot = await takeScreenshot(page, screenshotName, mode);

    siteMap[mode].pages[url] = pageInfo;
    siteMap[mode].routes.add(urlObj.pathname);

    // Collect internal links to explore
    const internalLinks = pageInfo.links
      .filter(link => {
        try {
          const linkUrl = new URL(link.href);
          return linkUrl.hostname.includes('kamino');
        } catch {
          return false;
        }
      })
      .map(l => l.href);

    // Add to navigation if from nav element
    const navLinks = pageInfo.links.filter(l => l.isNavigation);
    siteMap[mode].navigation.push(...navLinks);

    // Explore child links (breadth limited)
    for (const link of [...new Set(internalLinks)].slice(0, 20)) {
      await exploreUrl(page, link, mode, depth + 1);
    }

  } catch (error) {
    console.log(`  ❌ Error exploring ${url}: ${error.message}`);
  }
}

async function exploreInteractiveElements(page, mode) {
  console.log(`\n🎯 Exploring interactive elements for ${mode} mode...`);

  const interactions = [];

  // Find and click on tabs
  const tabs = await page.$$('[role="tab"]:not([aria-selected="true"]), .tab:not(.active)');
  for (let i = 0; i < Math.min(tabs.length, 5); i++) {
    try {
      const tabText = await tabs[i].innerText();
      console.log(`  Clicking tab: ${tabText}`);
      await tabs[i].click();
      await page.waitForTimeout(1000);

      const screenshotName = `tab-${tabText.replace(/[^a-z0-9]/gi, '-')}`;
      const screenshot = await takeScreenshot(page, screenshotName, mode);

      interactions.push({
        type: 'tab',
        text: tabText,
        screenshot: screenshot
      });
    } catch (e) {
      console.log(`  Tab click failed: ${e.message}`);
    }
  }

  // Find dropdown triggers
  const dropdownTriggers = await page.$$('[class*="dropdown"] > button, [aria-haspopup="listbox"], [aria-haspopup="menu"]');
  for (let i = 0; i < Math.min(dropdownTriggers.length, 3); i++) {
    try {
      await dropdownTriggers[i].click();
      await page.waitForTimeout(500);

      const screenshot = await takeScreenshot(page, `dropdown-${i}`, mode);
      interactions.push({
        type: 'dropdown',
        index: i,
        screenshot: screenshot
      });

      // Close dropdown by clicking elsewhere
      await page.click('body', { position: { x: 0, y: 0 } });
      await page.waitForTimeout(300);
    } catch (e) {
      console.log(`  Dropdown click failed: ${e.message}`);
    }
  }

  return interactions;
}

async function main() {
  console.log('🚀 Starting Kamino Finance webapp mapping...\n');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  try {
    // ========== DISCONNECTED USER EXPERIENCE ==========
    console.log('═══════════════════════════════════════════════════════════');
    console.log('📱 PHASE 1: DISCONNECTED USER EXPERIENCE');
    console.log('═══════════════════════════════════════════════════════════');

    await exploreUrl(page, DISCONNECTED_URL, 'disconnected', 0);

    // Also explore the app without wallet
    await exploreUrl(page, 'https://app.kamino.finance', 'disconnected', 0);

    const disconnectedInteractions = await exploreInteractiveElements(page, 'disconnected');
    siteMap.disconnected.interactions = disconnectedInteractions;

    // ========== CONNECTED USER EXPERIENCE ==========
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('💰 PHASE 2: CONNECTED USER EXPERIENCE (DEBUG_WALLET)');
    console.log('═══════════════════════════════════════════════════════════');

    visitedUrls.clear(); // Reset for connected exploration

    await exploreUrl(page, CONNECTED_URL, 'connected', 0);

    const connectedInteractions = await exploreInteractiveElements(page, 'connected');
    siteMap.connected.interactions = connectedInteractions;

    // ========== DEEP DIVE: Specific product pages ==========
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('🔬 PHASE 3: DEEP DIVE INTO PRODUCT PAGES');
    console.log('═══════════════════════════════════════════════════════════');

    const productPages = [
      'https://app.kamino.finance/liquidity',
      'https://app.kamino.finance/lending',
      'https://app.kamino.finance/leverage',
      'https://app.kamino.finance/portfolio',
      'https://app.kamino.finance/points',
      'https://app.kamino.finance/earn',
    ];

    for (const productUrl of productPages) {
      const fullUrl = productUrl + '?DEBUG_WALLET=8fYoBSrBwoa9g1daXeaHhigpRWdKnaXgFHe3arSiW73F';
      await exploreUrl(page, fullUrl, 'connected', 0);
    }

  } finally {
    await browser.close();
  }

  // Convert Sets to Arrays for JSON serialization
  siteMap.disconnected.routes = [...siteMap.disconnected.routes];
  siteMap.connected.routes = [...siteMap.connected.routes];

  // Remove duplicates from navigation
  siteMap.disconnected.navigation = [...new Map(siteMap.disconnected.navigation.map(n => [n.href, n])).values()];
  siteMap.connected.navigation = [...new Map(siteMap.connected.navigation.map(n => [n.href, n])).values()];

  // Save results
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(siteMap, null, 2));
  console.log(`\n✅ Mapping complete! Results saved to ${RESULTS_FILE}`);

  // Print summary
  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('📊 MAPPING SUMMARY');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`Disconnected pages explored: ${Object.keys(siteMap.disconnected.pages).length}`);
  console.log(`Disconnected routes found: ${siteMap.disconnected.routes.length}`);
  console.log(`Connected pages explored: ${Object.keys(siteMap.connected.pages).length}`);
  console.log(`Connected routes found: ${siteMap.connected.routes.length}`);
}

main().catch(console.error);
