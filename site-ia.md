# Kamino — Canonical Site Information Architecture

*The finalized IA for kamino.com, synthesized from a three-lens, two-round adversarial design process (institutional-conversion · Stripe-craft · newcomer-clarity). This is the single source of truth the page build works from. Everything is presented as the complete, live product. American spelling.*

---

## Part 1 — The model

**Company thesis (working):** Kamino is **capital-markets infrastructure for the tokenized economy** — the secure, validated rails that let institutions, wealth and asset managers, funds, issuers, and fintechs operate on-chain, with a consumer app that puts the same products in anyone's hands.

**Two navigation axes** (the Stripe model, verified live 2026-06-13 — Stripe runs Products + a multi-axis Solutions menu):
- **Products** — *what we offer*, organized by capability. For the visitor who knows the capability they want.
- **Solutions** — *who it's for and what you're trying to do*, organized by audience and by job. For the visitor who navigates by identity or outcome. Solutions pages curate and link into the Products; they are the entry points where the offering comes together for a buyer, and they are where the real conversion value lives.

**Three kinds of pages:**
1. **Product pages** — what we offer.
   - *Hubs* — top-level capability areas (Credit, Liquidity, Yield). A hub is both a narrative overview and the launchpad to its deeper pages.
   - *Deep product pages* — specific products (Fixed Rates, RFQ, Multiply…); some owned by one hub, some shared and cross-listed.
   - *Product vs infrastructure* — a **product** is something a buyer shops for (Fixed Rates, Permissioned Markets, Multiply, Managed Portfolios). **Infrastructure** powers products under the hood (Markets, Scope, the Liquidation engine, Routing, Permissioning-the-mechanism, the Vault engine). Infrastructure has its own deep pages and is surfaced richly inside the hubs, the Security page, and the audience pages — and it stays out of the Products mega menu, which lists only products a buyer selects.
2. **Entry points** — who/what it's for: **audience pages** (by who) and **use-case pages** (by job). They frame and link into the product pages.
3. **Delivery surfaces** — how you consume it: the **Consumer app** and the **Developers** hub.

Beneath everything sits the **docs** — the universal layer every page links into. Marketing pages are selective real estate on top of docs.

**How a hub composes** — a hub is one page of stacked sections, each one of:
- **Owns** — a section + a dedicated deep page that belongs to this hub (Fixed Rates under Credit).
- **Section only** — explained inline, no dedicated page, links to docs (Borrow Orders).
- **Surfaces-and-links** — a shared page framed for this hub, linking to its canonical home elsewhere (Markets, Scope, Security).

---

## Part 2 — Top navigation

```
Products   Solutions   Developers   Security   Resources   Company        [Launch App]  [Contact sales]
```

- **Products-first** (the catalog leads), Solutions second. *(Resolved against an earlier Solutions-first proposal; in Round 2 all three lenses agreed Products leads.)*
- **Security is a top-level item** — unanimous across all three lenses. For a buyer underwriting custody of institutional capital, security is the gating diligence question, so it earns its own front-of-nav home (with the live transparency dashboards behind it). This is a deliberate departure from Stripe, justified by what Kamino asks an institution to trust.
- **No Pricing tab** — there is no SaaS price to comparison-shop; economics live inside product and solution pages.
- Two CTAs: **Launch App** (the consumer/self-serve entry, persistent) and **Contact sales** (the institutional / white-glove motion).

---

## Part 3 — Products mega menu

Leads with a **featured, full-height App tile** (visual), then the three capability columns, then a spanning row.

```
┌───────────────┐   CREDIT  (hub)        LIQUIDITY  (hub)     YIELD  (hub)
│  KAMINO APP   │   Fixed Rates          Kamino Swap          Lending Vaults
│  [visual]     │   Custodial Borrowing  RFQ                  Managed Portfolios †
│               │   Permissioned Markets RWA Liquidity        Institutional Yield
│ Launch App  ▸ │   Multiply             Liquidity Vaults     Permissioned Vaults
│ Learn more  ▸ │   Market Curation ↗                         Vault Curation ↗
└───────────────┘
─────────────────────────────────────────────────────────────────────────────────
Build on Kamino:  Run your own market or vault (Curation) ▸   Embed Kamino in your app (BuildKit) ▸   Developer docs & APIs ▸
```

**Conventions:**
- The **column heading is the hub link** (Credit / Liquidity / Yield); "Kamino" prefixes only where it brands an otherwise-generic word ("Kamino Swap").
- **Only products appear.** Infrastructure (Markets, Scope, Liquidation engine, Routing, Permissioning, Vault engine) is surfaced inside the hub *pages* and on Security, and stays out of the menu.
- **Cross-listed items carry a ↗ glyph** — Market Curation and Vault Curation are the same Curation product framed for each side; the glyph signals "this lives in more than one place" and prevents duplicate-confusion. Multiply sits under Credit and is referenced from Yield in-page.
- The **App tile leads** the menu (per the founder's direction): the consumer app is featured first as a visual, with **Launch App** (primary) and **Learn more** (→ the dedicated Kamino App page) — then the columns. The app is the one thing that distinguishes Kamino from Stripe, so it gets pride of place.
- The **"Build on Kamino" row** spans the bottom: it gives the two-sided platform story (operate-on via Curation, embed-into via BuildKit) one visible home without a full column. BuildKit's canonical home is **Developers** + the **Fintechs** solution page.

† **Managed Portfolios** is the working name for what was internally "Meta-Vaults" — the configurable multi-asset, multi-strategy vehicle ("a managed fund in a box"). This is the single naming decision still flagged open for the founder's final call; the family-coherent alternative is **"Managed Vaults."**

---

## Part 4 — Solutions mega menu

Two explicit axes with literal headings, plus a guided picker. (Stripe verified live to run by-who + by-job + by-industry simultaneously; we ship the first two now and hold by-asset-class until it has depth.)

```
BY WHO YOU ARE                         BY WHAT YOU WANT TO DO                    
Institutions                           Offer credit against tokenized assets     
  · Wealth & asset managers            BTC-backed credit                         
  · Funds & trading firms              Launch a managed fund                     
  · Treasuries & corporates            Embed yield in your app                   
Asset issuers                                                                    
Fintechs & apps                        [ Find your path → ]  guided picker       
Curators & managers                                                              
Individuals                                                                      
```

- **By who (5 audiences):** Institutions (three sub-segments), Asset issuers, Fintechs & apps, Curators & managers, Individuals.
- **By what you want to do (5 use-cases):** offer credit against tokenized assets · BTC-backed credit · launch a managed fund · embed yield in your app · **launch your own on-chain money market** (the own-stablecoin closed loop). A use-case page serves several audiences at once.
- **By asset/industry** (RWAs, stablecoins, tokenized equities, BTC) is held as a deliberate later layer; it graduates to the menu once ≥3 such pages have real depth.
- A **"Find your path"** guided picker is the anti-bounce element for the cold visitor who isn't sure which door is theirs.

---

## Part 5 — Developers · Security · Resources · Company

- **Developers** — the technical hub: docs, API reference, the SDKs, and the **home of the embed/BuildKit story** (BuildKit, Institutional Yield API, Embedded Wallets, White-Label). The commercial embed pitch lives on the Fintechs solution page; the technical build lives here.
- **Security** — the trust page: the audit program, formal verification, the bug bounty, open-source + verifiable builds, oracle resilience, the liquidation track record, opsec & multisig governance, whole-stack coverage, and the two **live dashboards** (multisig.kamino.fi, oracles.kamino.fi). Also the home of the **"How Kamino works / Why Kamino"** trust narrative where the infrastructure moat is sold in full.
- **Resources** — blog, customer stories / case studies, research, brand & press.
- **Company** — about, careers, governance, contact / sales.

---

## Part 6 — The consumer app

Kamino's consumer surface is the one place the pure-B2B model gives way to a direct-to-user experience, and it is a deliberate strategic differentiator from Stripe.
- **Launch App** — persistent nav CTA + the App tile's primary button → the webapp (`/home`).
- **Kamino App page** — the dedicated, product-experience-framed marketing page (the interface, the mobile app, what you can do, the consumer aliases Borrow / Earn / Swap for Credit / Liquidity / Yield). Reached from the App tile's *Learn more*.
- The **Individuals** audience page tells the same story audience-framed (who it's for, why it's safe, the proof). The App page and the Individuals page are close cousins, linked, distinct in framing.

---

## Part 7 — Full page inventory (by type)

**Hubs (3):** Credit · Liquidity · Yield

**Deep product pages (~14):**
- Credit: Fixed Rates · Custodial Borrowing · Permissioned Markets · Multiply
- Liquidity: Kamino Swap · RFQ · RWA Liquidity · Liquidity Vaults
- Yield: Lending Vaults · Managed Portfolios · Institutional Yield · Permissioned Vaults

**Platform products (the "Build on Kamino" line) (~5):** Curation (canonical page; surfaced as Market Curation + Vault Curation) · BuildKit · Institutional Yield API · Embedded Wallets · White-Label vaults

**Infrastructure pages (~7) — kept out of the menu, reached by explicit links from hubs, Security, How-it-works, audiences:** Markets · Scope (oracle / pricing) · Permissioning · Liquidation engine · Routing/execution (kSwap · Kobayashi · Limo) · Vault engine · Cross-chain (Ethereum–Solana bridge)

**Audience pages (5):** Institutions (+ three sub-segment views) · Asset issuers · Fintechs & apps · Curators & managers · Individuals

**Use-case pages (5):** Offer credit against tokenized assets · BTC-backed credit · Launch a managed fund · Embed yield in your app · Launch your own on-chain money market

**Trust & overview:** Security · How Kamino works (Why Kamino) · the two dashboards (live external surfaces we link to)

**Delivery & developer:** Kamino App page · Developers hub (docs / API / SDK index)

**Company & resources:** About · Careers · Governance · Contact/Sales · Blog · Customer stories · Research · Brand/Press

**Homepage** + footer.

*(KMNO / token: out of scope for this map.)*

---

## Part 8 — The link / reuse graph (what lives in multiple places)

The defining property of the offering: shared things are framed differently in each place they appear, with one canonical home and links from everywhere else.

- **Markets** (home: Markets infra page) → surfaced on Credit ("the venue every loan happens in"), Yield ("where vaults allocate"), Liquidity ("a listed asset needs a market"), Multiply ("loops inside a market"); on the Asset issuers page ("your asset gets its own market — instant collateral status"); on the *credit-against-tokenized-assets* use-case.
- **Scope** (home: Scope infra page + oracles.kamino.fi) → Credit/liquidations ("priced safely, scam-wick protection"), RWA Liquidity ("the oracle price IS the liquidity price — why no market maker is needed"), Yield ("vault NAV"), Multiply, Institutional Yield, Security; the Asset issuers page ("we can price your asset — the gate to everything"); every RWA use-case.
- **Permissioning** (home: Permissioning infra page) → Permissioned Markets (Credit), Permissioned Vaults (Yield), Asset issuers (permissioned assets), Institutional Yield, Fintechs (compliant embeds), Security.
- **Liquidation engine** (home: own page, nested under Credit) → Credit, Multiply, Curation ("launch a market — the safety comes built in"), Permissioning ("whitelisted liquidators"), Security ("the $0-bad-debt record").
- **Curation** (home: Curation page) → Market Curation (Credit), Vault Curation (Yield), the "Build on Kamino" row, the Curators & managers audience page, the Asset issuers page ("curate the market for your asset"), the *launch-a-managed-fund* use-case.
- **RFQ** (home: RFQ page under Liquidity) → Liquidity (best-price fills), Asset issuers ("how holders move in and out of your tokenized asset"), market makers ("quote as a solver"), Credit/Fixed Rates ("price discovery"), the *credit-against-tokenized-assets* use-case.
- **Institutional Yield** (home: page under Yield) → Institutions audience, the *BTC-backed-credit* use-case (the depositor side), Build (as the Institutional Yield API), the *embed-yield* use-case.
- **Multiply** (home: page under Credit) → Credit, Yield (leveraged yield), the Individuals page, the tokenized-asset and BTC use-cases.

*(The build phase extends this graph to every product; the audience and use-case pages are the densest reuse surfaces.)*

---

## Part 9 — Audience page compositions

Each audience page is an entry point that frames Kamino for one buyer and branches into the product pages.

- **Institutions** (wealth & asset managers · funds & trading firms · treasuries & corporates) — *the lead page.* Composes: Institutional Yield, Managed Portfolios, Lending Vaults, Fixed Rates, Multiply, Custodial Borrowing, Permissioned Markets/Vaults, and the Security / infrastructure proof. Sub-segment views tune the emphasis (allocate yield vs borrow/leverage vs treasury liquidity).
- **Asset issuers** — composes: Markets ("instant collateral status"), Scope ("we price your asset"), RWA Liquidity + RFQ ("liquidity from day one, no market maker"), Permissioned assets, Multiply (distribution), Curation ("run the market for your asset").
- **Fintechs & apps** — composes: BuildKit, Institutional Yield API, Embedded Wallets, White-Label, compliant permissioning; the commercial pitch for the embed story. Routes engineers to Developers.
- **Curators & managers** — composes: Curation Suite, Markets, the Vault engine, Managed Portfolios, the risk & first-loss tooling, Security.
- **Individuals** — composes the consumer experience: Earn / Borrow / Multiply / Swap, the curated vaults, KMNO/Seasons, security. Cousin to the Kamino App page.

---

## Part 10 — Use-case page compositions

- **Offer credit against tokenized assets** — Scope (price it — the gate) · Markets (the collateral market) · Fixed Rates / Custodial Borrowing (the terms) · RWA Liquidity + RFQ (enter / exit / liquidate) · Permissioned assets · Curation (stand it up) · Multiply. *Cuts across:* issuers, institutions, curators.
- **BTC-backed credit** — Custodial Borrowing (custody-preserving) · the BTC market · Fixed Rates (rate certainty) · Scope (BTC pricing) · Institutional Yield (the supply side that funds it) · Security. *Cuts across:* treasuries & corporates, funds, individuals.
- **Launch a managed fund** — Managed Portfolios (the vehicle) · Curation (launch + operate) · the Vault engine (allocation, fees, insurance pool) · Permissioned Vaults (gate your investors) · BuildKit + data/Portfolio APIs (integrate + data out of the box) · White-label · the strategies it deploys into (Markets, Multiply, Yield) · Security/transparency for reporting. *Cuts across:* wealth & asset managers, curators, fintechs.
- **Embed yield in your app** — BuildKit · Institutional Yield API · Embedded Wallets · White-Label · Lending Vaults / Meta-Vaults as the underlying yield · compliant permissioning. *Cuts across:* fintechs, wallets, exchanges, neobanks.
- **Launch your own on-chain money market** — the closed loop: a tokenized fund → a white-glove permissioned market carrying your identity → your **own branded stablecoin** (issued via Coinbase's stablecoin-as-a-service) as the borrow liquidity → yield on that stablecoin paid to your clients. Composes Markets · Permissioned Markets · Custodial Borrowing · Scope · Multiply · RWA Liquidity · Yield API. *Cuts across:* institutions, asset issuers, wealth & asset managers.

---

## Part 11 — Hub compositions (owns / section-only / surfaces-and-links)

**Credit** (hub) — *borrow against anything, at fixed or floating rates.*
- *Owns:* Fixed Rates · Custodial Borrowing · Permissioned Markets · Multiply · Liquidation engine (page nested under Credit).
- *Section only:* variable Borrow · Borrow Orders · Conditional liquidity · repay-with-collateral / swap collateral & debt.
- *Surfaces-and-links:* Markets · Scope · Curation (the supply side) · Routing · Security.

**Liquidity** (hub) — *best-execution trading and on-chain liquidity.*
- *Owns:* Kamino Swap · RFQ · RWA Liquidity · Liquidity Vaults.
- *Section only:* limit orders · the routing/best-execution explainer (links to docs + the Routing infra page).
- *Surfaces-and-links:* Scope · Markets · Routing.

**Yield** (hub) — *curated and managed onchain yield.*
- *Owns:* Lending Vaults · Managed Portfolios · Institutional Yield · Permissioned Vaults.
- *Section only:* insurance pool / first-loss · whitelisted reserves · autocompounding.
- *Surfaces-and-links:* Markets (the demand side that generates yield) · the Vault engine · Curation (Vault Curation) · Security.

---

## Part 12 — Key decisions & debate resolutions

The eleven contested decisions, the verdict, and why — including where I overrode a lens, so the reasoning is auditable.

1. **Hub names = capability nouns (Credit · Liquidity · Yield), drop "Suite."** Two lenses for nouns, one for verbs (Borrow/Trade/Earn). The lead buyer is a finance institution fluent in capital-markets vocabulary, and Stripe itself names buckets by domain function (Payments, Billing, Connect), the vocabulary a finance institution already speaks. The consumer app uses the verb aliases (Borrow / Earn / Swap), so newcomer clarity is served on the surface where it matters.
2. **Infrastructure stays out of the Products menu; the moat gets prominence via Security (top-level) + a "How Kamino works" narrative + rich in-context surfacing in hubs and audience pages.** *This overrides two lenses that wanted infra surfaced in the menu* (both cited Stripe filing Radar/Connect in Products — verified true). The distinction that resolves it: Radar and Connect are products customers actively buy; Scope and the Liquidation engine are plumbing closer to Stripe's own un-surfaced ledger. The agents' real concern — the moat must convert institutions — is fully met by a top-level Security page and the moat told in-context, without putting plumbing in a menu that lists things you select. (Honors the founder's product-vs-infrastructure line.)
3. **No "Platform" column; a spanning "Build on Kamino" row instead.** *Overrides two lenses that wanted a fourth column.* The clarity lens's row gives the two-sided platform story one visible home without a column, honoring the founder's removal of a "Curate" category. Curation stays cross-listed as Market/Vault Curation.
4. **BuildKit's canonical home is Developers + the Fintechs solution page**, surfaced via the Build-on-Kamino row. The embed story is developer- and integration-centric; a thin Products column would add little.
5. **Top nav: Products · Solutions · Developers · Security · Resources · Company, Products-first, no Pricing tab.** Near-unanimous.
6. **Permissioning gets its own canonical page.** Unanimous — the institutional unlock, spanning markets, vaults, and assets.
7. **Four use-case pages** (the locked three + "embed yield in your app"). Unanimous; larger expansions risked thin near-duplicate pages.
8. **Meta-Vaults → "Managed Portfolios"** (working name), the one naming call left explicitly open for the founder; alternative "Managed Vaults."
9. **Solutions = by-who + by-job now, with literal axis headings + a "Find your path" picker; by-asset-class held for later.** Unanimous shape.
10. **The App tile leads the Products menu** (per founder direction), with a persistent Launch App CTA. *(One lens preferred it last; the founder's explicit direction and the app's role as the key Stripe-differentiator settle it first/left.)*
11. **Naming:** keep "RFQ" with a plain descriptor; "RWA Liquidity" (drop "DEX"); keep "Multiply"; Curation doorway label "Run your own market or vault"; cross-listed items marked ↗.

---

## Part 13 — Why it works

- **It conveys what Kamino is** — a capital-markets infrastructure company. The Products axis shows the depth (credit, liquidity, yield, the platform), and Security shows the moat that makes it trustworthy to institutions.
- **It conveys what we offer** — every product has a home, the infrastructure is evident through the trust surface and in-context, and the breadth reads as a platform with many products.
- **It conveys who we serve** — the Solutions axis routes wealth managers, funds, treasuries, issuers, fintechs, curators, and individuals each to a page built for them, recombining the same products per buyer.
- **It conveys what we're building toward** — "capital-markets infrastructure for the tokenized economy" is carried by the RWA-and-tokenization framing woven through Markets, Scope, RWA Liquidity, the issuer page, and the tokenized-asset use-cases.
- **It holds the consumer-and-B2B duality** — B2B leads the structure; the consumer app is featured first in the Products menu and given its own page, the one place the Stripe analogy gives way and Kamino reaches users directly.

---

## Part 14 — Round 3 audit: resolutions (binding; supersede earlier parts where they conflict)

Two adversarial audits — coverage/graph-integrity and buyer-journeys/quality-bar — stress-tested the IA. Their resolutions:

**New pages added to the IA and the build:**
- **Homepage** — the newcomer's "what is Kamino" home, built with hub-level rigor: thesis line · an audience/solutions routing band · a capability overview (Credit · Liquidity · Yield + the platform) · a named customer-proof band · a security/moat teaser · dual CTAs (Launch App / Contact sales).
- **How Kamino works** — its own reachable page (from the homepage + global), distinct from the Security diligence page; the plain-language "how the infrastructure fits together / why Kamino" narrative where the moat is told for the newcomer and evaluator.
- **Contact sales** — a first-class page; the destination of the header CTA, reachable from every audience page, every use-case page, the Institutions hero, and Security. Routes by buyer type + segment.
- **Customers** — a filterable case-study hub (promoted from a Resources sub-item to a real hub, reachable from nav/footer), plus a proof band on every audience page and a named case study on every use-case page. Named proof to draw on: PRIME ($1B+ RWA deposits), FalconX, Pantera / "Solana Company", Anchorage, the curator roster, Marinade, Phantom.
- **Cross-chain (Ethereum–Solana bridge)** — added as an infrastructure page; the mechanism that makes off-Solana RWAs (tokenized gold, Ethena USDe) usable as Solana collateral. Surfaced on Scope, Markets, RWA Liquidity, Asset issuers, and the offer-credit-against-tokenized-assets use-case.

**Infrastructure surfacing:**
- **Rule — "surfaced" means "linked":** every infrastructure page is reached by an explicit in-page link from at least one hub plus Security and/or How-it-works — never merely implied.
- **Vault engine** — canonical home is its own infrastructure page; surfaced from Yield, Curation, Build, and the launch-a-fund use-case.
- **Routing/execution** — its page names the proprietary stack (kSwap meta-aggregator · Kobayashi on-chain router · Limo limit orders); surfaced on Liquidity, Multiply, Credit (repay / swap-collateral), RWA Liquidity, Asset issuers.
- **Custody & proof-of-reserves** (Anchorage account-control agreement, the sync service, on-chain proof of reserves) — surfaced on Custodial Borrowing, the BTC-backed-credit use-case, Scope, and Security.
- **Risk apparatus** (the risk team + risk dashboard, monthly risk report, VaR, volatility & price-shock modeling) — given a home on Security, surfaced on Curators & managers.

**Solutions wiring & audiences:**
- **Cross-axis links** — every audience page links to the use-cases that cut across it, and every use-case page links to the audiences it serves (bidirectional; e.g. Curators ↔ Launch a managed fund).
- **Institutions sub-segments are first-class, deep-linkable destinations** — Wealth & asset managers · Funds & trading firms · Treasuries & corporates each get their own hero, product pulls, proof, and CTA, reached from the Institutions page and directly from the Solutions menu.
- **Proof band on every audience page**; **a case study on every use-case page**.
- **Asset-issuer front door** — the offer-credit-against-tokenized-assets use-case is framed for the issuer as well as the credit provider, answering the issuer's gating question ("can you price and make my asset useful?") up front and linking to Scope · Markets · RWA Liquidity.

**Conversion & CTAs:**
- **CTA rule:** institutional / B2B pages lead with **Contact sales** (primary), **Launch App** secondary; consumer / individual surfaces lead with **Launch App**. Never "Launch App" as the primary call on an institutional page.
- **Economics** stated inline on each product/solution page (fees, revenue share, take rate); no Pricing tab.
- **Decision-support:** the Yield hub carries a comparison aid across its four products (Lending Vaults · Managed Portfolios · Institutional Yield · Permissioned Vaults — which one, for whom); Credit carries a lighter chooser.

**"Find your path" picker — spec:** a 2–3 question guided router on the Solutions surface — Q1 "Who are you?" (the 5 audiences + individual), Q2 "What do you want to do?" (the 4 jobs) — with a routing table to the matching page and a no-match fallback to Contact sales / How-it-works. If not built, it ships as nothing (no named-but-empty picker).

**Naming / consistency:**
- **KMNO / Seasons** — no standalone token-economics or governance *marketing* page (out of scope), but KMNO staking and Seasons appear as part of the **consumer app experience** on the Kamino App and Individuals pages.
- **Cross-listing discipline** — the ↗ glyph applies to every product appearing in more than one menu location, canonical home named once.
- **Consumer aliases** documented: Credit→Borrow · Liquidity→Swap/Trade · Yield→Earn on the consumer surface.
- **Managed Portfolios** stays the single open naming call for the founder (alt: Managed Vaults); the build uses "Managed Portfolios" with the alternative noted, and does not block on it.

Exact homepage section lists, picker questions, and comparison-table contents are composed in the page-build phase; this part fixes their existence, placement, and links in the IA. **The IA is now locked.**

---

## Part 15 — Post-lock founder additions

- **Yield API is its own product under Yield** (added to the Yield hub alongside Lending Vaults, Managed Portfolios, Institutional Yield, Permissioned Vaults). It is the embeddable "yield-in-a-box": a productized yield API a fintech or institution integrates into its own infrastructure, including **under the partner's own stablecoin set up via Bridge** — a full integration into their stack. It is **cross-listed** onto the Fintechs page, the Institutions → wealth & asset managers sub-segment, and the Build-on-Kamino row. (Distinct from "Institutional Yield," which is the BTC-backed credit *vault*.)
- **Primary source decks** are now mapped to their pages (Vault Curation, Yield API, Institutional Yield, Off-Chain Collateral, and a general company deck) — see the page manifest. These decks are first-class grounding for the build, read directly alongside the docs.
