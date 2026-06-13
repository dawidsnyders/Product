# For wealth & asset managers

> Solutions · By who you are · [Institutions](./institutions.md) → Wealth & asset managers

## Allocate client capital into regulated on-chain yield you can put in front of a compliance team

Deposit into overcollateralized, BTC-backed credit yield supervised by Liechtenstein's Financial Market Authority, with the loan book visible down to the individual loan and an independent monthly attestation behind it. The same rails let you operate your own mandate: Meta-Vaults for multi-strategy vehicles, the Curation Suite to set composition and fees, Permissioned Vaults to gate investors, and the Yield API to embed yield under your own brand.

**[Contact sales](./contact-sales.md)** · [Launch App](https://kamino.com/home)

---

## The allocation question, answered with structure

A wealth or asset manager allocating client capital on-chain is underwriting three things at once: where the yield comes from, who can see it, and who is accountable when something moves. Each answer is a documented mechanism with a named party behind it.

- **Where the yield comes from** — overcollateralized loans to KYC-verified institutional borrowers, originated under a regulated lending structure, every loan backed by collateral held at a qualified custodian.
- **Who can see it** — a real-time, per-loan feed of collateral assets, loan amounts, collateral values, and LTV ratios, drawn from the same loan-management system the regulator monitors, with weekly reporting and a monthly attestation from an independent accounting firm.
- **Who is accountable** — a lender supervised by Liechtenstein's Financial Market Authority (FMA), reporting to the FMA on an ongoing basis, with collateral ownership remaining with the borrower and rehypothecation contractually prohibited.

These are the line items a diligence reader checks before an allocation memo clears. The sections below walk through the products that compose around them.

---

## Institutional Yield — regulated BTC-backed credit, deposit and hold

[Institutional Yield](./institutional-yield.md) is a stablecoin yield product that deploys deposits into overcollateralized loans originated by a regulated lending operation. You deposit USDC and receive a vault share token; borrower interest accrues into the share price every Solana block, so the position compounds in place and the token's current redemption value is the yield. Target yield runs **6–8% APY**, net of vault fees, with each loan's rate fixed at origination across a range of fixed durations — 30-day, 60-day, 90-day, and beyond — so the yield underneath the share is predictable through the life of every loan and re-prices only at rollover.

**How the credit is structured.** Every loan is overcollateralized by Bitcoin, with loan-to-value capped at a maximum 60% and typically lower in practice. Borrowers are KYC-verified institutional entities. Collateral sits at a qualified custodian under a tripartite agreement, ownership stays with the borrower, and rehypothecation is contractually prohibited, which ring-fences the asset backing your client's yield from the lender's balance sheet.

**The transparency you can put in front of a client or a compliance team:**

- **Real-time loan-book feed** — per-loan collateral assets, loan amounts, collateral values, LTV ratios, and aggregate portfolio metrics, visible in the vault interface and sourced from the same loan-management and collateral-tracking platform the regulator sees.
- **Weekly reporting** — a recurring report on the state of the book, on top of the live feed.
- **Monthly independent attestation** — a signed document from an independent accounting firm covering outstanding loan balances, collateral-coverage ratios, and portfolio health.
- **Regulatory oversight** — ongoing reporting to the FMA in Liechtenstein.

**Liquidity.** Withdrawals settle through three layers: an instant buffer covers everyday redemptions; a second layer draws on liquid reserves held against the book; and larger redemptions enter an on-chain first-in-first-out queue that settles as underlying loans mature and return principal. Your clients always know where they stand in line, on-chain.

[Read the Institutional Yield mechanics →](./institutional-yield.md)

---

## Lending Vaults — curated single-asset yield, run by names you can diligence

[Lending Vaults](./lending-vaults.md) are single-token yield vehicles where a professional curator allocates deposited capital across Kamino's lending [markets](./markets.md) at weights and caps they set and manage. You deposit one asset — USDC, SOL, JLP — and receive a share token that appreciates as interest accrues. Earned interest is reinvested continuously, so a position compounds on its own once the deposit is made.

The curator carries the allocation decisions: which markets to supply, how to weight them, when to rebalance, how much exposure to hold to any single borrower. Your client holds one share token, the curator runs the strategy, and the yield arrives in the share price.

**The trust signal is the curator roster.** Vaults on Kamino are operated by professional risk managers — Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, and Galaxy among them. Choosing a vault means choosing a curator and the strategy and risk discipline behind their name. Two safety primitives sit under each curated vault:

- **Whitelisted reserves** — the vault can only allocate into Kamino-verified markets, which protects depositors even if a curator's key were compromised.
- **Insurance pool** — the curator posts first-loss capital that absorbs losses before depositors, and Kamino matches it up to a cap, with a 30-day cooldown on withdrawals from that pool.

These are the same vaults that supply the credit markets across Kamino, which is why the yield is real borrower interest priced by [Scope](./scope.md) and protected by the [liquidation engine](./liquidation-engine.md) and its $0-bad-debt record.

**The economics.** The curator sets a performance fee and a management fee on the vault — the same fee structure curators run on the Curation Suite, commonly **15% performance and 2% AUM**. Both accrue continuously in the deposit token, so the APY a vault advertises is what your client nets after the curator's cut. Kamino's own revenue is the protocol take rate on the underlying lending, embedded in the borrow-rate math; the curator's fees are the curator's alone.

[Explore Lending Vaults →](./lending-vaults.md)

---

## Meta-Vaults — a managed fund in a box

When a single-asset vault is too narrow for the mandate, [Meta-Vaults](./meta-vaults.md) give you a configurable multi-asset, multi-strategy vehicle. One vehicle can blend stablecoin lending yield, leveraged exposure through [Multiply](./multiply.md), tokenized treasuries, and tokenized equities, rebalanced toward target weights as conditions move. A balanced-income mandate, for instance, might run 50% Institutional Yield stablecoin yield, 30% tokenized treasuries, and 20% Multiply'd SOL — held to those weights automatically as prices move.

You define the composition and the risk framework, and the [vault engine](./vault-engine.md) handles allocation, rebalancing, three-layer withdrawals, and the insurance pool beneath it. You configure all of it through the Curation Suite and stand the vehicle up the same day, on audited infrastructure.

**The economics.** You set a performance fee and a management fee on the portfolio, the same model as the Curation Suite — commonly **15% performance and 2% AUM**, both accruing continuously in the deposit token and yours to claim when you choose. Kamino's revenue is the protocol take rate on the underlying lending; the portfolio's fees are yours.

Meta-Vaults anchor the end-to-end path: [Launch a managed fund →](./uc-launch-a-managed-fund.md).

[See how Meta-Vaults compose →](./meta-vaults.md)

---

## Gate your investors — Permissioned Vaults for compliant mandates

A regulated mandate often needs to restrict who can deposit. Any Kamino vault can be made a [permissioned vault](./permissioned-vaults.md): deposits are limited to an approved set of wallets, enforced on-chain, while withdrawals always stay open so an investor can exit at any time. Identity verification happens off-chain — your KYC or accredited-investor process verifies the investor, and the approved wallet is whitelisted through an API.

This is how a wealth manager runs an accredited-only vehicle, an asset manager gates a fund to onboarded LPs, and an institution stands up a counterparty-specific lending arrangement — all on the same rails, with the gate switched on per vault and reversible at any time.

[How permissioning works →](./permissioning.md)

---

## Run the mandate yourself — the Curation Suite

Operating your own vehicle runs on the same self-serve platform the named curators use. [Curation](./curation.md) lets you launch and run your own vault or market: set the parameters, the allocations, the access rules, the insurance pool, and your fees, and optionally run it white-labeled on your own front-end.

**The economics are explicit.** You set a performance fee and a management fee at creation and can adjust them after; a typical institutional configuration is **15% performance and 2% AUM**. Both accrue continuously in the deposit token and are claimed when you choose to collect them, and you can return accrued fees to depositors at your discretion. Those fees are yours. Kamino's revenue is the protocol take rate on the underlying lending, embedded in the borrow-rate math; the fees you set sit entirely on top and go to you.

The platform supports two ways to operate. You can run permissionlessly on the audited rails the moment you configure a vehicle. To also list it on Kamino's consumer app and receive that distribution, the vehicle turns on the safety controls — whitelisted reserves, insurance pool, multisig governance — and passes a go-live review, Kamino's quality gate.

[Explore the Curation Suite →](./curation.md) · [Launch a managed fund, end to end →](./uc-launch-a-managed-fund.md)

---

## Embed the yield under your own brand — the Yield API

When the product you want is a yield balance inside your own app or under your own stablecoin, the [Yield API](./institutional-yield-api.md) packages Institutional Yield into a turnkey integration. Your users deposit a stablecoin and hold a yield-bearing share token that earns a target **6–8% APY**, generated by the same regulated, BTC-backed credit book your allocation clients sit in. A deposit call, a withdraw call, and a balance read sit on top; origination, custody, attestation, and the redemption queue are operated on Kamino's side.

You set the user-facing cap and keep every basis point above 2.5% APY as your spread. You can run it under USDC, or issue your own branded stablecoin through Coinbase's stablecoin-as-a-service and have it earn from day one. For a wealth or asset manager building a branded cash-management or yield offering for clients, this productizes the credit book into your own front-end.

[Explore the Yield API →](./institutional-yield-api.md) · [Embed yield in your product →](./uc-embed-yield.md)

---

## Run the full loop — your own on-chain money market

The same rails close a single loop end to end. Tokenize a fund, deploy it into a white-glove permissioned market that carries your own identity and authorization rules, issue your own branded stablecoin through Coinbase's stablecoin-as-a-service as the borrow liquidity, and pay the yield on that stablecoin back to your clients. Two sides of one market meet inside it: the clients who hold the fund borrow your stablecoin against it to lever their position, and the clients who supply that stablecoin earn the interest the borrowers pay. The stablecoin yield closes the loop, and both sides stay inside your brand on infrastructure Kamino operates end to end.

[Launch your own on-chain money market →](./uc-own-stablecoin-market.md)

---

## Managers already on these rails

- **PRIME** — over **$1B** in tokenized real-world-asset deposits flow through the credit book that backs Institutional Yield, originated on Figure's home-equity platform. The yield your clients earn is priced against a book at that scale.
- **The curator roster** — Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, and Galaxy operate live vaults and markets on Kamino. An allocation into a curated vault is an allocation into a name you can diligence.
- **Marinade** — runs Kamino vaults white-labeled inside its own product, invisible to Kamino's UI, the same Curation and white-label path a manager uses to stand up a branded vehicle.

[See the full customer stories →](./customers.md)

---

## Which product for which mandate

| Mandate | Product | What you get |
|---|---|---|
| Allocate client capital to regulated, transparent credit yield | [Institutional Yield](./institutional-yield.md) | 6–8% APY, BTC-backed, FMA-supervised lender, per-loan transparency |
| Passive single-asset yield, professionally curated | [Lending Vaults](./lending-vaults.md) | Curator-managed allocation, autocompounding, named roster |
| A multi-asset, multi-strategy vehicle to your own view | [Meta-Vaults](./meta-vaults.md) | Configurable composition, rebalancing, fund-in-a-box |
| Restrict a vehicle to approved or accredited investors | [Permissioned Vaults](./permissioned-vaults.md) | On-chain deposit gating, off-chain KYC, open exit |
| Operate your own venue and earn manager fees | [Curation](./curation.md) | 15% / 2% to you, your params, white-label option |
| Embed yield under your own app or stablecoin | [Yield API](./institutional-yield-api.md) | Turnkey integration, your cap, your spread above 2.5% APY |

---

## Why this is underwritable

The diligence questions a wealth or asset manager has to answer before allocating client capital are the questions Kamino's infrastructure was built to answer.

- **Pricing safety.** [Scope](./scope.md), Kamino's in-house oracle, has priced $19.33B of value with zero oracle exploits, carrying 8 of Kamino's 20 external audits. It composes multiple price sources with divergence and staleness guards, handles equity market hours and NAV pauses, and runs proof-of-reserves and anti-infinite-mint protection — the foundation that lets BTC, RWAs, and tokenized equities be priced safely as collateral.
- **Liquidation track record.** The [liquidation engine](./liquidation-engine.md) has processed $120M+ across 100k+ liquidations with $0 bad debt across three years in production.
- **The full security posture.** 20 external audits, 4 formal verifications, three years without incident, open-source and verifiably-built contracts, and live public dashboards for the multisig (multisig.kamino.fi) and every oracle feed (oracles.kamino.fi). The complete program is on the [Security](./security.md) page.
- **Custody and accountability.** The custody structure detailed above — collateral at qualified custodians under tripartite agreements, ownership with the borrower, rehypothecation prohibited — pairs with weekly reporting and an independent monthly attestation a compliance team can hold on file.

[See the full security and transparency program →](./security.md)

---

## Where wealth & asset managers go next

- **[Launch a managed fund](./uc-launch-a-managed-fund.md)** — the end-to-end path: create a vehicle, manage it, gate your investors, integrate it, and get reporting and data out of the box.
- **[Launch your own on-chain money market](./uc-own-stablecoin-market.md)** — the closed loop: a tokenized fund, a permissioned market under your identity, your own branded stablecoin as the borrow liquidity, and yield on that stablecoin paid back to your clients.
- **[Institutions](./institutions.md)** — the lead institutional view, with the other sub-segments and the full proof band.
- **[Curators & managers](./curators-managers.md)** — the operator's view of running credit and yield venues on Kamino.
- **Other institutional desks** — [Funds & trading firms](./institutions-funds-trading-firms.md) for borrow and leverage mandates, [Treasuries & corporates](./institutions-treasuries-corporates.md) for treasury liquidity.
- **[Institutional Yield](./institutional-yield.md)** · **[Lending Vaults](./lending-vaults.md)** · **[Meta-Vaults](./meta-vaults.md)** · **[Permissioned Vaults](./permissioned-vaults.md)** · **[Curation](./curation.md)** · **[Yield API](./institutional-yield-api.md)**

---

## Talk to us about your mandate

Tell us the mandate — the asset, the investor base, the risk framework, the reporting your clients need — and we'll configure the rails to support it. Allocate into a regulated, transparent vehicle today, and stand up your own when you're ready to run the strategy yourself.

**[Contact sales](./contact-sales.md)** · [Launch App](https://kamino.com/home)
