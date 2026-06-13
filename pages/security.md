# Security

> **Hero**
> # Every security claim on this page resolves to something you can check yourself
> Kamino custodies institutional capital across credit, liquidity, and yield. Every layer that touches that capital is audited by independent firms, mathematically proven where a single arithmetic error would be catastrophic, monitored in real time, and published to dashboards anyone can open. Three years live in production, zero security incidents, and zero bad debt across $120M+ of liquidations.
>
> **[Contact sales →](./contact-sales.md)**  ·  [Launch App →](./kamino-app.md)

---

## The record

Four numbers carry the diligence, and each one resolves to something you can open and verify.

| | |
|---|---|
| **20** | external audits across the protocol, by 5 independent firms, with **0** critical vulnerabilities found |
| **4** | formal verifications — properties proven to hold for every possible input |
| **3 years** | live in production with no security incident |
| **$0** | bad debt, across **$120M+** liquidated over **100,000+** liquidations |

These are verifiable. [The audit reports](#the-audit-program) are public. [The liquidation history](#the-liquidation-record) is on-chain. The contracts running today are reproducibly built from open source, so anyone can confirm the deployed program matches the audited code. Two live dashboards — **multisig.kamino.fi** and **oracles.kamino.fi** — show the governance and pricing layers operating in real time.

---

## The audit program

Twenty external audits across the protocol, conducted by five independent firms that specialize in Solana and smart-contract security, including **OtterSec, Certora, Sec3, and Offside Labs**. Across all of them, **zero critical vulnerabilities** have been found in production code. Eight of the twenty are on [Scope](./scope.md), the pricing layer, where a single bad price would move every market at once.

Auditing happens continuously. Kamino runs a rolling code-audit practice with standing security-firm engagements: new pull requests and codebase changes are reviewed before they reach production, so the audited surface keeps pace with the code with no once-a-year snapshot to fall behind. On top of human review, **Ackee Blockchain** runs continuous fuzzing — large-scale property-based testing that searches for invariant violations across the protocol's state space.

Every report is published. Diligence teams read the actual findings, the severity ratings, and the resolutions for themselves.

---

## Formal verification

For the parts of the protocol where a single arithmetic error would be catastrophic, audits are backed by formal verification — mathematical proof that a contract property holds under every possible input, across the entire state space.

Four verifications are complete, by **Certora** and **OtterSec**, across the lending engine, the lending vaults, and the limit-order system. One of the proven properties: a borrower can never withdraw more value than the collateral backing their loan. The proof holds for every execution path through the code and every input the contract can receive, checked mechanically by the prover. The lending math that decides whether a position is solvent carries a mechanical proof that holds across the entire input space, so its correctness is established for every case the contract can encounter.

---

## Open source and verifiable builds

The core protocol is open source — the lending engine, the vault engine, the limit-order infrastructure, and the Scope oracle. Anyone can read the code that runs the protocol.

It goes one step further than open source. The on-chain programs are **reproducibly built**: the deployed executable can be rebuilt from the published source and byte-for-byte matched against what is live on Solana. An auditor reads the source, an auditor verifies the build, and the same code is what runs in production. The chain of trust closes.

---

## The bug bounty

A **$1.5M bug bounty** runs continuously through **Immunefi**, a leading security bounty platform. Independent researchers are paid to find what internal review and external audits might miss, with the highest rewards reserved for the most severe classes of vulnerability. The program is permanent and open.

---

## Oracle resilience: pricing that holds

Every credit decision, every liquidation, every vault NAV depends on one thing being right: the price. Kamino's pricing layer, [Scope](./scope.md), is engineered so that a single oracle failure leaves the published price intact. **Eight of the protocol's twenty audits** are on Scope, **$19.33B** in value has been priced through it, with **zero oracle exploits** since launch.

Scope aggregates price data from four independent providers — **Chainlink Data Streams, Pyth, Switchboard, and RedStone** — into a single validated feed per asset. Each asset's published price requires agreement across those providers before it goes live, so securing billions in deposits rests on four independent sources confirming the same number. Before any price is published, Scope runs it through a guard stack:

- **Staleness checks** reject prices that haven't updated recently enough.
- **Deviation checks** reject prices that move further than the configured band.
- **Cross-provider consistency** requires the sources to agree within a hard limit before a price is accepted.
- **Automatic fallback** routes to the next-best source the instant a provider fails validation or goes stale — self-healing, with no manual intervention.

This guard stack is also the scam-wick defense. A momentary, manipulated price spike on a thin venue is filtered out by the averaging and divergence limits before it can trigger a liquidation. Pricing can even be configured so a position holds through a brief depeg without being liquidated.

The same engine prices tokenized assets on their own terms: it tracks equity market hours and halts, corporate-action windows, and NAV pause signals, and runs proof-of-reserves guards that freeze an asset's usable price if its on-chain supply spikes against its own history, defending against an unbacked mint. Off-Solana collateral — tokenized gold, ETH-native assets — is liquidated and rebalanced on deep Ethereum venues through the [cross-chain](./cross-chain.md) bridge, so a position backed by an asset that doesn't trade on Solana can still be closed out safely at a true price.

Watch all of it operate live at **oracles.kamino.fi**: every feed, every source, feed health, and update activity in real time. The mechanics behind it are detailed on the [Scope](./scope.md) page.

---

## The liquidation record

A lending protocol is only as safe as its ability to close out a bad position before it becomes a loss. Kamino has liquidated **more than $120M across 100,000+ liquidations with $0 in bad debt**, including **55,649 in a single 48-hour SOL crash**. The [liquidation engine](./liquidation-engine.md) is the reason.

It works in layers. Standard auction liquidations close routine positions efficiently. Soft liquidations and auto-deleverage handle the harder cases: when an asset's market liquidity collapses to the point that a normal liquidation would push losses onto lenders, or when an asset's fundamental quality deteriorates, the protocol can unwind exposure to that asset in an orderly, protocol-wide process. Borrowers get a **72-hour margin-call window** to restructure with no penalty before deleveraging begins, with the risk council retaining discretion to compress that window when lenders face urgent risk. Deleveraging proceeds from the highest-LTV positions down, and the penalty is capped at the level of a standard liquidation. Throughout, only borrowers see their exposure reduced; lender balances stay whole, which is what preserves solvency.

Behind the liquidation engine sits a funded backstop. Curated vaults carry **first-loss capital**: the curator stakes their own capital into the vault's insurance pool, locked under a 30-day cooldown so they cannot exit ahead of depositors, and **Kamino matches it up to $250K per vault**. When a vault takes a loss, that capital absorbs it before any depositor is touched. The $0-bad-debt record across $120M is the outcome of the liquidation layers and this economic backstop working together: the engine closes positions before they sour, and the first-loss pool stands behind the rare case where it can't.

Fixed-rate and fixed-term positions add maturity liquidations: a term loan that isn't repaid or rolled at maturity is closed on schedule. The full mechanism, including the historical incidents it was designed to prevent, lives on the [liquidation engine](./liquidation-engine.md) page.

---

## Custody and proof of reserves

Institutional capital often needs to stay with a qualified custodian. Kamino's [custodial borrowing](./custodial-borrowing.md) lets an institution borrow on-chain against assets held at **Anchorage Digital** through a tri-party account-control agreement, under which Kamino's SPV holds a first-priority security interest on behalf of the liquidity providers. **Chainlink Proof of Reserves** attests the custodian's balances on a rolling basis, anchoring the on-chain position to the assets that back it. Where the collateral is an off-Solana asset, the [cross-chain](./cross-chain.md) bridge closes it out on the venue where it actually trades.

[Institutional Yield](./institutional-yield.md) carries its own transparency framework. Depositors see per-loan detail — collateral asset, loan amount, collateral value, and LTV for every active loan — sourced directly from the lending operation, plus portfolio-level weighted-average LTV and total collateral value. An **independent accounting firm attests monthly** to loan balances outstanding, collateral coverage, and portfolio health, and the underlying lending operation reports to the Financial Market Authority Liechtenstein (FMA). The collateral is overcollateralized BTC, priced through Scope, and the vault carries the same first-loss capital and safety controls described in the [vault engine](./vault-engine.md).

---

## The risk apparatus

A dedicated risk team and external risk consultants run the parameters that keep markets solvent before any liquidation is ever needed. The apparatus runs as a continuous control cycle: Value-at-Risk and volatility modeling, together with price-shock scenario analysis, calibrate each market's loan-to-value and liquidation thresholds; those settings are published on a live dashboard, monitored against the book in real time, reviewed monthly, and re-tuned as conditions change — all of it upstream of the liquidation engine ever firing.

- A **live risk dashboard** publishing per-asset risk assessment across liquidity, volatility, market depth, smart-contract risk, and counterparty exposure.
- A **monthly risk report** on portfolio health and parameter adequacy.
- **Value-at-Risk** analysis and volatility modeling that calibrate loan-to-value and liquidation thresholds per asset.
- **Price-shock scenario analysis** that stress-tests the book against severe market moves.

Risk settings move with the market. Every market carries around 50 parameters — caps, daily flow limits, LTV and liquidation thresholds, the interest-rate curve, oracle configuration — tuned per asset and adjusted as conditions change. The [Markets](./markets.md) engine is where those controls live; the risk team is who operates them.

---

## Operational security and governance

Code is one attack surface. Operations is another, and Kamino treats it with the same rigor.

Every protocol upgrade and every treasury movement is governed by **multisig**. Changing the protocol or moving funds requires a quorum of signers acting together, subject to timelocks, so each sensitive action carries the agreement of several independent keyholders before it can execute. The entire governance layer is public at **multisig.kamino.fi** — every proposal, every signature, every timelock, every execution, across all programs, markets, and vaults, in real time. A diligence team watching a sensitive upgrade can see it queued, signed, and timelocked before it executes.

Real-time anomaly monitoring watches the protocol for unexpected behavior. Operational defenses cover supply-chain integrity, key hygiene, and domain-spoofing protection. Redundancy is built across the layers that have to stay up — RPC providers, cloud providers, oracle sources, liquidators, and the price-update service — so a single dependency failure degrades gracefully and keeps the protocol running.

In a permissioned market, the set of accounts allowed to liquidate is itself a control: [Permissioning](./permissioning.md) gates who can run liquidations, so a regulated venue can confine close-outs to whitelisted, vetted liquidators.

---

## Whole-stack coverage

Kamino's program covers the entire stack, from the contracts down to the frontend, the operational infrastructure, and the keys. The smart-contract layer (20 audits, 4 formal verifications, continuous fuzzing, reproducible builds) and the pricing layer (Scope's four-provider guard stack) are detailed above. The layers above and around them carry their own controls:

- **Frontend** — domain-spoofing defenses and supply-chain integrity, so the interface users sign through is the one Kamino shipped.
- **Middleware and operational infrastructure** — redundancy across RPC, cloud, oracle, and liquidator layers, with real-time anomaly monitoring.
- **Governance** — multisig control of every upgrade and treasury action, published live at multisig.kamino.fi.
- **Third-party dependencies** — held inside the same audited and monitored surface as first-party code.

The capital, the code, the price, the close-out, and the keys are each covered by their own layer, and every layer is verifiable from the outside.

---

## Underwrite it yourself

PRIME runs $1B+ of credit on these rails. FalconX and Pantera built on them with real size. The strongest signal that the security holds is the capital already trusting it. Every claim on this page resolves to something you can open, rebuild, or watch live: read the audit reports, rebuild the on-chain programs from source, and watch governance and pricing operate live. Then talk to us about the structure your mandate requires — the [permissioning](./permissioning.md), [custody](./custodial-borrowing.md), and reporting that make a venue ready for regulated capital.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](./kamino-app.md)

**Live dashboards:** [multisig.kamino.fi](https://multisig.kamino.fi) · [oracles.kamino.fi](https://oracles.kamino.fi)

**Related:** [How Kamino works](./how-kamino-works.md) · [Scope (oracle)](./scope.md) · [Liquidation engine](./liquidation-engine.md) · [Vault engine](./vault-engine.md) · [Markets](./markets.md) · [Permissioning](./permissioning.md) · [Custodial Borrowing](./custodial-borrowing.md) · [Institutional Yield](./institutional-yield.md) · [Cross-chain](./cross-chain.md)
