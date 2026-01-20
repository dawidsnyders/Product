# Kamino Finance - Complete User Journey & Product Map

## Overview
Kamino Finance is a comprehensive DeFi protocol on Solana offering lending, borrowing, liquidity provision, and leverage products.

---

## App Architecture

### Primary Domains
- **kamino.com** - Marketing/Landing site
- **app.kamino.finance** - Main application
- **v2.kamino.finance** - V2 application
- **v1.kamino.finance** - Legacy V1 application
- **docs.kamino.finance** - Documentation portal
- **gov.kamino.finance** - Governance forum
- **blog.kamino.finance** - Blog (Medium)

---

## Main Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER NAV                                │
├─────────────────────────────────────────────────────────────────┤
│  [Logo]  Lending  Liquidity  Multiply  Long/Short  Portfolio    │
│                                          [Points] [Connect Wallet]│
└─────────────────────────────────────────────────────────────────┘
```

### Primary Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home/Lending | Default landing - K-Lend markets overview |
| `/lending` | Lending Markets | Supply & borrow assets |
| `/liquidity` | Liquidity Vaults | Automated LP strategies |
| `/multiply` | Multiply Vaults | Leveraged yield farming |
| `/long-short` | Long/Short Vaults | Leveraged directional bets |
| `/portfolio` | My Portfolio | All user positions dashboard |
| `/points` | Points/Rewards | KMNO points & seasons |

---

## User States

### 1. Disconnected User (No Wallet)
- Can browse all markets and rates
- Can view TVL, APYs, vault performance
- Cannot interact with positions
- Sees "Connect Wallet" CTA prominently

### 2. Connected User (Wallet Connected)
- Full access to all features
- Can supply, borrow, deposit, withdraw
- Sees personalized portfolio
- Access to position management

---

## Detailed Page Flows

### LENDING (`/lending`)

```
┌────────────────────────────────────────────────────────────────┐
│                    LENDING MARKETS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Market Overview                                          │   │
│  │ • Total Supply: $XXX    • Total Borrowed: $XXX          │   │
│  │ • Utilization: XX%                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ SUPPLY MARKETS                                           │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ Asset    │ Supply APY │ Total Supply │ Wallet │ Action  │   │
│  │ SOL      │ X.XX%      │ $XXX         │ X.XX   │ [Supply]│   │
│  │ USDC     │ X.XX%      │ $XXX         │ X.XX   │ [Supply]│   │
│  │ JitoSOL  │ X.XX%      │ $XXX         │ X.XX   │ [Supply]│   │
│  │ JLP      │ X.XX%      │ $XXX         │ X.XX   │ [Supply]│   │
│  │ ...more assets                                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ BORROW MARKETS                                           │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ Asset    │ Borrow APY │ Available   │ Action            │   │
│  │ SOL      │ X.XX%      │ $XXX        │ [Borrow]          │   │
│  │ USDC     │ X.XX%      │ $XXX        │ [Borrow]          │   │
│  │ ...                                                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ MY POSITION (if connected)                               │   │
│  │ • Supplied: $XXX        • Borrowed: $XXX                │   │
│  │ • LTV: XX%              • Liquidation at: $XXX          │   │
│  │ [Manage Position]                                        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

#### Lending Modals/Actions:
- **Supply Modal**: Select asset → Enter amount → Confirm supply
- **Withdraw Modal**: Select asset → Enter amount → Confirm withdraw
- **Borrow Modal**: Select asset → Enter amount → Review LTV → Confirm
- **Repay Modal**: Select asset → Enter amount → Confirm repay
- **Repay with Collateral**: One-click debt repayment using collateral

#### Position Modes:
- **Cross Mode** (default): Multiple collateral & debt assets
- **Isolated Mode**: Single collateral, single debt
- **E-Mode**: Enhanced LTV for correlated assets (e.g., SOL/JitoSOL)

---

### LIQUIDITY (`/liquidity`)

```
┌────────────────────────────────────────────────────────────────┐
│                    LIQUIDITY VAULTS                             │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Filter: All | Stables | SOL | mSOL | USDC | ...]             │
│  [Sort: TVL | APY | Volume]                                     │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ VAULT CARD                                               │   │
│  │ ┌─────┐                                                  │   │
│  │ │ SOL │ SOL-USDC                                        │   │
│  │ │USDC │ Orca Whirlpool                                  │   │
│  │ └─────┘                                                  │   │
│  │ APY: XX.X%  │  TVL: $XXM  │  24h Vol: $XXM              │   │
│  │                                         [Deposit]        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ VAULT CARD                                               │   │
│  │ JitoSOL-SOL                                              │   │
│  │ Raydium CLMM                                             │   │
│  │ APY: XX.X%  │  TVL: $XXM                                │   │
│  │                                         [Deposit]        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ... more vault cards                                           │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

#### Vault Detail Page (`/liquidity/[vault-address]`):
- Performance charts
- Historical APY
- Fee breakdown
- Deposit/Withdraw interface
- kToken balance display

#### Liquidity Actions:
- **Deposit**: Enter amount → Receive kTokens → Auto-compound
- **Withdraw**: Enter amount/percentage → Receive underlying assets
- **Use as Collateral**: Deposit kTokens into K-Lend

---

### MULTIPLY (`/multiply`)

```
┌────────────────────────────────────────────────────────────────┐
│                    MULTIPLY VAULTS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  "Boost your SOL yields up to 10x"                              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ MULTIPLY VAULT                                           │   │
│  │                                                          │   │
│  │ JitoSOL Multiply                                         │   │
│  │ Deposit JitoSOL → Borrow SOL → Loop for leverage        │   │
│  │                                                          │   │
│  │ Base APY: 7.2%                                           │   │
│  │ ┌──────────────────────────────────────────┐            │   │
│  │ │ Multiplier: [━━━━━━━●━━━] 3.5x           │            │   │
│  │ └──────────────────────────────────────────┘            │   │
│  │ Net APY at 3.5x: ~25.2%                                  │   │
│  │ Liquidation Price: $XX.XX                                │   │
│  │                                                          │   │
│  │ Deposit Amount: [________] JitoSOL                       │   │
│  │                                                          │   │
│  │            [Open Position]                               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  Available Multiply Strategies:                                  │
│  • JitoSOL Multiply (SOL LSTs)                                  │
│  • mSOL Multiply                                                 │
│  • JupSOL Multiply                                               │
│  • JLP Multiply (Jupiter LP)                                     │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

#### Multiply Position Management:
- **Adjust Leverage**: Slider to increase/decrease multiplier
- **Add to Position**: Deposit more collateral
- **Withdraw**: Partial withdrawal (maintains leverage)
- **Close Position**: Full unwind back to single asset

#### Multiply Detail Routes:
- `/multiply/[strategy-address]` - Individual vault page

---

### LONG/SHORT (`/long-short`)

```
┌────────────────────────────────────────────────────────────────┐
│                    LONG/SHORT VAULTS                            │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  "Leverage your directional exposure"                           │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ LONG SOL                                                 │   │
│  │                                                          │   │
│  │ Go long on SOL with up to 5x leverage                   │   │
│  │                                                          │   │
│  │ Current SOL Price: $XXX.XX                               │   │
│  │ Leverage: [1x] [2x] [3x] [4x] [5x]                       │   │
│  │                                                          │   │
│  │ Deposit: [________] USDC                                 │   │
│  │ Position Size: $XXXX (at 3x)                             │   │
│  │ Liquidation Price: $XX.XX                                │   │
│  │                                                          │   │
│  │            [Open Long]                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ SHORT SOL                                                │   │
│  │                                                          │   │
│  │ Go short on SOL with up to 5x leverage                  │   │
│  │                                                          │   │
│  │ [Similar interface...]                                   │   │
│  │            [Open Short]                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

### PORTFOLIO (`/portfolio` or `/my-portfolio`)

```
┌────────────────────────────────────────────────────────────────┐
│                    MY PORTFOLIO                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Total Portfolio Value: $XX,XXX.XX                              │
│  Total PnL: +$X,XXX.XX (+XX.X%)                                 │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ LENDING POSITIONS                                        │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ Supplied                                                 │   │
│  │ • 100 SOL ($XX,XXX) earning X.X% APY                    │   │
│  │ • 5,000 USDC ($5,000) earning X.X% APY                  │   │
│  │                                                          │   │
│  │ Borrowed                                                 │   │
│  │ • 2,000 USDC paying X.X% APY                            │   │
│  │                                                          │   │
│  │ Health Factor: 2.5 (Safe)  │  LTV: 40%                  │   │
│  │                                    [Manage]              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ LIQUIDITY POSITIONS                                      │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ • SOL-USDC Vault: $X,XXX (XX.X kTokens)                 │   │
│  │   APY: XX.X%  │  Fees Earned: $XXX                      │   │
│  │                                    [Manage]              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ MULTIPLY POSITIONS                                       │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ • JitoSOL Multiply (3.5x)                               │   │
│  │   Value: $XX,XXX  │  Net APY: XX.X%                     │   │
│  │   LTV: XX%  │  Liq. Price: $XX.XX                       │   │
│  │                          [Adjust] [Close]                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ LONG/SHORT POSITIONS                                     │   │
│  │ (Similar structure)                                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

### POINTS/REWARDS (`/points`)

```
┌────────────────────────────────────────────────────────────────┐
│                    KAMINO POINTS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Season 5 Active                                                │
│                                                                  │
│  Your Points: XXX,XXX                                           │
│  Estimated KMNO: X,XXX                                          │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ POINTS BREAKDOWN                                         │   │
│  │                                                          │   │
│  │ Lending:      XXX pts/day                                │   │
│  │ Liquidity:    XXX pts/day                                │   │
│  │ Multiply:     XXX pts/day                                │   │
│  │ Staking:      XXX pts/day (boost)                        │   │
│  │                                                          │   │
│  │ Total Daily:  X,XXX pts/day                              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ KMNO STAKING                                             │   │
│  │                                                          │   │
│  │ Staked: X,XXX KMNO                                       │   │
│  │ Boost: 1.5x on all points                                │   │
│  │                                                          │   │
│  │ [Stake More]  [Unstake]                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ CLAIM REWARDS                                            │   │
│  │                                                          │   │
│  │ Season 4 Rewards: X,XXX KMNO                             │   │
│  │ Vesting: 6 months (XX% claimable now)                   │   │
│  │                                                          │   │
│  │ [Claim Now] (forfeit XX%)  [Wait for Full Amount]       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

## Global Components

### Header
```
┌────────────────────────────────────────────────────────────────┐
│ [Kamino Logo]                                                   │
│                                                                  │
│ Lending | Liquidity | Multiply | Long/Short | Portfolio         │
│                                                                  │
│                              [Points: XXX] [Wallet: 0x...abc]   │
│                              [Settings ⚙️]                       │
└────────────────────────────────────────────────────────────────┘
```

### Wallet Connection Modal
```
┌────────────────────────────────────────────────────────────────┐
│                    Connect Wallet                               │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │ [Phantom Logo]   │  │ [Solflare Logo]  │                    │
│  │ Phantom          │  │ Solflare         │                    │
│  └──────────────────┘  └──────────────────┘                    │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │ [Backpack Logo]  │  │ [Ledger Logo]    │                    │
│  │ Backpack         │  │ Ledger           │                    │
│  └──────────────────┘  └──────────────────┘                    │
│                                                                  │
│  ┌──────────────────┐                                          │
│  │ [Other wallets...│                                          │
│  └──────────────────┘                                          │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

### Transaction Confirmation Modal
```
┌────────────────────────────────────────────────────────────────┐
│                    Confirm Transaction                          │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Action: Supply 10 SOL                                          │
│                                                                  │
│  You will receive: ~10 kSOL                                     │
│  Estimated APY: X.XX%                                           │
│                                                                  │
│  Network Fee: ~0.00001 SOL                                      │
│  Platform Fee: 0%                                               │
│                                                                  │
│           [Cancel]        [Confirm in Wallet]                   │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

### Risk Simulator (Loan Dashboard)
```
┌────────────────────────────────────────────────────────────────┐
│                    RISK SIMULATOR                               │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Current Position:                                              │
│  Collateral: $XX,XXX  │  Debt: $X,XXX  │  LTV: XX%            │
│                                                                  │
│  Simulate Price Change:                                         │
│  SOL: [━━━━━━●━━━━━━] -20% to +20%                             │
│                                                                  │
│  At -15% SOL price:                                             │
│  • New LTV: XX%                                                 │
│  • Liquidation Risk: MEDIUM                                     │
│  • Portfolio Value: $XX,XXX                                     │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

## User Journey Flows

### Flow 1: New User → First Deposit
```
Landing Page → Connect Wallet → Select Phantom → Approve Connection
    → Browse Lending Markets → Click "Supply" on SOL
    → Enter Amount → Confirm in Wallet → Success!
    → View in Portfolio
```

### Flow 2: Open Multiply Position
```
Connect Wallet → Navigate to Multiply → Select JitoSOL Multiply
    → Set Leverage (e.g., 3x) → Enter Deposit Amount
    → Review Position (Net APY, Liquidation Price)
    → Click "Open Position" → Confirm in Wallet
    → Monitor in Portfolio
```

### Flow 3: Provide Liquidity
```
Navigate to Liquidity → Browse Vaults → Select SOL-USDC
    → Click "Deposit" → Enter Amount → Choose Single/Dual-sided
    → Confirm → Receive kTokens
    → (Optional) Use kTokens as Collateral in Lending
```

### Flow 4: Leverage Loop (Long SOL)
```
Navigate to Long/Short → Select "Long SOL"
    → Choose Leverage (e.g., 3x) → Deposit USDC
    → Review Position → Confirm
    → Monitor Price & Liquidation Level
    → Adjust or Close when desired
```

### Flow 5: Claim Rewards
```
Navigate to Points → View Accumulated Points
    → Check Season Status → View Claimable KMNO
    → Choose: Claim Now (with penalty) or Wait
    → Stake KMNO for Boost → Confirm
```

---

## Complete Route Map

```
app.kamino.finance/
├── /                          # Home (redirects to /lending)
├── /lending                   # K-Lend markets
│   └── /lending/[market]      # Individual market detail
├── /liquidity                 # Liquidity vaults list
│   └── /liquidity/[vault]     # Individual vault detail
├── /multiply                  # Multiply vaults list
│   └── /multiply/[strategy]   # Individual multiply vault
├── /long-short                # Long/Short vaults
│   └── /long-short/[strategy] # Individual L/S vault
├── /portfolio                 # User portfolio dashboard
│   └── /my-portfolio          # Alternative route
├── /points                    # Points & rewards
│   └── /points/seasons        # Season history
├── /staking                   # KMNO staking
└── /loan-dashboard            # Advanced position management
```

---

## Assets Supported

### Lending Markets
- **SOL** - Native Solana
- **USDC** - USD Coin
- **USDT** - Tether
- **JitoSOL** - Jito Staked SOL
- **mSOL** - Marinade Staked SOL
- **JupSOL** - Jupiter Staked SOL
- **JLP** - Jupiter LP Token
- **PYUSD** - PayPal USD
- **And many more...**

### Liquidity Vaults (DEX Integrations)
- **Orca Whirlpools** - Concentrated liquidity
- **Raydium CLMM** - Concentrated liquidity
- **Meteora** - Dynamic pools

---

## Key Metrics Displayed

| Metric | Where Shown |
|--------|-------------|
| Supply APY | Lending markets |
| Borrow APY | Lending markets |
| Net APY | Multiply, Long/Short |
| TVL | All vaults |
| LTV (Loan-to-Value) | Lending positions |
| Liquidation Price | Leveraged positions |
| Health Factor | Lending positions |
| Points/Day | Points dashboard |
| kToken Balance | Liquidity positions |

---

## FigJam Implementation Notes

When recreating in FigJam, use:
- **Rectangles** for pages/screens
- **Arrows** for navigation flows
- **Color coding**:
  - Blue: Lending
  - Green: Liquidity
  - Purple: Multiply
  - Orange: Long/Short
  - Gray: Portfolio/Global
- **Sticky notes** for key features on each page
- **Connectors** showing user flow between pages

