# Kamino Landing Page — Thesis, Principles, Architecture

> Strategic synthesis for the Head of Product discussion. Derived from the 25-site external landing-page research (`research/01-landing-page-patterns.md`), the Kamino deep-comprehension document (`research/02-kamino-deep-comprehension.md`), the locked landing spec (`landing-website.md`), the Institutional Yield Final Announcement, the Multiply landing spec, and the navigation redesign context.
>
> Opinionated. Kamino-specific. Written to be pushed back on.

---

## PART 1 — The strategic thesis for Kamino's landing page

### 1.1 The single thing the page has to achieve

**The new kamino.com has one job: to be read as credit infrastructure, not as a DeFi protocol, by a person who has never heard of Kamino — while keeping the retail DeFi user who deposited yesterday feeling that they are exactly where they are supposed to be.**

Everything else is downstream. The AUM number, the testimonial selection, the vault UI, the hover states on the Audience Router — all of it earns its place by serving that single job.

Why this framing and not something else. The instinct on a landing-page rebuild is to optimize for conversion — new deposits, new leads, new integrations. That instinct is wrong for Kamino in April 2026, and it is wrong specifically for a 12-month window. Kamino already converts retail visitors. The engine works. TVL is $3B+. The Multiply product is ~62% of all Solana leverage. The Lend product sits at 60%+ of Solana lending by TVL. The conversion problem on kamino.com today is not a funnel problem. It is a *legibility* problem.

A CFO at a family office landing on the current kamino.com cannot tell whether this is a regulated product, a yield farm, or both. A fintech head of product evaluating BuildKit versus building in-house sees a consumer DeFi site and closes the tab before finding the API. A journalist writing about institutional onchain credit names Maple and Ondo and skips Kamino because the brand does not read the way those brands read. An FMA regulator, a Liechtenstein lending operation's compliance officer, a tokenization team at Figure or Securitize — none of them recognize kamino.com today as the home of the operation that just shipped Institutional Yield. This is the cost of staying at "largest Solana lender" brand altitude when the strategy has moved to "regulated-grade onchain credit infrastructure." Every month the site stays at the old altitude is a month the institutional thesis doesn't compound.

At the same time, the 300K+ individual users who treat Kamino as their primary Solana yield venue have to continue to feel that this is their site. The repositioning cannot read as abandonment. This is the tension the page has to hold, and it is why the Audience Router exists as a structural device rather than a navigation element.

The single job is legibility — specifically, legibility to the Institutional audience while preserving legibility to the Individual audience. That is a four-way pass/fail test the page either meets or doesn't:

- A crypto-native DeFi user (Phantom wallet, JitoSOL balance, has looped JLP before) scans the page and immediately sees a path that reads as their home.
- A fintech product lead (formerly built on Plaid, now evaluating onchain yield backends) scans the page and sees a distinct path that reads like a vendor evaluation.
- A family office allocator (first meaningful crypto allocation, due-diligence posture) scans the page and sees institutional vocabulary, regulatory posture, and named counterparties — not APY numbers and cartoon characters.
- A tokenizer at an RWA issuer (tokenized HELOCs, tokenized receivables, tokenized equities) scans the page and sees evidence — by proof point, not by claim — that Kamino is where their token becomes useful.

If the page passes all four, the strategic pivot compounds. If it passes only the first two, Kamino remains a DeFi protocol with aspirational language. If it passes only the last two, Kamino alienates its own base. The locked four-audience router is the acknowledgment of this test; the execution is what makes it real.

### 1.2 Three transferable insights from the 25-site research

**Insight 1 — Category authorship, not category description, is what separates top-tier from middle-tier.**

The external research is explicit: *"the best sites — Linear, Stripe, Mercury, Raycast, Morpho, Ramp — share a quality called category authorship. They are not 'the best X' in an existing category; they are naming or renaming the category itself."* Linear's "a new species of product tool." Stripe's "financial infrastructure." Morpho's "universal lending network." Mercury's "banking built on software." None of them describe what they do inside a known category. They name the category.

The locked hero "Connecting global capital to the new financial system" is already operating at this altitude. It is Kamino's category-authorship sentence. What the research shows — and what is easy to miss — is that the category claim in the hero has to be sustained through every subsequent section, or the claim collapses. Linear supports "a new species of product tool" with a product screenshot that *is* a new species of product tool. Morpho supports "universal lending network" by showing Coinbase, Binance, Ledger, Gemini, and Trust Wallet as partners in the second fold. Stripe supports "financial infrastructure" with $1.9T of payments volume in Section 3 and 135+ currencies in Section 5.

The moment the page drops to "on-chain lending platform" or "Solana's largest money market" or "the best yields on Solana" anywhere above the footer, the hero is retroactively degraded. For Kamino this is the single most important discipline: the category claim has to be load-bearing throughout the entire page. No section can contradict it. This is why the current draft's Section 7 ("Everything you need in one protocol") and Section 8 ("What sets Kamino apart — Kamino leads the Solana ecosystem in scale and safety") are a structural problem — they describe Kamino *inside* the category instead of *authoring* the category.

**Insight 2 — The Mercury trust-block pattern ("Standard protection stops short. Mercury goes further.") is the single most transferable rhetorical device in the entire research set, and it was built for Kamino.**

Mercury's signature trust-block heading is cited verbatim in the external research: *"Standard protection stops short. Mercury goes further."* The construction is a contrast-pair that positions Mercury's stack (FDIC sweep to $5M, Treasury backing, operational redundancy) against the ambient assumption that "banking = protected." It does two things at once: it acknowledges the reader's existing mental model, then it annexes the reader's trust by promising to exceed it.

This is the exact move Kamino has to make to monetize its regulatory and operational moat. Kamino's differentiators on this axis — Liechtenstein FMA supervision with daily regulatory reporting on the lending operation, monthly Andersen UK independent attestation, Haruko institutional data pipeline, 20 security audits, 4 formal verifications, zero bad debt across $19B+ originated, tripartite custody with no title transfer, rehypothecation contractually prohibited, Scope in-house oracle, Anchorage OCC-chartered custody for Off-Chain Collateral — are a collection of proof points that are individually strong and collectively devastating. They need a single rhetorical home. The Mercury construction provides that home. The draft heading: *"Standard DeFi protection stops at the smart contract. Kamino extends through regulation, custody, and continuous attestation."* Or cleaner still: *"DeFi trust ends at the code. Kamino's keeps going."* (See Part 3 Section 4 for finalized copy directions.)

What makes this especially transferable to Kamino is that the institutional buyer and the sophisticated retail user *both* benefit from this construction. The institutional buyer reads "FMA, Andersen, Anchorage" and recognizes their world. The retail user reads "20 audits, zero bad debt, $19B originated" and recognizes their world. The trust block is the single section that speaks to both audiences in the same breath — and the Mercury pattern is how.

**Insight 3 — Named partner testimonials with titles and logos beat logo walls for institutional credibility, and Kamino has the partner roster to execute this.**

The research is sharp on this: *"The enterprise pattern is: full name + specific role + logo'd company + one or two sharp sentences."* Brex's Mike Kim, VP Finance, DoorDash. Linear's Gabriel Peal, OpenAI; Nik Koblov, Head of Engineering, Ramp; Kaz Nejatian, Opendoor. Framer's five named Heads of Design. Notion's one OpenAI quote that does more work than its entire 18-logo wall.

By contrast, anonymous testimonials ("a leading exchange," "a top-tier fund") and logo walls without context read as *aspirational noise*. The research is blunt: *"'Trusted by leading companies' is weaker than 'Trusted by 35,000+ top companies' (Brex) or '1 in 3 startups choose Mercury.'"* And: *"rotating carousels of testimonials… top-tier sites place 3-5 fixed testimonials, because a carousel implies the content is interchangeable."*

The current draft's Section 9 ("TRUSTED BY INDUSTRY LEADERS" with placeholder "Lorem ipsum dolor sit amet…" and "[Partner Name], [Company]") is a middle-tier pattern. The research says Kamino can do better, because Kamino has the partners. Marius's network delivers named testimonials from: FalconX (Fixed Rates pilot borrower; their name on a credit product is materially credible), Anchorage Digital (custodian partner; OCC-chartered US bank is the most credible counterparty signal available in digital assets in 2026), Gauntlet (official curator, $1.4B TVL managed across DeFi; risk-serious firm), Steakhouse Financial (flagship curator, prestige in DeFi credit), Figure Technology Solutions (NASDAQ: FIGR; PRIME sponsor), Solana Company (NASDAQ: HSDT; public vehicle managed by Pantera + Summer Capital, first Off-Chain Collateral borrower). Any one of these names with a quote and a title is a Linear-caliber testimonial. Three of them in a fixed placement is a Linear-plus-Brex combination.

The operational consequence: the page should not ship with placeholder testimonials. Either the named quotes are live at launch, or the section is removed and logos alone do the work. Placeholder "lorem ipsum" in Section 9 is a brand risk — it signals that the rest of the page might be similarly aspirational.

### 1.3 Three Kamino-specific assets that should shape the page in ways no competitor can replicate

**Asset 1 — The zero-bad-debt-at-$19B record is the single most unarguable stat any onchain credit protocol can currently claim.**

The deep-comprehension document is explicit: *"Zero bad debt at $19B+ originated. This is not a feature; it is 3+ years of compounding risk-management decisions across thousands of liquidations, hundreds of listings, multiple market regimes (bear market, rate hikes, memecoin craze, RWA surge). $183M in liquidations processed successfully. A protocol team cannot replicate this in a year. This is the single most defensible moat."*

Compare to competitors' analogous claims:
- **Aave**: ~$30B+ cumulative TVL, but Eisenberg CRV exploit in 2022 ($1.7M bad debt requiring DAO bailout), and V2 design flaws on record.
- **Morpho**: MEV Capital / xUSD depeg produced $25.4M bad debt exposure in November 2025; October 2024 oracle misconfiguration cost $230K.
- **Maple**: $54M+ historical defaults (Orthogonal Trading $36M in 2022; depositors lost up to 80% in affected pools).
- **Compound**: multiple governance-related incidents, no comparable clean record.

No one else in onchain credit can claim zero bad debt at Kamino's scale. The external research's principle 10 — *"Numbers win where adjectives lose… Kamino has great numbers ($3B AUM, $19B loans originated, zero bad debt, 3+ years, 20 audits). They should appear exactly, with units."* — is the floor, not the ceiling. The page should land the zero-bad-debt number with surgical emphasis, once, prominently, unarguable.

A specific consequence: the proof strip four-stat layout (AUM · Loans Originated · Active Loans · Assets Onboarded) is locked, but the rhetorical architecture of the whole page has to lean on *the gap* between "$19B originated" and "zero bad debt." One number alone is impressive. The pair is devastating. Section 5 or the trust block should surface the pair as a stacked construction — $19B+ / Zero bad debt — not two separate facts.

**Asset 2 — Institutional Yield is a *proof-of-thesis product*, not just another product.**

The deep-comprehension document frames this precisely: *"It's the product that tests the thesis. If 6–8% yield from regulated institutional credit can attract retail DeFi capital onchain via a permissionless vault, Kamino has proven the bridge exists."* And: *"It is Kamino's proof-point that its core risk culture (zero bad debt, pristine product, paranoid expert) extends cleanly from DeFi into regulated off-chain credit."*

This matters for the landing page because Institutional Yield is not "a new product to showcase." It is the single product that the entire repositioning leans on as operational evidence. The hero says Kamino connects global capital to the new financial system. Institutional Yield is the specific bridge that is, in April 2026, one week old, and *already operating*. The page has to treat IY as the spearhead case study, not as a bullet in a product grid.

The rhetorical pattern here mirrors Anthropic's "Project Glasswing" treatment from the external research: *"Anthropic's 'Project Glasswing' second-section is a surprisingly strong pattern. It communicates *we are doing things in the world* without making a product claim… Kamino has genuine material for this — the FMA license, the Andersen attestation, the Haruko pipeline are 'projects' in the same narrative register."* The IY launch is the first Kamino project to treat this way. It is dated (April 14, 2026). It has named counterparties (FMA, Andersen UK, Haruko, Anchorage, BitGo, Zodia). It has a concrete structural fingerprint (tripartite custody, no title transfer, rehypothecation prohibited, 60% max LTV / ~30% typical). It generates live data.

**The page operational consequence:** IY gets its own dedicated section — not buried under "institutional products." It gets live data surfaced (current APY, current capacity, current portfolio-weighted LTV from Haruko). It is treated as the architecture-reveal moment of the page, the way Supabase treats "Postgres Database" — a section whose heading *is* the product's structural trust anchor. See Part 3 Section 5 for the specific architecture.

**Asset 3 — The vertical-integration-under-one-foundation structure is institutionally legible in ways no crypto-native competitor can match.**

This is the least obvious asset but may be the most durable. Three overlapping structural properties:

*No equity, ever.* The Kamino Foundation is a Cayman ownerless foundation company. Its charter prohibits equity issuance. From *There Is Only KMNO v4*: *"the Kamino Foundation's governing documents wholly prohibit new equity entirely."* This is unusually clean — most DeFi protocols claim "no equity, just token" but have quietly raised equity rounds. Kamino cannot. When a regulator asks "who profits from this protocol," the answer is "the Foundation, mission-locked, reinvested into growth." That answer is legible to Liechtenstein FMA, to the US Treasury, to a compliance officer at a fintech partner. It is a load-bearing structural claim.

*Everything shares one liquidity base.* A USDC supplier to Kamino Lend is (indirectly) powering Multiply, Off-Chain Collateral, Fixed Rates, Earn vaults, and institutional yield routing. This is the vertical-integration thesis the deep-comprehension document flags: *"The vertical argument (Kamino's): this is how you guarantee zero bad debt, consistent UX, and seamless cross-product liquidity."* Morpho is the explicit counter — they are modular, everything lives at the edge. Kamino is the opposite and is making it a feature.

*All products operate under one risk culture.* Marius's "pristine product" discipline, the in-house Scope oracle (not delegated to curators), the Foundation's 26%+ spend on audit/risk/security, the refusal to add asset classes that would drift the mandate. The deep-comprehension cites: *"Kamino is the only DeFi protocol that has lending, borrowing, leverage (Multiply), spot leverage trading, concentrated-liquidity LP vaults, zero-fee Jupiter-aggregated swap, Earn vaults with a multi-curator ecosystem, KMNO staking, governance, *and* an institutional suite… under one interface. Aave has lending. Morpho has lending infrastructure. Maple has institutional credit. Kamino has all of them, unified."*

The landing page has not, in any draft, surfaced this structural claim explicitly. It should. See Part 3 Section 7 for the "Kamino as one system" section.

### 1.4 How the page resolves the core tension

The core tension, stated most precisely in the deep-comprehension document: *"Kamino's current daily active users, TVL, and cultural center of gravity are retail DeFi (SOL/LST lenders, PRIME Multipliers, airdrop farmers). Its strategic momentum and 2026–2027 growth thesis are institutional. The landing page risk: tilt too hard institutional and the retail community reads the rebrand as abandonment — watch CT for snark about 'Kamino going corporate.' Tilt too hard retail and the institutional story evaporates."*

The architectural resolution is the Audience Router. The rhetorical resolution is subtler: **the hero speaks to Institutions by default, and the audience router speaks to everyone equally.** This is a deliberate inversion of the common "retail by default, B2B in a sub-nav" pattern (which is what the current live kamino.com does). The inversion is correct for three reasons:

First, retail users do not evaluate Kamino on the homepage. They evaluate on Twitter, in Discord, on Telegram, through their peer network. The landing page is not where they decide — it is where they connect their wallet and transact. The returning-user detection (locked in the spec) routes them directly into the webapp. For returning retail users, the landing page is a routing surface, not a persuasion surface. Its job is to get out of the way.

Second, first-time retail visitors clicking "Individuals" still get a tailored experience. They do not lose by the hero speaking institutional — they gain, because the hero's institutional register is exactly the signal a sophisticated retail user is looking for *as reassurance*. A DeFi-native user who sees "Connecting global capital to the new financial system" reads it as "Kamino is getting serious" — which is positive. A DeFi-native user who sees "Earn 14% APY on your stablecoins" reads it as "Kamino is still chasing clicks" — which is negative. The institutional register is not a cost to the retail audience. It is a benefit, delivered sideways.

Third, institutional visitors have no alternative entry path. They cannot be reached through Discord, Telegram, or airdrop farming. They arrive on kamino.com via LinkedIn, press, referral, or Google. The homepage has to do the persuasion work for them. If the hero is retail-coded, they bounce — and the pipeline Cheryl and Mark are building stalls at the awareness stage.

The specific page-architecture consequence: the hero is institutional-register, the proof strip is register-agnostic (raw numbers), the Audience Router is the four-way equal-weight branching, and downstream the Individuals path immediately shifts to retail-warmer register while the other three paths sustain institutional register. This is the pattern Brex executes on its homepage — institutional hero, three-tier band where each tier gets its own voice — but Kamino needs to go further because the voice-shift across audiences is wider. Brex is "speed and control" at three price points; Kamino is "Connecting global capital" across four fundamentally different transactional relationships.

The secondary resolution: the page never mentions DeFi as a frame. It uses "onchain" as a qualifier. It uses "Solana" as an asset characteristic. It uses "credit," "capital," "liquidity," "financial system," "infrastructure" as the primary vocabulary. This is codified in the landing spec's framing principles and is correct. The retail DeFi user does not need the word "DeFi" on the page to recognize their home — the product logos (Earn, Borrow, Multiply, Swap), the Solana association, the vault cards all do that work without the brand having to utter the word.

### 1.5 Spiritual predecessor: Mercury × Morpho, with a pinch of Anthropic

The external research's baseline recommendation is unambiguous: *"Sleeper pick for Kamino: Morpho. Because the template is nearly perfect for what Kamino needs — infrastructural claim, enterprise partners shown early, institutional security without losing crypto-native credibility, and a refusal to flash APYs. If Kamino can be 'Morpho plus Mercury,' with regulatory depth neither one currently has, there is a defensible and differentiated landing-page identity available."*

This is right, and it needs to be specified further. Kamino's page should be:

**~50% Mercury.** Mercury is the template for how a regulated financial product can feel like a software company. Specifically: the hero discipline ("Radically different banking" — three words, one adverb doing the work), the interactive demo as secondary CTA, the founder-voice testimonials (Karri Saarinen from Linear, Paul Copplestone from Supabase — peers of the target visitor), the "Standard protection stops short. Mercury goes further" trust block, the 11-industry Solutions dropdown, the "1 in 3 startups" compressed scale claim. Every one of these maps cleanly to Kamino. The four-audience router is Kamino's version of Mercury's 11-industry Solutions dropdown, tighter and more strategic. The "zero bad debt on $19B" is Kamino's "1 in 3 startups." The trust block is a direct steal.

**~35% Morpho.** Morpho is the template for how an onchain credit primitive can feel institutional. Specifically: the category-claim hero ("Connect to the universal lending network"), the partner-first second-section ("Powered by Morpho" with Coinbase, Binance, Ledger, Gemini, Bitget, Trust Wallet, World, Safe, Bitpanda, Lemon, Farcaster, SafePal shown early), the rhetorical contrast-pair ("serves, not extracts"), the refusal to flash APYs above the fold, the "launch in weeks, not months" specificity, the audit list (Cantina, ChainSecurity, OpenZeppelin, Spearbit, Trail of Bits, Certora). Kamino inherits the Morpho template but extends it with regulatory depth Morpho cannot credibly claim.

**~15% Anthropic.** Anthropic provides three specific moves: the restraint (one stat — "Claude assisted NASA's Perseverance rover 400 meters on Mars"), the "named research initiative" second section treatment (Project Glasswing), and the refusal of customer-logo walls in favor of brand-authority posture. Kamino is not Anthropic — Kamino needs more commercial muscle than Anthropic's page carries — but the Anthropic move that Kamino can steal is the *named, dated, initiative-treatment* of Institutional Yield. IY is Kamino's Project Glasswing. It is new. It is named. It is dated. It has a scientific-register structural description. And, like Project Glasswing, it is the answer to "what is this company *doing* in the world right now?" — which is exactly what an institutional visitor wants to know on first arrival.

The recommended explicit positioning: **"Morpho's infrastructure altitude + Mercury's trust-block discipline + Anthropic's initiative-framing + Kamino's own vertical-integration proof."** Call this a Mercury–Morpho hybrid if a single label helps orient the design team. What it is *not*: Stripe (too horizontal, too agnostic — Stripe's "financial infrastructure" is powerful but it treats customers as interchangeable; Kamino cannot), Linear (too product-tour, too narrow — Linear's "product development system" works because Linear has one product; Kamino has ten), Coinbase Institutional (too austere, too corporate-finance — Coinbase Institutional actively hides that the product is onchain; Kamino cannot afford to, and shouldn't want to), or Stripe-via-its-own-brand (too generic, too middle-of-market; Stripe's neutrality is a luxury Kamino has not earned yet).

One operational consequence for the design team: when an option is open and the answer is not obvious, ask "what would Mercury do?" for interaction and tone, "what would Morpho do?" for structure and partner placement, and "what would Anthropic do?" for restraint. These three heuristics cover ~90% of the judgment calls.

---

## PART 2 — Kamino-specific principles

These are the load-bearing rules. They are Kamino-specific — they are derived from what the external research proves *and* from what Kamino specifically has, is, or is trying to become. Each principle cites the research finding and the Kamino reason. Most carry a consequence for the page and a trap to avoid.

### Principle 1 — Author the category in the hero. Never describe the category anywhere on the page.

**Rule.** The hero is a category-annexation sentence, not a product description. Every section below the hero has to preserve that altitude — no section may lapse into "Kamino is the largest X" or "Kamino offers Y." The category frame is always Kamino's, never a received one.

**External research finding.** *"The best sites — Linear, Stripe, Mercury, Raycast, Morpho, Ramp — share a quality called category authorship. They are not 'the best X' in an existing category; they are naming or renaming the category itself."* Linear: "A new species of product tool." Stripe: "financial infrastructure." Morpho: "universal lending network." Mercury: "Banking built on software, not ledger entries." These are category-ownership moves, not feature claims.

**Kamino reason.** The locked hero "Connecting global capital to the new financial system" is a category-authorship sentence — it is Kamino's "universal lending network." But the rest of the current landing draft slips back to description repeatedly: Section 7 ("Everything you need in one protocol"), Section 8 ("Kamino leads the Solana ecosystem in scale and safety"), and the Institutions-page hero ("Institutional-grade DeFi infrastructure"). Each of these demotes the category claim. A first-time institutional reader who sees "the largest lending protocol on Solana" in the body understands that Kamino is competing inside an existing category — DeFi lending — rather than naming a new one.

**Consequence.** Every section heading on the page has to be auditable against this rule: does this heading sustain the category claim, or describe Kamino inside an existing one? The product-grid section (currently Section 7) is the most dangerous offender and has to be replaced with a "one system" framing (see Part 3 Section 7).

**Trap to avoid.** The "biggest on Solana" claim. It is true, it is flattering, and it is self-demoting. It locates Kamino inside "DeFi lending on Solana," which is not the category the hero claims. Retire it from the landing page entirely — it can live on the Solana ecosystem pages, on partner decks, on CT. Not here.

### Principle 2 — Lead with institutional vocabulary; let Solana and onchain qualify, never frame.

**Rule.** Capital. Credit. Liquidity. Financial system. Infrastructure. Counterparty. Custody. Attestation. Supervision. These are the nouns that do the work. "Onchain," "Solana," "DeFi," "crypto" are adjectival qualifiers — they clarify, they do not lead.

**External research finding.** Linear's hero does not contain "software" or "web app." Stripe's hero does not contain "API." Mercury's hero does not contain "app." These are the words they've chosen to subtract. The consistent pattern in top-tier copy is to lead with the *economic outcome* and let the technology vocabulary qualify. Morpho: "Connect to the universal lending network" — not "Connect to our smart contracts." Stripe: "Financial infrastructure to grow your revenue" — not "Payments APIs to grow your revenue." Ondo: "Institutional-grade finance, delivered onchain — accessible to all" — institutional *first*, onchain second.

**Kamino reason.** The locked copy-framing principles codify this already: *"'Onchain' is a qualifier, not a positioning frame. Don't let it carry a line on its own. A TradFi reader's ear goes up at 'onchain'; it relaxes at 'credit' and 'liquidity' and then leans in when 'onchain' qualifies them."* This is correct and should be enforced across every subsection. The deep-comprehension document quotes Marius's mental models — the ETF frame, the anti-DeFi-risk frame, the accountability frame — all of which lead with institutional vocabulary and use "onchain" as modifier.

**Consequence.** Every body paragraph and every section heading should be read against a simple test: replace "onchain" with a blank and ask whether the sentence still makes sense as a financial claim. If it doesn't, the sentence is leaning on onchain as a frame and needs rewriting. Example: "The largest onchain lender" fails the test — remove "onchain" and it becomes "the largest lender," which Kamino is not. "Overcollateralized credit originated onchain" passes — remove "onchain" and it is still a valid financial construction.

**Trap to avoid.** The word "DeFi." It is a subculture term. It loses TradFi listeners instantly and anchors the retail user in an adversarial mental model ("this is the DeFi thing, so it is the speculative thing"). The landing page already avoids this. Enforce across every audience page.

### Principle 3 — Concrete numbers with units, not adjectives. And one number bigger than the others.

**Rule.** "$19B+ originated." "Zero bad debt." "$3B+ AUM." "20 audits." "4 formal verifications." "$600M+ PRIME." These are the facts. Replace every instance of "high," "large," "significant," "robust," "leading" with a specific figure. And pick one number that the page's credibility is anchored on — one number that would end a boardroom discussion — and let it have more room than the others.

**External research finding.** *"Numbers win where adjectives lose."* The research cites Stripe's $1.9T payments volume in 2025, Mercury's "1 in 3 startups," Notion's 62% of Fortune 100, Plaid's 1 in 2 banked US adults, Adyen's €1.4T. *"The single most credible element: the $1.9T volume figure. It is the number that ends the conversation with a board."* Each top-tier site has one headline stat that is unanswerable by any competitor; every other stat is supporting cast.

**Kamino reason.** The pair "$19B+ originated / zero bad debt" is Kamino's $1.9T. It is unanswerable — Aave has bad debt, Morpho has bad debt, Maple has bad debt, every major lending protocol has bad debt. This pair is the single most defensible claim on the page. It should not be one of four equal-weight stats in the proof strip. It should appear there *and* separately, surfaced at least once more, with more visual emphasis than any other number.

**Consequence.** The proof strip stats are locked — AUM, Loans Originated, Active Loans, Assets Onboarded. Within that lock, "Loans Originated" should carry an additional visual or textual treatment to anchor the zero-bad-debt pairing. For example: "$19B+ Loans Originated / $0 bad debt" as a stacked pair in that cell. Alternatively, the trust block (Part 3 Section 4) surfaces it as a headline number. The specific mechanism is a design decision; the rule is that the page must surface the pair at least twice, once in the proof strip and once in the trust block, and they must feel like the same fact stated from two angles.

**Trap to avoid.** Surfacing the zero-bad-debt claim too casually. It is the strongest claim on the page. If it appears in a bullet list with five other facts, or flashes by in a scrolling stat bar, or sits between "$5B TVL" and "4.56% APY," it loses power. Give it air.

### Principle 4 — Audience segmentation as architecture, not navigation.

**Rule.** The four audience boxes are not a mega-menu. They are the page's primary architectural choice. Equal visual weight, full-width placement, with materially different downstream experiences — each audience page must feel built-for-them, not a template fill.

**External research finding.** Brex's startup/mid-market/enterprise tier-band is the cleanest example: *"the cleanest tier-segmentation on a homepage in the set — cleaner than Stripe's because it is all on the homepage, not spread across Solutions pages."* Mercury's 11-industry Solutions router, Stripe's Enterprises/Startups/Platforms section, each execute the same move — a single brand hero, then explicit audience routing. But the key observation: *"The best multi-audience sites don't fragment the hero."* The audience router is below the hero, not inside it.

**Kamino reason.** Kamino has four genuinely different audiences with four genuinely different product needs:
- **Individuals**: Multiply into PRIME at 11–21%, Earn vaults curated by Gauntlet/Steakhouse, direct access to Lend. Self-serve, wallet-connect, seconds-to-deposit.
- **Institutions**: Off-Chain Collateral with Anchorage, Fixed Rates via FalconX pilot, Institutional Yield as LP vehicle. Contact sales, white-glove onboarding, tri-party legal docs.
- **Issuers**: Instant collateral status in isolated markets, Multiply as distribution engine (PRIME $0→$600M in 4 months is the template), RWA DEX for oracle-priced liquidity. Partnerships-led.
- **Fintechs**: BuildKit API/SDK, white-label isolated vaults, Privy embedded wallets, revenue share. Technical integration, KYB compliance review.

The voices, the vocabulary, the conversion mechanics, the legal postures are *different enough* that a unified page with a CTA would fail for three of the four. The Audience Router is the only architecture that acknowledges this.

**Consequence.** The Individuals downstream page is the one most at risk of being under-built. The current spec flags this: *"Open question: Does this route to a dedicated landing page, or straight through to /earn?"* Route-through to /earn is the wrong answer — it tells the DeFi user they are a route, not a destination. The Individuals page should match the other three in production value and depth; see Part 3 Section 3 for copy direction.

**Trap to avoid.** Using the Audience Router as a cosmetic device. If the four downstream pages are 80% the same content with a different tagline on top, the router becomes a lie. Each page has to genuinely reward the click — different product emphasis, different vocabulary, different proof points, different CTAs.

### Principle 5 — One primary CTA. One secondary. No third. Different per audience.

**Rule.** The homepage itself has zero in-body hero CTA (locked). Below-fold CTAs follow the two-path rule. Each audience page inherits the same rule. The primary is what you should do; the secondary is how to learn more before doing it.

**External research finding.** *"Two CTAs, one primary, one secondary, no more… A third CTA reliably dilutes both."* Mercury: Open account / Launch demo. Linear: Get started / Contact sales. Notion: Get Notion free / Request a demo. Morpho: Launch App / Contact us.

**Kamino reason.** The four audiences have four different primary actions:
- **Individuals**: Primary — Launch App (direct to vault browse). Secondary — Explore yields (marketing surface).
- **Institutions**: Primary — Talk to the team. Secondary — View Institutional Yield (product surface with live data).
- **Issuers**: Primary — Talk to partnerships. Secondary — See live RWAs (Assets page with PRIME, SyrupUSDC, ACRED as proof).
- **Fintechs**: Primary — Talk to BuildKit team. Secondary — View developer docs (BuildKit API).

This is four distinct funnel paths into four distinct conversion mechanisms — self-serve webapp for retail, Cheryl/Mark pipeline for institutional, Mark+Dawid for issuers, developer-sales motion for fintechs.

**Consequence.** The current draft's homepage Section 10 (final CTA: "Launch App" + "Contact Sales") is a two-path CTA at the wrong altitude — "Contact Sales" is three different sales pipelines collapsed into one. Replace the final CTA with a routing surface that echoes the Audience Router's four paths, not a generic two-button close. See Part 3 Section 9.

**Trap to avoid.** "Learn more" as a primary CTA. The external research calls this out: *"'Learn more' as a primary CTA… signals the reader isn't ready to commit, which primes them not to."* On a Kamino audience page, "Learn more" is always secondary. The primary is always an action — launch, talk, schedule, integrate, deploy.

### Principle 6 — Trust furniture is earned, not assumed. Single concentrated trust block. Mercury-pattern heading.

**Rule.** Security badges, audit logos, regulatory credentials, audit counts, attestation frequency, custodian names — all concentrated in one trust block, placed in the page's middle third, with a signature rhetorical heading. No scattering of trust signals across the page.

**External research finding.** *"Security badges, audit logos, regulatory credentials belong in a dedicated trust block mid-to-late page — not in the hero."* And: Mercury's "Standard protection stops short. Mercury goes further" is cited as the template — a trust section that frames its differentiation as a *rhetorical contrast* against the reader's received assumption.

**Kamino reason.** Kamino's trust inventory is extraordinary and heterogeneous — it spans protocol-layer (20 audits, 4 formal verifications, $1.5M Immunefi bounty, Scope oracle, zero bad debt, 3+ years live, fully open-source), custody-layer (Anchorage Digital OCC-chartered, qualified custodians, tripartite agreements, no title transfer, no rehypothecation), regulatory-layer (Liechtenstein FMA supervision with daily reporting), attestation-layer (Andersen UK monthly attestation, Haruko data pipeline, Chainlink Proof of Reserves), structural-layer (Kamino Foundation, no equity, mission-locked, onchain governance). Scattered across the page, these read as noise. Concentrated in one section with a unifying frame, they become the single most compelling argument for why Kamino's trust architecture is different in kind, not just degree, from any competitor's.

**Consequence.** The current draft's Section 5 ("BATTLE-TESTED SECURITY" with "3 Years Live / $16B Volume / Onchain Verified / 18 Audits / $1.5M Bounty") is the right idea but the wrong register. It stacks protocol-layer trust signals only and misses the regulatory, custody, and attestation layers that are Kamino's *new* moat. The trust block needs to widen to include all four layers, and the heading needs to carry the Mercury-style contrast. Draft: *"DeFi trust ends at the code. Kamino's extends through regulation, custody, and continuous attestation."* See Part 3 Section 4 for full copy.

**Trap to avoid.** Using the Linear "Security" top-nav-item pattern alone. Linear gets away with a terse security nav item because Linear is a software tool. Kamino is a financial operation. The trust block on the homepage has to do load-bearing work; it cannot be a linkout.

### Principle 7 — Show the product when you have one. Use a live data anchor when possible.

**Rule.** Product UI appears on the homepage where it is the argument. Institutional Yield gets live data surfaced (current APY, current capacity, portfolio-weighted LTV). The retail products get a curated card row with real APYs and real TVLs. The hero visual is product-adjacent, not abstract.

**External research finding.** *"Linear, Mercury, Brex, Supabase, Figma, Framer, Raycast all put product UI on the homepage because their product is the argument."* And counter-intuitively for institutional: *"Coinbase Institutional, BlackRock's digital-assets page, and Morpho all show product/dashboard imagery. The reason: the institutional buyer is often a crypto-native person, and they expect to see the actual product. The era of 'whitepaper in the hero' is over."*

**Kamino reason.** Kamino's products have distinctive, high-fidelity UI — the Multiply interface, the Earn vault cards, the Institutional Yield dashboard with Haruko-fed per-loan data. Using still frames of these surfaces (or subtle motion demonstrating a deposit, a borrow, a vault card populating) reinforces the reality of the claim. More importantly, the Institutional Yield dashboard *is* the product's core trust proposition — the claim "you can see every loan, every collateral position, every LTV" is vastly more credible when the page shows the dashboard actually showing those things.

**Consequence.** The Institutional Yield section (Part 3 Section 5) should embed a live-data card: current APY, current portfolio-weighted LTV, current capacity remaining, current active loans. Fed from the same Haruko-sourced data that powers the vault UI. This is the Mercury "interactive demo" move, adapted — not a working demo, but a live proof panel. The Curated Products section (currently Section 6) should pull real 90-day APYs and real TVLs from the live vault data, not hard-coded placeholders.

**Trap to avoid.** Stock-image-of-city-at-night hero visuals. "Financial infrastructure" is not a license to steal the Bloomberg Terminal aesthetic. Kamino's visual identity is product-native — the vault cards, the Solana greens and KMNO colors, the dashboard gridlines. Lean into it.

### Principle 8 — Named testimonials with titles and logos, or no testimonials.

**Rule.** A testimonial is a named individual, a specific role, a logo'd company, and one or two sharp sentences. Three to five fixed placements. Never a carousel. Never a "first-name from country" pattern. If the named testimonials cannot be secured for launch, ship with logos only and no quoted copy.

**External research finding.** *"The enterprise pattern is: full name + specific role + logo'd company + one or two sharp sentences. Absent: anonymous testimonials with first-name-only attribution (the consumer pattern, e.g., Wise, Chime) — enterprise buyers treat these as noise."* And: *"rotating carousels of testimonials… top-tier sites place 3-5 fixed testimonials, because a carousel implies the content is interchangeable."*

**Kamino reason.** Kamino has named partners who can credibly deliver named testimonials: Mike from FalconX (Fixed Rates pilot), a named executive from Anchorage Digital, Tarun from Gauntlet (or whomever at Gauntlet owns the Kamino curator relationship), Sam Kazemian (Frax) if that integration is credible, an allocator from Pantera on Solana Company's Off-Chain Collateral use, a named engineer or product lead at Figure Technology Solutions on PRIME. Each of these, secured with a short quote and title, beats any logo wall.

**Consequence.** The current draft's Section 9 ("TRUSTED BY INDUSTRY LEADERS" with "Lorem ipsum" placeholder) is a launch risk. Either Mark and Cheryl surface three named testimonials by the build date, or the section ships as a logo wall with a specific scale claim ("Deployed by: Anchorage Digital · Gauntlet · Steakhouse Financial · FalconX · Figure · Chainlink · Coinbase · Paxos · Jito" — or similar). Both are acceptable. The placeholder middle path is not.

**Trap to avoid.** The Ramp "Brandon Zell, Chief Accounting Officer at Notion" pattern works because Ramp has a demonstrable operator-to-operator relationship. Kamino attempting to fabricate that energy with a generic "trusted institutional partner" quote backfires. Either get the named quote or don't.

### Principle 9 — Institutional Yield is the spearhead, dedicated section, live data.

**Rule.** IY gets a dedicated homepage section, not a bullet in a product grid. The section leads with the structural claim (regulated, transparent, overcollateralized, BTC-backed), carries live data (APY, capacity, portfolio-weighted LTV), names the counterparty stack (FMA, Andersen UK, Haruko, qualified custodians), and ends with a primary CTA into the vault.

**External research finding.** The Anthropic "Project Glasswing" pattern is directly applicable: *"The second section is a single research initiative, not a product. Anthropic is signaling that research is the product. It's a confidence move: we can treat the homepage like a scientific journal front page."* This is the architectural template for Institutional Yield's role on the page — it is the single initiative that proves the thesis, and its homepage treatment should reflect that.

**Kamino reason.** From the deep-comprehension document: *"It's the product that tests the thesis."* And: *"It is Kamino's proof-point that its core risk culture (zero bad debt, pristine product, paranoid expert) extends cleanly from DeFi into regulated off-chain credit."* IY launched April 14, 2026 — *one week before this research document's date*. It is the reason the page is being rebuilt. It is the product that makes "Connecting global capital to the new financial system" literal and specific.

**Consequence.** IY does not sit inside the curated products card row. It gets its own dedicated section, positioned between the Audience Router and the trust block. Live APY, capacity remaining, and portfolio health fed from Haruko. Copy avoids the current draft's placeholder "5.44% 180D Avg APY" language — that is a retail-yield comparison pattern that doesn't fit IY's positioning. See Part 3 Section 5.

**Trap to avoid.** IY becoming "just another vault" on the page. If the retail USDC Prime and Sentora PYUSD cards appear at the same altitude as IY, IY's unique structural claim is diluted. Tier matters here — IY is one level up in page architecture.

### Principle 10 — The vertical-integration thesis gets its own section. Kamino is one system.

**Rule.** The page surfaces Kamino's vertical-integration moat explicitly. One section tells the reader that Earn, Borrow, Multiply, Leverage, Liquidity, Swap, Institutional Yield all share one liquidity base, one risk engine, one oracle, one Foundation. This is the structural story that distinguishes Kamino from Aave (lending-only) and Morpho (modular-infrastructure-only).

**External research finding.** The closest analog is Mercury's Section 2, "Everything you do with money. All in one place," which positions Mercury's product breadth as a coherent stack rather than a fragmented SKU list. The rhetorical effect: *"a competitive re-frame against Brex, Bill, Expensify, Stripe — all of whom Mercury competes with somewhere. The second section is Mercury's Trojan horse: they entered as 'banking for startups' and are now claiming the full finance stack."*

**Kamino reason.** The deep-comprehension document surfaces this as one of Kamino's three decisive edges: *"Every product shares the same liquidity base. A USDC supplier on Kamino Lend is indirectly powering Multiply, Off-Chain Collateral, Fixed Rates, Earn vaults, and institutional yield routing. Liquidity compounds across products in a way it doesn't at single-product competitors."* No competitor has this surface area under one roof. Aave has lending. Morpho has lending infrastructure. Maple has institutional credit. Kamino has all of them.

**Consequence.** Replace the current draft's Section 7 (generic product grid: "Earn / Borrow / Multiply / Swap") with a section that visualizes the shared-liquidity thesis. A diagram showing one liquidity base powering seven products. A single heading: *"One liquidity base. Seven products. One risk culture."* Or: *"Every product. One system."* See Part 3 Section 7.

**Trap to avoid.** The "product grid" pattern that most fintech homepages default to — four icons, four labels, four sentences. This flattens Kamino into a product catalog. Kamino's thesis is the *integration*, not the count.

### Principle 11 — Rhetorical contrast-pairs carry the voice. No negation framing, ever.

**Rule.** The site voice leans on contrast-pair construction — "X, not Y" patterns — but always with Kamino as the positive pole. "DeFi trust ends at the code. Kamino's keeps going." "Quarterly PDFs become continuous data." "Credit, originated at scale, onchain." Never the negation frame ("not another DeFi protocol," "no hidden fees").

**External research finding.** *"The rhetorical move is contrast-pair — every claim has an implicit contrast to a named villain (traditional finance, extractive DeFi, slow custom builds)… Morpho uses 'serves, not extracts' and 'launch in weeks, not months.' Mercury: 'Banking's been a headache. Now, it's a head start.' Raycast: 'It's not about saving time; it's about feeling like you're never wasting it.' Contrast creates memorability and implicitly positions against a named competitor."* Separately, Principle 11 of the research (*"Avoid defining yourself by negation"*) names the anti-pattern: *"'We're not another DeFi protocol' reads as insecure. 'This isn't yield farming' anchors the reader on yield farming."*

**Kamino reason.** The locked framing principle in Dawid's personal rules is explicit: *"Never frame by negation. Always describe what something IS, never what it is NOT."* And the IY announcement — which is the closest thing to a finalized Kamino brand document — demonstrates the contrast-pair discipline: it describes what the structure IS (regulated, overcollateralized, tripartite, attested) without naming Maple or Celsius or BlockFi. The rhetorical contrast is present but always positive-framed.

**Consequence.** Three specific contrast-pair constructions to surface on the page:
- *"Credit, originated at scale. Onchain."* (The breaking of "credit originated at scale" from the qualifier is itself a rhetorical beat.)
- *"Quarterly PDFs become continuous data."* (Trust block, attacks TradFi private credit opacity without naming it.)
- *"Capital stays with its custodian. Credit flows through the vault."* (IY section, encodes the no-title-transfer structure as a pair.)

**Trap to avoid.** Any variant of "not your grandfather's bank," "not just another yield farm," "no more broken DeFi promises." These all violate the rule, and they all read as defensive. The test: if the sentence loses meaning when the negation is removed, it was framing by negation.

### Principle 12 — Refuse APYs above the fold. Let the live data do the work in context.

**Rule.** No headline APY numbers in the hero or the proof strip. Retail APYs live in the Curated Products section, in context. Institutional Yield APY lives in the IY section, in context. The proof strip is scale and record, not yield.

**External research finding.** The DeFi/crypto infrastructure category comparison in the research is explicit: *"None of them [Coinbase Institutional, Morpho, Ondo] flash APYs above the fold — a meaningful departure from DeFi summer patterns."* Ondo in particular: *"No APY above the fold in giant numbers. No speculative token-price copy. No 'DeFi summer' nostalgia… Ondo wants to be the grown-up in the RWA room."*

**Kamino reason.** Kamino has the vault APYs competitors would flash — USDC Prime at ~9.74% 90-day average, Allez USDC at ~18% historical, Sentora PYUSD at ~14%, PRIME Multiply at 11–21%. These are genuinely compelling numbers. But if they appear at the top of the page, the brand is re-coded as a yield farm, and the institutional thesis collapses. Ondo's discipline is the correct template. Morpho's is the same. Kamino has to match it.

**Consequence.** The proof strip stats — AUM, Loans Originated, Active Loans, Assets Onboarded — contain no yield figures. Correct as locked. The Curated Products section, placed in the page's second half, surfaces real APYs in card format. The IY section surfaces a live APY with structural context (regulated, overcollateralized, target range). Anywhere else on the homepage, APYs do not appear.

**Trap to avoid.** Tempting mid-page headings like "Earn up to 18% APY on your stablecoins." This is the pattern the current draft's Section 4 ("CONSISTENT USD YIELDS THAT OUTPERFORM — 5.44% 180D Avg APY / vs USTs: 3.44%") edges toward. It is retail-conversion rhetoric and it demotes the hero. Replace with institutional framing of the yield advantage (Part 3 Section 5).

### Principle 13 — The "Now" strip: named initiatives, dated, editorial register.

**Rule.** The page carries a Linear-style "Now" strip — a short editorial row of current Kamino initiatives, each named, each dated, each linkable. This is a recency signal and a narrative-momentum device.

**External research finding.** Linear's "Now" navigation item is cited as a distinctive pattern: *"'Now' is a distinctive nav item — a live changelog-as-marketing."* And more broadly: *"The editorial/press row. 'Mercury in the spotlight.' Linear's 'Now.' Anthropic's news. This is a recency signal — it communicates aliveness and accelerating narrative. Kamino has a natural version of this in announcements like the FMA license and Andersen attestations."*

**Kamino reason.** Kamino's 2026 news cadence is genuinely extraordinary: PRIME launched Dec 2025 ($0→$600M+ in 4 months), Off-Chain Collateral launched Feb 2026 with Solana Company as first borrower, mirror tokens launched Mar 3, 2026, *There Is Only KMNO v4* published Mar 4, 2026, Institutional Yield launched Apr 14, 2026. Gauntlet onboarded as official curator Nov 2025. Fixed Rates in pilot with FalconX. This is, without exaggeration, one of the most aggressive 12-month product narratives in DeFi. The page can demonstrate that by *showing the sequence*.

**Consequence.** A dedicated "Now" strip below the IY section — three to four current initiatives, each with date, name, short editorial line, linked out. Proposed launch-day content:
- *April 14, 2026 — Institutional Yield live: Regulated BTC-backed credit on Solana.*
- *March 3, 2026 — Mirror tokens: Institutional borrowing against custodied assets.*
- *February 2026 — Solana Company draws first Off-Chain Collateral loan.*
- *November 2025 — Gauntlet joins as official Kamino curator.*

This is not a news feed — it is a curated editorial strip, updated by the Marketing team at major milestones. See Part 3 Section 8.

**Trap to avoid.** Making it too reactive (every minor blog post shows up) or too static (the same four items sit there for 12 months). The cadence should be monthly refresh, 3–4 items, most recent at top.

### Principle 14 — Voice shifts by audience. The homepage is institutional. Audience pages adapt.

**Rule.** The homepage's voice is the most institutional register in the Kamino voice spectrum — sparse, declarative, finance-vocabulary, no exclamation. The Individuals audience page shifts warmer and more product-forward. The Institutions/Issuers/Fintechs pages sustain the institutional register with more technical specificity. Each page's voice is explicit, documented, and enforced.

**External research finding.** The Linear observation is illustrative: *"Linear is not explaining itself; either you get it or you don't."* The best sites commit to a voice and sustain it. Mercury's voice is consistently literary-institutional. Raycast's is consistently flow-state-opinionated. Wise's is consistently staccato. The failure mode is voice that drifts section-to-section, which reads as committee-authored.

**Kamino reason.** The deep-comprehension document already surfaces this tension: *"Institutional Yield / Off-Chain Collateral / Fixed Rates copy is the most institutional register. Reads like a Goldman Sachs product sheet. Earn / Multiply / Borrow copy is warmer, more retail-friendly… Swap / Liquidity are utility-register. The landing page's challenge is to host *all three registers* coherently."* The resolution is voice-by-page, not voice-by-section. The homepage is institutional. The Individuals page moves to retail-warmer. The Institutions, Issuers, and Fintechs pages return to institutional, each with its own technical tuning (Institutions lean legal/regulatory; Issuers lean distribution/economic; Fintechs lean technical/developer).

**Consequence.** A voice spec per page, written before copy. The homepage's voice spec: declarative sentences under 25 words; no exclamations; vocabulary drawn from finance ("capital," "credit," "liquidity," "counterparty," "supervision," "attestation"); one contrast-pair per section maximum; no feature bullets in running copy.

**Trap to avoid.** Letting retail-register language creep into the homepage. The test: if a sentence could appear on the Multiply landing page ("Amplify your yields with one-click leverage"), it does not belong on kamino.com/.

### Principle 15 — Refuse what's tempting. Specifically: DeFi vogue vocabulary, carousels, cookie banners, founder photos, mission statements.

**Rule.** There is a set of common landing-page patterns that Kamino must actively refuse. Each one is a pull toward middle-tier quality. The refusal is itself a brand statement.

**External research finding.** The anti-patterns section of the research is specific: *"Adjective stacking in the hero. Three CTAs with equal weight. Hero imagery unrelated to the product. 'Trusted by' headings with no numeric scale. Rotating carousels of testimonials. 'Learn more' as a primary CTA. Cookie banners in prime real estate."*

**Kamino-specific refusals.**
- **"Revolutionary," "disruptive," "the future of finance," "DeFi summer."** Already coded out by the framing principles, but name them here as a permanent no-go.
- **Carousel of testimonials.** Three fixed placements or none.
- **Giant cookie banner.** Use a compliant minimal footer widget.
- **Founder photos.** Marius has a public brand, but the homepage is not a founder bio. His presence is through the IY quote and the Lightspeed podcast link in the Now strip, not a photo tile.
- **A "mission statement" section.** "Our mission is to…" is committee copy. The hero IS the mission statement.
- **Crypto-native jargon.** No "wagmi," no "LFG," no "gm," no memes. This is not the brand.
- **Token price chart in the hero.** KMNO has a price. The homepage is not where it lives. (Relegate to Company or Token pages.)
- **A "Book a demo" button for retail users.** Retail users don't book demos. The webapp is the demo.

**Consequence.** A written "refuse list" shared with the design team, the copy team, and the engineering team, with red-flag examples. This becomes a review checklist before each build.

**Trap to avoid.** Cultural drift during implementation. A single designer adding a "Join our Discord" CTA because "it performs well" undoes the positioning. The refusals have to be institutionalized, not just stated.

### Principle 16 — Live data or no data. The proof strip is the contract.

**Rule.** Every number on the page that carries "as of" weight — proof strip stats, IY APY and capacity, Curated Products APYs and TVLs, Borrow Capacity counters — is fed from live protocol data with automatic refresh. No hard-coded numbers. A stale-data fallback exists but never shows placeholder copy.

**External research finding.** Not a research principle per se, but an inference from the research's trust analysis: *"Every claim must be defensible by the proof strip and live data. Claims that outpace reality ring hollow."* — adapted from the landing spec. More broadly, the top-tier sites either use live data (Plaid's transaction volume, Mercury's monthly transaction volume) or commit to very durable numeric claims.

**Kamino reason.** Everything on Kamino is onchain and auditable. The protocol publishes TVL, originated volume, active loan count, vault APYs, vault TVLs in real time. There is no good engineering reason any of these should be hard-coded on the homepage. And there is a specific brand cost to a number that's out of date — an institutional visitor who sees "Loans Originated: $16B" knowing they've read press citing $19B immediately questions the entire site's credibility.

**Consequence.** A live-data pipeline for the proof strip is a prerequisite to ship. Build it before the hero visual is finalized. The spec open-question "Live-data pipeline for proof strip stats (who owns it, refresh cadence, fallback if API fails)" has to be answered at Phase 0, not Phase 3.

**Trap to avoid.** Launching with "will be live soon" placeholders. The page has to ship with real numbers or it is a marketing prototype, not a production site.

### Principle 17 — Footer as institutional sitemap, dense and disclosure-heavy.

**Rule.** The footer is a 6–8 column dense navigation and disclosure surface. It carries the regulatory attestations, the restricted-jurisdictions notice, the audit log, the docs, the careers, the press, the investor relations (or its absence note), the contact addresses, the social, the press mentions, and the complete sitemap. It is the single densest surface on the site.

**External research finding.** *"Keep the hero clean. Push breadth to the footer. Every top-tier site has a dense, organized footer with 6-10 columns. Kamino can have an enormous footer — regulatory disclosures, audit logs, contact, docs, career, press — without clutter, because readers who scroll that far are investigating."*

**Kamino reason.** Kamino has genuinely a lot of surface area — eight product lines, four audience verticals, developer documentation, security disclosures, Foundation governance, KMNO token, seasons program, careers, blog, gov forum. A thin footer signals a small company; a dense footer signals a serious one. Institutional visitors read footers. Compliance officers read footers. This is the place for the FMA attribution, the Andersen disclosure, the regulatory status-by-jurisdiction table, the full audit log link, the bug bounty link, the contact addresses (institutional@, mark@, cheryl@, dawid@, careers@), the governance forum link, the press contact.

**Consequence.** See Part 3 Section 10 for a specific footer architecture.

**Trap to avoid.** A two-column "About / Legal" footer. This is the startup-era default and it undersells Kamino's institutional surface area.

### Principle 18 — Agent-era acknowledgment: BuildKit is the surface, not a feature.

**Rule.** The Fintechs audience box is the agent-era entry point. BuildKit — the API/SDK/embedded-wallet stack — gets first-class treatment as a surface. The site acknowledges that onchain yield is being consumed by applications, wallets, and eventually agents, not just by end users.

**External research finding.** *"Dedicated AI positioning in 2026. 18 of 25 sites have a visible AI framing — not as a feature, as a reposition. Linear ('Designed for the AI era'), Notion ('AI workspace'), Vercel ('AI Cloud'), Figma ('Prompt, code, design'), Stripe ('Agentic commerce'), Anthropic (entire brand)."* And: *"The AI-agent shift is real and every B2B site has adapted. Linear's 'teams and agents.' Notion's 'Night shift' agents. Stripe's 'agentic commerce.' The shift this year: every serious B2B brand is explicitly welcoming agents as users. Kamino should have a stance on whether agents can interact with its vaults (via API), and if yes, a front-page acknowledgment."*

**Kamino reason.** BuildKit already exists at `kamino.com/build`. Altitude is the first integration partner. Privy embedded wallets power it. Ethena is reportedly in active discussions. The infrastructure for agent-as-consumer is live today — an LLM agent could deposit into a Kamino vault via BuildKit right now, through a Privy wallet, with KYB constraints. Kamino's positioning on this can be assertive rather than defensive.

**Consequence.** The Fintechs audience page (and the Fintechs Audience Router box) should name this directly. Not "AI-friendly APIs" — that's decorative. Specifically: "Yield for your app, your users, or the agents acting on their behalf." Or in the Fintechs tagline: "Backend credit for consumer apps. And for the agents inside them." This shows 2026-awareness without making the whole brand about AI.

**Trap to avoid.** Plastering "AI-native" across the homepage. Kamino is not an AI product. The agent acknowledgment lives in the Fintechs treatment and a footer disclosure, not in the hero.

### Principle 19 — The Coinbase routing pattern, enforced at the edge.

**Rule.** Returning users with connected wallets or session cookies land on the webapp directly. First-time visitors land on the landing page. The toggle ("always show landing") lives in settings but is off by default. This is a load-bearing UX decision, not a technical detail.

**External research finding.** The research doesn't cite Coinbase's exact routing pattern but cites the overall Mercury/Brex pattern: *"the Sign-in is de-emphasized — right-edge, small… Sign-in small, Get started primary."* The point is that session-aware brands do not treat returning users the same as first-time visitors.

**Kamino reason.** Today `kamino.com/` *is* the webapp (per the open question in the spec: *"Webapp location — keep at kamino.com/ and serve landing at subdomain, or relocate webapp to app.kamino.com / kamino.com/app? Live reality today: kamino.com/ is the webapp — this migration is the single biggest unstated blocker."*). The migration from today's state to a routed homepage is the single biggest engineering blocker to the landing page shipping. Until it's resolved, the entire landing architecture is theoretical.

**Consequence.** The routing decision is prerequisite to the landing build, not downstream of it. Recommendation: keep the webapp at `kamino.com/` with the session-aware "Launch App" detection, and serve the new landing at `kamino.com/` for non-session users; the URL architecture is unchanged and the webapp URL history is preserved. Audience pages live at `kamino.com/solutions/institutions` etc. (the Coinbase pattern). Alternative: subdomain the webapp to `app.kamino.com` and move the landing to `kamino.com/`, which is cleaner architecturally but carries migration cost.

**Trap to avoid.** Treating this as a V2 concern. If the landing page ships and every returning user still lands on it by default, retention breaks.

### Principle 20 — Opinionated voice reads as credibility. Be opinionated.

**Rule.** The site carries one or two strong, quotable brand lines — the Kamino equivalent of Linear's "Issue tracking is dead" or Morpho's "serves, not extracts" or Anthropic's "safety at the frontier." These are risk-taking declarations, not hedged claims.

**External research finding.** *"Opinionated voice reads as credibility… 'Issue tracking is dead.' 'Obsess over every basis point.' 'Open by default, secure by design.' 'No ads. No sponsored content.' Strong opinions are trust signals; neutral copy reads as committee-authored."*

**Kamino reason.** Kamino has a real opinion — quantifiably so. The Jupiter Lend refinance block was a brand-cost bet on Kamino's risk framing. The refusal to delegate oracle choice (unlike Morpho) is a product opinion encoded in code. The deferral of KMNO value accrual until revenue > 4–5x operating costs is a capital-allocation opinion. The mandate-permanence framing against Maple is a product opinion. The Foundation structure prohibiting equity is a structural opinion. These are all credibility-generating because they are *positions Kamino can be attacked for* — and attacks land on competitors more than on Kamino.

**Consequence.** Surface one or two of these as brand lines on the homepage. Candidates:
- *"Lender solvency is paramount."* (Marius-voice, direct from the meeting intelligence. Reads as a principle the whole protocol is governed by.)
- *"Pristine by design."* (Compresses the pristine-product philosophy into an ownable two-word construction.)
- *"Credit deserves the same scrutiny as code."* (Addresses both the DeFi-audit-culture reader and the TradFi-due-diligence reader simultaneously.)
- *"Mandates don't drift."* (Implicit anti-Maple, positive-framed, memorable.)

These live in the trust block or the Kamino-as-one-system section as pull-quote callouts, not as the hero.

**Trap to avoid.** Anodyne corporate copy. "Kamino is building the future of onchain credit" is committee copy — factually true, rhetorically dead. Replace with opinion.

---

## PART 3 — Section-by-section page architecture

This is the core. Every section of the new kamino.com/, top to bottom. Each section carries: purpose, recommended structure, copy direction (with real draft copy and options where open), justification citing both external research and Kamino-specific reasoning, what this section deliberately rejects, live-data requirements, and open decisions for user confirmation.

Eleven sections covered. Section 1 is the top nav and returning-user routing. Sections 2 through 10 are the homepage sections in order. Section 11 is the footer. Per-audience page architecture (Individuals, Institutions, Issuers, Fintechs) is surfaced within Section 3 (Audience Router) with the tagline architecture; the downstream page structures are a second deliverable to be specified after this document is approved.

### Section 1 — Top navigation and returning-user routing

**Purpose.** The top nav does two jobs: orient the first-time visitor to Kamino's breadth and route the returning user into the webapp immediately. It must feel tighter than the current webapp nav (which carries Swap, Earn, Borrow, Multiply, Liquidity, Assets as peers) while accommodating the new institutional positioning that the webapp nav cannot carry.

**Recommended structure.**

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [Kamino logo]    Products ▾   Solutions ▾   Developers   Company ▾   [Launch App] │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Products dropdown (four columns, by intent per the navigation redesign context):**
- **Earn** — Kamino USD · Lending · Institutional Yield · Liquidity
- **Borrow** — Markets · Multiply · Off-Chain Collateral · Fixed Rates
- **Trade** — Swap
- **Build** — BuildKit · API · SDK

**Solutions dropdown (the four audiences, locked):**
- Individuals — *[tagline]*
- Institutions — *[tagline]*
- Issuers — *[tagline]*
- Fintechs — *[tagline]*

**Developers** (direct link) — goes to `/developers`, the docs + API + integration hub.

**Company dropdown:**
- About — *The Kamino Foundation*
- Security — *20 audits · 4 formal verifications · $1.5M bug bounty*
- Governance — *gov.kamino.finance*
- Blog — *blog.kamino.finance*
- Careers
- Press

**Launch App (right-aligned CTA):** Session-aware. For returning users with connected wallets or persistent cookies, the entire `kamino.com/` redirects directly to the webapp (see "Returning-user routing" below). For first-time visitors, the Launch App button opens the webapp in a new tab or routes to the current webapp URL.

**Copy direction.**

The four audience taglines in the Solutions dropdown are the abbreviated versions of the Audience Router taglines (Section 3 below). Draft — drawn from the Section 3 options:
- Individuals — *Earn, borrow, and multiply on Solana.*
- Institutions — *Regulated onchain credit for capital at scale.*
- Issuers — *Distribute your asset through credit and leverage.*
- Fintechs — *Embed institutional-grade yield in your app.*

**Justification.**

- *External research.* The research identifies the dominant 2026 pattern: *"Five top-level: Products | Solutions | Resources | About | Pricing"* (Mercury) or *"Products | Solutions | Developers | Resources | Pricing | Log in"* (Stripe). Tight navs are the norm for top-tier sites. Linear, Raycast, Morpho, Anthropic all have navs under 8 items. *"Mega-menus are dead (for new SaaS); tight nav is in."*
- *Kamino reason.* The locked nav in the landing spec already follows this pattern: *"Products · Solutions · Developers · Company · [Launch App]."* The critical decision is how the Products dropdown is structured — by product SKU (Earn, Borrow, Multiply, Swap, Liquidity, Institutional Yield, Off-Chain Collateral, Fixed Rates, BuildKit — nine items flat) or by user intent (Earn, Borrow, Trade, Build — four intent clusters). The navigation redesign context is explicit that the webapp will move to intent-based clusters (Earn, Borrow, Trade, Assets). The landing page's Products dropdown should mirror this — four columns, intent-organized — so that the landing and webapp share a mental model.
- *Pricing in-nav?* The research notes that *"'Pricing' is increasingly in top nav"* for mid-to-large SaaS. But Kamino's "pricing" is APYs and fees, which are contextual per product. This is the wrong metaphor for Kamino. Decision: no Pricing item in nav. Fees and APY context appear on individual product pages.

**What this section deliberately rejects.**

- *The webapp-nav pattern* (Swap · Earn · Borrow · Multiply · Assets). Appropriate for the webapp; wrong for a landing page that has to carry institutional weight. The institutional visitor needs to see "Solutions" and the four audiences; the retail visitor is already going to the webapp directly.
- *A Token / KMNO nav item.* Tempting for visibility but it codes Kamino as a token project. KMNO lives inside Company and in a Companies/Investors page, not the top nav. (See Trap to avoid in Principle 15 and open decision §13.8 in the deep-comprehension doc.)
- *Twitter / Discord / Telegram social icons in the nav.* Retail pattern. Appropriate for the webapp footer and for the landing footer, not the landing top nav.
- *Stripe-style mega-menus with 20+ items per dropdown.* Over-scale for Kamino. Four-column Products dropdown is enough.

**Live-data requirements.** None for the nav itself. The returning-user detection logic is the load-bearing technical dependency — see routing below.

**Returning-user routing.**

Today `kamino.com/` *is* the webapp. This is the blocker the landing spec correctly flags: *"Live reality today: kamino.com/ is the webapp — this migration is the single biggest unstated blocker."*

Two viable routing architectures:

*Option A — Session-aware root.* `kamino.com/` detects connected wallet or cookie-stored session. If detected: redirect to the webapp (which lives at `kamino.com/webapp/...` or at a subdomain). If not detected: serve the landing page. This is the Coinbase pattern. Pros: URL compatibility (existing kamino.com links preserved); clean DX for returning users; SEO continues to favor kamino.com. Cons: requires a reliable detection layer and a fallback for the edge cases (fresh browser, privacy mode, cross-device).

*Option B — Subdomain webapp.* Webapp moves to `app.kamino.com`. `kamino.com/` is unconditionally the landing page. Existing in-app links route to `app.kamino.com/...`. Pros: architecturally clean; SEO for landing is isolated from app; no detection logic needed. Cons: breaks existing deep links; app URL has less recognition; retail users must bookmark a new URL.

*Recommendation.* Option A. The Coinbase pattern works because crypto users have a connected wallet as the session signal — there is no ambiguity about whether they are returning, and the cookie persistence problem is solved by the wallet adapter. The migration cost of Option B is higher than Option A's detection cost. However — and this matters — Option A's detection must have a visible "Always show landing" toggle in the webapp settings, so that institutional visitors who happen to have a wallet can revisit the landing page if desired. The locked spec already mentions this toggle.

**Open decisions.**
- Confirm Option A routing versus Option B subdomain. Assigned to Engineering as prerequisite to landing build.
- Confirm four-column intent-based Products dropdown versus flat 9-item SKU list.
- Confirm the four Solutions dropdown taglines match the Audience Router taglines (this document recommends they do — see Section 3).

---

### Section 2 — Hero

**Purpose.** The hero carries the category-authorship claim in one sentence, the scale-and-record proof strip in four numbers, and the visual commitment to Kamino's design identity. It does not carry a CTA in the body — routing is handled by the top-nav Launch App for returning users and by the Audience Router below for first-time visitors. Its job is to land the positioning in under three seconds and induce the reader to scroll.

**Recommended structure.**

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│                           [top nav above]                                    │
│                                                                               │
│                                                                               │
│                                                                               │
│                   CONNECTING GLOBAL CAPITAL                                  │   ← bold
│                   to the new financial system                                │   ← light
│                                                                               │
│                                                                               │
│                                                                               │
│                                                                               │
│    $3.2B           $19.4B              132,147          187                  │
│    AUM             Loans Originated    Active Loans     Assets Onboarded    │
│                                                                               │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

The hero is one viewport-filling surface. The headline sits roughly at the visual center; the proof strip sits at the bottom third, evenly spaced across the page width with consistent typography.

**Copy direction.**

Headline (LOCKED): *"Connecting global capital"* (bold, line 1) / *"to the new financial system"* (lighter, line 2). One sentence, two visual lines, weight hierarchy does the work.

Proof strip (LOCKED stat set, 4 cells): AUM · Loans Originated · Active Loans · Assets Onboarded. Numbers fed live from protocol data.

No tertiary microcopy under the headline. No sub-line beneath "to the new financial system." Resist the urge. The external research is explicit: *"Hero compression. Almost every best-in-class hero in the set is under 10 words."* The Kamino hero is already nine words. Adding "Institutional-grade credit infrastructure, live on Solana" or similar under the headline degrades the compression and, more importantly, degrades the category claim.

However, consider: **a single rhetorical element tucked between the headline and the proof strip — a short, italicized or muted-weight attribution phrase.** Draft: *"— one system, seven products, zero bad debt."* Or: *"— credit infrastructure, originated at scale."* This is optional and contested. The Mercury pattern ("Radically different banking" + "Apply online in 10 minutes") uses one level of subhead for proof-of-difference. The Kamino version does not need the proof-of-difference subhead because the four-stat proof strip is doing that work. Recommendation: no subhead. The proof strip is the subhead.

**Proof strip copy calibration.** The four cells should be labeled with slight typographic restraint — not "$3.2B AUM IN ASSETS UNDER MANAGEMENT" but "$3.2B / AUM" stacked. The number is large, the label is small. This matches the locked spec's visual mock.

**Visual direction.**

The hero visual needs a single committed motif, per the research's observation: *"distinctive visual commitment. Mercury's cinematic flow. Raycast's keyboard. Linear's dashboard. Supabase's Postgres green. Figma's color carousel. The commitment is deep — one idea, executed with conviction — rather than 'hero illustration + product shot + logo wall,' which is the middle-tier default."*

Three visual options to present to the design team (recommendation at the end):

*Visual Option A — Live data motif (recommended).* A subtle, abstract animation rendering the proof strip numbers as live-ticking data — numbers that update, loans incrementing, active loan count pulsing slightly as new positions open. The aesthetic is a financial terminal softened by Kamino's brand palette. This commits to data-as-hero, which reinforces the transparency thesis of the IY section below. It also sidesteps the "product screenshot" problem (Kamino has many products, no single hero product) by making the *proof* the hero.

*Visual Option B — Liquidity-flow abstract.* Animated network diagram visualizing capital flowing from deposits through the protocol into products — a quiet, reverent motion that evokes the "connecting" verb in the hero. Morpho-adjacent aesthetic. Risk: reads as generic DeFi.

*Visual Option C — The typography-led hero (Wise-style).* No background visual at all. The headline and proof strip carry the entire hero. Background is a flat Kamino-brand color or a subtle gradient. This is the most restrained option and carries the strongest institutional weight. Risk: underweight against Mercury and Morpho, which both use motion.

Recommendation: Option A. The live-data motif is unique to Kamino's position (no competitor has the data to credibly animate live) and reinforces the trust thesis.

**Justification.**

- *External research.* The hero compression principle is documented at length. Kamino's "Connecting global capital to the new financial system" is nine words and fits cleanly in the Linear (10), Stripe (7), Morpho (7) range. The research's principle 1 (*"Lead with category, not feature"*) applies — Kamino's hero is already doing this. The research's principle 2 (*"One primary CTA. One secondary. Never three"*) applies — the hero has no body CTA, which the research notes is unusual but defensible for category-authorship sites (Anthropic has no body CTA either).
- *Kamino reason.* The deep-comprehension document reads the hero closely: *"'Connecting' — Kamino is the connective tissue, not the destination… 'Global capital' — not 'crypto capital,' not 'DeFi users'… 'The new financial system' — not 'DeFi.'"* Every word carries positioning weight. Adding a subhead risks diluting that precision.

**What this section deliberately rejects.**

- *APY numbers in the hero.* Principle 12. Ondo, Morpho, Coinbase Institutional all refuse this.
- *A "Launch App" button in the hero body.* The locked spec removes this; routing is handled by the top-nav button for returning users and the Audience Router for first-time visitors. This is a deliberate refusal of the conventional hero-CTA pattern and the research supports it (*"No 'Contact sales' in the hero itself"* — Stripe).
- *A customer logo wall below the hero.* The research: *"Logos in Section 2 or Section 3, rarely in the hero itself… Almost no one puts a logo wall above the fold in 2026 — that was a 2018-2021 pattern."* Logos appear later, in the Evidence section.
- *A video or animated explainer.* Would collapse the compression. The proof strip is the proof.
- *Founder photo.* Principle 15.
- *"Try Kamino" or "Start earning" hero CTA.* These are retail-conversion patterns. The locked no-CTA-in-hero spec is correct.

**Live-data requirements.**

Four proof-strip numbers must be fed from live protocol data:
- **AUM** — total deposited capital across all Kamino products (Lend reserves + Earn vaults + Multiply positions + IY vault + Off-Chain Collateral + Liquidity vaults). Source: Kamino on-chain state. Refresh cadence: hourly (cached) with render-time fallback to last known.
- **Loans Originated** — cumulative loan volume. Source: Kamino Lend historical data. Refresh: daily.
- **Active Loans** — current open loan count. Source: Kamino Lend live. Refresh: hourly.
- **Assets Onboarded** — count of supported/listed assets across all markets. Source: Kamino asset list. Refresh: weekly (or on-demand when a new asset lists).

Fallback behavior: if the data pipeline fails, show the last known value with a subtle timestamp ("as of [date]"). Never placeholder text.

**Open decisions.**
- Confirm: no subhead under the locked two-line headline.
- Confirm: Visual Option A (live-data motif) versus Option B (liquidity network) versus Option C (typography-only).
- Confirm: AUM definition — does it include Off-Chain Collateral's custodied assets? Recommendation: yes, include (the whole point is that custody remains with the borrower while capital flows through Kamino; these are assets the protocol is administering even if not holding). This needs a legal review.
- Confirm: the proof-strip values shown in this document (AUM $3.2B, Loans Originated $19.4B, Active Loans 132,147, Assets Onboarded 187) are directionally correct as of April 2026. Final values fetched at build time.

---

### Section 3 — Audience Router

**Purpose.** The Audience Router is the page's primary structural choice. It routes every first-time visitor into the audience-specific page built for them, with equal weight and no default path. It is the architectural resolution of the four-audience strategy and the most distinctive single element of the landing page.

**Recommended structure.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                                                                             │
│              POWERING EVERY PART OF THE ONCHAIN ECONOMY                     │
│                                                                             │
│                                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │             │ │             │ │             │ │             │          │
│  │ INDIVIDUALS │ │INSTITUTIONS │ │  ISSUERS    │ │  FINTECHS   │          │
│  │             │ │             │ │             │ │             │          │
│  │ [tagline]   │ │ [tagline]   │ │ [tagline]   │ │ [tagline]   │          │
│  │             │ │             │ │             │ │             │          │
│  │     →       │ │     →       │ │     →       │ │     →       │          │
│  │             │ │             │ │             │ │             │          │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — the section header (LOCKED).**

*"Powering every part of the onchain economy."*

The word "powering" is reserved for this section only (codified in the locked framing principles). The line is a category-range claim — Kamino is the power source, not the destination. It pairs rhetorically with the hero: the hero says "connecting" (humble verb), the router says "powering" (active verb). Together they frame Kamino as infrastructure that both connects and powers.

**Copy direction — the four box taglines. Three option sets per audience, with a recommendation.**

This is the document's single most load-bearing copy decision. The tagline is the pitch for every downstream audience page. It has to orient in under two seconds, sustain the institutional register, and promise a reward for clicking. The spec flags this as still open: *"Per-box taglines for the four Audience Router cards (draft after audience pages are specced)."* Because the audience page specs are not yet final, the taglines below are drafted with the audience page direction in mind.

#### Individuals

*Option 1 (retail-warm, action-led):* **Earn, borrow, and multiply on Solana.**
- Three verbs. Product-accurate. No institutional language but no retail hype either. Reassures the DeFi-native user that their path is direct.
- Risk: reads as a product list, not a promise.

*Option 2 (capability-led, register-matched):* **A complete onchain balance sheet.**
- Elevated. Names the outcome — you get to run a personal balance sheet onchain (earn, borrow, leverage, store liquidity) — without feature list. Matches the institutional register of the hero.
- Risk: might read as too abstract for a DeFi user arriving via CT.

*Option 3 (emotive, opinionated):* **Put your capital to work. One interface, every product.**
- Two sentences. First is action; second is integration. Leans on the vertical-integration thesis.
- Risk: slightly longer; "put your capital to work" is a near-cliché.

**Recommendation: Option 1.** The retail user does not need an elevated register on the Individuals box. The product-list-via-verbs is exactly what they want to see, and "Earn, borrow, and multiply" reads as a direct commitment to the three products they care about. Individual warmth on an otherwise institutional page is the correct voice-shift.

#### Institutions

*Option 1 (structural, regulated-tone):* **Regulated onchain credit for capital at scale.**
- Names the thing — regulated credit, specifically onchain, specifically at scale. Sounds like a line from the IY announcement and is the right register.
- Risk: "at scale" is a known cliché.

*Option 2 (mechanism-led):* **Institutional yield, custody-preserving borrow, fixed rates.**
- Names the three products institutions get (IY for deployment, Off-Chain Collateral for borrow, Fixed Rates for predictability). Specific.
- Risk: reads as product-list, not promise.

*Option 3 (outcome-led, executive-voice):* **Onchain credit infrastructure, with institutional accountability.**
- Names the two things that have to coexist — infrastructure (modern) and accountability (regulated). Single sentence, institutional register.
- Risk: "accountability" could read as code for "safe" and be seen as hedged.

**Recommendation: Option 1.** "Regulated onchain credit for capital at scale" is the tightest construction and uses the vocabulary an allocator or compliance officer would recognize. It commits to the regulated framing without over-claiming. The Institutions downstream page then extends this into the full Off-Chain Collateral / Fixed Rates / Institutional Yield story.

#### Issuers

*Option 1 (distribution-led):* **Distribute your asset through credit and leverage.**
- Names the unique value Kamino offers — not just listing, but the downstream distribution via Multiply and isolated markets. Differentiates from a generic "list on our protocol" pitch.
- Risk: "distribute" is B2B-vague.

*Option 2 (specific proof-led):* **The credit layer for tokenized real-world assets.**
- Names the category Kamino wants to own for issuers. PRIME is the proof. Tokenized equities, tokenized private credit, and tokenized receivables are the pipeline.
- Risk: "real-world assets" is DeFi-jargon ("RWA") softened; some issuers don't self-identify as "real-world" (tokenized equities issuers, reinsurance-backed stable issuers).

*Option 3 (case-study-implicit):* **Launch your asset. $600M in four months with zero incentives.** (the stat from PRIME, made concrete)
- Very specific. The PRIME proof point is Kamino's strongest issuer-side evidence. Using the number in the tagline is aggressive but credible.
- Risk: specific numbers in a tagline can date quickly; the implicit pitch "you too will get $600M" is an over-claim.

**Recommendation: Option 1** ("Distribute your asset through credit and leverage"), with Option 2 as a strong runner-up. Option 3 is too aggressive for the tagline — the $600M proof belongs in the Issuers page body, not in the router box. Option 1 has the virtue of naming Kamino's specific differentiator (distribution, not listing) in eight words.

#### Fintechs

*Option 1 (clean B2B infrastructure):* **Embed institutional-grade yield in your app.**
- Names the thing being embedded (yield), the quality tier (institutional-grade), and the surface (your app). BuildKit-adjacent without naming the product.
- Risk: "institutional-grade" is widely used; "embed" is a known SaaS term.

*Option 2 (agent-era aware):* **Backend credit for consumer apps. And for the agents inside them.**
- Two sentences. Acknowledges the agent-era shift (Principle 18) without making the whole line about AI. Positions BuildKit as the credit layer for both human-consumed apps and agent-driven consumption.
- Risk: "agents inside them" is 2026-specific and may feel quickly dated.

*Option 3 (time-led, specific):* **Launch yield for your users in weeks, not months.**
- Leans on the "weeks not months" rhetorical pattern the external research flagged as underused in DeFi. Specific and promise-oriented.
- Risk: time claim needs to be defensible; BuildKit timelines are not publicly proven yet.

**Recommendation: Option 1** ("Embed institutional-grade yield in your app"). "Institutional-grade" here does real work because it distinguishes Kamino's backend from any number of DeFi-native alternatives a fintech could integrate. Keep Option 2's agent-era recognition for the Fintechs downstream page, not the tagline.

#### Final tagline recommendation set

**Individuals** — *Earn, borrow, and multiply on Solana.*
**Institutions** — *Regulated onchain credit for capital at scale.*
**Issuers** — *Distribute your asset through credit and leverage.*
**Fintechs** — *Embed institutional-grade yield in your app.*

These four lines, taken together, demonstrate voice-shift per audience (Individuals warm-verb, Institutions regulated-register, Issuers distribution-mechanic, Fintechs B2B-infrastructure) while sharing a common commitment to naming what the reader actually gets.

**Click-through entry animation.**

The locked spec calls for *"an 'entry' animation that takes the user one level deeper into the audience-specific page… Animation should feel like stepping through a door into a world built for that audience — not a page transition."*

Design intent:
- On click, the chosen box expands to fill the viewport with a short easing animation (~400–600ms).
- The other three boxes fade out or slide offscreen.
- The expanded box transitions into the first visible frame of the audience page (typically that page's hero).
- The page is already loaded behind the animation — no white-screen flash, no URL-change flicker.

Rhetorical payoff: the user feels they have entered Kamino's Individuals/Institutions/Issuers/Fintechs *space*, not clicked a link. The Mercury cinematic flow pattern is the reference.

**Hover behavior.**

On hover over any of the four boxes:
- Subtle lift — 2–4px shadow elevation.
- A secondary line of micro-copy reveals beneath the primary tagline. Draft micro-copy:
  - Individuals: *"$3.2B in yield, leverage, and liquidity products."*
  - Institutions: *"$25M Institutional Yield vault live. Off-Chain Collateral and Fixed Rates in production."*
  - Issuers: *"PRIME: $600M+ in four months. Your asset could be next."*
  - Fintechs: *"BuildKit live. Altitude integrated. KYB-compliant yield stack."*

The hover micro-copy makes the box more informative without cluttering the resting state. The research supports this: the best audience-tier bands (Brex) carry secondary copy that deepens the tile.

**Visual treatment.**

Four equal-width boxes filling the page width, equal height, consistent typography across all four. No color-coded audiences at the homepage level — differentiation happens downstream. Each box has the same geometric identity (rectangle, arrow, tagline, hover micro-copy). The only within-box differentiation is the primary label and tagline.

No iconography. The research principle (distinctive visual commitment) argues for a single motif, not four. Icons per audience fragment the visual identity.

**Justification.**

- *External research.* Brex's three-tier audience band is cited as *"the cleanest tier-segmentation on a homepage in the set."* Mercury's 11-industry Solutions dropdown executes the same logic at scale. The research's principle 5 (*"Segment audiences explicitly — but only after establishing the core claim"*) matches Kamino's placement exactly — router below hero.
- *Kamino reason.* Deep-comprehension document §8.4: *"Each of the four audiences is — right now, in 2026 — at a specific inflection."* The Router is the architectural acknowledgment of these four distinct inflections.

**What this section deliberately rejects.**

- *Icon-per-audience.* Fragments visual identity.
- *Color-per-audience at the homepage level.* Would convert the Router into decoration.
- *Different-size boxes by strategic priority* (bigger Institutions box because it's the strategic focus). Undermines the equal-weight commitment to all four audiences.
- *"Not sure which you are? Start here" catch-all.* The Router is the question-that-is-the-answer; adding a fifth box is a concession to indecisive visitors that signals the four-way framing isn't working.

**Live-data requirements.**

Only the hover micro-copy for the Institutions box ("$25M Institutional Yield vault live. Off-Chain Collateral and Fixed Rates in production.") should be live-updated when capacity changes materially. The other three boxes can carry static copy.

**Open decisions.**
- Confirm the four recommended taglines.
- Confirm hover micro-copy per box.
- Confirm the entry animation direction (full-viewport expansion versus alternative like slide-in or iris-wipe).
- Confirm the downstream audience pages will be specified separately before the taglines are finalized (recommendation: taglines lock after audience pages draft; plan for revision after.)

---

### Section 4 — Trust block ("Standard DeFi protection stops at the smart contract.")

**Purpose.** The trust block is the single concentrated proof-of-credibility surface on the page. It names every layer of Kamino's trust architecture — protocol, oracle, regulatory, custody, attestation, structural — and frames them rhetorically as a contrast to the ambient assumption about DeFi protection. It is the section that institutional visitors linger on and the section that retail visitors are reassured by in passing.

**Recommended structure.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│     DEFI TRUST ENDS AT THE CODE.                                            │
│     KAMINO'S KEEPS GOING.                                                   │
│                                                                             │
│     Built to survive every layer that matters — protocol, oracle,           │
│     custody, regulation, and continuous independent attestation.            │
│                                                                             │
│                                                                             │
│   ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐    │
│   │ PROTOCOL           │ │ ORACLE             │ │ CUSTODY            │    │
│   │                    │ │                    │ │                    │    │
│   │ 20 audits          │ │ Scope — in-house   │ │ Qualified          │    │
│   │ 4 formal           │ │ TWAP/EWMA,         │ │ custodians,        │    │
│   │ verifications      │ │ manipulation-      │ │ tripartite         │    │
│   │ $1.5M bug bounty   │ │ resistant, triple- │ │ agreements,        │    │
│   │ Fully open source  │ │ audited            │ │ no title transfer, │    │
│   │                    │ │                    │ │ rehypothecation    │    │
│   │                    │ │                    │ │ prohibited         │    │
│   └────────────────────┘ └────────────────────┘ └────────────────────┘    │
│                                                                             │
│   ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐    │
│   │ REGULATORY         │ │ ATTESTATION        │ │ STRUCTURAL         │    │
│   │                    │ │                    │ │                    │    │
│   │ Liechtenstein      │ │ Andersen UK        │ │ Kamino Foundation: │    │
│   │ FMA supervision,   │ │ monthly            │ │ no equity, no      │    │
│   │ daily reporting    │ │ attestation;       │ │ shareholders,      │    │
│   │ on the lending     │ │ Haruko real-time   │ │ mission-locked,    │    │
│   │ operation          │ │ loan data          │ │ onchain governance │    │
│   │                    │ │                    │ │                    │    │
│   └────────────────────┘ └────────────────────┘ └────────────────────┘    │
│                                                                             │
│                                                                             │
│     $19B+ ORIGINATED.  ZERO BAD DEBT.  3+ YEARS LIVE.                       │
│                                                                             │
│                                                                             │
│                  [ View Security → ]                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — heading options.**

*Option 1 (recommended):* **DeFi trust ends at the code. Kamino's keeps going.**
- The tightest construction. Two sentences. Contrast-pair. Names the category of the received assumption ("DeFi trust") and locates Kamino's differentiation (*"keeps going"*). The word "code" signals that Kamino understands the smart-contract audit baseline and is going beyond it.

*Option 2:* **Standard DeFi protection stops at the smart contract. Kamino's extends through regulation, custody, and continuous attestation.**
- Closer to the Mercury construction ("Standard protection stops short. Mercury goes further"). More explicit, more institutional. Slightly more words.

*Option 3:* **Trust, in six layers.**
- Extremely compressed. Institutional. Sets up the six-card grid without needing a contrast-pair. Risk: understated.

**Recommendation: Option 1.** The two-sentence construction with the em-dash implied pause carries the Mercury discipline without parroting the Mercury sentence. "Keeps going" is a small but memorable rhetorical choice — it says Kamino's trust architecture is not bolted on but continuous.

**Body copy under the heading:**

*"Built to survive every layer that matters — protocol, oracle, custody, regulation, and continuous independent attestation."*

This sentence does three jobs: it names the six layers (sets up the grid), it uses "survive" (which is the correct verb — Kamino's trust architecture has survived liquidations, market regimes, depegs, exploits in other protocols), and it uses "continuous" (as a specific contrast to the quarterly PDF pattern of private credit).

**The six trust layers.**

Each card in the 3×2 grid names a layer, lists its proof points, and — where possible — cites a specific counterparty or artifact.

1. **Protocol.** 20 audits (list: Certora, OtterSec, Ackee, Offside Labs, Sec3, Informal Systems, others — with linkout to github.com/Kamino-Finance/audits). 4 formal verifications. $1.5M Immunefi bug bounty. Fully open source.

2. **Oracle.** Scope — Kamino's in-house oracle. Triple-audited. TWAP/EWMA manipulation-resistant. Pyth + Chainlink as reference feeds. This card exists because Morpho delegated oracles and it bit them (MEV Capital / xUSD, October 2024). Naming the Scope oracle specifically is a credibility transfer that mid-tier DeFi sites cannot match.

3. **Custody.** Qualified custodians. Tripartite agreements. No title transfer. Rehypothecation contractually prohibited. Chainlink Proof of Reserves on Off-Chain Collateral. This card leans on the Anchorage/FMA/Institutional Yield structure, described in institutional register.

4. **Regulatory.** Liechtenstein FMA supervision of the lending operation. Daily reporting. First DeFi protocol with an institutional product under an FMA-licensed lending operation. (Sister card — could surface Off-Chain Collateral's US OCC-chartered Anchorage as a separate regulatory anchor, but six-layer layout is cleaner.)

5. **Attestation.** Andersen UK monthly independent attestation (loan balances, collateral ratios, portfolio health). Haruko real-time institutional data pipeline (same one Hidden Road, Galaxy, XBTO, Wintermute use). Published publicly. This is the layer the IY announcement leans on hardest.

6. **Structural.** Kamino Foundation — Cayman ownerless foundation company. No equity, no shareholders, no beneficiaries, mission-locked. Onchain governance via KMNO. This card answers the "who profits" question in a way no equity-funded DeFi protocol can.

**The anchor line.**

Below the grid, one line, centered, larger type:

*"$19B+ originated. Zero bad debt. 3+ years live."*

This is the single most unarguable claim on the entire site. It sits at the bottom of the trust block as the summary judgment — all the layers above exist *to make this claim true*. The sentence structure is three beats — volume, record, duration — each self-contained.

**Justification.**

- *External research.* Mercury's "Standard protection stops short. Mercury goes further." is explicitly cited as a template. Morpho's audit list (Cantina, ChainSecurity, OpenZeppelin, Spearbit, Trail of Bits, Certora) is cited as the DeFi pattern to extend. Stripe's $1.9T volume figure is cited as the single-number close-the-conversation device.
- *Kamino reason.* The deep-comprehension document §9 surfaces the full moat inventory and specifically flags: *"Zero bad debt at $19B+ originated… A protocol team cannot replicate this in a year. This is the single most defensible moat."* The trust block concentrates the inventory into one rhetorical frame.

**What this section deliberately rejects.**

- *A separate "audits" section with logos only.* Logo walls without context are weaker than labeled trust layers. The audit firm names should be readable but in a ranked context (Protocol card), not as a standalone trust bar.
- *"Battle-tested" as a heading.* The current draft's Section 5 uses "BATTLE-TESTED SECURITY" — too common, and it flattens the specificity. Replace.
- *A video about Kamino's audit culture.* Would be watched by 1% and read as trying-too-hard.
- *"Our security is our priority" framing.* Principle 20 — anodyne copy. Replace with opinion.
- *A Trust Center linkout as the primary action.* The Mercury pattern includes a "Trust" section link, and Anthropic has a Trust Center. Kamino can include a "/security" link as the section CTA, but the trust block itself has to be comprehensive enough that the linkout is not required to understand Kamino's position.

**Live-data requirements.**

- **Audit count**: refreshed when a new audit lands. Currently 20.
- **Bug bounty max**: sourced from Immunefi; currently $1.5M.
- **Andersen UK attestation**: latest attestation date, optionally link to the public PDF.
- **Loans Originated and Bad Debt**: live from onchain. "$19B+" and "zero" respectively.
- **Kamino Foundation**: static copy, links to There Is Only KMNO v4 and the Foundation charter where public.

**Open decisions.**
- Heading: confirm Option 1 ("DeFi trust ends at the code. Kamino's keeps going.").
- Whether Anchorage Digital (US OCC-chartered) gets its own inline mention in the Custody or Regulatory card.
- Whether the six-card grid becomes a 2×3 vertical stack on mobile.
- Whether the "Kamino Foundation" card should include the 58% staff / 26% audit-risk-security cost breakdown from 2025 financials as a concrete proof point.

---

### Section 5 — Institutional Yield spotlight

**Purpose.** IY is the proof-of-thesis product. This section is the page's architecture-reveal moment — it converts the hero's category claim into an operational fact with a product URL, a live number, and a counterparty stack. It sits structurally after the trust block so that when the reader arrives here, they already believe Kamino's trust architecture; IY is the specific product where that architecture is operating.

**Recommended structure.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                         KAMINO INSTITUTIONAL YIELD                          │
│                                                                             │
│     The first onchain vault to connect global depositors with regulated,    │
│     overcollateralized BTC-backed institutional credit.                     │
│                                                                             │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                                                                   │    │
│   │ Live Portfolio                                                    │    │
│   │                                                                   │    │
│   │ 6.8% APY          $24M of $25M      27% avg LTV      41 loans   │    │
│   │ current           deposited          portfolio-wide    active    │    │
│   │                                                                   │    │
│   │ [ Live data from Haruko · attested monthly by Andersen UK ]      │    │
│   │                                                                   │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│                                                                             │
│   Capital flows through a Liechtenstein FMA–supervised lending operation.   │
│   Loans are overcollateralized with high-quality assets (BTC at launch)     │
│   at a 60% max LTV, held at qualified custodians under tripartite           │
│   agreements. Collateral title remains with the borrower. Rehypothecation   │
│   is contractually prohibited.                                              │
│                                                                             │
│   Every loan. Every collateral position. Every LTV. Visible in real time.  │
│                                                                             │
│                                                                             │
│                [ Deposit → ]    [ Read the full structure → ]              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — heading.**

*Option 1 (recommended):* **Kamino Institutional Yield**
- Let the product name do the work. The supporting line carries the category claim.

*Option 2:* **The first onchain vault for regulated institutional credit.**
- More descriptive, less proper-noun-forward.

*Option 3:* **Introducing Institutional Yield.** *(product-launch register)*
- Time-limited — appropriate for the first 3–6 months post-launch; replace after.

**Recommendation: Option 1**, with Option 3 as a launch-window variant.

**Copy direction — the supporting line.**

*"The first onchain vault to connect global depositors with regulated, overcollateralized BTC-backed institutional credit."*

This line is the category-annexation sentence for IY specifically — "the first onchain vault to [do X]" is a strong positive claim that survives scrutiny (no competitor has shipped a vault with FMA supervision, monthly Andersen attestation, and Haruko real-time data). "Global depositors" echoes the hero's "global capital." "Institutional credit" is the specific credit market being tapped.

**Live Portfolio card.**

A single card surfacing four live data points:
- **Current APY** (real-time or last-interval average). Label: "current".
- **Capacity used** — "$24M of $25M deposited" (live). This is the "capacity remaining" signal the IY marketing plan explicitly wants to lean on as urgency-without-aggression.
- **Portfolio-weighted average LTV** — "27% avg LTV" (live from Haruko). This is the proof point that the 60% max LTV is aspirational; typical is much lower. The gap between max and actual is itself evidence of conservative operation.
- **Active loan count** — "41 loans active" (live).

The card is labeled below: *"Live data from Haruko · attested monthly by Andersen UK."* This single line does more credibility work than any other line on the page because it names two specific institutional counterparties.

**The structural paragraph.**

Below the card, one dense paragraph in institutional register — almost verbatim from the IY announcement, condensed. Draft:

*"Capital flows through a Liechtenstein FMA–supervised lending operation. Loans are overcollateralized with high-quality assets (BTC at launch) at a 60% max LTV, held at qualified custodians under tripartite agreements. Collateral title remains with the borrower. Rehypothecation is contractually prohibited."*

This paragraph is lifted in structure from the IY final announcement's "Lending Criteria" and "Why the Structure Matters" sections. It is written in the Goldman Sachs product-sheet voice that Marius and the Kamino team have already committed to.

**The rhetorical close.**

*"Every loan. Every collateral position. Every LTV. Visible in real time."*

This line is the transparency claim, stated rhetorically — three specific data points ("loan / collateral / LTV") followed by the commitment ("visible in real time"). It is the contrast-pair construction (Principle 11) applied to transparency: the implicit comparison is to quarterly PDF private credit (TradFi) and pool-level-stats-only lending (DeFi).

**The CTAs.**

*"Deposit →"* primary. Routes directly to `kamino.com/earn/institutional/kamino-institutional-USDC`. This is one of the few places on the homepage where a direct deposit CTA is appropriate — IY is the spearhead product and the page has been building trust for it.

*"Read the full structure →"* secondary. Routes to `kamino.com/docs/products/institutional-yield`. The documentation page is the institutional due-diligence surface.

No tertiary CTA.

**Justification.**

- *External research.* The Anthropic "Project Glasswing" pattern is the structural template — *"The second section is a single research initiative, not a product. Anthropic is signaling that research is the product. It's a confidence move: we can treat the homepage like a scientific journal front page."* IY as a dedicated section does exactly this. Also Mercury's "Launch demo" as a secondary CTA converts to Kamino's "Read the full structure" — both are the "you can verify this" move.
- *Kamino reason.* The deep-comprehension document §4.8 is the longest single-product analysis, and §8.3 names IY as the thesis-test. Failing to surface it as a dedicated section would be a missed opportunity of the single most important product of 2026.

**What this section deliberately rejects.**

- *An APY number in the section heading.* The APY appears in the Live Portfolio card, in context. A heading like "Earn 6–8% APY on BTC-backed credit" is a retail-yield pattern and would collapse the institutional register.
- *A testimonial embedded in the IY section.* The Evidence block (Section 6) is where testimonials live. IY's credibility comes from the counterparty stack (FMA, Andersen, Haruko), not from a partner quote inside the section.
- *Comparison to Maple or other competitors.* Principle 11 — positive framing. Kamino's differentiation reads itself; naming Maple activates Maple's brand in the reader's head.
- *A "How it works" step-by-step diagram.* The IY docs page has this; the homepage section is a proof-and-access surface, not an explainer. The 5-step deposit/deploy/lend/return/withdraw flow belongs in the docs, with a linkout.
- *The full "Lending Criteria" table.* Same reason. Surface the max LTV and the key structural facts in the body paragraph; table goes to docs.
- *A "Join waitlist" or "notify me" CTA.* IY is live. The CTA is Deposit.

**Live-data requirements.**

- **Current APY** (or 30-day trailing): live from Haruko-fed vault data.
- **Capacity used / total**: live from onchain vault state.
- **Portfolio-weighted average LTV**: live from Haruko.
- **Active loan count**: live from Haruko.
- **Latest Andersen UK attestation date**: optional date display ("Last attested: [date]"), live from attestation publication calendar.

Fallback: if Haruko pipeline is unavailable, surface the last known values with an "as of [date]" timestamp.

**Open decisions.**
- Confirm: APY display format ("6.8%" vs "6–8% target" vs "30-day avg: 6.8%"). The IY announcement uses "6–8% target APY" consistently. Live APY may fluctuate; showing "target" alongside "current" is more honest.
- Confirm: should the Live Portfolio card carry the four data points shown here, or a different set (e.g., adding "monthly yield to date" or "cumulative interest paid")? Marketing preference.
- Confirm: "Deposit →" routes to the product page (to sign the loan agreement and receive kiUSDC) or opens a connect-wallet modal. Recommendation: routes to product page; product page handles the agreement signing UX.
- Confirm: the IY section's visual treatment — static card with live numbers, or animated numeric ticker. Recommendation: static card with automatic refresh on a slow interval (30s) to avoid distraction.

---

### Section 6 — Evidence (institutional partners + named testimonials)

**Purpose.** This section translates Kamino's counterparty relationships into social proof. It is the section that converts "Kamino is deployed by serious people" from an abstract claim into a specific roster. It follows the IY section because the IY section has already established the institutional register; this section is the roll call of names that back the thesis.

**Recommended structure — the short-form option (recommended).**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│              DEPLOYED BY — OR ALONGSIDE —                                   │
│                                                                             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │                                                                     │  │
│  │  [Anchorage]  [Gauntlet]  [Steakhouse]  [FalconX]  [Figure]         │  │
│  │                                                                     │  │
│  │  [Chainlink]  [Coinbase]  [Paxos]  [Jito]  [Solana Company]         │  │
│  │                                                                     │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│                                                                             │
│   ┌──────────────────────────────────┐  ┌──────────────────────────────┐  │
│   │                                  │  │                              │  │
│   │ "Quote here — two short          │  │ "Quote here — two short      │  │
│   │ sentences. Names the structural  │  │ sentences. Names Kamino's    │  │
│   │ fit with FalconX's fixed-rate    │  │ execution capability on      │  │
│   │ credit requirement."             │  │ Off-Chain Collateral."       │  │
│   │                                  │  │                              │  │
│   │ — [Name]                         │  │ — [Name]                     │  │
│   │ [Title], FalconX                 │  │ [Title], Solana Company      │  │
│   │                                  │  │                              │  │
│   └──────────────────────────────────┘  └──────────────────────────────┘  │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────┐   │
│   │                                                                   │   │
│   │ "Quote here — two short sentences. Names Kamino's risk culture    │   │
│   │ and curator relationship."                                        │   │
│   │                                                                   │   │
│   │ — [Name]                                                          │   │
│   │ [Title], Gauntlet                                                 │   │
│   │                                                                   │   │
│   └──────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — heading options.**

*Option 1 (recommended):* **Deployed by — or alongside —**
- Neither "trusted by" (cliché) nor "partners" (corporate). "Deployed by or alongside" names the two distinct categories of relationship Kamino has: some counterparties are customers of Kamino (FalconX borrows, Solana Company borrows, Altitude integrates), and some are partners alongside whom Kamino operates (Chainlink provides oracle, Anchorage provides custody, Gauntlet curates). The or-construction captures both without conflating them.

*Option 2:* **The counterparty stack**
- Finance-vocabulary. Institutional. Risk: reads as infrastructural and might undersell the peer-to-peer feeling.

*Option 3:* **Serious counterparties. Serious commitments.**
- Contrast-pair. Commits to seriousness. Risk: "serious" is over-used.

**Recommendation: Option 1** ("Deployed by — or alongside —"). It is distinctive and accurate.

**The logo wall.**

Ten names, two rows, five each. Uppercased wordmarks where available, brand-accurate logos where required, same height across the row. Names (locked roster — subject to legal review on usage):

Row 1: **Anchorage** · **Gauntlet** · **Steakhouse** · **FalconX** · **Figure**
Row 2: **Chainlink** · **Coinbase** · **Paxos** · **Jito** · **Solana Company**

Each of these is a named counterparty with a specific role:
- **Anchorage Digital** — US OCC-chartered, custody partner for Off-Chain Collateral.
- **Gauntlet** — official vault curator as of November 2025.
- **Steakhouse Financial** — flagship USDC Prime curator.
- **FalconX** — Fixed Rates pilot borrower.
- **Figure Technology Solutions** — NASDAQ: FIGR, PRIME sponsor.
- **Chainlink** — oracle reference feeds, CCIP for PRIME/wYLDS, PoR for custody.
- **Coinbase** — cbBTC integration, partner validator.
- **Paxos** — PYUSD integration across Kamino markets.
- **Jito Labs** — JitoSOL dominant LST integration.
- **Solana Company (NASDAQ: HSDT)** — first Off-Chain Collateral borrower.

**The three named testimonials.**

Three fixed placements, no carousel. Each carries a full name, a specific title, a logo'd company, and two sentences maximum. Mercury-pattern.

*Ideal target testimonials (to be confirmed with Mark and Cheryl for launch readiness):*

1. **A named executive at FalconX** on Fixed Rates as the unlock for institutional credit: "Predictable borrow costs change what we can model. Fixed Rates on Kamino let us budget at the strategy level, not just the transaction level." — [Name], [Title], FalconX.

2. **A named executive at Solana Company** on Off-Chain Collateral as the structural innovation: "We can keep SOL at Anchorage and borrow onchain against it — that structure simply didn't exist before Kamino built it." — [Name], [Title], Solana Company.

3. **A named principal at Gauntlet** on the curator relationship: "Kamino's risk architecture lets us manage institutional-size vault mandates on Solana. The Scope oracle is the reason we can commit capital at this scale." — [Name], [Title], Gauntlet.

These are drafts — the final quotes need to be sourced from the actual executives, not fabricated. The structural logic of the testimonial set is: one each from a *borrower*, a *structured-product user*, and a *curator*. Three distinct relationship types, three distinct validations.

**Alternative if testimonials cannot be secured at launch.**

If Mark and Cheryl cannot deliver three named, authorized quotes by the build cutoff, the section ships as *logos only* with a stronger heading and a scale claim — Brex-pattern ("Trusted by 35,000+ top companies"). Draft:

*"Deployed by and alongside a who's-who of onchain finance."*
*"Anchorage · Gauntlet · Steakhouse · FalconX · Figure · Chainlink · Coinbase · Paxos · Jito · Solana Company — and 25+ more."*

This is weaker than named testimonials but acceptable. Placeholder "Lorem ipsum" testimonials are not acceptable.

**Justification.**

- *External research.* The research's principle 6 is explicit: *"Testimonials must be named, titled, and short."* The Linear / Brex / Framer / Mercury pattern is the reference. Logo walls with scale claims (Brex's "35,000+") are the accepted middle-ground. Carousels are called out as the failure mode.
- *Kamino reason.* Deep-comprehension §10.1 lists the partner roster, which is genuinely extraordinary — few DeFi protocols have Anchorage, Figure, and Chainlink on one page, and fewer still have Gauntlet and Steakhouse as curators.

**What this section deliberately rejects.**

- *Anonymous "institutional partner" quotes.* Read as unearned.
- *Consumer testimonials (first-name, country only).* Principle 8.
- *A scrolling logo ticker.* Fragments focus.
- *Rotating carousel of quotes.* Signals interchangeability.
- *Logos without a roster-naming heading.* "Trusted by" is the cliché; "Deployed by — or alongside —" is the differentiated alternative.
- *Competitor names as testimonials* (e.g., Morpho or Maple). Obvious, but worth stating — no counterparty that is also a competitor should be surfaced in this section.

**Live-data requirements.**

None. Logos and testimonials are static assets, refreshed on major partnership additions.

**Open decisions.**
- Which three testimonials ship with the site. Assigned to Mark Hull and Cheryl Chan.
- Fallback to logos-only if testimonials are not ready.
- Whether the logo roster includes private-language or anonymized entries (e.g., "a major US bank" — recommendation: no, this is the category Kamino is positioning against).
- Whether to include KMNO-listing exchanges (Gemini, Bybit, OKX, Coinbase) as a separate row. Recommendation: no, they are token-listing relationships, not protocol counterparties. Keep the roster crisp.

---

### Section 7 — Kamino as one system

**Purpose.** This section articulates the vertical-integration thesis — that Earn, Borrow, Multiply, Leverage, Liquidity, Swap, and Institutional Yield all share one liquidity base and one risk culture. It is the section that converts Kamino's product breadth from a potential "too much surface area" problem into a strategic moat claim.

**Recommended structure.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                   ONE LIQUIDITY BASE. ONE RISK CULTURE.                     │
│                   SEVEN PRODUCTS.                                           │
│                                                                             │
│     A USDC deposit on Kamino powers every product the protocol runs —       │
│     from retail earn vaults to institutional credit facilities — under      │
│     one oracle, one audit regime, and one foundation.                       │
│                                                                             │
│                                                                             │
│                         [KAMINO LIQUIDITY BASE]                             │
│                                 │                                           │
│         ┌───────────┬───────────┼───────────┬───────────┐                  │
│         │           │           │           │           │                  │
│        EARN      BORROW      MULTIPLY    LEVERAGE    LIQUIDITY              │
│         │           │           │           │           │                  │
│        SWAP                                                                 │
│         │                                                                   │
│    INSTITUTIONAL YIELD                                                      │
│                                                                             │
│                                                                             │
│   ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐          │
│   │                  │ │                  │ │                  │          │
│   │ EARN             │ │ BORROW &         │ │ LIQUIDITY        │          │
│   │                  │ │ MULTIPLY         │ │ & SWAP           │          │
│   │ Kamino USD,      │ │                  │ │                  │          │
│   │ curated vaults,  │ │ Markets with     │ │ Concentrated LP  │          │
│   │ Institutional    │ │ dynamic LTVs,    │ │ strategies on    │          │
│   │ Yield,           │ │ one-click        │ │ Orca/Raydium;    │          │
│   │ Liquidity LP,    │ │ leveraged        │ │ zero-fee swap    │          │
│   │ Private Credit   │ │ positions,       │ │ routing across   │          │
│   │                  │ │ fixed rates,     │ │ Solana DEXs.     │          │
│   │                  │ │ off-chain        │ │                  │          │
│   │                  │ │ collateral.      │ │                  │          │
│   │                  │ │                  │ │                  │          │
│   └──────────────────┘ └──────────────────┘ └──────────────────┘          │
│                                                                             │
│                                                                             │
│           [ Explore products → ]                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — heading options.**

*Option 1 (recommended):* **One liquidity base. One risk culture. Seven products.**
- Three-beat structure. Names the two foundations (liquidity, risk) and the count (seven). Rhythmic. Commits to the integration claim.

*Option 2:* **Every product. One system.**
- Compressed. Two-sentence construction. Memorable. Risk: generic.

*Option 3:* **Kamino is one protocol, not seven.**
- Declarative. Distinguishes from a product-family page. Risk: reads as defensive.

**Recommendation: Option 1.**

**Body copy under the heading.**

*"A USDC deposit on Kamino powers every product the protocol runs — from retail earn vaults to institutional credit facilities — under one oracle, one audit regime, and one foundation."*

This sentence does the theoretical work. It names the mechanism (shared liquidity), the range (retail to institutional), and the three unifying structural claims (oracle, audits, foundation).

**The diagram.**

A simple centered visualization — one base (Kamino liquidity), seven products branching above. Clean line work, no decorative flourishes. The diagram is the proof: each product visually connects to the same base.

Alternative treatment: a sankey-style flow showing USDC flowing from a deposit through each product. Risk: Sankey reads as finance-infographic which works but can feel technical.

**The three-card explanation.**

Three cards, each grouping products by intent (matching the navigation redesign context's Trade / Earn / Leverage / Explore intents, collapsed here to Earn / Borrow & Multiply / Liquidity & Swap for homepage scale):

1. **Earn.** Kamino USD, curated vaults (Gauntlet, Steakhouse, Allez, Sentora, MEV Capital, Re7), Institutional Yield, Liquidity LP. Supplies liquidity to the other products.

2. **Borrow & Multiply.** Markets with dynamic LTVs, one-click leveraged positions, fixed rates, off-chain collateral. Draws against the shared liquidity base.

3. **Liquidity & Swap.** Concentrated LP strategies on Orca/Raydium; zero-fee swap routing across Solana DEXs. The DEX-liquidity backbone that makes Multiply and Swap work.

The three-card grouping maps to the webapp's future navigation structure — Earn, Borrow, Trade, Assets — so visitors who later arrive in the webapp encounter the same mental model.

**The anchor line.**

Below the cards, one line: *"Seven products. One interface. One foundation."* — or — *"Every product shares one oracle, one audit regime, one foundation."*

**The CTA.**

Secondary CTA: *"Explore products →"* routing to `/products` or equivalent. This is the only CTA in the section — the section's job is to articulate the thesis, not to convert.

**Justification.**

- *External research.* Mercury's Section 2 ("Everything you do with money. All in one place") is the template. The research observes: *"Mercury's Trojan horse: they entered as 'banking for startups' and are now claiming the full finance stack."* Kamino's parallel move: entered as Solana lending, now claiming the full onchain credit stack.
- *Kamino reason.* Deep-comprehension §13.10 ("The vertical integration argument against modularity") surfaces this as the explicit strategic claim Kamino is making against Morpho's modular thesis. The landing page's job is to visualize that claim.

**What this section deliberately rejects.**

- *A seven-icon product grid with one-line descriptions each* (the current draft's Section 7). This flattens Kamino into a product catalog and misses the shared-liquidity thesis entirely.
- *A comparison table against Morpho or Aave.* Principle 11 — positive framing.
- *Feature-by-feature product listing.* The section is about integration, not features.
- *A separate "Why Kamino" section after this one.* The one-system section answers "why Kamino" by structural argument; a separate why-us section is redundant.

**Live-data requirements.**

Optional: each of the three cards could carry a live figure for supporting evidence (e.g., Earn: "$2B+ across curated vaults"; Borrow & Multiply: "$1.3B+ active positions"; Liquidity & Swap: "[X] in LP / zero-fee swap volume"). Recommended: include live figures on the three cards to match the data-density of the rest of the page.

**Open decisions.**
- Whether the diagram is a tree (one base, seven products branching) or a flow (capital flowing through).
- Confirm the three-card product grouping matches the navigation redesign's intent clusters.
- Whether to include a fourth card or replace "Liquidity & Swap" with "Trade & Assets" per the navigation redesign's four-cluster structure. Recommendation: three cards on homepage, four on audience pages (simpler here, more structured there).

---

### Section 8 — "Now" strip (named initiatives, dated)

**Purpose.** This section carries recency and narrative momentum. It is Kamino's editorial strip — a curated row of current, dated initiatives that communicate *what Kamino is doing in the world right now*. It exists to counter the perception that DeFi protocols are static product surfaces; Kamino's 2026 news cadence is genuinely exceptional and the page should demonstrate that.

**Recommended structure.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                             RECENT INITIATIVES                              │
│                                                                             │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                                                                   │    │
│   │ APRIL 14, 2026                                           [LIVE]  │    │
│   │ Kamino Institutional Yield                                        │    │
│   │ First onchain vault for regulated, overcollateralized            │    │
│   │ BTC-backed institutional credit. $25M initial cap.               │    │
│   │ →                                                                 │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                                                                   │    │
│   │ MARCH 4, 2026                                                     │    │
│   │ There Is Only KMNO v4                                             │    │
│   │ Foundation structure formalized: no equity, mission-locked,       │    │
│   │ value accrual deferred until revenue > 4–5x operating costs.      │    │
│   │ →                                                                 │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                                                                   │    │
│   │ FEBRUARY 2026                                                     │    │
│   │ Off-Chain Collateral on Anchorage                                 │    │
│   │ Solana Company (NASDAQ: HSDT) draws first loan under              │    │
│   │ tripartite custody with Anchorage Digital.                        │    │
│   │ →                                                                 │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                                                                   │    │
│   │ NOVEMBER 11, 2025                                                 │    │
│   │ Gauntlet joins as official curator                                │    │
│   │ USDC Prime and SOL Balanced vaults under Gauntlet risk mandate.   │    │
│   │ →                                                                 │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│                                                                             │
│                     [ All announcements → ]                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — heading options.**

*Option 1 (recommended):* **Recent initiatives**
- Anthropic-register. Neutral. Lets the items do the work.

*Option 2:* **Now.**
- Linear's exact pattern. Clean, short. Risk: too tied to Linear.

*Option 3:* **On the ledger.**
- Kamino-voice, finance-vocabulary wordplay (ledger = lending ledger; also = record). Risk: cute.

**Recommendation: Option 1** ("Recent initiatives"). Anthropic's Project Glasswing section uses a similar register. It is serious, not cute.

**The four cards.**

Each card carries:
- A date (month + year minimum; specific day for named launches).
- A status badge where applicable (LIVE, IN PILOT, ANNOUNCED).
- A headline (2–6 words).
- A body line (1–2 sentences).
- A right-arrow linking to the full announcement (blog post, gov.kamino.finance post, docs page, or press release).

The four cards sit in reverse chronological order. This is a launch-day roster; the Marketing team refreshes it monthly.

**Alternative configurations.**

*Horizontal strip (desktop).* Four cards in a row, peek-indicator suggesting more behind. More news-surface feeling.

*Vertical stack (mobile / default).* Four cards stacked. Each card taller and more readable. Recommended for the primary layout; horizontal on wide desktop.

**Why these four initiatives specifically.**

1. **Institutional Yield (April 14, 2026)** — The headline product. The spearhead case. The reason the landing page is being rebuilt.
2. **There Is Only KMNO v4 (March 4, 2026)** — The structural memo. Most relevant to institutional readers doing due diligence on the Foundation structure.
3. **Off-Chain Collateral with Solana Company (February 2026)** — Proof that the institutional product surface has actual users.
4. **Gauntlet curator onboarding (November 11, 2025)** — Proof that Kamino is legible to serious DeFi risk firms.

Alternative inclusions: PRIME at $600M (March 2026 milestone), Fixed Rates pilot with FalconX (launch date TBD), mirror tokens (March 3, 2026), Gemini listing (October 16, 2025), KMNO v4 governance vote. Selection criteria: one institutional product, one structural/governance milestone, one customer proof, one curator/partner onboarding. Rotate quarterly.

**Justification.**

- *External research.* The "Now" editorial strip pattern is cited as a distinctive move: *"The editorial/press row… Linear's 'Now.' Anthropic's news. This is a recency signal — it communicates aliveness and accelerating narrative. Kamino has a natural version of this in announcements like the FMA license and Andersen attestations."*
- *Kamino reason.* Kamino's 2026 news velocity is genuinely extraordinary. Demonstrating it on the homepage is both honest and competitively useful — Morpho, Aave, Maple do not ship at this cadence.

**What this section deliberately rejects.**

- *A "blog feed" populated from the Kamino blog.* The Blog is editorial-voice and covers everything; the Now strip is curated and strategic.
- *Press mentions (CoinDesk, The Block, etc.)* In a press-mentions row. Acceptable in the footer; belongs there, not here.
- *Tweet embeds.* The X/Twitter pattern is retail-register and does not match the institutional frame.
- *More than 4 cards on the homepage.* Discipline. 4 items; the "All announcements →" CTA handles depth.

**Live-data requirements.**

Not real-time, but the Now strip must be editable without a code deploy. Owned by Marketing. Monthly review, milestone-triggered update.

**Open decisions.**
- Confirm the four initial items.
- Confirm refresh cadence and ownership (Marketing — Lukas? Jennifer?).
- Confirm the horizontal-vs-vertical layout default.
- Whether to show status badges (LIVE, IN PILOT, ANNOUNCED) or keep items neutral.

---

### Section 9 — Final CTA / close

**Purpose.** The final section before the footer. It converts scroll-reached visitors into a next action. Because the page carries four audiences with four conversion paths, the final CTA cannot be a single button — it must echo the Audience Router's architecture at the bottom of the page.

**Recommended structure.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          WHERE DO YOU GO FROM HERE?                         │
│                                                                             │
│                                                                             │
│   ┌──────────────────┐  ┌──────────────────┐                               │
│   │                  │  │                  │                               │
│   │  LAUNCH APP →    │  │  TALK TO THE     │                               │
│   │                  │  │  TEAM →          │                               │
│   │  Earn, borrow,   │  │                  │                               │
│   │  multiply        │  │  For institutions│                               │
│   │                  │  │  issuers, and    │                               │
│   │                  │  │  fintechs        │                               │
│   │                  │  │                  │                               │
│   └──────────────────┘  └──────────────────┘                               │
│                                                                             │
│                                                                             │
│   Institutional:   institutional@kamino-foundation.com                      │
│   Issuers:         partnerships@kamino-foundation.com                       │
│   Fintechs:        build@kamino-foundation.com                              │
│   Press:           press@kamino-foundation.com                              │
│                                                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Copy direction — heading options.**

*Option 1 (recommended):* **Where do you go from here?**
- Names the branching, invites the reader to self-select, carries forward the Audience Router's logic. Question-headline format is rare; it gives the section a distinctive register.

*Option 2:* **Ready when you are.**
- Mercury-voice. Warmer. Less distinctive.

*Option 3:* **Two paths.**
- Compressed. Names the structure explicitly (two CTAs). Risk: too terse.

**Recommendation: Option 1.** The question format is unusual enough to register as a deliberate choice.

**The two-CTA architecture.**

The homepage's final CTA splits into two paths — one for self-serve (retail), one for sales (institutional/issuers/fintechs). This is the correct resolution of the four-audience structure because:
- Retail users need a Launch App button. Direct.
- The three B2B audiences all ultimately end in "Talk to the team" and are routed through specific email addresses that the emails-below surface.

If a visitor has read this far on the page, they are either ready to deposit (Launch App) or ready to start a sales conversation (Talk to the Team). No third path is needed.

**The email routing.**

Four emails, one per conversion path. This surfaces the direct contact addresses (specified in the deep-comprehension doc):
- `institutional@kamino-foundation.com`
- `partnerships@kamino-foundation.com`
- `build@kamino-foundation.com`
- `press@kamino-foundation.com`

These are surfaced in text format, not as clickable mailto: buttons — this is deliberate. The institutional buyer copies them; the email subject becomes their introduction; the UX is the same as reading a firm directory on Goldman's website.

**Justification.**

- *External research.* The two-CTA principle is universal in the research. The homepage closing section in Linear, Mercury, Stripe all use a two-path close. Kamino's adaptation is to pair Launch App (retail self-serve) with Talk to the Team (B2B sales), because the four audiences collapse to two conversion mechanisms.
- *Kamino reason.* Spec's Section 10 currently carries a two-CTA close ("Launch App" + "Contact Sales") — the recommendation refines "Contact Sales" into a routed set via emails.

**What this section deliberately rejects.**

- *A single CTA.* Would force institutional visitors through the Launch App, which is the wrong destination.
- *A generic contact form.* Splinter into four specific addresses signals that Kamino has a structured sales pipeline.
- *A newsletter signup.* The research's principle 15 (refuse newsletter as primary CTA) applies. Newsletter sits in the footer if anywhere.
- *A "join our Discord" CTA.* Retail-register. Discord belongs in the footer's community section.

**Live-data requirements.** None.

**Open decisions.**
- Confirm the four email addresses exist and route to correct inboxes (per the deep-comprehension doc, `institutional@`, `mark@`, `cheryl@`, `dawid@` are current patterns; formalization to `institutional@`, `partnerships@`, `build@`, `press@` may require setup).
- Confirm the two-CTA structure versus a four-CTA structure matching the Audience Router. Recommendation: two CTAs (retail action vs institutional conversation) — four would echo the Router redundantly.
- Whether to include a newsletter signup in the close or footer only. Recommendation: footer only.

---

### Section 10 — Footer

**Purpose.** The footer is the dense sitemap, disclosure surface, and regulatory-attestation anchor. It is the most information-dense section of the site. It serves institutional visitors doing due diligence (who read footers carefully), compliance officers (who need the regulatory-status table), journalists (who need the press contact), and SEO (which benefits from the dense linked sitemap).

**Recommended structure — eight columns on desktop, stacked accordion on mobile.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  PRODUCTS      SOLUTIONS      DEVELOPERS    COMPANY       GOVERNANCE        │
│  Earn          Individuals    Docs          About         Forum             │
│  Kamino USD    Institutions   API           Security      KMNO              │
│  Lending       Issuers        SDK           Blog          Staking           │
│  Institutional Fintechs       Integrate     Careers       Seasons           │
│  Yield                        BuildKit      Press                           │
│  Borrow                                     Partners                        │
│  Markets                                                                    │
│  Multiply                                                                   │
│  Off-Chain Collateral                                                      │
│  Fixed Rates                                                                │
│  Swap                                                                       │
│  Liquidity                                                                  │
│                                                                             │
│  TRUST & DISCLOSURES                                                        │
│  Audits (20) →                                                              │
│  Bug Bounty →                                                               │
│  Formal Verifications →                                                     │
│  Andersen UK Attestations →                                                 │
│  Regulatory status by jurisdiction →                                        │
│  Risk disclosures →                                                         │
│                                                                             │
│  CONTACT                                                                    │
│  institutional@kamino-foundation.com                                        │
│  partnerships@kamino-foundation.com                                         │
│  build@kamino-foundation.com                                                │
│  press@kamino-foundation.com                                                │
│                                                                             │
│  COMMUNITY                                                                  │
│  Twitter · Telegram · Discord · YouTube · GitHub · gov.kamino.finance       │
│                                                                             │
│  ──────────────────────────────────────────────────────────────────────     │
│                                                                             │
│  © 2026 Kamino Foundation. Kamino Institutional Yield is offered through   │
│  a Liechtenstein FMA–supervised lending operation; collateral custody      │
│  is administered by qualified custodians under tripartite agreements. This  │
│  website is informational content and does not constitute financial advice, │
│  an offer, or a solicitation. Kamino products may not be available in all   │
│  jurisdictions. See regulatory status by jurisdiction for details.          │
│                                                                             │
│  Terms of Service  ·  Privacy Policy  ·  Cookie Preferences  ·  Sitemap     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Column architecture.**

Eight content columns, grouped:

1. **Products** — every product under Earn, Borrow, Multiply/Leverage, Swap, Liquidity, Institutional Yield, Off-Chain Collateral, Fixed Rates. Full listing; no hidden SKUs.
2. **Solutions** — Individuals / Institutions / Issuers / Fintechs (the four audience pages).
3. **Developers** — Docs, API, SDK, Integrate, BuildKit.
4. **Company** — About, Security, Blog, Careers, Press, Partners.
5. **Governance** — Forum, KMNO, Staking, Seasons.
6. **Trust & Disclosures** — Audits (20) linked to the GitHub audit repo, Bug Bounty (Immunefi), Formal Verifications, Andersen UK Attestations (linked to the published PDFs), Regulatory status by jurisdiction, Risk disclosures.
7. **Contact** — four contact emails (institutional, partnerships, build, press).
8. **Community** — social links.

**Legal/disclosure line.**

A single paragraph at the bottom, carrying the three mandatory disclosure elements:
1. Foundation identification (*"© 2026 Kamino Foundation"*).
2. Product-specific regulatory attribution (*"Kamino Institutional Yield is offered through a Liechtenstein FMA–supervised lending operation; collateral custody is administered by qualified custodians under tripartite agreements"*).
3. Information-not-advice disclaimer (*"This website is informational content and does not constitute financial advice, an offer, or a solicitation. Kamino products may not be available in all jurisdictions. See regulatory status by jurisdiction for details."*).

**Jurisdiction handling.**

A "Regulatory status by jurisdiction" page, linked from the footer's Trust & Disclosures column, carries a table listing each Kamino product, its regulatory status in each major jurisdiction (US, UK, EU, Singapore, others), and what is available to whom. This is an institutional-grade footnote and is necessary for a company claiming FMA supervision publicly.

**Justification.**

- *External research.* *"Footer as sitemap; hero as stance… Every top-tier site has a dense, organized footer with 6-10 columns. Kamino can have an enormous footer… without clutter, because readers who scroll that far are investigating."* Stripe (8 columns), Adyen (7), Notion (6). Kamino's 8-column structure is in this range.
- *Kamino reason.* The Foundation structure, the regulatory overlays, the audit count, the attestation cadence, the jurisdictional complexity — all of these need a disclosure surface. The footer is the right place.

**What this section deliberately rejects.**

- *A two-column "About / Legal" footer.* Under-serves institutional visitors.
- *A giant newsletter-signup block dominating the footer.* The newsletter, if it exists, is a single column among eight, not a full-width takeover.
- *"Kamino is the future of finance" brand line in the footer.* Footer is not the place for brand copy. Hero is.
- *A language switcher in the footer before multi-language is actually supported.* The locked spec notes multi-language is a future state. Don't ship the flag dropdown prematurely.

**Live-data requirements.**

- Audit count in the footer ("Audits (20)") should be dynamic and pull from the GitHub repo's latest count.
- Andersen UK attestation list should auto-update when a new attestation is published.

**Open decisions.**
- Confirm the eight-column split.
- Confirm whether regulatory-status-by-jurisdiction is a new page to build or lives in the docs.
- Confirm whether KMNO token price / market cap appears anywhere in the footer (recommendation: no — principle 15).
- Whether to include a "Status" link (uptime dashboard) — recommendation: yes, Kamino's uptime claim benefits from a dashboard link, follows the Vercel/Stripe pattern.

---

### Section 11 — Overall page architecture synthesis

This is not a distinct section on the page — it is the summary of the complete homepage flow, so the design team can validate the narrative arc before committing to component work.

**The full page, top to bottom:**

1. **Top nav** — Products · Solutions · Developers · Company · Launch App. Session-aware returning-user routing.
2. **Hero** — "Connecting global capital to the new financial system." + four-stat proof strip (AUM · Loans Originated · Active Loans · Assets Onboarded). Live-data-motif visual.
3. **Audience Router** — "Powering every part of the onchain economy." + four equal-weight boxes (Individuals · Institutions · Issuers · Fintechs) with taglines, hover micro-copy, and entry-animation click-through.
4. **Trust block** — "DeFi trust ends at the code. Kamino's keeps going." + six-card grid (Protocol · Oracle · Custody · Regulatory · Attestation · Structural) + anchor line ($19B+ originated / zero bad debt / 3+ years live).
5. **Institutional Yield spotlight** — dedicated section with live APY/capacity/LTV data, structural paragraph, rhetorical close, two CTAs (Deposit / Read the full structure).
6. **Evidence** — "Deployed by — or alongside —" logo wall + three named testimonials (FalconX, Solana Company, Gauntlet) with full attribution.
7. **Kamino as one system** — "One liquidity base. One risk culture. Seven products." + shared-liquidity diagram + three-card product grouping.
8. **Recent initiatives (Now strip)** — four dated, named cards (Institutional Yield, There Is Only KMNO v4, Off-Chain Collateral, Gauntlet).
9. **Final CTA** — "Where do you go from here?" + two-path close (Launch App / Talk to the Team) + direct email addresses.
10. **Footer** — eight-column sitemap + Trust & Disclosures column + contact emails + community + legal disclosure paragraph.

**Narrative arc.**

- Hero asserts the category claim.
- Proof strip backs it with scale.
- Audience Router routes each reader to their own world.
- Trust block earns the claim.
- IY spotlight operationalizes the claim.
- Evidence block names the peers who've validated it.
- One-system section articulates the structural moat.
- Now strip demonstrates momentum.
- Final CTA converts.
- Footer documents.

Each section has a distinct job. No section is redundant. No section can be cut without the arc breaking.

**Sections this architecture deliberately cuts versus the current locked spec:**

- *Section 3 (Borrow Capacity)* — absorbed into IY section (on institutional products page) or Individuals audience page. Removed from homepage: the headline "BORROW AGAINST YOUR CRYPTO / Up to $XXX,XXX / [Borrow Now]" is retail-register and does not fit the institutional-register hero. The borrow proposition can live on `/individuals` or `/borrow`.
- *Section 4 (Yield Performance with chart against USTs/DeFi Avg)* — removed from homepage. Retail-conversion pattern. This comparison chart can live on `/individuals` where it serves the right audience.
- *Section 6 (Curated Products cards with three retail APY cards)* — removed from homepage. Belongs on `/individuals` or `/earn`. Surfacing three retail vault APYs on the homepage collapses the institutional register.
- *Section 8 (Scale & Stats horizontal-scrolling stat row)* — redundant with the proof strip and the trust block's anchor line. Removed.

These cuts are load-bearing. They move the homepage from "product marketing for retail and aspirational institutional" to "institutional category authorship, with clear downstream paths for retail access." The cut sections live on audience pages or product pages, not gone from the site.

**Sections the new architecture adds versus the current spec:**

- IY spotlight (Section 5 above) — dedicated proof-of-thesis section.
- Trust block (Section 4 above) — Mercury-pattern, concentrated, rhetorical.
- Kamino as one system (Section 7 above) — vertical-integration articulation.
- Now strip (Section 8 above) — Linear-pattern editorial recency.

Net result: fewer sections, denser per-section weight, sharper institutional register, more narrative arc, clearer downstream paths via the Audience Router.

---

## Closing note — open strategic decisions for the Head of Product discussion

1. **Individuals page — dedicated landing or route-through to /earn?** This document recommends dedicated, for the reasons stated in Part 2 Principle 4 and Part 3 Section 3. The cost of making Individuals a route-through is institutionalizing the perception that retail is an afterthought. Acknowledge that a dedicated Individuals page adds build cost and may duplicate the `/earn` product page — the resolution is to make `/individuals` narrative-led (voice, proof, curated vault preview, CTA to `/earn`) while `/earn` remains product-led (vault browser, filters, deposit flows).

2. **Sections cut from the current locked spec.** Four sections (Borrow Capacity, Yield Performance chart, Curated Products cards, Scale & Stats stat row) are cut in this document's architecture. These were all locked in the current landing-website.md. The recommendation is to relocate this content to `/individuals` and `/earn` rather than shipping them on the homepage. This needs explicit approval.

3. **Named testimonials — launch readiness.** Part 3 Section 6 assumes three named, authorized testimonials from FalconX, Solana Company, and Gauntlet will be secured by launch. If they cannot, the section ships logos-only with a scale-claim heading. Mark and Cheryl need to sign off on deliverability.

4. **Routing architecture (Option A vs Option B).** Part 3 Section 1 recommends Option A (session-aware `kamino.com/` root). This is a load-bearing engineering decision and has to be confirmed before build.

5. **Live data pipeline.** Live proof-strip stats and live IY data are prerequisites for Principle 16 and the rest of the architecture. Ownership, refresh cadence, and failure fallback need to be defined before design is committed.

6. **Hero visual direction.** Three options presented (A: live-data motif; B: liquidity network; C: typography-only). Recommendation: A. This decision is downstream of the visual-identity work the design team needs to commit to.

7. **Voice specs per page.** Principle 14 argues for documented voice specs per page before copy is written. This is a document deliverable that sits between this document and the actual copy briefs.

The document above is one opinion, thoroughly argued. Push back section by section; the framework is load-bearing even where individual recommendations change.
