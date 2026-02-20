# Due Diligence Questionnaire

Send to asset issuers/teams to gather information for risk assessment.

## Instructions for Recipients

This questionnaire helps us evaluate your asset for listing as collateral on lending protocols. Please complete all relevant sections thoroughly. Skip sections not applicable.

**Submission:** Return completed questionnaire with supporting documents to risk@allez.xyz

---

# 1. Overview

| Field | Response |
| --- | --- |
| Asset/Token Name | Prime |
| Ticker Symbol | PRIME |
| Chain(s) Deployed | Solana live, EVM + others soon |
| Contract Address(es) | 3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 |
| Website | https://hastra.io/prime |
| Documentation URL | https://help.hastra.io/ |
| X | @HastraFi |

**Asset Type:**
- ☐ Native token
- ☐ Liquid Staking Token (LST)
- ☐ Wrapped / Bridged asset
- ☐ Fiat-backed stablecoin
- ☐ Crypto-backed stablecoin
- ☐ Yield-bearing stablecoin
- ☐ RWA token
- ☐ Other: ___

**Brief Description:**
*In 2-3 sentences, what is this asset and what problem does it solve?*

PRIME is a permissionless, yield-bearing receipt token representing staked wYLDS, acting as a tokenized loan receivable into the Democratized Prime lending platform. It aims to democratize prime brokerage by solving the problem of restricted access to institutional-grade yield, allowing DeFi users to replace major banks as warehouse lenders against real-world Home Equity Lines of Credit (HELOCs). This structure creates a bridge between on-chain liquidity and off-chain assets, offering users stable, uncorrelated, composable, real-world yield while enabling liquid restaking and leverage strategies within the DeFi ecosystem.

**Why should this asset be listed as collateral?**
*Describe expected borrowing demand and utility.*

PRIME functions as a superior collateral asset by tokenizing institutional-grade, over-collateralized HELOCs from prime borrowers (FICO 750+), thereby generating stable, non-inflationary yield derived from real homeowner interest payments rather than speculative emissions. The asset is secured by a rigorous risk mitigation framework involving a bankruptcy-remote trust structure and short-duration exposure (~42 days before securitization), and backed by automated liquidations via Bids Wanted in Competition (BWIC) auctions if LTV ratios breach become too high and steady takeout via the institutional securitization market.

Borrowing demand is expected to be robust, driven primarily by leverage looping strategies on DeFi protocols like Kamino where investors deposit PRIME to borrow stablecoins and mint additional PRIME to amplify the asset's base yield.

PRIME's utility lies in its ability to bridge TradFi with DeFi ecosystems, providing a liquid, permissionless vehicle for users to access institutional-grade RWA income while maintaining full composability within DeFi markets.

---

# 2. Market & Liquidity

## 2.1 Market Data

| Metric | Value | Source |
| --- | --- | --- |
| Current Price | ~$1.02 | https://hastra.io/proof-of-reserves |
| Market Cap | ~$263M | https://defillama.com/rwa/asset/prime |
| Circulating Supply | ~258M | https://solscan.io/token/3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 |
| Total Supply | ~258M | https://solscan.io/token/3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7 |
| 24h Trading Volume | $3.8M | https://birdeye.so/solana/token/3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7?tab=markets |
| All-Time High | $1.0181905133252505 (2026-02-05T09:01:59.042Z) | https://docs.mobula.io/rest-api-reference/endpoint/token-ath?playground=open |
| All-Time Low | $1.0059348412595623 (2025-12-18T20:54:32.900Z) | https://docs.mobula.io/rest-api-reference/endpoint/token-ath?playground=open |

## 2.2 Liquidity

**DEX Liquidity:**

| Pool/Venue | Chain | TVL | Daily Volume | Link |
| --- | --- | --- | --- | --- |
| Raydium PRIME/CASH | Solana | ~$20M | ~$5M | https://kamino.com/liquidity/8aqfq1nidL9awmbyNLttZBPmKNznx9bKiAri9RVbRtSm |

**CEX Listings:**

| Exchange | Pair | 24h Volume | Order Book Depth (±2%) |
| --- | --- | --- | --- |
| | | | |

**Do you have active liquidity incentive programs?**
- ☐ Yes - describe below
- ☐ No
- ☐ Planned - describe timeline

*Details:*

## 2.3 Redemption Mechanism

**How can holders redeem the underlying asset?**
- ☐ Atomic (instant on-chain)
- ☐ Queued (FIFO or batched)
- ☐ Delayed (T+X settlement)
- ☐ No direct redemption
- ☐ Other: ___

| Question | Response |
| --- | --- |
| Settlement Time | ~2h |
| Minimum Redemption | No minimum |
| Maximum Redemption | Unlimited |
| Asset repriced during redemption? | No |
| Redemption Fee | 0 |
| KYC Required? | No |
| Geographic Restrictions? | USA, Belarus, the Central African Republic, The Democratic Republic of Congo, the Democratic People's Republic of Korea, the Crimea, Donetsk People's Republic, and Luhansk People's Republic regions of Ukraine, Cuba, Iran, Libya, Somalia, Sudan, South Sudan, Yemen, Zimbabwe |

**Are there any gates, capacity limits, or conditions that could delay redemption?**

- **Unstaking cooldown**: The protocol currently enforces a 24h unstaking period for PRIME. However, we are working on reducing it to 2h only (including the hourly auction cycle time).
- **Hourly auction cycle**: A redemption request waits for the current one-hour auction period to end before the lending offer is withdrawn from Demo Prime (max 59min).
- **Batching minimum**: There is currently an operator-managed batching process for redeeming wYLDS to USDC, with a minimum of $2k per batch.
- **Banking hours**: The conversion of YLDS to USDC may face delays during non-banking hours. However, Figure is currently using its balance sheet to smooth these redemption requests during non-banking hours.
- **Liquidity shortages**: If there is insufficient liquidity for a redemption, it enters a queue. In this case, the interest rate for the facility automatically jumps to 30% in order to attract new capital or force the borrower to pay down the loan. The redemption remains pending until that new liquidity arrives or the borrower repays.

Note that the above points only apply to direct redemptions via Hastra. For immediate liquidity, users can rely on secondary market pools like Raydium.

**Describe the withdrawal process and the functions involved**

**Full Redemption Flow:**

1. **Request:** User initiates a request to unstake PRIME tokens via the Hastra protocol
2. **Unstaking:** The request sits in a queue waiting for the next auction period to end.
3. **Offer Withdrawal:** Once unbonded, the protocol withdraws the associated lending offer from the Democratized Prime HELOC pool.
4. **Settlement:** The underlying collateral is repurchased by the borrower (or refinanced by new lenders), returning YLDS/wYLDS
5. **Conversion:** YLDS is redeemed back into USDC
6. **Bridging:** USDC is sent to the user's Solana wallet via Circle's CCTP (different from actual bridges)

**Transaction Example:**
A user holds 100,000 PRIME and requests redemption on Solana.
1. The smart contract locks the PRIME
2. The protocol signals Demo Prime to remove 100,000 YLDS worth of liquidity
3. At minute 59:59 of the current hour, the Dutch auction proceeds without the withdrawn 100,000 YLDS offer
4. The protocol receives the settlement funds, converts them to USDC, and triggers a CCTP transfer
5. The user receives ~100,000 USDC (plus accrued yield, minus 50bps annualized platform fees) in their wallet

## 2.4 Historical Stability

*How volatile is your asset, what are the max drawdowns observed?*

Both wYLDS and PRIME are always redeemable from the smart contracts at NAV. Price and liquidity in the secondary LP markets varies. There have not been any drawdowns since launch in November 2025.

*Describe behavior during major market events (COVID crash, UST collapse, FTX, etc.):*

**If your asset tracks a peg or NAV, describe major deviation events:**

| Event | Date | Deviation | Duration | Cause | Resolution |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

---

# 3. Technical & Smart Contracts

**Github Repository:** https://github.com/provenance-io/hastra-sol-vault

## 3.1 Architecture Overview

**Describe how the asset works technically:**
*Include yield accrual mechanism if applicable.*

**Token layers (Solana)**
- **wYLDS (base layer):** the vault-mint program accepts USDC deposits and issues wYLDS at a 1:1 ratio, acting as a custodial wrapper for YLDS, the underlying SEC-registered stablecoin on Provenance
- **PRIME (share layer):** users stake wYLDS into the vault-stake program to receive PRIME, a share-based token representing a pro-rata claim on the staked wYLDS and accrued interest.

**Bridging & Lending (cross-chain)**
- USDC is bridged b/w Figure Markets and Solana via Circle's CCTP
- USDC is used to purchase YLDS on Figure Markets
- YLDS is lent into the Demo Prime platform
- An hourly Dutch auction matches lenders (PRIME holders) with borrowers (HELOCs originators) to determine the clearing interest rate

**Yield Accrual Mechanism:**

Prime utilizes a non-rebasing, appreciating exchange rate mechanism rather than distributing airdrops or increasing token counts. Yield is accrued as follows:
1. **Continuous minting:** as interest is earned from Demo Prime (denominated in YLDS), it is bridged back to Solana
2. **Vault inflation:** the vault-stake program executes a CPI to the vault-mint program to mint new wYLDS tokens directly into the vault-stake vault
3. **Price appreciation:** the above increases the total amount of wYLDS in the vault (numerator) while the supply of PRIME tokens (denominator) remains constant (unless users stake/unstake). Consequently, the exchange rate of PRIME increases, meaning 1 PRIME becomes redeemable for more wYLDS over time
4. **Realization:** while the price of PRIME increases in units of wYLDS, users realize this yield only when they unstake PRIME to receive their original principal plus the accrued wYLDS or when they sell PRIME in secondary markets

**Provide or link a system diagram:**

## 3.2 Contract Inventory

| Contract Name | Chain | Address | Purpose | Upgradeable? |
| --- | --- | --- | --- | --- |
| vault-mint | Solana | 9WUyNREiPDMgwMh5Gt81Fd3JpiCKxpjZ5Dpq9Bo1RhMV | Accepts USDC and issues wYLDS | Yes |
| vault-stake | Solana | 97V7JsExNC6yFWu5KjK1FLfVkNVvtMpAFL5QkLWKEGxY | Accepts wYLDS and issues PRIME | Yes |

## 3.3 Upgradeability & Access Control & Flow

| Question | Response |
| --- | --- |
| Are contracts upgradeable? | Yes |
| Upgrade mechanism (proxy type) | Native upgradability via BPF Loader |
| Timelock duration | None |
| Who controls upgrades? | Engineering leadership |
| Multisig configuration (X of Y) | |
| Multisig signer identities | |

**List all privileged functions permissions & responsibilities and who can call them:**

| Function | Permission Level | Controlled By | Timelock? |
| --- | --- | --- | --- |
| | | | |

**List all significant wallets and their roles:**

| Wallet | Type | Responsibilities |
| --- | --- | --- |
| | | |

**Explain the flow of funds within the system:**

| Method | Description | Parameters | Requirements |
| --- | --- | --- | --- |
| | | | |

## 3.4 Security

**Audits:**

| Auditor | Date | Scope | Critical/High Findings | Mitigations | Report Link |
| --- | --- | --- | --- | --- | --- |
| Informal Systems | November 25th, 2025 | | | | https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf |

**Bug Bounty:**

| Platform | Max Reward | Categories Covered | Link |
| --- | --- | --- | --- |
| | | | |

**Runtime Monitoring:**
- ☐ Yes: ___
- ☐ No

**Historical Security Incidents:**
*List any exploits, hacks, or security incidents. Include date, impact, root cause, and resolution:*

## 3.5 Oracle & Pricing

| Question | Response |
| --- | --- |
| Primary price feed source | Chainlink |
| Feed update frequency | Continuous |
| Deviation threshold | |
| Fallback mechanism | |
| Any custom oracle logic? | |

**Is there a yield accrual or value generation mechanism?**

Already explained above in 3.1

**For yield-bearing / rebasing assets:**

Exchange Rate = Total wYLDS in vault / Total PRIME in circulation

**For RWA / NAV-based assets:**

| Question | Response |
| --- | --- |
| How is NAV determined? | Exchange rate formula |
| Who attests to valuation? | Chainlink |
| Update frequency | Realtime |
| Third-party auditor? | |

---

# 4. Dependencies & Counterparties

## 4.1 Custody

*Complete if asset involves custody of underlying assets (wrapped tokens, stablecoins, RWA)*

| Custodian | Assets Held | Jurisdiction | Regulatory Status |
| --- | --- | --- | --- |
| | | | |

| Question | Response |
| --- | --- |
| Is there proof of reserves? | Yes |
| PoR frequency and provider | Hastra realtime |
| Insurance coverage | |
| Segregation of client assets? | |
| Redemption method fiat/onchain | |
| Time to redemption & priority | |

## 4.2 Operators

*Complete if asset involves operators (LSTs, restaking)*

| Question | Response |
| --- | --- |
| Operator selection process | |
| Number of operators | |
| Client diversity | |
| Geographic distribution | |
| Historical performance (attestation rate) | |
| Slashing history | |
| Slashing protection mechanism | |

## 4.3 Backing & Credit Quality

*Complete if asset has backing that can be impaired (yield-bearing, RWA, credit products)*

**Backing Composition:**

| Asset Category | Allocation % | Credit Quality | Notes |
| --- | --- | --- | --- |
| HELOCs | 100 | 750+ | |

| Question | Response |
| --- | --- |
| Total collateralization ratio | 108% |
| Minimum collateralization | 95% |
| Number of counterparties/borrowers | |
| Largest single exposure | |
| Historical default rate | |
| Loss history | |
| Tranching structure? | |

## 4.4 Reserve & Loss Protection

*Complete if applicable*

| Question | Response |
| --- | --- |
| First-loss buffer size ($ and %) | |
| Buffer replenishment mechanism | |
| Insurance fund | |
| Who bears losses first? | |
| Historical drawdowns on buffer | |

## 4.5 Legal Recourses

**Enforcement jurisdiction:** BVI

**Default resolution procedure:** Under the trust structure, if a Borrower were to default, the interests of the lenders in Democratized Prime would be effectuated by the independent administrator and liquidation agent. It would be the responsibility of the independent administrator and liquidation agent to conduct a BWIC Auction on Figure Connect and distribute the proceeds pro-rata to the lenders. The liquidation agent has no discretion to do anything except liquidate the assets in the trust and forward that pro-rata share to the lenders following the auction.

**Token holder claim rights:** pari passu lender

---

# 5. Operational & Governance

## 5.1 Team

**Founding/Core Team**

| Question | Response |
| --- | --- |
| Team size | |
| Team tenure (avg) | |
| Key person dependencies | |

| Name | Role | Background | LinkedIn/Twitter |
| --- | --- | --- | --- |
| | | | |

## 5.2 Legal Entity

| Field | Response |
| --- | --- |
| Legal Entity Name | Signum, Ltd |
| Jurisdiction | British Cayman Islands |
| Entity Type | Limited Company |
| Date of Incorporation | September 22, 2025 |
| Registered Address | 171 Main Street, PO Box 92, Road Town, Tortola, British Virgin Islands, VG 1110. |
| Beneficial Owners | Provenance Cayman Foundation 100% |

**Provide organizational chart linking on-chain and off-chain entities**

Signum Limited is 100% owned by Provenance Cayman Foundation.

## 5.3 Operations & Underwriting

**Describe your operational set up and readiness**

**Internal risk appetite, underwriting guidelines & risk model**

**Audit & compliance processes**

**Documentation & Transparency practices; frequency of reporting**

**Where is your data:** DeFiLlama: https://defillama.com/protocol/hastra

## 5.4 Incident Response

**Describe your incident response process:**

| Question | Response |
| --- | --- |
| 24/7 monitoring? | Yes via Data Dog and Pager Duty alerts |
| On-call rotation? | |
| Communication channels | Slack, Email and Phone |
| War room process | Via Google Meet |
| Post-mortem practice | Yes |

**List past incidents and how they were handled:**

| Date | Incident | Severity | Response Time | Resolution | Post-Mortem Link |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

## 5.5 Regulatory & Compliance

| Question | Response |
| --- | --- |
| Regulatory licenses held | |
| Jurisdictions of operation | |
| KYC/AML requirements | |
| Ongoing regulatory dialogue | |
| Past regulatory actions | |
| Legal opinions obtained | |

## 5.6 Governance

**Top 10 Token Holder Concentration:** 99.32% (Kamino Pools)

| Question | Response |
| --- | --- |
| Governance model | |
| Governance token (if any) | |
| Proposal process | |
| Voting mechanism | |
| Quorum requirements | |
| Timelock on governance actions | |
| Emergency powers - who has them? | |
| Emergency powers - what can they do? | |

---

# 6. Yield Strategy Details

*Complete only if asset generates yield from active strategies*

## 6.1 Strategy Overview

**Describe the yield generation mechanism in detail**

| Question | Response |
| --- | --- |
| Strategy objective | |
| Target return range | |
| Benchmark (if any) | |
| Return type (stable/variable/appreciation) | |

## 6.2 Strategy Risks

**External protocols/venues used:**

| Protocol | Purpose | Exposure | Risk Monitoring |
| --- | --- | --- | --- |
| | | | |

**Risk controls:**

| Control | Description |
| --- | --- |
| Position limits | |
| Utilization caps | |
| Max LLTV | |
| Drawdown limits | |
| Concentration limits | |

**How is yield strategy risk monitored and controlled?**

## 6.3 Stress Scenarios

**Describe internal stress testing and adverse scenario planning**

**How would you handle:**

| Scenario | Response Plan |
| --- | --- |
| Bank run / mass redemptions | |
| Strategy counterparty default | |
| Oracle failure | |
| Smart contract exploit in underlying | |
| Severe market drawdown | |

## 6.4 Performance & Transparency

| Question | Response |
| --- | --- |
| Public performance dashboard | |
| Reporting frequency | |
| Management fee | |
| Performance fee | |
| External attestation of returns | |

---

# 7. Supporting Documents

Please provide links to:

| Document | Link | Notes |
| --- | --- | --- |
| Whitepaper / Documentation | https://help.hastra.io/ | |
| Audit Reports | https://hastra.io/Hastra_vault-mint_&_vault-stake_Solana_Programs_Summary_Audit_Report.pdf | |
| Legal Opinions | | |
| Proof of Reserves | https://hastra.io/proof-of-reserves | |
| Governance Forum | | |
| Risk Dashboard | | |
| Analytics (DeFiLlama, Dune, etc.) | https://defillama.com/protocol/hastra | |
| Previous Risk Assessments | | |

---

# 8. Additional Information

**Is there anything else we should know about this asset?**

**What are the biggest risks you see with this asset?**

The underlying assets are HELOCs secured by US residential real estate owned by prime US borrowers. While a severe housing market correction could impact collateral values (increasing LTVs), this cohort of US homeowners has a demonstrated history of strong creditworthiness. Additionally, the Figure credit box enforces conservative total debt to income thresholds (weighted avg. 62%) which provides meaningful equity value cushion.

**What differentiates this asset from similar assets?**

PRIME differentiates itself from similar yield-bearing or RWA tokens through its underlying asset class, liquidity structure, and source of yield. While many RWA tokens tokenize treasuries or corporate debt, and many DeFi yields rely on inflationary emissions, PRIME uniquely securitizes high-quality consumer credit into a liquid, hourly-tradable instrument.

The yield is derived entirely from the interest payments made by homeowners, not from token emissions or speculative trading fees. This provides a sustainable real yield that accrues via a non-rebasing exchange rate mechanism rather than increasing the token supply.

The loans are originated to prime borrowers (FICO 750+) and are secured by residential real estate in the US, offering exposure to productive debt rather than government securities or speculative crypto markets.

Through the Hastra protocol, PRIME acts as a liquid restaking token on Solana that bridges liquidity to the regulated Democratized Prime marketplace on the Provenance Blockchain. This allows DeFi users to access institutional warehouse lending yields without direct interaction with the off-chain structures.

---

**Submitted by:**

| Field | Response |
| --- | --- |
| Name | Firas Dahi |
| Role | Associate |
| Date | February 10th, 2026 |
| Email | fdahi@figure.com |
| Telegram | @fdahi9 |
