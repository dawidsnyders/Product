<!-- Working name: "Meta-Vaults" (alt under discussion: "Managed Vaults"). Naming decision tracked in IA/manifest; keep this caveat out of rendered page copy. -->

# Meta-Vaults

> Product · Yield hub
> Audience: wealth & asset managers, fund managers, fintechs, professional curators

---

## A managed fund in a box

**Stand up an investable, branded fund as a configuration: define the assets and weights, and Kamino operates the vehicle beneath it. Investors hold one share token; you manage the mandate.**

A Managed Portfolio is a single vehicle that holds a basket of assets — stablecoins, major tokens, tokenized treasuries and equities, gold, LST positions, and leveraged exposures — toward a target composition you define. Investors deposit one asset and receive one share token whose value tracks the portfolio's net asset value. You set the strategy, the weights, and the fees; the engine holds the basket to target, prices every holding through Kamino's oracle, and reports NAV continuously.

It is the vehicle behind *[launching a managed fund](./uc-launch-a-managed-fund.md)* on Kamino — the same end-to-end path wealth managers and fintechs use to stand up a product, gate who can invest, and distribute it under their own brand.

[**Contact sales**](./contact-sales.md) · [Launch App →](https://kamino.com/home)

---

## What a Managed Portfolio holds

One portfolio can carry several kinds of exposure at once, all marked to a single NAV:

- **Spot baskets** — a weighted mix of USD stablecoins, SOL and major tokens, tokenized treasuries, tokenized equities, gold, and yield-bearing tokens.
- **Curated lending yield** — allocations into [Lending Vaults](./lending-vaults.md) and the [markets](./markets.md) behind them, so idle capital earns the borrower interest that funds Kamino's credit markets.
- **Leveraged strategies** — [Multiply](./multiply.md) positions held inside the portfolio (an LST carry, a stablecoin loop, a basis trade), each a single collateral-and-debt position the manager opens and sizes inside a [market](./markets.md).
- **Regulated credit yield** — a sleeve allocated into [Institutional Yield](./institutional-yield.md), the BTC-backed credit vehicle, for managers building a fixed-income line.

The manager decides the mix, and the example weights are theirs to set. A conservative dollar mandate might run 60% tokenized treasuries, 20% curated USDC lending, and a 20% leveraged stablecoin sleeve; a balanced mandate might run 50% SOL, 30% an LST Multiply position, and 20% a tokenized-equity allocation. The composition is a configuration, and changing it is a rebalance.

---

## How it works

### Target composition

You define a target weight for every asset in the basket — the portfolio it should hold when fully balanced. Weights are the mandate, expressed on-chain. Deposits and withdrawals move the live composition within a configured band around those targets; an out-of-balance buffer lets ordinary deposits and withdrawals settle against the band, so routine flow is netted internally before any rebalance trade is triggered. The portfolio drifts only as far as you permit before a rebalance brings it back.

### Rebalancing by auction

A rebalance fires on one of two triggers: you change the targets, or live flow pushes the basket past its configured band. When it fires, the portfolio opens an auction for exactly the trades it needs — selling what it is over-weight, buying what it is under-weight.

The auction walks its price until external solvers and market makers fill the order, so the portfolio sources execution from the open market at a price the auction's own discovery surfaces. A manager moves a whole book in one operation, and because the auction prices the basket only as each leg actually clears, every fill lands at a live market price the moment it executes.

Pricing guards and fee floors hold the auction to fair execution — a price floor and divergence limits the order must clear within — so the rebalance settles inside fair-value bounds for every investor whose NAV the auction touches.

### One deposit, one share

Investors deposit a single asset and receive a share token representing their slice of the portfolio. Share value is the portfolio's net asset value — total assets, priced through [Scope](./scope.md) and net of accrued fees — divided by shares outstanding. As the strategy earns, NAV rises and every share is worth more of the deposit asset. The share count stays fixed, and each share simply represents a constant fractional claim on the whole basket. The share token is a standard on-chain asset, so it can move into a wallet, a statement, or another venue.

### Investor redemption

An investor exits by redeeming shares back to the deposit asset at the current NAV per share, struck on the same Scope-priced source the portfolio reports. Redemptions flow through the [Vault engine](./vault-engine.md)'s fair withdrawal queue, where a lender's exit takes precedence over a borrower staying in. When a redemption is large enough to require unwinding part of the basket, the portfolio runs the same auction it uses to rebalance — selling a proportional slice across the holdings, paying the redeeming investor at the clearing NAV, and leaving the remaining basket at its target weights. The queue advances as positions clear, so an investor's exit price reflects what the basket actually sold for.

### Pricing every holding

Every asset in the basket — including tokenized equities with market hours and halts, NAV-based funds, gold, and yield-bearing tokens — is valued through [Scope](./scope.md), Kamino's in-house pricing layer. Scope composes redundant sources with hard divergence limits, suspends pricing through corporate-action and NAV-pause windows, and runs proof-of-reserves guards. The NAV a manager reports and an investor redeems against rests on the same priced source that values collateral and triggers liquidations across the platform.

---

## Run it as your own product

Meta-Vaults are operated through Kamino's [Curation Suite](./curation.md) — the self-serve platform where a manager launches and runs a vehicle on audited rails that the platform operates for them: allocation, pricing, withdrawals, and safety all handled. From there the full launch-a-fund toolkit composes around the portfolio:

- **Gate your investors.** Turn on [Permissioned Vaults](./permissioned-vaults.md) so deposits come only from KYC-verified, approved wallets — the configuration a regulated mandate or a compliant fintech product requires. Verification is handled off-chain; approved wallets are whitelisted through an API, and withdrawals always stay open.
- **Distribute under your brand.** Run the portfolio [white-label](./white-label.md) on your own front-end, so investors see your product and your interface.
- **Embed and pull data out of the box.** [BuildKit](./buildkit.md) and the data and Portfolio APIs put deposits, NAV, holdings, allocations, and per-investor P&L into your app and your reporting, so statements and dashboards come from the same feed the vehicle runs on.

The whole vehicle runs on the [Vault engine](./vault-engine.md), the shared infrastructure beneath every Kamino vault — allocation, the automated safety monitoring, fair-queue withdrawals, and the curator first-loss insurance pool.

---

## Economics

You set the fees and you keep them. A typical institutional configuration runs a **15% performance fee** and a **2% annual AUM (management) fee**; both accrue continuously against NAV in the deposit token, and you draw them on a schedule you control. The performance fee is charged on portfolio profits, the AUM fee on total assets.

On a $25M portfolio, the 2% AUM fee accrues roughly $500K a year regardless of performance, and a year that returns 12% — $3M of profit — adds about $450K from the 15% performance fee, for a combined take near $950K. A small deposit and withdrawal fee, paid by the investor transacting, returns to the portfolio and protects existing investors from flow-timing games. Kamino's revenue comes from the protocol take rate on the lending the portfolio allocates into, already netted out of the yield, so the full performance and management fee line is the manager's.

---

## Who runs them

The curators already operating vaults on this infrastructure — among them **Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Hyperithm, and Galaxy** — run on the same Curation Suite, Vault engine, and first-loss tooling a Managed Portfolio uses. Three audiences put it to work:

- **[Wealth & asset managers](./institutions-wealth-asset-managers.md)** allocate client capital into a transparent, on-chain mandate with reporting investors can verify against the same NAV the vehicle reports.
- **Fund managers and [curators](./curators-managers.md)** express a multi-strategy view — spot, leverage, and credit in one book — and earn performance and AUM fees on it.
- **Fintechs** package a branded portfolio product for their users, gated to their own verified base and embedded in their app through BuildKit.

---

## Built on infrastructure institutions can underwrite

The portfolio inherits the trust apparatus of the whole platform: contracts covered by **20 external audits and 4 formal verifications** across more than five firms, with three years in production and no security incident; the in-house [Scope](./scope.md) oracle pricing every holding through a guard stack that has priced **$19.33B+ with zero oracle exploits**; multisig governance of every upgrade, published live at multisig.kamino.fi; and a liquidation engine that has closed **$120M+ across 100,000+ liquidations with $0 bad debt to lenders**. The full diligence picture, including the live transparency dashboards, lives on [Security](./security.md).

---

## Compose the rest of the mandate

- [Markets →](./markets.md) — the lending venues a portfolio's yield and leverage sleeves allocate into.
- [Vault engine →](./vault-engine.md) — the allocation, safety, withdrawal, and insurance infrastructure beneath every portfolio.
- [Curation Suite →](./curation.md) — launch and operate your portfolio self-serve.
- [Permissioned Vaults →](./permissioned-vaults.md) — gate deposits to verified, approved investors.
- [White-Label →](./white-label.md) — run it on your own front-end.
- [Launch a managed fund →](./uc-launch-a-managed-fund.md) — the end-to-end path, start to distribution.
- [Yield hub →](./yield.md) — where Meta-Vaults sits alongside Lending Vaults, Institutional Yield, Permissioned Vaults, and the Yield API.

---

### Stand up your vehicle

Tell us the mandate and we will configure the portfolio, the gating, and the integration around it.

[**Contact sales**](./contact-sales.md) · [Launch App →](https://kamino.com/home)
