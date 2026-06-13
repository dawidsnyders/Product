# Routing

*Infrastructure · the execution layer beneath Credit, Liquidity, and Yield. Canonical home of the proprietary execution stack — the kSwap meta-aggregator, the Kobayashi on-chain router, and Limo limit orders. Surfaced on [Liquidity](./liquidity.md), [Kamino Swap](./kamino-swap.md), [Multiply](./multiply.md), [Credit](./credit.md), [RWA Liquidity](./rwa-liquidity.md), and the [Asset issuers](./asset-issuers.md) page.*

---

## Hero

# Every trade, settled at the best price on-chain.

Routing is the execution engine the whole platform runs on. When a position loops in [Multiply](./multiply.md), a loan is repaid with collateral, a vault rotates capital, or a tokenized asset changes hands, one stack finds the best available price and settles it. It queries 15+ Solana routing engines on every trade, simulates the winning route against live on-chain state through to the moment of execution, and returns a ready-to-sign transaction. The same engine is exposed as a single API call, so any application can route through Kamino and inherit best execution as a primitive.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

> **15+** routing engines competing on every trade · **99.944%** mean match between quoted and settled output · **370,000+** transactions measured

---

## The execution stack

Three layers run as one engine. kSwap sits at the top and competes the others against each other; Kobayashi and Limo plug into it as native route sources. Each layer is callable on its own.

### kSwap — the meta-aggregator

kSwap is the top of the stack: a router-of-routers that competes the entire Solana execution landscape against itself on every trade. For a given input and output, it queries more than fifteen routing engines at once — among them Jupiter/Metis, DFlow, OKX, 0x Settler, Titan, LI.FI, OpenOcean, Raydium, Hashflow, and Kamino's own Kobayashi router — collects their quotes in parallel, and selects the highest output the network can produce at that instant. Every venue earns its volume on the same test: the route that fills your order is the one returning the most tokens for that specific pair and size, and the winner can change trade to trade.

This is what "best execution" means in practice. Kamino charges no platform fee on a routed swap; your cost is the on-chain transaction and the executing venue's own spread, and the full price improvement lands in your fill.

### Kobayashi — the on-chain router

Kobayashi is Kamino's own on-chain swap router, built in-house and plugged into kSwap as one of its competing route sources. It discovers multi-hop paths across on-chain liquidity and constructs and executes that path in a single atomic transaction. Because Kamino owns this router end to end, it is tuned for the assets the platform cares about most — tokenized RWAs, LSTs, and stablecoin pairs — and it competes alongside every external aggregator for the right to fill each order on merit.

### Limo — on-chain limit orders

Limo is Kamino's on-chain limit-order infrastructure. A trader sets a target rate; the input is held in on-chain escrow and the order rests until the market reaches it. A network of searchers competes in an auction to fill resting orders, and the winning searcher pays the trader a SOL tip as part of execution. The escrow and a guaranteed minimum-output floor on every fill make that competition safe for the trader: a searcher can only win by delivering at or above the rate the trader set, and any output above that minimum returns to the trader as surplus. Orders fill incrementally as liquidity arrives, can be canceled at any time before they fill, and carry no platform fee. Across the first $200M in limit-order volume, surplus and tips have returned nearly $98,500 directly to traders.

Limo resting liquidity also flows back up into kSwap as another source the aggregator can route into, so a market order and a resting limit order draw on the same on-chain book.

---

## How best execution is enforced

Finding the best quote is the first half of the job. The trade then has to land at that price, which is where most on-chain execution leaks value. Between the moment a route is quoted and the moment it executes, the chain moves — liquidity shifts, prices drift, a route that looked best a second ago no longer is.

Kamino closes that gap with a continuous simulation process that re-checks every candidate route against live on-chain state from the moment routes are first refreshed through to the instant of execution. A route only fills if its simulated output still holds. Across more than 370,000 transactions, the mean accuracy between the output Kamino quotes and the output a trader actually receives is 99.944%. The number that appears in the interface is the number that settles.

That accuracy holds because the price the router measures against is itself anchored. [Scope](./scope.md), Kamino's pricing layer, supplies the reference and fallback prices the engine benchmarks every candidate route against; when a venue's feed goes stale or drifts from the broader market, Scope's reference price is what flags the discrepancy and keeps the simulation honest. The 99.944% match is the output of that pairing — competitive route discovery measured against a price that is independently anchored.

This matters most where execution touches managed capital and tokenized assets. A [Multiply](./multiply.md) loop, a repay-with-collateral, a vault's single-asset deposit, a liquidation, and the on-chain settlement of a tokenized fund or equity position all execute through this same engine. A fraction of a percent of slippage compounds across leverage, across every vault rebalance, and across every redemption of a tokenized holding, so each fill is a measurable drag on realized return. For an institution running client capital through Kamino, the gap between the quoted price and the settled price is the difference between the return shown to a client and the return actually booked — best execution here is a direct lever on that number, measured at 99.944% and anchored to a price [Scope](./scope.md) supplies and continuously guards.

---

## One engine, every surface

Routing is shared infrastructure. The same stack powers consumer trades and institutional position management, and no surface maintains its own integration.

- **[Kamino Swap](./kamino-swap.md)** — the direct trading surface. Every swap is a best-of-15+ competition settled with simulated-accurate execution.
- **[Multiply](./multiply.md)** — one-click leverage. Entering, adjusting, and exiting a loop are all routed swaps; tighter execution means less slippage drag on every leg of the loop.
- **[Credit](./credit.md)** — repay-with-collateral, swap-collateral, and swap-debt let a borrower manage a position in place. Each is a routed swap wrapped in a flash loan, settling at best execution against live state.
- **[Liquidity](./liquidity.md)** and **[RWA Liquidity](./rwa-liquidity.md)** — vault deposits, rebalancing, and the oracle-priced settlement of tokenized assets all draw on the same routing layer.
- **The [liquidation engine](./liquidation-engine.md)** — liquidations route through this stack to unwind collateral efficiently, which is part of why bad debt has stayed at zero.

Because every surface calls the same engine, a single improvement to execution quality reaches all of them at once.

---

## Why it holds up

Best execution is a claim that has to survive contact with a live market, and Kamino's holds because of how the stack is built.

**Breadth of competition.** Querying more than fifteen engines on every trade puts the best price the network can produce inside the set Kamino competes. Kobayashi and Limo widen that set as native sources carrying liquidity Kamino controls, so Kamino's own liquidity competes for Kamino's order flow on the same merit test as every external source.

**Adversarial resilience.** A live market produces stale feeds, thinning pools, and quotes that decay between discovery and execution. The continuous simulation re-checks each candidate against on-chain state through to the fill, and Scope's reference price catches a venue whose feed has drifted before it can win a route. A 99.944% match between quoted and received output across 370,000+ transactions is the measurable form of that promise, and it is the property institutional flow underwrites a platform on.

**Aligned economics.** Route selection ranks on output to the trader and nothing else. Kamino earns no fee on the routed swap, so there is no fee to bias the ranking toward one source over another, and the entire price improvement stays with the trader.

**Shared by the whole platform.** Because the same engine settles consumer swaps, leverage loops, in-place credit management, vault rotation, and liquidations, execution quality is a platform-wide property tied directly to the safety record on [Security](./security.md) — every position is unwound and rebalanced through the same verified path.

---

## Build on Kamino's execution

For integrators, the entire stack collapses into a single request. One call to the kSwap endpoint — with an input mint, an output mint, an amount, a slippage tolerance, and a wallet — returns a fully built, simulation-checked transaction with the winning route, the expected output, and the minimum output already resolved. Kamino holds the route logic and the fifteen-aggregator competition behind that single call; your application decodes the transaction, signs it locally, and submits it. Custody stays with your user throughout.

This is how a wallet, an exchange, or a fintech adds Solana swaps to its product with execution quality matched to Kamino's own app. The same call powers Kamino's consumer interface and a partner's embedded swap, so an integrator ships one endpoint and inherits the same route discovery, the same Scope-anchored simulation, and the same settled-accuracy track record the platform runs on its own flows. Kamino operates that layer end to end — the route logic, the aggregator competition, and the pricing benchmark — and runs it as a single integration surface an integrator works with directly. Routing is part of the broader [BuildKit](./buildkit.md) surface, documented for engineers in the [Developers](./developers.md) hub.

**Economics.** Kamino charges no platform fee on a routed swap, on either its own surfaces or the integrator path; the cost on every swap is the on-chain transaction and the executing venue's spread. On limit orders, traders receive execution surplus and searcher tips on top of the rate they set. The integrator path carries no take rate on routed volume, so integrators set their own application-level pricing on top and keep that revenue in full. Their pricing layers above Kamino's execution; the fill the trader receives is the raw output of the winning route.

---

## Related

- **[Kamino Swap](./kamino-swap.md)** — the trading product this engine powers.
- **[Multiply](./multiply.md)** — leverage built on routed execution.
- **[Liquidity](./liquidity.md)** — the hub this stack sits beneath.
- **[Scope](./scope.md)** — the pricing layer that provides reference and fallback prices to the router.
- **[BuildKit](./buildkit.md)** / **[Developers](./developers.md)** — embed Kamino's execution in your product.
- **[Security](./security.md)** — audits, formal verification, and the execution track record.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
