# Kamino.com - Complete User Journey & Product Map

> **Note**: This maps **kamino.com** (the current unified Kamino 2.0 interface), NOT the legacy app.kamino.finance

## Overview

Kamino.com is the unified DeFi protocol interface on Solana, combining lending, borrowing, liquidity provision, leverage, and swaps into a single product.

---

## Site Architecture

### Primary Domain
- **kamino.com** - Main unified application (Kamino 2.0)

### Related Domains
- **docs.kamino.finance** - Documentation
- **gov.kamino.finance** - Governance forum
- **blog.kamino.finance** - Blog (Medium)
- **swap.kamino.com** - Swap subdomain

---

## Complete Route Map

```
kamino.com/
│
├── /                           # Home (defaults to Earn/Lend overview)
│
├── /earn                       # Earn Vaults Discovery
│   ├── /earn/lend              # Earn via lending strategies
│   └── /earn?search=[query]    # Search/filter vaults
│
├── /lend/[vault-name]          # Individual Lend Vaults
│   ├── /lend/usdc-prime        # USDC Prime vault
│   ├── /lend/cash-earn         # Cash Earn vault
│   ├── /lend/sentora-pyusd     # Sentora PYUSD vault
│   ├── /lend/allez-usdc        # Allez USDC vault
│   └── /lend/[other-vaults]    # Other named vaults
│
├── /borrow                     # Borrow interface
│
├── /liquidity                  # LP Vaults list
│   └── /liquidity/[address]    # Individual LP vault detail
│
├── /multiply                   # Multiply (leveraged yield) vaults
│
├── /leverage                   # Spot Leverage trading
│   └── /leverage/main/[pair]   # Trading pairs (e.g., SOL/USDC)
│
├── /swap                       # Token swap (zero fees)
│
├── /my-portfolio               # User portfolio dashboard
│
├── /stake                      # KMNO staking
├── /governance-and-staking     # Governance overview
│
├── /assets/[market]            # Assets by market
│   └── /assets/prime           # Prime market assets
│
├── /season-3-airdrop           # Airdrop claims
│
├── /security                   # Security information
│
└── /build                      # Developer documentation
    └── /build/api-reference/   # API docs
```

---

## Main Navigation Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                           HEADER                                     │
├─────────────────────────────────────────────────────────────────────┤
│ [Kamino Logo]                                                        │
│                                                                      │
│ Earn    Borrow    Liquidity    Multiply    Leverage    Swap         │
│                                                                      │
│                              [Portfolio] [Stake] [Connect Wallet]    │
└─────────────────────────────────────────────────────────────────────┘
```

### Navigation Items

| Nav Item | Route | Description |
|----------|-------|-------------|
| Earn | `/earn` | Earn yield via lending vaults |
| Borrow | `/borrow` | Borrow against collateral |
| Liquidity | `/liquidity` | Provide LP to DEXs |
| Multiply | `/multiply` | Leveraged yield vaults |
| Leverage | `/leverage` | Spot leverage trading |
| Swap | `/swap` | Zero-fee token swaps |
| Portfolio | `/my-portfolio` | User positions |
| Stake | `/stake` | KMNO staking |

---

## Detailed Page Structures

### EARN (`/earn`, `/earn/lend`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         EARN VAULTS                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  "Earn yield via optimized lending vaults managed by expert         │
│   onchain risk managers"                                            │
│                                                                      │
│  [Search vaults...] [Filter: All | USDC | SOL | Stables | ...]     │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ VAULT CARD                                                     │ │
│  │ ┌──────┐                                                       │ │
│  │ │ USDC │  USDC Prime                                          │ │
│  │ └──────┘  Managed by Kamino                                   │ │
│  │                                                                │ │
│  │  APY: XX.X%   │   TVL: $XXM   │   Strategy: Multi-market     │ │
│  │                                                                │ │
│  │                                          [Deposit]             │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ VAULT CARD                                                     │ │
│  │ Cash Earn                                                      │ │
│  │ APY: XX.X%   │   TVL: $XXM                                    │ │
│  │                                          [Deposit]             │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ VAULT CARD                                                     │ │
│  │ Allez USDC                                                     │ │
│  │ APY: XX.X%   │   TVL: $XXM                                    │ │
│  │                                          [Deposit]             │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ... more vault cards                                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Individual Lend Vault (`/lend/[vault-name]`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                      USDC PRIME VAULT                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ VAULT INFO                                                   │   │
│  │                                                              │   │
│  │ Asset: USDC                                                  │   │
│  │ Manager: Kamino                                              │   │
│  │ Strategy: Multi-market lending optimization                  │   │
│  │                                                              │   │
│  │ Current APY: XX.X%                                           │   │
│  │ 7-day Avg APY: XX.X%                                         │   │
│  │ TVL: $XX,XXX,XXX                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ DEPOSIT / WITHDRAW                                           │   │
│  │                                                              │   │
│  │ [Deposit] [Withdraw]                                         │   │
│  │                                                              │   │
│  │ Amount: [_______________] USDC                               │   │
│  │ Wallet Balance: X,XXX USDC                                   │   │
│  │                                                              │   │
│  │ [25%] [50%] [75%] [MAX]                                      │   │
│  │                                                              │   │
│  │ You will receive: ~X,XXX kUSDC                               │   │
│  │                                                              │   │
│  │              [Deposit USDC]                                  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ PERFORMANCE CHART                                            │   │
│  │ [APY over time graph]                                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ YOUR POSITION (if connected)                                 │   │
│  │ Deposited: X,XXX USDC                                        │   │
│  │ Current Value: $X,XXX.XX                                     │   │
│  │ Interest Earned: $XX.XX                                      │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### BORROW (`/borrow`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                           BORROW                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  "Securely borrow against your crypto collateral with diverse       │
│   markets, deep liquidity, and flexible rates"                      │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ SELECT COLLATERAL                                            │   │
│  │                                                              │   │
│  │ Your Assets:                                                 │   │
│  │ • SOL: XX.XX ($X,XXX)                                        │   │
│  │ • JitoSOL: XX.XX ($X,XXX)                                    │   │
│  │ • USDC: X,XXX ($X,XXX)                                       │   │
│  │                                                              │   │
│  │ Select collateral: [SOL ▼]                                   │   │
│  │ Amount: [_______________]                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ SELECT BORROW ASSET                                          │   │
│  │                                                              │   │
│  │ Asset: [USDC ▼]                                              │   │
│  │ Borrow APY: X.XX%                                            │   │
│  │ Available: $XX,XXX,XXX                                       │   │
│  │                                                              │   │
│  │ Borrow Amount: [_______________]                             │   │
│  │ Max Borrow: $X,XXX (based on collateral)                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ POSITION PREVIEW                                             │   │
│  │                                                              │   │
│  │ Collateral Value: $X,XXX                                     │   │
│  │ Borrow Amount: $X,XXX                                        │   │
│  │ LTV: XX%                                                     │   │
│  │ Liquidation Price: $XX.XX                                    │   │
│  │ Health Factor: X.XX                                          │   │
│  │                                                              │   │
│  │              [Borrow USDC]                                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ MY BORROW POSITIONS                                          │   │
│  │                                                              │   │
│  │ Position 1:                                                  │   │
│  │ Collateral: 10 SOL ($X,XXX)                                  │   │
│  │ Borrowed: 500 USDC                                           │   │
│  │ LTV: XX%  │  Health: X.XX                                    │   │
│  │                          [Repay] [Add Collateral]            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### LIQUIDITY (`/liquidity`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LIQUIDITY VAULTS                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  "Earn trading fees by providing liquidity. Kamino manages          │
│   trading ranges, rebalancing, and auto-compounding."               │
│                                                                      │
│  [Search...] [Filter: All | SOL | JitoSOL | USDC | JLP | ...]      │
│  [Sort: APY | TVL | Volume]                                         │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ LP VAULT                                                       │ │
│  │ ┌────┬────┐                                                    │ │
│  │ │SOL │USDC│  SOL-USDC                                         │ │
│  │ └────┴────┘  Orca Whirlpool                                   │ │
│  │                                                                │ │
│  │  APY: XX.X%  │  TVL: $XXM  │  24h Volume: $XXM                │ │
│  │  Fee Tier: 0.3%                                               │ │
│  │                                            [Deposit]           │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ LP VAULT                                                       │ │
│  │ JitoSOL-SOL                                                    │ │
│  │ Raydium CLMM                                                   │ │
│  │                                                                │ │
│  │  APY: XX.X%  │  TVL: $XXM                                     │ │
│  │                                            [Deposit]           │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ LP VAULT                                                       │ │
│  │ JLP-JitoSOL                                                    │ │
│  │  APY: XX.X%  │  TVL: $XXM                                     │ │
│  │                                            [Deposit]           │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ LP VAULT                                                       │ │
│  │ KMNO-PYUSD                                                     │ │
│  │  APY: XX.X%  │  TVL: $XXM                                     │ │
│  │                                            [Deposit]           │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### MULTIPLY (`/multiply`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        MULTIPLY VAULTS                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  "Multiply your yield or directional exposure via automated         │
│   one-click leverage vaults"                                        │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ MULTIPLY STRATEGY                                              │ │
│  │                                                                │ │
│  │ JitoSOL Multiply                                               │ │
│  │ Leverage your JitoSOL yield up to 10x                         │ │
│  │                                                                │ │
│  │ Base APY: 7.2%                                                 │ │
│  │                                                                │ │
│  │ Leverage: [━━━━━●━━━━━━━━] 3x                                 │ │
│  │           1x              10x                                  │ │
│  │                                                                │ │
│  │ Net APY at 3x: ~21.6%                                          │ │
│  │ Borrow Cost: -X.X%                                             │ │
│  │                                                                │ │
│  │ Deposit: [___________] JitoSOL                                 │ │
│  │                                                                │ │
│  │ Position Preview:                                              │ │
│  │ • Total Exposure: $XX,XXX                                      │ │
│  │ • LTV: XX%                                                     │ │
│  │ • Liquidation Price: $XX.XX                                    │ │
│  │                                                                │ │
│  │                    [Open Position]                             │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  Available Strategies:                                               │
│  • JitoSOL Multiply (up to 10x)                                     │
│  • mSOL Multiply                                                     │
│  • JupSOL Multiply                                                   │
│  • JLP Multiply                                                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### LEVERAGE (`/leverage`, `/leverage/main/[pair]`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        SPOT LEVERAGE                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Trading Pair: [SOL ▼] / [USDC ▼]                                   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ PRICE CHART                                                  │   │
│  │ SOL/USDC                                                     │   │
│  │ Current: $XXX.XX                                             │   │
│  │ 24h Change: +X.XX%                                           │   │
│  │                                                              │   │
│  │ [Chart visualization]                                        │   │
│  │                                                              │   │
│  │ [1H] [4H] [1D] [1W] [1M]                                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌────────────────────┬────────────────────┐                       │
│  │      LONG          │      SHORT         │                       │
│  ├────────────────────┴────────────────────┤                       │
│  │                                          │                       │
│  │ Direction: [● LONG] [○ SHORT]            │                       │
│  │                                          │                       │
│  │ Leverage: [1x] [2x] [3x] [4x] [5x]       │                       │
│  │                                          │                       │
│  │ Collateral: [___________] USDC           │                       │
│  │                                          │                       │
│  │ Position Size: $XX,XXX (at 3x)           │                       │
│  │ Entry Price: $XXX.XX                     │                       │
│  │ Liquidation Price: $XX.XX                │                       │
│  │                                          │                       │
│  │           [Open Long Position]           │                       │
│  └──────────────────────────────────────────┘                       │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ OPEN POSITIONS                                               │   │
│  │                                                              │   │
│  │ SOL Long 3x                                                  │   │
│  │ Size: $X,XXX  │  Entry: $XXX.XX  │  PnL: +$XX.XX (+X.X%)    │   │
│  │                              [Close] [Adjust]                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### SWAP (`/swap`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                           SWAP                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  "Trade any token on Solana with zero fees. Best execution          │
│   across 10+ aggregators and routes."                               │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  From:                                                       │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │ [SOL ▼]                              [___________]   │   │   │
│  │  │ Balance: XX.XX SOL                                   │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                                                              │   │
│  │                        [⇅ Switch]                            │   │
│  │                                                              │   │
│  │  To:                                                         │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │ [USDC ▼]                             ~X,XXX.XX       │   │   │
│  │  │ Balance: X,XXX.XX USDC                               │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                                                              │   │
│  │  Rate: 1 SOL = XXX.XX USDC                                   │   │
│  │  Price Impact: <0.01%                                        │   │
│  │  Route: SOL → USDC (via Jupiter)                             │   │
│  │  Fee: $0.00                                                  │   │
│  │                                                              │   │
│  │                    [Swap]                                    │   │
│  │                                                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ RECENT SWAPS                                                 │   │
│  │ • 10 SOL → 2,450 USDC (2 min ago)                           │   │
│  │ • 1,000 USDC → 4.1 SOL (1 hour ago)                         │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### PORTFOLIO (`/my-portfolio`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        MY PORTFOLIO                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Total Portfolio Value: $XX,XXX.XX                                  │
│  24h Change: +$XXX.XX (+X.X%)                                       │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ EARN POSITIONS                                               │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ USDC Prime Vault                                             │   │
│  │ Deposited: 5,000 USDC  │  Current: $5,045.23                │   │
│  │ APY: 8.2%  │  Interest Earned: $45.23                        │   │
│  │                                    [Withdraw]                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ BORROW POSITIONS                                             │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ Position 1:                                                  │   │
│  │ Collateral: 10 SOL ($2,450)                                  │   │
│  │ Borrowed: 1,000 USDC @ 5.2% APY                              │   │
│  │ LTV: 40%  │  Health: 2.5 (Safe)                              │   │
│  │                            [Repay] [Add Collateral]          │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ LIQUIDITY POSITIONS                                          │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ SOL-USDC LP                                                  │   │
│  │ Value: $1,234.56  │  kToken Balance: 123.45                 │   │
│  │ Fees Earned: $23.45  │  APY: 15.2%                          │   │
│  │                                    [Manage]                  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ MULTIPLY POSITIONS                                           │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ JitoSOL Multiply (3x)                                        │   │
│  │ Value: $5,000  │  Net APY: 21.6%                            │   │
│  │ LTV: 65%  │  Liq. Price: $180.00                            │   │
│  │                              [Adjust] [Close]                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ LEVERAGE POSITIONS                                           │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ SOL Long 3x                                                  │   │
│  │ Size: $3,000  │  Entry: $245.00  │  Current: $248.50        │   │
│  │ PnL: +$43.50 (+1.4%)  │  Liq: $190.00                       │   │
│  │                              [Adjust] [Close]                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### STAKE (`/stake`, `/governance-and-staking`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        KMNO STAKING                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ YOUR STAKING                                                 │   │
│  │                                                              │   │
│  │ Staked KMNO: X,XXX                                           │   │
│  │ Staking APY: X.X%                                            │   │
│  │ Rewards Earned: XXX KMNO                                     │   │
│  │                                                              │   │
│  │ Points Boost: 1.5x                                           │   │
│  │ (Based on stake duration)                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ STAKE / UNSTAKE                                              │   │
│  │                                                              │   │
│  │ [Stake] [Unstake]                                            │   │
│  │                                                              │   │
│  │ Amount: [_______________] KMNO                               │   │
│  │ Wallet Balance: X,XXX KMNO                                   │   │
│  │                                                              │   │
│  │              [Stake KMNO]                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ GOVERNANCE                                                   │   │
│  │                                                              │   │
│  │ Your Voting Power: X,XXX votes                               │   │
│  │                                                              │   │
│  │ Active Proposals: X                                          │   │
│  │ [View Governance Forum →]                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

### AIRDROP / REWARDS (`/season-3-airdrop`)

```
┌─────────────────────────────────────────────────────────────────────┐
│                     KMNO SEASON 3 AIRDROP                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ YOUR ALLOCATION                                              │   │
│  │                                                              │   │
│  │ Season 3 KMNO: X,XXX                                         │   │
│  │                                                              │   │
│  │ Vesting: 90 days (linear)                                    │   │
│  │ Claimable Now: X,XXX KMNO                                    │   │
│  │ Remaining: X,XXX KMNO                                        │   │
│  │                                                              │   │
│  │              [Claim Available]                               │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ SEASON HISTORY                                               │   │
│  │                                                              │   │
│  │ Season 1: X,XXX KMNO (claimed)                               │   │
│  │ Season 2: X,XXX KMNO (claimed)                               │   │
│  │ Season 3: X,XXX KMNO (vesting)                               │   │
│  │ Season 4: Active                                             │   │
│  │ Season 5: Active                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Global Components

### Wallet Connection Modal

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Connect Wallet                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────┐  ┌────────────────────┐                    │
│  │   [Phantom Logo]   │  │   [Solflare Logo]  │                    │
│  │      Phantom       │  │      Solflare      │                    │
│  │     (Detected)     │  │                    │                    │
│  └────────────────────┘  └────────────────────┘                    │
│                                                                      │
│  ┌────────────────────┐  ┌────────────────────┐                    │
│  │   [Backpack Logo]  │  │    [Ledger Logo]   │                    │
│  │      Backpack      │  │       Ledger       │                    │
│  └────────────────────┘  └────────────────────┘                    │
│                                                                      │
│  ┌────────────────────────────────────────────┐                    │
│  │            More wallets...                  │                    │
│  └────────────────────────────────────────────┘                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Transaction Flow Modals

```
Confirm → Pending → Success/Error

┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Confirm in       │ →  │ Transaction      │ →  │ Success!         │
│ Wallet           │    │ Pending...       │    │                  │
│                  │    │ [Spinner]        │    │ [View on Solscan]│
│ Action: Deposit  │    │                  │    │ [Close]          │
│ Amount: 100 USDC │    │ Confirming...    │    │                  │
│                  │    │                  │    │                  │
│ [Cancel]         │    │                  │    │                  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

---

## User State Differences

### Disconnected User
- Can browse all pages
- See APYs, TVL, rates
- Cannot interact with any position actions
- Sees "Connect Wallet" buttons on all action areas

### Connected User
- Full access to all features
- Can deposit, withdraw, borrow, repay
- Sees portfolio with positions
- Can claim rewards and stake

---

## Key User Journeys

### Journey 1: First-Time User → Earn Yield

```
kamino.com (Home)
    ↓
Browse Earn Vaults
    ↓
Click "USDC Prime" vault
    ↓
/lend/usdc-prime
    ↓
Click "Connect Wallet"
    ↓
Select Phantom → Approve
    ↓
Enter deposit amount
    ↓
Click "Deposit USDC"
    ↓
Confirm in wallet
    ↓
Success → View in /my-portfolio
```

### Journey 2: Borrow Against Collateral

```
/borrow
    ↓
Select collateral asset (SOL)
    ↓
Enter collateral amount
    ↓
Select borrow asset (USDC)
    ↓
Enter borrow amount
    ↓
Review LTV & liquidation price
    ↓
Click "Borrow USDC"
    ↓
Confirm in wallet
    ↓
Funds received → Monitor in /my-portfolio
```

### Journey 3: Open Multiply Position

```
/multiply
    ↓
Select strategy (JitoSOL Multiply)
    ↓
Set leverage slider (3x)
    ↓
Enter deposit amount
    ↓
Review position preview
    ↓
Click "Open Position"
    ↓
Confirm in wallet
    ↓
Position opened → Monitor in /my-portfolio
```

### Journey 4: Swap Tokens

```
/swap
    ↓
Select "From" token (SOL)
    ↓
Enter amount
    ↓
Select "To" token (USDC)
    ↓
Review rate and route
    ↓
Click "Swap"
    ↓
Confirm in wallet
    ↓
Swap complete
```

### Journey 5: Stake KMNO

```
/stake
    ↓
Enter stake amount
    ↓
Click "Stake KMNO"
    ↓
Confirm in wallet
    ↓
KMNO staked → Earning boost
    ↓
View governance power
```

---

## Assets Supported

### Lend/Borrow Markets
- **SOL** - Native Solana
- **USDC** - USD Coin
- **USDT** - Tether
- **PYUSD** - PayPal USD
- **JitoSOL** - Jito Staked SOL
- **mSOL** - Marinade Staked SOL
- **JupSOL** - Jupiter Staked SOL
- **JLP** - Jupiter LP Token
- **cbBTC** - Coinbase Wrapped Bitcoin
- **HONEY**
- **KMNO** - Kamino token

### Liquidity Pairs
- SOL-USDC
- JitoSOL-SOL
- JLP-JitoSOL
- cbBTC-JitoSOL
- HONEY-JitoSOL
- KMNO-PYUSD
- And many more...

---

## Key Metrics Displayed

| Metric | Where Shown |
|--------|-------------|
| APY | Earn vaults, Liquidity, Multiply |
| TVL | All vault lists |
| Borrow APY | Borrow page |
| LTV | Borrow positions |
| Health Factor | Borrow positions |
| Liquidation Price | Leverage, Multiply, Borrow |
| Net APY | Multiply positions |
| Price Impact | Swap |
| kToken Balance | Liquidity positions |
| Staking Boost | Stake page |

---

## kamino.com vs app.kamino.finance

| Feature | kamino.com (Current) | app.kamino.finance (Legacy) |
|---------|---------------------|---------------------------|
| Earn Vaults | `/earn`, `/lend/[name]` | `/lending` |
| Leverage | `/leverage` (separate) | Part of Long/Short |
| Swap | `/swap` (integrated) | Not available |
| Vault URLs | Named (`/lend/usdc-prime`) | Address-based |
| UI | Kamino 2.0 (unified) | Older interface |
| Points | Integrated | `/points` separate |

