# RWA Liquidity

> **Liquidity** · deep product page · canonical home: this page. Surfaces-and-links: [Scope](./scope.md) · [Cross-chain](./cross-chain.md) · [Routing](./routing.md). Audience: asset issuers. CTA: Contact sales (primary) · Launch App (secondary).

---

## Hero

# Liquidity for tokenized assets, the day you list

A tokenized treasury bill, a private-credit token, tokenized gold, a fund share — each one needs a place to trade before it earns its market makers. RWA Liquidity gives every tokenized asset a tradable pool from launch, priced off its Scope oracle feed. Holders enter and exit at a fair, governed price, and the same feed that powers trading also powers borrowing and liquidation across Kamino. PRIME, syrupUSDC, tokenized gold, and USDe run live pools today.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)

---

## The problem this solves

A newly tokenized asset starts life with no order book and no resident market maker. A constant-product AMM is the usual fallback, and it punishes a thin asset twice: the issuer has to seed both sides of the pool with real capital, and early trades move the price far from fair value because there is too little depth to absorb them. A regulated treasury fund or a private-credit token has to trade at a price its holders can reconcile against NAV every day, even when the pool is shallow.

RWA Liquidity prices the pool from the asset's [Scope](./scope.md) oracle feed. Quotes track the oracle within a controlled spread, so the price a holder gets is computed from the asset's published value plus the configured spread, the same on a shallow pool as on a deep one. An issuer stands up a live, oracle-priced market on listing day; the Scope feed holds the price honest while natural two-sided flow builds.

---

## How it works

**The oracle sets the price.** Each pool quotes against the asset's Scope feed. For a NAV-based fund token, that feed is the published net asset value; for tokenized gold, the spot gold price; for a tokenized equity, the equity price with market-hours and halt handling built in. Trades clear around that reference within a configured spread, so a holder buying or selling moves through a price anchored to the asset's published value at that moment, with the pool's current inventory left out of the quote entirely.

**Per-pool controls the issuer owns.** Every pool is governed by parameters the issuer sets: the pricing curve, the oracle feed it reads, the spread, the supported direction of flow, and the pool's status — including a hidden status for a staged or private launch that is fully live on-chain while invisible in the app. The same parameters can be tightened or relaxed as the asset matures and natural two-sided flow arrives.

**Aggregators route into the pool.** Because each pool is on-chain liquidity addressable by any router, external aggregators discover and [route](./routing.md) order flow into it the same way they route into any venue. A holder swapping into or out of the asset on a third-party interface gets filled from the issuer's pool wherever they happen to be trading. The pool becomes part of Solana's shared liquidity surface from day one, reaching holders across every wallet and exchange that consumes that surface.

**A guarded price, by design.** The oracle that prices the pool carries Scope's full guard stack: staleness limits, cross-source divergence limits, reference-price anchors, and proof-of-reserves checks. If a token's supply spikes against its own history — the signature of an unbacked mint dumped into the market — the divergence between the on-chain price and the NAV reference halts the price before the bad flow can drain the pool. Pricing pauses through corporate-action windows and NAV-pause signals on the assets that need it. The same feed that lets the asset trade bounds every quote to the guarded reference, so the pool only ever fills at a defensible price.

---

## Live pools

Tokenized assets anchor some of the deepest liquidity on Kamino, and RWA deposits across all issuers have crossed $1B. Pools run today for:

- **PRIME** (Figure / Hastra) — the tokenized private-credit asset that scaled from $0 to over $600M in deposits.
- **syrupUSDC** (Maple) — yield-bearing private-credit collateral, priced through a composed Scope feed.
- **Tokenized gold** (XAUt0) — priced off spot gold, tradable around the clock.
- **USDe** (Ethena) — synthetic-dollar liquidity on a 1:1-pegged oracle with a 1% halt.

Each is a market an issuer stood up, priced from a guarded oracle feed, opened to flow, and routed to by the aggregators their holders already use.

---

## The role of Scope

If [Scope](./scope.md) can safely price an asset, Kamino can make a market in it. Scope is Kamino's in-house pricing engine, with ~42 composable price types that handle the assets a generic crypto oracle cannot — equity market hours and trading halts, corporate-action blackouts, NAV pauses, and bespoke RWA valuation — and a guard stack that turns oracle risk into bounded, governed risk. It has priced $19.33B of activity with zero oracle exploits.

Building a guarded Scope feed is the first step of bringing any tokenized asset on-chain, and it is the gate to everything downstream. Once the feed exists, the same price drives the trading pool here, the collateral value in a lending [market](./markets.md), the loan health in [Credit](./credit.md), and the NAV of any [vault](./vault-engine.md) that holds the asset — one feed read by every product at once.

→ [How Scope prices the hard assets](./scope.md)

---

## The role of Cross-chain

Many of the most valuable tokenized assets are Ethereum-native: tokenized gold, Ethena's USDe, and a growing set of tokenized funds. Kamino's [Cross-chain](./cross-chain.md) bridge lets those assets back positions on Solana by executing their liquidations and rebalances on the deep Ethereum venues where their real liquidity lives. An ETH-native asset can serve as Solana collateral because, when a position needs to be unwound, the engine reaches the venue with the depth to unwind it cleanly.

For an issuer, this widens the surface: a tokenized asset issued on Ethereum becomes usable and tradable inside Kamino's Solana-native products, with the exit path routed to wherever its liquidity actually sits.

→ [How the Ethereum–Solana bridge works](./cross-chain.md)

---

## Two-sided liquidity: pools plus solver fills

A pool gives an asset continuous, oracle-priced liquidity. For larger size or less-liquid assets, [RFQ](./rfq.md) gives holders an on-demand quote: solvers — market makers integrated into Kamino — bid sub-second to fill an order, co-signed, with no end-user signature required. An issuer offering both gives holders a continuous price for everyday flow and a competitive fill for size.

The two compose. A swap router weighs the pool quote and the RFQ quote together and fills wherever the price is best, so a holder gets best execution across both from a single order.

→ [How RFQ works for issuers and market makers](./rfq.md)

---

## One team operates the whole market

Standing up a market for a tokenized asset spreads across several jobs that usually live with several vendors: an oracle to price it, a risk framework to set its parameters and unwind bad positions, and an integration team to wire it into custody and compliance. On Kamino, one team does all three and runs the market day to day.

- **Pricing.** [Scope](./scope.md) builds and operates the guarded feed your pool quotes against — the same in-house oracle that has priced $19.33B with zero oracle exploits.
- **Risk.** The team that runs Kamino's [liquidation engine](./liquidation-engine.md) sets each pool's curve, spread, and guard limits and runs the unwind path: $120M+ cleared across 100k+ liquidations with $0 bad debt across three years in production.
- **Integration.** Bringing the asset on-chain — the feed, the market, the pool, the permissioning, the custody and KYC wiring — is delivered hands-on, with defined liquidation and redemption SLAs and a named team that runs the asset's market once it is live.

When you list an asset here, one team operates the pricing, the unwind, and the compliance gating, with named coverage and defined SLAs.

---

## For asset issuers

RWA Liquidity is one piece of what an issuer gets on Kamino. The full path turns a token into a productive on-chain asset:

- **Price it** — a guarded [Scope](./scope.md) feed, the gate to everything.
- **Make it collateral** — a [lending market](./markets.md) gives the asset instant collateral status; PRIME took this path from $0 to $600M.
- **Make it tradable** — an oracle-priced pool here, plus [RFQ](./rfq.md) for size.
- **Keep it compliant** — [permissioned assets](./permissioning.md) gate who can deposit or borrow, per asset, with KYC enforced off-chain and reversible instantly.
- **Run the market yourself** — [Curation](./curation.md) lets the issuer stand up and operate the market for their own asset, setting parameters and fees directly.
- **Distribute it** — [Multiply](./multiply.md) lets holders lever exposure, creating natural demand for the asset as collateral.

See the issuer story end to end on the [Asset issuers](./asset-issuers.md) page and the [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md) use case.

---

## Economics

Standing up a pool carries no listing fee. Three layers determine what an issuer earns and what they pay:

- **Pool revenue** — the issuer sets the spread, and each trade through the pool earns that spread.
- **Kamino's cut** — Kamino earns its protocol take rate on the fees the pool generates.
- **Credit-side fees** — an issuer who operates their own market through [Curation](./curation.md) sets and keeps the lending fees on that market, with Kamino earning the underlying take rate there too.

Economics scale with the asset's trading and lending activity, billed per transaction.

---

## Why issuers choose this

- **Liquidity from launch.** A fairly-priced, tradable pool exists the day the asset lists, before any market maker commits.
- **A price holders can trust.** Quotes track a guarded oracle, so every fill is the asset's published value plus the configured spread.
- **One feed, every product.** The same Scope feed that prices trading also powers borrowing, liquidation, and vault NAV — the asset becomes useful across all of Kamino at once.
- **Shared distribution.** External aggregators route into the pool, so the asset reaches holders across every Solana wallet, exchange, and app that consumes the shared liquidity surface.
- **Controls the issuer keeps.** Spread, feed, status, and direction are configured and adjustable as the asset matures.
- **A track record under the price.** Over $120M liquidated across 100k+ liquidations with $0 bad debt; the guard stack that protects every Kamino market protects the pool.

---

## Bring your asset on-chain

Tell us about the asset and we will scope the feed, the market, and the pool with you.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)

**Related:** [Liquidity hub](./liquidity.md) · [RFQ](./rfq.md) · [Kamino Swap](./kamino-swap.md) · [Scope](./scope.md) · [Cross-chain](./cross-chain.md) · [Markets](./markets.md) · [Liquidation Engine](./liquidation-engine.md) · [Asset issuers](./asset-issuers.md) · [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md)
