# Multiply

**Leverage, in one transaction.** Deposit one asset, choose a multiplier, and Multiply builds the entire looped position — borrow, swap, and redeposit — in a single atomic step, reaching 10x on staked SOL. Hold it at a variable rate or lock your borrow cost to a fixed term, and run it across staked SOL, stablecoin carry, tokenized credit, and tokenized equities.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## What Multiply does

A leverage loop is a familiar position: deposit collateral, borrow against it, use the proceeds to buy more collateral, and repeat until you reach your target exposure. Done by hand, that is a dozen transactions, slippage at every hop, and a window of partial exposure on each one.

Multiply collapses the whole loop into one signature. You set the deposit and the multiplier; the position opens, adjusts, or closes atomically. A flash loan sources the capital the loop needs, [Kamino Swap](./kamino-swap.md) converts it into your target collateral at best execution, the collateral deposits and the debt draws against it, and the flash loan repays — all inside a single transaction. If slippage or liquidity would break any step, the whole transaction reverts, so a position is never left half-built.

The fee schedule is one line: a 0.001% flash-loan charge each time you open, adjust, or close. That is the complete cost — the carry the position earns belongs to you. Your economics are the spread itself: what your collateral earns, minus what your debt costs, amplified by leverage.

---

## The math you are underwriting

Multiply is a carry trade. Your return is the spread between collateral yield and borrow cost, multiplied by how much you have levered it:

> **Net APY = Collateral Yield + Yield Spread × (Leverage − 1)**

A worked 8x JitoSOL/SOL position makes it concrete. Deposit 1,000 SOL, lever to 8x, and you hold 8,000 SOL of JitoSOL exposure. JitoSOL staking yields ~7% (560 SOL a year); the SOL you borrow costs ~6% (420 SOL a year). The net is 140 SOL on your 1,000 — a 14% APY on the capital you put in. That 14% is the 7% staking yield on your own deposit plus the 1-point spread earned on the 7x of borrowed exposure (1% × 7 = 7%), the two adding to 14%.

At a 14% gross carry, the 0.001% flash-loan fee to open the position costs roughly 0.01 SOL on the 140 SOL the year returns. The fee is priced to disappear against the carry, so your P&L tracks the spread the strategy was built to capture.

The same amplification cuts the other way. Borrow rates on the variable markets move with utilization, and if a borrow rate climbs above your collateral yield, the spread inverts and leverage works against you. Two tools address that directly: pick a position where the spread is structurally stable, or lock the borrow side to a fixed term.

---

## Strategy families

Multiply runs as curated strategies, each a collateral-and-debt pair tuned in its own [market](./markets.md) with the leverage ceiling its risk profile supports.

### Staked SOL (LST loops)
JitoSOL, mSOL, bSOL, JupSOL, dfdvSOL, and adraSOL looped against SOL. Because collateral and debt are both SOL-denominated, the position's loan-to-value barely moves with SOL's dollar price — both legs rise and fall together. Leverage reaches **10x in the Jito market** (90% max LTV) and 7.5x in the Main market. This is the deepest, highest-volume family on Kamino.

### Stablecoin and tokenized-credit carry
Dollar-denominated loops where both legs hold stable USD value, so loan-to-value stays flat through price moves and liquidation is driven by the rate spread alone:
- **PRIME / PYUSD** and **PRIME / USDC** — leverage on Figure's tokenized private-credit asset, up to **8.3x**. PRIME pays a ~8% base yield; against a 5–6.5% stablecoin borrow cost, the carry runs at roughly 8% plus a 1.5–3 point spread on 7.3x of borrowed exposure.
- **syrupUSDC / USDC** — Maple's yield-bearing stablecoin position, in the same tokenized-credit group up to **8.3x**.
- **CASH / PYUSD** — a stable-stable loop up to **10x**; with both legs holding dollar value, the position's health turns entirely on the rate spread between them.
- **ONyc / USDC** — OnRe's tokenized reinsurance yield, looped as a dollar-denominated position.

### Tokenized equities (xStocks)
Lever tokenized US equities — AAPLx, GOOGLx, HOODx, MSTRx, NVDAx, QQQx, SPYx, TSLAx — against USDC, up to **2x**. The same one-click loop that runs on staked SOL runs on a tokenized share of Apple or the S&P 500, with leverage held conservative because the collateral carries the underlying equity's full price risk.

### JLP
The Jupiter liquidity-provider token looped against USDC or PYUSD, up to 3.2x — leveraged exposure to a basket that already carries BTC, ETH, and SOL.

The strategy set grows as new assets clear onboarding. Whatever [Scope](./scope.md) can price safely and a market can carry, Multiply can loop.

---

## Fixed-rate Multiply

Fixed-rate Multiply locks the borrow leg of a leveraged position for a chosen term, so the carry becomes a known spread over a known duration: collateral yield against a borrow cost you have already fixed, held steady even when the variable market spikes mid-position.

Choose a term — 1, 3, 6, or 12 months — and the borrow rate holds for the life of the loan. Rates sit on a grid of rate × duration cells (illustratively, USDC at 5.5% for 3 months), each a distinct rate-and-term pool that draws liquidity from [conditional vault allocations](./vault-engine.md). Those allocations earn variable yield until your draw lands, then move into the fixed-rate loan in the same step the position opens.

At maturity the position rolls over automatically, with an orderly wind-down at term. The Multiply-specific decision is simple: which leg of the loop you want to be certain about, and for how long.

See [Fixed Rates](./fixed-rates.md) for the full rate-and-term mechanics — the rollover paths, the grace window, the early-repayment terms, and the on-chain yield curve the grid produces.

---

## How a position stays safe

Every Multiply position carries a liquidation threshold — the loan-to-value at which the [liquidation engine](./liquidation-engine.md) steps in. Higher leverage means a thinner buffer between where you sit and where that engine acts: at 8x on a 90%-LTV market, a position opens within a few points of its threshold, so the right multiplier is set by how stable your spread is and how much liquidation buffer you want to keep above it.

The strongest proof that the model holds is the record itself: across the staked-SOL family, a swing in SOL's dollar price has never on its own pushed a position into liquidation, because collateral and debt move together in SOL terms. Three structural protections hold the position's health steady through a price move, leaving the rate spread as the one variable a holder actively manages — the lever Fixed-rate Multiply locks down.

- **Stake-rate oracle pricing for LSTs.** [Scope](./scope.md) prices a staked-SOL collateral at its stake-pool exchange rate (SOL staked ÷ LST minted) — the redemption value — so liquidation tracks the stake-pool rate and rides through any secondary-market discount on the LST.
- **Same-denomination loops.** When collateral and debt move in the same currency — JitoSOL against SOL, PRIME against PYUSD — the loan-to-value holds steady through the underlying's price swings, because both legs reprice together.
- **Atomic adjustment.** Deleveraging, adding leverage, and closing all run through the same single-transaction flash-loan path, so a position is never exposed to price between steps. The whole sequence either completes or reverts.

Behind all of it sits Kamino's liquidation track record: $120M+ liquidated across 100,000+ events with $0 bad debt, and oracle pricing that has processed $19.33B with zero exploits. [See the full security and risk apparatus →](./security.md)

---

## Where Multiply fits

Multiply is built on the same infrastructure as the rest of Kamino's credit stack, which is what lets a single product span staked tokens, stablecoins, real-world credit, and equities.

- **[Markets](./markets.md)** — every Multiply strategy is a position inside a market, using an elevation group to run correlated collateral and debt at high LTV. The market's parameters set the leverage ceiling.
- **[Routing](./routing.md)** — the kSwap meta-aggregator and Kamino's on-chain router fill every loop, deleverage, and close at best execution.
- **[Scope](./scope.md)** — prices health, liquidation distance, and the stake-rate values that protect LST loops.
- **[Fixed Rates](./fixed-rates.md)** — the term-locked borrow side of fixed-rate Multiply.

Multiply also threads through the rest of the site, wearing a different role on each surface:

- The leverage layer of the [Credit hub](./credit.md), turning a borrow line into a sized, looped position.
- The amplifier on the [Yield hub](./yield.md), levering a yield-bearing deposit into a larger carry.
- A distribution channel for issuers, putting leveraged demand behind their assets in [credit against tokenized assets](./uc-credit-against-tokenized-assets.md) and [BTC-backed credit](./uc-btc-backed-credit.md).
- A one-tap position for [individuals](./individuals.md) in the Kamino app, the same loop the desks run, opened with a single deposit.

---

## Open a position

Funds and trading firms running carry at scale, with rate certainty and bespoke leverage on assets they care about, should [contact sales](./contact-sales.md). To open a Multiply position now, [launch the app](https://kamino.com/home).

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
