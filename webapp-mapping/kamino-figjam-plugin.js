// ============================================================
// KAMINO.COM USER JOURNEY MAP - FIGJAM PLUGIN
// ============================================================
//
// INSTRUCTIONS:
// 1. In FigJam: Plugins → Development → New plugin → FigJam
// 2. Open code.js in the plugin folder
// 3. Delete everything, paste this entire file
// 4. Save, then run: Plugins → Development → [Your Plugin Name]
//
// ============================================================

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

async function createKaminoJourneyMap() {
  // Load fonts
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });

  const allNodes = [];
  let currentY = 0;

  // ========================================
  // TITLE
  // ========================================
  const title = figma.createText();
  title.fontName = { family: "Inter", style: "Bold" };
  title.fontSize = 48;
  title.characters = "Kamino.com - User Journey Map";
  title.x = 0;
  title.y = currentY;
  allNodes.push(title);
  currentY += 70;

  const subtitle = figma.createText();
  subtitle.fontName = { family: "Inter", style: "Regular" };
  subtitle.fontSize = 18;
  subtitle.characters = "Complete mapping of the Kamino 2.0 unified interface | kamino.com";
  subtitle.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  subtitle.x = 0;
  subtitle.y = currentY;
  allNodes.push(subtitle);
  currentY += 80;

  // ========================================
  // NAVIGATION BAR
  // ========================================
  const navSection = figma.createSection();
  navSection.name = "🧭 Main Navigation";
  navSection.x = 0;
  navSection.y = currentY;
  navSection.resizeWithoutConstraints(1400, 140);
  allNodes.push(navSection);

  const navItems = [
    { label: "Earn", route: "/earn", desc: "Optimized lending vaults" },
    { label: "Borrow", route: "/borrow", desc: "Borrow against collateral" },
    { label: "Liquidity", route: "/liquidity", desc: "LP vault strategies" },
    { label: "Multiply", route: "/multiply", desc: "Leveraged yield" },
    { label: "Leverage", route: "/leverage", desc: "Spot leverage trading" },
    { label: "Swap", route: "/swap", desc: "Zero-fee token swaps" },
    { label: "Portfolio", route: "/my-portfolio", desc: "All positions" },
    { label: "Stake", route: "/stake", desc: "KMNO staking" },
  ];

  let navX = 20;
  for (const item of navItems) {
    const sticky = figma.createSticky();
    sticky.text.characters = `${item.label}\n${item.route}\n\n${item.desc}`;
    sticky.x = navX;
    sticky.y = 25;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.blue }];
    navSection.appendChild(sticky);
    navX += 170;
  }
  currentY += 180;

  // ========================================
  // PRODUCT SECTIONS
  // ========================================
  const sections = [
    {
      name: "💰 Earn",
      color: "green",
      pages: [
        { label: "Earn Vaults", route: "/earn", desc: "Browse all vaults" },
        { label: "Vault Detail", route: "/lend/[name]", desc: "Individual vault" },
      ],
      vaults: [
        "usdc-prime - USDC Prime (Kamino managed)",
        "cash-earn - Cash Earn",
        "sentora-pyusd - Sentora PYUSD",
        "allez-usdc - Allez USDC",
      ],
      actions: ["Deposit → Enter amount → Confirm", "Withdraw → Enter amount → Confirm"],
      metrics: ["APY", "TVL", "Interest Earned"],
    },
    {
      name: "🏦 Borrow",
      color: "orange",
      pages: [
        { label: "Borrow Page", route: "/borrow", desc: "Manage loans" },
      ],
      vaults: [
        "Select Collateral (SOL, JitoSOL, etc.)",
        "Select Debt Asset (USDC, USDT, etc.)",
        "Review LTV & Health Factor",
        "My Borrow Positions",
      ],
      actions: ["Add Collateral", "Borrow → Review LTV → Confirm", "Repay → Enter amount → Confirm"],
      metrics: ["LTV", "Health Factor", "Liquidation Price", "Borrow APY"],
    },
    {
      name: "💧 Liquidity",
      color: "blue",
      pages: [
        { label: "LP Vaults", route: "/liquidity", desc: "All LP vaults" },
        { label: "Vault Detail", route: "/liquidity/[addr]", desc: "Individual LP" },
      ],
      vaults: [
        "SOL-USDC (Orca Whirlpool)",
        "JitoSOL-SOL (Raydium CLMM)",
        "JLP-JitoSOL",
        "cbBTC-JitoSOL",
        "KMNO-PYUSD",
      ],
      actions: ["Deposit → Receive kTokens", "Withdraw → Get underlying assets"],
      metrics: ["APY", "TVL", "Fee Tier", "24h Volume"],
    },
    {
      name: "⚡ Multiply",
      color: "purple",
      pages: [
        { label: "Multiply Vaults", route: "/multiply", desc: "Leveraged yield" },
        { label: "Strategy Detail", route: "/multiply/[strat]", desc: "Manage position" },
      ],
      vaults: [
        "JitoSOL Multiply (up to 10x)",
        "mSOL Multiply (up to 10x)",
        "JupSOL Multiply (up to 10x)",
        "JLP Multiply (up to 5x)",
      ],
      actions: ["Open Position → Set leverage → Deposit", "Adjust Leverage → Move slider", "Close Position → Unwind"],
      metrics: ["Net APY", "Leverage", "LTV", "Liquidation Price"],
    },
    {
      name: "📈 Leverage",
      color: "yellow",
      pages: [
        { label: "Spot Leverage", route: "/leverage", desc: "Trading interface" },
        { label: "Trading Pair", route: "/leverage/main/SOL/USDC", desc: "Chart + order" },
      ],
      vaults: [
        "Long - Bullish (profit when ↑)",
        "Short - Bearish (profit when ↓)",
        "Leverage: 1x | 2x | 3x | 4x | 5x",
        "Price Chart (1H/4H/1D/1W)",
      ],
      actions: ["Open Long → Select leverage → Deposit", "Open Short → Select leverage → Deposit", "Close Position → Realize PnL"],
      metrics: ["Entry Price", "Current Price", "PnL", "Liquidation Price"],
    },
    {
      name: "🔄 Swap",
      color: "teal",
      pages: [
        { label: "Swap Interface", route: "/swap", desc: "Token exchange" },
      ],
      vaults: [
        "From Token selector + amount",
        "To Token selector + quote",
        "Best Route (via Jupiter)",
        "Price Impact display",
      ],
      actions: ["Swap → Select tokens → Enter amount → Confirm"],
      metrics: ["Rate", "Price Impact", "Route", "Fee: $0.00"],
    },
  ];

  let sectionX = 0;
  let sectionRowY = currentY;
  const sectionWidth = 450;
  const sectionHeight = 550;

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];

    // Create section container
    const section = figma.createSection();
    section.name = sec.name;
    section.x = sectionX;
    section.y = sectionRowY;
    section.resizeWithoutConstraints(sectionWidth, sectionHeight);
    allNodes.push(section);

    let nodeY = 40;

    // Pages subsection label
    const pagesLabel = figma.createText();
    pagesLabel.fontName = { family: "Inter", style: "Semi Bold" };
    pagesLabel.fontSize = 12;
    pagesLabel.characters = "PAGES";
    pagesLabel.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    pagesLabel.x = 15;
    pagesLabel.y = nodeY;
    section.appendChild(pagesLabel);
    nodeY += 20;

    // Pages
    for (const page of sec.pages) {
      const sticky = figma.createSticky();
      sticky.text.characters = `${page.label}\n${page.route}\n${page.desc}`;
      sticky.x = 15;
      sticky.y = nodeY;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS[sec.color] }];
      section.appendChild(sticky);
      nodeY += 85;
    }

    // Vaults/Items label
    nodeY += 10;
    const vaultsLabel = figma.createText();
    vaultsLabel.fontName = { family: "Inter", style: "Semi Bold" };
    vaultsLabel.fontSize = 12;
    vaultsLabel.characters = sec.name.includes("Borrow") ? "COMPONENTS" : sec.name.includes("Leverage") ? "FEATURES" : "VAULTS / ITEMS";
    vaultsLabel.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    vaultsLabel.x = 15;
    vaultsLabel.y = nodeY;
    section.appendChild(vaultsLabel);
    nodeY += 20;

    // Vaults/Items
    for (const vault of sec.vaults) {
      const sticky = figma.createSticky();
      sticky.text.characters = vault;
      sticky.x = 25;
      sticky.y = nodeY;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.gray }];
      section.appendChild(sticky);
      nodeY += 55;
    }

    // Actions label
    nodeY += 10;
    const actionsLabel = figma.createText();
    actionsLabel.fontName = { family: "Inter", style: "Semi Bold" };
    actionsLabel.fontSize = 12;
    actionsLabel.characters = "ACTIONS";
    actionsLabel.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    actionsLabel.x = 15;
    actionsLabel.y = nodeY;
    section.appendChild(actionsLabel);
    nodeY += 20;

    // Actions
    for (const action of sec.actions) {
      const sticky = figma.createSticky();
      sticky.text.characters = `[${action}]`;
      sticky.x = 25;
      sticky.y = nodeY;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.orange }];
      section.appendChild(sticky);
      nodeY += 50;
    }

    sectionX += sectionWidth + 20;

    // New row after 3 sections
    if ((i + 1) % 3 === 0) {
      sectionX = 0;
      sectionRowY += sectionHeight + 40;
    }
  }

  currentY = sectionRowY + sectionHeight + 60;

  // ========================================
  // PORTFOLIO SECTION
  // ========================================
  const portfolioSection = figma.createSection();
  portfolioSection.name = "📊 Portfolio";
  portfolioSection.x = 0;
  portfolioSection.y = currentY;
  portfolioSection.resizeWithoutConstraints(950, 280);
  allNodes.push(portfolioSection);

  // Main portfolio sticky
  const portMain = figma.createSticky();
  portMain.text.characters = "My Portfolio\n/my-portfolio\n\n• Total Portfolio Value\n• 24h Change\n• All positions in one view";
  portMain.x = 20;
  portMain.y = 40;
  portMain.fills = [{ type: 'SOLID', color: STICKY_COLORS.gray }];
  portfolioSection.appendChild(portMain);

  // Position sections
  const positionSections = [
    "Earn Positions\n• Deposited\n• Current value\n• Interest earned",
    "Borrow Positions\n• Collateral\n• Borrowed\n• Health Factor",
    "Liquidity Positions\n• kToken balance\n• Fees earned",
    "Multiply Positions\n• Leverage\n• Net APY\n• LTV",
    "Leverage Positions\n• Size\n• PnL\n• Liq. Price",
  ];

  let posX = 280;
  let posY = 40;
  for (let i = 0; i < positionSections.length; i++) {
    const sticky = figma.createSticky();
    sticky.text.characters = positionSections[i];
    sticky.x = posX;
    sticky.y = posY;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.gray }];
    portfolioSection.appendChild(sticky);
    posX += 220;
    if (posX > 800) {
      posX = 280;
      posY += 110;
    }
  }

  // ========================================
  // STAKE & GOVERNANCE SECTION
  // ========================================
  const stakeSection = figma.createSection();
  stakeSection.name = "🎯 Stake & Governance";
  stakeSection.x = 970;
  stakeSection.y = currentY;
  stakeSection.resizeWithoutConstraints(450, 280);
  allNodes.push(stakeSection);

  const stakePages = [
    { label: "KMNO Staking", route: "/stake", desc: "Stake for APY + boost" },
    { label: "Governance", route: "/governance-and-staking", desc: "Voting power" },
    { label: "Airdrop Claims", route: "/season-3-airdrop", desc: "Claim KMNO" },
  ];

  let stakeY = 40;
  for (const page of stakePages) {
    const sticky = figma.createSticky();
    sticky.text.characters = `${page.label}\n${page.route}\n${page.desc}`;
    sticky.x = 20;
    sticky.y = stakeY;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.pink }];
    stakeSection.appendChild(sticky);
    stakeY += 85;
  }

  currentY += 320;

  // ========================================
  // GLOBAL MODALS SECTION
  // ========================================
  const modalsSection = figma.createSection();
  modalsSection.name = "🔲 Global Modals";
  modalsSection.x = 0;
  modalsSection.y = currentY;
  modalsSection.resizeWithoutConstraints(1000, 150);
  allNodes.push(modalsSection);

  const modals = [
    "Connect Wallet\n• Phantom\n• Solflare\n• Backpack\n• Ledger",
    "Tx Confirm\n• Action summary\n• Fees\n• Confirm button",
    "Tx Pending\n• Loading spinner\n• Status text",
    "Tx Success\n• Success message\n• View on Solscan",
    "Tx Error\n• Error message\n• Retry button",
  ];

  let modalX = 20;
  for (const modal of modals) {
    const sticky = figma.createSticky();
    sticky.text.characters = modal;
    sticky.x = modalX;
    sticky.y = 35;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS.orange }];
    modalsSection.appendChild(sticky);
    modalX += 195;
  }

  currentY += 190;

  // ========================================
  // USER JOURNEYS SECTION
  // ========================================
  const journeysSection = figma.createSection();
  journeysSection.name = "🚀 User Journeys";
  journeysSection.x = 0;
  journeysSection.y = currentY;
  journeysSection.resizeWithoutConstraints(1600, 550);
  allNodes.push(journeysSection);

  const journeys = [
    {
      name: "Journey 1: First-Time User Earns Yield",
      color: "green",
      steps: ["Land on\nkamino.com", "Browse\n/earn", "Select\nvault", "Connect\nWallet", "Enter\namount", "Confirm\nin wallet", "Success!", "View in\nPortfolio"],
    },
    {
      name: "Journey 2: Borrow Against Collateral",
      color: "orange",
      steps: ["Go to\n/borrow", "Select\ncollateral", "Enter\namount", "Select\ndebt asset", "Review\nLTV", "Confirm", "Funds\nreceived", "Monitor\nposition"],
    },
    {
      name: "Journey 3: Open Multiply Position",
      color: "purple",
      steps: ["Go to\n/multiply", "Select\nstrategy", "Set\nleverage", "Enter\ndeposit", "Review\nNet APY", "Confirm", "Position\nopen", "Monitor"],
    },
    {
      name: "Journey 4: Long SOL with Leverage",
      color: "yellow",
      steps: ["Go to\n/leverage", "Select\nSOL/USDC", "Choose\nLong", "Set\n3x leverage", "Enter\nUSDC", "Confirm", "Monitor\nPnL", "Close"],
    },
    {
      name: "Journey 5: Swap Tokens",
      color: "teal",
      steps: ["Go to\n/swap", "Select\nFrom token", "Enter\namount", "Select\nTo token", "Review\nrate", "Confirm", "Swap\ncomplete!"],
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
      sticky.text.characters = `${i + 1}. ${journey.steps[i]}`;
      sticky.x = stepX;
      sticky.y = journeyY + 25;
      sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS[journey.color] }];
      journeysSection.appendChild(sticky);

      // Arrow between steps
      if (i < journey.steps.length - 1) {
        const arrow = figma.createText();
        arrow.fontName = { family: "Inter", style: "Bold" };
        arrow.fontSize = 20;
        arrow.characters = "→";
        arrow.x = stepX + 130;
        arrow.y = journeyY + 55;
        arrow.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
        journeysSection.appendChild(arrow);
      }

      stepX += 160;
    }

    journeyY += 100;
  }

  currentY += 590;

  // ========================================
  // LEGEND
  // ========================================
  const legendSection = figma.createSection();
  legendSection.name = "🎨 Color Legend";
  legendSection.x = 0;
  legendSection.y = currentY;
  legendSection.resizeWithoutConstraints(800, 180);
  allNodes.push(legendSection);

  const legend = [
    { color: "green", label: "Earn - Lending vaults" },
    { color: "orange", label: "Borrow / Actions / Modals" },
    { color: "blue", label: "Navigation / Liquidity" },
    { color: "purple", label: "Multiply - Leveraged yield" },
    { color: "yellow", label: "Leverage - Spot trading" },
    { color: "teal", label: "Swap - Token exchange" },
    { color: "gray", label: "Portfolio / Sub-items" },
    { color: "pink", label: "Stake / Governance" },
  ];

  let legendX = 20;
  let legendY = 35;
  for (let i = 0; i < legend.length; i++) {
    const item = legend[i];
    const sticky = figma.createSticky();
    sticky.text.characters = item.label;
    sticky.x = legendX;
    sticky.y = legendY;
    sticky.fills = [{ type: 'SOLID', color: STICKY_COLORS[item.color] }];
    legendSection.appendChild(sticky);
    legendX += 195;
    if (legendX > 700) {
      legendX = 20;
      legendY += 70;
    }
  }

  // ========================================
  // ZOOM TO FIT
  // ========================================
  figma.viewport.scrollAndZoomIntoView(allNodes);

  figma.closePlugin("✅ Kamino.com User Journey Map created successfully!");
}

// Run the plugin
createKaminoJourneyMap();
