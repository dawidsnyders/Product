# Customers

*PROOF — the filterable case-study hub. Real institutions, issuers, curators, and apps already running on Kamino's rails, with what they set out to do, the products they used, and what shipped. CTA: Contact sales (primary) · Launch App (secondary).*

---

## Hero

# The institutions building on-chain build on Kamino.

Trading desks financing positions at locked rates. A tokenized-credit issuer that crossed a billion dollars in deposits. A fund borrowing against Bitcoin while it stays in custody. Wallets and asset managers running Kamino's yield and credit inside their own products. Each one walked in with a job, configured the rails to fit it, and put real capital to work.

[Contact sales →](./contact-sales.md)  ·  [Launch App →](https://kamino.com/home)

**$2.5B** AUM · **$21B+** loans originated · **$120M+** interest generated · **$0** bad debt across 3+ years of production

---

## Filter the stories

Find a peer story three ways: by what they set out to do, by who they are, or by the product they came to evaluate.

**By job**
[Offer credit against tokenized assets](#prime--figure) · [Lock a financing rate](#falconx) · [Borrow against custodied assets](#pantera--the-solana-company) · [Run a venue on Kamino](#the-curator-roster) · [Embed yield and credit in an app](#phantom-and-onekey)

**By who**
[Asset issuers](./asset-issuers.md) · [Funds & trading firms](./institutions-funds-trading-firms.md) · [Treasuries & corporates](./institutions-treasuries-corporates.md) · [Wealth & asset managers](./institutions-wealth-asset-managers.md) · [Curators & managers](./curators-managers.md) · [Wallets & fintechs](./fintechs-apps.md)

**By product**
[Scope](./scope.md) · [Markets](./markets.md) · [Fixed Rates](./fixed-rates.md) · [Custodial Borrowing](./custodial-borrowing.md) · [RWA Liquidity](./rwa-liquidity.md) · [Curation](./curation.md) · [Yield API](./institutional-yield-api.md)

---

## PRIME / Figure

**$1B+ in RWA deposits, with PRIME the flagship market.**

**Who.** PRIME is the tokenized private-credit asset issued through Figure and Hastra, brought on-chain on Solana. It represents real lending exposure, packaged as a token that can be held, supplied, and borrowed against.

**The job.** Make a tokenized credit asset useful the day it lists — priced safely, accepted as collateral, and deep enough that holders can size into it and out of it. A token holders can borrow against and exit the day it lists is a token holders allocate to.

**The Kamino products used.**
- [Scope](./scope.md) built a guarded price feed for PRIME, the gate that lets every other product trust its value. Pricing the asset is the first onboarding step; once Scope can value it, Kamino can lend, borrow, loop, and trade it.
- [Markets](./markets.md) gave PRIME its own dedicated market with risk parameters tuned to a credit asset — caps, LTV, liquidation thresholds, and an interest-rate curve set for this collateral specifically. Listing the token in a market is what grants it instant collateral status.
- [RWA Liquidity](./rwa-liquidity.md) and [RFQ](./rfq.md) let holders enter and exit at the oracle price with no standing market maker, and let solvers fill larger orders on demand.
- [Multiply](./multiply.md) turned the asset into a leveraged-yield strategy, so holders could loop PRIME exposure with one click.

`Scope` · `Markets` · `RWA Liquidity` · `Multiply`
([Scope](./scope.md) · [Markets](./markets.md) · [RWA Liquidity](./rwa-liquidity.md) · [Multiply](./multiply.md))

**The outcome.** Kamino's RWA markets crossed **$1 billion** in total deposits, with PRIME the flagship market alongside issuers including Maple, OnRe, Superstate, and xStocks. The economics: Figure and Hastra earn on the underlying credit they originate, and Kamino takes a protocol rate on the lending the market generates. Collateral status on day one is now the standard route for tokenized assets coming to Solana.

*Explore the job:* [Offer credit against tokenized assets →](./uc-credit-against-tokenized-assets.md) · *for issuers:* [Asset issuers →](./asset-issuers.md)

---

## FalconX

**The first institutional fixed-rate borrow on Kamino.**

**Who.** FalconX is an institutional digital-asset prime broker and lending desk with over **$8 billion** in loan originations.

**The job.** Borrow at a known cost. A trading desk financing a position needs to know exactly what it will pay over a defined term. Variable rates make that hard — enter a loan at 5% and the rate can move to 12% the following week as pool utilization shifts, and a large borrower pushes the rate up simply by drawing size.

**The Kamino products used.**
- [Fixed Rates](./fixed-rates.md) let FalconX lock a USDC borrow at a set rate for a set term. The rate at origination is the rate through maturity, regardless of what the variable market does.
- Borrow Orders let the desk post exactly what it wanted — amount, maximum rate, minimum term — and have the order filled against committed liquidity at the best available rate up to its ceiling.
- [Lending Vaults](./lending-vaults.md) supplied the other side: curators Gauntlet and Steakhouse deployed lender capital toward the fixed-rate reserves and filled the order, earning a guaranteed yield at full utilization.

`Fixed Rates` · `Lending Vaults` · `Curation`
([Fixed Rates](./fixed-rates.md) · [Lending Vaults](./lending-vaults.md) · [Curation](./curation.md))

**The outcome.** FalconX became the inaugural institutional fixed-rate borrower on Kamino, originating a USDC loan with rate certainty for its full term. The economics: FalconX pays a fixed coupon over the term, lenders supplying the fixed-rate reserves earn that coupon at full utilization, and curators and Kamino take a share of the spread for sourcing and operating the liquidity. The same primitive now backs Multiply loopers locking their spread, off-chain-collateral markets, and the public fixed-rate market — the foundation of an emerging on-chain yield curve where both sides post terms and price discovery happens in the open.

*Explore the job:* [Lock a financing rate with Fixed Rates →](./fixed-rates.md) · *for this buyer:* [Funds & trading firms →](./institutions-funds-trading-firms.md)

---

## Pantera / The Solana Company

**The first on-chain borrow against assets that never leave qualified custody.**

**Who.** A digital-asset fund borrowing against its holdings, operating publicly as The Solana Company. Its assets are held with a qualified custodian.

**The job.** Access on-chain credit against assets that stay in institutional custody. A fund's holdings need to remain at a regulated custodian under the structures the fund's mandate and counterparties require, while still backing an on-chain loan. The credit has to come to the collateral.

**The Kamino products used.**
- [Custodial Borrowing](./custodial-borrowing.md) opened an on-chain loan against assets held at the custodian. Custody operations are mirrored on-chain in real time, so the loan always tracks the actual collateral while the assets stay inside the qualified-custody environment.
- **Anchorage Digital** ([see Anchorage's story](#anchorage-digital)) provides the custody integration, with an account-control structure governing the collateral and a defined path for liquidation proceeds to settle the loan on-chain.
- [Scope](./scope.md) prices the collateral and pairs with proof-of-reserves so the on-chain loan reflects assets that are verifiably held.
- [Fixed Rates](./fixed-rates.md) is built into the custodial market from day one, so a custodied borrow can carry a locked rate; the custodial BTC market's standard term is 3 months, a deliberate narrowing from the 1-, 3-, 6-, and 12-month terms on the public markets.

`Custodial Borrowing` · `Scope` · `Fixed Rates`
([Custodial Borrowing](./custodial-borrowing.md) · [Scope](./scope.md) · [Fixed Rates](./fixed-rates.md))

**The outcome.** The Solana Company became the first borrower in Kamino's off-chain-collateral market, the launch borrower for a market type that lets institutions borrow on-chain against custodied assets that remain at their qualified custodian throughout. The economics: the fund pays interest on its on-chain draw, lenders supplying the custodial market earn that interest, and Kamino takes a protocol rate on the loan. It is the template for treasuries and funds that want on-chain liquidity while their collateral stays under the custody structures their mandate requires.

*Explore the job:* [BTC-backed credit →](./uc-btc-backed-credit.md) · *for this buyer:* [Treasuries & corporates →](./institutions-treasuries-corporates.md)

---

## Anchorage Digital

**The first qualified custodian wired into on-chain credit.**

**Who.** Anchorage Digital is a qualified custodian for institutional digital assets.

**The job.** Let assets in qualified custody back on-chain credit, with custody controls and liquidation handling that hold up to institutional and regulatory scrutiny.

**The Kamino products used.**
- [Custodial Borrowing](./custodial-borrowing.md) connects to Anchorage through an account-control structure: custody operations are reflected on-chain in real time so the loan tracks the actual collateral, and on a liquidation, proceeds from the custodian settle the position on-chain.
- [Scope](./scope.md) and on-chain proof-of-reserves give lenders verifiable evidence that the collateral behind each loan is held as represented.

`Custodial Borrowing` · `Scope`
([Custodial Borrowing](./custodial-borrowing.md) · [Scope](./scope.md))

**The outcome.** Anchorage was the first qualified custodian wired into Kamino's off-chain-collateral market, and its account-control model is the structure that satisfies an institution's custody and liquidation requirements: assets stay in qualified custody, the lender holds enforceable rights over the collateral, and liquidation proceeds settle on-chain through a defined path. That control structure unblocks regulated funds, treasuries, and wealth managers whose mandates keep assets at a custodian — they can now access on-chain credit with their collateral staying with the custodian throughout.

*Explore:* [Custody & proof of reserves on Security →](./security.md) · [Custodial Borrowing →](./custodial-borrowing.md)

---

## Institutional Yield — the regulated-credit allocators

**A regulated BTC-backed credit yield targeting 6–8% APY.**

**Who.** Stablecoin allocators — treasuries, funds, and fintech balance sheets — seeking yield from overcollateralized loans to KYC-verified borrowers, with collateral they can underwrite and an auditor can verify.

**The job.** Earn a transparent, regulated yield on stablecoins, with collateral, custody, and reporting that an allocator can underwrite and an auditor can verify.

**The Kamino products used.**
- [Institutional Yield](./institutional-yield.md) deploys deposits into overcollateralized loans to KYC-verified institutional borrowers, supervised under Liechtenstein's Financial Market Authority. Depositors hold the yield-bearing share token `kiUSDC`, which appreciates as interest accrues, targeting 6–8% APY.
- Loans are backed by Bitcoin held at qualified custodians under tripartite agreements, with collateral ownership staying with the borrower, rehypothecation contractually prohibited, and loan-to-value capped at 60% and typically lower.
- Transparency is built in: a real-time, per-loan data feed sourced from the same loan-book systems the regulator supervises, weekly collateral reporting, and a monthly attestation from an independent accounting firm.
- [Permissioning](./permissioning.md) enforces KYC borrowers at the legal layer and approved depositors at the wallet layer.

`Institutional Yield` · `Permissioning` · `Yield API`
([Institutional Yield](./institutional-yield.md) · [Permissioning](./permissioning.md) · [Yield API](./institutional-yield-api.md))

**The outcome.** A regulated BTC-backed credit yield runs live as a packaged product, and the same engine is exposed to fintechs through the [Yield API](./institutional-yield-api.md) as tailorable Meta-Vaults with a configurable user cap and revenue share. A partner can run the product under its own branded stablecoin, issued via Coinbase's stablecoin-as-a-service, as the unit of account — yield-in-a-box for any balance sheet or app.

*Explore the job:* [BTC-backed credit →](./uc-btc-backed-credit.md) · *for this buyer:* [Wealth & asset managers →](./institutions-wealth-asset-managers.md)

---

## Marinade

**A RockawayX-curated vault running entirely on Marinade's own front-end.**

**Who.** Marinade is a leading Solana staking protocol with a large user base of its own.

**The job.** Offer a lending vault to Marinade's users, on Marinade's own front-end, with a professional curator managing the strategy and Marinade's brand on the experience throughout.

**The Kamino products used.**
- [White-Label vaults](./white-label.md) run a Kamino vault entirely inside Marinade's interface, with no Kamino UI in front of the user.
- [Curation](./curation.md) puts a professional curator — RockawayX — in charge of allocation and risk for the vault.
- The [Vault engine](./vault-engine.md) handles allocation across markets, auto-compounding, three-layer withdrawals, and the insurance-pool backstop underneath the branded surface.

`White-Label` · `Curation` · `Vault Engine`
([White-Label](./white-label.md) · [Curation](./curation.md) · [Vault Engine](./vault-engine.md))

**The outcome.** A RockawayX-curated vault lives on Marinade's own UI, giving Marinade's users curated lending yield while RockawayX runs allocation and risk and Kamino supplies the engine underneath. The economics: RockawayX earns the curator fee for managing the strategy, Kamino takes a protocol rate on the lending, and Marinade keeps the user relationship and brand on its own surface. It is the model for any platform that wants Kamino's yield engine wearing its own brand.

*Explore the job:* [Launch a managed fund →](./uc-launch-a-managed-fund.md) · *for this buyer:* [Fintechs & apps →](./fintechs-apps.md)

---

## Phantom and OneKey

### Phantom

**A curated RWA-backed yield vault reachable from inside the wallet.**

**Who.** Phantom is one of the most widely used self-custody wallets on Solana.

**The job.** Put curated, real-yield exposure directly in front of wallet users, inside the wallet, backed by a named risk manager and real-world-asset credit, with the source of yield visible to the user.

**The Kamino products used.**
- [Embedded Wallets](./embedded-wallets.md) and [BuildKit](./buildkit.md) bring Kamino's yield into the wallet experience, so users earn while staying in the app.
- [Curation](./curation.md) puts Gauntlet on the vault as the curator and risk manager.
- The vault allocates into real-world-asset credit markets, so the yield comes from genuine lending demand priced by [Scope](./scope.md).

`Embedded Wallets` · `BuildKit` · `Curation` · `Scope`
([Embedded Wallets](./embedded-wallets.md) · [BuildKit](./buildkit.md) · [Curation](./curation.md) · [Scope](./scope.md))

**The outcome.** Phantom users reach a curated RWA-backed yield vault from inside the wallet, with Gauntlet managing risk and Kamino supplying the engine. The economics: Gauntlet earns the curator fee, Kamino takes a protocol rate on the lending, and Phantom can share in the yield it routes through its surface. It is the pattern for wallets and fintechs that want to ship credit and yield in days by embedding infrastructure that is already audited and live.

*Explore the job:* [Embed yield in your app →](./uc-embed-yield.md) · *for this buyer:* [Fintechs & apps →](./fintechs-apps.md)

### OneKey

**Native borrowing against holdings inside a hardware-wallet flow.**

**Who.** OneKey is a multi-chain hardware and software wallet.

**The job.** Give wallet users borrowing against their holdings natively inside the wallet, across the chains OneKey supports, with Kamino supplying the lending engine behind the wallet's own UI.

**The Kamino products used.**
- [BuildKit](./buildkit.md) embeds Kamino borrowing into OneKey in a few lines, surfacing credit against a user's holdings inside the wallet.
- [Markets](./markets.md) and the [Liquidation engine](./liquidation-engine.md) provide the venue and the safety layer behind every loan, the same battle-tested infrastructure Kamino runs for everyone.

`BuildKit` · `Markets`
([BuildKit](./buildkit.md) · [Markets](./markets.md))

**The outcome.** OneKey users open a borrow against their holdings from inside a hardware-wallet flow — collateral selection, loan terms, and signing all happen in OneKey's own surface, while Kamino runs the market, the rate, and the liquidation safety layer underneath. The economics: OneKey integrates Kamino's credit rails into its existing surface and can earn on the borrowing it routes, while Kamino takes a protocol rate on the loan. It is the path for a wallet to add a borrow product while leaving the lending protocol to Kamino.

*Explore:* [BuildKit →](./buildkit.md) · *for this buyer:* [Fintechs & apps →](./fintechs-apps.md) · [Developers →](./developers.md)

---

## The curator roster

**Nine named risk managers running credit and yield venues on Kamino.**

**Who.** The professional risk managers and strategy operators who run credit and yield venues on Kamino: Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, and Galaxy.

**The job.** Operate lending markets and vaults — set the strategy, manage the risk, attract the capital — with Kamino supplying and securing the underlying infrastructure.

**The Kamino products used.**
- [Curation](./curation.md) is the self-serve platform where a curator launches and runs a vault or market: parameters, allocations, fees, reserve whitelist, and insurance pool, optionally white-labeled on their own front-end.
- [Markets](./markets.md) and the [Vault engine](./vault-engine.md) are the rails they configure and operate.
- [Permissioning](./permissioning.md) and the risk apparatus — whitelisted reserves, insurance-pool first-loss capital, and the [Liquidation engine](./liquidation-engine.md) — let curators run venues that meet institutional standards.

`Curation` · `Markets` · `Permissioning`
([Curation](./curation.md) · [Markets](./markets.md) · [Permissioning](./permissioning.md))

**The outcome.** Named curators run the vaults users deposit into, which is the trust signal on every consumer vault — choosing a vault means choosing a curator and their strategy. Curators earn their performance and AUM fees; Kamino's revenue comes from the protocol take rate on the underlying lending. Recent launches span a Gauntlet RWA vault behind Phantom, a RockawayX vault white-labeled on Marinade, and the Gauntlet and Steakhouse liquidity that filled FalconX's fixed-rate order.

*Explore:* [Curation →](./curation.md) · *for this buyer:* [Curators & managers →](./curators-managers.md) · [Launch a managed fund →](./uc-launch-a-managed-fund.md)

---

## What every story has in common

The same infrastructure appears under each customer, configured to a different job:

- **[Scope](./scope.md)** prices what others can't — tokenized credit, equities, gold, NAV-based funds, Bitcoin — the gate that lets any asset become collateral. Zero oracle exploits across the assets it values.
- **[Markets](./markets.md)** spins up a venue tuned to an institution's asset, risk, access rules, and identity through configuration alone, with no new code. A bespoke market is a settings exercise.
- **[Permissioning](./permissioning.md)** dials any market or vault from fully open to fully gated — per operation, per asset, per wallet — and reverses instantly, the switch that makes a venue regulated-capital-ready.
- **The [Liquidation engine](./liquidation-engine.md)** has generated **$120M+** in interest and processed liquidations across years of production with **$0 bad debt**, the record institutions underwrite before they allocate.

This is why a single infrastructure stack serves a credit issuer, a prime broker, a custodied fund, a staking protocol, and a wallet at once. [See how the rails fit together →](./how-kamino-works.md) · [Read the full security and transparency story →](./security.md)

---

## Bring your own use case

If you can describe what you want to do on-chain — finance a position at a fixed rate, make your token usable as collateral, borrow against custodied assets, run a venue, or embed yield in your product — Kamino's infrastructure can be configured to support it. That is the through-line in every story on this page.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)
