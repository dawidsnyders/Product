# Curation

> Surfaced in the Products menu as **Market Curation ↗** (under Credit) and **Vault Curation ↗** (under Yield) — the same suite framed for each side of the venue you run.

---

## Build and manage institutional-grade yield vaults and credit markets

Deposit demand is already on the platform the day you launch. Every venue you stand up draws on the same consumer app, borrower flow, and distribution that holds **$2.5B in assets** and has originated **$21B+ in loans**. You bring the strategy, the risk judgment, and the capital relationships; Kamino supplies the audited infrastructure, the in-house oracle, the liquidation engine, the operational support, and the demand surface that funds what you launch — and operates the rails underneath it.

The curators operating on these rails today include Gauntlet, Steakhouse, Sentora, RockawayX, and Allez, with venues surfaced through partners like Squads and Phantom. Their vaults and markets sit on the same engine you deploy on.

**[Contact sales](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)

---

**$2.5B** in assets under management · **$21B+** in loans originated · **$120M+** in interest generated · **$0** bad debt across 3+ years in production · **20 independent security audits**, 4 formal verifications

Kamino is Solana's largest on-chain lending and risk infrastructure provider, used by licensed exchanges, federally chartered digital-asset banks, and publicly listed companies.

---

## What you can launch

A venue on Kamino takes one of two forms, and you operate both from the same suite.

### A yield vault

A vault accepts one deposit token — USDC, for example — distributes it across lending reserves at the weights and caps you set, and issues an auto-compounding share token to depositors. The vault abstracts market selection and risk management away from the depositor: they hold one position whose value appreciates as yield accrues, while you construct and actively manage the portfolio underneath. You define the allocation strategy; the [Vault engine](./vault-engine.md) executes it.

You deploy into three classes of yield source, and a single vault can blend them:

- **RWA markets** — lending against tokenized real-world assets spanning home loans, equities, reinsurance underwriting, and private credit. Six RWA markets run today with $1B+ in combined deposits, each under active risk management.
- **Crypto asset markets** — lending against BTC, SOL, yield-bearing stablecoins, and more across 10+ markets with $2B+ in combined size, each under active risk management.
- **[Institutional Yield](./institutional-yield.md)** — a USDC vehicle that earns from BTC-backed, overcollateralized lending to institutions and regulated banks under European regulatory oversight, issuing the `kiUSDC` share token to depositors. It is available exclusively on Kamino.

Vault curation is the home of [Lending Vaults](./lending-vaults.md), [Meta-Vaults](./meta-vaults.md), [Institutional Yield](./institutional-yield.md), and [Permissioned Vaults](./permissioned-vaults.md). Every one of those products is a vault you can run.

### A lending market

A market is a self-contained, isolated venue with its own reserves, risk parameters, and oracle configuration. You configure each asset across the full reserve parameter set — deposit and borrow caps, daily flow limits, LTV and liquidation thresholds, the interest-rate curve, liquidation economics, oracle source and price guards, term, and access rules — and the market carries its own name and identity. Spinning up a bespoke market is a configuration exercise: you set parameters and deploy, with the contract code already audited and in production. The full mechanics live on the [Markets](./markets.md) infrastructure page.

You can group correlated assets into an elevation group so a tightly-correlated pair runs at much higher LTV, the basis of efficient leverage and stable-stable carry. You can enable fixed-rate reserves, borrow orders, obligation orders, and auto-deleverage per market. And you can launch a market **hidden** — fully live on-chain, invisible in the app — for a private preview or a staged launch.

Market curation is where the credit venue lives: it powers [Permissioned Markets](./permissioned-markets.md), and every loan in [Credit](./credit.md) happens inside a market someone configured.

---

## From launch to fees: how a vault runs

Standing up a vault and putting it to work follows one path, and most of it is configuration:

1. **Create the vault.** Choose the deposit token, set your fees, and configure the vault-level parameters.
2. **Configure allocations.** Select the yield sources across Kamino's markets and credit products, and assign a target weight and a hard cap to each.
3. **Embed, if you want to.** Wire deposits, withdrawals, and position tracking into your own app so the vault runs inside your product, under your brand.
4. **Take deposits.** Users deposit on Kamino or through your own surface. Capital routes automatically to reserves against your allocation targets.
5. **Yield accrues.** Returns flow back into the vault and appreciate every depositor's position automatically.
6. **Collect curator fees.** Performance and management fees accrue continuously and you collect them at your discretion.

---

## The allocation controls you operate

Once a vault is live, you steer it with a set of controls built for granular management of vault behavior:

- **Automated rebalancing.** A rebalancer syncs actual allocations back toward your targets every 15 minutes as deposits, withdrawals, and accrued interest move the position. Manual rebalancing is available at any time.
- **Standard and conditional allocations.** A standard allocation keeps capital deployed and earning. A conditional allocation holds capital ready and deploys it the moment a borrower arrives — the supply side behind [Fixed Rates](./fixed-rates.md) and borrow orders, covered in full below.
- **Allocation caps.** A hard maximum per allocation, independent of weight, to bound concentration risk. When a target weight would exceed an allocation's cap, the excess distributes across the remaining reserves.
- **Liquidity buffer.** An unallocated weight — set as an absolute amount or relative to vault size — held specifically to service instant withdrawals without rebalancing out of lending reserves.
- **Role separation.** A Vault Admin holds full control under a two-step ownership transfer; an Allocation Admin can adjust weights and caps only. Day-to-day operations are delegated without exposing full control of the vault.

---

## Fixed-rate credit and conditional liquidity

Kamino's fixed-rate, fixed-term yields are available exclusively through curator vaults, and they give a curator predictable lending terms with strong capital efficiency. Fixed-rate allocations are demand-driven and tend toward full utilization, so the capital a curator commits to them works close to all the time. The yields a borrower pays are set by the orders that fill, which makes fixed-rate reserves a high-conviction allocation for a curator with a view on where rates should sit.

Conditional liquidity keeps committed term capital earning the whole time it waits. A curator makes a conditional allocation into a fixed-rate reserve, and the capital stays in floating-rate reserves earning yield right up to the moment a borrower requests a fixed-rate loan — at which point the vault allocates and rebalances on demand, in one step, and the loan executes. A priority system controls which standard reserves can be drawn down to fund the conditional reserves, and in what order, so the curator defines the exact liquidity hierarchy across their allocation strategy. Capital earns floating yield while it waits and converts to a fixed-rate loan only when the demand is real.

---

## How open, how curated

The suite runs on two planes, and you choose which one your venue lives on.

### The permissionless plane

Deploy a vault or market on Kamino's audited infrastructure and set your own parameters, allocations, and fees. You own the venue. Production vaults operate from [manage.kamino.com](https://manage.kamino.com) under Squads multisig ownership; production markets are configured through Kamino's tooling and transferred to a multisig before going live. This is where a curator with their own distribution operates on their own schedule and their own terms.

### The curated plane

To appear on Kamino's consumer app — and earn Kamino's distribution and marketing — a vault or market turns on the safety controls and passes a go-live review. The controls are concrete and on-chain:

- **Whitelisted reserves** — a smart-contract constraint that permanently restricts allocations to Kamino-approved reserves, enforced at the contract level and irreversible once enabled, so a compromised admin key stays inside the verified set and cannot allocate to unverified markets. This is required for a vault to appear on Kamino's interface.
- **Insurance pool** — the curator locks first-loss capital that absorbs bad debt before any depositor is touched. A 30-day withdrawal cooldown makes any curator exit a public, on-chain signal that depositors see well before it completes. The first-loss commitment is the curator's own capital; Kamino takes no fees or revenue from curator vaults.
- **Multisig governance** — every upgrade and operation routes through a Squads multisig, so no single key can unilaterally modify vault parameters.

The curated plane is Kamino's quality gate. It is why a depositor browsing the app sees only venues that have committed real first-loss capital and locked allocations to verified reserves. The roster that has passed it is the trust signal.

Beneath those gates, a layer of vault-parameter controls bounds the day-to-day risk: withdrawal penalties return to the vault and accrue to every remaining depositor, which closes deposit-yield-claim-withdraw exploits; minimum deposit amounts, invest delays, and per-reserve rate limiting prevent dust attacks and rounding exploits; and the liquidity buffer guarantees instant-withdrawal availability at all times.

---

## White-label: your front-end, Kamino's rails

A curated venue can [run entirely on your own front-end](./white-label.md). Your users see your brand and your product; the vault or market underneath is Kamino's engine, security, and oracle. Marinade runs a white-label vault this way. The venue is yours to run, the surface is yours to brand, and the [BuildKit](./buildkit.md) components let you wire it into your app. For a fintech that wants to offer yield to its users while Kamino runs the venue underneath, the [Yield API](./institutional-yield-api.md) packages allocation, accounting, and payout into a single integration.

---

## Who curates

Curation serves four distinct operators, each running the same primitives to a different mandate.

| Persona | What they run | Why Kamino |
| --- | --- | --- |
| **Institutions** | A venue tuned to their own mandate — allocation, risk, access rules they control | Regulated-capital-ready: permissioning, whitelisted reserves, qualified custody, and transparent reporting come built in |
| **Asset issuers** | The market for their own token, with parameters they set | Their asset gets instant collateral status and oracle-priced liquidity from day one ([Asset issuers →](./asset-issuers.md)) |
| **Fintechs** | A market or vault for their app, surfaced in their own UI | White-label plus embed: the venue lives entirely inside their product, under their brand, with in-app yield powered by their vault |
| **Asset managers** | A vault expressing a view on risk and yield, actively managed on behalf of depositors | Audited rails, a built-in demand surface, three classes of yield source, and the tooling to manage it without building infrastructure |

Multiple curators can run vaults for the same asset. For a depositor, choosing a vault means choosing a curator and their strategy — which is why the named roster matters, and why each curator's first-loss capital sits visibly behind their venue. The full operator story lives on the [Curators & managers](./curators-managers.md) page.

---

## The safety you inherit

Launching a market means the safety apparatus comes built in. The [Liquidation engine](./liquidation-engine.md) — auction liquidations, soft and auto-deleverage liquidations, fixed-rate maturity liquidations, and scam-wick protection at the oracle layer — has cleared $120M+ across 100k+ liquidations with $0 bad debt. The [Scope](./scope.md) oracle prices your collateral with multi-source composition and a guard stack that turns oracle risk into bounded, governed risk. The [Vault engine](./vault-engine.md) carries an automated danger-trigger safety engine that pulls a vault out of an asset on an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market, plus three-layer withdrawals that prioritize lender exits over new borrows.

All core contracts are open source on GitHub with verifiable on-chain builds, and four formal verifications provide mathematical proofs of correctness for the engine you deploy on.

For venues that screen who can act, [Permissioning](./permissioning.md) gates deposit, borrow, or liquidate at the level of a market, an operation, a wallet, or a single asset, with KYC handled off-chain at the application layer while the on-chain venue stays open to any approved address. It is additive and reversible. Layered with whitelisted reserves, the insurance pool, and qualified custody, it maps onto how regulated capital actually allocates. The full diligence picture is on the [Security](./security.md) page, including the risk dashboard, monthly risk report, and VaR and price-shock modeling that professional curators run on top.

---

## Data and monitoring

Every venue reports in real time and historically, through both in-app dashboards and the API, so the venue integrates with the books and reporting you already run. Out of the box from the moment a vault goes live:

- **Vault metrics** — real-time and historical TVL, APY, exchange rate, and holdings across every vault.
- **Allocation data** — current allocation state, per-reserve distribution, and historical allocation volume over time.
- **Depositor data** — per-user positions, P&L in USD, SOL, or token denomination, transaction history, and cumulative performance metrics for your depositors' statements.
- **Reward programs** — active incentive programs, reward APYs, distribution status, and custom reward configuration you run on top.

A live vault surfaces this plainly: depositor count, vault AUM, all-time interest generated, share price, and historical APY against last month, all in one view.

---

## The platform you operate from

You run everything from the curator platform at [curators.kamino.com](https://curators.kamino.com):

- **Allocation dashboard** — view and edit allocation weights, caps, types, and priorities, and batch-edit multiple reserves in a single transaction with real-time vault-APY projections before you commit.
- **Fee and parameter controls** — configure performance and AUM fees, withdrawal penalties, minimum deposits, liquidity buffers, and more, with full simulation before execution.
- **Multisig integration** — manage vaults via Squads multisig, with SquadsX wallet-extension support for in-app management.

Beyond the interface, three integration paths let you embed Kamino into your own product and offer yield directly to your users — in your app, under your brand. Your users interact with your interface; Kamino runs the infrastructure:

- **REST API** — build deposit and withdrawal transactions and read vault metrics, user positions, P&L history, and reward data, with no SDK dependency.
- **TypeScript SDK** — full programmatic control: create vaults, manage allocations, build transactions, query on-chain state, and claim rewards. The deepest integration path.
- **CLI** — command-line vault operations that generate Squads-compatible transactions: create vaults, update allocations, and manage fees.

The developer reference lives at [kamino.com/build](https://kamino.com/build).

---

## Economics

Two revenue streams sit side by side, each kept whole: the fees you charge your depositors, and the take rate Kamino earns on the rails underneath.

**Your fees, to you.** A vault carries two fees you set at any level and collect:

- A **performance fee**, your share of the interest the vault generates.
- A **management fee**, charged as an annual percentage on assets under management, taken continually according to vault AUM whether or not the vault produced yield.

Both accrue continuously in the deposit token. You collect accrued fees on demand, and you can return them to depositors at any time. Set both to zero and the venue runs at cost — the right call for a mandate built around growing depositor share, where the vault's pull is its price. Kamino takes no fees or revenue from curator vaults; every fee added to a vault is at the curator's discretion.

**Kamino's revenue, from the rails.** Kamino earns a protocol take rate on the underlying lending — the same take rate that sits inside the supply-APY math (`supply APY ≈ borrow rate × utilization × (1 − protocol take rate)`). Curator fees stay with the curator. Kamino monetizes the infrastructure beneath every venue, so the platform earns when curators bring volume — its incentive is the total credit flowing across all venues, which grows every time a curator succeeds.

---

## Where this fits

Kamino's platform has two surfaces for builders. Curation is where you operate a venue: you deploy the vault or market, set its parameters, and run it as your own. [BuildKit](./buildkit.md) is where you embed Kamino into a product you already run, wiring the rails behind your own app. [White-label vaults](./white-label.md) bring both together — a venue you operate, surfaced entirely inside your brand.

Explore the products you can run as a curator: [Lending Vaults](./lending-vaults.md) · [Meta-Vaults](./meta-vaults.md) · [Institutional Yield](./institutional-yield.md) · [Permissioned Vaults](./permissioned-vaults.md) · [Permissioned Markets](./permissioned-markets.md). Or follow the end-to-end path in [Launch a managed fund](./uc-launch-a-managed-fund.md).

The infrastructure underneath: [Markets](./markets.md) · [Scope](./scope.md) · [Permissioning](./permissioning.md) · [Vault engine](./vault-engine.md) · [Liquidation engine](./liquidation-engine.md).

---

## Build your venue

Talk to the team about standing up a market or vault tuned to your mandate, or deploy on the permissionless plane today.

**[Contact sales](./contact-sales.md)**  ·  [Launch App](https://kamino.com/home)
