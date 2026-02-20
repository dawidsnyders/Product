# Fixed Rates — Product & UX Design Brief

**Product:** Kamino Finance
**Feature:** Fixed Rates (rate certainty + price discovery)
**Status:** Technical spec complete, product/UX design phase
**Date:** 2026-02-16
**Reference:** `Kamino Fixed Rates - Reference Manual (internal).md`

---

## 1. What We're Adding (Not Replacing)

Fixed Rates is being added to the existing Kamino product. The current product works — all borrowing is variable rate, open term, no borrow orders. Fixed Rates adds:

- **Multiple reserves per debt token** (rate-duration grid)
- **Borrow Orders** (borrower intent + trigger mechanism)
- **Conditional Liquidity** (vault-side signaling with zero opportunity cost)
- **Withdrawal Queue** (lender exit from fixed-rate reserves)
- **Rollover Mechanism** (loan extension at maturity)

The existing variable-rate experience remains unchanged. Fixed rates sit alongside it.

---

## 2. New UI Surfaces Required

### 2.1 Borrower Surfaces

**A. Reserve Selection (the Grid)**

The borrower currently picks a market and borrows from the single variable-rate reserve. Now they choose between:
- Variable rate (open term, current behavior)
- Fixed rate at X% for Y months

**Design questions:**
- How do we present the rate-duration grid without overwhelming the user? (e.g., 4 rates × 4 terms = 16 fixed reserves + 1 variable)
- Is this a table/grid view, a dropdown, a slider, or a guided flow?
- How do we show available liquidity per reserve? The grid cells need to communicate "there's $30M available at 5.5% for 3 months" vs. "this cell is empty — you'll need to place a borrow order"
- How do we show Conditional Liquidity? The borrower should know: "there's $0 in this reserve right now, but $50M is conditionally available — if you place a borrow order, it'll fill atomically"
- Do we differentiate between "instant fill" (liquidity exists) and "order fill" (conditional liquidity exists) and "demand signal" (no liquidity, order stays open)?
- How do we show variable vs. fixed as a clear choice without making variable feel like the "bad" option?

**B. Borrow Order Management**

When a borrower places a fixed-rate borrow order, they need the same management panel as variable-rate borrow orders (from the Borrow Orders PRD), plus:
- Rate type tag (Variable / Fixed)
- Fixed rate (e.g., 5.5%)
- Loan term (e.g., 3 months)
- Rollover preference selection
- Auto roll-over toggle

This is already spec'd in the Borrow Orders PRD under the "Fixed Rates" column of the order card.

**C. Rollover Preference Selection**

At borrow origination (or order placement), the borrower configures what happens at maturity:

| Option | Behavior |
|---|---|
| No rollover | Loan must be repaid at maturity or position becomes liquidatable |
| Same reserve | Attempt to roll into the same rate/term reserve |
| Better rate | Try to roll into a lower-rate reserve first, fall back to same |
| Variable fallback | Try fixed rollover first, fall back to variable if no fixed liquidity |

**Design questions:**
- Is this a prominent choice at origination, or an advanced setting?
- How do we communicate the risk of "no rollover" (liquidation if you forget)?
- Should we default to a safe option (e.g., variable fallback)?
- Can users change rollover preferences after origination, before maturity?
- How do we notify users when maturity is approaching and they need to act?

**D. Cross-Reserve Position View**

A borrower can now have:
- Variable-rate borrow from USDC variable reserve
- Fixed-rate borrow from USDC 5.5% 3m reserve
- Fixed-rate borrow from USDC 6.0% 3m reserve
- Open borrow orders on any of these

All against the same collateral in the same market.

**Design questions:**
- How do we display multiple active borrows across reserves in the position overview?
- Each borrow has different rate, term, and maturity — how do we prevent information overload?
- Do we show aggregate borrow amount + breakdown, or individual entries?
- Where does the borrow order sit relative to active borrows?
- How does LTV calculation display when there are variable + fixed borrows + open orders?

**E. Maturity Timeline**

Fixed borrows have maturity dates. Users need to know:
- When each borrow matures
- What their rollover preference is
- Whether rollover is likely to succeed (is there queued liquidity that might block it?)
- Grace period countdown if maturity has passed

**Design questions:**
- Do we show a timeline/calendar view of upcoming maturities?
- How do we handle notifications/alerts for approaching maturity?
- How do we communicate "your rollover might be blocked because lenders are queuing withdrawals"?

---

### 2.2 Lender / Vault Manager Surfaces

**F. Conditional Liquidity Configuration**

Vault managers need to set conditional allocations — "X% of vault capital is conditionally available on reserve Y."

**Design questions:**
- Where does this live in the vault management UI?
- How do we visualize the difference between committed allocations (capital physically in reserves) and conditional allocations (signals, capital still in variable)?
- How do we show that conditional allocations can overlap (same $100M signaled across multiple reserves)?
- What happens when a conditional allocation gets triggered (filled by a borrow order)? How is the vault manager notified?

**G. Borrow Order Book / Demand Discovery**

Vault managers (and potentially individual lenders) need to see unfilled borrow orders to understand where demand exists.

**Design questions:**
- Is this a dedicated page/tab, or embedded in the market view?
- What fields are visible per order? (market, collateral, borrow asset, amount, max rate, min duration, LTV)
- Can vault managers / lenders click "Fill" directly on an order?
- How do we aggregate demand? (e.g., "$40M in unfilled orders at 5.5% 3m across 12 borrowers")
- Do we show a depth chart or heatmap of demand across the rate-duration grid?
- Is this view available for variable-rate borrow orders too (Day 1 launch), or only fixed?

**H. Withdrawal Queue Management**

Vaults need to submit and manage withdrawal tickets from fixed-rate reserves.

**Design questions:**
- Where does the queue UI live?
- How do we show queue position and estimated fill time?
- How do we communicate that queuing a withdrawal blocks rollover for borrowers?
- Should the UI show what's ahead of you in the queue (other tickets)?

---

### 2.3 Market-Level Surfaces

**I. Yield Curve Visualization**

The rate-duration grid creates an on-chain yield curve. This is powerful and worth surfacing.

**Design questions:**
- Do we show a yield curve chart on the market page?
- What data populates it — actual borrow rates across terms, or conditional liquidity rates, or both?
- Is this a marketing/informational surface, or does it have interactive functionality?
- How do we handle markets where the grid is sparse (early days)?

**J. Reserve Grid Overview**

Each market now has potentially many reserves. Users need an overview of the landscape.

**Design questions:**
- How do we show the grid (rate × term) with liquidity depth per cell?
- Color coding for available liquidity depth?
- Indication of where Conditional Liquidity exists vs. committed liquidity?
- Should the grid show borrow demand alongside supply (the order book within the grid)?

---

## 3. UX Flow Mapping

### Borrower: "I want to borrow at a fixed rate"

```
Market Page
  → Select collateral (or already deposited)
  → Choose: Variable Rate or Fixed Rate
    → If Fixed Rate:
      → See rate-duration grid with available liquidity
      → Select rate + term (or let system suggest based on available liquidity)
      → If liquidity available: instant borrow (like today)
      → If no liquidity: place Borrow Order
        → Set rollover preferences
        → Confirm order
        → Order appears in position with fill status
        → Fills arrive as conditional liquidity matches or lenders fill directly
```

### Borrower: "My fixed loan is maturing"

```
Notification: "Your USDC 5.5% 3m loan matures in X days"
  → Position page shows maturity countdown
  → Rollover preference already set (or user adjusts)
  → At maturity:
    → If rollover succeeds: loan extends, user notified
    → If rollover blocked (withdrawal queue): user must repay or refinance
      → Grace period countdown (e.g., 6 hours)
      → Options: Repay, Refinance to different reserve, Refinance to variable
      → If grace period expires: position becomes liquidatable
```

### Vault Manager: "I want to allocate to fixed rates"

```
Vault Management Dashboard
  → See current committed allocations (variable reserves)
  → Add Conditional Liquidity allocations
    → Select reserve(s) to signal availability on
    → Set percentage/amount (can overlap)
    → Capital stays in variable reserves earning yield
  → Monitor: which conditional allocations have been triggered
  → See: unfilled borrow orders (demand signals) across markets
  → Decide: adjust conditional allocations based on demand
```

### Lender/Vault: "I want to exit a fixed-rate position"

```
Vault Management Dashboard
  → See capital committed to fixed-rate reserves
  → Submit withdrawal ticket
    → Select reserve + amount
    → Ticket enters FIFO queue
  → Monitor queue position and partial fills
  → Filled amount becomes available for withdrawal
```

---

## 4. Key Design Decisions Needed

| # | Decision | Impact | Options to Consider |
|---|---|---|---|
| 1 | **How to present the rate-duration grid to borrowers** | Core borrower UX — this is the "moment of truth" for fixed rates | Grid/table, dropdown selectors, guided wizard, or AI-recommended best match |
| 2 | **Conditional vs. committed liquidity visibility** | Borrower confidence — "will my order fill instantly?" | Show separately, show combined with indicator, or abstract away |
| 3 | **Rollover preference defaults** | User safety vs. user agency | Default to safest (variable fallback) or require explicit choice |
| 4 | **Multi-borrow position display** | Complexity management — positions can now have 3+ active borrows | Aggregated summary + expandable details, or always-visible list |
| 5 | **Order book introduction timing** | Whether to ship demand discovery with variable orders (Day 1) or wait for fixed rates | Earlier = simpler but less impactful; later = full picture |
| 6 | **Notification system for maturity** | Critical — missed maturity = liquidation | In-app, email, Telegram bot, all of the above |
| 7 | **Yield curve visualization priority** | Marketing value vs. engineering effort | Ship early as a hook, or ship later when data is meaningful |
| 8 | **Vault manager UX for conditional liquidity** | Determines whether vault managers actually use the feature | Simple percentage sliders vs. full allocation dashboard |

---

## 5. Complexity Budget

The biggest UX risk is complexity overload. The system has:
- Multiple markets
- Multiple collateral assets per market
- Multiple reserves per debt token per market (variable + N fixed)
- Borrow orders (variable and fixed)
- Conditional liquidity (vault-side)
- Withdrawal queues (per fixed reserve)
- Rollover preferences (per loan)
- Cross-reserve borrowing (multiple active loans)

**Principle: Progressive disclosure.** The default borrower experience should be as simple as today. Fixed rates are an opt-in layer for users who want rate certainty. The grid, orders, rollover preferences — all should be accessible but not forced.

**Who sees what:**
- **Casual borrower:** Variable rate borrow, same as today. Maybe a "Lock your rate?" prompt.
- **Sophisticated borrower:** Full grid view, borrow orders, rollover configuration.
- **Vault manager:** Conditional liquidity configuration, demand discovery, withdrawal queue management.
- **Market observer:** Yield curve, order book depth, aggregate demand/supply visualization.

---

## 6. Relationship to Borrow Orders (Day 1)

The variable-rate Borrow Orders launching in Prime are the first piece of this system. They establish:
- The borrow order creation flow
- Partial fills
- Order management UI (cancel, adjust, expiry)
- Post-fill LTV mechanics
- Fill history with Solscan links

Fixed-rate Borrow Orders build on this exact UX with three additional inputs (rate, term, rollover preference) and one additional display (maturity countdown). The Day 1 launch is designed to be forward-compatible with fixed rates.
