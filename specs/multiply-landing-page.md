# Kamino Multiply Landing Page — Design Specification

**Status:** Ready for Design  
**Date:** 2026-04-08  
**Author:** Claude (from deep interview with Dawid)  
**Companion artifact:** Interactive prototype at `prototypes/multiply-landing/`

---

## 1. Problem Statement

The current Multiply landing page is losing users at the top of funnel. Specific issues:

- **62 strategies in a flat table** — decision paralysis. Many are duplicates (same collateral, different stablecoins) that grew organically over time.
- **Negative APY strategies (-14.86%) look identical to positive ones** — no visual differentiation, no warnings.
- **Only max-leverage APY shown** — misleading; users see yields they'd only get at maximum risk.
- **"How it works" element is broken** — the primary educational CTA is a `<div>` with `cursor-pointer` CSS, no link, no function.
- **No risk context on the listing page** — users choose leverage strategies with zero risk visibility.
- **Promotional carousel at top** — research shows carousels get ~1% CTR with 84-89% of clicks on the first slide only (Runyon/ND study). Banner blindness in financial contexts is well-documented.
- **Multiply lives as a tab under Borrow** — buried, not discoverable as its own product.

The fundamental issue: the page is a **database view of on-chain vaults** when it should be a **strategy discovery tool** that collapses complexity into meaningful choices.

---

## 2. Audience

Two user types, one page:

| | New to Multiply | Returning Power User |
|---|---|---|
| **Goal** | Understand what Multiply is, build confidence, make a first deposit | Find the best risk-adjusted yield, deploy capital quickly |
| **Barrier** | Fear of liquidation → lack of understanding → decision paralysis (in that order) | Speed of evaluation. They know what they want; don't slow them down. |
| **Entry point** | Walkthrough / guided onboarding | Category sections + filters |

The page must serve newcomers by default (progressive disclosure, education triggers) while not slowing down power users (scannable cards, sort/filter, direct category access).

---

## 3. Key Design Decisions

### 3.1 The Collapsing Model

**The fundamental unit shifts from "vault" to "strategy."**

Currently: 62 vault rows. PRIME appears 4 times (PRIME/USDC, PRIME/PYUSD, PRIME/CASH, PRIME/USDS). SyrupUSDC appears 5 times. There are 20+ LST/SOL pairs.

New model: **~12-15 strategy cards.** Each collateral asset gets one card. Multiple borrow assets collapse behind it.

| Current (62 vaults) | New (~15 strategies) |
|---|---|
| PRIME/USDC, PRIME/PYUSD, PRIME/CASH, PRIME/USDS | **PRIME** (4 pairs available) |
| SyrupUSDC/USDG, SyrupUSDC/USDS, SyrupUSDC/USDC, SyrupUSDC/CASH, SyrupUSDC/PYUSD | **SyrupUSDC** (5 pairs available) |
| JitoSOL/SOL (Main Market), JitoSOL/SOL (Jito Market) | **JitoSOL** (2 markets available) |

**Why this works:**
- Users think asset-first ("I want to leverage PRIME"), not pair-first ("I want PRIME/PYUSD specifically")
- 90%+ of users just want the best deal — the stablecoin is an optimization detail, not a user-facing decision
- Stablecoin issuers still get visibility via stacked token icons and the comparison view on the inner page
- Reduces cognitive load by ~75% (62 → 15)

**The stablecoin comparison moves to the inner vault page.** The landing page surfaces the smart-selected best pair. Users who want to compare or override can do so one click deeper.

### 3.2 Smart Default Selection Algorithm

Each strategy card displays the APY from the algorithmically-selected best pair. The algorithm uses a composite score:

```
Score = w1 × (14-day Smoothed Net APY) + w2 × (Available Pool Liquidity) + w3 × (DEX Liquidity Depth)
```

**Why 14-day smoothing:** Prevents temporary rate spikes from pushing low-liquidity vaults to the top. DeFi rates are volatile — a 3-day window is too noisy, a 30-day window is too stale. 14 days balances stability with responsiveness.

**Critical property:** The default pair should be stable enough that it doesn't flip every hour. Users returning to the page should see consistent recommendations.

### 3.3 Category Sections by Asset Class

The page is organized into vertical sections:

| Section | Strategies | Header Copy |
|---|---|---|
| **LSTs** | JitoSOL, mSOL, JupSOL (top 3) + bSOL, dfdvSOL, picoSOL, lanternSOL, INF (behind Show more) | "Leveraged Staking Yield — Deposit SOL or any LST, earn amplified staking rewards. Learn more →" |
| **RWAs** | PRIME, SyrupUSDC, ONyc | "Real-World Asset Yield — Amplify yield from institutional-grade real-world assets. Learn more →" |
| **Stablecoins** | CASH/PYUSD, USDC/PYUSD | "Stablecoin Yield Loops — Earn the rate spread between stablecoins with zero price risk. Learn more →" |
| **DeFi Yield** | JLP (+ future protocol yield strategies) | "DeFi Protocol Yield — Amplify trading fees and protocol revenue. Learn more →" |
| **Equities** | SPYx, TSLAx (de-emphasized, low traction) | "Tokenized Equities — Leveraged exposure to tokenized stocks. Learn more →" |

**Why asset class grouping:**
- Maps to how users think about risk ("I want to be in stables" vs "I want SOL exposure")
- Each section naturally carries a different risk profile
- Partners and asset issuers get clear, named visibility within their category
- Scales well as new strategies are added — they slot into existing sections

**Within-section ordering:**
1. Boosted/campaign vaults surface first (with visual treatment)
2. Non-boosted vaults sorted by TVL descending (social proof: "if $50M is in JitoSOL, it must be good")

**Show more:** Top 3 per section visible by default. "Show more" reveals the rest in the same card format. This is critical for LSTs (8 strategies) and keeps other sections clean.

### 3.4 Safety / Risk Surfacing

**Core philosophy: mechanism-first.** Don't assert track records ("never been liquidated"). Teach *why* risk is structurally different on Kamino.

**On the landing page:**
- Section headers use value-proposition copy (not risk statements)
- "Learn more →" on each section header opens an in-page drawer with educational + risk content
- No per-card risk badges on the landing page
- Risk details defer to the vault page

**The Learn More drawer:**
- Single drawer component, layered navigation
- **Layer 1:** Overview of all Multiply types. Cards for each category with a brief description.
- **Layer 2:** Category-specific deep-dive. Accessed by clicking a category in L1, or directly via section header "Learn more →" links. Content: How this loop type works (visual diagram) → What you earn → What are the risks → How Kamino protects you.
- Back button returns from L2 to L1.

**Why mechanism-first over track-record claims:**
- "Never been liquidated" is powerful on Twitter but risky in the product UI — if it ever changes, trust damage is severe
- Teaching the mechanism ("stake-rate oracle pricing means SOL price movements cannot trigger liquidation") is more durable and more educational
- Users who understand *why* they're safe are more confident than users who are told *that* they're safe

### 3.5 Onboarding / Education

**Two separate systems:**

**1. Interactive walkthrough** (for new visitors)
- Triggered automatically for first-time visitors
- Togglable via the "How it works" link in the page subtitle for returning users
- Guided routing flow: asks 2-3 questions ("What are you looking to do?", "What asset do you hold?", risk appetite)
- Ends with a personalized recommendation card: specific strategy + CTA + "Browse all strategies" fallback
- This is a separate, interactive experience — not the same as the Learn More drawer

**2. Learn More drawer** (reference tool)
- Always accessible via section header links
- Layered navigation for browsing different strategy types
- Educational + risk content per category
- Not guided — user navigates freely

### 3.6 Highlight / Recommended Section

**3 static personalized cards** following the Lend page's "Recommended for you" pattern.

Each card shows:
- Strategy name + token icon
- Curator/market name
- TVL
- APY (from smart-selected pair)
- Rationale text: "Best use of your idle SOL" / "Highest RWA yield available" / etc.

**Why 3 cards:**
- Research: 3-card static rows get 12-18% aggregate CTR, best pattern for discovery
- Consistent with Lend product — cross-product design language
- Single hero = too prescriptive for a product with 5 categories. 3 cards cover breadth.
- Carousels/scrollable: killed. 1% CTR, banner blindness, incompatible with financial trust.

### 3.7 My Positions

When a connected wallet has active Multiply positions:

- **"You have X open positions" banner** with "View portfolio →" link (follows Lend + Position pattern)
- **Horizontal scrollable position cards** (follows Borrow + Positions pattern)
- Appears above Recommended section

**Data points available to designers (design decides density):**
- Position value
- PnL (absolute + percentage)
- Current leverage
- Plain-language safety indicator: "Safe" / "Watch" / "At risk"

**Minimal on landing page.** Detailed risk info (LTV, liquidation price, Net APY breakdown) lives on the vault page and Portfolio page.

### 3.8 Navigation

- Multiply gets its **own item in the left sidebar** (promoted from Borrow tab)
- Breadcrumb: "Home > Multiply"
- "How it works" walkthrough trigger lives in the page subtitle

---

## 4. Page Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────┐
│ SIDEBAR │  Breadcrumb: Home > Multiply           │
│         │                                         │
│  Home   │  Multiply                               │
│  Swap   │  Amplify your yields with one-click     │
│  Earn   │  leverage. How it works                  │
│  Borrow │                                         │
│ Multiply│  ┌─ Trust Bar ────────────────────────┐ │
│  Assets │  │ 📊 $544M deposits  📊 $428M borrows│ │
│         │  └────────────────────────────────────┘ │
│         │                                         │
│         │  ⓘ You have 3 open positions    View →  │
│         │  ┌────────┐ ┌────────┐ ┌────────┐      │
│         │  │Position│ │Position│ │Position│  →    │
│         │  │ Card 1 │ │ Card 2 │ │ Card 3 │      │
│         │  └────────┘ └────────┘ └────────┘      │
│         │                                         │
│         │  Recommended for you                    │
│         │  ┌──────────┐┌──────────┐┌──────────┐  │
│         │  │ JitoSOL  ││  PRIME   ││  JLP     │  │
│         │  │ 14.2% APY││ 18.5% APY││ 42% APY  │  │
│         │  │ Best for ││ Highest  ││ Top DeFi │  │
│         │  │ your SOL ││ RWA yield││ yield    │  │
│         │  └──────────┘└──────────┘└──────────┘  │
│         │                                         │
│         │  ┌─ Filter: All | LSTs | RWAs | ... ─┐ │
│         │  │                        Sort: TVL ▼ │ │
│         │  └────────────────────────────────────┘ │
│         │                                         │
│         │  LSTs                                   │
│         │  Leveraged Staking Yield — Deposit SOL  │
│         │  or any LST... Learn more →             │
│         │  ┌──────┐ ┌──────┐ ┌──────┐            │
│         │  │JitoSO│ │ mSOL │ │JupSOL│            │
│         │  └──────┘ └──────┘ └──────┘            │
│         │  Show more (5)                          │
│         │                                         │
│         │  RWAs                                   │
│         │  Real-World Asset Yield — Amplify yield  │
│         │  from institutional-grade... Learn more →│
│         │  ┌──────┐ ┌──────┐ ┌──────┐            │
│         │  │PRIME │ │Syrup │ │ ONyc │            │
│         │  └──────┘ └──────┘ └──────┘            │
│         │                                         │
│         │  Stablecoins                            │
│         │  ...                                    │
│         │                                         │
│         │  DeFi Yield                             │
│         │  ...                                    │
│         │                                         │
│         │  Equities                               │
│         │  ...                                    │
└─────────────────────────────────────────────────┘
```

---

## 5. Component Specifications

### 5.1 Strategy Card

The core UI element. Each card represents one collateral asset.

**Required data points:**
| Field | Description | Example |
|---|---|---|
| Asset name | Collateral token name | "JitoSOL" |
| Token icon | Circular logo, 32px | JitoSOL logo |
| Net APY | From smart-selected pair, 14-day smoothed | "14.52%" |
| Max leverage | Highest available across markets | "10x" |
| Total supplied (TVL) | Aggregate across all pairs for this collateral | "$162.4M" |
| Liquidity available | From smart-selected pair | "$12.3M" |
| Borrow token icons | Stacked circular icons showing all available borrow assets | SOL icon (+ 1 more on hover) |
| Boosted indicator | Visual treatment when campaign is active | Glow, badge, or highlight |

**Interaction:**
- Hover on stacked borrow token icons → tooltip showing each borrow asset name + available liquidity per asset
- Click card → navigates to inner vault page (with smart-selected pair as default)
- Boosted cards have visual distinction (subtle glow, "Featured" or "Boosted" badge, or highlighted border)

### 5.2 Stacked Token Icons

Shows multiple borrow assets are available without taking up horizontal space.

- First token icon shown at full size
- Additional tokens stacked behind with slight offset (-8px overlap)
- "+N" count if more than 3 tokens
- Hover → tooltip listing all tokens with names and per-token liquidity

### 5.3 Category Section

- **Header:** Section title + one-line value proposition + "Learn more →" link
- **Grid:** Strategy cards in a responsive grid (3 cards per row on desktop, 2 on tablet, 1 on mobile)
- **Show more:** When section has >3 strategies, show a "Show more (N)" text button below the grid. Expands to show all in the same card format.
- **Boosted vaults:** Surface to position 1 in their section with visual treatment. If a long-tail LST like dfdvSOL runs a campaign, it moves from behind "Show more" to the visible top 3.

### 5.4 Learn More Drawer

- Slides in from the right
- Width: ~480px on desktop, full-width on mobile
- **Layer 1 content:** Grid of cards, one per Multiply category. Each shows: category name, icon/illustration, one-line description, strategy count. Click drills into L2.
- **Layer 2 content:** Category-specific. Structure:
  1. **How it works** — visual diagram of the loop mechanism for this category
  2. **What you earn** — yield sources and APY range
  3. **What are the risks** — category-specific risk factors, plainly stated
  4. **How Kamino protects you** — mechanism-level explanations (e.g., "Stake-rate oracle pricing means SOL price movements cannot trigger liquidation for LST loops")
- Back button returns to L1
- Close button (X) in top-right

### 5.5 Walkthrough / Onboarding

- **Trigger:** Auto-opens for first-time visitors (stored in localStorage). Subtitle "How it works" link re-opens it anytime.
- **Flow:**
  1. Welcome screen: "What are you looking to do?" → Options like "Earn more on my SOL", "Earn yield on stablecoins", "Get leveraged exposure to an asset"
  2. Follow-up: "What asset are you starting with?" → Relevant token options
  3. Optional: "How much risk are you comfortable with?" → Low / Medium / High
  4. Recommendation: Personalized card showing recommended strategy with APY, brief rationale, CTA to go to that vault
  5. Fallback: "Browse all strategies" button below recommendation
- **Separate from Learn More drawer.** The walkthrough is a guided, modal experience. The drawer is a reference tool.

### 5.6 Trust Bar

Compact metric row near the top of the page. Follows the existing pattern from the Lend page.

- **Metrics:** Total deposits | Active borrows | (optionally: Zero bad debt | 18 audits | Formally verified)
- Small icon prefix per metric (as seen in Lend screenshots)
- Single horizontal row, doesn't wrap

### 5.7 Position Cards

Horizontal scrollable row, follows the Borrow + Positions screenshot pattern.

- **Trigger:** Appears when wallet is connected AND has active Multiply positions
- **Banner above cards:** "You have N open positions" + "View portfolio →" link
- **Card content (design decides density):** Asset name, position value, PnL, leverage, plain-language safety label
- **Horizontal scroll:** Peek indicator showing more cards exist to the right

---

## 6. Interaction Patterns

### Filter Bar
- **Category tabs:** All | LSTs | RWAs | Stablecoins | DeFi Yield | Equities
- Clicking a tab scrolls to / filters to that section
- **Sort dropdown:** TVL (default) | APY | Liquidity
- **Search:** Asset name search (wider than current 155px, prominently placed)

### Show More / Less
- Text button below each section grid: "Show more (5)" / "Show less"
- Smooth expansion animation
- Same card format for expanded items (no switch to compact/table view)

### Hover States
- Strategy cards: subtle border color change, slight lift shadow
- Stacked tokens: tooltip with asset names + liquidity
- Section "Learn more →": underline or color shift

### Responsive Behavior
- **Desktop (>1280px):** Sidebar + 3-column card grid
- **Tablet (768-1280px):** Collapsed sidebar (icons only) + 2-column grid
- **Mobile (<768px):** No sidebar (bottom nav or hamburger) + 1-column card grid + full-width drawer

---

## 7. Content Requirements

### Section Header Copy

Each section needs:
- Title (category name)
- Subtitle (value proposition, one line, ending with "Learn more →")

Draft copy (refine during design):

| Section | Title | Subtitle |
|---|---|---|
| LSTs | Leveraged Staking Yield | Deposit SOL or any LST, earn amplified staking rewards. Learn more → |
| RWAs | Real-World Asset Yield | Amplify yield from institutional-grade real-world assets. Learn more → |
| Stablecoins | Stablecoin Yield Loops | Earn the rate spread between stablecoins with zero price risk. Learn more → |
| DeFi Yield | DeFi Protocol Yield | Amplify trading fees and protocol revenue. Learn more → |
| Equities | Tokenized Equities | Leveraged exposure to tokenized stocks. Learn more → |

### Learn More Drawer Content (per category)

Each L2 page needs:
1. Visual diagram of the loop mechanism
2. Yield source explanation (1-2 sentences)
3. Risk factors (bulleted list, plain language)
4. Kamino protections (bulleted list, mechanism-first)

### Walkthrough Content

3-step guided flow:
1. Intent question (3-4 options)
2. Asset question (context-dependent options)
3. Risk appetite (optional, 3 levels)
4. Recommendation card + CTA

---

## 8. What We're Killing

| Current Element | Replacement | Reason |
|---|---|---|
| Promotional carousel (3 rotating banners) | Boosted vault surfacing within sections | Carousels get ~1% CTR, trigger banner blindness |
| 62-row flat strategy table | ~15 strategy cards in 5 category sections | Decision paralysis, duplicates, no curation |
| "How it works" broken div | Functional walkthrough trigger in subtitle | Accessibility failure, zero educational value |
| "Max Leverage APY" column (misleading) | Smart-selected pair APY (honest) | Shows what users will actually get, not theoretical max |
| Column name "Liq Available" (ambiguous) | "Liquidity Available" (clear) | Could mean liquidity or liquidation |
| Equal visual treatment for negative APYs | Negative APY strategies de-emphasized or excluded | Safety/trust issue — users could deposit into -14.86% strategies unknowingly |

---

## 9. Open Questions for Design

1. **Boosted vault visual treatment:** Glow? Border highlight? "Boosted" badge? "Featured" tag? What feels premium without being noisy?
2. **Strategy card layout:** Horizontal (list-item style, one per row) vs. vertical (card grid, 3 per row)? The prototype uses card grid, but the Borrow page uses list rows — which is better for Multiply?
3. **Negative APY handling:** De-emphasize (gray out, move to bottom)? Hide behind toggle? Show with warning badge? Most negative APYs are on Equities, which we're already de-emphasizing.
4. **Position card data density:** Which data points from the available set (value, PnL, leverage, safety label) are primary vs. secondary?
5. **Mobile navigation:** Bottom tab bar vs. hamburger menu for sidebar items?
6. **Walkthrough visual style:** Modal overlay? Full-screen takeover? Bottom sheet?

---

## 10. Competitive Context

For reference during design:

| Product | What They Do Well | What Kamino Should Do Better |
|---|---|---|
| **DeFi Saver** (ETH) | Inline actions (see risk → act), 6 automation types, combined transactions | We have superior risk visualization (scenario analysis, stress testing) |
| **Pendle** | Clean yield market table, clear expiry/maturity concept | Our categories are more intuitive than Pendle's maturity-based grouping |
| **Lido** | Dead-simple single-product staking page | Our multi-strategy product needs smarter curation, not simplification |
| **Betterment** | Single-portfolio recommendation flow (20%+ conversion lift) | Our 3-card recommendation adapts this for multi-strategy context |
| **NerdWallet/Bankrate** | "Top Pick" editorial card above comparison table | Our boosted vault surfacing in sections achieves similar editorial curation |

---

## 11. Success Metrics

How we'll know this redesign worked:

1. **Strategy click-through rate** — % of landing page visitors who click into a strategy. Target: >30% (up from estimated ~15% on current page).
2. **First deposit conversion** — % of new visitors who complete a deposit. Tracked per category.
3. **Time to first click** — how long users spend on the landing page before engaging. Lower = better curation.
4. **Walkthrough completion rate** — % of new visitors who complete the guided onboarding flow.
5. **Category distribution** — are users discovering strategies across categories, or clustering in one?
