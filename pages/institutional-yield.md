# Institutional Yield

> **Hub:** [Yield](./yield.md) · **Audience:** [Institutions](./institutions.md) · **Type:** Deep product page

---

## Regulated credit yield with every position readable on-chain

Earn 6–8% APY on a stablecoin deposit, drawn from a portfolio of overcollateralized Bitcoin-backed loans to KYC-verified institutional borrowers.

Loans are originated by a lending operation approved and supervised by the Liechtenstein FMA, capped at 60% LTV, with the collateral held at qualified custodians and ownership left with the borrower. You hold a yield-bearing share token, **kiUSDC**, that appreciates as interest accrues, and every position in the book is readable on-chain down to the individual loan. Read each loan's collateral coverage as it updates, then confirm the whole book against a monthly attestation signed by an independent accounting firm.

One deposit, passive yield, exposure to institutional credit.

**[Contact sales](./contact-sales.md)** · [Launch App](https://kamino.com/home)

---

## The shape of the product

Deposit USDC, USDT, or USDG into the Institutional Yield vault and receive **kiUSDC**, a share token whose value grows in real time as the underlying loan book accrues interest. As part of the deposit you accept the loan agreement with the Institutional Yield SPV; capital then flows through that standalone special-purpose vehicle into the regulated lending operation, which originates overcollateralized term loans to institutional borrowers. Interest and principal repayments flow back through the same structure to the vault, lifting the price per share.

The mechanics that matter to an allocator:

- **Target return: 6–8% APY, net of vault fees.** Each loan's rate is fixed at origination for its term, so the yield underneath your share is predictable through the life of every loan and re-prices only at rollover. Loans are originated across a range of fixed durations — 30-day, 60-day, 90-day, and beyond.
- **Collateral: Bitcoin, at a maximum 60% LTV.** Collateral is high-quality digital assets, currently Bitcoin only. At the 60% origination cap, the Bitcoin posted is roughly 1.67x the loan principal; loans are typically drawn below the cap, so coverage at origination usually runs higher still. Price declines are absorbed by that coverage before depositor capital is ever at risk.
- **Custody that preserves the borrower's title.** Collateral sits at qualified custodians under a tripartite agreement among the borrower, the lending operation, and the custodian. Title to the collateral stays with the borrower throughout the life of the loan, the custody arrangement holds the Bitcoin in place at the custodian, and the contract bars rehypothecation. The same custody and proof-of-reserves model is documented under [BTC-backed credit](./uc-btc-backed-credit.md).
- **Regulated origination.** The lending operation is approved and supervised by the Liechtenstein FMA, reports to the regulator on an ongoing basis, and lends only to KYC-verified institutional counterparties. Every counterparty in the book is an institution of record, identified and underwritten before a loan is drawn.

This is a single vault built on Kamino's [vault engine](./vault-engine.md), expressed through the same market and access-control rails that power the rest of the platform. The legal architecture underneath carries the real weight: a ring-fenced special-purpose vehicle, an originator approved and supervised by the Liechtenstein FMA, and the tripartite custody agreement that holds the collateral. That architecture reaches you as one deposit, one share token, and one continuously updating loan book.

---

## What sets this apart for an allocator

The yield here originates from regulated institutional lending against posted collateral, which gives every layer of the instrument a property an allocator can underwrite:

| | Kamino Institutional Yield |
|---|---|
| **Yield source** | Overcollateralized lending to institutions |
| **Borrower profile** | KYC-verified institutional entities, identified and underwritten |
| **Collateral location** | Qualified custodians, under a tripartite agreement |
| **Collateral coverage** | 60% maximum LTV, with title retained by the borrower |
| **Regulatory oversight** | Lending operation approved and supervised by the Liechtenstein FMA |
| **Rate and term** | Fixed rate, fixed term, set at origination |
| **Liquidity** | Instant within a managed buffer, then a first-in-first-out redemption queue to maturity |

The yield is a return on a credit book an institution can read and verify, with the borrower, the collateral, the custodian, and the regulator each named and accountable in the structure.

---

## Transparency you can read down to the loan

Institutional overcollateralized lending introduces a reliance on operations that run off-chain. Institutional Yield meets that head-on: it publishes the loan book itself and pairs it with independent verification, so the claim that your capital is overcollateralized is something you can confirm across three reporting layers.

**Collateral position reporting.** Ongoing reporting attests to the aggregate collateral value backing the loan book, so the coverage behind your share stays a current, continuously updated figure throughout the life of every loan.

**In-app loan status reporting.** For every loan you can read the active loan amount, the collateral asset and current market value, the per-loan LTV, the portfolio-weighted average LTV, and overall loan health. This view is powered by an industry-standard loan-and-collateral infrastructure provider — the same data source the regulator uses — so what you read is what the supervisor reads. Positions update continuously, so a price move or a collateral top-up shows up as it happens.

**Third-party attestations.** Each month an independent accounting firm verifies positions and produces a formal, signed attestation covering outstanding loan balances, collateral coverage ratios, and portfolio health. This is the independent verification layer, anchoring the off-chain activity to a figure an outside party has certified.

Above these three, the lending operation reports to the Liechtenstein FMA on a continuing basis, so a supervisor sits over the operation that produces the book. Read together, the live in-app feed shows the book as it stands right now, the monthly attestation certifies it independently, and the regulator supervises the originator. The result is a yield instrument an institution can underwrite with the same evidence it would demand of any private-credit allocation.

---

## How collateral coverage behaves under stress

Because every loan is Bitcoin-backed and marked continuously, the coverage path is explicit and visible in the loan book at every step. The table traces the floor case — a loan opened right at the 60% cap, where most loans open below it:

| BTC price move from origination | Portfolio LTV | Status |
|---|---|---|
| 0% | 60% | At origination cap (loans typically opened lower) |
| −10% | 67% | Margin-call territory |
| −20% | 75% | Significant breach |
| −40% | 100% | Full collateral coverage consumed |

A loan opened at the 60% cap crosses into margin-call territory once a Bitcoin decline lifts its LTV past the margin-call threshold, at which point the lending operation can require the borrower to post additional collateral. If the borrower fails to top up — or fails to repay at maturity — the custodian executes liquidation under the tripartite agreement, well before LTV approaches 100%. Pricing for the Bitcoin collateral runs through [Scope](./scope.md), Kamino's oracle layer, with the same divergence and staleness guards that protect every market on the platform.

---

## Liquidity: instant within the buffer, queued to maturity beyond it

The vault holds a managed liquidity buffer sized at 5–10% of AUM — drawn from undeployed funds, matured loan principal, and recent deposits — so withdrawals inside the buffer settle immediately. Requests larger than the available buffer enter an on-chain, first-in-first-out queue and are filled in order as underlying loans mature and principal returns. Because every loan carries a defined maturity, the timing of returning principal is known in advance, which makes the queue predictable to plan against. The trade-off is stated plainly: capital held in the buffer for instant liquidity earns less than capital deployed into loans, so the buffer is sized to balance redemption speed against yield.

---

## kiUSDC as an asset

kiUSDC is the share token you hold against your deposit. Its value per share grows as the loan book accrues interest, and that price is published continuously so wallets and portfolio tools can show a holder the real, current value of their position. Because the vault is permissioned, kiUSDC moves only between approved addresses — transfers and onward composition are gated to the same KYC-verified set that can deposit, which keeps the token inside the regulatory perimeter while still letting an allocator route it into other approved strategies and [permissioned vaults](./permissioned-vaults.md) that can hold, report on, and compose against it.

---

## Where it fits on Kamino

Institutional Yield is the depositor side of [BTC-backed credit](./uc-btc-backed-credit.md): the capital you supply here funds the overcollateralized Bitcoin loans that borrowers draw on the credit side of the platform. It sits within the [Yield](./yield.md) hub alongside [Lending Vaults](./lending-vaults.md), [Meta-Vaults](./meta-vaults.md), and [Permissioned Vaults](./permissioned-vaults.md) as the regulated, off-chain-credit option among Kamino's yield products. It is built for the allocators described on the [Institutions](./institutions.md) page — treasuries, funds, and wealth managers placing stablecoin capital into regulated credit.

It draws on the platform's core infrastructure:

- **[Permissioning](./permissioning.md)** enforces eligibility at the wallet layer, gating deposits to approved addresses so the vault stays inside its regulatory perimeter.
- **[Scope](./scope.md)** prices the Bitcoin collateral with guarded, multi-source feeds, the same engine that values collateral across every Kamino market.
- **[Security](./security.md)** covers the on-chain layer — contracts behind 20 independent audits and 4 formal verifications, a liquidation engine with zero bad debt to lenders across Kamino to date, and the live transparency dashboards.

For fintechs and platforms that want to offer institutional credit yield to their own users under their own brand, the embeddable [Yield API](./institutional-yield-api.md) packages this vault behind a single integration, with a configurable user cap and revenue share. To allocate at scale or discuss mandate terms, the institutional desk runs the onboarding.

---

## Get started

**[Contact sales](./contact-sales.md)** — institutional onboarding, eligibility, and allocation terms.

[Launch App](https://kamino.com/home) — view the live vault, the loan book, and current kiUSDC value.
