# Launch a managed fund

*Use case · Solutions › By what you want to do. Serves [wealth & asset managers](./institutions-wealth-asset-managers.md), [curators & managers](./curators-managers.md), and [fintechs & apps](./fintechs-apps.md).*

---

## Stand up an on-chain fund, manage it, and put it inside your product — on infrastructure that has run three years in production with $0 bad debt.

A managed fund on Kamino is a vehicle you configure. You define a strategy, set your performance and management fees, gate your investors, and deploy capital across credit and yield venues that already hold billions in deposits — all on the audited stack the rest of Kamino runs on, ready to take a deposit on day one. Investors receive an auto-compounding share token whose price reflects the vault's net asset value in real time. The reporting feed, the position data, and the embed surface come with it.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## What you get, end to end

Launching and running a fund touches seven jobs. Each maps to a product that is live today.

| The job | The product | What it does |
|---|---|---|
| Create the vehicle | [Meta-Vaults](./meta-vaults.md) | A configurable multi-asset, multi-strategy vault — the fund in a box. |
| Launch and operate it | [Curation Suite](./curation.md) | Self-serve deployment, parameters, fees, allocations, governance. |
| Deploy across strategies | [Markets](./markets.md) · [Multiply](./multiply.md) · [Yield](./yield.md) | Lending yield, leveraged exposure, tokenized assets, and multi-asset baskets in one vehicle. |
| Run capital safely | [Vault engine](./vault-engine.md) | Allocation, rebalancing, the automated safety engine, and the insurance pool. |
| Set your economics | [Curation Suite](./curation.md) | Your performance and management fees, accruing in the deposit token and paid on your schedule. |
| Gate your investors | [Permissioned Vaults](./permissioned-vaults.md) | Deposits only from approved wallets, screened on the way in. |
| Integrate and report | [BuildKit + the data API](./buildkit.md) | Embed the vault and pull TVL, APY, share price, and history out of the box. |

Underneath, the fund deploys into the same venues every Kamino product uses: lending [Markets](./markets.md), leveraged exposure through [Multiply](./multiply.md), and curated [Yield](./yield.md). You compose the strategy from primitives that already carry depositor capital and a liquidation record.

---

## Create the vehicle

A [Managed Portfolio](./meta-vaults.md) is a vault you configure to your mandate. It accepts a deposit token, routes that capital across the lending markets you choose at weights and caps you set, and issues an auto-compounding share token to investors.

The configuration is yours from the first transaction:

- **Identity** — a vault name and a receipt-token ticker your investors hold (`kv[SYMBOL]` form), both under your control.
- **Deposit token** — the asset your fund denominates in, fixed at creation so investors always know what they hold.
- **Allocations** — the lending markets the strategy deploys into, each with a target weight and a hard cap.
- **Access** — open to anyone, or gated to wallets you approve (see *Gate your investors* below).

Spinning up a bespoke vehicle is a configuration exercise. The infrastructure beneath it — the markets, the oracle, the liquidation engine — is the same hardened stack the rest of Kamino runs on, already cleared by 20 external audits, so you can take a deposit on the day you finish configuring.

[Explore Meta-Vaults →](./meta-vaults.md)

---

## Deploy across real strategies

A fund is only as good as what it can hold. Kamino gives a manager a wide, composable strategy surface:

- **Lending yield** — allocate into [lending markets](./markets.md) and earn the interest borrowers pay. Capital can be deployed continuously, or held as conditional liquidity that earns floating yield until a [fixed-rate](./fixed-rates.md) term borrower draws it down, funding large institutional loans with no idle-capital drag.
- **Leveraged exposure** — express a directional or carry view through [Multiply](./multiply.md), with leverage looped up to 10x inside a correlated-asset risk group.
- **Tokenized assets** — deploy into venues for tokenized treasuries, private credit (Figure's PRIME crossed $1B in Kamino RWA deposits), gold, and equities, priced by the [Scope](./scope.md) oracle and tradable through [RWA Liquidity](./rwa-liquidity.md).
- **Multi-asset baskets** — blend USD yield, leverage, treasuries, and equities into a single vehicle that rebalances toward target weights through an auction process.

Every allocation prices off one source of truth. [Scope](./scope.md) values collateral, share NAV, and liquidation distance across roughly 42 composable price types, with staleness and divergence guards that hold a position safe through a brief depeg.

---

## Run capital safely

The [vault engine](./vault-engine.md) is the machinery a manager would otherwise have to build and defend. It is the same engine behind Kamino's curated Lending Vaults and the regulated [Institutional Yield](./institutional-yield.md) product.

- **Allocation and rebalancing.** Capital is split across markets by weight and cap. Standard allocations stay deployed; conditional allocations sit ready and deploy only when a borrower arrives. A rebalancing process keeps the vault near its targets.
- **The safety engine.** Automated monitoring pulls the vault out of an asset the moment a danger signal fires — an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market. Risk is acted on before it reaches depositors.
- **Withdrawals in three layers.** An idle buffer settles instantly; available market liquidity settles next; a fair queue handles fully-utilized markets, where lender exits take precedence over new borrows. Investors can always get out.
- **First-loss capital.** You deposit into your own vault, take the share tokens, and stake them into the insurance pool, where they sit first in the loss waterfall and absorb a bad-debt event before any depositor does. That staked capital earns the vault's APY while it stands as the backstop, so your skin in the game keeps working. Kamino matches your first-loss capital up to $250K per vault, and a 30-day cooldown governs withdrawals from the pool — once you signal an exit, the capital stays locked and visible for 30 days, giving depositors time to react.

This is the apparatus that produced the track record: $120M+ liquidated across 100k+ liquidations, $0 bad debt, three years in production without incident. [See the full security posture →](./security.md)

---

## Set your economics

You set two fees on the vault, both accruing continuously in the deposit token:

- **Performance fee** — a share of vault profits. A typical institutional setup runs 15%.
- **Management fee** — an annualized charge on assets under management. A typical setup runs 2%.

Both fees flow to you, the vault admin, and you collect them on your own schedule. If you choose, you can return accrued fees to depositors. Kamino's revenue comes from the protocol take rate on the underlying lending — the curator fees are yours.

A small on-chain operations fee covers the cost of deploying capital into the markets and goes to the protocol. Withdrawal penalties, where set, return to the vault and benefit the remaining depositors.

---

## Gate your investors

For a regulated mandate, the door has to be selective. [Permissioned Vaults](./permissioned-vaults.md) gate deposits to wallets you approve, while withdrawals and redemptions stay open — capital is screened on the way in, and an investor can always exit.

Identity is verified off-chain by your KYC provider; the approved wallet is then whitelisted through an API. Every gated deposit requires a co-signature from the access-control layer, so an unapproved wallet's transaction reverts on-chain. Gating is additive and reversible — turn it on for a regulated vehicle, leave it off for an open one, and run both side by side. [How permissioning works →](./permissioning.md)

The same controls that gate investors also gate where the vault's capital can flow: with whitelisted reserves enabled, the vault can only allocate into Kamino-verified markets, protecting depositors even against a compromised manager key. Run together, permissioning and whitelisted reserves are the configuration regulated capital actually allocates into.

---

## Integrate it and get data out of the box

A fund has to live where your investors are and report what it's doing.

- **Embed it.** With [BuildKit](./buildkit.md) you put deposit, withdraw, and position views directly inside your own product in a few lines. With [white-label](./white-label.md) you run the vault entirely on your own front-end, branded as yours — the path Marinade took.
- **Pull the data.** Kamino's [REST API](./developers.md) exposes real-time APY, exchange rate, and TVL, plus time-series history for every vault, and reads any holder's positions across the protocol. That feed drives an investor dashboard, a monthly statement, or an analytics pipeline, and no API key is required for the public endpoints — so you report on your fund without standing up your own indexer.
- **Report with credibility.** Share NAV is computed on-chain from the oracle and updates as interest accrues — the share price your investors see is the share price the protocol settles. For a model of full institutional reporting, [Institutional Yield](./institutional-yield.md) pairs a vault with a real-time loan-book feed, weekly collateral reporting, and monthly independent attestation.

[See the developer docs and APIs →](./developers.md)

---

## Why managers run their funds here

- **The rails are proven.** $0 bad debt across 100k+ liquidations, 20 external audits, 4 formal verifications, and oracle infrastructure that has priced $19.33B with zero oracle exploits. The diligence question is answered before the first conversation. [Security →](./security.md)
- **The demand is already on the platform.** A curated vault can list on Kamino's consumer app and reach its depositor base, once it turns on the safety controls and passes the go-live review. Distribution comes built in.
- **The strategy surface is deep.** Credit, leverage, tokenized assets, and multi-asset baskets compose into one vehicle, priced by one oracle, defended by one liquidation engine.
- **You keep your fees and your brand.** Performance and management fees are yours; the front-end can be entirely your own.

The professional roster already operating venues on these rails includes Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, and Galaxy.

### In production: Marinade

Marinade wanted a yield product its users could open without leaving Marinade's app, under Marinade's own brand. It runs one today as a [white-label](./white-label.md) vault: depositors transact entirely inside Marinade's interface, holding an auto-compounding share token, while the lending, the [Scope](./scope.md) pricing, the [liquidation engine](./liquidation-engine.md), and the insurance pool run on Kamino's audited contracts underneath. Marinade owns the brand, the deposit flow, and the fee economics; the credit infrastructure it would otherwise have spent years building and auditing was already live on day one. Any team that wants a branded yield product can stand up the same deployment.

---

## Where to go next

- **Allocate client capital into managed yield and run mandates** → [Wealth & asset managers](./institutions-wealth-asset-managers.md)
- **Operate credit and yield venues professionally** → [Curators & managers](./curators-managers.md)
- **Ship yield and credit inside your app** → [Fintechs & apps](./fintechs-apps.md)
- **Put a curated yield strategy inside your app and earn on idle balances** → [Embed yield in your app](./uc-embed-yield.md)

---

## Start

Tell us the strategy, the investors, and the front-end you have in mind. We will stand up the vehicle with you.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
