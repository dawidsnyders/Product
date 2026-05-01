# Handoff Spec: Off-Chain Collateral (`/off-chain-collateral`)

> Handoff brief for the agent building this page. Read `landing-website.md` (site master spec) first, then this document for page-specific direction. Reference the research files listed at the end for substantive depth.

## 1. Page purpose

This page exists for a specific reader: an institutional borrower — fund, treasury company, market maker, prime broker — who holds digital assets at a qualified custodian and needs stablecoin liquidity without selling, without moving assets to a smart contract, and without the brand and legal risk of unregulated crypto-lending venues. The page's job is to establish that Kamino's Off-Chain Collateral product is the *only* venue on Solana that preserves qualified custody while enabling onchain borrowing, explain the tri-party mechanics clearly, anchor the credibility with the Solana Company / Anchorage / Chainlink partnership stack, and route the reader to `institutional@kamino-foundation.com`.

The single most important takeaway: **Your collateral stays at your custodian. Kamino lends against it onchain.** Everything on this page elaborates that one sentence.

Funnel position: `/institutions` Off-Chain Collateral section → `/off-chain-collateral` → `Talk to our team`. Sales-led, institutional register. The page is not designed for self-serve close; the conversation with Kamino BD is the conversion.

## 2. Primary audience

- **Crypto treasury companies** — publicly listed vehicles holding SOL/BTC/ETH on balance sheet. Solana Company (Nasdaq: HSDT) is the prototype and first borrower. MicroStrategy's SOL-class imitators are the category. These readers need to unlock treasury liquidity without triggering a tax event and without custody risk.
- **Crypto-native funds** — Pantera, Summer Capital (co-managers of Solana Company), Multicoin, Greenfield, and adjacent. They have assets at qualified custodians; they need working capital for operations, basis trades, or opportunistic allocation without selling positions.
- **Market makers and prime brokers** — Wintermute, XBTO, Hidden Road, Galaxy, FalconX. They need credit facilities that match their existing operational topology (custodied assets at regulated custodians). Some are also Haruko customers, which gives them context on the reporting stack.
- **Regulated corporate treasuries** — less crypto-native firms holding digital assets under regulatory supervision needing onchain liquidity. More future than current but the product is positioned for this.

The reader is senior — head of treasury, CFO, fund CIO, trading desk principal. They read product sheets. They evaluate counterparty risk. They know what "tri-party" means.

## 3. Strategic context

This page exists because:

1. **Kamino built the first onchain institutional borrow product that doesn't require collateral to move to a smart contract.** That is a real structural first. Every comparable onchain borrow product has required depositing collateral into a smart contract — which creates custody risk, regulatory complexity, and brand risk for regulated institutional borrowers. OCC removes all three via tri-party custody.

2. **Solana Company / Anchorage is the marquee proof point.** A publicly listed vehicle borrowing ~$201M against natively-staked SOL held at Anchorage is the single strongest "institutional onchain borrow" story in DeFi history. This page has to extract full value from that partnership credibly.

3. **The Chainlink Proof of Reserves integration is non-obvious but load-bearing.** Chainlink PoR attests that the custodied collateral actually exists at the custodian, in the claimed amount, continuously. This is the link that makes "your collateral stays at your custodian, we lend against it onchain" actually verifiable onchain. Without Chainlink PoR, the structure is opaque.

4. **This product expands Kamino's institutional product surface beyond yield.** IY is for LPs. OCC is for borrowers. Together they complete the onchain institutional credit loop — and position Kamino as the full-stack venue institutions need.

The opportunity this page uniquely addresses: institutional borrowers today choose between (a) selling to get USD (tax event, market impact, opportunity cost), (b) CeFi lending products like the Celsius / BlockFi / Genesis class (brand risk, unregulated counterparty risk), or (c) OTC bilateral with a prime broker (manual, expensive, relationship-limited). OCC is the fourth path: onchain, regulated-custody-preserving, programmatic, with real-time Chainlink PoR of the collateral.

The tension: OCC is a "B2B" product where the borrower is regulated / institutional, but the marketing has to live on a public page that might be read by anyone. The page has to be precise enough for an institutional reader's due-diligence file, accessible enough that a first-time institutional reader understands the architecture within two minutes.

## 4. Starting context — facts, figures, quotes, proof points

**Product mechanics (authoritative from master spec and research):**

- **Borrower deposits collateral** at Anchorage Digital (or other qualified custodian as roster expands). Collateral is *natively* held — not wrapped, not bridged, not synthetic (unless using the March 2026 "mirror tokens" extension — see below).
- **Tri-party Account Control Agreement** governs: borrower, lending-SPV (structured by Kamino), custodian. Each party has defined rights and responsibilities. First-priority security interest to the Kamino SPV (Secured Party).
- **Chainlink Proof of Reserves** continuously verifies the custodied collateral onchain — the "trust link" between off-chain collateral and the onchain borrow market.
- **Anchorage's Atlas system** orchestrates LTV monitoring, margin calls, and rules-based liquidations 24/7 against natively-custodied assets.
- **Borrower borrows stablecoins onchain** from a purpose-built isolated Kamino market. Uses the stablecoins on-chain or off-chain as they choose.
- **LTV parameters:** 65% maximum borrow LTV. 70% liquidation LTV.
- **Terms:** Fixed rate, 3-month term. Rollover option at term.
- **Collateral composition:** SOL / staked SOL / BTC at launch. Expanding over time.
- **Mirror tokens extension (March 2026):** Allows institutions to borrow against a synthetic representation of custodied digital assets for cases where the native custody path isn't available. This is an extension of the same tri-party structure.

**The Solana Company partnership (marquee):**

- **Solana Company (Nasdaq: HSDT)** — publicly listed vehicle, holds SOL on balance sheet, co-managed by Pantera Capital and Summer Capital.
- First institutional borrower on Kamino via OCC.
- Posts ~$201M of natively-staked SOL at Anchorage as collateral.
- The borrow is **upcoming** (has not executed as of April 2026) — language on the page must respect this. "Will execute the first institutional borrow" / "the inaugural borrower" / similar forward phrasing.
- Per master spec partner card: *"Managed by Summer Capital and Pantera, Solana Company (Nasdaq: HSDT) will execute the first institutional borrow on Kamino via the Off-Chain Collateral product."*

**The Anchorage partnership:**

- **Anchorage Digital Bank N.A.** — OCC-chartered federal digital-asset bank. The only crypto-native institution in the US holding a national trust charter from the Office of the Comptroller of the Currency.
- First qualified custodian for Kamino's OCC product.
- Atlas system provides LTV orchestration, margin management, rules-based liquidations.
- From Anchorage's perspective on the partnership (via Cheryl Chan quote):
  > *"This collaboration unlocks meaningful institutional demand to borrow against assets held in qualified custody. By partnering with Anchorage Digital, Kamino enables institutions to access on-chain liquidity and yield on Solana while continuing to custody assets within their existing regulated framework."*

**The Chainlink partnership (specific to OCC):**

- Chainlink Proof of Reserves continuously verifies custodied collateral onchain.
- This is the link that makes the tri-party arrangement verifiable by anyone onchain.
- Chainlink is also Kamino's broader oracle partner (Data Streams pricing, CCIP for PRIME, xStocks custom oracle). OCC specifically uses Chainlink PoR.

**Voice anchors:**

From the Off-Chain Collateral memo (internal — exact language):

> *"Collateral is held at Anchorage Digital Bank N.A. under a tri-party Account Control Agreement, with Anchorage's Atlas system orchestrating LTV, margin movements and rules-based liquidations 24/7."*

From Cheryl Chan's public Anchorage partnership quote (already cited).

From Mark Hull's general institutional framing (already cited in `/institutions` brief).

**Competitive implicit framing (no names):**

- Against CeFi lending (Celsius / BlockFi / Genesis class): *"regulated-custody-preserving, onchain, programmatic."* Do not name Celsius etc. Describe what OCC IS.
- Against depositing collateral into a smart contract: *"custody stays with your qualified custodian. No smart-contract risk to collateral."*
- Against OTC bilateral borrow: *"programmatic 24/7 onchain access."*

**Proof points (OCC-specific):**

- First product on Solana preserving qualified custody while enabling onchain borrowing
- Tri-party Account Control Agreement — standard in TradFi; new onchain
- Chainlink Proof of Reserves — continuous onchain verification of off-chain collateral
- Anchorage's Atlas system — 24/7 LTV and margin orchestration
- Solana Company partnership — public, marquee borrower
- Backed by $19B+ originated, zero security incidents to date, 20 audits on the Kamino protocol layer

## 5. Voice / tone / register

Institutional product-sheet register. Same register as `/institutional-yield` but with the borrower lens instead of the depositor lens.

**Phrases to use:**

- *Collateral, custody, tri-party, Account Control Agreement, LTV, origination, margin call, rollover, liquidation, orchestrate, programmatic, Proof of Reserves, qualified custodian, first-priority security interest*
- *"Your collateral stays at your custodian,"* *"borrow onchain against custodied assets,"* *"preserves qualified custody"*

**Phrases to avoid:**

- "Trustless" — OCC is explicitly trust-minimized, not trustless. Real counterparties are involved.
- "DeFi loan" — this is institutional credit that happens to settle onchain.
- "Flexible borrow" as a standalone adjective — say what's flexible (LTV, term, rollover).
- Vogue DeFi language
- Any naming of borrower competitors or CeFi alternatives
- "Best-in-class," "unprecedented" as empty modifiers. Use specific structural descriptors.

**Tone specificity:**

Precise, institutional, calm. The page can be reasonably dense because the reader is underwriting. Structure matters more than prose length. The reader should be able to scan the tri-party mechanics in 30 seconds and drill down if they want detail.

## 6. Required and suggested sections

### Required sections

- **Hero** — states the positioning claim cleanly. Likely: "Borrow onchain against assets custodied at Anchorage Digital" or similar. Dual CTA: `Talk to our team` (primary) + `View product structure` (scroll anchor / secondary).
- **How it works / tri-party flow** — load-bearing diagram. Borrower → Custodian (native collateral) → Kamino SPV (Secured Party) → Borrower's isolated Kamino market (borrow). Chainlink PoR annotation where the custody-to-onchain link is made. This diagram is the product.
- **Product structure detail** — tri-party Account Control Agreement explained, first-priority security interest, rehypothecation posture, title preservation. Mirror tokens extension as a sub-topic.
- **Lending parameters** — 65% max borrow LTV, 70% liquidation LTV, fixed rate, 3-month term, rollover option. Collateral types supported (SOL / staked SOL / BTC). Table format.
- **Anchorage Atlas integration** — Atlas's role in 24/7 LTV and margin orchestration. Partnership section with Anchorage identity context (federally chartered, OCC).
- **Chainlink Proof of Reserves** — how PoR links custodied collateral to the onchain market continuously.
- **Solana Company marquee case** — the inaugural borrower. Pantera + Summer Capital as co-managers. Publicly listed on Nasdaq: HSDT. ~$201M natively-staked SOL as collateral. Frame as upcoming, not executed.
- **Eligibility criteria** — what kinds of institutions can access OCC. Expected answer: regulated entities, KYB'd institutional counterparties, minimum borrow size. Coordinate with BD on exact criteria.
- **Sales contact CTA** — prominent. `Talk to our team` → `institutional@kamino-foundation.com` or form.

### Suggested sections

- **Timeline / term mechanics** — how a typical OCC facility works across its 3-month lifecycle. Origination → margin monitoring → rollover / repayment. A sequence diagram could serve here.
- **Why custody-preserving matters** — a tight subsection explaining the regulatory, tax, and operational reasons institutions care about keeping collateral at their custodian. This is the customer-empathy beat that establishes "we built this for you specifically."
- **The Anchorage credibility block** — a focused subsection on Anchorage's OCC charter, federal regulation, and role as the first qualified custodian on the product. Expands when more custodians join.
- **Partnership proof strip** — Anchorage, Chainlink, Pantera, Summer Capital, Solana Company, FalconX (for broader institutional context). Partnership-focused copy.
- **FAQ** — specific to the institutional borrower lens. What happens if custodian fails? If Kamino protocol fails? If LTV is breached? What's the liquidation path? How is the fixed rate set? What's the rollover decision process?

### Section order

Recommended top-to-bottom:

1. Hero + dual CTA
2. How it works — tri-party flow diagram
3. Product structure detail
4. Lending parameters
5. Anchorage Atlas integration
6. Chainlink Proof of Reserves
7. Solana Company marquee case
8. Why custody-preserving matters (optional)
9. Eligibility criteria
10. Timeline / term mechanics (optional)
11. Partnership proof strip
12. FAQ (optional)
13. Sales contact CTA

Rationale: flow diagram near the top — institutional readers want the architecture before the parameters. Marquee case after mechanics to maximize credibility lift (mechanics set up the "is this real?" question; Solana Company answers it). Eligibility near the bottom to signal that the conversation begins after the product is understood.

## 7. Copy framing principles — application to this page

See master spec §2 for all fifteen. The ones that bite hardest:

- **Lead with institutional vocabulary.** Every lead sentence uses borrow, collateral, custody, tri-party, or similar.
- **No framing by negation.** Describe what OCC IS. Do not define against Celsius or CeFi lenders. Describe what it IS: the only onchain borrow product that preserves qualified custody.
- **Partnership-focused partner copy.** Anchorage, Chainlink, Solana Company — describe how Kamino works with them. Anchorage: *qualified custodian for the product, Atlas system orchestrates margin*. Chainlink: *Proof of Reserves verifies custodied collateral onchain*. Solana Company: *first borrower on the product, executing against ~$201M natively-staked SOL*.
- **No named IY counterparties** — OCC is a different product from IY but the language discipline still applies: if IY is mentioned as adjacent, use structural descriptors.
- **No forward-risk claims.** Do not say "no defaults" about OCC as a forward guarantee. The product is brand new; there is no track record yet. Do not imply one.
- **No "V2" publicly.**
- **"Regulated custody" vs. "qualified custody"** — both are defensible. "Qualified custody" is the product-sheet term; "regulated custody" is the narrative term. Use "qualified custody" when speaking about the custodian, "regulated" when speaking about the broader oversight context.
- **Solana Company has not executed the borrow yet.** Language must respect this. "First to execute," "inaugural borrower," "upcoming borrow" — acceptable framings. Never imply the borrow has happened.

## 8. Linking behavior — inbound and outbound

**Inbound:**

- `/institutions` Off-Chain Collateral section → `/off-chain-collateral` (primary)
- Products mega-menu (Enterprise > Off-Chain Collateral) → `/off-chain-collateral`
- Footer Enterprise column → `/off-chain-collateral`
- Anchorage partnership co-marketing → `/off-chain-collateral`
- Homepage Partners section (Anchorage hover card) → `/off-chain-collateral` (if deep-link to partner-related pages is implemented per master spec §6.6)
- External: institutional outreach, press coverage of Solana Company, industry conferences

**Outbound:**

- Talk-to-team CTA → `institutional@kamino-foundation.com` or sales form
- Chainlink PoR section → Chainlink's public PoR documentation if helpful
- Anchorage Atlas section → Anchorage's public Atlas documentation if helpful
- Solana Company case → `/stories/solana-company` if that story page exists; otherwise inline
- FAQ answers → `/docs` for technical depth where applicable
- Partnership proof strip → no outbound links

## 9. Visual / design direction

Institutional product-sheet register, same color temperature and typographic restraint as `/institutional-yield` and `/institutions`.

- **Tri-party flow diagram** is the page's hero visual asset. Purpose-built; accurate to the mechanics.
- **Data charts** — LTV time-series once live; Chainlink PoR state; active facilities if surfaceable.
- **Partnership visuals** — Anchorage, Chainlink, Solana Company marks. Restrained, authoritative.
- **Tables** — lending parameters, eligibility criteria, collateral support.

**Visual dependencies:**

- Tri-party flow diagram (new asset)
- Collateral custody flow (extension of tri-party)
- Chainlink PoR integration diagram
- Anchorage / Chainlink / Solana Company logos (monochrome-capable)
- Live stats if available: active facilities, total collateral, etc.

**Design-system components likely in play:**

- Structural diagram component
- Parameter table
- FAQ accordion
- Primary + Secondary CTA
- Partnership proof strip

## 10. Available research artifacts for depth

Read in this order:

1. **Master spec §3.2 (Institutions audience), §6.6 (Partners — Anchorage, Chainlink, Solana Company cards), §9.2 (/off-chain-collateral preliminary structure)** — `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
2. **Kamino Off-Chain Collateral deck** — `/Users/dawid/Github/Product/context/decks/Kamino Off-Chain Collateral Deck.pdf` — full product mechanics, visual reference for the tri-party diagram.
3. **Off-Chain Collateral memo** — `/Users/dawid/Github/Marketing/documents/Kamino Off Chain Collateral Memo V1.md` — strategic framing, competitive positioning.
4. **Kamino deep comprehension §4.3 (Borrow — OCC subsection), §4.10 (Off-Chain Collateral in next-gen products), §11.2 (Institutions detail), §13 (tensions / risks)** — `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md`
5. **Partner synthesis** — Anchorage Digital, Chainlink, Pantera Capital, Summer Capital, Solana Company entries — `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md`
6. **Kamino general deck** — `/Users/dawid/Github/Product/context/decks/Kamino General Deck.pdf` — for broader OCC positioning.
7. **There Is Only KMNO v4** — `/Users/dawid/Github/Marketing/documents/There Is Only KMNO v4.md` — US market posture and Foundation context.

## 11. Open questions and decisions deferred to the page agent

- **Solana Company borrow execution status.** Confirm at page ship time — if executed, language shifts to "executed" or "inaugural borrow completed." If still upcoming, retain forward phrasing.
- **Eligibility criteria.** What's the public-facing description? Minimum borrow size? Jurisdictional restrictions? Coordinate with BD and Legal.
- **Additional custodian roster.** Master spec suggests Anchorage is first. Are others confirmed (e.g., Komainu, Zodia, BitGo as OCC custodians — not as IY custodians)? Confirm with BD.
- **Mirror tokens extension.** How prominent to make this? Master spec treats it as a March 2026 extension. If mature, feature; if nascent, brief mention only.
- **Publishable rate benchmark.** What's the typical fixed rate on an OCC facility? If publishable, include as a representative range. Otherwise leave as "rate set at origination per facility."
- **Rollover decision process.** At term, who decides rollover? Borrower, lender, or conditional? Confirm with product.
- **Public disclosure of Anchorage role.** Master spec treats Anchorage as publicly nameable (the partnership is public). Reconfirm with BD whether full Atlas integration details are shippable.
- **FAQ content.** Specific questions an institutional borrower asks. Coordinate with BD and Legal.
- **Partnership proof strip inclusion.** Anchorage + Chainlink + Solana Company are core. Pantera + Summer Capital: include as Solana Company's co-managers, separately? FalconX: relevant to Fixed Rates rather than OCC; probably omit.
- **Risk factors section.** Coordinate with Legal. Institutional readers expect disclosures; tone carefully.
- **"Your collateral stays at your custodian" as a headline.** It's a strong line; confirm with Legal that it's both accurate (which it is) and defensible as headline marketing.
- **Document attachments.** Can Kamino publish a redacted version of the tri-party Account Control Agreement template for sophisticated readers? Probably not at launch; flag as future enhancement.
