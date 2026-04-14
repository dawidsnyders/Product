export type BorrowPair = {
  token: string
  symbol: string
  apy: number
  liquidityAvailable: number
  color: string
}

export type Strategy = {
  id: string
  asset: string
  symbol: string
  category: 'lst' | 'rwa' | 'stablecoin' | 'defi' | 'equity'
  maxLeverage: number
  totalSupplied: number
  boosted: boolean
  boostLabel?: string
  pairs: BorrowPair[]
  selectedPairIndex: number // smart-selected default
  color: string // token brand color for icon bg
}

export type Position = {
  id: string
  strategyId: string
  asset: string
  symbol: string
  value: number
  pnl: number
  pnlPercent: number
  leverage: number
  safetyLabel: 'Safe' | 'Watch' | 'At Risk'
  color: string
}

export type CategoryInfo = {
  id: string
  key: 'lst' | 'rwa' | 'stablecoin' | 'defi' | 'equity'
  title: string
  subtitle: string
  defaultVisible: number
}

export const categories: CategoryInfo[] = [
  {
    id: 'lst',
    key: 'lst',
    title: 'Leveraged Staking Yield',
    subtitle: 'Deposit SOL or any LST, earn amplified staking rewards.',
    defaultVisible: 3,
  },
  {
    id: 'rwa',
    key: 'rwa',
    title: 'Real-World Asset Yield',
    subtitle: 'Amplify yield from institutional-grade real-world assets.',
    defaultVisible: 3,
  },
  {
    id: 'stablecoin',
    key: 'stablecoin',
    title: 'Stablecoin Yield Loops',
    subtitle: 'Earn the rate spread between stablecoins with zero price risk.',
    defaultVisible: 3,
  },
  {
    id: 'defi',
    key: 'defi',
    title: 'DeFi Protocol Yield',
    subtitle: 'Amplify trading fees and protocol revenue.',
    defaultVisible: 3,
  },
  {
    id: 'equity',
    key: 'equity',
    title: 'Tokenized Equities',
    subtitle: 'Leveraged exposure to tokenized stocks.',
    defaultVisible: 2,
  },
]

export const strategies: Strategy[] = [
  // === LSTs ===
  {
    id: 'jitosol',
    asset: 'JitoSOL',
    symbol: 'JITOSOL',
    category: 'lst',
    maxLeverage: 10,
    totalSupplied: 162_400_000,
    boosted: true,
    boostLabel: '8,000 JTO/wk',
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 14.52, liquidityAvailable: 42_300_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#8BC53F',
  },
  {
    id: 'msol',
    asset: 'mSOL',
    symbol: 'MSOL',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 85_200_000,
    boosted: false,
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 11.23, liquidityAvailable: 28_100_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#6DCFB2',
  },
  {
    id: 'jupsol',
    asset: 'JupSOL',
    symbol: 'JUPSOL',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 47_800_000,
    boosted: false,
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 10.87, liquidityAvailable: 18_500_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#5FCCC9',
  },
  {
    id: 'bsol',
    asset: 'bSOL',
    symbol: 'BSOL',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 32_100_000,
    boosted: false,
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 10.45, liquidityAvailable: 14_200_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#00D1B2',
  },
  {
    id: 'dfdvsol',
    asset: 'dfdvSOL',
    symbol: 'DFDVSOL',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 12_500_000,
    boosted: true,
    boostLabel: 'Campaign',
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 12.10, liquidityAvailable: 8_300_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#E84142',
  },
  {
    id: 'picosol',
    asset: 'picoSOL',
    symbol: 'PICOSOL',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 5_200_000,
    boosted: false,
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 9.88, liquidityAvailable: 3_100_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#FF6B35',
  },
  {
    id: 'lanternsol',
    asset: 'lanternSOL',
    symbol: 'LANTERNSOL',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 3_800_000,
    boosted: false,
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 9.65, liquidityAvailable: 2_400_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#FFB800',
  },
  {
    id: 'inf',
    asset: 'INF',
    symbol: 'INF',
    category: 'lst',
    maxLeverage: 7.5,
    totalSupplied: 2_100_000,
    boosted: false,
    pairs: [
      { token: 'SOL', symbol: 'SOL', apy: 9.42, liquidityAvailable: 1_800_000, color: '#9945FF' },
    ],
    selectedPairIndex: 0,
    color: '#667EEA',
  },

  // === RWAs ===
  {
    id: 'prime',
    asset: 'PRIME',
    symbol: 'PRIME',
    category: 'rwa',
    maxLeverage: 8.3,
    totalSupplied: 184_800_000,
    boosted: true,
    boostLabel: 'Featured',
    pairs: [
      { token: 'USDC', symbol: 'USDC', apy: 18.47, liquidityAvailable: 12_800_000, color: '#2775CA' },
      { token: 'PYUSD', symbol: 'PYUSD', apy: 17.92, liquidityAvailable: 8_400_000, color: '#0070E0' },
      { token: 'CASH', symbol: 'CASH', apy: 16.85, liquidityAvailable: 4_200_000, color: '#00C48C' },
      { token: 'USDS', symbol: 'USDS', apy: 15.30, liquidityAvailable: 2_100_000, color: '#1BAA7A' },
    ],
    selectedPairIndex: 0,
    color: '#6366F1',
  },
  {
    id: 'syrupusdc',
    asset: 'SyrupUSDC',
    symbol: 'SYRUPUSDC',
    category: 'rwa',
    maxLeverage: 5,
    totalSupplied: 112_300_000,
    boosted: false,
    pairs: [
      { token: 'USDG', symbol: 'USDG', apy: 12.35, liquidityAvailable: 18_200_000, color: '#FF5722' },
      { token: 'USDS', symbol: 'USDS', apy: 11.80, liquidityAvailable: 9_400_000, color: '#1BAA7A' },
      { token: 'USDC', symbol: 'USDC', apy: 11.45, liquidityAvailable: 22_100_000, color: '#2775CA' },
      { token: 'CASH', symbol: 'CASH', apy: 10.92, liquidityAvailable: 5_600_000, color: '#00C48C' },
      { token: 'PYUSD', symbol: 'PYUSD', apy: 10.68, liquidityAvailable: 6_800_000, color: '#0070E0' },
    ],
    selectedPairIndex: 0,
    color: '#D97706',
  },
  {
    id: 'onyc',
    asset: 'ONyc',
    symbol: 'ONYC',
    category: 'rwa',
    maxLeverage: 4,
    totalSupplied: 28_500_000,
    boosted: false,
    pairs: [
      { token: 'USDC', symbol: 'USDC', apy: 9.82, liquidityAvailable: 6_100_000, color: '#2775CA' },
      { token: 'PYUSD', symbol: 'PYUSD', apy: 9.45, liquidityAvailable: 3_200_000, color: '#0070E0' },
    ],
    selectedPairIndex: 0,
    color: '#F472B6',
  },

  // === Stablecoins ===
  {
    id: 'cash-pyusd',
    asset: 'CASH',
    symbol: 'CASH',
    category: 'stablecoin',
    maxLeverage: 10,
    totalSupplied: 45_600_000,
    boosted: false,
    pairs: [
      { token: 'PYUSD', symbol: 'PYUSD', apy: 5.82, liquidityAvailable: 32_100_000, color: '#0070E0' },
    ],
    selectedPairIndex: 0,
    color: '#00C48C',
  },
  {
    id: 'usdc-pyusd',
    asset: 'USDC',
    symbol: 'USDC',
    category: 'stablecoin',
    maxLeverage: 10,
    totalSupplied: 22_800_000,
    boosted: false,
    pairs: [
      { token: 'PYUSD', symbol: 'PYUSD', apy: 4.15, liquidityAvailable: 18_400_000, color: '#0070E0' },
    ],
    selectedPairIndex: 0,
    color: '#2775CA',
  },

  // === DeFi Yield ===
  {
    id: 'jlp',
    asset: 'JLP',
    symbol: 'JLP',
    category: 'defi',
    maxLeverage: 3.2,
    totalSupplied: 98_400_000,
    boosted: false,
    pairs: [
      { token: 'USDC', symbol: 'USDC', apy: 42.15, liquidityAvailable: 14_600_000, color: '#2775CA' },
      { token: 'PYUSD', symbol: 'PYUSD', apy: 38.90, liquidityAvailable: 6_200_000, color: '#0070E0' },
    ],
    selectedPairIndex: 0,
    color: '#C7F284',
  },

  // === Equities ===
  {
    id: 'spyx',
    asset: 'SPYx',
    symbol: 'SPYX',
    category: 'equity',
    maxLeverage: 1.5,
    totalSupplied: 4_200_000,
    boosted: false,
    pairs: [
      { token: 'USDC', symbol: 'USDC', apy: -2.45, liquidityAvailable: 1_800_000, color: '#2775CA' },
    ],
    selectedPairIndex: 0,
    color: '#818CF8',
  },
  {
    id: 'tslax',
    asset: 'TSLAx',
    symbol: 'TSLAX',
    category: 'equity',
    maxLeverage: 1.5,
    totalSupplied: 2_800_000,
    boosted: false,
    pairs: [
      { token: 'USDC', symbol: 'USDC', apy: -6.48, liquidityAvailable: 1_200_000, color: '#2775CA' },
    ],
    selectedPairIndex: 0,
    color: '#E11D48',
  },
]

export const mockPositions: Position[] = [
  {
    id: 'pos-1',
    strategyId: 'prime',
    asset: 'PRIME',
    symbol: 'PRIME',
    value: 10_251.11,
    pnl: 3_451.18,
    pnlPercent: 18.47,
    leverage: 3.1,
    safetyLabel: 'Safe',
    color: '#6366F1',
  },
  {
    id: 'pos-2',
    strategyId: 'jitosol',
    asset: 'JitoSOL',
    symbol: 'JITOSOL',
    value: 24_800.00,
    pnl: 2_120.50,
    pnlPercent: 9.35,
    leverage: 5.0,
    safetyLabel: 'Safe',
    color: '#8BC53F',
  },
  {
    id: 'pos-3',
    strategyId: 'jlp',
    asset: 'JLP',
    symbol: 'JLP',
    value: 8_420.33,
    pnl: -312.45,
    pnlPercent: -3.58,
    leverage: 2.5,
    safetyLabel: 'Watch',
    color: '#C7F284',
  },
]

export const platformStats = {
  totalDeposits: 544_830_364,
  activeBorrows: 428_930_159,
  audits: 18,
  formallyVerified: true,
  zeroBadDebt: true,
}

export const recommendedStrategies = [
  {
    strategyId: 'jitosol',
    rationale: 'Best use of your idle SOL',
  },
  {
    strategyId: 'prime',
    rationale: 'Highest RWA yield available',
  },
  {
    strategyId: 'jlp',
    rationale: 'Top DeFi protocol yield',
  },
]

// Drawer educational content
export const drawerContent: Record<string, {
  title: string
  description: string
  howItWorks: string
  yieldSource: string
  risks: string[]
  protections: string[]
}> = {
  lst: {
    title: 'Leveraged Staking Yield',
    description: 'LST Multiply loops deposit a liquid staking token (like JitoSOL) as collateral, borrow SOL against it, swap the borrowed SOL back to the LST, and repeat — all in a single atomic transaction via flash loans.',
    howItWorks: 'Your LST earns staking yield while being used as collateral. The borrowed SOL is swapped back to the LST, amplifying your staking yield by your leverage multiplier. You profit from the spread between staking yield and the SOL borrow rate.',
    yieldSource: 'SOL staking rewards (MEV tips, block rewards, priority fees) amplified by leverage. Net APY = (Staking Yield × Leverage) − (Borrow Rate × (Leverage − 1)).',
    risks: [
      'Borrow rate risk: If SOL borrow rates rise above staking yield, Net APY turns negative',
      'Smart contract risk: Underlying staking protocol could have a vulnerability',
      'Rate volatility: High pool utilization can spike borrow costs temporarily',
    ],
    protections: [
      'Stake-rate oracle pricing: SOL price movements cannot trigger liquidation. The oracle tracks the theoretical stake rate, not the market price.',
      'LST depeg protection: Temporary market depegs of the LST cannot affect your position.',
      'Interest rate cap on the Jito Market limits rate spikes for high-leverage positions.',
      'Auto-deleverage: Last-resort mechanism with 72-hour warning. Never been triggered.',
    ],
  },
  rwa: {
    title: 'Real-World Asset Yield',
    description: 'RWA Multiply amplifies yield from tokenized real-world assets. Deposit an RWA token (like PRIME, backed by home equity loans), borrow a stablecoin against it, and use the borrowed stablecoin to acquire more of the RWA token.',
    howItWorks: 'Your RWA token earns yield from real-world sources (loan interest, institutional lending). The borrowed stablecoin is swapped back to the RWA token, amplifying your yield exposure.',
    yieldSource: 'Real-world interest payments (e.g., PRIME earns ~8% from licensed HELOC originators). Amplified by leverage.',
    risks: [
      'Borrow rate risk: If stablecoin borrow rates exceed RWA yield, Net APY turns negative',
      'RWA-specific risk: Default, redemption freeze, or regulatory changes affecting the underlying assets',
      'Liquidity risk: RWA tokens may have thinner on-chain liquidity than crypto-native assets',
    ],
    protections: [
      'Isolated lending markets: RWA strategies operate in dedicated markets, isolating risk from other Kamino products.',
      'Partial liquidation: Maximum 10% of position liquidated per event, with progressive penalty starting at ~0.1%.',
      'Curator oversight: Lending markets are curated by professional risk managers (Gauntlet, Sentora, etc.).',
    ],
  },
  stablecoin: {
    title: 'Stablecoin Yield Loops',
    description: 'Stablecoin loops capture the rate spread between two USD-pegged assets. Deposit one stablecoin, borrow another at a lower rate, and earn the difference — amplified by leverage.',
    howItWorks: 'Both sides of the position are USD-pegged, so there is zero price risk. You profit purely from the interest rate differential between the two stablecoins.',
    yieldSource: 'Interest rate spread between stablecoins. For example, if CASH earns 5% and PYUSD borrows at 3%, the 2% spread is amplified by leverage.',
    risks: [
      'Rate inversion: If the borrow rate exceeds the supply rate, Net APY turns negative',
      'Depeg risk: Extremely unlikely for major stablecoins, but a depeg of either asset would affect the position',
    ],
    protections: [
      'Zero price liquidation risk: Both assets are USD-pegged, so price movements cannot trigger liquidation.',
      'Rate monitoring: Kamino\'s poly-linear interest rate curves provide smoother rate progression.',
    ],
  },
  defi: {
    title: 'DeFi Protocol Yield',
    description: 'DeFi Yield Multiply amplifies returns from protocol yield tokens like JLP (Jupiter Liquidity Provider). Deposit the yield token as collateral, borrow a stablecoin, and swap it back to acquire more of the yield token.',
    howItWorks: 'JLP earns trading fees from Jupiter\'s perpetuals exchange. By leveraging your JLP position, you amplify your exposure to these trading fees.',
    yieldSource: 'Perpetuals trading fees, market-making yield, and liquidation fees from Jupiter\'s exchange. Amplified by leverage.',
    risks: [
      'Price risk: JLP tracks a basket of SOL, ETH, BTC, and stablecoins. A broad market decline reduces JLP value.',
      'Borrow rate risk: High stablecoin demand can increase borrow costs',
      'Liquidation risk: Standard liquidation applies — if JLP price drops below the liquidation threshold, your position will be partially liquidated',
    ],
    protections: [
      'Partial liquidation: Maximum 10% per event, limiting single-event losses.',
      'Conservative max leverage: ~3.2x (67% LTV) reflects the higher risk profile vs. correlated pairs.',
      'Auto-deleverage: Emergency mechanism available if needed (never triggered).',
    ],
  },
  equity: {
    title: 'Tokenized Equities',
    description: 'Equity Multiply provides leveraged exposure to tokenized stocks (SPYx, TSLAx, etc.) via Backed Finance\'s xStocks. Deposit the tokenized equity as collateral and borrow USDC against it.',
    howItWorks: 'Your tokenized equity position gives you exposure to the underlying stock price. Leverage amplifies both gains and losses from price movements.',
    yieldSource: 'Price appreciation of the underlying equity. There is no yield component — this is pure directional exposure.',
    risks: [
      'Full price risk: Underlying equity price declines directly reduce your collateral value',
      'Liquidation risk: Standard liquidation applies at LTV threshold',
      'Limited leverage: Max 1.5-2x, reflecting the directional risk',
      'Market hours: Underlying equity prices only update during market hours',
    ],
    protections: [
      'Conservative leverage caps: 1.5-2x maximum, significantly lower than other categories.',
      'Chainlink oracle feeds: Reliable, decentralized price data for underlying equities.',
    ],
  },
}
