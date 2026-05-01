# Handoff Spec: Institutional Yield API (`/institutional-yield-api`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page is the productized offering that sits on top of BuildKit — a *structured yield product-in-a-box* that a fintech can embed in weeks and route user stablecoin balances into, earning a defined user-facing cap and capturing above-cap yield as revenue share. The single most specific, commercially complete product Kamino has for consumer apps.

The page's job: explain the 20/40/40 vault architecture clearly, show the blended yield breakdown (~6.33%), walk through deposit / withdrawal / value-accrual / overdrawn-buffer flows with the diagrams from the IY API deck, explain the revenue-share commercial model with the 2.5% cap example, and route into `Talk to our team` for integration.

The single most important takeaway: **The Institutional Yield API gives a fintech a productized onchain yield embed — 20/40/40 architecture, blended ~6.33% APY, with a configurable user cap and above-cap revenue share paid into the fintech's wallet every 400ms.**

Funnel position: `/fintechs` IY API section → `/institutional-yield-api` → `Talk to our team`. Sales-led. The IY API is a high-touch integration; the page is a product sheet, not a self-serve surface.

## 2. Primary audience

Same as `/fintechs` primary audience, narrowed to the subset evaluating IY API specifically:

- **Consumer crypto apps with stablecoin user balances** — the primary target. Wallets, neobanks, crypto-native consumer apps.
- **Exchanges with "Earn" products** — looking for backend yield they don't have to build.
- **Payment apps wanting to pay interest on stablecoin balances** — PayPal-class, Stripe-adjacent.
- **BD + product + engineering leads together** — the IY API is complex enough that all three typically read this page in sequence.
- **Legal + compliance leads at prospective integrators** — the compliance architecture is a selling point, and they will scrutinize.

What this page is NOT for: retail end-users (they see the fintech's app), institutional LPs depositing directly into IY (they have `/institutional-yield`), asset issuers (they have `/issuers`).

## 3. Strategic context

IY API is the commercial flagship of Kamino's fintech play. This page exists because:

1. **The commercial model makes the math work for fintechs.** A consumer app can't just offer users Kamino's raw 6–8% APY — that leaves no margin for the fintech, no margin for operations, no margin for user-acquisition cost. IY API's revenue share (user earns up to cap, fintech earns everything above) is the commercial engine that makes onchain yield viable for a consumer product.

2. **The 20/40/40 architecture is productized risk management.** 20% instant-liquidity buffer + 40% PRIME/USDC exposure + 40% BTC-backed credit. Each allocation has defined time-to-liquidity (instant / 0–2 hours / days-weeks rolling) and defined yield (~3.6% / ~8% / ~7%). The blend gives a consumer-app-appropriate liquidity profile with a competitive yield.

3. **Every dollar of yield traces to regulated KYC/KYB'd borrowers.** The 20/40/40 allocations all flow through regulated counterparties: PRIME is Figure-originated HELOCs routed through a Cayman SPV with KYB; the BTC-backed credit goes through a Swiss-regulated lender. This is the compliance moat for fintech integrations — their regulator can trace every dollar of yield.

4. **Real-time value accrual (every 400ms, Solana block cadence) is a UX unlock.** End-user balances tick up continuously; fintech revenue-share wallet fills continuously. No batch processing, no monthly accruals. Solana-native infrastructure made this possible.

The opportunity this page uniquely addresses: no DeFi protocol has shipped a productized embed like this. Morpho has vaults; Aave has pools; neither packages them into "here's the product, here's the commercial model, here's the compliance story, ship it in weeks." IY API is category-defining.

The tension: the product is mechanically complex (three allocations, time-to-liquidity differences, overdrawn buffer mechanics, real-time value accrual, revenue share). The page has to explain it crystal clearly without losing readers in the mechanism. The IY API deck's diagrams are load-bearing here.

## 4. Starting context — facts, figures, quotes, proof points

**The definitive source** for IY API mechanics is:
`/Users/dawid/Github/Product/context/decks/Institutional Yield API - Product Flows.pdf`

This deck contains five load-bearing diagrams that should be reproduced on the page (with Kamino-brand design-system treatment):

1. **USDx Yield Vault Architecture** (page 3 of deck) — the 20/40/40 split, blended yield breakdown.
2. **Deposit Flow** (page 4) — fintech user deposits; 20/40/40 split; LP tokens issued.
3. **Withdrawal Flow** (page 5) — small withdrawal served from buffer instantly.
4. **Overdrawn Buffer** (page 6) — buffer-overdrawn state; rebalance from PRIME (0–2 hours) and BTC market (days/weeks via rolling maturities).
5. **Value Accrual** (page 7) — every 400ms, LP token value increases; user gets up to 2.5% APY; fintech revenue share above 2.5%.

These diagrams are the product. Reproduce them faithfully.

**The 20/40/40 architecture (page 3 of deck):**

- **20% Liquidity Buffer** — Unallocated. Yield: 3.64% APR (EFFR — Effective Federal Funds Rate tracking). Instant withdrawal.
- **40% Allocation 1: PRIME / USDC** — Yield: ~8% APY. Time-to-liquidity: 0–2 hours with SLA. On-chain market: PRIME / USDx. Counterparty: Cayman SPV (KYB enabled). Underlying yield: Figure HELOCs → PRIME Token.
- **40% Allocation 2: Bitcoin-USDx** — Yield: 7% APY. Time-to-liquidity: Rolling basis, days/weeks. On-chain market: Private Credit / DLUSD. Counterparty: Cayman SPV (KYB enabled). Off-chain yield: Swiss-regulated lender → BTC loans at 50% LTV, 3-month fixed-term loans expiring on a rolling basis.

**Blended yield breakdown:**

- Buffer contribution: 0.73% (20% × 3.64%)
- PRIME contribution: 2.8% (40% × ~7% weighted)
- BTC Yield contribution: 2.8% (40% × ~7% weighted)
- **Total blended: 6.33% APY**

These are deck numbers. Confirm exact numbers at page-ship time; real-time rates may differ.

**Deposit flow (page 4 of deck):**

1. User opts into Earn. USDx sent to the vault. Receives vault LP tokens.
2. LP Token = Value Accrual. As yield accrues, vault LP token grows in value.
3. Funds split 20-40-40: 20% buffer (instant liquidity, EFFR) / 40% to PRIME / 40% to BTC strategies.

Example: fintech user deposits $10,000 USDx → receives 10,000 LP shares → $2,000 to Liquidity Buffer + $4,000 to PRIME-USDx + $4,000 to Bitcoin-USDx.

**Withdrawal flow — normal state (page 5 of deck):**

1. User requests withdrawal (e.g., redeems 100 shares for $106.33).
2. Vault checks liquidity buffer.
3. Withdrawals from buffer.
4. User receives instant USDx.

Small withdrawals served instantly from the liquidity buffer; no rebalancing needed.

**Overdrawn buffer state (page 6 of deck):**

1. User requests withdrawal.
2. Vault checks liquidity buffer — overdrawn.
3. Withdrawals from Allocation 1 (PRIME-USDx, 0–2 hr SLA).
4. User receives USDx in 0–2 hours.
5. As buffer depletes, vault rebalances and requests liquidity from both allocations. PRIME market should bring buffer back to normal levels with instant or up-to-two-hour redemptions. Vault also requests liquidity from Bitcoin market and awaits rolling maturities of the 3-month term loans.

**Value accrual (page 7 of deck):**

1. **Vault Yield Accrual:** yield flows into the vault with every Solana block (every 400ms).
2. **LP Token Value Increase:** accrued yield reflects in the value of the LP tokens in real-time.
3. **Contractor balance increase:** value accrual is instantly reflected in user balances. **User gets everything up to 2.5% APY.**
4. **Platform revenue share:** fintech gets revenue share straight into their own wallet — **everything in excess of 2.5% APY**. Real-time (every 400ms).

Vault LP token value increases every 400ms with continuous compounding.

**Commercial model — the revenue share:**

- User-facing cap is **configurable per integration**. 2.5% is the example in the deck; actual cap is negotiated per partner.
- Above-cap yield accrues to the fintech's revenue-share wallet in real time.
- Solana-native 400ms block cadence enables continuous real-time accrual (not batch).
- Kamino takes a protocol share above the fintech share. Exact Kamino/fintech split is negotiated per integration. Do not publish specific split unless Dawid approves.

**Compliance architecture:**

- **Partner (fintech) KYB** — Kamino onboards the fintech; KYB'd by the Cayman SPV structure.
- **End-user KYC** — handled by the fintech, propagated as needed.
- **Borrower KYC** — PRIME borrowers KYC'd through Figure's stack; BTC-backed credit borrowers KYC'd through the Swiss-regulated lender.
- **Cayman SPV (KYB enabled)** structures for both allocations — institutional legal wrapper.
- **No pseudonymous borrowers** in the yield stack.
- Monthly independent attestation (for the institutional-yield layer underneath).
- Real-time per-loan transparency (for the institutional-yield layer underneath).

**Related products:**

- IY API is built on **BuildKit** (the API + SDK platform). Cross-link to `/buildkit`.
- The PRIME allocation routes to the PRIME Market — Figure's HELOC-backed tokenized yield. Cross-link to `/issuers` for PRIME context.
- The BTC-backed credit allocation is adjacent to **Kamino Institutional Yield** — same structural premise but not the identical vault. Cross-link to `/institutional-yield`.
- Embedded wallets via **Privy** — same as BuildKit.

**Voice anchors:**

Same as `/fintechs` and `/buildkit`: Stripe + Plaid developer-commercial register with institutional-credit underpinning. The IY API page is a shade more product-sheet because of the specific mechanics.

## 5. Voice / tone / register

Developer + commercial register with product-sheet density on mechanics. Substantive, concrete, diagram-heavy.

**Phrases to use:**

- *Vault architecture, allocation, liquidity buffer, time-to-liquidity, rolling maturities, revenue share, LP token, value accrual, Solana block cadence, KYB-enabled SPV, compliance-ready, configurable cap*
- *"20% buffer / 40% PRIME / 40% BTC-backed credit"* — the blend framing
- *"Every 400ms, continuous compounding"* — the real-time mechanic
- *"User cap, fintech captures above-cap"* — the commercial model

**Phrases to avoid:**

- "High-yield product" — empty
- "Fixed 6.33% APY" — 6.33% is a blended *projection*, not a fixed yield. Use "blended ~6.33% projected APY" or similar.
- "Earn up to X%" as a standalone claim without context
- "DeFi yield product" — frame is "onchain yield embed built on Kamino's credit infrastructure"
- "Instant yield" — users earn continuously, not instantly from zero

**Tone specificity:**

Product-sheet register. The reader expects architecture; give it to them. Use diagrams for compression, prose for intuition, tables where helpful.

## 6. Required and suggested sections

### Required sections

- **Hero** — positioning. "A productized onchain yield embed for consumer apps" or similar. Dual CTA: `Talk to our team` (primary) + `Read the architecture` (scroll anchor).
- **Vault architecture — the 20/40/40 diagram** — load-bearing. Reproduce page 3 of the IY API deck faithfully. Includes the blended yield breakdown.
- **The three allocations** — detail per allocation:
  - 20% Liquidity Buffer: EFFR-tracking ~3.6% APR, instant withdrawal.
  - 40% PRIME / USDC: ~8% APY, 0–2 hr SLA, Figure HELOCs underneath.
  - 40% BTC-backed credit: 7% APY, days/weeks time-to-liquidity, Swiss-regulated lender underneath, 50% LTV, 3-month fixed-term rolling maturities.
- **Deposit flow** — reproduce page 4 diagram. Walk through: deposit → 20/40/40 split → LP token issuance.
- **Withdrawal flow** — reproduce pages 5 and 6 diagrams. Normal state (buffer-served, instant) and overdrawn state (rebalance from PRIME and BTC).
- **Value accrual** — reproduce page 7 diagram. Real-time accrual every 400ms. User-cap + revenue-share mechanic.
- **Revenue share model** — dedicated subsection. User earns up to configurable cap (2.5% example); above-cap accrues to fintech revenue-share wallet in real time.
- **Compliance architecture** — KYB-enabled Cayman SPVs, KYC'd borrowers, regulated counterparties, monthly attestation. Cross-link to `/institutional-yield` for depth on the IY layer underneath.
- **Integration model** — how onboarding works. KYB → isolated vault setup → BuildKit SDK integration → testnet → production. Cross-link to `/buildkit`.
- **Talk to our team CTA** — primary conversion.

### Suggested sections

- **Use cases** — concrete consumer-app scenarios. Wallet routing idle stablecoin balances; neobank offering "earn" on USDC; exchange offering "idle balance yield"; payment app paying interest on stablecoin.
- **Why Kamino (vs. building your own)** — a tight subsection for the "build vs. buy" reader. Speed (ship in weeks), compliance (regulated counterparties), track record ($19B+ originated on Kamino).
- **Preview: IY API variants** — if Kamino plans IY API variants (conservative, aggressive, multi-stablecoin), preview. Default: omit for v1 clarity.
- **FAQ** — integrator-specific: what happens if buffer is overdrawn for extended period? How do we handle user outflow spikes? What's the fintech wallet for revenue share? How is cap adjusted over time?
- **Architecture cross-reference** — shows IY API in the broader Kamino stack. Partly redundant with BuildKit's architecture view; can link out.

### Section order

Recommended top-to-bottom:

1. Hero + dual CTA
2. Vault architecture (20/40/40 diagram)
3. The three allocations (detail)
4. Deposit flow
5. Withdrawal flow (normal + overdrawn)
6. Value accrual
7. Revenue share model
8. Compliance architecture
9. Use cases (optional)
10. Integration model
11. Why Kamino vs. build-your-own (optional)
12. FAQ (optional)
13. Talk to our team CTA

Rationale: architecture and allocations first because the product is the architecture. Flows (deposit / withdrawal / value accrual) follow to make mechanics concrete. Revenue share is the commercial crescendo. Compliance closes the "is this safe for us to offer?" question. Integration model ties to BuildKit. CTA.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **No named IY counterparties** (principle 10). Even on the IY API page. The Cayman SPV is the public-facing counterparty structure. Specific custodians and lending operations remain structural descriptors. Liechtenstein FMA is nameable for the IY-adjacent layer.
- **"Swiss-regulated lender" for the BTC allocation counterparty.** The IY API deck uses this framing; it's acceptable because it's a different layer from IY itself (IY uses Liechtenstein FMA lending operation; IY API's BTC allocation uses a Swiss-regulated lender). Confirm with Dawid which framing is current for the page's launch version.
- **Lead with institutional vocabulary** (principle 2). Yield, allocation, liquidity, buffer, compliance.
- **"DeFi" sparingly** (principle 4). The frame is "onchain yield embed," not "DeFi yield API."
- **No forward-risk claims** (principle 7). 6.33% is blended projected APY; not guaranteed. 2.5% user cap is the example; real value is configurable.
- **Partnership-focused partner copy** (principle 11). Figure for PRIME; Swiss-regulated lender for BTC; fintech partners (Phantom, Altitude, etc.) for integration proof.
- **Aspirational but earned** (principle 6). The 20/40/40 architecture is real; the 6.33% blended yield is a projection based on current allocation yields. Present honestly.
- **American spelling** (principle 15).

## 8. Linking behavior — inbound and outbound

**Inbound:**

- `/fintechs` IY API section → `/institutional-yield-api` (primary)
- `/buildkit` IY API cross-reference → `/institutional-yield-api`
- Products mega-menu (Platform > Institutional Yield API) → `/institutional-yield-api`
- Footer Platform column → `/institutional-yield-api`
- External: fintech BD outreach, conference follow-ups

**Outbound:**

- Talk to our team CTA → `integrations@kamino-foundation.com` or equivalent (confirm)
- BuildKit cross-reference → `/buildkit`
- PRIME allocation context → `/issuers`, `/stories/prime` if exists
- BTC-backed credit allocation context → `/institutional-yield` (related but not identical product)
- Compliance architecture depth → `/institutional-yield`, `/security`
- Integration model → `/buildkit`, `/docs`
- Privy (for embedded wallets) → external Privy docs
- FAQ answers → `/docs`

## 9. Visual / design direction

Diagram-heavy product-sheet register. The page's visual identity is the five IY API deck diagrams reproduced in Kamino brand design system.

- **Vault architecture diagram (20/40/40)** — hero visual of the page.
- **Allocation cards** — three cards (Buffer, PRIME, BTC) with yield + time-to-liquidity + underlying source.
- **Flow diagrams** — deposit, withdrawal (normal), withdrawal (overdrawn), value accrual.
- **Commercial model visualization** — user-cap vs. above-cap yield split visualization.
- **Architecture positioning** — where IY API sits in the Kamino stack (BuildKit platform → IY API → vault → allocations).

**Visual dependencies:**

- 20/40/40 vault architecture diagram (reproduce deck page 3)
- Deposit flow diagram (reproduce deck page 4)
- Withdrawal flow diagrams (reproduce deck pages 5 & 6)
- Value accrual diagram (reproduce deck page 7)
- Commercial model / revenue share visualization (new)
- Architecture positioning diagram (may adapt from general deck)

All diagrams must be brand-treated in Kamino design system — the deck versions are the content, not the final design.

**Design-system components likely in play:**

- Structural diagram component (multiple)
- Allocation card component (three cards)
- Flow / sequence diagram
- Primary + Secondary CTA
- FAQ accordion
- Parameter table (for allocations)

## 10. Available research artifacts for depth

Read in this order:

1. **Institutional Yield API deck — THE definitive source** — `/Users/dawid/Github/Product/context/decks/Institutional Yield API - Product Flows.pdf`. Pages 3–7 contain all five load-bearing diagrams.
2. **Master spec §3.4 (Fintechs audience), §9.7 (/institutional-yield-api preliminary structure)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
3. **Kamino deep comprehension §4.10 (Institutional Yield API in next-gen products), §11.4 (Fintechs detail)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
4. **Institutional Yield Final Announcement** — `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md` — the authoritative IY language, which anchors the BTC-backed credit allocation's structural claims.
5. **BuildKit spec (sibling)** — `/Users/dawid/Github/Product/landing page rebuild/page-specs/products/buildkit.md` — for cross-page consistency.
6. **Fintechs audience spec (sibling)** — `/Users/dawid/Github/Product/landing page rebuild/page-specs/audiences/fintechs.md` — for cross-page consistency.
7. **Partner synthesis — Figure, Privy, Altitude** — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`

## 11. Open questions and decisions deferred to the page agent

- **Yield numbers — currency.** 6.33% blended, 3.64% buffer APR, ~8% PRIME, 7% BTC — these are deck numbers. Confirm current numbers at page-ship time.
- **User-cap example.** 2.5% is the deck example. Confirm actual example to publish.
- **Swiss-regulated lender vs. Liechtenstein FMA lending operation.** The IY API deck names the BTC allocation's lender as "Swiss-regulated." The IY product page names its lender as Liechtenstein-FMA-supervised. These may be different regulated entities (IY API's BTC allocation is not necessarily the same vault as kiUSDC). Confirm with Dawid — is the IY API's BTC allocation the same counterparty as IY's kiUSDC vault, or a distinct Swiss-regulated lender? The language rule applies: never name the specific entity. But the jurisdiction (Swiss vs. Liechtenstein) should be consistent with the actual counterparty.
- **Revenue share split between Kamino and fintech.** Confirm what's publishable. Default: "negotiated per integration."
- **USDx generic vs. USDC specific.** Deck uses "USDx" as generic placeholder. Confirm whether the launch product supports multiple stablecoins or USDC-only.
- **FIFO withdrawal queue status.** IY's FIFO queue launches shortly after the IY product launch; does it apply to IY API's allocations as well? Confirm.
- **Mandate permanence.** IY's mandate cannot change. IY API's 20/40/40 architecture — is it mandate-locked or configurable? If configurable, how often / by whom? Confirm with product.
- **Integration examples.** Altitude is first announced BuildKit partner; is Altitude using IY API specifically? Are there other IY API-specific integrations to surface?
- **IY API variants.** Multi-stablecoin? Conservative / aggressive? Default: keep v1 clear.
- **Cross-reference to IY product page.** How explicit should the cross-reference be? Users may conflate — clarify that IY and IY API are different products sharing structural DNA.
- **Hero copy.** Draft 2–3 candidates.
- **Contact routing.** Same `integrations@kamino-foundation.com` question as `/buildkit` and `/fintechs`. Confirm.
- **Privy featuring.** Research flags possibly dormant integration. Confirm.
- **FAQ content.** Integrator-specific. Coordinate with BD.
