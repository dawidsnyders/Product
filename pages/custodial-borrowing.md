# Custodial Borrowing

> **Hub:** [Credit](./credit.md) · **Type:** Deep product page · **Audience:** Institutions (funds & trading firms, treasuries & corporates), asset issuers · **CTA:** Contact sales (primary) · Launch App (secondary)

---

## Hero

# Borrow on-chain while your collateral stays in qualified custody.

Draw stablecoin liquidity against Bitcoin, SOL, and staked SOL while the collateral stays titled to you in segregated custody at a qualified custodian for the full term. The custodian holds the asset; the loan, its pricing, and its liquidation logic run on-chain.

**[Contact sales →](./contact-sales.md)**    **[Launch App →](https://kamino.com/home)**

---

## The problem it solves

A fund or treasury holding Bitcoin faces a familiar bind. Selling to raise liquidity triggers a taxable event, surrenders upside, and signals an exit. Moving the asset into a smart contract to borrow against it hands self-custody to code and takes on on-chain counterparty exposure that an institutional mandate, an auditor, or a regulator can rule out.

Custodial Borrowing keeps the collateral exactly where an institution already holds it — at a regulated, qualified custodian, segregated and bankruptcy-remote, titled to the borrower throughout the loan. Against that custodied position, the borrower draws USDC on Solana, repayable on their own schedule, with the loan priced and risk-managed by Kamino's on-chain infrastructure.

**The collateral stays yours the entire time, held at the custodian where you already keep it.** The custodian holds the asset independently of the borrower and the lending operation, keeps it segregated from its own balance sheet, and is contractually barred from lending, pledging, or trading it. The loan is governed by a single agreement among three parties — the borrower, the custodian, and Kamino's SPV acting for the liquidity providers that fund the loan — and the on-chain position reflects that agreement.

---

## How it works

Custodial Borrowing joins an off-chain custody arrangement to an on-chain credit market through four moving parts.

**1 — Collateral at a qualified custodian.** The borrower deposits Bitcoin, SOL, or staked SOL into a segregated account at a regulated custodian, with more assets added as demand calls for them. Kamino's first custodied market runs on Anchorage Digital, a federally chartered digital-asset bank, so KYC and AML obligations are met through the custodian and the assets stay at a federally chartered bank for the full loan lifecycle. The asset remains the borrower's property, held apart from the custodian's own assets and from other clients'. Staked SOL keeps earning its staking rewards in custody throughout the loan, subject to the custody arrangement, so a borrower draws liquidity against the position while it continues to compound.

**2 — A tri-party account-control agreement.** A single agreement binds three parties: the borrower, the custodian, and Kamino's SPV, which acts for the liquidity providers and holds a first-priority security interest in the collateral. It carries repo-style controls onto longer-dated loans: it establishes that the collateral backs the loan, locks the asset, sets the margining requirements, and defines the liquidation procedure. The custodian holds the collateral in qualified custody and is barred from lending, rehypothecating, or making margin loans against it while the agreement is in effect. The borrower cannot withdraw collateral from custody in a way that would exceed the maximum LTV while a loan is outstanding. On a default, the SPV has the contractual right to issue a liquidation notice. Segregation and bankruptcy-remoteness are enforced at the custodian, independent of the on-chain layer.

**3 — An on-chain market that mirrors the position.** The custodied collateral is represented one-to-one in a dedicated Kamino [market](./markets.md), where the borrower draws and repays USDC. The custodian's balances are attested through Chainlink Proof of Reserves on a rolling basis, and [Scope](./scope.md), Kamino's pricing layer, prices the attested collateral continuously so the on-chain position stays anchored to the real, custodied asset. The market is a configuration of the same engine that runs every Kamino credit venue: a custodied market offers the same draw, repay, and health mechanics as any other market on Kamino, with collateral location set as a market parameter.

**4 — Real-time monitoring and a defined default path.** Kamino and the custodian monitor each loan continuously — outstanding principal, collateral value, and LTV. Liquidation is triggered when collateral value falls below the required threshold (an LTV breach) or when a loan reaches maturity without repayment. The borrower subscribes to LTV notifications and can top up collateral at any point before the liquidation LTV is breached. Once it is breached, the collateral is frozen and queued for partial liquidation: a brokerage desk books a trade to sell the queued collateral for USDC, and roughly 24 hours later the proceeds are exchanged and the debt is settled on Kamino under the account-control agreement. Each event closes only the slice needed to bring the position back into health. The custody arrangement and the on-chain market stay reconciled throughout.

---

## The terms

| Parameter | Value |
|---|---|
| Liquidation LTV | 70%, asset-dependent |
| Collateral | Bitcoin, SOL, and staked SOL, held at a qualified custodian; more assets added as demand calls for them |
| Borrow currency | USDC on Solana |
| Term | Fixed terms of 1, 3, 6, or 12 months, with a 3-month term as the custodial-market default and the option to roll over at maturity |
| Pricing | Variable, or a fixed rate for a fixed term (see [Fixed Rates](./fixed-rates.md)). Cost of capital is the lender's interest plus Kamino's protocol take rate, set per facility and disclosed at the term sheet. |
| Custody structure | Tri-party account-control agreement; segregated, bankruptcy-remote, no rehypothecation; Kamino's SPV holds a first-priority security interest |
| Monitoring | Continuous, real-time, per-loan; LTV notifications with a top-up window before liquidation |

The 70% liquidation LTV is set per asset against each collateral's volatility, opening every loan with a coverage cushion that leaves room for orderly management — an LTV notification and a window to post more collateral — before the position is ever frozen for liquidation. A borrower who watches the position can clear the breach by topping up or repaying, and the loan continues.

Custodied positions can borrow at a [fixed rate for a fixed term](./fixed-rates.md) — 1, 3, 6, or 12 months, with the rate locked to maturity — so a treasury sets its cost of capital at origination and holds a fixed payment against a strategic position through the term and each rollover. The custodial market runs a 3-month term as its default; a treasury that wants its financing cost pinned for longer takes the position out to the 6- or 12-month tenor at the rate quoted the day it draws.

---

## Borrowing under your own branded stablecoin

A white-glove custodied market can draw in the institution's own branded stablecoin in place of USDC. The stablecoin is issued through Coinbase's stablecoin-as-a-service, carries the institution's identity, and becomes the borrow currency of the custodied market: clients draw and repay that unit against collateral held at the qualified custodian, on the same tri-party account-control agreement, the same Scope pricing against attested reserves, and the same liquidation path described above. The custody mechanics are unchanged; the unit of account on the loan is the institution's own coin.

This closes a loop the institution controls end to end. The institution's clients who hold a tokenized position lever it against the branded stablecoin in the custodied market, while the clients who supply that stablecoin's liquidity earn the yield those borrowers pay — borrow demand and lender yield meeting inside a market that runs under one institution's brand and authorization rules. The full pattern, with the stablecoin issuance, the permissioned market, and the yield side laid out together, lives on [Launch your own on-chain money market](./uc-own-stablecoin-market.md).

---

## Proof

**Pantera Capital** — operating on-chain under the name Solana Company — is the first borrower to draw liquidity through Custodial Borrowing, against Bitcoin held at Anchorage. The structure carried a named institutional counterparty from its first loan, with custody at a chartered digital-asset bank and a regulator-monitored loan book behind it.

Pantera and Anchorage sit within Kamino's broader institutional roster — including FalconX on the fixed-rate borrow side — on the [customers](./customers.md) page.

---

## What the structure rests on

Custodial Borrowing works because the layers underneath it already run in production and already carry institutional capital.

**Pricing the collateral safely against an attested balance.** Chainlink Proof of Reserves attests the custodian's balances on a rolling basis, and [Scope](./scope.md) prices that attested collateral with multi-source composition and staleness and divergence guards, freezing an asset's usable price if its on-chain supply diverges from what custody attests. Pricing a custodied asset continuously, anchored to a third-party attestation of the reserves behind it, is what lets an on-chain loan track an off-chain position block by block.

**A liquidation record an institution can underwrite the downside against.** The [liquidation engine](./liquidation-engine.md) has cleared more than $120M of collateral across 100,000+ liquidations since November 2023 — including 55,649 in a single 48-hour SOL crash in February 2026 — with $0 of bad debt. For a custodied loan, the default path runs through the account-control agreement and the custodian: the SPV issues a liquidation notice, the collateral is frozen and queued, and a brokerage desk sells it for USDC with the debt settled on Kamino about a day later. The risk discipline that produced a zero-bad-debt record on-chain reaches an off-chain collateral source.

**Permissioning that maps to how regulated capital allocates.** [Permissioning](./permissioning.md) gates who can borrow and who can liquidate, per market, per wallet, per asset, with KYC enforced off-chain, so a custodied market is restricted to approved institutional counterparties and approved liquidators, and stays that way.

**A configurable market engine.** [Markets](./markets.md) treat collateral location as one of four configuration axes — alongside risk grouping, permissioning, and term — so a custodied venue runs on the same audited rails already in production. Name the asset, the custodian, the LTV, the access rules, and the term, and the market stands up.

Kamino prices the collateral on [Scope](./scope.md), runs the default path through its own [liquidation engine](./liquidation-engine.md), gates access through [Permissioning](./permissioning.md), and stands the market up in a white-glove onboarding, with named contacts and defined SLAs on monitoring and liquidation. Custody at a qualified bank, continuous attested pricing, a tested liquidation path, compliance gating, and a configurable market combine into a borrowing structure a regulated institution can put balance-sheet capital behind.

---

## Where it fits

Custodial Borrowing is one of four ways to draw credit on Kamino, alongside variable [Borrow](./credit.md), [Fixed Rates](./fixed-rates.md), and [Permissioned Markets](./permissioned-markets.md). It is the right choice when the collateral must stay in qualified custody.

It is the borrow side of a two-sided machine. The liquidity that funds custodied loans is supplied through Kamino's [Institutional Yield](./institutional-yield.md) product, where depositors hold a yield-bearing share of a vault funding overcollateralized, regulator-supervised loans against custodied collateral — the same loans, viewed from the lender's seat.

**Composes with:**
- [Markets](./markets.md) — the custodied market the loan lives in
- [Scope](./scope.md) — pricing collateral that Chainlink Proof of Reserves attests
- [Permissioning](./permissioning.md) — approved borrowers and whitelisted liquidators
- [Liquidation engine](./liquidation-engine.md) — the default path and the $0-bad-debt record
- [Fixed Rates](./fixed-rates.md) — locking the cost of capital for the term
- [Cross-chain](./cross-chain.md) — extending custodied collateral beyond Solana-native assets
- [Own on-chain money market](./uc-own-stablecoin-market.md) — running the custodied market under the institution's own branded stablecoin
- [Security](./security.md) — custody, proof-of-reserves, and the trust apparatus in full

**Built for:**
- [Funds & trading firms](./institutions-funds-trading-firms.md) — capital-efficient credit against held assets with rate certainty
- [Treasuries & corporates](./institutions-treasuries-corporates.md) — liquidity against reserves while keeping the position and its upside intact
- [BTC-backed credit](./uc-btc-backed-credit.md) — the full job, end to end
- [Credit against tokenized assets](./uc-credit-against-tokenized-assets.md) — the same custodied structure extended to RWAs and other tokenized holdings

---

## Get started

Custodial Borrowing is configured per counterparty: the asset, the custodian, the LTV, the access rules, and the term. Bring your custody relationship, or use Anchorage.

The facility is set up once, in a white-glove onboarding where Kamino stands up a private, isolated market with parameters tailored to the borrower. From then on the collateral stays put at the custodian for the life of the relationship. Drawing and repaying USDC runs through Kamino's interface against the custodied position, so a borrower opens and closes loans as on-chain draws against an account that is already set up, while the asset sits untouched in custody and the standing account-control agreement governs every draw.

**[Contact sales →](./contact-sales.md)**    **[Launch App →](https://kamino.com/home)**
