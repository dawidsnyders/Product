# Kamino Multiply — UX Revamp Context Document

> Compiled April 2026. Four-stream research: Twitter marketing analysis, documentation deep-dive, landing page UX audit, vault page UX audit.

---

## 1. What Kamino Multiply Is

Kamino Multiply is a **one-click leveraged yield product** on Solana. It automates the "looping" process — depositing a yield-bearing asset as collateral, borrowing the underlying asset, swapping back, and repeating — all atomically via flash loans in a single transaction.

### Strategy Categories

| Category | Example Pairs | Max Leverage | Risk Profile |
|----------|--------------|-------------|-------------|
| **SOL LST Loops** | JitoSOL/SOL, mSOL/SOL, JupSOL/SOL | 10x (Jito Market), 7.5x (Main) | Borrow rate risk only — zero SOL price risk, zero depeg risk |
| **JLP Multiply** | JLP/USDC, JLP/PYUSD | ~3.2x | Directional price risk + borrow rate risk |
| **RWA Loops** | PRIME/USDC, PRIME/PYUSD, SyrupUSDC | Up to 8.3x | Borrow rate > RWA yield risk, default/freeze risk |
| **Stable Loops** | CASH/PYUSD, USDC/PYUSD | Up to 10x | Rate spread inversion only |
| **xStocks** | TSLAx, SPYx, QQQx | 1.5-2x | Underlying equity decline + borrow rate |
| **kToken Multiply** | kJitoSOL-SOL | Varies | Dual yield (staking + market-making), amplified |

### Net APY Formula

```
Net APY = (Collateral Yield × Leverage) − (Borrow Rate × (Leverage − 1))
```

Positive spread = gains amplify. Negative spread = losses amplify.

### Key Safety Features

- **Stake-rate oracle pricing** for LSTs — temporary market depegs cannot trigger liquidations
- **Auto-deleverage** — last-resort mechanism, 72-hour warning, never been triggered
- **Partial liquidation** — 10% close factor per event, progressive penalty starting at ~0.1%
- **Zero liquidation record** on SOL LST Multiply positions (ever)
- **Zero bad debt** across two major market crashes ($16M and $19.4M collateral seized)

### Fee Structure

| Fee | Amount |
|-----|--------|
| Flash loan | 0.001% per transaction (open/adjust/close) |
| Interest rate spread | 11-20% (protocol revenue from borrow rates, varies by market) |
| Unwinding | None |
| Liquidation penalty | ~0.1% per event (scaling 2-10%) |

---

## 2. Product Evolution (Past 12 Months)

| Date | Update |
|------|--------|
| Apr 2025 | SOL Multiply leverage raised from 5x to 7.5x; JLP/USDG launched |
| May 2025 | Kamino Lend V2 goes live — modular markets, Earn vaults, auto-unstake |
| May 2025 | 10x Multiply via Jito Market (eMode, 90% LTV) |
| Jun 2025 | dfdvSOL onboarded; rstSOL/bbSOL vaults; Season 4 launched |
| Jul 2025 | Multiply Liquidation Analysis Suite launched |
| Jul 2025 | xStocks Market — tokenized equities as Multiply collateral |
| Sep 2025 | SyrupUSDC Multiply crosses $100M TVL |
| Nov 2025 | Season 5 — 100M KMNO rewards, first borrow incentives |
| Dec 2025 | "The Next Chapter" rebrand — six new products announced |
| Feb 2026 | PYUSD integrated into PRIME Market; Stable Loops launched |
| Feb 2026 | Multiply Backtesting feature launched |
| Mar 2026 | Anchorage Digital partnership — institutional off-chain collateral |

### V2 Features Needing UI Surfaces

- **Auto-unstake** — close SOL Multiply positions by unstaking directly from the pool
- **Target Leverage** — automatic deleveraging to maintain target LTV
- **Stop Loss / Take Profit** — automation for fully closing positions at predetermined prices
- **Multiply Backtesting** — historical APY testing
- **Liquidation Analysis Suite** — scenario simulation tool

---

## 3. Marketing Voice & Positioning

**Tone:** Confident, data-driven, educational. Threads are 4-8 posts: announcement → mechanics → example yields → risk profile → CTA.

**Core narrative pillars:**
1. **Safety** — "A SOL Multiply position has NEVER been liquidated on Kamino" (all caps, stated as unqualified fact)
2. **Simplicity** — "one-click" is the most repeated phrase in all Multiply communications
3. **Yield amplification** — specific APY numbers in every announcement
4. **Institutional quality** — 18 audits, formal verification, zero bad debt

**Recurring phrases:** "one-click," "in a single click," "leveraged yield," "boost your exposure," "powered by Kamino Lend," "extremely risk-averse product"

**Partnership-forward:** Every vault launch co-marketed with the partner (Jito, Maple, Figure, PayPal/PYUSD, Backed/xStocks, Chainlink, Anchorage).

---

## 4. Landing Page UX Audit

### Current Page Structure

```
Nav Bar (Swap | Lend | Borrow | Multiply | Liquidity | Portfolio | More) + Trust Badges
↓
Promotional Banner Carousel (3 rotating cards: OnRe, xStocks, PRIME)
↓
"Multiply" heading + "Leverage your exposure in a single click" + "How it works" (broken)
↓
Summary Stats: $544.8M Total Deposits | $428.9M Active Borrows
↓
3 Featured Loop Cards (eUSX, ONyc, PRIME)
↓
Filter Tabs: All Loops (+23) | SOL Loops (+1) | RWA Loops | Stable Loops (New) | Perps LP
↓
Strategy Table (62 strategies, 7 columns)
↓
Footer
```

### Critical Issues

**1. Negative APY strategies are visually identical to positive ones**
Ten strategies show negative returns (TSLAx at -6.48%, SPYx at -14.27%, cbBTC at -14.86%). Same visual treatment as 100%+ APY strategies. No color differentiation, no warning icons. Several show vague "<0%" with no magnitude.

**2. Only Max Leverage APY is shown**
Users see yield at maximum leverage only. No visibility into what they'd earn at their preferred risk level without clicking into each strategy individually. Misleading by default.

**3. 62 strategies in a flat list = decision paralysis**
No intelligent grouping beyond the filter tabs. No default sort by quality/relevance. No recommendations. Many strategies have trivially small TVL ($1.95, $85.82) cluttering the list.

**4. "How it works" is a broken element**
The primary educational CTA is a `<div>` with `cursor-pointer` CSS but no `href`, no `role="button"`, no `tabindex`. Completely inaccessible and non-functional.

**5. Promotional content creates noise**
Carousel + featured cards + table = three competing entry points presenting strategy recommendations in different formats. ~350-400px of viewport before any strategy data appears.

**6. Column naming is ambiguous**
"Liq Available" could mean liquidity or liquidation. "Supplied" is unclear (TVL? user's supply?). "Max Leverage APY" hides the variable nature of returns.

**7. No risk indicators on the listing page**
No Health Factor, no liquidation risk level, no risk rating system. Users choose leverage strategies with zero risk visibility.

### What Works Well

- Clean dark aesthetic with IBM Plex Sans — professional, trustworthy
- Trust signals prominent ("Formally Verified", "18 Audits" in nav)
- Category taxonomy is logical (SOL/RWA/Stable/Perps LP)
- Supply/borrow pair format is intuitive for experienced users
- Summary stats demonstrate platform scale
- All columns sortable

### Accessibility Issues

- Empty `aria-label` attributes on interactive elements
- Table rows use JS click handlers instead of `<a>` tags — not keyboard accessible
- No `aria-sort` on sortable columns
- Color-only encoding of negative values

---

## 5. Vault Page UX Audit (Active Position)

### Current Page Structure

```
Vault Header: Name, asset pair, vault address
↓
Tab Bar: [Overview] [My Position]
↓
Overview Tab (DEFAULT — simulation/projected earnings)
│ └── Position simulation, historical yield, estimated net earnings
↓
My Position Tab (must click to see actual position)
│ └── Collateral/debt breakdown, Net APY, LTV, leverage, liq. parameters
↓
Action Panel (right side)
│ ├── Deposit input + amount
│ ├── Leverage slider
│ ├── Withdraw / Close buttons
│ └── Manage dropdown → Loan Dashboard (buried)
```

### Critical Issues

**1. No realized PnL display**
The single most important data point for position holders is completely absent. Users must manually calculate profit/loss. Only projected/estimated earnings are shown.

**2. Overview tab defaults for active positions**
When you have a live leveraged position, the page defaults to the simulation/projection tab instead of your actual position data. The tab priority should invert once a position exists.

**3. No automation or alerts**
Stop-loss, take-profit, and auto-deleverage at LTV thresholds all exist in the codebase but lack frontend integration. Users with leveraged positions have no configurable protection.

**4. Disconnect between risk visibility and actionability**
LTV metrics in one area, action panel on the right side, Loan Dashboard buried in a dropdown. During time-sensitive situations (approaching liquidation), this friction is dangerous.

**5. No transaction history**
Users can't see how they've managed this specific position over time — what actions were taken, when adjustments occurred.

**6. No before/after preview for leverage adjustment**
When adjusting leverage, no side-by-side comparison of current vs. projected LTV, liquidation price, and Net APY.

**7. Liquidation price not in asset terms**
"x% from liquidation" is less intuitive than "Your position liquidates if [asset] drops to $X." Users think in price terms, not LTV percentage terms.

**8. No historical Net APY chart**
Only current Net APY is shown. No visualization of how it varied over the position's lifetime.

### Missing vs. Best-in-Class (DeFi Saver Comparison)

| Feature | DeFi Saver | Kamino Multiply |
|---------|-----------|----------------|
| Inline actions (see risk → act) | Yes | No (separate panel) |
| Automation (6 types) | Yes | No frontend integration |
| Combined transactions | Yes | No |
| One-click close | Yes (all products) | Yes (Multiply only) |
| Post-creation automation upsell | Yes | No |
| Visual ratio bar for automation | Yes | No |
| Risk visualization depth | Basic | Superior (scenario analysis, stress testing) |

### What Works Well

- **One-click close** — flash-loan-powered atomic unwinding
- **Net APY as single metric** — right abstraction, users don't want to do math
- **Auto-deleverage safety net** — genuine competitive advantage
- **Deposit/withdraw doesn't affect leverage** — explicitly communicated, prevents errors
- **Deep analytics on Loan Dashboard** — scenario analysis and stress testing competitors lack
- **LST depeg oracle protection** — major risk vector solved (but poorly communicated in UI)

### Key Metrics Assessment

| Metric | Status | Issue |
|--------|--------|-------|
| Net APY | Shown prominently | Good |
| Leverage ratio | Shown as multiplier | No visual indicator of where on spectrum |
| LTV | Percentage shown | Relationship to liquidation unclear |
| Liquidation proximity | "x% from liquidation" | Ambiguous — price drop or LTV remaining? |
| Position value | In underlying asset | No USD equivalent toggle |
| Realized PnL | Missing entirely | Critical gap |
| Entry price/params | Missing | Can't compare opening vs. current state |
| Historical Net APY | Missing | No performance trend visibility |

---

## 6. Cross-Cutting Themes

### The Three Biggest Problems

**A. The "see risk → take action → automate protection" pipeline is incomplete.**
Kamino has the best "see risk" layer in DeFi (scenario analysis, stress testing, liquidation suite). But "take action" has too much friction (separate panels, buried Loan Dashboard), and "automate protection" has zero frontend integration despite backend capabilities existing.

**B. The product has outgrown the UI.**
62 strategies across 5 categories, V2 automation features, backtesting, liquidation analysis — all crammed into a UI designed for a simpler product. The information architecture needs a fundamental rethink, not incremental fixes.

**C. Safety narrative is the #1 marketing asset but isn't reflected in the product UX.**
"NEVER been liquidated" and "zero bad debt" are the strongest differentiators. But the UI doesn't communicate safety — no risk ratings, no visual risk indicators on listings, no automation to protect positions, negative APY strategies sit unmarked next to positive ones.

### The Multiply ↔ Borrow/Loan Dashboard Confusion

Multiply positions ARE Kamino Lend positions under the hood. But they use different UX patterns, different management interfaces, and different terminology. The Loan Dashboard is more powerful but hidden. Multiply has one-click close but Borrow doesn't. This creates confusion about where to manage what.

---

## 7. Competitive Landscape

| Competitor | Strength vs. Kamino | Kamino's Advantage |
|-----------|--------------------|--------------------|
| **DeFi Saver** (ETH) | Automation, inline actions, combined transactions | Risk visualization depth, single-protocol focus |
| **Drift Protocol** | Up to 101x leverage, cross-margined accounts | Purpose-built vault UX, auto-deleverage, simpler |
| **marginfi** | Simulation environment (virtual funds), mobile PWA | Deeper analytics, established brand, higher TVL |
| **Jupiter** | Tight DEX integration, trading-focused UI | Vault abstraction, position management tooling |
| **Instadapp** | Progressive disclosure, risk tier grouping | Breadth of strategies, Solana-native |

---

## 8. Priority Recommendations

### Tier 1 — Ship Immediately

1. Visually distinguish negative APY strategies (red text, warning badge, or separate section)
2. Fix "How it works" to be an actual accessible link/button
3. Default to "My Position" tab when user has an active position
4. Rename "Liq Available" → "Liquidity Available"
5. Add `aria-label` values to all interactive elements

### Tier 2 — High Impact

1. Show APY range (e.g., "8-14.5%") instead of only max leverage APY
2. Add realized PnL to the vault position page
3. Hide/collapse strategies with <$1K TVL behind "Show all"
4. Surface Loan Dashboard link prominently (not buried in dropdown)
5. Add liquidation price in asset terms alongside LTV percentage
6. Add before/after preview for leverage adjustments

### Tier 3 — Strategic (UX Revamp)

1. Redesign information architecture — reduce 62-strategy flat list to curated views
2. Build the automation frontend (stop-loss, take-profit, target leverage)
3. Add risk tier labels (Low/Medium/High) to the listing page
4. Add historical APY trend indicators (sparklines, 7-day deltas)
5. Unify Multiply and Loan Dashboard management experience
6. Surface the safety narrative in the UI (oracle protection, zero-liquidation record)
7. Add position performance chart (PnL over time, Net APY history)
8. Strategy comparison feature (select and compare side-by-side)
