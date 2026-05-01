# Kamino Landing Website — Master Specification

> The complete, handoff-ready specification for Kamino Finance's new public-facing landing website. This document captures every strategic, structural, content, visual, and interaction decision made to date. It is the single source of truth for the build.

---

## Metadata

- **Last updated:** 2026-04-23
- **Status:** Homepage complete and locked (all nine sections + footer). Audience pages and product marketing pages being handed off to distinct downstream agents via the `page-specs/` folder.
- **Handoff target:** Claude Design (for building the site from 0 to 100)
- **Research and synthesis artifacts:** see `research/` folder in this directory (`01-landing-page-patterns.md`, `02-kamino-deep-comprehension.md`, `03a-thesis-principles-architecture.md`, `03b-audiences-tensions-roadmap.md`, `partners-01-twitter-bios.md`, `partners-02-kamino-cross-posts.md`, `partners-03-telegram-context.md`, `partners-04-synthesis.md`)

---

## 1. Executive Summary

Kamino is rebuilding its public-facing website as the top-of-funnel for four distinct audiences:

1. **Individuals** — Retail users who want to earn, borrow, and access onchain products
2. **Institutions** — Funds, treasuries, and trading firms deploying capital onchain
3. **Issuers** — RWA and token issuers launching onchain with instant credit infrastructure
4. **Fintechs** — Consumer apps integrating Kamino as backend infrastructure

The homepage combines a positioning-led hero with an **Audience Router** — four equal-weight boxes that take each visitor one level deeper into the page built for them, via an entry animation.

The site functions like Coinbase: first-time visitors see the marketing site, while returning users (with connected wallets / cookies) route directly to the webapp.

This is a strategic shift from a product-focused marketing site to **institutional financial infrastructure positioning** — Kamino as the connective layer between global capital and the new financial system, serving every audience that meets it.

### The strategic moment (2026)

Four forces have converged in 2026 and define this rebrand:

1. **Crypto-native yield has compressed** to below savings-account levels (Aave USDC ~2.6%). Competing on floating-rate pool yield is a race to the bottom.
2. **Institutional credit demand is structural, large, and untapped** — BTC-backed institutional lending is a multi-billion-dollar market paying premium rates, and onchain has had no credible venue until now.
3. **RWAs are exploding onchain** — ~350% YoY growth, $18B+ circulating. Treasuries, private credit, tokenized equities, HELOC-backed assets, and yield-bearing stablecoins are all moving onchain. Kamino's PRIME Market proved the thesis at $600M+ in four months.
4. **The US regulatory landscape has shifted** — creating a viable path for onchain credit infrastructure to serve regulated institutional markets at scale.

The landing page is the public artifact of Kamino's bet that the next decade of onchain credit will be captured by the protocol that becomes the trusted, regulated-grade, multi-audience credit infrastructure first.

---

## 2. Copy & Brand Framing Principles

Apply these to every word on every surface of the site. They are non-negotiable.


1. **Lead with concrete institutional vocabulary.** *Capital, credit, liquidity, financial system, infrastructure, markets.* Words a Wall Street fund and a neobank both recognize. Avoid DeFi vogue-terms (*revolutionary, disruptive, the future of X*).

2. **"DeFi" is used sparingly and only in context.** Acceptable: *"the largest RWA market in DeFi."* Not acceptable: defaulting to "DeFi protocol" as Kamino's self-description. The frame is "onchain finance" where possible.

3. **No forward-risk claims.** Do not claim *"zero bad debt"* as a forward commitment — it can be lost. Use factual, point-in-time claims instead: *"zero security incidents to date,"* *"three years in production,"* *"$19B+ originated."*

4. **Opinionated voice reads as credibility.** Strong opinions are trust signals; neutral copy reads as committee-authored. Kamino's voice is regulated, conservative, institutional, slightly literary — *chosen*, not *defaulted-to*.

5. **Real sentences, not fragment-stacks.** The fragment/three-beat pattern ("Regulated. Overcollateralized. Transparent.") is reserved for moments of rhythm. Most copy is full prose with subjects, verbs, and real grammatical structure. Top-tier sites (Anthropic, Mercury, Notion, Raycast) do real copywriting — Kamino should too.

6. **American spelling** (tokenized, not tokenised) — matches the product-name conventions already in use ("Institutional Yield," "PRIME Market").

---

## 3. The Four Audiences

### 3.1 Individuals (Retail / Onchain-native users)

**Who specifically:**
- Crypto-native users holding SOL, USDC, USDT, PYUSD, LSTs, JLP, cbBTC, KMNO
- DeFi-sophisticated users who compare yields, care about audits and TVL, and monitor positions
- A long tail of TradFi-adjacent users coming onchain via stablecoins seeking higher USD yield
- Not pseudonymous casual speculators — the typical Kamino user has a meaningful position and has spent enough time in the Solana ecosystem to trust it

**What Kamino specifically offers them:**
- PRIME Multiply at 11–21% APY — the only place on earth to get a leveraged RWA-yield strategy with one click
- The most battle-tested lending protocol on Solana ($19B+ originated, zero security incidents to date)
- Curated Earn vaults with named risk managers (Gauntlet, Steakhouse, Allez, Sentora)
- Multiply across five asset categories (LSTs, RWAs, Stablecoins, DeFi Yield, Equities)
- Permissionless access to Institutional Yield (Kamino Institutional Yield vault — 6–8% APY from regulated lending operations, accessible from a DeFi wallet with no KYC on the depositor)
- KMNO staking + Seasons (airdrops and points boosts)

**Conversion motion:** Self-serve. Connect wallet, browse vaults, deposit. "Launch App" CTA. Returning-user detection routes them directly to the webapp.

### 3.2 Institutions (Funds, treasuries, trading firms)

**Who specifically:**
- Crypto-native hedge funds (multi-strategy, market-neutral, basis trade)
- Family offices allocating 2–10% of AUM to crypto-yield strategies
- Crypto treasury companies — publicly listed vehicles holding BTC/SOL/ETH on balance sheet (Solana Company / Nasdaq: HSDT is the prototype)
- Market-making firms — Wintermute, XBTO, Hidden Road, Galaxy class
- Trading firms running basis trades, funding-rate arbitrage, perp-basis strategies

**What Kamino specifically offers them:**
- **Off-Chain Collateral** — borrow stablecoins onchain while collateral stays at a qualified custodian. The only product on Solana preserving qualified custody while enabling onchain borrowing.
- **Fixed Rates & Fixed Terms** — predictable borrowing costs for institutional budgeting. Pilot with FalconX.
- **Institutional Yield** as an LP vehicle — regulated overcollateralized BTC-backed credit with real-time per-loan reporting and monthly independent attestation. 6–8% APY.
- **Permissioned markets** — KYC-gated markets for regulated strategies.
- **Battle-tested infrastructure** — $19B+ originated, zero security incidents, 20 independent audits, 4 formal verifications.

**Conversion motion:** Sales-led for the largest tickets. Contact lead: `cheryl@kamino-foundation.com`, `mark@kamino-foundation.com`, or `institutional@kamino-foundation.com`. White-glove onboarding. Custom isolated market setup. Tri-party legal docs. For smaller institutional LPs, permissionless Institutional Yield deposit from a DeFi wallet works self-serve.

### 3.3 Issuers (RWA & token issuers)

**Who specifically:**
- **RWA tokenizers** — Figure (HELOCs → PRIME), Securitize (Apollo's ACRED), Ondo (tokenized Treasuries potentially), reinsurance tokenizers, private credit funds looking to tokenize
- **Tokenized equity issuers** — Backed Finance (xStocks on Solana)
- **Stablecoin issuers with differentiated collateral** — Paxos (PYUSD), Bridge/Stripe (CASH), yield-bearing stablecoin issuers
- **Token issuers** who want their asset to be *collateral* as well as tradable

**What Kamino specifically offers them:**
- **Instant collateral status** — integration as borrowable collateral via a white glove isolated market on Kamino. The PRIME market is the template.
- **Multiply as distribution engine** — once an asset is collateral, Multiply lets users leverage it. PRIME market went $0 → $600M in 4 months through Multiply-driven demand.
- **RFQ** — integrate market makers with Kamino's RFQ to enable seamless buys and sells of your asset
- **RWA DEX (coming)** — oracle-priced liquidity for tokenized assets, eliminating the need for third-party market-maker agreements.
- **Permissioned-market option** — KYC-gated markets for regulated assets.
- **Access to the curator ecosystem** — curators build vault mandates that include the asset, providing additional distribution.
- **Real case study: $600M PRIME in 4 months with zero incentives.**

**Conversion motion:** Sales-led. Contact partnerships (`mark@kamino-foundation.com`). Bespoke market setup. Co-marketing with the issuer. Custom risk parameters via Kamino's Risk Council.

### 3.4 Fintechs (Consumer apps integrating Kamino)

**Who specifically:**
- Consumer crypto apps — wallets (Phantom), neobanks, mobile-first fintechs
- Global consumer finance apps with stablecoin deposit products looking to offer yield
- Exchanges wanting to add an "Earn" product without building lending
- Payment apps (PayPal-class) wanting to pay interest on stablecoin balances

**What Kamino specifically offers them:**
- **BuildKit** — API + SDK for embedding Kamino products into any app. Live at `kamino.com/build`.
- **Institutional Yield API** — a structured yield product-in-a-box with 20/40/40 capital allocation (instant-liquidity buffer / PRIME exposure / private credit) and built-in revenue-share economics. Blended ~6.33% APY with end-user yield capped and fintech earning everything above the cap.
- **White-label isolated vaults** — invisible on Kamino's public interface; users see the fintech's app, yield comes from Kamino.
- **End-to-end KYC/KYB-compliant yield stack** — every dollar of yield traces to a KYC-verified, regulated borrower.
- **Privy embedded wallets** out of the box.

**Conversion motion:** Sales-led. Contact the team. Integration call. KYC/KYB review. White-labeled isolated vault setup. Technical onboarding via Privy + BuildKit SDK.

---

## 4. Site Behavior Model

### 4.1 The Coinbase pattern

```
FIRST-TIME VISITOR → kamino.com
                        ↓
                  Marketing Site
                  (landing / audience / product / resources pages)
                        ↓
                 [Launch App] or [Connect Wallet]
                        ↓
                    Webapp at kamino.com/home

RETURNING USER (cookie / wallet) → kamino.com
                        ↓
                  Direct to kamino.com/home
                  (skips marketing, straight to product)
```

### 4.2 Detection logic

- **Cookie / localStorage** for returning users
- **Connected wallet detection** — if the user has connected before, route straight to webapp
- **"Always show landing" toggle** in webapp settings for users who want to browse marketing content

### 4.3 Routing rules

- `kamino.com/` → Landing page (for first-time / un-cookied visitors) OR auto-redirect to `/home` (for returning users)
- `kamino.com/home` → Webapp home (returning-user landing page)
- `kamino.com/earn`, `/borrow`, `/multiply`, `/assets`, `/swap` → Webapp product surfaces (NOT marketing pages)
- `kamino.com/individuals`, `/institutions`, `/issuers`, `/fintechs` → Marketing audience pages
- `kamino.com/institutional-yield`, `/off-chain-collateral`, `/fixed-rates`, `/vaults`, `/rwa-dex`, `/buildkit`, `/institutional-yield-api` → Marketing product pages
- `kamino.com/docs` → Documentation sub-site (platform-style, separate from marketing)
- `kamino.com/blog`, `/security`, `/oracles`, `/stories`, `/about` → Other marketing surfaces
- `kamino.com/app` → Redirect to webapp

The key routing rule: Products in the top nav dropdown link directly INTO the webapp product surfaces (retail products) OR to marketing product pages (Enterprise + Platform products). There are no separate product marketing pages for retail products (Earn, Borrow, Multiply, Swap, Assets) — the in-app experience does the narrative work.

---

## 5. Information Architecture

### 5.1 Sitemap

```
kamino.com/
│
├── /                                    # Landing page (marketing)
│
├── SOLUTIONS (audience pages)
│   ├── /individuals
│   ├── /institutions
│   ├── /issuers
│   └── /fintechs
│
├── PRODUCTS — RETAIL (in-webapp; Products nav links here directly)
│   ├── /home                            # Webapp home (returning-user landing)
│   ├── /earn                            # Earn surface (Lend / Institutional Yield / Liquidity tabs)
│   ├── /borrow
│   ├── /multiply
│   ├── /assets                          # RWA discovery (in-app)
│   └── /swap
│
├── PRODUCTS — ENTERPRISE (marketing pages)
│   ├── /institutional-yield
│   ├── /off-chain-collateral
│   ├── /fixed-rates                     # Includes Borrow Orders — mechanically the same product
│   ├── /vaults                          # Includes Meta Vaults (evolution of Vaults)
│   └── /rwa-dex
│
├── PRODUCTS — PLATFORM (marketing pages)
│   ├── /buildkit
│   └── /institutional-yield-api         # Productized embed for fintechs (see IY API deck)
│
├── RESOURCES
│   ├── /docs                            # Sub-site (platform-style knowledge base)
│   ├── /blog
│   ├── /security
│   └── /oracles                         # Scope oracle credibility + commercial surface
│
├── COMPANY
│   ├── /about                           # Placeholder (low priority for launch)
│   └── /stories                         # Case studies / launch narratives (Morpho precedent)
│
└── /app                                 # → Redirect to webapp
```

**Notes on the sitemap:**

- **No product marketing pages for retail products.** `/earn`, `/borrow`, `/multiply`, `/swap`, `/assets` are all in-webapp surfaces. The in-app experience handles narrative for retail users.
- **Enterprise products get their own marketing pages.** Institutions, Issuers, and Fintechs need narrative before conversion — the in-app doesn't do that work.
- **Institutional Yield is a crossover.** It has a marketing page at `/institutional-yield`, AND it appears as a sub-tab inside the in-app `/earn` surface (alongside Lend and Liquidity). Individuals visiting `/individuals` → clicking Institutional Yield go to the `/institutional-yield` marketing page; enterprise audiences also go to the marketing page.
- **Oracles lives in Resources, not Products.** Scope serves a similar role to Security — a credibility and commercial surface, not a conversion-focused product surface.
- **Permissioned Markets** is a feature section on Institutions, Issuers, and Fintechs audience pages. Not its own marketing page.
- **Liquidity** (LP vaults) is featured within the Issuers audience page as a secondary capability. No dedicated marketing page.
- **No `/enterprise` page.** Treasury / enterprise use cases sit under `/institutions`.
- **No standalone partners for Re7 Labs, Pantera (as a standalone), Bitget, or Jupiter.** Partner deliberately excluded. (Pantera is mentioned within the Solana Company partner card as a co-manager, not as a standalone.)

### 5.2 Top navigation

Five top-level items:

```
┌────────────────────────────────────────────────────────────────────────────┐
│  [Kamino Logo]                                                              │
│                                                                             │
│  Products ▾    Solutions ▾    Resources ▾    Company ▾    [Launch App]    │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

- **Products ▾** — Mega-menu with the waterfall pattern (see §5.3). Three groupings in Column 1: **Retail / Enterprise / Platform**.
- **Solutions ▾** — Two-column mega-menu. Four audience cards in Column 1; rich preview in Column 2. Does NOT list products to avoid overlap with Products menu.
- **Resources ▾** — Two-column mega-menu. Items in Column 1; rich preview in Column 2. Contents: Docs, Blog, Security, Oracles.
- **Company ▾** — Simple dropdown. Contents: About (placeholder), Stories.
- **[Launch App]** — Primary anchored CTA, right edge. Routes to `/home` for existing users, initiates wallet-connect flow for first-time visitors.

### 5.3 Mega-menu waterfall pattern (for Products)

Three-column waterfall. Hovering an item in one column reveals content in the next column. This pattern is the default richness pattern for Kamino mega-menus.

```
┌─────────────────────────────────────────────────────────────────────────┐
│  COLUMN 1 (Groups)    COLUMN 2 (Items)         COLUMN 3 (Preview)       │
│                                                                          │
│  ▸ Retail             [on hover C1]            [on hover C2]            │
│  ▸ Enterprise           ▸ Item A               ┌─────────────────┐      │
│  ▸ Platform             ▸ Item B               │                 │      │
│                         ▸ Item C               │  Rich preview   │      │
│                                                 │  (visual +      │      │
│                                                 │   explainer +   │      │
│                                                 │   contextual    │      │
│                                                 │   CTA)          │      │
│                                                 └─────────────────┘      │
└─────────────────────────────────────────────────────────────────────────┘
```

**Column 1 (groups)** — Retail · Enterprise · Platform. Hovering a group reveals that group's items in Column 2.

**Column 2 (items)** — Products within the hovered group. Each item is the primary click target (navigates to its marketing page, or into the webapp for Retail items).

**Column 3 (preview)** — On hover of a Column 2 item, Column 3 populates with:
- Rich visual (image, UI screenshot, diagram — brand-appropriate per item)
- One- or two-sentence explainer
- Contextual secondary CTA (differentiated from the primary C2 click — e.g., *"Read the docs →"*, *"Talk to our team →"*, *"Explore the vault →"*)

Not every Column 2 item requires a Column 3 CTA. Items where no meaningful secondary action exists (e.g., Oracles) simply show a visual + explainer.

### 5.4 Mega-menu contents

#### Products ▾ mega-menu

**Column 1 — Groups:**
- **Retail** — products the user operates directly in-app
- **Enterprise** — credit and market infrastructure products for institutional audiences
- **Platform** — products that partners integrate / deploy

**Column 2 contents per group:**

| Group | Items |
|---|---|
| Retail | Earn · Borrow · Multiply · Swap · Assets |
| Enterprise | Institutional Yield · Off-Chain Collateral · Fixed Rates · Vaults · RWA DEX |
| Platform | BuildKit · Institutional Yield API |

**Column 2 click destinations:**
- Retail items → in-webapp surfaces (e.g., `/earn`)
- Enterprise items → marketing pages (e.g., `/institutional-yield`)
- Platform items → marketing pages (e.g., `/buildkit`)

**Column 3 contextual CTAs by item (examples, not exhaustive):**

| Item | C3 CTA |
|---|---|
| Institutional Yield | *"Go to Vault →"* (deep-links to `/earn` with IY tab) |
| Off-Chain Collateral | *"Talk to our team →"* |
| Fixed Rates | *"Talk to our team →"* |
| Vaults | *"Become a curator →"* |
| RWA DEX | *"Onboard your asset →"* |
| BuildKit | *"Read the docs →"* |
| Institutional Yield API | *"Talk to our team →"* |

#### Solutions ▾ mega-menu (two columns)

**Column 1 — Audience cards (four):**
- Individuals
- Institutions
- Issuers
- Fintechs

Each card shows: audience name + one-line positioning statement.

**Column 2 — Rich preview** for the hovered audience:
- Visual (brand-appropriate to the audience)
- Extended positioning description (~2 sentences)
- Contextual CTA (*"View the [Audience] page →"*)

Solutions menu does **not** list products per audience — this would overlap with the Products menu. The audience-specific product surface is on the audience page itself.

#### Resources ▾ mega-menu (two columns)

**Column 1 — Items (four):**
- Docs
- Blog
- Security
- Oracles

**Column 2 — Rich preview** of the hovered item:
- Visual or key stat / fact
- One-sentence explainer
- Contextual CTA (*"Open the docs →"* / *"Read the blog →"* / *"View the security overview →"* / *"Explore Scope →"*)

#### Company ▾ dropdown (simple)

Two items. No mega-menu — content is too thin to justify one:
- About (placeholder — low priority for launch)
- Stories

---

## 6. Homepage Specification

The homepage is the top-of-funnel for all four audiences. Its job is to stake a confident positioning claim, prove credibility with live scale numbers, and route each visitor into their audience-specific deep page via the Audience Router. It pairs brand-positioning work with substantive product and trust content — institutional register throughout, with warmth appropriate to each section.

**Section order:**

1. Hero
2. Audience Router
3. Institutional Yield Spotlight
4. RWA (The Credit Layer for Tokenized Assets)
5. Trust (Built with risk-first discipline)
6. Partners
7. Stories
8. Final CTA close [TBD]
9. Footer [TBD]

Eight content sections + footer. Density is higher than a typical landing page, justified because (a) daily retail bypasses the marketing site entirely via returning-user detection, so the actual audience on this page is acquisition/reactivation + B2B, and (b) Kamino has enough genuine content per section to earn the vertical space.

---

### 6.1 Section 1: Hero

#### Purpose

Stake Kamino's positioning as the connective layer between global capital and the new financial system. Open the page with a claim that institutions, neobanks, issuers, and retail can all hear themselves in.

#### Copy (LOCKED)

One sentence, two visual lines, same font size. Weight hierarchy does the work — the bold first half anchors on familiar institutional vocabulary; the lighter second half lands the aspirational claim.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                  Connecting global capital                     │   ← bold
│                  to the new financial system                   │   ← light
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Line 1 (bold / heavier weight): **"Connecting global capital"**
- Line 2 (lighter weight, same font size): *"to the new financial system"*

Single sentence — one semantic unit, two visual beats. No comma or punctuation break between lines.

#### Proof strip

Two stats. Both are cumulative flow stats (lifetime numbers that compound upward and do not fluctuate with market drawdowns). Must be pulled from live protocol data and refreshed at build/render time.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│        $X.XXB+                      $XXXM+                     │
│        Loans Originated             Interest Generated         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- **Loans Originated** (cumulative) — currently $19B+
- **Interest Generated** (cumulative, to users) — currently $104M+ (refresh against live data)

Two stats, not four. Rationale: speaks to both sides of the market (borrow demand + yield earned), visually cleaner with larger type, both stats only grow over time.

#### CTAs

**None in the hero body.** Routing into the product is handled by:
1. The persistent **[Launch App]** in the top nav (for returning users)
2. The **Audience Router** directly below the hero (for first-time visitors choosing a path)

#### Visual direction

- Heavy typographic emphasis on the headline
- Subtle ambient background — no product UI, no people, no abstract marketing imagery
- Static or with extremely minimal ambient motion
- Proof strip sits below the headline, big type, restrained
- Mobile: lines stack (they already do — this is native mobile behavior for the two-line hero)

#### Open / dependencies

- **Live data pipeline** for proof strip — who owns it, refresh cadence, fallback behavior if API fails

---

### 6.2 Section 2: Audience Router

#### Purpose

Route every first-time visitor into the audience-specific deep page built for them. This is the top-level IA choice on the homepage — four equal-weight paths, no default.

#### Section header (LOCKED)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            Powering every part of the onchain economy           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Four equal-width boxes, full site width

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│           POWERING EVERY PART OF THE ONCHAIN ECONOMY                   │
│                                                                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐          │
│  │            │ │            │ │            │ │            │          │
│  │INDIVIDUALS │ │INSTITUTIONS│ │  ISSUERS   │ │  FINTECHS  │          │
│  │            │ │            │ │            │ │            │          │
│  │  [tagline] │ │  [tagline] │ │  [tagline] │ │  [tagline] │          │
│  │            │ │            │ │            │ │            │          │
│  │     →      │ │     →      │ │     →      │ │     →      │          │
│  │            │ │            │ │            │ │            │          │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Box labels (LOCKED)

**Individuals · Institutions · Issuers · Fintechs**

Left-to-right order. All four boxes equally weighted visually.

#### Per-box taglines

To be drafted after the four audience pages are specced. The box taglines need to match the content the box routes to — drafting them before the audience pages risks a disconnect. Placeholder for now.

#### Interaction behavior

- Click any box → triggers an **entry animation** that takes the user one level deeper into the audience-specific page
- The animation should feel like *stepping through a door into a world built for that audience* — not a standard page transition. Design/motion brief to be authored separately.
- Hover state: subtle elevation / border glow / color shift — design treatment TBD.

#### Routes

- Individuals → `/individuals`
- Institutions → `/institutions`
- Issuers → `/issuers`
- Fintechs → `/fintechs`

#### Open / dependencies

- **Per-box taglines** — depends on audience pages being specced
- **Entry animation motion brief** — separate design doc required
- **Hover state visual treatment**

---

### 6.3 Section 3: Institutional Yield Spotlight

#### Purpose

Make the hero's positioning claim literal with the single product that delivers on it in market right now. This is the rebrand's flagship proof-of-thesis moment — the most important section on the homepage after the hero and router.

#### Heading & subhead

- **Heading:** *Institutional yield, onchain.*
- **Subhead:** *Generate stablecoin yield via institutional, overcollateralized, and regulated lending operations.*

#### Main visual

The section's anchor image is the **kiUSDC share-price appreciation chart**:

- **kiUSDC token mark** (lowercase "ki" + uppercase "USDC") prominent, on-brand typography. This is the receipt token users hold when they deposit — establishing a branded asset identity inside Kamino's design system.
- **Live, hoverable chart** of the kiUSDC share price over time. Share price ticks up every Solana block (~400ms) as yield accrues. Even at week 1 the chart has a visible upward curve from launch.
- Hover reveals specific share-price values at each point.

**Chart caption (small, inline with chart):**

*Deposit USDC · Receive kiUSDC · Earn yield*

Three phrases, bullet-separated. Serves as a minimal "how it works" walkthrough without needing a standalone block — meets TradFi-adjacent visitors' need for mental-model scaffolding without adding visual weight.

#### Live stats row

Two stats, pulled live. Displayed adjacent to or below the chart.

- **Projected annual return** — 6–8% (shows live current rate when data supports it)
- **Vault capacity** — *$XM of $25M* with visual fill indicator

**Fully subscribed state:** When vault is at cap, the capacity stat swaps to *"Fully subscribed"* and the primary CTA changes to *"Join the waitlist"*.

#### Bridge sentence

Below the visual block, before the four-card row:

> *Kamino Institutional Yield features structural properties that differentiate from both conventional DeFi and conventional private credit products.*

Positions IY against two named competitive categories (DeFi yield pools + traditional private credit) without naming specific competitors. Implements Marius's "win on framework" principle.

#### Four structural cards (below the bridge)

Side-by-side row on desktop, stacks on mobile. Each card: bold heading + short supporting paragraph.

**Card 1 — Regulated.**
> The lending operation issuing loans to institutions is licensed and supervised by the Liechtenstein Financial Market Authority, with ongoing reporting to the regulator.

**Card 2 — Overcollateralized.**
> Every loan in the portfolio is backed by high-quality digital assets, with a maximum LTV of 60% allowed to borrowers at the time of origination. Proactive margin calls are issued to ensure timely collateral top-ups or liquidations.

**Card 3 — Qualified Custody.**
> Collateral is transferred to segregated accounts with qualified custodians, and ownership remains with the borrower throughout the loan. Custody is governed by tripartite agreements, with rehypothecation contractually prohibited.

**Card 4 — Transparent.**
> Every loan, every collateral position, every LTV ratio is visible in real time in the vault interface — sourced from the same reporting infrastructure used by the regulator. Attestations by an independent accounting firm are published monthly.

~85 words across the four cards. Substantive but scannable — matches the content density precedents set by Mercury's sub-product sections, Linear's product pillars, Notion's agents grid.

**Language compliance:** No named counterparties beyond the regulator (Liechtenstein FMA). "Industry-standard reporting infrastructure" substitutes for Haruko; "independent accounting firm" substitutes for Andersen UK; "qualified custodians" substitutes for Anchorage/BitGo/Zodia.

#### CTAs

Two buttons, design-system primary + secondary pattern.

- **Primary: "Go to Vault"** → deep-links to `/earn` with the Institutional Yield tab preselected
- **Secondary: "Read more"** → `/institutional-yield` marketing page

When fully subscribed: Primary swaps to *"Join the waitlist"*. Secondary unchanged.

#### Layout notes

Top → bottom of the section:
1. Heading + subhead
2. Main visual (chart with kiUSDC, caption, live stats)
3. Bridge sentence
4. Four structural cards (row)
5. Two CTAs

#### Live data requirements

- **kiUSDC share price over time** — continuous series, from launch to now
- **Projected annual return** — current rate (with 6-8% band visible as context)
- **Vault capacity** — current deposits / $25M cap
- **Attestation status** (for future versions of the section — not required for launch)

#### Open / dependencies

- **Primary CTA button verb confirmation** — "Go to Vault" is locked; design system may have specific verb conventions to inherit
- **Design-system treatment** for the kiUSDC token mark (needs a Kamino-branded visual asset, not just the literal characters)

---

### 6.4 Section 4: RWA — The Credit Layer for Tokenized Assets

#### Purpose

Position Kamino as the credit infrastructure layer for the RWA movement — the macro story of traditional capital markets moving onchain. Concrete proof sits in PRIME's growth and the breadth of tokenized assets already active on Kamino. Serves both buy side (Explore RWAs) and sell side (Onboard Your Asset).

#### Heading

> # The Credit Layer for Tokenized Assets

The definite article does work — Kamino is **the** layer, not a layer.

#### Main visual

**Interactive chart of total RWA market size on Kamino over time.**

- Live, hoverable
- Chart shows growth trajectory (updates as new RWAs are onboarded and scale)
- Headline stat is read directly from the chart: total RWA market size on Kamino (e.g., *"$XB across tokenized assets"*)
- Hover reveals per-period detail

#### Asset logo strip (single line)

Below the chart, a single row of tokenized asset logos. Ambient animation — subtle fade in/out rhythm, NOT a continuously-scrolling marquee. Represents the breadth of tokenized assets live on Kamino.

**Assets (as of launch — will grow over time):**

PRIME · TSLAx · SPYx · AAPLX · GOOGLX · MSTRX · ONyc · ACRED · USCC · Syrup

Ten tiles at launch, fits a single row comfortably on desktop. Mobile stacks to 2 columns.

**Important:** These must be *real tokenized assets*. Not crypto-native assets. cbBTC and JitoSOL are NOT tokenized assets — they're crypto-native wrapped/staked representations. The tokenized-asset criterion is: the asset represents or is collateralized by real-world economic activity (real estate credit, equities, private credit, Treasuries, etc.).

#### Two CTAs (dual-sided market)

- **Primary: "Explore RWAs"** → `/assets` (in-app RWA discovery page) — **buy side** / capital allocator path
- **Secondary: "Onboard Your Asset"** → opens a **light contact form** (company, contact, asset category, brief description) — **sell side** / issuer path

Light form deliberately over heavy form. Volume of qualified leads matters at this stage; BD filters downstream.

#### Layout notes

Top → bottom:
1. Heading
2. Chart (interactive, hoverable)
3. Asset logo strip (single line, ambient motion)
4. Two CTAs

#### Live data requirements

- Total RWA market size on Kamino (cumulative, with time series for the chart)
- Per-asset size hover data (for chart interactivity)
- Asset roster (so the logo strip reflects current live assets)

#### Open / dependencies

- **Asset logo strip visual treatment** — breathing rhythm pattern; no continuous scroll
- **Onboard form schema and recipient routing** — light form behind the CTA; goes to BD / partnerships inbox

---

### 6.5 Section 5: Trust — Built with risk-first discipline

#### Purpose

The heavy-hitter trust moment. After the positioning (hero), the audience router, and two product-centric sections, this section establishes why every claim above can be trusted. Substantiated by the concrete engineering artifacts Kamino has published, not by flashed stats.

**Sizing:** This is the largest content section on the homepage — roughly 1.2× the vertical weight of Institutional Yield Spotlight. Trust is the heavy hitter; it should feel substantial.

#### Heading

> # Built with risk-first discipline.

#### Subhead / bridge

> *Every design decision at Kamino answers a single question: does this make the protocol safer, or riskier? The discipline shows — in the continuous audits, the in-house oracle, the public risk dashboard, and a codebase that has been open for review since day one.*

Describes the ethos (the organizing question Marius actually asks) and pivots into the concrete artifacts that follow.

#### Three featured rows (alternating layout)

Each row takes roughly 30–35% of the section's vertical height. Image right / image left / image right. Full-width band per row.

---

**Row 1 — Kamino Risk Dashboard** *(image right, text left)*

> ### Kamino risk dashboard
>
> Live risk monitoring across all Kamino markets, with customizable price shock, market risk, and per-loan analysis.
>
> ***Open the dashboard →***

**Visual (right):** Live embed or high-fidelity screenshot of the Kamino risk dashboard — showing LTV distributions, utilization curves, collateral composition, market health, any live alerts. Should feel like a real dashboard, not a mockup.

**CTA:** *Open the dashboard →* → (link to the Kamino risk dashboard URL)

---

**Row 2 — Scope Oracle** *(image left, text right)*

> ### In-house oracle architecture
>
> Kamino maintains its own sophisticated oracle system: Scope — used across all Kamino's products. Scope aggregates feeds from numerous providers, as well as developing in-house feeds when needed, ensuring robust pricing infrastructure for every asset in the system.
>
> ***Explore Scope →***

**Visual (left):** Screenshot of the Scope interface / oracle feed dashboard — price feeds, aggregation logic, oracle health status. If there's a live Scope surface, embed; otherwise high-fidelity screenshot.

**CTA:** *Explore Scope →* → `/oracles`

---

**Row 3 — Multisig** *(image right, text left)*

> ### Robust multisig security
>
> Kamino maintains over 10 multisigs, each covering a specific surface area on the protocol. The system is designed to minimize centralization and ensure defense against governance attacks. This includes air-gapped devices, multi-day timelocks on key functions, and sophisticated emergency measures.
>
> ***View our multisigs →***

**Visual (right):** Screenshot of the multisig inspection surface — showing the roster of multisigs, signers, pending and executed transactions, change log. Public-facing.

**CTA:** *View our multisigs →* → (link to public multisig dashboard)

---

#### Supporting card strip (below the three rows)

Three small cards — about 1/3 the vertical weight of a featured row. No preview images; text-and-link format. Deliberately visually distinct from the three featured rows to signal hierarchy.

| **Audited.** | **Bug Bounty.** | **Open Source.** |
|---|---|---|
| 20 independent security audits and 4 formal verifications. All reports public. | $1.5M active bounty on Immunefi — among the largest in Solana DeFi. | The complete Kamino codebase is public. Every line reviewed, every commit inspectable. |
| *View audits →* | *View bounty →* *(to Immunefi)* | *View on GitHub →* |

#### Audit firm logo strip

At the base of the section, single row, monochrome / low-chroma:

*Certora · OtterSec · Ackee · Offside Labs · Sec3 · Informal Systems*

Presence-based. Tells scanners these are not vanity audits — the firms are credible.

#### Section-level closing CTA (optional, quiet)

> *Read the full security overview →* → `/security`

Small link text at the base. Visitors who want the one-page summary go here.

#### Layout notes

Section flow, top → bottom:
1. Heading + subhead
2. Row 1 — Risk Dashboard (full-width, alternating)
3. Row 2 — Scope Oracle (full-width, alternating)
4. Row 3 — Multisig (full-width, alternating)
5. Supporting card strip (three small cards in a row)
6. Audit firm logo strip
7. Section-level CTA

#### Live data / visual dependencies

- **Kamino Risk Dashboard** must be a production public surface, aesthetically polished enough to feature
- **Scope interface** — likewise, public-facing and polished
- **Multisig inspection surface** — must be accessible from a public URL; design polish matters

If any of these three surfaces aren't design-polished at build time, they cannot be featured as section anchors without undermining the section's premise. Design quality on those three pages is a prerequisite for this section to ship.

---

### 6.6 Section 6: Partners

#### Purpose

Showcase Kamino's ecosystem breadth through an interactive network visualization. Hover any partner to reveal how Kamino works with them. This section makes the abstract "connecting global capital" positioning literal — visitors see the literal web of partnerships.

#### Visual treatment (LOCKED)

**Interactive network visualization.** Not a logo wall, not a grid.

- **Kamino at center** — the protocol's own branded mark, visually anchored
- **Partners scattered randomly around Kamino** — no quadrant segmentation, no category grouping
- **Subtle connecting lines between Kamino and each partner** — representing the connection
- **Ambient motion** — gentle drift of peripheral nodes; not aggressive, not distracting
- **Hover a partner** → connection line pulses or highlights; floating card appears with the partnership description
- **Click a partner** → optional deep-link to partner's related marketing page (e.g., Figure → PRIME mentioned in /issuers; Anchorage → /institutions; Gauntlet → /vaults). Not required for launch — hover card may suffice.

**Mobile:** Network visualization doesn't translate well to touch. Mobile substitute: a clean list / card stack per partner with taps expanding hover-equivalent content. Design treatment TBD.

#### 23 partners featured

Partners listed in network randomization order — they should not appear grouped. The order below is for reference only (it's roughly the synthesis order), not a display order.

Each partner has:
- **Partner logo** — on-brand, monochrome-capable
- **Partner name** — used in hover card
- **Hover card copy** — one-sentence description of the partnership (see §7)

---

### 6.7 Section 7: Stories

#### Purpose

Feature three narrative case studies on the homepage — consequential products, markets, or integrations scaled on Kamino. The section is a content teaser; full case studies live on `/stories`.

#### Heading

> # Stories
> *Some of the most consequential products, markets, and integrations scaling onchain finance on Kamino.*

Section heading + one-sentence subhead. Frames the section.

#### Format

Three cards, side-by-side on desktop, stacked on mobile. Each card contains:
- **Category tag** (small, top-left) — thematic, not forced to match audience-router categories
- **Visual** — image, chart, or branded product visual appropriate to the story
- **Headline** — the one-line takeaway
- **Hook** — 1–2 sentences of narrative
- **Stat line** — one big number, prominent
- **CTA** — *Read the story →* (links to `/stories/[slug]`)

#### Three featured stories

---

**Card 1 · RWAs**

> ### How PRIME became DeFi's largest RWA market
>
> Figure launched PRIME — its HELOC-backed tokenized yield instrument — exclusively on Kamino in December 2025. With no token incentives and no retail campaign, the PRIME Market scaled from $0 to over $600M in four months.
>
> **$0 → $600M+ in 4 months**
>
> *Read the story →*

**Visual:** PRIME asset card, or a clean growth chart of PRIME Market size vs. time.

---

**Card 2 · Institutional Yield**

> ### The first regulated credit vault onchain
>
> Kamino launched Institutional Yield in April 2026 — a USDC vault deploying capital into regulated, overcollateralized institutional lending operations, opening an entirely new yield source for onchain depositors.
>
> **6–8% APY · Regulated · Live now**
>
> *Read the story →*

**Visual:** kiUSDC token mark with share-price growth chart, or the vault structure diagram.

---

**Card 3 · Tokenized Equity**

> ### The first onchain credit market for tokenized equity
>
> Kamino became the first major onchain lender to accept tokenized equity as collateral — launching a dedicated xStocks Market in partnership with Backed, where users borrow against tokenized US equities like TSLAx, SPYx, AAPLX, and more.
>
> **First onchain credit market for xStocks**
>
> *Read the story →*

**Visual:** xStocks tile grid showing several tokenized equities, or a borrow-volume chart.

---

#### Section-level link

Below the three cards, a single link:

> *See all stories →* → `/stories`

Quiet, discoverable. Visitors who want more than three features go here.

#### Layout notes

Top → bottom:
1. Heading + subhead
2. Three cards (side-by-side desktop, stacked mobile)
3. Section-level *See all stories →* link

#### Open / dependencies

- `/stories` page exists as a destination — full content library lives there
- Each `/stories/[slug]` has the long-form case study
- The three featured stories on the homepage are deliberate curation, not a feed of the most recent stories

---

### 6.8 Section 8: Close — Build on Kamino + Stay in the loop

The page's closing beat. Two sub-bands in a single visually unified section — a typographic conversion moment (8a) followed immediately by a compact subscribe form (8b). Together they function as the page's deliberate final statement before the footer.

---

#### 8a · Build on Kamino

**Purpose**

Close the page's arc with a clear conversion moment that reprises the "connecting global capital / to the new financial system" hero thesis in a builder-first framing. Single dual-CTA pair so every visitor who's made it this far has a clear next action.

**Copy (LOCKED)**

> # Build on Kamino.
> *The credit and liquidity infrastructure for every part of the onchain economy.*
>
> **[ Start building ]**   **[ Talk to our team ]**

**CTAs (LOCKED)**

- **Primary — *Start building*** → `/buildkit` (BuildKit marketing page, which contains deep-links into `/docs`)
- **Secondary — *Talk to our team*** → opens contact form; routes submissions to `institutional@kamino-foundation.com`

**Visual direction**

- Full-width band with on-brand dark background — visually distinct from the alternating-content sections above. The band should read as *the page's final deliberate statement*, not as another content section.
- **Typographic hero.** No product imagery, no abstract graphics, no illustrations. The heading *"Build on Kamino."* is the visual — set in the primary brand display face, large scale, center-aligned.
- Framing sentence below the heading, lighter weight same font family, muted color relative to the heading.
- CTAs centered horizontally below the framing, standard primary + secondary design-system button pair.
- Generous vertical padding above and below. The band breathes — it is not dense.
- Height: approximately 50-60% of viewport on desktop; the band is meant to feel like a moment, not a tight strip.

**Industry precedent**

The compositional pattern — typographic hero + dual CTAs, full-width, center-aligned, dark restraint — is best exemplified by:
- **Linear**'s closing *"Built for the future. Available today."* band
- **Stripe**'s pre-footer *"Start integrating with Stripe"* band
- **Morpho**'s *"Connect with us"* band

All three use the same architecture: bold typographic promise, minimal decoration, two CTAs, full-width color band distinct from content sections. Kamino matches this register.

**Mobile behavior**

- Heading scales down but remains the visual anchor
- CTAs stack vertically below the framing
- Padding reduces proportionally but the band still feels like a moment, not a footer strip

---

#### 8b · Stay in the loop

**Purpose**

Capture institutional and product-update subscribers. Serves the slower-path nurture: visitors not ready to act today but wanting to stay in the conversation.

**Copy (LOCKED)**

> ### Stay in the loop
> *Institutional updates and product launches, direct from Kamino.*
>
> [ Email address ]   **[ Subscribe ]**

No topic-segmentation checkboxes. Single generic list; downstream segmentation (if needed) happens in the ESP.

**Visual direction**

- Lives **immediately below 8a, within the same color band** — no section break, no new background. Visual continuity signals that 8a and 8b are one unified close.
- Horizontal divider (thin, subtle) between 8a's CTAs and 8b's heading, separating the conversion beat from the subscribe beat without breaking the band
- Compact layout on desktop:
  - Heading (*Stay in the loop*) and framing sentence on one line or stacked on two short lines, left-aligned or centered (match 8a alignment)
  - Email input field + Subscribe button on a single line below
- Email input: single line, subtle inline placeholder (*your@email.com* or similar), matches Kamino design-system form tokens, restrained border/chrome
- Submit button: **secondary-style**, not primary — primary button style is reserved for *Start building* above to preserve visual hierarchy within the band
- Tight vertical rhythm — 8b is notably shorter than 8a, signalling its secondary status

**Industry precedent**

- **Mercury**'s pre-footer *"Stay in the know"* inline subscribe band
- **Stripe**'s newsletter signup at the base of long-form pages
- **Ramp**'s *"Get the latest"* inline form

All three use the compact horizontal pattern: short heading + short description + single email field + submit. Kamino matches.

**Mobile behavior**

- Heading and description stack vertically
- Email field and Subscribe button stack vertically below them
- Full-width input on mobile

**Backend / ESP integration**

- Submissions write to a marketing automation / ESP (Mailchimp, Customer.io, HubSpot, or similar — determined by marketing ops)
- GDPR-compliant consent handling
- Confirmation email / double-opt-in per jurisdictional requirements
- Unsubscribe link in every sent email

---

### 6.9 Section 9: Footer

**Purpose**

Dense, organized, sitemap-style footer covering the full marketing site plus compliance, legal, and social. Every top-tier landing-page reference in the research uses a dense footer because readers who scroll that far are actively investigating — footer is where they expect to find everything.

**Visual register**

- **Background:** dark, on-brand (may match or extend the 8a/8b close-band treatment for visual continuity, or be a distinct deeper tone at design's discretion)
- **Text:** light / off-white on dark
- **Typography:** functional, readable, tighter line-height than body copy — this is reference architecture, not prose
- **Hierarchy within columns:** Column header slightly heavier than link items; sub-section headers within Products column (*RETAIL / ENTERPRISE / PLATFORM*) in small-caps and muted color
- **Density:** four main columns on desktop, full-width; collapses to accordion on mobile
- **Vertical rhythm:** generous padding above columns and below base strip; footer is a presence, not a cramped afterthought

**Industry precedent**

- **Linear** — dark 4-column footer, clean typography, restrained decoration. The closest reference for Kamino's register.
- **Morpho** — dark 4-column, brand logo prominent top-left.
- **Vercel** — clean 4-column with logo + social + mode toggle at the base.

Kamino sits closer to Linear's register than to Stripe's denser 8-column approach. Reflects Kamino's positioning: institutional but modern, serious but not corporate.

**Structure — top to bottom**

**Band 1 — Brand expression (top of footer)**

- Kamino logo (larger scale than standard body usage)
- Optional tagline line below the logo: *"The credit and liquidity infrastructure for onchain finance."* (a compressed, footer-appropriate version of the close-section framing)
- Horizontal divider separating the brand expression from the columns below

**Band 2 — Four main columns**

**Column 1 — Products** (with sub-section headers within the column):

```
Products

RETAIL
Earn
Borrow
Multiply
Swap
Assets

ENTERPRISE
Institutional Yield
Off-Chain Collateral
Fixed Rates
Vaults
RWA DEX

PLATFORM
BuildKit
Institutional Yield API
```

**Column 2 — Solutions:**

```
Solutions

Individuals
Institutions
Issuers
Fintechs
```

**Column 3 — Resources:**

```
Resources

Docs
Blog
Security
Oracles
Stories
```

**Column 4 — Company & Contact:**

```
Company

About
Careers
Press

Contact

institutional@kamino-foundation.com
```

**Band 3 — Base strip**

Horizontal layout, left → right on desktop:
- **Logo** (Kamino mark, smaller scale than the brand-expression logo)
- **Social icons** (right-aligned): X · Discord · Telegram · LinkedIn · GitHub

Below the base strip:
- **Legal links row** — *Terms · Privacy · Disclosures · Jurisdictional Notices*
- **Copyright** — *© 2026 Kamino Foundation*

**Band 4 — Disclaimer (bottom)**

Small, subdued, full-width:

> *Nothing on this website constitutes investment advice. Products on Kamino may be subject to geographic restrictions. See Disclosures for full information.*

Disclaimer serves two purposes: (1) legal cover given IY's regulated posture and multi-jurisdictional user base; (2) a subtle signal to institutional / TradFi readers that Kamino takes compliance seriously. Common footer language at Stripe, Adyen, Mercury, Ondo.

**Mobile behavior**

- Brand expression stays at top (logo + tagline)
- Four columns collapse into an accordion — each column header becomes tappable and expands inline to reveal its links
- Base strip: logo top, social icons wrap to a new line below
- Legal links row stays horizontal and wraps to multi-line as needed
- Copyright and disclaimer stack full-width at the bottom

**Interaction / link behavior**

- All column links navigate to their respective marketing or product pages (per §5.1 sitemap)
- Retail product links go directly into the webapp (not to marketing pages)
- `institutional@kamino-foundation.com` is a `mailto:` link
- Social icons open in new tabs
- Legal links go to dedicated pages (`/terms`, `/privacy`, `/disclosures`, `/jurisdictions`)

**Design dependencies**

- Social icon set (X / Discord / Telegram / LinkedIn / GitHub) — SVG, monochrome, sized for footer base strip
- Legal pages (`/terms`, `/privacy`, `/disclosures`, `/jurisdictions`) — content provided by legal team before launch
- Final jurisdictional disclaimer language — Helen (legal) to provide exact wording; placeholder above is indicative only

---

## 7. Partners — 23 Hover Cards

The network visualization surfaces these 23 partners. Each partner logo on the canvas reveals the hover card below when mouseovered / tapped.

**Partners deliberately excluded:** Re7 Labs, Pantera (as a standalone — Pantera appears within the Solana Company card), Bitget, Jupiter.

### The 23 hover cards (LOCKED)

---

**Figure**

> Kamino is a core distribution partner for Figure's tokenized assets onchain, scaling the PRIME Market on Kamino to over $600M since launch — the single largest RWA market in DeFi.

---

**Securitize**

> The Apollo Diversified Credit Securitize Fund (ACRED) launched on Kamino in May 2025, becoming the first tokenized institutional credit fund to go live on Solana.

---

**Paxos**

> Kamino's credit and liquidity infrastructure has been instrumental in scaling Paxos-issued assets like PYUSD and USDG in DeFi — with over $600M PYUSD deployed on Kamino at its peak.

---

**Superstate**

> Kamino is home to the Superstate Market, the main avenue for credit activity on tokenized assets such as USCC, GLXY, and FWDI.

---

**Maple Finance**

> Kamino supports syrupUSDC as a core yield-bearing collateral asset, scaling the Maple market on Kamino to over $300M in deposits.

---

**Backed Finance**

> Kamino was the first major onchain lender to accept tokenized equity as collateral, launching a dedicated xStocks Market for credit against various xStocks assets issued by Backed.

---

**Gauntlet**

> Gauntlet is an official vault partner on Kamino.

---

**Steakhouse Financial**

> Steakhouse Financial is an official vault curator on Kamino, with its curated vaults scaling to $300M at peak TVL.

---

**Allez Labs**

> Allez Labs is an official contributor and vault curator publishing monthly risk insights on Kamino's markets, curating the Allez SOL and USDC vaults.

---

**Sentora**

> Sentora is the largest vault curator on Kamino, growing the Sentora PYUSD vault to over $500M at peak TVL.

---

**Chainlink**

> Chainlink is a deep oracle-infrastructure partner, working closely with Kamino to develop oracle architecture for tokenized assets onchain and providing Proof of Reserve verification for Kamino's Off-Chain Collateral product.

---

**Jito Labs**

> Kamino is the largest credit platform for JitoSOL in DeFi, and pioneered the first 10× Multiply vault for boosted JitoSOL yields.

---

**Anchorage Digital**

> Anchorage Digital Bank is the first qualified custodian for Kamino's Off-Chain Collateral product, with Anchorage's Atlas system orchestrating LTV and margin management against custodied assets 24/7.

---

**Coinbase**

> Kamino is the primary distribution platform for cbBTC on Solana, scaling cbBTC supply in Kamino's Main Market to over $200M.

---

**Bybit**

> Bybit's Bitcoin Yield product on Solana runs on Kamino's lending engine, and the Bybit Web3 Wallet surfaces Kamino's lending markets directly to Bybit users.

---

**OKX**

> Kamino's credit infrastructure powers yield inside OKX's Web3 Wallet, surfacing Kamino yield opportunities directly to OKX users.

---

**FalconX**

> FalconX is the pilot borrower for Kamino's upcoming Fixed-Rate Lending product, integrating fixed-rate onchain credit directly into FalconX's institutional stack.

---

**Solana Company**

> Managed by Summer Capital and Pantera, Solana Company (Nasdaq: HSDT) will execute the first institutional borrow on Kamino via the Off-Chain Collateral product.

---

**RockawayX**

> RockawayX curates the largest USDC lending vault on Kamino and is a key partner in scaling Kamino's RWA markets.

---

**Phantom**

> Kamino is the largest onchain platform for Phantom's CASH product and the deepest credit market for PSOL — Phantom's native liquid staking token.

---

**Squads**

> Squads is a key infrastructure partner, with the SquadsX integration allowing any multisig to deploy directly into Kamino — giving institutional treasuries seamless access to Kamino's lending markets.

---

**Privy**

> Fintech apps built on Privy's embedded-wallet infrastructure route idle user balances into Kamino Earn Vaults, bringing onchain yield to mainstream consumer products.

---

**Fuse**

> Kamino powers USDC yield inside Fuse — Squads Labs' consumer wallet — giving Fuse users direct access to Kamino's credit infrastructure.

---

### Partner logo requirements

- Monochrome-capable versions of each logo (for optional monochrome treatment)
- Full-color versions
- Consistent aspect ratio / padding
- Square and horizontal variants as needed

### Partner cards — open items

- **Bitget** is currently excluded; confirmation whether BD has additional context to justify reinclusion
- **Fuse** copy was drafted from a one-line brief; BD factual check needed
- **ACRED "May 2025" launch date** was inferred from the governance forum post (20 May 2025); confirm exact date if relevant

---

## 8. Audience Pages [TBD]

Not yet specced. Each of the four audience pages is its own detailed design exercise — a multiple-choice interview with the user is planned to determine each page's content, sections, proof points, and tone before drafting.

### 8.1 /individuals

**Job:** Audience narrative summary for retail. Served to first-time / lapsed / un-cookied retail visitors. Not a daily-retail surface (daily retail bypasses the marketing site via cookie detection).

**Route-through vs dedicated — DECIDED:** Dedicated page. Preserves symmetry with the other three audience boxes; gives Kamino a warmer-voice surface for retail.

**Tone:** Warmer than the homepage; consumer-product narrative on top of the same institutional infrastructure.

**Likely section structure (pre-interview, subject to change):**
- Audience-specific hero
- Retail product summary (Earn / Multiply / Borrow / Swap + permissionless IY access)
- Curators trust cue (Gauntlet / Steakhouse / Allez / Sentora — retail-credible names)
- Social proof (scale stat, optionally)
- Launch App CTA

**Linking behavior:** Clicking product sections on this page links directly into the in-app product surface (e.g., Earn → `/earn` webapp), not to marketing product pages. The one exception is Institutional Yield, which routes to `/institutional-yield` marketing page before going into the webapp — because IY's structural story needs reading before depositing.

To be fully specced.

### 8.2 /institutions

**Job:** Narrative + sales funnel for funds, treasuries, trading firms, market makers.

**Tone:** Institutional register throughout. Goldman-product-sheet adjacent.

**Likely section structure (pre-interview):**
- Audience-specific hero
- Institutional Yield section (key product)
- Off-Chain Collateral section (key product)
- Fixed Rates section (key product)
- Permissioned Markets feature section
- Institutional partner proof (Anchorage, FalconX, Solana Company, Pantera-as-manager)
- Contact sales CTA

**Linking behavior:** Product section clicks route to marketing product pages (Institutional Yield → `/institutional-yield`), which in turn CTA into the webapp or to sales.

To be fully specced.

### 8.3 /issuers

**Job:** Narrative + sales funnel for RWA tokenizers, tokenized equity issuers, differentiated stablecoin issuers.

**Tone:** Partnership register. "We scaled PRIME with Figure; here's what we can do with yours."

**Likely section structure (pre-interview):**
- Audience-specific hero
- PRIME as case study / proof
- Vaults section (curator ecosystem → an asset issuer can also become a curator)
- RWA DEX section
- Permissioned Markets feature section
- Multiply as distribution engine (how PRIME scaled via Multiply)
- Contact partnerships CTA

To be fully specced.

### 8.4 /fintechs

**Job:** Narrative + integration funnel for consumer apps, wallets, neobanks, exchanges looking to embed yield/credit.

**Tone:** Developer/builder + commercial register. "Here's how you integrate Kamino; here's the commercial model."

**Likely section structure (pre-interview):**
- Audience-specific hero
- BuildKit section (API + SDK)
- Institutional Yield API section (productized embed with revenue share)
- Permissioned Markets feature section
- Integration examples (Phantom CASH, OKX Web3 Wallet, Bybit Bitcoin Yield, Privy-powered fintechs)
- Revenue share model explanation
- Contact integrations CTA

To be fully specced.

---

## 9. Product Marketing Pages [TBD]

Not yet specced. Each product marketing page is its own detailed exercise.

### 9.1 /institutional-yield

**Scope:** The anchor Enterprise page. Deep on mechanics, structural guarantees, transparency story, lending criteria, regulatory posture, custody model, withdrawal mechanics, attestation cadence.

**Key content elements (preliminary):**
- Hero echoing homepage IY Spotlight
- Full structural explanation (ETF-mandate framing; credit → yield diagram)
- Regulatory + custody deep-dive
- Real-time per-loan data embed
- Withdrawal mechanics walkthrough
- FAQ
- Deposit CTA (to webapp IY tab)

### 9.2 /off-chain-collateral

**Scope:** Institutional-borrow product page. Tri-party custody, 65% max LTV, 70% liquidation, 3-month fixed-rate terms, rollover.

**Key content elements:**
- Hero
- How it works (depositor → lending op → regulated borrow chain)
- Anchorage Atlas integration
- Chainlink Proof of Reserves attestation
- Eligibility criteria
- Sales contact CTA

### 9.3 /fixed-rates

**Scope:** Fixed-rate + fixed-term credit primitive. FalconX pilot. Includes Borrow Orders (mechanically the same product).

**Key content elements:**
- Hero
- Rate-duration grid explainer
- Conditional Liquidity mechanism
- Withdrawal queue + rollover mechanism
- FalconX case (when live)
- Sales contact CTA

### 9.4 /vaults

**Scope:** Vault infrastructure + curator ecosystem. Includes Meta Vaults (evolution of Vaults) as a subtopic. Primarily positioned for the curator audience.

**Key content elements:**
- Hero
- Vault architecture (Market Layer + Vault Layer)
- Meta Vaults (coming)
- Curator ecosystem (Gauntlet, Steakhouse, Allez, Sentora, MEV Capital, Re7 — acknowledging Re7 is still a curator even if deprioritized from partner callouts)
- Economics / first-loss capital model
- Become a curator CTA

### 9.5 /rwa-dex

**Scope:** Oracle-priced liquidity for tokenized assets. For issuers.

**Key content elements:**
- Hero
- How it works (oracle-priced AMM — removes MM agreement requirement)
- Issuer value prop
- Integration pathway
- Onboard your asset CTA

### 9.6 /buildkit

**Scope:** API + SDK for fintechs to embed Kamino products. Live at `kamino.com/build`.

**Key content elements:**
- Hero
- What you can build (Earn, Multiply, Borrow embeds)
- Integration steps
- Privy embedded wallet support
- KYC/KYB compliance architecture
- Links deep into `/docs` for each capability
- Start building CTA / talk to our team CTA

### 9.7 /institutional-yield-api

**Scope:** Productized IY embed for fintechs. See the Institutional Yield API deck at `context/decks/Institutional Yield API - Product Flows.pdf` for full product mechanics.

**Key content elements:**
- Hero
- The vault architecture diagram (20/40/40: liquidity buffer + PRIME exposure + BTC-backed credit)
- Blended yield (~6.33%) breakdown
- Revenue share model — user earns up to 2.5% APY, fintech earns everything above
- Deposit / withdrawal flow
- Overdrawn buffer mechanics
- Real-time value accrual (~400ms / Solana block)
- Talk to our team CTA

### 9.8 /oracles (lives in Resources)

**Scope:** Scope oracle credibility + potential commercial surface.

**Key content elements:**
- Hero
- Scope architecture overview
- Aggregation methodology
- In-house feeds
- Use across Kamino products
- Commercial pathway (Scope as external oracle service, if pursued)
- Integration contact CTA

---

## 10. Resources & Company Pages [TBD]

### 10.1 /docs

Sub-site, platform-style knowledge base. Separate design system from marketing. May be hosted on a dedicated subdomain or as a sub-tree of kamino.com.

### 10.2 /blog

Blog / editorial content. Hosts long-form posts, product announcements, market commentary.

### 10.3 /security

Comprehensive security page. Audits, bug bounty, formal verifications, open-source, operational security (multisigs, timelocks), incident history (zero security incidents to date), risk framework.

### 10.4 /oracles

Scope oracle page — described above in product marketing pages (§9.8). Lives in Resources, not Products, because it is primarily a credibility + commercial surface rather than a user-facing product.

### 10.5 /stories

Full library of case studies and launch narratives. The homepage Stories section teases three; `/stories` carries the complete set. Morpho precedent.

Each story is `/stories/[slug]` with:
- Full narrative
- Partner context
- Stats and growth data
- Integration detail
- Visual assets

### 10.6 /about [placeholder]

Low-priority for launch. Placeholder. If the Kamino Foundation / "There Is Only KMNO" story matures into public-ready positioning, it lives here.

---

## 11. Design System & Implementation Notes

### 11.1 Design system

Full Kamino design system has been uploaded to Claude Design. Copy and layout specs in this document should be built using those design-system tokens, components, and conventions.

**Key components referenced in the spec:**
- Primary button + Secondary button (used as dual-CTA pattern across product-spotlight sections)
- Card (used for structural claim rows, partner cards, story cards, supporting card strips)
- Mega-menu containers (Products 3-col waterfall; Solutions 2-col; Resources 2-col; Company simple dropdown)
- Live-data stat display (hero proof strip, IY Spotlight stats)
- Interactive chart (kiUSDC chart, RWA growth chart, risk dashboard embed)
- Network visualization canvas (Partners section)
- Entry animation (Audience Router click transitions)
- Ambient logo strip (RWA asset strip — breathing rhythm)
- Alternating full-width row (Trust block three featured rows)

### 11.2 Live data requirements

The following sections require live data pipelines:

| Section | Live data |
|---|---|
| Hero | Loans Originated (cumulative), Interest Generated (cumulative) |
| IY Spotlight | kiUSDC share price time series, Projected annual return, Vault capacity |
| RWA Section | Total RWA market size on Kamino (time series), per-asset size |
| Trust Block | Risk Dashboard embed/screenshot data (if embed, dashboard itself is live) |

Data pipeline owner, refresh cadence, and fallback behavior need to be specified per stat.

### 11.3 Entry animation (Audience Router click-through)

Motion brief to be authored. Key characteristics:
- Feels like *stepping through a door into a world built for that audience* — not a standard page transition
- Audience-specific (Individuals transition may differ visually from Institutions)
- Consistent rhythm across the four boxes — same structural pattern, different visual treatments
- Mobile-appropriate (touch-optimized, not mouse-hover-dependent)

### 11.4 Mobile considerations

- **Hero** — two visual lines stack naturally on mobile (they already do)
- **Audience Router** — four-box row becomes 2x2 grid on tablet, single column on mobile
- **IY Spotlight** — kiUSDC chart remains primary; stats below; four structural cards stack as rows
- **RWA Section** — chart full-width; logo strip wraps to 2-column on mobile
- **Trust Block** — three featured rows stack vertically on mobile (no alternating layout)
- **Partners** — network visualization does NOT work on mobile; substitute is a card-stack list view (design treatment TBD)
- **Stories** — three cards stack vertically on mobile

### 11.5 Interaction patterns

- **Mega-menu waterfall** — desktop-primary pattern. Mobile substitute: tapping a top-nav item opens a full-screen stacked menu with Column 1 items, tapping one expands Column 2 inline, tapping a C2 item navigates (skipping C3 preview on mobile).
- **Hover cards** on Partners — on mobile, tap-to-reveal with dismissable modal or inline expansion
- **Interactive charts** — hover reveals values on desktop; on mobile, tap-to-pin
- **Audience Router boxes** — hover states on desktop (subtle elevation / glow); tap-feedback on mobile

### 11.6 Accessibility

- All ambient animations respect `prefers-reduced-motion`
- Hover-only interactions have tap equivalents on mobile
- Contrast ratios meet WCAG AA minimum for all text
- Network visualization includes screen-reader-accessible list of partners with descriptions (the hover-card copy)
- Entry animations can be skipped via keyboard

---

## 12. Open Questions & Decisions Deferred

### Locked and resolved

- Hero copy: *"Connecting global capital / to the new financial system"*
- Proof strip: Two stats — Loans Originated + Interest Generated
- Audience Router header: *"Powering every part of the onchain economy"*
- Four audience labels: Individuals · Institutions · Issuers · Fintechs
- Site behavior: Coinbase pattern
- Nav structure: Products (mega-menu 3-col waterfall) · Solutions (2-col) · Resources (2-col) · Company (simple dropdown) · [Launch App]
- Products mega-menu groupings: Retail · Enterprise · Platform
- Full product list (Enterprise: IY, Off-Chain Collateral, Fixed Rates, Vaults, RWA DEX; Platform: BuildKit, IY API)
- Oracles in Resources (not Products)
- Permissioned Markets as a feature section (not its own marketing page)
- Individuals gets a dedicated `/individuals` page (not route-through to `/earn`)
- 23-partner list (excluding Re7, Pantera standalone, Bitget, Jupiter)
- All 23 partner hover cards (copy locked)
- **All nine homepage sections** — Hero, Audience Router, IY Spotlight, RWA, Trust, Partners, Stories, Close (8a Build on Kamino + 8b Stay in the loop), Footer — content, copy, structure, and visual direction locked

### Open / to resolve

- **Per-box taglines for Audience Router** — depends on audience pages being specced
- **Entry animation motion brief** — separate design spec needed
- **Bitget inclusion reconfirmation** — currently excluded; confirm with BD
- **Fuse factual check** — copy drafted from a one-line brief; confirm with Dawid
- **ACRED launch date** — assumed "May 2025" from governance forum post; confirm exact
- **Audience pages (all four)** — being handed off via `page-specs/audiences/` for detailed specification
- **Product marketing pages (all eight)** — being handed off via `page-specs/products/` and `page-specs/resources/oracles.md` for detailed specification
- **Live data pipeline ownership and cadence** — per stat (Hero proof strip, IY Spotlight chart + stats, RWA chart)
- **Kamino risk dashboard, Scope, and multisig public surfaces** — must be design-polished enough to feature in the Trust block
- **Jito tone posture** — copy assumes forward framing per Dawid's most recent direction; if internal "cooled" read is still accurate, revisit
- **Legal pages content** — `/terms`, `/privacy`, `/disclosures`, `/jurisdictions` — content provided by legal team before launch
- **Final jurisdictional disclaimer language** — Helen (legal) to provide exact wording; placeholder in Footer §6.9 is indicative only
- **ESP / marketing automation integration** for Stay-in-the-loop form (§6.8b) — determined by marketing ops

---

## 13. Handoff Notes for Claude Design

### What Claude Design is inheriting

This document is the comprehensive spec. Paired with:

- `research/01-landing-page-patterns.md` — 25-site external research grounding the design choices
- `research/02-kamino-deep-comprehension.md` — Kamino context
- `research/03a-thesis-principles-architecture.md` — strategic thesis + principles
- `research/03b-audiences-tensions-roadmap.md` — audience-layer thinking
- `research/partners-01-…` through `research/partners-04-synthesis.md` — partner research behind the 23 hover cards
- `context/decks/Institutional Yield API - Product Flows.pdf` — the definitive source for IY API product mechanics
- Kamino's uploaded design system — tokens, components, brand

### Build order recommendation

1. **Design system alignment** — ensure all typography, color, spacing, and component conventions are applied consistently across the build
2. **Homepage** — sections 1–7 first (spec-complete); sections 8–9 later
3. **Audience pages** — `/individuals` first (warmer voice, simpler content); then `/institutions`, `/issuers`, `/fintechs`
4. **Product marketing pages** — `/institutional-yield` first (flagship); then `/off-chain-collateral`, `/fixed-rates`, `/vaults`, `/rwa-dex`, `/buildkit`, `/institutional-yield-api`
5. **Resources & Company pages** — `/stories`, `/security`, `/oracles`, `/blog`, `/docs` sub-site scaffolding, `/about` placeholder

### Critical design decisions to preserve

- **Hero is typographic, not illustrative.** Don't over-design with imagery that competes with the positioning line.
- **Audience Router is the page's second beat** — four equal-weight boxes, not a visual hierarchy. All four audiences are equally valued.
- **IY Spotlight features kiUSDC as a branded visual asset** — kiUSDC is a real token and must be designed as such, not represented as a generic badge.
- **RWA Section's asset logo strip is ambient (breathing), not scrolling.** The distinction matters — a marquee reads as a DeFi ticker; an ambient strip reads as curated.
- **Trust block's three featured rows have alternating layouts** — image R / L / R. This rhythm is deliberate.
- **Partners is a network visualization, not a logo wall.** The network is the point. Don't regress to a grid.
- **Stories cards are rich, not minimal.** Visual + headline + hook + stat + CTA per card.

### Copy editing authority

- Copy in this spec is LOCKED where noted. Design should not re-edit locked copy without user (Dawid's) approval.
- Placeholder copy ([TBD]) is subject to drafting and should be raised back to the team before invention.

---

*End of specification.*
