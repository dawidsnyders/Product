# Handoff Spec: Institutions (`/institutions`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This is the anchor page of the 2026 rebrand. Its single job: give a crypto-native fund manager, family office allocator, market-making desk lead, or crypto-treasury CFO enough substantive material to hand to their internal risk committee and say *"Kamino is the onchain credit venue we should underwrite."* The page is a sales-funnel surface — not a self-serve product surface — and its success is measured in qualified institutional leads into the `institutional@kamino-foundation.com` pipeline and deposits into Institutional Yield from institutional LP wallets.

The single most important takeaway: **Kamino offers institutions the two things DeFi has never offered — qualified-custody-preserving borrow facilities and regulated-grade yield deposits — both built on the most battle-tested lending infrastructure on Solana.** The three flagship products the page is built around are Off-Chain Collateral (for institutional borrow), Fixed Rates (for institutional borrow budgeting), and Institutional Yield (for institutional LP exposure). Permissioned Markets is the cross-cutting feature that enables all three.

Funnel position: homepage router → `/institutions` → (either individual product marketing pages or `Contact sales`). This page does most of the narrative work; downstream product pages carry mechanics; sales closes the ticket.

## 2. Primary audience

Map to master-spec §3.2 and research §11.2. The real targets are:

- **Crypto-native hedge funds** — Multicoin, Pantera, Greenfield, Polychain, Multicoin, and smaller market-neutral shops. These readers need fixed rates for budgeting, leverage for basis trades, custody-preserving borrow for directional exposure without selling. They already know Kamino as "the Solana lender" — this page has to convince them Kamino is institutional-ready, not just retail-dominant.
- **Family offices allocating 2–10% of AUM to crypto-yield** — typically arrive via a trusted intermediary or strategy allocator. Need a regulated, transparent vehicle they can actually explain to an LP. IY is the primary product for them.
- **Crypto treasury companies** — publicly listed vehicles holding SOL/BTC/ETH on balance sheet (Solana Company / Nasdaq: HSDT is the prototype; MicroStrategy and its imitators are the archetype). They need to unlock liquidity from digital-asset treasury positions without triggering tax events. Off-Chain Collateral is the product.
- **Market-making firms** — Wintermute, XBTO, Hidden Road (Ripple Prime), Galaxy. They already use Haruko for operations data, which gives IY's real-time reporting story a credibility shortcut with them. They need custody-preserving borrow and can become IY LPs too.
- **Crypto prime brokers** — FalconX is the pilot for Fixed Rates. Their institutional clients need onchain credit with fixed cost and duration, packaged through their broker stack.
- **Trading firms running basis / funding-rate / perp-basis strategies** — needing predictable borrow cost, isolated risk, and duration control.

What this page is NOT for: retail sophisticated users (they have `/individuals`), tokenized-asset issuers (they have `/issuers`), consumer-app integrators (they have `/fintechs`).

## 3. Strategic context

This page exists because the rebrand itself exists because of this audience. The hero line "Connecting global capital to the new financial system" is spoken at this audience more than any other. Three forces converging in 2026 make this page strategically critical:

1. **Crypto-native yield has compressed below savings-account levels** (Aave USDC ~2.6%). Institutional capital that came onchain for yield in 2021–2022 is leaving or staring at break-even. IY is the answer — 6–8% from regulated BTC-backed credit, permanent mandate, with onchain composability DeFi offers and TradFi cannot.

2. **Institutional BTC-backed credit demand is a multi-billion-dollar structural market** with no credible onchain venue until now. BTC holders at qualified custodians need leverage for tax and opportunity-cost reasons. They pay premium rates (6–8%). The demand is real and sustainable. Kamino's Off-Chain Collateral product is the first credible onchain venue that preserves qualified custody.

3. **The US regulatory posture has decisively shifted** (per *There Is Only KMNO v4*) opening a viable path for onchain credit to serve regulated markets at scale. Kamino is positioned to be the infrastructure that captures that opportunity — but only if it's legible to institutions. This page is where it becomes legible.

The opportunity this page uniquely addresses: no competitor has the combination Kamino does. Aave Horizon is a separate permissioned instance bolted onto the main protocol. Morpho delegates oracles to curators (a risk exposure institutions see). Maple has drifted from BTC-only to a mixed collateral set and took title to collateral. Kamino has unified retail + institutional infrastructure under one protocol with zero bad debt at $19B originated, in-house oracle (Scope), and tri-party custody that preserves borrower title. *That combination is the substantive differentiation.*

This page must walk a careful register: institutional enough to be taken seriously by an LP with Goldman experience, but not so dry it ignores that these institutions are crypto-native. The audience is bilingual — they read TradFi memos *and* DeFi governance forums. The copy has to speak both.

## 4. Starting context — facts, figures, quotes, proof points

**The three flagship products featured on this page:**

### Institutional Yield

- USDC vault; $25M initial cap; 6–8% target APY (show live current rate when data supports)
- Deposit USDC → receive kiUSDC receipt tokens (share price appreciates; no rebasing)
- Capital deploys through a Cayman SPV (Loan Agreement with depositors) to a lending operation *licensed and supervised by the Liechtenstein Financial Market Authority (FMA)* with daily reporting to the regulator
- BTC-only collateral at launch. 60% max LTV (actual typical ~30%). Collateral at qualified custodians under tripartite agreements. Title stays with borrower. Rehypothecation contractually prohibited.
- **Transparency moat:** real-time per-loan data via industry-standard reporting infrastructure (same pipeline regulator reviews). Monthly attestation by independent accounting firm.
- Instant-liquidity buffer (5–10% of AUM). FIFO onchain withdrawal queue (launching shortly after initial launch). Rolling 3-month loan terms naturally refresh liquidity.
- See `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md` for the authoritative product voice.
- Language rules (strictly enforced, master spec §2 principle 10): do NOT name the lending operation, the data provider (Haruko internally), the accounting firm (Andersen UK internally), or the custodians (Anchorage / BitGo / Zodia internally). Structural descriptors only.

### Off-Chain Collateral

- Institutional borrow product. Borrow stablecoins onchain while collateral stays at a qualified custodian (Anchorage Digital is the first such custodian, and nameable as a partner since the partnership is public).
- Tri-party Account Control Agreement between borrower, lending-SPV, and custodian. Chainlink Proof of Reserves verifies custodied collateral.
- 65% max LTV; 70% liquidation LTV; 3-month fixed-rate terms with rollover option.
- First borrower (upcoming): **Solana Company (Nasdaq: HSDT)**, managed by Pantera Capital and Summer Capital, against ~$201M of natively-staked SOL held at Anchorage. The borrow has not yet executed as of April 2026 — language must not imply it has.
- Anchorage's Atlas system orchestrates LTV, margin, and rules-based liquidations 24/7. See `research/partners-04-synthesis.md` Anchorage Digital entry.
- See `/Users/dawid/Github/Product/context/decks/Kamino Off-Chain Collateral Deck.pdf` for full mechanics.
- The unique claim: **the only product on Solana that preserves qualified custody while enabling onchain borrowing.** This claim can be made because it is true at the time of writing.

### Fixed Rates & Fixed Terms

- Credit primitive: predictable borrow cost for a defined term. Foundational for institutional budgeting; DeFi has been floating-rate only.
- Rate-duration grid: multiple reserves per debt token, each representing a rate + term cell.
- Conditional Liquidity mechanism: curators signal allocation availability; capital moves atomically when a borrower places a matching order — prevents idle capital in low-utilization fixed pools.
- Withdrawal Queue + Rollover Mechanism for predictable exits.
- Pilot borrower: **FalconX** — one of the largest institutional crypto prime brokers. FalconX is integrating fixed-rate and flexible onchain credit into its institutional stack.
- Fixed Rates marketing page also includes Borrow Orders (mechanically the same product — "limit orders, but for lending").
- See `/Users/dawid/Github/Product/specs/fixed-rates-order-book.md` and `/Users/dawid/Github/Product/specs/borrow-orders-prd.md` for mechanics.

**Cross-cutting features to surface on this page:**

### Permissioned Markets

- KYC-gated markets for regulated strategies. Native V2 architecture capability (don't say "V2" publicly — just "Kamino's market layer").
- Enables regulated assets and institutional strategies that can't exist in permissionless markets.
- Use cases: KYC-gated IY vault variants, institutional-only Off-Chain Collateral markets, RWA markets restricted to qualified investors.

### Institutional infrastructure that's already deep

- **Squads V4** — secures Kamino's program upgrade authority and market administration. Any institutional Squads multisig can deploy directly into Kamino Lend, JLP Market, Altcoins Market.
- **Anchorage Digital** — OCC-chartered US digital asset bank. Qualified custodian for Off-Chain Collateral.
- **Chainlink** — oracles, CCIP for PRIME, Proof of Reserves for Off-Chain Collateral.
- **Haruko / industry-standard reporting infrastructure** — used by Hidden Road, Galaxy, XBTO, Wintermute. Do NOT name Haruko on public copy.
- **Pantera Capital + Summer Capital** — co-managers of Solana Company, the first OCC borrower.
- **FalconX** — Fixed Rates pilot.

**Proof points institutional-credible:**

- $19B+ originated, zero security incidents to date, 20 audits, 4 formal verifications
- 60%+ of Solana lending TVL
- Three years in production
- $1.5M Immunefi bug bounty
- In-house oracle (Scope) — triple-audited; TWAP/EWMA manipulation-resistant; Pyth + Chainlink as reference feeds
- All code open source; full risk dashboard public; multisig inspection surface public

**Institutional partner-proof strip candidates:**

These are all publicly nameable because the partnerships are public. Use in a quiet proof strip (logos + names, not selling the partnerships as endorsements):

- Anchorage Digital
- Chainlink
- FalconX
- Pantera Capital
- Solana Company (Nasdaq: HSDT)
- Figure Technology Solutions (Nasdaq: FIGR)
- Paxos
- Squads
- Securitize
- Gauntlet

Do not imply endorsement. Frame as "institutions working with Kamino" or similar.

**Voice anchors — institutional register:**

From Mark Hull (BD), actual quote deployed in the IY PR:

> *"There are billions of dollars in institutional demand to borrow against assets held in qualified custody. Until now, onchain users had no way to access that opportunity with adequate transparency. Institutional Yield connects these two worlds — regulated institutional lending, accessible through a single vault deposit on Solana."*

From Marius's "ETF mandate" frame:

> *"When you buy an ETF, you know exactly what's in it. The formula is defined. It doesn't change. That's what we built."*

Cadence to imitate (from IY docs): short declarative sentences, finance vocabulary ("tripartite," "rehypothecation," "overcollateralized"), no hype adjectives, no salesy softeners.

## 5. Voice / tone / register

Institutional throughout. Goldman-product-sheet adjacent. The hardest register in the entire site rebuild.

**Phrases to use:**

- *Capital, credit, liquidity, counterparty, mandate, tripartite, overcollateralized, qualified custody, attestation, duration, rate-term grid, regulated, licensed and supervised*
- *Access onchain liquidity, preserve qualified custody, deploy capital, underwrite, rebalance, unwind*
- *"Built on Solana"* is acceptable, but not the lead.
- *"Onchain"* as a qualifier ("onchain credit," "onchain liquidity," "onchain borrow facilities") — never as a standalone positioning frame.

**Phrases to avoid:**

- Any vogue DeFi language: "revolutionary," "next-generation," "game-changing," "DeFi-native."
- "Best-in-class" — empty superlative.
- "Zero bad debt" as a forward claim. Acceptable only as point-in-time: "$19B+ originated, zero security incidents to date."
- "DeFi protocol" as Kamino's self-description. Kamino is credit infrastructure that happens to operate onchain.
- "Trustless" — Institutional Yield explicitly uses regulated counterparties. Do not imply trustlessness.
- "Users" — on this page, "institutions," "counterparties," "depositors," "borrowers," "allocators" are more precise.
- Any construction that names specific IY counterparties: never "Andersen," "Haruko," "Anchorage-as-IY-custodian," "BitGo," "Zodia," or the lending operation's real name.

**Tone specificity:**

The page can be dense — institutional readers will read a product sheet. Full prose paragraphs, not fragment-stacks. Real sentences with grammar. One or two fragment-stack moments ("Regulated. Overcollateralized. Transparent.") are fine for rhythm but do not make them the rule. The reader should leave with the feeling they've been taken seriously.

## 6. Required and suggested sections

### Required sections

- **Audience-specific hero** — one line positioning Kamino as institutional credit infrastructure. Proof strip ($19B+ originated, zero security incidents, whatever cumulative stats are current).
- **Institutional Yield section** — the flagship. Heading, structural explanation, bridge to `/institutional-yield` marketing page. This section must appear first among product sections because IY is the rebrand's spearhead.
- **Off-Chain Collateral section** — the borrow product. Tri-party custody, Chainlink PoR, 65% max LTV. Solana Company partnership as the anchor proof point (upcoming, not executed — language must respect this). CTA to `/off-chain-collateral` and/or Contact sales.
- **Fixed Rates & Fixed Terms section** — predictable borrowing costs for institutional budgeting. FalconX pilot. CTA to `/fixed-rates` and/or Contact sales.
- **Permissioned Markets feature section** — KYC-gated markets as a cross-cutting capability. Explains that IY, Off-Chain Collateral, and Fixed Rates can all be deployed as permissioned instances for institutional counterparties.
- **Institutional-grade infrastructure trust block** — a version of the homepage Trust section, tilted institutional. Emphasize in-house oracle (Scope), audits + formal verifications, public multisig inspection, risk dashboard. Link to `/security` and `/oracles` for depth.
- **Institutional partner proof strip** — logos + names (see §4 for roster). Frame as "institutions working with Kamino." Not a selling of partnerships; a presence of credibility.
- **Contact sales CTA** — prominent, dedicated block. Either a direct link to `institutional@kamino-foundation.com` or a form that captures name / firm / use case. The master spec flags "white-glove onboarding" — the CTA should feel like beginning a conversation, not submitting a ticket.

### Suggested sections

- **The "same infrastructure, three surfaces" framing** — a small section explaining that all three institutional products (IY, Off-Chain Collateral, Fixed Rates) sit on the same lending engine that handles $19B+ in retail and institutional flow. This is a "vertical integration is the moat" beat and it pairs well with the permissioned-markets feature.
- **Scale / business stat block** — revenue $19.7M (2025), $19B+ originated cumulative, 60%+ of Solana lending. Small and restrained. Institutional readers notice these things.
- **Foundation / governance note** — a quiet line acknowledging the Kamino Foundation / no-equity structure and that value accrues to the Foundation and reinvests. Institutional counterparties care about corporate structure; this page can signal it without deep-diving. Link to `/about` if that page exists.
- **Quote pull** — a Mark Hull or Marius institutional-voice quote used as a pull-quote. Humanizes the page without warming the register.

### Section order

Recommended top-to-bottom:

1. Hero + institutional proof strip
2. Institutional Yield section
3. Off-Chain Collateral section
4. Fixed Rates section
5. Permissioned Markets feature
6. Institutional-grade infrastructure trust block
7. Institutional partner proof strip
8. Foundation / governance note (optional)
9. Contact sales CTA

Rationale: the three product sections in that order matches Kamino's institutional product roadmap priority. IY is shipped and is the rebrand spearhead. Off-Chain Collateral has a marquee upcoming borrower. Fixed Rates has a marquee pilot borrower (FalconX) and is the broader primitive.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest on this page:

- **Lead with institutional vocabulary.** This page is the single strongest test of principle 2. Every lead sentence should use capital, credit, liquidity, or infrastructure.
- **"DeFi" sparingly.** The frame here is "onchain credit infrastructure," not "institutional DeFi." You can say "the largest credit platform on Solana" or "onchain credit infrastructure" interchangeably; "DeFi lending protocol" is wrong.
- **No framing by negation.** Do not define Kamino against "other DeFi lenders," Maple, Aave Horizon, or Morpho. Describe what Kamino IS: zero security incidents at $19B+ originated, in-house oracle, qualified-custody-preserving borrow, regulated-grade yield, unified retail+institutional infrastructure. The competitive framing happens implicitly.
- **No named IY counterparties.** Lending operation = "regulated lending operation"; data provider = "industry-standard reporting infrastructure" or "the same reporting pipeline reviewed by the regulator"; accounting firm = "independent accounting firm"; custodians = "qualified custodians (e.g., banks)." Only Liechtenstein FMA is nameable.
- **Partnership-focused partner copy.** Anchorage, Chainlink, FalconX, Pantera, Solana Company — describe *how Kamino works with them*, not who they are. Identity is minimal and only where needed.
- **No forward-risk claims.** Do not say "no defaults" as a forward guarantee. "Zero security incidents to date" works; "zero defaults" does not unless carefully framed.
- **Opinionated voice reads as credibility.** Don't hedge into committee speak. An institutional reader responds to confident framing backed by proof.
- **Real sentences, not fragment-stacks.** Keep prose full. The three-beat "Regulated. Overcollateralized. Transparent." pattern is already used in the homepage IY Spotlight; do not recycle it as the default for every product section here.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- Homepage Audience Router → `/institutions` (with entry animation)
- Solutions mega-menu Column 2 (Institutions card) → `/institutions`
- Footer → `/institutions`
- Trust-block section-level CTA on homepage → `/security` (adjacent surface; some flow here)
- External: institutional referrals, sales outreach responses, conference follow-ups
- Cross-links from `/issuers` and `/fintechs` where institutional products are adjacent

**Outbound:**

- IY section → `/institutional-yield` marketing page, and/or `Go to Vault` → `/earn` (institutional tab) in the webapp
- Off-Chain Collateral section → `/off-chain-collateral` marketing page, and/or `Contact sales` → `institutional@kamino-foundation.com` or form
- Fixed Rates section → `/fixed-rates` marketing page, and/or `Contact sales`
- Permissioned Markets feature → `Contact sales` (no standalone marketing page per master spec §5.1)
- Trust block → `/security`
- Oracle / Scope mention → `/oracles`
- Partner proof strip → no outbound links (presence-only; optional deep-links to specific partners' pages if desired)
- Primary close CTA → `Contact sales` (`institutional@kamino-foundation.com`) or a dedicated form

**CTAs specifically:**

Every product section must carry two CTA options: (1) Read more / marketing page, and (2) Contact sales. The institutional flow splits at the product-curiosity level — some readers want the spec; some want the conversation. Give them both.

## 9. Visual / design direction

Institutional register throughout. This page should visually signal seriousness.

- **Typographic restraint** — heavier type for headings, generous whitespace, no cramped section layouts.
- **Color temperature** — cooler, more institutional palette. Restraint rather than warmth.
- **Imagery** — product schematics, structural diagrams (Off-Chain Collateral tri-party flow, Fixed Rates rate-duration grid), real-time reporting screenshots (generic, not naming Haruko). No stock imagery of people in suits.
- **Charts / data** — live charts where relevant (kiUSDC share price; portfolio-weighted LTV for Off-Chain Collateral; rate-duration grid for Fixed Rates).
- **Partner proof strip** — monochrome logos; restraint over decoration.

**Visual dependencies:**

- kiUSDC share-price chart (reused from homepage)
- Off-Chain Collateral tri-party flow diagram (needs to be produced; see `Kamino Off-Chain Collateral Deck.pdf` for existing visual)
- Fixed Rates rate-duration grid (needs to be produced)
- Institutional partner logos — Anchorage, Chainlink, FalconX, Pantera, Solana Company, Figure, Paxos, Squads, Securitize, Gauntlet (all monochrome-capable)
- Optional: Scope / oracle schematic for the trust block

**Design-system components likely in play:**

- Primary + Secondary button pattern (for dual CTAs per product section)
- Card component (for Permissioned Markets feature)
- Interactive chart (for live IY data)
- Structural diagram component (for Off-Chain Collateral + Fixed Rates)
- Logo strip (for partners)
- Pull-quote component (if quote section included)

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.2 (audience definition), §6.3 (homepage IY Spotlight — extend that framing), §8.2 (/institutions preliminary structure), §9.1–9.3 (IY, Off-Chain Collateral, Fixed Rates preliminary content)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.8 (Institutional Yield), §4.10 (next-generation institutional products), §7 (competitive landscape), §11.2 (Institutions in detail), §12 (brand voice)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Institutional Yield Final Announcement** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md` — authoritative IY voice, structural claims, withdrawal mechanics.
4. **IY PR brief v2** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/pr-brief-v2.md` — institutional-register positioning language; competitive framing.
5. **Kamino Private Credit deck** — `/Users/dawid/Github/Product/context/decks/Kamino Private Credit.pdf` — IY product structure.
6. **Kamino Off-Chain Collateral deck** — `/Users/dawid/Github/Product/context/decks/Kamino Off-Chain Collateral Deck.pdf` — full OCC mechanics, Solana Company partnership, Anchorage integration.
7. **Fixed Rates order book spec** — `/Users/dawid/Github/Product/specs/fixed-rates-order-book.md` — technical mechanics, rate-duration grid, Conditional Liquidity.
8. **Borrow Orders PRD** — `/Users/dawid/Github/Product/specs/borrow-orders-prd.md` — complementary to Fixed Rates; included on the Fixed Rates marketing page.
9. **Competitive positioning memo** — `/Users/dawid/Github/Marketing/documents/competitive-positioning-private-credit.md` — specific framing against Maple, Aave, Morpho.
10. **Partner synthesis** (institutional partner sections — Anchorage, Chainlink, FalconX, Pantera, Summer Capital, Solana Company) — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
11. **There Is Only KMNO v4** — `/Users/dawid/Github/Marketing/documents/There Is Only KMNO v4.md` — Foundation structure, US market posture.

## 11. Open questions and decisions deferred to the page agent

- **Exact hero copy** — draft 2–3 candidates. The master spec locked the homepage hero but not audience-page heroes. This page's hero must be institutional, not retail-warm.
- **Solana Company / HSDT borrow status** — as of April 2026 the borrow is upcoming, not executed. Confirm timing before the page ships. If it has executed by launch date, language can shift from "will execute" to "executed."
- **Fixed Rates live status** — is the product live in production with FalconX, or still pilot? Master spec treats it as an upcoming product; confirm with Dawid.
- **Contact form vs. email link** — which is preferred for institutional outreach? The IY product likely wants some pre-qualification; raw email may work but a form gives BD better routing. Decide with Dawid / Cheryl.
- **Whether to include Foundation / governance note** — institutional counterparties care about corporate structure but a heavy note dilutes the product focus. Default to a small paragraph.
- **Institutional partner proof strip — inclusion list.** Ten candidate names listed above; narrow to the ones with the cleanest partnership story. Confirm with BD which are OK to surface publicly.
- **Permissioned Markets framing** — how much detail to give about KYC gating, and whether this section previews `/institutional-yield` / `/off-chain-collateral` with institutional variants. Could easily sprawl; keep it tight.
- **Tagline for Institutions on the homepage Audience Router** — generate a candidate. Something like "Regulated-grade onchain credit, built for institutional capital" — adjust per voice.
- **Any explicit mention of Maple as a competitive frame** — the internal rule is "never attack Maple by name." Confirm — the page should not name Maple directly. All competitive framing is implicit.
- **Revenue accrual / Foundation note** — the "Kamino has never raised equity; all revenue to Foundation" story is strong with institutional readers. Confirm how prominently to surface.
