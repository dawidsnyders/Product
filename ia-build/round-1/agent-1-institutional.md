# Kamino Site IA — Round 1 — Agent 1 (Institutional-First / Business-Strategy Lens)

**Thesis the IA must make undeniable:** *Kamino is capital-markets infrastructure for the tokenized economy.* Every nav decision below is judged against one question — does it move a sophisticated institutional buyer (wealth/asset manager, fund/trading firm, treasury/corporate, asset issuer, fintech) closer to believing Kamino is **safe, real, and built for them**, and toward a conversation with sales or a self-serve deployment?

A note on stance: I diverge from the current offering-map in several structural ways, argued in §7. The biggest: **I do not lead the top nav with a generic "Products" menu.** A finance buyer does not shop a product menu the way an SMB shops Stripe — they arrive asking "can this hold my capital / my asset / my mandate, and who else trusts it?" The IA is therefore organized around **who you are and what you're trying to do**, with the product catalog and the infrastructure moat sitting underneath as proof and detail.

---

## 1. Top-level navigation

```
[Kamino logo]   Solutions   Platform   Developers   Security   Company        [Launch App ▸]
```

Six top-level items. Reasoning for each, and what I deliberately removed:

- **Solutions** (mega menu) — the front door for every buyer. By-who and by-job. This is where institutions self-identify and get routed. **Leads the nav** because the institutional buyer navigates by identity and mandate before catalog.
- **Platform** (mega menu) — *renamed from "Products."* Holds the three capability hubs (Credit · Liquidity · Yield) AND surfaces the infrastructure moat (Markets · Scope · Permissioning · Vault engine · Curation) as first-class. The word "Platform" tells an institution this is infrastructure they deploy on, and it legitimizes putting the moat in the menu. See §7-A for the full argument — this is my single biggest divergence.
- **Developers** (mega menu) — docs / API / SDK / BuildKit / embed. The integration audience and every engineer's home.
- **Security** (direct link to the page, with a small flyout to the two live dashboards) — *promoted to top-level, not buried under Company.* For an institution, security and transparency are not a footer item; they are the gating question. A standalone, top-level **Security** link signals confidence and is the most-clicked link in any institutional diligence session. See §7-B.
- **Company** (mega menu) — about, customers/case studies, newsroom, careers, legal/compliance, contact. Houses the trust-by-association proof (who already uses Kamino).
- **Launch App** (button, right-aligned, primary style) — the consumer/app entry and the self-serve action. Persistent CTA. Distinct visual treatment so it never competes with the nav reading order.

**Removed / demoted vs. a naive build:**
- No top-level "Pricing" — Kamino's commercial model is take-rate/curator-fee, not a SaaS price card; pricing/commercials live inside Platform → Curation and inside Solutions → Curators, and inside sales conversations.
- No top-level "Consumer / App" word — the app is the **Launch App** button (action, not a browse destination) plus a deep "Kamino App" page reached from Solutions → Individuals and from the Platform menu's app tile. The app is a differentiator we show, but a finance buyer should not hit "Consumer" as the second nav item.

**Utility / right side (secondary):** Docs (quick link, duplicates Developers entry for engineers who know what they want), Search, and the **Launch App** button.

---

## 2. The mega menus — every item, every type

Type legend: **[hub]** = capability hub page · **[deep]** = deep product page · **[infra]** = infrastructure page (the moat) · **[tile]** = featured visual tile · **[surface]** = audience/use-case/delivery landing · **[dash]** = live dashboard.

### 2.1 Solutions (the front door)

Two columns of identity + one column of jobs + a featured institutional tile. This is the highest-value menu and it leads the nav.

```
┌─ BY WHO YOU ARE ──────────┬─ BY WHAT YOU'RE DOING ─────────┬─ FEATURED ───────────────┐
│ Institutions        [surface] │ Offer credit against           │ ┌──────────────────────┐ │
│   ├ Wealth & asset managers   │   tokenized assets    [surface]│ │  INSTITUTIONS          │ │
│   ├ Funds & trading firms     │ Borrow against BTC    [surface]│ │  "$1B+ RWA on-chain,   │ │
│   └ Treasuries & corporates   │ Launch a managed fund [surface]│ │   0 bad debt, regulated│ │
│ Asset issuers        [surface]│ Earn on idle treasury [surface]│ │   credit, qualified    │ │
│ Fintechs & apps      [surface]│ Embed yield in your app[surface]│ │   custody."            │ │
│ Curators & managers  [surface]│ List & finance an asset[surface]│ │  [Talk to our team ▸] │ │
│ Individuals          [surface]│                                │ │  [Read the thesis ▸]  │ │
└───────────────────────────────┴────────────────────────────────┴──────────────────────────┘
```

- **Institutions** is one audience page with three anchored sub-sections (wealth & asset managers · funds & trading firms · treasuries & corporates). The three sub-items in the menu deep-link to the relevant section + can graduate to their own pages later. Listed **first and at the top-left** — the eye starts there.
- **By what you're doing** holds the use-case pages. I expand the offering-map's 3 to **6** (added: Earn on idle treasury · Embed yield in your app · List & finance an asset) because each maps to a named institutional job already implied by the inventory, and a finance buyer navigates by job at least as often as by identity. See §6.
- **Featured tile** is the institutional proof tile — the single most important real estate in the whole nav under my lens. It carries the headline trust numbers and the two institutional CTAs: **Talk to our team** (white-glove sales) and **Read the thesis** (the capital-markets-infrastructure narrative / a manifesto page under Company). This is how white-glove is surfaced at the top of the funnel.

### 2.2 Platform (capability hubs + the moat)

Four columns: three capability hubs, then a dedicated **Infrastructure** column that surfaces the moat. Plus the app tile (kept, as a differentiator, but placed last in reading order so the institutional story leads).

```
┌─ CREDIT [hub] ────┬─ LIQUIDITY [hub] ──┬─ YIELD [hub] ──────┬─ INFRASTRUCTURE ────┬─ APP [tile] ─────┐
│ Fixed Rates [deep]│ Swap         [deep]│ Earn Vaults  [deep]│ Markets      [infra]│ ┌──────────────┐ │
│ Borrowing    [deep]│ RFQ         [deep]│ Institutional      │ Scope (oracle)[infra]│ │ Kamino App    │ │
│ Permissioned      │ RWA Liquidity[deep]│   Yield      [deep]│ Permissioning [infra]│ │ The consumer  │ │
│   Markets    [deep]│ Liquidity   [deep]│ Meta Vaults  [deep]│ Vault Engine  [infra]│ │ surface.      │ │
│ Off-Chain         │   Vaults          │ Permissioned       │ Curation     [infra]│ │ [Launch App ▸]│ │
│   Collateral [deep]│                   │   Vaults     [deep]│ Liquidations  [infra]│ │ [Learn more ▸]│ │
│ Multiply     [deep]│                   │ Curation     [deep]│                     │ └──────────────┘ │
│ Market Curation   │                   │   (Vault Curation)│ ─────────────────── │                  │
│   [deep→Curation] │                   │                    │ How it composes ▸   │                  │
└───────────────────┴────────────────────┴────────────────────┴─────────────────────┴──────────────────┘
```

Departures from the current map, all argued in §7:
- **"Yield Suite" → "Yield."** Cleaner, and "Suite" reads like a sub-brand a buyer has to decode. (§7-C)
- **Infrastructure column added to the menu.** The offering-map deliberately keeps infra OUT of the menu. I argue the opposite for the institutional buyer: the moat IS the product to them. An asset manager does not get convinced by "Fixed Rates"; they get convinced by *Scope can price my fund's NAV with halt-aware guards* and *Permissioning gates my venue per-wallet and reverses instantly.* Hiding the moat hides the reason to trust. I surface five infra pages + Liquidations, with a "How it composes" link to a single explainer that shows markets+vaults as one machine. (§7-A)
- **"Kamino Swap" → "Swap"; "Lending Vaults" → "Earn Vaults."** Brand the word only where the generic word is ambiguous; "Swap" in the Liquidity column is unambiguous. (§7-C)
- **Market Curation / Vault Curation** both link to the single **Curation** [infra] page, framed per hub (Credit frames it as "run your own market"; Yield frames it as "run your own vault"). One page, two doorways.
- **App tile placed last (rightmost).** Kept because it's a genuine differentiator from Stripe, but the institutional reading order leads with capability + moat, ends with the consumer surface.

### 2.3 Developers

```
┌─ BUILD ─────────────────┬─ REFERENCE ──────────────┬─ EMBED / WHITE-LABEL ──────┬─ FEATURED ──────┐
│ Overview        [hub]   │ API Reference     [deep]  │ BuildKit          [deep]   │ ┌─────────────┐ │
│ Quickstart      [deep]  │ Public API        [deep]  │ Institutional Yield API[deep]│ │ "Embed yield │ │
│ SDKs            [deep]  │ Tokens API        [deep]  │ Embedded Wallets  [deep]   │ │  in a few    │ │
│ Concepts        [deep]  │ Portfolio API     [deep]  │ White-Label Vaults[deep]   │ │  lines"      │ │
│ Changelog       [deep]  │ Historian (data)  [deep]  │ → Fintechs solution[surface]│ │ [Get keys ▸]│ │
│ Status          [dash]  │                           │                            │ └─────────────┘ │
└─────────────────────────┴──────────────────────────┴────────────────────────────┴─────────────────┘
```

Developers is a **delivery hub, not an audience** (per the map). The "Embed / white-label" column is the BuildKit story's home, and it cross-links to the Fintechs audience page (the business framing) so engineers and their PMs land in the right place.

### 2.4 Company

```
┌─ ABOUT ─────────────┬─ PROOF ───────────────────┬─ RESOURCES ──────────────┐
│ About Kamino [deep] │ Customers & case studies   │ Newsroom / Press  [deep] │
│ The thesis   [deep] │   [surface]                │ Blog / Research   [deep] │
│ (manifesto)         │ Partners & curators[surface]│ Brand / Media kit [deep] │
│ Careers      [deep] │ Trust & compliance [deep]  │ Contact / Talk to us[deep]│
│ Legal        [deep] │   (regulatory posture)     │                          │
└─────────────────────┴────────────────────────────┴──────────────────────────┘
```

"The thesis" (the capital-markets-infrastructure manifesto) lives here and is also linked from the Solutions featured tile. "Trust & compliance" is the regulatory/legal-posture page distinct from the engineering-security page (which is its own top-level item).

---

## 3. Complete page inventory, by page type

### Hubs (3)
- Credit `[hub]`
- Liquidity `[hub]`
- Yield `[hub]`

### Deep product pages (≈20)
**Credit:** Fixed Rates · Borrowing (variable) · Permissioned Markets · Off-Chain Collateral · Multiply
**Liquidity:** Swap · RFQ · RWA Liquidity (the RWA DEX) · Liquidity Vaults (CLMM)
**Yield:** Earn Vaults · Institutional Yield · Meta Vaults · Permissioned Vaults · Curation (shared — see infra)
*(Section-only, docs-backed, no dedicated page: Borrow Orders · Conditional Liquidity · Obligation/lever-up/stop-loss orders · Leverage · Repay-with-collateral/swap-collateral/swap-debt · Cross-chain bridge — each explained inline in its hub and linked to docs.)*

### Infrastructure pages — the moat (6)
- Markets (KLend) `[infra]` — canonical home
- Scope (oracle / pricing) `[infra]` — canonical home (+ oracles.kamino.fi dashboard)
- Permissioning (kperm) `[infra]` — **own page** (I resolve the open decision against folding it into Markets; §7-D)
- Vault Engine (kVault) `[infra]`
- Curation (Curation Suite) `[infra]`
- Liquidations `[infra]` — auction + soft/auto-deleverage + maturity liquidations; routing-fed; scam-wick protection cross-linked from Scope

### Audience pages — by-who (5 → effectively 7 with sub-segments)
- Institutions `[surface]` (sub-sections: Wealth & asset managers · Funds & trading firms · Treasuries & corporates)
- Asset issuers `[surface]`
- Fintechs & apps `[surface]`
- Curators & managers `[surface]`
- Individuals `[surface]` (= the consumer story, audience-framed)

### Use-case pages — by-job (6)
- Offer credit against tokenized assets `[surface]`
- Borrow against BTC `[surface]`
- Launch a managed fund `[surface]`
- Earn on idle treasury `[surface]` *(new)*
- Embed yield in your app `[surface]` *(new)*
- List & finance a tokenized asset `[surface]` *(new)*

### Delivery surfaces (2 hubs)
- Developers `[hub]` (with deep pages: Quickstart, SDKs, Concepts, Changelog, API Reference, Public API, Tokens API, Portfolio API, Historian, BuildKit, Institutional Yield API, Embedded Wallets, White-Label Vaults, Status dashboard)
- Kamino App `[deep]` (the consumer product page, reached from Launch App tile + Individuals)

### Docs (universal layer)
- docs.kamino.com (or /docs) — every marketing page links down into it; not in the marketing inventory but is the substrate.

### Company / Trust (8)
- About Kamino · The thesis (manifesto) · Customers & case studies `[surface]` · Partners & curators `[surface]` · Trust & compliance (regulatory) · Newsroom/Press · Blog/Research · Contact/Talk to us · Careers · Legal · Brand/Media kit

### Security (top-level, 1 page + 2 dashboards)
- Security & transparency `[deep]` (top-level)
- multisig.kamino.fi `[dash]`
- oracles.kamino.fi `[dash]`

---

## 4. The link / reuse graph — every product, where it lives, how it's framed

For each item: **Home** (canonical page) and **Surfaced on** (every other place it appears + the framing there). This is the "lives in multiple places" map extended from the rails to *every* product. Institutional-relevant framings called out in **bold**.

### Capability hubs
**Credit** — *Home:* Credit hub. *Surfaced on:* Solutions/Institutions ("borrow with rate certainty, treasury liquidity without selling") · Use-case "Offer credit against tokenized assets" (the spine) · Use-case "Borrow against BTC" · Asset issuers ("your token becomes instant collateral") · Markets infra ("every borrow happens in a market").

**Liquidity** — *Home:* Liquidity hub. *Surfaced on:* Asset issuers (**"how holders move in and out of your tokenized asset, no standing market maker required"**) · Use-case "List & finance an asset" · Multiply/Credit ("manage in place — repay/swap collateral") · Developers ("swap embed") · Markets ("a listed asset needs liquidity to trade").

**Yield** — *Home:* Yield hub. *Surfaced on:* Solutions/Institutions (**"regulated, transparent, attested yield"**) · Use-case "Launch a managed fund" · Use-case "Earn on idle treasury" · Use-case "Embed yield in your app" · Curators ("the venues you operate") · Credit ("the supply side — vaults are the lenders").

### Credit deep pages
**Fixed Rates** — *Home:* Fixed Rates. *Surfaced on:* Credit hub (owns) · **Institutions ("lock your cost to maturity — an on-chain yield curve")** · Funds & trading firms (FalconX proof) · Use-case "Offer credit against tokenized assets" (terms) · Use-case "Borrow against BTC" (rate certainty) · Vault Engine ("conditional liquidity funds fixed-rate fills atomically") · RFQ ("price discovery / two-sided credit book").

**Borrowing (variable)** — *Home:* Borrowing. *Surfaced on:* Credit hub · Individuals (self-serve borrow) · Markets ("variable-rate borrowing against collateral").

**Permissioned Markets** — *Home:* Permissioned Markets (deep) → leans on Permissioning [infra]. *Surfaced on:* Credit hub · **Institutions ("KYC-gated venues, named-counterparty borrowing, whitelisted liquidators")** · Asset issuers ("per-asset gating") · Permissioning infra (the mechanism) · Use-case "Offer credit against tokenized assets" (compliance).

**Off-Chain Collateral (OCC)** — *Home:* Off-Chain Collateral. *Surfaced on:* Credit hub (owns) · **Treasuries & corporates + Funds ("borrow against assets at your qualified custodian — Anchorage; Pantera proof")** · Use-case "Borrow against BTC" (custody-preserving) · Markets ("a market configuration — collateral location is a setting") · Scope ("pairs with on-chain proof of reserves") · Security ("Account Control Agreement, custody integration").

**Multiply** — *Home:* Multiply. *Surfaced on:* Credit hub (cross-listed) · Individuals (one-click leverage) · Funds & trading firms (leveraged exposure) · Asset issuers ("Multiply as distribution — looped demand for your asset") · Markets ("a correlated-asset risk group enables high-LTV looping") · Liquidity ("one-click enter/exit via routing") · Use-case "Launch a managed fund" (a strategy the vehicle deploys into).

### Liquidity deep pages
**Swap** — *Home:* Swap (deep, within Liquidity). *Surfaced on:* Liquidity hub · Developers ("swap embed / SDK") · Multiply, Credit, Liquidations (best execution under the hood) · **Asset issuers ("routing to/from your asset")**. *Frames the kSwap meta-aggregator + Kobayashi proprietary router story — a major asset never positioned externally.*

**RFQ** — *Home:* RFQ (deep). *Surfaced on:* Swap ("best-price solver fills") · **Asset issuers ("how holders move in and out of your tokenized asset — solver/market-maker filled on demand, no standing AMM; core to the issuer offering alongside instant collateral and oracle pricing")** · Funds & trading / market makers ("quote into Kamino's RFQ as a solver") · Fixed Rates ("price discovery, two-sided credit book") · Liquidations ("RFQ-sourced fills") · Use-case "List & finance an asset."

**RWA Liquidity (RWA DEX)** — *Home:* RWA Liquidity (deep). *Surfaced on:* Liquidity hub · **Asset issuers (the headline — "oracle-priced, market-maker-free liquidity for your token")** · Use-case "List & finance an asset" · Use-case "Offer credit against tokenized assets" (exit/liquidate liquidity) · Scope (**"the oracle price IS the liquidity price"**) · Markets ("a listed asset needs liquidity to trade").

**Liquidity Vaults (CLMM)** — *Home:* Liquidity Vaults. *Surfaced on:* Liquidity hub · Individuals (automated LP) · Vault Engine ("a separate engine sharing the same design DNA") · Curators ("a venue type to operate").

### Yield deep pages
**Earn Vaults** — *Home:* Earn Vaults. *Surfaced on:* Yield hub (owns) · Individuals (curated yield, self-serve) · Vault Engine (the engine behind it) · Curators ("the product you run") · Credit ("vaults are the lenders").

**Institutional Yield** — *Home:* Institutional Yield. *Surfaced on:* Yield hub · **Institutions (the headline yield product — "regulated lender, overcollateralized BTC loans, real-time loan-book feed, weekly collateral reporting, monthly independent attestation")** · Use-case "Borrow against BTC" (the depositor/supply side) · Use-case "Earn on idle treasury" · Developers ("Institutional Yield API — packaged yield-in-a-box") · Permissioning ("KYC'd borrowers + approved depositors") · Security (transparency/attestation). *(Altenburg/Valbella stay internal plumbing — never a page.)*

**Meta Vaults** — *Home:* Meta Vaults. *Surfaced on:* Yield hub · **Wealth & asset managers ("a managed fund in a box — blend USD yield, leverage, treasuries, equities")** · Use-case "Launch a managed fund" (the vehicle) · Vault Engine ("separate engine, shared DNA") · Fintechs ("a product factory for your app") · Curators (operate a multi-asset strategy). *(Name flagged to workshop; I propose keeping "Meta Vaults" — see §7-C.)*

**Permissioned Vaults** — *Home:* Permissioned Vaults. *Surfaced on:* Yield hub · **Institutions ("deposits only from approved/regulated wallets")** · Use-case "Launch a managed fund" (gate your investors) · Permissioning infra · Asset issuers · Curators.

### Infrastructure pages (the moat) — full reuse
**Markets (KLend)** — *Home:* Markets. *Surfaced on:* Credit ("the venue") · Yield ("vaults allocate into markets — the supply side") · Multiply ("looped position in one market, high-LTV via correlated group") · **Asset issuers ("your token becomes a market asset — instant collateral, PRIME $0→$600M")** · Liquidity/RWA ("a listed asset needs a market") · Curation ("launch and run your own market") · Institutional Yield & OCC ("market configurations — fixed-rate and custodied are settings") · Developers ("markets via SDK/API") · **Platform menu (Infrastructure column).** *Implication framing everywhere: ~50-parameter config IS the "tell us what you want" mechanism.*

**Scope (oracle / pricing)** — *Home:* Scope (+ oracles.kamino.fi). *Surfaced on:* Markets ("decides what's listable") · Credit/Liquidations ("scam-wick protection; can't be liquidated during a brief depeg") · RWA Liquidity ("the oracle price IS the liquidity price") · Swap ("reference/fallback pricing") · Yield ("vault NAV and share value") · Multiply ("health & liquidation distance") · Institutional Yield ("BTC collateral pricing") · OCC ("pairs with proof of reserves") · **Asset issuers ("first onboarding step — a guarded Scope feed; handles equity hours, halts, corporate actions, NAV pauses, anti-infinite-mint")** · Security ("8 audits, $19.33B processed, 0 oracle exploits") · **Platform menu (Infrastructure column).** *Framing: the on-chain-asset onramp and the moat under the RWA strategy.*

**Permissioning (kperm)** — *Home:* Permissioning (own page). *Surfaced on:* Credit/Markets ("KYC-gated, named-counterparty, whitelisted liquidators") · Yield/Curation ("permissioned vaults") · **Asset issuers ("per-asset gating — one regulated asset gated while others stay open")** · Institutional Yield ("KYC at the legal layer, approval at the wallet layer") · Developers ("compliance-grade embeds via whitelist API") · OCC · Permissioned Markets & Permissioned Vaults deep pages (the productized expressions) · **Platform menu (Infrastructure column).** *Framing: the institutional switch — open ↔ gated, per-op/per-asset/per-wallet, reverses instantly, no fork.*

**Vault Engine (kVault)** — *Home:* Vault Engine. *Surfaced on:* Yield ("Earn + Institutional Yield are one engine; Meta Vaults adjacent") · Credit ("vaults ARE the lenders; conditional allocation funds fixed-rate term loans atomically — FalconX/Pantera with no idle drag") · Curation ("the thing a curator operates") · Developers ("white-label vaults, embedded-wallet auto-deploy, Institutional Yield API = packaged vault embed") · Multiply ("borrows the liquidity vaults supply") · **Platform menu (Infrastructure column).** *Framing: the supply side of credit; conditional liquidity is the key innovation.*

**Curation (Curation Suite)** — *Home:* Curation. *Surfaced on:* Yield ("every consumer vault has a named curator — the roster is the trust signal") · Credit/Markets ("markets stood up by professionals, or by you") · **Curators & managers audience (the primary home)** · Security/Risk ("curators are the risk managers — diligence, first-loss skin-in-the-game") · Developers ("white-label is the seam") · Asset issuers ("curate the market for your own asset") · Platform menu (both Market Curation under Credit and Vault Curation under Yield doorway here) + Infrastructure column. *Framing: operate ON Kamino (Curation) vs embed INTO your app (Build); white-label is the seam.*

**Liquidations** — *Home:* Liquidations. *Surfaced on:* Credit ("efficient, soft liquidations, 10–60bps") · Scope ("divergence/cap guards = scam-wick protection") · Markets ("liquidation economics are per-asset params") · RFQ ("RFQ-sourced fills") · Routing ("efficient execution") · **Security ("$120M+ liquidated, 100k+ liquidations, $0 bad debt — the headline proof")** · Use-case "Offer credit against tokenized assets" (exit/liquidate). *Framing: the safety mechanism that produced zero bad debt.*

### Delivery / developer products
**BuildKit** — *Home:* Developers (Embed column). *Surfaced on:* **Fintechs & apps (the business framing — YieldBay, OneKey)** · Use-case "Embed yield in your app" · Curation ("white-label seam") · Liquidity ("swap embed").
**Institutional Yield API** — *Home:* Developers. *Surfaced on:* Fintechs · Institutional Yield ("packaged as an embed") · Use-case "Embed yield in your app."
**Embedded Wallets / White-Label Vaults** — *Home:* Developers. *Surfaced on:* Fintechs (Phantom, Marinade) · Vault Engine ("auto-deploy into curated vaults") · Curation.
**Public / Tokens / Portfolio APIs + Historian** — *Home:* Developers Reference. *Surfaced on:* Use-case "Launch a managed fund" ("reporting and data out of the box") · Institutions ("portfolio reporting") · Individuals (portfolio view).

### Consumer
**Kamino App** — *Home:* Kamino App page (+ Launch App button + Platform app tile). *Surfaced on:* Individuals (audience-framed) · every hub (Launch App CTA) · footer. *Framing: the one direct-to-user surface, and a live proof that the same rails serve retail at scale.*

### Cross-chain (section-only)
**Ethereum–Solana bridge** — *Home:* docs + a section on Markets/Scope. *Surfaced on:* Asset issuers & Use-case "Offer credit against tokenized assets" ("makes off-Solana RWAs — tokenized gold, USDe — safe as collateral on Solana").

---

## 5. Audience pages (5) — what each composes and links into

Each audience page is a curated landing: a buyer-framed headline, the trust band (audits/0-bad-debt/attestation), the 3–5 products that matter to them (linking to deep pages), the proof points (named customers), and a closing **Talk to our team** CTA (white-glove). They curate and point into products; they don't re-explain.

**1. Institutions** (wealth & asset managers · funds & trading firms · treasuries & corporates)
- *Hero:* "Capital-markets infrastructure for institutional capital. $1B+ RWA on-chain · $0 bad debt · 3 years in production."
- *Composes / links:* Institutional Yield · Meta Vaults · Fixed Rates · Multiply · Off-Chain Collateral · Permissioned Markets/Vaults · Markets + Scope + Permissioning (the moat) · Security · Curators roster.
- *Sub-segment anchors:* Wealth & asset managers → Meta Vaults, Curation, Permissioned Vaults. Funds & trading firms → Fixed Rates (FalconX), Multiply, RFQ-as-solver, OCC. Treasuries & corporates → OCC, Borrow against BTC, Earn on idle treasury, Institutional Yield.
- *CTA:* Talk to our team · Read the thesis · Review security.

**2. Asset issuers** (RWA, tokenized-equity, stablecoin issuers)
- *Hero:* "Make your tokenized asset usable, tradable, and compliant — from $0 to a financed market."
- *Composes / links:* Scope (price it — the gate) · Markets (instant collateral) · RWA Liquidity + RFQ (oracle-priced, MM-free liquidity) · Permissioned assets · Multiply (distribution) · Curation (stand it up) · cross-chain bridge.
- *Proof:* PRIME ($0→$600M, $1B+ RWA), Maple, OnRe, Ethena, Superstate, xStocks.
- *CTA:* Talk to our team · Asset-onboarding pipeline.

**3. Fintechs & apps** (wallets, neobanks, exchanges, consumer apps)
- *Hero:* "Ship compliant yield, credit, and swap to your users — without building a protocol."
- *Composes / links:* BuildKit · Institutional Yield API · Embedded Wallets · White-Label Vaults · Permissioning (compliance-grade embeds) · Developers hub.
- *Proof:* YieldBay, OneKey, Marinade, Phantom.
- *CTA:* Get API keys · Talk to our team.

**4. Curators & managers**
- *Hero:* "Operate credit and yield venues on Kamino's audited rails — without building infrastructure."
- *Composes / links:* Curation Suite · Markets · Vault Engine · Meta Vaults · Permissioned Vaults · Security/Risk · the curator roster as peer proof.
- *Proof:* Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, Galaxy.
- *CTA:* Launch a vault/market · Talk to our team.

**5. Individuals** (the consumer app, audience-framed)
- *Hero:* "Professional-grade earn, borrow, multiply, and swap. Self-serve."
- *Composes / links:* Earn Vaults · Borrowing · Multiply · Swap · Liquidity Vaults · the Kamino App page.
- *CTA:* Launch App.

---

## 6. Use-case pages (6) — what each composes and links into

**1. Offer credit against tokenized assets** *(the spine — cuts across issuers, institutions, curators)*
Composes: Scope (price it) → Markets (the collateral market) → Fixed Rates / OCC (terms) → RWA Liquidity + RFQ (enter/exit/liquidate) → Permissioned assets (compliance) → Curation (stand it up) → Multiply (leverage). Links into all of those deep/infra pages.

**2. Borrow against BTC** *(treasuries, funds, individuals + yield allocators)*
Composes: OCC (custody-preserving) → BTC market → Fixed Rates (rate certainty) → Scope (BTC pricing) → Institutional Yield (the supply side funding it) → Security.

**3. Launch a managed fund** *(wealth managers, curators, fintechs)*
Composes: Meta Vaults (vehicle) → Curation Suite (launch/operate) → Vault Engine (allocation/fees/insurance) → Permissioned Vaults (gate investors) → Developers + Portfolio/Historian APIs (integrate + data) → White-Label (branding) → the strategies (Markets, Multiply, Yield) → Security (reporting).

**4. Earn on idle treasury** *(new — treasuries & corporates, funds)*
Composes: Institutional Yield (regulated, attested) → Earn Vaults → Permissioned Vaults (approved wallets) → Scope (NAV/share value) → Security (transparency dashboards) → Vault Engine. Links to Treasuries sub-segment + Institutions.

**5. Embed yield in your app** *(new — fintechs)*
Composes: Institutional Yield API → BuildKit → Embedded Wallets → White-Label Vaults → Permissioning (compliance-grade) → Developers hub. Links to Fintechs audience.

**6. List & finance a tokenized asset** *(new — asset issuers)*
Composes: Asset-onboarding pipeline → Scope (guarded feed) → Markets (instant collateral) → RWA Liquidity + RFQ (liquidity) → Permissioned assets → Curation → cross-chain bridge. Links to Asset issuers audience. *(Near-twin of use-case #1; #1 is the buyer's-credit angle, #6 is the issuer's-distribution angle. Kept distinct because they serve opposite sides and different CTAs.)*

*Still to mine:* "Stable-stable carry / correlated-asset leverage," "List and finance an LST," "Run a permissioned lending venue."

---

## 7. Where I challenge the current map

**A. (Biggest) The 3-hub "Products only, infra hidden" menu under-serves the institutional buyer. I add an Infrastructure column and rename Products → Platform.**
The offering-map's decision to keep Markets/Scope/Permissioning/Vault-engine/Curation OUT of the mega menu optimizes for an SMB-style "shop the catalog" buyer. The institutional buyer is the opposite: the moat IS the product to them. An asset manager is not converted by "Fixed Rates" — they are converted by *Scope prices my NAV with halt-aware guards and an anti-infinite-mint defense*, and by *Permissioning gates my venue per-wallet and reverses instantly with no fork*. Hiding the infrastructure hides the exact reason a sophisticated buyer trusts and transacts. Stripe can hide its ledger primitives because its buyer doesn't underwrite Stripe's solvency; an institution underwrites Kamino's safety as a precondition to allocating. So: rename the menu **Platform** (signals "infrastructure you deploy on"), keep the 3 hubs, and add a fourth **Infrastructure** column surfacing the 5 rails + Liquidations, each its own page. The product menu stays uncluttered because the hubs still lead and the infra column is visually a distinct, quieter column — but the moat is one click from the front door.

**B. Security must be top-level, not under Company.**
The map files Security in "the rest of the nav" alongside Company. For institutional diligence, security/transparency is the gating question and the most-clicked link. Burying it signals it's an afterthought. Promote **Security** to a top-level nav item with a flyout to the two live dashboards (multisig + oracles). The live, real-time dashboards are an extraordinary trust asset most competitors can't match — they belong one click from anywhere.

**C. Naming: drop "Suite," debrand where the word is unambiguous, keep "Meta Vaults."**
- "Yield Suite" → **"Yield."** "Suite" is sub-brand decoding work with no payoff.
- "Kamino Swap" → **"Swap"**, "Lending Vaults" → **"Earn Vaults."** Brand the word only where the generic word is ambiguous in context; inside the Liquidity column, "Swap" is unambiguous, and "Kamino" prefix-spam dilutes the few places branding matters (Kobayashi, Scope, BuildKit, kVault).
- The open Meta-Vaults naming: **keep "Meta Vaults."** It's already in the inventory, partners know it, and it reads as "a vault of vaults / multi-strategy vehicle" to a finance audience. A new coined name adds decoding cost. If anything, subtitle it on its page as "multi-strategy fund vaults."

**D. Resolve the open Permissioning placement: its own page, not a section of Markets.**
The map leaves this open. Under my lens, Permissioning is **the** institutional unlock and the single most important infra concept for a regulated buyer — it deserves a standalone canonical page that both Permissioned Markets and Permissioned Vaults lean on, and that the Solutions/Institutions page links to directly. Folding it into Markets would bury it beneath the 50-parameter story and split the "open ↔ gated, reverses instantly" narrative across two engines (markets + vaults). One page owns the access-control story for the whole platform.

**E. Solutions should LEAD the nav, ahead of Platform.**
The map's nav order implies Products first. I argue the institutional buyer navigates by **identity and mandate** before catalog: "I'm a treasury / a fund / an issuer — what's here for me?" Leading with Solutions routes them to a buyer-framed page that does the composing for them, then hands off to the catalog. Putting Platform first asks the buyer to assemble the story themselves from product names — which is exactly the cognitive load a high-friction institutional sale should remove.

**F. Expand use-cases from 3 to 6, and make the "by-job" column a peer of "by-who" in the Solutions menu.**
The map starts with 3 use-cases and treats them as secondary to mine later. For finance buyers, the job ("earn on idle treasury," "embed yield in my app," "list and finance my asset") is often the entry query. I promote three more named jobs that already exist in the inventory and give by-job equal billing in the Solutions menu.

**G. Surface white-glove sales as a persistent, top-of-funnel motion — not just a footer "contact."**
The map mentions white-glove sales as a delivery mode but doesn't place it. I put **"Talk to our team"** in the Solutions featured tile (top of nav), on every audience page hero/footer, and as the secondary CTA across institutional deep pages. For a B2B institutional motion, the sales conversation is the conversion event; it must be reachable from the first screen, not hunted for.

**H. The app tile stays, but ordered last in the Platform menu.**
The map leads the Products menu with a full-height App tile. As a Stripe differentiator the consumer app is worth showing — but leading the institutional-platform menu with the consumer surface undercuts the "infrastructure for capital" thesis. Keep the tile, place it rightmost so the reading order is hubs → moat → app.

---

## 8. How this IA conveys the four things

- **What Kamino is** — *Platform* (not Products) + a top-level *Security* + the Infrastructure column + "The thesis" manifesto together say: capital-markets infrastructure, audited and transparent, that you deploy on.
- **What it offers** — three capability hubs (Credit/Liquidity/Yield) with ~20 deep pages, the moat made visible as 6 infrastructure pages, and a consumer app shown as proof the rails work at scale.
- **Who it serves** — Solutions leads the nav with 5 by-who audiences (institutions first, sub-segmented) and 6 by-job use-cases, each composing the catalog for that buyer and ending in a white-glove CTA.
- **What it's building toward** — the tokenized economy: Scope as the asset onramp, Permissioning as the regulatory switch, Markets as the configurable venue, and the issuer/RWA path (PRIME $0→$600M) running through every audience and use-case page as the proof the thesis is already real.
