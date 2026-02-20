# Asset Risk Assessment - $PRIME by Figure & Hastra [S]

## PRIME RISK ASSESSMENT

**January 20, 2026** | V1.0 Framework

by Allez Labs

---

## EXECUTIVE SUMMARY

**Overall Rating: 7.1/10 (A)**

**Decision: ✓ APPROVED - Maintain Current Integration**

**Outlook:** Positive

### Key Findings

PRIME is a yield-accruing token (8% APY) representing exposure to a 62-day warehouse facility for prime HELOCs originated by Figure Technology Solutions, short term mortgage financing. The structure combines traditional finance credit discipline with DeFi capital efficiency, creating a unique opportunity for users to earn stable yields while maintaining on-chain liquidity and composability.

Kamino's market has organically evolved into a positive carry platform where users deposit PRIME (earning 8% yield), borrow stablecoins (paying 5-6.5%), and redeploy capital to generate 19+% APY through leverage. This makes high LTVs economically rational rather than speculative, and bound to continue growing.

**Primary Strengths:**

- **Prime HELOC warehouse:** Strong HELOC portfolio with high 736 FICO score, 65% CLTV, <1.75% delinquencies, 62-day average hold period with 30-day auto-markdown protection providing exceptional credit quality
- **Full backing:** PRIME is 100% backed by wYLDS primarily backed by T-bills (qualified investments also permitted), providing capital preservation with on-chain verifiable reserves
- **SEC 1940 Act registration:** YLDS operates under Investment Company Act with UMB Bank (Fed-regulated) custody, providing mutual fund-equivalent investor protections
- **Strong sponsor:** Figure's $1.1B cash position, $90M quarterly profit, and 7-year track record through multiple stress cycles demonstrates institutional-grade financial stability
- **Rational market design:** The positive carry economics and optimal utilization rates indicate healthy lending market dynamics rather than unsustainable speculation

**Key Risks:**

- **Onchain operational immaturity:** 40+ days on-chain without exposure to DeFi stress events leaves performance under adverse conditions untested
- **Bridge route novelty:** Provenance ↔ Solana route operational for only 2 months, within typical vulnerability discovery window for bridge infrastructure
- **Liquidity gap:** $20M DEX liquidity versus $132M at-risk debt creates exposure to potential price shocks albeit only tail events due to PRIME's nature
- **Concentration risk:** 90% of PRIME is on Kamino, where top 10 positions represent >50% of the supply

Current 88% maximum LTV is appropriate given PRIME's structural stability as T-bill backed collateral. Unlike volatile crypto assets, capital is preserved with risk manifesting as yield volatility rather than capital loss. Liquidations should only occur in tail scenarios (Demo Prime failure, bridge exploit, Figure insolvency), making liquidity infrastructure adequate for expected scenarios while stretched under severe stress.

---

## RATING SCORECARD (V1.0 FRAMEWORK)

| CATEGORY | Weight | Score | Rating |
|---|---|---|---|
| **OVERALL** | **100%** | **7.1** | **A** |
| | | | |
| **MARKET & LIQUIDITY** | **35%** | **6.6** | **BBB** |
| Volatility | 10% | 7.5 | A |
| Liquidity Depth | 12% | 5.5 | BBB |
| Market Cap | 8% | 7.5 | A |
| Stress Performance | 5% | 6.0 | BBB |
| | | | |
| **TECHNICAL & COUNTERPARTY** | **40%** | **7.4** | **A** |
| Smart Contract | 12% | 6.0 | BBB |
| Architecture & Oracles | 8% | 7.5 | A |
| Dependency Quality | 12% | 8.0 | AA |
| Dependency Resilience | 8% | 8.5 | AA |
| | | | |
| **OPERATIONAL & GOVERNANCE** | **25%** | **7.2** | **A** |
| Governance | 7% | 7.0 | A |
| Centralization | 6% | 7.0 | A |
| Incident Response | 5% | 6.5 | BBB |
| Team | 4% | 8.0 | AA |
| Regulatory | 3% | 8.5 | AA |

---

## TABLE OF CONTENTS

1. What is PRIME?
2. Market & Liquidity (35%)
3. Technical & Counterparty (40%)
4. Operational & Governance (25%)
5. Recommendations
6. Appendix

---

## 1. WHAT IS PRIME?

### Structure Overview

PRIME represents a five-layer structure bridging traditional finance Treasury bills with DeFi composability while providing yield enhancement through Figure's HELOC business. PRIME maintains full T-bill backing for capital preservation while delivering 8-9% yields from short term financing "warehouse" HELOC profits paid out by adding tokenised T-bills to the staking vault.

**Layer 1: HELOC ORIGINATION**

Figure Technology Solutions originates home equity lines of credit with 736 FICO score borrowers (exceptional credit quality), 65-67% CLTV (conservative loan-to-value), 10.76% weighted average coupon, and $709K average home value.

**Layer 2: DEMO PRIME WAREHOUSE FACILITY**

62-day revolving facility for Figure's HELOC portfolio with average 62-day hold period before securitization, 30-day auto-markdown (delinquent loans → $0 immediately), generating excess returns from spread between borrower rate and funding cost.

**Layer 3: YLDS (Figure Certificate Company)**

SEC 1940 Act registered investment company backed by U.S. Treasury bills and money market instruments. Receives warehouse profits → immediately purchases more T-bills. UMB Bank custody (Fed-regulated, 70-year history). Daily NAV calculation (SEC-mandated). Total yield: T-bill rate (~4-5%) + warehouse excess returns (~3-4%) = 8-9%.

**Layer 4: wYLDS**

Wrapped YLDS on Solana via Chainlink CCIP with 1:1 backing (each wYLDS = 1 YLDS on Provenance). Proof-of-reserves verifiable on-chain. DEX tradeable, composable in DeFi.

**Layer 5: PRIME (Hastra Staking Receipt)**

Yield-bearing token representing staked wYLDS position. 100% backed by wYLDS in Hastra vault (on-chain verifiable). Price appreciation mechanism: More wYLDS per PRIME as yield accrues. Price = (Total wYLDS in vault) / (Total PRIME supply). Yield manifests as price increase, not balance increase.

### Economics

**Yield Components:** The 8-9% annual yield comes from two distinct layers: Base YLDS Yield (~4-5%) from U.S. Treasury bills held by Figure Certificate Company, and Warehouse Excess Returns (~3-4%) from Figure's Demo Prime facility spread during the ~62 day warehouse period before HELOCs are securitized.

**Yield Accrual Mechanism:** Unlike typical DeFi yield tokens that increase your balance, PRIME delivers yield through price appreciation. Demo Prime warehouse earns excess returns from HELOC spread, profits flow to FCC → purchase T-bills mint YLDS, supply YLDS to the vault NAV increases, Hastra vault now holds more YLDS for same PRIME supply, and PRIME price increases.

### Key Entities

**Figure Technology Solutions (Nasdaq: FIGR):** Q3 2025 financial performance demonstrates substantial profitability: $90M net income on $156M revenue generates a 58% net margin, while 55% EBITDA margins indicate operational efficiency. The $1.1B cash position relative to $1.18B stockholders' equity provides significant loss-absorption capacity, with 0.40x debt-to-equity indicating conservative leverage.

**Figure Certificate Company (FCC):** Operates as the issuer of YLDS shares under SEC Investment Company Act 1940 registration. UMB Bank serves as qualified custodian, holding the Treasury bills and money market instruments in segregated accounts.

**Demo Prime (HELOC Warehouse Facility):** Figure's warehouse facility for their main HELOC portfolio during the approximately 62-day period between origination and securitization.

**Hastra:** Operates the PRIME staking vault on Solana, functioning as the bridge between SEC-regulated securities (YLDS/wYLDS) and DeFi composability.

### Primary Use Case: Kamino Lending Collateral

Approximately 90% of PRIME's $200M market cap serves as collateral for leveraged yield strategies in DeFi lending markets, primarily on Kamino Finance ($185.4M deposited). Users maximize capital efficiency through positive carry loops: Deposit $100K PRIME (earn 8%) → Borrow $88K stablecoins (pay 5-6.5%) → Buy more PRIME → Repeat to maximize leverage. Net result: 2-3% spread per iteration × leverage multiplier = 19+% APY.

---

## 2. MARKET & LIQUIDITY (35% Weight) - Score: 6.6/10 (BBB)

The Market & Liquidity category assesses PRIME's price stability, exit liquidity, market adoption, and resilience under stress conditions.

### 2.1 Volatility (10% Weight) - Score: 7.5/10 (A)

Since December 5, 2025 launch, PRIME demonstrates stablecoin-like behavior: mean daily returns +0.024% (aligned with 8% annual yield), standard deviation 0.18% (close to USDC's 0.05%, outperforming USDe's 0.40%, orders of magnitude below SOL's 4.20%). Maximum drawdown -0.52% recovered in <4 hours. The 0.12 correlation to SOL demonstrates market-neutral behavior - PRIME moves based on NAV rather than crypto sentiment.

**Structural Stability Mechanisms:**

- **T-Bill Backing:** Full wYLDS backing (1:1 with YLDS T-bills) provides hard asset support under SEC custody at UMB Bank. No credit risk (barring U.S. sovereign default), highly liquid, daily market pricing.
- **SEC-Regulated NAV Floor:** Daily NAV calculation under SEC requirements creates arbitrage mechanism: if PRIME trades below NAV, buy PRIME → unstake to wYLDS (2 hours) → redeem for cash at NAV (3-5 days) → capture risk-free profit.
- **Yield-Bearing Model:** NAV increases as T-bill holdings generate interest and warehouse adds excess returns. Price "stability" manifests as gradual appreciation (+0.024% daily) rather than fixed peg.
- **Multi-Tier Redemption:** Graduated liquidity options suit different urgency levels across PRIME DEX, unstaking, wYLDS DEX, YLDS redemption, and legal enforcement.

**Score: 7.5/10 (A)** - Limited track record and untested stress response. Will increase naturally with time if performance remains clean.

---

### 2.2 Liquidity Infra (12% Weight) - Score: 5.5/10 (BBB)

Liquidity represents our lowest sub-score, reflecting the imbalance between leveraged deployment (90% of supply) and exit liquidity (10% in Raydium).

**Current State of Onchain Liquidity:**

- DEX liquidity: $20.2M (Raydium) PRIME <> CASH
- At 1% slippage: $11M PRIME tradeable
- At 0.1% slippage: $8M PRIME tradeable
- 24hr trading volume: $3.2M average
- Composition: Represents ~5% of total PRIME supply

**Structural Imbalance:**

- *Normal (99.5% probability):* Small daily exits ($3-5M) → Raydium absorbs easily → Positive carry sustains re-entry demand → System functions with 5% liquidity ratio.
- *Stress (0.5% probability):* Trigger event → Large portion of 90% needs exit → Pressure concentrates through 10% liquidity → Price impact increases → Liquidation cascade.

**Position-Level Risk Analysis:**

| Distance to Liq | Positions | Debt | PRIME Drop to Liquidate |
|---|---|---|---|
| < 5% buffer | 65 | $13.7M | <5.5% |
| 5-10% buffer | 346 | $118.6M | 5-10% |
| 10-20% buffer | 213 | $19.9M | 10-20% |
| >20% buffer | 75 | $1.0M | >20% |

$132M debt (85% of total) positioned within 10% of the 91% liquidation threshold.

**Score: 5.5/10 (BBB)** - Adequate for normal/high-probability scenarios but structurally weak in tail events.

---

### 2.3 Market Cap (8% Weight) - Score: 7.5/10 (A)

PRIME achieved $200M market cap in ~40 days ($5M daily average) with ~1,235 holders; the fastest growing onchain RWA. This validates strong product-market fit across yield optimizers (90% deploying positive carry loops for 20-45% APY) and liquidity providers (10% earning trading fees from Raydium pool).

**Holder Distribution:**

| Metric | Value | Assessment |
|---|---|---|
| Total Unique Holders | 1,235 | Growing ecosystem |
| Via Kamino Only | 236 (19%) | Dedicated Kamino users |
| Direct Wallet Only | 570 (46%) | Substantial direct holding base |
| Both Sources | 429 (35%) | Sophisticated users with diversified holdings |

**Concentration Analysis:**

- Whales (>$1M): ~31 accounts controlling ~75%+ of supply
- Large ($100K-1M): ~136 accounts controlling ~21% of supply
- Medium/Small (<$100K): ~1,100 accounts controlling ~4% of supply
- Gini Coefficient: 0.949 (high inequality, typical for yield tokens)
- HHI Index: 639.53 (unconcentrated, <1500 threshold)

**Scaling Capacity:** Figure's origination capacity removes supply-side bottlenecks. With ~$2.5-3B annual HELOC originations and ~$1.25-1.5B estimated as Demo Prime eligible, current $200M PRIME market cap represents <20% utilization of theoretical capacity.

**Score: 7.5/10 (A)** - Exceptional growth, clear product-market fit, no supply constraints. Deductions for high concentration and short track record.

---

### 2.4 Stress Performance (5% Weight) - Score: 6.0/10 (BBB)

**Figure Track Record (7 years):**

- 2020-2021: COVID-19 → Continued originations, <2% delinquencies
- 2022-2023: Fed rate hikes 0→5.25% → Some unprofitable quarters, no losses
- 2023: Banking crisis → Maintained securitization access
- Q3 2025: $90M profit, $946M AAA securitizations

**PRIME On-Chain (40+ days):**

- Zero incidents: No exploits, bridge failures, oracle issues, liquidation failures
- Untested: DeFi stress events, market crash, regulatory action

**Tail Event Scenarios:**

*Scenario 1: PRIME -5%* - Triggers include Demo Prime moderate losses ($25-30M), brief bridge pause, Figure concerns, DeFi stress. Outcome: Manageable with $5-8M temporary bad debt resolving in 6-12 hours.

*Scenario 2: PRIME -10%* - Triggers include Demo Prime catastrophic loss + Figure downgrade, bridge exploit with delayed detection, multiple simultaneous failures. Outcome: Material stress with potential bad debt $60-90M (45-65% of at-risk amount).

**Score: 6.0/10 (BBB)** - Figure's proven management and T-bill backing provide strong foundations. However, the 90/10 liquidity structure has no empirical validation.

---

## 3. TECHNICAL & COUNTERPARTY (40% Weight) - Score: 7.4/10 (A)

Technical & Counterparty risk encompasses smart contract security, architecture design, dependency quality, and the resilience of underlying backing infrastructure.

### 3.1 Smart Contract (12% Weight) - Score: 6.0/10 (BBB)

**Audit:** Informal Systems engagement followed a two-phase methodology from September through November 2025. Phase 1 (Sept 24 - Oct 3) identified 9 findings including 1 Critical, 4 Medium, 2 Low, and 2 Informational. Hastra's development team remediated all findings during October 2025. Phase 2 (Nov 2-18) conducted follow-up review of fixes and discovered 2 additional High-severity findings that were immediately addressed.

The November 25 final report concluding programs are "well-positioned for production deployment" represents unqualified endorsement. Now 40 days operational with zero incidents and $200M TVL successfully managed provides empirical validation of the audit work.

**Remaining Gaps:**

- **Single Audit Firm:** Best practice for protocols exceeding $100M TVL is 2-3 independent audits by different firms with complementary expertise.
- **No Public Bug Bounty:** Immunefi bug bounties with $500K-1M maximum payouts are standard for protocols at PRIME's scale.
- **Code Verification Status Unclear:** Verified programs on Solana Explorer enable community review and ensure deployed code matches audited code.

**Score: 6.0/10 (BBB)** - Excellent pre-launch security with full audit before deployment and all critical issues resolved. Held back by single audit, no bug bounty, limited operational history.

---

### 3.2 Architecture & Oracles (8% Weight) - Score: 7.5/10 (A)

**Architecture Overview:**

Technical design connects PRIME's five layers from off-chain T-bills to on-chain DeFi tokens across three trust domains:

1. Traditional Finance (HELOCs → Demo Prime → YLDS: regulatory oversight, legal contracts, institutional custody)
2. Bridge Infrastructure (Chainlink CCIP: decentralized oracle network, BFT consensus, cryptographic security)
3. DeFi (wYLDS → PRIME: smart contracts, programmatic execution)

**Critical Components:**

*Chainlink CCIP YLDS ↔ wYLDS Bridge:* Core CCIP Technology (18 months) is best-in-class bridge with $75B+ secured by Chainlink, zero exploits, multiple independent nodes. Provenance ↔ Solana Route (2 months) is PRIME's primary vulnerability as most bridge exploits occur within first 4-14 months.

*On-Chain ↔ Off-Chain Verification Architecture:* Three-layer proof system including Hastra vault (on-chain, real-time), CCIP bridge state (on-chain, real-time), and YLDS NAV (off-chain, daily).

*Hastra Vault Architecture:* ERC-4626-style tokenized vault adapted for Solana with stake(wYLDS) → mint PRIME and unstake(PRIME) → burn and return wYLDS functions.

**Oracle Design:**

*Dual-Layer Architecture:*

- Layer 1 (Fundamental NAV - Off-Chain Regulatory): FCC calculates daily YLDS NAV under SEC regulatory requirements with UMB Bank independent verification.
- Layer 2 (Operational Pricing - On-Chain Deterministic): Chainlink PRIME/wYLDS Oracle reads deterministic on-chain state from Hastra vault proof-of-reserves.

**Formula:** PRIME price = $1 + {interest_accrued} / {PRIME supply}

Historical performance: PRIME trades within ±2% of NAV for 95% of 40+-day period, maximum -0.52% deviation recovered in <4 hours.

**Score: 7.5/10 (A)** - Well-designed architecture with clean TradFi/DeFi separation, best-in-class bridge core, pre-launch audit. Weaknesses: bridge route only 2 months operational, single bridge dependency.

---

### 3.3 Dependency Quality (12% Weight) - Score: 8.0/10 (AA)

**Backing Quality & Reserve Adequacy:**

PRIME is 100% backed by wYLDS, which maintains 1:1 backing with YLDS, which holds U.S. Treasury bills and money market instruments. This provides capital preservation through low risk instruments (barring U.S. sovereign default). The on-chain verifiable reserves enable real-time auditing with assets ultimately held with UMB Bank & Figure Certificate Company.

**Primary Backing:**

- U.S. Treasury bills
- Repurchase agreements (repos) involving treasury securities
- Prime money market funds

As of October 2025, FCC updated its policy to limit reserve investments specifically to short-term Treasury bills and Treasury-backed repurchase agreements.

**Yield Enhancement - Demo Prime:**

Strong credit metrics: 736 weighted FICO, 65% CLTV, <1.75% delinquencies, and senior securitizations achieving AAA ratings from S&P/Moody's. These external ratings validate that the underlying loans can withstand severe recession scenarios. Expected credit loss is extremely low (~0.10% annually), comparable to A-rated corporate bonds.

The Prime Demo warehouse provides additional protection: any loan becoming 30+ days delinquent in the 62-day warehouse window is immediately marked down.

**Reserve Adequacy Layers:**

1. wYLDS backing
2. YLDS T-bill reserves
3. Demo Prime overcollateralization
4. Unstaking and redemption mechanisms
5. Figure's $1+B cash balance as an ultimate backstop

**Score: 8.0/10 (AA)** - Fundamentally robust with solid collaterals and transparency leading to minimal capital risk.

---

### 3.4 Dependency Resilience (8% Weight) - Score: 8.5/10 (AA)

**Custody & Operators:**

**UMB Bank** is an exceptionally strong custodian for YLDS/T-bill assets due to its status as a Fed-regulated national bank with a 70-year track record of stability across every major financial crisis. With $70+B in assets under custody and ongoing oversight from the Federal Reserve and OCC, UMB operates under strict controls far beyond what exists in typical DeFi custody.

As a qualified custodian under the Investment Company Act of 1940, UMB must enforce strict protections: segregated client assets, daily reconciliations, independent third-party verification, insurance, and bankruptcy-remote structures.

**Hastra** offers a different but complementary protection model by relying on autonomous smart contracts rather than institutional history or human oversight. Its vault operates entirely through deterministic code with no admin keys, eliminating risks like fund misuse or manual intervention.

Security is reinforced through a pre-launch audit, daily proof-of-reserves, and real-time on-chain transparency, allowing anyone to verify that vault assets match PRIME supply.

**Score: 8.5/10 (AA)** - Top-tier combining Fed-regulated UMB Bank with Hastra's audited autonomous vault. 40 days incident-free at $200M validates architecture.

---

## 4. OPERATIONAL & GOVERNANCE (25% Weight) - Score: 7.2/10 (A)

Operational & Governance assesses the protocol's governance structure, centralization risks, incident response capabilities, team quality, and regulatory standing.

### 4.1 Governance (7% Weight) - Score: 7.0/10 (A)

RWA structures inherently require more centralized control than pure DeFi (originated assets need legal entities to hold mortgages, enter contracts, interact with traditional finance). Centralization is however balanced by oversight, transparency, and accountability.

PRIME's architecture concentrates power at the origination layer (Figure controls HELOC underwriting, Demo Prime operations, FCC management) while decentralizing execution layers (Chainlink bridge, Hastra vault).

| Component | Controller | Type |
|---|---|---|
| HELOC Origination | Figure | Centralized |
| Demo Prime | Figure | Centralized |
| Figure C (YLDS) | Figure + Independent Directors + SEC | Hybrid |
| Bridge | Chainlink DON | Decentralized |
| PRIME Vault | Hastra contracts | Autonomous |

Figure is a Public company (Nasdaq: FIGR), with SEC reporting and board oversight. FCC is 1940 Act registered with independent directors.

**Score: 7.0/10 (A)** - Appropriate centralization at origination balanced by regulatory oversight and decentralized execution layers.

---

### 4.2 Centralization (6% Weight) - Score: 7.0/10 (A)

**Power Distribution Analysis:**

PRIME's governance structure presents a vertical separation that creates checks and balances. While Figure maintains control over origination and warehouse operations, execution layers operate autonomously or through decentralized networks.

**Key Centralization Risks:**

- Figure unilaterally controls HELOC underwriting standards
- Demo Prime terms can be modified by Figure
- FCC investment policy controlled by Figure (subject to SEC constraints)
- Hastra upgrade authority unclear

**Mitigating Factors:**

- SEC oversight of FCC operations
- Independent directors on FCC board
- Chainlink's decentralized oracle network
- On-chain verifiable reserves
- Figure's public company status with disclosure requirements

**Score: 7.0/10 (A)** - Centralization exists where necessary (TradFi interface) with appropriate oversight mechanisms.

---

### 4.3 Incident Response (5% Weight) - Score: 6.5/10 (BBB)

**Current Capabilities:**

*Hastra Vault:*

- 2-hour unstaking delay provides time buffer for response
- No emergency pause mechanism (good for censorship resistance, limits response options)
- Proof-of-reserves enables real-time monitoring

*Bridge Infrastructure:*

- Chainlink CCIP includes Rate limiting and circuit breakers
- Risk Management Network provides secondary verification
- Bridge pause capability exists

*Figure/FCC Layer:*

- Demo Prime 30-day auto-markdown provides automatic response to credit deterioration
- Figure's $1.1B cash provides discretionary backstop capability
- SEC examination authority provides external oversight

**Gaps:**

- No unified monitoring dashboard across all layers
- No formal incident response SLAs published
- No public communication protocols for stress events
- 40+ days operational without stress testing

**Score: 6.5/10 (BBB)** - Basic incident response capabilities exist but lack formal documentation and stress testing validation.

---

### 4.4 Team (4% Weight) - Score: 8.0/10 (AA)

**Figure Technology Solutions:**

*Financial Position (Q3 2025):*

- $90M net income on $156M revenue (58% net margin)
- 55% EBITDA margins
- $1.1B cash position
- 0.40x debt-to-equity (conservative leverage)

*Operational Track Record (7 years):*

- Navigated COVID-19 lockdowns in 2020 without material portfolio deterioration
- Maintained operations during 2022-2023 Federal Reserve rate hiking cycle (0% → 5.25% in 18 months)
- Preserved securitization market access during March 2023 regional banking crisis
- $946M in AAA-rated securitizations during H2 2025

*Nine-month 2025 originations:*

- Q1 2025: $1.192B
- Q2 2025: $1.365B
- Q3 2025: $2.469B
- Total: $5.03B (Q3 volume up 70% year-over-year)

**Hastra:** Demonstrated institutional-grade development practices with comprehensive pre-launch audit, iterative security remediation, and clean operational launch.

**Score: 8.0/10 (AA)** - Strong sponsor with proven financial stability and through-cycle performance.

---

### 4.5 Regulatory (3% Weight) - Score: 8.5/10 (AA)

PRIME's 1940 Act registration provides gold-standard protections equivalent to money market funds.

| Requirement | FCC Compliance |
|---|---|
| SEC Registration (N-8A) | ✓ Filed |
| Public Prospectus | ✓ Available |
| Audited Reports (N-CEN) | ✓ Required |
| Daily NAV | ✓ Mandated |
| Qualified Custodian | ✓ UMB Bank |
| Independent Directors | ✓ Required |
| Contractual Redemption Rights | ✓ Enforceable |
| SEC Examination | ✓ Subject to |

Mandatory daily valuation prevents stale pricing. Qualified custody ensures asset segregation. Contractual redemption rights provide legal recourse enforceable in federal courts if FCC refuses redemptions.

**Regulatory Uncertainty:**

The regulatory clarity at YLDS layer doesn't extend to wYLDS and PRIME, which operate as permissionless tokens on Solana. Anyone can trade wYLDS on DEXs or stake to receive PRIME without KYC/AML compliance, potentially creating tension with securities regulations.

**Score: 8.5/10 (AA)** - Best-in-class regulatory framework with comprehensive protections, held back only by permissionless layer uncertainty.

---

## 5. RECOMMENDATIONS

### Final Score

**RATING: 7.1/10 (A)**

**DECISION: ✓ APPROVED - Continue Listing**

**CURRENT PARAMETERS: Maintain (88% Max LTV, 91% Liquidation Threshold)**

**Score Calculation:**

- Market & Liquidity (35%): 6.6 × 0.35 = 2.31
- Technical & Counterparty (40%): 7.4 × 0.40 = 2.96
- Operational & Governance (25%): 7.2 × 0.25 = 1.80
- **Total: 7.07 → 7.1/10**

**Next Review:** April 2026

**Classification:** Internal Risk Assessment - Confidential

**Framework Version:** V1.0 | **Date:** January 30, 2026

**Prepared By:** Allez Labs Risk Team

END OF ASSESSMENT

---

## 6. APPENDIX

### A. METHODOLOGY

#### Allez Asset Risk Assessment Framework V1.0

This assessment follows the **Allez Labs Asset Risk Assessment Framework V1.0**, a comprehensive, standardized methodology for evaluating collateral assets for listing on lending protocols.

**Risk Assessment Structure**

Assets are evaluated across **three primary risk dimensions** with specific weightings:

**1. Market & Liquidity Risk (35% weight)**

- Volatility (10%): Price stability, NAV tracking, deviation frequency
- Liquidity Depth (12%): DEX depth, slippage tolerance, exit mechanisms
- Market Cap (8%): Total value, holder distribution, growth trajectory
- Stress Performance (5%): Historical resilience through market volatility

**2. Technical & Counterparty Risk (40% weight)**

- Smart Contract (12%): Audit quality, operational maturity, bug bounty programs
- Architecture & Oracles (8%): System design, bridge security, price feed reliability
- Dependency Quality (12%): Backing composition, reserve transparency, collateral quality
- Dependency Resilience (8%): Custody infrastructure, operator reliability

**3. Operational & Governance Risk (25% weight)**

- Governance (7%): Decision-making structure, stakeholder rights
- Centralization (6%): Power distribution, single points of failure
- Incident Response (5%): Crisis management capabilities, response protocols
- Team (4%): Sponsor strength, track record, financial stability
- Regulatory (3%): Legal framework, compliance status

**Rating Scale**

- **9.0-10 (AAA)**: Ultra Low Risk
- **8.0-8.99 (AA)**: Very Low Risk
- **7.0-7.99 (A)**: Low Risk
- **6.0-6.99 (BBB)**: Medium-Low Risk
- **5.0-5.99 (BB)**: Medium Risk
- **Below 5.0**: Higher risk categories

---

### B. SOURCES OF INFORMATION

#### Primary Data Sources

**Figure Technology Solutions (Nasdaq: FIGR)**

- Q3 2025 Earnings Presentation
- SEC Filings
- Quarterly financials, origination volumes, corporate disclosures

**Figure Certificate Company (FCC)**

- SEC Form N-8A (Investment Company Act 1940 registration)
- Prospectus
- YLDS documentation

**Hastra Finance**

- Proof-of-Reserves: https://hastra.io/proof-of-reserves
- Informal Systems Audit Report (Sept-Nov 2025)

**Demo Prime Warehouse Facility**

- Provenance blockchain data
- Historical HELOC portfolio statistics from Figure disclosures

#### Market & On-Chain Data

- Solana blockchain: Solscan, Solana Beach
- Kamino Finance, Raydium DEX
- Price data: CoinGecko, Birdeye

#### Technical Infrastructure

- Informal Systems Audit
- Chainlink CCIP Documentation
- Provenance Blockchain

#### Regulatory & Compliance

- SEC Investment Company Act 1940
- UMB Bank (Federal Reserve & OCC oversight)

### Data Limitations

**Operational History:** 40+ days on-chain (as of Jan 30, 2026), no stress testing
