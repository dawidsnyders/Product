# Scope

*Infrastructure · the pricing layer beneath every Kamino product*

---

## Hero

# The pricing engine for the assets institutions want on-chain

Scope is Kamino's in-house oracle: the single, validated price every market, vault, swap, and liquidation reads. It composes the strongest on-chain feeds into one source of truth, guards that price against manipulation and stale data, and prices tokenized equities through market hours and halts, NAV-based funds, gold, private credit, and yield-bearing tokens. **$19.33B of value has been priced through Scope with zero oracle exploits.**

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home) · [See live feed health → oracles.kamino.fi](https://oracles.kamino.fi)

*Build: Contact sales is the primary button; Launch App and the feed-health link are secondary.*

---

## What Scope is

A price feed decides everything downstream of it. It sets how much you can borrow, the moment a position becomes liquidatable, the rate a swap clears at, and the NAV of a vault share. A wrong or manipulable price is the single largest source of loss in on-chain credit, which is why Kamino owns the price layer end to end.

Scope ingests prices from four independent providers — Chainlink Data Streams, Pyth, Switchboard, and RedStone — plus direct on-chain feeds for assets those providers don't cover, validates each one against its own rules, selects the price to publish, and writes a single validated price that every Kamino contract reads. Kamino builds the composition and the guards on top of raw inputs from the strongest providers in the market, cross-checking each provider against the others before a price goes live.

Every Kamino product reads from this one source:

- **[Markets](./markets.md)** value collateral and compute loan-to-value against Scope. Scope effectively decides which assets can be listed at all: an asset Kamino can price safely is an asset it can lend against.
- **The [liquidation engine](./liquidation-engine.md)** triggers off Scope, with the guards below standing between a manipulated tick and a wrongful liquidation.
- **[RWA Liquidity](./rwa-liquidity.md)** trades at the Scope price directly, which is how a tokenized asset gets two-sided liquidity straight from the oracle price.
- **[Yield](./yield.md) vaults** compute NAV and share value from Scope.
- **[Multiply](./multiply.md)** measures position health and distance to liquidation against it.
- **[Institutional Yield](./institutional-yield.md)** prices BTC collateral through Scope, paired with on-chain proof of reserves for the custodied side.

---

## How it composes a price

Scope works in four steps, on-chain, every refresh.

**1 · Ingest.** It reads live prices from four providers at once — Chainlink Data Streams, Pyth, Switchboard, and RedStone — plus direct on-chain sources for assets those providers don't cover.

**2 · Validate.** Each incoming price is tested against staleness limits, deviation checks, and cross-provider consistency before it is eligible to be used.

**3 · Select.** Scope aggregates the validated sources and chooses the price to publish based on freshness and validation status. When one provider goes stale or drops out, Scope continues publishing from the remaining sources and self-heals when the dropped one recovers, so the feed stays live through any single source failing.

**4 · Publish.** The validated price is published as a single value that every Kamino contract reads, so the whole protocol sees one consistent price at every moment.

This composition is what gives Scope its reach. It maintains its own on-chain time-weighted averages, chains prices together, applies bounds, and runs tailored valuation logic — more than 40 composable price types in all, assembled per asset to fit how that asset actually trades.

---

## Pricing the hard assets

This is the strategic core of Scope and the foundation of Kamino's tokenized-asset strategy. The assets institutions most want on-chain are the hardest to price safely: a tokenized equity trades only during market hours and can halt; a NAV-based fund updates once a day and can pause; gold and private-credit instruments are valued from reference rates and scheduled marks. Each one carries a behavior — a halt, a daily mark, a redemption schedule — that the price layer has to model directly, and Scope does.

Scope handles them with purpose-built price types, composed per asset:

- **Multi-source freshness with a divergence ceiling.** A composite type reads several sources and takes whichever updated most recently, while rejecting any price that diverges too far from the others. Redundancy and a hard disagreement limit travel together, so the published price tracks the consensus of healthy feeds and a divergent one is dropped.
- **Caps and floors.** Any source price can be bounded by a ceiling and a floor — and those bounds can themselves be live oracle values, so a peg is enforced dynamically against current market conditions, tightening and loosening as those conditions move.
- **Discount-to-maturity for fixed-term instruments.** A fixed-income asset that trades at a discount and redeems at par on a known date is priced by its annual discount rate and maturity, so a term instrument is valued correctly as it accretes toward par — the pricing that underpins an on-chain [fixed-rate](./fixed-rates.md) yield curve.
- **NAV and redemption-rate pricing** for fund tokens and liquid-staking tokens, reading the redemption rate directly as a reference and honoring NAV pause signals so a halted fund holds its last validated NAV until the fund resumes.
- **Reference-price anchoring.** Each feed can be checked against a designated reference price and blocked if it drifts beyond a configurable tolerance, a defense against a corrupted or manipulated input.

For equities specifically, Scope respects market hours, suspends repricing through halts and corporate-action windows, and resumes cleanly when the underlying reopens. The result is that a tokenized stock behaves on-chain the way it behaves in the market it tracks.

For assets that live on Ethereum — tokenized gold, Ethena's USDe — Scope works alongside the [cross-chain bridge](./cross-chain.md) so the price that governs Solana collateral is anchored to the deep venues where that asset actually trades and liquidates.

---

## Proof of reserves and the anti-infinite-mint guard

The largest catastrophic risk in any tokenized asset is an unbacked mint — a bug or a compromised issuer producing tokens with no asset behind them, which a borrower could deposit and drain a market against. Scope defends the price layer against this directly.

It tracks an asset's circulating supply against its own running average and **freezes the asset's usable price when supply spikes against that baseline**, the on-chain signature of an unbacked mint. For custodied and reserve-backed assets, Scope pairs the published price with on-chain proof of reserves, so the value the protocol lends against is tied to assets that are demonstrably there. A token whose reserves fall short is frozen out of collateral status at the price layer, before it can do any damage — and the same supply-versus-reserves check is what gates an asset's eligibility under [permissioning](./permissioning.md).

This is why Kamino can list regulated and custodied assets across the institutional spectrum: the guard against an unbacked mint is built into the price itself.

---

## Scam-wick protection

A manipulated price for a fraction of a second — a thin-liquidity wick, a flash-loaned spot move — has been the trigger for a long list of liquidation exploits across DeFi. Scope's guard stack is designed to make that wick a non-event.

- **Time-weighted averaging.** Liquidation-sensitive prices read a time-weighted average over a configured interval, so a single-block manipulation is diluted to near nothing — across a multi-minute averaging window, a one-block spike moves the published price by a fraction of a basis point.
- **Divergence rejection.** When the spot price deviates from its time-weighted average beyond a set threshold, Scope rejects it and falls back to the last valid value or an alternate provider.
- **Price bands.** Assets carry acceptable ranges — a stablecoin held within a tight band around $1.00, for example — and any quote outside the band is rejected outright.
- **Staleness limits.** A spot price older than its maximum age is discarded, with the time-weighted average held to its own, wider limit.
- **Configurable liquidation protection.** Because the price layer is composable per asset, a market can be configured so a position is liquidated only when the price reflects a sustained change in value, so a brief, recoverable depeg passes through without triggering a wrongful liquidation.

Each guard is set per asset and per market, so a volatile altcoin and a regulated equity each get a price envelope tuned to how they trade. The averaging interval, the divergence threshold, and the bands are all configured to the asset, so each price envelope reflects that asset's own liquidity and trading rhythm. When something does cross a line, an emergency switch can halt price-dependent operations on a single feed while the rest of the protocol keeps running.

---

## The RWA onramp

Bringing a new asset onto Kamino starts at Scope. Building a guarded price feed — choosing the sources, composing the right price type, setting the bands, staleness, and divergence limits, wiring in proof of reserves where it applies — is the first step of asset onboarding, ahead of risk diligence and [market](./markets.md) setup. Once an asset has a safe Scope feed, the rest of the platform opens up: it can be listed as collateral, borrowed against at fixed or floating rates, looped with [Multiply](./multiply.md), and traded through [RWA Liquidity](./rwa-liquidity.md) at the oracle price.

Feed setup runs as part of asset onboarding, scoped with the Kamino team — the same engagement that takes an issuer from a first conversation to a listed, borrowable asset. For an [asset issuer](./asset-issuers.md), this answers the gating question first: *can you price my asset safely?* A live Scope feed is the answer, and it is the foundation every other capability is built on.

---

## Why it's a moat

Scope changes the shape of the oracle problem along three axes that compound:

- **Coverage.** The composable price types reach equities through halts, NAV funds, gold, private credit, and fixed-term paper — the assets that unlock the tokenized universe for credit and liquidity. Each one is priced by a type built for how it actually trades.
- **Bounded risk.** Every published price carries known staleness, divergence, and band limits, and the worst case — an unbacked mint — is frozen at the source. Oracle risk becomes a measured, governed quantity with a hard ceiling on the damage any single failure can do.
- **A proven record.** Scope has priced **$19.33B of value with zero oracle exploits**, and it carries **8 of Kamino's 20 external audits** — the heaviest audit concentration of any single component, because a single bad price would move every market at once. The engine is open source with reproducible on-chain build verification, and every feed's price, sources, and health are live and public at [oracles.kamino.fi](https://oracles.kamino.fi).

Pricing is the gate to the entire tokenized economy. Because Kamino owns that gate and proves it safe in public, an institution bringing any asset — an equity, a fund share, a private-credit note — can see exactly how it will be priced and what protects it before a single token is listed.

See how this sits in the full stack on [How Kamino works](./how-kamino-works.md), the resilience case on [Security](./security.md), and the end-to-end flow on [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md).

---

## Get started

Bringing an asset on-chain, or evaluating Kamino's pricing for an institutional mandate? Our team will scope the feed, the guards, and the proof-of-reserves setup with you as part of onboarding.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

Live feed health, sources, and update activity for every Scope price: [oracles.kamino.fi](https://oracles.kamino.fi)
