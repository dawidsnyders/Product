# PRIME: Institutional Product Explainer & Due Diligence Brief

**February 2026** | Prepared for prospective institutional investors

---

## 1. Executive Summary

PRIME is a yield-bearing token on Solana that gives DeFi investors direct exposure to the short-term warehouse financing of US home equity lines of credit (HELOCs). It delivers ~8-9% annualized yield derived from real borrower interest payments — not token emissions — while maintaining full backing by US Treasury bills held under SEC-registered custody.

**At a glance:**

| Metric | Value |
|---|---|
| Current yield | ~8-9% APY |
| Market capitalization | ~$300M (Solana) |
| Underlying collateral | US HELOCs, 744+ FICO, 62-65% CLTV |
| Backing | 100% by YLDS (SEC-registered, T-bill backed) |
| Originator | Figure Technology Solutions (Nasdaq: FIGR) |
| Custody | UMB Bank (Fed-regulated, 70-year track record) |
| Warehouse hold period | ~42 days average |
| Cumulative severe delinquency | <1.75% across all vintages (2019-2025) |
| On Kamino Finance | $550M market, 86% via Multiply vaults |
| Independent risk rating | 7.1/10 (A) — Allez Labs, Jan 2026 |

**The thesis:** PRIME replaces Wall Street warehouse lenders on-chain, offering investors a structurally short-duration exposure to high-quality US consumer credit with T-bill capital preservation and DeFi composability. On Kamino, leveraged Multiply strategies amplify this yield to 11-21% APY while maintaining the same underlying credit quality.

---

## 2. What Is PRIME?

### The Problem It Solves

When a mortgage originator issues a new HELOC, it needs temporary capital to fund the loan before selling it into a securitization trust (~42 days later). Historically, large investment banks fill this role as "warehouse lenders" — advancing capital, holding the loans briefly, then getting repaid at securitization. This is a profitable, low-risk function gated behind institutional access.

PRIME democratizes this warehouse lending function on-chain.

### How It Works (Simplified)

1. **Figure originates HELOCs** to prime US borrowers (744+ FICO, 62% LTV)
2. **Licensed originators post these HELOCs** as collateral into the Democratized Prime warehouse facility at 90% LTV
3. **DeFi lenders provide capital** and earn ~8-9% yield from borrower interest payments
4. **Every ~42 days**, the HELOCs are sold into AAA-rated securitization trusts, the warehouse loan is repaid, and fresh loans cycle in
5. **Yield flows to Solana** as the PRIME token, which appreciates in value as interest accrues

The critical insight: PRIME lenders are exposed only to the ~42-day warehouse window — not the 25-year life of the HELOC. By the time a borrower makes their second mortgage payment, the loan has already exited PRIME and been sold to institutional buyers (pension funds, insurance companies, banks).

### The Five-Layer Structure

| Layer | What | Protection |
|---|---|---|
| **1. HELOC Origination** | Figure originates loans to 744+ FICO borrowers at 62% CLTV | Conservative underwriting, full recourse to licensed originators |
| **2. Demo Prime Warehouse** | 42-day revolving facility; originators post HELOCs at 90% LTV | Overcollateralization, 30-day auto-markdown, hourly Dutch auction pricing |
| **3. YLDS (Figure Certificate Co.)** | SEC 1940 Act registered investment company; holds T-bills + receives warehouse profits | SEC oversight, daily NAV, UMB Bank custody, independent directors |
| **4. wYLDS** | Wrapped YLDS on Solana via Chainlink CCIP | 1:1 backing, on-chain proof-of-reserves, Chainlink bridge security |
| **5. PRIME** | Yield-bearing receipt token on Solana | 100% backed by wYLDS, vault-verified on-chain, 2-hour redemption |

### Yield Composition

The 8-9% APY comes from two distinct, complementary sources:

- **Base layer (~4-5%):** US Treasury bill yield held by Figure Certificate Company
- **Enhancement (~3-4%):** Spread earned during the warehouse period from HELOC borrower interest payments minus funding costs

Yield accrues through price appreciation (not rebasing): the vault holds more wYLDS per PRIME over time, so 1 PRIME becomes redeemable for progressively more value.

---

## 3. Figure Technology Solutions — The Sponsor

Figure (Nasdaq: FIGR) is the **largest non-bank HELOC originator in the United States**.

### Financial Performance

| Metric | Value | Period |
|---|---|---|
| Revenue | $505-509M | FY2025 |
| Net income | $131.5-132.5M | FY2025 |
| Adjusted EBITDA | $249-252M (48-49% margin) | FY2025 |
| Cash position | $1.1B | Q3 2025 |
| Debt-to-equity | 0.40x | Q3 2025 |
| Q3 2025 net margin | 58% | Q3 2025 |

### Origination Scale

| Metric | Value |
|---|---|
| Cumulative HELOCs originated | $22B+ across 302,000+ loans |
| FY2025 marketplace volume | $8.4B (+63% YoY) |
| Q4 2025 quarterly volume | $2.7B (+131% YoY) |
| January 2026 monthly volume | $816M (+115% YoY) |
| Operating states | 49 |

### Through-Cycle Track Record (7 Years)

- **2020-2021 (COVID):** Continued originations, <2% delinquencies
- **2022-2023 (Fed rate hikes 0→5.25%):** Some unprofitable quarters, zero capital losses
- **2023 (Banking crisis):** Maintained securitization access throughout
- **H2 2025:** $946M in AAA-rated securitizations

### Institutional Relationships

**IPO/offering underwriters:** Goldman Sachs, Morgan Stanley, Jefferies, BofA Securities, Cantor Fitzgerald

**Securitization partners:** Goldman Sachs, JPMorgan, Jefferies, Barclays

**DART blockchain registry partners:** Goldman Sachs, Jefferies, Deutsche Bank, Texas Capital, 50%+ of top 20 independent mortgage banks

**Strategic:** Sixth Street ($200M equity JV providing $2B+ liquidity), Ondo Finance ($25M investment in YLDS infrastructure)

**Analyst coverage:** Mizuho (Outperform), Bernstein projects 25% non-bank HELOC market share by 2027

---

## 4. Collateral Quality & Credit Performance

### Borrower Profile

The PRIME warehouse exclusively holds HELOCs issued to prime US borrowers — homeowners with strong credit histories, high equity cushions, and conservative debt levels.

| Metric | Value |
|---|---|
| Weighted average FICO | 744-754 |
| Average home value | $709,085 |
| Average borrower income | $182,220-$195,252 |
| Combined LTV | 62-65% |
| Debt-to-income | 36.6% (max 50% per policy) |
| Weighted average coupon | 9.0-9.2% |
| Average loan size | ~$90,000 |
| Average borrower age | 52 |
| Loan type | Fixed-rate, fully amortizing |

For context: 744+ FICO places these borrowers in approximately the 60th percentile of US credit scores — firmly in the prime category, well above the subprime borrowers that drove 2008 losses.

### Historical Loss Performance

Figure's cumulative severe delinquency rate (180+ days past due) across **all vintages from 2019 through 2025 peaks below 1.75%**. This metric — effectively a proxy for default — is the standard measure used in structured finance.

Key observations from the static pool analysis:

- **All vintage curves flatten**: after sufficient seasoning, new delinquencies largely stop. The loss window is finite.
- **Recent vintages (2024-2025) track at or below prior cohorts**: no deterioration in newer originations despite macro headwinds.
- **Consistent across macro environments**: 2019 (pre-COVID), 2020 (COVID), 2022 (rate shock), 2024-2025 (elevated rates) — all perform within a tight band.
- **Realized cumulative gross loss across entirety of Figure's originations: <1.25%**

### Securitization Validation

The ultimate proof of collateral quality: HELOCs exiting the PRIME warehouse are sold into securitization trusts that **consistently receive AAA ratings** from S&P, Moody's, DBRS Morningstar, and KBRA. These external ratings confirm the underlying loans can withstand severe recession scenarios.

---

## 5. Safety Architecture & Investor Protections

### Structural Protections (Warehouse Level)

| Protection | How It Works |
|---|---|
| **Overcollateralization** | HELOCs valued at $1.03 enter at $1.00; max advance is $0.90 (90% LTV) |
| **30-day auto-markdown** | Any HELOC 30+ days delinquent is immediately marked to $0 |
| **Liquidation trigger** | At 93% LLTV breach, collateral is seized and auctioned on Figure Connect |
| **Full recourse** | Borrowers are licensed mortgage originators — legally liable beyond collateral |
| **Short duration** | ~42-day average hold period limits exposure window |
| **Hourly repricing** | Dutch auction every hour dynamically prices risk |

### Regulatory & Custody Protections (YLDS Level)

PRIME's underlying yield infrastructure (YLDS) is the **first SEC-registered yield-bearing stablecoin**, operating under the Investment Company Act of 1940 — the same framework governing mutual funds.

| Requirement | Status |
|---|---|
| SEC registration (N-8A) | Filed |
| Public prospectus | Available |
| Daily NAV calculation | SEC-mandated |
| Qualified custodian | UMB Bank (Fed-regulated, $70B+ AUC) |
| Independent directors | Required and in place |
| Audited reports (N-CEN) | Required |
| Contractual redemption rights | Enforceable in federal courts |
| SEC examination authority | Subject to |

**UMB Bank** — the custodian — is a 70-year-old Fed-regulated national bank overseen by the Federal Reserve and OCC. Client assets are held in segregated, bankruptcy-remote structures with daily reconciliation and independent verification.

### Capital Preservation Architecture

PRIME risk manifests primarily as **yield volatility, not capital loss**. The backing chain provides multiple layers of capital protection:

1. **wYLDS backing** — PRIME is 100% backed by wYLDS (on-chain verifiable)
2. **YLDS T-bill reserves** — wYLDS is 1:1 backed by YLDS, held in US Treasuries
3. **Demo Prime overcollateralization** — warehouse operates at 90% LTV with active markdown
4. **Multi-tier redemption** — DEX liquidity, 2-hour unstaking, wYLDS redemption, YLDS cash settlement
5. **Figure's $1.1B cash balance** — ultimate backstop from a profitable, public company

### Price Stability Track Record

Since launch (December 2025), PRIME has demonstrated stablecoin-like behavior:

- **Mean daily return:** +0.024% (aligned with 8% annual yield)
- **Standard deviation:** 0.18% (vs USDC 0.05%, USDe 0.40%, SOL 4.20%)
- **Maximum drawdown:** -0.52%, recovered in <4 hours
- **NAV tracking:** Within ±2% for 95% of trading history

---

## 6. Independent Risk Assessment

Allez Labs — a leading DeFi risk management firm — completed a comprehensive asset risk assessment of PRIME in January 2026.

### Overall Rating: 7.1/10 (A) — APPROVED

| Category | Weight | Score | Rating |
|---|---|---|---|
| **Overall** | **100%** | **7.1** | **A** |
| Market & Liquidity | 35% | 6.6 | BBB |
| Technical & Counterparty | 40% | 7.4 | A |
| Operational & Governance | 25% | 7.2 | A |

### Highest-Scoring Areas

| Sub-category | Score | Rating | Why |
|---|---|---|---|
| Dependency Resilience | 8.5 | AA | Fed-regulated UMB custody + Hastra's audited autonomous vault |
| Regulatory | 8.5 | AA | SEC 1940 Act — gold-standard investor protections |
| Dependency Quality | 8.0 | AA | Full T-bill backing, on-chain verifiable reserves, <0.10% expected annual loss |
| Team / Sponsor | 8.0 | AA | $1.1B cash, 58% net margins, 7-year through-cycle track record |

### Key Risk Factors Identified

| Risk | Assessment | Mitigant |
|---|---|---|
| Limited on-chain history | 40+ days without DeFi stress event | T-bill backing provides structural floor; Figure's 7-year track record |
| Bridge route novelty | Provenance ↔ Solana route 2 months old | Core Chainlink CCIP technology is 18 months old, $75B+ secured, zero exploits |
| DEX liquidity gap | $20M DEX vs $132M at-risk debt | Adequate for normal scenarios (99.5% probability); stretched in tail events only |
| Concentration | 90% of PRIME on Kamino; top 10 positions >50% of supply | Positive carry economics make this economically rational, not speculative |

### Assessment Conclusion

> "PRIME combines traditional finance credit discipline with DeFi capital efficiency. The positive carry economics and optimal utilization rates indicate healthy lending market dynamics rather than unsustainable speculation." — Allez Labs, January 2026

---

## 7. PRIME on Kamino Finance

### Why Kamino Matters

Kamino Finance is Solana's largest lending and borrowing protocol. PRIME's integration on Kamino is the primary venue where institutional and retail capital deploys into PRIME — approximately 90% of all PRIME supply sits on Kamino.

The Kamino PRIME market launched in December 2025 and became the protocol's largest RWA market within weeks.

### Market Size & Growth

| Metric | Dec 2025 | Jan 2026 | Feb 2026 |
|---|---|---|---|
| Total market size | $283M | $380M | **$550M** |
| Total borrowed | $123M | $167M | **$230M** |
| MoM growth | — | +34% | ~+45% |

This growth is driven **entirely by native yield demand** — no liquidity mining incentives, no token emissions, no artificial subsidies. The market grew from zero to $550M in under 3 months on the strength of the underlying product alone.

### How PRIME Multiply Works

Multiply is Kamino's one-click looping product. For PRIME, it works as follows:

1. Deposit PRIME as collateral (earning ~8% base yield)
2. Borrow stablecoins against it (paying ~5-7% interest)
3. Use borrowed stablecoins to buy more PRIME
4. Repeat — up to 9x leverage in a single transaction

The core economics: **positive carry**. Because PRIME yields (~8%) exceed stablecoin borrow costs (~5-7%), each layer of leverage adds net profit, arbitraging the spread between yield and funding cost.

PRIME market borrow utilization is capped at 90%. The borrow rate curve is engineered so that the loop remains profitable up to 97% utilization (see Multiply Safeguards below).

### Multiply Yield Performance

| Strategy | Leverage Range | Annualized Yield |
|---|---|---|
| PRIME base (no leverage) | 1x | ~8% |
| PRIME/USDC Multiply | 4.5x-9x | 11.3% – 21.0% |
| PRIME/CASH Multiply | 4.5x-9x | 9.9% – 15.5% |

**86% of all PRIME supplied on Kamino flows through Multiply vaults.** This is the dominant use case — and the primary source of demand for PRIME as DeFi collateral.

### Independent Backtest Results

On Chain Times backtested **2,133 strategy variants across 33 assets on Kamino Multiply** over 30 days (Dec 31 – Jan 29, 2026):

- **87% of all tested strategies were profitable**
- **PRIME was the most popular and sought-after asset on Multiply**, with both pairs consistently reaching capacity limits as soon as liquidity became available
- **From 4.5x leverage onward, PRIME outperformed all other RWAs in the dataset**
- **RWAs delivered the cleanest risk-adjusted returns** — stable, scaling cleanly with leverage, driven by native yield rather than price volatility

> "PRIME is currently one of the most promising yield-bearing tokens on the market, offering a base yield of 8%, and the interest it has attracted clearly reflects this sentiment." — On Chain Times, Feb 2026

### Multiply Safeguards

Three layers of structural protection ensure Multiply positions remain viable across market conditions:

**1. Utilization-capped borrow rates.** Borrow utilization on the PRIME market is capped at 90%. The borrow rate curve is engineered so that the Multiply loop remains profitable up to 97% utilization — a 7% buffer above the cap. Even in scenarios where sudden liquidity withdrawals push utilization above the 90% target, the positive carry spread is preserved and positions remain net-positive.

**2. 3% LTV buffer at max leverage.** Max borrow LTV is 88%; liquidation LTV is 91%. Even at maximum leverage, there is a 3% buffer to the liquidation threshold. This provides a margin of safety against both borrow rate volatility and potential PRIME price fluctuations — ensuring that positions are not immediately at risk even under adverse conditions.

**3. Verified historical performance.** Real historical data confirms that Multiply positions have maintained profitability across all observed market conditions since launch. Investors can independently verify performance at any leverage level using Kamino's live backtesting tool at [kamino.com/multiply](https://kamino.com/multiply).

*[Chart: PRIME Multiply backtested performance at different leverage levels — real historical data]*

---

## 8. Risk-Reward Framework on Kamino

### Junior vs Senior Exposure

The Kamino PRIME market naturally creates a **tranche-like risk structure**:

| Role | What they do | Risk profile | Yield |
|---|---|---|---|
| **Multiply users (Junior)** | Lever up PRIME to amplify yield | First loss — liquidated first if PRIME declines | 11-21% APY |
| **Stablecoin lenders (Senior)** | Supply USDC/CASH for Multiply users to borrow | Protected by Multiply users absorbing losses first | 4.8-5.6% APY |
| **PRIME holders (Base)** | Hold PRIME without leverage | Direct exposure to warehouse yield | ~8% APY |

Investors choose their exposure profile based on their risk appetite and conviction in PRIME's credit quality. This self-selecting structure means that higher-risk takers (loopers) provide a buffer for lower-risk participants (lenders).

### Liquidation Safety

Kamino's PRIME market parameters:

| Parameter | Value |
|---|---|
| Maximum borrow LTV | 88% |
| Liquidation LTV | 91% |
| Buffer at max leverage | 3% |
| Market type | Isolated (ring-fenced from other Kamino markets) |

The 88% max LTV is appropriate given PRIME's structural stability as T-bill backed collateral. The 3% buffer to the 91% liquidation threshold means that even at maximum leverage, a position has meaningful headroom. Unlike volatile crypto assets, PRIME's risk is yield fluctuation, not capital impairment — liquidations would only occur in tail scenarios such as a fundamental PRIME failure, bridge exploit, or Figure insolvency.

### Position Distribution (Allez Labs, January 2026)

| LTV Bracket | Implied Leverage | Positions | Debt | % of Total Debt |
|---|---|---|---|---|
| 86-91% | ~7x-11x | 65 | $13.7M | 9% |
| 81-86% | ~5x-7x | 346 | $118.6M | 77% |
| 71-81% | ~3.5x-5x | 213 | $19.9M | 13% |
| <71% | <3.5x | 75 | $1.0M | 1% |

The majority of capital ($118.6M) sits in the 81-86% LTV range at ~5-7x leverage — the sweet spot where positive carry is meaningfully amplified while maintaining a comfortable buffer to the 91% liquidation threshold. PRIME's T-bill backing means these positions are unlikely to face the violent drawdowns that liquidate typical crypto collateral.

---

## 9. Scaling Capacity & Ecosystem

### Capacity Headroom

PRIME's growth is not supply-constrained. Figure's origination machine provides substantial runway:

| Metric | Value |
|---|---|
| FY2025 total marketplace volume | $8.4B |
| Estimated Demo Prime eligible volume | $1.25-1.5B |
| Current PRIME market cap | ~$300M |
| Utilization of theoretical capacity | <25% |
| Current facility matched balance | $253M (+23% MoM) |
| Current borrower demand | $288M (exceeds lender supply) |

Demand currently exceeds supply — the facility is constrained by lender capital, not borrower demand. This is a healthy dynamic indicating genuine economic need for the warehouse function.

### RWA Consortium (Launched Dec 2025)

PRIME is supported by a purpose-built ecosystem of institutional-grade infrastructure partners:

| Partner | Role |
|---|---|
| **Kamino Finance** | Exclusive on-chain lending & Multiply |
| **Chainlink** | Oracle infrastructure + CCIP cross-chain bridge |
| **Raydium** | DEX liquidity ($75M CLMM pools) |
| **CASH (Phantom/Bridge/Stripe)** | Stablecoin for low-cost borrowing |
| **Gauntlet** | Risk management (~$140M managed across Kamino) |
| **Exponent Finance** | Yield stripping / fixed rate markets |

### Audit & Technical Security

| Item | Status |
|---|---|
| Pre-launch audit | Informal Systems (Sept-Nov 2025), all critical findings remediated |
| Operational track record | 75+ days, $300M TVL, zero incidents |
| Bridge infrastructure | Chainlink CCIP — $75B+ secured, zero exploits |
| Oracle | Dual-layer: SEC-mandated daily NAV + Chainlink on-chain deterministic pricing |
| Proof of reserves | Real-time, on-chain verifiable at hastra.io |
| Monitoring | 24/7 via DataDog + PagerDuty |

---

## 10. Summary & Key Takeaways

### Why PRIME

1. **Real yield from real economic activity.** 8-9% from US homeowner interest payments — not token inflation, not trading fees, not speculation.

2. **Institutional-grade credit quality.** 744+ FICO borrowers, 62% LTV, <1.75% peak delinquency across 7 years and all macro environments. AAA securitization exit validates collateral quality.

3. **Capital preservation by design.** 100% T-bill backed via SEC-registered YLDS. Risk manifests as yield volatility, not capital loss. UMB Bank custody with full segregation.

4. **Structural short duration.** ~42-day warehouse hold period. Exposure rolls continuously — no long-duration credit risk. By the second borrower payment, the loan has already been securitized.

5. **Sponsor strength.** Figure (Nasdaq: FIGR) — $22B+ originated, $505M+ revenue, $1.1B cash, 58% net margins, 7-year track record through COVID, rate hikes, and banking crises.

6. **Regulatory clarity.** SEC 1940 Act registration, daily NAV, qualified custody, contractual redemption rights enforceable in federal court. Best-in-class for on-chain assets.

7. **DeFi composability on Kamino.** Multiply amplifies yield to 11-21% via positive carry leverage. $550M market built in <3 months with zero incentives. Most popular RWA on Solana.

### Key Risks

| Risk | Probability | Severity | Mitigant |
|---|---|---|---|
| On-chain operational immaturity | Low | Medium | T-bill backing provides structural floor |
| Bridge exploit (Provenance ↔ Solana) | Very low | High | Chainlink CCIP core tech proven; rate limiters and circuit breakers in place |
| Figure financial deterioration | Very low | High | $1.1B cash, profitable, Nasdaq-listed, diversified origination channels |
| Housing market severe correction | Low | Medium | 62% CLTV provides 38% equity cushion; 42-day exposure window limits impact |
| DEX liquidity insufficient in stress | Low | Medium | Multi-tier redemption (DEX → unstaking → wYLDS → YLDS → cash); adequate for 99.5% scenarios |

### Data Sources

- Figure Technology Solutions SEC filings and earnings presentations (Q3 2025, FY2025 preliminary)
- Figure Certificate Company SEC registration (N-8A) and prospectus
- Allez Labs Asset Risk Assessment — PRIME (January 2026)
- Hastra Proof-of-Reserves (real-time, on-chain)
- Informal Systems Audit Report (September-November 2025)
- On Chain Times independent analysis (December 2025, February 2026)
- Kamino Finance on-chain data
- DBRS Morningstar, S&P, Moody's, KBRA securitization ratings

---

*This document is provided for informational purposes only and does not constitute financial, investment, or legal advice. Prospective investors should conduct their own due diligence and consult qualified advisors before making investment decisions.*
