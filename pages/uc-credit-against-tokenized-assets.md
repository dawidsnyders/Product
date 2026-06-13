# Offer credit against tokenized assets

> **Solutions · use-case (by what you want to do)** · framed for the issuer who wants their asset financed and the credit provider who wants to lend against it. Composes: [Scope](./scope.md) · [Markets](./markets.md) · [Fixed Rates](./fixed-rates.md) / [Custodial Borrowing](./custodial-borrowing.md) · [RWA Liquidity](./rwa-liquidity.md) + [RFQ](./rfq.md) · [Permissioned Markets](./permissioned-markets.md) · [Curation](./curation.md) · [Multiply](./multiply.md) · [Cross-chain](./cross-chain.md). Cross-links: [Asset issuers](./asset-issuers.md) · [Institutions](./institutions.md) · [Curators & managers](./curators-managers.md). CTA: Contact sales (primary) · Launch App (secondary).

---

## Hero

# Turn a tokenized asset into a credit market

A tokenized treasury fund, a private-credit token, tokenized gold, a fund share, a tokenized equity — once an asset exists on-chain, the next thing its holders ask for is credit against it and a way in and out of it. Kamino builds that market in three layers: a guarded price for the asset, a lending venue tuned to its risk, and oracle-priced, solver-filled liquidity to move in and out. Fixed or floating terms and compliance gating fold into the venue where the asset requires them. The issuer gets an asset that earns as collateral, trades from the day it lists, and distributes through leverage. The credit provider gets a venue with the pricing, the safety engine, and the track record to underwrite real size.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)

---

## Two readers, one market

This page serves both sides of the same transaction.

If you **issue a tokenized asset**, your gating question is simple: *can you price my asset, and can you make it useful?* Everything below answers it — pricing first, because pricing is the gate, then collateral status, terms, liquidity, and compliance. PRIME took exactly this path, from a newly listed token to over $1B in RWA deposits financed against it.

If you **provide credit** — a fund, a trading desk, a private-credit lender, a treasury — your question is whether the venue is safe and capital-efficient enough to lend institutional size into. The pricing layer, the liquidation engine's record, the permissioning model, and the conditional-liquidity mechanism that keeps your capital earning right up to the moment a borrower draws it are built for that underwriting.

The market is the same object viewed from each end. Below, it gets built one layer at a time.

---

## 1. Price it — the gate that unlocks everything

Nothing happens until the asset can be priced safely. Collateral value, loan health, liquidation triggers, trading quotes, and vault NAV all read from one source: [Scope](./scope.md), Kamino's in-house pricing engine. Building a guarded Scope feed is the first step of bringing any tokenized asset on-chain, and it is what makes every layer downstream possible.

Tokenized assets are exactly the assets a generic crypto oracle struggles with — a fund token that prices off published NAV, a discounted bill that redeems at par on a known date, gold that trades around the clock, an equity with market hours and halts. Scope handles them with purpose-built entry types:

- A **discount-to-maturity** price applies an instrument's discount linearly over the remaining term, so the value starts below par and climbs smoothly to exactly 1.0 at maturity — the right shape for zero-coupon bills, PT-tokens, and vesting tranches where the terminal value is known.
- A **most-recent-of-sources** price takes the freshest value across up to four sources, each held to a staleness window and a divergence tolerance, so a single stale or rogue source trips the guard and the feed reverts before a bad price reaches a loan.
- A **capped-and-floored** price clamps a source to a ceiling, a floor, or both, with the bounds themselves expressed as oracle entries so they can move as the asset matures.

Around every feed sits a guard stack. Sources must update inside a configurable window or the oracle fails. The spread between the highest and lowest source must stay inside a configured tolerance or the oracle fails. A reference-price check blocks or reverts any update that diverges beyond tolerance (5% by default). Pricing pauses through corporate-action windows and NAV-pause signals on the assets that need them. The effect is to convert oracle risk into bounded, governed risk — the moat under the entire RWA strategy. Scope has priced $19.33B of activity with zero oracle exploits, all of it watchable in real time at oracles.kamino.fi.

→ [How Scope prices the hard assets](./scope.md)

---

## 2. The collateral market — tuned to the asset

Once the feed exists, the asset becomes collateral in a lending [market](./markets.md). A market on Kamino is a self-contained, isolated venue; risk in one never touches another. Standing up a market for a new asset is a configuration exercise across roughly 50 parameters — borrow and deposit caps, daily flow limits, LTV and liquidation thresholds, the full interest-rate curve, liquidation economics, the oracle config and its guards, term, and access rules — with no new code.

What actually distinguishes one market from another comes down to four choices: **correlated-asset risk grouping** (which lets tightly-correlated pairs run at high LTV), **permissioning** (open or gated), **term** (floating or fixed), and **collateral location** (on-chain or at a custodian). Those four axes generate every market type an issuer or lender needs, from an open altcoin venue to a KYC-gated institutional RWA market.

A market can also launch **hidden** — fully live on-chain, invisible in the app — for a staged or private rollout before a public go-live. The PRIME market is the worked example of the whole path: a token listed as a market asset, given instant collateral status, scaled as supply followed borrower demand. The case study below carries the numbers.

→ [The configurable lending engine](./markets.md)

---

## 3. The terms — fixed, floating, or against custodied collateral

A credit provider and a borrower agree on terms inside the market. Kamino carries three shapes of credit against tokenized collateral.

**Floating-rate borrowing** is the default: borrow against the asset at a variable rate set by the market's utilization curve, repayable at any time.

**[Fixed Rates](./fixed-rates.md)** give both sides rate and term certainty. The market exposes one variable reserve plus one reserve per rate-and-duration combination on offer — terms of 1, 3, 6, and 12 months, priced in discrete rate steps where curators and governance decide which cells are live. A 5% three-month loan charges 5% through maturity no matter what the variable market does. At maturity a loan auto-rolls along a defined path — same reserve, then a lower-rate reserve of the same duration, then the variable reserve as a fallback — with an early-repayment penalty that applies only during the first term and is reduced by interest already paid. Once a loan rolls into a new term it can be exited any time without penalty. Taken together, the populated reserves form a live term structure of lending rates — an emerging on-chain yield curve for credit against the asset.

**[Custodial Borrowing](./custodial-borrowing.md)** extends credit against assets that stay at a qualified custodian. The collateral is governed by a tripartite account-control agreement among borrower, lending operation, and custodian: the custodian holds the assets independently of both sides, the borrower keeps ownership with no transfer to the lender, and the lender holds a contractual lien it cannot move during the term. Assets stay bankruptcy-remote. Positions are monitored continuously against a liquidation LTV set per asset (70% on a typical collateral), with an LTV notification and a top-up window before the position is ever frozen. For a holder who needs liquidity while keeping the underlying asset in regulated custody, this is the structure that makes it possible.

→ [Fixed-rate, fixed-term credit](./fixed-rates.md) · [Borrow against custodied collateral](./custodial-borrowing.md)

---

## 4. Liquidity to enter, exit, and liquidate

A credit market needs holders to be able to move in and out of the asset, and it needs liquidation to clear cleanly when a position breaches. Kamino supplies both from the same pricing layer that underwrites the loan.

**[RWA Liquidity](./rwa-liquidity.md)** gives a tokenized asset a tradable pool from the day it lists, priced off its Scope feed. Quotes are derived from the feed at a controlled spread, so a single pool prices the asset accurately from the first trade. The issuer seeds it and it is live; pricing comes from the oracle, and a resident market maker is optional. RWA pairs make up a large share of the liquidity on Kamino, with live pools for PRIME, syrupUSDC (Maple), tokenized gold (XAUt0), and USDe (Ethena).

**[RFQ](./rfq.md)** fills the rest. Solvers and market makers bid sub-second to fill an order, co-signed, with no end-user signature, so a holder moves in and out of a less-liquid asset on demand and the fill comes from the auction itself. The same auction sources fills for liquidations and feeds price discovery into the fixed-rate book.

Because both run on-chain, external aggregators route into these pools the same way they route into any Solana venue, putting the asset on the shared liquidity surface every router already reaches.

→ [Oracle-priced liquidity for tokenized assets](./rwa-liquidity.md) · [Solver-filled quotes](./rfq.md)

---

## 5. Compliance — gate the asset, the market, or the wallet

Most regulated and institutional assets can only be financed inside a compliant perimeter. The issuer's lever is to permission the asset itself: [Permissioning](./permissioning.md) wraps the asset in an access-control layer that adds a single approval check to gated operations wherever that asset is used.

It gates **deposit**, **borrow**, and **liquidate** independently, set by the curator per market and enforced per wallet through on-chain permission accounts. KYC is handled off-chain: a provider verifies the user, and the wallet is whitelisted through a REST API, SDK, or CLI within seconds of verification. **Withdraw and repay always stay open**, so a participant can always exit and repay regardless of gating; capital is screened on the way in. Liquidation can be restricted to whitelisted liquidators, so only approved parties can act on sensitive positions. The whole layer is additive and reversible: revoking access sets the gate back to zero with no protocol fork and no disruption to the underlying market.

The expressions cover every shape an issuer or lender needs — a KYC-gated [permissioned market](./permissioned-markets.md), a [permissioned vault](./permissioned-vaults.md) that supplies it from approved wallets only, and named-counterparty borrowing for a specific institutional credit relationship.

→ [Permission the asset](./permissioning.md) · [KYC-gated credit markets](./permissioned-markets.md) · [Permissioned vaults](./permissioned-vaults.md)

---

## 6. Stand it up and run it — Curation

The issuer or credit manager runs the market itself through the [Curation Suite](./curation.md). A curator sets the parameters, the allocations, the fees, the reserve whitelist, and the insurance pool, and operates the venue on Kamino's audited rails.

There are two planes. On the **permissionless** plane, anyone deploys a market or vault and sets their own parameters and fees. On the **curated** plane, turning on the safety controls — whitelisted reserves, an insurance pool, multisig governance — and passing a go-live review earns a place on Kamino's consumer app and its built-in demand. Curator performance and management fees (a typical institutional setup is 15% performance, 2% AUM) go to the curator, and Kamino's revenue comes from the protocol take rate on the underlying lending. The active roster running on this includes Gauntlet, Steakhouse, Allez, Sentora, RockawayX, and Galaxy — so an issuer can run the market for its own asset or hand it to a professional curator who manages risk for a living.

→ [Run your own market or vault](./curation.md)

---

## 7. Distribution through leverage — Multiply

[Multiply](./multiply.md) turns the credit market into a distribution channel for the asset. With one click, a holder loops collateral and debt in a single position to take amplified exposure of up to ~10x, drawing on the asset's correlated-asset risk group for high LTV and routing the loop through best execution. Fixed-rate Multiply lets a looper lock the cost of the leverage for the term.

Multiply strategies already run across LSTs, stablecoins, RWAs, and tokenized stocks (including xStocks). For the issuer, every leveraged position is incremental demand for the asset as collateral; for the credit provider, it is utilization on the supply side. Every loop deepens the utilization the credit provider earns on and tightens the asset's on-chain float.

→ [One-click leverage](./multiply.md)

---

## 8. Off-Solana assets, safe as Solana collateral — Cross-chain

Some of the most useful tokenized assets are native to Ethereum — tokenized gold, Ethena's USDe, and other Ethereum-native assets. Kamino's [Ethereum–Solana bridge](./cross-chain.md) liquidates and rebalances these assets on deep Ethereum venues, so a position collateralized by an off-Solana asset can be unwound where that asset actually has liquidity. That is what makes an Ethereum-native RWA safe to accept as collateral on Solana, and it widens the universe of assets a Kamino market can finance well beyond the Solana-native set.

→ [The Ethereum–Solana bridge](./cross-chain.md)

---

## How the supply side funds it

A credit market needs lenders, and the [vault engine](./vault-engine.md) is where the capital comes from. Vaults pool depositor capital and supply it into market assets at curator-set weights, earning the borrowers' interest. The mechanism that makes fixed-rate institutional credit work is **conditional liquidity**: a vault signals capacity on a fixed-rate reserve while its capital keeps earning in variable positions, and the protocol pulls it only at the moment a borrow order matches — atomically pulling the funds, depositing them into the target reserve, and delivering to the borrower in a single step.

The result for a credit provider: capital earns floating yield right up until a fixed-rate borrower draws it down, then converts to a fixed-rate position at the agreed term. The provider keeps the variable-market yield on idle capacity and the fixed coupon on drawn capital — the borrower's rate less Kamino's protocol take rate — for the full term. This is how large term borrows get funded on-chain, and it is the same machine that financed FalconX's fixed-rate borrowing and Pantera's custodied-collateral facility.

---

## Case study — PRIME: from a new token to over $1B financed

PRIME, the tokenized private-credit asset from Figure and Hastra, is the end-to-end proof of this use case.

- **Priced.** A guarded Scope feed was built for the asset, valuing it safely enough to underwrite credit against it.
- **Listed.** PRIME became an asset in its own [market](./markets.md), earning instant collateral status. The market scaled from $0 to over $600M as supply followed borrower demand.
- **Liquid.** A [RWA Liquidity](./rwa-liquidity.md) pool, priced off the same feed, gave holders a fair, oracle-anchored way in and out from launch.
- **Compliant.** [Permissioning](./permissioning.md) kept the venue inside the perimeter a regulated private-credit asset requires.
- **Scaled.** Kamino's RWA deposits crossed **$1B**, with PRIME as the anchor.

The same pattern runs for Maple's syrupUSDC, OnRe's ONyc, Ethena's USDe, and tokenized equities through xStocks — the same job, run again for each asset from the same set of products.

→ [Read the customer stories](./customers.md)

---

## The trust angle

A credit provider underwriting real size against a tokenized asset is underwriting Kamino's safety stack. The [liquidation engine](./liquidation-engine.md) has cleared over $120M across more than 100k liquidations with **$0 of bad debt**, using auction and soft/auto-deleverage liquidations, maturity liquidations for fixed-rate loans, and oracle-layer scam-wick protection that rejects prices outside a band of the last close. Beneath it sits a security program of 20 external audits, 4 formal verifications, and three years in production without an incident, with all reports public and every multisig and oracle feed watchable live at multisig.kamino.fi and oracles.kamino.fi.

→ [Security & transparency](./security.md) · [The liquidation engine](./liquidation-engine.md)

---

## Who this is for

- **[Asset issuers](./asset-issuers.md)** — make your asset collateral, tradable, and distributed, fully compliant. Pricing is the gate; the rest follows.
- **[Institutions](./institutions.md)** — provide or access credit against tokenized holdings with rate certainty and an underwritable safety record.
- **[Curators & managers](./curators-managers.md)** — run the credit venue for a tokenized asset and manage its risk on audited rails.

---

## Get started

Tell us the asset and what you want the market to do. Pricing, the market configuration, terms, liquidity, and the compliance perimeter are all settings on infrastructure that is already live.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)
