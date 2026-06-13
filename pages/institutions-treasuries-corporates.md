# Treasuries & Corporates

> **Axis:** Solutions · By who you are · [Institutions](./institutions.md) sub-segment · **Type:** Audience page · **CTA:** Contact sales (primary) · Launch App (secondary)

---

## Hero

# Put your treasury to work without selling a single asset.

A corporate treasury holding Bitcoin and stablecoin reserves answers to a board, an auditor, and a regulator, and it carries two standing questions: how to raise liquidity against a strategic Bitcoin position while keeping it on the books, and how to earn a real, defensible return on the cash that sits idle between obligations. Kamino answers both. Draw stablecoin liquidity against Bitcoin that stays in segregated custody at your qualified custodian, titled to you for the full term. Place reserves into a credit-yield vault whose loan book you can read line by line and confirm against a monthly attestation. Both run on the same pricing engine, the same custody discipline, and the same liquidation record — $120M+ cleared across 100,000+ liquidations with $0 of bad debt.

**[Contact sales →](./contact-sales.md)**    **[Launch App →](./kamino-app.md)**

---

## The treasury's two questions

A treasury that holds a strategic Bitcoin position and a stablecoin reserve is managing two distinct problems at once.

**Liquidity against the position.** Bitcoin on the balance sheet is conviction capital — held for the upside, the thesis, the long horizon. When a near-term need arrives (an acquisition, a runway extension, an operating draw), selling carries three costs at once: it crystallizes a taxable event, surrenders the upside the position was held for, and signals an exit to shareholders and the market. The treasury needs cash with the asset still on the books.

**Return on reserves.** The stablecoin reserve that funds payroll, vendors, and obligations earns nothing sitting still. A treasurer who allocates it needs a yield that a CFO and an auditor can underwrite — one with a known source, visible collateral, and a number an independent firm has signed.

Kamino addresses each with a dedicated product, built so the documentation, the custody, and the reporting clear the bar a corporate finance function actually has to meet.

---

## Liquidity against your Bitcoin, held where it already sits

[**Custodial Borrowing**](./custodial-borrowing.md) lets a treasury draw stablecoin liquidity against Bitcoin while the collateral stays in segregated custody at a qualified custodian, titled to the borrower throughout the loan. The asset backs the loan from inside the custodian's vault, and title stays with the borrower start to finish.

**How the structure holds.** A single tri-party account-control agreement binds the borrower, the lending operation, and the custodian. It establishes that the collateral backs the loan, sets the conditions under which it can be moved, and routes proceeds in a default. Rehypothecation is contractually prohibited — the custodian cannot lend, pledge, or trade the collateral, and keeps it segregated and bankruptcy-remote from its own balance sheet. Kamino's first custodied market runs on **Anchorage Digital**, a federally chartered digital-asset bank. The on-chain side is a dedicated Kamino [market](./markets.md): the borrower draws and repays USDC on Solana, while [Scope](./scope.md) values the Bitcoin continuously and runs proof-of-reserves checks that keep the on-chain position anchored to the real, custodied asset.

**The terms a treasury underwrites against.**

| Parameter | Value |
|---|---|
| Maximum LTV at origination | 60% (typically originated lower) |
| Collateral | Bitcoin, held at a qualified custodian, in your name |
| Borrow currency | USDC on Solana |
| Liquidation LTV | 70% (asset-dependent) |
| Margin call | On an LTV breach toward the liquidation threshold; top up collateral or repay any time before |
| Custody structure | Tri-party account-control agreement; segregated, bankruptcy-remote, no rehypothecation |
| Monitoring | Continuous, real-time, per-loan |

The conservative 60% ceiling exists to give a balance sheet margin for orderly management before any forced action. A treasury holding Bitcoin for the long term draws against it, keeps the upside, and avoids the taxable disposal entirely.

**Lock your cost of capital.** A drawn position can borrow at a [fixed rate for a fixed term](./fixed-rates.md) — 1, 3, 6, or 12 months — with the rate held constant through maturity. The custodial market runs a 3-month term as its default; a treasury financing around a longer obligation takes the position out to the 6- or 12-month tenor at the rate quoted the day it draws. Either way the treasury sets a single financing cost it can budget against for the full term, even as the floating market moves around it. That cost is the lender's interest plus Kamino's protocol take rate, both fixed at origination and disclosed before the draw. At maturity a loan rolls forward at the prevailing rate for its duration; early repayment is open throughout, carrying a bounded, disclosed early-exit charge that applies only inside the first term.

[Explore Custodial Borrowing →](./custodial-borrowing.md)

---

## Yield on reserves, with the loan book in plain sight

[**Institutional Yield**](./institutional-yield.md) places a stablecoin reserve into a portfolio of overcollateralized loans and pays a target **6–8% APY**. Every loan in the book is backed by Bitcoin at a maximum 60% LTV, originated by a lending operation licensed and supervised by Liechtenstein's Financial Market Authority and extended only to KYC-verified institutional borrowers. A deposit mints **kiUSDC**, a share token whose value per share grows in real time as interest accrues.

The reason a corporate finance function can hold this is the evidence behind it, checkable at three cadences:

- **A real-time loan book.** The analytics view streams loan-level data straight from the lending operation's loan-management and collateral-tracking platform — the same industry-standard system institutional counterparties run on. For every loan you see the collateral asset and amount, the principal, the collateral's current market value, the per-loan LTV, and the portfolio-weighted average LTV.
- **A weekly portfolio report.** Each week the lending operation publishes a report on outstanding balances, collateral coverage, and portfolio composition, giving a treasurer a steady read between attestations.
- **A monthly independent attestation.** Each month an independent accounting firm produces a signed attestation covering outstanding balances, collateral coverage, and portfolio health — a number a professional firm has put its name to.

Sitting above those three is the lending operation's continuing reporting to the FMA, a supervisory layer that gives a corporate finance function a regulated counterparty to point to.

Bitcoin collateral is priced through [Scope](./scope.md) with the same divergence and staleness guards that protect every market on the platform, so the overcollateralization claim is anchored to a guarded, multi-source price. Withdrawals inside the vault's managed liquidity buffer settle immediately; larger requests enter an on-chain first-in-first-out queue and fill in order as underlying loans mature. Because the vault is permissioned, kiUSDC moves only between approved addresses, which keeps the position inside the regulatory perimeter while still letting an allocator route it into other approved strategies and [permissioned vaults](./permissioned-vaults.md) that can hold, report on, and compose against it as an allocation scales.

[Explore Institutional Yield →](./institutional-yield.md)

---

## Two sides of one credit market

The reserve a treasury deposits into Institutional Yield funds the overcollateralized Bitcoin loans that borrowers — including treasuries drawing through Custodial Borrowing — take on the credit side. Supply and demand are two views of one credit market: deposit reserves to earn the yield, or pledge Bitcoin to draw the liquidity, both governed by the same custody structure, the same Scope pricing, and the same liquidation discipline. A treasury can sit on either side, or both. The full mechanism, from the depositor's seat to the borrower's, is told on the [**BTC-backed credit**](./uc-btc-backed-credit.md) use-case page.

---

## Why a balance sheet can stand behind this

The products above work because the infrastructure beneath them was built for capital that answers to an auditor and a regulator.

**Custody that preserves title.** Collateral sits at a qualified, federally chartered custodian, segregated and bankruptcy-remote, titled to its owner throughout, with rehypothecation contractually barred and proof-of-reserves verified on-chain through [Scope](./scope.md).

**A liquidation record that lets you underwrite the downside.** The [liquidation engine](./liquidation-engine.md) has cleared more than $120M across 100,000+ liquidations with $0 of bad debt. For a custodied loan the default path runs through the account-control agreement and the custodian, with proceeds settling to a Kamino-controlled multisig.

**Access control that matches how regulated capital allocates.** [Permissioning](./permissioning.md) gates who can borrow, deposit, and liquidate — per market, per wallet, per asset — with KYC enforced off-chain, so an institutional venue is restricted to approved counterparties and stays that way.

**A security posture built for diligence.** 20 external audits, 4 formal verifications, a $1.5M bug bounty, open-source and verifiable builds, and three years in production without incident — with live transparency dashboards for every multisig and every price feed. The full apparatus is on the [Security](./security.md) page.

---

## Proof

**Pantera Capital**, operating on-chain as Solana Company, is the first borrower to draw liquidity through Custodial Borrowing, against Bitcoin held at **Anchorage Digital**, a federally chartered digital-asset bank. The structure was built with named institutional counterparties from the first loan, with custody at a chartered bank and a regulator-supervised loan book behind it.

On the yield side, the loan book that pays the 6–8% is originated by a lending operation licensed and supervised by Liechtenstein's Financial Market Authority, and the monthly attestation behind it is signed by an independent accounting firm. Both halves of the page carry named, verifiable proof.

These names sit alongside Kamino's broader institutional roster — including fixed-rate borrowers such as **FalconX** on the [funds & trading firms](./institutions-funds-trading-firms.md) page — on the [customers](./customers.md) page.

---

## Where to go next

**Products for this segment:**
- [Custodial Borrowing](./custodial-borrowing.md) — stablecoin liquidity against Bitcoin held in qualified custody
- [Institutional Yield](./institutional-yield.md) — 6–8% on reserves from a transparent, regulated BTC-backed loan book
- [Fixed Rates](./fixed-rates.md) — lock the cost of capital for a 1, 3, 6, or 12-month term

**The job, end to end:**
- [BTC-backed credit](./uc-btc-backed-credit.md) — borrow against Bitcoin without selling, and the yield that funds it

**The other institutional segments:**
- [Funds & trading firms](./institutions-funds-trading-firms.md) — capital-efficient credit and execution with rate certainty
- [Wealth & asset managers](./institutions-wealth-asset-managers.md) — allocate client capital into regulated, transparent, managed yield
- [Institutions overview](./institutions.md) — the full institutional thesis and proof

**The trust layer:**
- [Security](./security.md) — audits, custody, proof-of-reserves, and the liquidation track record in full

---

## Get started

Custodial Borrowing is configured per counterparty — the asset, the custodian, the LTV, the access rules, and the term. Institutional Yield onboarding covers eligibility and allocation. Bring your custody relationship, or use Anchorage.

**[Contact sales →](./contact-sales.md)**    **[Launch App →](./kamino-app.md)**
