# Liquidation Engine

*Infrastructure · nested under [Credit](./credit.md) · surfaced on [Multiply](./multiply.md), [Curation](./curation.md), [Permissioning](./permissioning.md), and [Security](./security.md)*

---

## The engine that keeps lenders whole

Every loan on Kamino is overcollateralized, and the liquidation engine is what makes that promise hold under stress. When a borrower's position drifts toward insolvency, the engine winds it down in measured steps — early, cheaply, and with execution sourced from [Kamino's own routing](./routing.md) — so collateral is recovered while it still covers the debt it backs.

Since November 2023, the engine has cleared more than **$120M of collateral across 100,000+ liquidations** through every market condition the protocol has faced, and lenders have closed each one whole: **$0 bad debt**. Five of those events were full market crashes; in the largest, a 48-hour SOL drop in February 2026, the engine ran **55,649 liquidations across 30,030 wallets** and still ended at zero.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## How a liquidation works

The engine reads one number continuously: a position's current loan-to-value against its liquidation threshold, both set per asset in [Markets](./markets.md). Both are risk-adjusted — borrow factors compress the safety margin on volatile debt, and [Scope](./scope.md) supplies the collateral price. The moment current LTV crosses the liquidation LTV, the position becomes liquidatable, and a permissionless network of bots that watch every market can act.

**Closed in slices.** Each round closes a fraction of the position — a configured close factor — and leaves the rest of the loan intact. If the position is still unhealthy after a round, another round follows automatically. Between rounds, the borrower can add collateral or repay debt and stop the process. A leveraged trader who crosses the liquidation threshold by a small margin loses a slice of the position and keeps room to recover the rest.

**A penalty that starts at almost nothing.** The liquidation penalty opens near zero and escalates the longer a position sits unhealthy. That structure aligns everyone: a liquidator earns enough at the opening rate to act on the very first block a position crosses, so unhealthy positions get cleared fast and borrowers lose the least collateral when they are caught early. The escalating curve only bites on positions that linger, and the design exists to keep them from lingering.

**Execution that finds the real price.** Recovered collateral is swapped through [Routing](./routing.md) — the same meta-aggregator and on-chain router that powers every swap on Kamino — so the engine sells into the deepest available liquidity across the market. Better fills mean more debt repaid per unit of collateral, which is the difference between a clean liquidation and a shortfall.

---

## Soft liquidations and auto-deleverage

Standard liquidation handles the everyday case: a single position crosses its threshold and gets trimmed. Two situations call for a slower, governed wind-down — a position too large to liquidate into thin liquidity, or an asset whose backing has come into question. For these, the engine runs **auto-deleverage**, an orderly unwind that clears risk before it can become bad debt.

It begins with a decision. Kamino's risk team initiates auto-deleverage through [multisig governance](./security.md) when an asset's market depth can no longer absorb a clean liquidation, or when a token's contract, backing, or oracle integrity is compromised. These are the scenarios that have produced bad debt elsewhere in DeFi: an oversized position in a market too shallow to exit, an asset that quietly lost its peg.

**A penalty-free grace window.** Affected borrowers get notice and a window in which **no penalty applies**. They can restructure, repay, or add collateral on their own terms. If exposure to the flagged asset falls back under its new cap organically, the unwind never proceeds. The window compresses only when the risk to lenders is acute enough to warrant it.

**A ramped, soft unwind.** When the window closes, the protocol sets a reduced cap and deleverages positions proportionally — highest-LTV accounts first. The penalty sits in the soft-liquidation band of **10 to 60 basis points** and ramps with both the position's LTV and the days elapsed, capped at the lowest liquidation penalty among the position's assets. The eligibility threshold itself eases downward over time, so the cost of waiting rises and voluntary action during the grace window stays the cheaper path. Throughout, only borrower positions are touched, and lender capital is held clear of the unwind.

This is the engine's last line, held governed and armed, and the upstream guards have kept it from ever needing to fire in production. Its presence is why the largest and most fragile positions on the platform carry a defined path to safety long before solvency is in question.

---

## Maturity liquidations for fixed-term credit

[Fixed Rates](./fixed-rates.md) introduce a second way a loan can go wrong: a borrower who reaches the end of a fixed term without repaying or rolling over. Here the trigger has nothing to do with price. An expired fixed-term loan is a contractual breach, and the engine treats it as one — the position becomes liquidatable at maturity regardless of how healthy the collateral looks.

The unwind opens gradually. The liquidatable fraction grows from zero at term end toward the full position over a configured window, so a borrower who is briefly late still has room to settle. Liquidators earn a deleveraging bonus that starts at a per-reserve floor and climbs each day to a ceiling, which keeps maturity liquidations economically live while sparing a borrower who repays quickly. A protocol-enforced maturity liquidation takes priority over normal flow limits and repays lenders who have already requested to exit ahead of new borrowing demand. After expiration there is no rollover path; the term is the term, and the engine enforces it.

This is what lets the [Vault engine](./vault-engine.md) quote a fixed-rate yield curve with confidence: the lender's right to be repaid at maturity is enforced by the same machinery that protects every other loan.

---

## Scam-wick protection at the oracle layer

The most common way lending protocols generate bad debt is a manipulated price — a single-block wick that briefly marks collateral far below its true value, triggering liquidations that should never have happened, or a transient depeg that wipes out healthy positions. Kamino defends against this before the liquidation engine ever sees a price, inside [Scope](./scope.md).

A guard stack filters every price the engine acts on:

- **Price bands** reject any value outside the range the contract expects for an asset — for a dollar stablecoin, a tight band around $1.00. An out-of-band print is discarded and the protocol falls back to the last valid price or an alternative provider.
- **Divergence and staleness limits** take the freshest of several independent feeds and cap how far they may disagree, so a single manipulated source cannot move the price the engine reads.
- **On-chain time-weighted averages** spread the price across a window, so a one-block manipulation contributes a vanishing fraction of the value the engine sees, and sustaining the attack across the whole window costs far more than any position is worth.

Because liquidation prices flow through these guards, a position can be configured so that a brief depeg cannot liquidate it at all. The borrower who held a sound, overcollateralized position through a flash wick keeps it. This guard stack is why Scope has priced **$19.33B+ with zero oracle exploits**, and it is the reason the liquidation engine's track record holds: the engine only ever acts on prices that survived the filter.

---

## Liquidate as a permissioned operator

By default, liquidation is open — any bot can call it, and a competitive market of liquidators keeps positions cleared. For [Permissioned Markets](./permissioned-markets.md) holding regulated or institutional assets, that openness is gated. Through [Permissioning](./permissioning.md), a market operator can restrict liquidation to a set of **whitelisted liquidators** — approved parties who meet the market's compliance and operational bar — while keeping deposit and borrow gating independent. A regulated security can't be seized and resold by an anonymous bot, so the operator clears the counterparties allowed to handle it. The asset gets the same liquidation engine, fired only by parties the operator has approved.

For ETH-native collateral such as tokenized gold or USDe, liquidation routes through the [Cross-chain](./cross-chain.md) bridge, which unwinds and rebalances those positions on deep Ethereum venues — keeping off-Solana assets safe to lend against on Solana.

---

## The safety comes built in

When you launch your own market or vault through [Curation](./curation.md), the liquidation engine is part of the rails from the first block. You configure the parameters that govern it — liquidation thresholds, close factor, the penalty floor and ceiling, the maturity-liquidation ramp, and whether liquidators are open or whitelisted — and the engine, the [oracle guards](./scope.md) that price every position, and the [routing](./routing.md) that executes recoveries all come standard. A curator stands up a venue through [Markets](./markets.md) and inherits a liquidation system carrying a $120M+ cleared, $0-bad-debt record, with no engine to build and audit.

This is one face of what it means for Kamino to stand behind the system end to end: Kamino operates the pricing that decides when a position is liquidatable, the risk framework that sets the parameters and arms auto-deleverage, and the execution that recovers collateral — one accountable counterparty for the machinery that protects lender capital, with the same engine, guards, and record behind a curated venue as behind Kamino's own markets.

---

## The record

Across the documented market crashes since November 2023, the engine has held every time:

| Event | Window | Collateral seized | Bad debt |
|---|---|---|---|
| Flash correction | Feb 16–18, 2025 | $4.1M | $0 |
| Multi-day correction | Feb 24–Mar 2, 2025 | $22.1M | $0 |
| SOL / ETH crash | Apr 6–7, 2025 | $16M | $0 |
| October correction | Oct 10, 2025 | $20M | $0 |
| SOL −18% crash | Feb 5–6, 2026 | $19.4M | $0 |

The February 2026 event ran **55,649 liquidations across 30,030 wallets** in 48 hours as SOL fell 18%, ETH around 15%, and JLP around 10%, and closed at $0 bad debt. These five crashes sit inside a longer record: more than **$120M of collateral cleared across 100,000+ liquidations** since November 2023, with lenders made whole on every one.

The full security posture — audits, formal verification, oracle resilience, and the live transparency dashboards — lives on [Security](./security.md).

---

## Build on Kamino

The liquidation engine is one of the rails every credit product runs on. See it in context on [Credit](./credit.md), [Multiply](./multiply.md), and [Curation](./curation.md), the oracle guards on [Scope](./scope.md), the whitelisted-liquidator path on [Permissioning](./permissioning.md), and the full track record on [Security](./security.md).

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
