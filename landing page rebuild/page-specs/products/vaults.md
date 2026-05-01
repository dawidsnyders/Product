# Handoff Spec: Vaults (`/vaults`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page exists for a specific reader: a risk curator, institutional asset manager, or sophisticated LP evaluating where to deploy vault mandates. Kamino's Vault Layer is the V2 architectural innovation that makes every other product on the protocol possible (curators mandate capital across markets; depositors access mandate-based yield without operating positions directly). The page's job: establish the Vault Layer + Curator Ecosystem as institutional-grade vault infrastructure, walk through the mechanics (allocations, First Loss Capital, whitelisted reserves, withdrawal penalties, conditional allocations), showcase current curators and flagship vaults, preview Meta Vaults as the evolution, and route curators into the "become a curator" partnership conversation.

The single most important takeaway: **Kamino's Vault Layer is where institutional curators run real mandates — Gauntlet, Steakhouse, Allez, MEV Capital, Sentora, Re7 Labs — and the economic architecture (First Loss Capital, whitelisted reserves, conditional allocations) is designed for serious curators, not passive aggregators.**

Funnel position: `/issuers` Vaults section → `/vaults` (primarily). Also from Products mega-menu (Enterprise > Vaults); `/individuals` curator trust cue (secondary); `/institutions` IY section (tangential). Primary CTA: *Become a curator*. Secondary: `View vault roster` (linking to live webapp vault list).

## 2. Primary audience

- **Existing and prospective vault curators** — professional risk firms evaluating whether to run vaults on Kamino. Gauntlet, Steakhouse, Allez, MEV Capital, Sentora, Re7 Labs are live. New curators will evaluate this page as a "should we join?" conversation starter.
- **Institutional LPs** — family offices, funds, treasury teams — evaluating vault mandates. They read this page to understand the architecture beneath the vaults they allocate to.
- **Asset issuers curating their own asset** — as described on `/issuers`. An asset issuer may become their own curator (ACRED + Steakhouse is the template). This page is the "how" for that path.
- **Sophisticated retail LPs** — the subset of retail depositors who care about vault structure. Secondary audience; don't design for them, but don't lose them.

What this page is NOT for: casual retail users picking a vault (they pick from `/earn` in the webapp, which has much friendlier surfacing). This page is vault *infrastructure*, not vault *shopping*.

## 3. Strategic context

The Vault Layer is Kamino's V2 architectural answer to Morpho Blue + MetaMorpho — but unified inside one protocol rather than delegated to external curators. This page exists because:

1. **The curator ecosystem is a structural moat.** Gauntlet, Steakhouse, Allez, Sentora — these are DeFi's best risk curators, and they're all live on Kamino. That's a flywheel: good curators attract quality capital; quality capital attracts more curators. The page is where that flywheel becomes legible.

2. **Meta Vaults is the evolution of the pattern.** Meta Vaults (coming) allow curation at a higher level — vaults of vaults, or cross-vault allocation strategies. Announcing / previewing this on the page signals roadmap without over-committing.

3. **Curator ecosystem is how asset issuers scale distribution.** A vault curator can build a mandate around a specific asset (ACRED via Steakhouse; a future PRIME-focused curator; etc.). Issuers read this page for that distribution pathway, which is why it cross-links heavily with `/issuers`.

4. **Vault Layer preserves Kamino's zero-bad-debt record.** The architecture — isolated markets, curator whitelisted reserves, First Loss Capital, conditional allocations — is designed to prevent the class of failures that hit Morpho (MEV Capital / xUSD depeg, $25.4M bad debt exposure) and Aave (Eisenberg CRV exploit). The page should signal this rigor without boasting.

The opportunity this page uniquely addresses: most DeFi vault pages are curator directories or vault catalogs. Kamino can do something harder and more useful — explain the architecture that makes the vaults sound, and make the case that serious curators should run mandates here because the architecture supports serious curation.

The tension: the reader population is bimodal. A curator evaluating whether to onboard wants architecture detail (First Loss Capital, whitelisted reserves, fee structure). An LP evaluating a vault wants curator identity + mandate transparency + track record. The page must serve both without picking one.

## 4. Starting context — facts, figures, quotes, proof points

**The Vault Layer architecture (from `research/02-kamino-deep-comprehension.md §4.2` and `§5`):**

- **Two-layer model:** Market Layer (permissionless, isolated, customizable lending markets) + Vault Layer (single-asset lending vaults that aggregate liquidity across markets under curator mandates). V2 architecture. Do not publicly call it "V2."
- **A user deposits** a single asset (USDC, USDS, PYUSD, SOL, etc.) into an Earn vault.
- **A curator operates the vault** with a published mandate.
- **The curator allocates deposits** across reserves in one or more markets based on weight + cap allocations (relative integer weights; per-reserve caps).
- **Standard vs. Conditional allocations:** the conditional pattern allows vaults to signal availability for fixed-rate reserves without capital sitting idle (critical for Fixed Rates — see `/fixed-rates` page). Capital moves atomically on a matching order.
- **First Loss Capital Farm:** curators can deposit manager capital that absorbs vault losses before depositors incur them. The onchain analog of GP-in-the-fund skin-in-the-game.
- **Performance and AUM fees:** configurable per vault. Curator takes a cut; Kamino takes a cut (configurable split).
- **Withdrawal penalties:** not manager revenue; returned to remaining depositors to prevent sandwich-exploit behavior around autocompound.
- **Whitelisted reserves:** optional risk control capping which reserves a vault can deploy into. This is the architectural answer to the class of failures that hit Morpho MEV Capital.
- **Vault mandate permanence** varies by configuration — see IY (mandate cannot change) vs. curator-operated vaults (mandate published, deviations are governance events).

**Current curator roster (public, partnership-framed):**

From `research/partners-04-synthesis.md`:

- **Gauntlet** — ~$2B+ in curated vaults across 80+ markets across DeFi. On Kamino: USDC Prime, USDC Frontier, RWA Frontier, SOL Balanced vaults. Official curator since November 2025. Internally also running the Altenberg BTC-backed private-credit vault (redact — do not publish).
- **Steakhouse Financial** — largest curator on Morpho by TVL; $1.26B managed globally. On Kamino: USDC High Yield, USDG High Yield vaults (~$295M across four vaults). Co-architect of the ACRED integration via Multiply. Working on V2 Lending Vault design and RWA-specific Multiply strategies.
- **Allez Labs** — founded by senior members of Aave's former risk team. End-to-end risk management + real-time analytics + auto-rebalancing vaults. Curates Allez SOL Vault and Allez USDC Vault. Publishes monthly Risk Insights on the Kamino governance forum.
- **MEV Capital** — DeFi-native investment firm, market-neutral yield strategies. SOL vault on Kamino. Secured with Whitelisted Reserves.
- **Sentora** — Formed by 2024 IntoTheBlock + Trident Digital merger; $25M Series A. Kamino V2 curator; runs STEY strategy on xStocks Market. Note: research flags Sentora is currently in "tense moment" post-rsETH — keep copy neutral and present-tense factual. Anthony DeMartino (ex-Paxos) is primary contact.
- **Re7 Labs** — on-chain risk curator, $610M TVL across Morpho, Euler, Mellow, Kamino. Curates Conservative / Balanced / Aggressive Earn Vaults on Kamino V2. Anchors P2P.org's rstSOL lending allocation.

**Meta Vaults (upcoming):**

- Evolution of the Vault Layer pattern
- Allows vaults of vaults, or cross-vault allocation strategies
- No firm launch date per master spec — treat as "coming"
- Preview on the page as an architectural preview without specific timeline

**Kamino's own role as curator:**

Kamino directly curates certain flagship vaults (Cash Earn, conservative stablecoin vaults). This is the exception pattern — most curation is external.

**Economics (for the curator-audience depth):**

- **Performance fees + AUM fees:** configurable per vault. Typical splits negotiable; specific numbers private.
- **Curator deposits of First Loss Capital:** the GP-skin-in-the-game pattern. Vault-by-vault.
- **Whitelisted reserves:** a deliberate risk control; the curator and Kamino agree on which markets the vault can deploy into, preventing the vault from unexpectedly holding high-risk assets.
- **Withdrawal penalty economics:** penalties return to remaining depositors. Curator does not profit from early-exit penalties. This is a deliberate economic design preventing sandwich exploits.
- **Incentive programs:** vaults often include KMNO Season incentives or partner incentives (e.g., cbBTC Growth Initiative paid USDC into the Gauntlet USDC Prime vault). Co-marketing pattern.

**Proof points:**

- $1B+ across curator-managed vaults (rough, varies — confirm current)
- Nearly $1B across RWA markets at early 2026 (including curator-operated exposure)
- Zero bad debt on curator vaults to date (do not state as forward claim)
- 21+ vaults live post-V2

**Voice anchors:**

From Kamino's governance forum when onboarding Gauntlet (Nov 11, 2025):

> *"Gauntlet combines quantitative modeling with deep DeFi experience to design and operate lending vaults that balance yield and risk management."*

Cadence to imitate: respectful of curator identity, describes capability, links to partnership economic role.

From Steakhouse onboarding (May 2025):

> *"Steakhouse is working closely with Kamino to drive growth in key product areas such as V2 Lending Vaults, V2 Markets, and RWAs."*

**Competitive implicit framing (no names):**

- Against Morpho's delegate-oracle-to-curator pattern: Kamino's in-house Scope oracle + whitelisted reserves avoid the class of failures that hit MEV Capital / xUSD depeg on Morpho (Nov 2025, $25.4M bad debt).
- Against passive vault aggregators: curator ecosystem here is active risk management with First Loss Capital and published mandates.
- Against single-curator platforms: multi-curator flywheel.

## 5. Voice / tone / register

Institutional vault-infrastructure register. Respectful of curator identity, precise about mechanics. Neither as warm as `/individuals` nor as austere as `/institutional-yield`.

**Phrases to use:**

- *Mandate, allocation, whitelisted reserves, First Loss Capital, Performance fee, AUM fee, withdrawal penalty, conditional allocation, risk framework, curator, vault infrastructure, published risk profile*
- *"Under a published mandate," "allocated across markets," "signaled for conditional liquidity"*
- *"Gauntlet runs...", "Steakhouse curates...", "Allez publishes monthly Risk Insights"* — partnership-framed verbs

**Phrases to avoid:**

- "Yield farming" — sets a wrong register
- "Automated yield aggregator" — Kamino is not Yearn
- "Best APY available" — misleading comparative
- "Mandate drift" as a Kamino practice — this is a Maple critique and should only appear as implicit differentiation (if at all)
- "DeFi vault" — the frame is "institutional vault infrastructure"

**Tone specificity:**

Curator-credible. A reader from Gauntlet or Steakhouse should read this page and think "the page understands what we do." Structural mechanics get their fair share of space; partnership and ecosystem flavor gets the rest.

## 6. Required and suggested sections

### Required sections

- **Hero** — positioning line for vault infrastructure. Something like "Institutional vault infrastructure, run by named curators." Dual CTA: `Become a curator` (primary) + `Browse vaults` (secondary, routing to webapp).
- **Vault Layer architecture overview** — Market Layer + Vault Layer two-layer model. Diagram load-bearing. Explain what a vault is, what a curator does, how deposits flow across markets under a mandate.
- **Curator ecosystem showcase** — a real section with each live curator: Gauntlet, Steakhouse Financial, Allez Labs, MEV Capital, Sentora, Re7 Labs. Partnership-framed copy. Logo + name + one-line description + flagship vaults. Link to each curator's live vault page in webapp.
- **Economic architecture** — First Loss Capital, Performance + AUM fees, Whitelisted reserves, Withdrawal penalty economics. These are the serious-curator-retention mechanics.
- **Conditional allocations** — the Fixed Rates connection. Explains how curators can signal availability for fixed-rate reserves without idle capital. Cross-links to `/fixed-rates`.
- **Meta Vaults preview** — the upcoming evolution. Brief, directional, no hard commit.
- **Become a curator CTA** — the page's primary conversion. Contact link + expected process (light-form or email).

### Suggested sections

- **Architecture depth / differentiation** — a tighter section that implicitly contrasts Kamino's in-house-oracle + whitelisted-reserves architecture with "delegated-oracle" vault models. This is the strongest competitive implicit framing. Keep it architectural, not adversarial.
- **Flagship vault highlights** — a quiet block highlighting 3–5 notable vaults (Gauntlet USDC Prime, Steakhouse USDC High Yield, Allez SOL, Sentora PYUSD, Re7 Conservative/Balanced/Aggressive). Each with live TVL / APY / risk profile.
- **Curator onboarding process** — lightweight explanation of what's involved in becoming a curator. Due diligence, vault setup, risk framework, fee structure negotiation.
- **Governance / Risk Council note** — how Kamino's Risk Council interacts with curator vaults (e.g., parameter approvals, market onboarding).
- **RWA + vault intersection** — curators building mandates around specific RWAs (ACRED + Steakhouse as the template; PRIME curator mandates as a possibility). Cross-links to `/issuers` and `/rwa-dex`.

### Section order

Recommended top-to-bottom:

1. Hero + dual CTA
2. Vault Layer architecture overview
3. Curator ecosystem showcase
4. Economic architecture
5. Conditional allocations (Fixed Rates connection)
6. Architecture depth / differentiation (optional)
7. Flagship vault highlights (optional)
8. Meta Vaults preview
9. RWA + vault intersection (optional)
10. Curator onboarding process (optional)
11. Governance / Risk Council note (optional)
12. Become a curator CTA

Rationale: architecture first to establish rigor; curator showcase second to establish the ecosystem; economic architecture third because curators read it as the "can we make money running a serious mandate here?" question. Meta Vaults as a roadmap beat near the end. Close with CTA.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **Partnership-focused partner copy** (principle 11). Curator descriptions describe *how Kamino works with them*, not who they are. Identity context is minimal.
- **No "V2"** (principle 8). The architectural sophistication is assumed.
- **Lead with institutional vocabulary** (principle 2). Mandate, allocation, infrastructure, risk framework.
- **No forward-risk claims** (principle 7). Do not say "our vaults never lose money." Factual point-in-time only.
- **No framing by negation** (principle 1). Describe what Kamino's architecture IS. The Morpho implicit frame is fine because it's positive (our in-house oracle + whitelisted reserves); the name Morpho does not appear.
- **Opinionated voice reads as credibility** (principle 13). Curators respond to product conviction. "We designed First Loss Capital because serious curators should have skin in the game" reads as expertise.
- **American spelling** (principle 15) — "customizable," "optimize," etc.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- `/issuers` Vaults section → `/vaults` (primary)
- Products mega-menu (Enterprise > Vaults) → `/vaults`
- Footer Enterprise column → `/vaults`
- `/individuals` curator trust cue → `/vaults` (secondary)
- `/fixed-rates` curator / LP side section → `/vaults`
- Homepage Partners section (Gauntlet / Steakhouse / Allez / Sentora hover cards) → `/vaults`

**Outbound:**

- Become a curator CTA → `partnerships@kamino-foundation.com` or `mark@kamino-foundation.com`
- Browse vaults CTA → `/earn` in webapp (vault list)
- Individual curator sections → each curator's vault page in webapp
- Conditional allocations section → `/fixed-rates`
- Meta Vaults preview → Meta Vaults dedicated page when live; otherwise no outbound
- Architecture depth → `/oracles` (Scope cross-link where in-house oracle differentiation is made), `/security` (audits)
- RWA + vault intersection → `/issuers` and `/rwa-dex`

## 9. Visual / design direction

Institutional vault-infrastructure register — polished, architectural, curator-respectful.

- **Architecture diagram** — Market Layer + Vault Layer two-layer visual. Central to the page.
- **Curator logos** — monochrome-capable, presence-based treatment. Professional.
- **Vault card pattern** — used for flagship vault highlights. Live TVL / APY / risk profile.
- **Allocation flow diagram** — deposit → vault → allocation across markets. Matches Conditional allocation pattern.
- **Economic-architecture schema** — First Loss Capital, fee structure, whitelisted reserves visualization.

**Visual dependencies:**

- Vault Layer / Market Layer architecture diagram (new)
- Curator logos — Gauntlet, Steakhouse, Allez, MEV Capital, Sentora, Re7 Labs (monochrome-capable)
- Allocation flow diagram
- Fee / First Loss Capital schema
- Optional: Meta Vaults concept visual

**Design-system components likely in play:**

- Structural / architecture diagram
- Card (curator cards, vault highlight cards)
- Logo strip
- Primary + Secondary CTA
- Detail / expandable section (for curator onboarding depth)

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §6.6 (Partners — Gauntlet, Steakhouse, Allez, Sentora, Re7 hover cards all present), §8.3 (Issuers → curator ecosystem overlap), §9.4 (/vaults preliminary structure — includes Meta Vaults)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.2 (Earn — Vault Layer), §4.11 (Curators ecosystem), §5 (Kamino 2.0 story), §10.2 (Curators list)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Partner synthesis** — Gauntlet, Steakhouse Financial, Allez Labs, MEV Capital, Sentora, Re7 Labs — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
4. **Kamino Curator Vaults deck** — `/Users/dawid/Github/Product/context/decks/Kamino Curator Vaults.pdf` — vault + curator positioning material, should have architectural diagrams.
5. **Fixed Rates order-book spec** — `/Users/dawid/Github/Product/specs/fixed-rates-order-book.md` — Conditional Liquidity mechanism tied into the Vault Layer.
6. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — broader vault positioning.

## 11. Open questions and decisions deferred to the page agent

- **Meta Vaults framing.** How much to preview, how much to commit to timing. Default: preview architecturally, no hard launch date.
- **Sentora framing.** Research notes Sentora is in a "tense moment" post-rsETH. Copy should be neutral and present-tense factual. Confirm with Dawid before publishing.
- **Re7 Labs framing.** Research notes "slightly fractious moment" around an opsec questionnaire. Public copy stays neutral. Confirm inclusion level (master spec excludes Re7 from Partners section but keeps them as curator — include on `/vaults`).
- **Flagship vaults list.** Which 3–5 vaults to highlight. Depends on current TVL + APY + mandate-stability. Confirm at page-ship time.
- **First Loss Capital specifics.** How public are the FLC amounts per vault? Default: describe mechanism without specific amounts.
- **Performance / AUM fee ranges.** Publishable ranges or kept private? Default: describe mechanism without specific numbers.
- **Curator onboarding process depth.** Light-touch marketing description vs. detailed product-spec. Default: light-touch; detail moves to partnerships conversation.
- **Risk Council visibility.** Public-facing concept or internal? Confirm.
- **Conditional allocations depth.** How much mechanism to surface here vs. on `/fixed-rates`. Default: overview here, depth on `/fixed-rates`.
- **Tagline / hero copy.** Draft 2–3 candidates.
- **Architecture depth section — implicit framing against Morpho.** Useful for sophisticated readers but risky. Default: architecture section describes Kamino's choices positively; no Morpho naming, no direct comparison.
- **Kamino's own role as curator.** Surface or not? (It's less common; most vaults are externally curated.) Default: brief mention that Kamino curates a small number of conservative flagship vaults.
