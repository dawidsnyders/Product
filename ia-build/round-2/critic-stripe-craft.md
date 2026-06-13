# Round 2 — Critic: Stripe-Craft / IA Integrity

**Stance:** I judge by best-in-class IA practice and internal consistency, and I refuse to take any Stripe claim on faith. Below, every Stripe assertion is checked against the live site (fetched 2026-06-13, URLs cited). Then I cross-examine the three Round-1 drafts and hand down a decisive call on each of the 11 questions.

The headline finding: **the offering-map's founding principle — "infrastructure stays out of the mega menu" — is contradicted by Stripe's own live site, and all three drafts half-saw this.** Agent 2 saw it clearly and built on it; Agent 1 reached the same place by a different (institutional) road; Agent 3 defended the map and is wrong on this specific point. I side with surfacing infra, but I discipline *how* the other two did it.

---

## PART 1 — STRIPE GROUND TRUTH (what I actually verified)

I am doing this because the brief says the team has been burned by memory-based Stripe claims, and because the three drafts disagree about Stripe in ways that change decisions. Here is what the live site says.

### Verified TRUE

**V1. Top nav = six items, exactly.** `stripe.com`: **Products · Solutions · Developers · Resources · Pricing · Guide me**, plus **Sign in**, plus two CTAs **Start now** + **Contact sales**. No "Company", no "Security", no "About" in the primary row. (Verified: stripe.com.)
→ Agent 2's A1 and Agent 3's intro are both correct. Agent 1's claim that the nav should *lead with Solutions* is a divergence from Stripe, not a description of it — Stripe leads with **Products**.

**V2. The canonical product taxonomy is FOUR buckets, and infra is cross-listed into buyer buckets.** `docs.stripe.com` groups products as:
- **Payments** — Payments, Managed Payments, Terminal, **Connect**, **Radar**, Climate, **Identity**, Financial Connections, Crypto
- **Revenue** — Billing, Tax, Revenue Recognition, Sigma, Data Pipeline, Atlas
- **Money management** — Issuing, Treasury, Capital
- **Prebuilt components** — Payment Links, Checkout, Elements

(Verified: docs.stripe.com.) This is the single most decisive fact in the whole exercise. **Radar (fraud), Connect (multi-party money movement), and Identity (KYC) are pure infrastructure, and Stripe files all three INSIDE Payments — the buyer bucket — not in a quarantined "infrastructure" area.** Agent 2's A2 is verified verbatim, including the existence of a delivery-shaped **Prebuilt components** bucket.

**V3. Infra products get full, moat-framed deep pages.** `stripe.com/radar` headline: **"Fight fraud with the strength of the Stripe network"** — sold on the network effect ("92% chance a card has been seen before", AI on $1T+ volume). `stripe.com/connect`: **"The market leader for platform and marketplace payments"** — sold on the embed/abstraction story, 16,000+ platforms. Both are framed as integrated infrastructure with their own marketing pages. (Verified: stripe.com/radar, stripe.com/connect.)

**V4. Hubs are clickable launchpads with real hub→spoke.** `stripe.com/payments` is a clickable overview with section headings (Online Payments, Global Payments, In-Person Payments, Payments Intelligence Suite, Unified Platform), each with Learn-more links into deeper pages, and it cross-references Radar and Connect as part of the payments story. (Verified: stripe.com/payments.) No dead labels.

**V5. Audience/use-case pages lead with a metric, products inline in prose.** `stripe.com/enterprise` organizes by domain — **Global Payments ("Grow revenue by 11.9%"), Platform Payments & Embedded Finance ("+10% incremental profit"), Revenue & Finance Automation ("recover up to 38% of failed payments"), Authorization Optimization ("+2.2%")** — each leading with a number, products referenced inline as links, not tiles. `stripe.com/use-cases/saas` leads with an outcome and clusters products around jobs ("Capture more revenue", "Reduce engineering effort"), closing with consolidation case studies (Slack, Twilio, Typeform, WeTransfer). (Verified: stripe.com/enterprise, stripe.com/use-cases/saas.)

**V6. Solutions is multi-axis.** The footer/menu surfaces by-segment (**Enterprises, Startups, Platforms**), by-use-case (**Ecommerce, Embedded finance, Marketplaces, SaaS, AI / Agentic commerce, Crypto**), and verticals (**Insurance, Hospitality, Media, Nonprofits, Public sector, Retail** appear across the site). (Verified: stripe.com footer + stripe.com/enterprise "Use Cases" + "Resources".) So Stripe does run **by-who + by-job + by-industry**. Agent 2's A5 is substantially correct.

**V7. Pricing is top-level at Stripe.** Confirmed in V1. (Verified: stripe.com.)

### Verified FALSE / corrected

**F1. The mega-menu COLUMN layout is NOT verifiable from static HTML.** The Products and Solutions dropdowns are JS-rendered; the fetched HTML does not expose their column structure. **Agent 3 was the only draft honest about this** ("the deep mega-menu column structure is JS-rendered and not exposed in static HTML, so I do not assert it from memory"). Agents 1 and 2 both describe Stripe's *menu* column structure with a confidence the static page does not support. The *docs taxonomy* (V2) is real and fetchable; the claim that the marketing **mega menu** renders those four buckets as four columns is an inference, not a verified fact. It is a *reasonable* inference — but it should be labeled as such. **Net: the four-bucket taxonomy is solid ground; "Stripe's mega menu has four columns" is an educated extrapolation.**

**F2. "Stripe's Developers MENU is thin."** Partially false as stated. The marketing-header Developers item is indeed a compact set of links, but `docs.stripe.com/development` is a *thick* developer surface (SDKs, CLI, Workbench, Workflows, AI agent toolkit, MCP, Apps, extensibility). Agent 2's A7 ("thin set of links") conflates the marketing menu with the docs site. The correct, defensible statement: **the marketing-header Developers menu is thin; the docs destination it points to is deep.** This nuance matters for decision 4 (BuildKit's home) — see below.

**F3. `stripe.com/solutions` as a single page.** Does not resolve (404). Stripe routes Solutions to segment/use-case/industry sub-pages (`/enterprise`, `/use-cases/saas`, etc.), not one `/solutions` index. Minor, but a reminder that "Solutions" is a *menu*, not a page, at Stripe — relevant to anyone planning a `/solutions/*` URL tree (Agent 2 and Agent 3 both use `/solutions/*`; that's fine as a URL convention, just don't expect a Stripe-style `/solutions` landing).

**Bottom line of Part 1:** The drafts that lean hardest on Stripe (1 and 2) are *directionally right on the load-bearing fact* (infra is cross-listed into buyer buckets, V2/V3) but *over-confident on the un-fetchable menu geometry* (F1). Agent 3 is the most epistemically honest about Stripe but draws the wrong conclusion from its own caution — it uses "we can't see the menu" to justify keeping the map's no-infra rule, when the *docs taxonomy we CAN see* directly argues the opposite.

---

## PART 2 — CROSS-EXAMINATION OF THE THREE DRAFTS

### The central disagreement: infra in the menu?
- **Offering-map / Agent 3:** infra stays OUT of the mega menu; newcomers shop outcomes, evaluators drill into `/infrastructure/*` and a `/how-it-works` index.
- **Agent 1:** add an **Infrastructure column** (5 rails + Liquidations) to a renamed **Platform** menu; the moat IS the product to an institution.
- **Agent 2:** add a **Platform column** that fuses the two-sided-platform products (Curation, BuildKit, embed) WITH the rails, surfaced under a rule line.

The tiebreaker is V2/V3, and it is decisive: **Stripe — the literal craft benchmark this whole exercise is calibrated against — puts pure infrastructure (Radar, Connect, Identity) inside its buyer-facing Products taxonomy and gives each a moat-framed deep page.** Agent 3's "newcomers shop outcomes, not engines" is true for *retail* newcomers and false for the institutional evaluator who is the stated primary buyer ("we can walk into any institution… our infrastructure will support it"). An asset manager's first three questions are *what's your oracle, what's your liquidation record, who can I gate* — those are Scope, Liquidations, Permissioning. Hiding the moat behind a `/how-it-works` link buries the strongest card. **Agent 3 loses this one.**

But Agent 1 and Agent 2 both over-stuff. Agent 1's Platform menu is **five columns** (3 hubs + Infrastructure + App tile) with a six-item Infrastructure list — that is a wall of engine names that re-creates exactly the "learn the org chart before you navigate" failure Agent 3 rightly warns about. Agent 2's is cleaner (rails visually subordinate under a rule line) but still merges *delivery products* (BuildKit, embed) and *rails* (Scope, Routing) into one "Platform" column, which muddies two genuinely different things.

**My synthesis (the IA-integrity answer):** keep three capability hubs as the spine, add a **fourth column** that is the Stripe "Prebuilt components" analog — the build/embed/operate products (Curation, BuildKit, Institutional Yield API, Embedded Wallets, White-Label) — and surface the **rails as a quiet, subordinate sub-list under a rule line within that fourth column**, capped at the few that are actually buying decisions (Scope, Permissioning, Liquidations, Markets). Routing and Vault Engine get deep pages but are surfaced *inside* hubs (Trade/Yield) rather than listed in the menu — they're engines a buyer rarely shops by name. This gives Agent 2's structure with Agent 3's restraint.

### Naming: verbs vs nouns
Agent 3 (Borrow/Earn/Trade) vs Agents 1, 2, and the map (Credit/Liquidity/Yield). This is the cleanest head-to-head. Agent 3's comprehension case is strong for retail; the institutional case for nouns is strong for the primary buyer. The IA-integrity tiebreaker: **Stripe names its buckets by the financial noun/function the buyer's domain uses — "Payments", "Billing", "Revenue", "Money management" — not by retail verbs ("Pay", "Bill", "Earn").** Stripe trusts its buyer to know the vocabulary of their own field. A capital-markets buyer knows "Credit", "Liquidity", "Yield". So nouns win on Stripe-craft grounds — **with one concession to Agent 3 that is independently correct: kill "Suite".** Stripe has no "Payments Suite". See decision 1.

### The strongest cross-draft agreements (treat as settled)
All three independently land on: **(a) Security as a top-level item** (a deliberate, correct deviation from Stripe — V1 shows Stripe does NOT do this, but all three argue capital-markets trust is the exception, and I agree); **(b) Permissioning gets its own canonical page**, not a section of Markets; **(c) rename "Meta-Vaults"**; **(d) 5 by-who audiences**; **(e) App as a featured tile + persistent Launch App**; **(f) no top-level Pricing.** Where three independent analysts converge, the burden of proof is on overturning them. I overturn none of these.

---

## PART 3 — DECISIVE RECOMMENDATIONS (11)

### 1. Hub naming — verbs vs nouns; drop "Suite"; debrand?
**KEEP NOUNS: Credit · Liquidity · Yield. DROP "Suite". Debrand to bare generics only where unambiguous.** Stripe names buckets by the buyer's domain function (Payments, Billing, Money management), trusting the buyer's literacy; the primary buyer here is institutional and fluent in credit/liquidity/yield, so retail verbs would talk down to them and under-sell the capital-markets thesis. "Suite" has no Stripe precedent and reads as vendor-speak — cut it. Carry Agent 3's comprehension fix *inside* the pages (lead every hub with a plain-language subtitle), not in the nav label.

### 2. Infrastructure visibility in Products
**SURFACE IT — infra belongs in the menu, subordinate, capped at the rails that are buying decisions (Scope · Permissioning · Liquidations · Markets).** Verified live: Stripe files Radar, Connect, and Identity — all pure infrastructure — *inside* the Payments product bucket, each with a moat-framed deep page (radar = network, connect = abstraction). The offering-map's "infra out of the menu" rule fails the exact craft benchmark it cites. Keep it visually quiet (under a rule line, smaller) so buyer columns lead, but do not hide Scope — Scope is the RWA moat.

### 3. A "Platform" grouping in Products — yes/no + contents
**YES — a fourth column, but scoped as the Stripe "Prebuilt components" analog: the build/embed/operate products. Contents: Curation Suite · BuildKit · Institutional Yield API · Embedded Wallets · White-Label Vaults.** Then, under a rule line in that same column, the surfaced rails from decision 2. This is verified Stripe practice (V2: a delivery-shaped fourth bucket exists). Reject Agent 1's five-column / six-rail Platform menu as overstuffed; reject the map's burying BuildKit in Developers (see 4).

### 4. BuildKit / embed home — Developers vs Products→Platform
**PRODUCTS → PLATFORM column, with the narrative carried by `/solutions/fintechs`; Developers stays thin in the marketing header.** Verified: Stripe homes its embed/components story in the **Prebuilt components product bucket** and on Solutions (Embedded finance), NOT in the Developers menu. Correction to Agent 2's overreach: the marketing-header Developers menu is thin, but the *docs site it links to is thick* (SDKs, CLI, Workbench, MCP) — so "thin Developers" applies to the header link only. BuildKit is a product a fintech *shops for*; it earns a product slot, not a docs link.

### 5. Top nav — set, order, Products vs Platform, Resources, Pricing, Security
**Set & order: Products · Solutions · Developers · Security · Resources + [Launch App] [Contact sales].** Keep the menu labeled **Products** (not "Platform") — Stripe labels its catalog "Products" (V1); "Platform" is a column inside it, not the menu name (rejects Agent 1's rename). **Products-FIRST, not Solutions-first** — Stripe leads with Products (V1); Agent 1's Solutions-first is a real divergence, and for a buyer who must first believe the *infrastructure is real* before they care which solution fits them, the catalog-first order is also the better trust sequence. **Security top-level: YES** (all three agree; correct deviation from Stripe). **Pricing top-level: NO** — Stripe surfaces Pricing because it has comparable per-unit prices; Kamino's take-rate/curator-fee model has nothing to comparison-shop, so a Pricing tab would underdeliver on the click (a `/pricing` explainer lives in Resources/footer). **Resources: YES, keep it** — siding with Agent 2 over Agent 3: a capital-markets buyer runs on research, risk reports, customer stories, and the curator roster; that is a real content axis Stripe dedicates a slot to (V1), and scattering it into Company/Developers (Agent 3's plan) creates the "where do I find the risk report?" problem. Company lives in Resources + footer.

### 6. Permissioning — own canonical page?
**YES — its own canonical page (`/infrastructure/permissioning`, public-label "Permissioning / Access Control").** Unanimous across all three drafts, and correct on IA grounds: Permissioning spans markets, vaults, AND assets; folding it into Markets would orphan its vault and embed expressions and split the "open ↔ gated, reverses instantly" story across two engines. One page owns access control; Permissioned Markets and Permissioned Vaults are its productized expressions and link back to it.

### 7. Use-case pages — how many & which?
**FOUR at launch: Offer credit against tokenized assets · Borrow against BTC · Launch a managed fund · Embed yield in your app.** The map's 3 plus Agent 2's added "embedded-yield" — which is the highest-conversion fintech job and maps 1:1 to Stripe's verified "Embedded finance" use case (V6), and building it forces the Platform column to prove it composes. Reject Agent 1's jump to 6: "List & finance an asset" is a near-twin of "Offer credit against tokenized assets" (Agent 1 admits this) and "Earn on idle treasury" is a thin slice of Institutional Yield — both are audience-page sections, not standalone pages yet. Stripe ships use-case pages only when each has real depth (V5); ship the 4 that do, mine the rest.

### 8. Meta-Vaults rename
**RENAME to "Managed Vaults".** All three agree the engine-word "Meta" must go. Agent 3's "Managed Portfolios" and Agent 2's "Portfolios" both describe the buyer job well, but "Portfolios" collides with the wallet/positions "portfolio" concept (and there's a Portfolio API in the inventory) — a real IA naming collision. "Managed Vaults" keeps the product inside the verified "Vaults" family (Earn Vaults, Permissioned Vaults, Liquidity Vaults), reads to a wealth manager as a managed multi-strategy vehicle, and avoids the portfolio-overload. Subtitle on-page: "multi-strategy fund vaults".

### 9. Solutions axes — by-who + by-job + by-industry/asset?
**THREE axes, phased: by-who + by-job NOW; by-asset-class as the third axis WHEN ≥3 pages have real depth.** Verified: Stripe runs all three (by-segment + by-use-case + by-industry, V6). Kamino's "industry" analog is asset class (RWA / BTC / tokenized equities / stablecoins / LSTs). Build it the way Stripe does — graduate it to a full axis only when populated; until then a "More" row. Adopt Agent 3's explicit literal headings ("By who you are" / "By what you want to do") — that is a genuine comprehension upgrade Stripe's implicit split lacks, and it costs nothing.

### 10. App tile placement & consumer surfacing
**KEEP the App as a featured tile in the Products menu (placed in the featured rail, reading-order LAST among the columns) + persistent [Launch App] CTA + a `/solutions/individuals` audience-framed page that links to a `/app` product-framed page.** All three converge here. Agent 1's "place it rightmost so reading order is hubs → moat → app" is the right call for the institutional thesis. The consumer app is a genuine differentiator from Stripe (Stripe has no consumer surface) — show it, but don't let it lead the institutional menu.

### 11. Other naming — RFQ, RWA DEX / "RWA Liquidity", Curation, Multiply
- **RFQ →** keep "RFQ" as the product name, lead the label with plain meaning: **"Instant Quotes (RFQ)"** (Agent 3's bridge pattern — pros search the acronym, newcomers get the meaning). 
- **RWA DEX →** rename to **"RWA Liquidity"** for the public label (Agent 1/Agent 3 instinct), keep "oracle-priced, market-maker-free" as the one-liner; "DEX" is retail-DeFi-coded and undersells the institutional liquidity story. 
- **Curation →** keep "Curation Suite" as the product name inside, but the menu/cross-link label is the verb job: **"Run a market / Run a vault"** resolving to one `/curation` page (Agent 3's fix — a fintech doesn't think "I want to curate"). Mark cross-listed appearances with a glyph so repetition doesn't read as broken (Agent 3's ↗ device — adopt it).
- **Multiply →** **keep "Multiply"** as-is; it's an owned, recognizable brand term, home under Credit, cross-referenced (not duplicated) in Trade for execution. No change.

---

## PART 4 — THE ONE DECISION I HOLD STRONGEST (hill to die on)

**Decision 2: surface the infrastructure rails in the Products menu — Scope above all.**

This is the hill because it is the one place where the founding document (the offering-map) and one full draft (Agent 3) are *provably wrong against the exact benchmark the whole exercise invokes.* The map's rule — "infrastructure stays out of the mega menu" — is asserted as Stripe-like discipline. It is the opposite. I fetched it live: **Radar, Connect, and Identity are pure infrastructure and Stripe files all three inside the Payments product bucket, each with a full moat-framed deep page** (docs.stripe.com; stripe.com/radar; stripe.com/connect). Sophisticated buyers shop for infrastructure — that is *why* Radar leads with its network and Connect with its abstraction. Kamino's primary buyer is an institution underwriting Kamino's safety as a precondition to allocating capital; for them, Scope (the oracle that decides what can even be priced and lent — "the moat under the RWA strategy", per the map's own words) and Permissioning and the $0-bad-debt liquidation record ARE the product. Keeping them out of the menu hides the single strongest reason a regulated allocator transacts. I will concede every styling argument — keep them subordinate, under a rule line, capped to the four that are buying decisions — but the rails go in the menu, and Scope is not hidden. Everything else in this critique I would trade; this one is load-bearing for the entire institutional thesis.

---

## APPENDIX — Stripe URLs verified (2026-06-13)
- stripe.com — top nav (6 items + Sign in + Start now + Contact sales); no Security/Company top-level
- docs.stripe.com — 4-bucket taxonomy; Connect/Radar/Identity under Payments; "Money management" + "Prebuilt components" buckets confirmed
- stripe.com/radar — "Fight fraud with the strength of the Stripe network"; infra, moat = network
- stripe.com/connect — "The market leader for platform and marketplace payments"; infra, moat = embed/abstraction
- stripe.com/payments — clickable hub; section headings + Learn-more links; cross-refs Radar/Connect
- stripe.com/enterprise — domains each lead with a metric (11.9% / 10% / 38% / 2.2%); products inline in prose, not tiles
- stripe.com/use-cases/saas — leads with outcome, clusters by job, closes on case studies (Slack, Twilio, Typeform, WeTransfer)
- docs.stripe.com/development — developer surface is THICK (SDKs, CLI, Workbench, MCP, Apps); corrects "thin Developers" overreach (marketing header is thin; docs are deep)
- stripe.com/solutions — 404 (Solutions is a menu, not a page; routes to /enterprise, /use-cases/*)
