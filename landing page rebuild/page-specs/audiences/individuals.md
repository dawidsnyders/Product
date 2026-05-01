# Handoff Spec: Individuals (`/individuals`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page is the warmer voice of the Kamino rebrand. Its single job: take a first-time or un-cookied retail visitor — someone who clicked the Individuals box on the homepage router — and give them a retail-credible narrative about *what Kamino does for them personally*, then route them into the webapp to earn, borrow, or multiply. It sits between the homepage's institutional hero and the in-app product surfaces. Daily retail traffic bypasses this page entirely (returning users cookie straight to `/home`). So the audience is specifically: reactivation, word-of-mouth acquisition, users arriving from search / social / referral, and the subset of sophisticated onchain users who actually read a landing page before connecting a wallet.

The single most important takeaway: **Kamino is a consumer product on top of the most battle-tested credit infrastructure on Solana.** A retail user leaves recognizing that every yield they see is backed by real credit activity, that the curators running their deposits are named institutional risk firms, and that the "Institutional Yield" they've heard about elsewhere is actually open to them from a self-custodial wallet.

Funnel position: homepage router → `/individuals` → (Earn / Multiply / Borrow / Swap / Institutional Yield) → webapp product surfaces. No sales handoff. Self-serve all the way through. The only CTA that detours out of the webapp is Institutional Yield, which must route through `/institutional-yield` marketing first because depositors need the structural story before they deposit.

## 2. Primary audience

Map to master-spec §3.1 and research §11.1. The real targets on this page are:

- **The sophisticated Solana-native user** — holds SOL, USDC, USDT, PYUSD, JitoSOL, cbBTC, JLP, KMNO. Compares yields. Cares about audits and TVL. Already knows about Multiply loops, LSTs, and airdrop seasons. They need *confirmation*, not introduction — Kamino is the protocol they already trust, but this page needs to re-earn the trust after a brand repositioning that leads with "institutional."
- **The DeFi-adjacent stablecoin holder** — arrived onchain via stables, looking for USD yield that beats a savings account. Not a degen. Cares about risk framing.
- **The Solana explorer** — heard about PRIME, JLP, xStocks, or KMNO airdrops on CT, Farcaster, or a podcast. Arrives curious; needs to be invited in without hand-holding.
- **The KMNO holder / airdrop farmer** — engaged with points seasons. Knows Kamino as a "where I get my airdrop from" brand. Needs to see KMNO staking surfaced cleanly.

What this page is NOT for: pseudonymous casual speculators, Aave-loyal EVM users who've never touched Solana, and institutional allocators (they have `/institutions`).

## 3. Strategic context

The rebrand's hardest tension lives on this page. Kamino's current user base, daily TVL movement, and cultural center of gravity are retail. The strategic momentum is institutional. Lead too hard on institutional (as the homepage deliberately does) and retail feels abandoned — expect CT snark about "Kamino going corporate." The Audience Router is the architectural answer to this tension; `/individuals` is the *execution* of that answer. If this page feels thinner, less loved, or visually less polished than `/institutions`, the whole rebrand reads as a tell.

What this page must accomplish for 2026:

1. **Signal that Kamino's retail product is not being deprioritized.** Warmer voice, real retail products front-and-center (Multiply and Earn especially), the same proof-strip scale numbers the institutions see.
2. **Bridge retail users to the Institutional Yield thesis without forcing KYC or gating.** IY is accessible to any self-custodial wallet. That is *globally unusual* and the single strongest retail story Kamino has — a DeFi user earning 6–8% from a regulated lending operation without an institutional account. The page should earn this claim cleanly.
3. **Reinforce the "paranoid expert" trust culture** in a register retail users respond to. Not a product-sheet tone; a "this is the safest way to get yield onchain" tone, backed by the numbers.

The opportunity the page uniquely addresses: every other DeFi lender offering retail yield today does so from a purely crypto-native credit base (lending USDC to leveraged crypto traders). Kamino is the only one where retail users can access *regulated off-chain credit* yield alongside crypto-native yield, all from the same wallet. That's the substantive differentiation.

## 4. Starting context — facts, figures, quotes, proof points

**Product mix for this page (master spec §8.1, extended):**

- **Earn** — curated vaults by named institutional curators: **Gauntlet** (~$1.4B managed across DeFi; runs SOL Balanced and USDC Prime on Kamino), **Steakhouse Financial** ($1.26B managed globally; runs USDC High Yield, USDG High Yield), **Allez Labs** (founded by senior Aave risk alumni; runs Allez USDC and Allez SOL, publishes monthly Risk Insights on gov.kamino.finance), **Sentora** (PYUSD-focused, ~$500M at peak TVL), **MEV Capital**, and **Re7 Labs**. The point: retail users outsource the "which rate is best this hour" optimization to risk professionals with mandate transparency. Point them at `/earn` in the webapp.

- **Multiply** — one-click leveraged yield across five asset categories (LSTs, RWAs, Stablecoins, DeFi Yield, Equities). ~62 strategies today; ~$544M deposits, $428M borrows. 86% of all PRIME on Kamino flows through Multiply. PRIME Multiply yields 11–21% APY depending on leverage (this is the *only place on earth* a user can get a leveraged HELOC-warehouse yield strategy with one click). See `/Users/dawid/Github/Product/specs/multiply-landing-page.md` for the current Multiply positioning and mechanism-first framing.

- **Borrow** — variable-rate borrowing on the Main Market, JLP Market, Altcoin Market, xStocks Market, Jito Market, PRIME Market. This is the retail borrow surface. Institutional borrow products (Off-Chain Collateral) are NOT surfaced here.

- **Swap** — zero-fee aggregated swap routing. Daily utility that keeps wallets in the Kamino interface. "Best prices on Solana, zero fees" is the current utility-register positioning and is fine to echo.

- **Institutional Yield (permissionless access)** — this is the most strategically important section on this page. Retail users can deposit USDC into kiUSDC from a self-custodial wallet, no KYC on the depositor. 6–8% target APY. $25M cap at launch. The counterparties are all regulated; the LP experience is onchain DeFi. Route to `/institutional-yield` marketing page, not directly into the webapp — the structural story matters.

- **Assets** — the RWA discovery surface in the webapp (`/assets`). Retail users can browse tokenized assets (PRIME, TSLAx, SPYx, AAPLX, GOOGLX, MSTRX, ACRED, USCC, Syrup, ONyc) to use as collateral or Multiply on.

- **KMNO staking + Seasons** — staking KMNO earns a points multiplier that increases airdrop allocations in the active Season. Season 3 vested; Seasons 4 and 5 active. Do NOT reference which exchanges KMNO is listed on.

**Proof points retail-credible at a glance:**

- $19B+ loans originated (cumulative)
- $104M+ interest generated to users (cumulative; refresh live)
- Zero security incidents to date
- 20 independent audits; 4 formal verifications
- $1.5M active Immunefi bug bounty — among the largest in Solana DeFi
- Three years in production
- 60%+ of Solana lending TVL

**Curators, by retail-recognizable identity:**

Use curator names, not anonymous descriptors. Retail DeFi users know these names.

- **Gauntlet** — the quantitative risk manager that also runs vaults on Morpho and Aave. Official Kamino curator since November 2025.
- **Steakhouse Financial** — the largest curator on Morpho by TVL; institutional DeFi advisory.
- **Allez Labs** — founded by ex-Aave risk team; publishes monthly market Risk Insights on Kamino.
- **Sentora** — formed by 2024 merger of IntoTheBlock and Trident Digital; institutional risk + quantitative strategies.

See `research/partners-04-synthesis.md` for exact phrasing on each.

**Retail-voice quotes to reach toward (from Marius, for tone):**

- *"Keep it clean. Keep it safe."*
- *"Every decision we make asks one question: does this make the product safer or riskier?"*
- *"When you buy an ETF, you know exactly what's in it."*

These are not quotes to copy-paste — they are the tone anchor. The page should feel like it was written by someone paranoid about risk who wants retail users to feel taken care of.

**Competitive implicit framing:**

- Positions against Aave USDC at ~2.6% supply APY — explicit claim "higher USD yield" is fair, backed by the rate comparison (Aave is public).
- Positions against Celsius/BlockFi-style CeFi yield that blew up in 2022 — the frame is "credible onchain yield, custodial of your own keys, backed by real institutional credit." Do NOT name Celsius or BlockFi (never attack a failed competitor by name — implicit framing only, per Marius's no-named-enemies rule).
- Positions against the "DeFi yield farm" stereotype — the answer is regulated institutional credit underneath real retail products. Do not say "not another DeFi yield farm" (that's negation framing and it's banned).

## 5. Voice / tone / register

Warmer than the homepage. Retail-credible. **Consumer-product narrative on top of the same institutional infrastructure.** Think: Coinbase consumer copy, not Coinbase Prime copy. The user is sophisticated-but-not-institutional.

**Phrases to use:**

- *"Earn," "deposit," "position," "yield," "strategy," "vault"* — the retail vocabulary of the space.
- *"One click," "self-custody," "from any Solana wallet"* — the concrete retail affordances.
- *"Curated by," "run by," "managed by"* — when naming curators, lead with the relationship.
- *"Backed by," "sourced from," "issued through"* — when referencing the credit underneath.
- *"Built on Solana"* is fine here — retail users on this page self-identify with Solana.

**Phrases to avoid:**

- *"Institutional-grade"* — you lost the retail reader at "grade."
- *"Revolutionary," "disruptive," "DeFi 2.0," "next-generation"* — vogue words.
- *"Battle-tested" appears in the homepage language but avoid overusing it here; once, max, paired with a concrete number.*
- *"Earn up to 21%"* as a primary claim — misleading; that's the top end of leveraged Multiply and requires leverage to achieve. The honest way to surface it: "leveraged PRIME strategies yield 11–21% APY depending on leverage."
- *"APY" without context* — always pair with the underlying mechanism (vault, Multiply strategy, IY).

**Tone specificity:**

This page can allow itself slightly more personality than `/institutions`. The voice is still measured and precise, but it can acknowledge the user's sophistication and invite them into a product they're already considering. Think Mercury or Linear's retail-side copy — grown-up, substantive, but not stiff.

## 6. Required and suggested sections

### Required sections

- **Audience-specific hero** — one line that echoes the site hero while addressing a retail user directly. Not the same copy; same register shift. Proof strip (loans originated, interest generated) should appear here or immediately below.
- **Earn / Multiply / Borrow / Swap retail product strip** — four cards or a grouped section surfacing the core retail surfaces. Each card: product name, one-line value prop, concrete example (e.g., "Multiply SOL with JitoSOL up to 10×"), CTA into the webapp.
- **Curated Earn vaults section** — the curator-by-name block. Three featured vaults (suggestion: Gauntlet USDC Prime, Steakhouse USDC High Yield, Sentora PYUSD or Allez USDC — final pick depends on current TVL/APY/availability). Each: curator name, vault name, 90-day average APY, risk profile tag, CTA to `/earn`.
- **Institutional Yield (permissionless access) feature** — distinct from homepage IY Spotlight, this section speaks directly to "you can deposit into this from a DeFi wallet right now, no KYC on the depositor." Route via `/institutional-yield` marketing page before the in-app deposit. Include the kiUSDC mark and a compact version of the structural claim (regulated / overcollateralized / qualified custody / transparent).
- **Trust cue** — abbreviated version of the homepage Trust section. Three scale stats + audit firm logo strip, or a single compact block. Must surface zero security incidents, $19B+ originated, 20 audits. Link out to `/security` for the full treatment.
- **Primary CTA close** — *"Launch App"* as the single dominant close action. Routes to `/home` for existing users, wallet-connect flow for first-time visitors.

### Suggested sections

- **KMNO / Seasons moment** — a block surfacing staking + points programs. Small, not a featured section; KMNO should feel like an earned reward for engagement, not the reason to use the product. Links to `/stake` and the active Season page.
- **RWA / tokenized asset exposure** — a secondary section for the retail RWA-curious user. "Deposit, borrow against, or multiply tokenized assets from Figure, Securitize, Backed, Superstate." Links to `/assets` in the webapp. Only include if it won't push the page past a reasonable depth — probably worth it because PRIME is the single biggest retail story of the year.
- **A small "built for" beat** — a line acknowledging the user's sophistication ("For users who compare yields, monitor positions, and want to know how the sausage is made"). Optional; depends on copy balance.

### Section order

Recommended top-to-bottom:

1. Hero + proof strip
2. Retail product strip (Earn / Multiply / Borrow / Swap)
3. Curated Earn vaults (curator-by-name)
4. Institutional Yield (permissionless access) — the "globally unusual" moment
5. RWA / tokenized asset exposure (optional)
6. Trust cue (compact)
7. KMNO / Seasons (optional, small)
8. Primary CTA close

Rationale for placing IY in position 4, not higher: retail users need to first see the products they already know (Earn, Multiply) before being invited into the new regulated-yield story. IY is the upgrade, not the lead.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest on this page:

- **No negation framing** — don't define this page against "other DeFi yield farms" or "Celsius." Describe what Kamino IS for retail: the most battle-tested Solana lending protocol, with institutional curators running your deposits, and regulated-credit yield accessible from your wallet.
- **"Onchain" is a qualifier** — but on this page it's allowed more presence than on the homepage. Retail users identify with onchain. Still, lead with product verbs ("earn," "multiply," "borrow") and let "onchain" qualify them.
- **"DeFi" sparingly** — acceptable here in context ("the largest RWA market in DeFi," "the most battle-tested lending protocol in Solana DeFi") but avoid "DeFi protocol" as Kamino's self-description.
- **No named counterparties for Institutional Yield** — even on the retail page. "Regulated lending operation," "qualified custodians," "independent accounting firm," "industry-standard reporting infrastructure." Only Liechtenstein FMA is nameable.
- **No forward-risk claims** — "zero security incidents to date" is fine; "zero security incidents ever" or "will never fail" is not.
- **No "V2"** — do not reference the architectural version. The sophistication is assumed.
- **No KMNO exchange-listing copy** — even though retail users would care. Listing is not a selling point.
- **Opinionated voice reads as credibility** — don't water the copy down into neutral committee speak. A confident retail line ("Deposit USDC, earn from regulated institutional credit, keep your keys") is stronger than a hedged one.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- Homepage Audience Router → `/individuals` (with entry animation)
- Solutions mega-menu Column 2 (Individuals card) → `/individuals`
- Footer → `/individuals`
- External referrals (social, search) → `/individuals`

**Outbound:**

- Earn product card → `/earn` (webapp, Lend tab)
- Curated vaults section CTAs → `/earn` with specific vault deep-link
- Multiply product card → `/multiply` (webapp)
- Borrow product card → `/borrow` (webapp)
- Swap product card → `/swap` (webapp)
- Institutional Yield section CTA → `/institutional-yield` (marketing page, NOT directly into webapp)
- RWA section CTA → `/assets` (webapp, RWA discovery)
- Trust cue outbound link → `/security` (marketing resource page)
- KMNO / Seasons → `/stake` (webapp), `/seasons` or equivalent active-season page
- Primary close CTA → `/home` (webapp for returning users), wallet-connect for first-timers

**CTAs specifically:**

- Retail product surfaces link directly into the webapp (no intermediate marketing page). This is per master spec §4 routing rules.
- IY is the one exception — detour through `/institutional-yield` before the deposit.
- All CTAs should be aware of returning-user state (cookie detection); existing users skip directly to the in-app surface.

## 9. Visual / design direction

This page's visual register is *warmer consumer product*, not *institutional product sheet*. Still uses the same Kamino design system (Claude Design) as the rest of the site, but leans into:

- **Color temperature** — more product-native tones; more warmth than the homepage's institutional restraint.
- **Imagery** — product UI screenshots (actual Earn / Multiply / Borrow cards from the webapp) are appropriate here and encouraged. The homepage deliberately avoids product imagery; this page should use it.
- **Curator logos** — named, presence-based. Design treatment should make the curator names legible and authoritative.
- **kiUSDC token mark** — reuse the same branded mark established for the homepage IY Spotlight. Don't redesign.
- **Card and row rhythm** — the homepage's alternating full-width trust rows are too heavyweight here. Use tighter retail-card layouts.

**Visual dependencies:**

- Screenshots of Earn, Multiply, Borrow, Swap surfaces from the webapp (kept current)
- Curator logos (monochrome-capable per master spec partner requirements)
- kiUSDC mark (already specified for homepage)
- Tokenized asset logos (if RWA section included): PRIME, TSLAx, SPYx, AAPLX, etc.

**Design-system components likely in play:**

- Primary + Secondary button pattern
- Card component (for retail product strip, curated vaults)
- Proof strip component (inheriting from hero pattern)
- Compact trust/credibility block

**What to avoid:**

- The network visualization from the homepage Partners section — not appropriate here.
- Heavyweight alternating trust rows — too dense for this page's retail register.
- Ambient background imagery that competes with product cards — keep the product UI the hero.

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.1 (audience definition), §8.1 (/individuals preliminary structure)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4 (product stack deep-dive), §11.1 (Individuals in detail), §12 (brand voice)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Partner synthesis** (curator and RWA partner sections) — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
4. **Multiply landing page spec** — `/Users/dawid/Github/Product/specs/multiply-landing-page.md` — source for Multiply positioning, mechanism-first framing, and retail tone examples. Very useful for voice.
5. **PRIME product page spec** — `/Users/dawid/Github/Product/specs/prime-product-page.md` — source for PRIME retail narrative; relevant if RWA section is included.
6. **Institutional Yield Final Announcement** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md` — the IY user-facing language, register, structural claims.
7. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — overall scale stats, retail positioning background.
8. **There Is Only KMNO v4** — `/Users/dawid/Github/Marketing/documents/There Is Only KMNO v4.md` — for the KMNO / Seasons framing and Foundation story if that section is included.

## 11. Open questions and decisions deferred to the page agent

- **Which three curated vaults to feature.** Candidates: Gauntlet USDC Prime, Steakhouse USDC High Yield, Sentora PYUSD, Allez USDC. Depends on current TVL + APY + mandate-stability. The master spec homepage currently surfaces "USDC Prime, USDC High-Yield, Sentora PYUSD" as the default set — this is a reasonable default unless something has changed.
- **Whether to include a standalone RWA/Assets section** or fold tokenized-asset exposure into Multiply. The strongest retail RWA story is PRIME Multiply; a full RWA section might duplicate that.
- **How visible to make KMNO / Seasons.** The master spec (§13.8) flags KMNO as a tension — too prominent makes Kamino look like a token project, absent makes it look evasive. Recommend a small but discoverable placement; raise back to Dawid if in doubt.
- **Exact hero copy** — master spec locked the homepage hero but not the audience-page heroes. Draft 2–3 candidates; confirm with user.
- **Tagline for this audience on the homepage Audience Router** — still unspecced; this page's framing will inform what that tagline says, so generate a candidate as part of this work.
- **PRIME APY band (11–21%)** — verify the current range. The master spec and research files both cite this range, but Multiply yields move with leverage settings and underlying PRIME yield.
- **Institutional Yield "no KYC on the depositor" phrasing** — legally sensitive. Confirm with Dawid / Helen whether this can be stated that directly on the page, or whether softer phrasing is required (e.g., "deposit from any Solana wallet"). The final announcement copy handles this carefully.
- **The Aave ~2.6% comparison** — is it OK to reference it directly (as the IY announcement drafts sometimes do) or only implicitly? Default to implicit on this page; confirm if explicit works.
- **RWA DEX and Fixed Rates** — probably not retail-relevant enough to surface here. Confirm — if there's a retail angle on either, include it.
