# Kamino Landing Rebuild — Part B
## Audience pages, strategic tensions, sequencing, and contrarian takes

> Produced as a synthesis of the external 25-site research (`01-landing-page-patterns.md`), the Kamino deep-comprehension dossier (`02-kamino-deep-comprehension.md`), the current landing spec (`landing-website.md`), the Institutional Yield final announcement, the Multiply landing spec, and the PRIME product spec. This document complements Part A (thesis + principles + section-by-section homepage architecture). It covers what the homepage routes *into* (the four audience pages), the strategic forks Dawid still has to call, a roadmap for sequencing decisions, and contrarian takes worth weighing.

---

# PART 1 — The four audience pages

The four-audience router is a promise. The homepage says *"Powering every part of the onchain economy"* and then points at four doors. Each door has to open into a room that feels like it was built for the person who walked through it. If they feel the same, the router collapses into theater; if they feel distinct, the router becomes the single most differentiated structural move on the page.

The research is clear on what "built for you" looks like in 2026. Stripe runs a mega-router eight audiences deep. Brex does size-tiers with materially different copy per band. Linear refuses to tier but is ruthlessly consistent inside its one register. Mercury adds eleven industry verticals late in the funnel. Morpho runs three product segments (Consumer / Prime / Infra) plus an orthogonal Solutions layer. The common pattern is that audience specificity is rewarded — but only if the register actually shifts. If the Institutions page and the Fintechs page both read like the homepage, it is because the writer did not sit in each seat before drafting.

This section proposes what each seat should feel like at Kamino.

---

## 1.1 Individuals — `/individuals`

### Who this page is for, specifically

Not "retail users" in the abstract. The deep-comprehension doc is precise:

> *"Crypto-native users holding SOL, USDC, USDT, PYUSD, LSTs, JLP, cbBTC, KMNO… DeFi-sophisticated: they compare yields, care about audits and TVL, monitor positions, use Multiply and leveraged staking. A long tail of TradFi-adjacent users coming in via stablecoins seeking higher USD yield than savings accounts or Treasuries. Not pseudonymous casual speculators. The Kamino user has on average a meaningful position and has been around the Solana ecosystem long enough to trust it."* (§11.1)

That is a specific person. They have a Phantom or Backpack wallet, a few thousand to a few hundred thousand dollars of mostly-SOL-and-USDC exposure, they have heard of Gauntlet and Steakhouse, they know what an LST is, they have probably looped JLP, and they read the Season 5 airdrop changelog. A secondary cohort sits next to them: TradFi-adjacent stablecoin holders who discovered Kamino through PRIME coverage and are looking for a 5–8% USD yield that beats Treasuries without the Celsius tail risk.

That is a very different user from the Chime homepage's implicit visitor. Kamino's Individuals page should not read like Chime. It should read like Mercury. The user is sophisticated, regulated-adjacent, and rewards precision.

### The single most important thing this page must do

Reassure the existing Kamino user, in the first six seconds on the page, that *the brand shift does not mean they are being abandoned*. This is the 13.1 and 13.6 risk made concrete: "tilt too hard institutional and the retail community reads the rebrand as abandonment — watch CT for snark about 'Kamino going corporate.'" The Individuals page is where that risk lives or dies. It has to greet the existing user with the yields and the vaults and the KMNO program they already know, in a voice that does not feel like a corporate chaperone has taken over the brand.

Secondary job: acquire new TradFi-adjacent stablecoin holders who have been nudged over by the institutional positioning on the homepage and now need to be told, clearly, that they can access this as individuals without a sales call.

### Recommended section structure (top to bottom)

1. **Hero** — single sentence, warmer register than the homepage. Two CTAs: *Launch App* (primary) and *Explore Vaults* (secondary, jumps down the page). See draft copy below.
2. **A strip of three live yields** — not "APYs float here" but three actual live vault cards rendered from real TVL/APY data. *USDC Prime by Steakhouse. USDC High-Yield by Allez. Sentora PYUSD.* Each card shows 90-day smoothed APY, TVL, and a one-line curator blurb. This is the equivalent of Mercury's dashboard-in-hero move: the product is the argument. Clicking any card deep-links to the vault inside the webapp.
3. **Multiply strip** — three Multiply strategies surfaced as product cards. *JitoSOL loop, PRIME at leverage, JLP loop.* APY range (min leverage → max leverage) with one-line mechanism framing. "Amplify your yield with one-click leverage" as the section header — that is the actual Multiply landing page subhead, and reusing it creates cross-surface familiarity. (*Multiply Spec §4.*)
4. **Institutional Yield invitation** — one carded module that names IY explicitly and says *yes, individuals can deposit here too.* This is critical. IY is the protocol's flagship new product and existing retail users will want to know whether they can access it. The answer is yes, from a DeFi wallet, permissionlessly. Say it.
5. **Proof block — but warmer.** The same $19B originated / $3B AUM / zero bad debt numbers as the homepage, framed in user-benefit register: *"Your deposits sit in the lending engine that has originated $19B without a dollar of bad debt. That is the engineering, not the marketing."* This is the Marius "paranoid expert" voice appropriated for retail.
6. **KMNO + Seasons block** — stake KMNO for points boost, current season info, links to `kamino.com/stake` and the governance forum. This is where KMNO lives on the public site — not the homepage. §13.8 resolves it: KMNO absent from the homepage, KMNO loud on Individuals and Company.
7. **Security block (compressed)** — 20 audits, 4 formal verifications, $1.5M bug bounty, zero exploits, 3+ years live. Named auditors in a logo strip. Link through to `/security` for the deep version.
8. **Curator logos** — Gauntlet, Steakhouse Financial, Allez Labs, MEV Capital, Sentora, Re7 Labs, with a one-line "you are depositing with these people, not a faceless protocol" framing. This is a trust move that also teaches the user what a curator is.
9. **FAQ / help** — real questions: *How do I know my position is safe? What happens if the market crashes? How do withdrawals work? What is an LST?* Linked to the docs but answered inline.
10. **Footer CTA** — *Launch App* and *Read the docs*. No sales contact on this page; individuals are self-serve.

### Tone and voice shift from the homepage

The homepage hero says *"Connecting global capital to the new financial system."* That is Goldman-register institutional.

The Individuals page should feel like it was written by the same brand but by a different person in the building — someone who is comfortable saying *"you"* and *"your yield"* and who would never say *"global capital."* The closest register in the 25-site set is Mercury on the consumer side: founder-warm, slightly conspiratorial, sophisticated but not stiff. The closest internal register is the Multiply spec's voice: *"Amplify your yield with one-click leverage."* That is the Individuals voice.

Example lines that would fit:

- Hero: *"Earn, borrow, and multiply across Solana's largest onchain credit market."*
- Yield strip header: *"Professional curators. Your capital."*
- Multiply section: *"Amplify what your assets are already doing."*
- Institutional Yield invitation: *"The same regulated BTC-backed credit institutions are depositing into — available to you from any Solana wallet."*
- KMNO section: *"Own a piece of the protocol."*
- Security section: *"Why nothing has broken."*

The brand can use second-person on this page — *your yield, your position, your portfolio* — whereas the homepage avoids it. That pronoun shift alone is enough to signal "this was written for you."

The research principle that applies hardest here is principle 11 — *Avoid defining yourself by negation* — because Individuals is the audience most tempted to say *"Kamino is not just for institutions."* That line should never appear. The positive construction is: *"Kamino's individual users power the liquidity the whole system runs on."* Or, more sharply: *"Every institutional dollar deposited into Kamino sits next to a retail dollar in the same engine."*

### Per-audience proof points

From the deep-comprehension doc (§11.1), the Kamino-specific proof points for Individuals are:

- **PRIME Multiply at 11–21% APY** — literally the only place on earth this exists. The PRIME card on this page should show live APY range.
- **$19B originated / zero bad debt** — the single most credible number the protocol has.
- **Curator ecosystem** — Gauntlet (~$1.4B managed across DeFi), Steakhouse Financial (~$1.28B), Allez, MEV Capital, Sentora, Re7 Labs. Named curators are peer-credibility in DeFi.
- **Multiply across five categories** — LSTs, RWAs, Stablecoins, DeFi Yield, Equities. No Solana competitor has this breadth.
- **KMNO + Seasons** — real economic value. Currently Seasons 4 and 5 live.
- **Institutional Yield as an option** — "globally unusual" in the doc's words — permissionless access to regulated BTC-backed credit. (§11.1 point 5.)

Absent from this list: the institutional partners (Anchorage, FalconX, Solana Company). Those are proof for the Institutions page. The Individuals page does not need to name them; retail users recognize curator names more than custody counterparty names.

### Per-box tagline for the Audience Router (Individuals)

Three options:

1. *"Earn, borrow, and multiply onchain."*
2. *"Your wallet. Solana's largest credit market."*
3. *"Professional yield. Permissionless access."*

**Pick: Option 3.** *"Professional yield. Permissionless access."* Two-clause contrast pair in the Mercury / Morpho tradition — exactly the rhetorical device the research calls out as the strongest (principle 9, and "Contrastive framing" from Part E of the research). It captures the specific asymmetric value Kamino offers individuals: you get access to yield strategies normally reserved for institutional allocators, and you access them from a wallet. It also implicitly acknowledges that other Kamino audiences are permissioned — which is true and correct, and differentiating.

Option 1 is too flat (it just lists verbs). Option 2 is close but front-loads "your wallet," which leans consumer-casual. Option 3 is the one that would fit on a Linear or Morpho card without looking out of place.

### Open decisions

**The big one: dedicated `/individuals` page, or route-through to `/earn`?**

Take a position: **dedicated page. Unambiguously.**

Three reasons.

First, *page consistency with the other three audiences.* If Institutions, Issuers, and Fintechs all get marketing pages and Individuals gets routed straight into the webapp, the four-box router breaks the "equal weight" principle that makes it work. The box is a door. Three doors open into rooms, one opens into a closet. The visitor notices. Worse, the existing retail user clicks their box, lands in the webapp, and the homepage never gets to make the case that Kamino is *also* for them — which is exactly the abandonment risk §13.1 flags.

Second, *perceived abandonment by retail.* The Individuals page is the single piece of real estate where Kamino can speak to existing users in a warmer voice and say *the rebrand is not a repudiation.* If the only place they see is the homepage's institutional register and then the webapp, the middle layer of brand reassurance is missing. That middle layer is the Individuals page.

Third, *retail recognizability for TradFi-adjacent visitors.* A stablecoin holder who has just read about Kamino in a PRIME news article lands on kamino.com, sees "Connecting global capital…" and needs to immediately feel included. The homepage does some of that work through the audience router, but the deepening happens on the Individuals page. Dumping them into `/earn` jump-cuts past the moment where we tell them *this is for you, and here's why.*

Counter-argument: the Individuals page adds a maintenance surface, and the `/earn` product page already does a lot of what an Individuals page would do. This is true. But the research is unambiguous: Mercury's founder testimonials, Monzo's "Tell me about…" Section 2, Linear's "ambitious startups to major enterprises" framing — the pattern across the 25 best sites is that the deep audience page does brand work the product page cannot. The product page optimizes for transaction; the audience page optimizes for trust. They are different pages.

(Operationally, the Individuals page should link heavily into `/earn`, `/borrow`, `/multiply`, `/swap`, and the webapp. It is a narrative page that merchandises into the product surfaces. It should not attempt to be the product surface itself.)

### Hero copy direction for the Individuals page

Three options:

1. *"Earn, borrow, and multiply across Solana's largest onchain credit market."*
2. *"Your on-ramp to onchain yield."*
3. *"Professional yield, built for your wallet."*

**Pick: Option 1.** *"Earn, borrow, and multiply across Solana's largest onchain credit market."* This is the Ramp / Brex verb-triplet pattern — concrete, active, gives the user three specific things to do. "Solana's largest onchain credit market" is the single factual claim that orients the reader: not a protocol, a market. Thirteen words — slightly long but justified by the scope-claim, and in line with the research's observation that subheads should do the specificity work.

Option 2 is too thin. Option 3 echoes the audience-router tagline, which would then be redundant.

Subhead: *"$19B+ originated. Zero bad debt. Three years live. Build a position in minutes from any Solana wallet."*

That subhead lands the three unarguable numbers the research identifies as the Kamino-specific "one numeric proof point that is unanswerable" (§9.1) and closes with a concrete action ("build a position in minutes from any Solana wallet") — the Mercury "10 minutes" move.

---

## 1.2 Institutions — `/institutions`

### Who this page is for, specifically

From the deep-comprehension doc (§11.2):

> *"Crypto-native hedge funds — Multicoin, Pantera, Summer Capital, Greenfield, smaller market-neutral shops. Need leverage, fixed rates, predictable borrow costs, hedge flows. Family offices allocating 2–10% of AUM to crypto-yield strategies. Crypto treasury companies — publicly listed SPACs/DeSPACs holding BTC/SOL/ETH on balance sheet (Solana Company is the prototype). Market-making firms — Wintermute, XBTO, Hidden Road (Ripple Prime), Galaxy — needing custody-preserving borrow facilities. Trading firms running basis trades, funding-rate arbitrage, perp-basis strategies."*

This is not "institutions" in the ambient sense of the word. It is a specific and relatively small universe of counterparties, most of whom already know each other. The landing page visitor in this audience is either (a) someone from one of those firms evaluating Kamino for the first time, or (b) an allocator doing due diligence before a committee. In both cases they are reading on behalf of a committee. The page must give them material they can paste into a memo.

Secondary audience: TradFi-adjacent institutions just starting to look at onchain yield, driven by the compressed rates in Aave and the "decisive shift in the US regulatory landscape" (from *There Is Only KMNO v4*). These are readers who will not know Kamino's DeFi context and need the institutional-register framing first.

### The single most important thing this page must do

Make it credible that Kamino is a regulated-grade credit-infrastructure counterparty, not a DeFi protocol with an enterprise skin. Everything else on the page serves this. Get this right and the Institutions page generates a real pipeline through `cheryl@`, `mark@`, and `institutional@`. Get this wrong and the page produces curiosity, not conversion.

The concrete job: give a CIO enough material that they can take one screenshot of the page into their Monday investment committee and say *"this is who we're talking to."*

### Recommended section structure (top to bottom)

1. **Hero** — Goldman-register institutional. One claim, one concrete proof. Two CTAs: *Talk to our team* and *View documentation*.
2. **The unarguable proof block** — the same stat block Part A recommends for the homepage, tuned for institutions: *$19B originated. Zero bad debt. 20 audits. 4 formal verifications. 3 years live.* Placed directly under the hero to let the claim breathe and then ground it immediately. This follows the Stripe / Brex pattern of putting the single most credible number adjacent to the claim.
3. **Products band** — three Kamino institutional products with specific product surfaces, each a card:
   - **Institutional Yield** — *"Regulated, overcollateralized BTC-backed credit. 6–8% APY. Liechtenstein FMA-supervised."* Card links to `/earn/institutional`.
   - **Off-Chain Collateral** — *"Borrow onchain USDC while your assets stay at Anchorage Digital. Tri-party agreement. Chainlink Proof of Reserves. Fixed rate. Fixed term."* Card links to documentation.
   - **Fixed Rates & Fixed Terms** — *"Predictable borrowing costs for a defined term. Rate-duration grid. Live with FalconX."* Card links to product spec.
4. **Institutional proof block — "Who Kamino works with"** — a named partner grid. Anchorage Digital. FalconX. Solana Company (NASDAQ: HSDT). Figure Technology Solutions (NASDAQ: FIGR). Chainlink. Paxos. Coinbase. Gauntlet. Haruko. This is the §11.2 list made visual. The §9.3 insight from the deep-comprehension doc is load-bearing: *"Haruko integration for Institutional Yield… using the same data pipeline as Hidden Road (Ripple Prime), Galaxy, XBTO, and Wintermute… the institutional-reporting equivalent of saying 'we use the same trade matching engine as the NYSE.'"* That line — or a translation of it — belongs on this page.
5. **"A new transparency standard" block** — this is the exact framing the IY final announcement uses, and it should live on the Institutions page too. Real-time per-loan data via Haruko. Monthly Andersen UK attestation. Daily FMA reporting. A side-by-side diagram of *traditional private credit (quarterly PDF) / typical DeFi (pool-level stats) / Kamino Institutional Yield (per-loan, real-time)* would make the claim legible to a credit-committee reader.
6. **Use-case merchandising** — three to four concrete use cases with short descriptions:
   - *Crypto treasuries* (Solana Company pattern) — borrow against SOL at qualified custody
   - *Hedge funds* — fixed-rate borrowing for basis trades
   - *Family offices* — deposit into Institutional Yield for regulated BTC-backed credit exposure
   - *Market makers* — custody-preserving borrow facilities
7. **"Built for institutional workflows" block** — permissioned markets, KYC/KYB gating, custom risk parameters, Risk Council engagement, white-glove onboarding, tri-party documentation. This is what the original `/enterprise` page was trying to do, now folded in correctly.
8. **Named testimonial block** — aspirational but critical. If Kamino can land *one* named testimonial from Anchorage, FalconX, or Solana Company, it outperforms ten logos. The research is explicit (principle 6): *"The enterprise pattern is: full name + specific role + logo'd company + one or two sharp sentences."* This block might ship as a placeholder at launch with a logo row, and graduate to named testimonials over time. That is fine — but the space should be designed into the page from day one.
9. **Security and compliance block** — audits (20), formal verifications (4), Immunefi bounty ($1.5M), Foundation structure, regulatory entities. Dense, specific, with real dates and names. Linked through to `/security`.
10. **Contact block** — not a footer CTA, a contact block. Specific names and roles: *Mark Hull, Head of Business Development. Cheryl Chan, Head of Strategy.* With booking links. This is a trust move — the named person is more credible than "fill out a form."

### Tone and voice shift from the homepage

The homepage register is institutional but aspirational. The Institutions page register should be more muted, more corporate, more supply-side. The closest reference in the 25-site set is **Adyen** and **Coinbase Institutional** — "Global scale. Local expertise. Powered by trillions of euros in transaction data." / "solving complexity across trading, financing, and custody for sophisticated crypto strategies." That is the register.

Example lines:

- Hero: *"Institutional credit infrastructure, onchain."*
- Subhead: *"Regulated yield. Custody-preserving borrow facilities. Fixed-rate lending. On the largest onchain credit market on Solana."*
- Products band header: *"Three products for institutional capital."*
- Transparency block: *"Real-time per-loan data. Monthly independent attestation. Daily regulatory reporting. A new standard for credit transparency."*
- Use case band: *"Built for the way your desk works."*
- Contact CTA: *"Talk to our team."* (Not *"Get started,"* not *"Launch app."*)

The second-person pronoun should appear sparingly on this page — a CIO reads "you" as a retail tell. "Your desk" is fine; "your yield" is not. Adyen's pronoun discipline is instructive: very little direct address, most sentences construct the reader as an unspecified enterprise. That is the register to borrow.

The phrase *"DeFi"* should probably appear **zero times** on this page. Every instance translated to *onchain credit / onchain liquidity / onchain settlement.* §13.7 of the deep-comprehension doc underlines why: *"A TradFi reader's ear goes up at 'onchain'; it relaxes at 'credit' and 'liquidity' and then leans in when 'onchain' qualifies them."* The word "DeFi" hits the ear like "crypto" hits a compliance officer. Avoid it.

### Per-audience proof points

The doc is explicit about what matters for this audience (§11.2):

- **Off-Chain Collateral** — the only Solana product that preserves qualified custody while enabling onchain borrowing. Tri-party agreement with Anchorage, Chainlink PoR, 65% max LTV / 70% liquidation, fixed rate, 3-month terms.
- **Fixed Rates & Fixed Terms** — the institutional credit primitive DeFi has lacked. Live with FalconX.
- **Institutional Yield** — regulated, overcollateralized, transparent. $25M cap at launch, targeting $500M within 12 months per §8.6.
- **Permissioned markets** — KYC-gated, natively supported by V2 architecture. Aave has to spin up Horizon as a separate instance; Kamino does it inside the protocol.
- **Infrastructure track record** — $19B originated, zero bad debt, 20 audits, 4 formal verifications. Three years live.
- **Institutional partner list** — Anchorage, FalconX, Solana Company, Figure, Chainlink, Paxos, Coinbase, Gauntlet, Haruko.
- **Regulatory structure** — Liechtenstein FMA lending operation, Cayman SPV, Andersen UK attestation.

The single most credible stat for this audience is not the AUM. It is **zero bad debt on $19B+ originated**. That number closes meetings. It should be given heavy typographic treatment somewhere on the page — probably as the Section 2 "one unarguable stat" that the research identifies as the best-in-class pattern.

### Per-box tagline for the Audience Router (Institutions)

Three options:

1. *"Regulated credit infrastructure."*
2. *"Institutional credit, onchain."*
3. *"Where capital allocators build onchain."*

**Pick: Option 2.** *"Institutional credit, onchain."* Four words, no verbs, declarative. The rhetorical move is Linear's "Issue tracking is dead" compressed to a product claim — it does not describe a benefit, it asserts a category. "Institutional credit" is the thing institutions are trying to buy; "onchain" is the qualifier. The research (principle 3 / §13.7) explicitly recommends this ordering.

Option 1 is close but frontloads "regulated" which is a trust signal, not an outcome. Option 3 is too aspirational-retail. Option 2 reads like an Adyen tagline — and that is exactly right for this audience.

### Open decisions

- **Named testimonials.** None of Anchorage, FalconX, or Solana Company have given a public testimonial on the record. Getting one is a commercial negotiation, not a copywriting task. The page should be designed to absorb one when it lands — there should be a dedicated slot, styled for a single testimonial from a single named individual, that can go live the moment the quote is approved. Until then, the space holds a logo row.
- **How much Institutional Yield real-estate belongs on this page vs. its own `/institutional-yield` page?** IY is the flagship. It deserves its own product page — akin to the PRIME spec. The Institutions page should merchandise into it, not absorb it.
- **Mark and Cheryl's names and photos.** The research is explicit (Mercury precedent) that named individuals convert better than generic forms. But exposing Mark and Cheryl on the public page commits them to being first-line responders. Operationally workable, but worth deciding.

### Hero copy direction for the Institutions page

Three options:

1. *"Institutional credit infrastructure, onchain."*
2. *"Regulated yield. Onchain liquidity. One credit infrastructure."*
3. *"Where institutional credit meets onchain liquidity."*

**Pick: Option 1.** *"Institutional credit infrastructure, onchain."* Four words plus a qualifier. It mirrors the homepage's altitude ("global capital… financial system") but specifies the subject ("credit infrastructure"). It lets the reader complete the chain of inference: infrastructure → reliable → multi-product → built to last.

Subhead: *"$19B originated. Zero bad debt. Regulated lending operations. Qualified custody. The credit infrastructure for capital allocating onchain."*

The subhead absorbs the four institutional proof tokens (scale, safety, regulation, custody) in a single sentence and closes with the audience's verb ("capital allocating onchain"). It is the densest line on the page.

Option 2 is a Mercury / Ramp pair-construction move but reads slightly busy. Option 3 has a "where X meets Y" construction that is overused in B2B pitch decks and does not reward closer reading.

---

## 1.3 Issuers — `/issuers`

### Who this page is for, specifically

From §11.3, Issuers are:

> *"RWA tokenizers — Figure (HELOCs → PRIME), Maple (SyrupUSDC), Ondo (potentially), Securitize (tokenized private credit like ACRED), Backed Finance, reinsurance tokenizers. Tokenized equity issuers — sellers of TSLAx, SPYx, AAPLX on Solana. Stablecoin issuers with differentiated collateral — Paxos (PYUSD), Bridge/Stripe (CASH), emerging yield-bearing stable issuers, reinsurance-backed stablecoin issuers. Private credit funds looking to tokenize LP interests. Token issuers who want their asset to be collateral, not just tradable."*

This is the smallest and most commercially consequential of the four audiences. Each logo on this page is worth tens of millions to hundreds of millions in AUM. PRIME alone proves the business case — *$0 to $600M in four months with zero incentives, entirely through native yield demand* (§2). The page is not a lead-gen funnel; it is a partnership pitch.

The real reader of this page is often a single person — the head of distribution or head of product at a tokenization platform — who has the authority to pick Solana or Ethereum and needs to justify the choice internally. That person wants three things: a clean product story, a case study that rhymes with theirs, and a named contact.

### The single most important thing this page must do

Tell the PRIME story as the validator, and make the "launch your asset on Kamino in weeks" claim concrete. The deep-comprehension doc calls out that Morpho's *"launch in weeks, not months"* is underused by DeFi peers (Part Four of the external research). Kamino has a direct analog — PRIME launched and hit $600M in four months, Securitize's ACRED shipped via Steakhouse Financial, tokenized equities went live as collateral markets — and should claim it.

Secondary job: translate "what it means to be an issuer on Kamino" from DeFi insider language into a pitch that makes sense to a TradFi asset manager. Most of these readers are not native DeFi — they are tokenization practitioners who have to explain their choice to a credit committee.

### Recommended section structure (top to bottom)

1. **Hero** — partnership register. One claim, one case study as immediate proof.
2. **PRIME as hero case study** — this is the single most important block on the page. It is the Stripe "URBN consolidates $5 billion" / Brex "OpenAI and Anthropic" move. PRIME is the $600M proof-of-work that Kamino is where serious RWA deployments live. A dedicated PRIME module with: *"$0 to $600M in 4 months. Zero token incentives. Largest RWA market in DeFi."* Link to PRIME spec / PRIME product page.
3. **What you get as an issuer** — the §11.3 list, with concrete framing:
   - **Instant collateral status** — your asset becomes borrowable collateral in a purpose-built Kamino market
   - **Multiply as distribution** — once your asset is in a market, users can leverage it, creating borrow demand (PRIME went $0→$600M because of this)
   - **Curator ecosystem access** — Gauntlet, Steakhouse, Allez, MEV Capital, Sentora, Re7 can allocate to your asset
   - **Permissioned market option** — KYC-gated markets for regulated assets (e.g., tokenized securities)
   - **RWA DEX** (coming) — oracle-priced liquidity without negotiating MM agreements
   - **Analytics and reporting** — live visibility into how your asset is being used
4. **Live RWA showcase** — cards for every RWA currently live on Kamino. PRIME (Figure + Hastra). ACRED (Securitize + Steakhouse). Huma's PST. Maple's SyrupUSDC. Tokenized equities (TSLAx, SPYx, AAPLX, GOOGLX, MSTRX). Each card: asset name, issuer, market size, link to asset page.
5. **How it works** — a three-step visual explainer: *(1) We onboard your asset and design the market parameters with you. (2) Your asset is live as collateral, accessible via Lend, Earn, and Multiply. (3) Distribution compounds — native yield demand, curator allocations, Multiply loops.* The flow diagram pattern from the PRIME product spec would translate well.
6. **Trust block — why assets trust Kamino** — the §9.1 operational moats translated for issuers: zero bad debt means your asset is never caught in a contagion event. In-house Scope oracle means pricing logic is protocol-controlled. 20 audits, 4 formal verifications. Three years. The Jupiter Lend critique (§2 / §13.5) — *rehypothecation risk* — can be implicitly addressed here as a reason Kamino is structurally safer than some alternatives, without naming anyone.
7. **Ecosystem block** — the logo list of partners and integrations: Chainlink (CCIP, oracles, PoR), Hastra, Figure, Securitize, Paxos, Steakhouse, Gauntlet, Allez, Exponent Finance.
8. **Co-marketing block** — a sentence about how Kamino's team works with issuers on launch comms. This is a commercial reality (§11.3 "Co-marketing with the issuer") that is a genuine differentiator for issuers who want distribution, not just listing.
9. **Contact block** — Mark Hull by name. Partnerships inbox. Calendly link.

### Tone and voice shift from the homepage

The Institutions page is supply-side — reading on behalf of a committee, expecting corporate register. The Issuers page is partnership-register — a CEO or head of distribution reading for themselves, expecting a sense that this is a two-sided conversation.

The closest reference in the 25-site set is **Morpho** — "Powered by Morpho. Enterprises connect with Morpho to power any lending or borrowing use case at scale." Morpho's copy is open-source-infrastructural and slightly idealistic. That is close to right for Kamino Issuers, but the register should be a little warmer and more partnership-forward. Some of Linear's "the right opinions for fast-moving teams" confidence-register fits too.

Example lines:

- Hero: *"Launch your asset on Solana's largest credit market."*
- PRIME block header: *"Distribution, measured in hundreds of millions."*
- What-you-get header: *"Listed is the starting point, not the end."*
- Trust block: *"Zero bad debt across $19B originated. Your asset is never caught in someone else's contagion."*
- How-it-works header: *"From mandate to market in weeks."*
- Contact: *"Let's build your market."*

That last line — *"Let's build your market"* — is the voice. It is collaborative, specific, partnership-register. It is not *"request a demo"* (transactional) and not *"contact us"* (generic).

The word *"distribution"* should appear several times on this page. It is the word issuers use for what they want. The doc is clear: *"This is distribution, not just listing"* (§11.3 point 2). Putting that word in the reader's eye-line multiple times is the Raycast "obsess" move — claiming the vocabulary of the audience.

### Per-audience proof points

- **PRIME: $0 → $600M in 4 months, zero token incentives.** This is the single most Kamino-specific proof point on the entire site. No competitor has an analog at this scale with this growth curve.
- **Exclusive Kamino deployment** — PRIME chose Kamino over every alternative on Solana. Framed carefully (not "we're the only game in town"; rather, "serious issuers chose us"), this matters.
- **Live RWA list** — ACRED (Securitize + Steakhouse), Huma's PST, SyrupUSDC, tokenized equities (TSLAx et al.), ONyc, USCC.
- **Kamino's technical infrastructure** — isolated permissioned markets (V2), Scope oracle (no delegation risk), auction-based liquidations, scam-wick protection.
- **Curator ecosystem** — named curators will actively onboard your asset into vault mandates. Allez produced PRIME's 7.1/10 risk rating. This is distribution talent on the demand side.
- **Co-marketing** — Kamino's team collaborates on launch comms (not self-evident to a first-time issuer, but a real differentiator vs. being a line item on a larger protocol).

### Per-box tagline for the Audience Router (Issuers)

Three options:

1. *"Launch onchain. Grow to billions."*
2. *"Tokenize. List. Scale."*
3. *"From listing to billion-dollar market."*

**Pick: Option 3.** *"From listing to billion-dollar market."* The PRIME story compressed into six words. It is specific ("billion-dollar" — PRIME is already $600M+ and trending up), outcome-oriented, and it disambiguates the promise from a generic "list your asset here" pitch. The implicit contrast is to Morpho or Aave, where "list your asset" is a checkbox; on Kamino, listing is the beginning of a distribution motion that PRIME has already proved at scale.

Option 1 is punchy but vague. Option 2 is verb-triplet but feels generic — Framer / Figma already own verb-triplet territory. Option 3 reads specifically, with receipts.

### Open decisions

- **Naming specific RWAs vs. logo grid.** Should the page name PRIME, ACRED, Huma, SyrupUSDC by product, or use logos? Pick: both. Cards with asset name and issuer logo, plus a "live" indicator and the current market size. This is higher-density than a logo grid and more credible.
- **Should the page mention the RWA DEX (not yet live)?** It is announced as a product direction in December 2025 (§4.10). Mentioning it is forward-looking; omitting it delays a genuine asset-issuer value prop. Pick: mention it, label as "Coming" with a specific quarter if possible. The research principle ("aspirational but earned") is in tension here; the compromise is to label unshipped products clearly.
- **Where does the Jupiter Lend / open-finance discussion live?** It should not be named on this page. But the risk-preservation framing it implies ("assets are safer in a non-rehypothecating market") can be surfaced implicitly in the trust block. See Tension §2.9.

### Hero copy direction for the Issuers page

Three options:

1. *"Launch your asset on Solana's largest credit market."*
2. *"The credit distribution layer for tokenized assets."*
3. *"Where tokenized assets become credit."*

**Pick: Option 1.** *"Launch your asset on Solana's largest credit market."* Direct, specific, names the action ("launch") and the venue ("Solana's largest credit market"). It frames Kamino as market, not as protocol — which is the framing Issuers respond to (they are launching *into* a market, not *onto* a platform).

Subhead: *"PRIME launched here and grew from $0 to $600M in four months, with zero token incentives. Your asset can too."*

That subhead does the Stripe case-study move: name the concrete customer, state the quantitative result, make the implicit claim that the same outcome is available. It is the research's "one numeric proof point that is unanswerable" — for this audience.

Option 2 is close but reads more as product positioning than as an invitation. Option 3 is too abstract for the audience.

---

## 1.4 Fintechs — `/fintechs`

### Who this page is for, specifically

From §11.4:

> *"Consumer crypto apps — wallets (Phantom is an investor/partner), neobanks, mobile-first fintechs. Global consumer finance apps with stablecoin deposit products looking to offer yield. Exchanges wanting to add an 'Earn' product without building lending. Payment apps (PayPal-style) wanting to pay interest on stablecoin balances."*

This is a developer / product-lead audience. The reader is almost always an engineer or a PM evaluating Kamino's API/SDK against alternatives. They want three things fast: *what does the integration look like, how do I get paid for bringing users, how do I stay compliant.*

### The single most important thing this page must do

Convert the product lead from "curious" to "starting an integration conversation." The first real piece of evidence should be Altitude — the first announced BuildKit integration partner (§4.10) — with a second reference (Ethena in discussions, if usable publicly; else unspecified "consumer crypto apps"). The page must also make the revenue-share model immediately legible; that is the commercial hook that separates BuildKit from "go integrate Morpho yourself."

### Recommended section structure (top to bottom)

1. **Hero** — developer / builder register. One claim, one CTA path to docs.
2. **The commercial model block** — show the revenue share concretely. *"Users earn up to [X]%. Everything above accrues to you as revenue share."* A two-column diagram: *what your users see / what you get.* This is the single most important commercial differentiator for BuildKit and it should be above the fold.
3. **Altitude (or whichever partner can be named) case study** — the PRIME-equivalent for this audience. What Altitude built, how long it took, what the integration looks like, what the commercial shape is.
4. **The integration surface** — code snippet or schematic:
   ```
   kamino.buildkit.deposit({ userId, amount, wallet })
   kamino.buildkit.withdraw({ userId, amount })
   kamino.buildkit.rates()
   kamino.buildkit.positions({ userId })
   ```
   The research (Stripe, Supabase, Vercel) shows that a concrete code snippet on the homepage is the single highest-impact move for developer audiences. Kamino should do it.
5. **What you can build** — the four use cases from §4.10 made concrete:
   - **Yield on stablecoins** — 5–15% APY surfaced to your users
   - **Crypto-backed loans** — instant loans against crypto collateral
   - **Managed strategies** — give users access to curator-managed yield vaults
   - **Swap** — best-execution token swap, zero fees
6. **Compliance block** — the §11.4 point 4 insight made explicit: *"Every dollar of yield traces to a KYC-verified, regulated borrower (institutional credit, warehouse financing, not pseudonymous DeFi borrowers)… No fintech regulator will accept pseudonymous borrowers as backing for a consumer product."* This is a real compliance moat for fintechs and it should be made into a block of its own, with specifics: institutional borrowers at qualified custodians, warehouse financing underneath PRIME, regulatory oversight of lending operations.
7. **Technical stack block** — BuildKit API, Privy embedded wallets, KYC/KYB integration, SDK languages, webhook/observability.
8. **Timeline block** — *"Integrate in weeks, not months."* A concrete timeline: Week 1 — sandbox integration. Week 2 — KYC/KYB onboarding. Week 3 — vault configuration. Week 4 — live. This is the Morpho claim applied to Kamino, and it is defensible because it is accurate.
9. **Security / infrastructure block** — a compressed version of the trust block. 20 audits, zero exploits, $19B originated, Solana-native. Plus SDK stability guarantees if they exist.
10. **Contact / docs block** — *"Start integrating"* (docs) and *"Talk to the team"* (partnership call).

### Tone and voice shift from the homepage

Developer / builder register. The closest references in the 25-site set are **Stripe** (for enterprise-dev crispness), **Supabase** (for open-source warmth), and **Vercel** (for crisp, competitive-dev confidence). Plus **Mercury's "Build demo"** interactive pattern.

The pronoun is *"you"* throughout — fintechs are a direct-address audience, as Stripe's developer pages are. The voice is short declarative sentences. The vocabulary is *API, SDK, integration, revenue share, sandbox, production* — plus the Kamino-specific terms *vault, curator, mandate, yield.* No "DeFi" unless absolutely required.

Example lines:

- Hero: *"Embed onchain yield into your app."*
- Subhead: *"BuildKit gives you yield, borrow, and swap — through a single API. Altitude shipped in weeks."*
- Commercial block header: *"You earn the spread."*
- Integration block: *"Four methods. One SDK."*
- Compliance block: *"Every basis point of yield traces to a KYC-verified, regulated borrower."*
- Timeline block: *"From sandbox to production in four weeks."*
- Footer: *"Start integrating"* / *"Book a call."*

The register is intentionally drier than Individuals and warmer than Institutions. It is the register of a developer tool that also knows it is selling a commercial model.

### Per-audience proof points

- **BuildKit is live at `kamino.com/build`.**
- **Altitude is the first announced integration partner.** (§4.10)
- **Ethena in active discussions** (per §11.4 — use only if publicly sharable).
- **Revenue-share model is real and specific** — users earn up to a cap rate, everything above accrues to the fintech, split with Kamino.
- **Privy embedded wallets built in** — no wallet UX build required.
- **Structured yield architecture** — the §11.4 point 6 blended yield (20% buffer + 40% PRIME/USDC + 40% BTC lending ≈ 6.33% blended) is a real product surface, and naming it is a hook for any product team that wants control over the yield curve.
- **KYC/KYB-compliant yield stack** — every yield dollar traces to a KYC-verified institutional borrower, which is a genuine compliance-vs-generic-DeFi distinction.
- **"Launch in weeks, not months"** — defensible because Altitude did it.

### Per-box tagline for the Audience Router (Fintechs)

Three options:

1. *"Onchain yield, in your stack."*
2. *"Embed credit infrastructure."*
3. *"Ship yield in weeks."*

**Pick: Option 1.** *"Onchain yield, in your stack."* Six words. Direct. "In your stack" is the developer/builder framing — it tells the reader that Kamino is a component, not a destination. The Stripe "financial infrastructure for the internet" and Morpho "universal lending network" use similar abstraction-as-component framing; this is the equivalent.

Option 2 is close but reads more like the Institutions tagline. Option 3 is the best one-line outcome claim but says nothing about *what* ships — a reader might think it is a different service. Option 1 keeps the noun ("yield") front and center.

### Open decisions

- **Naming unshipped features.** BuildKit is live. Some of the KYC/KYB flows, white-label vault provisioning, Privy integration depth — these are in motion. The page should only name what is live. Anything forward-looking should be labeled ("Coming Q3") or omitted.
- **Showing code on the page.** Stripe and Supabase make this work; enterprise-only sites do not. Kamino's audience-fit is closer to Stripe. Show code — a simple deposit() call is more persuasive than a diagram.
- **Should the Fintechs page name Privy?** Privy is a partner (§11.4 point 5). Naming Privy is a credibility transfer (embedded-wallet category leader) but also a commitment to stay with Privy. Pick: name Privy but frame it as "Privy out of the box, or bring your own embedded wallet infra."

### Hero copy direction for the Fintechs page

Three options:

1. *"Embed onchain yield into your app."*
2. *"Give your users yield. Keep your product."*
3. *"Yield, borrow, and swap — through one API."*

**Pick: Option 3.** *"Yield, borrow, and swap — through one API."* Seven words. Names three products (which is the breadth claim). "Through one API" is the integration claim. The structure is verb-triplet-plus-integration-noun — a pattern that does not appear in the 25-site set and therefore is distinctive. It is also true in a way the spec confirms.

Subhead: *"BuildKit powers consumer apps with onchain yield, backed by $19B in originated loans and institutional-grade borrower flow. Altitude shipped in weeks."*

That subhead names the product (BuildKit), the scale proof ($19B), the distinguishing claim (institutional-grade borrower flow — the compliance moat), and the integration speed (Altitude reference). It is dense and specific, in line with research principle 3 ("concrete beats abstract").

Option 1 is clean but thin. Option 2 is rhythmic (Mercury-style pair construction) but does not say what Kamino actually does. Option 3 is the most information-dense line that still reads as a hero.

---

This completes Part 1. The four audience pages are the proof that the router works. Get these right — especially Institutions and Issuers, which are the highest-leverage commercial pages on the site — and the homepage's institutional repositioning earns its claim.

---

# PART 2 — Tensions, forks, and strategic choices

The Kamino landing page rebuild is not one decision. It is a stack of unresolved decisions, each of which implies concrete pixels on the page. The synthesis of the external research and the deep-comprehension dossier surfaces at least ten real tensions that Dawid has to call before a production build can ship cleanly. Each tension is stated precisely, the two-to-three actual positions are named, the landing-page consequences are spelled out, and a recommendation is offered with a defense.

These are forks in the road, not a checklist. Several of them are coupled — the answer to one changes the best answer to another. But each is worth stating on its own terms before the composite picture is drawn.

---

## 2.1 Individuals — dedicated page, or route-through to `/earn`?

**The tension.** The landing spec flags this explicitly: *"Does this route to a dedicated landing page, or straight through to `/earn`? If the former, the Individuals audience page needs a spec."* The four-audience router is the homepage's spine. If one of the four boxes does not have a room behind it, the router is architecturally inconsistent with itself.

**The positions.**

1. **Dedicated `/individuals` page, full parity with the other three.** The Individuals audience gets a marketing page with its own hero, proof, product merchandising, KMNO block, and webapp CTA.
2. **Route-through to `/earn`.** The Individuals box, when clicked, entry-animates directly into the `/earn` product surface (or the webapp itself).
3. **Hybrid: a short Individuals "stop" that auto-scrolls into an embedded `/earn`.** A compromise that tries to give the router consistency without building a full marketing page.

**Landing-page consequences.**

*Position 1:* Four equal-weight boxes open into four equal-weight rooms. Retail recognizability is preserved because the Individuals page can say *"you are not being left behind."* Maintenance cost is a full marketing page that has to stay in sync with `/earn` and the webapp. KMNO, Seasons, curator names, and the "warmer Kamino voice" all have a natural home.

*Position 2:* The box feels second-class. The visitor who clicks it gets a webapp, which communicates *"we have no marketing for you — go use the product."* This is fine for returning users (who are going to the webapp anyway) but poor for TradFi-adjacent stablecoin holders who are trying to decide whether Kamino is for them. The returning-user detection layer already handles the "go straight to webapp" case for the audience that benefits from it; routing the Individuals box to `/earn` double-counts that behavior.

*Position 3:* A hybrid is superficially attractive but usually ends up being the worst of both — too little marketing to matter, too much friction for users who just want the app. It also forces the entry animation into a Frankenstein transition.

**Recommendation: Position 1 — dedicated `/individuals` page.**

The structural consistency of the four-box router is its strongest asset; degrading it for one audience destroys the pattern. The maintenance cost is real but bounded (the page does not need to be long — it needs to be warm and specific). And the strategic risk of §13.1 — retail community reading the rebrand as abandonment — is most cleanly addressed by giving Individuals a full room that says *"we built this for you."* The Individuals page also does brand work that the webapp cannot do: it names curators, surfaces the Institutional Yield *option*, and situates KMNO in the retail experience. None of that happens on `/earn`.

The dedicated page should be the shortest of the four audience pages (maybe 60–70% of the Institutions page by section count), which manages the maintenance concern. Part 1 of this document sketches the structure.

---

## 2.2 How hard to lean institutional, vs. preserving retail recognizability

**The tension.** The landing brief's institutional repositioning is the strategic thesis of the whole rebuild. But the deep-comprehension doc is explicit: *"Kamino's current daily active users, TVL, and cultural center of gravity are retail DeFi (SOL/LST lenders, PRIME Multipliers, airdrop farmers). Its strategic momentum and 2026–2027 growth thesis are institutional."* (§13.1) Lean too hard institutional and the retail base feels abandoned. Lean too retail and the institutional story evaporates before it gets traction.

**The positions.**

1. **Lean fully institutional on the homepage.** The hero, the proof strip, the Borrow Capacity, the Yield Performance, the security block — all read at the institutional register. Retail warmth lives only on the Individuals page.
2. **Balance on the homepage.** The hero is institutional; the proof is universal; the Curated Products block (Section 6 in the current spec) and the Yield Performance block (Section 4) speak to retail; the audience router gives retail a first-class door.
3. **Lean retail-first on the homepage, institutional on the audience pages.** Tacit acknowledgment that Kamino is still a retail DeFi protocol, with the institutional story as a "we also do this" add-on.

**Landing-page consequences.**

*Position 1:* Goldman Sachs-register homepage. No vault cards, no APY numbers, no Multiply carousel. Cleanest institutional credibility play. Largest risk of retail abandonment and slowest homepage-to-webapp conversion for the current user base. This is essentially the Ondo Finance approach.

*Position 2:* The current spec's implicit direction. Institutional hero. Proof strip with four universal numbers. A "Yield Performance" block that flashes 5.44% 180D Avg APY against UST and DeFi average. A "Curated Products" block with three live vaults. This threads the needle — institutional framing, retail proof.

*Position 3:* A Mercury-style retail-first homepage with institutional products as a tab. The institutional audience reads "DeFi protocol, not serious." This was the *old* Kamino homepage. Rejecting this is the point of the rebuild.

**Recommendation: Position 2 — balance, tilted institutional.**

The hero stays in the institutional register ("Connecting global capital to the new financial system"). The proof strip is universal (AUM, loans, active, assets — numbers every audience respects). The Curated Products block stays on the homepage because it is load-bearing for retail recognition and because the research is explicit that top-tier sites show product. But the framing of the Curated Products block should be tuned: name the curators (Gauntlet, Steakhouse, Sentora) prominently, because that simultaneously validates for retail ("real risk professionals run this") and for institutional ("curators are serious counterparties"). The Yield Performance comparison block (5.44% vs UST vs DeFi) should probably be softened — not removed, but refactored so it does not read as "hype your APY here" by an institutional reader.

A specific structural suggestion: the current Section 6 (Curated Products) should be moved lower on the page, below the institutional trust block. This reduces the "here are some yields, look at the shiny number" opening feel while preserving the retail product surface for the user who scrolls that far. The homepage becomes, effectively: *institutional hero → universal proof → audience router → institutional products (IY, Off-Chain Collateral) → trust block → retail product surface → curator logos → testimonial → CTA.*

---

## 2.3 Surface KMNO on the homepage?

**The tension.** KMNO is 100% of Kamino's upside-capture structure and 100% of the team's alignment. *There Is Only KMNO v4* is public strategy. But surfacing KMNO on the homepage risks making Kamino look like a token project rather than credit infrastructure. The deep-comprehension doc flags this: *"KMNO on the homepage risks making Kamino look like a token project; KMNO absent risks making it look like Kamino doesn't have a token story."* (§13.8)

**The positions.**

1. **KMNO on the homepage** — a dedicated block or strip acknowledging staking, seasons, and governance.
2. **KMNO on the Individuals and Company pages only** — the homepage ignores it; audiences who care find it one click in.
3. **KMNO in the footer only** — one line, low visibility, but not hidden.

**Landing-page consequences.**

*Position 1:* Risk that the CIO reading the homepage mentally categorizes Kamino as "crypto project with a token" rather than "regulated credit infrastructure that happens to have a governance token." This is the exact misclassification the rebuild is trying to undo.

*Position 2:* KMNO is preserved as a first-class story for the audience that cares (retail individuals and crypto-native visitors), while institutional and issuer visitors get the credit-infrastructure frame without distraction. A link to `/company` or `/individuals` handles anyone who wants more.

*Position 3:* Overcorrects. A reader actively looking for the token story walks away thinking Kamino is hiding it, which is the opposite of the Foundation's explicit "There Is Only KMNO" disclosure posture.

**Recommendation: Position 2 — KMNO on Individuals and Company, not on the homepage.**

The tokenless top-level page is the institutional-repositioning move. The Company page ("/about") should carry a short Foundation + KMNO story — *"Kamino is operated by a Cayman foundation with no equity, no shareholders, and no parallel token. All revenue accrues to the Foundation. There is only KMNO."* That paragraph is defensible institutional disclosure and explains the unusual economic structure without making the homepage look like a token pitch. The Individuals page gets the retail KMNO surface (staking, seasons, points boost).

The footer can link to both — `/about` for governance and Foundation structure, `/stake` for staking — without surfacing KMNO as a homepage element.

---

## 2.4 Are agents first-class users on the Kamino homepage?

**The tension.** Linear's precedent is direct: *"The product development system for teams and agents."* The research calls it the single most strategically compressed hero in the 25-site set — because "and agents" is an annexation move. Notion ("night shift"), Stripe ("agentic commerce"), and Vercel ("AI Cloud") are all adapting to the agent shift. Kamino's BuildKit is API-facing; agents could plausibly be a first-class claim.

**The positions.**

1. **Welcome agents at hero altitude on the homepage.** Kamino positions itself as credit infrastructure for institutions, issuers, fintechs, and agents. The router becomes five boxes or the hero subhead mentions agents.
2. **Surface agents in the Fintechs/Developers page.** BuildKit is the natural home. Agents show up as a sub-audience of the developer / builder category.
3. **Stay silent on agents for now.** No public positioning; let product decisions catch up first.

**Landing-page consequences.**

*Position 1:* Kamino would be one of very few DeFi brands explicitly welcoming agents. This is a "first-mover" positioning move. But it is also a commitment — if the protocol cannot actually support agentic flows well (today), the claim outpaces the product. The four-box router would become five (or the word "agent" would enter the hero), which disrupts the locked copy and architecture.

*Position 2:* A safer move. The Fintechs page or a future `/developers` / `/build` page adds a line: *"Yield, borrow, and swap — through one API. Designed for teams, apps, and agents."* This absorbs the agent narrative without a homepage-altitude claim. BuildKit already supports API access from any client, which includes agents.

*Position 3:* Aligns with the research principle ("fake AI framing reads as decorative"), but feels like Kamino is missing the boat on the most obvious emerging positioning of 2026.

**Recommendation: Position 2 — agents are a Developers / BuildKit audience, not a homepage-altitude claim.**

Kamino's product is ready to support agents as API clients — BuildKit returns structured yield, borrow, and swap primitives that an agent can call. But the customer-facing story is still fintechs and institutions. Agents are not yet a large enough buyer to justify competing with the four locked audience boxes. They are a first-class subtype of the Fintechs / Developers audience.

The Fintechs page hero subhead can add *"for apps and agents"* — a Linear-style two-word annexation that does not require changing the homepage. This is also more honest than a homepage claim: Kamino is designed for agents to call, not yet for agents to be the primary customer.

A forward hedge worth tracking: once multiple agent builders are actively integrating BuildKit, revisit the homepage language. The claim can be promoted from the Fintechs page to the homepage once the proof exists. Today it does not.

---

## 2.5 Institutional Yield — dedicated homepage section, or folded into a products overview?

**The tension.** IY is the single most important product launch of 2026 (§4.8) and the spearhead of the entire strategic repositioning. But the current landing spec does not give IY a dedicated homepage section — it is implied across the institutional copy but not merchandised as "this is our flagship new product." The research is clear that top-tier sites merchandise one flagship feature at a time when launching.

**The positions.**

1. **Dedicated IY block on the homepage.** A Section X module with the IY proposition (6–8% APY, BTC-backed, regulated, transparent) and a CTA to the IY vault page.
2. **IY as the Institutions audience card and nothing else on the homepage.** IY lives on `/institutions` and `/earn/institutional`. The homepage mentions it only via the proof strip and the audience router.
3. **IY as a homepage hero component for the first 6-12 months.** A Mercury-style "launch mode" homepage where the IY product is the second section after the hero, then the page reverts to the normal architecture once IY scales.

**Landing-page consequences.**

*Position 1:* IY gets the visibility proportional to its strategic importance. The homepage message is "Kamino connects global capital → see how, live: Institutional Yield." This is a clean story. Risk: IY becomes the homepage's only product voice, flattening the multi-product breadth that the other audiences need.

*Position 2:* IY is discovered through the Institutions audience path. This preserves the four-audience symmetry. Risk: visitors who came specifically for IY (from PR, from a news article) arrive and do not see it immediately — it requires a click. This is a real UX friction for the most important single product the brand is selling right now.

*Position 3:* Launch-mode homepage. Stripe does this for Sessions conferences; Plaid does this for Effects. The homepage has a "flagship moment" that recedes over time. Higher design cost but highest launch-impact.

**Recommendation: Position 1 — dedicated IY block on the homepage.**

IY is the proof-in-product of the hero's "connecting global capital to the new financial system" claim. A homepage that claims institutional connective tissue but does not show the institutional product is a page making a claim without a receipt. The block should be placed in the institutional half of the page (probably between the trust block and the Curated Products block) and should name the product specifically: *"Institutional Yield. Regulated, overcollateralized BTC-backed credit. Real-time transparency. 6–8% APY."* A card-sized module with a CTA to the vault.

The tradeoff is that IY is named on the homepage before it has scaled past its $25M cap. If IY stalls at low AUM, the homepage prominence becomes awkward. This is a real but manageable risk — the block can be desized or rotated later, and it is better to carry the launch with full conviction than to under-merchandise the flagship.

A variant worth piloting: make the IY block dynamic — if IY is at cap (currently $25M), show *"Waitlist open — deposits resuming [date]"*; if below cap, show live deposit link with current utilization. This is the Mercury "10 minutes" move applied to IY: the claim is demonstrated with live data rather than static copy.

---

## 2.6 Show APYs on the homepage?

**The tension.** The research consensus across top-tier institutional sites (Ondo, Coinbase Institutional, Adyen) is that APY numbers do not belong above the fold. But Kamino has *competitive* APYs on stablecoins and a "Yield Performance" block (Section 4 in the current spec) that directly compares to UST and DeFi averages.

**The positions.**

1. **Show APYs prominently on the homepage.** The Yield Performance block stays. 5.44% vs UST vs DeFi chart, big numbers. The Curated Products block shows current vault APYs.
2. **Show the comparison chart, hide the raw APYs.** The "we outperform UST and DeFi average" narrative is preserved but no specific vault APY is flashed.
3. **No APY numbers on the homepage. APYs live on product pages and audience pages only.**

**Landing-page consequences.**

*Position 1:* Retail visitors get what they came for — concrete yield claims they can act on. Institutional visitors see "flashy APY" framing that reads as DeFi-project, not credit-infrastructure.

*Position 2:* Middle ground. The comparison chart reads as "here is our performance thesis" without showing "here is today's yield, deposit now." This is structurally closer to Wise's aggregate trust-claim ("4.3/5 from 200,000+ reviews") than to a product merchandising panel.

*Position 3:* The full Adyen / Ondo discipline. Cleanest institutional read. Weakest retail read.

**Recommendation: Position 2 — show the comparison chart, soften the raw APY display.**

The Yield Performance block (Section 4 of the current spec) captures something the institutional homepage otherwise cannot: *Kamino's stablecoin yields structurally outperform both TradFi and DeFi alternatives*. That is a valuable positioning claim and the chart format ( Kamino vs UST vs DeFi over 180 days) is legible to both institutional and retail readers. Keep it.

But the Curated Products block (Section 6) as currently designed — three cards with big APY numbers ("9.74% APY," "13.32% APY," "11.53% APY") — reads as DeFi-yield-merchandising. Refactor it. Option A: show the cards but lead with the curator names and mandate descriptions, with APY in a smaller secondary position. Option B: cut Section 6 from the homepage and put it on the Individuals page only. Preference: Option A — the block does real work for retail and keeping it is the answer to Tension §2.2 — but the visual hierarchy shifts from "yield hero" to "curator-managed vault" framing.

The single design discipline: do not let the APY be the biggest number on the homepage. The biggest number is *$19B originated* or *zero bad debt* or *$3B AUM*. APYs exist; they do not dominate.

---

## 2.7 Should the homepage ever name a competitor — even implicitly?

**The tension.** Marius's explicit rule is *"never attack Maple by name in public. Win on framework. Publish the evaluation dimensions (regulatory, transparency, custody, mandate permanence) and let audiences apply them."* (§7.3) But the research's top-tier pattern (Adyen's "no alternative," Linear's "Issue tracking is dead," Morpho's "serves, not extracts") includes implicit competitor-naming via contrast-pair rhetoric and comparison frameworks. The question: should the Kamino homepage ever name the comparison set, even obliquely?

**The positions.**

1. **Publish a "why Kamino" comparison table** that lists the four evaluation dimensions (regulatory oversight, mandate permanence, title transfer, transparency cadence) without naming competitors. The reader fills in the blanks.
2. **Use contrast-pair rhetoric without a table.** *"Your collateral stays yours. No title transfer. No rehypothecation."* The contrast is implicit.
3. **Stay silent on competitors entirely.** Let the product structure speak for itself.

**Landing-page consequences.**

*Position 1:* A comparison table on the Institutions page that lists dimensions — *"Regulatory oversight: Liechtenstein FMA. Mandate permanence: Locked. Collateral title: Remains with borrower. Attestation: Monthly by Andersen UK."* — reads as institutional due diligence material. It does not name Maple. The reader who has evaluated Maple recognizes the dimensions. The reader who has not learns the dimensions matter. This is Marius's "win on framework" implemented as a UI element.

*Position 2:* Contrast-pair language like *"Collateral title remains with the borrower. Rehypothecation is contractually prohibited."* is already in the IY final announcement. It can migrate to the Institutions page and the IY block on the homepage. This is lighter-touch than a table and avoids any chance of looking like a side-by-side pitch.

*Position 3:* Pure positive framing. No mention of alternatives. The brand makes its claims without reference to anyone else.

**Recommendation: Position 1 on the Institutions page. Position 2 on the homepage.**

The homepage should never name a comparison — its job is positive positioning, and contrast-pair rhetoric already carries the work without a table. The Institutions page, however, is a due-diligence surface. A reader evaluating Kamino as a counterparty is also evaluating alternatives, and a well-framed comparison grid is a tool for their memo — not an attack.

The grid should be labeled *"Evaluation framework"* or *"What to look for in a regulated onchain credit counterparty"* rather than *"Why Kamino wins."* The dimensions (oversight, custody, mandate, transparency, track record) are the points Marius would raise in a sales meeting; putting them on the page lets them do the work without the sales call.

No competitor should be named in any cell, ever. The reader supplies the competitor from their mental comparison set. This is the classic Stripe move — Stripe never names PayPal, but every "accept any payment method globally in minutes" line is aimed at the PayPal comparison.

---

## 2.8 Show vault UI above the fold?

**The tension.** The research is split. For product-led companies (Linear, Mercury, Brex, Supabase) the product-in-hero is the single highest-impact move. For brand-led companies (Anthropic, Morpho) the product UI is deliberately absent above the fold. Kamino has a beautiful vault UI; the Institutional Yield vault in particular has a Haruko-backed real-time data panel that is unusually strong product surface. Should it be hero real estate?

**The positions.**

1. **Hero visual is the IY vault UI with live Haruko data.** The product is the argument. The claim "Connecting global capital to the new financial system" is paired with a live UI showing the loan portfolio.
2. **Hero visual is typographic / brand.** The product appears lower on the page as merchandising. This is the Adyen / Ondo discipline.
3. **Hero visual is a hybrid — branded typographic hero, with an immediately-below second section showing the IY vault UI.**

**Landing-page consequences.**

*Position 1:* Mercury-level boldness. The homepage is a product demo with a positioning claim wrapping it. Highest retention impact for visitors who want to see proof. Risk: the visual anchors the brand to *one product* (IY) at the expense of the platform story.

*Position 2:* Institutional discipline. Typographic hero, no product UI above the fold. Lets the claim breathe. Requires that the rest of the page compensate with strong mid-page product merchandising.

*Position 3:* Classic five-section homepage pattern. Brand hero → product reveal in Section 2. This is Stripe's approach for most of the past decade.

**Recommendation: Position 3 — branded typographic hero, vault UI in Section 2 or adjacent to the IY block.**

The hero is locked as a single sentence in two visual lines. That copy works best with a typographic treatment — ideally with subtle background motion or a brand-anchored abstract visual, not a product screenshot. The hero should not be cluttered by a dashboard.

But the page should show vault UI *in the first scroll-beat after the hero* — specifically the Haruko-backed IY vault panel with real-time per-loan data. That is the single strongest piece of product surface the protocol has, and it proves the "transparency" claim visually in a way no logo or testimonial can. The research principle is clear (§7 of Part 3 of the external research): *"Show the product if you have one. Show the brand if you don't."* Kamino has one. Show it.

The IY vault UI in Section 2 also does structural work: it makes the Institutional Yield block (Tension §2.5) both visually distinctive and product-credible. It stands in for the "unarguable stat" that the research calls out as the pattern to inherit from Stripe and Mercury.

---

## 2.9 Jupiter Lend block — how to handle the reputational risk on the landing page?

**The tension.** The December 2025 Jupiter Lend refinance block is a live reputational drag that Jupiter and some CT commentators have framed as anti-competitive. Kamino's defense (Fluid rehypothecation risk) is technically defensible but optically costly in DeFi culture. §13.5 frames the strategic line: *"stand by the decision (the rehypothecation critique is real) without appearing to oppose 'open finance' as a principle."*

**The positions.**

1. **Proactively claim an open-finance principle somewhere on the landing page.** The Company or Security page gets a paragraph naming Kamino's position on composability, rehypothecation, and open-finance philosophy.
2. **Stay silent. Do not address the incident. Let the positive-framing discipline carry the weight.**
3. **Address the underlying principle (rehypothecation, title transfer, collateral protection) without ever mentioning Jupiter Lend or the block.** The IY final announcement already does this — *"rehypothecation is contractually prohibited"* is a product fact that implicitly explains Kamino's worldview.

**Landing-page consequences.**

*Position 1:* A public "what we believe" statement about open finance risks either (a) reading as defensive retrofit, or (b) inviting a point-by-point rebuttal from Jupiter or allied commentators. The brand is opening a surface that does not currently exist.

*Position 2:* The incident fades from the narrative as the product story grows. Most non-CT visitors to kamino.com have no idea it happened. Silence is viable. Risk: when the incident is raised in sales conversations or PR, there is no official brand-level statement to point to.

*Position 3:* The product facts (no title transfer, rehypothecation prohibited, Scope oracle protocol-controlled) are surfaced as positive claims across the Institutional Yield, Off-Chain Collateral, and Institutions pages. These claims implicitly explain Kamino's safety worldview without ever litigating Jupiter Lend. A reader who has heard the Jupiter critique finds the Kamino position in the product documentation where it belongs — as structural decisions, not reactive statements.

**Recommendation: Position 3.**

The landing page is not the right surface for a direct response to the Jupiter Lend controversy. The brand should continue to surface the underlying risk-philosophy principles — *rehypothecation prohibited, collateral title preserved, oracle protocol-controlled, zero bad debt* — as positive structural claims wherever they are product-relevant. These claims, taken together, add up to Kamino's worldview on risk and composability without ever needing to name a counterparty.

If and when a direct public discussion of the Jupiter Lend incident becomes necessary, it belongs on the blog or a governance post, not on the landing page. The landing page can link to such a post via `/about` or `/security` without surfacing it.

A related discipline: avoid any landing-page language that could be read as hostile to "open finance" — the principle-framing principles already enforce this. *"Isolated markets for asset-specific risk control"* (positive framing) is fine; *"protected from composability risk"* (negative, could imply anti-composability) is not.

---

## 2.10 The "no equity, only KMNO" Foundation story — where does it live?

**The tension.** The Foundation + no-equity + all-KMNO structure is genuinely unusual and is a real credibility asset with regulated counterparties (§9.4). It is also opaque — a TradFi reader lands on it and does not immediately parse the advantage. Surfacing it prominently risks making Kamino look like a crypto-project-with-unusual-governance; burying it risks losing a real trust signal.

**The positions.**

1. **Homepage-level disclosure.** A short paragraph or block on the homepage naming the Foundation structure.
2. **Company page-only.** The Foundation story lives on `/about` or `/company`, with a quick one-line summary and a link.
3. **Institutions page-level.** The Foundation story is surfaced specifically to the audience most likely to value it (regulated counterparties).
4. **Multiple placements — Company page + Institutions page + footer link.**

**Landing-page consequences.**

*Position 1:* Risk of homepage clutter. A "what is Kamino" box on a homepage usually ends up as a filler section. The Foundation story is also nuanced enough that a one-paragraph homepage summary undersells it.

*Position 2:* The most disciplined choice. Visitors who care find the story. The tradeoff is low discoverability for regulated counterparties who should know about it but may not scroll to Company.

*Position 3:* A targeted surface. Institutions care; they are also the audience with the highest search cost for trust signals. A Foundation block on the Institutions page — alongside the regulatory structure, audits, and custody partners — reads as corporate structure disclosure, which is how a CIO wants to receive it.

*Position 4:* Redundancy is fine for a genuinely differentiating asset. Footer link for visibility, Company page for depth, Institutions page for contextual trust.

**Recommendation: Position 4 — multiple placements, depth varies by page.**

The Foundation story is unusual enough to be an asset and important enough to surface in multiple contexts. But the homepage is not the right place for the depth. Put it:

- **Footer:** a link labeled *"Governed by the Kamino Foundation"* → `/about` or `/foundation`.
- **Company / About page:** the full Foundation story. Two paragraphs summarizing the "There Is Only KMNO v4" structure (Cayman ownerless foundation, no equity, mission-locked, all revenue accrues to Foundation). This is the canonical source of truth on-site.
- **Institutions page:** a one-paragraph block titled *"Corporate structure"* sitting adjacent to *"Regulatory structure"*. *"Kamino is operated by the Kamino Foundation, a Cayman ownerless foundation company. No equity. No shareholders. All revenue reinvests into the protocol per the Foundation's charter."* This is legible to a CIO reading diligence.

The homepage does not mention the Foundation explicitly. The Foundation story is a layer-two claim — important, but it competes for hero real estate with the hero claim itself and should not displace it.

---

Ten tensions; most have clean recommendations; a few are coupled. Two of them (§2.1, §2.5) are load-bearing for the structural design of the site. Three (§2.6, §2.8, §2.10) affect only mid-page sections. The rest shape tone and content. Dawid should expect to push back on at least two of these — the point of naming them is that each is now a decision, not a drift.

---

# PART 3 — Prioritized roadmap

"No V1 — scope the whole picture" is a real instruction, and this section respects it. The question is not *what ships first* in a product-release sense. It is *which decisions unblock the most downstream work*, which pages can be drafted in parallel, and which dependencies serially block everything until they are resolved. The recommendation here is not a Gantt chart. It is a decision ladder.

## 3.1 The 3–5 highest-leverage decisions

In priority order:

**Decision 1: Confirm Individuals gets a dedicated page.** (Tension §2.1.) This is the single highest-leverage call because it changes the information architecture for the entire site. If Individuals is a page, the four-box router is structurally consistent, audience-page copy work parallelizes cleanly, and the sitemap is locked. If Individuals is a route-through, the router breaks symmetry and the Individuals box needs a specific interaction-model different from the other three. Resolve first.

**Decision 2: Lock the homepage institutional-vs-retail balance.** (Tension §2.2.) This determines which sections stay on the homepage, which move to audience pages, and how the Yield Performance / Curated Products blocks are framed. Without this call, every downstream section is ambiguously scoped. The recommendation (balance, tilted institutional) unblocks the section-by-section layout work.

**Decision 3: Confirm IY gets a dedicated homepage block.** (Tension §2.5.) This is the product-merchandising call on the homepage. If IY has a homepage block, it affects the proof strip design, the section sequencing, the entry animation to the Institutions audience page, and the IY product page depth. If it does not, the Institutions page carries more weight. Resolve early.

**Decision 4: Hero visual direction.** (Tension §2.8.) Typographic vs product-UI above the fold drives the entire visual design system, motion brief, and creative-direction pipeline. This is a design decision but it depends on the first three strategic decisions. Resolve only after Decisions 1–3 are called.

**Decision 5: Webapp location routing.** (From the current spec's open questions: "Webapp location — keep at `kamino.com/` and serve landing at subdomain, or relocate webapp to `app.kamino.com` / `kamino.com/app`?") This is the single biggest *technical* blocker. The current reality — that `kamino.com/` *is* the webapp — means the landing page cannot go live at the canonical URL without a migration. This decision unblocks the launch, not the design work. But it needs to be called in parallel with the design decisions because the migration work takes real engineering time.

Of the five, Decisions 1, 2, and 3 block copy and design in different ways. Decisions 4 and 5 block the build phase. Resolving 1–3 first lets copywriting begin while design and engineering prep for 4 and 5.

## 3.2 Which sections can be drafted in parallel

**Parallelizable now:**
- Homepage hero treatment and motion brief (hero copy is locked; visual can explore)
- Proof strip live-data integration spec (technical — owns the data pipeline question)
- Audience Router visual and entry-animation exploration (box sequence and motion)
- Per-audience page content drafts — all four can be written in parallel by different writers once Decision 1 is locked
- Security page (does not depend on other decisions; is largely a refactor of existing content)
- Footer content (largely existing)

**Serial dependencies:**
- Institutional Yield homepage block depends on Decision 3
- Curated Products / Yield Performance block framing depends on Decision 2
- Individuals audience page depends on Decision 1
- Hero visual direction depends on Decisions 1, 2, and 3 (the claim-tone-merchandising triad)
- Testimonial blocks depend on commercial negotiations with Anchorage / FalconX / Solana Company
- Entry animation motion brief depends on Decision 4

The single parallel gain is that all four audience pages can be drafted concurrently once Decision 1 is locked. This is the biggest workload compression available.

## 3.3 Audience page sequencing

Recommended order of full-spec and content development:

**First: Institutions.**

Rationale: Institutional Yield is the flagship product launch and the strategic spearhead of the rebrand (§4.8). The Institutions page is the highest-leverage B2B surface. It is also the audience page where the homepage's hero claim most directly lands — "Connecting global capital to the new financial system" is, in practice, a line written *for* institutions. Getting this page right validates the hero; getting it wrong undermines it.

Institutions also has the most complete raw material already in place: the IY final announcement, the PR brief, the Off-Chain Collateral memo, the Private Credit external memo, and `~11-point-2` of the deep-comprehension doc. First-draft content can largely be assembled from existing documents.

**Second: Issuers.**

Rationale: PRIME is the validator case study — a $0→$600M proof point in four months (§2) — and the Issuers page is where the PRIME story does the most strategic work. The Issuers audience is also the smallest and most commercially consequential per-logo, so a tight, polished page has outsized pipeline impact. The PRIME product spec already exists (`/Users/dawid/Github/Product/specs/prime-product-page.md`) and translates cleanly into the hero case study block.

Issuers should ship alongside or immediately after Institutions because the two audiences' proof points overlap (Anchorage, Chainlink, Figure, etc.) and the trust vocabulary is shared. Writing them in the same sprint produces internal consistency.

**Third: Fintechs.**

Rationale: BuildKit is live with Altitude as the first announced integration. The Fintechs page needs concrete integration evidence (code snippets, timeline, revenue-share numbers) and those require some product-page collaboration. The audience is also further from the core "institutional credit infrastructure" positioning, so the page can ship slightly later without undermining the homepage claim. Third in order, not third in importance.

**Fourth: Individuals.**

Rationale: The Individuals page is mostly refactor work — the content (curators, Multiply, KMNO, vault APYs, Seasons) largely exists across other surfaces and needs a coherent page-level assembly rather than net-new content development. The warmer voice and the KMNO block need specific copy work, but the structural lift is lower than the other three pages. Shipping last means the brand-voice calibration benefits from what is learned writing the first three.

The tradeoff here is real: Individuals last means the retail audience is the *last* audience to get the "built for you" room. If that creates internal noise (retail CT picking up "the new Kamino has nothing for me"), the sequence can shift. But it is worth noting that the current `/earn`, `/borrow`, `/multiply`, `/swap` surfaces already serve the retail audience well; the Individuals page is narrative overlay, not functional infrastructure. It can ship last without disrupting retail user behavior.

## 3.4 Other blockers

Beyond decisions 1–5, five operational blockers need explicit ownership.

**Returning-user detection.** The Coinbase-pattern routing (first-time visitor → landing; returning user with wallet → webapp) is the core UX promise of the rebuild. Technical decisions needed: cookie-only, wallet-only, or both? Session expiry? Opt-out ("always show landing" toggle)? An initial scoping doc with implementation options should be produced in parallel with copy work — this is the kind of technical decision that easily blocks launch if left to the end.

**Webapp location routing.** (Decision 5.) `kamino.com/` is currently the webapp. A marketing homepage at `kamino.com/` requires either (a) migrating the webapp to `app.kamino.com` or `kamino.com/app`, or (b) serving the landing page from a subdomain (`www.kamino.com` or `marketing.kamino.com`) with `kamino.com/` redirecting conditionally. Every option has costs — URL equity, SEO, link-rot, user confusion. This requires an engineering decision memo with a recommendation, independent of design work.

**Live-data pipeline for the proof strip.** The proof strip stats (AUM, Loans Originated, Active Loans, Assets Onboarded) must be fed from real protocol data. Required: data source (subgraph / internal API / onchain reads), refresh cadence (build-time, ISR, client-side), fallback behavior if the API fails, who owns the data transformation. This is a 1–2 engineering day effort if the data already exists internally; larger if a new pipeline is required. Should be scoped early and assigned an owner.

**CRM for B2B lead capture.** The audience pages' contact blocks (especially Institutions, Issuers, Fintechs) need to capture leads and route them into a CRM. Decisions: HubSpot, Salesforce, Attio, Close, or inbox-only? Who owns the pipeline? SLA for response? Calendly integration for Mark and Cheryl? This is a sales-ops decision more than a product decision, but it is a genuine launch blocker — a B2B page without lead capture is a B2B page shouting into a void.

**Entry animation motion brief.** The locked spec calls for an entry animation when a user clicks any of the four audience router boxes — *"design/motion brief to be drafted."* This is a creative-direction task that depends on hero visual direction (Decision 4) and the audience page designs. Motion brief should list: animation duration target (600–900ms range), whether it is page-transition or same-page, how the URL updates, how the user returns, what happens on mobile, what happens with reduced-motion preferences. The Linear "new species of product tool" reveal animation is a potential reference; a Stripe mega-menu opening flourish is another. Motion brief can start in parallel with audience page wireframes, but final animations need the pages they transition into to exist first.

**Per-audience copy drafting.** Once Decision 1 is locked, each audience page needs a dedicated copywriter-day per draft. Mark / Cheryl / institutional partnerships for the Institutions page facts. PRIME team for the Issuers page. Altitude / BuildKit team for the Fintechs page. Dawid / whoever owns retail voice for Individuals. These are short engagements (2–4 hours each) with subject matter experts; scheduling them early prevents drafting-at-the-end-of-the-sprint bottlenecks.

## 3.5 The decision checklist

For Dawid's walkthrough. Each decision framed as: *open question → options → recommendation → dependency (what unblocks once this is decided)*.

**Decision 1.** Does the Individuals audience get a dedicated `/individuals` page, or does the Individuals box route through to `/earn`?
- Options: dedicated page / route-through / hybrid
- Recommendation: dedicated page (Part 2 §2.1)
- Unblocks: Individuals audience page spec; router symmetry; sitemap lock

**Decision 2.** How hard should the homepage lean institutional vs. retail?
- Options: full institutional / balanced (tilted institutional) / retail-first
- Recommendation: balanced, tilted institutional (Part 2 §2.2)
- Unblocks: homepage section sequence; Curated Products / Yield Performance framing; voice calibration across sections

**Decision 3.** Does IY get a dedicated block on the homepage?
- Options: dedicated homepage block / audience-card only / launch-mode flagship
- Recommendation: dedicated block (Part 2 §2.5)
- Unblocks: homepage section layout; hero adjacency; IY product page scope

**Decision 4.** Is the hero visual typographic, product-UI, or hybrid?
- Options: typographic / product-UI in hero / typographic hero with product in Section 2
- Recommendation: hybrid (Part 2 §2.8)
- Unblocks: hero motion brief; visual design system; Section 2 design brief

**Decision 5.** Where does the webapp live?
- Options: `kamino.com/` (as today) with landing at subdomain / webapp at `app.kamino.com` / webapp at `kamino.com/app`
- Recommendation: webapp at `app.kamino.com` (cleaner URL structure and cleaner SEO separation)
- Unblocks: launch migration plan; returning-user detection scope; docs/app cross-linking

**Decision 6.** Does KMNO appear on the homepage?
- Options: yes, dedicated block / Individuals and Company pages only / footer only
- Recommendation: Individuals and Company only (Part 2 §2.3)
- Unblocks: Company page scope; Individuals page scope; footer design

**Decision 7.** Do agents appear as a first-class audience?
- Options: homepage hero altitude / Fintechs subheader / silent
- Recommendation: Fintechs subheader (Part 2 §2.4)
- Unblocks: Fintechs hero copy; BuildKit messaging

**Decision 8.** Do APYs appear on the homepage?
- Options: prominently / comparison-only / none
- Recommendation: comparison-only with Curated Products refactored (Part 2 §2.6)
- Unblocks: Yield Performance block design; Curated Products block framing

**Decision 9.** Does the homepage or Institutions page include a competitor-comparison framework?
- Options: no reference / contrast-pair only / evaluation grid on Institutions page
- Recommendation: contrast-pair on homepage; evaluation grid on Institutions page (Part 2 §2.7)
- Unblocks: Institutions page design brief; IY product page comparison content

**Decision 10.** How should the Foundation / no-equity / KMNO structure be surfaced?
- Options: homepage block / Company page only / Institutions + Company / footer-plus-multiple-placements
- Recommendation: footer + Company + Institutions, not homepage (Part 2 §2.10)
- Unblocks: Company page scope; Institutions page trust block; footer link structure

**Decision 11.** Is the homepage willing to mention Jupiter Lend or open-finance principles?
- Options: proactive statement / silence / implicit product-fact framing
- Recommendation: implicit product-fact framing (Part 2 §2.9)
- Unblocks: Security page scope; IY page comparison content

**Decision 12.** Which named institutional testimonials are achievable at launch?
- Options: ship without named testimonials / ship with logo grid / ship with at least one named testimonial
- Recommendation: design for named testimonial slot; ship with logo grid; plan negotiations with Anchorage, FalconX, Solana Company in parallel with build
- Unblocks: Institutions page social-proof block; content readiness checklist

Decisions 1–5 are the structural ladder. Decisions 6–12 are feature-level calls that together shape tone and trust signaling across the site. All twelve can be addressed in a single working session with the design and marketing leads; the outputs become the drafting brief.


---

# PART 4 — Contrarian insights and opinionated takes

This section takes positions most reviewers would skip. Some are arguable; that is the point. If all twelve of these read as obviously correct, they are not contrarian and they are not earning their space.

## 4.1 Morpho is the template. Mercury is the voice. Linear is the discipline.

The research calls out Morpho as the sleeper pick for Kamino, Mercury as the "best example of making a regulated product feel like modern software," and Linear as the best landing page in the set. Most synthesis writers would pick one and borrow from it. The right move for Kamino is to steal something specific from each, deliberately.

From **Morpho**: the structural template — infrastructural claim, enterprise partners shown early, institutional security language without losing crypto-native credibility, refusal to flash APYs above the fold, the three-segment product architecture (Consumer / Prime / Infra). Kamino's four-audience router is one level more ambitious than Morpho's three-segment split, but the DNA is the same. The Morpho homepage line *"Enterprises connect with Morpho to power any lending or borrowing use case at scale"* is almost exactly what Kamino needs for its Institutions audience-router box, translated for institutional counterparties.

From **Mercury**: the voice discipline and the antithesis-rhythm. *"Banking's been a headache. Now, it's a head start."* / *"Standard protection stops short. Mercury goes further."* That paired-clause rhythm is the single most memorable copy pattern in the 25-site set and the easiest to adopt. Kamino already has candidate material: *"Standard DeFi transparency stops at pool stats. Kamino Institutional Yield shows every loan, every LTV, every custody leg."* Or: *"Most onchain credit lives in smart contracts. Kamino's institutional credit lives in regulated operations that also happen to be onchain."* These are not perfect — they would go through iteration — but the rhythm is directly inheritable from Mercury.

From **Linear**: the discipline of opinionated declaration and product-as-argument. *"Issue tracking is dead."* / *"A new species of product tool."* The version for Kamino is probably not a dead-category claim (Kamino is not trying to kill "onchain lending"; it is trying to redefine it) but it is the same move: a sentence that stakes a position rather than describing a feature. Candidate Linear-style line for the Kamino Institutions page: *"This is institutional credit. It happens to run onchain."* Or for the homepage Section 2: *"The credit layer for the onchain economy."* Either would sit next to Linear's hero without looking out of place.

The combination — Morpho template, Mercury voice, Linear discipline — is not a pastiche. Each brand does one thing in the 25-site set better than any other, and Kamino can compose those three moves into a distinctive identity without copying any of them wholesale.

## 4.2 The trap Kamino is about to walk into: category-authorship discipline falls apart on audience pages

The homepage hero *"Connecting global capital to the new financial system"* is good. It is in the category-authorship tradition the research identifies as the top-tier move. But that altitude is extraordinarily hard to sustain across eight homepage sections and four audience pages. The trap Kamino is likely to walk into: the hero reads like Stripe, the Institutions page reads like Stripe, the Issuers page reads like Morpho, the Fintechs page reads like Supabase, and the Individuals page reads like Chime. All are fine, but the brand evaporates.

The discipline that prevents this is choosing a single bound vocabulary that persists across all surfaces. Across the 25 sites, the brands that do this best (Linear, Mercury, Anthropic, Morpho) repeat specific words across every page: Linear reuses "purpose-built," "action-biased," "new species," "for the AI era." Mercury reuses "banking built on software," "head start," "radically different." Morpho reuses "universal," "serves, not extracts," "open by default."

For Kamino, the bound vocabulary candidate list, extracted from the existing materials:

- *Credit infrastructure* (not "lending protocol")
- *Onchain credit* (not "DeFi lending")
- *Institutional credit* (the product category for IY and Off-Chain Collateral)
- *Qualified custody* (preferred over "institutional custody" — it is the regulatory term)
- *Overcollateralized* (the descriptive verb-adjective)
- *Transparency* (standalone — Kamino's transparency claim is unusual and should be named)
- *Zero bad debt* (the unarguable metric)
- *Regulated / regulated-grade* (depending on register)
- *Connective* (implied in the hero — appears elsewhere as "connective tissue," "connecting")

Every audience page should repeat at least three of these words in primary copy. The homepage should repeat at least six. This is the discipline Linear exhibits when it uses "purpose-built" on every major page without fatigue — the repetition becomes brand signature, not redundancy.

## 4.3 The single copy move that would make an outsized difference: "Kamino's transparency standard"

Most observers will focus on the hero and spend a week arguing about "Connecting global capital to the new financial system" vs. alternatives. The line is locked and good. The highest-leverage copy decision elsewhere on the site is *how Kamino names its transparency story*.

The IY final announcement uses the phrase *"A New Transparency Standard"* as a section header. This is unusually strong copy. The construction *"transparency standard"* — like *"the answer engine"* (Perplexity) or *"the AI cloud"* (Vercel) or *"universal lending network"* (Morpho) — is a category-coining claim. The specific data pairing (real-time per-loan via Haruko + monthly Andersen UK attestation) is categorically better than both traditional private credit (quarterly PDF) and typical DeFi (pool-level stats). That is a real claim Kamino can own.

The opinionated position: *"A new transparency standard"* or *"Kamino Transparency"* should be promoted from a section header on a single product announcement to a brand-level claim that appears on the homepage, the Institutions page, the Issuers page, and the Fintechs page. It should be a repeated phrase, a visual trust marker, and potentially a named program (see §4.4 on research initiatives).

The specific text to steal from the IY final announcement:

> *"Existing products that service off-chain borrow demand have operated with limited visibility into underlying positions. Kamino Institutional Yield provides continuous, granular visibility into the health and composition of the entire loan portfolio."*

That paragraph, slightly generalized, is the spine of a homepage-level transparency claim. Something like:

> *"Credit infrastructure runs on information. Kamino's transparency standard — real-time per-loan data, independent monthly attestation, daily regulatory reporting — is the information layer that lets institutional capital trust what happens onchain."*

This is the single line most likely to be the breakthrough copy move for the rebuild. It is specific, owned, defensible, and differentiated against Aave, Morpho, and Maple. And it works for all four audiences — institutions want it for diligence, issuers want it for their investors, fintechs want it for their regulators, and individuals want it because it is proof the protocol is not lying about its yields.

## 4.4 Kamino's Project Glasswing: the "named research initiative" move

The research calls this out as one of the underused patterns: *"Anthropic's Project Glasswing second-section is a surprisingly strong pattern. It communicates 'we are doing things in the world' without making a product claim."* The recommendation: Kamino steals this.

Kamino has natural material for named initiatives. Candidates:

- **The Kamino Transparency Standard** — the combined Haruko + Andersen + FMA reporting stack. Named, trademarkable, brand-anchored.
- **Project Pristine** — the internal "pristine product" philosophy made public. The term is already in Marius's personal voice (*"This is a pristine fucking product"*). A named initiative around risk-first product design is genuinely distinctive.
- **The Kamino Risk Council** — the internal risk-assessment body that approves new markets and assets. Making it a public-facing initiative with a name and a page would be a credible trust signal. Right now it is buried.
- **Scope** — the in-house oracle already has a name. Promoting it to a branded "Project Scope" or "Scope Oracle" story on the Security page, with a public page explaining its architecture and audit history, is a real differentiator.
- **Project Pristine II / Kamino Institutional Credit Initiative** — the cluster of new institutional products (IY, Off-Chain Collateral, Fixed Rates, BuildKit, RWA DEX, Borrow Intents) from the December 2025 governance post. Right now they are a bulleted list. A named, branded initiative — with a page, a dated launch narrative, and a public milestone tracker — reads as substantive corporate activity rather than protocol-feature accretion.

The specific recommendation: pick *one* named initiative for the first rebuild cycle. The best candidate is **the Kamino Transparency Standard** — it has the clearest outward-facing narrative, it composes with the existing product story, and it is the single most competitively distinctive asset Kamino has. Anthropic's Project Glasswing has a page at `/research/glasswing`; Kamino's Transparency Standard could live at `/transparency` with a page that is part product story, part infrastructure reference, part brand anchor.

This move costs one page of work and unlocks repeated references across the homepage, every audience page, the docs, the PR narrative, and future product launches.


## 4.5 The four-audience router is probably right. The sequencing inside it is probably wrong.

The router is a locked decision and defensibly so — the four audiences are strategically distinct and each merits its own room. But the *order* of the boxes — Individuals · Institutions · Issuers · Fintechs — is worth challenging.

Three candidate orderings:

1. **Current: Individuals · Institutions · Issuers · Fintechs.** Retail first, then size-tier down into specialized audiences.
2. **Institutional-first: Institutions · Issuers · Fintechs · Individuals.** The strategic narrative order — lead with the story the brand is trying to tell.
3. **Scale-descending: Institutions · Issuers · Individuals · Fintechs.** The "biggest fish first" ordering.

The opinionated take: **Option 2, institutional-first, is probably right.**

The argument: visual left-to-right reading order is load-bearing for a router. The first box is the brand's first audience claim; the last box is the afterthought. If the homepage hero is *"Connecting global capital to the new financial system"* and the first box under it is *Individuals*, the hero and the router are contradicting each other. The hero says *"we connect capital,"* the router says *"we start with retail."* That is the wrong signal.

Reversing the order to *Institutions · Issuers · Fintechs · Individuals* tells a coherent story: the hero says connective tissue, the first door is institutional capital, the second door is the issuers who need to reach institutional capital, the third door is the fintechs that distribute to end users, and the fourth door is the end users themselves. The router becomes a narrative flow — capital moves left to right — that mirrors the hero's claim.

The counter-argument: *Individuals* first reassures the existing retail community that they are not being left behind, which is exactly the retail-abandonment risk §13.1 flags. Putting Individuals last risks reading as "you are a minor audience." This is a real concern.

Resolution: the order *Institutions · Issuers · Fintechs · Individuals* is strategically cleaner, but the Individuals page itself must compensate with warmth and explicit "we built this for you" copy. A less visible Individuals box is compatible with a strong Individuals page. And since most existing retail users go directly to the webapp (via returning-user detection), the router box order matters mostly to new visitors — for whom the institutional narrative is the right leading story.

This is the single locked decision in the spec that is worth challenging — Dawid can push back, but the case for reversing the order is real.

## 4.6 Kamino's signature physical object: the BTC-in-custody visualization, not a card

Monzo has the Hot Coral card. Nubank has the purple card. Plaid has the Ben Franklin face. Raycast has the keyboard. Apple has the iPhone. The research calls out that a signature physical (or quasi-physical) object becomes an anchor for brand trust. Kamino does not have one.

The options for Kamino are limited because Kamino is not a consumer product with a card. But there is a candidate: *the BTC-in-custody visualization*.

The Institutional Yield vault UI, powered by Haruko, shows real-time loan portfolio data — per-loan LTV, collateral value, active loans, and custody legs. This is a genuinely distinctive product surface that no competitor has. It is also visually compelling — a dashboard of real-time institutional credit positions rendered onchain. If Kamino treats this dashboard as a brand object — appearing on the homepage, the Institutions page, the Issuers page, and in the video content — it becomes the visual equivalent of the Hot Coral card. It is *the thing Kamino looks like*.

The opinionated position: **commission a branded version of the IY vault UI — slightly idealized, with Kamino typography and color, shown as a static "hero visual" across surfaces.** This is not the literal product UI (which is functional and slightly busier); it is a designed-for-brand version that preserves the real data structure. Morpho does something similar with the network-flow visualizations on their homepage.

The secondary candidate: the Kamino dot-grid / bar-pattern iconography that already appears in the PRIME deck. If the dot-grid became a repeated brand motif across the site (the way Plaid's rainbow gradient persists), it would serve a similar anchoring role at a more abstract altitude.

Pick one. Commit. The research is clear that commitment to one idea beats hero-illustration + product-shot + logo-wall across any page.

## 4.7 The Marius "pristine product" voice almost certainly works on a landing page — but only in specific slots

Marius's personal voice — *"This is a pristine fucking product,"* *"I've been waiting for them to blow up,"* *"Don't go and put 8% in Apollo"* — is one of the most distinctive founder voices in DeFi. The question: can it actually work on a public landing page? Or does the register shift from internal Slack to kamino.com break it?

The contrarian take: **yes, it can work, but only in founder-voice slots, and with very specific placement.**

The research-validated pattern is that founder voice on a landing page works when (a) it is attributed, (b) it is short, (c) it is in a clearly-marked testimonial or quote slot, and (d) it does not dominate the overall register. Mercury uses Karri Saarinen's voice, Eric Wu's voice, Paul Copplestone's voice — all with attribution, all short, all in framed quote slots. Linear uses Kaz Nejatian's voice with attribution: *"It has the right opinions for fast moving teams."*

The Marius voice that would translate to a landing page, heavily cleaned up:

- *"Every decision we make asks one question: does this make the product safer or riskier? If it's riskier, we don't do it — even if it means slightly less yield."* — a slightly cleaned version of the actual Marius quote (§12.3).
- *"When you buy an ETF, you know exactly what's in it. The formula is defined. It doesn't change. That's what we built."* — already in the mental-model list (§12.3).
- *"Liquidations are bad UX."* — the pure form.

These attributed to *Marius Ciubotariu, Co-founder* with a photo or just a byline, in a single quote slot (probably on the Institutions page or the Security page), are enormously valuable. They are the kind of line no competitor can copy because they are personally owned.

The explicit version of the voice (profanity, blunt criticism of competitors, insider crypto slang) should never appear on the landing page. That register lives on Twitter and in podcast interviews. The register gap is actually a brand asset — the sanitized landing-page Marius voice reads as authoritative; the raw Marius voice on Twitter reads as authentic. The two reinforce each other.

## 4.8 The "infrastructure" positioning is in slight tension with the retail-facing Earn/Multiply reality — and there is a better meta-framing

Kamino calls itself "infrastructure." That is a Stripe / Morpho frame. The reality is that Kamino also has a direct-to-user product (Earn / Multiply / Borrow) that serves retail users. Stripe does not have PayPal. Kamino has PayPal and Stripe.

The research calls out this tension: *"This is a Stripe-vs-PayPal problem. Stripe won 'infrastructure'; it's a B2B company. Kamino is trying to be Stripe and PayPal simultaneously."* (§13.2)

The contrarian take: there is a better meta-framing available. Kamino is not infrastructure and it is not a consumer product. Kamino is a *market*.

A market has participants on both sides. It has issuers and buyers. It has retail and institutional. It has permissioned and permissionless sides. It has wholesale and retail surfaces. It is simultaneously infrastructure (the plumbing between counterparties) and product (the place where trade happens). This is how the NYSE frames itself. It is how Bloomberg frames itself. It is how a real exchange or market-operator frames itself.

The specific copy move: replace "infrastructure" with "market" in strategic slots. Instead of *"the credit infrastructure for the onchain economy,"* try *"the credit market for the onchain economy."* Instead of *"infrastructure connecting global capital,"* try *"the market connecting global capital."* The word "market" is more honest to what Kamino actually is — a place where retail lenders, institutional borrowers, asset issuers, and fintechs meet — and it is institutionally legible in a way "infrastructure" is not.

This also resolves the four-audience router. Markets have four sides: supply, demand, issuers, distribution. Individuals = supply (retail lenders). Institutions = demand (institutional borrowers) and supply (institutional LPs). Issuers = the asset side. Fintechs = distribution. Each of the four boxes is a side of the same market.

Pushing this framing to the homepage: *"Solana's largest credit market"* appears already in some of the hero subhead candidates. Promote that phrasing into primary brand vocabulary. The claim is defensible (Kamino has ~60%+ of Solana lending TVL). It is a better meta-framing than either "infrastructure" or "protocol." And it is one word that resolves the most visible internal tension in the brand positioning.

This is the most ambitious recommendation in this document. It is also the one most likely to be rejected — "infrastructure" is already locked in some places. But it is worth raising because the word "market" does real work that "infrastructure" cannot.

## 4.9 The recency strip — the single most underused homepage surface

The research calls out the "editorial / press row" pattern — *"Mercury in the spotlight. Linear's 'Now.' Anthropic's news. This is a recency signal — it communicates aliveness and accelerating narrative."* Kamino has extraordinary material for this: the FMA license announcement, the Andersen UK attestations (monthly, ongoing), the Gauntlet partnership (Nov 2025), the Solana Company first off-chain-collateral borrow (Feb 2026), the IY launch (April 2026), the December 2025 strategic governance post.

Yet the current homepage spec does not include a recency strip.

Adding it is low-cost, high-impact. A simple "What's new" strip at Section 7 or 8 of the homepage with four dated entries — *"Apr 14, 2026 — Institutional Yield launched with $25M deposit cap. Mar 2026 — Andersen UK attestation published. Feb 2026 — Solana Company borrows against SOL at Anchorage Digital. Nov 2025 — Gauntlet joins as official vault curator"* — communicates aliveness in a way static product cards cannot.

The Linear "Now" nav item is a live changelog surface. Kamino could do the same thing — a `/now` or `/latest` page that is a live feed of protocol milestones, linked from the top nav. This is a one-time build that pays off every week in brand-signal work.

The opinionated take: this should ship in the first rebuild cycle, not as a V2 enhancement. It is one of the lowest-effort, highest-signal additions available.

## 4.10 The "agents are coming" move Kamino is not yet ready for — but should design for

This extends Tension §2.4. The contrarian prediction: within 12 months, BuildKit will have more traffic from autonomous agents than from fintechs. This is not a claim Kamino should make today on the homepage. But the protocol and product infrastructure should be explicitly *designed for* that future — and the landing page should be designed to accommodate the eventual public claim.

Concrete implications:
- The Fintechs page (or a future `/developers` page) should have a structured API reference (the code-snippet pattern from Stripe) that is legible to both human developers and agent crawlers.
- The IY vault UI's transparency data should be available as a structured JSON feed, not just a visual dashboard. This is the Kamino Transparency Standard made machine-readable.
- BuildKit documentation should include an explicit "agent integration" section within 6 months — describing auth patterns, rate limits, and yield-request primitives that an agent can reason about.
- Reserve one of the four-box router positions for *Agents* as a future migration target. If the Individuals box is de-emphasized in the long term (as direct-to-webapp returning-user detection handles most retail flow), the router could evolve to *Institutions · Issuers · Fintechs · Agents* — a future-proofed version of the current architecture.

This is a future-facing take. The landing page does not need to reflect it today. But the decision to design for it (rather than retrofit) should be made now.

## 4.11 The one-sentence brand claim nobody has written yet

Every top-tier brand in the 25-site set has a single sentence that anchors the brand. Stripe: "financial infrastructure to grow your revenue." Mercury: "banking built on software, not ledger entries." Linear: "the product development system for teams and agents." Morpho: "connect to the universal lending network." These sentences travel — they appear on the homepage, in the PR, in Twitter bios, in board decks.

Kamino has a hero sentence (*"Connecting global capital to the new financial system"*) that is good but not quite this — it is a poetic claim, not a product claim. A companion line — shorter, product-claim register — is missing.

Candidates:

1. *"The credit market for the onchain economy."* — market framing, matches the §4.8 recommendation.
2. *"Onchain credit infrastructure with a regulated backbone."* — institutional register, factual.
3. *"The largest onchain credit market on Solana — open to individuals, institutions, issuers, and fintechs."* — literal, audience-inclusive, long.
4. *"Kamino is where onchain credit is built, regulated, and distributed."* — three-verb construction.

The pick depends on which meta-framing wins (infrastructure vs. market). The opinionated preference: *"The credit market for the onchain economy."* Seven words. It is the companion to the hero — where the hero makes the poetic claim, this makes the product claim. It would live in Twitter bio, press boilerplate, pitch deck opening slide, and the Company page hero. It does not replace the hero; it supplements it.

Writing this sentence and adopting it as boilerplate is a one-hour exercise with compounding brand payoff. The research pattern across the 25 sites suggests this is one of the highest-leverage copy decisions available, and it does not currently appear anywhere in the Kamino materials.

## 4.12 Final contrarian thought: the homepage is probably too product-dense — and the institutional brand Kamino wants cannot ship from a nine-section page

The current homepage spec has ten sections: hero, audience router, borrow capacity, yield performance, security, curated products, product overview, scale stats, social proof, footer CTA. That is closer to a Stripe or Notion homepage (product-dense) than to an Anthropic or Adyen homepage (trust-dense).

The institutional brand Kamino is trying to build is closer in register to Anthropic and Adyen than to Stripe and Notion. An Anthropic-register homepage has maybe five sections: hero, named research initiative, one stat, one testimonial, footer. An Adyen homepage has similarly restrained architecture.

The contrarian prediction: Kamino will end up scaling the current homepage spec back, not expanding it. The temptation to add more product merchandising will be constant. Resisting it is the discipline.

The ideal homepage is probably closer to:

1. Hero (locked)
2. Proof strip (locked) — unarguable numbers
3. Audience router (locked) — four doors
4. Institutional Yield block (the "named research initiative" equivalent)
5. Transparency Standard block (the category-coining claim)
6. Trust block (audits, regulation, custody, zero bad debt)
7. Recency strip (the living-brand signal)
8. Curator / partner logos
9. One named testimonial (when achievable)
10. Footer

That is a ten-slot page, but slots 6–10 are dense-but-compact. The Yield Performance block, Curated Products block, Product Overview block, and Scale Stats block from the current spec are subsumed — Yield Performance goes into the Transparency block, Curated Products moves to the Individuals page, Product Overview becomes a footer site-map, Scale Stats are absorbed into the Trust block.

The net effect is a homepage that is ~60% as dense as the current spec, but with every section doing harder brand work. It reads closer to Linear than to Stripe.

This is a real editorial recommendation. The brand's strategic register — regulated, institutional, Anthropic-adjacent — is genuinely incompatible with the Stripe/Notion product-merchandising homepage pattern. Kamino should pick its lane and trim accordingly.

---

## Closing

The work ahead is mostly decision-making, not drafting. Twelve decisions (Part 3 §3.5), three homepage-altitude shifts (transparency standard as brand claim, market as meta-framing, naming a research initiative), and four audience pages, done in the right order, with one bound vocabulary that persists across every surface.

The easy mistake is to ship a polished version of the current spec. The harder, better move is to use the rebuild as a reason to call the strategic decisions Kamino has been deferring — the four-audience router without equivocation, the institutional register without apology, the transparency standard as brand claim, the vault-UI as signature object, and the recency strip as the living-brand signal. Every one of these moves has research precedent and Kamino-specific material to back it up.

This document is the second half. The first half (Part A) lays out the homepage architecture; this one lays out what the audiences see after the router, what decisions the brand still has to call, and where the contrarian bets live. Taken together, they are a reasonably complete brief for the rebuild.
