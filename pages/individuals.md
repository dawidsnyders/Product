# For individuals

> **Hero**
>
> # The rails institutions run on, in an app you can open today.
>
> Earn yield, borrow against what you hold, leverage a position, and swap at the best price on Solana — all self-serve, in one app. The same engine that institutions run on sits behind your deposit: $2.5B in assets under management, $21B+ in loans originated, $120M+ in interest paid to depositors, $0 in bad debt across three years live, and **130,915 active loans** open on the platform today.
>
> **[Launch App](https://kamino.com/home)** · [See how Kamino works →](./how-kamino-works.md)

---

## Four things to do with your money

Kamino gives you four core actions, each named for exactly what it does. Open the app and you'll find them as **Earn**, **Borrow**, **Multiply**, and **Swap** — the consumer faces of Kamino's Yield, Credit, and Liquidity rails.

### Earn — put idle assets to work

Deposit a single token and start earning. Behind the deposit, an [Earn vault](./lending-vaults.md) allocates your capital across Kamino's lending markets, supplying it to borrowers and collecting their interest on your behalf. Your vault share compounds in place: as borrowers pay interest, the redemption value of your share rises, block by block, so the yield lands in the share you already hold.

A named professional curator picks the markets for you. Each vault is run by a firm like Gauntlet, Steakhouse, or Allez, which sets the strategy, the allocation weights, and the risk caps, and stakes its own capital into the vault's insurance pool, where it absorbs the first loss ahead of yours. Kamino matches a curator's stake up to $250,000 per vault. When you choose a vault, you're choosing a curator and the strategy they stand behind.

The economics are simple to read. The APY you see is already net of the curator's fees — typically a 15% performance fee on the gains your shares earn and a 2% annual fee on assets — so the rate displayed is the rate that accrues to you. Kamino earns from the protocol take rate on the underlying lending, which keeps curator fees flowing to curators and the platform paid by the credit it powers. As a live anchor, USDC Earn vaults have recently run in the mid-single digits to low double digits APY, with each vault's current net rate, allocation, and first-loss capital published before you deposit.

Withdrawing draws from an instant idle buffer first, then redeems from markets with available liquidity. When a market is fully lent out, exiting lenders take priority over new borrowers in the withdrawal queue, so your capital has a defined path back to you.

[Explore Earn vaults →](./lending-vaults.md)

### Borrow — turn what you hold into spendable liquidity

Supply collateral and borrow against it. Your SOL, LSTs, stablecoins, JLP, tokenized equities, and more can back a loan while you keep full upside on the asset you posted — it stays yours, earning and appreciating, while the loan puts cash in your hands. Borrow at a variable rate that moves with utilization, or lock a [fixed rate for a fixed term](./fixed-rates.md) when you want your cost known in advance. Every loan is priced and protected by the same engine that has cleared $120M+ of liquidations with $0 in bad debt.

Every position has a health factor you can watch in real time. Your position stays open as long as your loan-to-value sits under the market's liquidation threshold, and the app shows you exactly how much room you have and the three levers that move it: the price of your collateral, the interest accruing on your debt, and any collateral you add or remove.

When you want to adjust, you can repay directly, repay using your collateral in a single atomic step, or swap your collateral or debt in place while the rest of the position stays open.

Holding Bitcoin you don't want to sell? Borrow against it while it stays in qualified custody, titled to you, through [BTC-backed credit](./uc-btc-backed-credit.md).

[Explore Credit →](./credit.md)

### Multiply — amplify a yield position in one click

Multiply opens a leveraged position in a single transaction. It deposits your collateral, borrows against it, swaps into more of the same yield-bearing asset, and loops — repeating until you reach your target leverage. What would be a dozen manual steps closes into one button.

Real strategies, with real ceilings:

- **Liquid staking** — loop JitoSOL, mSOL, bSOL, JupSOL, and more against SOL debt, up to **10x** on the Jito market. Because both collateral and debt are denominated in SOL, day-to-day price swings move both sides together, which keeps the position stable while it harvests staking yield.
- **JLP** — amplify Jupiter perps trading-fee yield up to **3.2x**, borrowing USDC, PYUSD, or USDG.
- **Stablecoins and RWAs** — loop yield-bearing assets like SyrupUSDC (up to **5x**), PRIME (up to **8.3x**), and ONyc. The base yield depends on the underlying asset, and Multiply's leverage stacks on top of it; each strategy shows its live base APY and resulting leveraged APY before you open the position.
- **Tokenized equities** — take leveraged directional exposure on xStocks like NVDAx, TSLAx, SPYx, and AAPLx, up to **3.7x**. The same leverage works for [credit against tokenized assets](./uc-credit-against-tokenized-assets.md) of every kind.

[Explore Multiply →](./multiply.md)

### Swap — best price, every trade

Kamino Swap is a meta-aggregator: it queries 15+ venues at once — Jupiter, DFlow, OKX, Titan, Raydium, and more — ranks every route, and fills your trade on the best one. You pay exactly two things on a swap: the on-chain transaction cost and the venue's own spread. Kamino takes a 0% cut on the swap itself.

Before any swap executes, it's verified by on-chain simulation, so the amount you're quoted is the amount you receive. Quoted output has matched actual output with **99.944%** accuracy across filled trades.

Want a price you don't have yet? Place a [limit order](./kamino-swap.md) that executes when the market reaches your target, at your exact price and with a 0% platform fee.

[Explore Kamino Swap →](./kamino-swap.md)

---

## Curated for you, run by professionals

The hardest part of on-chain finance is judgment — which markets are safe to lend into, what risk parameters make sense, when to pull capital out of an asset that's wobbling. Kamino puts that judgment in the hands of professional curators who do it for a living.

The vaults and markets you see in the app have passed Kamino's go-live review and run with the full safety stack turned on: whitelisted reserves that confine a vault's capital to verified markets, an insurance pool where the curator's own money takes the first loss, and multisig governance over every change. The curator roster — Gauntlet, Steakhouse, Allez, Sentora, RockawayX, and others — manages billions across the platform, and their fees are aligned with your returns, since they're paid on performance.

[Meet the curators →](./curators-managers.md)

---

## Built to protect your capital

The same infrastructure underwriting institutional credit is what stands behind your deposit.

**A liquidation engine that has carried zero bad debt.** When a position crosses its limit, Kamino closes it in slices — each round shuts a configured fraction of the loan and leaves the rest intact, so adding collateral or repaying between rounds can halt the process before your whole position unwinds. The penalty opens near zero and escalates the longer a position sits unhealthy, which rewards acting early and clears unhealthy positions fast. For the harder cases — where an asset's liquidity collapses or its quality deteriorates — borrowers get a 72-hour, penalty-free window to restructure before any orderly deleverage begins, and lenders are held clear throughout. Across **100,000+ liquidations and $120M+ liquidated** — including 55,649 in a single 48-hour SOL crash — the protocol has carried **$0 in bad debt**.

**Pricing you can trust.** Every position is valued by [Scope](./scope.md), Kamino's in-house oracle, which composes multiple price sources and rejects any reading that drifts too far from its peers. That guards you against a "scam wick" — a brief, manipulated price spike on a thin venue that would otherwise trigger an unfair liquidation. Scope has processed **$19.33B** in value with **zero oracle exploits** since launch.

**A security record you can verify yourself.** Kamino's core contracts have passed **20 external audits** across firms including OtterSec, Certora, and Sec3, with zero critical vulnerabilities found in production, plus **4 formal verifications** that mathematically prove key properties. The code is open source with reproducible on-chain build verification, backed by a **$1.5M bug bounty** run through Immunefi, and has run **three years in production with no security incident**. Every multisig and every oracle feed is watchable live at [multisig.kamino.fi](https://multisig.kamino.fi) and [oracles.kamino.fi](https://oracles.kamino.fi).

[Read the full security story →](./security.md)

---

## KMNO and Seasons

KMNO is Kamino's native token, and staking it puts you inside two systems at once. Staked KMNO carries your vote in on-chain governance over the parameters, listings, and upgrades that shape the protocol. It also earns Seasons points: Kamino's rewards program scores your activity across the app — the size and duration of your stake, your deposits, your borrows, your swaps — and distributes KMNO to participants each Season based on that score. The more you stake and the more you use the app, the larger your share of the distribution. You manage staking, your points, and your claims in the same place you manage everything else.

[Learn more about the Kamino App →](./kamino-app.md)

---

> ## Start earning, borrowing, and trading
>
> Earn, Borrow, Multiply, Swap, your full portfolio, KMNO and Seasons live in one interface, on web and on the [mobile app](./kamino-app.md). Connect a wallet and you're in, with your positions, history, and PnL one tap away. The [Kamino App page](./kamino-app.md) walks through the full experience.
>
> **[Launch App](https://kamino.com/home)** · [See how Kamino works →](./how-kamino-works.md)
