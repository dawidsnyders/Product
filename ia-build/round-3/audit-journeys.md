# Round 3 — Adversarial Journey Audit

*Stress-testing the finalized IA (`site-ia.md`) against real buyer journeys and the Stripe quality bar. I am not re-litigating the eleven settled debates (infra-out-of-menu, capability nouns, Products-first, App-tile-leads) — those are locked and I treat them as fixed. My job is to walk every audience and use-case through the site cold and find where the finalized structure stalls, confuses, dead-ends, or falls short of best-in-class B2B IA.*

**Stripe ground truth (verified live 2026-06-13 via WebFetch, this round):**
- Top nav: Products · Solutions · Developers · Resources · Pricing · Sign in, plus a persistent **Contact sales** in the header and a **Start now** CTA. (stripe.com)
- Solutions is genuinely multi-axis: **By business stage** (Enterprises, Startups), **By use case** (Ecommerce, Embedded finance, Platforms, SaaS, Crypto, Agentic commerce, Creator economy), **By industry** (Retail, Hospitality, Insurance, Media, Nonprofits, Public sector). (stripe.com)
- Customer proof is heavily surfaced: homepage carousels and "Powering businesses of all sizes" with named case studies (Hertz, URBN, Instacart, Le Monde) and quantified metrics; a dedicated `/customers` hub ("See all stories") filterable **by company size, by use case, by solution**, with metrics like "$70M increase in Postmates' revenue." The customers hub is linked from the footer "Learn" cluster. (stripe.com, stripe.com/customers)

These verified facts anchor the P0/P1 craft gaps below.

---

## How to read this

Severity is about conversion damage, not polish:
- **P0** — a journey breaks, a buyer cannot self-route, or a load-bearing conversion/diligence surface is missing. Must fix before lock.
- **P1** — a journey works but loses or confuses a meaningful share of the target buyer; a clear gap against the Stripe bar. Fix before lock if possible.
- **P2** — refinement that raises quality but does not break a journey.

---

# P0 — Must fix before lock

## P0-1 · "Contact sales" has no destination, and Company buries the sales path
**Location:** Part 2 (top nav, the `[Contact sales]` CTA); Part 5 (Company → "contact / sales"); Part 7 (Company → "Contact/Sales").

The single most important institutional conversion action — *talk to a human* — is a persistent header CTA, but the IA never says what page it lands on. The only sales surface named anywhere is "Contact/Sales" filed *inside* Company alongside About/Careers/Governance. That is the lowest-intent corner of the site for the highest-intent action.

Every institutional journey below (wealth manager, fund, treasury, issuer, fintech) terminates in "Contact sales," and right now that terminus is undefined. A buyer who has spent five minutes convincing themselves on the Institutions page clicks the header CTA and the IA cannot tell them where they go.

**Concrete fix:** Define a first-class **`/contact-sales`** page (or `/sales`) as an explicit node in Part 7, owned at the top level and reachable from (a) the header CTA, (b) the bottom of every audience page, (c) the bottom of every use-case page, (d) the Institutions page hero, (e) Security. Spec what it contains: segment selector (which of the five audiences), the white-glove pitch, qualification fields, expected response motion. Keep a thin "Contact" link in Company for general inquiries, but the *sales* motion must not live in Company. Stripe runs Contact sales as a persistent top-of-funnel destination, not a Company sub-item — match that.

## P0-2 · No customer-proof surface in the conversion path — case studies are exiled to Resources
**Location:** Part 5 (Resources → "customer stories / case studies"); Part 7 (Resources → "Customer stories"); absent from Parts 9–10 (audience and use-case compositions).

The offering map is dense with marquee proof: PRIME/Figure ($1B+ RWA), FalconX, Pantera, Anchorage, Securitize, Centrifuge, the curator roster (Gauntlet, Steakhouse, Galaxy), Marinade, Phantom, OneKey. None of it appears in the IA's conversion surfaces. Customer stories are filed once, in Resources, and the audience/use-case page compositions (Parts 9–10) list only products and infrastructure — zero proof points.

For a buyer underwriting custody of institutional capital, *who already trusts you* is a top-three diligence question, and it is currently a footer-tier afterthought. This is the largest single gap against the Stripe bar: Stripe puts named, quantified case studies on the homepage, on enterprise/use-case pages inline, and in a filterable `/customers` hub. The finalized IA has the proof and hides it.

**Concrete fix:** Three coordinated changes. (1) Make **Customer stories** a real hub (`/customers`), filterable by audience and by use-case, with quantified outcomes (the PRIME $0→$1B path, FalconX fixed-rate borrow, etc.) — promote it out of the Resources bullet list into a named destination in Part 7. (2) Add a **proof band** to every audience page composition in Part 9 (e.g. Institutions surfaces FalconX/Pantera/Anchorage; Asset issuers surfaces PRIME/Maple/OnRe; Curators surfaces the roster; Fintechs surfaces Marinade/Phantom/OneKey). (3) Add the relevant case study to each use-case page in Part 10 (BTC-backed credit → the FalconX/treasury story; launch-a-managed-fund → a curator story). Specify this in the IA so the build doesn't ship proof-free pages.

## P0-3 · The Institutions journey lands on a three-headed page with no disambiguation door
**Location:** Part 4 (Solutions menu, "Institutions" with three indented sub-segments); Part 9 (Institutions composition).

Three very different buyers enter through one "Institutions" door: a **wealth/asset manager** (wants to allocate into yield and offer products to clients), a **fund/trading firm** (wants to borrow, leverage, get rate certainty), and a **treasury/corporate** (wants liquidity without selling, conservative). Their jobs barely overlap. The IA says "Sub-segment views tune the emphasis" but never says whether those are three real pages/anchors or just paragraphs on one scroll.

If a CFO of a corporate treasury clicks "Institutions" and lands on a page that opens with leveraged trading and managed-fund issuance, the page is reading to two other people and the treasury buyer bounces. The composition in Part 9 is a single undifferentiated pile of eight products. That is the opposite of self-routing.

**Concrete fix:** Make the three sub-segments **first-class destinations** — either three distinct pages (`/institutions/wealth-managers`, `/institutions/funds`, `/institutions/treasuries`) or a single page with three hard-anchored, independently-linkable sections, each with its own hero, its own three-to-four product pulls, its own proof, and its own CTA. The Solutions menu sub-items must deep-link to the right section/page, not dump everyone at the top. Specify in Part 9 which products and which proof each sub-segment leads with, so the three jobs don't blur.

## P0-4 · "Find your path" picker is named but never specified — and it's the only safety net for the cold visitor
**Location:** Part 4 (Solutions menu, "[ Find your path → ] guided picker"); Part 12 decision 9.

The IA leans on the guided picker as "the anti-bounce element for the cold visitor who isn't sure which door is theirs." It is the designated catch-all for the newcomer journey (audit item 3) and for any buyer who doesn't see themselves in the five audience labels. But it exists only as a button label. No inputs, no branching logic, no destinations, no fallback. An unspecified picker is an unbuilt picker, and if it ships as a dead link or a generic contact form, the cold-visitor safety net is gone and those visitors bounce off the homepage.

**Concrete fix:** Specify the picker as a real flow in Part 4 (or a dedicated sub-section): the 2–3 questions it asks (who are you / what do you want to do / what asset), the routing table from answers → audience or use-case page, and the fallback when no clean match exists (route to the Institutions page or Contact sales, never a dead end). If it cannot be specified and built to quality for launch, cut it from the locked IA and rely on clear audience labels — a missing picker is safer than a broken one.

## P0-5 · The newcomer's "what is Kamino" moment has no home — homepage is a stub
**Location:** Part 7 ("Homepage + footer" — one line); Part 5 (Security also hosts "How Kamino works / Why Kamino").

The entire newcomer journey (audit item 3) hinges on the homepage answering *what is this / what does it offer / who is it for* in seconds. The IA specifies the homepage in four words ("Homepage + footer") and parks the "How Kamino works / Why Kamino" narrative *inside Security*. So the cold visitor's orientation story lives behind the nav item labeled "Security" — the one place a newcomer has no reason to click first. The thesis line ("capital-markets infrastructure for the tokenized economy") is stated in Part 1 as a working thesis but is given no home on the actual site.

**Concrete fix:** (1) Spec the homepage in Part 7 with the same rigor as the hubs: the thesis headline, the "who it's for" routing band (links to the five audiences), the three-capability overview (Credit/Liquidity/Yield), the proof band (P0-2), the moat teaser linking to Security, and dual CTAs. (2) Pull "How Kamino works / Why Kamino" out of Security into its own top-level reachable page (`/how-it-works`) linked from the homepage and every hub — Security is where you *verify* the moat, How-it-works is where a newcomer *learns* it. They are different jobs for different visitors at different funnel stages; co-locating them inside the diligence page hides the explainer from the person who needs it most.

---

# P1 — Fix before lock if possible

## P1-1 · The institutional moat is gated behind one word — "Security" — that undersells it
**Location:** Part 2 (Security top-level); Part 5 (Security contents); audit item 4.

The decision to make Security top-level is right and I back it. The risk is the *label*. A skeptical institution doing diligence wants the infrastructure moat — Scope's oracle composition, Permissioning, the liquidation engine's $0-bad-debt record, the live dashboards, 20+ audits, formal verification. The IA correctly puts all of that behind Security. But "Security" reads to many buyers as "audits and bug bounty" — a checkbox — not "the validated capital-markets infrastructure that makes us trustworthy." The full moat narrative is there; the door undersells what's behind it.

**Concrete fix:** Keep the top-level item but pressure-test the label and structure. Either (a) make the Security page open with the moat-as-capability framing (the $0 bad debt across $120M+ liquidated, $19.33B priced with zero oracle exploits, the two live dashboards above the fold) before the audit list, so a buyer who lands sees infrastructure strength first; and/or (b) ensure the audience pages and `/how-it-works` link into the specific infra deep pages (Scope, Liquidation engine, Permissioning) directly, so the evaluator reaches the moat from where they already are, not only via the Security tab. The infra deep pages exist (Part 7) — make Parts 9–10 explicitly link to them, which they currently don't.

## P1-2 · The infrastructure deep pages are orphans — six pages with no inbound nav path specified
**Location:** Part 7 ("Infrastructure pages (~6) — not in the menu; reached from hubs, Security, How-it-works, audiences"); Part 8 (link graph).

The IA correctly keeps Markets, Scope, Permissioning, Liquidation engine, Routing, Vault engine out of the menu and says they're "reached from hubs, Security, How-it-works, audiences." Part 8's link graph describes where rails are *surfaced* (mentioned) but not where a visitor can *click through to the deep page*. For a diligence buyer this is the difference between "I read a paragraph about Scope" and "I opened the Scope page and evaluated the oracle architecture." If the deep links aren't explicitly designed in, these six pages risk being reachable only via docs or search — built but unfindable.

**Concrete fix:** In Part 8 (or Part 11 hub compositions), specify the explicit "Learn more →" click-through from each surfacing context to each infra deep page. At minimum: every hub's "surfaces-and-links" section must carry a visible link to the infra page; the Security page must link to all six; `/how-it-works` indexes all six. Make "surfaced" mean "linked," not just "mentioned."

## P1-3 · The asset-issuer journey's first question — "can you even price my asset?" — has no front door
**Location:** Part 4 (Solutions, "Asset issuers"); Part 9 (Asset issuers composition); Part 10 (credit-against-tokenized-assets).

The issuer's gating question is whether Kamino can safely price their token (Scope is "the gate to everything," per the offering map). The Asset issuers audience page composes the right products, and the cold issuer can plausibly find it via "Asset issuers" in Solutions. The journey works at the audience level. The gap: an issuer often arrives knowing *the job* ("I want my token usable as collateral and tradable") more than *the label* "asset issuer." The use-case axis should catch them, and "Offer credit against tokenized assets" does — but that label is framed for the *credit provider*, not the *issuer* whose asset is the collateral. An issuer reading "offer credit against tokenized assets" may not recognize that page is also for them.

**Concrete fix:** Either reframe/retitle the use-case to be readable from both sides (the issuer who wants their asset financed *and* the institution offering the credit), or add an issuer-anchored entry — e.g. surface "List & finance a tokenized asset" (the offering map's own candidate fourth use-case) as the issuer's job-door. Cross-link the Asset issuers audience page and the credit-against-tokenized-assets use-case page bidirectionally so an issuer who lands on either reaches the other. Confirm the issuer's PRIME proof story (P0-2) anchors this path.

## P1-4 · No comparison / decision support anywhere — buyers can't tell the products apart
**Location:** Whole IA; Part 3 (Products menu lists 14+ deep products with no differentiation aids); audit item 5.

The Products menu lists Fixed Rates, Custodial Borrowing, Permissioned Markets, Multiply, Lending Vaults, Managed Portfolios, Institutional Yield, Permissioned Vaults, and more — many adjacent and easy to confuse (Lending Vaults vs Managed Portfolios vs Institutional Yield vs Permissioned Vaults are four yield products a buyer must disambiguate). The IA provides no decision-support surface: no "which product is right for me," no comparison of the yield products, no when-to-use guidance. The "Find your path" picker (P0-4) is the only gesture and it's unspecified. Stripe leans on use-case pages and outcome-led framing to do this disambiguation work; the Kamino IA has the use-case pages but they don't currently carry comparison logic.

**Concrete fix:** Add decision-support to the hub pages explicitly: each hub (especially Yield, which has four overlapping products) should open with a "which one is for you" selector or comparison band that routes by the buyer's situation (open vs gated, single-asset vs multi-strategy, retail vs institutional). Specify this in Part 11 hub compositions. This is cheaper than a standalone comparison tool and lives where the confusion happens.

## P1-5 · The fintech journey splits its brain across Fintechs (Solutions) and Developers with no clear handoff
**Location:** Part 5 (Developers = BuildKit technical home); Part 9 (Fintechs page = commercial pitch); Part 4 (Fintechs in Solutions).

The split is deliberate and defensible — commercial pitch on the Fintechs page, technical build in Developers. But the journey has two distinct personas arriving (a BD/product lead evaluating the partnership, and an engineer scoping the integration) and the IA doesn't specify the handoff. The BD lead lands on Fintechs and needs to forward their engineer somewhere precise; the engineer may land on Developers cold and needs to understand the commercial offer. If the cross-links are vague, each persona half-sees the story.

**Concrete fix:** Specify the bidirectional handoff: the Fintechs page has a prominent "For your engineers → Developers / BuildKit" rail, and the Developers/BuildKit landing has a "Talk about a partnership → Fintechs / Contact sales" rail. Name the embed products consistently across both (BuildKit, Institutional Yield API, Embedded Wallets, White-Label) so the engineer and the BD lead are reading the same product names. This is a Part 8 link-graph addition.

## P1-6 · The curator journey's primary action — "launch a market/vault" — is buried under a ↗ cross-list glyph
**Location:** Part 3 (Market Curation ↗ / Vault Curation ↗ in the menu); Part 3 "Build on Kamino" row ("Run your own market or vault"); Part 9 (Curators page).

A professional curator/manager is a high-value B2B buyer with a clear job: operate a venue on Kamino's rails. The IA gives them three scattered entry points — the ↗ cross-listed Market/Vault Curation items inside the Credit and Yield columns, the "Build on Kamino" spanning row, and the Curators & managers audience page. The cross-list glyph is designed to prevent duplicate-confusion, but for the curator it means their primary doorway is a secondary annotation in two product columns rather than a clear "this is for you." The "Build on Kamino" row helps, but it shares space with BuildKit and Developer docs (two different audiences).

**Concrete fix:** Confirm the **Curators & managers** audience page in Solutions is the curator's clear front door (it is listed in Part 4 — good), and make sure the "Build on Kamino → Run your own market or vault" row links to *that audience page* (the curator's home), not only to a product page. The ↗ items can stay as in-context cross-references for someone shopping by capability, but the named-audience door must be the primary, unambiguous path. Verify in Part 8 that the Curation canonical page and the Curators audience page cross-link clearly.

## P1-7 · Two CTAs with no rule for which appears where — risk of "Launch App" on institutional pages and vice versa
**Location:** Part 2 (two CTAs, persistent Launch App + Contact sales); Parts 9–10 (no CTA specified per page).

The IA defines two CTAs but never specifies the per-page CTA logic. "Launch App" is the self-serve consumer action; "Contact sales" is the white-glove institutional action. If both persist identically on every page, an institutional buyer on the Institutions page sees "Launch App" as a co-equal primary action (wrong motion — they don't self-serve into a webapp), and an individual on the Kamino App page might be pushed to "Contact sales" (wrong motion). The audience/use-case compositions in Parts 9–10 list no CTA at all.

**Concrete fix:** Specify CTA emphasis per surface in the IA: institutional audience pages and use-case pages lead with **Contact sales** (Launch App secondary or absent); Individuals page and Kamino App page lead with **Launch App** (Contact sales absent); hubs carry both. Add the primary CTA to each composition in Parts 9–10. The header can keep both persistent; the *in-page hero* CTA must match the visitor's motion.

---

# P2 — Refinements (summarized)

- **P2-1 · Yield hub four-product overlap label clarity** (Part 3/11): Lending Vaults / Managed Portfolios / Institutional Yield / Permissioned Vaults read as near-synonyms in a column; add one-line descriptors under each menu item the way the IA already plans subtitles for hubs.
- **P2-2 · "Managed Portfolios" naming still open** (Part 3 †, decision 8): the one unresolved name; flag that the build cannot finalize the Yield column or the launch-a-managed-fund use-case copy until the founder picks Managed Portfolios vs Managed Vaults. Mild conversion risk if "Portfolios" reads as a tracking tool rather than a fund vehicle.
- **P2-3 · No Pricing tab is correct, but economics need a consistent home** (decision 5): the IA says economics live "inside product and solution pages" — specify *where* on each (curator fee model, take rate, fixed-rate grid) so a buyer evaluating cost isn't hunting. Stripe can afford a Pricing tab; Kamino's "no tab" choice is right but creates a findability gap if economics aren't consistently placed.
- **P2-4 · Resources is a catch-all** (Part 5): blog, customer stories, research, brand/press is four very different content types. Once Customer stories is promoted (P0-2), re-examine whether Research deserves its own surfacing for the diligence buyer (research/risk reports are institutional trust signals).
- **P2-5 · Mega-menu density check** (Part 3): App tile + 3 columns (4–5 items each) + a spanning "Build on Kamino" row + ↗ glyphs is at the upper bound of scannable. Acceptable, but verify in build that the App tile's full height doesn't crowd the columns on smaller laptop viewports.
- **P2-6 · Individuals ↔ Kamino App page duplication risk** (Part 6/9): "close cousins, linked, distinct in framing" is the right call; spec the one-line difference in purpose so the build doesn't ship two near-identical pages that compete in search and confuse the consumer.
- **P2-7 · Consumer-vs-B2B duality (audit item 6):** leading the Products menu with the App tile is defensible and I don't overturn it (it's settled, decision 10), but mitigate the institutional-read risk by ensuring the *Solutions* menu and the *homepage routing band* lead an institutional visitor straight to Institutions, so the app tile reads as "and also, anyone can use it" rather than "this is a retail app." The balance holds only if the institutional doors are equally prominent elsewhere — which P0-1, P0-2, P0-3, P0-5 all reinforce.

---

## One-line verdict

The settled structure is sound. What's missing is the **conversion and proof layer**: a real Contact-sales destination, customer proof in the journey path, a disambiguated Institutions experience, a specified picker, and a homepage/how-it-works that orients the newcomer. Five P0s, all about a journey that currently dead-ends or never starts — none about the structural debates already resolved. Fix the P0s and this clears the Stripe bar.
