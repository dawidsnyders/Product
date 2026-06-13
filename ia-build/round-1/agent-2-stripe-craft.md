# Kamino Site IA — Round 1 — Agent 2 (Stripe-Craft / IA Best-Practice Lens)

**Author lens:** keeper of the quality bar. Everything here is measured against Stripe's *live* IA (verified June 2026, URLs cited inline), then translated onto Kamino's actual offering — a capital-markets protocol with both a two-sided platform and a consumer app, which Stripe is not.

**Bottom line up front:** the current map's three-hub Products menu (Credit · Liquidity · Yield Suite) is *under-built by Stripe standards* and *mis-cut in one place*. Stripe's real product taxonomy is four buckets, not three, and it cross-lists aggressively. Kamino's strongest asset — the Markets/Scope/Vault/Routing/Permissioning rails — is being hidden from the menu out of a "products vs infrastructure" purity that Stripe does **not** observe (Radar and Connect are pure infrastructure and both get full menu placement and deep pages). I argue for surfacing the rails as a fourth menu column, recutting Yield Suite, and adding a Platform layer the current map buries inside "Developers." Details and arguments below.

---

## PART A — What I verified on Stripe's live site (the patterns I'm translating)

Each pattern below is load-bearing for a decision later in this doc. URLs are the ones I actually fetched.

### A1. Top nav is six items, ruthlessly stable
`stripe.com` → **Products · Solutions · Developers · Resources · Pricing · Guide me**, plus **Sign in** and two CTAs (**Start now**, **Contact sales**). That's it. No "Company," no "Security," no "About" in the *primary* row — those live in the footer and in Resources. (Verified: stripe.com.)

**Translation rule for Kamino:** the primary nav is for *buyers shopping*, not for *everything the company wants to say*. Security and Company do not earn a top-level slot at Stripe; I'll argue Kamino is the exception on Security (capital-markets trust is the whole sale) but should resist on Company.

### A2. Stripe's real product taxonomy is FOUR buckets — and it's the docs that reveal the true mental model
The marketing footer lists products loosely, but `docs.stripe.com` exposes the canonical grouping Stripe actually thinks in:
- **Payments** (Payments, Managed Payments, Terminal, **Connect**, **Radar**, Climate, **Identity**, Financial Connections, Crypto)
- **Revenue** (Billing, Tax, Revenue Recognition, Sigma, Data Pipeline, Atlas)
- **Money Management** (Issuing, Treasury, Capital)
- **Prebuilt Components** (Payment Links, Checkout, Elements)
(Verified: docs.stripe.com.)

**Two patterns that matter enormously here:**
1. **Infrastructure products are cross-listed INTO the buyer buckets, not hidden.** Radar (fraud) and Connect (multi-party routing) and Identity (KYC) are pure infrastructure. Stripe does not quarantine them in a separate "infrastructure" area. They sit *inside Payments* because that's where a buyer looks for them. (Verified: docs.stripe.com grouping; stripe.com/radar; stripe.com/connect.)
2. **A "Prebuilt Components" bucket exists** — a delivery/integration-shaped category sitting *next to* the capability categories. Kamino has an exact analog (BuildKit, embedded wallets, white-label, the APIs) that the current map buries in "Developers."

### A3. Hubs are clickable overviews with real hub→spoke
`/billing` is a clickable hub whose top nav links to `/billing/subscriptions`, `/billing/usage-based-billing`, `/invoicing`, plus a cross-link table out to Tax/Revenue Recognition/Sigma. The hub does double duty: narrative overview *and* launchpad. (Verified: stripe.com/billing.) `/payments` does the same across five pillar sections, each with "Learn more" into a deep page. (Verified: stripe.com/payments.)

**Translation rule:** every hub heading is a link to a real page; every spoke under it is either a deep page or a cross-link to a deep page that lives elsewhere. No dead labels.

### A4. Infrastructure products get FULL deep marketing pages, framed by their moat
`/radar` leads with the network effect ("92% chance a card has been seen before on the Stripe network") and tiers (Radar → Radar for Fraud Teams → Radar for Platforms). `/connect` leads with abstraction ("shifts payment obligations to Stripe") and a money-flow diagram, segmented "for platforms" vs "for marketplaces." (Verified: stripe.com/radar, stripe.com/connect.)

**Translation rule:** Scope, Markets, the Vault engine, Routing, Permissioning each deserve a *full deep page framed by its moat* — exactly as Radar is framed by its network and Connect by its abstraction. The current map gives them pages but keeps them out of the menu. That's a half-measure Stripe doesn't take.

### A5. Solutions splits THREE ways, not two
`stripe.com` Solutions = **business segments (by-who: Enterprises, Startups, Platforms)** + **use cases (by-job: Ecommerce, Embedded finance, Marketplaces, SaaS, AI companies, Agentic commerce, Crypto…)** + **industries (Insurance, Hospitality, Media, Nonprofits, Public sector, Retail)**. (Verified: stripe.com.)

**Translation rule:** the current map has by-who + by-use-case (Stripe's first two axes). Kamino has a latent *third* axis Stripe would call "industries" — **asset class** (RWA / tokenized equities / stablecoins / BTC / LSTs). I'll argue this is Kamino's industry axis and should be a third Solutions column once there are enough pages to fill it.

### A6. Audience pages are outcome-organized; use-case pages subordinate product identity to the job
`/enterprise` groups around three *business domains* (Global payments, Platform payments, Revenue/finance automation), each leading with a metric ("Grow revenue 11.9%," "Recover 38% of failed payments"), products appearing as *enablers* inside contextual paragraphs with `/product` links — not as tiles. (Verified: stripe.com/enterprise.) `/use-cases/saas` clusters products into functional groups around "How do these work together?" and uses consolidation case studies. (Verified: stripe.com/use-cases/saas.)

**Translation rule:** Kamino audience/use-case pages must lead with *the buyer's outcome and a number*, compose products as enablers in prose with deep links, and end on a proof-story. They are curation, not re-explanation.

### A7. Developers is a hub of get-started entry points + product-grouped docs + API ref + SDKs
`docs.stripe.com` opens with use-case quickstarts ("Accept payments online," "Sell subscriptions"), then product-grouped docs, then API reference and libraries. The Developers *menu* item on marketing is a thin set of links (Documentation, API reference, API status, Changelog, Libraries/SDKs, Developer blog). (Verified: stripe.com, docs.stripe.com.)

**Translation rule:** Kamino's Developers menu is a thin set of links into docs; the *embed/integration story* (BuildKit etc.) is **not** a Developers-menu thing at Stripe — it's a product bucket (Prebuilt Components) and a Solutions page (Platforms / Embedded finance). The current map's decision to home BuildKit in Developers contradicts Stripe. Fixed below.

### A8. Pricing is a top-level item even when pricing is complex
Stripe surfaces Pricing in the primary nav with per-product/per-plan detail. (Verified: stripe.com.) Kamino's commercial model is genuinely different (take-rate vs curator fees, no per-seat SaaS pricing), so this is a *partial* transfer — covered in challenges.

---

## PART B — TOP-LEVEL NAV (every item)

```
[Kamino logo]   Products   Solutions   Developers   Security   Resources        [Launch App]  [Contact sales]
```

Six interactive items + logo + two CTAs — matching Stripe's discipline (A1), with two deliberate Kamino-specific deviations argued in Part H:

| Item | Type | Why it's here |
|---|---|---|
| **Products** | Mega menu | The capability + infrastructure + components catalog. Where a buyer shops. |
| **Solutions** | Mega menu | by-who + by-job (+ by-asset-class later). The composition layer. (A5, A6) |
| **Developers** | Mega menu (thin) | Docs, API reference, SDKs, status, changelog. (A7) |
| **Security** | Hub link (no mega menu) | Kamino-specific deviation from Stripe. Capital-markets trust is the sale; 20 audits / $0 bad debt / live dashboards is a primary-nav-worthy asset. Argued in H1. |
| **Resources** | Mega menu | Customer stories, blog, research/risk reports, guides, the curator roster, brand. Company lives in here + footer. (A1) |
| **Launch App** | Primary CTA | The consumer surface — Kamino's one direct-to-user face. Stripe's "Start now" analog, but it opens the actual app, not signup. |
| **Contact sales** | Secondary CTA | White-glove / institutional path. Stripe parity (A1). |

**No top-level Pricing.** Argued in H3 — Kamino has no per-seat SaaS price; pricing is a *section* on hubs and a dedicated page reached from Resources/footer, not a primary tab.

---

## PART C — THE PRODUCTS MEGA MENU (full, every item typed)

This is my single biggest divergence from the current map, built directly on A2. The current map has **three capability columns + an app tile**. Stripe has **four columns** and one of them is delivery-shaped (Prebuilt Components), and it **cross-lists infrastructure into the buyer columns**. I do both.

### Layout: featured rail (left) + four columns

```
┌─────────────────┬──────────────────┬──────────────────┬──────────────────┬─────────────────────┐
│  FEATURED        │  CREDIT          │  LIQUIDITY       │  YIELD           │  PLATFORM           │
│  (full-height    │  (hub)           │  (hub)           │  (hub)           │  (hub)              │
│   visual tile)   │                  │                  │                  │                     │
│                  │  Borrowing       │  Swap            │  Earn Vaults     │  Curation Suite     │
│  ┌────────────┐  │  Fixed Rates     │  RFQ             │  Meta Vaults     │  BuildKit           │
│  │ Kamino App │  │  Multiply        │  RWA DEX         │  Institutional   │  Institutional      │
│  │            │  │  Off-Chain       │  Liquidity       │    Yield         │    Yield API        │
│  │ Launch App │  │    Collateral    │    Vaults        │  Permissioned    │  Embedded Wallets   │
│  │ Learn more │  │  Permissioned    │  Limit Orders    │    Vaults        │  White-Label Vaults │
│  └────────────┘  │    Markets       │                  │  Vault Curation  │                     │
│                  │  Market Curation │                  │                  │  ───────────────    │
│  + secondary     │                  │                  │                  │  THE RAILS          │
│  featured tile:  │                  │                  │                  │  Markets            │
│  "Capital-       │                  │                  │                  │  Scope (Oracle)     │
│   markets infra  │                  │                  │                  │  Vault Engine       │
│   for the        │                  │                  │                  │  Routing & Exec     │
│   tokenized      │                  │                  │                  │  Permissioning      │
│   economy" →     │                  │                  │                  │  Liquidation Engine │
│   Platform hub   │                  │                  │                  │                     │
└─────────────────┴──────────────────┴──────────────────┴──────────────────┴─────────────────────┘
```

### Every item, typed

**Type legend:** `[HUB]` clickable hub-overview page · `[DEEP]` dedicated deep product page · `[INFRA]` infrastructure deep page (moat-framed, à la Radar/Connect) · `[FEATURE]` featured visual tile · `[X-LINK]` canonical home is elsewhere, surfaced here with this column's framing · `[SECTION]` no own page, lives as a section + docs link.

**FEATURED rail**
- **Kamino App** — `[FEATURE]` → primary button **Launch App** (opens app), secondary **Learn more** (→ Kamino App page, the consumer story). Mirrors Stripe's featured menu tiles (A1) and gives the one consumer surface its due without diluting the buyer columns.
- **"Capital-markets infrastructure for the tokenized economy"** — `[FEATURE]` secondary tile → **Platform hub**. Pulls the eye to the platform story, the way Stripe promotes Connect-style infrastructure in-menu.

**CREDIT** `[HUB]` → `/credit`
- **Borrowing** `[DEEP]` `/credit/borrowing` — variable-rate borrowing against collateral; the base credit page.
- **Fixed Rates** `[DEEP]` `/credit/fixed-rates` — rate × duration grid, the on-chain yield curve; owned by Credit.
- **Multiply** `[DEEP]` `/credit/multiply` — one-click leverage looping (cross-listed conceptually with Liquidity for execution, but home is Credit).
- **Off-Chain Collateral** `[DEEP]` `/credit/off-chain-collateral` — borrow on-chain against custodied assets (Anchorage; Pantera). A market *configuration*, but a buyer shops for it by name → earns a deep page.
- **Permissioned Markets** `[DEEP]` `/credit/permissioned-markets` — KYC-gated, named-counterparty venues. Surfaces Permissioning's credit expression; canonical Permissioning page is in the rails column.
- **Market Curation** `[X-LINK]` → `/platform/curation?lens=markets` — "launch and run your own market." Canonical home is Curation Suite under Platform; surfaced here with the credit framing (mirrors Stripe cross-listing Connect under Payments, A2).
- *(inline `[SECTION]` on the hub, not menu items: Borrow Orders, Conditional liquidity, Repay-with-collateral / swap-collateral / swap-debt, obligation/lever-up/stop-loss orders.)*

**LIQUIDITY** `[HUB]` → `/liquidity`
- **Swap** `[DEEP]` `/liquidity/swap` — the kSwap meta-aggregator surface; best execution.
- **RFQ** `[DEEP]` `/liquidity/rfq` — the request-for-quote solver auction; how holders move in/out of less-liquid assets with no standing AMM.
- **RWA DEX** `[DEEP]` `/liquidity/rwa-dex` — oracle-priced, market-maker-free liquidity for tokenized assets.
- **Liquidity Vaults** `[DEEP]` `/liquidity/vaults` — automated concentrated-liquidity (CLMM) management.
- **Limit Orders** `[DEEP]` `/liquidity/limit-orders` — Limo on-chain limit-order infrastructure (renamed from "RFQ"-only thinking; limit orders are a distinct buyer-facing surface).
- *(inline `[SECTION]`: Kobayashi proprietary router — explained inside Swap + Routing, not its own menu item; it's the engine, surfaced under the Routing infra page.)*

**YIELD** `[HUB]` → `/yield` *(renamed from "Yield Suite" — see H2)*
- **Earn Vaults** `[DEEP]` `/yield/earn` — curated single-asset lending vaults; the consumer-facing earn product.
- **Meta Vaults** `[DEEP]` `/yield/meta-vaults` — configurable multi-asset basket vehicle; the "managed fund in a box." *(Open naming — proposal in H6.)*
- **Institutional Yield** `[DEEP]` `/yield/institutional` — permissioned regulated-credit vault; BTC-backed loan book with attestation/reporting.
- **Permissioned Vaults** `[DEEP]` `/yield/permissioned-vaults` — kperm-gated deposits; surfaces Permissioning's yield expression.
- **Vault Curation** `[X-LINK]` → `/platform/curation?lens=vaults` — canonical home Curation Suite; surfaced here with the yield framing.
- *(inline `[SECTION]`: Whitelisted Reserves, Insurance Pool — trust mechanics explained on Earn/Institutional Yield + Security.)*

**PLATFORM** `[HUB]` → `/platform` *(NEW column — the biggest structural add; argued H4)*

This column is Kamino's analog to Stripe's "Prebuilt Components" bucket (A2) *fused with* the cross-listed-infrastructure pattern (Radar/Connect under Payments). It holds (a) the two-sided platform products and (b) the rails, surfaced.

*Build & operate on Kamino:*
- **Curation Suite** `[DEEP]` `/platform/curation` — operate ON Kamino: launch/run vaults & markets; the curator roster; two planes (permissionless / curated). Canonical home for Market Curation + Vault Curation.
- **BuildKit** `[DEEP]` `/platform/buildkit` — embed Kamino INTO your app; lending/earn in a few lines.
- **Institutional Yield API** `[DEEP]` `/platform/institutional-yield-api` — packaged yield-in-a-box (cap, revenue share).
- **Embedded Wallets** `[DEEP]` `/platform/embedded-wallets` — wallet balances auto-deploy into curated vaults.
- **White-Label Vaults** `[DEEP]` `/platform/white-label` — vaults on a partner's own UI (Marinade). The seam where Curation and Build meet.

*The rails (cross-listed infrastructure — A2, A4):*
- **Markets** `[INFRA]` `/infrastructure/markets` — the configurable lending engine; "markets are the platform." Moat-framed: ~50 params, no-new-code bespoke venues.
- **Scope (Oracle)** `[INFRA]` `/infrastructure/scope` — the pricing engine; moat-framed like Radar's network: "whatever Scope can safely price, Kamino can lend/borrow/loop/trade." The RWA moat.
- **Vault Engine** `[INFRA]` `/infrastructure/vault-engine` — the supply side; conditional liquidity.
- **Routing & Execution** `[INFRA]` `/infrastructure/routing` — kSwap + Kobayashi; best execution; the integrator pitch.
- **Permissioning** `[INFRA]` `/infrastructure/permissioning` — the institutional switch; canonical home for Permissioned Markets/Vaults/Assets.
- **Liquidation Engine** `[INFRA]` `/infrastructure/liquidation` — auction + soft/auto-deleverage + fixed-rate maturity; the $0-bad-debt story (cross-links to Security).

> **Why surface the rails in the menu (the core argument):** The current map keeps all infrastructure out of the mega menu on a clean "buyers shop for products, not infrastructure" principle. Stripe's live site contradicts this directly: **Radar (fraud) and Connect (multi-party routing) are pure infrastructure and both sit inside the Payments product menu with full deep pages** (A2, A4). The reason is that *sophisticated buyers DO shop for infrastructure* — an institution evaluating Kamino absolutely asks "what's your oracle, what's your liquidation engine, who can I gate." Hiding Scope (the literal moat under the entire RWA thesis) from the menu is leaving the strongest card face-down. I keep the rails *visually subordinate* (a sub-section within Platform, under a rule line) so the buyer columns still lead — but they are in the menu, reachable in one click.

---

## PART D — COMPLETE PAGE INVENTORY (by page type)

### D1. Hubs (clickable overview + launchpad) — 5
- `/credit` · `/liquidity` · `/yield` · `/platform` · `/developers` (docs landing)

### D2. Deep product pages — 19
Credit: `/credit/borrowing`, `/credit/fixed-rates`, `/credit/multiply`, `/credit/off-chain-collateral`, `/credit/permissioned-markets`
Liquidity: `/liquidity/swap`, `/liquidity/rfq`, `/liquidity/rwa-dex`, `/liquidity/vaults`, `/liquidity/limit-orders`
Yield: `/yield/earn`, `/yield/meta-vaults`, `/yield/institutional`, `/yield/permissioned-vaults`
Platform: `/platform/curation`, `/platform/buildkit`, `/platform/institutional-yield-api`, `/platform/embedded-wallets`, `/platform/white-label`

### D3. Infrastructure deep pages (moat-framed) — 6
`/infrastructure/markets` · `/infrastructure/scope` · `/infrastructure/vault-engine` · `/infrastructure/routing` · `/infrastructure/permissioning` · `/infrastructure/liquidation`

### D4. Solutions — by-who (audience) pages — 5
`/solutions/institutions` · `/solutions/asset-issuers` · `/solutions/fintechs` · `/solutions/curators` · `/solutions/individuals`

### D5. Solutions — by-job (use-case) pages — 4 (3 locked + 1 I'm adding)
`/solutions/tokenized-asset-credit` · `/solutions/btc-credit` · `/solutions/launch-a-fund` · `/solutions/embedded-yield` *(added — see H5)*

### D6. Solutions — by-asset-class (latent third axis, A5) — proposed, not yet built
`/solutions/rwa` · `/solutions/tokenized-equities` · `/solutions/stablecoins` · `/solutions/bitcoin` · `/solutions/lsts` — *ship when there are ≥3 with real depth; until then they stay in a "More" row. Argued H7.*

### D7. Delivery / standalone pages — 5
`/app` (Kamino App consumer story) · `/security` (+ links to multisig.kamino.fi, oracles.kamino.fi) · `/pricing` (commercial model) · `/company` · `/contact-sales`

### D8. Developers — 6 (thin, into docs)
`/developers` (docs landing) · API reference · API status · changelog · Libraries/SDKs · Developer blog. *Public/Tokens/Historian/Portfolio APIs are documented here, not given marketing pages.*

### D9. Resources — content
Customer stories (index + per-story) · Blog · Research & risk reports · Guides · Curator roster · Brand/press · Sitemap.

**Total marketing-page count:** 5 hubs + 19 deep + 6 infra + 5 audience + 4 use-case + 5 delivery + Resources index pages ≈ **~45 core pages** before content. This is Stripe-scale breadth and matches the offering's depth.

---

## PART E — THE LINK / REUSE GRAPH (every product)

Format: **Product** — *Canonical home* → surfaced/linked from {surface: framing}. Extends the rails' reuse maps to *every* product, per the brief.

### Rails (canonical homes in `/infrastructure/*`)
- **Markets** — *`/infrastructure/markets`* → Credit hub {the venue every borrow happens in} · Yield hub {vaults supply into markets — the supply side} · Multiply {high-LTV correlated-risk loop} · `/solutions/asset-issuers` {your token becomes a market asset — the PRIME $0→$600M path} · RWA DEX {a listed asset needs a market} · Curation {launch your own market} · Institutional Yield + Off-Chain Collateral {these ARE market configs} · BuildKit {markets via SDK}.
- **Scope** — *`/infrastructure/scope`* → Markets {decides what's listable} · Credit/Liquidation {scam-wick protection} · RWA DEX {oracle price = liquidity price, no MM needed} · Routing {reference/fallback pricing} · Yield {NAV & share value} · Multiply {health & liquidation distance} · Institutional Yield {BTC pricing} · Off-Chain Collateral {pairs with proof-of-reserves} · `/solutions/asset-issuers` {first onboarding step is a guarded Scope feed} · Security {oracle security: 8 audits, $19.33B, 0 exploits}.
- **Vault Engine** — *`/infrastructure/vault-engine`* → Yield (Earn/Institutional/Meta) {the engine they ride} · Credit {vaults ARE the lenders; conditional liquidity funds fixed-rate fills} · Curation {what a curator operates} · BuildKit/Embedded Wallets {white-label + auto-deploy} · Multiply {borrows the liquidity vaults supply}.
- **Routing & Execution** — *`/infrastructure/routing`* → Swap {best execution} · Multiply {one-click enter/exit} · Credit {repay/swap-collateral — manage in place} · Liquidation {efficient execution} · `/solutions/asset-issuers` {routing to/from your asset} · BuildKit {swap embed}.
- **Permissioning** — *`/infrastructure/permissioning`* → Permissioned Markets (Credit) · Permissioned Vaults (Yield) · Permissioned Assets (`/solutions/asset-issuers`) · Institutional Yield {KYC at legal + wallet layers} · BuildKit {compliance-grade embeds via whitelist API} · Off-Chain Collateral.
- **Liquidation Engine** — *`/infrastructure/liquidation`* → Credit/Multiply {liquidation distance & soft liquidations} · Markets {liquidation economics params} · Security {$120M+ liquidated, 100k+ events, $0 bad debt} · Scope {maturity/divergence guards}.

### Credit-column products
- **Borrowing** — *`/credit/borrowing`* → Credit hub · `/solutions/individuals` · `/solutions/institutions` · Multiply {the loop borrows} · Markets {the venue}.
- **Fixed Rates** — *`/credit/fixed-rates`* → Credit hub · `/solutions/institutions` {rate certainty} · `/solutions/btc-credit` {rate-locked BTC borrow} · `/solutions/tokenized-asset-credit` {terms} · Vault Engine {conditional liquidity funds it} · RFQ {price discovery / two-sided book}.
- **Multiply** — *`/credit/multiply`* → Credit hub · `/solutions/individuals` · `/solutions/asset-issuers` {as distribution} · `/solutions/tokenized-asset-credit` {leverage} · Routing {one-click} · Markets {correlated-risk group} · Scope {health}.
- **Off-Chain Collateral** — *`/credit/off-chain-collateral`* → Credit hub · `/solutions/institutions` (treasuries/funds) · `/solutions/btc-credit` {custody-preserving} · Markets {a market config} · Permissioning · Scope {+ proof-of-reserves} · Security {Anchorage ACA}.
- **Permissioned Markets** — *`/credit/permissioned-markets`* → Credit hub · Permissioning (canonical mechanism) · `/solutions/institutions` · `/solutions/asset-issuers` · Institutional Yield.

### Liquidity-column products
- **Swap** — *`/liquidity/swap`* → Liquidity hub · Routing (engine) · `/solutions/individuals` · BuildKit {swap embed} · Multiply/Credit {powers debt-swap/repay}.
- **RFQ** — *`/liquidity/rfq`* → Liquidity hub · Swap {best-price solver fills} · `/solutions/curators` & market makers {quote as a solver} · `/solutions/asset-issuers` {how holders move in/out — core issuer offering} · Fixed Rates {two-sided credit book} · Liquidation {RFQ-sourced fills}.
- **RWA DEX** — *`/liquidity/rwa-dex`* → Liquidity hub · `/solutions/asset-issuers` {market-maker-free liquidity for your asset} · Scope {oracle price = liquidity price} · `/solutions/tokenized-asset-credit` {enter/exit/liquidate}.
- **Liquidity Vaults** — *`/liquidity/vaults`* → Liquidity hub · Vault Engine (shared DNA) · `/solutions/individuals` · `/solutions/curators`.
- **Limit Orders** — *`/liquidity/limit-orders`* → Liquidity hub · Swap · RFQ (Limo feeds both) · Credit/Fixed Rates {borrow orders are limit orders for lending}.

### Yield-column products
- **Earn Vaults** — *`/yield/earn`* → Yield hub · `/solutions/individuals` · Curation {every vault has a named curator — the roster is the trust signal} · Vault Engine · Whitelisted Reserves/Insurance Pool (sections).
- **Meta Vaults** — *`/yield/meta-vaults`* → Yield hub · `/solutions/launch-a-fund` {the vehicle} · `/solutions/institutions` (wealth/asset mgrs) · `/solutions/fintechs` · Curation · Vault Engine.
- **Institutional Yield** — *`/yield/institutional`* → Yield hub · `/solutions/institutions` {allocate into regulated transparent yield} · `/solutions/btc-credit` {the depositor side funding it} · Permissioning · Scope {BTC pricing} · Security {attestation/reporting}.
- **Permissioned Vaults** — *`/yield/permissioned-vaults`* → Yield hub · Permissioning (mechanism) · `/solutions/institutions` · `/solutions/launch-a-fund` {gate your investors}.

### Platform-column products
- **Curation Suite** — *`/platform/curation`* → Platform hub · Market Curation (Credit X-link) · Vault Curation (Yield X-link) · `/solutions/curators` (primary audience) · `/solutions/asset-issuers` {curate your asset's market} · Resources {curator roster} · Vault Engine + Markets (what you operate) · Security {go-live quality gate}.
- **BuildKit** — *`/platform/buildkit`* → Platform hub · `/solutions/fintechs` (primary) · `/developers` {SDKs} · Routing/Vault Engine/Permissioning {what you embed} · Embedded Wallets + White-Label (siblings).
- **Institutional Yield API** — *`/platform/institutional-yield-api`* → Platform hub · `/solutions/fintechs` · Institutional Yield (the product it packages) · `/developers`.
- **Embedded Wallets** — *`/platform/embedded-wallets`* → Platform hub · `/solutions/fintechs` · Earn/Institutional Yield {balances auto-deploy} · Vault Engine.
- **White-Label Vaults** — *`/platform/white-label`* → Platform hub · `/solutions/fintechs` · `/solutions/curators` {the Curation↔Build seam} · Curation · Vault Engine.

### Consumer
- **Kamino App** — *`/app`* → Products menu featured tile (Launch App / Learn more) · `/solutions/individuals` {same story, audience-framed} · every consumer-relevant deep page links "Open in app."

---

## PART F — SOLUTIONS PAGES (what each composes + links into)

Built on A6: lead with outcome + metric, products as enablers in prose with deep links, end on a proof story. Each page is **curation, not re-explanation** — it links into the canonical product/infra pages.

### F1. By-who (audience) — 5

**`/solutions/institutions`** — *Outcome:* "Allocate, borrow, and manage treasury with rate certainty and full transparency." Three domains (Stripe `/enterprise` model): **Allocate** (→ Institutional Yield, Meta Vaults, Earn) · **Borrow & lever** (→ Fixed Rates, Multiply, Off-Chain Collateral) · **Operate** (→ Permissioned Markets/Vaults, Security, the dashboards). Sub-segment ribbons: wealth & asset managers / funds & trading firms / treasuries & corporates. Proof: FalconX, Pantera, Swiss banks. CTA: Contact sales.

**`/solutions/asset-issuers`** — *Outcome:* "Make your tokenized asset usable as collateral, tradable with oracle-priced liquidity, and distributed — fully compliant." Composes Scope (price it — the gate) → Markets (instant collateral) → RWA DEX + RFQ (liquidity, no MM) → Permissioned Assets (compliance) → Curation (stand it up) → Multiply (distribution). Proof: PRIME ($0→$600M / $1B RWA deposits), Maple, OnRe, Ethena, xStocks. CTA: Contact sales.

**`/solutions/fintechs`** — *Outcome:* "Ship compliant yield, credit, and swap to your users without building a protocol." Composes BuildKit, Institutional Yield API, Embedded Wallets, White-Label Vaults; Permissioning {your onboarding is the gate}; Routing {swap embed}. Routes engineers to `/developers`. Proof: OneKey, Marinade, Phantom, YieldBay. CTA: Contact sales + Read the docs.

**`/solutions/curators`** — *Outcome:* "Operate credit and yield venues on audited rails with built-in demand." Composes Curation Suite (primary), Markets, Vault Engine, Insurance Pool, Risk/Security. Two planes explained. Proof: Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Galaxy. CTA: Apply to curate + Contact sales.

**`/solutions/individuals`** — *Outcome:* "Professional-grade earn, borrow, multiply, and swap — self-serve." Composes Earn, Borrowing, Multiply, Swap; trust via curator roster + Security. This is the *audience-framed twin* of `/app`. CTA: Launch App.

### F2. By-job (use-case) — 4

**`/solutions/tokenized-asset-credit`** — *Job:* extend or access credit against any tokenized asset. Composes Scope → Markets → Fixed Rates / Off-Chain Collateral → RWA DEX + RFQ → Permissioned Assets → Curation → Multiply. Cuts across issuers, institutions, curators.

**`/solutions/btc-credit`** — *Job:* borrow against BTC without selling. Composes Off-Chain Collateral, the BTC market, Fixed Rates, Scope, Institutional Yield (supply side), Security. Cuts across treasuries, funds, individuals, allocators.

**`/solutions/launch-a-fund`** — *Job:* create, run, and integrate a multi-strategy vehicle with reporting out of the box. Composes Meta Vaults, Curation Suite, Vault Engine, Permissioned Vaults, BuildKit + Portfolio/data APIs, White-Label, Security. Cuts across wealth/asset managers, curators, fintechs.

**`/solutions/embedded-yield`** *(I'm adding this — H5)* — *Job:* put a yield-bearing balance inside your own app. Composes Institutional Yield API, Embedded Wallets, BuildKit, Vault Engine, Permissioning. The cleanest fintech-shaped job and a strong Stripe-"Embedded finance" analog (A5). Cuts across fintechs, neobanks, exchanges.

### F3. By-asset-class (latent third axis) — proposed
Per A5, this is Kamino's "industries." Ship `/solutions/rwa`, `/solutions/bitcoin`, `/solutions/tokenized-equities`, `/solutions/stablecoins`, `/solutions/lsts` once each has real depth; until then list under a Solutions "More" row (A2's "More" catch-all pattern).

---

## PART G — RATIONALE (key decisions, with verified Stripe citations)

1. **Four product columns, not three (+ rails surfaced).** Stripe's canonical taxonomy is four buckets including a delivery-shaped one (Prebuilt Components), and it cross-lists infrastructure (Radar, Connect) into buyer buckets. (docs.stripe.com; stripe.com/radar; stripe.com/connect.) Kamino's Platform column is the faithful translation — it houses the two-sided platform products *and* surfaces the rails one click deep.
2. **Rails get deep moat-framed pages AND menu presence.** Radar is sold on its network; Connect on its abstraction. (stripe.com/radar, stripe.com/connect.) Scope (the RWA moat) and Markets ("markets are the platform") are exactly this kind of asset and must be sold the same way, in the menu.
3. **Hubs are clickable launchpads.** Every hub heading links to a real overview page with hub→spoke into deep pages, mirroring `/billing` → `/billing/subscriptions` etc. (stripe.com/billing, stripe.com/payments.) No dead labels.
4. **Solutions = by-who + by-job (+ latent by-asset-class).** Direct from Stripe's three-axis Solutions menu. (stripe.com.)
5. **Audience/use-case pages lead with outcomes and numbers, compose products as enablers in prose, end on proof.** From `/enterprise` (domain + metric structure) and `/use-cases/saas` (functional clusters, consolidation stories). (stripe.com/enterprise, stripe.com/use-cases/saas.)
6. **Developers menu stays thin; the embed story moves out of it.** Stripe's Developers menu is docs/API/SDK/status/changelog; its *embed/components* story lives in a product bucket + Solutions, not Developers. (stripe.com, docs.stripe.com.) So BuildKit/Embedded Wallets/White-Label belong in Products→Platform, with `/solutions/fintechs` carrying the narrative.
7. **Cross-listing is a feature, not duplication.** Market Curation (Credit) and Vault Curation (Yield) are X-links to one canonical Curation Suite page — exactly how Radar appears under Payments while living on `/radar`. (docs.stripe.com.)
8. **Featured menu tiles.** The Kamino App + Platform tiles in the menu's featured rail follow Stripe's promoted-content-in-menu pattern. (stripe.com.)

---

## PART H — WHERE I CHALLENGE THE CURRENT MAP (divergences, argued)

**H1. Security earns a top-level nav slot — a deliberate deviation from Stripe.** Stripe keeps trust in the footer/Resources (A1). Kamino should not. Stripe sells convenience to developers; Kamino sells *custody of institutional capital* to regulated allocators, and "20 audits / 4 formal verifications / 3 years / $0 bad debt / live multisig + oracle dashboards" is the single most decisive thing a CIO checks. Burying it one level down on a capital-markets protocol is malpractice. This is the rare case where copying Stripe is wrong.

**H2. Rename "Yield Suite" → "Yield."** "Suite" is a vendor-y, internal word; Stripe never names a bucket "Suite" (Payments, Billing, not "Payments Suite"). One-word parallelism with Credit and Liquidity is cleaner and reads as a peer capability.

**H3. No top-level Pricing tab; a `/pricing` page reached from Resources/footer instead.** Stripe surfaces Pricing top-level because it has per-transaction/per-seat prices a buyer comparison-shops (A8). Kamino's model is take-rate + curator fees with no SaaS price list — there's nothing to comparison-shop in the nav. A top-level Pricing tab would open onto an explanation, not a price table, which underdelivers on the click. Keep a real `/pricing` page (the commercial-model explainer, including the take-rate vs platform-fee decision), linked from hubs' pricing sections and the footer.

**H4. Add the Platform hub + column — the map's biggest gap.** The current map scatters the two-sided-platform story: Curation in Yield/Credit, Build in Developers, white-label "the seam" with no home. Stripe gives multi-party infrastructure its own front door (Connect) and a components bucket (Prebuilt Components). (stripe.com/connect; docs.stripe.com.) Kamino's "operate-on (Curation) + embed-into (Build), white-label is the seam" is *the* platform thesis and deserves one coherent hub, not three half-homes.

**H5. Add a fourth use-case page now: `/solutions/embedded-yield`.** The map flags "embed yield in your app" as a future mine; it's actually the highest-conversion fintech job and maps 1:1 to Stripe's "Embedded finance" use case (A5). Building it in Round 1 also forces the Platform column to prove it composes. Pull it forward.

**H6. Name "Meta-Vaults" → propose "Portfolios" (or "Composed Vaults").** "Meta-Vaults" is engine-language. The buyer-facing job is "a managed multi-strategy fund in a box." Stripe names by buyer job (Billing, not "Recurring Engine"). "Portfolios" reads to a wealth manager; "Meta Vaults" reads to a protocol engineer. Flagging for the naming decision the map already opened.

**H7. The "More" / by-asset-class catch-all.** The map has no plan for the next batch of use-cases/segments. Stripe uses a "More" catch-all and an industries axis (A2, A5). Adopt both: a Solutions "More" row now, graduating to a full by-asset-class column when ≥3 pages have depth. Prevents the menu from either bloating or going stale.

**H8. "Products vs infrastructure — infrastructure stays out of the menu" is the one principle I'd overturn.** It's elegant and it's wrong by Stripe's own example. Sophisticated buyers shop for infrastructure; Radar and Connect prove it. Keep the *visual hierarchy* (rails subordinate, under a rule line, in the Platform column) so buyer columns still lead — but put the rails in the menu. Scope is the moat; do not hide the moat.

---

## PART I — FOOTER (completes the IA, Stripe A1 pattern)

- **Products** — Credit · Liquidity · Yield · Platform · the rails (Markets, Scope, Vault Engine, Routing, Permissioning, Liquidation) · Kamino App
- **Solutions** — Institutions · Asset issuers · Fintechs · Curators · Individuals · (use-cases) · (asset-class, when live)
- **Developers** — Docs · API reference · SDKs · Status · Changelog · Developer blog
- **Security** — Overview · multisig.kamino.fi · oracles.kamino.fi · Audits · Bug bounty
- **Resources** — Customer stories · Blog · Research & risk reports · Guides · Curator roster · Brand
- **Company** — About · Careers · Press · Contact sales · Terms · Privacy · Sitemap
- **Token/KMNO** — out of scope per the map.
