# Handoff Spec: RWA DEX (`/rwa-dex`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page speaks to a specific reader: a tokenized-asset issuer who has just finished deciding to tokenize on Solana and is now staring at the liquidity problem. Tokenized assets need secondary market liquidity to be useful — and traditionally that means negotiating market-maker agreements with multiple firms, managing spreads, accepting custodian fees, and hoping enough depth shows up. RWA DEX is Kamino's answer: oracle-priced liquidity deployed natively, removing the need for external MM agreements for tokenized assets.

The page's job: establish RWA DEX as the liquidity primitive for tokenized assets on Solana, explain the oracle-priced AMM mechanics clearly, show how it plugs into the broader Kamino stack (isolated markets + Multiply + Earn vaults), and route issuers into onboarding. Audience overlap with `/issuers` is heavy; this page provides the depth that `/issuers` teases.

The single most important takeaway: **Tokenized assets don't need traditional market makers to trade onchain. Oracle-priced liquidity, deployed natively, removes the MM-agreement bottleneck that has slowed tokenized-asset distribution for years.**

Funnel position: `/issuers` RWA DEX section → `/rwa-dex` → `Onboard your asset` (light form) or `Talk to our team`. Sales-led.

## 2. Primary audience

- **RWA tokenizers** — Figure (already using Kamino for PRIME; RWA DEX is the liquidity layer upgrade), Securitize, Ondo, Superstate, Backed Finance, private-credit-fund tokenizers, receivables tokenizers, reinsurance tokenizers.
- **Tokenized equity issuers** — Backed Finance and successors. xStocks already has dedicated oracle; RWA DEX is the matching liquidity layer.
- **Stablecoin issuers with price-pegged tokens** — where oracle-priced liquidity is the natural secondary-market construction.
- **Funds considering tokenizing LP interests** — want to know how their token will trade.
- **Secondary: infrastructure / oracle readers** — sophisticated DeFi readers who care about the oracle-pricing primitive architecturally. Smaller audience, but influential.

What this page is NOT for: retail traders looking for a DEX to swap on (they have Kamino Swap / Jupiter aggregation). This page is about *liquidity for tokenized assets*, not DEX trading UX.

## 3. Strategic context

RWA DEX is Kamino's wedge for the next wave of tokenized-asset issuers. This page exists because:

1. **MM agreements are the bottleneck for tokenized-asset distribution.** Every asset issuer who tokenizes today has to negotiate with 2–4 market-maker firms, sign individual agreements, accept spreads, and pay for liquidity. This is slow, expensive, and introduces MM counterparty risk. RWA DEX removes the step.

2. **Oracle-priced liquidity is uniquely feasible for RWAs.** Most DEX constructions use AMM pricing curves that work for volatile crypto assets. RWAs are *priced by their underlying reality* (a tokenized Treasury has a Treasury yield; PRIME has a HELOC yield). Oracle-priced liquidity is the natural construction — the DEX references the oracle for price and provides liquidity at oracle-determined price. This is only possible for assets with credible oracle pricing, which RWAs have.

3. **RWA DEX + Kamino Lend + Multiply = full-stack distribution.** An issuer's asset becomes collateral in an isolated Kamino market, trades on RWA DEX for secondary liquidity, and gets leveraged via Multiply. One onboarding, three distribution surfaces.

4. **No competitor has this architecture.** Aave, Morpho, Compound are money markets — they don't provide secondary-market liquidity for RWAs. Dedicated RWA DEXes (e.g., SwapRWA experiments) lack the lending/leverage integration. Kamino is the only protocol combining all three.

The opportunity this page addresses: tokenized assets are growing ~350% YoY and the onboarding friction is real. The asset issuer who picks Kamino gets onboarded market-maker-free to a full credit + liquidity stack. This page is the pitch for that.

The tension: RWA DEX is upcoming per master spec — not yet launched. Copy has to handle this honestly (preview, not proclaim) while still making the commercial pitch compelling enough to start issuer conversations. The page's hardest job is making an upcoming product feel substantive.

## 4. Starting context — facts, figures, quotes, proof points

**Product mechanics (from master spec §9.5 and research):**

- **Oracle-priced AMM**: The DEX references an oracle (primarily Chainlink Data Streams / Pyth / Scope) to determine the asset's price. Liquidity is auto-deployed at the oracle-determined price, with spread/slippage parameters configurable per asset.
- **No external MM agreement required**: The issuer does not need to negotiate with Wintermute, XBTO, Flowdesk, or similar for secondary-market liquidity. The protocol provides it natively.
- **Integrates with Kamino's broader stack**: An asset onboarded via RWA DEX is also available as collateral in Kamino Lend (isolated market per asset), leveraged via Multiply, and can be held in Earn vaults under curator mandates.
- **Permissioned option**: For regulated assets (tokenized securities, accredited-investor-gated assets), RWA DEX can be deployed in a permissioned configuration (KYC-gated swap access). Cross-links to Permissioned Markets feature.
- **Issuer configurability**: Spread parameters, slippage bounds, collateral support (which token pairs), fee structure.

The master spec treats RWA DEX as upcoming. Exact launch timing and current status need confirmation. Handle copy accordingly.

**The oracle foundation:**

RWA DEX depends on high-quality oracle pricing for each asset. This is where Scope (Kamino's in-house oracle) and Chainlink (Data Streams) become load-bearing:

- **Scope** aggregates feeds from multiple providers; develops in-house feeds when needed; triple-audited; TWAP/EWMA manipulation-resistant.
- **Chainlink Data Streams** provides the purpose-built xStocks oracle; Proof of Reserves for Off-Chain Collateral; CCIP for PRIME. Chainlink is the industry-standard oracle partner for tokenized-asset pricing.
- **Combined stack**: Scope as the Kamino-internal oracle; Chainlink Data Streams where external-grade pricing is required; deviation caps and oracle-redundancy patterns throughout.

Cross-links to `/oracles` for Scope depth.

**Why oracle pricing works for RWAs specifically:**

A conventional AMM (constant product curve) works for two crypto assets in a liquid pair because the curve balances supply/demand. It works poorly for a tokenized asset whose "price" is determined by a real-world reference (HELOC yield, Treasury yield, equity price) — the AMM can diverge from the real-world price and introduce arbitrage risk.

Oracle-priced AMMs solve this: the pool references the oracle for price, enabling tight-spread secondary-market liquidity without requiring an active MM to balance the curve.

**Existing precedents on Kamino:**

- **xStocks Market** uses a custom Chainlink Data Streams oracle purpose-built for tokenized US equities (TSLAx, SPYx, AAPLX, GOOGLX, MSTRX, NVDAX, QQQx, HOODx). This is the closest existing analog to RWA DEX's pricing approach.
- **PRIME Market** uses an oracle architecture purpose-designed for HELOC-backed pricing.

These are lending-market oracles, not DEX oracles — but they establish that Kamino has the oracle depth to support tokenized-asset markets across use cases.

**Issuer value proposition (the commercial pitch):**

An asset issuer onboarding to RWA DEX gets:

1. **Native secondary-market liquidity** without negotiating MM agreements
2. **Oracle-referenced pricing** that tracks the asset's real-world value
3. **Integration with Kamino Lend** (isolated market, borrowable collateral)
4. **Integration with Multiply** (leveraged yield strategies around the asset — the PRIME playbook)
5. **Integration with Earn vaults** (curators build mandates including the asset)
6. **Permissioned option** for regulated instruments
7. **Fee participation** depending on negotiation

This is the strongest "why Kamino" pitch for a tokenized-asset issuer on the site.

**Partner credibility (oracles):**

- **Chainlink** — deep oracle partner across Kamino's product stack. Specifically for RWA pricing: Data Streams inside Kamino's Multi-Price Oracle System; custom Chainlink oracle purpose-built for the xStocks Market; CCIP securing PRIME on Solana; Proof of Reserves for Off-Chain Collateral.

From Chainlink's public amplification:
> *"Kamino (@KaminoFinance) has integrated @xStocksFi, powered by Chainlink Data Streams, to enable the usage of tokenized equities on its leading borrowing and lending platform on @solana."*

**Voice anchors:**

Same partnership register as `/issuers`. "We built the liquidity layer so you don't have to negotiate it." Confident but collaborative.

## 5. Voice / tone / register

Partnership register with technical credibility. The page has to feel architecturally serious (it's a new DEX primitive) and commercially inviting (it's a sales-led onboard). Strike a balance between "here's the mechanism" and "here's what you get."

**Phrases to use:**

- *Oracle-priced liquidity, tokenized-asset liquidity, secondary-market liquidity, spread, slippage, reference price, isolated market, permissioned configuration, market-maker-free onboarding*
- *"Deploy liquidity natively," "reference the oracle," "auto-deployed at oracle-determined price"*
- *"Onboard your asset," "join the Kamino RWA stack"* — invitational verbs

**Phrases to avoid:**

- "Revolutionary DEX" — empty superlative
- "DeFi DEX" — "DeFi" is unearned on this page; "onchain DEX" at most, but the real frame is "liquidity layer for tokenized assets"
- "No market makers needed" — sounds like negation framing; use "without requiring MM agreements" or "market-maker-free onboarding"
- "Disrupt MM agreements" — crude; describe what IS
- "Infinite liquidity" — overreach
- "Zero slippage" — misleading; oracle-priced AMMs still have spread

**Tone specificity:**

Issuer-respectful. Technically precise where oracle-pricing mechanics are explained. Commercially clear where the value proposition is surfaced.

## 6. Required and suggested sections

### Required sections

- **Hero** — positioning. Something like "Oracle-priced liquidity for tokenized assets. Deployed natively." Dual CTA: `Onboard your asset` (primary, light form) + `Read the architecture` (scroll anchor).
- **How it works** — oracle-priced AMM mechanics. How a liquidity pool references an oracle for price; how liquidity is auto-deployed at oracle-determined price; how spread / slippage parameters are configured. Load-bearing diagram.
- **Why oracle pricing for RWAs** — the architectural rationale. Conventional AMM curves work poorly for assets with external reference prices; oracle-priced AMMs solve this. 2–3 paragraphs.
- **Issuer value proposition** — the commercial pitch. The seven benefits listed above, in whatever format best serves the page (enumerated list, card grid, matrix).
- **Oracle foundation** — Chainlink Data Streams + Scope. Cross-links to `/oracles`. Partnership-framed Chainlink section.
- **Integration with the broader Kamino stack** — the ISO market + Multiply + Earn vaults combination. Cross-links to `/vaults`, `/issuers`, `/institutional-yield` (for the curator / LP reader).
- **Permissioned option** — feature section for regulated assets.
- **Integration pathway** — what the onboarding process looks like (due diligence, market setup, oracle configuration, liquidity parameters, distribution launch). High-level; details in partnerships conversation.
- **Onboard your asset CTA** — primary conversion. Light form (company / contact / asset category / brief description) matching the pattern on homepage RWA section and `/issuers`.

### Suggested sections

- **Precedent: xStocks Market** — a short block showing the oracle-referenced model already live on Kamino for tokenized equities. Credibility lift.
- **Precedent: PRIME oracle architecture** — similar credibility lift for HELOC-backed pricing.
- **Asset categories supported** — explicit list of what can onboard: tokenized private credit, tokenized equities, tokenized Treasuries, tokenized reinsurance stables, tokenized receivables, yield-bearing stablecoins. Broadens issuer self-identification.
- **FAQ** — issuer-specific: what happens if oracle fails? What's the liquidity depth? Who provides liquidity — Kamino directly, curators, LPs, all three? Who pays oracle costs?
- **Asset wall preview** — a subset of the tokenized assets already on Kamino, with a "your asset here" slot. Visual invitation to join.
- **Related products** — explicit cross-links to `/vaults` (curator ecosystem), `/issuers` (issuer audience page), `/oracles` (Scope), `/institutional-yield` (where curator-run vaults sit).

### Section order

Recommended top-to-bottom:

1. Hero + dual CTA
2. How it works (oracle-priced AMM mechanics)
3. Why oracle pricing for RWAs
4. Issuer value proposition
5. Oracle foundation (Chainlink + Scope)
6. Precedent: xStocks + PRIME (optional)
7. Integration with the broader Kamino stack
8. Asset categories supported (optional)
9. Permissioned option
10. Integration pathway
11. Asset wall preview (optional)
12. FAQ (optional)
13. Onboard your asset CTA

Rationale: architecture → rationale → value prop → credibility → integration. Close on the light form.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **Lead with institutional vocabulary** (principle 2). Liquidity, spread, reference price, infrastructure.
- **No framing by negation** (principle 1). The page is tempted to frame as "MM-free DEX" — that's negation. Describe what RWA DEX IS: oracle-priced liquidity deployed natively.
- **"DeFi" sparingly** (principle 4). The frame is "liquidity layer for tokenized assets," not "RWA DeFi DEX."
- **No forward-risk claims** (principle 7). Do not state oracle-priced AMMs have zero exploit risk; they have a specific, bounded risk profile. Describe honestly.
- **Partnership-focused partner copy** (principle 11). Chainlink is described in terms of how Kamino uses it.
- **Aspirational but earned** (principle 6). RWA DEX is upcoming. Do not describe it as if it's mature. Preview with confidence but no over-reach.
- **Oracle precedent copy** — xStocks and PRIME are real. Use as proof that the oracle stack can support tokenized-asset markets; don't imply RWA DEX is already live because those markets exist.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- `/issuers` RWA DEX section → `/rwa-dex` (primary)
- Products mega-menu (Enterprise > RWA DEX) → `/rwa-dex`
- Footer Enterprise column → `/rwa-dex`
- Homepage RWA section `Onboard your asset` CTA → `/rwa-dex` (via light form) or directly to the form on this page
- Homepage Partners section (Chainlink hover card) → `/rwa-dex`
- Cross-links from `/oracles` — natural adjacency

**Outbound:**

- Onboard your asset → light form; recipient `partnerships@kamino-foundation.com` or `mark@kamino-foundation.com`
- Oracle foundation section → `/oracles` (Scope depth)
- Integration with broader stack → `/vaults`, `/issuers`, `/institutional-yield`
- Precedents: xStocks Market → webapp (xStocks Market); PRIME → webapp (PRIME Market) or `/stories/prime`
- Permissioned Markets feature → `/institutions` or `Contact sales`
- FAQ answers → `/docs`

## 9. Visual / design direction

Partnership register + technical architecture — similar temperature to `/vaults`.

- **Oracle-priced AMM flow diagram** — load-bearing visual. Pool references oracle → auto-deploys liquidity at reference price → users trade at near-oracle price.
- **Architecture positioning diagram** — how RWA DEX sits in the Kamino stack (oracle layer, liquidity layer, lending layer, vault layer, Multiply layer).
- **Asset / integration visuals** — tokenized asset logos (PRIME, TSLAx, etc.) as presence-based proof.
- **Chainlink + Scope mark** — oracle foundation visualization.
- **Integration pathway visualization** — sequence diagram or flow showing the onboarding steps.

**Visual dependencies:**

- Oracle-priced AMM mechanism diagram (new)
- Kamino-stack positioning diagram (may already exist in general deck)
- Tokenized asset logo wall
- Chainlink Data Streams + Scope oracle foundation visual
- Light-form UI component

**Design-system components likely in play:**

- Architecture diagram component
- Card / feature grid
- Logo strip (tokenized assets)
- Light-form component (inherited from homepage RWA section)
- Primary + Secondary CTA

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.3 (Issuers audience), §6.4 (homepage RWA section — tone), §6.6 (Chainlink partner card), §8.3 (/issuers structure), §9.5 (/rwa-dex preliminary structure)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.1 (Lend — Scope oracle), §4.10 (RWA DEX in next-gen products), §9.1 (operational moats — Scope)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Partner synthesis — Chainlink entry** — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
4. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — may have RWA DEX positioning materials.
5. **Issuer-audience spec (sibling file)** — `/Users/dawid/Github/Product/landing page rebuild/page-specs/audiences/issuers.md` — for cross-page consistency.

## 11. Open questions and decisions deferred to the page agent

- **RWA DEX launch status.** Master spec treats as upcoming. Confirm at page ship time — live, pilot, or still in development.
- **Specific mechanism details.** Oracle-priced AMM architecture is described at high level in the master spec. A technical product spec likely exists internally — request from Dawid if not already accessible.
- **Fee structure.** What does an issuer pay vs. what does Kamino take? What are LP economics? Confirm with BD.
- **Liquidity source.** Who provides liquidity in an oracle-priced RWA DEX pool? Kamino directly? Curators? LPs? Combination? Confirm mechanism.
- **Oracle configuration per asset.** Is the oracle choice issuer-configurable or Kamino-standardized? Confirm.
- **Permissioned option specifics.** How deep does permissioning go — swap-level KYC, wallet-level KYC, jurisdictional gates?
- **Asset categories eligible.** What's the range? Tokenized equities, tokenized private credit, tokenized Treasuries, yield-bearing stables — all? Others?
- **Minimum asset size for onboarding.** Is there a floor? Confirm with BD.
- **xStocks + PRIME precedent framing.** Are these precedents (for the architectural claim) or are they the RWA DEX product already? Clarify — they're lending-market oracles today, not DEX products. But they establish credibility.
- **"Market-maker-free" phrasing.** Sharp line, but negation-adjacent. Prefer "without requiring MM agreements" or "MM-agreement-free." Confirm final phrasing with Dawid.
- **Relationship to Kamino Liquidity (CLMM vaults).** Legacy Kamino Liquidity products on Orca / Raydium are a separate product. Clarify that RWA DEX is distinct (oracle-priced, not CLMM).
- **Hero copy.** Draft 2–3 candidates.
- **Sales close CTA routing.** Same recipient as `/issuers` `Onboard your asset` — `mark@` or `partnerships@`. Confirm.
