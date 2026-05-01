# Handoff Spec: Issuers (`/issuers`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page exists for a specific conversation: an asset issuer — RWA tokenizer, tokenized-equity issuer, yield-bearing-stable issuer, private-credit fund looking to tokenize — evaluating where their asset should live onchain. The page's job is to demonstrate that Kamino is *the* distribution and credit layer on Solana for tokenized real-world assets, using PRIME as the single most credible proof point in DeFi history, and to route the issuer into a partnership conversation with Mark Hull.

The single most important takeaway: **Kamino scaled PRIME from $0 to $600M+ in four months with no token incentives and no retail campaign. That is not a generic marketing claim; it is the single largest RWA market in DeFi and it happened on Kamino. If you are bringing a tokenized asset onchain, this is the template.**

Funnel position: homepage router → `/issuers` → (product deep-reads on `/vaults`, `/rwa-dex`, `/multiply` preview, `/institutional-yield`) → `Contact partnerships` or `Onboard your asset` light form. The page is fully sales-led. No self-serve close.

## 2. Primary audience

Map to master-spec §3.3 and research §11.3. The real targets are:

- **RWA tokenizers** — Figure (HELOCs, already deep partner via PRIME), Securitize (tokenized institutional credit, e.g., ACRED — already integrated), Ondo (tokenized Treasuries, a potential partner), Superstate (tokenized regulated funds, already integrated via USCC / GLXY / FWDI), reinsurance tokenizers, private-credit fund managers looking to tokenize LP interests.
- **Tokenized-equity issuers** — Backed Finance (xStocks on Solana, already integrated) and emerging competitors. The xStocks Market on Kamino is the prototype.
- **Stablecoin issuers with differentiated collateral** — Paxos (PYUSD, USDG, both integrated), Bridge/Stripe (CASH, integrated via Phantom), yield-bearing stablecoin issuers, reinsurance-backed stablecoin issuers.
- **Private credit funds** — wanting to tokenize fund interests and distribute onchain. ACRED via Securitize is the template; Apollo's Diversified Credit fund is a real example.
- **Token issuers whose asset should be collateral as well as tradable** — differentiated from simple listings on DEXes.

Key distinction: this is the **sell-side** counterpart to `/individuals` and `/institutions` buy-sides. Issuers are looking for distribution, not yield.

What this page is NOT for: retail users (they have `/individuals`), institutional LPs (they have `/institutions`), fintech integrators (they have `/fintechs`). The overlap with `/institutions` is real but the conversation is different — institutions allocate *into* Kamino; issuers *onboard assets onto* Kamino.

## 3. Strategic context

Kamino bet that RWAs would move onchain aggressively, and the bet has paid: ~350% YoY RWA growth, $18B+ circulating. Kamino has captured the single largest RWA on Solana (PRIME), onboarded the first tokenized institutional credit fund (ACRED), supports tokenized equities (xStocks), runs stablecoin markets (PYUSD, USDG), and is about to launch RWA DEX for oracle-priced liquidity. *The product + proof combination on this page is the strongest in DeFi.*

This page exists because:

1. **Issuers are choosing venues right now.** The next 10 consequential RWAs will pick a primary onchain venue in 2026. That venue will capture distribution for the decade. Kamino needs to be the chosen venue. PRIME is the single most effective case study ever built for this conversation.

2. **The competitive moat is distribution via Multiply, not just listing.** Other venues can list an asset. Only Kamino has a one-click Multiply product that turns a listed asset into a leveraged yield strategy — which is what actually drives retail demand. PRIME went $0 → $600M *without token incentives* because Multiply made it usable as a leveraged strategy.

3. **RWA DEX is the next wedge.** Most tokenized-asset issuers today negotiate market-maker agreements with multiple firms to provide liquidity on DEXes. That's expensive, slow, and risky. RWA DEX provides oracle-priced liquidity natively — removing the MM step entirely. This is a structural product advantage no competitor has.

4. **Permissioned markets enable regulated assets.** Tokenized securities, restricted assets, accredited-investor pools — these can't exist in permissionless markets. Kamino's market layer supports permissioned markets natively, which makes the protocol viable for regulated assets that Aave, Morpho, and Compound can't host.

The tension this page has to manage: the page talks to issuers, but the issuer reads it thinking about *their user*. An issuer who tokenizes a private credit fund wants to know "will end-users actually allocate to this on Kamino?" The answer is: look at PRIME, look at ACRED, look at xStocks. The demand surface is real.

## 4. Starting context — facts, figures, quotes, proof points

**The PRIME case study — the single most important content on this page:**

- PRIME is Figure Technology Solutions' (Nasdaq: FIGR) tokenized HELOC-backed yield instrument on Solana. Figure is the largest non-bank HELOC originator in the US with $21B+ originated.
- Launched December 2025 exclusively on Kamino.
- Growth: $0 → $108M in first two weeks → $283M (Dec 2025) → $380M (Jan 2026) → $550M (Feb 2026) → $600M+ (Mar 2026)
- Zero token incentives. Zero retail campaign. Entirely native yield demand driven by Kamino's distribution apparatus.
- **86% of all PRIME on Kamino flows through Multiply.** PRIME Multiply yields 11–21% APY depending on leverage.
- PRIME Market on Kamino: 88% max borrow LTV, 91% liquidation LTV, 90% utilization cap.
- Figure RWA Consortium release, 4 Dec 2025: *"Kamino Finance will serve as the exclusive on-chain credit and lending partner, supporting the listing of PRIME on Kamino Lend and collaborating to expand utility for PRIME across Kamino's product offerings."*

This case study is the anchor of the page. Treat it like the front-page proof point.

**Additional proof points — assets already onboarded:**

- **ACRED** (Securitize, Apollo Diversified Credit Securitize Fund) — the first tokenized institutional credit fund integrated into Solana lending. Launched May 2025. Co-curated with Steakhouse Financial via Multiply strategy.
- **USCC** (Superstate crypto carry fund, ~$208M NAV) — live as eligible collateral.
- **xStocks** (Backed Finance) — TSLAx, SPYx, AAPLX, GOOGLX, MSTRX, NVDAX, QQQx, HOODx. Kamino was the first major DeFi lender to accept tokenized equities as collateral. Dedicated xStocks Market with custom Chainlink Data Streams oracle.
- **SyrupUSDC** (Maple) — core yield-bearing collateral asset with dedicated Maple market. Kamino is "majority of Maple's syrupUSDC supply on Solana" per RedStone Dec 2025 report.
- **PYUSD** (Paxos) — $500M+ in peak deposits; second-largest stablecoin on Kamino.
- **USDG** (Paxos) — live; anchors Steakhouse's high-yield vault.
- **CASH** (Bridge/Stripe via Phantom) — powered by Kamino yield.
- **ONyc** — live.

Use these as a "live on Kamino" asset wall, with the flexibility to grow over time.

**Products this page must surface:**

### Isolated markets as the listing mechanism

- Kamino's market layer allows purpose-built isolated markets per asset. The PRIME Market is the template: purpose-built, customized risk parameters, issuer-collaborative design.
- Permissioned option available for regulated assets.
- See `research/02-kamino-deep-comprehension.md §4.1` for market-layer depth.

### Multiply as distribution engine

- One-click leveraged yield. Takes a collateral asset and creates a leveraged-yield strategy around it.
- The reason PRIME scaled to $600M without incentives.
- Makes a listed asset usable, not just held.
- See `/Users/dawid/Github/Product/specs/multiply-landing-page.md` for Multiply positioning.

### Vaults + Curator ecosystem (issuer-side)

- Curators build vault mandates that can include the asset. Additional distribution surface.
- An issuer can also *become their own curator* — the Securitize + Steakhouse co-curated ACRED vault is the precedent.
- Current curator roster: Gauntlet, Steakhouse Financial, Allez Labs, MEV Capital, Sentora, Re7 Labs, plus Kamino itself on some flagships.
- Route to `/vaults` for the full vault infrastructure page.

### RWA DEX (upcoming)

- Oracle-priced liquidity for tokenized assets. Liquidity auto-deployed at oracle-determined real-world price. Removes the need for third-party MM agreements.
- For issuers this is huge — launching a tokenized asset today requires negotiating MM terms with multiple firms.
- Route to `/rwa-dex` for the product page.

### Permissioned Markets

- KYC-gated markets enable regulated assets (tokenized securities, accredited-investor pools, restricted assets).
- Native capability. Already in production for specific institutional instances.
- Cross-linked to the `/institutions` page where Permissioned Markets also appears as a feature.

**Issuer-partner credibility to surface:**

Use these as partnership-focused proof (not endorsement language):

- **Figure** — PRIME exclusive partnership, $600M+
- **Securitize** — ACRED, first tokenized credit fund on Solana lending
- **Superstate** — USCC, GLXY, forthcoming STRC
- **Backed Finance** — xStocks (first major DeFi lender to accept tokenized equity as collateral)
- **Paxos** — PYUSD + USDG stablecoin scaling
- **Maple Finance** — syrupUSDC core collateral
- **Chainlink** — oracle architecture for tokenized assets (custom xStocks Data Stream, CCIP for PRIME)

See `research/partners-04-synthesis.md` for exact phrasing on each.

**Risk Council / parameter setup context:**

Kamino has an internal Risk Council that sets parameters for new markets. Collaborative with the issuer. Custom LTVs, liquidation LTVs, utilization caps, oracle configuration. Allez Labs often produces independent risk ratings (Allez produced PRIME's 7.1/10 rating). This is credibility architecture the issuer can reference in their own docs.

**Voice anchors — partnership register:**

The voice here is neither institutional-dry nor retail-warm. It's *partnership-focused*. "We scaled PRIME with Figure; here's what we can do with yours." Think: a deck an issuer would want to hand to their own risk committee as part of an onchain distribution pitch.

## 5. Voice / tone / register

Partnership register. Confident but collaborative. The tone acknowledges that the issuer has choices and that Kamino has to earn the business with proof, not bravado.

**Phrases to use:**

- *"We integrate your asset as..." "we build the market around it..." "we distribute it through..."* — first-person plural acknowledging the partnership
- *"Issuer-collaborative design," "purpose-built market," "custom risk parameters"*
- *"Distribution," "demand surface," "credit infrastructure," "collateral utility"*
- *"Onboarded," "integrated," "launched with [partner]"* — for case studies

**Phrases to avoid:**

- *"List your asset"* — too commodity. Kamino doesn't list assets; it builds markets around them.
- Corporate-speak like *"tailored solutions," "partnership ecosystem," "value creation"* — empty register that kills credibility with sophisticated readers.
- Over-promising on growth: do not imply every asset will hit $600M. PRIME is exceptional; frame it as *"the template we've proven; yours will vary based on mandate, yield, and market fit."*
- Naming specific issuer competitors. Do not compare Figure to Maple to set up a frame.

**Tone specificity:**

This page should feel like it respects the issuer's sophistication and time. Short paragraphs. Concrete case-study language. Real numbers. No hedging.

A good register check: would Figure's BD team forward this page to their internal board without edits? If yes, the register is right. If it reads like a landing page, it's wrong.

## 6. Required and suggested sections

### Required sections

- **Audience-specific hero** — "the credit and distribution layer for tokenized assets on Solana" is the kind of lead. Proof strip can be issuer-weighted: cumulative RWA size on Kamino + asset count + PRIME scale.
- **PRIME case study (anchor)** — heading, growth chart ($0 → $600M in 4 months), key framing (no incentives, no retail campaign, native yield demand), product-mix explanation (Lend + Multiply). The page's most-important section.
- **Live tokenized assets on Kamino** — the "asset wall" — a visual presentation of current live tokenized assets (PRIME, TSLAx, SPYx, AAPLX, GOOGLX, MSTRX, ACRED, USCC, Syrup, ONyc, and more). Each with issuer attribution.
- **How the onboarding works** — a concise process explanation. Isolated market creation, custom risk parameters via Risk Council, collateral integration, Multiply support, optional permissioned configuration. Not an explicit numbered stepper — more a "here's what you get" narrative.
- **Multiply as distribution engine section** — explains why Multiply is the point. Uses PRIME's 86%-through-Multiply stat as evidence.
- **Vaults + curator ecosystem section** — issuer can join the curator economy; curators can build vault mandates around the issuer's asset. Cross-link to `/vaults`.
- **RWA DEX section** — oracle-priced liquidity for tokenized assets. Removes MM-agreement overhead. Cross-link to `/rwa-dex`.
- **Permissioned Markets feature** — KYC-gated markets for regulated assets. Feature, not its own page.
- **Issuer partner proof strip** — Figure, Securitize, Backed, Paxos, Superstate, Maple, Chainlink, Allez (for risk). Partnership-focused, not endorsement-language.
- **Contact partnerships CTA** — prominent. Routes to `mark@kamino-foundation.com` or a light "Onboard your asset" form. The homepage already has this light-form pattern (see master spec §6.4); reuse it.

### Suggested sections

- **Risk Council / parameter collaboration section** — an expansion of "purpose-built market" explaining the Risk Council, custom parameters, and the role of independent risk providers like Allez. Credibility architecture.
- **Quiet stats block** — total RWA size on Kamino, asset count, issuer count. Small and restrained.
- **Quote block** — a Figure / Securitize / Backed quote describing Kamino as a distribution partner. Be careful about what's public; the Figure quote in §4 is public.
- **"Become a curator" thread** — for issuers who want to curate a vault holding their own asset or broader mandates. Short mention with link to `/vaults`.

### Section order

Recommended top-to-bottom:

1. Hero + proof strip
2. PRIME case study (anchor)
3. Live tokenized assets asset wall
4. How onboarding works
5. Multiply as distribution engine
6. Vaults + curator ecosystem
7. RWA DEX
8. Permissioned Markets feature
9. Issuer partner proof strip
10. Risk Council / parameter collaboration (optional)
11. Contact partnerships CTA

Rationale for placing PRIME second: it's the single most persuasive thing on the page and it establishes credibility before the product explanations. Everything after it benefits from the PRIME frame.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest on this page:

- **Partnership-focused partner copy.** This page is defined by this principle. Every partner mention is about how Kamino works *with* them, not who they are. Identity context minimal.
- **Lead with concrete institutional vocabulary.** "Credit infrastructure," "distribution layer," "collateral utility," "oracle-priced liquidity." Not DeFi vogue.
- **No framing by negation.** Do not define Kamino against "just a DEX listing" or "Aave's inability to host regulated assets." Describe what Kamino IS: the largest tokenized-asset venue on Solana, with Multiply as the distribution engine.
- **"DeFi" sparingly.** Acceptable here: *"the single largest RWA market in DeFi."* Not acceptable: *"bring your asset to DeFi."* The frame is "onchain finance" or "Solana."
- **Aspirational but earned.** Every growth claim must be backed. "$600M+" is fact. "Every tokenized asset on Kamino grows like PRIME" is fiction.
- **Opinionated voice reads as credibility.** An issuer reading this page is sophisticated. A confident opinion ("Multiply is the reason PRIME scaled; listing alone never scales an RWA") reads as expertise; a hedge reads as a sales pitch.
- **No V2.** The architecture is assumed.
- **"Permissioned markets" not "whitelisted markets" or "gated markets"** — keep the product language consistent with the rest of the site.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- Homepage Audience Router → `/issuers` (with entry animation)
- Solutions mega-menu Column 2 (Issuers card) → `/issuers`
- Footer → `/issuers`
- RWA section on homepage (`Onboard your asset` CTA) → light form, which in turn is linked into from `/issuers` as the primary conversion action
- External: issuer BD referrals, RWA-conference follow-ups
- Cross-links from `/institutions` where RWAs as an institutional product appear, and from `/vaults` where curator ecosystem connects

**Outbound:**

- PRIME case study → `/stories/prime` (if stories page is live), or inline elsewhere
- Live assets wall → individual asset pages if they exist (PRIME, xStocks, etc.); otherwise static
- Multiply as distribution engine → `/multiply` (webapp) — or consider a Multiply explainer that's issuer-specific before routing out
- Vaults section → `/vaults` (marketing page)
- RWA DEX section → `/rwa-dex` (marketing page)
- Permissioned Markets feature → `Contact partnerships` (no standalone page)
- Issuer partner proof strip → no outbound links (presence-only)
- Primary close CTA → `mark@kamino-foundation.com` or "Onboard your asset" light form. The form schema should capture: company, contact, asset category, brief description. Route to `partnerships@kamino-foundation.com` or Mark directly.

**CTAs specifically:**

Every product section (Multiply, Vaults, RWA DEX) should carry two CTA options: (1) Read more / product marketing page, and (2) Contact partnerships. The partnerships CTA appears repeatedly; its recurrence signals sales-led intent.

## 9. Visual / design direction

Partnership register — confident, asset-rich, visually substantive. Not institutional-dry like `/institutions`, not retail-warm like `/individuals`.

- **Asset logos and issuer marks** should be prominent. This page is the single most logo-heavy page on the site (except partners on homepage).
- **PRIME case study** needs a strong growth chart — $0 to $600M curve over four months. Interactive hoverable preferred; static hi-fi acceptable.
- **Structural diagrams** for onboarding, Risk Council, and RWA DEX oracle pricing. See the existing decks for visual reference.
- **Color temperature** between `/institutions` (cool) and `/individuals` (warm) — professional but with asset color accents where they apply.
- **Typography** full prose with structured hierarchy. No cramped layouts.

**Visual dependencies:**

- PRIME growth chart ($0 → $600M, 4 months)
- Asset wall visual treatment — a tile grid of tokenized assets with issuer attribution (uses the same asset roster as the homepage RWA strip, expanded)
- RWA DEX oracle-pricing diagram
- Risk Council / parameter flow diagram
- Issuer partner logos — Figure, Securitize, Backed, Paxos, Superstate, Maple, Chainlink, Allez (monochrome-capable)

**Design-system components likely in play:**

- Interactive chart (PRIME growth)
- Tile grid (asset wall)
- Alternating rows (for product sections)
- Structural diagrams (custom)
- Logo strip

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.3 (audience definition), §6.4 (homepage RWA section — tone reference), §8.3 (/issuers preliminary structure), §9.4 (/vaults), §9.5 (/rwa-dex)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.1 (Lend markets), §4.4 (Multiply), §4.11 (Curators), §10 (ecosystem positioning), §11.3 (Issuers in detail)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Partner synthesis** — Figure, Securitize, Paxos, Superstate, Maple, Backed Finance, Chainlink sections — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
4. **PRIME product page spec** — `/Users/dawid/Github/Product/specs/prime-product-page.md` — current PRIME positioning, scale data, voice.
5. **Multiply landing page spec** — `/Users/dawid/Github/Product/specs/multiply-landing-page.md` — for the "Multiply as distribution engine" section.
6. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — RWA narrative and partner-ecosystem materials.
7. **Kamino Curator Vaults deck** — `/Users/dawid/Github/Product/context/decks/Kamino Curator Vaults.pdf` — vault + curator positioning.

## 11. Open questions and decisions deferred to the page agent

- **PRIME case study link destination.** Does `/stories/prime` exist as a page? If so, link there; if not, the full PRIME narrative may belong inline on this page.
- **"Onboard your asset" form schema.** Master spec §6.4 specifies company / contact / asset category / brief description. Confirm recipient routing (Mark Hull direct vs. partnerships alias).
- **RWA DEX launch status.** The master spec treats it as upcoming. If it has launched, adjust copy. If still upcoming, explicitly frame as "coming" without a hard date.
- **Curator becoming an issuer / issuer becoming a curator.** The ACRED + Steakhouse co-curation is the precedent. Confirm with Dawid whether to surface this as an explicit pathway for issuers on the page.
- **Asset wall completeness.** Master spec §6.4 lists ten assets at launch — PRIME · TSLAx · SPYx · AAPLX · GOOGLX · MSTRX · ONyc · ACRED · USCC · Syrup. Extend on the `/issuers` page if additional assets are live by the time this ships (e.g., NVDAX, HOODx, GLXY, FWDI, AUTO).
- **Risk Council visibility.** Is the Risk Council a public-facing concept or internal? Confirm with Dawid before featuring it.
- **Solana Foundation / Helius / Hastra mentions.** These are Kamino-adjacent partners in the RWA world (Hastra co-develops PRIME; Helius is a Solana infrastructure partner). Generally keep page-scope tight to issuer-oriented partners; do not clutter with infrastructure-only partners.
- **Explicit growth numbers for other tokenized assets.** PRIME $600M is the anchor. Should the page surface numbers for ACRED, USCC, xStocks, syrupUSDC? Research file has these — confirm which are OK to state publicly as of the page ship date.
- **Tagline for Issuers on the homepage Audience Router** — draft a candidate. "Distribution and credit infrastructure for tokenized assets" or similar.
- **Page length.** This is one of the denser pages. The master spec recommends 1,500–2,500 words per handoff but the final page will be longer. Aim for rich-but-scannable rather than exhaustive.
