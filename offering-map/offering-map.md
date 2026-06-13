# Kamino Offering Map

**What this is:** A complete map of everything Kamino offers — every product, feature, and piece of infrastructure — and how it composes into a Stripe-style marketing site. Presented as the full, live product: every capability is treated as shipped and available.

**Conventions:** American spelling. Inventory buckets group items **for readability only**; the structure is the Page architecture section.

---

## Raw framing from Dawid (context to inform the map)

- Kamino has built the full infrastructure for **institutions, wealth managers, fund managers, and asset issuers** to move into the on-chain, tokenized era. It is extremely secure and validated.
- Everything built is **consumable, usable, and tailorable**: used directly, built into a **white-glove** solution, or **integrated via API/SDK** into a partner's own platform.
- "We can walk into any institution, ask them what they want, and our infrastructure will support it."
- Kamino also runs a **consumer product** (the retail app) — the one direct-to-user surface.
- Working thesis line (refine later): *Capital markets infrastructure for the tokenized economy.*

---

## Page architecture (working draft)

Derived from the inventory below. The three-layer model is affirmed; specific placements are still being worked.

### Three layers (Trust spans all)
1. **Infrastructure** — powers the products under the hood; each has its own page and features inside the hubs, and all of it stays out of the mega menu: Markets · Scope (oracle) · Routing · Permissioning · Liquidation engine · Vault engine · scam-wick protection.
2. **Products** — what a buyer shops for; the mega menu. Three capability hubs — **Credit · Liquidity · Yield Suite** — each composing the infrastructure into a buyer's story, with their deep product pages beneath. (Multiply lives under Credit.)
3. **Delivery** — how the same products reach people: the **Consumer app** (self-serve) · **Developers** (docs / API / SDK — also the home of the embed / BuildKit story) · white-glove sales.

Spanning all three: **Security & transparency.**

### Page types
Every page is one of three kinds:
- **Product pages** — what we offer.
  - *Hubs* — top-level capability areas (Credit, Liquidity, Yield Suite). A hub is both a narrative overview and the launchpad to its deeper pages.
  - *Deep product pages* — specific products (Fixed Rates, RFQ, Multiply…); some owned by one hub, some shared across several.
  - *Product vs infrastructure* — a **product** is something a buyer shops for (Fixed Rates, Permissioned Markets, Multiply). **Infrastructure** powers products under the hood (Markets, Scope, Liquidation engine, Routing, Permissioning-the-mechanism). Infrastructure has its own pages and features inside the hubs, and it stays out of the mega menu.
- **Entry points** — who/what it's for. Curated landings that frame and link into product pages: **audience pages** (by who) + **use-case pages** (by job). They point into the products rather than re-explaining them (see the Audiences section).
- **Delivery surfaces** — how you consume it: the **Consumer app** and the **Developers** hub.

Beneath everything sits the **docs** — the universal layer every page links into. Marketing pages are selective real estate on top of docs.

### How a hub composes
A hub is one page of stacked sections. Each section is one of:
- **Owns** — a section plus a dedicated deep page that belongs to this hub (Fixed Rates under Credit).
- **Section only** — explained inline, no dedicated page, links to docs (Borrow Orders).
- **Surfaces-and-links** — a shared page framed for this hub, linking to its canonical home elsewhere (Markets, Scope, Security).

*Owns* and *surfaces-and-links* both have a full page behind them; the difference is who owns that page. A plain *section* has only docs behind it.

### Products mega menu
Leads with a featured, full-height **App tile** (visual): **Launch App** (primary) + **Learn More** (→ the dedicated Kamino App page). Then three columns:

```
CREDIT  (hub)          LIQUIDITY  (hub)       YIELD SUITE  (hub)
Fixed Rates            Kamino Swap            Lending Vaults
Custodial Borrowing    RFQ                    Meta-Vaults *
Permissioned Markets   RWA Liquidity          Institutional Yield
Market Curation        Liquidity Vaults       Permissioned Vaults
Multiply                                      Vault Curation
```
\* name to workshop — the category-defining "managed fund in a box" product.

Conventions:
- The **heading is the hub link**; "Kamino" only where it brands an otherwise-generic word (Kamino Swap).
- **Only products appear.** Infrastructure (Markets, Scope, Liquidation engine, Routing, Permissioning) features inside the hub pages and stays out of the menu.
- **Cross-list freely** where a buyer would look — Multiply under Credit; Curation as **Market Curation** (Credit) + **Vault Curation** (Yield).
- The embed / BuildKit story lives in **Developers** + the Fintechs solution page, so it earns no Products column of its own.

### The rest of the nav
- **Solutions** — the entry points: 5 audience pages + 3 use-case pages (see the Audiences section).
- **Developers** — docs / API reference / SDKs, and the home of the embed / BuildKit story (BuildKit, Institutional Yield API, embedded wallets, white-label).
- **Security** — the trust page + the multisig and oracle dashboards.
- **Company.**
- **Kamino App page** — reached from the App tile's *Learn More*; tells the consumer-product story (the interface, the app, what you can do). The Individuals audience page tells the same story audience-framed.
- KMNO / token: out of scope for this map.

### The reuse device (how the spanning stays coherent)
The deep rails thread through many surfaces, and they get more integrated the further down the stack you go. To keep the map coherent, every deep rail has:
1. **One canonical home** — the single page where it is explained in full.
2. **A reuse map** — every other surface it appears on and the framing there; those appearances link back to the home, where the full explanation lives.

This keeps a rail from being half-told in five places.

### Worked example — the liquidity stack
The clearest case of spanning. The whole stack (routing, RFQ, limit orders, swap, automated liquidity, RWA DEX) is the execution engine the rest of the suite calls.

**Routing / execution** (kSwap + Kobayashi)
- *Home:* Liquidity (own deep page) — meta-aggregation, the proprietary on-chain router, best execution, integrator pitch.
- *Reused on:* Swap ("best execution") · Multiply ("one-click enter/exit") · Credit (repay-with-collateral, swap collateral/debt — "manage in place") · Liquidations ("efficient execution") · Issuers ("routing to/from your asset") · Build ("swap embed").

**RFQ** (KRFQ + Limo limit orders)
- *Home:* own deep page (within the Liquidity stack).
- *Reused on / spans:* Swap ("best-price solver fills") · Market makers ("quote into Kamino's RFQ as a solver") · **Asset issuers ("how holders move in and out of your tokenized asset — filled by solvers and market makers on demand, no standing AMM required; a core part of the issuer offering alongside instant collateral and oracle pricing")** · Credit / Fixed Rates ("price discovery, limit orders, two-sided credit book") · Liquidations ("RFQ-sourced fills").

### The remaining rails

*Full per-rail detail in [rails-deep-dive.md](rails-deep-dive.md).*

**Markets** (KLend) — the configurable lending engine. Every market is a self-contained, isolated venue; each asset in it is tuned across ~50 parameters (borrow/deposit caps, LTV, liquidation thresholds, interest-rate curve, oracle config, fees, term, access rules, and a "hidden" status for staged launches), and the market itself carries its own name/identity, correlated-asset risk groups, and optional permissioning. **Every market is both "core" and "isolated" at once — there is no core-vs-isolated split.** What actually differentiates one market from another is four choices: correlated-asset risk grouping, permissioning (open vs gated), term (floating vs fixed), and collateral location (on-chain vs custodied). A bespoke market is a configuration exercise, with no new code.
- *Home:* Markets (infrastructure page).
- *Reused on / spans:* Credit ("the venue — every borrow happens in a market") · Yield ("vaults allocate into markets and earn the borrowers' interest — the supply side") · Multiply ("loops collateral + debt in one position, using a correlated-asset risk group for high LTV") · Asset issuance ("an issuer's token becomes a market asset — instant collateral status, the PRIME $0→$600M path") · Liquidity / RWA DEX ("a listed asset needs a market for credit and liquidity to trade") · Curation ("launch and run your own market") · Institutional Yield & Off-Chain Collateral ("these are market configurations — fixed-rate and custodied-collateral are settings, not separate engines") · Build ("markets via SDK/API").
- *Implication:* markets are the platform; every other product is a way of using them. The ~50-parameter config is literally the "tell us what you want" mechanism. Hidden status also gives Kamino private/stealth launches.

**Scope** (the oracle / pricing layer) — Kamino's in-house pricing engine, with ~42 composable price types feeding the single source every product reads. They span external feeds (Pyth, Chainlink, Switchboard, RedStone), staking/LP derivations, and composite types that add redundancy (best-of-N with divergence limits), caps/floors, fixed-term discounting, bespoke RWA valuation, and a proof-of-reserves / anti-infinite-mint guard. It handles the things a generic crypto oracle can't: equity market hours and halts, corporate-action blackouts, and NAV pauses.
- *Home:* Scope (infrastructure page) + oracles.kamino.fi.
- *Reused on / spans:* Markets ("collateral pricing & LTV — Scope decides what's listable") · Credit / liquidations ("averaging + divergence/cap guards = scam-wick protection; pricing can be set so a position can't be liquidated during a brief depeg") · RWA DEX ("the oracle price IS the liquidity price — why no market maker is needed") · routing / swap ("reference + fallback pricing") · Yield ("vault NAV and share value") · Multiply ("health and liquidation distance") · Institutional Yield ("BTC collateral pricing") · Off-Chain Collateral ("pairs with on-chain proof of reserves") · Asset issuance ("the first onboarding step is building a guarded Scope feed for the new asset").
- *Implication:* Scope is the on-chain-asset onramp — whatever it can safely price, Kamino can lend / borrow / loop / trade. The guard stack turns oracle risk into bounded, governed risk. This is the moat under the RWA strategy.

**Permissioning** (kperm) — the access-control layer; adds a single approval check to gated lending/vault operations. It gates deposit / borrow / liquidate at the level of a market, an operation, a wallet, or an individual asset; withdraw and repay always stay open, so capital is screened on the way in. KYC is enforced off-chain — a provider verifies the user, the wallet is whitelisted via API — so the on-chain layer stays identity-agnostic. It's additive and reversible (it can be switched off instantly). It is distinct from Whitelisted Reserves: permissioning gates *who* can act, Whitelisted Reserves gates *where* vault capital flows.
- *Home:* a deep infrastructure page (access control & compliance). *Placement still open — own page vs primary section of Markets.*
- *Reused on / spans:* Credit / Markets ("KYC-gated markets, named-counterparty borrowing, whitelisted liquidators") · Yield / Curation ("permissioned vaults — deposits only from approved wallets or a specific source") · Asset issuance ("per-asset gating — a regulated asset deposit-gated while another asset in the same market stays open") · Institutional Yield ("KYC'd borrowers at the legal layer, approved depositors at the wallet layer") · Build ("compliance-grade embeds; partners onboard verified users through the whitelist API") · Off-Chain Collateral.
- *Implication:* the institutional switch — it dials any market or vault from fully open to fully gated (per-op, per-asset, per-wallet) and reverses instantly, with no protocol fork. Layered with Whitelisted Reserves + Insurance Pool + qualified custody, it maps onto how regulated capital actually allocates.

**Vault engine** (kVault) — takes one deposit token, routes it across lending markets at curator-set weights/caps, issues auto-compounding share tokens. Allocations are Standard (always deployed) or Conditional (deployed only when a borrower arrives); a rebalancing process keeps the vault near target, governed by an automated danger-trigger safety engine (auto-pulls on infinite-mint, depeg, exit-liquidity, or oracle-divergence signals). Three-layer withdrawals (idle buffer → market redemption → fair queue, lender-exit prioritized). Insurance Pool: curator first-loss capital, Kamino matches up to $250K, 30-day cooldown. **Earn, Institutional Yield, and white-label vaults all ride this one engine. Meta Vaults (multi-asset baskets) and the CLMM "Liquidity" vaults are separate engines that share the same design DNA.**
- *Home:* the Yield hub + Earn page.
- *Reused on / spans:* Yield ("Earn and Institutional Yield are one engine; Meta Vaults adjacent") · Credit ("vaults ARE the lenders behind every market — and conditional allocations fund fixed-rate / borrow-order fills atomically, so capital earns floating yield until a fixed-rate borrower draws it down") · Curation ("the thing a curator operates") · Build ("white-label vaults and embedded-wallet auto-deploy; the Institutional Yield API is a packaged vault embed") · Multiply ("borrows the debt-token liquidity vaults supply").
- *Implication:* the vault engine is the supply side of credit, and conditional liquidity is the key innovation — it lets vaults quote a fixed-rate yield curve and fund large term borrows (FalconX, Pantera) with no idle-capital drag. Markets (demand) + the vault engine (supply) are one machine; meta vaults turn it into a product factory for wealth managers and fintechs.

**Curation** (Curation Suite — kamino.com/curators) — self-serve platform to launch and run your own vault or market. Two planes: a **permissionless plane** (anyone deploys on Kamino's audited rails and sets their own params and fees) and a **curated / whitelisted plane** (to appear on Kamino's consumer UI, a vault/market must turn on the safety controls — whitelisted reserves, insurance pool, multisig governance — and pass a go-live review, Kamino's quality gate). Curator fees (typically 15% performance / 2% AUM) go to the curator; Kamino's revenue comes from the protocol take rate on the underlying lending. Personas: institutions, asset issuers, fintechs, thesis curators. Roster: Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, Galaxy.
- *Home:* Curation Suite page.
- *Reused on / spans:* Yield ("every consumer vault is run by a named curator — the roster is the trust signal") · Credit / Markets ("markets are stood up and curated by professionals, or by you") · Risk ("curators are the risk managers — diligence, capital, incentives, first-loss skin-in-the-game") · Build ("white-label is the seam — a partner runs a curated vault on their own UI; the Build page cross-sells vault deployment") · Asset issuance ("an issuer curates the market for their own asset").
- *Implication:* Curation is Kamino's Connect / Shopify analog for the supply side — Kamino supplies rails, audited security, and a built-in consumer demand surface; third parties supply strategy, capital, risk judgment, and demand. **Curation = operate ON Kamino (you are the venue operator); Build = embed Kamino INTO your app (you are the integrator). White-label is where they meet.**

### Cross-cutting realizations (sharpened)
- **Markets are core to the platform; numerous products are a lens over the market primitive.** "Core vs isolated" is a non-distinction — every market is both. The real market axes are correlated-asset grouping / permissioning / term / collateral-location.
- **Credit and Yield are one machine.** Vaults (supply) fund the markets borrowers (demand) draw on; conditional liquidity lets the supply side quote a fixed-rate curve and fund term loans just-in-time.
- **Scope gates the asset universe** and converts oracle risk into bounded, governed risk — the moat under the RWA strategy.
- **Permissioning is the institutional switch** sitting on top of off-chain KYC; layered with Whitelisted Reserves and Insurance Pool it makes a venue regulated-capital-ready.
- **Build and Curation are the two-sided platform.** Operate-on (Curation) and embed-into (Build); white-label is the seam; Kamino monetizes the rails through the take rate, leaving curator fees to curators.

---

## Audiences — the Solutions layer

Where the offering comes together for a buyer, and where the real value lives. Two dimensions, the same underlying products recombined per entry point (the Stripe Solutions model: by-who + by-use-case). The product hubs and infrastructure pages are the canonical destinations; audience pages curate and link into them.

### Dimension 1 — by who you are
1. **Institutions** — one audience, sub-segments: wealth & asset managers · funds & trading firms · treasuries & corporates. *Jobs:* allocate into regulated, transparent yield; borrow and leverage with rate certainty; treasury liquidity without selling. *Pulls:* Institutional Yield, curated & Meta vaults, Fixed Rates, Multiply, Off-Chain Collateral, Security.
2. **Asset issuers** — RWA, tokenized-equity, and stablecoin issuers. *Job:* make my asset usable as collateral, tradable with oracle-priced liquidity, and distributed — fully compliant. *Pulls:* Markets, Scope, RWA DEX, RFQ, Permissioned assets, Multiply (as distribution), Curation.
3. **Fintechs & apps** — wallets, neobanks, exchanges, consumer apps. *Job:* ship compliant yield / credit / swap to my users without building a protocol. *Pulls:* Build / BuildKit, Institutional Yield API, embedded wallets, white-label. *(Developers is the docs / API hub they route their engineers into.)*
4. **Curators & managers** — professional curators and managers running on-chain strategies. *Job:* operate credit / yield venues on Kamino's rails without building infrastructure. *Pulls:* Curation Suite, Markets, the vault engine, Risk, Security.
5. **Individuals** — the consumer app. *Job:* professional-grade earn / borrow / multiply / swap, self-serve.

*Developers is a delivery hub, not an audience.*

### Dimension 2 — by use-case / job
Cross-cutting stories that recombine the same products around a job; each draws buyers from several of the audiences above. Three to start, with more to mine.

1. **Offer credit against tokenized assets** — extend or access credit against any tokenized asset (RWA, equity, fund token). *Composes:* Scope (price it — the gate that unlocks everything else), Markets (the collateral market), Fixed Rates / Off-Chain Collateral (the terms), RWA DEX + RFQ (oracle-priced and solver-filled liquidity to enter, exit, and liquidate), Permissioned assets (compliance), Curation (stand it up), Multiply (leverage). *Cuts across:* asset issuers, institutions, curators.
2. **BTC-backed credit** — borrow against BTC without selling. *Composes:* Off-Chain Collateral (custody-preserving), the BTC market, Fixed Rates (rate certainty), Scope (BTC pricing), Institutional Yield (the depositor side funding it), Security. *Cuts across:* treasuries & corporates, funds, individuals, and the yield allocators on the supply side.
3. **Launch a managed fund** — an end-to-end solution: create your own multi-strategy vehicle, manage it, and integrate it into your product, with reporting and data out of the box. *Composes:* Meta Vaults (the vehicle), Curation Suite (launch + operate), the vault engine (allocation, fees, insurance pool), Permissioned vaults (gate your investors), Build + the data / Portfolio APIs (integrate + data out of the box), white-label (your branding), the strategies it deploys into (Markets, Multiply, Yield), and Security / transparency for reporting. *Cuts across:* institutions (wealth & asset managers), curators & managers, fintechs.

*More to mine — e.g. "earn on idle stablecoins," "embed yield in your app," "list and finance an LST." The pattern each time: a recognizable job, composed from products that already exist.*

---

## THE INVENTORY

### Lending & markets
- **KLend** — the core lending engine. Every market is both core and isolated; each asset is configured across ~50 parameters: caps, interest-rate curve, LTV / liquidation thresholds, oracle config, correlated-asset risk groups, term, access rules, and a "hidden" status for staged launches.
- **Tailored markets** — one engine spins up a broad retail market or a tightly-tuned institutional one, every parameter set per market, with no new code.
- **Permissioned markets** — gated via kperm (a single approval check); granularity per-market / per-operation / per-wallet / per-asset; KYC enforced off-chain via a whitelist API. Reversible without disrupting the market.
- **Ethena / USDe market** — a showcase of deep market tailoring: a 1:1-pegged oracle with a 1% halt, permissioned lending, whitelisted liquidators, autocompounding collateral, demand-scaled supply.
- **Markets in production** — Main, JLP, Altcoin, PRIME/Figure, Jito, Ethena, Maple, OnRe, Solstice, and RWA-specific.

### Borrowing & credit
- **Borrow** — variable-rate borrowing against collateral.
- **Fixed Rates / fixed terms** — a rate × duration grid (e.g. 1/2/3-month, 4–5.5% in 25bps steps); rate locked to maturity; rollover logic; early-repay minimum-interest penalty. Forms an on-chain yield curve.
- **Borrow Orders** — "limit orders for lending": amount + max rate + min term + expiry, with automatic and partial fills as liquidity arrives.
- **Conditional liquidity** — curators commit liquidity that deploys only when conditions match, backing fixed-rate and borrow-order fills without parking idle capital.
- **Obligation / lever-up / stop-loss orders** — pre-authorized executors for automated position actions.
- **Off-chain collateral (OCC)** — borrow on-chain against assets held at an external custodian (Anchorage); a sync service mirrors custody operations into the on-chain loan. First borrower: Pantera ("Solana Company").
- **Repay-with-collateral / swap-collateral / swap-debt** — flash-loan-backed position management.

### Leverage & trading
- **Multiply** — one-click leverage looping up to ~10x; fixed-rate Multiply and lever-up orders let loopers lock their cost for the term.
- **Leverage** — spot long/short with soft liquidations.

### Yield & vaults
- **kVault (Earn)** — the curated-lending-vault engine: one deposit asset allocated across markets at curator-set weights, with autocompounding rewards.
- **Meta vaults** — configurable multi-asset basket vaults (target weights, auction-based rebalancing via external solvers). The flexible multi-strategy vehicle for fintechs, asset managers, and institutions.
- **Whitelisted reserves** — a vault can only allocate into Kamino-verified markets (protects depositors against a compromised curator key).
- **Permissioned vaults** — kperm-gated vault deposits (e.g. only from approved wallets or a specific source).
- **Insurance Pool** (fka First Loss Capital) — curator skin-in-the-game backstop that absorbs losses first; Kamino matches up to $250K per vault; 30-day withdrawal cooldown.
- **Institutional Yield** — a vault funding overcollateralized BTC-backed loans from a regulated lender; depositors hold a yield-bearing share token; transparency built in (a real-time loan-book feed, weekly collateral reporting, monthly independent attestation). *(The regulated lender and Cayman SPV borrower behind it are internal plumbing, not separate offerings.)*
- **Curation Suite** — the self-serve product (kamino.com/curators) where **anyone can launch and manage their own lending market or vault**: set parameters, fees, allocations, reserve whitelist, insurance pool. Vaults/markets can run white-label on a partner's own UI. *(The curator roster — Gauntlet, Steakhouse, Allez, Sentora, RockawayX, etc. — runs on this.)*

### Liquidity & swaps
- **Automated liquidity (CLMM)** — manages concentrated-liquidity positions on Orca/Raydium: range-setting, rebalancing, auto-compounding, single-sided deposit with auto-swap; hardened with deviation caps and TWAP checks.
- **kSwap** — Kamino's own swap **meta-aggregator**: fans across Jupiter, DFlow, Titan, 0x, OKX, and Kobayashi, ranks routes, and returns best execution. Powers the Swap surface plus Multiply, leverage, debt-swap, repay, and liquidity. Internally framed as "THE product."
- **Kobayashi** — Kamino's **own proprietary on-chain swap router**, exposed as one route source inside kSwap.
- **Limo** — Kamino's on-chain limit-order infrastructure, feeding liquidity into kSwap / Kobayashi.

### Asset issuance & onboarding
- **RWA DEX** — an oracle-priced AMM giving **market-maker-free liquidity** for tokenized assets; per-pool controls over curve, feeds, spreads, and status. Pools for PRIME, syrup, gold (XAUt0), USDe; routed to by external aggregators.
- **RFQ** — Kamino's own on-chain **request-for-quote** auction: solvers bid sub-second to fill orders, co-signed, with no end-user signature. The way to get in and out of less-liquid RWA without a continuous AMM; market makers integrate as solvers.
- **Permissioned assets** — access-controlled assets via kperm (most regulated/institutional assets need these).
- **Asset-onboarding pipeline** — Scope oracle configuration + risk due-diligence + market setup; a dedicated flow for onboarding new LSTs.
- **Scope oracle (asset pricing)** — see Infrastructure; prices hard-to-price RWAs and equities through source composition.

### Cross-chain
- **Ethereum–Solana bridge** — a cross-chain swapper that liquidates and rebalances ETH-native assets on deep Ethereum venues, making **off-Solana RWAs (tokenized gold, Ethena USDe) safe as collateral on Solana**.

### Platform / API & SDK
- **Public API** — the REST surface integrators build against.
- **Tokens API** — token metadata and search (symbols, verified/stable/LST tags, prices, volume).
- **Kamino Historian** — time-series and APY snapshots, historical analytics.
- **Portfolio API** — a consolidated user positions / history / PnL endpoint.
- **Per-product SDKs** — TypeScript SDKs for lending, liquidity, swap, and farms.
- **BuildKit** — the embeddable integration kit; a fintech embeds Kamino lending and earn in a few lines (e.g. YieldBay, OneKey).
- **Institutional Yield API** — packaged yield-in-a-box for fintechs (configurable user cap, revenue share).
- **Embedded wallets / white-label vaults** — vaults on a partner's own UI (e.g. Marinade); embedded-wallet balances auto-deploy into curated vaults; embedded-wallet and self-custody adapters.

### Infrastructure (pricing, liquidation, custody)
- **Scope oracle** — in-house pricing engine: multi-source composition, divergence/staleness guards, on-chain TWAPs, NAV/redemption types; prices RWAs and tokenized equities.
- **Liquidation engine** — auction-based liquidations + auto-deleverage / soft liquidations (10–60bps penalty) + fixed-rate maturity liquidations.
- **Scam-wick protection** — at the oracle layer: staleness/divergence/cap-floor guards that reject prices outside a band of the last close.
- **Custody integration** — Anchorage Digital (Account Control Agreement, API + webhooks).

### Security, opsec & transparency
*Stats from the existing security material + the public audit repo — source data for a security page.*

**Headline:** 20 external audits · 4 formal verifications · 3 years in production without incident · $0 bad debt.

- **Security audits** — 30 total audits, 5 auditors, 0 critical vulnerabilities. Firms: OtterSec, Certora, Sec3, Offside Labs, RX, Ackee Blockchain. All reports public.
- **Formal verification** — Certora (Lend, Earn Vaults, Limit Orders) + OtterSec (Lend); mathematically proven contract properties.
- **Rolling code audits** — "don't merge until audited"; new code continuously re-audited.
- **Open source + verifiable builds** — Lend, Vaults, Farms, Scope, Limit Orders open source with reproducible on-chain build verification.
- **Bug bounty** — $1.5M program via Immunefi.
- **Fuzzing** — continuous fuzz testing by Ackee Blockchain.
- **Oracle security (Scope)** — 8 audits, $19.33B processed, 0 oracle exploits; multi-provider redundancy, staleness/divergence guards, scam-wick protection.
- **Redundancy & fallbacks** — across RPC, cloud-provider, oracle, liquidator, and oracle-crank layers.
- **Liquidation stress tests** — live-environment stress testing; $120M+ liquidated across 100k+ liquidations, $0 bad debt.
- **Market & protocol risk** — dedicated risk team and consultants: risk dashboard, monthly risk report, VaR analysis, volatility modeling, price-shock scenario analysis.
- **Opsec & multisig governance** — multisig governance of all upgrades and treasury; real-time anomaly monitoring; supply-chain, key-hygiene, and domain-spoofing defenses.
- **Whole-stack coverage** — smart contracts, frontend, middleware, risk monitoring, operational infrastructure, third-party dependencies.

**Public transparency dashboards:**
- **multisig.kamino.fi** — real-time monitoring of every multisig: proposals, signatures, timelocks, executions across all programs, markets, and vaults.
- **oracles.kamino.fi** — real-time monitoring of all Scope feeds: prices, sources, feed health, RWA/equity feeds, update activity.

### Consumer
- **Kamino app** — the retail-facing product surface (the one direct-to-consumer face).

---

## Partners & proof points
- **Curators:** Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, Galaxy.
- **RWA issuers:** PRIME (Figure / Hastra — Kamino RWA deposits crossed $1B), Maple (syrupUSDC), OnRe (ONyc), Ethena (USDe), Superstate, xStocks, STRCx.
- **Institutional:** FalconX (fixed-rate borrower), Pantera / "Solana Company" (off-chain-collateral borrower), Anchorage (custody), Securitize, Centrifuge, DAWN (telecom-revenue RWA), Swiss banks (private-credit borrow demand).
- **Integrations:** OneKey (borrowing), Marinade (white-label vault), Phantom (embedded wallet).

---

## Notes
- **Institutional Yield plumbing:** the regulated lender (Altenburg) and the Cayman SPV borrower (Valbella) sit behind the Institutional Yield product as internal structure, not separate offerings.
- **The proprietary swap / routing / RFQ stack** (kSwap + Kobayashi + Limo + RFQ) is a major asset that has never been positioned externally — a priority to surface.
- **Cross-chain** (the Ethereum–Solana bridge) is what makes off-Solana RWAs usable as collateral on Solana.

## Where we are & what's left

**Locked so far:** the page-type model · the hub-composition model (owns / section-only / surfaces-and-links) · the product-vs-infrastructure line · the Products mega menu (3 hubs + app tile) · the audience set (5 by-who + 3 by-use-case) · the rails deep-dived · the rail-level reuse maps.

**Still to do — the full IA is a long way from complete:**
- **Compose the Liquidity and Yield Suite hubs** in full (owns / section-only / surfaces-and-links), as done for Credit.
- **Compose every deep product page** — what each one says and shows.
- **Compose the infrastructure pages** — Markets, Scope, Liquidation engine, Routing, Permissioning, Vault engine.
- **Compose the audience pages** (the highest-value work) — for each, the full branch-out into products, framed for that buyer.
- **Compose the use-case pages** — and mine the next batch beyond the first three.
- **The Developers IA, the Security page, the Kamino App page, Company, the footer.**
- **The full link graph** — extend the reuse maps from rails to *every* product: what links to what, what's surfaced in multiple places, every avenue a visitor can follow.
- **The landing page itself.**
- **Open naming** (Meta-Vaults first) and the open nav decisions.
- **The commercial model** — curator fees vs the take rate (a deliberate decision).
- **Completeness check** — anything built that's still missing from the inventory.
