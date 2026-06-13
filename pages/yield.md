# Yield

> **Hub page.** Curated and managed on-chain yield. Routes to five products — Lending Vaults, Meta-Vaults, Institutional Yield, the Yield API, and Permissioned Vaults — and surfaces the demand side (Markets), the engine beneath every vault (Vault engine), the people who run them (Vault Curation), and the trust apparatus (Security).

---

## Hero

# Earn yield on idle capital, run by professional risk managers

Every dollar deposited on Kamino is allocated by a named risk manager, deployed into lending markets that institutions borrow from, and compounded into a single appreciating share. The yield is interest paid by borrowers drawing fixed-rate term loans, looping leveraged positions, and carrying stablecoins against tokenized collateral. The same vault architecture settles a self-custody depositor's USDC and a regulated wealth manager's mandate.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## Where the yield comes from

Yield on Kamino is interest paid by borrowers. Capital you deposit pools in a vault, gets supplied into [lending markets](./markets.md), and earns the rate borrowers pay to draw on it. The supply APY follows a transparent relationship — the borrow rate, multiplied by how much of the pool is utilized, net of the protocol take rate — and every vault publishes the weighted average across its allocations.

This is the same machine that powers [Credit](./credit.md), viewed from the supply side. Borrowers on the demand side draw fixed-rate term loans, loop leverage through [Multiply](./multiply.md), and post tokenized collateral; the interest they pay is the yield depositors earn. The [Vault engine](./vault-engine.md) is the bridge between the two — it takes one deposit token, routes it across markets at a curator's chosen weights and caps, and issues an auto-compounding share that rises in value as interest accrues. The interest settles into the share price itself: 1,000 USDC deposited at $1.00 buys 1,000 shares, and as borrowers pay interest the price per share climbs to $1.06, carrying the position to $1,060. Your 1,000 shares are now worth $1.06 each — the entire return accrues in the price, and you hold the same share count throughout.

[How the Vault engine works →](./vault-engine.md)

---

## Five ways to earn

One architecture, configured five ways — a self-serve single-asset vault, a multi-strategy fund, a regulated credit vault, an embeddable yield API, and any of them gated to an approved depositor base. Lending Vaults, Institutional Yield, and Permissioned Vaults share one vault engine, Meta-Vaults run on a multi-asset engine built to the same design, and the Yield API exposes that infrastructure as endpoints a partner integrates directly. The comparison table below routes by deposit, strategy, and who the capital is for.

### Lending Vaults — curated single-asset yield

Deposit one token (USDC, SOL, JLP) into a vault run by a professional risk manager, and your capital is allocated across lending markets at weights that curator actively manages. Every vault on Kamino's consumer surface is operated by a [named curator](#who-runs-the-vaults) who publishes their own strategy, reserve exposure, fees, and track record. Multiple curators can run vaults for the same token, so choosing a vault is choosing a curator and the view they take on risk.

Rewards auto-compound into the share price. Withdrawals resolve through three layers — an idle buffer for instant exits, redemption from markets with available liquidity, and a fair queue where lender exits take precedence over new borrows — so depositors can always get in line to leave, even when a market is fully utilized.

[Explore Lending Vaults →](./lending-vaults.md)

### Meta-Vaults — a managed fund in a box

A configurable, multi-asset, multi-strategy vehicle. One vault holds a blend the manager defines — for example 50% stablecoin lending yield, 30% leveraged SOL exposure, 20% tokenized treasuries — and the manager sets a target weight for each sleeve.

As deposits, withdrawals, and price moves drift the blend off target, an on-chain Dutch auction rebalances it. External solvers compete to buy and sell the underlying assets back toward the targets, the vault fills at the best price they quote, and any solver can clear a rebalance the moment the blend drifts past its band — so a manager moves a whole book of positions without quoting each leg by hand.

The manager owns the fees, the allocation weights, and the access rules, and the vault ships with live NAV, per-sleeve attribution, and depositor reporting built in. Wealth managers, asset managers, and fintechs use it to stand up a branded fund on day one.

[Explore Meta-Vaults →](./meta-vaults.md)

### Institutional Yield — regulated BTC-backed credit

A USDC vault that funds overcollateralized loans to KYC-verified institutional borrowers, secured by Bitcoin held at qualified custodians such as Anchorage. Loans open at a maximum 60% loan-to-value, the lending operation holds a license from Liechtenstein's Financial Market Authority and reports to it on a continuing basis, collateral sits under tripartite custody agreements that contractually prohibit rehypothecation, and the structure targets 6–8% APY. Transparency runs at three cadences: a real-time, per-loan feed from the same loan-management system the regulator monitors, a weekly report, and an independent monthly attestation signed by an accounting firm. A liquidity buffer covers immediate withdrawals; larger redemptions queue and fill as loans mature.

[Explore Institutional Yield →](./institutional-yield.md)

### Yield API — embeddable yield-in-a-box

Tailorable Meta-Vaults, packaged as endpoints a fintech or institution integrates into its own stack. Your users deposit a stablecoin and hold a yield-bearing share token that appreciates as the underlying loan book pays interest — a deposit call, a withdraw call, a balance read, and a configuration layer you control. Kamino runs the credit, the custody, the compliance, and the reporting beneath it. You set a per-user deposit cap, earn a revenue share configured in code, and can run the whole product under your own branded stablecoin issued via Coinbase's stablecoin-as-a-service: your stablecoin becomes the unit of account, and balances flow into a tailored Meta-Vault structure and earn. A wallet adds a high-yield balance, a neobank launches an interest-bearing account, an exchange turns idle stablecoins into a yield product — all against the same API.

[Explore the Yield API →](./institutional-yield-api.md)

### Permissioned Vaults — gated yield for compliant mandates

Any vault above can be gated to a specific depositor base. [Permissioning](./permissioning.md) enforces an on-chain allowlist: deposits require approval, the rest of the vault behaves normally, and a depositor can always redeem once allowed. Wallets are whitelisted via API after a KYC or accreditation check completes off-chain, which lets a fintech automate onboarding for its own user base, or a fund restrict a vault to named counterparties under bilateral agreements.

[Explore Permissioned Vaults →](./permissioned-vaults.md)

---

## Which one is for you

| | **Lending Vaults** | **Meta-Vaults** | **Institutional Yield** | **Yield API** | **Permissioned Vaults** |
|---|---|---|---|---|---|
| **Deposit** | One token | Multiple assets / strategies | USDC | A stablecoin, via your app | Any of the above, gated |
| **Strategy** | Single-asset lending across markets | Configurable multi-strategy blend | Regulated BTC-backed credit | Regulated credit, embedded | Inherits the underlying vault |
| **Run by** | A named curator | The portfolio manager | A regulated lending operation | You, on Kamino's rails | The vault's curator |
| **Access** | Open | Open or gated | KYC-verified | Your users, your cap | Allowlisted |
| **Built for** | Self-serve depositors, treasuries | Wealth & asset managers, fintechs | Institutions allocating to credit | Fintechs, wallets, neobanks, exchanges | Regulated mandates, compliant fintech yield |
| **Returns** | Market-driven, auto-compounding | Blended across the portfolio | Targets 6–8% APY | 6–8% APY to your users, you keep a spread | Same as the underlying vault |

For wealth and asset managers weighing where to allocate client capital, start with [Institutions](./institutions-wealth-asset-managers.md). To stand up and operate your own vehicle end-to-end, see [Launch a managed fund](./uc-launch-a-managed-fund.md).

---

## The safety built into every vault

A vault is a managed strategy, and Kamino builds the guardrails into the engine so a curator's judgment runs inside hard limits.

**Insurance pool — curator skin in the game.** A curator stakes their own capital as first-loss backing, locked under a mandatory 30-day cooldown so they cannot exit ahead of depositors. If a vault takes a loss, that capital absorbs it before any depositor is touched; Kamino matches curator first-loss capital up to $250K per vault. The cooldown means a curator who sees trouble coming is locked in alongside the people who trusted them.

**Whitelisted reserves — bounded by design.** A vault can be restricted so it allocates only into Kamino-verified markets. Permissioning gates *who* can act; whitelisted reserves gate *where* capital can flow. Run together, a compromised curator key still cannot route depositor capital into an unvetted market.

**An automated safety engine.** The [Vault engine](./vault-engine.md) monitors every allocation and pulls capital out of an asset on danger signals — an unbacked mint, a depeg, drying exit liquidity, an oracle diverging from the market — without waiting for a human.

**Priced by Scope.** Every vault's NAV and share value, and every liquidation that protects the markets beneath it, reads from [Scope](./scope.md), Kamino's in-house oracle. Scope has priced $19.33B of value with zero oracle exploits.

[See the full security program →](./security.md)

---

## Who runs the vaults

The people who construct and run these strategies are Kamino's Vault Curation layer: professional managers who decide how much capital goes to each reserve, which markets to enter and exit, and how to balance yield against concentration and utilization risk. The roster is the trust signal: **Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, Galaxy**. To appear on the consumer app, a vault turns on the safety controls — whitelisted reserves, the insurance pool, multisig governance — and passes a go-live review that checks an audited reserve configuration, multisig governance of every upgrade, and a published strategy with its risk parameters disclosed. That review is Kamino's quality gate.

The proof is on the platform today: a RockawayX-curated vault runs white-labeled inside Marinade's own interface, and the same curator roster supplies the liquidity that filled FalconX's inaugural fixed-rate institutional order. Kamino's RWA markets, where these vaults allocate, hold **$1B+ in deposits across six markets** spanning home loans, equities, reinsurance, and private credit.

[Vault Curation →](./curation.md) · [Meet the curators →](./curators-managers.md)

---

## Economics

Yield reaches depositors as share-price appreciation; fees are set by the curator and disclosed on every vault. A typical institutional configuration is a **15% performance fee** and a **2% annual management fee**, both accruing continuously in the deposit token. The performance fee is charged on vault profits; the management fee on total assets. Kamino's own revenue is the protocol take rate on the underlying lending, set per market and already netted out of the supply APY each vault publishes — so the APY you see is the APY after Kamino's cut.

---

## Build on Kamino

The Vault engine is a product factory. The same infrastructure that runs a single-asset Lending Vault runs a regulated credit fund, a multi-strategy Meta-Vault, and a fintech's embedded earn product.

- **Run your own vault** — launch and operate a market or vault on Kamino's audited rails, white-labeled on your own front-end if you choose. [Vault Curation →](./curation.md)
- **Embed yield in your app** — give your users a yield balance through a deposit call, a withdraw call, and a balance read, optionally under your own branded stablecoin issued via Coinbase's stablecoin-as-a-service. [Yield API →](./institutional-yield-api.md) · [BuildKit →](./buildkit.md)

---

## Keep exploring

- [Lending Vaults](./lending-vaults.md) · [Meta-Vaults](./meta-vaults.md) · [Institutional Yield](./institutional-yield.md) · [Yield API](./institutional-yield-api.md) · [Permissioned Vaults](./permissioned-vaults.md)
- The engine and its inputs: [Vault engine](./vault-engine.md) · [Markets](./markets.md) · [Scope](./scope.md) · [Permissioning](./permissioning.md)
- The other side of the machine: [Credit](./credit.md) · [Multiply](./multiply.md)
- Who operates it: [Vault Curation](./curation.md) · [Curators & managers](./curators-managers.md)
- The diligence: [Security](./security.md)

---

**Put institutional capital to work, or ship yield to your users.**

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
