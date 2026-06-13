# Credit

> **Hero**
>
> # Borrow against anything, at the rate and term you choose.
>
> Open a variable line in seconds or lock a rate to a fixed maturity. Post on-chain collateral or assets held at your custodian, into an open market or a KYC-gated venue. Every loan settles in the same lending engine and is priced by the same in-house oracle.
>
> One liquidation system protects all of it: $120M+ cleared across 100,000+ liquidations in three years of production, with zero bad debt.
>
> **[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## One credit engine, configured to the loan

Borrowing on Kamino starts from a single lending engine and four choices: whether your rate floats or is fixed to a term, whether your collateral sits on-chain or at a custodian, whether the market is open or gated to approved counterparties, and how correlated your collateral and debt are. Those choices generate every credit product below. A bespoke institutional facility and a retail SOL loan run on the same audited rails, tuned through settings.

Each product below has its own page. This hub is the map.

---

## One counterparty stands behind every loan

A borrowing facility touches four things that usually live with four different vendors: the price the collateral is marked at, the risk parameters that govern the position, the integration into your custody and compliance stack, and the party you call when a market moves at 3 a.m. Kamino runs all four.

Collateral is priced by [Scope](./scope.md), the in-house oracle that has marked $19.33B of value with zero oracle exploits — including tokenized equities through market halts, NAV-based funds, and assets held in custody. The risk parameters — LTV ceilings, liquidation thresholds, borrow factors, oracle guards — are set and monitored by the same team that operates the [liquidation engine](./liquidation-engine.md) carrying a $0-bad-debt record across three years and $120M+ cleared. Integration into your custodian, your KYC provider, and your wallet architecture is delivered hands-on, with defined liquidation and redemption SLAs and a named team accountable for the facility. When you book credit on Kamino, one counterparty operates the pricing, the risk, and the integration, and answers for the outcome.

---

## Variable Borrow — a credit line that's live in one transaction

Deposit collateral, draw against it, repay any time. Rates float with pool utilization and interest accrues continuously on the outstanding balance, so a line costs you only for what you draw and only while you hold it. Each reserve publishes its own utilization curve in the app: the rate rises as borrowing demand consumes available supply, and you see the exact rate for your draw size before you commit. A reserve factor on the interest paid is the protocol's revenue on the loan; the rest accrues to the lenders supplying the reserve.

Every asset carries three ratios that govern the position:

- **Max LTV** — the ceiling for opening or adding to a position (75% for SOL).
- **Liquidation LTV** — the threshold that makes a position eligible for liquidation (80% for SOL), always set above Max LTV so there's headroom between borrowing capacity and risk.
- **Current LTV** — your live debt-to-collateral ratio, assessed continuously.

A borrow factor adjusts capacity for the riskiness of the borrowed asset: $100 of SOL collateral at 80% Max LTV supports $80 of USDC (borrow factor 1), or $40 of a more volatile asset (borrow factor 2). Cross-mode positions hold multiple collateral and debt assets under one combined health assessment.

Manage the position in place. Repay debt directly out of deposited collateral, swap your collateral, or swap your debt asset, each executed atomically against the best on-chain route through [Routing](./routing.md), so the position stays open and intact while you change its legs. The borrowing mechanics live in the [docs](https://kamino.com/docs/products/borrow/borrowing).

---

## Fixed Rates — rate certainty and an on-chain yield curve

A three-month loan booked at a fixed rate charges that rate through maturity, whatever the variable market does in between. Borrowers pick a term — 1, 3, 6, or 12 months — and lock a rate to that maturity.

Behind each asset sits a grid of reserves spanning rate and duration, each reserve with its own liquidity and borrower population. You name a rate ceiling, and the order fills at the best available rate at or below it. The live grid for every asset and term is published in the app.

The differences between durations form a live term structure — the term premium that longer capital lock-up commands, surfaced as an on-chain term structure and used to price duration risk across the platform. At maturity, loans roll over by priority: same reserve and rate if liquidity is there, then a lower-rate reserve of the same duration, then a variable-rate fallback, with a grace window before liquidation eligibility. Early repayment in the first term carries a penalty sized to forgone interest; after the first rollover, exits are penalty-free.

FalconX borrows at fixed rates on Kamino for exactly this reason: a trading desk can price a strategy when its cost of capital is known to the day.

**[Explore Fixed Rates →](./fixed-rates.md)**

---

## Custodial Borrowing — draw on-chain credit against assets at your custodian

Keep your assets in qualified custody and still borrow against them on-chain. Collateral stays at the custodian under an account-control structure; custody operations are mirrored on-chain so the loan always reflects the real collateral balance, and on-chain proof of reserves shows the backing in real time. The position behaves like any other Kamino loan — priced, monitored, and liquidatable through the same engine — while the underlying assets remain in the custodian's vault under the control agreement throughout the life of the loan.

Pantera (operating as the "Solana Company") was the first borrower to draw an on-chain line against custodied collateral. The structure is built with Anchorage Digital for institutions whose mandates require assets to stay in regulated custody. The dollars these lines draw against are supplied by [Institutional Yield](./institutional-yield.md), the regulated vehicle that funds BTC-backed credit.

**[Explore Custodial Borrowing →](./custodial-borrowing.md)**

---

## Permissioned Markets — compliant, KYC-gated credit venues

Open infrastructure becomes a gated venue with a single access-control layer. A permissioned market enforces a per-user, per-action allowlist: deposit, borrow, and liquidate can each be gated independently, while withdraw and repay always stay open so a counterparty can always exit and repay once admitted.

Identity is handled off-chain. A KYC provider attests, your backend marks the user verified and calls the whitelist API, and the wallet is admitted to the market within seconds. The on-chain layer stays identity-agnostic; gating is additive and reversible, switched on or off while the underlying market keeps running. Sensitive positions can be restricted to whitelisted liquidators so only approved parties can clear them.

This is the structure regulated funds, treasuries, and issuers use to run named-counterparty credit on public rails.

**[Explore Permissioned Markets →](./permissioned-markets.md)**

---

## Multiply — one-click leverage, with the cost lockable for the term

Multiply loops collateral and debt into a single leveraged position in one transaction. You set a deposit and a target leverage; the engine flash-borrows, swaps into the target asset, deposits it as collateral, borrows against it, and repays the flash loan atomically — the transaction either completes in full or reverts as if it never ran. The flash-loan fee is 0.001% per transaction.

Leverage scales with how correlated the collateral and debt are. Through elevation groups, tightly-correlated pairs run at much higher LTV: JitoSOL against SOL reaches 90% max LTV and up to 10x, while uncorrelated pairs like JLP against USDC sit near 3x. The strategy families span SOL liquid-staking tokens, JLP, stablecoin carry, RWAs, and tokenized equities.

The economics are the spread between what the collateral earns and what the debt costs, multiplied by leverage. A position at 8x exposure earns its collateral yield on eight units of notional while paying borrow cost on the seven it financed: an illustrative 7% collateral APY against a 6% borrow rate works out to roughly 14% net APY on the initial deposit, and the same spread at higher leverage scales proportionally. Live yields and borrow rates for each strategy are shown in the app before you open. Fixed-rate Multiply locks the borrow cost for the position's full term at a small premium, so the spread you underwrite at open is the spread you hold to maturity.

**[Explore Multiply →](./multiply.md)**

---

## The liquidation engine — what makes every loan above safe to lend into

Every loan above is backstopped by one liquidation system, and its record is the proof point institutions underwrite against: $120M+ cleared across 100,000+ liquidations, $0 bad debt, across three years in production. Within that total sit five documented market crashes since November 2023 — the largest a 48-hour SOL drop that triggered 55,649 liquidations across 30,030 wallets — each closed with zero bad debt. The full event-by-event record is on the [liquidation engine](./liquidation-engine.md) page.

It works on multiple modes so liquidations are proportionate. Soft liquidations and auto-deleverage trim a position with a 10–60bps penalty as health degrades, sparing borrowers a full close-out for a small breach. Auction-based liquidation clears larger or sharper events through competitive fills. Fixed-rate loans add maturity liquidation after the grace window. Scam-wick protection lives at the oracle layer: [Scope](./scope.md) averages sources, enforces divergence and cap-floor guards, and can be configured so a position can't be liquidated during a brief depeg. Permissioned markets can restrict clearing to whitelisted liquidators.

The same engine clears [your own market](./curation.md) the moment you launch it, on the same penalties, oracle guards, and auction mechanics proven across $120M+ of liquidations and three years in production.

**[Explore the liquidation engine →](./liquidation-engine.md)**

---

## Borrow orders and conditional liquidity — credit that fills as supply arrives

A borrow order is a limit order for credit: state an amount, a maximum rate, a minimum term, and an expiry, and it fills automatically — in full or in parts — as matching liquidity arrives. Behind it sits **conditional liquidity**, the supply-side mechanism that funds large fixed-rate borrows while lenders' capital keeps earning in variable reserves until the moment it's drawn. Lenders signal capacity on fixed-rate reserves while their funds stay deployed in variable reserves; when a matching order executes, the capital transfers and the loan opens in a single atomic step.

This is what lets the [vault engine](./vault-engine.md) quote a fixed-rate yield curve and fund term loans for borrowers like FalconX while every dollar of supply stays earning right up to the moment it's lent. The mechanics are in the [docs](https://kamino.com/docs/products/borrow/borrow-orders).

---

## Which borrowing product fits

| You want to… | Use | Why |
|---|---|---|
| Open a flexible line, repay any time | **Variable Borrow** | Pay only for what you draw, while you draw it |
| Know your cost of capital to the day | **[Fixed Rates](./fixed-rates.md)** | Rate locked to a 1-, 3-, 6-, or 12-month maturity |
| Borrow while assets stay in qualified custody | **[Custodial Borrowing](./custodial-borrowing.md)** | Collateral stays at the custodian; the loan is on-chain |
| Run credit behind KYC / named counterparties | **[Permissioned Markets](./permissioned-markets.md)** | Per-user, per-action gating; exits always open |
| Amplify a yield position in one click | **[Multiply](./multiply.md)** | Up to 10x on correlated pairs, cost lockable for the term |

---

## The rails beneath every loan

Each credit product is a configuration of the same infrastructure. These pages explain it in full:

- **[Markets](./markets.md)** — the configurable lending engine; the venue every loan settles in, tuned across ~50 parameters per asset.
- **[Scope](./scope.md)** — the in-house oracle that prices collateral, triggers liquidations, and delivers scam-wick protection. $19.33B processed, 0 oracle exploits.
- **[Curation](./curation.md)** — the supply side, and the way to run your own credit market on Kamino's rails.
- **[Routing](./routing.md)** — best-execution swap routing behind repay-with-collateral, debt swaps, and every Multiply loop.
- **[Security](./security.md)** — the audits, formal verification, and liquidation track record the credit engine rests on.

---

## Build on Kamino

Stand up your own credit market with the parameters, access rules, and identity you choose through **[Curation](./curation.md)**, or embed Kamino borrowing into your own product with **[BuildKit](./buildkit.md)**. Curator fees go to the curator; Kamino's revenue is the protocol take rate on the underlying lending.

---

## Put credit to work

Talk to our team about a market, a facility, or a custodial line tuned to your assets, risk, and counterparties.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
