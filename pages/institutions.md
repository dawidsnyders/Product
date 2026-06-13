# Institutions

> **Audience page** · the lead institutional door. Routes to the three sub-segments, states the institutional thesis, carries the proof band and the security/moat angle, and cross-links the four use-cases. **Primary CTA: Contact sales.** Secondary: Launch App.

---

## Hero

# Capital-markets infrastructure for institutional capital on-chain

### Allocate into regulated, transparent yield. Borrow against your holdings with rate certainty. Raise treasury liquidity while you keep your positions. Kamino prices the assets through an in-house oracle, screens capital through compliance-grade access control, and runs every venue through named professional managers with first-loss capital at stake.

Kamino is a live capital-markets protocol on Solana, in production for three years with $0 of bad debt.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)

| $2.5B | $21B+ | $120M+ | $0 |
|---|---|---|---|
| Assets under management | Loans originated | Interest generated for lenders | Bad debt across 3+ years in production |

---

## The thesis

Tokenization moved real assets on-chain — Treasuries, private credit, gold, equities, Bitcoin. What was missing is the market structure around them: a place to price those assets safely, lend and borrow against them with terms an allocator can underwrite, move in and out of them with execution quality, and do all of it inside the access controls a regulated mandate requires.

Kamino operates that market structure today. Three capabilities sit on one set of rails:

- **Credit** — borrow against an asset at a fixed rate and fixed term, or borrow against assets that stay at your qualified custodian, with the loan settled on-chain and proof of reserves published live.
- **Yield** — allocate into single-asset lending vaults, multi-asset Meta-Vaults, or a regulated Bitcoin-backed credit vault, each operated by a named curator with first-loss capital at stake.
- **Liquidity** — enter and exit positions through best-execution routing and solver-filled quotes, with oracle-priced liquidity for assets that have no standing market maker.

The same four configuration choices stand up any venue an institution needs: who can transact (open or KYC-gated), correlated-asset risk grouping, term (floating or fixed), and where collateral sits (on-chain or at a custodian). A bespoke market is a configuration of audited, live rails — pick the four parameters and the venue exists.

---

## Find the path built for you

Three institutional profiles, each with its own products, proof, and economics.

### Wealth & asset managers

Allocate client capital into regulated, transparent yield, and run your own mandates on the same rails with first-loss capital at stake.

**[Explore solutions for wealth & asset managers →](./institutions-wealth-asset-managers.md)**

### Funds & trading firms

Put capital to work with rate certainty to maturity and best-execution routing in and out of every position.

**[Explore solutions for funds & trading firms →](./institutions-funds-trading-firms.md)**

### Treasuries & corporates

Raise liquidity against holdings you keep, and earn on idle reserves inside a structure your auditors can verify.

**[Explore solutions for treasuries & corporates →](./institutions-treasuries-corporates.md)**

---

## What you can do here

### Earn regulated, transparent yield

[Institutional Yield](./institutional-yield.md) is a stablecoin yield product funded by overcollateralized, KYC-verified institutional lending. Deposits hold a yield-bearing vault share token whose price appreciates as interest accrues; the target return is **6–8% APY**. Every loan is backed by high-quality liquid collateral — currently Bitcoin — at a maximum 60% loan-to-value, held at qualified custodians under tripartite agreements that keep collateral bankruptcy-remote and ownership with the borrower, with collateral pledged solely to secure the loan. The lending operation reports to the Financial Market Authority Liechtenstein (FMA).

The transparency is structural and runs on three cadences. A real-time loan-book feed publishes per-loan collateral, amounts, LTV, and portfolio-weighted statistics from the same loan-management and collateral-tracking systems the FMA monitors. A weekly report consolidates the book and its performance. An independent accounting firm performs a monthly attestation covering loan balances and collateral coverage. An allocator can verify any position the moment it changes and reconcile it against an outside auditor's sign-off every month.

For broader allocation, [Lending Vaults](./lending-vaults.md) put a single asset to work across markets at a named curator's chosen weights and caps, and [Meta-Vaults](./meta-vaults.md) hold a configurable multi-asset, multi-strategy book — a managed fund expressed as on-chain infrastructure, with reporting and data available out of the box.

### Borrow with rate certainty

[Fixed Rates](./fixed-rates.md) lock a borrowing cost to a defined term — 1, 3, 6, or 12 months — across a grid where each rate-and-duration cell is its own reserve with its own liquidity. A firm that borrows at 5.5% for three months pays exactly 5.5% for those three months regardless of where variable rates move, so the borrowing term can be matched to a liability profile precisely. At maturity, loans roll into a new term automatically, preferring the same reserve and then cheaper reserves of matching duration; once the first term completes, you can roll or exit freely. The spread across the grid forms an on-chain yield curve that allocators read and price against. FalconX borrows on this structure.

[Custodial Borrowing](./custodial-borrowing.md) extends credit on-chain against assets that stay at your qualified custodian — a tri-party, account-control structure with on-chain proof of reserves, so the loan is fully visible on-chain while the collateral remains in regulated custody. Pantera was the first borrower; Anchorage provides custody.

[Multiply](./multiply.md) builds a leveraged position in a single transaction — collateral and debt in one market, looped up to roughly 10x, with the option to fix the rate for the term so the cost of leverage is known at the outset.

### Operate inside compliance controls

Every market and vault can be gated through [Permissioned Markets](./permissioned-markets.md) and [Permissioned Vaults](./permissioned-vaults.md): an approval check on deposit, borrow, or liquidate — at the level of a market, an operation, a wallet, or a single asset. Identity is verified off-chain and the approved wallet is whitelisted, so the on-chain layer stays identity-agnostic while capital is screened on the way in. Withdraw and repay always stay open. Gating is additive and reversible — a configuration toggle on a live market, applied and lifted in place. This is what lets a regulated mandate deploy on the same rails that run the open protocol.

### Run a closed-loop market under your own stablecoin

The flagship institutional capability is an end-to-end loop an institution runs under its own branded stablecoin, issued through Coinbase's stablecoin-as-a-service. A tokenized fund deploys into a white-glove, permissioned market that carries the institution's own identity and authorization rules. The institution's stablecoin is the borrow liquidity inside that market. The fund holders lever their position against the stablecoin; the clients who supply that stablecoin earn the yield those borrowers pay. The stablecoin closes the loop — one product where holders lever the fund and stablecoin providers earn the yield the loopers generate, with both sides being the institution's own clients.

Kamino stands up the whole structure: the market and its permissioning, the oracle pricing through Scope, the risk parameters and liquidation path, and the stablecoin integration, operated as a white-glove engagement with named accountability. [Launch your own on-chain money market →](./uc-own-stablecoin-market.md) walks the full loop.

---

## Proof

Institutions already operate at scale on these rails.

| Institution | What they do on Kamino |
|---|---|
| **PRIME** (Figure) | Tokenized private credit, with RWA deposits past **$1B** |
| **FalconX** | Borrows on the fixed-rate, fixed-term credit structure |
| **Pantera** | First borrower on Custodial Borrowing — on-chain credit against custodied assets |
| **Anchorage Digital** | Qualified custodian behind the custodial-borrowing structure |
| **Gauntlet, Steakhouse, Allez, RockawayX, Galaxy** and the wider roster | Operate curated lending vaults and markets with first-loss capital at stake |

See the full set of stories on [Customers →](./customers.md)

---

## Why institutions trust the rails

Underwriting an on-chain venue starts with the same question every time: can this hold custody of institutional capital safely? Four parts of the platform answer it.

**Pricing that handles hard assets.** [Scope](./scope.md), Kamino's in-house oracle, prices the assets institutions actually hold — tokenized equities through market hours and halts, NAV-based funds through redemption pauses, gold, private credit, and Bitcoin — using ~42 composable price types with staleness limits, divergence caps, and proof-of-reserves guards that freeze an asset's usable price if its supply spikes against its own average. Whatever Scope can price safely, the platform can lend, borrow, and trade against. Scope has priced **$19.33B+** with **0 oracle exploits**, monitored live at [oracles.kamino.fi](https://oracles.kamino.fi).

**A liquidation record that holds under stress.** The [liquidation engine](./liquidation-engine.md) has processed **$120M+** across **100k+** liquidations with **$0 of bad debt**, using auction and soft-liquidation paths plus oracle-layer scam-wick protection that rejects prices outside a band of the last close.

**Verifiable, continuously-audited code.** **20 external audits** across five firms — OtterSec, Certora, Sec3, Offside Labs, Ackee — with **0 critical findings**, **4 formal verifications** that mathematically prove contract properties, a standing bug bounty, continuous fuzzing, and open-source contracts whose on-chain builds are cryptographically verifiable against the audited source. Three years in production with a clean security record.

**Custody and governance you can verify.** Collateral sits at qualified custodians under account-control agreements with on-chain proof of reserves. Every protocol upgrade and treasury action runs through multisig governance, monitored in real time at [multisig.kamino.fi](https://multisig.kamino.fi).

The full diligence package — audit reports, formal-verification scope, the risk dashboard, monthly risk reporting, and the live transparency dashboards — lives on [Security →](./security.md). The plain-language account of how the rails fit together is on [How Kamino works →](./how-kamino-works.md).

---

## Work backward from the job

Many institutional mandates map to one of four jobs that recombine these products:

- **[Offer credit against tokenized assets →](./uc-credit-against-tokenized-assets.md)** — price a tokenized asset, give it a collateral market, and extend or access credit against it, with oracle-priced and solver-filled liquidity to enter, exit, and liquidate.
- **[BTC-backed credit →](./uc-btc-backed-credit.md)** — borrow against Bitcoin while you keep the upside, with the collateral in custody and the rate fixed, funded by the same Institutional Yield supply side allocators deposit into.
- **[Launch a managed fund →](./uc-launch-a-managed-fund.md)** — stand up a multi-strategy vehicle, manage it, gate your investors, and integrate it into your product with reporting and data out of the box.
- **[Embed yield in your app →](./uc-embed-yield.md)** — deliver compliant yield to your own users through a packaged integration.

---

## Economics

There is no platform subscription. The economics differ by who you are at the venue.

**If you allocate.** Institutional Yield targets **6–8% APY** net to depositors, paid as the vault share price appreciates with accrued interest. The return comes from overcollateralized Bitcoin-backed lending, and the quoted APY is the depositor's, with the platform's revenue taken from the borrower-side spread.

**If you operate.** Curators set their own performance and management fees on the vaults and markets they run, and those fees flow to the curator. Kamino earns a protocol take rate on the underlying lending. You keep the curator economics; the rails carry a metered take rate beneath them.

**If you borrow.** Fixed-rate borrowing costs the published rate of the cell you enter, locked for the full term — a firm that draws at 5.5% for three months pays 5.5% for three months. Once the first term completes, you can roll or exit freely.

The exact fee splits, take rate, and rate grid for your structure are scoped with sales against your compliance and risk requirements.

---

## Talk to us

Standing up a venue, allocating a mandate, or borrowing against a custodied book starts with a conversation. Sales scopes the structure — access rules, custody, oracle configuration, reporting — against what your compliance and risk teams require.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)

---

*See also: [Wealth & asset managers](./institutions-wealth-asset-managers.md) · [Funds & trading firms](./institutions-funds-trading-firms.md) · [Treasuries & corporates](./institutions-treasuries-corporates.md) · [Launch your own on-chain money market](./uc-own-stablecoin-market.md) · [Security](./security.md) · [How Kamino works](./how-kamino-works.md) · [Customers](./customers.md)*
