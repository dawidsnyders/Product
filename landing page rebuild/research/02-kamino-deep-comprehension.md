# Kamino Finance — Deep Strategic Comprehension

> Produced by a deep-research background agent (Opus 4.7). Commissioned 2026-04-22. Source for the synthesis that shapes the Kamino landing page rebuild. Reads local Product/Marketing repos (including the landing brief, specs, context decks) and external sources (docs, gov forum, blog, podcasts, industry press).

---

## 1. Executive Essence

Kamino is the Solana-native credit infrastructure protocol that is, as of April 2026, mid-metamorphosis from "largest lender on Solana" to "connective tissue between global capital and onchain finance." Three years after its first product went live, it holds roughly $3–3.5B AUM, has originated $19B+ in loans with zero bad debt, has been audited 20 times and formally verified 4 times, and controls ~60%+ of Solana's lending market by TVL. On April 14, 2026 — one week before this research was written — it launched Kamino Institutional Yield, a USDC vault that deploys capital into overcollateralized BTC-backed loans originated by a Liechtenstein FMA-regulated lending operation, with real-time per-loan transparency fed through Haruko (the same data pipeline the regulator reviews daily) and monthly independent attestation by Andersen UK. That single product is the spearhead of a broader repositioning: Kamino is now asking TradFi-adjacent capital, asset issuers, and consumer-app fintechs to treat it as regulated-grade credit infrastructure, not a DeFi protocol.

What makes Kamino specifically Kamino:

1. **A single, obsessive builder-founder with an 8-year risk career before crypto.** Marius Ciubotariu (ex-Bloomberg, exotic derivatives pricing; evolved Hubble Protocol into Kamino in 2022) is the most paranoid person in the company. His signature product philosophy — the word he uses for Institutional Yield is "pristine" — is: every design decision asks *does this make the product safer or riskier?* and sacrifices yield for safety when the answer is riskier. He calls the liquidity buffer sitting in low-yielding instruments rather than Kamino Lend a deliberate ~30bp yield sacrifice "because putting it in the main market would add smart contract risk." That philosophy is the protocol's competitive moat at the level of culture.

2. **Zero bad debt across $19B originated is not a marketing slogan — it's the engineering constraint the product is built around.** Every one of the six new institutional products announced in December 2025 (Fixed Rates, Borrow Intents, Off-Chain Collateral, Private Credit, RWA DEX, BuildKit) is designed to preserve that record as the protocol extends into messier, more regulated, more off-chain territory.

3. **Vertical integration is the strategic wedge.** Kamino is the only DeFi protocol that has lending, borrowing, leverage (Multiply), spot leverage trading, concentrated-liquidity LP vaults, zero-fee Jupiter-aggregated swap, Earn vaults with a multi-curator ecosystem, KMNO staking, governance, *and* an institutional suite (off-chain collateral, private credit, BuildKit API, fixed rates, borrow intents, RWA DEX) under one interface. Aave has lending. Morpho has lending infrastructure. Maple has institutional credit. Kamino has all of them, unified.

4. **The Kamino Foundation / KMNO / no-equity structure.** There is no Kamino Inc. with a cap table. The Kamino Foundation is a Cayman ownerless foundation company — no shareholders, no members, no beneficiaries, mission-locked, charter-prohibited from issuing equity. All revenue accrues to the Foundation and reinvests. There is only KMNO as the asset representing Kamino's IP and economic trajectory. This is unusually clean and is itself a selling point when talking to regulated counterparties.

5. **Single-chain discipline.** Marius: "as a young team there's just no way you can deeply understand [an] ecosystem" without singular focus. Three years in, that discipline is paying off — Kamino owns Solana lending. This also explains why the homepage rebuild leads with "Solana" as an *asset* (speed, cost, native integrations) rather than hiding it.

6. **The strategic moment is specifically this:** crypto-native yield has compressed (Aave USDC ~2.6%, below a US savings account); institutional BTC-backed credit is a multi-billion-dollar sustainable-demand market; RWA issuance is growing ~350% YoY with $18B+ circulating; the US regulatory landscape has decisively shifted toward onchain; and no DeFi protocol has yet positioned itself as the regulated-grade, transparent, permissioned-capable credit infrastructure that serves institutions, asset issuers, and fintechs simultaneously. Kamino is making that bet. The landing page rebuild — hero reading "Connecting global capital to the new financial system" over a router to Individuals / Institutions / Issuers / Fintechs — is the visual statement of that bet.

The tension the landing page has to resolve is that most of Kamino's current users, TVL, liquidity, and brand equity sit in retail DeFi (SOL, LSTs, JLP lending, Multiply loops, airdrop seasons) — while the strategic momentum and the next decade of growth sit in institutional and fintech. Collapse too hard into institutional and the retail base feels abandoned (and stops generating the base yield and liquidity that institutional products need). Stay retail-first and the institutional capital keeps viewing Kamino as "another DeFi thing." The four-audience router is the architectural answer.

---

## 2. Origins & Evolution

Kamino Finance was founded in 2022 but it is actually the *second* protocol from the same founding team. Marius Ciubotariu and Mark Hull founded **Hubble Protocol** in 2021, initially to build a stablecoin (USDH) for the Solana ecosystem. As Hubble evolved, the team saw that the infrastructure required to support the stablecoin — concentrated liquidity management, lending — didn't exist on Solana. They built it, and those products became Kamino.

Marius's background is the signal. Before crypto he spent roughly 8 years as a senior software engineer at Bloomberg working on exotic derivatives pricing — a job that, on his own account, is 8 years of thinking professionally about risk. He studied at Exeter, is a C++ developer by trade who came to Solana via an interest in Rust. Mark Hull, co-founder and now Head of Business Development, was at Hubble from the start.

**Kamino 1.0 era (2022–2023): The Concentrated Liquidity Layer.**
Kamino's first product was *not* lending. It was **automated concentrated-liquidity management** on Solana's new CLMMs (concentrated liquidity market makers) like Orca Whirlpools and Raydium CLMM. A user deposited into a Kamino vault; Kamino actively managed the price range, rebalanced, auto-compounded, and handled the ugliness of LP-ing on a CLMM. This was the Solana version of what Arrakis or Gamma became on Ethereum — but Kamino won it. The legacy domain `app.kamino.finance` still redirects many users.

**Kamino Lend V1 (2023): Pivot to lending.**
Kamino launched its lending protocol (klend) in late 2023, deliberately modeled on Solend but with much tighter risk controls. By mid-2024 it had already overtaken Solend as the largest lender on Solana.

**KMNO Token Launch (April 26, 2024).**
Kamino launched its governance token KMNO, initially framed around staking, governance, and the points/seasons program. The tokenomics (1B supply; 60% community, 20% team, 10% early investors, 10% ecosystem grants) codified the all-in-on-KMNO structure that later hardened in the "There Is Only KMNO" memo (2026).

**Kamino Lend V2 — "Kamino 2.0" (announced Sept 3, 2024; launched 2025).**
The single most important product release in Kamino's history. V2 introduced a **two-layer architecture**: a **Market Layer** (permissionless, isolated, customizable lending markets) and a **Vault Layer** (single-asset lending vaults that aggregate liquidity across markets under curator mandates). This was Kamino's version of the Morpho Blue + MetaMorpho vault model, but unified inside one protocol — and Solana-native. V2 also introduced auction-based liquidations (replacing fixed penalties), scam-wick protection, risk-adjusted interest rate premiums, dynamic LTVs anchored to price points, isolated mode, limit orders, and stop-loss/take-profit.

V2 brought in expert curators: **Gauntlet** (announced officially November 11, 2025 — with SOL Balanced and USDC Prime vaults), Steakhouse Financial, Allez Labs, MEV Capital, Sentora, Re7 Labs. Marketing copy from Rockaway X's write-up of the launch: "a new era of modular credit infrastructure on Solana." V2 was what made Kamino legible to asset issuers (permissioned markets, KYC-gateable) and to institutional LPs (curator-managed mandates). By early 2026 V2 had 21+ vaults and nearly $1B across five RWA markets.

**The December 2025 "Kamino — The Next Chapter" governance post.**
Posted December 12, 2025 on gov.kamino.finance by DawidSnyders (Dawid, who commissioned this research). This is the canonical strategic pivot document. Key framing: *"Kamino is evolving from a DeFi lending product into the infrastructure layer for institutional finance and tokenized assets on Solana."* It announced the six new institutional products — Fixed Rates, Borrow Intents, Off-Chain Collateral, Private Credit, RWA DEX, and BuildKit — that define Kamino's strategic surface for 2026–2027.

**PRIME on Kamino (December 2025 – present).**
In December 2025, **Figure Technology Solutions (NASDAQ: FIGR)** — the largest non-bank HELOC originator in the US — launched **PRIME**, a yield-bearing token backed by short-term warehouse financing of prime US HELOCs, deployed on Solana via Chainlink CCIP. Kamino became the exclusive on-chain lending and Multiply venue for PRIME. This was the moment Kamino stopped being a generic Solana DeFi protocol and became the distribution/credit layer for real-world assets on Solana. PRIME grew from $0 to $283M (Dec 2025) → $380M (Jan 2026) → $550M (Feb 2026) → $570M+ and then $600M+ (Mar 2026) entirely through native yield demand — no token incentives. By early 2026 it was the largest single RWA deployment in DeFi, period.

**Off-Chain Collateral and Solana Company (Feb–Mar 2026).**
In February 2026 Kamino launched **Off-Chain Collateral** with Anchorage Digital and Chainlink Proof of Reserves, enabling institutions to borrow onchain USDC against SOL / staked SOL / BTC held at Anchorage, governed by a tripartite Account Control Agreement. The first borrower was the **Solana Company (NASDAQ: HSDT)**, a public vehicle managed by Pantera Capital and Summer Capital that holds SOL on its balance sheet. Kamino then extended this into "mirror tokens" (March 3, 2026) allowing institutions to borrow against custodied digital assets via synthetic representation.

**Kamino Institutional Yield — Private Credit (April 14, 2026).**
The culmination of the strategic pivot. Announced with an embargoed PR, Institutional Yield is a USDC vault — `kamino.com/earn/institutional/kamino-institutional-USDC` — that deploys capital into overcollateralized BTC-backed loans to KYC-verified institutional borrowers, through a Liechtenstein FMA-regulated lending operation, with real-time per-loan data via Haruko and monthly Andersen attestation. $25M initial cap. 6–8% target APY. BTC-only collateral at 60% max LTV (typical ~30%). This is the product that now reorganizes the entire brand.

**The Jupiter Lend block (December 2025).**
Worth noting. In December 2025, Kamino implemented a smart-contract-level block on Jupiter Lend's "Refinance" migration tool, framed by Jupiter and some CT commentators as anti-competitive. Kamino's co-founder (Mark Hull) publicly defended it on the grounds that Jupiter Lend had marketed its markets as "isolated" while Fluid (the underlying infrastructure) actually rehypothecated — a structural safety claim Kamino disputed. Whatever the motive, this incident is instructive: it shows Kamino willing to take a reputational hit on "open-finance principles" in order to defend its risk framing. That matches the "pristine product" culture and is a useful data point for future decisions.

---

## 3. Company Structure & Governance

There is no Kamino Inc. There is a **Kamino Foundation**, and there is the **KMNO token**. That's it. This structure is not incidental — it's the central structural claim Kamino is making.

From *"There Is Only KMNO v4"* (March 4, 2026 — an official governance/strategic memo):

> *"Kamino products and all associated protocol revenues are now administered by the Kamino Foundation, a Cayman foundation company designed to be ownerless — no shareholders, no members, no beneficiaries — and mission-locked. All revenues generated by Kamino products are directed to the Foundation corporate structure, where they are retained and reinvested into the growth of Kamino, per the Foundation's charter and bylaws."*

> *"Kamino has never raised funds via equity — any institutional or investor participation in Kamino has occurred exclusively via KMNO allocations and the token's public distribution. Furthermore, the Kamino Foundation's governing documents wholly prohibit new equity entirely. Token classes only possible if explicitly voted for by a super-majority via KMNO onchain governance."*

> *"KMNO is the sole asset for exposure to Kamino's IP and economic trajectory — now and in the future. There is no equity, and no other token. There is only KMNO."*

**Team structure (2025 financials):** 41 contributors. 26 in development. 6 in product & design. 3 in BD & sales. 3 in operations & legal. 3 in marketing. Revenue in 2025 was $19.7M against $11.53M in operating costs (58.97% staff, 26.19% audit/risk/security, 9.54% legal/compliance, 5.29% marketing/BD). The cost structure is a tell: nearly half of non-staff spend goes to audits and security. The team allocates 20% of total KMNO supply to contributors on vesting and offers *no equity*, because there isn't any.

**Public faces:**
- **Marius Ciubotariu** — Co-Founder, primary product and technical voice. Handle: @y2kappa. Ex-Bloomberg, Hubble Protocol founder. He is the "pristine product" voice. Meeting intelligence captures him saying things like *"I've been waiting for them [Maple] to blow up"* and *"This is a pristine fucking product"* and *"Don't go and put 8% in Apollo. We have no fucking clue… Here, very fucking clear. Look at everything."* He comes across as TradFi-credentialed and paranoid — the PM explicitly uses "paranoid expert" as a positioning angle.
- **Mark Hull** — Co-Founder and Head of Business Development. Handles institutional deals. Contact: `mark@kamino-foundation.com`.
- **Cheryl Chan** — Head of Strategy. `cheryl@kamino-foundation.com`. Runs institutional/PRIME outreach (Singapore phone number in the PRIME deck).
- **Dawid Snyders** — Head of Product (the user commissioning this research). Authors the strategic posts (`DawidSnyders` on gov.kamino.finance, email `dawid@kamino-foundation.com`).
- **Helen** — Head of Legal, pragmatic ("I don't think we need to go into this much detail… as long as we make it 100% clear this is an unsecured loan and default could happen, I'm happy.").
- **David** — The lending-operation co-founder for Institutional Yield. Anchored in the regulated-entity side. Direct quotes in meeting transcripts like *"I'll go to jail if I don't give you an accurate number"* and *"That data is a golden source."*

**Governance:** `gov.kamino.finance` (Discourse forum). KMNO onchain governance is live for key decisions. "Season 3" (airdrop), "Season 4," "Season 5" are live points programs. The protocol's "value accrual" activation (buybacks, staking yield, fee redistribution) is explicitly deferred until revenue exceeds operating costs by 4–5x — citing Aave, Maker, and Ethena precedents.

**Regulatory posture — and this is important:**
Kamino proper is a DeFi protocol (permissionless smart contracts, fully open source, 20 audits, 4 formal verifications). The *institutional products* Kamino sells are structured through regulated counterparties:
- **Institutional Yield**: Liechtenstein FMA–regulated lending operation (not Kamino itself) with daily reporting to the regulator.
- **Private Credit external memo names**: Switzerland FINMA + Liechtenstein FMA oversight.
- **Off-Chain Collateral**: Anchorage Digital (US OCC-chartered digital asset bank) as custodian, governed by a tri-party Account Control Agreement, first-priority security interest held by a Kamino SPV (Secured Party).
- **Institutional Yield SPV**: Cayman SPV signs a Loan Agreement with depositors; regulated lending operation deploys capital.

Why Liechtenstein FMA specifically? Three reasons visible from the documents:
1. **Liechtenstein is EEA** (European Economic Area) with a mature financial regulatory framework recognized across the EU.
2. **The lending operation's legal base is Liechtenstein** — this is where the regulated entity lives. (Swiss FINMA also named in earlier drafts of Private Credit docs, suggesting a dual jurisdictional arrangement.)
3. **Specific product class** — regulated overcollateralized BTC-backed lending operations with daily reporting fit cleanly under FMA supervision. Liechtenstein has been proactive on crypto (TVTG / Blockchain Act) which makes this kind of entity operable.

The internal meeting intelligence also reveals: the team deliberately refers to the lending entity generically as "the lending operation" and never uses its actual name ("Altenberg" — redacted in public language). Borrowers include Swiss banks (internal only — never named in public). Kamino is "actively exploring the possibilities of establishing a presence in the US market" (per *There Is Only KMNO*), driven by "the decisive shift in the US regulatory landscape."

---

## 4. Product Stack Deep-Dive

What follows is the actual mechanical and strategic anatomy of every product as of April 2026. The navigation redesign document confirms the product set clusters around **four user intents** — *Trade, Earn, Leverage, Explore RWAs* — and this is roughly how the webapp organizes itself internally.

### 4.1 Kamino Lend (the foundation)

The original lending protocol. Pool-based onchain money market, Solana-native. **$3B+ in AUM, $19B+ originated, zero bad debt.** Organized into multiple distinct **markets**, each of which contains multiple **reserves** (post-V2 — and increasingly post-Fixed-Rates — a single market can contain multiple reserves for the same token, e.g., USDC Floating + USDC Fixed 3m + USDC Fixed 6m).

The markets today include:
- **Main Market** — the flagship cross-collateral market. SOL, USDC, USDT, PYUSD, JitoSOL, mSOL, JupSOL, JLP, cbBTC, HONEY, KMNO.
- **JLP Market** — isolated around JLP (Jupiter perp LP token), highly popular for JLP loops.
- **Altcoin Market** — higher-volatility tokens isolated from the Main Market.
- **Prime Market** — the isolated market hosting PRIME collateral for USDC/CASH/PYUSD/USDS borrowing. Max borrow LTV 88%, liquidation 91%, borrow capped at 90% utilization.
- **JitoSOL Market** (a secondary/dedicated market for JitoSOL looping).
- Additional RWA-specific markets (Syrup, tokenized equities, etc.).

Under V2, any of these can be **permissioned** (KYC-gated) — this is the key property that makes Kamino viable for regulated assets and institutional partners. Also under V2, **isolated mode** on a position constrains which collateral/debt pairs a user has, which enables extreme-looking LTVs for specific correlated pairs (e.g. JitoSOL/SOL) without cross-contagion.

The lending engine has three unusual engineering properties worth naming specifically:
- **Scope oracle** — Kamino's in-house oracle. Triple-audited. TWAP/EWMA manipulation-resistant. Pyth + Chainlink as reference feeds. The team treats this as a moat: *"full protocol control over pricing logic."* The December 2025 Gemini listing memo and the general deck emphasize this as the single thing Morpho *cannot* do because Morpho delegates oracles to curators — and that delegation directly caused the Oct 2024 oracle misconfiguration incident and contributed to the Nov 2025 MEV Capital / xUSD depeg bad-debt event.
- **Auction-based liquidations** — replacing fixed penalties with competitive bidding; reduces borrower penalties and improves liquidator efficiency.
- **Scam-wick protection** — prevents flash-crash-style liquidations. A concrete anti-DeFi-risk feature.

Positioning claim they can make that competitors cannot: "$19B+ originated, $0 bad debt, 20 audits, 4 formal verifications, 3+ years in production. Zero exploits. Zero security incidents." All are verifiable onchain.

### 4.2 Kamino Earn — Vault Layer

Post-V2, Earn is the user-facing yield product, abstracted one level above Lend. A user deposits USDC (or USDS, PYUSD, SOL, etc.) into an **Earn vault**. The vault is operated by a curator who allocates deposits across reserves in one or more markets based on a published mandate.

The current curator set (from April 2026 data):
- **Steakhouse Financial** — manages **USDC Prime** vault (~$176M TVL, ~11.9% APY at one recent snapshot). Also SOL vaults.
- **Gauntlet** — two vaults, **SOL Balanced** and **USDC Prime** (note: naming collision; there are two "Prime" vaults from different curators). Gauntlet manages ~$1.4B across vault TVL.
- **Allez Labs** — **Allez USDC** vault (~$38.9M, historically ~18% APY as a more aggressive mandate). Allez also provides asset risk assessments for Kamino (they produced the PRIME risk rating).
- **MEV Capital** — aggressive USDC mandate.
- **Sentora** — **Sentora PYUSD** vault (~$38M, ~14% APY). Specific positioning around PayPal USD.
- **Re7 Labs** — additional curated vaults.
- **Kamino itself** — manages "Cash Earn" and similar conservative vaults.

The landing page's "Curated Products" section displays three of these (USDC Prime, USDC High-Yield, Sentora PYUSD) with 90-day average APY and a risk profile label (Conservative / Balanced). This reflects Kamino's current retail-earn value proposition: *you don't have to pick a market; a professional curator does that for you, under a mandate you can read.*

The mechanical vault parameters (from the curator documentation):
- **Weight + cap allocations** across reserves (relative integer weights; per-reserve caps).
- **Standard vs. Conditional allocations** — the conditional reserve pattern is how V2 is designed to handle fixed-rate reserves *without requiring capital to sit idle in low-utilization fixed pools*. A curator signals availability; capital moves only when a borrower requests the fixed rate. This is a non-obvious-but-crucial architectural feature that enables fixed-rate lending without cold-start problems.
- **First Loss Capital Farm** — curators can deposit manager capital that absorbs vault losses before depositors incur them. This is the DeFi analog of GP-in-the-fund skin-in-the-game. Allez, for instance, can (and does, in some vaults) put first-loss capital behind their strategy.
- **Performance and AUM fees** — configurable per vault.
- **Withdrawal penalties** — not manager revenue; returned to remaining depositors to prevent sandwich-exploit behavior around autocompound.
- **Whitelisted reserves** — optional risk control to cap what reserves a vault can even touch.

This is serious vault infrastructure. It is also what makes Earn the right product for the "Individuals" audience on the landing page.

### 4.3 Kamino Borrow

The direct borrow UI. Users deposit collateral and borrow against it at variable rates. The Borrow product today supports variable rates only on the main reserves, but is being extended to fixed rates and Borrow Orders.

Borrow is also the surface for **Off-Chain Collateral** for institutional borrowers — a private isolated market per institution, tri-party agreement with Anchorage Digital, Chainlink Proof-of-Reserves of custodied assets, 65% max LTV, 70% liquidation LTV, fixed rate, 3-month terms with rollover. This is a *different* product-within-a-product for institutions; retail can't see it.

### 4.4 Kamino Multiply

The one-click leveraged-yield product. Users deposit a collateral (JitoSOL, mSOL, JLP, PRIME, SyrupUSDC, ONyc, tokenized equities, and more) and select a leverage target (1x–10x). Kamino flash-loans, sells, deposits, and borrows in a single atomic Solana transaction, producing the levered position.

Where Multiply sits strategically today:
- **~$544M deposits, $428M borrows** — a massive share of Kamino's borrow-side activity goes through Multiply.
- **~62 strategies** (currently surfaced as a flat table; being rebuilt into ~15 "strategy cards").
- **86% of all PRIME on Kamino flows through Multiply** — PRIME Multiply positions yield ~11.3%–21.0% APY depending on leverage.
- Strategies cluster into five categories: **LSTs, RWAs, Stablecoins, DeFi Yield, Equities.**

Multiply is also the best single example of Kamino's "mechanism-first" product copy philosophy. The internal spec rejects track-record claims ("never been liquidated") in favor of teaching *why* risk is structurally different (e.g., "stake-rate oracle pricing means SOL price movements cannot trigger liquidation for LST loops"). That philosophy bleeds into the broader brand.

### 4.5 Kamino Leverage (Spot Leverage)

Separate from Multiply. Spot leverage trading pairs (SOL/USDC and similar), long or short, 1x–5x. It's the Solana-native version of Drift or GMX-style trading, but built on Kamino Lend's liquidity layer. V2 introduced soft liquidations and liquidation protection to reduce liquidation UX pain. Less strategically central than the other products, but matters as a retention product for active traders and as another utilization channel for Lend.

### 4.6 Kamino Liquidity

The vestigial Kamino 1.0 product, still live and still doing real work. Automated LP vaults on Orca Whirlpools, Raydium CLMM, and similar CLMMs. Users deposit into **SOL-USDC, JitoSOL-SOL, JLP-JitoSOL, cbBTC-JitoSOL, KMNO-PYUSD**, and many more pairs. Kamino manages ranges, rebalances, auto-compounds. Earns trading fees. Competitively positioned against Meteora and direct LP.

Strategically: this is the DEX-liquidity backbone for every other Kamino product. The moment Kamino loses the concentrated-liquidity layer, it loses the swap routing efficiency that makes Multiply (which sells into pools to lever up) and Swap (best execution) work. It is the hidden infrastructure.

### 4.7 Kamino Swap

Zero-fee token swap on Solana. Aggregated across Jupiter routes. Best execution. The headline number in the current landing brief is "Best prices on Solana, zero fees." Runs on `swap.kamino.com` as well as `kamino.com/swap`.

This is the daily utility that keeps wallets in the Kamino interface. Users who swap can be offered earn, borrow, or multiply opportunities inline.

### 4.8 Kamino Institutional Yield (launched April 14, 2026)

**The most important product launch of 2026.** A USDC vault — `kamino.com/earn/institutional/kamino-institutional-USDC` — with an initial $25M deposit cap and a 6–8% target APY.

Mechanical structure from the final announcement and the external docs:

1. **Depositor flow**: User deposits USDC into the Institutional Yield vault, signs a Loan Agreement with a Cayman SPV, receives **kiUSDC** receipt tokens. Share price appreciates as yield accrues; no rebasing.
2. **Capital flow**: Funds move through the SPV to a lending operation licensed and supervised by the **Liechtenstein FMA**, with daily reporting to the regulator.
3. **Lending criteria**:
   - Collateral: BTC only at launch (high-quality, liquid digital assets).
   - Collateral custody: Qualified custodians (e.g., banks, Anchorage). Internal docs name BitGo, Zodia, Anchorage — but public language is generic.
   - **Tripartite agreements** between borrower, lending operation, and custodian. **Collateral title remains with the borrower throughout the loan.**
   - **Rehypothecation contractually prohibited.**
   - 60% max LTV (actual typical LTV ~30% per meeting intelligence — much lower than the cap).
4. **Transparency (the product's structural moat)**:
   - **Real-time per-loan data via Haruko** (haruko.io) — the institutional digital asset operations platform used by Hidden Road (Ripple Prime), Galaxy, XBTO, and Wintermute. Data in the Kamino vault UI: loan amounts, collateral values, LTV per loan, portfolio-weighted avg LTV, active loan count, total collateral value — *sourced from the same data pipeline used for regulatory reporting*.
   - **Monthly independent attestation by Andersen UK** — loan balances, collateral ratios, portfolio health, published publicly.
5. **Withdrawal mechanics**:
   - Instant liquidity buffer (5–10% of AUM — deliberately not fully utilized, which is ~30bp yield sacrifice for safety).
   - **FIFO onchain withdrawal queue** (in-house built infrastructure, to be introduced shortly after launch).
   - Rolling 3-month loan terms naturally refresh liquidity.

Note: the April 14 final announcement says "BTC-only at launch" and "60% max LTV" — an earlier draft said "BTC only" and "50% Max LTV / 2:1 coverage." The team explicitly discussed that the 50% pitch felt "more conservative" — they went with 60% as the contractual max while keeping actual LTV much lower (~30%) and showing this real-time in the UI. This gap between "max" and "actual" is itself a proof point the marketing plan wants to lean on hard.

Why this product matters strategically (repeating because it's the crux):
- It creates a yield source that is *not* capped by onchain borrowing demand. Aave's USDC supply yield is ~2.6% because Aave yields are constrained by onchain borrowers. Institutional BTC-backed credit demand is multi-billion-dollar, sustainable, and pays premium rates because selling BTC triggers tax and opportunity-cost events.
- It is a **permanent-mandate vault** ("like an ETF" — Marius's framing). Depositors underwrite the mandate, which cannot change without them. This is the single most important anti-Maple angle — Maple has drifted from BTC-backed to include Hype, XRP, Spark, which the team views as "turning an AAA bond into a junk bond."
- It is Kamino's proof-point that its core risk culture (zero bad debt, pristine product, paranoid expert) extends cleanly from DeFi into regulated off-chain credit.

### 4.9 KMNO Token (staking, governance, points/seasons)

1B total supply. 60% community (liquidity mining, staking, airdrops/seasons), 20% team (4-yr vesting), 10% early investors (2-yr vesting), 10% ecosystem grants.

**Staking**: live at `kamino.com/stake`. Staking KMNO earns a "points boost" (1.5x or higher based on stake duration) that multiplies airdrop allocations in the active Season. There is an **xKMNO** pattern implied in the webapp but governance/staking is being evolved.

**Value accrual**: *deliberately deferred*. From "There Is Only KMNO v4":

> *"In a competitive market, premature token buybacks or similar risks blunting protocol growth, rather than fuelling it… We propose that discussions surrounding Kamino's value accrual mechanisms should be opened to public discourse once protocol revenue sustainably exceeds operating costs by a significant margin — in the range of 4–5x… When this moment arrives, protocol contributors will work alongside token holders to design how value flows to KMNO — whether through buybacks, staking yield, fee redistribution, or a combination thereof."*

The precedents cited are explicit: Aave (buybacks only after revenue > 150% of expenses), Maker ($50M emergency reserve trigger), Ethena ($6B+ supply + $250M cumulative revenue + broad exchange distribution).

**Seasons / Airdrops**: Season 3 vested, Seasons 4 and 5 active. Gemini listing of KMNO on October 16, 2025 expanded distribution. The points program is a real driver of retail activity; curators like Gauntlet's USDC Prime vault ship with KMNO Season 4 and Season 5 rewards to incentivize deposits.

### 4.10 The "next-generation" institutional products (announced Dec 2025)

Beyond Institutional Yield — which has now shipped — five more institutional products are either launching or in active development:

- **Fixed Rates & Fixed Terms**: The foundational credit primitive. Predictable borrowing costs for a defined term. Pilot borrower: **FalconX**. Technical spec confirms a **rate-duration grid** model (multiple reserves per debt token, each representing a rate + term cell) with **Conditional Liquidity** (curator-signaled allocations that fill atomically when a borrower places a matching order). Also includes **Withdrawal Queue** and **Rollover Mechanism**. Internal framing: *"Fixed rates are the single most important piece of credit infrastructure for institutional and RWA growth in DeFi."*
- **Borrow Intents / Borrow Orders** (variable-rate version shipping first in Prime market). Essentially a standing order book for credit. Borrowers post desired loan terms onchain; partial fills; no interest until fills occur; auto-reduction if collateral drops. Marketing frame: *"Limit orders, but for lending."* Will ultimately enable lenders to fill borrower orders directly — a full credit order book.
- **Off-Chain Collateral**: already shipped (Solana Company was the first borrower). Anchorage-custody, tri-party, Chainlink PoR, 65% max LTV / 70% liquidation, fixed rate, 3-month terms.
- **RWA DEX**: Oracle-priced liquidity for tokenized assets. Liquidity auto-deployed at oracle-determined real-world price, removing the need for asset issuers to negotiate MM agreements.
- **BuildKit**: API + SDK for fintechs to embed Kamino yield. Live at `kamino.com/build`. Revenue share. Powered by **Privy embedded wallets**. First integration partner: **Altitude**. Also KYC/KYB-capable for regulated partners. Designed for "dedicated, isolated vaults per partner — invisible on Kamino's public interface."

### 4.11 Curators / Kamino Prime (the curator ecosystem)

This is not a separate product so much as an *ecosystem posture*. The V2 Vault Layer is explicitly designed to onboard many curators, with documented curation UX (vault creation, fee structures, allocation management, first-loss capital, and whitelisted reserves). The landing page's "Issuers" audience is the natural intersection of curators + RWA issuers — an asset issuer may become their own curator of a vault holding their own asset.

### 4.12 Assets page

A planned page (`/assets`) that is **content + conversion** — the destination for RWA data on Solana (analog to RWA.xyz) with strong CTAs to deploy into Kamino products. The PRIME asset page is the existing prototype for this pattern. Internal navigation redesign explicitly calls this out as the fourth top-level nav item.

---

## 5. The Kamino 2.0 Story

"Kamino 2.0" is used loosely in Kamino's own communications, but it actually refers to a specific engineering artifact: **Kamino Lend V2**, announced September 3, 2024 and shipped in stages through 2025. It is the architectural foundation that makes everything the protocol does now possible.

The Lightspeed podcast with Marius Ciubotariu and Mark Hull (early 2024, before V2 launched publicly) gives the founders' framing in Marius's own words:

> *"The point of coming up 2.0 is to be to kind of grow into a, I don't like the term, but let's say into a super app."*

> *"On Solana you don't have the excuse. It just works. You can scale, just build stuff."*

> *"I myself spent about eight years in my previous job doing things related to risk."*

What "2.0" actually changed:

1. **Two-layer architecture** (Market Layer + Vault Layer). This is the single biggest shift. V1 was a pool model; V2 is Morpho Blue-style isolated markets with curator-managed vaults on top. This is what makes permissioned markets, KYC gating, RWA onboarding, and curator ecosystems possible.
2. **Auction-based liquidations** replacing fixed 5–10% penalties.
3. **Scam-wick protection**.
4. **Isolated mode** for correlated-asset looping (e.g., JitoSOL/SOL).
5. **Risk-adjusted interest rate premiums** and **dynamic LTVs anchored to price points**.
6. **UX automations** — auto-unstake for LSTs, target leverage, limit orders, stop-loss/take-profit.
7. **New product surfaces** — Spot Leverage, Lending Orderbook (the precursor to Borrow Intents).

Rockaway X's external write-up captured the positioning: *"A new era of modular credit infrastructure on Solana."* And that's exactly right: V2 is what turned Kamino from a money market into credit infrastructure.

**Has "Kamino 2.0" been rebranded?** Not in name, but in positioning. Internally and externally, Kamino has largely stopped using the "2.0" moniker in favor of "Kamino" with the architectural sophistication assumed. The *next* chapter (announced December 2025) is being positioned not as "Kamino 3.0" but as *the infrastructure layer for institutional finance and tokenized assets on Solana* — a framing shift rather than a version number.

This is a deliberate brand move. "2.0" is a software frame. "Infrastructure" is a category frame. The landing page rebuild is a visual commitment to the category frame.

---

## 6. Business Model & Token Economics

**How Kamino makes money (2025 revenue: $19.7M):**

1. **Protocol fees on lending.** A spread between borrow and supply rates accrues to the protocol treasury.
2. **Performance and AUM fees on vaults** (V2 Vault Layer). Curators take their fee; Kamino takes a share. (The exact split is configurable per vault.)
3. **Performance fees on Multiply**. Multiply positions are actively managed and pay the protocol an ongoing fee.
4. **Liquidation fees** (auction-based, with a protocol cut).
5. **Origination fees on institutional products.** For Off-Chain Collateral facilities and Institutional Yield, the Kamino SPV structures charge origination and management fees that flow to the Foundation.
6. **BuildKit revenue share.** Fintechs pay everything above a set cap rate (e.g., a fintech offers users up to 2.5% APY; everything above that accrues to the fintech as revenue share — split with Kamino).

**Where value flows.** All revenue accrues to the **Kamino Foundation** (Cayman ownerless foundation company), which reinvests into growth. The 2025 breakdown:
- Staff: $6.8M (58.97%)
- Audit, Risk & Protocol Security: $3.02M (26.19%)
- Legal & Compliance: $1.1M (9.54%)
- Marketing & BD: $0.61M (5.29%)

**KMNO tokenomics.** 1B supply. Distribution: 60% community, 20% team (4-yr vesting), 10% investors (2-yr vesting), 10% ecosystem grants. Deliberately large community allocation; this is the flywheel that powered the airdrop seasons and the Multiply + Lend user adoption.

**Value accrual to KMNO is explicitly deferred** until revenue > 4–5x operating costs. Aave, Maker, Ethena cited as precedents. When activated, the mechanism (buybacks vs. staking yield vs. fee redistribution) will be voted on via KMNO onchain governance.

**Airdrops / Seasons.** The points-and-seasons model is the engagement engine. Seasons 3 vested, 4 and 5 active. Users earn points for borrowing, lending, LP-ing, Multiply-ing, staking KMNO, and engaging with specific promoted assets. Points translate to KMNO at season end. Staking KMNO multiplies points.

---

## 7. Competitive Landscape

### 7.1 Vs. Aave
Aave is the EVM-dominant lender (~$30B TVL historically) and the default DeFi yield destination. In April 2026, Aave USDC supply APY is ~2.6% — below a US savings account. Aave Horizon (their permissioned instance for RWAs, launched Aug 2025, ~$500M TVL) is their institutional attempt, but it is a separate permissioned instance, not integrated into the core protocol.

Kamino's edge: Solana-native settlement (400ms, <$0.01 tx), zero bad debt across $19B+ originated, unified retail+institutional platform (no separate "Horizon" split). Aave is larger and more battle-tested but its V2 design flaws (lack of supply caps enabling the 2022 Eisenberg CRV exploit, $1.7M bad debt requiring DAO bailout) gave Kamino a clean-slate narrative advantage.

Kamino's vulnerability: brand recognition, multi-chain reach, composability in EVM DeFi. Aave is a household name; Kamino is not outside Solana.

### 7.2 Vs. Morpho
Morpho Blue is the closest architectural analog — isolated markets + MetaMorpho vaults curated by third parties. Morpho is ~the same generation of lending infrastructure design. However:
- Morpho **delegates oracle choice to vault curators** — directly responsible for the Oct 2024 oracle misconfiguration ($230K lost) and contributed to the Nov 2025 MEV Capital / xUSD depeg that produced $25.4M bad debt exposure.
- Morpho **has no protocol-level institutional products** (no Off-Chain Collateral, no Fixed Rates, no Private Credit, no Yield API).
- Morpho is Ethereum-first; no Solana presence.

Kamino's edge: in-house Scope oracle (triple-audited, TWAP/EWMA, protocol-controlled), full institutional product suite, Solana-native.

Morpho's edge: EVM ecosystem, brand equity in DeFi credit infrastructure, curator ecosystem already mature.

### 7.3 Vs. Maple Finance
Maple is the direct competitor for Kamino Institutional Yield. ~$4B+ deposits, multi-chain (Ethereum + Solana), syrupUSDC/syrupUSDT pools, institutional focus. Also the primary anti-competitor in Kamino's internal positioning.

Kamino's structural edges vs. Maple:
- **Regulatory oversight**: Kamino IY runs through a Liechtenstein FMA-licensed lending operation with daily reporting. Maple is unregulated.
- **Mandate permanence**: Kamino IY is "like an ETF" — the vault mandate cannot change. Maple has drifted from BTC-backed to include Hype, XRP, Spark — "turning an AAA bond into a junk bond."
- **No title transfer**: Kamino's borrowers retain title to their BTC collateral via tripartite agreement. Maple takes title. (Institutional player Rockway specifically refused Maple because of this — they wouldn't hand over their assets.)
- **Transparency**: Haruko real-time data + Andersen monthly attestation vs. Maple's self-reported JSON loan book with no independent attestation.
- **Track record**: Kamino zero bad debt. Maple has $54M+ in historical defaults (Orthogonal Trading $36M in 2022, depositors losing up to 80% in affected pools).

Maple's edge: scale, multi-chain reach, DeFi composability of syrupUSDC, faster growth curve.

Internal rule: **never attack Maple by name in public**. Win on framework. Publish the evaluation dimensions (regulatory, transparency, custody, mandate permanence) and let audiences apply them. Marius's approach.

### 7.4 Vs. MakerDAO / Spark / Sky
Sky (rebranded MakerDAO) operates with USDS/DAI. Different risk model (CDPs with RWA collateral under hood). Not a direct competitor in the same layer, but a substitute for stablecoin yield. Kamino competes for the "where do I park stablecoins for yield?" audience.

### 7.5 Vs. Ondo Finance
Ondo is the tokenized Treasuries leader — USDY, OUSG, ~$1.8B across products. Ondo's yield is **Treasury-backed (4–5%)**, not credit-backed. Kamino IY's 6–8% is the credit premium over Ondo's risk-free rate.

Ondo is **a potential partner, not just a competitor**. Ondo tokenizes assets that could become collateral or vault holdings on Kamino. The relationship is symbiotic with a niche overlap.

### 7.6 Vs. Compound
Compound is the generic ETH lending market. Low yields. Not strategically relevant to Kamino's positioning except as a default comparison point.

### 7.7 Vs. Solana competitors

**MarginFi** — once the largest Solana lender, lost momentum through 2024–2025 due to team turmoil. Kamino ate most of their TVL.

**Drift** — perp-dex first, with some lending/borrowing functionality. Strong in derivatives. Kamino's Leverage product sits in their periphery.

**Save (formerly Solend)** — the original Solana lender. Very diminished.

**Jupiter Lend** — new entrant (launched late 2025), aggressive growth to $1.65B+ TVL. Uses Fluid Protocol infrastructure in the backend. The December 2025 refinance-block incident positioned Kamino and Jupiter Lend as direct competitors despite Jupiter being primarily a DEX aggregator. Kamino's critique: Jupiter Lend markets "isolated markets" but Fluid rehypothecates.

### 7.8 Summary — where Kamino has a decisive edge, and where it is vulnerable

**Decisive edges:**
1. Zero bad debt at $19B+ scale — a hard-to-replicate track record.
2. Solana settlement speed and cost — structural for institutional and vault operations at scale.
3. Vertical integration under one interface — no competitor has all eight products.
4. Institutional product suite native to the protocol (not a bolt-on). This is unique.
5. Mandate permanence on Institutional Yield vs. drift-prone competitors.
6. Foundation structure + no equity + single-token alignment.

**Vulnerabilities:**
1. Single-chain exposure. If Solana slows or has a major incident, Kamino has no fallback.
2. Brand recognition outside the Solana ecosystem is low vs. Aave/Morpho.
3. Institutional products are very early — the regulatory story is promising but unproven at scale.
4. The Jupiter Lend block created a "closed network" narrative risk that competitors will exploit.
5. Heavy dependence on third-party off-chain counterparties for Institutional Yield (the lending operation, custodians, auditor). Not "trustless" in the DeFi sense — and the team knows this and is explicit about it.

---

## 8. The Strategic Moment

This is the most important section. Kamino is making a specific bet at a specific time for specific reasons. Naming them precisely is what will make or break the landing page rebuild.

### 8.1 The macro setup

Four forces are converging simultaneously in April 2026:

1. **Crypto-native yield has compressed to below savings-account levels.** Aave USDC ~2.6%. This is not a temporary trough — it reflects that onchain borrowing demand has caught up to onchain supply in the dominant pools. Competing on "floating rate pool yield" is a race to the bottom.
2. **Institutional credit demand is structural, large, and untapped.** BTC-backed institutional lending is a multi-billion-dollar market projected to reach $60B by 2031. BTC holders at qualified custodians need credit for tax, operational, and opportunity-cost reasons. They pay premium rates (6–8%). The demand exists today.
3. **RWAs are exploding onto chain.** ~350% YoY growth, $18B+ circulating. Treasuries, private credit, tokenized equities, receivables, reinsurance stables, and HELOC warehouse tokens (PRIME) are all moving onchain. They all need the same thing: a credit and liquidity layer that understands them. There is no incumbent.
4. **US regulatory tone has shifted.** From *There Is Only KMNO v4* (March 2026): *"the decisive shift in the US regulatory landscape is opening up unprecedented opportunity for onchain financial infrastructure — creating a viable path for DeFi protocols to serve domestic markets at scale for the first time."*

### 8.2 The Kamino bet

Given the above, Kamino is betting that **the next decade of growth in onchain credit will be captured by the protocol that becomes the trusted, regulated-grade, multi-audience credit infrastructure first.** Not the protocol with the most TVL today (Aave). Not the protocol with the most curators (Morpho). Not the protocol with the earliest institutional story (Maple). The one that can credibly tell a fintech, an institution, an asset issuer, and an individual: *"You can plug into the same underlying liquidity and credit infrastructure, at your own level of risk and regulation, through the interface appropriate to your needs."*

Which is exactly what the four-audience router on the landing page says.

### 8.3 Why Institutional Yield now

- **It's the product that tests the thesis.** If 6–8% yield from regulated institutional credit can attract retail DeFi capital onchain via a permissionless vault, Kamino has proven the bridge exists. If not, the pivot is premature.
- **It's the strongest anti-Maple shot.** The regulatory + transparency + mandate-permanence structural advantages are so clean that the product will either outgrow Maple on Solana or prove that the institutional-onchain thesis is regulator- and transparency-constrained, not product-constrained.
- **It establishes the structural template** for every subsequent institutional vault (IY Diverse with SOL/gold/commodity collateral is already planned). Shipping v1 first matters for template credibility.
- **It's the operational proving ground for Haruko + Andersen + FMA integration.** Every future product that needs a regulated lending operation or institutional reporting benefits from this product having built the plumbing.

### 8.4 Why the four-audience positioning now

Because each of the four audiences is — *right now, in 2026* — at a specific inflection:

- **Individuals**: onchain yield has compressed; retail users need a credible 5–8% USD yield option that isn't a Celsius/BlockFi-style CeFi black box.
- **Institutions**: a cohort of crypto-native institutions, family offices, and crypto treasuries are now ready to put meaningful capital onchain but lack a regulated, transparent venue. Kamino IY and Off-Chain Collateral are the two products that speak directly to them.
- **Issuers**: RWA issuers (tokenized private credit, real estate, commodities, receivables) need a credit and liquidity distribution platform on Solana. PRIME proved it works at $600M+ scale. Kamino wants the next 10 RWAs.
- **Fintechs**: consumer apps (wallets, neobanks, exchanges) are racing to offer yield to their users. Building DeFi infrastructure is not their core competency. BuildKit is the API that lets them embed Kamino's yield and borrow products without building it themselves — with KYC/KYB compliance all the way down the stack.

### 8.5 Why the hero reads *"Connecting global capital to the new financial system"*

Read closely. It is a precise positioning statement:
- **"Connecting"** — Kamino is the *connective tissue*, not the destination. This is humbler than "the future of X" and more institutional-sounding. It frames Kamino as infrastructure.
- **"Global capital"** — not "crypto capital," not "DeFi users." This invites TradFi capital, institutional capital, fintech capital, retail capital to hear themselves included.
- **"The new financial system"** — not "DeFi." DeFi is a subculture term that loses TradFi listeners. "The new financial system" implies legitimacy *and* novelty. It is the same register as Coinbase's "the future of money" or Stripe's "the economic infrastructure of the internet."

The line was locked precisely because the copy-framing principles codified in the landing doc demand this tone: *lead with institutional vocabulary (capital, credit, liquidity, infrastructure), avoid DeFi vogue-terms (revolutionary, disruptive), "onchain" is a qualifier not a frame, no framing by negation.*

### 8.6 Where Kamino wants to be in 12–24 months

Reading across the documents, an honest synthesis of the 12–24 month targets:

- **Kamino Institutional Yield**: $25M → $500M+ through cap increases over the first year; multi-vault product line (BTC conservative + Diverse with SOL/gold/commodity).
- **RWA on Kamino**: ~$1B today → $3–5B+ as PRIME grows past $1B, tokenized equities (TSLAx, SPYx, GOOGLX, MSTRX), tokenized T-bills, tokenized receivables, reinsurance-backed stables scale.
- **Off-Chain Collateral**: expand beyond Solana Company and FalconX to a book of institutional borrowers.
- **BuildKit**: multiple fintech integrations live (Altitude was first) — plausibly 10+ consumer apps serving yield to end users via Kamino backend within a year.
- **Fixed Rates**: live in production with FalconX; extended across markets; becomes the preferred borrow surface for institutions.
- **US market presence**: from *There Is Only KMNO v4* — *"Kamino is now actively exploring the possibilities of establishing a presence in the US market."* This is a real strategic line.
- **KMNO value accrual**: probably *not* activated in the 12-month window (the 4–5x revenue-to-cost ratio is probably not reached that fast), but discussions may open.

### 8.7 What success looks like for the landing page

- First-time visitors can self-route into the audience page built for them within 10 seconds (Audience Router).
- Institutional / issuer / fintech leads flow reliably into a sales pipeline with a structured CRM handoff (today these are ad-hoc through `cheryl@` / `mark@` / `institutional@`).
- Retail users do not feel abandoned — the Individuals path provides fast access to Earn/Multiply with positioning that respects their sophistication.
- The landing page proves the brand shift: TradFi readers who land on kamino.com recognize it as credit infrastructure, not as a DeFi novelty.
- Live protocol data feeds the proof strip (AUM, loans originated, active loans, assets onboarded) so the brand claim is always backed by current reality.

---

## 9. Unique Assets & Moats

What does Kamino have that no one else can quickly replicate?

### 9.1 Operational moats (hardest to copy)

**Zero bad debt at $19B+ originated.** This is not a feature; it is 3+ years of compounding risk-management decisions across thousands of liquidations, hundreds of listings, multiple market regimes (bear market, rate hikes, memecoin craze, RWA surge). $183M in liquidations processed successfully. A protocol team cannot replicate this in a year. This is the single most defensible moat.

**The Scope oracle.** Triple-audited, TWAP/EWMA manipulation-resistant, in-house. Morpho's delegation of oracle choice to curators is exactly what bit them at MEV Capital. Kamino's refusal to delegate pricing is a deliberate architectural choice that compounds (metaphorically) with every audit.

**20 independent security audits + 4 formal verifications.** Certora's mathematical proof of core lending invariants. OtterSec's 6-month comprehensive review confirming "no user action can make a healthy position unsafe." Plus Ackee, Offside Labs, Sec3, Informal Systems. Paired with $1.5M Immunefi bug bounty (one of the largest in Solana DeFi). Fully open source.

**Solana-native engineering depth.** Marius's "no excuse on Solana" discipline. Three years of shipping only on Solana. The protocol is co-evolved with Solana's performance characteristics in a way that an EVM-first protocol cannot easily match.

### 9.2 Liquidity and integration moats

**Market depth on Kamino vaults and Multiply.** PRIME hitting $600M+ and absorbing $250M in borrows, entirely driven by native yield demand with zero incentives, is a demonstration that Kamino is where serious Solana liquidity lives.

**Ecosystem integrations that are structurally hard to unwind.** PRIME is *exclusive* to Kamino as its on-chain lending and Multiply venue. Figure + Hastra + Chainlink CCIP + Kamino is a purpose-built stack. JLP on Kamino is the primary yield surface for Jupiter's perp LP token (non-exclusive but dominant). JitoSOL and SOL LSTs are deeply integrated into Kamino's LST markets. cbBTC via Coinbase is onboarded. These are not just listings — they are preferred distribution.

**The curator ecosystem.** Gauntlet, Steakhouse Financial, Allez Labs, MEV Capital, Sentora, Re7 Labs. Each of these adds a brand-halo to Kamino that an unknown protocol cannot conjure. Allez also produces Kamino's own asset risk assessments (the PRIME 7.1/10 rating is from Allez).

### 9.3 Institutional trust moats

**Institutional users already onboarded.** OKX (licensed exchange). Anchorage Digital (federally chartered OCC bank). Solana Company / NASDAQ: HSDT (public vehicle managed by Pantera + Summer Capital). FalconX (crypto prime broker, Fixed Rates pilot). Figure (Nasdaq: FIGR) via PRIME. PayPal / Paxos via PYUSD integration. Coinbase via cbBTC. Chainlink as oracle and CCIP partner. The partner logo bar in the general deck includes Bybit, OKX, Bitget, Anchorage Digital, PayPal, Figure, Paxos, Chainlink, FalconX, Gauntlet, Phantom, Coinbase, Squads, Steakhouse Financial.

**Haruko integration for Institutional Yield.** Using the same data pipeline as Hidden Road (Ripple Prime), Galaxy, XBTO, and Wintermute is not a small thing. It's the institutional-reporting equivalent of saying "we use the same trade matching engine as the NYSE" — a credibility transfer that cannot be faked.

**Andersen attestation.** Monthly independent attestation by a globally recognized accounting firm. Materially more frequent than TradFi (quarterly) or Ledn (bi-annual).

### 9.4 Structural moats

**Foundation + no-equity + single-token structure.** Genuinely unusual. Many DeFi protocols claim "no equity, just token" and have quietly-raised equity rounds behind the scenes. Kamino has a Foundation charter that *prohibits* equity. This makes the "value flows to Foundation, Foundation reinvests in protocol growth" line durable rather than rhetorical. It is also legible to regulators in a way that cap-tabled DeFi projects are not.

**Permissioned markets natively supported.** V2's architecture lets Kamino create KYC-gated markets and invisible partner-branded vaults natively. Competitors (Aave Horizon) have had to build these as separate instances.

**Every product shares the same liquidity base.** A USDC supplier on Kamino Lend is indirectly powering Multiply, Off-Chain Collateral, Fixed Rates, Earn vaults, and institutional yield routing. Liquidity compounds across products in a way it doesn't at single-product competitors.

---

## 10. Ecosystem Positioning

### 10.1 Major partners and counterparties

- **Anchorage Digital** — OCC-chartered US digital asset bank. Custodian for Off-Chain Collateral. Mentioned in Institutional Yield as a qualified custodian.
- **Chainlink** — Oracles (reference feeds), CCIP (cross-chain bridge for PRIME and wYLDS), and Proof of Reserves (attestation of Anchorage-custodied collateral).
- **Figure Technology Solutions (NASDAQ: FIGR)** — Sponsor of PRIME. Largest non-bank HELOC originator in the US. Publicly listed. Provides the underlying yield via warehouse financing of HELOCs.
- **Hastra / Hastra.io** — Operates PRIME's autonomous vault on Solana. Proof-of-reserves provider for wYLDS. Co-developer of PRIME.
- **FalconX** — Crypto prime broker. Pilot borrower for Fixed Rates.
- **Pantera Capital / Summer Capital** — Co-managers of Solana Company (first Off-Chain Collateral borrower).
- **Paxos + PayPal (PYUSD)** — PYUSD is a key stablecoin across Kamino markets.
- **Coinbase (cbBTC)** — Integrated as collateral, a preferred BTC wrapping on Solana.
- **Jito Labs (JitoSOL)** — JitoSOL is the dominant LST on Solana, deeply integrated into Kamino LST markets.
- **Jupiter (JLP)** — JLP is a major collateral and Multiply asset on Kamino, despite the December 2025 refinance-block dispute.
- **Exponent Finance** — Yield stripping / fixed-rate markets on top of Kamino (part of the PRIME/RWA consortium).
- **Raydium / Orca** — DEX infrastructure for Kamino Liquidity vaults and swap routing.
- **Jupiter aggregator** — Powers Kamino Swap's best-execution backend (zero fees).
- **Squads** — Multisig infrastructure used by Kamino and partners for vault admin management.
- **Privy** — Embedded wallets for BuildKit integrations.
- **Altitude** — First announced BuildKit integration partner.

### 10.2 Curators

- **Gauntlet** — Official curator as of Nov 11, 2025. Two vaults: SOL Balanced, USDC Prime. Manages ~$1.4B in vault TVL across DeFi.
- **Steakhouse Financial** — Flagship curator. Manages USDC Prime (~$176M TVL). Also SOL vaults. ~$1.28B managed across DeFi.
- **Allez Labs** — Curator *and* risk-assessment provider (produced PRIME rating). Allez USDC vault (~$38.9M).
- **MEV Capital** — Higher-yield USDC curator.
- **Sentora** — PYUSD-focused curator (~$38M).
- **Re7 Labs** — Additional curator.
- Kamino itself as direct curator on certain flagship vaults.

### 10.3 Assets onboarded and why

Kamino markets support:
- **Native Solana**: SOL, and the major LSTs — JitoSOL (Jito), mSOL (Marinade), JupSOL (Jupiter), bSOL (Blaze), dfdvSOL, picoSOL, lanternSOL, INF.
- **Major stables**: USDC, USDT, PYUSD, USDS, CASH, USDG.
- **BTC**: cbBTC (Coinbase wrapped BTC on Solana), xBTC.
- **DeFi yield assets**: JLP (Jupiter perp LP token).
- **RWAs**: PRIME (Figure HELOC), SyrupUSDC (Maple), ONyc, USCC.
- **Tokenized equities**: TSLAx, SPYx, AAPLX, GOOGLX, MSTRX.
- **Governance / native**: KMNO, HONEY.

This range is unusual. Kamino is simultaneously the largest LST venue, the largest RWA venue, and the largest Solana stablecoin venue.

---

## 11. The Four Audiences, In Kamino-Specific Detail

The landing brief defines the four audiences. Here is what each *specifically* gets from Kamino that is not available elsewhere, who the real target is within each category, and how the sales motion works.

### 11.1 Individuals

**Who specifically:**
- Crypto-native users holding SOL, USDC, USDT, PYUSD, LSTs, JLP, cbBTC, KMNO.
- DeFi-sophisticated: they compare yields, care about audits and TVL, monitor positions, use Multiply and leveraged staking.
- A long tail of TradFi-adjacent users coming in via stablecoins seeking higher USD yield than savings accounts or Treasuries.
- **Not pseudonymous casual speculators.** The Kamino user has on average a meaningful position and has been around the Solana ecosystem long enough to trust it.

**What Kamino specifically offers them that is not available elsewhere:**
1. **PRIME Multiply at 11–21% APY**. The only place on earth you can get a leveraged-HELOC-warehouse yield strategy with one click. No competitor has this asset, and no competitor has the looping engine.
2. **The most battle-tested lending protocol on Solana.** Zero bad debt across $19B. For a sophisticated DeFi user, this is a decisive data point.
3. **Curated Earn vaults** with named curators (Gauntlet, Steakhouse, Allez, Sentora) — a way to outsource the "which rate is best this hour" optimization to risk professionals.
4. **Multiply across five asset categories (LSTs, RWAs, Stablecoins, DeFi, Equities).** No Solana competitor has this breadth.
5. **Institutional Yield** as an *option* — permissionless vault access to 6–8% BTC-backed institutional credit, no KYC, from a DeFi wallet. This is globally unusual.
6. **KMNO Seasons (airdrops) + staking boost.** Real economic value for engagement.

**Conversion motion:** Self-serve. Connect wallet, browse vaults, deposit. "Launch App" CTA. Returning-user detection → straight to webapp. This is the one audience where the Individuals box *might* route straight through to `/earn` instead of a marketing page — an open question in the brief.

### 11.2 Institutions

**Who specifically:**
- **Crypto-native hedge funds** — Multicoin, Pantera, Summer Capital, Greenfield, smaller market-neutral shops. Need leverage, fixed rates, predictable borrow costs, hedge flows.
- **Family offices** allocating 2–10% of AUM to crypto-yield strategies.
- **Crypto treasury companies** — publicly listed SPACs/DeSPACs holding BTC/SOL/ETH on balance sheet (Solana Company is the prototype).
- **Market-making firms** — Wintermute, XBTO, Hidden Road (Ripple Prime), Galaxy — needing custody-preserving borrow facilities.
- **Trading firms** running basis trades, funding-rate arbitrage, perp-basis strategies.

**What Kamino specifically offers them that is not available elsewhere:**
1. **Off-Chain Collateral** — borrow stablecoins onchain while collateral stays at Anchorage Digital under tri-party agreement. *The only product on Solana that preserves qualified custody while enabling onchain borrowing.* Chainlink PoR attestation. Fixed rate, fixed term (3 months), rollover option. 65% max LTV. No smart contract risk to collateral.
2. **Fixed Rates & Fixed Terms** — predictable borrowing costs for institutional budgeting. Launched with FalconX. *DeFi has been floating-rate-only; institutions cannot budget around that. Kamino's rate-duration grid solves this.*
3. **Institutional Yield** as an LP vehicle — regulated overcollateralized BTC-backed credit with daily regulatory reporting, Haruko real-time data, Andersen monthly attestation. 6–8% APY.
4. **Permissioned markets** — KYC-gated markets for regulated strategies.
5. **Deep integration with Solana's institutional infrastructure** — Anchorage, Chainlink, regulated custodians, Paxos, exchanges like OKX and Bybit.
6. **Battle-tested infrastructure** — $19B originated, $0 bad debt, 20 audits.

**Real examples:**
- **OKX** — licensed exchange, integrated Kamino's lending infrastructure.
- **Anchorage Digital** — custodian partner, institutional user.
- **Solana Company (NASDAQ: HSDT)** — first Off-Chain Collateral borrower.
- **FalconX** — Fixed Rates pilot borrower.
- **Wintermute, Hidden Road, Galaxy, XBTO** — data-pipeline customers of Haruko that implicitly validate the institutional reporting layer.

**Conversion motion:** *Not* self-serve for the largest ticket sizes. Contact sales (`cheryl@kamino-foundation.com`, `mark@kamino-foundation.com`, `institutional@kamino-foundation.com`). White-glove onboarding. Custom isolated market setup. Tri-party legal docs. For smaller institutional LPs (family offices, smaller funds), permissionless Institutional Yield deposit from a DeFi wallet works self-serve.

### 11.3 Issuers

**Who specifically:**
- **RWA tokenizers** — Figure (HELOCs → PRIME), Maple (SyrupUSDC), Ondo (potentially, for tokenized Treasuries), Securitize (tokenized private credit like ACRED), Backed Finance, reinsurance tokenizers.
- **Tokenized equity issuers** — sellers of TSLAx, SPYx, AAPLX on Solana.
- **Stablecoin issuers with differentiated collateral** — Paxos (PYUSD), Bridge/Stripe (CASH), emerging yield-bearing stable issuers, reinsurance-backed stablecoin issuers.
- **Private credit funds** looking to tokenize LP interests.
- **Token issuers** who want their asset to be *collateral*, not just tradable.

**What Kamino specifically offers them that is not available elsewhere:**
1. **Instant collateral status** — integration as borrowable collateral on Kamino Lend's isolated markets. The PRIME market is the template: an asset issuer's token becomes the collateral in a purpose-built market with customized risk parameters, immediately generating borrow demand.
2. **Multiply as distribution engine** — once an asset is collateral in a Kamino market, the Multiply product lets users leverage it. PRIME went $0 → $600M in 4 months entirely through Multiply-driven demand. This is *distribution*, not just listing.
3. **RWA DEX (coming)** — oracle-priced liquidity for tokenized assets, eliminating the need for third-party market-maker agreements. For asset issuers this is huge: launching a tokenized asset today requires negotiating MM terms with multiple firms. Kamino provides this natively.
4. **Permissioned-market option for regulated assets** — KYC-gated markets enable tokenized securities.
5. **Analytics and reporting** — visibility into how the asset is being used (collateral, Multiply, lending demand).
6. **Access to curator ecosystem** — curators will build vault mandates that include the asset, providing additional distribution.
7. **Real case study: $600M PRIME in 4 months with zero incentives.** This is a proof point no competitor can match.

**Real examples:**
- **PRIME (Figure + Hastra)** — flagship. $600M+ market size. Exclusive Kamino deployment.
- **ACRED (Securitize + Steakhouse Financial)** — tokenized private credit fund, launched with V2.
- **Huma's PST** — tokenized credit.
- **Maple's syrupUSDC** — "majority of Maple's syrupUSDC supply on Solana flowing to the platform" per RedStone's December 2025 report.
- **Tokenized equities** — TSLAx, SPYx, AAPLX, GOOGLX, MSTRX — live as collateral markets.

**Conversion motion:** Contact partnerships (`mark@kamino-foundation.com`). Bespoke market setup. Co-marketing with the issuer. Custom risk parameters via Kamino's Risk Council.

### 11.4 Fintechs

**Who specifically:**
- **Consumer crypto apps** — wallets (Phantom is an investor/partner), neobanks, mobile-first fintechs.
- **Global consumer finance apps** with stablecoin deposit products looking to offer yield.
- **Exchanges** wanting to add an "Earn" product without building lending.
- **Payment apps** (PayPal-style) wanting to pay interest on stablecoin balances.

**What Kamino specifically offers them that is not available elsewhere:**
1. **BuildKit API + SDK** — embed Kamino yield into any app. Deposit, withdraw, check rates, monitor positions. Live at `kamino.com/build`.
2. **White-label isolated vaults per partner** — invisible on Kamino's public interface. Your users see your app; the yield comes from Kamino.
3. **Revenue share model** — users earn up to a set rate (e.g., 2.5%); everything above that accrues to the fintech as revenue share, paid directly into their wallet. This is the crucial commercial model that makes BuildKit viable for consumer apps.
4. **End-to-end KYC/KYB-compliant yield stack** — every dollar of yield traces to a KYC-verified, regulated borrower (institutional credit, warehouse financing, not pseudonymous DeFi borrowers). From the general deck: *"No fintech regulator will accept [pseudonymous borrowers] as backing for a consumer product."* This is a real compliance moat.
5. **Privy embedded wallets** out of the box — the fintech doesn't even need to handle wallet UX.
6. **Structured yield architecture example** — 20% instant buffer (~3.6% APR) + 40% PRIME/USDC (~8% APY) + 40% BTC lending (~7% APY) = blended ~6.33% yield. The architecture is configurable.

**Real examples:**
- **Altitude** — first announced BuildKit integration partner.
- Internal meeting intelligence indicates **Ethena is in active discussions** for an integration.
- Implied partnerships with Phantom (wallet), Bybit, OKX, Bitget listed in the general deck.

**Conversion motion:** Contact the team. Integration call. KYC/KYB review. White-labeled isolated vault setup. Technical onboarding via Privy + BuildKit SDK. *Fintechs ship in weeks, not months* is the stated value prop.

---

## 12. Brand Voice & Current Communication Patterns

This is load-bearing for the landing page. The voice has to carry the strategic repositioning without tipping into either (a) institutional-corporate-boring or (b) DeFi-hype-cringe. What is the actual current voice?

### 12.1 The official written voice

The most important single sentence for understanding Kamino's current voice is the hero line locked for the landing page:

> *"Connecting global capital to the new financial system."*

Note what it does NOT do:
- Does not mention Solana, DeFi, blockchain, or crypto.
- Does not use "revolutionary," "disruptive," "future of," or any negation framing.
- Does not promise speed, cost, or APYs.

What it does: uses **institutional vocabulary** ("capital," "financial system") with a **modest verb** ("connecting"), and leaves the specifics to the proof strip and the four-audience router below. This is the locked tone for the site.

The "No negation framing" rule is explicitly codified in the landing brief and repeated in Dawid's user-level instructions:

> *"Never frame by negation. Always describe what something IS, never what it is NOT. 'This is real institutional lending' — not 'This is not another DeFi yield farm.' Negative framing anchors the reader on the thing you're distancing from and reads as defensive."*

This is actually visible in the Institutional Yield final announcement, which carefully describes what the product IS (regulated, overcollateralized, transparent) rather than what it isn't. The PR brief v2 follows the same pattern.

### 12.2 The product/docs voice

Serious. Technical. Precise. Uses institutional terminology correctly. Example from the Institutional Yield docs:

> *"Capital flows to a regulated lending operation licensed and supervised by the Liechtenstein Financial Market Authority (FMA)."*

> *"The lending operation originates overcollateralized loans to KYC-verified institutional borrowers, backed by high-quality collateral assets such as Bitcoin. Collateral is held at qualified custodians under tripartite agreements — between the borrower, the lending operation, and the custodian. Collateral title remains with the borrower throughout the loan. Rehypothecation is contractually prohibited."*

Note the cadence: short declarative sentences, finance vocabulary ("tripartite," "rehypothecation," "overcollateralized"), no hype adjectives, no salesy softeners.

### 12.3 The Marius voice (founder / technical)

Marius's personal voice is very specific and the team mines it for marketing. From meeting transcripts:

> *"Keep it clean. Keep it safe. Just untouched."*

> *"This is a pristine fucking product."*

> *"Because they don't know how the sausage is made. But I do. I can think of 100 DeFi scenarios [where this goes wrong]. They can't. It doesn't mean it doesn't exist. They just can't conceive it."*

> *"Don't go and put 8% in Apollo. We have no fucking clue. They said they're lending to Charge PT who's like bleeding money. You have no idea what Apollo does. Here, very fucking clear. Look at everything."*

> *"When I sign up to something, you promise me a specific risk profile and that's what I'm putting my money into. You can't just go and change it."*

> *"Lender solvency is paramount."*

> *"Liquidations are bad UX."*

The mental models Kamino is actively surfacing for the video content:

- **The ETF mandate frame:** *"When you buy an ETF, you know exactly what's in it. The formula is defined. It doesn't change. That's what we built."*
- **The pristine product frame:** *"Every decision we make asks one question: does this make the product safer or riskier? If it's riskier, we don't do it — even if it means slightly less yield."*
- **The transparency contrast frame:** *"Traditional private credit gives you a quarterly PDF. DeFi lending gives you pool-level stats. We give you every loan, every collateral position, every LTV ratio — in real time."*
- **The anti-DeFi-risk frame:** *"Most DeFi lending relies on oracles, liquidation bots, and smart contract logic that can be exploited. Our collateral sits at qualified custodians, managed by a regulated lending operation. Different risk universe."*
- **The accountability frame:** *"The lending operation reports to a regulator every day. An independent accounting firm verifies the portfolio every month. This is what accountability looks like."*

### 12.4 The Mark Hull voice (BD / institutional sales)

Measured, relational, institutional. From the IY quote in the PR:

> *"There are billions of dollars in institutional demand to borrow against assets held in qualified custody. Until now, onchain users had no way to access that opportunity with adequate transparency. Institutional Yield connects these two worlds — regulated institutional lending, accessible through a single vault deposit on Solana."*

### 12.5 The Twitter / @kamino voice

Restrained for a DeFi brand. Data-forward. Example from the PRIME thread:

> *"Kamino's PRIME market is now the single largest RWA market in DeFi. $570M Market Size. $250M Borrowed. Across 3,653 active loans. Built natively on @solana."*

> *"Kamino's PRIME market grew from $0 to $600M+ in market size in ~4 months, making it the largest RWA market in DeFi. That growth demonstrates how Kamino's credit infrastructure can scale real-world assets on Solana."*

Note the pattern: short declarative claims, specific numbers, one Solana mention, no emojis beyond tasteful ones, no hype language.

### 12.6 The language rules (codified)

From the marketing-plan language rules (Institutional Yield), which extend to the whole brand:

- **Say "lending criteria"** not "parameters" — parameters sounds like smart contract settings.
- **Say "stablecoin yield"** not "USDC yield" — future-proof for multi-stablecoin expansion.
- **Say "share price"** not "NAV" — user-friendly.
- **Say "monthly attestation"** never "monthly audit" — legally distinct.
- **Say "capacity remaining"** for vault caps — urgency without aggression.
- **Say "mix of short-term loans"** for duration — avoids specific terms.
- **Never mention "fund administrator"** in marketing — irrelevant to depositors.
- **Never name specific custodians** beyond "qualified custodians (e.g., banks)."
- **Never name the lending operation** (Altenberg — internal only).
- **Don't say "fixed yield"** — say "rates set at origination per loan term."
- **Don't say "beta"** — this is a live product.
- **"No title transfer"** is the primary protection language (stronger and more intuitive than "bankruptcy remote").

### 12.7 Voice shift across products — important

**Institutional Yield / Off-Chain Collateral / Fixed Rates copy is the most institutional register.** Reads like a Goldman Sachs product sheet.

**Earn / Multiply / Borrow copy is warmer, more retail-friendly.** Examples from the Multiply spec: *"Amplify your yields with one-click leverage."* And *"Leveraged Staking Yield — Deposit SOL or any LST, earn amplified staking rewards."* And *"Earn the rate spread between stablecoins with zero price risk."*

**Swap / Liquidity are utility-register.** Short, direct: *"Best prices on Solana, zero fees."*

The landing page's challenge is to host *all three registers* coherently. The locked hero is the institutional register; the audience-specific pages for Individuals will shift to retail-warmer; Fintechs page will go back toward institutional/developer register.

---

## 13. Open Tensions, Risks, Strategic Debates

Reading across the documents, these are the real unresolved tensions in Kamino's current positioning. They will shape which landing-page decisions work and which don't.

### 13.1 Retail DeFi vs. institutional infrastructure — the primary tension

Kamino's current daily active users, TVL, and cultural center of gravity are retail DeFi (SOL/LST lenders, PRIME Multipliers, airdrop farmers). Its strategic momentum and 2026–2027 growth thesis are institutional.

**The landing page risk:** tilt too hard institutional and the retail community reads the rebrand as abandonment — watch CT for snark about "Kamino going corporate." Tilt too hard retail and the institutional story evaporates.

**Current resolution:** four equal-weight boxes, one of which is Individuals. The Audience Router is precisely the architectural answer to this tension. The risk is execution — if the Individuals path feels thinner or more grudging than the Institutions path, the tension will bleed out.

**Deeper resolution required:** Individuals audience page probably *needs* to match the polish of the other three. Routing straight to `/earn` is a tell — it signals Individuals were an afterthought. The spec itself flags this: *"Decide before specifying content."*

### 13.2 "Infrastructure" positioning vs. consumer-facing reality

Kamino wants to be "infrastructure" — but retail users show up to deposit USDC and get yield. Infrastructure is a positioning a company can claim, but products that reach consumers directly are *products*, not infrastructure. This is a Stripe-vs-PayPal problem. Stripe won "infrastructure"; it's a B2B company. Kamino is trying to be Stripe *and* PayPal simultaneously.

This tension cannot be fully resolved. It has to be managed. The four-audience model manages it by giving Individuals a clear path without making them feel they're using "infrastructure." Fintechs and Institutions get the explicit infrastructure positioning; Individuals get a consumer product narrative *on top of* the same infrastructure.

### 13.3 What if Institutional Yield doesn't scale cleanly?

The $25M cap is tiny for a protocol of Kamino's size. If IY hits $500M+ quickly, the thesis is validated. If it stalls at $100M, questions emerge: is the regulated/transparent/overcollateralized angle actually a moat, or is crypto-native yield sufficient for onchain capital? The landing page lives with whatever answer emerges.

Specific risks: (1) the lending operation experiences an operational incident even with regulatory oversight; (2) a custodian failure produces headlines even if depositor funds are protected; (3) the "not truly trustless" framing becomes a meme on CT; (4) US regulatory posture reverses and jurisdictional complexity creeps in.

### 13.4 The Maple drift warning — applied to Kamino

Kamino positions IY against Maple's mandate drift (BTC → BTC + Hype + XRP + Spark). But Kamino is *also* planning "Institutional Yield Diverse" (SOL, gold, commodities) and explicitly wants a *multi-vault product line*. The risk is that Kamino falls into the same trap: launching IY Diverse blurs the "pristine BTC-only" positioning of IY v1 and invites the exact drift critique Kamino is using against Maple.

The team's answer is "each vault has a separate mandate" — if enforced, this is correct. If blurred in marketing, it becomes a credibility drag. Landing page copy should treat IY v1 as the flagship with a defined scope.

### 13.5 Closed-system vs. open-finance

The Jupiter Lend refinance block is not over. Kamino blocked Jupiter Lend's migration tool at the smart-contract level — framed by Jupiter as anti-competitive. Kamino's rationale (the rehypothecation critique) is technically defensible but optically costly in a DeFi culture that valorizes composability. If Kamino's brand becomes "the closed-system Solana lender," it will lose the open-finance audience.

**Strategic line the brand has to walk:** stand by the decision (the rehypothecation critique is real) without appearing to oppose "open finance" as a principle. The landing page copy should probably avoid any construction that reads as closed/walled-garden (which is well-handled by the current positive-framing principles).

### 13.6 Hero copy vs. retail recognizability

"Connecting global capital to the new financial system" is beautiful institutional copy. But a Solana-native retail user who has been depositing USDC into Kamino for a year arrives on the new site and the hero says nothing to them. The proof strip and the Individuals route have to close this gap fast. The specific risk: the current user doesn't *recognize* Kamino. If they bounce to the webapp, no harm done. If they read the new positioning as "Kamino is for institutions now, not me," harm done.

### 13.7 The "onchain" tension

The copy-framing principles explicitly state:
> *"'Onchain' is a qualifier, not a positioning frame. Don't let it carry a line on its own. A TradFi reader's ear goes up at 'onchain'; it relaxes at 'credit' and 'liquidity' and then leans in when 'onchain' qualifies them."*

This is a TradFi-facing design choice. But it comes with a cost: the *onchain-native* distinctiveness (instant settlement, composability, permissionlessness) is a real product advantage, and downplaying "onchain" risks under-selling it. The right balance is probably to lead with institutional vocabulary in the hero and let the product-specific proof strip, audience pages, and live data reveal the onchain advantages by demonstration.

### 13.8 What's the role of KMNO in the landing page?

The landing brief doesn't explicitly surface KMNO in the homepage sections. But KMNO is 100% of Kamino's upside capture and 100% of the team's alignment structure, and the "There Is Only KMNO" memo is public strategy. The tension: KMNO on the homepage risks making Kamino look like a token project; KMNO absent risks making it look like Kamino doesn't have a token story. Resolution probably: KMNO lives on Individuals (stake, earn boost, participate in governance) and Company pages, not on the root landing.

### 13.9 The regulatory optionality tension

Institutional Yield is regulated through Liechtenstein. Off-Chain Collateral uses a US OCC-chartered custodian. Kamino is "exploring US market presence." Every one of these commits the brand a little further into regulatory territory, which gradually separates Kamino from permissionless DeFi culture. The question that has to be answered (and will shape future landing pages): is Kamino eventually a licensed-infrastructure company that happens to use Solana, or is it a permissionless DeFi protocol that happens to integrate with regulated counterparties? The answer is probably "both, differently, per product" — but the longer the institutional side grows, the harder that balance becomes.

### 13.10 The vertical integration argument against modularity

Kamino's thesis depends on one thing that many market observers will push back on: vertical integration. Most DeFi architecture thinking in 2026 favors *modular, composable* infrastructure — Morpho Blue's thesis is that lending should be minimal, maximally composable, and everything on top (vaults, institutional products, curators) should be modular. Kamino's thesis is the opposite: the lending engine, the oracle, the liquidation engine, the vault layer, the Multiply product, the institutional products, the swap, the LP vaults — all owned and operated under one protocol, all sharing one liquidity base, all with the same risk culture.

The vertical argument (Kamino's): this is how you guarantee zero bad debt, consistent UX, and seamless cross-product liquidity. The modular argument (Morpho's): this is how you concentrate risk and compete with every integrator.

The landing page implicitly takes Kamino's side. Every decision downstream should preserve that — *Kamino is one coherent system*, not a hub of third-party markets.

---

## Sources

### Local documents read
- `/Users/dawid/Github/Product/landing page rebuild/landing-website.md`
- `/Users/dawid/Github/Product/specs/prime-product-page.md`
- `/Users/dawid/Github/Product/specs/multiply-landing-page.md`
- `/Users/dawid/Github/Product/specs/borrow-orders-prd.md`
- `/Users/dawid/Github/Product/specs/borrow-orders-marketing-brief.md`
- `/Users/dawid/Github/Product/specs/fixed-rates-order-book.md`
- `/Users/dawid/Github/Product/webapp-mapping/kamino-com-user-journey-map.md`
- `/Users/dawid/Github/Product/curators/kamino-prime-vault-documentation-complete.md`
- `/Users/dawid/Github/Product/context/navigation-redesign.md`
- `/Users/dawid/Github/Product/prime-heloc/prime-product-explainer.md`
- `/Users/dawid/Github/Product/prime-heloc/marius-prime-tweet.md`
- `/Users/dawid/Github/Marketing/launches/private credit/drafts/Kamino Institutional Yield - Final Announcement.md`
- `/Users/dawid/Github/Marketing/launches/private credit/drafts/pr-brief-v2.md`
- `/Users/dawid/Github/Marketing/launches/private credit/marketing-plan/00-master-plan.md`
- `/Users/dawid/Github/Marketing/launches/private credit/marketing-plan/08-meeting-intelligence.md`
- `/Users/dawid/Github/Marketing/documents/competitive-positioning-private-credit.md`
- `/Users/dawid/Github/Marketing/documents/kamino-intelligence-context.md`
- `/Users/dawid/Github/Marketing/documents/There Is Only KMNO v4.md`
- `/Users/dawid/Github/Marketing/documents/Kamino Off Chain Collateral Memo V1.md`
- `/Users/dawid/Github/Marketing/documents/Private Credit External Memo - Lean.md`
- `/Users/dawid/Github/Marketing/specs/kamino-general-deck.md`

### External sources
- `https://kamino.com/docs/products/institutional-yield` — product documentation
- `https://kamino.com/docs` — general docs structure
- `https://gov.kamino.finance/t/kamino-the-next-chapter/864` — Dec 12, 2025 strategic governance post
- `https://gov.kamino.finance/t/introducing-gauntlet-as-official-vault-curators/856` — Nov 11, 2025
- `https://blog.kamino.finance/introducing-kamino-lend-v2-08ad8f52855c` — Sep 3, 2024 V2 launch post
- `https://solanacompass.com/projects/Kamino_Finance` — Kamino project profile
- `https://solanacompass.com/learn/Lightspeed/kamino-20-building-solanas-economic-hub-marius-ciubotariu-mark-hull` — Lightspeed podcast, Jan 2024
- `https://www.rockawayx.com/insights/kamino-launches-v2-ushering-in-a-new-era-of-modular-credit-infrastructure-on-solana`
- `https://blog.redstone.finance/2025/12/11/solana-lending-markets/` — Solana Lending Markets Report 2025
- `https://coinmarketcap.com/cmc-ai/kamino-finance/latest-updates/` — 2026 news roundup
- `https://x.com/kamino/status/2044094731404112321` — PRIME $600M growth tweet
- `https://stabledash.com/news/2026-03-09-kaminos-prime-market-reaches-570m-market-size-to-become-defis-largest-rwa-protocol`
- `https://www.onchaintimes.com/what-the-heloc/` — On Chain Times PRIME analysis
- `https://thedefiant.io/news/defi/kamino-blocks-jupiter-lend-refinance` — Dec 2025 Jupiter Lend controversy
