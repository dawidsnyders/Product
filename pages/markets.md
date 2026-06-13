# Markets

# Stand up a lending venue defined entirely by configuration

One engine runs every market on Kamino. Describe the assets, the access rules, the risk profile, and the term you need, and that description maps onto a live venue on infrastructure already in production.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

Every credit position on Kamino lives inside a market — a self-contained lending venue with its own risk settings, its own assets, and its own access rules. A market is defined entirely by configuration: borrow and deposit caps, loan-to-value, the interest-rate curve, the oracle each asset reads, the term, who is allowed to act, and the market's own name and identity.

When a wealth manager wants a venue where vetted clients borrow stablecoins against a tokenized fund, that requirement is a set of settings: the fund as collateral priced through [Scope](./scope.md), a loan-to-value the risk team is comfortable with, a fixed term, and an allowlist that admits only KYB'd wallets. The engine already supports every one of those settings, so describing the venue an institution wants maps that description straight onto a live market. Spinning one up is a configuration exercise on infrastructure that already ships.

---

## Every market is both core and isolated

Every market is a fully isolated venue that carries the full depth of the engine. Each one contains its own risk: a price shock or a default inside one market resolves inside that market alone, and the assets and lenders in every other market stay untouched. A retail-facing market with dozens of assets and a single-asset institutional venue run on the same primitive, with the same liquidation engine, the same oracle layer, and the same parameter surface beneath them.

What actually distinguishes one market from another comes down to four choices:

- **Correlated-asset risk grouping** — whether assets that move together are clustered to unlock higher capital efficiency.
- **Permissioning** — whether the venue is open to anyone or gated to approved wallets.
- **Term** — whether borrows are floating-rate or carry a fixed rate to a fixed maturity.
- **Collateral location** — whether collateral sits on-chain, [bridges in from another chain](./cross-chain.md), or rests at a qualified custodian.

Those four axes generate the entire range of markets in production — the main money market, dedicated altcoin and LST venues, institutional and RWA markets, KYC-gated venues, fixed-rate books, and markets that borrow against custodied collateral. The PRIME, Maple, OnRe, and Ethena USDe venues are each the same engine, set to different points across these axes.

---

## Around 50 parameters per asset

Each asset in a market is its own lending pool, tuned across more than fifty parameters. This is the surface that lets a venue be shaped precisely: the parameters below are what an institution's description of a market resolves into, one setting at a time.

**Risk and capital efficiency.** Loan-to-value and liquidation threshold set how much can be borrowed against the asset and where liquidation begins. A borrow-factor multiplier prices the risk of holding the asset as debt. Per-asset rules decide whether it can serve as collateral inside or outside a correlated-asset group, and a utilization ceiling can block new borrowing once the pool runs hot.

**Caps and flow control.** Hard deposit and borrow limits bound the pool's size. Separate withdrawal caps on the deposit and debt sides throttle how fast capital can move over a configurable interval, containing the blast radius of a fast-moving event before it becomes a problem.

**The interest-rate curve.** A multi-breakpoint piecewise-linear curve maps utilization to borrow rate, so a curator can shape gentle rates at low utilization and steep ones near the cap — the lever that keeps liquidity available for lenders to exit.

**Liquidation economics.** Minimum and maximum liquidator bonuses, a distinct bad-debt bonus, and the protocol's fee share are all set per asset, alongside an auto-deleverage configuration — its grace period, its bonus ramp, and its floor — that unwinds positions gradually under stress.

**Oracle and price guards.** Each asset names the price feed it reads through [Scope](./scope.md), with staleness limits, a TWAP-divergence tolerance, price-bound heuristics, and an emergency price-block switch. Pricing is part of the asset's configuration, which is why what Scope can safely price, a market can safely lend against.

**Term and fees.** Fixed-rate assets carry a maturity window, an early-repayment interest floor, and a protocol spread overlay. Origination and flash-loan fees, plus the protocol take rate on interest, are configured per asset.

---

## Staged launch with hidden assets

An asset pool can be set to a **hidden** status — fully live on-chain and fully operational, while staying out of the default app. Hidden assets give a market a private preview and a staged launch: a venue can be stood up, funded, and exercised with real capital before it ever appears in the interface. An institution can rehearse a live market end to end, confirm the parameters behave under real flow, and surface it to users only once it is ready.

---

## Correlated-asset risk groups

Assets that move together can be clustered into an elevation group, and positions holding only those assets borrow at far higher loan-to-value than any single asset would allow on its own. The math is simple — when collateral and debt track each other closely, the price gap a liquidation has to clear stays small and recoverable, so the capital buffer between borrow limit and liquidation can be much thinner.

A market supports many such groups. Each one sets its own LTV, liquidation threshold, a single borrowable debt asset, a tight maximum liquidator bonus that reflects minimal slippage between correlated pairs, and per-group borrow caps that contain concentration. Two patterns recur:

- **Stablecoin clusters** — USDC, USDT, and USDS grouped together run at materially higher loan-to-value than any one of them earns standalone, with a tight liquidation threshold and a thin maximum liquidator bonus, which is what makes stable-to-stable carry efficient.
- **LST-and-underlying pairs** — a liquid staking token like jitoSOL or mSOL grouped with SOL lets a position borrow against the diversified basket at high LTV, because the staking token tracks SOL closely enough that the gap a liquidation must clear stays small.

Correlated-asset grouping is what powers efficient leverage on Kamino: a [Multiply](./multiply.md) loop is a single position holding correlated collateral and debt inside one of these groups, which is how it reaches high leverage safely. Entering a group is a user's explicit choice, and exiting or borrowing an out-of-group asset reverts the position to each asset's standalone parameters.

---

## Permissioning: open or gated, on the same rails

Any market can run fully open or selectively gated, and the choice is reversible at any time. [Permissioning](./permissioning.md) gates actions through a per-user, per-action allowlist enforced on-chain, across four operations a curator can control: deposit, borrow, liquidate, and a fourth configurable control that delegates enforcement to an external policy. A curator gates only the actions that need gating; everything else stays open.

Withdraw and repay always stay open. A user who has deposited or borrowed can always close out, so the venue stays exitable for everyone in it even while entry is gated. Identity stays off-chain: a KYC provider verifies the user, the venue's operator whitelists the wallet, and within seconds that wallet gains on-chain access to the gated actions. The on-chain layer stays identity-agnostic, gated actions clear an on-chain authorization check, and a curator can narrow, widen, grant, or revoke access at any time, while the market keeps running as deployed.

The same engine that runs an open retail money market runs a KYC-gated venue with named counterparties and whitelisted liquidators, dialed entirely through settings. This is what brings institutions on-chain on terms their compliance teams can sign off on, and its fully-tuned expression is [Permissioned Markets](./permissioned-markets.md).

---

## A white-glove venue under your own branded stablecoin

A permissioned market becomes a closed system an institution operates end to end when it runs under the institution's own branded stablecoin, issued via Coinbase's stablecoin-as-a-service. Kamino stands up the venue in white-glove onboarding, carries the institution's identity and authorization rules, and uses that stablecoin as the borrow liquidity inside the market.

The loop has two sides that meet in one venue. Holders of a tokenized fund deposit it as collateral and borrow the stablecoin against it to lever their position. The institution's other clients supply that stablecoin as the lending liquidity and earn the interest the borrowers pay. The yield those depositors earn is the borrow demand from the fund holders, and both sides are the institution's own clients transacting under its own brand. The institution runs a venue that reads as its own, on rails one team operates end to end.

This is the flagship institutional pattern, walked through end to end on [Launch your own on-chain money market](./uc-own-stablecoin-market.md). It composes across the suite: the [Yield API](./institutional-yield-api.md) packages the same stablecoin-and-vault structure for an embedded surface, and [Custodial Borrowing](./custodial-borrowing.md) lets the collateral side rest at a qualified custodian.

---

## Identity and ownership

A market carries its own identity: its own name, its own reference currency for denominating values, a primary owner authority that holds configuration rights, and a separate emergency council scoped to protective actions only. The two authorities are deliberately split. The owner sets and changes parameters; the emergency council can pause borrows or socialize a residual loss across lenders when a position closes below water, and it cannot reach the owner's configuration rights. A market can be made immutable with a one-way switch that permanently freezes owner updates, so a venue's terms can be locked beyond the reach of any future change. Ownership can be transferred to a multisig, so every configuration change to a live venue clears multi-party approval before it lands. Together these controls let an institution operate a venue that reads as its own and is governed the way it governs anything else it runs.

---

## Markets as the platform

Markets are the layer every other product is built on, which is why the engine surfaces across the whole offering:

- **[Credit](./credit.md)** — the venue where every borrow happens, fixed or floating.
- **[Yield](./yield.md)** — vaults supply capital into market assets and earn the borrowers' interest. Markets are the demand side that generates the yield, and the [Vault engine](./vault-engine.md) is the supply side.
- **[Multiply](./multiply.md)** — a leverage loop is one position inside a correlated-asset group, looping collateral and debt for high LTV.
- **Asset issuance** — an issuer's token becomes an asset in a market and gains instant collateral status. This is the path PRIME took to more than $1B in RWA deposits on Kamino. See [credit against tokenized assets](./uc-credit-against-tokenized-assets.md) and the [Asset issuers](./asset-issuers.md) page.
- **[Liquidity](./liquidity.md)** — a listed asset needs a market to borrow against and liquidity to trade.
- **[Curation](./curation.md)** — anyone can launch and run their own market on the same audited rails, with the [Liquidation engine](./liquidation-engine.md) built in. The fee share each market earns is itself a parameter; the curator-and-Kamino revenue split and full economics live on the [Curation](./curation.md) page.

Institutional Yield runs on a fixed-rate market setting; custodial borrowing runs on a custodied-collateral setting. Both are points on the same parameter surface this page describes, each one reached by a curator turning settings on the engine that already ships. Whatever the venue needs, the configuration already reaches it.

---

## One operator behind every market

The engine beneath every market is the same one that has cleared $120M+ across 100,000+ liquidations with $0 bad debt, priced through [Scope](./scope.md) across $19.33B processed with zero oracle exploits, under a program of 20 external audits and four formal verifications across three years in production without a security incident.

The same team operates all of it. Kamino prices the collateral on Scope, sets and monitors the risk parameters this page describes, runs the [liquidation engine](./liquidation-engine.md) that clears positions under stress, and stands up the venue in a white-glove onboarding it operates alongside the institution — with named contacts and defined SLAs on monitoring and liquidation. When an institution runs a venue on Kamino, one team operates the pricing, the risk, and the integration day to day. The full diligence picture lives on the [Security](./security.md) page, and the live transparency dashboards — multisig.kamino.fi for governance and oracles.kamino.fi for every price feed — are open to inspect at any time.

---

## Configure your venue

Describe the asset, the counterparties, the risk profile, the term, and the access rules you need, and the engine maps that to a live market. Open or gated, floating or fixed, on-chain or custodied collateral — every market runs on the same audited infrastructure.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
