# How Kamino works

> **Hero**
> ## One set of rails for on-chain capital markets.
> Every product Kamino offers is a configuration of one shared stack — seven layers that compose into a single machine for on-chain capital markets. This page walks through each layer and shows how the settings change the product.
>
> **[Contact sales](./contact-sales.md)**  ·  **[Launch App](https://kamino.com/home)**

---

## One stack, seven layers

The layers earn their place by composing. A market sets the terms a loan lives under; a vault decides which markets the supplied capital flows into; the oracle prices the collateral; the access layer decides who is allowed in; the liquidation engine keeps every loan solvent; the router moves capital in and out at the best available price; the bridge extends all of it to assets that live on Ethereum. Each layer reads the others, so a change in one — a tighter LTV, a gated wallet, a fixed maturity — reshapes the whole venue without touching the rest.

Stack them one way and you get a permissionless borrow market anyone can use from the app. Gate the deposits, custody the collateral off-chain, and fix the rate to a maturity date, and the same seven layers become a regulated, KYC'd, fixed-term credit facility for an institution. The engine holds constant; the settings produce the product.

That is the through-line of everything below. Walk into Kamino with a tokenized asset, a risk mandate, and a set of access rules, and the venue that supports it is assembled from these layers through configuration alone.

The seven layers:

1. [Markets](./markets.md) — the lending engine every loan lives in.
2. [Scope](./scope.md) — the pricing oracle that decides what can be safely valued.
3. [Permissioning](./permissioning.md) — the access-control layer that gates who can act.
4. [The liquidation engine](./liquidation-engine.md) — the safety system that keeps loans solvent.
5. [Routing](./routing.md) — best execution for every swap, loop, and unwind.
6. [The vault engine](./vault-engine.md) — the supply side that funds the markets.
7. [Cross-chain](./cross-chain.md) — the bridge that makes Ethereum-native assets usable as Solana collateral.

---

## 1. Markets — the lending engine

Every borrow on Kamino happens inside a market. A market is a self-contained venue: collateral deposited in one market cannot be used to borrow from another, and markets share no liquidity and no risk exposure. A position that goes wrong in the Altcoins market cannot touch a lender in the Main market.

Inside a market, each asset is a reserve with its own risk settings — loan-to-value, liquidation threshold, borrow and deposit caps, daily flow limits, the full interest-rate curve, liquidation economics, origination and flash-loan fees, the oracle source and its price guards, the term, and the access rules. Tuning a reserve is how a market is shaped for the asset and the audience it serves. The Main market runs SOL, wETH, tBTC, USDC, USDT, and liquid-staking tokens at conservative parameters; the Altcoins market runs higher-volatility assets at tighter LTVs; the PRIME market runs institutional configurations for tokenized private credit.

Two mechanisms do the heavy lifting:

- **Elevation groups** give correlated assets enhanced LTV. When collateral and debt move together — JitoSOL against SOL, one stablecoin against another — their values track, so the market can safely allow far higher leverage than an uncorrelated pair like JitoSOL against USDC. Elevation groups are what make [Multiply](./multiply.md) capital-efficient.
- **Position modes** decide how risk is measured. Cross mode lets one position hold several collateral and debt assets at once, with health calculated across all of them together so one asset's strength offsets another's weakness. Isolation mode restricts a position to a specific pair.

What actually differentiates one market from another comes down to four choices: how assets are grouped for correlation, whether the venue is open or gated, whether the rate floats or is fixed to a term, and whether the collateral sits on-chain or at a custodian. Those four axes generate the whole matrix — main, isolated, altcoin, institutional, permissioned, fixed-rate, custodial. A market can also launch hidden: fully live on-chain, invisible in the app, ready for a private preview or a staged rollout.

The economics live in the reserve. Each asset carries its own interest-rate curve, so the borrow APR rises with utilization and the deposit APR is the borrow interest passed back to suppliers net of the protocol take rate. Origination and flash-loan fees are set per reserve as well, which is how a market prices its own risk and funds its own returns.

This is the engine PRIME used to take a tokenized private-credit asset from listing to over $600M in deposits. The asset became a reserve; the reserve got its parameters; credit and liquidity followed.

→ **[Markets](./markets.md)** · surfaced on [Credit](./credit.md), [Yield](./yield.md), [Multiply](./multiply.md), and the [asset issuers](./asset-issuers.md) page.

---

## 2. Scope — the pricing layer

Before any asset can be lent against, it has to be priced safely. Scope is Kamino's in-house oracle, the single source of truth every product reads to value collateral, trigger liquidations, price swaps, and compute vault NAV.

Scope aggregates price data from multiple independent providers — Chainlink, Pyth, Switchboard, RedStone, and others — into one validated feed. It holds simultaneous feeds for each asset, and its Multi-Price Oracle system dynamically selects the freshest valid price at the moment of each transaction. When a provider's feed goes stale, diverges from the others, or fails a validation check, Scope falls back to the next-best source. To date it has processed **$19.33B in value across its feeds with zero oracle exploits.**

The composition is where the strategic value sits. Scope offers roughly 42 composable price types: take the freshest of several sources with a hard cap on how far they may disagree, floor and cap a price, chain prices together, discount a fixed-term instrument toward its maturity, and run bespoke valuation for a specific real-world asset. On top of that runs a guard stack — staleness limits, divergence limits, reference-price anchors, on-chain time-weighted averages, and price bands. Together these reject a price that spikes outside a band of the last close, which is the mechanism behind **scam-wick protection**: a brief manipulated wick on a thin venue never becomes a liquidation. Pricing can even be configured so that a position cannot be liquidated during a short depeg.

This is what lets Kamino price the assets a generic crypto oracle cannot — tokenized equities with market hours and trading halts, NAV-based funds with redemption pauses, gold, LP tokens, and private-credit instruments. Scope honors equity halts and corporate-action windows, respects NAV pause signals, and runs proof-of-reserves and anti-infinite-mint guards that freeze an asset's usable price if its supply spikes against its own average — a direct defense against an unbacked mint.

Whatever Scope can safely price, Kamino can lend, borrow, loop, and trade. Pricing is the gate to the entire tokenized-asset universe, which is why building a guarded Scope feed is the first step of bringing any new asset on-chain. Every feed is visible in real time at oracles.kamino.fi.

→ **[Scope](./scope.md)** · surfaced on [Credit](./credit.md), [RWA Liquidity](./rwa-liquidity.md), [Yield](./yield.md), and [Security](./security.md).

---

## 3. Permissioning — the access-control layer

The same infrastructure that runs an open, permissionless market also runs a KYC-gated institutional venue. Permissioning is the layer that makes the difference. It adds a single approval check to gated operations, turning open rails into a selectively-gated venue.

It gates at the level you choose: a whole market, a single operation, an individual wallet, or one asset inside a market. It can require approval to deposit, to borrow, or to liquidate. Withdraw and repay always stay open, so a participant can always exit a position and pay down a loan; the gate sits only on entry. Identity and KYC are verified off-chain by a provider, after which the wallet is whitelisted through an API, so the on-chain layer itself stays identity-agnostic. The control is additive and reversible: it can be switched off instantly without disrupting the underlying market or vault.

It shows up in four forms — [permissioned markets](./permissioned-markets.md) (KYC-gated or allowlisted lending venues), [permissioned vaults](./permissioned-vaults.md) (deposits only from approved wallets or a specific source), permissioned assets (one regulated token deposit-gated while others in the same market stay open), and whitelisted liquidators (only approved parties may liquidate sensitive positions).

Permissioning answers a different question than whitelisted reserves: permissioning governs *who* can act, whitelisted reserves governs *where* a vault's capital can flow. Run together, they form the configuration regulated capital actually requires. This is the layer that lets a wealth manager, a fund, or an issuer deploy on the same engine the consumer app runs on.

→ **[Permissioning](./permissioning.md)** · surfaced on [Permissioned Markets](./permissioned-markets.md), [Permissioned Vaults](./permissioned-vaults.md), [Institutional Yield](./institutional-yield.md), and [Security](./security.md).

---

## 4. The liquidation engine — the safety system

A lending protocol is only as trustworthy as its worst loan. Kamino's liquidation engine has cleared **over $120M across more than 100,000 liquidations with $0 in bad debt** — three years in production without a solvency incident.

A position becomes liquidatable when its current LTV exceeds its liquidation LTV, where current LTV is the risk-adjusted debt value over the collateral value and a borrow factor is applied to each debt asset to weight it for risk. When that line is crossed, liquidations stay measured. A close factor caps each event at 10% of the position, so the system unwinds a loan in increments and gives the borrower room to add collateral or repay between rounds. The liquidation bonus scales with how far the position has deteriorated — starting at 0.1% on a prompt liquidation and rising toward a 10% maximum as a position is left unhealthy — which rewards early action and prices in the risk of a delayed one. Liquidations are permissionless: any actor can call the instruction and earn the bonus, and Kamino also supports whitelisted liquidators where a market requires approved parties only.

Beneath that sits a last-resort layer. An auto-deleveraging mechanism can proportionally reduce the largest leveraged positions in the system to protect lenders in an extreme scenario — a backstop that has never had to be triggered in Kamino's operational history. The first line of defense lives one layer down, in Scope: the guard stack that rejects manipulated prices means most spurious liquidations never get a chance to fire.

This engine is what makes [Multiply](./multiply.md) safe to leverage on and what gives a [curator](./curation.md) launching a new market a liquidation system built in from day one.

→ **[Liquidation engine](./liquidation-engine.md)** · surfaced on [Credit](./credit.md), [Multiply](./multiply.md), [Curation](./curation.md), and [Security](./security.md).

---

## 5. Routing — best execution

Every loop opened, every loan repaid with collateral, and every vault deposit that needs a pair conversion runs through Kamino's routing layer, which competes the whole Solana execution landscape against itself on every trade and returns the best price the network can produce.

Kamino Swap is a meta-aggregator: it queries 15+ routing engines in parallel — among them Jupiter/Metis, DFlow, OKX, 0x Settler, LI.FI, OpenOcean, Titan, Raydium, Hashflow, and Kamino's own on-chain router — and returns the highest output quote across all of them. DFlow, Jupiter/Metis, and OKX carry the majority of volume, and any source can win on a given pair and trade size. Before the user signs, the chosen route is simulated against live on-chain state at three points — when routes are first refreshed, again a couple of seconds in, and once more at the instant of execution — and the transaction carries the simulated output the route will produce. The number in the interface is the number that settles. Across more than 370,000 transactions, the match between quoted and received output has held **99.944% mean accuracy.**

The routing stack powers Multiply's leverage flash loans, repay-with-collateral debt conversion, and the single-asset deposits that lending vaults need to convert into a pair — which is why a user looping a position or unwinding a loan gets a fill priced against the whole market without leaving Kamino.

→ **[Routing](./routing.md)** · surfaced on [Kamino Swap](./kamino-swap.md), [Liquidity](./liquidity.md), [Multiply](./multiply.md), and [RWA Liquidity](./rwa-liquidity.md).

---

## 6. The vault engine — the supply side

Markets are the demand side of credit. The vault engine is the supply side — the infrastructure that takes deposited capital and puts it to work behind a managed strategy.

A vault accepts one deposit token, routes it across lending markets at curator-set weights and caps, and issues auto-compounding share tokens. A depositor never picks a market; the curator's strategy decides which borrowers their capital backs. Allocations come in two kinds: standard allocations are always deployed, and conditional allocations are held ready and deployed only when a borrower actually arrives. A rebalancing process keeps the vault near its targets, and an automated safety engine pulls capital out of an asset on a danger signal — an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market.

Withdrawals run in three layers: an instant idle buffer, redemption from markets with available liquidity, and a fair queue for fully-utilized markets where lender exits take precedence over new borrows. Behind it sits an insurance pool — the curator posts first-loss capital that absorbs losses before depositors do, Kamino matches it up to $250K per vault, and a 30-day cooldown governs withdrawal of that backstop.

Conditional allocation is the innovation that ties credit and yield into one machine. A vault can earn floating yield while standing ready to fund a fixed-rate term loan; when an institution like FalconX draws a fixed-rate borrow, the capital moves and the loan executes in a single step. That is how Kamino quotes a fixed-rate yield curve and funds large term loans with no idle-capital drag — the supply side meeting the demand side just in time.

One engine drives [Lending Vaults](./lending-vaults.md), [Institutional Yield](./institutional-yield.md), and white-label vaults; [Meta-Vaults](./meta-vaults.md) and the concentrated-liquidity vaults share the same design. Typical curator economics run 15% performance and 2% AUM to the curator, with Kamino's revenue coming from the protocol take rate on the underlying lending.

→ **[Vault engine](./vault-engine.md)** · surfaced on [Yield](./yield.md), [Curation](./curation.md), and [Lending Vaults](./lending-vaults.md).

---

## 7. Cross-chain — extending the rails to Ethereum

Some of the most valuable tokenized assets live on Ethereum — tokenized gold, Ethena's USDe, and a growing set of RWAs. Kamino's cross-chain bridge makes them usable as collateral on Solana by solving the part that actually matters for a lender: the unwind.

When an Ethereum-native asset backs a loan on Solana and that loan crosses its liquidation threshold, the deep liquidity for that asset sits on Ethereum, where it trades. The bridge executes the recovery there — it liquidates or rebalances the collateral on the Ethereum venues where the order books are, sells it into the market that can actually absorb it, and routes the proceeds back to settle the Solana position. A USDe or tokenized-gold position is cleared against Ethereum-side liquidity at full size, so the loan settles where the collateral has real depth and the position stays solvent through the move.

Paired with Scope pricing the asset and a market configured to hold it, this is what brings off-Solana RWAs into the same credit and yield machine as everything native to Solana. The lender underwrites the asset on its merits, and the unwind path is solved before the asset is ever listed.

→ **[Cross-chain](./cross-chain.md)** · surfaced on [Scope](./scope.md), [Markets](./markets.md), [RWA Liquidity](./rwa-liquidity.md), and the [asset issuers](./asset-issuers.md) page.

---

## How the layers compose

The same seven layers assemble into very different products depending on the settings:

- **A consumer borrow.** An open market priced by Scope, with the liquidation engine watching health and the router handling repay-with-collateral. Anyone uses it from the app.
- **A leveraged position.** A market with an elevation group for high correlated-asset LTV ([Multiply](./multiply.md)), the router opening and closing the loop in one click, the liquidation engine's soft, incremental unwind protecting it, vault liquidity supplying the debt.
- **A fixed-rate institutional credit facility.** A market with the term fixed to a maturity, permissioning gating it to a KYC'd counterparty, Scope discounting the instrument toward maturity, and a vault's conditional allocation funding the draw the moment it lands ([Fixed Rates](./fixed-rates.md), used by FalconX).
- **BTC-backed credit against custodied collateral.** A market configured for off-chain collateral held at a qualified custodian, Scope pricing it against on-chain proof of reserves, permissioning gating the borrower ([Custodial Borrowing](./custodial-borrowing.md), with Pantera).
- **A regulated, transparent yield product.** A permissioned vault on the vault engine funding overcollateralized BTC-backed loans, with a yield-bearing share token, an insurance-pool backstop, and built-in reporting ([Institutional Yield](./institutional-yield.md)).
- **A fintech's embedded yield, with the supply side fully governed.** A single USD vault issues shares to a fintech's users and splits the deposit across tiers with explicit time-to-liquidity: an unallocated buffer earning the floating money-market rate with instant withdrawal, an allocation into a tokenized-credit market with a 0-2 hour redemption SLA, and an allocation into BTC-backed lending against KYB-verified counterparties on a rolling-term basis. Every dollar of yield traces back to a named, KYB-verified borrower, with monthly third-party attestation ([Yield API](./institutional-yield-api.md)).
- **Your own venue.** A curator stands up a market or vault through [Curation](./curation.md) with their own parameters, fees, and access rules — the liquidation engine, the oracle, and the safety controls all included.

Each of those products draws on the same seven layers; what separates them is which layers are gated, how the rate is set, where the collateral sits, and how assets are grouped for correlation. That is what "tell us what you want and the infrastructure supports it" means in practice.

---

## Why it holds together

Three properties make these layers hard to replicate as a set.

**Pricing decides what the whole stack can hold.** Every market, liquidation, swap, and vault NAV reads the same Scope feed, so the set of assets Kamino can lend against is exactly the set Scope can value with a guarded feed — tokenized equities that honor trading halts, NAV funds that respect redemption pauses, private credit discounted toward maturity. A platform running a single off-the-shelf oracle can price the liquid majors and stops there. Scope's guard stack — staleness, divergence, reference anchors, and price bands across 42 composable price types — is what extends the same safety envelope to the assets institutions actually want to finance.

**Credit and yield run on one balance sheet.** Vaults supply the markets borrowers draw on, and conditional allocation lets that supply side quote a fixed-rate curve and fund a term loan the instant it lands. A depositor's capital, a borrower's collateral, and a curator's strategy all settle against the same prices, the same balances, and the same liquidation logic — capital efficiency compounds because the layers share state, and a dollar deposited can back a floating loan today and a fixed-rate draw tomorrow without leaving the system.

**The stack is proven in production.** Over $21B in loans originated with $0 bad debt and zero security incidents, three years live, backed by 20 independent audits and 4 formal verifications. The infrastructure an institution underwrites is the same infrastructure that has run at scale.

**Kamino operates the rails alongside you.** The oracle pricing your asset, the risk parameters on your market, and the integration into your custody and KYB plumbing are run by the team that built them. A market or vault is set up white-glove and tuned to your asset, your access rules, and your mandate; pricing logic stays under Kamino's control end to end; collateral held at a qualified custodian is read through a tri-party agreement with on-chain attestations; and every dollar of yield is traceable to a KYB-verified borrower.
The full diligence picture — the audit program, formal verification, the bug bounty, oracle resilience, the liquidation record, opsec and multisig governance, custody and proof-of-reserves — lives on the [Security](./security.md) page, with the live dashboards at multisig.kamino.fi and oracles.kamino.fi.

---

## Where to go next

- Explore the products these layers compose into — [Credit](./credit.md), [Liquidity](./liquidity.md), and [Yield](./yield.md).
- See who builds on the rails — [Institutions](./institutions.md), [Asset issuers](./asset-issuers.md), [Fintechs & apps](./fintechs-apps.md), and [Curators & managers](./curators-managers.md).
- Read the full trust and diligence picture on the [Security](./security.md) page.
- Read the customer stories — PRIME, FalconX, Pantera, and more — on the [Customers](./customers.md) page.

---

> ## Talk to the team that builds the rails.
> Bring us the asset, the risk mandate, and the access rules. We will show you the venue that supports it.
>
> **[Contact sales](./contact-sales.md)**  ·  **[Launch App](https://kamino.com/home)**
