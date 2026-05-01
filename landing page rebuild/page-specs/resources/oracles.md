# Handoff Spec: Oracles (`/oracles`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page lives in the Resources section (not Products) because it functions like `/security` — a credibility + commercial surface rather than a conversion-focused product page. Its reader is sophisticated: a risk assessor, a curator, a tokenized-asset issuer evaluating oracle reliability, or a potential external partner considering Scope as an oracle service. The page's job: showcase Scope as Kamino's in-house oracle system with serious engineering rigor, surface the architecture (aggregation from multiple providers, in-house feeds where needed, manipulation-resistant pricing), explain how Scope is used across Kamino's products, and open a commercial pathway for external oracle integration if pursued.

The single most important takeaway: **Scope is a sophisticated in-house oracle that powers every Kamino product — triple-audited, manipulation-resistant, with aggregation from multiple industry providers and purpose-built in-house feeds where the market lacks them.** It is a load-bearing credibility artifact that Morpho's delegated-oracle approach cannot match.

Funnel position: Resources mega-menu → `/oracles`. Also the Scope row on the homepage Trust section (§6.5) → `/oracles`. Products pages with oracle-relevance cross-link here (`/institutional-yield`, `/off-chain-collateral`, `/rwa-dex`, `/vaults`). The page serves both credibility-read (most visitors) and a smaller commercial-read (Scope-as-external-service considering partners).

## 2. Primary audience

- **Risk-assessment readers** — the subset of `/security` audience who want to drill into oracle reliability specifically. Includes curators doing vault due diligence, tokenized-asset issuers evaluating pricing risk, and sophisticated LPs.
- **Curators evaluating Kamino** — oracle architecture is a direct input into vault risk. A Gauntlet or Steakhouse risk analyst reads this page to underwrite the oracle layer before recommending a Kamino deployment.
- **Tokenized-asset issuers** — if their asset's pricing depends on an oracle stack, they care about which feeds Kamino uses and what the deviation-cap / fallback logic looks like.
- **Potential external Scope users** — a commercial audience. If Scope is pursued as an external oracle service, this page is the commercial onboarding surface.
- **Competitive analysts, DeFi researchers, press** — Scope is one of Kamino's clearest differentiators. This page is where that differentiation becomes visible externally.

What this page is NOT for: retail end-users who just want to deposit USDC. They don't read oracle pages. Keep the register appropriate.

## 3. Strategic context

Scope is one of Kamino's most defensible moats, and this page is where the moat becomes legible. Three reasons the page exists:

1. **Oracle choice is the single largest source of DeFi lending losses historically.** The Oct 2024 Morpho oracle misconfiguration ($230K lost) and the Nov 2025 MEV Capital / xUSD depeg ($25.4M bad-debt exposure) both traced to curator-delegated oracle choices. Aave has avoided this, Kamino has avoided this. Kamino's in-house Scope is the architectural answer. This page carries that rigor.

2. **Scope enables everything on Kamino.** Every lending market uses Scope for pricing. Every Multiply loop. Every vault reserve. Every future RWA DEX pool. Without Scope, none of the rest works — so the oracle is infrastructure, not a product feature.

3. **Commercial optionality.** Scope-as-external-service is a latent commercial path. If Kamino chooses to offer Scope externally (to other Solana protocols or to cross-chain users), this page is the commercial surface. Master spec §9.8 notes this explicitly as a "commercial pathway (if pursued)."

The opportunity this page uniquely addresses: no DeFi protocol has a public, well-designed oracles page of equivalent depth. Chainlink has their own marketing but it's Chainlink-the-infrastructure-company; protocols that use Chainlink (Aave, Morpho) don't surface their oracle architecture. Kamino can — because Kamino's oracle architecture is differentiated.

The tension: the page could easily become a pure vanity credibility page with thin content. Avoid that. Give enough architectural substance that a risk assessor can actually underwrite Scope. If there's a commercial pathway, build toward it — but don't overstate unless live.

## 4. Starting context — facts, figures, quotes, proof points

**Scope architecture overview (from `research/02-kamino-deep-comprehension.md §4.1` and §9.1):**

- **In-house oracle** operated by Kamino. Used across all Kamino products.
- **Aggregates feeds from multiple industry providers** including Pyth, Chainlink, PythLazer, Switchboard, and others as reference feeds.
- **Develops in-house feeds** when the market does not provide adequate feeds for specific assets.
- **Triple-audited.** Oracle code has undergone multiple independent security audits.
- **TWAP / EWMA manipulation-resistant.** Uses time-weighted and exponentially-weighted moving averages to resist short-term price manipulation attacks.
- **Scam-wick protection.** Prevents flash-crash-style liquidations from being triggered by brief oracle anomalies.
- **Full protocol control over pricing logic.** Kamino owns the oracle architecture end-to-end — no delegation to curators, no external black-box.

**Use across Kamino products:**

- **Lend** — every collateral and debt asset in every market gets priced through Scope.
- **Multiply** — leverage strategies reference Scope for collateral valuation and safe-leverage calculations.
- **Earn vaults** — curators reference Scope prices for allocation decisions.
- **Off-Chain Collateral** — collateral valuation references Scope; Chainlink Proof of Reserves provides attestation of custodied amount.
- **Fixed Rates** — rate + term cells price collateral via Scope.
- **RWA markets** — purpose-built oracles (Chainlink Data Streams for xStocks; HELOC-specific pricing for PRIME) integrate through Scope's aggregation layer.
- **Institutional Yield** — collateral valuation at the lending operation layer uses off-chain custody pricing; onchain pricing references Scope.

**Specific asset-class oracle stacks (for depth):**

- **Stablecoins** — multi-source (Pyth + Chainlink) with deviation caps.
- **SOL + LSTs (JitoSOL, mSOL, JupSOL)** — stake-rate oracle pricing anchored to underlying SOL + staking rate, preventing SOL-price-movement-induced liquidations in LST loops. This is a Kamino-specific innovation — see `multiply-landing-page.md` for the mechanism-first framing.
- **BTC (cbBTC)** — multi-source with deviation caps.
- **JLP** — complex; Jupiter-perps-LP-token pricing model.
- **xStocks (TSLAx, SPYx, etc.)** — custom Chainlink Data Streams oracle purpose-built for the asset class.
- **syrupUSDC (Maple)** — multi-source: Chainlink, PythPull, PythLazer with deviation caps.
- **PRIME** — oracle architecture reflecting the HELOC yield source.
- **ACRED (Securitize)** — regulated-fund pricing model.

**Competitive implicit framing:**

- **Against Morpho's delegate-oracle-to-curators model**: Kamino maintains full protocol control. This is the Oct 2024 Morpho oracle misconfiguration problem solved at the architecture level.
- **Against single-feed oracle dependencies**: Scope aggregates, deviates-cap, and fallback-protects. Single-feed dependencies create single points of failure.
- **Against fully external oracles**: Kamino owns pricing logic end-to-end. For non-standard assets (LSTs, RWAs), external oracles often don't exist — Scope builds in-house feeds.

Do not name Morpho or specific competitors. Frame the architecture positively.

**Chainlink's deep partnership (for the oracle stack):**

Chainlink is the industry-standard oracle partner and a deep Kamino partner. Specifics:

- **Data Streams** inside Kamino's Multi-Price Oracle System for institutional-grade pricing.
- **Custom xStocks oracle** purpose-built by Chainlink for Kamino's tokenized-equity market.
- **CCIP** (cross-chain interoperability protocol) securing PRIME on Solana.
- **Proof of Reserves** verifying Anchorage-custodied collateral for Off-Chain Collateral.

From research `partners-04-synthesis.md`:

> *"Chainlink is the industry-standard oracle and cross-chain platform, adopted by Swift, Mastercard, UBS and most of DeFi. On Kamino, Chainlink provides Data Streams pricing inside the Multi-Price Oracle, a custom xStocks feed, CCIP for PRIME on Solana, and Proof of Reserve for Off-Chain Collateral."*

Partnership-framed. Do not present Scope as "replacing" Chainlink — they work together.

**Audit + security posture for Scope specifically:**

- Triple-audited (per research). Confirm specific auditor roster at page-ship time.
- Part of Kamino's broader 20 audits + 4 formal verifications posture.
- In-scope for Kamino's $1.5M Immunefi bug bounty.

**Voice anchors:**

No specific public Scope quote from Marius or team on record. The register is engineering-credible. The paranoia that drives Marius's product philosophy applies directly to Scope: *"full protocol control over pricing logic"* is the value the page should embody.

From Marius's broader voice (for tone reference):

> *"Keep it clean. Keep it safe. Just untouched."*

Applied to oracles: every oracle decision is a risk decision, and Kamino owns those decisions directly.

**Commercial pathway (if pursued):**

Master spec §9.8 notes this as optional. If Scope-as-external-service is a real 2026 commercial pathway, the page opens with a credibility-first showcase and closes with a commercial CTA (Scope as an external oracle service for other Solana protocols, cross-chain, or tokenized-asset issuers). If not live, defer — keep the page credibility-focused with a light "for integration inquiries, contact us" note.

## 5. Voice / tone / register

Engineering-credibility register. Precise, architectural, calm. Neither retail-warm nor sales-pitched. Similar tone to `/security` but focused on the oracle layer specifically.

**Phrases to use:**

- *Oracle, feed, aggregation, deviation cap, TWAP, EWMA, manipulation-resistant, fallback, reference feed, pricing architecture, in-house feed, custody-attested*
- *"Full protocol control over pricing logic," "multi-source aggregation," "purpose-built feeds where needed"*
- *"Used across Kamino's products," "underpins every market, vault, and strategy"*

**Phrases to avoid:**

- "Best oracle in DeFi" — empty superlative
- "Unmanipulable" / "100% secure" — overclaim
- "Revolutionary oracle architecture" — vogue
- Framing against specific competitor oracles by name
- "Trustless" — oracles aggregate external data; the system is trust-minimized, not trustless

**Tone specificity:**

Engineering-document register tilted toward the reader. This page rewards depth — risk assessors and curators will read all of it. Retail readers won't get here often, and if they do, the register is institutional-register-appropriate signaling, not hostile.

## 6. Required and suggested sections

### Required sections

- **Hero** — positioning line for Scope. Something like "Scope: the pricing infrastructure for Kamino." Quiet CTA — perhaps `Contact integrations` if commercial pathway is pursued, otherwise just a scroll-to-architecture CTA.
- **Scope architecture overview** — what Scope is, what it does, how it's architected. Aggregation, in-house feeds, manipulation resistance, protocol control.
- **Aggregation methodology** — how Scope aggregates feeds from multiple providers. Deviation caps, fallback logic, reference-feed selection, TWAP / EWMA usage.
- **In-house feeds** — where Kamino develops feeds directly because market oracles are inadequate. LST stake-rate oracle, JLP pricing, specific RWA pricing models.
- **Use across Kamino products** — concrete list: Lend, Multiply, Earn vaults, Off-Chain Collateral, Fixed Rates, RWA markets, Institutional Yield. One-line per product.
- **Asset-class oracle stacks** — section showing specific oracle configurations per asset class (stablecoins, SOL + LSTs, BTC, JLP, xStocks, syrupUSDC, PRIME, ACRED). Parameter-level detail for sophisticated readers.
- **Security + audits** — triple-audited, part of 20-audit + 4-formal-verification posture, Immunefi coverage.
- **Chainlink integration** — partnership section describing how Chainlink feeds integrate into Scope's aggregation layer. Data Streams, xStocks, CCIP, PoR.

### Suggested sections

- **Architectural comparison (implicit framing)** — a tight section on "full protocol control" vs. "delegated" oracle models. Describe what Kamino's architecture IS; the competitive framing lands by implication.
- **Commercial pathway** — if Scope-as-external-service is live, a Contact integrations CTA section. If not live, omit or make a small note that external inquiries can be directed to `integrations@kamino-foundation.com`.
- **Operational note** — how Scope is monitored, how incidents are handled, how feed updates propagate. Engineering-depth signal.
- **Historical track record** — point-in-time facts. "Zero oracle-induced liquidation incidents to date across $19B+ originated." Frame carefully per the no-forward-risk-claim principle.
- **Explorer / live-data link** — if Scope has a public inspection surface (feeds, prices, deviations visible onchain), link to it. The master spec §6.5 trust block lists "Explore Scope →" as a CTA with a linked surface; ensure this page is the destination.

### Section order

Recommended top-to-bottom:

1. Hero + quiet CTA
2. Scope architecture overview
3. Aggregation methodology
4. In-house feeds
5. Use across Kamino products
6. Asset-class oracle stacks
7. Security + audits
8. Chainlink integration
9. Architectural comparison (optional, implicit framing)
10. Historical track record (optional)
11. Explorer / live-data link (if available)
12. Commercial pathway (if pursued)

Rationale: architecture → methodology → in-house work → uses → asset-specific stacks → security → partner context → optional extensions. The reader builds confidence through depth.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **No framing by negation** (principle 1). Do not define Scope against "delegated oracle" models. Describe what Scope IS: in-house, aggregated, manipulation-resistant, protocol-controlled.
- **Lead with institutional vocabulary** (principle 2). Oracle, feed, aggregation, pricing architecture.
- **No forward-risk claims** (principle 7). "Zero oracle-induced liquidation incidents to date" is OK as point-in-time. "Scope will never fail" is not.
- **Partnership-focused partner copy** (principle 11). Chainlink integration described in terms of how Kamino uses Chainlink — Data Streams, xStocks, CCIP, PoR.
- **"DeFi" sparingly** (principle 4).
- **No "V2"** (principle 8).
- **Opinionated voice reads as credibility** (principle 13). "Every pricing decision is a risk decision. We own them directly." — the kind of line that signals rigor.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- Resources mega-menu (Oracles) → `/oracles` (primary)
- Homepage Trust section Row 2 (Scope Oracle) "Explore Scope →" → `/oracles`
- Product pages with oracle relevance cross-link: `/institutional-yield`, `/off-chain-collateral`, `/rwa-dex`, `/vaults`, `/fixed-rates`
- `/security` outbound → `/oracles`
- Footer Resources column → `/oracles`

**Outbound:**

- Scope live data surface (if it exists) — embed or link
- Chainlink section → Chainlink's public docs for Data Streams / CCIP / PoR
- Security section → `/security` for the full Kamino security posture
- Individual audit firms referenced → their reports or Kamino's audit repository
- Commercial CTA (if present) → `integrations@kamino-foundation.com` or similar
- Product use cross-links: `/institutional-yield`, `/off-chain-collateral`, `/rwa-dex`, `/fixed-rates`, `/vaults`

## 9. Visual / design direction

Engineering-credibility register. Architectural, restrained, sophisticated.

- **Oracle architecture diagram** — Scope as central aggregator, inputs from Pyth / Chainlink / Switchboard / in-house feeds, outputs to Kamino products.
- **Asset-class stack visualizations** — per-asset oracle configuration; table or card-detail treatment.
- **Feed flow diagram** — how a price ticks from source → Scope aggregation → consumer product.
- **Scope brand mark** — if Scope has its own wordmark / badge within Kamino's design system. Master spec §6.5 references the Scope interface; there should be a visual identity for Scope distinct from (but harmonized with) Kamino's.
- **Audit firm logos** — Certora / OtterSec / Ackee / Offside Labs / Sec3 / Informal Systems — subset applicable to Scope audits specifically.

**Visual dependencies:**

- Scope architecture diagram (new or adapted)
- Per-asset oracle stack visualizations
- Scope brand mark / wordmark
- Chainlink + Scope integration visual
- Audit firm logos (subset)

**Design-system components likely in play:**

- Architecture / flow diagram component
- Parameter table (for asset stacks)
- Logo strip (auditors)
- Quiet CTA

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §5.1 (Oracles in Resources, not Products), §6.5 (homepage Trust — Scope Row), §9.8 (/oracles preliminary structure), §10.4 (Resources Oracles)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino deep comprehension §4.1 (Scope as engineering property), §9.1 (Scope as operational moat), §7.2 (competitive — in-house oracle advantage)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
3. **Partner synthesis — Chainlink entry** — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
4. **Multiply landing page spec** — `/Users/dawid/Github/Product/specs/multiply-landing-page.md` — source for stake-rate oracle framing (the mechanism-first argument for LSTs).
5. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — general oracle positioning.
6. **Kamino intelligence context** — `/Users/dawid/Github/Marketing/documents/kamino-intelligence-context.md` — competitive positioning on oracles and risk architecture.

## 11. Open questions and decisions deferred to the page agent

- **Scope public-facing commercial status.** Is Scope-as-external-service live, pipelined, or aspirational? Master spec §9.8 treats it as optional. Confirm with Dawid at page-ship time.
- **Scope brand identity.** Does Scope have a distinct wordmark / mark within Kamino's design system? Confirm. If not, design treatment defaults to Kamino's typography with "Scope" as a named product.
- **Public Scope inspection surface.** Master spec §6.5 trust block lists "Explore Scope →" as a CTA with a linked surface. Is this surface live? Design-polished? Confirm before featuring.
- **Auditor roster.** Which audit firms have specifically audited Scope (subset of the 20 audits)? Confirm — the page should name them, not just use the broader Kamino audit posture.
- **Asset-class oracle details.** The stake-rate oracle for LSTs, custom xStocks Chainlink oracle, syrupUSDC multi-source oracle — these are real and differentiated. Confirm current asset-class stacks with engineering.
- **Historical track record language.** "Zero oracle-induced liquidation incidents to date" — confirm with risk / product that this is accurate and that the phrasing is defensible.
- **Architectural comparison phrasing.** The implicit framing against Morpho's delegated-oracle model is strong but risky. Default: describe Kamino's architecture positively; competitive framing implicit.
- **Commercial CTA.** If Scope-as-external-service is live, what's the route? `integrations@kamino-foundation.com` or a dedicated address?
- **Chainlink attribution.** Chainlink is a deep partner and the dominant external feed provider. Confirm the specific phrasing with BD (Cristi Moscoso handles Chainlink joint campaigns).
- **Relationship to `/security`.** `/security` is the umbrella page; `/oracles` is the oracle-specific deep-read. Confirm cross-link treatment — probably `/oracles` is linked from `/security` as a depth page for the oracle layer.
- **Hero copy.** Draft 2–3 candidates. The register is credibility-forward, not sales-forward.
- **Live data embed.** If Scope has a live data surface (feeds, prices, deviation states), embedding it directly on the page is maximally persuasive. Confirm feasibility.
