# Cross-chain

*Infrastructure · the Ethereum–Solana settlement bridge. Surfaced on [Scope](./scope.md), [Markets](./markets.md), [RWA Liquidity](./rwa-liquidity.md), [Asset issuers](./asset-issuers.md), and the [credit-against-tokenized-assets](./uc-credit-against-tokenized-assets.md) use-case.*

---

## Hero

# Ethereum-native assets, cleared on Solana

Tokenized gold, Ethena USDe, and the rest of the value that lives on Ethereum are first-class collateral on Solana. When one of those positions has to be liquidated or rebalanced, Kamino holds the collateral and the loan on Solana and clears the exit against Ethereum's order books — where the asset's deepest liquidity already trades. That settlement path is what lets a market borrow against XAUt0, an asset with a market cap north of a billion dollars on Ethereum, while keeping the lender protected at Solana speeds.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)

---

## The problem it solves

A lending market is only as safe as the worst liquidation it has to clear. When a borrower's collateral has to be sold, the protocol has to clear that collateral fast, at a fair price, with enough depth to cover the debt. Fall short and the gap lands on lenders as bad debt.

For assets native to Solana, that depth is already there. The assets institutions most want to borrow against — tokenized gold, Ethena's USDe, and a growing list of Ethereum-issued instruments — trade their deepest market on Ethereum. A freshly-bridged token can carry thin Solana-side liquidity, and forcing a large liquidation through a shallow on-chain pool moves the price against itself, widens slippage, and leaves the loan undercollateralized.

The bridge closes that gap. It lets a Solana market hold Ethereum-native collateral and clear it against Ethereum's full depth, so the same asset that trades a billion dollars on Ethereum can back credit on Solana while the lender is underwritten against the liquidity that actually exists.

---

## How it works

The cross-chain settlement engine runs as an extension of [the liquidation engine](./liquidation-engine.md). It watches the Ethereum-native reserves across Kamino's markets and steps in on two triggers: a position crossing its liquidation threshold, and a price mismatch a [vault](./vault-engine.md) needs rebalanced. When either fires, it runs the same round trip:

1. **Seize and bridge out.** The collateral — XAUt0, USDe — moves from Solana to Ethereum over the asset's canonical bridge, arriving as the same token on the chain where its depth lives.
2. **Clear on deep venues.** On Ethereum the engine sells into the market's full liquidity through institutional execution venues, so a large clip lands at the best available price across the venues quoting it.
3. **Bridge proceeds back.** Stable proceeds bridge back to Solana and settle the liquidation against the loan, restoring the lender's capital.

Every fill is **price-bounded**. The engine checks each execution against a configured limit — a fixed bound or a band off the live [Scope](./scope.md) feed — so it never sells through a bad print. The round trip is **interruptible and self-recovering**: if any leg stalls partway through, the engine reads its balances on both chains and continues from where it stopped, so capital is never lost or duplicated and no proceeds are stranded. When one venue stalls, the next picks up the fill, and the bound holds the whole way through.

The same engine runs in reverse as a **rebalancer**, buying or selling the Ethereum-native asset to hold a market's inventory and pricing in line — keeping the peg tight on the assets that need it and the collateral fairly valued.

**Economics.** The cross-chain path carries no separate protocol fee. Bridging and execution costs are covered by the liquidation penalty already priced into the market, the same penalty that funds any liquidation. For the borrower the cost of a cross-chain liquidation matches a same-chain one; for the lender the proceeds return whole.

---

## What it unlocks

### Tokenized gold as Solana collateral
XAUt0 — Tether Gold, redeemable for allocated physical gold — has a live market on Kamino where holders borrow USDT and stablecoins against their gold without selling it. The settlement bridge is what makes that market safe at size: a gold-backed loan liquidates against Ethereum's deep XAUt0 liquidity, so the Kamino market can scale far beyond what the local Solana pool could absorb on its own while the lender stays covered.

### Ethena USDe as locked-down collateral
The USDe market pairs the bridge with a full stack of [oracle](./scope.md) and [market](./markets.md) safeguards: a price-bounded oracle where the liquidation threshold sits below the price floor, so an ordinary depeg leaves positions untouched; circuit breakers on secondary-market moves across both Ethereum and Solana; tight caps; and [whitelisted liquidators](./permissioning.md). When a liquidation does have to happen, it unwinds in an orderly way at the oracle price, clearing into Ethereum's depth so the yield stays intact. USDe collateral autocompounds in place, so depositors never have to claim.

### A repeatable path for every Ethereum-native asset
Each asset that lives on Ethereum and needs Solana liquidity follows the same pattern: a guarded Scope feed, a tuned market, and the settlement bridge underneath. Onboarding a new Ethereum-native instrument as Solana collateral is a configuration exercise on rails that already clear gold and USDe in production.

---

## Why it's a moat

Cross-chain collateral lives or dies on one thing: the *liquidation*. A position can sit safely for months, then have to clear under stress, at size, at a fair price, with no path to bad debt — on a chain where the collateral does not even sit. Kamino builds that guarantee into the round trip itself. Ethereum supplies the clearing depth, Solana holds the collateral and the loan, and every fill is bounded by the oracle, routed across multiple execution venues, and recoverable if any leg is interrupted. The engine reads its balances on both chains and continues from wherever it stopped, so a stalled bridge or a thin venue degrades into a slower fill within the bound, and capital is never lost, duplicated, or stranded.

That sits on top of the same foundation the rest of the platform runs on. [Scope](./scope.md) prices the asset and bounds every fill. [The liquidation engine](./liquidation-engine.md) carries the $0-bad-debt record — $120M+ liquidated across 100k+ events without a loss to lenders. [Permissioning](./permissioning.md) gates who can liquidate sensitive positions. The bridge extends all of it across chains, so an institution can post Ethereum-native collateral and a Solana lender can underwrite it with the same confidence as a native asset.

---

## Where it sits

- **[Scope](./scope.md)** prices every Ethereum-native asset and supplies the live feed that bounds each cross-chain fill.
- **[Markets](./markets.md)** is where the Ethereum-native asset becomes a configured reserve — gold, USDe — with its own caps, thresholds, and oracle config.
- **[The liquidation engine](./liquidation-engine.md)** owns the safety record this extends across chains.
- **[RWA Liquidity](./rwa-liquidity.md)** gives the same off-Solana assets oracle-priced trading liquidity on Solana for entry and exit.
- **[Permissioning](./permissioning.md)** restricts liquidation of regulated and sensitive positions to whitelisted parties.

For the buyer's view of how this composes into a credit offering, see **[Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md)** and the **[Asset issuers](./asset-issuers.md)** page.

---

## Talk to us

Bring an Ethereum-native asset you want to make usable as Solana collateral, or underwrite credit against gold and USDe on rails that already clear in production.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)
