# Kamino App

> The consumer product experience — the interface, the mobile app, and everything you can do with your money on Kamino: earn, borrow, multiply, swap, and track it all in one place.

---

## Hero

# The rails that run institutional capital, in your pocket.

Earn curated yield, borrow against what you hold, multiply your positions, and swap at the best on-chain price — all from a single account, on web and mobile. The same lending markets, the same oracle, and the same liquidation engine that funds and asset issuers run on price every position you open, with the moving parts laid out in plain view so you always know where you stand.

**[Launch App →](https://kamino.com/home)**  ·  [See it built for you → ./individuals.md](./individuals.md)

---

## One account. Four things to do with it.

Kamino organizes around four jobs, each a tab in the app. Every position you open lands in one portfolio view, so you always know where your money is and what it's doing.

### Earn

Deposit a single token and start earning yield that compounds automatically. Your deposit goes into a curated vault that spreads capital across Kamino's lending markets and rebalances as rates move, so a single position captures a blended rate from a managed book that the curator runs and rebalances for you.

Every vault on the consumer app is run by a named professional curator — Gauntlet, Steakhouse, Allez, and others — who set the strategy, post first-loss capital that absorbs losses before yours, and answer for performance. Choosing a vault means choosing a curator and the risk they stand behind. The rate you see is already net of the curator's fees — a performance fee on the gains your shares earn (a typical setup runs 15%) and an annual AUM fee on assets (typically 2%) — and Kamino's own revenue comes from the protocol take rate on the underlying lending, so curator fees go to curators. Withdrawals draw from an instant idle buffer first, then redeem from markets with available liquidity.

Earn is powered by the [Lending Vaults](./lending-vaults.md) you'll find across the [Yield](./yield.md) suite, built on [the vault engine](./vault-engine.md).

### Borrow

Put up collateral, keep it, and draw cash against it. Deposit SOL, BTC, stablecoins, blue-chip tokens, or tokenized assets, and open a loan in one click at a loan-to-value the market sets per asset. Position health is tracked live, every loan is overcollateralized, and you can repay any time. Interest accrues to the suppliers funding your loan, and Kamino takes a protocol cut of that interest — the borrow rate you see is your full cost.

Choose the rate that fits the trade. Variable borrowing tracks market utilization. [Fixed Rates](./fixed-rates.md) lock your cost to a maturity across a rate-by-duration grid, so a borrow you open today carries a known cost to its term. Manage positions in place on the open loan — repay with your collateral, swap your collateral, or swap your debt — each handled as one atomic step.

When a position drifts toward its limit, [the liquidation engine](./liquidation-engine.md) uses soft, incremental liquidations with penalties in the tens of basis points, so a small move costs you a small amount. Borrow rides on the same [Markets](./markets.md) engine institutions borrow through, priced by [Scope](./scope.md).

### Multiply

Open a leveraged position in a single click. Multiply borrows, uses the proceeds as collateral, and loops — building leveraged exposure to a yield-bearing asset in one transaction, with the position's data, health, and liquidation distance laid out in front of you. The full cost is a 0.001% flash-loan charge each time you open, adjust, or close; the carry the position earns is yours, and your economics are the spread between what your collateral earns and what your debt costs, amplified by leverage.

The strategy you pick sets your ceiling and your risk:

- **Staked-SOL loops** (JitoSOL, mSOL, JupSOL, and other liquid-staking tokens) run up to **10x** on the Jito market. Collateral and debt are both denominated in SOL, so the position's only live variable is the borrow rate it pays, and a swing in SOL's dollar price moves both legs together and leaves the loan-to-value where it sits.
- **Stable loops** (such as CASH/PYUSD) run up to **10x**, both legs holding dollar value so the position turns entirely on the rate spread between them.
- **Tokenized real-world assets** carry their own profile: PRIME home-equity credit and Maple's syrupUSDC institutional credit both loop up to **8.3x**, and OnRe's tokenized reinsurance yield, ONyc, loops as a dollar-denominated position. Each runs at a yield set by the asset against its stablecoin borrow cost.
- **Tokenized equities** (xStocks like SPYx, TSLAx, AAPLx) run up to **2x** and the JLP basket up to **3.2x**, held conservative because the collateral carries the underlying's full price.

Fixed-rate Multiply lets you lock your borrow cost for the term, so a leveraged carry trade has a known financing rate to maturity. Full detail lives on [Multiply](./multiply.md).

### Swap

Trade any token at the best price the network can offer. Every swap fans out across the major Solana routing engines in parallel — Jupiter, DFlow, OKX, 0x, Titan, Raydium, and Kamino's own on-chain router among them — and returns the winning route. Pricing is pass-through: your full cost is Solana network gas plus the spread already priced into the venue's liquidity, and every basis point the routing competition wins stays in your fill.

Before you sign, an active simulation runs your trade through on-chain execution and shows you the real output. Across more than 370,000 transactions, simulated output has matched actual output with 99.944% mean accuracy. Price-impact warnings surface at 1% and a hard stop at 5%, with configurable slippage protection underneath.

Set a limit order and it executes when the market reaches your price, settling at your rate or better; the searchers who fill it pay you a tip in SOL, and any execution above your rate returns to you as surplus. Swap is the consumer face of [Kamino Swap](./kamino-swap.md) and the [routing stack](./routing.md) that powers it.

---

## Portfolio — one view of everything

Open the Portfolio tab and see every position across Earn, Borrow, Multiply, and Swap in one place: balances, yield earned, borrow costs, position health, and net worth. Per-position rows show live health and liquidation distance for every loan and loop; your full transaction history and realized PnL are consolidated into one timeline you can read the way you'd read a brokerage statement, and export when you need it. The same data is served through the Portfolio API documented for teams building on top — see [Developers](./developers.md).

---

## KMNO and Seasons

KMNO is Kamino's native token. Holding and staking KMNO ties you into the protocol's reward program, and Seasons run as recurring reward periods where activity across the app — earning, borrowing, multiplying, swapping — accrues toward your standing. KMNO also carries voting rights in protocol governance. Staking and Seasons live inside the app alongside your positions, so participation is part of using the product. (Token distribution and governance detail live in the [docs](https://kamino.com/docs/kmno).)

---

## On mobile and on web

The full product runs in your browser and on your phone, available on iOS through the App Store and on Android. Earn, borrow, multiply, swap, manage positions, and track your portfolio from the mobile app with the same markets and the same depth as the desktop experience, built for the interactions that matter on a phone:

- **Fast onboarding** — connect or create a wallet and reach your first deposit in a few taps.
- **Position management on the go** — adjust leverage, repay a loan, or move a limit order from a screen sized for one hand, each change settling in a single signed transaction.
- **Health notifications** — push alerts when a position drifts toward its liquidation threshold or a fixed-term loan nears maturity, so you can act before the engine does.

**[Launch App →](https://kamino.com/home)** on web, or download for [iOS and Android](https://kamino.com/home).

---

## Built on infrastructure that has carried institutional capital for years

The app is the consumer surface on top of rails proven at institutional scale, and that foundation is what lets you put real money to work with confidence:

- **A clean liquidation record.** More than $120M liquidated across 100,000+ liquidations with **$0 of bad debt**, using soft liquidations that take small penalties on small moves.
- **Pricing you can trust.** [Scope](./scope.md), Kamino's in-house oracle, has processed **$19.33B** with **zero oracle exploits**, with staleness, divergence, and cap-floor guards that reject manipulated prices — the scam-wick protection standing between your collateral and a bad print.
- **Code that's been proven.** 20 external audits, 4 formal verifications, three years live in production with a clean security record, a $1.5M bug bounty, and open-source, reproducibly-built contracts.
- **Curators who absorb losses first.** Every consumer vault is run by a named professional who posts first-loss capital ahead of your deposit.

The full diligence picture, including the live multisig and oracle dashboards, lives on [Security](./security.md). For the audience-framed story of why this is safe for an individual, see [Individuals](./individuals.md).

---

## Start in the app

**[Launch App →](https://kamino.com/home)**

[Built for individuals → ./individuals.md](./individuals.md)  ·  [How Kamino works → ./how-kamino-works.md](./how-kamino-works.md)  ·  [Security → ./security.md](./security.md)
