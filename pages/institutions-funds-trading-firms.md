# Funds & trading firms

> **Solutions · By who you are · Institutions** — sub-segment view
> **Audience:** hedge funds, prop desks, market makers, crypto-native trading firms
> **Pulls:** [Fixed Rates](./fixed-rates.md) · [Multiply](./multiply.md) · [Custodial Borrowing](./custodial-borrowing.md) · [RFQ](./rfq.md) · [Kamino Swap](./kamino-swap.md) · [Routing](./routing.md)
> **Cross-link:** [BTC-backed credit](./uc-btc-backed-credit.md) · [Credit against tokenized assets](./uc-credit-against-tokenized-assets.md)
> **CTA:** Contact sales (primary) · Launch App (secondary)

---

## Hero

# Lock the cost of carry, keep custody, clear size on-chain.

A desk prices a rate that holds to maturity, a custody arrangement that keeps collateral titled to the fund, and a liquidation distance it can read before the trade goes on. The same lending engine, the same in-house oracle, and the same liquidation system stand behind a fixed-rate borrow, a leveraged loop, a custodied loan, and a routed fill, so one financing and execution stack covers the whole book.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## The desk's problem

A trading firm's edge lives in the spread between what an asset earns and what its financing costs. A floating borrow rate puts that spread at the mercy of pool utilization: a basis trade priced at a 200bp spread can invert the day a large borrower draws down the same reserve. Locking the rate fixes the financing leg for the life of the trade, so the spread the desk penciled is the spread the desk holds.

Kamino gives a desk on-chain credit with the certainty of a term sheet. The collateral stays self-custodied or titled to the fund at its own qualified custodian, the lien is contractual and cannot move the asset during the term, and the liquidation threshold is published in advance — the same number for a $10k position and a $10M position. The desk knows its rate, its term, and the price at which the engine acts before the position opens. The four products below compose into one financing and execution stack.

---

## Lock the cost of carry — [Fixed Rates](./fixed-rates.md)

A basis trade penciled at a 5% cost of capital stops working when funding drifts to 9% mid-trade. Fixed Rates pins that number for the life of the loan: a desk borrows at a rate set the day it draws, and the rate holds through whatever the variable market does over the term — one month, three months, six months, or twelve. A 5% three-month loan stays 5% through maturity, so the carry the desk penciled is the carry it keeps.

The mechanism is a grid. Term durations run along one axis — one, three, six, and twelve months; rate ceilings step along the other in fixed increments, so the populated cells line up into a readable curve. Each cell is its own reserve with its own supplied liquidity. The spread between the three-month and the six-month rate for the same token is a live term premium, the same observable curve a fixed-income desk prices against, now continuously quoted on-chain. A desk financing a basis or carry trade reads the curve, picks the cell that matches its horizon and the rate ceiling it will accept, and books a known cost of capital against a known return.

At maturity, positions roll on a defined priority the desk sets at origination: back into the same reserve when liquidity is available, into a lower-rate reserve of the same duration when one exists, or into the variable fallback. When the configured path cannot fill, a short grace window precedes liquidation eligibility, so the wind-down stays orderly. Early repayment carries a bounded, disclosed charge during the first term only, and interest already paid reduces it proportionally, so the longer the loan has run the smaller the effective cost to exit. After a rollover, early repayment is free.

Behind the grid sits conditional liquidity: vault capital earns variable yield while it waits, and the instant a fixed-rate borrow order matches, the protocol moves that capital into the fixed reserve and delivers the loan in the same atomic transaction. A $50M term loan funds just-in-time from capital that stayed productive the entire time it stood ready, which is what lets the supply side quote a fixed-rate curve at institutional size. **FalconX** draws fixed-term credit on Kamino at desk scale.

---

## Build the position in one transaction — [Multiply](./multiply.md)

Multiply collapses a leverage loop into a single atomic step. Deposit one asset, choose a multiplier, and the protocol flash-borrows, swaps through [Kamino Swap](./kamino-swap.md), redeposits as collateral, and draws the debt — all in one transaction that either completes whole or reverts, so the position is never half-built.

Achievable leverage follows asset correlation, governed by correlated-asset risk groups in the [lending engine](./markets.md):

| Position | Example pair | Leverage |
|---|---|---|
| Staked SOL, tightly correlated (Jito market) | JitoSOL / SOL | up to 10x (90% LTV) |
| Staked SOL, correlated (Main market) | mSOL · bSOL · JupSOL / SOL | up to 7.5x |
| Stable and tokenized-credit carry | PRIME / PYUSD · SyrupUSDC / USDC | up to 8.3x |
| Basket exposure | JLP / USDC | up to 3.2x |
| Tokenized equities (xStocks) | AAPLx · SPYx / USDC | up to 2x |

The economics are explicit: net APY is the collateral yield plus the yield spread times (leverage − 1). A desk that levers JitoSOL to 8x against SOL — a 7% staking yield against a 6% borrow cost — earns roughly 14% on its own deposit: the 7% on its capital plus the 1-point spread across the 7x of borrowed exposure, with gains and losses amplified symmetrically. A flash-loan fee of 0.001% per transaction is the only protocol cost to open or close, priced to disappear against the carry.

To take the financing rate out of the position entirely, a desk pairs Multiply with Fixed Rates, fixing the borrow cost for the full term so the carry holds as a known spread over a known duration. Strategy families span staked SOL and LSTs, stablecoin and tokenized-credit carry, and tokenized equities (xStocks), so the same one-click mechanism builds a staking-spread position, a stable-stable carry, or a leveraged exposure to a tokenized real-world asset. A desk providing or levering that RWA exposure works through [credit against tokenized assets](./uc-credit-against-tokenized-assets.md).

---

## Finance custodied assets while the collateral stays titled to the fund — [Custodial Borrowing](./custodial-borrowing.md)

A fund holding Bitcoin or other treasury assets at a qualified custodian can draw on-chain stablecoin liquidity against them while the collateral stays in segregated custody, titled to the fund. A tri-party account-control structure binds the borrower, the lending operation, and the custodian: the borrower keeps ownership, the lender holds a first-priority security interest enforceable only on default, and the custodian acts solely on the agreement's terms, leaving the asset locked in place for the term. The agreement contractually prohibits rehypothecation, so the custodied collateral stays segregated and idle the whole time the loan runs. The collateral is held bankruptcy-remote from the custodian's own estate, segregation enforced at the custodian independently of the on-chain layer. Kamino's first custodied market runs on **Anchorage Digital**, a federally chartered digital-asset bank.

Loans originate at up to 60% LTV, monitored continuously against the on-chain position — amount, collateral value, and live LTV — with every loan priced by [Scope](./scope.md) and governed by the same margin and liquidation discipline as the rest of the platform. The Bitcoin stays in segregated custody at the custodian, titled to the fund, for the full term, while the loan runs on-chain and turns a long position into working USDC the desk can deploy. Cost of capital is the lender's interest plus Kamino's protocol take rate, set per facility and disclosed at the term sheet, and a custodied loan can fix that rate for a fixed term. **Pantera** was the first firm to draw a custodied loan against off-chain collateral through this structure. See the full pattern in [BTC-backed credit](./uc-btc-backed-credit.md).

---

## Clear size at the best available price — [Kamino Swap](./kamino-swap.md) and [RFQ](./rfq.md)

Execution is part of the financing stack. Every swap on Kamino — opening a Multiply position, repaying with collateral, rotating an asset — routes across more than fifteen execution venues at once (Jupiter/Metis, DFlow, OKX, Titan, 0x Settler, Raydium, Hashflow, and others), and the platform takes whichever route returns the highest output. Each quote is simulated on-chain across three checkpoints before it signs, producing a verified output the trade fills at: a measured 99.944% mean accuracy between quoted and actual output across more than 370,000 transactions. [Kamino Swap](./kamino-swap.md) charges no platform fee; the cost is on-chain gas and the spread already embedded by the venue. The full execution stack lives on [Routing](./routing.md), the canonical home of the meta-aggregator that powers it, within the [Liquidity](./liquidity.md) suite.

For assets with no continuous order book — tokenized credit, RWAs, less-liquid tokens — [RFQ](./rfq.md) turns a trade request into a live auction. Professional market makers compete to fill the order, the winning quote is verified and co-signed on-chain, and the trader signs once. A desk gets sub-second fills on inventory priced by the firms that hold it, and a desk that wants to be on the other side of that flow integrates as a solver and quotes into the auction directly.

---

## Why a desk underwrites Kamino

The financing only matters if the venue holds. Every position above — fixed-rate, leveraged, custodied — settles in the same [lending engine](./markets.md), is priced by the same in-house oracle ([Scope](./scope.md)), and is protected by the same [liquidation engine](./liquidation-engine.md) that has cleared more than $120M across 100,000+ liquidations with zero bad debt to lenders. Scope's guard stack — multi-source composition, divergence and staleness limits, price bands — gives scam-wick protection at the oracle layer, so a brief depeg on a thin venue doesn't manufacture a liquidation.

Behind the venue is one team that operates it. Kamino runs the oracle that prices the collateral ([Scope](./scope.md)), the risk framework that sets each market's LTV and liquidation thresholds, and the integration that stands up a desk's markets, rates, and access rules — operated end to end, with named coverage and direct lines to risk and engineering when a position needs attention. A desk underwrites one operator that prices the book, manages the risk, and runs the system day to day.

The diligence is public. Twenty external audits, four formal verifications, three years in production without incident, and live transparency at multisig.kamino.fi and oracles.kamino.fi. The full program lives on [Security](./security.md).

---

## Where the desk goes next

- **Lock your cost of capital** → [Fixed Rates](./fixed-rates.md)
- **Build leverage in one step** → [Multiply](./multiply.md)
- **Borrow against custodied BTC** → [Custodial Borrowing](./custodial-borrowing.md) · [BTC-backed credit](./uc-btc-backed-credit.md)
- **Provide credit against tokenized assets** → [Credit against tokenized assets](./uc-credit-against-tokenized-assets.md)
- **Quote and clear size** → [Kamino Swap](./kamino-swap.md) · [RFQ](./rfq.md) · [Routing](./routing.md)
- **The other institutional doors** → [Wealth & asset managers](./institutions-wealth-asset-managers.md) · [Treasuries & corporates](./institutions-treasuries-corporates.md) · all of [Institutions](./institutions.md)
- **The diligence** → [Security](./security.md)

---

## Talk to the desk

Tell us the book, the assets, and the terms you finance against, and we will configure the markets, rates, and access rules to match. White-glove onboarding, named coverage, and direct lines to risk and engineering.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
