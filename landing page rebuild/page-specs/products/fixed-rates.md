# Handoff Spec: Fixed Rates (`/fixed-rates`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page exists because DeFi has been floating-rate only, and institutions cannot budget against floating rates. Fixed Rates & Fixed Terms is the credit primitive that solves it — predictable borrow cost for a defined term, with mechanics specifically engineered to work *without* forcing capital to sit idle in low-utilization fixed pools (the cold-start problem that kept DeFi floating-only for years). The page's job: establish Fixed Rates as the foundational credit primitive institutions need, explain the rate-duration grid and Conditional Liquidity mechanism clearly enough that a treasurer can underwrite it, anchor credibility with the FalconX pilot, and route to sales.

The master spec also specifies that this page includes **Borrow Orders** — mechanically the same product surfaced differently. Borrow Orders is "limit orders, but for lending": borrowers post desired loan terms onchain; matching lenders (or curator-signaled liquidity) fill partial or full. Treat Borrow Orders as a sub-surface of Fixed Rates on this page.

The single most important takeaway: **Fixed rates are the single most important piece of credit infrastructure for institutional and RWA growth onchain, and Kamino built them without the cold-start problem.**

Funnel position: `/institutions` Fixed Rates section → `/fixed-rates` → `Talk to our team`. Sales-led. FalconX is the pilot borrower; other institutional borrowers TBD.

## 2. Primary audience

- **Crypto-native funds and market makers** — need predictable borrow cost for basis trades, funding-rate arbitrage, perp-basis strategies. FalconX-class institutional prime brokers and their clients are the first wave.
- **Treasurers at crypto treasury companies** — budgeting for borrow costs; can't run a treasury model on floating rates.
- **Curators on the vault side** — curators looking for conditional allocation into fixed-rate reserves as a way to earn spread on their deposits. Curators read this page as a product-design story too.
- **Institutional liquidity providers** — counter-party to the fixed-rate borrower, supplying capital at a defined rate/term. The Conditional Liquidity mechanism is what makes their participation capital-efficient.
- **Secondary: developer / infrastructure reader** — curious about the rate-duration grid as a technical architecture. The Fixed Rates technical spec documents this well and some of that framing can surface here.

What this page is NOT for: retail users looking for fixed-yield products (they have webapp Earn; fixed-rate *products* for retail deposit are a separate future offering). Fixed Rates as specified here is a *borrow* primitive.

## 3. Strategic context

This page exists because:

1. **Fixed rates unlock institutional credit onchain.** Every institutional credit desk on Wall Street budgets against fixed cost and duration. Floating-rate DeFi has been fundamentally incompatible with institutional budgeting. Building fixed rates correctly is the single most important credit-infrastructure step for Kamino's 2026 thesis.

2. **The rate-duration grid is the architecture innovation.** Multiple reserves per debt token, each representing a rate + term cell (e.g., USDC 3-month 4.5%, USDC 6-month 5.2%). Borrowers pick the cell that matches their needs. This is a technical elegance that Aave and Morpho don't have.

3. **Conditional Liquidity is the mechanism that prevents cold-start.** Classic DeFi problem: if you create a fixed-rate pool, it needs liquidity sitting in it waiting for borrowers — but idle liquidity is low-yield, so curators / LPs won't fund it. Conditional Liquidity solves this: curators *signal* allocation availability; capital moves atomically when a borrower places a matching order. Fixed-rate lending works without forcing capital idle. This is Kamino-specific architecture.

4. **FalconX is the marquee pilot.** FalconX — one of the largest institutional crypto prime brokers — is the design partner and pilot borrower. Their integration validates the institutional use case publicly.

5. **Borrow Orders extends the same primitive to variable-rate.** The variable-rate version of the order-book mechanism ships first in the PRIME market. Together, Fixed Rates + Borrow Orders give Kamino a full credit-order-book for both variable and fixed rates.

The opportunity this page addresses: onchain credit has been a money market. This page positions Kamino as the venue for a full *credit order book* — variable and fixed, short and long, conditional liquidity throughout. That's a structural step up from "another DeFi lender."

The tension: the product mechanics are sophisticated (rate-duration grid, Conditional Liquidity, Withdrawal Queue, Rollover) and the institutional reader wants depth, but it's easy to lose a first-time reader in the mechanism. The page must layer the explanation: simple intuition first, mechanics second, edge cases third.

## 4. Starting context — facts, figures, quotes, proof points

**Product mechanics (from Fixed Rates Order Book spec):**

- **Rate-duration grid**: multiple reserves per debt token. Each reserve is a (rate, term) cell — e.g., USDC 3-month at 4.5%; USDC 6-month at 5.2%. A single market hosts the grid.
- **Borrower flow**: Borrower selects a grid cell that matches their need (rate + term). Places an order. Order fills from available liquidity (conditional or direct).
- **Conditional Liquidity mechanism**: Curators signal which grid cells their vaults can fund. When a borrower places a matching order, capital moves atomically from the curator's vault into the fixed-rate reserve. No idle capital sitting in low-utilization fixed pools.
- **Borrow Orders (variable-rate order-book)**: Same order-book concept, variable-rate version. Borrowers post orders with desired terms; partial fills allowed; no interest until filled; auto-reduction if collateral falls. Ships first in the PRIME market. Framed as "limit orders, but for lending."
- **Withdrawal Queue**: FIFO queue for depositors wanting to exit ahead of natural term expiry. Coordinates with term-based liquidity refresh.
- **Rollover Mechanism**: At term expiry, facility can be rolled forward at prevailing grid rate, unwound, or re-negotiated.

See `/Users/dawid/Github/Product/specs/fixed-rates-order-book.md` for the full technical spec.

**Borrow Orders — supplementary mechanics (from borrow-orders-prd.md):**

- Standing order book for credit
- Borrowers post desired loan terms onchain
- Partial fills supported
- No interest accrues until fills occur
- Auto-reduction if collateral drops below threshold
- Marketing framing: *"Limit orders, but for lending"*
- Variable-rate ships first; ultimately enables lenders to fill borrower orders directly — a full credit order book

**FalconX pilot:**

- FalconX is the pilot borrower for Fixed Rates.
- Public framing from FalconX's X announcement, Dec 2025:
  > *"FalconX and @kamino Finance are expanding institutional on-chain credit on Solana, integrating fixed-rate and flexible lending into FalconX's credit stack. Institutions can now: ✓ Access, fixed-rate on-chain credit ✓ Improve capital efficiency with non-custodial infrastructure."*
- FalconX identity context: one of the largest institutional crypto prime brokers. Serves funds, corporates, and exchanges.
- Integration: fixed-rate and flexible Kamino credit lines integrated into FalconX's institutional lending stack. Gives FalconX's client base access to onchain, non-custodial credit with duration matching.
- See `research/partners-04-synthesis.md` FalconX entry for the authoritative partnership framing.

**Curator-side framing (for the LP reader):**

- Curators can allocate vault capital to Fixed Rate reserves via Conditional Liquidity
- Provides the curator with a predictable-rate yield source without committing to idle capital
- Steakhouse was an early participant in Fixed Rates discussions (internal)
- First Loss Capital Farm pattern from broader V2 vault infrastructure applies — curator can put manager capital to absorb vault losses before depositor losses

**Internal positioning framing:**

From the Fixed Rates spec and `research/02-kamino-deep-comprehension.md §4.10`:

> *"Fixed rates are the single most important piece of credit infrastructure for institutional and RWA growth in DeFi."*

This framing — fixed rates as infrastructure for the next wave of growth — is the opinion the page should carry.

**Proof points:**

- FalconX pilot partnership, publicly announced December 2025
- Kamino's broader track record: $19B+ originated, zero security incidents, 20 audits, 4 formal verifications
- Scope oracle for rate-and-collateral pricing — in-house, triple-audited, TWAP/EWMA manipulation-resistant
- Conditional Liquidity is Kamino-specific architecture (not available on Aave / Morpho / Compound for the same-protocol case)

**Competitive implicit framing (no names):**

- Against floating-rate DeFi: fixed rates are the institutional primitive; floating is not.
- Against idle-capital fixed pools on other protocols: Conditional Liquidity prevents this.
- Against OTC bilateral fixed-rate deals: programmatic, onchain, 24/7.
- Against traditional interest-rate swaps layered on floating: native fixed-rate origination onchain.

## 5. Voice / tone / register

Institutional register with engineering-credible density. This page has the highest technical-mechanics density of the product pages. Allow the mechanism to show — don't over-abstract.

**Phrases to use:**

- *Fixed rate, fixed term, rate-duration grid, reserve, Conditional Liquidity, origination, term expiry, rollover, Withdrawal Queue, partial fill, standing order, credit order book*
- *"Rate set at origination," "term defined at origination," "allocation signaled by curator"*
- *"Institutional budgeting," "predictable borrow cost," "duration matching," "capital efficiency"*

**Phrases to avoid:**

- "Revolutionary" for the order-book framing — describe what it IS
- "The first fixed rates in DeFi" — overreach; ExponentFinance and others have shipped variants. Kamino is first at this specific architecture (Conditional Liquidity + rate-duration grid unified with a money market) on Solana.
- "Locked rates" — suggests a user can't exit. Use "rates set at origination per loan term."
- "Fixed yield" from the depositor / LP side — can't be guaranteed unless the reserve structure enforces it (it largely does via Conditional Liquidity, but the language is legally delicate). Use "rate set per allocation."

**Tone specificity:**

Dense but structured. Two levels of explanation: (1) intuition — what does a treasurer get — and (2) mechanism — how the rate-duration grid + Conditional Liquidity actually works. Reader self-selects for depth. Use diagrams to compress mechanism.

## 6. Required and suggested sections

### Required sections

- **Hero** — one-line positioning. "Predictable borrowing costs for a defined term. Onchain." or similar. Dual CTA: `Talk to our team` (primary) + `Read the technical docs` (if docs exist).
- **The intuition** — a tight section explaining what Fixed Rates gives a treasurer / trader: (a) known borrow cost, (b) known duration, (c) no exposure to floating-rate volatility. 2–3 paragraphs at most.
- **Rate-duration grid explainer** — the core architecture. A visual grid (rate rows × term columns; cells as reserves). How a borrower picks a cell and why that's a better UX than a floating pool. Load-bearing diagram.
- **Conditional Liquidity mechanism** — the capital-efficiency innovation. Explain how curators signal allocation availability and how capital moves atomically on a match. Diagram likely.
- **Borrow Orders (variable-rate)** — the order-book surface that ships first in PRIME. "Limit orders, but for lending." Mechanics: post order, partial fills, no interest until fills, auto-reduction on collateral drop. Position this as related primitive, not a separate product.
- **Withdrawal Queue + Rollover Mechanism** — exit and renewal paths. FIFO queue, rolling term expiry, rollover at grid rate.
- **FalconX pilot section** — the marquee credibility moment. Quote from FalconX's Dec 2025 announcement. Framed as pilot partnership that validates institutional use.
- **Curator / LP side** — how curators and LPs participate in Fixed Rates via Conditional Liquidity. Routes the page's secondary reader toward their path.
- **Sales contact CTA** — `Talk to our team`.

### Suggested sections

- **Use cases** — three or four concrete institutional scenarios where Fixed Rates is the right product: (a) a fund taking a 3-month basis position and needing to lock borrow cost; (b) a treasury company budgeting against a 6-month obligation; (c) a prime broker like FalconX repackaging Kamino fixed-rate credit to their clients; (d) a curator earning spread via Conditional Liquidity. Helps readers self-locate.
- **Architecture detail for engineering readers** — a deeper technical section (reserves, interest accrual, origination, matching logic). Can link out to `/docs` if this page gets too dense.
- **Comparison to floating-rate lending** — a short side-by-side noting the differences in borrower experience. Frame positively ("Fixed Rates is for..."), avoid negation against floating-rate products.
- **Related products** — explicit cross-links. Off-Chain Collateral (tri-party custody + fixed rate is a natural combination); IY (the LP side of institutional credit on Kamino).
- **FAQ** — institutional-specific questions. What happens if a borrower wants to exit early? What's the penalty? How is the rate set per cell? Can rates change across grid cells in real time?

### Section order

Recommended top-to-bottom:

1. Hero + dual CTA
2. The intuition (treasurer-level explanation)
3. Rate-duration grid explainer
4. Conditional Liquidity mechanism
5. Borrow Orders (variable-rate sibling)
6. Withdrawal Queue + Rollover Mechanism
7. Use cases (optional)
8. FalconX pilot section
9. Curator / LP side
10. Comparison to floating (optional)
11. Related products
12. FAQ (optional)
13. Sales contact CTA

Rationale: intuition before mechanism so the reader understands *why* before diving into *how*. Rate-duration grid + Conditional Liquidity are the architecture anchors. Borrow Orders rides in their slipstream. FalconX case after the mechanics — by then the reader appreciates what FalconX is actually using.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **Lead with institutional vocabulary.** Credit, duration, origination, facility, reserve, rate.
- **No "V2"** (principle 8) — do not reference the architectural version; sophistication is assumed.
- **"Onchain" is a qualifier** (principle 3) — "onchain credit," "onchain order book," "onchain borrow." Never as a standalone positioning frame.
- **No forward-risk claims** (principle 7) — do not promise rates will always clear, or that fills will always match. The mechanism enables these; the product doesn't guarantee outcomes.
- **Opinionated voice reads as credibility** (principle 13). A confident line — *"Fixed rates are the foundational credit primitive institutions need. We engineered them without the cold-start problem."* — reads as expertise.
- **Real sentences, not fragment-stacks** (principle 14).
- **Partnership-focused partner copy** (principle 11) — FalconX is a pilot partner; the section describes the partnership and what it enables, not FalconX's broader business.
- **Aspirational but earned** (principle 6) — "first" claims are fine where supportable; "unprecedented" is empty without proof.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- `/institutions` Fixed Rates section → `/fixed-rates`
- Products mega-menu (Enterprise > Fixed Rates) → `/fixed-rates`
- Footer Enterprise column → `/fixed-rates`
- FalconX co-marketing → `/fixed-rates`
- Homepage Partners section (FalconX hover card) → `/fixed-rates`

**Outbound:**

- Talk-to-team CTA → `institutional@kamino-foundation.com` or form
- Borrow Orders technical depth → `/docs` / `/specs/borrow-orders-prd.md` (if docs sub-site mirrors)
- FalconX section → FalconX partnership content (external / press) or `/stories` if a story exists
- Related products: `/off-chain-collateral`, `/institutional-yield`, `/vaults` (for curator context)
- Curator / LP side → `/vaults`
- FAQ answers → `/docs`

## 9. Visual / design direction

Institutional product-sheet register with a high diagram density.

- **Rate-duration grid visual** — must be clear. A matrix with rows (rates) × columns (terms) × cells (reserves). Interactive if possible (hover for depth).
- **Conditional Liquidity flow diagram** — curator → vault → signal → match event → atomic allocation → fixed-rate reserve. Sequence or flow diagram.
- **Order-book visual for Borrow Orders** — classic limit-order-book schema adapted for credit. Bid-side / ask-side metaphor, but lending-specific.
- **Withdrawal Queue / Rollover timeline** — visualize the term lifecycle.
- **Color treatment** — neutral, institutional, with accent colors marking filled / open / matched states on the grid.

**Visual dependencies:**

- Rate-duration grid interactive (new)
- Conditional Liquidity sequence diagram (new)
- Order-book visual (new)
- Timeline / lifecycle visualization (new)
- FalconX logo + partnership mark

**Design-system components likely in play:**

- Structural / flow diagram component
- Grid / matrix component (custom)
- Primary + Secondary CTA
- FAQ accordion
- Quote component (FalconX quote pull)

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.2 (Institutions audience), §6.6 (Partners — FalconX card), §9.3 (/fixed-rates preliminary structure)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Fixed Rates order-book spec** — `/Users/dawid/Github/Product/specs/fixed-rates-order-book.md` — definitive technical mechanics.
3. **Borrow Orders PRD** — `/Users/dawid/Github/Product/specs/borrow-orders-prd.md` — variable-rate order-book mechanics.
4. **Borrow Orders marketing brief** — `/Users/dawid/Github/Product/specs/borrow-orders-marketing-brief.md` — positioning and voice reference.
5. **Kamino deep comprehension §4.1 (Lend), §4.10 (Fixed Rates in next-gen products)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
6. **Partner synthesis — FalconX entry** — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`

## 11. Open questions and decisions deferred to the page agent

- **Fixed Rates live status.** Master spec treats as upcoming / pilot. If live in production, adjust copy accordingly. FalconX integration timing — confirm.
- **Borrow Orders live status.** Variable-rate first in PRIME market — is it live? Confirm.
- **How much technical depth to include on-page vs. /docs.** The rate-duration grid + Conditional Liquidity are intricate. Cut-line: enough for an institutional reader to underwrite; detail beyond that goes to `/docs`.
- **Specific rate / term examples.** Using concrete numbers (e.g., "USDC 3-month at 4.5%") makes the grid concrete but may date. Either use representative examples with a caveat, or keep the grid abstract.
- **Curator-side CTA.** Where does a curator sign up to provide Conditional Liquidity? Cross-link to `/vaults` or a dedicated sub-page? Confirm.
- **Borrower eligibility.** Is Fixed Rates borrow institutional-only, or also retail via the in-app borrow surface at lower minimum sizes? Confirm.
- **FAQ content.** Institutional-specific + curator-specific. Coordinate with BD.
- **"First fixed rates in DeFi" claim.** Do not make unless supportable. Exponent and others have shipped variants. Safer: "first integrated fixed-rate credit order book with Conditional Liquidity on Solana" or similar.
- **Relationship to existing retail in-webapp Borrow.** The retail Borrow surface is variable-rate. How does Fixed Rates appear in-webapp for retail? Is it separate? Confirm with product.
- **Competitive implicit frame.** Aave and Morpho don't have this architecture; Exponent approaches it differently. Decide depth of framing with Dawid.
- **Representative use-case narratives.** Get BD input on real institutional scenarios that are OK to publish.
- **Language around "locked" / "fixed" vs. "set at origination."** The master spec principle 12 notes "rates set at origination per loan term." Use consistently.
