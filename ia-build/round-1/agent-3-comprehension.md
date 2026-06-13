# Kamino Site IA — Agent 3 (Comprehension / First-Principles / Newcomer Clarity)

**Round 1 — strongest independent IA, optimized for a cold visitor.**

My job is to protect the visitor from confusion. Every decision below is judged against one test: *a person who has never heard of Kamino lands on any page and, within seconds, knows what Kamino is, what this page offers, who it's for, and where to click next.* I diverge from the current map wherever it serves an insider over a newcomer.

The ground-truth check on Stripe (verified live, 2026-06-13): top-level is **Products · Solutions · Developers · Resources · Pricing** plus a **"Guide me"** assistant; the deep mega-menu column structure is JS-rendered and not exposed in static HTML, so I do not assert it from memory. The shape I borrow is the verified part: a short top nav, a two-axis Products/Solutions split, and a dedicated Developers destination.

---

## 0. The one sentence the whole site must teach

Before any nav: every page inherits a single spine. If a newcomer remembers one thing, it is this.

> **Kamino is the on-chain capital markets platform: borrow, lend, earn, and trade tokenized assets — used directly, run as your own venue, or built into your product.**

The two-axis logic the visitor must absorb in the nav:
- **Products = what Kamino does, organized by capability** (Borrow, Earn, Trade — the verbs a person already understands).
- **Solutions = who it's for and what job it does** (your role, your goal).

Everything else is in service of making those two axes self-evident.

---

## 1. Top-level navigation

Seven slots maximum is the cognitive ceiling for a marketing header. I use six, plus a persistent app CTA.

```
[Kamino logo]   Products ▾   Solutions ▾   Developers ▾   Security   Company ▾        [Launch App]
```

| Slot | Type | Why it's here |
|---|---|---|
| **Products** | mega menu | The "what" axis — capability-first. |
| **Solutions** | mega menu | The "who / what job" axis — audience + use-case. |
| **Developers** | mega menu (light) | The integration story has its own audience and its own destination (docs/API/SDK/embed). It is not a product and not an audience — it's a delivery surface, so it earns its own slot. |
| **Security** | direct link → page | Trust is Kamino's single biggest differentiator ($0 bad debt, 3 years, 30 audits). For an institution evaluating cold, this must be one click from anywhere, not buried. A top-level slot signals confidence. |
| **Company** | small dropdown | About, Careers, Blog, Press, Brand. Standard. |
| **Launch App** | persistent button | The one direct-to-user action, always visible. |

**What I deliberately keep OUT of the top nav:**
- **No "Pricing" slot.** Kamino's commercial model is a protocol take rate, not a SKU table — a Pricing tab would invite a newcomer to expect a SaaS price list and find none, which is a dead-end. Commercial terms live inside Developers (API/embed) and on the Curation page (curator economics) where they have context.
- **No "Resources" slot.** Stripe needs one; Kamino's resource set (blog, docs, dashboards) is small enough to distribute into Company (blog/press), Developers (docs), and Security (dashboards). Adding Resources would create a vague catch-all that competes with Developers and Company for the same content — a classic source of "where do I find X?" confusion.

**Optional 7th slot, held in reserve:** a **"Why Kamino"** narrative link if user testing shows newcomers want a single explainer before browsing capability-first. I'd rather solve that on the homepage hero than spend a nav slot, so it stays out for now.

---

## 2. The Products mega menu — capability-first, in plain verbs

### The single biggest divergence in this whole document

The current map names the three hubs **Credit · Liquidity · Yield Suite**. I argue this fails the newcomer test on all three counts, and I rename them.

A cold visitor reads a nav in their own vocabulary, not Kamino's internal one:
- **"Credit"** is a lender's word for the supply side; a borrower doesn't think "I want credit," they think "I want to borrow."
- **"Liquidity"** is the single most overloaded word in DeFi — it means swaps here, but it also means LP positions, depth, TVL, and exit-ability. A newcomer cannot guess what's behind it.
- **"Yield Suite"** stacks jargon ("yield") on a B2B-software word ("Suite"). A person who wants to earn does not look for a "Suite."

I rename the three hubs to the verbs people already use, and let the institutional vocabulary live *inside* the pages where there's room to teach it:

```
BORROW  (hub)              EARN  (hub)                 TRADE  (hub)
Variable-Rate Borrowing    Earn Vaults                 Swap
Fixed-Rate Borrowing       Managed Portfolios *        Limit Orders
Multiply (Leverage)        Institutional Yield         Instant-Quote Trading (RFQ) **
Borrow Against BTC / RWAs  Permissioned Vaults         Tokenized-Asset Liquidity (RWA DEX)
Permissioned Markets       Run a Vault (Curation) ↗    Run a Market (Curation) ↗
Run a Market (Curation) ↗
```

Featured tile (full-height, left of the columns):
- **The Kamino App** — visual tile. Primary CTA **Launch App**, secondary **Take a tour** (→ Kamino App page). This is the self-serve front door and the most concrete thing a confused visitor can click.

\* **"Managed Portfolios"** replaces **Meta-Vaults** — see §8 naming.
\*\* **"Instant-Quote Trading"** is the human-readable label; **(RFQ)** is kept in parentheses as a bridge for the pros who search for it — see §8.

**Conventions I keep from the current map:**
- The column heading IS the hub link (Borrow → /borrow).
- Only *products* appear; infrastructure (Markets, Scope, Liquidation engine, Routing, Permissioning, Vault engine) is surfaced *inside* hub pages and on dedicated pages reachable from there — never in the menu. Rationale: a newcomer shops for an outcome ("borrow against my BTC"), not an engine ("Scope oracle"). Infrastructure pages exist for the evaluator who drills in, not the browser who's orienting.
- Cross-listing is allowed and signposted with a **↗** glyph meaning "this also lives under another hub / opens a shared page," so a repeated item never reads as an accidental duplicate. (Current map cross-lists Curation and Multiply but doesn't mark them — that's a confusion risk I fix.)

### Why three hubs, and why these three

Three is the right count: it fits one glance, maps cleanly to the three things money does on Kamino (you put it in to **Earn**, you take it out to **Borrow**, you move it to **Trade**), and it covers 100% of the products without a fourth "misc" column. A fourth hub (e.g. a separate "Institutional" or "Liquidity" column) would force the visitor to learn an org chart before they can navigate.

### The hidden risk I'm flagging: "Run a Market / Run a Vault" appears three times

Curation legitimately spans Borrow (run a market), Earn (run a vault), and Trade (run a market). Three appearances of the same idea in one menu is a comprehension hazard — it reads as clutter and the visitor can't tell if they're three different things. **My fix:** the menu items all carry the ↗ glyph and all resolve to the *same* Curation hub, and I add a single explicit footer row spanning the menu:

```
─────────────────────────────────────────────────────────────────
Build a product on Kamino →  Run your own venue (Curation)  ·  Embed Kamino in your app (Developers)
```

This pulls the "operate / build" story out of the per-hub columns into one clearly-labeled supplier row, so the three product columns stay about *using* Kamino and the platform story has one obvious home. (See §8 for why "Curation" itself gets a clearer label.)

---

## 3. The Solutions mega menu — two clearly-separated axes

The whole point of Solutions is "I am X / I want Y → go here." If a visitor can't instantly tell whether they're picking *who they are* or *what they want*, the menu has failed. So I split it visually and label the split out loud.

```
BY WHO YOU ARE                          BY WHAT YOU WANT TO DO
Institutions & Funds                    Borrow against tokenized assets
Asset Issuers                           Borrow against Bitcoin
Fintechs & Apps                         Launch a managed fund
Curators & Managers                     Earn on stablecoins ▸ (next batch)
Individuals
                                        ─────────────────────────
                                        [Not sure? → Find your path] (guided picker)
```

- **Two headings, stated literally** ("By who you are" / "By what you want to do") so the axis is never ambiguous. This is the explicit version of Stripe's implicit by-audience / by-use-case split.
- **"Find your path"** is a lightweight guided picker (my analog to Stripe's verified "Guide me") for the visitor who doesn't self-identify with any label — the single best defense against a confused newcomer bouncing. Two questions ("What are you?" / "What do you want?") → a recommended Solution page. It is the only "smart" element I add, and it directly serves the cold-visitor mandate.

### Audience labels — one rename

I merge the current map's **"Institutions"** wording into **"Institutions & Funds"** so the funds/trading-firm sub-segment is visible in the label itself (a fund manager shouldn't have to guess they're inside "Institutions"). The three sub-segments (wealth & asset managers · funds & trading firms · treasuries & corporates) are sections *within* the page, not separate nav items — keeping the by-who axis to five scannable items.

---

## 4. Complete page inventory, grouped by page type

### A. Hubs (3) — capability overviews + launchpads
1. **Borrow** `/borrow` (was "Credit")
2. **Earn** `/earn` (was "Yield Suite")
3. **Trade** `/trade` (was "Liquidity")

### B. Deep product pages (15)
**Under Borrow:**
4. **Fixed-Rate Borrowing** `/borrow/fixed-rate` *(owns)*
5. **Multiply** `/borrow/multiply` *(owns)* — leverage looping
6. **Permissioned Markets** `/borrow/permissioned-markets` *(owns)*
7. **Borrow Against BTC & RWAs** `/borrow/btc-rwa` *(owns)* — the off-chain-collateral story, audience-neutral framing
   - Variable-Rate Borrowing → **section only** on the Borrow hub (links to docs)
   - Market Curation → **surfaces-and-links** to Curation
   - Borrow Orders → **section only** on Fixed-Rate page

**Under Earn:**
8. **Earn Vaults** `/earn/vaults` *(owns)* — the kVault/Earn story
9. **Managed Portfolios** `/earn/managed-portfolios` *(owns)* — was Meta-Vaults
10. **Institutional Yield** `/earn/institutional-yield` *(owns)*
11. **Permissioned Vaults** `/earn/permissioned-vaults` *(owns)*
    - Vault Curation → **surfaces-and-links** to Curation
    - Insurance Pool → **section only** on Earn Vaults page

**Under Trade:**
12. **Swap** `/trade/swap` *(owns)* — best-execution meta-aggregation
13. **Instant-Quote Trading (RFQ)** `/trade/instant-quote` *(owns)*
14. **Tokenized-Asset Liquidity (RWA DEX)** `/trade/tokenized-liquidity` *(owns)*
15. **Limit Orders** `/trade/limit-orders` *(owns)* — Limo
    - Routing/execution → **surfaces-and-links** to the Routing infra page

**Cross-hub shared product page:**
16. **Curation** `/curation` *(shared — surfaced from all three hubs + Developers + audience pages)* — "Run your own market or vault." Public label per §8.

### C. Infrastructure pages (6) — out of menu, reachable from hubs & Security
17. **Markets** `/infrastructure/markets` — the configurable lending engine
18. **Scope (Pricing & Oracle)** `/infrastructure/pricing` — public label leads with "Pricing," keeps "Scope" as the product name
19. **Liquidation Engine** `/infrastructure/liquidations`
20. **Routing & Execution** `/infrastructure/routing`
21. **Permissioning (Access Control)** `/infrastructure/access-control`
22. **Vault Engine** `/infrastructure/vault-engine`

(These live under a single `/infrastructure/*` parent for URL clarity and a shared "How Kamino works under the hood" index page at `/how-it-works` that the homepage and hubs link to — the destination for the visitor who asks "but how does this actually work?")

### D. Entry points — Audience pages (5)
23. **Institutions & Funds** `/solutions/institutions`
24. **Asset Issuers** `/solutions/asset-issuers`
25. **Fintechs & Apps** `/solutions/fintechs`
26. **Curators & Managers** `/solutions/curators`
27. **Individuals** `/solutions/individuals`

### E. Entry points — Use-case pages (3, +pipeline)
28. **Borrow against tokenized assets** `/solutions/credit-against-tokenized-assets`
29. **Borrow against Bitcoin** `/solutions/btc-backed-credit`
30. **Launch a managed fund** `/solutions/launch-a-fund`
    - *Pipeline:* Earn on stablecoins · Embed yield in your app · List & finance an LST

### F. Delivery surfaces (2)
31. **Developers** `/developers` — hub: docs, API reference, SDKs, BuildKit (embed), Institutional Yield API, embedded wallets, white-label
32. **Kamino App** `/app` — the consumer-product tour (the interface, what you can do, self-serve)

### G. Trust & Company
33. **Security** `/security` — the trust page + links to dashboards
34. **multisig.kamino.fi** — live dashboard (external subdomain)
35. **oracles.kamino.fi** — live dashboard (external subdomain)
36. **Company** `/company` (About) + **Careers** `/careers` + **Blog** `/blog` + **Press** `/press` + **Brand** `/brand`

### H. Universal layer
- **Docs** `docs.kamino.com` — every page links into it; the substrate beneath all marketing real estate.

**Orphan check:** every product in the inventory maps to a deep page or a hub section above; every infra rail has one canonical page; every audience and use-case has a landing. No item in the offering map is left without a home. The bridge (Ethereum–Solana) is a *section* on the BTC & RWAs page and the Scope page (it's the mechanism that makes off-Solana collateral safe) — not a standalone page, because a newcomer never shops for "a bridge."

---

## 5. The link / reuse graph — every product, no dead-ends

For each product: **canonical home** → **surfaced on** (with the framing the visitor sees). Every "surfaced on" link points back to the home. This is how a rail avoids being half-explained in five places.

### Capability products

**Variable-Rate Borrowing** — *Home:* Borrow hub (section). *Surfaced on:* Individuals ("borrow self-serve"), Markets infra ("every borrow happens in a market").

**Fixed-Rate Borrowing** — *Home:* `/borrow/fixed-rate`. *Surfaced on:* Borrow hub ("lock your rate") · Institutions & Funds ("rate certainty") · BTC-backed credit use-case ("term certainty on a BTC loan") · Credit-against-tokenized-assets use-case ("the terms") · Earn/Institutional Yield ("the borrower side your deposit funds — conditional liquidity") · Instant-Quote page ("price discovery for the credit book").

**Multiply** — *Home:* `/borrow/multiply`. *Surfaced on:* Borrow hub · Individuals ("one-click leverage") · Asset Issuers ("leverage as distribution for your token") · Credit-against-tokenized-assets use-case ("leverage the position") · Routing infra ("one-click enter/exit via the router").

**Permissioned Markets** — *Home:* `/borrow/permissioned-markets`. *Surfaced on:* Borrow hub · Institutions & Funds ("named-counterparty, KYC-gated venues") · Asset Issuers ("gate a regulated asset") · Access-Control infra (canonical mechanism) · Credit-against-tokenized-assets use-case ("compliance").

**Borrow Against BTC & RWAs** (off-chain collateral) — *Home:* `/borrow/btc-rwa`. *Surfaced on:* Borrow hub · BTC-backed credit use-case (deep) · Institutions & Funds ("treasury liquidity without selling") · Scope infra ("priced + proof-of-reserves") · Institutional Yield ("the loans your deposit funds").

**Earn Vaults** — *Home:* `/earn/vaults`. *Surfaced on:* Earn hub · Individuals ("professional-grade earn") · Curators & Managers ("the thing you operate") · Vault-Engine infra (canonical mechanism) · Borrow hub ("vaults are the lenders behind every market").

**Managed Portfolios** (Meta-Vaults) — *Home:* `/earn/managed-portfolios`. *Surfaced on:* Earn hub · Launch-a-fund use-case (the vehicle) · Institutions & Funds ("multi-strategy vehicle") · Fintechs & Apps ("a fund product for your users") · Curators & Managers ("build a multi-strategy product").

**Institutional Yield** — *Home:* `/earn/institutional-yield`. *Surfaced on:* Earn hub · Institutions & Funds (deep) · BTC-backed credit use-case ("the depositor side funding it") · Security ("transparency: live loan-book, attestation") · Fintechs & Apps ("offer it via the Institutional Yield API").

**Permissioned Vaults** — *Home:* `/earn/permissioned-vaults`. *Surfaced on:* Earn hub · Institutions & Funds · Launch-a-fund use-case ("gate your investors") · Access-Control infra · Fintechs & Apps ("app-gated deposits").

**Swap** — *Home:* `/trade/swap`. *Surfaced on:* Trade hub · Individuals · Routing infra ("best execution") · Multiply/Fixed-Rate ("manage in place: repay/swap collateral") · Asset Issuers ("routing to/from your asset").

**Instant-Quote Trading (RFQ)** — *Home:* `/trade/instant-quote`. *Surfaced on:* Trade hub · Asset Issuers ("how holders move in and out of your token — solver-filled, no standing AMM") · Curators & Managers / market-makers ("quote in as a solver") · Fixed-Rate ("two-sided credit book") · Liquidation Engine ("RFQ-sourced fills") · Credit-against-tokenized-assets use-case.

**Tokenized-Asset Liquidity (RWA DEX)** — *Home:* `/trade/tokenized-liquidity`. *Surfaced on:* Trade hub · Asset Issuers (deep — "oracle-priced liquidity, no market maker") · Scope infra ("the oracle price IS the liquidity price") · Credit-against-tokenized-assets use-case.

**Limit Orders** (Limo) — *Home:* `/trade/limit-orders`. *Surfaced on:* Trade hub · Instant-Quote page · Borrow Orders section ("limit orders for lending").

**Curation** — *Home:* `/curation`. *Surfaced on:* all three hubs (the "Run a market/vault ↗" rows + the menu footer) · Curators & Managers (deep) · Asset Issuers ("curate the market for your asset") · Fintechs & Apps ("white-label a curated vault") · Security ("curators are the risk managers, first-loss skin in the game") · Developers ("white-label is the seam between Curation and embed").

### Infrastructure rails

**Markets** — *Home:* `/infrastructure/markets`. *Surfaced on:* Borrow hub · Earn hub ("vaults allocate into markets — the supply side") · Multiply · Asset Issuers ("your token becomes a market asset — the PRIME $0→$600M path") · Trade ("a listed asset needs a market") · Curation · How-it-works index · Developers ("markets via SDK/API").

**Scope (Pricing & Oracle)** — *Home:* `/infrastructure/pricing` + oracles.kamino.fi. *Surfaced on:* Markets ("decides what's listable") · Borrow/Liquidations ("scam-wick protection") · Tokenized-Asset Liquidity ("oracle price = liquidity price") · Routing ("reference/fallback pricing") · Earn ("vault NAV") · Multiply · Institutional Yield · Asset Issuers ("step one: a guarded price feed") · Security · How-it-works.

**Liquidation Engine** — *Home:* `/infrastructure/liquidations`. *Surfaced on:* Borrow hub · Multiply ("soft liquidations") · Security ("$120M+ liquidated, $0 bad debt") · Instant-Quote ("RFQ-sourced fills") · How-it-works.

**Routing & Execution** — *Home:* `/infrastructure/routing`. *Surfaced on:* Swap · Multiply · Borrow ("repay/swap collateral") · Liquidations · Asset Issuers · Developers ("swap embed") · How-it-works.

**Permissioning (Access Control)** — *Home:* `/infrastructure/access-control`. *Surfaced on:* Permissioned Markets · Permissioned Vaults · Asset Issuers ("per-asset gating") · Institutions & Funds · Institutional Yield · Developers ("compliance-grade embeds, whitelist API") · How-it-works · Security.

**Vault Engine** — *Home:* `/infrastructure/vault-engine`. *Surfaced on:* Earn Vaults · Institutional Yield · Curation · Developers ("white-label vaults, Institutional Yield API") · Multiply ("borrows the liquidity vaults supply") · Borrow ("vaults are the lenders") · How-it-works.

**Dead-end check:** every leaf page has at least (a) a path back up to its hub or section, (b) outbound links to the audiences/use-cases that want it, and (c) a CTA (Launch App, Talk to us, or Read the docs). No page terminates the journey.

---

## 6. Audience & use-case pages — what each composes, and the path to reach them

**Navigation path to all of them:** top nav **Solutions ▾** → pick a "By who you are" or "By what you want to do" item, OR use **Find your path**. Audience pages also link laterally to each other in a footer strip ("Also relevant: Asset Issuers · Fintechs") so a visitor who picked the wrong door isn't trapped.

### Audience pages (by who)

**Institutions & Funds** — *Jobs:* allocate into transparent regulated yield; borrow with rate certainty; treasury liquidity without selling. *Composes/links:* Institutional Yield, Managed Portfolios, Earn Vaults, Fixed-Rate Borrowing, Multiply, Borrow Against BTC & RWAs, Permissioned Markets/Vaults, Security. *CTA:* Talk to us.

**Asset Issuers** — *Job:* make my token usable as collateral, tradable with oracle-priced liquidity, and distributed — compliantly. *Composes/links:* Scope (price it — the gate), Markets (collateral status), Tokenized-Asset Liquidity, Instant-Quote (RFQ), Permissioned Markets, Multiply (as distribution), Curation. *Proof:* PRIME $0→$1B. *CTA:* Talk to us.

**Fintechs & Apps** — *Job:* ship compliant yield/credit/swap to my users without building a protocol. *Composes/links:* Developers/BuildKit, Institutional Yield API, embedded wallets, white-label, Managed Portfolios. *CTA:* Read the docs / Talk to us.

**Curators & Managers** — *Job:* operate credit/yield venues on Kamino's rails. *Composes/links:* Curation, Markets, Vault Engine, Earn Vaults, Managed Portfolios, Security. *Proof:* the roster (Gauntlet, Steakhouse, etc.). *CTA:* Apply to curate.

**Individuals** — *Job:* professional-grade earn/borrow/multiply/swap, self-serve. *Composes/links:* Earn Vaults, Variable & Fixed Borrowing, Multiply, Swap, Kamino App. *CTA:* Launch App. (Shares the consumer story with the Kamino App page, told audience-framed here, product-framed there — both link to each other so neither is an orphan.)

### Use-case pages (by job)

**Borrow against tokenized assets** — *Composes:* Scope (price it), Markets, Fixed-Rate / Borrow Against BTC & RWAs, Tokenized-Asset Liquidity + Instant-Quote (enter/exit/liquidate), Permissioned Markets, Curation, Multiply. *Cuts across:* asset issuers, institutions, curators.

**Borrow against Bitcoin** — *Composes:* Borrow Against BTC & RWAs (custody-preserving), the BTC market, Fixed-Rate, Scope (BTC pricing), Institutional Yield (depositor side), Security. *Cuts across:* treasuries/corporates, funds, individuals, yield allocators.

**Launch a managed fund** — *Composes:* Managed Portfolios (vehicle), Curation (launch/operate), Vault Engine (allocation/fees/insurance), Permissioned Vaults (gate investors), Developers + data/Portfolio APIs (integrate + reporting), white-label, the strategies it deploys into (Markets, Multiply, Earn), Security (reporting). *Cuts across:* wealth/asset managers, curators, fintechs.

---

## 7. Rationale — key decisions, framed for the newcomer journey

1. **Capability verbs over capability nouns (Borrow/Earn/Trade vs Credit/Liquidity/Yield Suite).** A newcomer navigates by what they want to *do*. Verbs are self-classifying — a person knows instantly whether they're here to borrow, earn, or trade. The institutional nouns ("credit," "yield") are precise but require the reader to already think like a capital-markets professional; they belong inside the pages, where there's room to teach them, not on the signposts.

2. **Two Solutions axes, each with a literal heading.** The failure mode of a Solutions menu is the visitor not knowing which axis they're on. Naming the columns "By who you are" and "By what you want to do" removes all ambiguity and makes the Stripe-style two-dimensional model legible at a glance.

3. **"Find your path" picker.** The cold visitor who fits no label is exactly the person most likely to bounce. A two-question guided picker catches them. This is the highest-leverage anti-confusion element on the site and it directly fulfills the comprehension mandate.

4. **Infrastructure stays out of the menu but gets a single front door (`/how-it-works`).** Newcomers shop for outcomes, evaluators inspect engines. Keeping Markets/Scope/etc. out of the product menu protects the browser; giving them one indexed home protects the drill-down evaluator. Both audiences served, neither confused.

5. **Security as a top-level slot.** For an institution evaluating an unknown protocol, "is this safe?" is the first question, not the last. One-click access to the $0-bad-debt / 30-audit story builds trust before the product pitch — and a confident protocol puts it in the nav.

6. **No Pricing, no Resources slots.** Both would set wrong expectations (a SaaS price list that doesn't exist; a vague catch-all that competes with Developers/Company). Removing them keeps the nav to six honest slots.

7. **The ↗ glyph + the "build on Kamino" footer row.** Cross-listing is necessary (Curation and Multiply genuinely belong in multiple places) but unmarked repetition reads as broken. The glyph tells the visitor "same thing, also lives elsewhere," and the footer row gives the supplier story (Curation + embed) one clear home instead of scattering it across three columns.

8. **Audience/use-case pages compose, never re-explain.** Each Solutions page is a curated set of links into the canonical product pages, framed for that reader. This keeps every product explained in exactly one place (the deep page) and reused everywhere via framing — no half-told products, no duplicate maintenance.

---

## 8. Where I challenge the current map (with argument)

**1. Rename the three hubs: Credit → Borrow, Liquidity → Trade, Yield Suite → Earn.** *Strongest disagreement.* The current names are supply-side / overloaded / jargon-stacked and force a newcomer to think like an insider before they can navigate. Verbs are self-classifying. The institutional vocabulary survives inside the pages, where it can be taught with context. This is the single change with the biggest comprehension payoff.

**2. Rename "Meta-Vaults" → "Managed Portfolios."** "Meta" tells a newcomer nothing and sounds like internal engineering. "Managed Portfolios" says exactly what it is to the wealth managers and fintechs who are the actual buyers — a multi-strategy vehicle someone manages. The flagship product deserves a name a buyer recognizes.

**3. Rename "RFQ" → "Instant-Quote Trading (RFQ)."** "RFQ" is trading-desk jargon; a newcomer can't parse it. Lead with the plain meaning ("you get an instant quote and trade"), keep "(RFQ)" parenthetically so the pros who search the acronym still find it. Same pattern for **"RWA DEX" → "Tokenized-Asset Liquidity."**

**4. Give "Curation" a public-facing label and pull it out of the per-hub columns.** "Curation" is a curator's word for an operator activity; a fintech or institution doesn't think "I want to curate." Surface it as **"Run your own market or vault"** in the menu footer and link to a `/curation` page titled the same, with "Curation Suite" as the product name inside. And resolve the three-times-repeated "Run a market/vault" problem with the ↗ glyph + the spanning footer row (§2).

**5. Drop the implied "Pricing"/"Resources" slots and elevate Security to top-level.** The current map lists Security as a nav item but frames Company as a peer; I argue Security earns equal prominence and that no Pricing/Resources slots should exist at all (they'd mislead). This keeps the header to six self-explanatory slots.

**6. "Permissioned" everywhere → keep the word, but always pair it with plain meaning.** "Permissioned Markets" stays (it's a term the institutional buyer does use), but every surface that mentions it leads with the outcome — "KYC-gated, named-counterparty venues" — so a newcomer isn't stranded on the adjective. Same discipline for "Conditional liquidity" (always introduced as "capital that funds a loan only when a borrower arrives") and "Scope" (public label "Pricing & Oracle," product name "Scope" kept inside).

**7. Resolve the open Permissioning placement decision toward its own infra page (`/infrastructure/access-control`), not a section of Markets.** Permissioning spans vaults *and* markets *and* assets; burying it inside Markets would orphan its vault and embed expressions. A standalone access-control page is the one canonical home all those surfaces can link back to — cleaner for the evaluator, no half-told rail.

---

## Appendix — footer map (completeness)

```
PRODUCTS              SOLUTIONS                  DEVELOPERS           COMPANY
Borrow                Institutions & Funds       Docs                 About
Earn                  Asset Issuers              API Reference        Careers
Trade                 Fintechs & Apps            SDKs                 Blog
Multiply              Curators & Managers        BuildKit (Embed)     Press
Run a market/vault    Individuals                Institutional        Brand
The Kamino App        Borrow vs tokenized        Yield API            
                      Borrow vs Bitcoin                               TRUST
HOW IT WORKS          Launch a managed fund                          Security
Markets                                                               multisig.kamino.fi
Pricing & Oracle                                                      oracles.kamino.fi
Liquidations
Routing
Access Control
Vault Engine
```

The footer is the safety net: every page, every infra rail, every audience, every dashboard is reachable from it — the final guarantee of zero orphans.
