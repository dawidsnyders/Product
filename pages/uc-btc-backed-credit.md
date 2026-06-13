# BTC-Backed Credit

> **Solutions · By what you want to do** · **Type:** Use-case page · **Serves:** Treasuries & corporates, funds & trading firms, individuals · **CTA:** Contact sales (primary) · Launch App (secondary)

---

## Hero

# Liquidity against your Bitcoin, while it stays in your custody.

Draw stablecoin liquidity against Bitcoin that stays in a segregated account at a qualified custodian, titled to you the entire time. Lock your cost of capital to the maturity of the loan, so the carry you pencil is the carry you keep. The loan is priced and risk-managed by the engine that has cleared over $120M of collateral across 100,000+ liquidations since November 2023 with $0 of bad debt.

**[Contact sales →](./contact-sales.md)**    **[Launch App →](./kamino-app.md)**

---

## The job

You hold Bitcoin and you need dollars — to fund operations, finance a position, meet a redemption, or put working capital behind a thesis. Drawing a loan against the Bitcoin raises the dollars and leaves your position whole: you keep title and upside, the holding stays on your book, and your tax basis is untouched. (Selling, by contrast, is a taxable disposal that ends the position outright.)

The question every institutional borrower asks next is where the collateral sits while the loan is outstanding. Moving Bitcoin into a smart contract to borrow against it hands self-custody to code and creates on-chain counterparty exposure that a fund's mandate, an auditor, or a regulator may not allow. BTC-backed credit on Kamino answers that question directly: the Bitcoin stays at the qualified custodian where an institution already holds it, segregated and bankruptcy-remote, in the borrower's name, and the loan is drawn on-chain against that custodied position.

---

## How the position works

A custody arrangement off-chain joins to a credit market on-chain through four moving parts. This is [Custodial Borrowing](./custodial-borrowing.md), framed here for the Bitcoin holder.

**1 — Bitcoin at a qualified custodian.** You deposit BTC into a segregated account at a regulated, licensed custodian. Kamino's first custodied market runs on [Anchorage Digital](./customers.md), a federally chartered digital-asset bank. The Bitcoin remains your property, held apart from the custodian's own balance sheet and from other clients' assets.

**2 — A tri-party account-control agreement.** One agreement binds three parties: the borrower, the custodian, and Kamino's SPV, which acts for the liquidity providers and holds a first-priority security interest in the Bitcoin. It establishes that the Bitcoin backs the loan, locks the asset, sets the margining requirements, and defines the liquidation procedure, including the SPV's right to issue a liquidation notice on default. You retain title for the life of the loan. Rehypothecation is prohibited by contract — the custodian cannot lend, pledge, or trade your Bitcoin — and segregation and bankruptcy-remoteness are enforced at the custodian, independent of the on-chain layer.

**3 — An on-chain market that mirrors the position.** The custodied Bitcoin is represented in a dedicated Kamino [market](./markets.md), where you draw and repay USDC on Solana. The custodian's balances are attested through Chainlink Proof of Reserves on a rolling basis, and [Scope](./scope.md), Kamino's pricing layer, prices that attested Bitcoin continuously so the on-chain position stays anchored to the real, custodied asset. Collateral location is a market-level parameter, so a custodied market gives you the same draw, repay, and health mechanics as any other on-chain market.

**4 — Continuous monitoring and a defined default path.** Outstanding principal, collateral value, and LTV are tracked in real time, per loan. The borrower subscribes to LTV notifications and can top up Bitcoin or repay at any point before the liquidation LTV is breached. Once it is breached, the collateral is frozen and queued for partial liquidation: a brokerage desk sells the queued Bitcoin for USDC, and roughly 24 hours later the proceeds settle the debt on Kamino under the account-control agreement. Each event closes only the slice needed to bring the position back into health, and the custody arrangement and the on-chain market stay reconciled throughout.

---

## The terms

| Parameter | Value |
|---|---|
| Collateral | Bitcoin, held at a qualified custodian, titled to the borrower |
| Borrow currency | USDC on Solana |
| Liquidation LTV | 70%, set per asset against the collateral's volatility |
| Margin-call mechanics | LTV notification with a top-up window before the liquidation LTV; clear the breach by posting Bitcoin or repaying, and the loan continues |
| Term | 3-month fixed term standard, with the option to roll over at maturity |
| Rate | Fixed for the term, or variable |
| Custody structure | Tri-party account-control agreement; segregated, bankruptcy-remote, no rehypothecation; Kamino's SPV holds a first-priority security interest |
| Monitoring | Continuous, real-time, per-loan |

The 70% liquidation LTV is set per asset against Bitcoin's volatility, opening every loan with a coverage cushion above the loan value. That cushion buys room for orderly management: an LTV notification reaches the borrower, and a top-up window opens, before the position is ever frozen for liquidation against a strategic holding. A borrower who watches the position clears a breach by topping up Bitcoin or repaying, and the loan runs on.

---

## Lock the cost of capital for the term

Floating rates move with market utilization. A treasury financing against a long-term Bitcoin holding wants certainty over the life of the loan, and [Fixed Rates](./fixed-rates.md) provide it. Choose a term — 1, 3, 6, or 12 months — and the rate is locked to maturity: a 5.5% three-month loan charges 5.5% through maturity whatever the variable market does in between. The rate you lock on the grid is the whole price — your maximum cost is known the day you draw. At maturity the loan rolls into a new fixed term at the prevailing rate for that duration, or a cheaper one if same-duration liquidity is available, with a grace period to complete the rollover. Early repayment is open throughout, carrying a bounded, disclosed early-exit charge during the first term only; once you have rolled into a new term, that charge falls away and you pay only the interest accrued to the day you exit.

Rate certainty turns a Bitcoin-backed loan into a planning instrument: a known cost of capital, against a known collateral cushion, for a known term.

---

## Where the liquidity comes from

The dollars you borrow are supplied by allocators on the other side of the same machine. [Institutional Yield](./institutional-yield.md) is the supply side of BTC-backed credit: depositors place stablecoins into a vault that funds these overcollateralized, Bitcoin-backed loans and hold **kiUSDC**, a yield-bearing share that appreciates as the loan book accrues interest, with a target return of 6–8% APY net of vault fees.

That structure matters to a borrower for one reason: the lender is a regulated operation with a transparent book. Origination is run by a lending operation approved and supervised by the Liechtenstein FMA, lending only to KYC-verified institutional counterparties. Three cadences of evidence sit behind every loan: a continuously updating on-chain feed where each position's collateral coverage is visible loan by loan, a monthly attestation signed by an independent accounting firm, and ongoing regulatory supervision. You are borrowing from a counterparty that is itself underwritten and supervised.

For an allocator reading this from the supply side, the deposit experience lives on [Institutional Yield](./institutional-yield.md).

---

## Pantera Capital — the first borrower

**Pantera Capital**, operating on-chain under the name **Solana Company** — the entity that holds and draws against the custodied Bitcoin on-chain — is the first borrower to draw liquidity through this structure, against Bitcoin held in custody at **Anchorage Digital**. The arrangement was built with named institutional counterparties from the first loan: custody at a chartered digital-asset bank, a regulated lender on the other side, and a regulator-supervised loan book behind it.

These names sit alongside Kamino's broader institutional roster — Anchorage for custody, Pantera on the borrow side, and **FalconX** drawing fixed-rate credit at desk scale — on the [customers](./customers.md) page.

---

## Why this holds up under diligence

BTC-backed credit on Kamino rests on layers that are already in production and already audited. The proof is in the record each layer has built.

**Pricing the Bitcoin against an attested balance.** Chainlink Proof of Reserves attests the custodian's BTC balance on a rolling basis, and [Scope](./scope.md) — which has priced **$19.33B** of volume with zero pricing exploits — composes that attested Bitcoin from multiple sources with staleness and divergence guards, freezing an asset's usable price if its on-chain supply diverges from what custody attests. Continuous pricing anchored to a third-party attestation of the reserves is the gate the whole structure depends on.

**A liquidation record you can underwrite the downside against.** The [liquidation engine](./liquidation-engine.md) has cleared more than **$120M** of collateral across **100,000+ liquidations** since November 2023 — including **55,649** in a single 48-hour SOL crash in February 2026 — with **$0** of bad debt. That record is the evidence behind the default path: for a custodied loan, Kamino's SPV issues a liquidation notice, the collateral is frozen and queued, and a brokerage desk sells it for USDC with the debt settled on Kamino about a day later. The same risk discipline that produced a zero-bad-debt record on-chain reaches an off-chain collateral source.

**Custody and proof-of-reserves you can verify.** The Bitcoin stays at a qualified custodian under the tri-party agreement, and the on-chain position stays anchored to the real custodied asset through Chainlink Proof of Reserves. [Security](./security.md) carries the verifiable record for the on-chain layer in full: 20 external audits, 4 formal verifications, three years in production, and the live transparency dashboards.

**Compliance gating that matches how regulated capital moves.** [Permissioning](./permissioning.md) restricts who can borrow and who can liquidate, per market, per wallet, per asset, with KYC enforced off-chain, so a custodied Bitcoin market is open only to approved institutional counterparties and approved liquidators.

Custody at a qualified bank, continuous attested pricing, a tested liquidation path, and compliance gating assemble into a Bitcoin-backed borrowing structure a regulated institution can hold on its balance sheet.

---

## Who this is for

- **[Treasuries & corporates](./institutions-treasuries-corporates.md)** — raise working capital against a Bitcoin treasury while keeping the position and its tax basis intact, at a fixed cost of capital for the term.
- **[Funds & trading firms](./institutions-funds-trading-firms.md)** — finance against held Bitcoin with rate certainty; the exposure stays on the book and the collateral stays in qualified custody.
- **[Individuals](./individuals.md)** — borrow against Bitcoin and other holdings directly in the Kamino app, self-serve, on the same audited rails.

---

## The products behind it

- [Custodial Borrowing](./custodial-borrowing.md) — the custody-preserving credit structure
- [Fixed Rates](./fixed-rates.md) — locking the cost of capital for a fixed term
- [Markets](./markets.md) — the custodied Bitcoin market the loan lives in
- [Scope](./scope.md) — Bitcoin pricing and on-chain proof of reserves
- [Institutional Yield](./institutional-yield.md) — the supply side that funds the loans
- [Security](./security.md) — custody, proof-of-reserves, audits, and the liquidation record in full

---

## Get started

The structure is configured per counterparty: the LTV, the access rules, the term, and the custody relationship. Bring your own qualified custodian, or use Anchorage.

**[Contact sales →](./contact-sales.md)**    **[Launch App →](./kamino-app.md)**
