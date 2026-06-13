# Research

> **Hero**
> # The data and methodology behind every Kamino market
> Kamino prices billions in collateral, decides what can be listed and at what LTV, and liquidates positions in real time under live market stress. The research behind those decisions is published in full and free to read. Diligence teams work through the framework, the methodology, the monthly reports, and the live dashboards themselves before they allocate.
>
> **[Contact sales →](./contact-sales.md)**  ·  [Read the docs →](https://kamino.com/docs)

---

## Why this exists

An institution underwriting an on-chain venue needs to see the parameter, the methodology that set it, and the on-chain record that confirms it held. Every parameter that governs a Kamino market — what LTV an asset earns, what oracle prices it, how a liquidation executes, what happens in a 40% drawdown — is the output of a documented methodology and a track record anyone can verify on-chain.

This page is the index to that body of work: the framework that decides risk, the analysis that monitors it, the empirical record under stress, and the dashboards that show the system operating live. It is built for the analyst doing pre-allocation diligence, the curator sizing a new market, and the issuer asking whether their asset can be priced safely enough to lend against. The research, the framework, the reports, and the dashboards are all public and free to read — the published record is the product on this surface.

---

## The empirical record

The track record is on-chain and independently checkable:

| | |
|---|---|
| **$0** | bad debt since November 2023, across every market and every stress event |
| **100,000+** | liquidations executed, totaling **$120M+** in seized collateral |
| **55,649** | liquidations in a single 48-hour SOL drawdown (February 2026), affecting 30,030 wallets, with zero lender losses |
| **$19.33B** | priced through the Scope oracle with **0** oracle exploits |

The February 2026 event is the clearest read on how the system behaves under real stress. SOL fell 18% over 48 hours, triggering 55,649 liquidations across 30,030 wallets, and every lender was made whole. The liquidation engine, the conservative LTVs set by the risk framework, and the auto-deleverage safeguards — the orderly wind-downs the engine runs when a position is too large for the available liquidity — all performed as designed.

The liquidation history is on-chain, so anyone can reconstruct the full record from the liquidation events themselves and confirm the $0-bad-debt figure independently. The mechanics behind it are documented on the [liquidation engine](./liquidation-engine.md) and [Security](./security.md) pages.

---

## The risk framework (KRAF)

Every asset Kamino lists is evaluated against a five-dimension assessment before it ever earns a borrow cap or an LTV. The framework is published in full, and its live state is open on a public risk dashboard.

**The five dimensions.**

1. **Oracle pricing risk** — the reliability, redundancy, and divergence behavior of the price feed, scored before an asset can be priced for collateral. This is the gate the [Scope oracle](./scope.md) enforces.
2. **Smart-contract risk** — audit history and time battle-tested in production.
3. **Depeg risk** — for pegged assets, the modeled probability and severity of breaking peg.
4. **Counterparty risk** — governance decentralization, supply concentration, and issuer dependency.
5. **Market risk** — volatility, on-chain liquidity, and the price impact a liquidation would face.

**How a score becomes a parameter.** The assessment classifies an asset into a tier — General Asset (full cross-margin use), Isolated Collateral, or Isolated Debt — and the tier drives the concrete settings: collateral max LTV, borrow factor, caps, and which correlated-asset risk group it can join. Liquidity is assessed against the depth a liquidation would actually consume, and volatility against the move the parameters have to survive. The methodology turns a qualitative judgment into the numbers that run live in a [market](./markets.md), with [permissioning](./permissioning.md) governing which risk group and access controls each asset inherits.

**What it defends against.** The framework names three failure modes and the mitigations for each: insolvency (conservative LTVs, continuous monitoring, auto-deleverage), liquidity crunches (interest-rate curves that spike at high utilization, daily borrow caps), and systemic correlation (E-Mode caps, supply limits, correlation tracking). Each mitigation maps to a real parameter on a real market.

---

## Monthly risk analysis

A monthly risk report is published to the public governance forum by Kamino's risk team and external risk consultants. Each report covers protocol-wide metrics, market-by-market analysis, user-behavior and concentration patterns, and price-shock scenario analysis that sizes the bad debt the protocol would take at each level of severe market move and confirms the headroom in current parameters.

The reports are posted publicly and archived month over month, so a diligence team can read both the current state and the trend. The scenario analysis is the same Value-at-Risk, volatility, and price-shock modeling described on the [Security](./security.md) page, published as a standing series.

---

## Live dashboards

The research is backed by dashboards that show the system operating in real time. Anyone can open them; they are public and live.

- **The risk dashboard** — the KRAF dashboard: live utilization, LTV distributions across every market, oracle health, and liquidation-at-risk metrics. This is the framework above, rendered live.
- **oracles.kamino.fi** — every [Scope](./scope.md) price feed: current prices, the underlying sources, feed health, RWA and equity feeds, and update activity. The $19.33B priced through Scope runs through here.
- **multisig.kamino.fi** — every multisig governing the protocol: pending proposals, signatures, timelocks, and executions across all programs, markets, and vaults. The governance layer, in the open.

These are linked throughout the site because they are the proof beneath the claims: the [Security](./security.md) page is the diligence narrative, and these dashboards are the live evidence.

---

## The emerging on-chain yield curve

Fixed-rate, fixed-term credit produces something the analyst community has wanted on-chain for years: a real term structure of interest rates. Kamino's [fixed-rate](./fixed-rates.md) markets quote borrowing across a rate-by-duration grid — 1, 3, 6, and 12-month terms, each with its own clearing rate — and the prices that solvers and lenders discover through the credit book trace out an on-chain yield curve that updates as the market moves.

For a fund or trading desk, that curve is research input in its own right: on-chain price discovery for the cost of credit against a given collateral, observable live and across history through the [fixed-rate](./fixed-rates.md) markets where each term clears. Lenders' capital is committed to a term loan only when that term clears at a rate it accepts — the conditional-liquidity mechanism that funds each term just in time is detailed on the [fixed rates](./fixed-rates.md) page and in the [vault engine](./vault-engine.md).

---

## Pricing the assets others can't

A large share of the research effort goes into the hard problem of valuing tokenized real-world assets safely enough to lend against. Tokenized equities have market hours, halts, and corporate actions. NAV-based fund tokens pause and reprice on a schedule. Gold, private credit, and LP tokens have no continuous on-chain price.

The [Scope](./scope.md) oracle handles each of these through composed price types — taking the freshest of several sources within a hard divergence limit, honoring equity market hours and corporate-action blackouts, respecting NAV pause signals, and pairing the published price with on-chain proof of reserves. A supply-spike guard freezes an asset's usable price the moment its circulating supply diverges from its trailing average, the on-chain signature of an unbacked mint. The methodology for assessing each new feed is the oracle-pricing dimension of the risk framework above; the result is documented per asset. This analysis is what lets [PRIME](./customers.md#prime--figure), xStocks, [tokenized gold, and Ethena's USDe](./cross-chain.md) become collateral on Kamino at all.

---

## Read the source material

The full body of work lives in the [docs](https://kamino.com/docs) and the dashboards, kept current with the live protocol.

- **Risk framework and track record** — the methodology, the tiers, and the empirical record, in the [risk documentation](https://kamino.com/docs).
- **Asset risk assessment** — the five-dimension scoring used for every token onboarding and ongoing review.
- **Oracle pricing risk and market risk** — the per-asset valuation and volatility-and-liquidity methodology.
- **The live dashboards** — the risk dashboard, oracles.kamino.fi, and multisig.kamino.fi.
- **Published analysis** — the launch notes, market and risk commentary, and customer stories on the [Blog](./resources-blog.md).

For technical references — the data and analytics surfaces, the SDKs, and the API — see [Developers](./developers.md). For the full security and diligence narrative, see [Security](./security.md). For named outcomes — PRIME, FalconX, Pantera, Anchorage, and the curator roster — see the [customer stories](./customers.md).

---

## Talk to the team

Diligence teams underwriting an allocation, curators sizing a new market, and issuers assessing whether their asset can be priced and listed work directly with Kamino's risk and partnerships teams. The methodology above is the starting point; the conversation is where it gets applied to your mandate, your assets, and your risk limits.

**[Contact sales →](./contact-sales.md)**  ·  [Read the docs →](https://kamino.com/docs)
