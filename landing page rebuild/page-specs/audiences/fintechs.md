# Handoff Spec: Fintechs (`/fintechs`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page speaks to a specific conversation: a product, engineering, or BD lead at a consumer-facing crypto or fintech app — a wallet, neobank, exchange, payment app, embedded-wallet-based consumer product — considering where to source onchain yield and credit for their users. The page's job: establish Kamino as the backend infrastructure that ships-in-weeks-not-months, walks through the developer and commercial model (API + SDK, embedded wallets, revenue share, KYC/KYB-compliant yield stack), and routes into a technical integration conversation.

The single most important takeaway: **Kamino is the only onchain yield + credit infrastructure with a productized API (BuildKit), a productized yield embed (Institutional Yield API with 20/40/40 architecture and built-in revenue share), and a compliance architecture where every dollar of yield traces to a KYC-verified regulated borrower.** That last bit is the real wedge — no fintech regulator will accept pseudonymous DeFi borrowers as backing for a consumer product. Kamino solved that structurally.

Funnel position: homepage router → `/fintechs` → (BuildKit deep-read, IY API deep-read) → `Talk to our team` / integration conversation. Sales-led, developer-adjacent. Technical enough that a lead developer reads it as a preview; commercial enough that a BD lead reads it as a business case.

## 2. Primary audience

Map to master-spec §3.4 and research §11.4. The real targets are:

- **Consumer crypto apps** — Phantom (already deep partner, live integration for PSOL lending + CASH yield), Fuse (Squads Labs' consumer wallet, Kamino-powered USDC yield), emerging mobile-first wallets.
- **Global consumer finance apps** with stablecoin deposit products wanting to offer yield. This is the largest opportunity surface — every neobank with stablecoin balances is looking at Kamino or Morpho for backend yield.
- **Exchanges** wanting to add an "Earn" product without building lending — Bybit (already live with Bitcoin Yield on Solana powered by Kamino), OKX (Web3 Wallet surfaces Kamino Lend / Liquidity / Multiply), others.
- **Payment apps** wanting to pay interest on stablecoin balances — PayPal-class, Stripe-adjacent.
- **Embedded-wallet stacks** — Privy (already an infra partner; Privy customers route idle user balances into Kamino vaults). Stripe-acquired Privy is the canonical example.
- **Crypto-native fintechs** — Altitude (first announced BuildKit integration partner), and similar specialty products.

The reader profile matters: a consumer-app product lead is both commercially and technically literate. They want to see the API surface, the commercial model, and evidence of existing integrations working. They read docs.

What this page is NOT for: retail consumers themselves (they see the fintech's app, not Kamino), issuers (they have `/issuers`), institutional LPs (they have `/institutions`).

## 3. Strategic context

This page is a commercial wedge, not just a product page. It exists because:

1. **Consumer apps are racing to offer yield.** Stablecoin balances are dead capital from a product perspective; every app that holds user stablecoins is looking at integrating a yield product. The protocol that captures that integration layer in 2026–2027 captures enormous distribution. BuildKit is Kamino's play for that.

2. **The compliance story is the moat.** From the general deck: *"No fintech regulator will accept [pseudonymous borrowers] as backing for a consumer product."* A fintech cannot hand users yield that comes from an unregulated DeFi pool if its own regulator is scrutinizing the capital flow. Kamino's yield — especially IY and IY API — traces to KYC/KYB-verified institutional borrowers, regulated lending operations, and qualified custodians. That's compliance-ready. No DeFi competitor has this end-to-end.

3. **Privy + BuildKit is the "ship in weeks" stack.** Privy provides embedded wallets (75M+ end-user accounts, now part of Stripe). BuildKit provides the yield/credit backend. A consumer app can bolt on onchain yield in weeks, not months. That timeline claim is the commercial pitch.

4. **Institutional Yield API is the productized embed that makes the math work.** Blended ~6.33% APY from a 20/40/40 architecture (20% instant-liquidity buffer + 40% PRIME/USDC + 40% BTC-backed credit). End-user earns up to a set cap (e.g., 2.5%); everything above accrues to the fintech as revenue share. *This is the commercial model that makes onchain yield economically attractive for a consumer app.* Without the revenue share, the fintech has no margin. With it, the fintech captures the yield spread.

The opportunity this page uniquely addresses: consumer fintechs today are choosing between building DeFi infrastructure in-house (slow, expensive, operationally risky) and partnering with Coinbase Earn / BlockFi-era CeFi (brand risk, regulatory risk). Kamino is the third path — productized onchain yield infrastructure with compliance architecture, deployed as white-label isolated vaults that are invisible on Kamino's public interface.

Tension this page must manage: the institutional rigor of IY and IY API has to be made legible to developer / product readers without becoming dry. BuildKit has to feel like a real platform product, not a DeFi protocol dressed up as an API.

## 4. Starting context — facts, figures, quotes, proof points

**The two flagship products featured on this page:**

### BuildKit

- API + SDK for embedding Kamino products into any app. Live at `kamino.com/build`.
- Capabilities: deposit into Earn vaults, withdraw, check rates, monitor positions, trigger Multiply, integrate Borrow.
- Embedded-wallet support via **Privy** (native integration). Privy is now part of Stripe (acquired June 2025); its stack powers 75M+ end-user accounts across 1,000+ developer teams.
- White-label isolated vaults per partner — invisible on Kamino's public interface. Users see the fintech's app; yield comes from Kamino backend.
- KYC/KYB-capable for regulated partners. Partner-level KYC propagates through to the yield source.
- First announced integration partner: **Altitude**.
- Current deep integrations (mostly-published): **Phantom** (CASH product powered by Kamino yield; PSOL lending / borrowing inside Phantom), **Fuse** (Squads Labs' consumer wallet; USDC yield via Kamino), **Bybit** (Bitcoin Yield on Solana wrapped around Kamino lending engine), **OKX** (Kamino Lend / Liquidity / Multiply surfaced inside OKX Web3 Wallet; PYUSD and xBTC Earn strategies in OKX Earn marketplace).
- See master spec §9.6 and `research/partners-04-synthesis.md` for exact per-integration phrasing.

### Institutional Yield API

- Productized yield embed. The IY API is the most important commercial product this page surfaces.
- 20/40/40 architecture:
  - **20% liquidity buffer** (~3.64% APR, EFFR-tracking, instant withdrawal) — unallocated
  - **40% PRIME / USDC allocation** (~8% APY; 0–2 hour time-to-liquidity with SLA; on-chain market: PRIME / USDx; Cayman SPV KYB-enabled; underlying yield: Figure HELOCs via PRIME token)
  - **40% BTC-backed credit allocation** (~7% APY; rolling-basis time-to-liquidity of days/weeks; on-chain market: Private Credit / DLUSD; Cayman SPV KYB-enabled; off-chain yield: Swiss-regulated lender → BTC loans at 50% LTV, 3-month fixed-term, rolling basis)
- **Blended yield: ~6.33%** — Buffer 0.73% + PRIME 2.8% + BTC Yield 2.8%
- **Revenue share model:** end-user earns up to a set cap (example: 2.5% APY); everything above the cap accrues to the fintech's revenue-share wallet in real time (every 400ms, Solana block cadence). This is the commercial engine.
- **Value accrual mechanics:** LP token value increases every 400ms with continuous compounding. End-user balance reflects value growth in real time.
- **Deposit flow:** user deposits USDx → receives LP tokens → funds split 20/40/40 → LP token appreciates as yield accrues.
- **Withdrawal flow:** small withdrawals served instantly from buffer; buffer-overdrawn state pulls from PRIME allocation (0–2 hr SLA) and BTC allocation (days/weeks via rolling maturities).
- **Counterparty structure:** Cayman SPV with KYB enabled; fintech KYBs once, entire user base gets regulated yield exposure.
- See `/Users/dawid/Github/Product/context/decks/Institutional Yield API - Product Flows.pdf` for full product mechanics and the diagrams to reproduce.

**Permissioned Markets feature (cross-cutting):**

- Enables KYC-gated markets for regulated strategies. Fintech that needs to KYC its users can have a regulated-asset market exposed only to its KYC'd users.
- Cross-linked from `/institutions` and `/issuers`; appears as a feature here because it's load-bearing for fintech compliance.

**Integration examples (concrete proof):**

Each of these is a real partnership and can be framed in partnership register:

- **Phantom** — 15M+ monthly active users, $25B+ in self-custodied assets. Phantom's **CASH** product is powered by Kamino yield underneath. Phantom users can lend and borrow on Kamino directly against PSOL inside the wallet.
- **Fuse** — Squads Labs' consumer wallet. USDC yield powered by Kamino's credit infrastructure.
- **Bybit** — Bybit's **Bitcoin Yield on Solana** product runs on Kamino's lending engine. Bybit Web3 Wallet also surfaces Kamino's lending markets to Bybit users.
- **OKX** — OKX **Web3 Wallet** surfaces Kamino Lend / Liquidity / Multiply directly to its 50M+ users. Kamino's PYUSD and xBTC Earn strategies are featured in OKX's Earn marketplace.
- **Privy** — embedded-wallet stack (75M+ accounts). Fintechs using Privy route idle balances into Kamino Earn Vaults. Privy publicly names Kamino alongside Morpho as a premier lending destination for Privy-powered idle-balance yield.
- **Squads** — multisig infrastructure. SquadsX integration lets any Squads multisig deploy directly into Kamino — giving institutional treasuries (including fintech corporate treasuries) access.

See `research/partners-04-synthesis.md` for Privy's inclusion flag (research flagged integration might be dormant — confirm with Dawid before surfacing prominently).

**Developer experience proof:**

- BuildKit is live at `kamino.com/build`.
- Docs live at `kamino.com/docs`.
- SDK examples, integration guides, wallet flow references — all linkable from the page.
- "Ship in weeks, not months" is the stated value prop. Back it with the Phantom and Bybit timelines if those are public.

**Commercial model clarity — the revenue share:**

The revenue share is the most commercially sensitive part of the page. Make it concrete:

- User earns up to a cap (example: 2.5% APY). This cap is configurable per integration.
- Everything above the cap accrues to the fintech's revenue-share wallet.
- Payment is real-time (every 400ms, Solana block cadence).
- Kamino takes a share above the fintech share (exact split negotiated per integration; no fixed published number — leave as "negotiated per integration" or similar neutral phrasing unless confirmed).

**Compliance architecture to surface:**

- End-user KYC — handled by the fintech.
- Partner KYB — handled by Kamino / the SPV structure when onboarding the fintech.
- Borrower KYC — every dollar of yield traces to a KYC-verified regulated borrower (IY counterparties, institutional loan borrowers).
- Regulatory reporting — the IY counterparties report to Liechtenstein FMA daily; real-time per-loan data is available.
- Independent attestation — monthly by an independent accounting firm (Andersen UK internally, but do not name publicly).
- No pseudonymous borrowers in the yield stack. This is the compliance moat.

**Voice anchors — developer + commercial register:**

The voice balances technical precision (developer reader) and commercial clarity (BD reader). Concrete API-capable phrasing pairs with explicit commercial language.

From the general deck on the fintech positioning: *"No fintech regulator will accept [pseudonymous borrowers] as backing for a consumer product."* This is a sharp, quotable line and can anchor a subsection.

## 5. Voice / tone / register

Developer + commercial register. Think Stripe + Plaid voice, tilted slightly institutional because of Kamino's credit-first positioning.

**Phrases to use:**

- *API, SDK, integrate, deploy, embed, white-label, backend, infrastructure, flow, allocation, revenue share, compliance architecture, KYC/KYB*
- *"In weeks," "production-grade," "battle-tested," "isolated vault per partner"*
- *"Onchain yield," "onchain credit"* — fine as qualifiers
- *"Powered by Kamino," "built on Kamino's credit infrastructure"*

**Phrases to avoid:**

- *"Turnkey" / "plug-and-play" / "out-of-the-box"* — tired SaaS clichés.
- *"Partnership opportunities"* / *"bespoke solutions"* — corporate-speak.
- *"Earn up to X%"* as a standalone claim without the tied commercial model — misleading.
- *"DeFi yield"* — the frame is "onchain yield backed by regulated credit," not "DeFi yield."
- *"Democratize"* — overused in fintech copy.
- Naming exchange listings for KMNO — even though this page talks to exchanges. Listing isn't a selling point.

**Tone specificity:**

The page can carry some technical density — developers will read docs. But it's not pure docs register — the BD reader must leave with clear commercial understanding. Structural diagrams replace long prose where possible. When prose is used, keep it tight and concrete.

A good register check: would a Phantom or Stripe-Privy product lead forward this page to their engineering team and to their BD team with the same link? If yes, the register is right.

## 6. Required and suggested sections

### Required sections

- **Audience-specific hero** — something like "Embed onchain yield and credit in your app." Proof strip can feature: integrations live (Phantom, Fuse, Bybit, OKX, Privy), scale stat (users served via fintech integrations if public), or cumulative loans originated.
- **BuildKit section** — API + SDK surface. What you can build (Earn, Multiply, Borrow embeds, deposit/withdraw, position monitoring). Integration steps at a high level. Privy embedded wallet support. CTA to `/buildkit` marketing page and to `/docs`.
- **Institutional Yield API section** — the flagship commercial product. 20/40/40 architecture diagram (reproduce from the IY API deck). Blended ~6.33% APY breakdown. Revenue share model. Flow diagrams for deposit / withdrawal / value accrual. CTA to `/institutional-yield-api` marketing page and to `Talk to our team`.
- **Revenue share model explanation** — dedicated subsection. Explains "user earns up to X%; fintech earns everything above" with the real-time-per-Solana-block cadence. Commercial clarity matters here; make it explicit with a simple diagram or table.
- **Compliance architecture section** — end-to-end KYC/KYB-compliant yield stack. Partner-level KYB, end-user KYC by the fintech, KYC'd regulated borrowers on the other side, regulated lending operations, qualified custodians. The "no pseudonymous borrowers" moat, framed positively.
- **Permissioned Markets feature** — KYC-gated markets for regulated strategies.
- **Integration examples section** — Phantom CASH, Fuse, Bybit Bitcoin Yield on Solana, OKX Web3 Wallet, Privy-powered fintechs. Each with one-line partnership description.
- **Technical + commercial CTAs** — dual CTA pattern. "Read the docs →" (to `/docs` / `/buildkit`) and "Talk to our team →" (to integrations@ or similar). Decide routing with BD.

### Suggested sections

- **"Ship in weeks" timeline proof** — if Phantom / Bybit integration timelines are publishable, a small stat block ("Bybit shipped Bitcoin Yield on Solana in X weeks" — confirm before stating).
- **White-label isolated vault explanation** — a small section clarifying that Kamino offers isolated vaults per partner that are invisible on the public Kamino interface. Users see the fintech's app; Kamino is the backend.
- **Developer experience teaser** — short section about docs quality, SDK languages supported, integration support model. For engineering-lead readers.
- **Quote pull** — a Privy-side quote naming Kamino, or a Phantom partnership quote. Be careful about what's public. The Privy public language ("premier lending protocols such as Morpho and Kamino") is clean and citable.
- **Permissioned-asset preview for fintechs** — if the fintech needs to offer regulated instruments to accredited users, permissioned markets enable it. Link to `/institutional-yield-api` for the permissioned IY embed.

### Section order

Recommended top-to-bottom:

1. Hero + proof strip (integrations + scale)
2. BuildKit section (developer surface)
3. Institutional Yield API section (commercial flagship)
4. Revenue share model explanation
5. Compliance architecture
6. Permissioned Markets feature
7. Integration examples
8. "Ship in weeks" / developer experience (optional)
9. Technical + commercial CTAs

Rationale: BuildKit first to introduce the platform surface; IY API second because it's the most commercially compelling; then commercial model (revenue share) and compliance; then proof via existing integrations. The page is roughly "what you get → how you make money → why it's safe → who's already doing it."

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest on this page:

- **Lead with institutional vocabulary.** Even on the developer-commercial page, avoid DeFi vogue. "Credit infrastructure," "yield source," "compliance architecture" over "DeFi protocol."
- **"DeFi" sparingly.** Acceptable here: none, really. The frame for fintechs is *onchain yield + credit infrastructure with compliance architecture* — "DeFi" reads as a liability to a fintech reader (regulatory association). The master spec is explicit: "the frame is 'onchain finance' where possible."
- **No named IY counterparties.** Even when describing the IY API. Use "regulated lending operation," "industry-standard reporting infrastructure," "independent accounting firm," "qualified custodians." The Liechtenstein FMA is nameable.
- **Partnership-focused partner copy.** Phantom CASH is "powered by Kamino yield" — that's partnership language. Avoid "Phantom chose Kamino" (endorsement language).
- **Aspirational but earned.** "Ship in weeks" is the stated value prop; don't extend it to "ship in days" without grounding.
- **No forward-risk claims.** Do not say "zero defaults" for IY / IY API as a forward guarantee. Use point-in-time factual phrasing.
- **Say "stablecoin yield" not "USDC yield"** — future-proofs for USDx expansion. (The IY API docs literally use "USDx" as the generic placeholder.)
- **Opinionated voice reads as credibility.** A sharp line like "No fintech regulator will accept pseudonymous borrowers as backing for a consumer product. That's why every dollar of yield on Kamino traces to a KYC-verified regulated borrower." — this is strong, defensible, and reads as expertise. Use lines like this.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- Homepage Audience Router → `/fintechs` (with entry animation)
- Solutions mega-menu Column 2 (Fintechs card) → `/fintechs`
- Footer → `/fintechs`
- External: developer referrals, hackathon follow-ups, BD outreach responses
- Cross-links from `/institutional-yield-api` and `/buildkit` marketing pages

**Outbound:**

- BuildKit section → `/buildkit` marketing page, `/docs` for implementation depth, `kamino.com/build` for the live product
- Institutional Yield API section → `/institutional-yield-api` marketing page
- Revenue share section → no outbound link (internal subsection); leads into Talk to our team
- Compliance architecture → `/institutional-yield` for IY compliance depth, `/security` for security depth
- Permissioned Markets feature → Talk to our team (no standalone page)
- Integration examples → partner pages if they exist (e.g., `/stories/phantom-cash` if that exists)
- Technical CTA → `/docs` (sub-site, knowledge base)
- Commercial CTA → "Talk to our team" / `integrations@kamino-foundation.com` or equivalent (confirm address with BD)

**CTAs specifically:**

Every major section should have both a docs-read CTA and a talk-to-team CTA where applicable. BuildKit's "Read the docs" + "Talk to our team" is the dual-CTA pattern. IY API leans heavier on "Talk to our team" because the commercial integration is customized.

## 9. Visual / design direction

Developer + commercial register. This page is the most diagram-heavy in the site rebuild.

- **Structural diagrams** are load-bearing — reproduce the 20/40/40 vault architecture, deposit flow, withdrawal flow, value accrual flow from the IY API deck. These are not decorative; they are the product.
- **Code-adjacent visual cues** — monospace accents, terminal-style labels where appropriate. Don't overdo it.
- **Color temperature** — neutral, professional, with accent colors on allocations / flows in diagrams.
- **Imagery** — real integration UI (Phantom CASH, Bybit Bitcoin Yield, OKX Web3 Wallet) can be used — screenshots of partner products with "powered by Kamino" badging. Confirm with Dawid / BD which screenshots are public.

**Visual dependencies:**

- 20/40/40 USDx Vault architecture diagram (from IY API deck page 3)
- Deposit flow diagram (page 4)
- Withdrawal flow diagram (page 5)
- Overdrawn buffer diagram (page 6)
- Value accrual diagram (page 7)
- Revenue share mechanics — can be a simple table or a flow diagram
- Integration partner logos — Phantom, Bybit, OKX, Privy, Fuse, Squads, Altitude
- Optional: BuildKit architecture / capability map

**Design-system components likely in play:**

- Structural diagram component (for product flows)
- Card / feature-card (for capability breakdown within BuildKit)
- Code block component (if any inline API examples)
- Dual CTA pattern (Read docs + Talk to team)
- Logo strip (for integrations)

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.4 (audience definition), §8.4 (/fintechs preliminary structure), §9.6 (/buildkit), §9.7 (/institutional-yield-api)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.10 (BuildKit in product stack), §11.4 (Fintechs in detail)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Institutional Yield API deck — THE definitive product flow source** — `/Users/dawid/Github/Product/context/decks/Institutional Yield API - Product Flows.pdf`. Every product flow diagram (architecture, deposit, withdrawal, overdrawn buffer, value accrual) is in this deck and should be reproduced on the IY API page and referenced here. Page 3 (vault architecture) is especially load-bearing.
4. **Partner synthesis** — Phantom, Fuse, Bybit, OKX, Privy, Squads, Altitude sections — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
5. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — commercial positioning and fintech integration story.
6. **Institutional Yield Final Announcement** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md` — structural source for the regulated-credit yield framing that backs IY API.

## 11. Open questions and decisions deferred to the page agent

- **Privy integration live status.** Master spec treats it as active; research file notes the Kamino <> Privy Telegram group has had no messages in 30 days and flags the integration's live status. Confirm with Dawid before prominently featuring Privy. If dormant, reference Privy only as infra platform, not as a live Kamino integration.
- **Revenue share split between Kamino and fintech.** The 2.5% cap is a public example; actual split between above-cap yield and Kamino's take is not publicly stated. Confirm language with BD — default to "negotiated per integration" unless Dawid approves a published split.
- **"Ship in weeks" timeline claim.** Confirm actual timelines from published Bybit / Phantom integrations before using as a specific claim (e.g., "Bybit shipped in X weeks"). Otherwise leave as general "weeks, not months."
- **Integration examples to feature.** Phantom, Fuse, Bybit, OKX, Privy, Altitude are all candidates. Not all may be appropriate to feature prominently — research flags Bybit as "MINIMAL" activity, Fuse as drafted from a one-line brief that needs BD factual check. Confirm per integration.
- **Contact email.** Master spec references `institutional@kamino-foundation.com` / `mark@kamino-foundation.com` / `cheryl@kamino-foundation.com`. Confirm with BD which address is routing for fintech integration inquiries. Could be a dedicated `integrations@` or a form.
- **USDx terminology.** The IY API deck uses "USDx" as a generic placeholder for the deposit token. Confirm whether `/fintechs` should use USDx generically, USDC specifically, or both.
- **The "No pseudonymous borrowers" line.** Sharp and defensible. Confirm with Helen (Legal) that this language is safe for external marketing before using it as anchor copy.
- **Where to surface Altitude.** First announced BuildKit partner. If live and shippable, feature prominently. Otherwise mention in the roster.
- **Tagline for Fintechs on the homepage Audience Router** — draft a candidate. Something like "Embed onchain yield in your app, with compliance architecture built in."
- **Whether to feature the KYC-gated IY variant** — this is technically IY API + Permissioned Markets. Could be a separate section. Confirm scope with Dawid.
