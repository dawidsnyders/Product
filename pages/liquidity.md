# Liquidity

> **Hero**
>
> # Trade any asset at the best price the whole market can offer.
>
> Route a $1 swap or an institutional-size RWA fill across more than fifteen execution venues at once, simulated against live on-chain state before it signs and filled at the output you were quoted. Make a newly issued asset tradable against its oracle price from day one, run concentrated liquidity as a single deposit, and let large orders clear through a solver auction.
>
> One execution stack settles all of it — quoted output has matched settled output to 99.944% accuracy across more than 370,000 transactions, and it carries the trading and exit liquidity behind Kamino's $1B+ in tokenized real-world asset deposits.
>
> **[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## The execution layer for the tokenized economy

A meta-aggregator and proprietary on-chain router find the best price. An on-chain request-for-quote auction fills large orders from a network of professional solvers. Oracle-priced pools make a newly issued asset tradable from its first day on-chain. Automated concentrated-liquidity vaults turn LP management into a single deposit. The same execution stack drives all of it — exposed directly in the app, embedded in partner products, and called by the rest of Kamino.

---

## Kamino Swap — best execution, verified before you sign

[Kamino Swap](./kamino-swap.md) is a meta-aggregator. For every trade it fans out to more than fifteen routing engines in parallel — Jupiter/Metis, DFlow, OKX, Titan, 0x Settler, LI.FI, OpenOcean, Raydium, Hashflow, and Kamino's own on-chain router among them — ranks every quote, and executes the one that returns the most output. The best route for a given pair and size changes constantly, so the routing decision is made fresh on every swap.

What makes the price you see the price you get is on-chain simulation. Kamino runs each candidate trade through the actual on-chain state at every step: a simulation that verifies accuracy the moment a quote is shown, a re-check that discards routes whose state has moved on while you decide, and a final simulation at the instant of execution. The minimum output you approve already accounts for price impact and your slippage tolerance, so the trade fills inside that band or it reverts. That discipline is what holds quoted output to settled output at 99.944% accuracy across more than 370,000 transactions.

**Economics.** Kamino Swap charges zero platform fees. You pay only on-chain transaction costs and the underlying venue's spread.

This same engine runs underneath the platform. [Multiply](./multiply.md) uses it for the flash-loan swaps that open a leverage loop. Credit uses it to repay-with-collateral and to swap collateral or debt in place. [Lending Vaults](./lending-vaults.md) use it to convert single-asset deposits and withdrawals. Every surface that moves a token routes through the same best-execution engine.

[Explore Kamino Swap →](./kamino-swap.md)

---

## RFQ — solver-filled liquidity for large and thinly-traded orders

RFQ serves orders that are too large or too specialized for a continuous order book to absorb — newly issued RWAs, private-credit tokens, less-liquid stablecoins. It fills them through an on-chain request-for-quote auction. When an order arrives, Kamino opens a fixed-window auction; professional solvers and market makers compete to fill it; the winning solver co-signs the transaction; the user signs and submits. The fill is point-to-point and the winning quote is delivered privately to the requester, so order flow and route details stay confidential through the auction.

This is how holders move in and out of a tokenized asset on demand. Each request is filled by a professional solver quoting live, so a holder can exit a position the moment they want to, at the size they need. For an [asset issuer](./asset-issuers.md), RFQ gives holders on-demand exit filled by competing market makers, alongside instant collateral status and oracle pricing. For a market maker, RFQ is a venue — integrate as a solver and quote into Kamino's order flow. And because solver competition discovers a real clearing price, RFQ also feeds price discovery for [Fixed Rates](./fixed-rates.md) credit.

**Economics.** RFQ charges no platform fee on the requester. Solvers compete on the quote, so price improvement from that competition flows to the user; the solver's margin is priced into the quote it wins with.

[Explore RFQ →](./rfq.md)

---

## RWA Liquidity — the oracle price is the liquidity price

A tokenized treasury, a piece of private credit, tokenized gold, a fund share — each one trades against its own audited valuation from the day it's issued. [RWA Liquidity](./rwa-liquidity.md) makes the asset tradable using its oracle price as the quote. Each pool draws its price directly from [Scope](./scope.md), Kamino's pricing engine, so a holder can trade the asset against a guarded, audited valuation from its first day on-chain. Scope has priced $19.33B of value with zero oracle exploits, and it's the same feed the asset borrows and liquidates against, so trading, credit, and risk all read one published price.

Each pool is configured per asset — the curve, the price feeds it reads, spreads, and status are all set for the specific instrument. Because Scope handles the things a generic crypto oracle can't (equity market hours and halts, corporate-action windows, NAV pause signals, proof-of-reserves guards against an unbacked mint), the same liquidity model extends to assets that live off Solana entirely. The [Ethereum–Solana bridge](./cross-chain.md) lets off-chain-native RWAs like tokenized gold and Ethena's USDe rebalance and liquidate on deep Ethereum venues while serving as collateral and trading liquidity on Solana.

Live pools include PRIME (Figure/Hastra), the flagship tokenized private-credit asset that scaled past $600M in deposits, alongside syrupUSDC (Maple), tokenized gold (XAUt0), and USDe. Across six RWA markets, tokenized assets hold more than $1B in deposits on Kamino. External aggregators route into these pools, so the liquidity is part of the open Solana market, reachable from anywhere on-chain.

**Economics.** Standing up a pool carries no listing fee. The issuer sets the pool's spread, and that spread is the pool's revenue on each trade. Kamino earns a protocol take rate on the credit and trading activity the asset generates across the platform, so both the issuer's pool revenue and Kamino's take scale with how actively the asset is used.

[Explore RWA Liquidity →](./rwa-liquidity.md)

---

## Liquidity Vaults — concentrated liquidity as a single deposit

Concentrated liquidity earns the best fees on Solana, and it demands the most work: you have to set a price range, rebalance when price leaves it, compound the fees back in, and balance the token ratio on every deposit. [Liquidity Vaults](./liquidity-vaults.md) automate all of it across Orca and Raydium. You deposit; the vault does the rest.

- **Auto-swap** lets you deposit or withdraw a single token — the vault converts to the correct ratio for you.
- **Auto-rebalance** moves the position back into range when price exits it, executed automatically by Kamino while you stay hands-off.
- **Auto-compound** reinvests trading fees and rewards back into the position continuously, so each kToken — your receipt for a share of the vault — redeems for a steadily larger slice of the underlying pool.

Curators tune each vault's range against volatility and realized fee data, targeting the combination that maximizes net return after rebalance costs and impermanent loss. A concentrated range packs the vault's capital into the price band where trades are actually happening, so a larger share of every dollar deposited earns fees at the current price. That concentration is where the fee advantage comes from.

The automation runs behind hardened safety controls. Rebalances check the pool price against an on-chain time-weighted average and reject moves where the two diverge beyond a per-strategy limit; deposits that trigger an investment are gated and rate-limited, with a cooldown and a minimum amount, so the vault can't be baited into supplying liquidity against a manipulated price. You hold a kToken whose exchange rate reflects the growing pool of underlying assets behind it.

**Economics.** Performance is paid out of yield: trading fees and rewards compound into the position before the kToken rate moves, so depositor returns are shown after the costs of running the strategy. Accessing a vault carries no subscription and no separate management charge; Kamino earns a protocol take rate on the underlying activity. Curators who run their own pools set their own fee terms through the [Curation Suite](./curation.md).

[Explore Liquidity Vaults →](./liquidity-vaults.md)

---

## Limit orders — filled at your set rate or better

Set a target price and the order rests on-chain until it fills or you cancel it. The input token is escrowed for you; searchers compete in an auction to fill the order, and the winning searcher pays a tip back to you as part of execution. Orders fill at your set rate or better and can fill incrementally as liquidity arrives. You keep control throughout: the order executes from the parameters you set, and Kamino holds your assets at no point.

**Economics.** Limit orders carry no platform fees. Searcher competition for your order returns a tip to you on each fill, on top of any price surplus over your target.

Limit orders run on the same execution stack as best-execution routing. The [Routing infrastructure](./routing.md) page covers how resting orders feed the wider routing network.

---

## Surfaces and infrastructure

Liquidity composes Kamino's shared infrastructure. Each piece has a canonical home:

- **[Routing](./routing.md)** — the meta-aggregator queries every connected venue in parallel and verifies the winning route through on-chain simulation, so the displayed quote is the output of a live simulation against current on-chain state. Kamino's own on-chain router and limit-order layer feed into the same stack as native sources, so the platform competes for its own order flow against the rest of the market. This single engine serves a $1 retail swap and an institutional-size RWA fill alike, exposed directly in the app, embedded in partner products, and called internally by Multiply, repay-with-collateral, the vaults, and the liquidation engine.
- **[Scope](./scope.md)** — the pricing engine. For RWA Liquidity, the oracle price *is* the quote, which is how a tokenized asset trades from day one against a guarded valuation. Scope also provides reference and fallback pricing across routing.
- **[Markets](./markets.md)** — a listed asset needs a market to borrow against and liquidity to trade against; the two together turn a token into a fully usable on-chain asset.

[See the Routing infrastructure →](./routing.md)

---

## Build on Kamino

Run liquidity venues on Kamino's rails through the [Curation Suite](./curation.md), or embed Kamino Swap and yield directly in your product with [BuildKit](./buildkit.md). The execution stack, the pricing engine, and the vault automation are all available through the [Developer hub](./developers.md) — API reference and SDKs for swap, liquidity, and routing.

---

## Talk to us

Kamino runs the whole execution stack as one accountable counterparty: it prices every asset on [Scope](./scope.md), operates the routing and the safety controls that govern each fill, and integrates your assets, order flow, and pools directly with a team that stands behind the result and answers for it. Whether you're an issuer bringing a tokenized asset to market, a market maker quoting as a solver, or an institution that needs reliable execution at size, that team will map your assets, order flow, and integration path to the right surfaces and walk through the economics.

[Contact sales →](./contact-sales.md) · [Launch App →](https://kamino.com/home)
