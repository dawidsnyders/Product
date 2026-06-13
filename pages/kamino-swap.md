# Kamino Swap

> **Liquidity** · deep product page. Canonical home for the swap product. Powered by [Routing](./routing.md) (the kSwap meta-aggregator, the Kobayashi on-chain router, and Limo limit orders) and priced by [Scope](./scope.md). The execution layer beneath [Multiply](./multiply.md), repay-with-collateral, and the [Liquidity](./liquidity.md) suite.

---

## Hero

# Best execution, proven on every trade.

Kamino Swap fans each order across the major Solana routing engines in parallel, simulates the winning route on-chain before you sign, and settles at the highest output any venue can deliver. Quoted output has matched settled output to 99.944% accuracy across more than 370,000 transactions.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## The execution problem Swap solves

A single liquidity venue only ever shows you its own price. On Solana, the best price for a given pair and size moves between venues trade by trade: a stablecoin pair clears best on one router, a long-tail token on another, a large size splits across several. The deeper your size, the wider the spread between venues, and the more a single quote sourced from one venue diverges from the best price the whole market can offer.

Kamino Swap closes that spread by running every venue against each other, per order, and taking the winner.

---

## The meta-aggregator

Kamino Swap is a [meta-aggregator](./routing.md): it sits one level above the aggregators themselves and makes them compete. For every order it queries the major Solana routing engines in parallel — among them Jupiter/Metis, DFlow, OKX, 0x, Titan, LI.FI, OpenOcean, Raydium, and Hashflow — collects their quotes, and returns the route with the highest output.

Route selection is dynamic and decided per trade. DFlow, Jupiter/Metis, and OKX handle the majority of volume, and any router can win the order when it returns a higher quote for that specific pair and size. As venues add liquidity or change their pricing, the winning route shifts with them automatically, so execution quality tracks the live state of Solana liquidity with no manual tuning.

Underneath the external aggregators sits [**Kobayashi**](./routing.md), Kamino's own on-chain swap router, plugged in as one more competing route source. Kobayashi discovers multi-hop paths across on-chain liquidity and competes for the order on the same terms as every external venue, winning when its path delivers more output. Owning a route source lets Kamino tune execution for the pairs the rest of the platform depends on most — tokenized RWAs, LSTs, and stablecoin pairs — and reach on-chain liquidity pools Kobayashi indexes directly, including pairs and venues outside the external aggregators' coverage.

---

## Best execution you can verify

Routing-engine quotes are estimates. Liquidity shifts in the seconds between a quote and a signature, and an estimate that looked best at quote time can settle worse. Kamino Swap closes that gap by simulating the trade on-chain, in three passes, before it ever asks you to sign.

- **On initial fetch** — when a route is first refreshed, its quoted output is checked against live on-chain state.
- **Mid-quote, at 2.5 seconds** — every candidate route is re-checked, and any that has gone stale is dropped.
- **On execution** — a final simulation runs at the instant the swap lands.

Only a route that survives all three passes reaches your wallet. Measured over more than 370,000 transactions, the realized output matches the quoted output to 99.944% on average. The number on the swap screen is the number you receive.

The interface makes both forces explicit. Price impact reflects how far your own size moves the market; slippage tolerance protects you against movement between quote and fill. The minimum output shown is the quoted output after price impact, less your maximum slippage — the floor you are guaranteed at settlement.

---

## Limit orders

Set a target price and Kamino holds the order on-chain until the market reaches it. Limit orders are powered by [**Limo**](./routing.md), Kamino's on-chain limit-order infrastructure, which escrows your input tokens and exposes the order to a competitive auction of searchers who race to fill it.

- **Execution at your rate or better.** A filled limit order settles at your specified minimum or above, with the fill locked to that rate.
- **Zero platform fee.** Kamino charges nothing on limit orders. Searchers pay you a tip in SOL to win the fill, and any execution above your minimum is returned to you as surplus.
- **Partial fills.** Orders fill incrementally as liquidity arrives; you claim filled tokens, tips, and surplus together when you close the order.

Searcher competition is the mechanism: each order draws bids from multiple searchers racing to win the fill, and the winning bid pays a SOL tip to the trader while any execution above the target price returns as surplus. Across more than $200M in limit-order volume, those tips and surplus have returned nearly $98,500 to traders on top of the prices they set.

---

## One engine, the whole platform

Swap is the execution layer the rest of Kamino is built on. Every product that has to move one asset into another calls the same meta-aggregator, simulation passes included, so the same best-execution path that settles a market swap also settles a Multiply loop, a collateral conversion, and a CLMM vault rebalance. Execution quality is a property of the whole platform, measured by the same 99.944% match.

- **[Multiply](./multiply.md)** — every leverage loop borrows, swaps, and redeposits in one atomic transaction. The entry and exit prices are set by the same routing competition, so a looped position is opened and closed at best execution.
- **Repay with collateral** — pay down debt by converting collateral directly into the debt asset in one atomic transaction, so the position closes in a single step. The conversion routes through Swap.
- **Swap collateral and debt** — restructure an open [credit](./credit.md) position by swapping the collateral you post or the asset you owe, executed at the best available route.
- **Vault conversions** — single-asset deposits and withdrawals on [Lending Vaults](./lending-vaults.md) convert through the same engine, so depositors enter and exit at best execution.
- **CLMM rebalances** — when a [Liquidity Vaults](./liquidity-vaults.md) position recenters its range, the swap that rebalances the two sides routes through the same meta-aggregator, so the vault holds its target ratio at best execution.
- **Liquidations** — the [liquidation engine](./liquidation-engine.md) sources fills through the same routing layer, which is part of how Kamino has cleared 100,000+ liquidations with zero bad debt.

---

## Priced by Scope

A best route is only honest if the price it routes against is honest. [Scope](./scope.md), Kamino's in-house pricing engine, gives Swap its reference and fallback prices: the same oracle stack that values collateral and triggers liquidations across the platform — with its staleness limits, divergence guards, and price bands — anchors what every quote is measured against. Routing decides where a trade clears; Scope keeps the benchmark it clears against true, and steps in as the fallback price when a venue's own feed goes quiet. That guard stack is what lets the 99.944% match mean what it says.

---

## Where Swap hands off

Two execution paths sit alongside Swap for the orders a market route cannot price well. For less-liquid tokenized assets and large institutional sizes, [RFQ](./rfq.md) sources fills from solvers and market makers who bid sub-second to win the order. For real-world assets that trade with no standing market maker, [RWA Liquidity](./rwa-liquidity.md) makes the oracle price the executable price, so a tokenized treasury or credit fund settles at its marked value on-chain. Swap, RFQ, and RWA Liquidity are the three best-price execution paths of the [Liquidity](./liquidity.md) suite, each reaching the best price by a different mechanism; [Liquidity Vaults](./liquidity-vaults.md) provides the liquidity those paths trade into.

---

## Economics

Kamino Swap takes zero platform fee on a market swap. The only cost between the best market price and your fill is Solana network gas plus the spread already priced into the underlying venues' liquidity. Every basis point the routing competition wins stays in your fill, so the gap between the best market price and what you receive is the on-chain transaction alone.

That difference compounds with size. Best execution earns the most on exactly the orders where price dispersion across venues is widest — large orders, thin pairs, and the leveraged and vault flows that route through Swap repeatedly. On a position that loops, rebalances, and unwinds, a fraction of a percent saved on each routed swap accrues across every leg, and on a strategy that turns over its size many times the saved basis points compound into a meaningful share of the return. Limit orders carry no platform fee either; searchers pay you to fill them, and surplus above your rate returns to you.

---

## Build on it

The same routing engine that powers the Kamino app is available as an API. One call to the swap endpoint runs the full meta-aggregator — every venue queried, the route simulated on-chain — and hands back a transaction ready to sign.

A request names the pair, the size, the slippage ceiling, and the wallet:

```
POST /swap
{
  "inputMint":  "<input token>",
  "outputMint": "<output token>",
  "amount":     "1000000000",
  "slippageBps": 50,
  "wallet":     "<user wallet>"
}
```

The response carries the priced route and the transaction to sign:

```
{
  "transaction":   "<base64 transaction>",
  "expectedOut":   "248731904",
  "minOut":        "247488244",
  "routeSource":   "DFlow",
  "priceImpactBps": 12
}
```

`expectedOut` is the simulated output, `minOut` is the floor guaranteed at settlement after slippage, and `routeSource` names the venue that won the order. Integrators get best-execution swaps for any pair their users need across Kamino's full venue set, with the same simulation-verified quotes the app runs on — which is why Multiply, the vaults, the credit products, and the liquidation engine all settle through this one endpoint.

**[Developer docs and API reference →](./developers.md)**

---

## Cross-links

- **Powered by:** [Routing](./routing.md) (kSwap meta-aggregator · Kobayashi on-chain router · Limo limit orders) · [Scope](./scope.md) (reference and fallback pricing)
- **Powers:** [Multiply](./multiply.md) · [Credit](./credit.md) (repay-with-collateral, swap collateral and debt) · [Lending Vaults](./lending-vaults.md) · [Liquidity Vaults](./liquidity-vaults.md) (CLMM rebalances) · [Liquidation engine](./liquidation-engine.md)
- **In the Liquidity suite:** [RFQ](./rfq.md) · [RWA Liquidity](./rwa-liquidity.md) · [Liquidity Vaults](./liquidity-vaults.md) · [Liquidity hub](./liquidity.md)

---

## Start swapping

Best execution on every trade, simulated on-chain before you sign, settled at zero platform fee. The same engine is one API call away for teams routing swaps at scale.

**[Contact sales](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)
