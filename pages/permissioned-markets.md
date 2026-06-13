# Permissioned Markets

> Credit markets / Permissioned Markets

## Compliant credit markets, gated to exactly who you allow

Run a lending venue where every participant clears your compliance bar before a single dollar moves. Permissioned Markets put a per-wallet, per-action allowlist in front of the operations you choose to gate, enforced on-chain, with KYC handled by your provider off-chain. Every wallet that supplies, borrows, or liquidates in the venue is one your team has named, screened, and approved.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## The institutional problem this solves

A regulated wealth manager, fund, or asset issuer cannot lend or borrow alongside anonymous wallets. Their mandate, their counterparties, and their auditors require that everyone in the venue has been identified, screened, and approved. Open lending markets admit any wallet by design, and standing up a private protocol to add that control costs a year of build time and an audit budget most desks will not carry.

Permissioned Markets give that control as a setting. The same engine that runs Kamino's open markets — the same liquidation logic, the same oracle layer, the same audited code — operates as a gated venue once you turn permissioning on. You decide which operations require approval, you decide which wallets are on the list, and you can reverse any of it instantly. Underwriters get a venue whose every participant they can name; depositors and borrowers get the capital efficiency of shared infrastructure.

---

## The access-control model

Permissioning adds a single approval check to gated operations. When a wallet attempts a gated action, the market checks that the wallet holds an active permission for that exact operation on that exact market. The transaction either clears the check and settles in full, or reverts as a single atomic unit. A wallet that lacks the permission gets a clean rejection with no state change.

Control is expressed along four dimensions, each set independently:

- **Per market.** Each market decides on its own which operations are gated. One market can be fully open while the market beside it admits only approved wallets, and the two share no risk.
- **Per operation.** Gating applies to specific actions. You can require approval to **supply liquidity / deposit collateral**, to **borrow**, and to **liquidate other users' positions**, in any combination. A market can gate borrowing while leaving deposits open, or gate both.
- **Per wallet.** Every approved wallet carries its own permission record listing the actions it is allowed to take. Approval is granted to a wallet, for named actions, on a named market.
- **Withdraw and repay stay open.** Both exit actions clear for any approved wallet at any time. Screening applies on the way in: an approved borrower can always repay down their loan, and an approved depositor can always pull their capital. A wallet whose approval later lapses keeps a clean path out of its position.

Because the gate is an additive approval check layered over the existing market logic, it is **reversible in a single step**. Turn it off and the venue is open; turn it back on and it is gated again, with no fork, no migration, and no disruption to live positions. The canonical mechanics of how this gate behaves across markets, vaults, and assets live on the [Permissioning](./permissioning.md) infrastructure page.

---

## How KYC connects

Identity verification happens off-chain, where it belongs. Your KYC or KYB provider verifies the counterparty under your program. Once they pass, your backend authorizes the wallet on the target market through Kamino's permissioning API. The chain holds only the result: an allowlist of wallets cleared to act. Identity documents stay in your provider's system, which remains the system of record for who each counterparty is, while the on-chain layer carries the cleared-wallet list and the compliance stack you already run stays in place.

Three paths grant and revoke permissions:

- **API** — your onboarding backend authorizes a wallet the moment its KYC clears, and revokes it the moment a relationship ends.
- **SDK** — initialize, update, and remove a wallet's permissions programmatically inside your own application flow.
- **CLI** — add, update, and remove permissions operationally for a market you run.

Revoking a wallet sets its permitted actions to none. The record stays in place, so re-approving the same counterparty later is immediate. Every authorization is governed by the market's permissioning authority, set under [multisig governance](./security.md).

---

## What it costs to run

A permissioned market settles on the same fee model as every other market on Kamino. The curator who configures and operates the venue sets the rates and keeps the curator fees they configure. Kamino's revenue is a protocol take rate on the underlying lending, the same take rate that sits inside the supply-APY math (`supply APY ≈ borrow rate × utilization × (1 − protocol take rate)`); curator fees stay with the curator. Permissioning is a configuration toggle on a market you already operate, so the price to run a gated venue is the price to run the market. You set economics through [Curation](./curation.md), which carries the full fee structure and take-rate detail.

---

## Whitelisted liquidators

In a regulated venue, the parties who can seize and sell a borrower's collateral matter as much as the parties who can borrow. Permissioned Markets gate the liquidate action the same way they gate deposit and borrow: only approved liquidators can act on positions in the market.

In a gated venue, the only parties that can act on a sensitive RWA or institutional position are liquidators your team has vetted and approved. When a position crosses its liquidation threshold, it is unwound at the [Scope](./scope.md) oracle price by one of those approved liquidators, in an orderly process that holds the borrower clear of a forced sale into thin secondary liquidity. The mechanism runs on the [liquidation engine](./liquidation-engine.md), which has settled $120M+ across 100,000+ liquidations with $0 bad debt.

---

## Composed from the same engine as every other market

A permissioned market is a [Markets](./markets.md) configuration. Every market on Kamino is already a self-contained, isolated venue tuned across ~50 parameters per asset — caps, LTV and liquidation thresholds, the interest-rate curve, oracle sources and price guards, term, and a market name and identity. Permissioning is one of the dimensions a market is tuned along, alongside **correlated-asset risk grouping, term (floating or fixed), and collateral location (on-chain or at a custodian)**. Access — open or gated — is the dimension this page turns on.

That means a permissioned market composes with everything else the engine offers, with no special code:

- **[Fixed Rates](./fixed-rates.md)** — gate a fixed-rate, fixed-term market to KYC'd borrowers, and price term credit for named counterparties along an on-chain yield curve.
- **[Custodial Borrowing](./custodial-borrowing.md)** — combine a gated venue with collateral held at a qualified custodian for the full institutional credit structure.
- **[Scope](./scope.md) pricing and scam-wick protection** — every position is valued by Kamino's in-house oracle layer, with averaging, divergence limits, and price bands that reject anomalous prints. Price guards can be set so the liquidation threshold sits beyond the widest tolerated depeg, keeping a brief dislocation inside the safe band.
- **[Multiply](./multiply.md)** — approved participants can loop collateral and debt inside the gated market at high LTV through a correlated-asset risk group.

---

## The closed loop: a white-glove market under your own stablecoin

The fullest expression of a permissioned market is a venue Kamino stands up and operates with you end to end, carrying your institution's identity and your authorization rules, with your own branded stablecoin as the borrow liquidity. This is the flagship institutional structure, and it runs as one self-contained loop.

Start with a tokenized fund your clients already hold. Kamino deploys a white-glove permissioned market tuned to that asset: your branded market name and identity, your approved counterparty list, your liquidation policy, your rate curve. The borrow liquidity in that market is your own stablecoin, issued through [Coinbase's stablecoin-as-a-service](./institutional-yield-api.md) and used as the unit of account across the venue.

Two sets of your clients meet inside the one market:

- **Fund holders lever their position.** An approved holder borrows your stablecoin against the tokenized fund and loops the exposure through a correlated-asset risk group, raising leverage on a fund they were already holding, without selling it.
- **Stablecoin providers earn the yield.** The clients who supply that stablecoin into the market collect the borrow interest the loopers pay. The unit of account is your stablecoin, the balances flow into a tailored vault structure, and the yield lands back with your clients.

The loop closes on itself: the interest the leveraged holders pay is the yield the stablecoin providers earn, and both sides are your own clients inside a market that carries your brand. Kamino runs the oracle pricing through [Scope](./scope.md), the [liquidation engine](./liquidation-engine.md), and the white-glove integration and operational support. The full walk-through of standing this up — the tokenized asset, the branded market, the stablecoin issuance, and the two-sided yield — lives on [Launch your own on-chain money market](./uc-own-stablecoin-market.md).

---

## A market running this today

PRIME, the on-chain RWA credit venue built on Kamino with $1B+ in deposits, is the largest expression of the pattern in production. It serves identified institutional counterparties at scale: lending gated to approved participants, liquidations restricted to vetted liquidators, and regulated collateral held against named borrowers. Every dollar in PRIME moved through a wallet its operators screened and approved.

Kamino's Ethena market is a second live permissioned venue, configured to the specification a conservative institutional lender expects. Lending is gated to approved participants, liquidations are restricted to whitelisted liquidators, and the collateral is priced by the [Scope](./scope.md) oracle with price guards configured so that ordinary secondary-market volatility holds short of the liquidation threshold. It runs as a worked example of the same settings any desk can apply to its own asset.

The same pattern is available to any institution: a market tuned to your asset, your risk tolerance, your approved counterparties, and your liquidation policy, assembled from settings on infrastructure that has protected lender capital through three years and 100,000+ liquidations in production with $0 bad debt.

---

## Why this is hard to replicate

The access check is a few lines of approval logic. What gives an institution's underwriters something to sign off on is the stack beneath it. The collateral is priced by the [oracle layer](./scope.md) that has priced $19.33B of value with zero oracle exploits, wound down by the [liquidation engine](./liquidation-engine.md) that has settled 100,000+ liquidations with $0 bad debt, supplied by the [vault engine](./vault-engine.md), and held to a [security posture](./security.md) of 20 external audits, 4 formal verifications, and three years in production. That is the part that takes years and an audit budget to build, and it is already running under every permissioned market.

Permissioning is the institutional switch on top of that stack. It is additive and reversible, and it turns audited open infrastructure into a venue regulated capital can deploy on.

For the canonical mechanics of the access layer across markets, vaults, and assets, see the [Permissioning](./permissioning.md) infrastructure page; for gated yield vehicles built on the same controls, see [Permissioned Vaults](./permissioned-vaults.md).

---

## For whom

- **[Institutions](./institutions.md)** — wealth and asset managers, funds, trading firms, and treasuries that can only operate alongside identified counterparties, including those that want a branded venue running on [their own stablecoin](./uc-own-stablecoin-market.md).
- **[Asset issuers](./asset-issuers.md)** — list a regulated or restricted token in a venue where only cleared wallets can hold and borrow against it.
- **[Curators and managers](./curators-managers.md)** — stand up and run a gated credit venue to your own mandate through [Curation](./curation.md).
- **[Fintechs and apps](./fintechs-apps.md)** — embed a compliant credit venue inside your product, gated to the users your own onboarding has cleared, with the access check wired in through the permissioning API.

---

## Start here

A permissioned market stands up through [Curation](./curation.md): you configure the asset, the gated operations, the rate curve, and the approved counterparty list, then connect your KYC provider to the permissioning API. For the white-glove path — a branded venue Kamino operates with you under [your own on-chain money market](./uc-own-stablecoin-market.md) — talk to our team to scope the structure end to end, from the tokenized asset to your branded stablecoin to the two-sided yield. Talk to our team to scope a compliant credit market tuned to your asset, your counterparties, and your liquidation policy.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
