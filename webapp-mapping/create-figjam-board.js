#!/usr/bin/env node

/**
 * Kamino.com User Journey Map - FigJam Generator
 *
 * This script creates a complete user journey map in FigJam using the Figma API.
 *
 * Usage:
 *   node create-figjam-board.js --token=YOUR_FIGMA_TOKEN --file=YOUR_FIGJAM_FILE_ID
 *
 * Or set environment variables:
 *   FIGMA_TOKEN=xxx FIGJAM_FILE_ID=xxx node create-figjam-board.js
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2).reduce((acc, arg) => {
  const [key, value] = arg.replace('--', '').split('=');
  acc[key] = value;
  return acc;
}, {});

const FIGMA_TOKEN = args.token || process.env.FIGMA_TOKEN;
const FILE_ID = args.file || process.env.FIGJAM_FILE_ID;

if (!FIGMA_TOKEN || !FILE_ID) {
  console.error(`
Usage: node create-figjam-board.js --token=YOUR_FIGMA_TOKEN --file=YOUR_FIGJAM_FILE_ID

Get your token from: Figma → Settings → Personal Access Tokens
Get file ID from the FigJam URL: figma.com/file/[FILE_ID]/...
  `);
  process.exit(1);
}

// Load the JSON data
const jsonPath = path.join(__dirname, 'kamino-com-figjam-nodes.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Color mappings (Figma uses RGB 0-1 format)
const COLORS = {
  entry: { r: 0.059, g: 0.090, b: 0.165 },      // #0f172a
  wallet: { r: 0.937, g: 0.267, b: 0.267 },     // #ef4444
  navigation: { r: 0.231, g: 0.510, b: 0.965 }, // #3b82f6
  earn: { r: 0.063, g: 0.725, b: 0.506 },       // #10b981
  borrow: { r: 0.976, g: 0.451, b: 0.086 },     // #f97316
  liquidity: { r: 0.231, g: 0.510, b: 0.965 },  // #3b82f6
  multiply: { r: 0.659, g: 0.333, b: 0.969 },   // #a855f7
  leverage: { r: 0.984, g: 0.749, b: 0.145 },   // #fbbf24
  swap: { r: 0.024, g: 0.714, b: 0.831 },       // #06b6d4
  portfolio: { r: 0.420, g: 0.447, b: 0.502 },  // #6b7280
  stake: { r: 0.925, g: 0.282, b: 0.600 },      // #ec4899
  modal: { r: 0.961, g: 0.620, b: 0.043 },      // #f59e0b
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 },
  darkBg: { r: 0.118, g: 0.118, b: 0.118 },     // #1e1e1e
};

// Layout configuration
const LAYOUT = {
  sectionWidth: 400,
  sectionHeight: 600,
  nodeWidth: 280,
  nodeHeight: 80,
  spacing: 40,
  startX: 100,
  startY: 100,
};

// Track created nodes for connections
const nodePositions = new Map();
let currentX = LAYOUT.startX;
let currentY = LAYOUT.startY;

// Figma API helper
async function figmaRequest(endpoint, method = 'GET', body = null) {
  const url = `https://api.figma.com/v1${endpoint}`;

  const options = {
    method,
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Figma API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Get the file to find the page/canvas ID
async function getFileInfo() {
  console.log('📄 Fetching file info...');
  const file = await figmaRequest(`/files/${FILE_ID}`);

  // Find the first page (canvas)
  const page = file.document.children[0];
  return { pageId: page.id, pageName: page.name };
}

// Create a sticky note
function createStickyNode(id, text, x, y, color, width = LAYOUT.nodeWidth, height = LAYOUT.nodeHeight) {
  nodePositions.set(id, { x: x + width / 2, y: y + height / 2 });

  return {
    type: 'STICKY',
    x,
    y,
    width,
    height,
    fills: [{ type: 'SOLID', color }],
    characters: text,
  };
}

// Create a section (frame with label)
function createSection(name, x, y, width, height, color) {
  return {
    type: 'SECTION',
    x,
    y,
    width,
    height,
    name,
    fills: [{ type: 'SOLID', color, opacity: 0.1 }],
    strokes: [{ type: 'SOLID', color }],
    strokeWeight: 2,
  };
}

// Create a shape node
function createShapeNode(id, text, x, y, color, width = LAYOUT.nodeWidth, height = LAYOUT.nodeHeight) {
  nodePositions.set(id, { x: x + width / 2, y: y + height / 2 });

  return {
    type: 'SHAPE_WITH_TEXT',
    shapeType: 'ROUNDED_RECTANGLE',
    x,
    y,
    width,
    height,
    fills: [{ type: 'SOLID', color }],
    strokes: [{ type: 'SOLID', color: COLORS.white, opacity: 0.3 }],
    strokeWeight: 1,
    cornerRadius: 8,
    text: {
      characters: text,
      style: {
        fontSize: 14,
        fontWeight: 600,
        textAlignHorizontal: 'CENTER',
        textAlignVertical: 'CENTER',
      },
      fills: [{ type: 'SOLID', color: COLORS.white }],
    },
  };
}

// Create a connector between two nodes
function createConnector(fromId, toId, label = '') {
  const from = nodePositions.get(fromId);
  const to = nodePositions.get(toId);

  if (!from || !to) {
    console.warn(`Cannot create connector: ${fromId} -> ${toId} (node not found)`);
    return null;
  }

  return {
    type: 'CONNECTOR',
    connectorStart: {
      position: { x: from.x, y: from.y },
    },
    connectorEnd: {
      position: { x: to.x, y: to.y },
    },
    connectorLineType: 'ELBOWED',
    strokes: [{ type: 'SOLID', color: COLORS.navigation }],
    strokeWeight: 2,
    connectorEndStrokeCap: 'ARROW_LINES',
  };
}

// Build all the nodes for the user journey
function buildNodes() {
  const nodes = [];
  let sectionX = LAYOUT.startX;
  let sectionY = LAYOUT.startY;

  // Title
  nodes.push({
    type: 'TEXT',
    x: sectionX,
    y: sectionY - 80,
    characters: 'Kamino.com - User Journey Map',
    style: {
      fontSize: 48,
      fontWeight: 700,
    },
    fills: [{ type: 'SOLID', color: COLORS.white }],
  });

  // Subtitle
  nodes.push({
    type: 'TEXT',
    x: sectionX,
    y: sectionY - 30,
    characters: 'Complete mapping of the Kamino 2.0 unified interface',
    style: {
      fontSize: 18,
    },
    fills: [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }],
  });

  sectionY += 60;

  // ============ NAVIGATION SECTION ============
  const navSection = data.sections.find(s => s.id === 'navigation');
  if (navSection) {
    nodes.push(createSection('Navigation', sectionX, sectionY, 1200, 120, COLORS.navigation));

    let navX = sectionX + 20;
    navSection.items.forEach((item, i) => {
      nodes.push(createShapeNode(
        item.id,
        `${item.label}\n${item.route}`,
        navX,
        sectionY + 20,
        COLORS.navigation,
        140,
        70
      ));
      navX += 150;
    });
    sectionY += 160;
  }

  // ============ MAIN PRODUCT SECTIONS ============
  const productSections = ['earn', 'borrow', 'liquidity', 'multiply', 'leverage', 'swap'];
  let productX = sectionX;

  productSections.forEach((sectionId, idx) => {
    const section = data.sections.find(s => s.id === sectionId);
    if (!section) return;

    const color = COLORS[sectionId] || COLORS.navigation;
    const sectionWidth = 380;
    const sectionHeight = 500;

    // Create section container
    nodes.push(createSection(
      section.name,
      productX,
      sectionY,
      sectionWidth,
      sectionHeight,
      color
    ));

    let nodeY = sectionY + 40;

    // Add pages
    if (section.pages) {
      section.pages.forEach(page => {
        nodes.push(createShapeNode(
          page.id,
          `${page.label}\n${page.route || ''}`,
          productX + 20,
          nodeY,
          color,
          sectionWidth - 40,
          60
        ));
        nodeY += 80;
      });
    }

    // Add strategies/vaults/pairs
    const items = section.namedVaults || section.strategies || section.lpPairs || section.positionTypes;
    if (items) {
      items.slice(0, 4).forEach(item => {
        nodes.push(createShapeNode(
          item.id,
          item.label,
          productX + 40,
          nodeY,
          { ...color, r: color.r * 0.7, g: color.g * 0.7, b: color.b * 0.7 },
          sectionWidth - 80,
          40
        ));
        nodeY += 50;
      });
    }

    // Add actions
    if (section.actions) {
      nodeY += 20;
      section.actions.slice(0, 3).forEach(action => {
        nodes.push(createShapeNode(
          action.id,
          `[${action.label}]`,
          productX + 60,
          nodeY,
          COLORS.modal,
          sectionWidth - 120,
          35
        ));
        nodeY += 45;
      });
    }

    productX += sectionWidth + 20;

    // New row after 3 sections
    if ((idx + 1) % 3 === 0) {
      productX = sectionX;
      sectionY += sectionHeight + 40;
    }
  });

  // ============ PORTFOLIO SECTION ============
  sectionY += 40;
  const portfolioSection = data.sections.find(s => s.id === 'portfolio');
  if (portfolioSection) {
    nodes.push(createSection('Portfolio', sectionX, sectionY, 800, 300, COLORS.portfolio));

    let nodeY = sectionY + 40;
    nodes.push(createShapeNode(
      'port-page',
      'My Portfolio\n/my-portfolio',
      sectionX + 20,
      nodeY,
      COLORS.portfolio,
      300,
      60
    ));

    // Position sections
    let posX = sectionX + 340;
    if (portfolioSection.positionSections) {
      portfolioSection.positionSections.forEach((pos, i) => {
        nodes.push(createShapeNode(
          pos.id,
          pos.label,
          posX,
          nodeY + (i * 50),
          { ...COLORS.portfolio, r: 0.3, g: 0.35, b: 0.4 },
          200,
          40
        ));
      });
    }
    sectionY += 340;
  }

  // ============ STAKE SECTION ============
  const stakeSection = data.sections.find(s => s.id === 'stake');
  if (stakeSection) {
    nodes.push(createSection('Stake & Governance', sectionX + 820, sectionY - 340, 400, 300, COLORS.stake));

    let nodeY = sectionY - 300;
    if (stakeSection.pages) {
      stakeSection.pages.forEach(page => {
        nodes.push(createShapeNode(
          page.id,
          `${page.label}\n${page.route}`,
          sectionX + 840,
          nodeY,
          COLORS.stake,
          360,
          50
        ));
        nodeY += 60;
      });
    }
  }

  // ============ MODALS SECTION ============
  const modalsSection = data.sections.find(s => s.id === 'modals');
  if (modalsSection) {
    nodes.push(createSection('Global Modals', sectionX, sectionY, 600, 200, COLORS.modal));

    let modalX = sectionX + 20;
    modalsSection.items.forEach(modal => {
      nodes.push(createShapeNode(
        modal.id,
        modal.label,
        modalX,
        sectionY + 40,
        COLORS.modal,
        180,
        50
      ));
      modalX += 190;
      if (modalX > sectionX + 400) {
        modalX = sectionX + 20;
      }
    });
    sectionY += 240;
  }

  // ============ USER JOURNEYS ============
  if (data.userJourneys) {
    nodes.push(createSection('User Journeys', sectionX, sectionY, 1400, 400, COLORS.earn));

    let journeyY = sectionY + 50;
    data.userJourneys.slice(0, 4).forEach(journey => {
      // Journey title
      nodes.push({
        type: 'TEXT',
        x: sectionX + 20,
        y: journeyY,
        characters: journey.name,
        style: {
          fontSize: 16,
          fontWeight: 700,
        },
        fills: [{ type: 'SOLID', color: COLORS.white }],
      });

      // Journey steps as connected sticky notes
      let stepX = sectionX + 20;
      journey.steps.slice(0, 8).forEach((step, i) => {
        const stepText = step.action || step.page || step.modal;
        nodes.push(createStickyNode(
          `${journey.id}-step-${i}`,
          `${i + 1}. ${stepText}`,
          stepX,
          journeyY + 25,
          COLORS.earn,
          160,
          50
        ));
        stepX += 170;
      });

      journeyY += 90;
    });
  }

  return nodes;
}

// Main execution
async function main() {
  console.log('🚀 Kamino.com FigJam Board Generator\n');

  try {
    // Get file info
    const { pageId } = await getFileInfo();
    console.log(`📋 Target page ID: ${pageId}\n`);

    // Build all nodes
    console.log('🔨 Building nodes...');
    const nodes = buildNodes();
    console.log(`   Created ${nodes.length} nodes\n`);

    // Unfortunately, the Figma REST API doesn't support creating nodes directly.
    // We need to use the Plugin API or Figma's POST endpoints for specific operations.

    // For now, let's output the structure that can be used with the Figma Plugin API
    console.log('⚠️  Note: The Figma REST API has limited write capabilities.');
    console.log('   This script will generate a JSON structure that can be used with:');
    console.log('   1. A Figma Plugin (recommended)');
    console.log('   2. The Figma Variables API (limited)\n');

    // Save the generated structure
    const outputPath = path.join(__dirname, 'figjam-nodes-generated.json');
    fs.writeFileSync(outputPath, JSON.stringify({
      fileId: FILE_ID,
      pageId,
      nodes,
      nodePositions: Object.fromEntries(nodePositions),
    }, null, 2));

    console.log(`✅ Generated node structure saved to: ${outputPath}`);
    console.log('\n📌 Next steps:');
    console.log('   1. Open FigJam and create a new plugin (Plugins → Development → New Plugin)');
    console.log('   2. Use the Plugin API to create nodes from the generated JSON');
    console.log('   3. Or use the included Figma plugin code below\n');

    // Generate plugin code
    const pluginCode = generateFigmaPluginCode(nodes);
    const pluginPath = path.join(__dirname, 'figma-plugin-code.js');
    fs.writeFileSync(pluginPath, pluginCode);
    console.log(`✅ Figma Plugin code saved to: ${pluginPath}`);
    console.log('\n🎨 To use the plugin:');
    console.log('   1. In FigJam: Plugins → Development → New Plugin → FigJam');
    console.log('   2. Replace the plugin code with the contents of figma-plugin-code.js');
    console.log('   3. Run the plugin');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Generate Figma Plugin code that can be run inside FigJam
function generateFigmaPluginCode(nodes) {
  return `// Kamino.com User Journey Map - FigJam Plugin
//
// Instructions:
// 1. In FigJam, go to: Plugins → Development → New Plugin → FigJam
// 2. Replace all code in code.js with this entire file
// 3. Run the plugin (Plugins → Development → Your Plugin Name)

// Color definitions (RGBA format)
const COLORS = {
  entry: { r: 0.059, g: 0.090, b: 0.165 },
  wallet: { r: 0.937, g: 0.267, b: 0.267 },
  navigation: { r: 0.231, g: 0.510, b: 0.965 },
  earn: { r: 0.063, g: 0.725, b: 0.506 },
  borrow: { r: 0.976, g: 0.451, b: 0.086 },
  liquidity: { r: 0.231, g: 0.510, b: 0.965 },
  multiply: { r: 0.659, g: 0.333, b: 0.969 },
  leverage: { r: 0.984, g: 0.749, b: 0.145 },
  swap: { r: 0.024, g: 0.714, b: 0.831 },
  portfolio: { r: 0.420, g: 0.447, b: 0.502 },
  stake: { r: 0.925, g: 0.282, b: 0.600 },
  modal: { r: 0.961, g: 0.620, b: 0.043 },
  white: { r: 1, g: 1, b: 1 },
  darkText: { r: 0.1, g: 0.1, b: 0.1 },
};

// Sticky note colors available in FigJam
const STICKY_COLORS = {
  yellow: { r: 1, g: 0.898, b: 0.227 },
  orange: { r: 1, g: 0.678, b: 0.314 },
  red: { r: 0.949, g: 0.384, b: 0.384 },
  pink: { r: 1, g: 0.608, b: 0.835 },
  purple: { r: 0.706, g: 0.565, b: 1 },
  blue: { r: 0.529, g: 0.773, b: 1 },
  teal: { r: 0.459, g: 0.867, b: 0.867 },
  green: { r: 0.596, g: 0.898, b: 0.557 },
  gray: { r: 0.8, g: 0.8, b: 0.8 },
};

// Map section colors to sticky colors
const SECTION_STICKY_MAP = {
  navigation: 'blue',
  earn: 'green',
  borrow: 'orange',
  liquidity: 'blue',
  multiply: 'purple',
  leverage: 'yellow',
  swap: 'teal',
  portfolio: 'gray',
  stake: 'pink',
  modal: 'orange',
};

async function createUserJourneyMap() {
  // Load fonts
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });

  const nodes = [];
  let currentY = 0;

  // ========== TITLE ==========
  const title = figma.createText();
  title.fontName = { family: "Inter", style: "Bold" };
  title.fontSize = 48;
  title.characters = "Kamino.com - User Journey Map";
  title.x = 0;
  title.y = currentY;
  nodes.push(title);
  currentY += 70;

  const subtitle = figma.createText();
  subtitle.fontName = { family: "Inter", style: "Regular" };
  subtitle.fontSize = 18;
  subtitle.characters = "Complete mapping of the Kamino 2.0 unified interface";
  subtitle.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  subtitle.x = 0;
  subtitle.y = currentY;
  nodes.push(subtitle);
  currentY += 60;

  // ========== NAVIGATION BAR ==========
  const navItems = [
    { label: "Earn", route: "/earn" },
    { label: "Borrow", route: "/borrow" },
    { label: "Liquidity", route: "/liquidity" },
    { label: "Multiply", route: "/multiply" },
    { label: "Leverage", route: "/leverage" },
    { label: "Swap", route: "/swap" },
    { label: "Portfolio", route: "/my-portfolio" },
    { label: "Stake", route: "/stake" },
  ];

  // Navigation section
  const navSection = figma.createSection();
  navSection.name = "Main Navigation";
  navSection.x = 0;
  navSection.y = currentY;
  navSection.resizeWithoutConstraints(1300, 120);
  nodes.push(navSection);

  let navX = 20;
  for (const item of navItems) {
    const sticky = figma.createSticky();
    sticky.text.characters = item.label + "\\n" + item.route;
    sticky.text.fontSize = 12;
    sticky.x = navX;
    sticky.y = currentY + 20;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.blue }];
    navSection.appendChild(sticky);
    navX += 160;
  }
  currentY += 160;

  // ========== PRODUCT SECTIONS ==========
  const sections = [
    {
      name: "Earn",
      color: "green",
      pages: [
        { label: "Earn Vaults", route: "/earn" },
        { label: "Vault Detail", route: "/lend/[name]" },
      ],
      items: ["USDC Prime", "Cash Earn", "Sentora PYUSD", "Allez USDC"],
      actions: ["Deposit", "Withdraw"],
    },
    {
      name: "Borrow",
      color: "orange",
      pages: [
        { label: "Borrow Page", route: "/borrow" },
      ],
      items: ["Select Collateral", "Select Debt Asset", "My Positions"],
      actions: ["Add Collateral", "Borrow", "Repay"],
    },
    {
      name: "Liquidity",
      color: "blue",
      pages: [
        { label: "LP Vaults", route: "/liquidity" },
        { label: "Vault Detail", route: "/liquidity/[addr]" },
      ],
      items: ["SOL-USDC", "JitoSOL-SOL", "JLP-JitoSOL", "KMNO-PYUSD"],
      actions: ["Deposit", "Withdraw"],
    },
    {
      name: "Multiply",
      color: "purple",
      pages: [
        { label: "Multiply Vaults", route: "/multiply" },
        { label: "Strategy Detail", route: "/multiply/[strat]" },
      ],
      items: ["JitoSOL (10x)", "mSOL", "JupSOL", "JLP"],
      actions: ["Open Position", "Adjust", "Close"],
    },
    {
      name: "Leverage",
      color: "yellow",
      pages: [
        { label: "Spot Leverage", route: "/leverage" },
        { label: "Trading Pair", route: "/leverage/main/[pair]" },
      ],
      items: ["Long", "Short", "1x-5x Leverage"],
      actions: ["Open Long", "Open Short", "Close"],
    },
    {
      name: "Swap",
      color: "teal",
      pages: [
        { label: "Swap", route: "/swap" },
      ],
      items: ["From Token", "To Token", "Route via Jupiter"],
      actions: ["Swap (Zero Fees)"],
    },
  ];

  let sectionX = 0;
  let sectionRowY = currentY;

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const sectionWidth = 400;
    const sectionHeight = 450;

    // Create section
    const section = figma.createSection();
    section.name = sec.name;
    section.x = sectionX;
    section.y = sectionRowY;
    section.resizeWithoutConstraints(sectionWidth, sectionHeight);
    nodes.push(section);

    let nodeY = 40;

    // Pages
    for (const page of sec.pages) {
      const sticky = figma.createSticky();
      sticky.text.characters = page.label + "\\n" + page.route;
      sticky.text.fontSize = 11;
      sticky.x = 20;
      sticky.y = nodeY;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS[sec.color] }];
      section.appendChild(sticky);
      nodeY += 80;
    }

    // Items
    for (const item of sec.items) {
      const sticky = figma.createSticky();
      sticky.text.characters = item;
      sticky.text.fontSize = 10;
      sticky.x = 40;
      sticky.y = nodeY;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.gray }];
      section.appendChild(sticky);
      nodeY += 50;
    }

    // Actions
    nodeY += 10;
    for (const action of sec.actions) {
      const sticky = figma.createSticky();
      sticky.text.characters = "[" + action + "]";
      sticky.text.fontSize = 10;
      sticky.x = 60;
      sticky.y = nodeY;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.orange }];
      section.appendChild(sticky);
      nodeY += 45;
    }

    sectionX += sectionWidth + 20;

    // New row after 3 sections
    if ((i + 1) % 3 === 0) {
      sectionX = 0;
      sectionRowY += sectionHeight + 40;
    }
  }

  currentY = sectionRowY + 500;

  // ========== PORTFOLIO SECTION ==========
  const portfolioSection = figma.createSection();
  portfolioSection.name = "Portfolio";
  portfolioSection.x = 0;
  portfolioSection.y = currentY;
  portfolioSection.resizeWithoutConstraints(1000, 250);
  nodes.push(portfolioSection);

  const portMain = figma.createSticky();
  portMain.text.characters = "My Portfolio\\n/my-portfolio\\n\\nTotal Value | 24h Change";
  portMain.text.fontSize = 11;
  portMain.x = 20;
  portMain.y = 40;
  portMain.fills = [{ type: 'SOLID', color: STICKY_COLORS.gray }];
  portfolioSection.appendChild(portMain);

  const portSections = ["Earn Positions", "Borrow Positions", "Liquidity Positions", "Multiply Positions", "Leverage Positions"];
  let portX = 300;
  for (const ps of portSections) {
    const sticky = figma.createSticky();
    sticky.text.characters = ps;
    sticky.text.fontSize = 10;
    sticky.x = portX;
    sticky.y = 40 + (portSections.indexOf(ps) % 3) * 60;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.gray }];
    portfolioSection.appendChild(sticky);
    if ((portSections.indexOf(ps) + 1) % 3 === 0) portX += 200;
  }

  currentY += 290;

  // ========== STAKE SECTION ==========
  const stakeSection = figma.createSection();
  stakeSection.name = "Stake & Governance";
  stakeSection.x = 1020;
  stakeSection.y = currentY - 290;
  stakeSection.resizeWithoutConstraints(400, 250);
  nodes.push(stakeSection);

  const stakePages = [
    { label: "KMNO Staking", route: "/stake" },
    { label: "Governance", route: "/governance-and-staking" },
    { label: "Airdrop Claims", route: "/season-3-airdrop" },
  ];
  let stakeY = 40;
  for (const page of stakePages) {
    const sticky = figma.createSticky();
    sticky.text.characters = page.label + "\\n" + page.route;
    sticky.text.fontSize = 11;
    sticky.x = 20;
    sticky.y = stakeY;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.pink }];
    stakeSection.appendChild(sticky);
    stakeY += 70;
  }

  // ========== MODALS SECTION ==========
  const modalsSection = figma.createSection();
  modalsSection.name = "Global Modals";
  modalsSection.x = 0;
  modalsSection.y = currentY;
  modalsSection.resizeWithoutConstraints(800, 150);
  nodes.push(modalsSection);

  const modals = ["Connect Wallet", "Tx Confirm", "Tx Pending", "Tx Success", "Tx Error"];
  let modalX = 20;
  for (const modal of modals) {
    const sticky = figma.createSticky();
    sticky.text.characters = modal;
    sticky.text.fontSize = 10;
    sticky.x = modalX;
    sticky.y = 40;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.orange }];
    modalsSection.appendChild(sticky);
    modalX += 155;
  }

  currentY += 190;

  // ========== USER JOURNEYS ==========
  const journeysSection = figma.createSection();
  journeysSection.name = "User Journeys";
  journeysSection.x = 0;
  journeysSection.y = currentY;
  journeysSection.resizeWithoutConstraints(1500, 500);
  nodes.push(journeysSection);

  const journeys = [
    {
      name: "1. First-Time User Earns Yield",
      steps: ["Home", "Browse Earn", "Select Vault", "Connect Wallet", "Enter Amount", "Confirm", "Success", "View Portfolio"],
    },
    {
      name: "2. Borrow Against Collateral",
      steps: ["/borrow", "Select Collateral", "Enter Amount", "Select Debt", "Review LTV", "Confirm", "Funds Received", "Monitor"],
    },
    {
      name: "3. Open Multiply Position",
      steps: ["/multiply", "Select Strategy", "Set Leverage", "Enter Deposit", "Review APY", "Confirm", "Position Open", "Monitor"],
    },
    {
      name: "4. Swap Tokens",
      steps: ["/swap", "Select From", "Enter Amount", "Select To", "Review Rate", "Confirm", "Swap Complete"],
    },
  ];

  let journeyY = 40;
  for (const journey of journeys) {
    // Journey title
    const titleText = figma.createText();
    titleText.fontName = { family: "Inter", style: "Semi Bold" };
    titleText.fontSize = 14;
    titleText.characters = journey.name;
    titleText.x = 20;
    titleText.y = journeyY;
    journeysSection.appendChild(titleText);

    // Steps
    let stepX = 20;
    for (let i = 0; i < journey.steps.length; i++) {
      const sticky = figma.createSticky();
      sticky.text.characters = (i + 1) + ". " + journey.steps[i];
      sticky.text.fontSize = 9;
      sticky.x = stepX;
      sticky.y = journeyY + 25;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.green }];
      journeysSection.appendChild(sticky);
      stepX += 150;

      // Add connector arrow (text-based since connectors are tricky)
      if (i < journey.steps.length - 1) {
        const arrow = figma.createText();
        arrow.fontName = { family: "Inter", style: "Regular" };
        arrow.fontSize = 16;
        arrow.characters = "→";
        arrow.x = stepX - 25;
        arrow.y = journeyY + 45;
        journeysSection.appendChild(arrow);
      }
    }

    journeyY += 100;
  }

  // ========== LEGEND ==========
  currentY += 540;

  const legendSection = figma.createSection();
  legendSection.name = "Color Legend";
  legendSection.x = 0;
  legendSection.y = currentY;
  legendSection.resizeWithoutConstraints(600, 200);
  nodes.push(legendSection);

  const legend = [
    { color: "green", label: "Earn" },
    { color: "orange", label: "Borrow / Modals" },
    { color: "blue", label: "Navigation / Liquidity" },
    { color: "purple", label: "Multiply" },
    { color: "yellow", label: "Leverage" },
    { color: "teal", label: "Swap" },
    { color: "gray", label: "Portfolio" },
    { color: "pink", label: "Stake / Governance" },
  ];

  let legendX = 20;
  let legendY = 40;
  for (const item of legend) {
    const sticky = figma.createSticky();
    sticky.text.characters = item.label;
    sticky.text.fontSize = 10;
    sticky.x = legendX;
    sticky.y = legendY;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS[item.color] }];
    legendSection.appendChild(sticky);
    legendX += 145;
    if (legendX > 500) {
      legendX = 20;
      legendY += 70;
    }
  }

  // Center view on the created content
  figma.viewport.scrollAndZoomIntoView(nodes);

  figma.closePlugin("✅ Kamino.com User Journey Map created!");
}

createUserJourneyMap();
`;
}

main();
