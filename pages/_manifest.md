# Page Manifest — the build work-list

The complete set of pages to write, each with its promise, what it composes, what it links to, audience framing, and the real sources to ground it in. Derived from the locked IA (`../site-ia.md`). One `.md` per page in this folder; `index.md` ties them together.

**Grounding rule for every page:** do not invent. Ground features, mechanics, value props, and proof in: `../site-ia.md`, `../offering-map/offering-map.md`, `../offering-map/rails-deep-dive.md`, the live docs at **kamino.com/docs** (use the `llms.txt` index; read the API/SDK references where relevant), and the engineering Slack channels where technical depth is needed. Cite nothing internal in the copy (no addresses, repos, dev names, PRs) — product altitude only.

**Primary source decks (read the relevant PDF directly — these are first-class grounding, richer than the docs for these products):**
- Vault Curation → `/Users/dawid/Desktop/Kamino/Decks/Curation Deck/Kamino Curator Vaults.pdf` → for `curation.md` (and the Vault Curation framing on `yield.md`).
- Yield API → `/Users/dawid/Desktop/Kamino/Decks/Institutional Yield API/Institutional Yield API - Product Flows.pdf` → for `institutional-yield-api.md`; also referenced on `fintechs-apps.md` and `institutions-wealth-asset-managers.md`.
- Institutional Yield → `/Users/dawid/Desktop/Kamino/Decks/Private Credit/Kamino Institutional Yield.pdf` → for `institutional-yield.md`.
- Off-Chain Collateral → `/Users/dawid/Desktop/Kamino/Decks/Off Chain Collateral/General/Kamino Off-Chain Collateral Deck.pdf` → for `custodial-borrowing.md`.
- General Kamino deck → `/Users/dawid/Desktop/Kamino/Decks/General Deck/Kamino General Deck.pdf` → general company/thesis context for `homepage.md`, `how-kamino-works.md`, `company-about.md`, and anywhere useful.

**Writing rules (non-negotiable, every page):** American spelling. Lead with what something IS. **Never use the contrastive-negation pattern** ("not X — Y", "isn't…it's", "rather than", "instead of", "less…more") — rewrite into something substantive. Everything is presented as live. Capital-markets vocabulary for B2B surfaces; consumer aliases (Borrow/Earn/Swap) only on the consumer app/Individuals pages. Each page ends in the right CTA per the IA's CTA rule (institutional → Contact sales primary; consumer → Launch App primary).

**Concreteness mandate (every page) — see `_framing-lens.md`:** the page must read concretely to a real institutional buyer (the lens uses a large wealth-management institution as the test). No abstract capability-speak — make the job, the operational mechanism, the concrete value, and the Kamino differentiator legible to both an economics/operations decision-maker and an architecture/platform decision-maker. The lens is internal: never name a specific institution or reference any private conversation in the copy; keep scenarios general and concrete.

**Standard page shape (adapt per type):** hero (promise + sub) · the substance in sections · proof/named customers where relevant · how-it-works / mechanics at the right depth · the moat/trust angle · cross-links (surfaces-and-links + audiences/use-cases) · economics inline · CTA. Hubs add a section-per-spoke with "explore →" links and a "Build on Kamino" reference.

---

## Tier 0 — Spine

- **index.md** — the reader's map of the whole site: nav, every page, the link graph. (Built last.)
- **homepage.md** — *what is Kamino.* Thesis ("capital-markets infrastructure for the tokenized economy") · audience/solutions routing band · capability overview (Credit · Liquidity · Yield + the platform) · named customer-proof band (PRIME $1B+, FalconX, Pantera, Anchorage, curators) · security/moat teaser · dual CTA (Launch App / Contact sales). Links into: all hubs, Solutions, Security, Customers, How-it-works.
- **how-kamino-works.md** — plain-language "how the rails fit together / why Kamino": the infrastructure stack (Markets · Scope · Permissioning · Liquidation engine · Routing · Vault engine · Cross-chain) told as one coherent system, for the newcomer and the evaluator. Distinct from Security (which is diligence). Links to each infra page.

## Tier 1 — Product hubs

- **credit.md** — hub · *borrow against anything, fixed or floating.* Sections: variable borrow · Fixed Rates → · Custodial Borrowing → · Permissioned Markets → · Multiply → · Liquidation engine → · borrow orders / conditional liquidity (inline→docs) · repay/swap-collateral (inline). Surfaces-and-links: Markets · Scope · Curation (supply) · Routing · Security. Decision-aid: which credit product for whom. CTA: Contact sales / Launch App. Sources: docs products/borrow, multiply, fixed-rates, off-chain-collateral, permissioned-markets.
- **liquidity.md** — hub · *best execution and on-chain liquidity.* Sections: Kamino Swap → · RFQ → · RWA Liquidity → · Liquidity Vaults → · the routing/best-execution explainer (inline → Routing infra + docs). Surfaces-and-links: Scope · Markets · Routing. Sources: docs swap/kswap, RFQ, RWA-dex, liquidity/CLMM.
- **yield.md** — hub · *curated and managed onchain yield.* Sections: Lending Vaults → · Managed Portfolios → · Institutional Yield → · Yield API → · Permissioned Vaults → · insurance pool/first-loss · whitelisted reserves · autocompounding (inline). Comparison aid across the vault products. Surfaces-and-links: Markets (demand side) · Vault engine · Curation (Vault Curation) · Security. Sources: docs curators/vaults, products/earn, institutional-yield.

## Tier 2 — Credit deep pages

- **fixed-rates.md** — fixed-rate, fixed-term credit; the rate×duration grid; the emerging on-chain yield curve; rollover; early-repay; conditional liquidity behind it. Proof: FalconX. Surfaces: Markets, Scope, the vault supply side. Sources: docs fixed-rates, specs/fixed-rates-order-book in repo context.
- **custodial-borrowing.md** — borrow on-chain against assets held at a qualified custodian; tri-party / account-control structure; on-chain proof of reserves; Anchorage. Proof: Pantera / "Solana Company". Surfaces: Markets, Scope, Security, Cross-chain. Sources: docs off-chain-collateral.
- **permissioned-markets.md** — KYC-gated, compliant credit markets; the access-control model (who/op/wallet/asset); whitelisted liquidators. Surfaces-and-links: Permissioning (canonical), Markets, Security. Sources: docs curators/markets/permissioned-markets.
- **multiply.md** — one-click leverage looping; up to ~10x; fixed-rate Multiply; the strategy families (LSTs, RWAs, stablecoins, equities). Surfaces: Markets (elevation groups), Routing, Scope. Cross-links: tokenized-asset & BTC use-cases, Individuals. Sources: docs products/multiply.
- **liquidation-engine.md** — the safety engine (auction + soft / auto-deleverage liquidations; maturity liquidations; scam-wick protection at the oracle layer); the $0-bad-debt record; supports whitelisted liquidators and launching your own market. Lives under Credit; surfaced on Curation, Multiply, Security. Sources: docs risk/safeguards, offering-map.

## Tier 3 — Liquidity deep pages

- **kamino-swap.md** — best-execution swap; the meta-aggregator + proprietary on-chain router beneath it; powers Multiply/repay/liquidity. Surfaces: Routing (Kobayashi/Limo), Scope. Sources: docs swap, api/kswap.
- **rfq.md** — instant solver-filled quotes (RFQ); how market makers integrate as solvers; how issuers use it for in/out liquidity of less-liquid assets; price discovery for fixed-rate credit; limit orders. Audiences: traders, market makers, issuers. Sources: docs/Slack RFQ.
- **rwa-liquidity.md** — oracle-priced liquidity for tokenized assets (no standing market maker required); per-pool controls; the role of Scope + Cross-chain. Audience: issuers. Sources: docs RWA-dex, offering-map.
- **liquidity-vaults.md** — automated concentrated-liquidity management on Orca/Raydium; ranges, rebalancing, auto-compounding; the safety hardening. Sources: docs curators/vaults (CLMM/yvaults), products/liquidity.

## Tier 4 — Yield deep pages

- **lending-vaults.md** — curated single-asset lending vaults; named curators; allocation/weights/caps; autocompounding; the depositor→borrower bridge. Surfaces: Markets, Vault engine, Curation, Security. Sources: docs curators/vaults, products/earn.
- **managed-portfolios.md** — *(working name; alt "Managed Vaults")* the configurable multi-asset, multi-strategy vehicle ("a managed fund in a box"); composition; rebalancing; who manages; the gateway to "launch a managed fund". Audience: wealth/asset managers, fintechs. Sources: offering-map (meta vaults), Slack #eng-metavault.
- **institutional-yield.md** — regulated BTC-backed credit yield; the kiUSDC-style share; built-in transparency (real-time loan-book feed, weekly reporting, monthly attestation); custody. Surfaces: Scope, Permissioning, Security, Custody. Sources: docs institutional-yield, repo institutional-yield/.
- **permissioned-vaults.md** — KYC-gated / approved-source vaults; for institutional mandates and compliant fintech yield. Surfaces: Permissioning (canonical), Security. Sources: docs curators/vaults/permissioned-vaults.

## Tier 5 — Platform products (the "Build on Kamino" line)

- **curation.md** — *run your own market or vault.* The Curation Suite: self-serve launch & operation; two planes (permissionless vs whitelisted-to-list); white-label; curator personas + roster; economics (fees to curator, take rate to Kamino). Surfaced as Market Curation (Credit) + Vault Curation (Yield). Audience: curators, asset managers, fintechs, issuers. Sources: docs curators/*.
- **buildkit.md** — embed Kamino's credit/yield/swap into your product. The embed kit; the components; compliance-grade permissioning. Home: Developers + Fintechs. Sources: docs build, Slack.
- **institutional-yield-api.md** — *Yield API.* Its own product under **Yield**, and the ultimate embed: a productized yield API a fintech or institution integrates into their own infrastructure — including **under their own stablecoin, set up via Bridge** — yield-in-a-box, configurable user cap, revenue share, a full integration into their stack. Cross-listed: lives under Yield, and surfaced on `fintechs-apps.md`, `institutions-wealth-asset-managers.md`, and the Build-on-Kamino row. Source: the Yield API deck (above) + offering-map.
- **embedded-wallets.md** — embedded-wallet integration; auto-deploy idle balances into curated vaults. Sources: offering-map, docs.
- **white-label.md** — run Kamino vaults/markets on your own front-end, invisible to Kamino's UI. Proof: Marinade. Sources: offering-map, docs curators.

## Tier 6 — Infrastructure pages (not in the menu; linked from hubs/Security/How-it-works/audiences)

- **markets.md** — the configurable lending engine; every market both core and isolated; ~50 reserve parameters; correlated-asset risk groups; permissioning; identity; hidden status. The "tell us what you want" mechanism. Sources: docs curators/markets/*, rails-deep-dive.
- **scope.md** — the in-house oracle / pricing layer; ~42 composable price types; how it prices hard assets (RWAs, equities, NAV, gold); guards; proof-of-reserves / anti-infinite-mint; the RWA onramp. $19.33B processed / 0 exploits; oracles.kamino.fi. Sources: docs risk/oracles, rails-deep-dive.
- **permissioning.md** — the access-control layer; gates deposit/borrow/liquidate per market/op/wallet/asset; off-chain KYC; additive & reversible; permissioned markets/vaults/assets + whitelisted liquidators; distinct from whitelisted reserves. The institutional unlock. Sources: docs curators/*/permissioned-*, rails-deep-dive.
- **routing.md** — the execution stack: kSwap meta-aggregator + Kobayashi on-chain router + Limo limit orders; best execution; integrator pitch. Sources: docs/Slack, rails-deep-dive.
- **vault-engine.md** — the infrastructure beneath Lending Vaults / Managed Portfolios / Institutional Yield: allocation, the investing bot + danger-trigger safety engine, three-layer withdrawals, insurance pool, conditional liquidity (the supply side of credit). Sources: docs curators/vaults, rails-deep-dive.
- **cross-chain.md** — the Ethereum–Solana bridge that liquidates/rebalances ETH-native assets on deep Ethereum venues, making off-Solana RWAs (tokenized gold, Ethena USDe) safe as Solana collateral. Sources: offering-map, Slack #ethereum-solana-bridge.

## Tier 7 — Audience pages (Solutions · by who)

- **institutions.md** — lead page; routes to the three sub-segments; the institutional thesis + proof + moat. Proof band. CTA: Contact sales. Cross-links: all four use-cases.
- **institutions-wealth-asset-managers.md** — sub-segment; allocate client capital into regulated/transparent/managed yield + run mandates. Pulls: Institutional Yield, Managed Portfolios, Lending Vaults, Curation. Cross-link: launch-a-managed-fund.
- **institutions-funds-trading-firms.md** — sub-segment; capital-efficient credit + execution with rate certainty. Pulls: Fixed Rates, Multiply, Custodial Borrowing, RFQ/Liquidity. Cross-link: BTC-backed credit.
- **institutions-treasuries-corporates.md** — sub-segment; liquidity against holdings without selling; yield on reserves. Pulls: Custodial Borrowing, Institutional Yield. Cross-link: BTC-backed credit.
- **asset-issuers.md** — make my asset collateral + tradable + distributed, compliant. Pulls: Markets, Scope, RWA Liquidity, RFQ, Permissioned assets, Multiply, Curation, Cross-chain. Cross-links: offer-credit-against-tokenized-assets. Proof: PRIME, xStocks, Maple, OnRe.
- **fintechs-apps.md** — ship compliant yield/credit/swap to your users without building a protocol. Pulls: BuildKit, Yield API, Embedded Wallets, White-Label, permissioning. Routes engineers → Developers. Cross-link: embed-yield. Proof: Phantom, OneKey.
- **curators-managers.md** — operate credit/yield venues on Kamino's rails. Pulls: Curation Suite, Markets, Vault engine, Managed Portfolios, risk & first-loss, Security. Cross-link: launch-a-managed-fund. Proof: Gauntlet, Steakhouse, Allez, etc.
- **individuals.md** — professional-grade earn/borrow/multiply/swap, self-serve; the consumer experience, curated vaults, KMNO/Seasons, security. CTA: Launch App. Cousin to the App page.

## Tier 8 — Use-case pages (Solutions · by job)

- **uc-credit-against-tokenized-assets.md** — framed for issuer AND credit provider. Composes Scope · Markets · Fixed Rates/Custodial Borrowing · RWA Liquidity + RFQ · Permissioned assets · Curation · Multiply · Cross-chain. Case study. Cross-links: issuers, institutions, curators.
- **uc-btc-backed-credit.md** — borrow against BTC without selling. Composes Custodial Borrowing · BTC market · Fixed Rates · Scope · Institutional Yield (supply side) · Security · custody/PoR. Case study: Pantera. Cross-links: treasuries, funds, individuals.
- **uc-launch-a-managed-fund.md** — end-to-end: create a vehicle, manage it, integrate it, data out of the box. Composes Managed Portfolios · Curation · Vault engine · Permissioned Vaults · BuildKit + data/Portfolio APIs · White-label · strategies (Markets/Multiply/Yield) · Security. Cross-links: wealth/asset managers, curators, fintechs.
- **uc-embed-yield.md** — embed yield in your app. Composes BuildKit · Yield API · Embedded Wallets · White-Label · Lending Vaults/Managed Portfolios · permissioning. Cross-links: fintechs.

## Tier 9 — Trust, delivery, conversion, company

- **security.md** — the trust page: audit program, formal verification, bug bounty, open-source + verifiable builds, oracle resilience (Scope), the liquidation track record ($120M+/100k+/$0 bad debt), opsec & multisig governance, custody & proof-of-reserves, the risk apparatus (dashboard, monthly report, VaR, price-shock), whole-stack coverage. Headline stats: 20 external audits · 4 formal verifications · 3 years without incident · $0 bad debt. Dashboards: multisig.kamino.fi, oracles.kamino.fi. Sources: github.com/Kamino-Finance/audits, the security Figma material, docs risk/*.
- **kamino-app.md** — the consumer product experience: the interface, the mobile app, what you can do (Earn/Borrow/Multiply/Swap/Portfolio), KMNO/Seasons. CTA: Launch App. Cousin to Individuals.
- **developers.md** — the developer hub: docs, API reference, the SDKs, getting started; the home of the embed/BuildKit build. Sources: docs, api.kamino.finance.
- **contact-sales.md** — first-class sales page; routes by buyer type + segment; what to expect; the white-glove motion. Reached from header + every audience/use-case + Institutions + Security.
- **customers.md** — filterable case-study hub. Stories: PRIME/Figure, FalconX, Pantera, Anchorage, Marinade, Phantom, OneKey, curators. Each: who, the job, the Kamino products used, the outcome.
- **company-about.md** — who Kamino is, the mission, the thesis at company altitude.
- **company-careers.md** — light; roles + culture.
- **company-governance.md** — KMNO governance at a factual, non-marketing altitude (governance process, not token economics).
- **resources-blog.md** — blog index (structure/sections, not full posts).
- **resources-research.md** — research/insights index.
- **resources-brand.md** — brand & press kit (light).

---

## Build order (batches)
1. Spine: homepage · how-kamino-works · the 3 hubs.
2. Infrastructure: markets · scope · permissioning · routing · vault-engine · cross-chain · liquidation-engine.
3. Deep product pages: all of Tier 2–4.
4. Platform: Tier 5.
5. Audiences + use-cases: Tier 7–8 (the value layer — built after products exist to link into).
6. Trust/delivery/conversion/company: Tier 9.
7. index.md + cross-page consistency + writing-rules pass.

Then Phase C (Stripe-expert audit loop).
