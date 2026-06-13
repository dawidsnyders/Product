# Infrastructure Rails — Product Reference

Deeper detail on the five shared infrastructure rails in the [offering map](offering-map.md), at the level that informs how we position and build their pages. What each rail is, what it can do, who it serves, how it's reused across the suite, and why it matters.

---

## 1. Markets (KLend)

**What it is.** The configurable lending engine every credit product is built on. A market is a self-contained, isolated venue; inside it, each asset is a lending pool with its own risk settings. Risk in one market never touches another.

**What's configurable (~50 parameters per asset).** Borrow and deposit caps, daily flow limits, LTV and liquidation thresholds, the full interest-rate curve, liquidation economics, origination/flash-loan fees, oracle source and price guards, term (floating or fixed), and access rules. At the market level: a name/identity, correlated-asset risk groups (which let tightly-correlated pairs run at much higher LTV — the basis of efficient leverage and stable-stable carry), and optional permissioning. A market can also be launched "hidden" — fully live on-chain but invisible in the app, for private previews and stealth launches.

**The real market axes.** There is no "core vs isolated" distinction — every market is both. What differentiates one market from another is four choices: correlated-asset risk grouping, permissioning (open vs gated), term (floating vs fixed), and collateral location (on-chain vs at a custodian). Those four axes generate the entire market-type matrix (main, isolated/dedicated, altcoin, institutional/RWA, permissioned, fixed-rate, off-chain-collateral).

**Reuse across the suite.**
- **Credit** — the venue where every borrow happens.
- **Yield** — vaults supply capital into market assets; this is what generates vault yield.
- **Multiply** — a leverage loop is one position holding collateral + debt in a single market, using a correlated-asset risk group for high LTV.
- **Asset issuance** — an issuer's token becomes an asset in a market: instant collateral status (the path PRIME took from $0 to $600M).
- **Liquidity / RWA DEX** — a listed asset needs both a market (to borrow against) and liquidity (to trade).
- **Curation** — anyone can launch and run their own market.
- **Institutional Yield & Off-Chain Collateral** — these are market configurations (fixed-rate and custodied-collateral are settings, not separate engines).

**Why it matters.** Markets are the platform; every other product is a way of using them. Because spinning up a bespoke market is purely a configuration exercise, "tell us what you want and our infrastructure supports it" is literally true — an institution gets a venue tuned to its asset, risk, access rules, and identity through settings alone. Hidden status also gives Kamino private and staged launches.

---

## 2. Scope (oracle / pricing)

**What it is.** Kamino's in-house pricing engine — the single source of truth every product reads to value collateral, trigger liquidations, price swaps, and compute vault NAV.

**What makes it powerful.** ~42 composable price types. Beyond standard external feeds (Pyth, Chainlink, Switchboard, RedStone), it can compose them — take the freshest of several sources with a hard limit on how far they may disagree, cap and floor a price, chain prices together, discount a fixed-term instrument to maturity, and run bespoke valuation for specific RWAs. It maintains its own on-chain time-weighted averages and a guard stack: staleness limits, divergence limits, reference-price anchors, and price bands.

**Pricing the hard assets (the strategic point).** Tokenized equities, NAV-based funds, gold, LP tokens, yield-bearing tokens, and private-credit assets are hard to price safely — limited trading hours, halts, corporate actions, no continuous on-chain price. Scope handles equity market hours and halts, suspends pricing through corporate-action windows, honors NAV "pause" signals, and runs proof-of-reserves and anti-infinite-mint guards (freezing an asset's usable price if its supply spikes against its own average — a defense against an unbacked mint).

**Reuse across the suite.**
- **Markets** — collateral pricing and LTV. Scope effectively decides which assets can be listed at all.
- **Credit / liquidations** — averaging plus divergence and cap guards are the scam-wick protection; pricing can even be configured so a position can't be liquidated during a brief depeg.
- **RWA DEX** — the oracle price *is* the liquidity price, which is why a tokenized asset can trade with no market maker.
- **Routing / swap** — reference and fallback pricing.
- **Yield** — vault NAV and share value.
- **Multiply** — position health and liquidation distance.
- **Institutional Yield / Off-Chain Collateral** — collateral pricing; pairs with on-chain proof of reserves for custodied assets.
- **Asset issuance** — building a guarded price feed is the first step of bringing any new asset on-chain.

**Why it matters.** Whatever Scope can safely price, Kamino can lend, borrow, loop, and trade. Pricing is the gate to the entire tokenized-asset universe, and the guard stack turns oracle risk into bounded, governed risk. This is the moat under the RWA strategy — a competitor on a single off-the-shelf oracle can't price these assets with the same safety envelope.

---

## 3. Permissioning (kperm)

**What it is.** The access-control layer. It adds a single approval check to gated lending and vault operations, turning open infrastructure into a selectively-gated venue.

**How it gates.** It can require approval for deposit, borrow, or liquidate — at the level of a whole market, a specific operation, an individual wallet, or an individual asset within a market. Withdraw and repay always stay open, so users can always exit and repay; capital is screened on the way in. Identity/KYC is handled off-chain (a provider verifies the user, the wallet gets whitelisted), so the on-chain layer stays identity-agnostic. It's additive and reversible — it can be switched off instantly without disrupting the underlying market or vault.

**The expressions.** Permissioned markets (KYC-gated or allowlisted lending venues), permissioned vaults (deposits only from approved wallets or a specific source), permissioned assets (one regulated asset deposit-gated while others in the same market stay open), and whitelisted liquidators (only approved parties can liquidate sensitive positions).

**Distinct from Whitelisted Reserves.** Permissioning gates *who* can act; Whitelisted Reserves gates *where* a vault's capital can flow. Run together, they're the strongest configuration for institutional capital.

**Reuse across the suite.**
- **Credit / Markets** — KYC-gated markets, named-counterparty borrowing, whitelisted liquidators.
- **Yield / Curation** — permissioned vaults for regulated or app-gated depositors.
- **Asset issuance** — per-asset gating for regulated tokens.
- **Institutional Yield** — KYC'd borrowers at the legal layer, approved depositors enforced at the wallet layer.
- **Build** — compliance-grade embeds where a fintech's own onboarding is the gate; the whitelist API is the lever that lets it scale.

**Why it matters.** This is the institutional unlock. It dials any market or vault from fully open to fully gated — per operation, per asset, per wallet — and reverses instantly, with no protocol fork. It's the difference between an open DeFi protocol and infrastructure a regulated wealth manager, fund, or issuer can actually deploy on.

---

## 4. Vault engine (kVault)

**What it is.** The infrastructure that takes deposited capital and deploys it by a managed strategy. A vault accepts one deposit token, routes it across lending markets at curator-set weights and caps, and issues auto-compounding share tokens.

**What it does.**
- **Allocation** — capital is split across markets by weight and cap. Allocations can be *standard* (always deployed) or *conditional* (held ready and deployed only when a borrower arrives). A rebalancing process keeps the vault near its targets.
- **Safety engine** — automated monitoring pulls the vault out of an asset on danger signals (an unbacked mint, a depeg, drying exit liquidity, an oracle diverging from the market).
- **Withdrawals** — three layers: an idle buffer (instant), redemption from markets with available liquidity, and a fair queue for fully-utilized markets where lender exits take precedence over new borrows.
- **Insurance pool** — the curator posts first-loss capital that absorbs losses before depositors; Kamino matches it up to a cap, with a 30-day cooldown.
- **Fees** — configurable performance and management fees (a typical institutional setup is 15% performance / 2% AUM).

**The vault types.** Earn (curated single-asset yield), Institutional Yield (a permissioned, regulated-credit vault), and white-label vaults all run on this one engine. **Meta Vaults** (configurable multi-asset baskets that rebalance via auctions) and the **automated concentrated-liquidity vaults** are separate engines that share the same design DNA.

**The supply-side role (the bridge).** Vaults are how depositor capital reaches borrowers: capital pools in the vault, gets supplied into markets, and earns the borrowers' interest. Depositors never pick a market — the curator's strategy decides which borrowers their capital backs. Conditional allocation is the key innovation: a vault can earn floating yield while standing ready to fund a fixed-rate term loan, and when a borrower arrives the capital moves and the loan executes in a single step — funding large fixed-rate institutional borrows with no idle-capital drag.

**Reuse across the suite.** Yield (Earn, Institutional Yield) · Credit (vaults are the lenders behind every market; conditional liquidity funds fixed-rate borrowing) · Curation (the thing a curator operates) · Build (white-label vaults and embedded-wallet auto-deploy; the Institutional Yield API is a packaged vault embed) · Multiply (borrows the liquidity vaults supply).

**Why it matters.** One engine simultaneously gives depositors curated, auto-compounding yield and supplies the credit markets institutions borrow from — including just-in-time fixed-rate liquidity. Meta Vaults turn it into a product factory for wealth managers and fintechs (e.g. a single vault blending USD yield, leveraged exposure, treasuries, and equities).

---

## 5. Curation (Curation Suite)

**What it is.** The self-serve platform (kamino.com/curators) where a third party launches and runs their own vault or market on Kamino's rails — setting parameters, allocations, fees, access rules, and insurance, optionally white-labeled on their own front-end.

**Two planes.**
- **Permissionless** — anyone can deploy a vault or market on Kamino's audited infrastructure and set their own parameters and fees.
- **Curated / whitelisted** — to appear on Kamino's consumer app (and get Kamino's distribution and marketing), a vault or market must turn on the safety controls (whitelisted reserves, insurance pool, multisig governance) and pass a go-live review. This is Kamino's quality gate.

**Curator personas.** Institutions running a venue to their own mandate; asset issuers listing their token with parameters they control; fintechs deploying a market for their app and surfacing it in their own UI; and thesis-driven curators expressing a view on risk. The active professional roster includes Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, and Galaxy. Multiple curators can run vaults for the same asset — choosing a vault means choosing a curator and their strategy.

**Economics.** Curator performance and AUM fees go to the curator; Kamino's revenue comes from the protocol take rate on the underlying lending. *(Worth a deliberate decision: whether the commercial model stays take-rate-only or adds a platform fee on curated activity.)*

**Reuse across the suite.** Yield (every consumer vault is run by a named curator — the roster is the trust signal) · Credit / Markets (markets are stood up and run by curators, or by you) · Risk (curators are the risk managers — diligence, capital, incentives, first-loss skin-in-the-game) · Build (white-label is the seam — a partner runs a curated vault on their own UI) · Asset issuance (an issuer curates the market for their own asset).

**Why it matters — the platform play.** Curation makes Kamino a platform others build credit and yield products on, the supply-side counterpart to Build. **Curation = operate on Kamino (you're the venue operator). Build = embed Kamino into your app (you're the integrator). White-label is where they meet.** Together they make Kamino a two-sided platform: Kamino supplies the rails, the security, and a built-in consumer demand surface; third parties supply strategy, capital, risk judgment, and their own demand.
