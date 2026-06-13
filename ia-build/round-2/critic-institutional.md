# Round 2 — Critic: Institutional-Conversion Lens

**My test for every decision:** does it move Kamino's lead B2B buyers — wealth & asset managers, funds & trading firms, treasuries & corporates, asset issuers, fintechs — closer to believing Kamino is *capital-markets infrastructure for the tokenized economy*, safe enough to hold their capital, and worth a sales conversation or a deployment? I judge nothing by whether a curious retail visitor "gets it in 5 seconds." That visitor is not the buyer who signs a term sheet, allocates a treasury, or lists a tokenized asset. Where the three drafts optimize for the cold newcomer at the expense of the institution, I rule against them — and say so.

I read all three Round 1 drafts in full and the offering map. I verified the one external fact the debate leans on (Stripe's product menu) before using it.

---

## The verified Stripe fact, and what it actually proves

I fetched `stripe.com/payments` and `stripe.com/radar` live (2026-06-13).

- Stripe's product menu is grouped **by business function**: Payments · Revenue · Money Management · Platforms & Marketplaces · More.
- **Radar (fraud infrastructure) sits inside Payments. Connect (multi-party routing) is a first-class group ("Platforms & Marketplaces"). Identity (KYC) sits under More.** All three are pure infrastructure, all three are in the product menu, all three have full deep marketing pages.
- `/radar` is a complete standalone page led by its **network-effect moat**: "Fight fraud with the strength of the Stripe network… 92% chance a card has been seen before."

This settles the single most contested decision (infra in the menu) decisively, and it settles it **against the offering-map's current "infra stays out of the menu" rule** and against Agent-3's newcomer-purity version of the same rule. Stripe — the explicit quality benchmark — surfaces its most defensible infrastructure in the menu and sells it on its moat. Agent-1 and Agent-2 both independently reached this conclusion; Agent-2 did the verification work. I adopt it and sharpen *why it matters specifically for the institutional buyer* below.

---

## The core disagreement between the drafts, named plainly

The three drafts split on **who the nav is for**:

- **Agent-3 (Comprehension)** optimizes for a cold visitor who has never heard of Kamino — verbs (Borrow/Earn/Trade), plain-language renames (Instant-Quote Trading, Managed Portfolios, Tokenized-Asset Liquidity), infra hidden behind `/how-it-works`, a "Find your path" picker.
- **Agent-2 (Stripe-Craft)** optimizes for IA best-practice fidelity to Stripe — four function columns, a Platform column, rails surfaced under a rule line, by-asset-class as the latent third axis.
- **Agent-1 (Institutional)** optimizes for exactly my buyer — Solutions-led nav, Platform (not Products), an Infrastructure column treated as first-class, Security top-level, white-glove surfaced at the top of the funnel.

Agent-1 is closest to correct under my lens, and I'll defend most of it. But Agent-1 over-reaches in two places (Solutions-leads-nav, and a 4th visible "Infrastructure" column that clutters), and Agent-2's craft discipline fixes both. Agent-3's renames are the single most dangerous idea in the room for an institutional buyer, and I'll spend real argument killing the worst of them.

The synthesis I argue for: **Agent-2's structure (function-grouped Products menu with rails surfaced inside it, Stripe-faithful), Agent-1's institutional priorities (capability nouns, Security top-level, Permissioning canonical, white-glove top-of-funnel, the moat as a selling surface), and a hard rejection of Agent-3's verb/plain-language renames.** Solutions and Products both earn top billing; I rule on order below.

---

## Per-decision rulings

### 1. Hub naming — verbs vs capability nouns; drop "Suite"; debrand

**Ruling: Capability nouns — Credit · Liquidity · Yield. Drop "Suite." Debrand to bare generics only where the word is unambiguous in its column ("Swap," "Earn Vaults"); keep the "Kamino"/coined prefix only where it brands an otherwise-generic word that needs ownership (Scope, BuildKit, kVault, Kobayashi).**

Agent-3's verbs (Borrow/Earn/Trade) are the most seductive and the most wrong proposal in the three drafts, *for this buyer*. Three reasons:

1. **The buyer's vocabulary is the noun, not the verb.** A wealth manager, a fund COO, a corporate treasurer, a desk at a trading firm — they say "credit facility," "the yield product," "liquidity." "Borrow" is a retail-app button. A CIO evaluating where to place capital does not navigate by "I want to borrow"; he navigates by "what's your credit offering, what's your yield product, what's your liquidity." Agent-3's own justification — that "credit is a lender's word for the supply side" and "a borrower thinks 'I want to borrow'" — concedes the case: it explicitly optimizes for the *borrower's* mental model, and Kamino's highest-value buyers are *allocators and issuers*, not retail borrowers.
2. **Verbs collapse the thesis.** "Capital-markets infrastructure" is conveyed by capability nouns that read like the divisions of a markets business (Credit, Liquidity, Yield). Borrow/Earn/Trade reads like a Coinbase retail tab bar. The label *is* the positioning; verbs position Kamino down-market.
3. **Agent-3 is right about the failure mode and wrong about the fix.** Verbs are precise navigation labels for someone shopping for a self-serve action. The fix to "a cold visitor doesn't know what Credit means" is the *hub page* teaching it in the first sentence, plus the Solutions front door routing by identity. The fix is not dumbing the top-level label down to the point that it mis-signals the product to the buyer who actually pays.

"Suite" goes — all three drafts agree and they're right; it's internal sub-brand decoding with no payoff. Debranding: Agent-1's rule is the correct one — strip "Kamino" where the generic word stands alone unambiguously ("Swap," "Earn Vaults"), keep the coined/owned names (Scope, kVault, BuildKit, Kobayashi) because those *are* assets and prefix-spam dilutes them.

### 2. Infrastructure visibility in the Products menu — keep OUT vs surface it

**Ruling: SURFACE it. The moat goes in the menu. This is non-negotiable under my lens.** (Verified against Stripe: Radar, Connect, Identity are all infrastructure, all in the product menu, all with deep moat-framed pages.)

The offering-map's "infra stays out, shop products not engines" rule and Agent-3's `/how-it-works` front door both optimize for the wrong buyer. The institution underwrites Kamino's *safety and mechanism* as a precondition to allocating — that is the literal first diligence question. Hiding Scope (the RWA moat — it decides what's listable, prices NAV with halt-aware guards, defends against infinite-mint), Permissioning (the regulated-capital switch), and the Liquidation engine ($0 bad debt) hides the exact reasons a sophisticated buyer trusts Kamino. Agent-3's claim that "newcomers shop for outcomes, evaluators inspect engines" is true and is the argument *for* surfacing — the institutional buyer IS the evaluator, and he is the one who pays. A `/how-it-works` page is a fine *addition* (it serves the narrative and SEO), but it cannot be the *only* door to the moat for a buyer whose entire decision turns on the moat.

Agent-1 and Agent-2 both surface it; I side with them. The execution question (own column vs folded into Platform) is item 3.

### 3. A "Platform" grouping in Products — yes/no, and what's in it

**Ruling: YES — a single "Platform" group/column that holds (a) the two-sided platform products (Curation, BuildKit, Institutional Yield API, Embedded Wallets, White-Label Vaults) AND (b) the rails (Markets, Scope, Vault Engine, Routing, Permissioning, Liquidation), the rails visually subordinate under a rule line. This is Agent-2's structure, and it beats Agent-1's separate 4th "Infrastructure" column.**

Agent-1 wants two distinct additions: a "Platform" *menu rename* and a separate "Infrastructure" *column*. That's one column too many — a 5-column mega menu (Credit · Liquidity · Yield · Infrastructure · App tile) over-weights the moat relative to the buyer's primary capability shop, and it splits the platform story (Curation/Build) from the rails that power it. Agent-2's single Platform column is cleaner and is the faithful Stripe translation: Stripe's "Platforms & Marketplaces" group co-locates Connect (the operate/embed product) with the platform-grade rails. One column carries both the "operate on / build into Kamino" story and the surfaced rails beneath a rule line. Buyer columns (Credit/Liquidity/Yield) still lead the reading order; the moat is one click away, visually quieter, exactly as Radar is subordinate-but-present under Payments.

### 4. BuildKit / embed home — Developers vs Products→Platform

**Ruling: Products→Platform is the canonical home; Developers links to it.** Stripe-verified: Stripe's embed/components story lives in product buckets (Connect, Prebuilt Components), and its Developers menu is a thin docs/API/SDK/status set. The offering-map's decision to home BuildKit in Developers is the one place it contradicts the benchmark. For my buyer specifically: the person who decides to embed Kamino is a fintech's *product/commercial* owner, not only its engineer — that decision-maker shops Platform and Solutions→Fintechs, then routes their engineers to Developers/docs. Home BuildKit, Institutional Yield API, Embedded Wallets, White-Label in Platform; Developers cross-links down into docs. (Agent-2 and Agent-1 both land here; Agent-3 keeps it in Developers — overruled.)

### 5. Top nav — set, order, labels

**Ruling:**
- **Set (6 interactive + logo + CTAs):** `Products · Solutions · Developers · Security · Resources` + `Launch App` (primary CTA) + `Talk to our team` (secondary CTA).
- **Label "Products," not "Platform," for the menu.** Agent-1 wants to rename the menu "Platform" to signal "infrastructure you deploy on." I overrule: keep "Products" as the menu *label* (Stripe-faithful, unambiguous for every buyer) and use "Platform" as the *group inside it* (item 3). The institutional signal is carried by the Platform group, the surfaced rails, the Security tab, and the thesis — not by relabeling the whole catalog in a way that reads vaguer to a treasury buyer skimming the nav.
- **Order: Products first, Solutions second.** I overrule Agent-1's "Solutions leads." His argument (institutions navigate by identity before catalog) is real, but it's served by *Solutions being present and strong*, not by it being first. Stripe — selling to enterprises, platforms, and startups — leads with Products and it works because Products is where the substance is and Solutions is the recombination layer. For Kamino, the thesis ("capital-markets infrastructure") is proven by the *substance* in Products (the rails, the moat, the breadth), and Solutions curates that substance per buyer. Leading with Solutions front-loads the routing before the buyer has any reason to believe Kamino is real. Products-first, with Solutions immediately adjacent, lets the moat and breadth establish credibility and lets Solutions convert it.
- **Security: YES, top-level.** Unanimous across all three drafts and correct — this is the one place all of us deliberately deviate from Stripe. For a buyer underwriting custody of institutional capital, "20 audits / 4 formal verifications / 3 years / $0 bad debt / live multisig + oracle dashboards" is the most-clicked diligence link. Burying it under Company is malpractice. Flyout to the two live dashboards.
- **No top-level Pricing.** All three agree; correct. Kamino's model is take-rate + curator fees, not a comparison-shoppable SaaS price card. A Pricing tab would open onto an explainer and underdeliver the click. Keep a `/pricing` commercial-model page reached from Resources/footer and from Curation (curator economics).
- **Resources: YES, include it** (Agent-2's position), against Agent-1/Agent-3 who distribute it into Company/Developers. For an institutional sale, the *proof content* — customer case studies, research/risk reports, the curator roster, attestations — is conversion-grade ammunition and deserves a real home a buyer can browse during diligence. Company can live inside Resources + footer (Stripe-faithful). This keeps Company out of the primary row (Stripe-faithful) while giving institutional proof a browsable destination.

So the nav order is: **Products · Solutions · Developers · Security · Resources · [Launch App] · [Talk to our team].**

### 6. Permissioning — its own canonical page?

**Ruling: YES — its own canonical page, confirmed.** All three drafts independently resolve the offering-map's open decision the same way, and under my lens it's the easiest call in the set: Permissioning is *the* institutional unlock — the switch that turns any market or vault from open to gated, per-op/per-asset/per-wallet, reversible with no fork, KYC at the legal layer + whitelist at the wallet layer. It spans Markets, Vaults, and Assets; folding it into Markets would orphan its vault and embed expressions and split the access-control story across two engines. It gets one canonical `/…/permissioning` page that Permissioned Markets, Permissioned Vaults, Permissioned Assets, Institutional Yield, and Solutions→Institutions all link into. This is a page my buyer reads closely.

### 7. Use-case pages — how many and which

**Ruling: Ship 4 now — the locked 3 (credit against tokenized assets · BTC-backed credit · launch a managed fund) + "embed yield in your app." Build the rest as a pipeline; do not ship 6 thin pages.**

Agent-1 wants 6 (adds: earn on idle treasury · embed yield in your app · list & finance an asset). Agent-2 wants 4 (adds embedded-yield only). Agent-3 keeps 3 + pipeline. I split toward Agent-2, with institutional reasoning:

- "Embed yield in your app" is the highest-conversion fintech job and forces the Platform column to prove it composes — pull it forward. (Agent-2 is right.)
- "Earn on idle treasury" is a genuine institutional job, but it's better served *first* as a section on the Treasuries sub-segment of the Institutions page than as a standalone use-case page that overlaps heavily with BTC-backed credit's supply side and Institutional Yield. Graduate it when it has real depth.
- "List & finance an asset" is, as Agent-1 concedes, a near-twin of "credit against tokenized assets" from the issuer's side. Two near-identical pages dilute rather than convert. Keep it as the issuer-framed CTA path *on* the Asset Issuers page + the tokenized-asset-credit use-case, and graduate only if the issuer funnel demands its own door.

Thin use-case pages hurt an institutional buyer more than they help — a half-built "Earn on idle treasury" page that just re-points to Institutional Yield reads as marketing filler to a treasurer and erodes the credibility the moat just built. Four substantive pages beat six thin ones.

### 8. Meta-Vaults rename

**Ruling: "Managed Portfolios."** This is the one Agent-3 rename I fully endorse, and Agent-2 independently proposed "Portfolios." "Meta-Vaults" is engine-language; it reads to a protocol engineer, not to the wealth/asset manager who is the literal buyer of "a managed fund in a box." "Managed Portfolios" says exactly what it is to that buyer and carries the institutional register the thesis needs. Agent-1's "keep Meta Vaults because partners know it" is the weakest of his calls — partner familiarity is satisfied by a subtitle/parenthetical on the page ("Managed Portfolios — multi-strategy fund vaults"), and the marketing label should serve the buyer who hasn't bought yet, not the handful who already have. I rule against Agent-1 here.

### 9. Solutions axes — by-who + by-job; add by-industry/asset-class now?

**Ruling: Ship by-who + by-job now. Do NOT build a by-asset-class column yet — stage it behind a "More" row and graduate when ≥3 pages have real depth.**

Agent-2 is right that asset-class (RWA / tokenized equities / stablecoins / BTC / LSTs) is Kamino's true "industries" axis and the most institutionally resonant third axis — an asset issuer or a fund absolutely navigates by "what can you do with *my* asset class." But shipping five thin asset-class pages now repeats the use-case mistake: empty rooms read as overreach to a diligence-minded buyer. Build by-who + by-job at depth first; surface asset-class in a "More" row; graduate to a full third column when RWA, BTC, and one more have substance. Agent-3's two-axis-only is too conservative for the long game; Agent-1's two-axis is fine for now but should explicitly reserve the asset-class axis. Reserve it, don't ship it empty.

### 10. App tile placement & how prominently the consumer app is surfaced

**Ruling: Keep the app tile in the Products menu, but place it LAST in reading order (rightmost), and keep "Launch App" as the persistent primary CTA. The app is surfaced as *proof the rails work at retail scale*, not as the headline.**

Agent-1's instinct is right and I sharpen it: the consumer app is a genuine differentiator from Stripe and a credibility asset (the same rails that serve institutions also serve retail at scale, in production, today). But leading the institutional-platform menu with a consumer-app tile undercuts the thesis. Place it last; let the reading order be capability hubs → Platform/moat → app. "Launch App" stays as the persistent CTA (it's the self-serve action and the Individuals door). No top-level "Consumer" or "App" nav word — the app is an action and a proof tile, not a browse destination competing with Products. (Agent-2 leads the menu with the app tile on the left — I overrule that placement for the institutional reading order; Agent-3's left-placement same overrule.)

### 11. Other naming — RFQ, RWA DEX / "RWA Liquidity," Curation, Multiply

**Rulings, item by item:**
- **RFQ → keep "RFQ"** (overrule Agent-3's "Instant-Quote Trading (RFQ)"). My buyers — funds, trading firms, market makers, desks — use "RFQ" natively; it's the precise capital-markets term and it signals Kamino speaks their language. Agent-3's plain-language wrapper is for a retail newcomer and reads as condescending to the desk that integrates as a solver. Teach the plain meaning in the page's first line; keep the label sharp.
- **RWA DEX → "RWA Liquidity"** (side with Agent-1's label over both "RWA DEX" and Agent-3's "Tokenized-Asset Liquidity"). "DEX" is retail-DeFi register and undersells the mechanism; the asset issuer's actual need is *liquidity for their token without standing up a market maker*. "RWA Liquidity" names the outcome in the issuer's terms while staying tight. ("Tokenized-Asset Liquidity" is the acceptable long-form subtitle.)
- **Curation → keep "Curation" / "Curation Suite" as the product name; give the menu/audience entry a plain doorway label ("Run your own market or vault").** Agent-3 is right that "curate" isn't a verb a fintech or institution self-applies, but "Curation Suite" is the right *product* name for the operator audience (curators, asset issuers standing up their own market). Use the plain doorway label at the navigation seam, the product name on the page.
- **Multiply → keep "Multiply."** All drafts keep it; it's a clean, owned, buyer-legible name for one-click leverage. No change.

---

## The decision I hold hardest — and would defend to the end

**Infrastructure must be visible and sold on its moat in the Products menu (item 2), with capability *nouns* as the hub labels (item 1).** These are one position: the nav must make the *mechanism* legible to a sophisticated buyer, because the mechanism is what converts him.

Everything in the institutional sale turns on the buyer believing Kamino is real, safe, and built for capital — and that belief is built by Scope's guarded pricing, Permissioning's reversible regulatory switch, the Liquidation engine's $0-bad-debt record, and Markets' ~50-parameter configurability. A nav that hides those behind a single `/how-it-works` link, and that labels its capabilities with retail verbs (Borrow/Earn/Trade), is a nav built for a consumer who will never sign a term sheet. I verified that Stripe — the explicit quality benchmark and a company selling to enterprises — surfaces Radar and Connect (pure infrastructure) in its product menu and sells Radar on its network-effect moat. Kamino's moat is deeper and more decision-critical to its buyer than Radar's is to Stripe's. To bury it, or to front a retail-verb taxonomy over it, is to hide the single strongest reason an institution allocates. I would give ground on nav order, on Resources, on the exact use-case count — but not on this. Surface the moat, label by capability, sell the mechanism.
