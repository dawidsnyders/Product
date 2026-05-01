# Handoff Spec: BuildKit (`/buildkit`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page is the developer-facing product surface for Kamino's platform offering. Its reader is a product or engineering lead at a consumer crypto app or fintech, looking to embed Kamino yield, credit, or lending into their application. BuildKit is the API + SDK that makes that integration possible — with Privy embedded wallets, KYC/KYB-compliant yield architecture, and white-label isolated vaults per partner. The page's job: establish BuildKit as a real developer platform (not DeFi dressed up), walk through integration capabilities, link aggressively to `/docs` for implementation depth, and route readers into both the technical (read-the-docs) and commercial (talk-to-team) funnels.

The single most important takeaway: **BuildKit is the fastest path for a consumer app to ship onchain yield and credit products to users — with embedded wallets, KYC/KYB-compliant architecture, and white-label isolated vaults that are invisible on Kamino's public interface.**

Funnel position: `/fintechs` BuildKit section → `/buildkit` → `Read the docs` (to `/docs`, implementation) OR `Talk to our team` (commercial integration conversation). BuildKit is live at `kamino.com/build` — the marketing page at `/buildkit` is distinct from the product surface.

## 2. Primary audience

- **Product leads at consumer crypto apps** — Phantom, Fuse, emerging wallets, Privy-powered apps. They evaluate: what can we offer our users, and how long does integration take?
- **Engineering leads at the same apps** — evaluate: API quality, SDK language support, wallet flows, authentication, KYC hooks, testnet support.
- **BD leads at fintechs** — evaluate: commercial model, revenue share, compliance architecture, regulatory posture.
- **Crypto-native fintechs building new products** — Altitude (first announced BuildKit integration partner), emerging yield-focused fintechs.
- **Exchanges evaluating yield integrations** — Bybit (already using BuildKit-style integration via Function for Bitcoin Yield on Solana), OKX, others considering.
- **Payment apps exploring stablecoin yield** — PayPal-class, Stripe-acquired Privy's customer base.

Note: the IY API (Institutional Yield API) is a *specific productized embed* that sits on BuildKit's API surface — it gets its own page at `/institutional-yield-api`. BuildKit is the broader platform; IY API is the flagship productized offering built on it. Cross-reference extensively.

What this page is NOT for: retail consumers (they see the fintech's app), institutional LPs (they have `/institutions`), asset issuers (they have `/issuers`).

## 3. Strategic context

BuildKit is Kamino's platform wedge. This page exists because:

1. **Consumer apps are the next major distribution channel for onchain yield.** Every wallet, neobank, and payment app with stablecoin balances is evaluating integration. Kamino needs to be the default choice — and that requires a real developer platform, not a GitHub readme.

2. **Privy + BuildKit is a shippable stack.** Privy provides embedded wallets (75M+ end-user accounts across 1,000+ apps; acquired by Stripe June 2025). BuildKit provides the yield/credit API surface. Together: a consumer app can ship onchain yield to users in weeks.

3. **The compliance architecture is the commercial moat.** Every dollar of yield flowing through BuildKit traces to a KYC-verified regulated borrower — not pseudonymous DeFi borrowers. That is the single most important selling point for a fintech whose own regulator is scrutinizing capital flows. "No fintech regulator will accept pseudonymous borrowers as backing for a consumer product" is the internal line and it should show up (carefully, positively framed) on this page.

4. **White-label isolated vaults make Kamino invisible to the end-user.** The fintech's users see the fintech's app; Kamino is backend. This is a real commercial unlock — the fintech keeps its brand; Kamino powers the yield.

The opportunity this page uniquely addresses: no DeFi protocol has shipped a mature developer platform for consumer-app yield embedding. Morpho doesn't have one. Aave doesn't. Compound doesn't. Kamino is building the category.

The tension: the reader is probably skeptical. Consumer-app leads have been pitched crypto integrations for years and most haven't shipped. The page has to demonstrate BuildKit is real — with actual integrations live (Phantom, Fuse, Bybit, OKX), with real docs, with concrete integration timelines — and not just marketing-grade aspirational copy.

## 4. Starting context — facts, figures, quotes, proof points

**Product capabilities (from master spec §9.6 and research):**

BuildKit is an API + SDK exposing Kamino's product surfaces to external developers. Core capabilities:

- **Earn embeds** — deposit, withdraw, check rates, monitor positions for Earn vaults. The primary surface for consumer-app yield integrations.
- **Multiply embeds** — leveraged-yield strategies exposed via API. More complex; used by sophisticated consumer-app partners.
- **Borrow embeds** — variable-rate borrow. For consumer apps offering a "borrow against your assets" feature.
- **Swap integration** — zero-fee aggregated swap on Solana, exposable via API.
- **Position monitoring + notifications** — real-time state of a user's positions, events, liquidation risk.
- **KYC/KYB hooks** — partner-level KYB at onboarding; end-user KYC optionally propagated through (for regulated yield flows).
- **White-label isolated vaults per partner** — dedicated vaults invisible on Kamino's public interface. Partner users see the partner's app; yield routes through the partner's vault.

**Embedded wallet support — Privy:**

- Privy is the default embedded-wallet infra for BuildKit integrations.
- Privy's stack: 75M+ end-user accounts; 1,000+ developer teams; acquired by Stripe June 2025.
- Integration with Privy is native — BuildKit SDK handles wallet setup, user onboarding, transaction signing, balance display.
- **Research flag (§11):** The Kamino <> Privy internal channel has been quiet (30+ days no messages). Confirm integration live-status with Dawid before featuring Privy prominently.

**KYC/KYB compliance architecture (the moat):**

The distinguishing feature of BuildKit is end-to-end KYC/KYB compliance:

- **Partner-level KYB** — Kamino onboards the fintech, verifies corporate identity, assesses regulatory posture, negotiates integration terms.
- **End-user KYC** — handled by the fintech, propagated to Kamino for regulated yield pathways.
- **Borrower KYC** — every dollar of yield traces to a KYC-verified regulated institutional borrower (IY counterparties, institutional loan borrowers, regulated lending operations).
- **No pseudonymous borrowers in the yield stack.**

From the general deck:
> *"No fintech regulator will accept [pseudonymous borrowers] as backing for a consumer product."*

This is the line, carefully framed, that anchors the compliance section.

**Current integrations (proof points):**

- **Phantom** — 15M+ monthly active users, $25B+ self-custodied assets. Phantom's **CASH** product is powered by Kamino yield. Phantom users can lend and borrow on Kamino directly against PSOL inside the wallet. Kamino vault receipt-token prices surfaced in Phantom's UI via Kamino's NAV API. Announced 25 Sep 2025.
- **Fuse** — Squads Labs' consumer wallet. USDC yield via Kamino. Research flag: copy drafted from one-line brief; BD factual check needed.
- **Bybit** — Bitcoin Yield on Solana product runs on Kamino's lending engine (wrapped via Function). Bybit Web3 Wallet also surfaces Kamino's lending markets.
- **OKX** — Kamino Lend / Liquidity / Multiply surfaced inside OKX Web3 Wallet. PYUSD and xBTC Earn strategies featured in OKX Earn marketplace.
- **Altitude** — first announced BuildKit integration partner.
- **Privy** — infrastructure partner; Privy publicly names Kamino alongside Morpho as a premier lending destination for Privy-powered idle-balance yield.

**Commercial model:**

- **Revenue share** — the standard commercial model. Users earn up to a cap (configurable per integration; example: 2.5% APY). Above-cap yield accrues to the fintech's revenue-share wallet in real time (every 400ms, Solana block cadence).
- **KYC/KYB onboarding** — included in integration.
- **Custom isolated vault setup** — per partner, invisible on public interface.
- **Technical support** — included; specifics negotiated per integration.

Exact revenue splits between Kamino and the fintech are negotiated per integration. Do not publish specific split numbers unless Dawid approves.

**Developer experience:**

- **Docs live at `kamino.com/docs`** — platform-style knowledge base. Separate from marketing.
- **SDK examples** — implementation patterns for common use cases.
- **Integration guides** — wallet flow, KYC flow, yield surfacing, notifications.
- **Testnet support** — presumably; confirm with engineering.
- **Language support** — Solana ecosystem standards (TS/JS, Rust); confirm with engineering.

**Voice anchors:**

Stripe + Plaid register tilted slightly institutional. From master spec §3.4:

> *"Fintechs ship in weeks, not months."*

That's the stated value prop. Back it with Phantom / Bybit integration timelines if publishable.

## 5. Voice / tone / register

Developer + commercial register. Think Stripe, Plaid, Twilio — tilted toward institutional credit.

**Phrases to use:**

- *API, SDK, embed, integrate, deploy, compose, capability, surface, flow, hook, signal, endpoint*
- *White-label isolated vault, embedded wallet, KYC/KYB architecture, revenue share, compliance-ready*
- *"Ship in weeks," "production-grade," "composable"*

**Phrases to avoid:**

- *"Turnkey," "plug-and-play," "out-of-the-box"* — tired SaaS clichés
- *"Democratize yield"* — overused
- *"DeFi API"* — the frame is "onchain yield + credit infrastructure"
- *"Revolutionary platform"* — empty
- *"Earn up to X%"* as a standalone claim — misleading without the compliance + revenue-share context
- Over-promising on timelines without backing

**Tone specificity:**

Concrete, example-driven, developer-credible. Where possible, show mechanism via code-adjacent visuals, architecture diagrams, or flow schemas rather than prose. When prose is used, it should be tight and example-rich.

A register check: would a Plaid or Stripe developer-relations lead read this page and think "these guys get it"? If yes, right. If it reads like a DeFi protocol page, wrong.

## 6. Required and suggested sections

### Required sections

- **Hero** — positioning. Something like "The API for embedding onchain yield and credit in your app." Dual CTA: `Read the docs` (primary, to `/docs`) + `Talk to our team` (secondary, sales).
- **What you can build** — capabilities breakdown. Earn embeds, Multiply embeds, Borrow embeds, Swap integration, position monitoring. Each with a one-line use-case example. Can be card grid.
- **Integration steps (high-level)** — KYB onboarding → isolated vault setup → SDK integration → testnet → production. Sequence.
- **Privy embedded wallet support** — native integration. What Privy handles (wallet UX, signing, user onboarding); what BuildKit adds. Cross-link to `/docs`.
- **KYC/KYB compliance architecture** — the moat. Partner-level KYB, end-user KYC flows, borrower KYC traceability, regulated lending operations underneath. The "no pseudonymous borrowers" line, positively framed.
- **White-label isolated vaults** — explanation that Kamino is the backend; the fintech's brand stays front-of-stack.
- **Institutional Yield API cross-reference** — BuildKit is the platform; IY API is the flagship productized embed. Point to `/institutional-yield-api` for the fully productized offering with 20/40/40 architecture and built-in revenue share.
- **Live integrations proof** — Phantom, Fuse (pending factual check), Bybit, OKX, Privy, Altitude. Partnership-framed.
- **Docs + developer experience** — pitch for `/docs` quality. SDK languages, integration guides, testnet support, technical support model.
- **Dual CTA close** — Read the docs + Talk to our team.

### Suggested sections

- **"Ship in weeks" evidence** — if specific integration timelines are publishable (e.g., "Bybit shipped Bitcoin Yield on Solana in X weeks"), feature them. Otherwise leave general.
- **Architecture overview** — BuildKit's place in the Kamino stack. Lending engine + Vault Layer + oracles + custody pathways + BuildKit API. Diagram.
- **Use cases (concrete)** — neobank offering stablecoin yield, wallet offering "earn on your USDC," exchange offering "earn on idle balances," payment app offering interest on stablecoin balances. Each with a short narrative.
- **Commercial model** — revenue share mechanics. Configurable user-facing yield cap; above-cap accrues to fintech wallet in real time. Do not publish specific split unless approved.
- **Permissioned markets feature** — for fintechs needing to offer regulated instruments to accredited users. Cross-link.
- **FAQ** — developer-specific (API stability, rate limits, testnet, SDK versioning) + commercial (pricing, integration timeline, support).

### Section order

Recommended top-to-bottom:

1. Hero + dual CTA
2. What you can build (capabilities)
3. Integration steps (high-level)
4. Privy embedded wallet support
5. KYC/KYB compliance architecture
6. White-label isolated vaults
7. Commercial model (optional)
8. Use cases (optional)
9. Live integrations proof
10. IY API cross-reference
11. Architecture overview (optional)
12. Permissioned markets feature (optional)
13. Docs + developer experience
14. Ship-in-weeks evidence (optional)
15. FAQ (optional)
16. Dual CTA close

Rationale: what you can build first — answers the developer's immediate question. Integration steps second — demystifies the process. Compliance third — the commercial moat. Live integrations as proof. Docs as the technical close.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **"DeFi" sparingly** (principle 4). On a fintech-developer page, "DeFi" reads as a regulatory liability. Use "onchain yield," "onchain credit," "credit infrastructure," or "Kamino" directly.
- **Lead with institutional vocabulary** (principle 2). Even on the developer page, credit + yield vocabulary anchors.
- **No framing by negation** (principle 1). The "no pseudonymous borrowers" line requires careful positive framing. "Every dollar of yield on Kamino traces to a KYC-verified regulated borrower" is positive and defensible.
- **Partnership-focused partner copy** (principle 11). Phantom, Bybit, OKX, Privy, Altitude — describe how Kamino works with them, not who they are.
- **No forward-risk claims** (principle 7). Do not promise uptime or SLA guarantees unless they are in the published SLA. "Production-grade" is OK; "100% uptime" is not.
- **Opinionated voice reads as credibility** (principle 13). A sharp line about the compliance moat reads as expertise.
- **No "V2"** (principle 8).
- **No KMNO-listing copy** (principle 9).
- **"Stablecoin yield" not "USDC yield"** (principle 12) — future-proofs BuildKit's API surface for multi-stablecoin support.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- `/fintechs` BuildKit section → `/buildkit` (primary)
- Products mega-menu (Platform > BuildKit) → `/buildkit`
- Footer Platform column → `/buildkit`
- `/institutional-yield-api` cross-links back to `/buildkit` (IY API is built on BuildKit)
- External: developer referrals, hackathons, partner BD

**Outbound:**

- Read the docs CTA → `/docs` (sub-site, knowledge base)
- Talk to our team CTA → `integrations@kamino-foundation.com` or equivalent (confirm)
- Live BuildKit product → `kamino.com/build`
- Individual integration proof → partner pages or `/stories` slugs if they exist
- Privy section → Privy's external documentation
- IY API section → `/institutional-yield-api`
- Permissioned markets → `Talk to our team`
- FAQ answers → `/docs`
- Use-case narratives → `/fintechs` for commercial context

## 9. Visual / design direction

Developer + commercial register. Diagram-heavy, code-adjacent where appropriate.

- **Architecture diagram** — BuildKit's place in the Kamino stack.
- **Integration flow diagram** — KYB → vault setup → SDK integration → production. Sequence.
- **Wallet flow visualization** — Privy embedded wallet + BuildKit SDK.
- **Code-adjacent visuals** — terminal-style labels, monospace accents, schematic hints at API shapes. Do not overdo.
- **Partner integration marks** — Phantom, Bybit, OKX, Privy, Altitude logos. Presence-based.
- **UI screenshots** — real integration UI from partners (Phantom CASH, Bybit Bitcoin Yield, OKX Web3 Wallet) if publishable.

**Visual dependencies:**

- BuildKit architecture diagram (new or adapted from general deck)
- Integration flow diagram (new)
- Wallet flow diagram (new)
- Partner logos — Phantom, Fuse, Bybit, OKX, Privy, Altitude
- Partner product screenshots (publishable versions only)

**Design-system components likely in play:**

- Architecture diagram
- Card / capability grid
- Partner logo strip
- Code block component (if any inline API shapes)
- Primary + Secondary CTA
- FAQ accordion

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.4 (Fintechs audience), §8.4 (/fintechs structure), §9.6 (/buildkit preliminary structure)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.10 (BuildKit in next-gen products), §11.4 (Fintechs detail)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Partner synthesis — Phantom, Fuse, Bybit, OKX, Privy, Squads, Altitude** — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
4. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — commercial positioning, fintech integration story.
5. **Institutional Yield API deck** — `/Users/dawid/Github/Product/context/decks/Institutional Yield API - Product Flows.pdf` — cross-reference for the IY API productized offering.
6. **Fintechs audience page brief (sibling)** — `/Users/dawid/Github/Product/landing page rebuild/page-specs/audiences/fintechs.md` — for cross-page consistency.
7. **Live BuildKit product surface** — `kamino.com/build` — for current product reality.

## 11. Open questions and decisions deferred to the page agent

- **Privy integration live status.** Research flags the Kamino <> Privy TG group inactive for 30+ days. Confirm with Dawid whether to prominently feature Privy or reference it more lightly.
- **Specific integration timelines.** Are Phantom / Bybit / OKX integration timelines publishable? If so, feature as "ship-in-weeks" proof. Otherwise leave general.
- **Revenue share split.** What can be said publicly about the Kamino/fintech split above the user-facing cap? Default: "negotiated per integration."
- **SDK language support.** TS/JS + Rust? Only TS/JS? Confirm with engineering.
- **Testnet support.** Confirm — is there a Kamino testnet or devnet deployment for BuildKit integrators?
- **Rate limits / SLA.** What's published? What's negotiated per integration?
- **Altitude integration status.** Is it live? Pilot? Announced but not shipped? Confirm.
- **Fuse details.** Research flags copy drafted from a one-line brief needing BD factual check. Confirm current integration scope and publishable details.
- **Relationship to IY API.** Clarify that BuildKit is the platform and IY API is the productized yield embed built on BuildKit. Cross-reference, don't conflate.
- **Which live integrations to feature.** Phantom is the strongest and deepest. Bybit via Function is a step removed. OKX is surfaced, not embedded. Confirm scope and featuring with BD.
- **Compliance architecture phrasing.** The "no pseudonymous borrowers" line is strong; confirm with Legal / Helen before using as a headline.
- **Ship-in-weeks claim.** Back with a specific integration timeline if one is publishable.
- **Permissioned markets prominence.** How prominently to feature on this page vs. deferring to `/institutions` or `/institutional-yield-api`.
- **Docs quality signaling.** How to communicate that `/docs` is real without being self-congratulatory.
- **Hero copy.** Draft 2–3 candidates.
- **Contact routing.** `integrations@kamino-foundation.com` or an existing address? Confirm with BD.
