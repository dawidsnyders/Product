# Borrow Orders — Product Requirements Document

**Product:** Kamino Finance
**Feature:** Borrow Orders
**Status:** Design complete, ready for implementation
**Author:** Dawid Snyders
**Date:** 2026-02-16
**Initial Market:** Prime (PRIME collateral → USDC borrow)

---

## 1. Problem Statement

In supply-constrained markets like Prime, borrow demand consistently exceeds available supply. New supply that enters the market gets borrowed instantly back to the utilization cap. This creates a race condition where users must either:

- Sit at their computer monitoring supply availability
- Track announcements and act within seconds
- Write custom bots to capture liquidity the moment it appears

This is a poor user experience that favors technically sophisticated users and excludes the majority of borrowers from accessing supply-constrained markets reliably.

## 2. Solution Overview

Borrow Orders allow users to place standing orders to borrow assets. Orders fill automatically as liquidity becomes available, similar to limit orders in trading or RFQs in credit markets. Orders support partial fills, so a user's position builds incrementally as supply enters the market.

**Key principle:** Users set it and forget it. No monitoring, no bots, no race conditions.

**Bigger picture:** Borrow Orders are the first step toward on-chain order book lending and price discovery. When combined with fixed rates, this system enables lenders to see and directly fill borrower orders — a full credit order book. Product/UX design considerations for that system are in [Fixed Rates — Product & UX Design Brief](specs/fixed-rates-order-book.md).

## 3. User Stories

### 3.1 New User (No Existing Position)
> As a user with no position in the Prime market, I want to deposit collateral and place a borrow order in a single flow, so that I can queue up my borrow without needing to monitor supply.

### 3.2 Existing Collateral, No Active Borrow
> As a user who already has collateral deposited but no active borrow, I want to place a borrow order against my existing collateral, so that I can start borrowing when supply becomes available.

### 3.3 Existing Active Borrow
> As a user with an active borrow position, I want to place an additional borrow order on top of my existing borrow, so I can increase my leverage as more supply enters the market.

### 3.4 Order Management
> As a user with an open borrow order, I want to adjust the order amount, change the expiry, or cancel the order at any time, so I remain in full control of my position.

---

## 4. Feature Specification

### 4.1 Opening a Borrow Order

**Entry points:**

| User State | Flow |
|---|---|
| No position | Deposit collateral + create borrow order + set expiry (single flow) |
| Collateral deposited, no borrow | Create borrow order + set expiry |
| Active borrow position | Create additional borrow order + set expiry |

**Required inputs:**
- Borrow asset: USDC (initially; may expand to other assets)
- Borrow order amount (minimum: $1)
- Order expiry date/time

**On submission:**
- Collateral is deposited into a borrow obligation (if not already deposited)
- Borrow order is opened and active
- No borrow is drawn; no interest accrues until fills occur

### 4.2 Order Filling

- Orders fill automatically as liquidity becomes available
- Orders can be **partially filled** — e.g., a $300,000 USDC order may fill in increments
- Fill ordering is **random** — no queue, no priority by size or time
- Filled amounts are delivered **directly to the user's wallet**
- Interest begins accruing **immediately** on filled portions
- Filled portions become **active borrows** within the user's position

### 4.3 Order Limit

- **One borrow order per debt asset per obligation per market**
- Since partial fills, amount adjustment, and expiry adjustment are all supported, there is no functional need for multiple orders of the same asset
- This simplifies UI, LTV calculations, and position management

### 4.4 Order Management

Users can perform the following actions on an active borrow order:

| Action | Behavior |
|---|---|
| **Cancel order** | Unfilled portion is removed. Filled portion remains as active borrow. No fees or penalties. |
| **Adjust order amount** | Increase or decrease the unfilled order amount, subject to collateral/LTV constraints. |
| **Adjust expiry** | Change the expiry date on the order. |

### 4.5 Order Expiry

- Every order requires an expiry date (set by user)
- On expiry, the unfilled portion of the order is removed
- Any filled portions remain as active borrows
- No fees or penalties on expiry

---

## 5. LTV & Collateral Rules

### 5.1 Post-Fill LTV

The system calculates a **post-fill LTV** — the LTV the user would have if their entire open borrow order were filled. This is the governing constraint for collateral management.

**Post-fill LTV = (Active borrow + Total open order amount) / Collateral value**

### 5.2 Buffer Rule

- A **5% buffer** is enforced between post-fill LTV and the market's max LTV
- Maximum borrow order capacity = max LTV − 5% − current LTV
- This protects against collateral price drops between order placement and fill

### 5.3 Collateral Withdrawal Restrictions

- Users **cannot withdraw collateral** if doing so would cause their post-fill LTV (across ALL open orders) to exceed max LTV minus the 5% buffer
- The restriction is based on the scenario where all open orders fill simultaneously
- UI displays a generic restriction message; user can review their open orders to understand the constraint

### 5.4 Current LTV vs. Post-Fill LTV

| Metric | Definition | Used For |
|---|---|---|
| **Current LTV** | Active borrow / Collateral value | Liquidation calculations, position health |
| **Post-fill LTV** | (Active borrow + All open orders) / Collateral value | Collateral withdrawal limits, order capacity |

**Important:** The current LTV displayed in the position overview is **not** affected by open borrow orders. Only filled borrows affect current LTV.

### 5.5 Collateral Price Movement — Auto-Reduction

If the collateral asset drops in value, the open borrow order amount is **automatically reduced** to maintain the post-fill LTV within the buffer (this is less relevant for PRIME, but will be more relevant against volatile collateral like SOL):

- **Backend:** Calculated continuously based on oracle price updates. Order reduction is enforced at fill time (calculated at the exact slot of the fill).
- **UI:** Order amount updates approximately every 1 minute, so users see their order shrinking in near-real-time as collateral value drops.
- **No fees or penalties** are incurred from auto-reduction.
- The order is never auto-cancelled — it is only reduced. If collateral recovers, the user can manually increase the order amount again.

---

## 6. UI Specification

### 6.1 My Position Overview — Borrow Side

The borrow section of the position overview displays two components:

1. **Active Borrow** — The current outstanding borrow amount (accruing interest)
2. **Open Borrow Order** — The unfilled order amount (not accruing interest)

These are visually distinct sections so users understand the difference between "money I owe" and "money I'm waiting for."

### 6.2 Borrow Order Card/Panel

The borrow order management panel has two sections:

**Order Summary (header area):**
- Open order amount with filled percentage indicator

**Order Details (info list):**

| Field | Description | Day 1 | Fixed Rates |
|---|---|---|---|
| Initial order size | The original order amount at time of placement | Yes | Yes |
| Filled amount | Amount already filled (now active borrow) | Yes | Yes |
| Post-fill LTV | LTV if all open orders are fully filled | Yes | Yes |
| Expiry date | When the order expires | Yes | Yes |
| Rate type | Variable or Fixed | — | Yes |
| Loan term | Duration of the fixed-rate borrow | — | Yes |
| Auto roll-over | Whether the order automatically renews at expiry | — | Yes |

**Order Fills (separate section):**
- List of individual fill events
- Each fill shows: date/time of fill, fill amount
- Each fill is clickable → links to the transaction on Solscan

**Actions available:** Adjust amount, Adjust expiry, Cancel order

### 6.3 Value Proposition Messaging

Surface the following messaging in the borrow order creation flow:

> "No interest on open orders — you only start paying interest when your order fills."

This communicates that placing an order is risk-free from an interest perspective.

---

## 7. Technical Considerations

### 7.1 Oracle & Fill Mechanics

- LTV is calculated at the **exact slot** of the fill using the oracle price at that slot
- For variable rate reserves, borrow rate at fill time is the prevailing variable rate — no rate lock or protection
- Since utilization is capped, rate spikes are bounded by the utilization cap mechanism

### 7.2 Minimum Order / Fill Size

- Minimum borrow order: **$1**
- Fill bots are operated by Kamino; minimum fill size is controlled operationally

### 7.3 Collateral Requirements

- Collateral must be deposited into a borrow obligation before or during order creation
- Collateral earns supply yield while deposited, regardless of whether borrow orders are open (not relevant to PRIME, but for eg. SOL it will be)


## 8. Scope & Constraints

### 8.1 Initial Launch (Pilot)

| Parameter | Value |
|---|---|
| Market | Prime |
| Collateral asset | PRIME |
| Borrow asset | USDC |
| Orders per debt asset per obligation | 1 |
| Minimum order size | $1 |
| Post-fill LTV buffer | 5% below max LTV |

### 8.2 Future Extensions

- **Segmented LTV bar:** A visual bar showing how each order contributes to post-fill LTV — segments for current LTV, this order's impact, other open orders, the 5% buffer zone, and max LTV. Allows users to understand both per-order and aggregate exposure at a glance.
- **Additional assets:** Extend borrow orders to other collateral/borrow asset pairs
- **Additional markets:** Roll out beyond Prime to other supply-constrained markets
- **Fixed-rate borrow orders:** Same UX with two additional inputs:
  - Borrow rate (user-selected)
  - Borrow term (duration)
  - Variable and fixed-rate orders can coexist on the same position (separate reserves)

---

## 9. Edge Cases Summary

| Scenario | Behavior |
|---|---|
| Collateral price drops while order is open | Order amount auto-reduced to maintain post-fill LTV within buffer. No fees. UI updates ~every minute. |
| Order expires with partial fill | Unfilled portion removed. Filled portion remains as active borrow. No fees. |
| User cancels partially filled order | Unfilled portion removed. Filled portion remains as active borrow. No fees. |
| Fill and cancel happen simultaneously (same slot) | Fill goes through. USDC goes to wallet. User can repay if needed. Fees are negligible on Solana. |
| User edits order during fill | Same as above — fill takes precedence at the slot level. |
| User tries to withdraw collateral below post-fill LTV buffer | Withdrawal blocked. User must cancel/reduce orders first. |
| Multiple orders of same asset | Not allowed. One order per debt asset per obligation. User can adjust existing order instead. |
| Order amount reduced to $0 by auto-reduction | Order is effectively empty but not cancelled. User can increase if collateral recovers. |

---

## 11. Open Questions

| # | Question | Owner |
|---|---|---|
| 1 | Exact UI update frequency for auto-reduction (1 min vs 5 min) | Engineering |
| 2 | Fill bot operational parameters (minimum fill size, frequency) | Engineering / Ops |
| 3 | Notification system for fills, auto-reductions, and expiry | Product / Design |
| 4 | Analytics events to instrument for success metrics | Product / Engineering |
