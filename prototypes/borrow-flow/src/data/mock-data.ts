// Mock data for borrow pairs
export interface Token {
    symbol: string;
    name: string;
    icon: string;
}

export interface BorrowPair {
    id: string;
    collateral: Token;
    debt: Token;
    market: string;
    maxLTV: number;
    borrowAPY: number;
    borrowAPYFixed?: { min: number; max: number };
    hasFixedRates: boolean;
    availableLiquidity: number;
    incentiveAPR?: number;
    yourPosition?: {
        loanId: number;
        collateralAmount: number;
        debtAmount: number;
        currentLTV: number;
        healthFactor: number;
    }[];
}

export interface Market {
    id: string;
    name: string;
    tvl: number;
    pairCount: number;
    topAPY: number;
    status: 'active' | 'deprecated';
}

export interface FixedRateTerm {
    days: 30 | 60 | 90;
    rate: number;
    availableLiquidity: number;
    maxLiquidity: number;
}

// Token definitions
export const TOKENS: Record<string, Token> = {
    SOL: { symbol: 'SOL', name: 'Solana', icon: '◎' },
    USDC: { symbol: 'USDC', name: 'USD Coin', icon: '$' },
    USDT: { symbol: 'USDT', name: 'Tether', icon: '₮' },
    ETH: { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ' },
    BTC: { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
    JitoSOL: { symbol: 'JitoSOL', name: 'Jito Staked SOL', icon: '⚡' },
    mSOL: { symbol: 'mSOL', name: 'Marinade SOL', icon: '🌊' },
    BONK: { symbol: 'BONK', name: 'Bonk', icon: '🐕' },
};

// Market definitions
export const MARKETS: Market[] = [
    { id: 'main', name: 'Main Market', tvl: 245_000_000, pairCount: 12, topAPY: 8.5, status: 'active' },
    { id: 'jito', name: 'JitoSOL Vault', tvl: 89_000_000, pairCount: 6, topAPY: 12.3, status: 'active' },
    { id: 'altcoins', name: 'Altcoin Market', tvl: 34_000_000, pairCount: 8, topAPY: 15.2, status: 'active' },
    { id: 'stables', name: 'Stablecoin Market', tvl: 156_000_000, pairCount: 4, topAPY: 6.1, status: 'active' },
];

// Borrow pairs with mock data
export const BORROW_PAIRS: BorrowPair[] = [
    {
        id: 'sol-usdc-main',
        collateral: TOKENS.SOL,
        debt: TOKENS.USDC,
        market: 'Main Market',
        maxLTV: 80,
        borrowAPY: 5.23,
        borrowAPYFixed: { min: 5.0, max: 7.5 },
        hasFixedRates: true,
        availableLiquidity: 12_500_000,
        incentiveAPR: 2.1,
        yourPosition: [
            { loanId: 1, collateralAmount: 150, debtAmount: 8500, currentLTV: 62, healthFactor: 1.45 },
        ],
    },
    {
        id: 'eth-usdc-main',
        collateral: TOKENS.ETH,
        debt: TOKENS.USDC,
        market: 'Main Market',
        maxLTV: 82,
        borrowAPY: 4.89,
        borrowAPYFixed: { min: 4.5, max: 6.8 },
        hasFixedRates: true,
        availableLiquidity: 8_200_000,
        incentiveAPR: 1.8,
    },
    {
        id: 'btc-usdc-main',
        collateral: TOKENS.BTC,
        debt: TOKENS.USDC,
        market: 'Main Market',
        maxLTV: 75,
        borrowAPY: 4.12,
        hasFixedRates: false,
        availableLiquidity: 5_800_000,
    },
    {
        id: 'jitosol-usdc-jito',
        collateral: TOKENS.JitoSOL,
        debt: TOKENS.USDC,
        market: 'JitoSOL Vault',
        maxLTV: 85,
        borrowAPY: 6.45,
        borrowAPYFixed: { min: 6.0, max: 8.2 },
        hasFixedRates: true,
        availableLiquidity: 15_300_000,
        incentiveAPR: 4.5,
    },
    {
        id: 'msol-usdc-main',
        collateral: TOKENS.mSOL,
        debt: TOKENS.USDC,
        market: 'Main Market',
        maxLTV: 83,
        borrowAPY: 5.67,
        hasFixedRates: false,
        availableLiquidity: 7_100_000,
        incentiveAPR: 2.3,
    },
    {
        id: 'sol-usdt-main',
        collateral: TOKENS.SOL,
        debt: TOKENS.USDT,
        market: 'Main Market',
        maxLTV: 78,
        borrowAPY: 5.89,
        borrowAPYFixed: { min: 5.5, max: 7.8 },
        hasFixedRates: true,
        availableLiquidity: 4_500_000,
    },
    {
        id: 'bonk-usdc-altcoins',
        collateral: TOKENS.BONK,
        debt: TOKENS.USDC,
        market: 'Altcoin Market',
        maxLTV: 45,
        borrowAPY: 12.34,
        hasFixedRates: false,
        availableLiquidity: 890_000,
        incentiveAPR: 8.2,
    },
    {
        id: 'eth-usdt-main',
        collateral: TOKENS.ETH,
        debt: TOKENS.USDT,
        market: 'Main Market',
        maxLTV: 80,
        borrowAPY: 5.12,
        hasFixedRates: false,
        availableLiquidity: 3_200_000,
    },
];

// Fixed rate terms for a pair
export const getFixedRateTerms = (pairId: string): FixedRateTerm[] => {
    const pair = BORROW_PAIRS.find(p => p.id === pairId);
    if (!pair?.hasFixedRates) return [];

    return [
        { days: 30, rate: pair.borrowAPYFixed?.min ?? 5.0, availableLiquidity: pair.availableLiquidity * 0.4, maxLiquidity: pair.availableLiquidity * 0.5 },
        { days: 60, rate: (pair.borrowAPYFixed?.min ?? 5.0) + 0.5, availableLiquidity: pair.availableLiquidity * 0.35, maxLiquidity: pair.availableLiquidity * 0.5 },
        { days: 90, rate: pair.borrowAPYFixed?.max ?? 7.0, availableLiquidity: pair.availableLiquidity * 0.25, maxLiquidity: pair.availableLiquidity * 0.5 },
    ];
};

// Portfolio summary
export interface PortfolioSummary {
    totalSupplied: number;
    totalBorrowed: number;
    netAPY: number;
    healthFactor: number;
    positions: BorrowPair[];
}

export const getPortfolioSummary = (): PortfolioSummary => {
    const positionsWithLoans = BORROW_PAIRS.filter(p => p.yourPosition && p.yourPosition.length > 0);
    return {
        totalSupplied: 25_430,
        totalBorrowed: 8_500,
        netAPY: 3.2,
        healthFactor: 1.45,
        positions: positionsWithLoans,
    };
};
