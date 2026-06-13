# Blog

*Resources · Blog index. The reading room for everything Kamino ships, learns, and proves — product launches, market and risk commentary, customer stories, and the thinking behind capital-markets infrastructure for the tokenized economy. This page defines the index structure: hero, category rows, featured logic, subscribe, and cross-links. The individual posts are written separately.*

---

## Hero

**The Kamino Blog**

How tokenized capital markets get built, secured, and put to work.

Product launches, risk and market commentary, engineering deep dives, and customer stories from the team building the rails that institutions, issuers, fintechs, and millions of users run on. Every post traces back to something live: a market that shipped, a record that held, an asset that came on-chain.

`[Browse all posts]`   `[Subscribe]`

---

## Featured

A single editor's-pick slot at the top, refreshed as major work ships. The featured post carries a large cover image, category tag, title, two-line standfirst, author, and read time. The standing rule for what earns the slot: a launch that changes what a buyer can do, a milestone with a hard number behind it, or a piece of original analysis the research desk can stand behind with its own data.

Examples of the kind of post that earns the feature slot:

- **PRIME on Kamino: from listing to $1B in RWA deposits.** What it took to bring private-credit collateral on-chain — the Scope feed, the dedicated market, the liquidity — and the path that carried RWA deposits past one billion dollars. → reads into [Customers](./customers.md) and [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md).
- **Fixed rates, fixed terms: the on-chain yield curve goes live.** How a rate-by-duration grid turns floating DeFi lending into term credit institutions can underwrite — and why FalconX borrows on it. → reads into [Fixed Rates](./fixed-rates.md).
- **$0 bad debt across 100,000+ liquidations.** Three years, $120M+ liquidated, every loan made whole. The auction, soft-liquidation, and oracle-layer mechanics behind the record. → reads into [Security](./security.md) and [Liquidation engine](./liquidation-engine.md).

---

## Browse by category

The index is organized into category rows, each a horizontal strip of post cards with a "View all →" link to that category's archive. A post card shows cover image, category tag, title, date, and read time. Categories map to how the company actually works, so a reader looking for "what shipped" and a reader looking for "is this safe" each find their row immediately.

### Product & launches

What's new and what it lets you do. Every product launch, capability, and meaningful upgrade, written at the altitude of the job it does for the reader.

Representative posts:
- Custodial borrowing is live: borrow on-chain against assets held at Anchorage, with on-chain proof of reserves and tri-party account control. → [Custodial Borrowing](./custodial-borrowing.md)
- Permissioned markets: KYC-gated, compliant credit venues that screen capital on the way in and stay open to repay and exit. → [Permissioned Markets](./permissioned-markets.md)
- Meta-Vaults: a configurable multi-asset, multi-strategy vehicle a wealth manager can stand up, run, and report on. → [Meta-Vaults](./meta-vaults.md)
- Multiply, fixed-rate: lock the cost of a leverage loop for the full term, up to ~10x. → [Multiply](./multiply.md)
- RWA Liquidity: oracle-priced trading for tokenized assets, where the Scope price is the liquidity price and trades fill against pooled capital at oracle value. → [RWA Liquidity](./rwa-liquidity.md)

`View all in Product & launches →`

### Markets & research

Where on-chain credit, yield, and tokenized assets are heading, with original data behind the claims. Rate-curve commentary, RWA-flow analysis, the spread between fixed and floating, which counterparties are taking term credit and at what rates. The research desk's home; deeper, fully-cited reports live in [Research](./resources-research.md).

Representative posts:
- The shape of the on-chain yield curve: reading term premium across the 1, 3, 6, and 12-month fixed-rate grid.
- BTC-backed credit demand: who is borrowing against bitcoin to raise liquidity while keeping the upside, and why treasuries and funds are leading.
- Tokenized equities on-chain: what xStocks collateral and leveraged equity exposure look like in practice.
- Where stablecoin yield comes from: tracing a depositor's return back to the borrowers who pay it.

`View all in Markets & research →`

### Security & risk

The diligence answer, written in public. Audit and formal-verification announcements, liquidation post-mortems, oracle-resilience explainers, and risk-team commentary. The detail a buyer underwriting custody of institutional capital needs before they allocate. The full transparency apparatus lives on [Security](./security.md), with the live dashboards at multisig.kamino.fi and oracles.kamino.fi.

Representative posts:
- Inside Scope: how the oracle prices the hard assets — equity market hours, NAV pauses, corporate-action blackouts, and the proof-of-reserves guard that freezes an unbacked mint.
- Anatomy of a liquidation: how a position is wound down through auction and soft liquidation with $0 bad debt as the outcome.
- Formal verification, in plain terms: what it means that core contract properties are mathematically proven, and which products are covered.
- Reading the risk dashboard: VaR, volatility, and price-shock modeling, and how the risk team uses them to set parameters.

`View all in Security & risk →`

### Customers & ecosystem

Who builds on Kamino and what they ship. Launch announcements and partner stories — issuers bringing assets on-chain, fintechs embedding yield, curators running venues, custodians and institutions going live. Each links to its full case study in [Customers](./customers.md).

Representative posts:
- Marinade runs Kamino vaults on its own front-end: a white-label deployment, invisible to Kamino's UI. → [White-Label](./white-label.md)
- Phantom embeds Kamino yield: idle balances put to work through curated vaults. → [Embedded Wallets](./embedded-wallets.md)
- A treasury borrows on-chain against custodied collateral: assets stay at the custodian under tri-party control, with on-chain proof of reserves backing the loan. → [Custodial Borrowing](./custodial-borrowing.md)
- The curator roster: Gauntlet, Steakhouse, Allez, and the managers running credit and yield venues on Kamino's rails. → [Curation](./curation.md)

`View all in Customers & ecosystem →` · `Explore the case studies in [Customers](./customers.md) →`

### Engineering & building

For the people integrating Kamino. How the routing stack achieves best execution, how conditional liquidity lets a vault earn floating yield right up to the moment it funds a fixed-rate term loan, how the Ethereum–Solana bridge makes off-Solana assets safe as Solana collateral. Build-focused posts route readers to the [Developers](./developers.md) hub and [BuildKit](./buildkit.md).

Representative posts:
- Best execution by design: how the swap meta-aggregator and the proprietary on-chain router rank routes across venues. → [Kamino Swap](./kamino-swap.md)
- Conditional liquidity: how a vault earns floating yield while standing ready to fund a fixed-rate term loan in a single step. → [Vault engine](./vault-engine.md)
- Crossing chains for safety: liquidating and rebalancing ETH-native collateral on deep Ethereum venues. → [Cross-chain](./cross-chain.md)
- Embed yield in a few lines: a walkthrough of the integration kit. → [Embed yield in your app](./uc-embed-yield.md)

`View all in Engineering & building →`

### Company & culture

The people and the thinking. Team notes, hiring, governance updates at a factual altitude, and the occasional founder essay on where tokenized capital markets are going. Routes to [About](./company-about.md), [Careers](./company-careers.md), and [Governance](./company-governance.md).

Representative posts:
- Why we are building capital-markets infrastructure on Solana: the founder case for an on-chain credit venue institutions can underwrite. → [About](./company-about.md)
- How Kamino governance works: who sets risk parameters, how proposals move from forum to vote to execution, and where token holders steer the protocol. → [Governance](./company-governance.md)
- Building the risk desk: how the team that owns liquidation and oracle policy thinks about underwriting institutional capital. → [Careers](./company-careers.md)

`View all in Company & culture →`

---

## The reading paths

Two ways into the archive, surfaced beside the category rows so a reader can navigate by capability or by identity, mirroring the rest of the site.

**By capability** — Credit · Liquidity · Yield · Security · Build. The three core tags map onto the [Credit](./credit.md), [Liquidity](./liquidity.md), and [Yield](./yield.md) hubs, so a reader following a product page into a deeper explainer lands among related posts. *Security* and *Build* extend the set for the blog only, routing to [Security](./security.md) and [Developers](./developers.md) so the security-and-risk and engineering rows stay filterable here.

**By who you are** — Institutions · Asset issuers · Fintechs & apps · Curators & managers · Individuals. The same audiences the [Solutions](./institutions.md) menu routes by, so a fund or an issuer can read only what concerns them.

Tags are additive: a single post on permissioned markets carries both *Credit* and *Institutions*, and appears in either filter.

---

## Subscribe

A persistent strip beneath the featured post and again in the footer of the index.

**Get every launch, report, and milestone.**

New posts in your inbox the day they publish — product launches, market and risk research, and customer stories. One email per post: the standfirst and the link, sent the day it goes live.

`[ Email address ]`  `[Subscribe]`

Also available as an RSS feed for readers who keep their own reading list.

---

## How a post is built

The template every post inherits, so the index stays consistent:

- **Category tag + capability/audience tags** — one primary category, additive capability and audience tags for the reading-path filters.
- **Title + standfirst** — the headline and a two-line summary that states what the reader will learn.
- **Author + date + read time** — bylined by the person who did the work (product, research, engineering, or risk).
- **Body** — written at product altitude: what a thing does for the reader, with real numbers and named proof.
- **Linked sources** — every claim ties to a live product page, a docs page, or a public dashboard. Posts about a launch link to its product page; posts about a record link to [Security](./security.md) or the dashboards.
- **End-of-post routing** — a "Related" rail to adjacent posts and the relevant product page, then the page-level CTA.

---

## Where the blog points

The index is a hub that feeds the rest of the site.

- **Product launches** → the [Credit](./credit.md), [Liquidity](./liquidity.md), and [Yield](./yield.md) hubs and their deep pages.
- **Research posts** → the deeper, fully-cited reports in [Research](./resources-research.md).
- **Security and risk posts** → the [Security](./security.md) page and the live dashboards.
- **Customer and partner posts** → the [Customers](./customers.md) case-study hub.
- **Build posts** → the [Developers](./developers.md) hub and [BuildKit](./buildkit.md).
- **Press and media assets** → [Brand & press](./resources-brand.md).

---

## Talk to the team

The blog tells you what Kamino has built. To put it to work for your institution, fund, or app, the sales team will scope a market, vault, or integration tuned to what you need.

`[Contact sales]`   `[Launch App]`
