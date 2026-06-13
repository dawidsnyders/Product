# For curators & managers

> **Audience page — Solutions ▸ By who you are.** Lead CTA: **Contact sales** · Secondary: **Launch App**. Cross-links: [Launch a managed fund](./uc-launch-a-managed-fund.md) · [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md).

---

## Hero

# Run a credit or yield venue on infrastructure that's already audited, capitalized, and live.

Bring your strategy, your risk judgment, and your capital. Kamino supplies the lending engine, the oracle, the liquidation safety system, the compliance controls, and a built-in demand surface of depositors and borrowers. You configure a vault or a market to your mandate, post your first-loss capital, set your fees, and operate — with the same rails that secure billions in institutional and consumer deposits underneath you.

[**Contact sales**](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## The proposition

Standing up a lending venue from scratch means building and auditing a lending engine, a pricing oracle, a liquidation system, a withdrawal mechanism, an access-control layer, and the operational monitoring around all of it — then earning depositor trust in brand-new code from a standing start. That is years of engineering and security spend before a single dollar is allocated.

The Curation Suite collapses that to a configuration exercise. You launch a vault or a market through [manage.kamino.com](https://manage.kamino.com), set its parameters, and run it. The rails beneath you carry a three-year production record, twenty external audits, four formal verifications, and $0 of bad debt across more than $120M liquidated. Your depositors inherit that security the moment they deposit; your venue inherits Kamino's consumer app as a distribution surface the moment it passes review.

Professional curators already operate on these rails: **Gauntlet**, **Steakhouse**, **Allez**, **Sentora**, **RockawayX**, **Elemental**, **Keel**, **Hyperithm**, and **Galaxy** run live vaults and markets here. When multiple curators run a vault for the same asset, depositors choose a curator and a strategy — the roster itself is the trust signal.

---

## What you can operate

### Lending vaults

A vault accepts one deposit token, distributes it across lending reserves at the weights and caps you set, and issues auto-compounding share tokens to depositors. You define the allocation strategy; the [vault engine](./vault-engine.md) handles deployment, rebalancing, and share accounting.

- **Weights and caps.** Weights are relative integers that set each reserve's share of capital — three reserves weighted 500 / 300 / 200 receive 50% / 30% / 20% of available deposits. Caps are hard ceilings on the token amount any single reserve can hold; when a weight would exceed its cap, the excess redistributes across your other allocations. This bounds exposure to any one venue regardless of how the strategy is sized.
- **Standard and conditional allocation.** Standard allocations deploy immediately and earn continuously. Conditional allocations declare capacity the vault is willing to fund up to a cap, holding the capital in productive standard allocations until a borrower actually arrives — at which point it pulls the capital, deposits it into the target reserve, and funds the borrow in a single settled step that either completes in full or not at all. This is how a vault offers a fixed-rate term commitment to an institutional borrower while keeping every dollar earning floating yield until the moment the loan draws down.
- **Automated rebalancing.** Allocations are targets. As deposits, withdrawals, and accrued interest move the vault off target, a sync operation realigns it — permissionless to call, and run automatically on a continuous cycle (about every 15 minutes) across all vaults.
- **Yield that traces to real borrowers.** A vault's APY is the weighted average across its allocations, where each reserve earns `borrow_rate × utilization × (1 − protocol take rate)`. Depositor yield comes from borrowers paying interest; as that interest compounds, the share price climbs and each depositor's balance grows with it.

[Explore Lending Vaults →](./lending-vaults.md)

### Lending markets

A market is an isolated lending venue you own end to end. You add reserves, wire each one to an oracle, and tune the full parameter set per asset — LTV, liquidation thresholds, the full interest-rate curve, deposit and borrow caps, daily flow limits, origination and flash-loan fees, term, and access rules. Each market is fully self-contained: its reserves, oracle wiring, and risk parameters are scoped to that market alone, so a bad debt event or oracle failure in one stays bounded inside it.

The lifecycle is staged so you launch fast and harden as you grow:

1. **Market setup** — a one-time set of global actions: create the market account, set market-wide configuration, and transfer ownership to a Squads multisig.
2. **Reserve setup** — repeated per asset: add the reserve, wire its oracle, set risk parameters, optionally cap withdrawals, configure rewards, and optionally enable fixed-rate functionality.
3. **Advanced controls** — liquidation tuning, withdrawal queues, borrow orders, elevation groups for correlated assets, and permissioned access, layered on when you need them.
4. **Operations** — monitoring, periodic cap adjustments, and fee collection.

A working market runs on staging in around ten minutes. Before external users can deposit, you complete market setup plus one fully-configured reserve with a live oracle and positive caps. The multisig transfer is the production prerequisite: once ownership moves to a Squads multisig, every subsequent change runs through a multisig proposal under a timelock.

[Explore Markets →](./markets.md)

### Managed portfolios

For a multi-asset mandate, [Meta-Vaults](./meta-vaults.md) give you a configurable multi-asset, multi-strategy vehicle — a managed fund in a box. Set the target composition, let auction-based rebalancing hold it, and deploy across the full surface of Kamino strategies: lending markets, [Multiply](./multiply.md) leverage loops, fixed-rate term credit, and curated yield. This is the vehicle wealth and asset managers use to package a mandate that blends USD yield, leveraged exposure, treasuries, and tokenized equities into one share.

[Explore Meta-Vaults →](./meta-vaults.md)

---

## Two planes: permissionless and curated

The Curation Suite runs on two planes, and you choose which one your venue lives on.

**Permissionless.** Deploy a vault or a market on Kamino's audited infrastructure, set your own parameters and fees, and operate. Launch is open and self-serve: you go live on your own schedule, the moment your configuration is set.

**Curated.** To appear in Kamino's consumer app — and draw on the depositor demand that comes with it — a venue turns on the safety controls (whitelisted reserves, the insurance pool, multisig governance) and passes a go-live review. That review is Kamino's quality gate, and clearing it is what earns your venue distribution to the app's user base.

The choice is yours to make per venue: run quietly on the rails alone, or open the gate to Kamino's demand by meeting the curated standard.

---

## The risk apparatus you operate inside

Curators are the risk managers of their venues, and the engine gives you both the controls to express risk and the backstops that protect depositors when judgment is tested.

### Insurance pool — first-loss capital

You post your own capital into a dedicated farm inside the vault. It earns the vault's APY while it sits, and it stands first in the loss waterfall: when bad debt occurs, the insurance pool absorbs it before any depositor is touched. Kamino matches your deposit up to **$250K** — a $200K commitment becomes $400K of first-loss coverage. A standard withdrawal carries a **30-day cooldown** that signals your exit publicly on-chain, so depositors always see whether the curator still has skin in the game; an emergency withdrawal to compensate depositors after a loss bypasses the delay under a 2-of-2 multisig between Kamino's security council and a curator-nominated wallet, which can only push first-loss capital to the depositors who took the loss.

### Whitelisted reserves

Two irreversible safety settings confine where your capital can flow. With both enabled, the vault can allocate only to reserves inside Kamino's protocol-wide verified set, and depositor funds stay within that vetted universe. Once enabled the settings cannot be switched off, so even a compromised curator key keeps the protection in force — depositors are covered against the operator as well as the market.

### Permissioning

Gate any venue with the [permissioning layer](./permissioning.md). Require approval to deposit, borrow, or liquidate — at the level of a whole market, a single operation, an individual wallet, or one asset within a market. Withdraw and repay always stay open, so capital is screened on entry and remains freely exitable at all times. KYC is verified off-chain and the approved wallet is whitelisted, which is how a [permissioned vault](./permissioned-vaults.md) or [permissioned market](./permissioned-markets.md) takes deposits only from your approved investors while the on-chain layer stays identity-agnostic.

### The safety engine

Every vault is monitored by an automated risk-monitoring system that pulls capital out of an asset on signals of an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market. Withdrawals run in three layers — an instant idle buffer, redemption from markets with available liquidity, and a fair queue at full utilization where lender exits take precedence over new borrows. Liquidations run through Kamino's [liquidation engine](./liquidation-engine.md): the auction-and-soft-liquidation system behind the $0-bad-debt record, with [Scope](./scope.md) oracle guards rejecting scam-wick prices before they can trigger a liquidation.

Behind the controls sits a dedicated risk team and a public reporting layer: a live risk dashboard, a monthly risk report, VaR analysis, volatility modeling, and price-shock scenario analysis you can point your own investors and allocators to.

---

## Economics

The commercial model is built so curators keep what they earn for the strategy they run.

- **Performance fee** — configurable, charged on vault profits. A typical institutional setup runs 15%.
- **Management fee** — configurable, charged on assets under management and annualized. A typical institutional setup runs 2%.

Your P&L is those fees against the cost of carrying first-loss capital, and that cost is low: the capital you post into the insurance pool earns the vault's own APY the entire time it backs the venue, so your skin in the game compounds while it sits in the loss waterfall.

Both fees accrue continuously in the deposit token and are collected when you withdraw them; you can also forfeit accrued fees back to depositors. Curator fees go entirely to the curator. Kamino's revenue is the protocol take rate on the underlying lending — a separate line drawn from borrower interest that scales with your venue's activity, so the strategy fee you set stays wholly yours.

---

## Why operate here

**The security is already paid for.** Twenty external audits, four formal verifications, a $1.5M bug bounty, continuous fuzzing, open-source code with reproducible on-chain build verification, and a three-year production record that stands clean across every audit cycle and liquidation event. Your venue starts with all of it. The full diligence record lives on the [Security](./security.md) page, with live transparency at multisig.kamino.fi and oracles.kamino.fi.

**The demand is already there.** Pass the go-live review and your vault or market surfaces in Kamino's consumer app, in front of an existing base of depositors and borrowers. Your venue opens with that audience already in front of it, so capital can flow in from day one.

**The asset universe is open.** Whatever [Scope](./scope.md) can safely price — tokenized treasuries, equities, gold, NAV-based funds, LSTs, BTC — you can build a venue around. The oracle's guard stack turns the hard-to-price asset classes into ones you can lend against with a bounded risk envelope.

**The operations are yours, on rails you trust.** You hold ownership through a Squads multisig, you set every parameter, and you decide which plane your venue lives on. Kamino runs the engine; you run the venue.

---

## Take it further

- [**Launch a managed fund →**](./uc-launch-a-managed-fund.md) — the end-to-end path: create a multi-strategy vehicle, manage it, gate your investors, integrate it into your product, and get reporting and data out of the box.
- [Curation Suite →](./curation.md) — the full self-serve platform for launching and operating vaults and markets.
- [Vault engine →](./vault-engine.md) — the allocation, rebalancing, withdrawal, and insurance infrastructure underneath every vault.
- [Yield →](./yield.md) and [Credit →](./credit.md) — the product surfaces your depositors and borrowers see.
- [Security →](./security.md) — the full audit, formal-verification, and risk record.

---

## Get started

Talk to our team about the venue you want to run — the asset, the strategy, the mandate, the access rules — and we'll stand up the configuration with you.

[**Contact sales**](./contact-sales.md) · [Launch App](https://kamino.com/home)
