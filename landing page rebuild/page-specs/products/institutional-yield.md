# Handoff Spec: Institutional Yield (`/institutional-yield`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This is the single most important product marketing page in the rebuild. Institutional Yield (IY) is the product that carries the thesis — that onchain capital, from retail DeFi wallets up through institutional allocators, can earn yield from regulated, overcollateralized, BTC-backed institutional credit. Every other product on the site sits downstream of whether IY is legible and credible to the reader.

This page's job is to take anyone who hovered on the homepage IY Spotlight (or arrived from `/individuals`, `/institutions`, or the Products mega-menu) and give them the full mechanical, structural, regulatory, custody, transparency, withdrawal, and attestation story — in enough depth to satisfy an institutional due-diligence checklist, but in the branded clean voice that makes a retail user want to deposit. The depositor should leave this page with one feeling: *this is the most rigorous onchain yield product I've ever evaluated, and I can access it from my wallet.*

Funnel position: homepage IY Spotlight (§6.3) OR `/individuals` OR `/institutions` OR Products mega-menu → `/institutional-yield` → (1) `Go to Vault` → `/earn` webapp IY tab for depositors, or (2) `Talk to our team` for larger institutional LPs needing custom handling. The page serves both self-serve and sales-led flows.

## 2. Primary audience

Three overlapping reader profiles:

- **The crypto-native retail depositor** — already has a Solana wallet, already uses Kamino or comparable, hears "regulated BTC-backed institutional credit" and needs to be convinced it's not either (a) too good to be true or (b) locked behind institutional KYC. They need the "permissionless deposit from a DeFi wallet, no KYC on the depositor" story said cleanly.
- **The institutional LP** — family office, small fund, crypto treasury. They need a full product sheet. Regulatory framework, custody model, tripartite structure, attestation cadence, lending criteria, collateral composition, LTV details, oracle/pricing, liquidation path, withdrawal mechanics, risk factors. They're ready to hand this to a risk committee.
- **The TradFi-adjacent reader** — coming to onchain for yield. Recognizes words like "regulated lending operation," "qualified custodian," "tripartite agreement," "monthly attestation." Needs these surfaced prominently. Doesn't need the Solana speed pitch.

All three readers exist in the same page. The architecture has to serve all three without collapsing register.

## 3. Strategic context

IY is Kamino's spearhead for 2026. Four strategic jobs this page must do:

1. **Prove the thesis.** The rebrand bets that onchain capital will flow into regulated-grade yield. IY is the first credible product delivering on it. The page is public evidence that the thesis works.

2. **Establish the structural template.** IY v1 is BTC-only, $25M cap, 6–8% APY. IY Diverse (SOL, gold, commodities) is planned. IY-flavored products distributed via IY API are shipping to fintechs. Every future IY-family product benefits from this page making the structural template credible.

3. **Carry the competitive framing implicitly.** Without naming competitors (Maple, Aave, Compound), this page has to position IY against (a) unregulated institutional lending products, (b) floating-rate DeFi yield pools, (c) traditional private credit with quarterly PDF reporting. The four structural cards (Regulated / Overcollateralized / Qualified Custody / Transparent) do most of this work; the detail on this page extends them.

4. **Serve as the institutional reference document.** Sales conversations for IY begin here. A sales rep points an LP at this page as the first step; it has to survive as the single source of truth for institutional due diligence.

The opportunity this page uniquely addresses: no onchain product has ever combined regulated oversight + real-time per-loan transparency + mandate permanence + qualified custody + depositor-preserved title. Competitors pick one or two. Kamino built all of them into one product. This page makes that visible.

The tension: the page has to carry institutional rigor without becoming a product sheet PDF. The homepage IY Spotlight (§6.3 in master spec) is the teaser; this page is the deep-read. Respect the reader's time with scannable structure, but reward the deep reader with substantive answers.

## 4. Starting context — facts, figures, quotes, proof points

**Product structure (locked / authoritative):**

From the IY Final Announcement and the deep-research doc:

- **Vault:** `kamino.com/earn/institutional/kamino-institutional-USDC`
- **Asset deposited:** USDC. (Design language should use "stablecoin" where possible to future-proof for multi-stablecoin expansion — per master spec principle 12.)
- **Receipt token:** **kiUSDC** (lowercase "ki" + uppercase "USDC"). Share price appreciates; no rebasing. The kiUSDC mark is a branded visual asset across the site.
- **Capacity:** $25M initial cap. Will increase over time. The page should surface current capacity remaining with a visual fill indicator (matching homepage IY Spotlight treatment). When fully subscribed, swap to "Fully subscribed" state with "Join the waitlist" CTA.
- **Target return:** 6–8% projected annual return. Show live current rate when data supports it.

**Capital flow:**

1. User deposits USDC into the vault. Signs a Loan Agreement with a Cayman SPV.
2. SPV forwards capital to a lending operation *licensed and supervised by the Liechtenstein Financial Market Authority (FMA)*.
3. Lending operation originates overcollateralized loans to KYC-verified institutional borrowers.
4. Borrowers post collateral (BTC at launch) at qualified custodians under tripartite agreements.
5. Yield accrues back to the vault; kiUSDC share price appreciates.

**Language rules (strict, from master spec §2 principle 10):**

- Lending operation → *"regulated lending operation"* (never named; internal name is Altenberg, redacted publicly)
- Data provider → *"industry-standard reporting infrastructure"* (internal name Haruko)
- Accounting firm → *"independent accounting firm"* (internal name Andersen UK)
- Custodians → *"qualified custodians (e.g., banks)"* (internal names Anchorage, BitGo, Zodia; all redacted publicly)
- Only **Liechtenstein FMA** is nameable
- Do not say "fund administrator" in marketing
- Do not say "fixed yield" — say "rates set at origination per loan term"
- Do not say "beta" — this is a live product
- Do not say "monthly audit" — say "monthly attestation" (legally distinct)
- Use "no title transfer" as the primary protection language (stronger than "bankruptcy remote")
- Use "share price" not "NAV"
- Use "capacity remaining" for vault caps
- Use "mix of short-term loans" for duration (avoids specific terms)

**Lending criteria (content for the depth section):**

- **Collateral:** BTC only at launch. High-quality, liquid digital assets.
- **Collateral custody:** Qualified custodians only (e.g., banks). Tripartite agreements between borrower, lending operation, and custodian. **Collateral title remains with the borrower throughout the loan.** Rehypothecation contractually prohibited.
- **LTV:** 60% max LTV at origination. Actual typical LTV ~30% (real-time-visible). Proactive margin calls issued for collateral top-up or liquidation.
- **Borrowers:** KYC-verified institutional counterparties. Internally Swiss banks have been referenced — do not name publicly.
- **Loan terms:** Mix of short-term loans with rates set at origination per loan term. Rolling 3-month terms typical. Capital turns on a rolling basis.

**Transparency framework (the structural moat):**

- **Real-time per-loan data** via industry-standard reporting infrastructure — same pipeline used for regulatory reporting. Data visible in the vault UI: loan amounts, collateral values, LTV per loan, portfolio-weighted average LTV, active loan count, total collateral value.
- **Monthly independent attestation** by independent accounting firm — loan balances, collateral ratios, portfolio health. Published publicly.
- The vault UI surfaces this data live. This is a design dependency — the page should showcase or link to the live reporting surface.

**Withdrawal mechanics:**

- **Instant-liquidity buffer** — 5–10% of AUM, deliberately not fully utilized (represents ~30bp yield sacrifice for safety per Marius's "paranoid product" philosophy). Served instantly from buffer for small withdrawals.
- **FIFO onchain withdrawal queue** — in-house built infrastructure, launching shortly after initial launch.
- **Rolling 3-month loan terms** — naturally refresh liquidity on a rolling cadence.
- Larger withdrawals may require waiting for buffer replenishment or loan-term rollover.

**Regulatory posture (for the institutional reader):**

- Lending operation holds an FMA license in Liechtenstein (EEA member state, recognized across the EU).
- Daily reporting to the regulator.
- The regulator reviews the same data pipeline depositors see in the vault UI.
- Separately, the page can note that Kamino-the-protocol is a DeFi protocol (fully open-source, audited, non-custodial), while the *institutional counterparties* operate under regulatory supervision. This distinction is important and must be articulated precisely.

**Voice anchors — the definitive source language:**

From the IY Final Announcement (treat as authoritative):

> *"Capital flows to a regulated lending operation licensed and supervised by the Liechtenstein Financial Market Authority (FMA)."*

> *"The lending operation originates overcollateralized loans to KYC-verified institutional borrowers, backed by high-quality collateral assets such as Bitcoin. Collateral is held at qualified custodians under tripartite agreements — between the borrower, the lending operation, and the custodian. Collateral title remains with the borrower throughout the loan. Rehypothecation is contractually prohibited."*

Cadence: short declarative finance sentences with correct terminology. Nothing fancy.

From Mark Hull (PR quote, deployable):

> *"There are billions of dollars in institutional demand to borrow against assets held in qualified custody. Until now, onchain users had no way to access that opportunity with adequate transparency. Institutional Yield connects these two worlds — regulated institutional lending, accessible through a single vault deposit on Solana."*

From Marius (mental-model frames for video / inline):

- ETF mandate frame: *"When you buy an ETF, you know exactly what's in it. The formula is defined. It doesn't change."*
- Pristine product frame: *"Every decision we make asks: does this make the product safer or riskier?"*
- Transparency contrast frame: *"Traditional private credit gives you a quarterly PDF. DeFi lending gives you pool-level stats. We give you every loan, every collateral position, every LTV — in real time."*

**Competitive implicit framing (no names):**

- Against floating-rate DeFi yield: "mandate permanence" — the vault's lending criteria cannot change. You underwrite what you deposit into.
- Against unregulated institutional lending products: "regulated oversight" — daily reporting to a named regulator.
- Against traditional private credit: "real-time transparency vs. quarterly PDFs."
- Against Maple-class products: "collateral title stays with the borrower; rehypothecation contractually prohibited" (the team treats this as the strongest positioning line because some institutions refused Maple for exactly this reason).

**Proof points:**

- $19B+ in loans originated on Kamino
- Zero security incidents to date
- 20 audits + 4 formal verifications
- Three years in production
- $1.5M Immunefi bug bounty

All apply to Kamino-the-protocol, which is what depositors are transacting against. The IY lending operation's track record is separate; present IY's regulatory / custody / transparency architecture as the product's risk story.

## 5. Voice / tone / register

Institutional product-sheet register. This is the hardest register in the site rebuild, and this is the page where it has to be cleanest.

**Phrases to use:**

- *Regulated, licensed, supervised, overcollateralized, tripartite, rehypothecation, origination, attestation, mandate, duration, portfolio, LTV, collateral, custody, qualified custodian, share price, receipt token*
- *"The lending operation originates... Collateral is held at... Title remains with..."* — cadence from the Final Announcement

**Phrases to avoid:**

- Any vogue DeFi term
- "Safe" / "secure" as unmodified claims — use specific structural descriptors
- "Generating passive yield" — sloppy register
- "DeFi protocol" for Kamino
- Any phrase that implies trustlessness of the off-chain counterparties — they are explicitly regulated, not trustless
- "Guaranteed" / "no risk" — anywhere

**Tone specificity:**

This page can be dense. Institutional readers expect density; retail readers appreciate rigor signaled through structure. Full prose paragraphs. Structured subsections. Scannable heading hierarchy. Two fragment-stack moments maximum (Regulated / Overcollateralized / Transparent pattern from homepage IY Spotlight is already used; don't recycle).

A register check: would the Final Announcement text fit seamlessly into this page without edits? If yes, the register is right.

## 6. Required and suggested sections

### Required sections

- **Hero** — echoes homepage IY Spotlight heading but extends. Likely: heading ("Institutional yield, onchain") + subhead + kiUSDC mark + capacity / APY stats (live). CTA dual: "Go to Vault" + "Read the full structure."
- **Live metrics block** — projected annual return, capacity remaining ($X of $25M), total deposits, active loans, portfolio-weighted avg LTV, total collateral value. Pulled live from industry-standard reporting infrastructure feed.
- **The four structural cards (Regulated / Overcollateralized / Qualified Custody / Transparent)** — exact same copy as homepage IY Spotlight (master spec §6.3). These four are the anchor and should appear prominently, with the same language, to preserve cross-site consistency.
- **Structural explanation / credit → yield diagram** — a labeled diagram showing Depositor → Cayman SPV → Regulated Lending Operation → KYC'd Institutional Borrower → Qualified Custodian (with tripartite annotation). This is load-bearing; institutional readers expect a flow diagram.
- **Lending criteria deep-dive** — full detail on collateral, LTV, borrower type, loan terms, margin calls. In a clean-structured format (list / table / subsections).
- **Regulatory + custody deep-dive** — FMA supervision, daily reporting, tripartite custody, rehypothecation prohibition, title preservation. The master spec suggests a standalone deep-dive.
- **Real-time transparency section** — embed or preview of the live per-loan reporting surface. This is the differentiation moat; show it, don't just describe it.
- **Attestation cadence** — monthly attestation by independent accounting firm. Link to current and past attestation reports if publicly posted.
- **Withdrawal mechanics walkthrough** — instant buffer, FIFO queue, rolling-term liquidity refresh. Can be diagrammed.
- **FAQ** — anticipate the 10–20 questions an institutional reader asks (KYC on depositor? Tax treatment? Risk factors? What if the lending operation fails? What if a custodian fails? Regulatory jurisdiction? Attestation frequency? How is the APY sustained?). This section is long but essential.
- **Deposit CTA** — dual: "Go to Vault" (webapp IY tab) + "Talk to our team" (for institutional LPs).

### Suggested sections

- **Comparative framework** — a matrix or explainer positioning IY on the four structural dimensions (regulation, transparency, custody, mandate permanence) without naming competitors. Per Marius's "win on framework" principle: publish the evaluation framework, let the reader apply it.
- **Quote block** — Mark Hull's PR quote or a Marius mental-model frame as pull-quote.
- **Risk factors / disclosures section** — fine-print zone. Required for institutional readers. Coordinate with Helen (Legal). See the IY Final Announcement's disclosure language for reference.
- **History / provenance** — when did IY launch (April 14, 2026), against what backdrop (the "decisive shift in the US regulatory landscape" + onchain yield compression). Brief.
- **Preview of IY product family** — IY Diverse upcoming (SOL, gold, commodities). Signals mandate permanence of v1 *and* a product roadmap. Must be careful here — v1 mandate is BTC-only and should not be muddied by IY Diverse framing.

### Section order

Recommended top-to-bottom:

1. Hero (heading / subhead / kiUSDC mark / live stats / dual CTA)
2. Four structural cards (Regulated / Overcollateralized / Qualified Custody / Transparent)
3. Structural explanation (credit → yield diagram)
4. Lending criteria deep-dive
5. Regulatory + custody deep-dive
6. Real-time transparency section
7. Attestation cadence
8. Withdrawal mechanics walkthrough
9. Comparative framework (optional)
10. FAQ
11. Risk factors / disclosures (below FAQ)
12. History / provenance (optional)
13. IY product family preview (optional)
14. Deposit CTA

Rationale: four-structural-cards near the top anchors the positioning; depth sections follow in a rough institutional-reading order (criteria → regulation → custody → transparency → attestation → withdrawal); FAQ catches remaining questions; close with CTA.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. All fifteen apply here — this is the most copy-principle-bound page in the rebuild. Call out:

- **No named IY counterparties** (principle 10) — this page is the single biggest risk for violating this rule. Every reference to the lending operation, data pipeline, accounting firm, and custodians must use the structural descriptors, not the real names. Scan and re-scan.
- **Use "share price" not "NAV"** (principle 12).
- **Use "monthly attestation" not "monthly audit"** (principle 12).
- **Use "lending criteria" not "parameters"** (principle 12).
- **Use "capacity remaining" for vault caps** (principle 12).
- **Use "mix of short-term loans" for duration** — avoids specific terms and future-proofs (principle 12).
- **No forward-risk claims** (principle 7) — do not say "no defaults" or "zero bad debt" about IY as a forward claim. Factual point-in-time claims only.
- **No "V2"** (principle 8).
- **American spelling** (principle 15) — "tokenized," "Institutional Yield."
- **Real sentences, not fragment-stacks** (principle 14) — prose throughout. Fragment-stacks reserved for the four structural cards (already established pattern) and one or two rhythm moments.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- Homepage IY Spotlight (§6.3) → `/institutional-yield` (primary inbound route)
- `/individuals` IY feature → `/institutional-yield`
- `/institutions` IY section → `/institutional-yield`
- Products mega-menu (Enterprise > Institutional Yield) → `/institutional-yield`
- Footer Enterprise column → `/institutional-yield`
- Stories card (homepage §6.7, Institutional Yield story) → story page, which in turn links here
- External: IY announcement PR, partner co-marketing, conference follow-ups

**Outbound:**

- Hero / Deposit CTA → `/earn` (webapp, IY tab preselected) for direct deposit
- Talk-to-team CTA → `institutional@kamino-foundation.com` or sales form
- Four structural cards → no outbound (anchor content)
- Regulatory section → `/oracles` if Scope is referenced for pricing (secondary link)
- Attestation section → external link to the published attestation reports (PDFs or hosted page)
- Real-time transparency section → live reporting surface (live embed OR link out)
- Risk factors → `/security` and `/docs` for depth
- IY product family preview → future IY Diverse page (when live)
- FAQ answers → `/docs` deep-reads where relevant

## 9. Visual / design direction

Institutional product-sheet register translated into Kamino's design system. The page should feel like a polished product specification document, not a DeFi marketing page.

- **kiUSDC token mark** — prominent, branded visual asset. Reuse from homepage IY Spotlight treatment.
- **Live charts** — kiUSDC share-price appreciation (same as homepage), capacity fill indicator, active loan list.
- **Structural diagram** — credit → yield flow diagram (Depositor → SPV → Lending Operation → Borrower → Custodian). Needs to be produced; reference the Private Credit and Off-Chain Collateral decks for visual direction.
- **Live data panel** — if the industry-standard reporting infrastructure feed can be embedded or surfaced, do so. This is the transparency moat visualized.
- **Attestation report cards** — monthly attestation PDFs surfaced as downloadable cards in a timeline.
- **FAQ accordion** — functional but polished.
- **Color temperature** — cool institutional, restrained, typographic emphasis over imagery.

**Visual dependencies:**

- kiUSDC token mark (already specified for homepage)
- kiUSDC share-price time-series data (live)
- Capacity + APY live stats
- Credit → yield flow diagram (new)
- Live per-loan reporting embed or screenshot
- Attestation report assets (PDFs or formatted web pages)
- Dual CTA buttons (Go to Vault + Talk to our team)

**Design-system components likely in play:**

- Interactive chart
- Live stat block
- Structural diagram
- FAQ accordion / expandable
- Four-card structural row (inherits from homepage IY Spotlight)
- Primary + Secondary button (dual CTA)
- Document card (attestation timeline)

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §6.3 (homepage IY Spotlight — the four structural cards have locked copy), §9.1 (/institutional-yield preliminary structure), and §2 principle 10 (language rules)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Institutional Yield Final Announcement** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md` — treat as authoritative product voice and structural copy. Paragraphs can be adapted directly (with minor edits).
3. **IY PR brief v2** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/pr-brief-v2.md` — positioning language, competitive framing (no names), key messages.
4. **Kamino deep comprehension §4.8 (Kamino Institutional Yield in the product stack) and §12 (brand voice — especially the Marius mental-model frames)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
5. **Kamino Private Credit deck** — `/Users/dawid/Github/Product/context/decks/Kamino Private Credit.pdf` — product architecture, visual reference for the flow diagram.
6. **Private Credit external memo** — `/Users/dawid/Github/Marketing/documents/Private Credit External Memo - Lean.md` — institutional reader-oriented framing.
7. **Competitive positioning — private credit** — `/Users/dawid/Github/Marketing/documents/competitive-positioning-private-credit.md` — implicit framing against Maple, Aave, other yield products.
8. **Marketing plan (meeting intelligence)** — `/Users/dawid/Github/Marketing/launches/private credit/marketing-plan/` folder — context on Marius's voice, language rule decisions, and competitive posture.

## 11. Open questions and decisions deferred to the page agent

- **FAQ content.** The specific 10–20 questions and authoritative answers. Coordinate with Helen (Legal) for anything touching risk factors, tax treatment, jurisdictional concerns.
- **Live reporting surface embed vs. link.** The transparency moat is maximally persuasive when visible. Confirm with product whether the per-loan reporting can be embedded on a marketing page or must be linked out to the vault UI.
- **Attestation report format.** How are monthly attestations published — PDF, web page, both? Confirm timing of first attestation availability.
- **US jurisdiction language.** The master spec and research flag that Kamino is exploring US market presence. How does the page address US depositor eligibility, if at all? Coordinate with Helen.
- **"Permissionless deposit, no KYC on depositor" framing.** Legally sensitive. Final Announcement language handles this carefully. Confirm language with Legal.
- **IY Diverse preview.** Risk: muddies the mandate-permanence positioning of IY v1. Recommend omitting or handling very carefully. Confirm with Dawid.
- **Comparative framework — explicit or implicit.** Master spec §6.3 includes the bridge sentence *"features structural properties that differentiate from both conventional DeFi and conventional private credit products"* without naming specifics. Decide whether to extend or to keep implicit.
- **Competitive naming.** Internal rule: never name Maple in public marketing. Confirm this extends to this page explicitly (it should, per Marius's "win on framework" principle).
- **Withdrawal mechanics detail.** The FIFO queue is described as launching shortly after initial launch. Confirm current status at page ship time.
- **Target APY framing.** 6–8% is the target range. If current live rate is visible, show it; if between rates, band is OK. Confirm display treatment.
- **Hero copy.** Master spec §6.3 locks homepage subhead: *"Generate stablecoin yield via institutional, overcollateralized, and regulated lending operations."* This page's hero can echo but should extend — draft 2–3 candidates.
- **Page depth vs. /docs.** Some detail (tax, jurisdictional notes, full legal terms) probably belongs in `/docs` not here. Decide the cut-line.
