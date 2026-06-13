# Lending Vaults

**Supply one asset. A named curator with first-loss capital allocates it across Kamino's credit markets.**

A Lending Vault takes a single token — USDC, SOL, JLP — and allocates it across Kamino's lending markets under the strategy of a professional curator who posts their own capital to absorb the first loss. Supply USDC, hold a share token like kvUSDC, and its redemption value rises as the borrowers your capital backs pay interest. The curator chooses which markets to enter, how heavily to weight each one, and where the risk-adjusted yield sits. You hold one position; behind it runs a managed, continuously rebalanced book of on-chain credit.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## What you're depositing into

When you supply to a Lending Vault, your capital joins one aggregated pool that the curator allocates across reserves inside [Kamino's lending markets](./markets.md) — Main Market, JLP Market, Altcoin Market, the PRIME RWA market, and others. A curator running a USDC vault might hold 60% in Main Market USDC at the variable rate, 30% in the JLP Market, and 10% in fixed-rate reserves. That split is the strategy, set and revised by the curator as utilization, rates, and risk conditions move.

Yield is the borrowers' interest. Across every reserve the vault touches, borrowers pay to draw your capital, and that interest flows back to the vault. The displayed APY is the weighted blend of the rates the curator's allocation is currently earning — each reserve's yield, scaled by how much of the vault sits in it — shown net of the curator's performance and AUM fees, so the rate you see is the rate that accrues to your shares.

Your share count holds steady from the moment you supply, and the redemption value of each share rises as interest accrues into the vault. Hold one share worth $1.00 today; borrower interest lifts its redemption value continuously, and when it reaches $1.06 you redeem for $1.06. The spread is your return, compounded inside the share price and realized in full at redemption — so there is nothing to claim, stake, or restake.

---

## The curator is the product

Every Lending Vault is run by a single named curator who owns the allocation strategy and answers for its performance. The curator is the risk manager: they monitor reserve utilization, move capital toward better risk-adjusted yield, pull out of deteriorating positions, and decide which borrowers your deposit ultimately backs. Allocation decisions are theirs to make within the vault's configured parameters, so the quality of your yield is the quality of their judgment.

Kamino's active roster includes **Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Elemental, Keel, Hyperithm, and Galaxy** — risk firms and asset managers that run on-chain credit strategies professionally, the same names that run institutional mandates across the largest lending protocols. These are the curators steering capital across rails that have lived three years in production with zero bad debt. More than one curator can run a vault for the same token, so choosing a vault means choosing a curator and the thesis behind their book.

The judgment is auditable before you commit a dollar. Every vault publishes its current allocation across reserves, its trailing APY net of fees, its concentration by market, the first-loss capital the curator has staked behind it, and the reserves it is permitted to touch. Comparing two USDC vaults is comparing those figures side by side: which curator is earning a higher net rate, how much of it rides a single market, and how much of their own capital absorbs a loss before yours does.

---

## The bridge between depositors and borrowers

A Lending Vault is the supply side of Kamino credit. Capital pools in the vault, gets supplied into markets, and earns the interest borrowers pay. Two allocation modes let one deposit serve both floating and fixed-rate credit:

- **Standard allocations** stay deployed. Capital sits in variable-rate reserves earning the prevailing borrow rate, which rises and falls with utilization.
- **Conditional allocations** stand ready. Capital earns the variable rate while it waits, then converts to a locked fixed rate the moment a matched borrower draws it down, so every dollar earns from the day it is deposited and funds a large fixed-rate term loan the instant one is drawn.

Conditional allocations are what let [Fixed Rates](./fixed-rates.md) work. When a borrower like FalconX locks a rate for a fixed term, that loan is funded by vault capital that sat earning the variable rate until the draw, then converted to the locked rate at the instant of the draw. The supply side quotes a fixed-rate curve because there is capital standing ready behind every point on it; the borrow side draws a term loan in size without waiting for a counterparty to be found. Depositors earn while they wait; borrowers draw exactly when they need it. [The vault engine](./vault-engine.md) details the full machinery — allocation, rebalancing, and the just-in-time funding path.

---

## Built so you can always get out

Liquidity is structured in three layers, so most withdrawals settle instantly and the rest settle predictably:

1. **Idle buffer** — 5 to 10% of vault assets are held uninvested. Withdrawals up to this size process immediately.
2. **Reserve redemption** — larger withdrawals recall capital from deployed reserves with available liquidity, which is seamless in normal conditions.
3. **Fair queue** — when a market is fully utilized, a withdrawal waits until borrowers repay and liquidity returns. The interest-rate curves are tuned to push borrow rates up sharply as utilization nears 100%, which keeps reserves from being fully drained and pulls liquidity back to redeeming lenders.

A vault rebalances toward its targets automatically as deposits and withdrawals move through it, and an automated safety engine pulls capital out of an asset on danger signals — an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market — before those conditions reach depositors.

---

## How depositors are protected

A curator sets the strategy and stakes first-loss capital behind it. The vault runs on Kamino's in-house oracle, the liquidation engine that keeps every reserve solvent, and audited, formally-verified contracts.

**Curator first-loss capital.** Curators post their own capital into the vault's **Insurance Pool**, staked under a mandatory 30-day cooldown. If a vault takes a loss, that capital is spent first to make depositors whole. Kamino matches a curator's commitment up to $250,000 per vault, so the people setting your strategy have their own money absorbing losses ahead of yours.

**Whitelisted reserves.** A vault can be restricted to allocate only into Kamino-verified markets, so even a compromised curator key can route capital only into reserves already cleared by the protocol. The curator's discretion runs inside fixed guardrails, set when the vault is configured and enforced on-chain on every allocation.

**Priced safely.** Every reserve a vault touches is valued by [Scope](./scope.md), Kamino's in-house oracle layer, whose divergence, staleness, and cap-floor guards reject prices outside a band of the last close. The [liquidation engine](./liquidation-engine.md) keeps the markets your capital lends into solvent — $120M+ liquidated across 100k+ liquidations with $0 of bad debt.

**Verified rails.** The vault engine is open-source and formally verified by Certora, part of a security record of 20 external audits, 4 formal verifications, and three years in production without incident. [See the full security program](./security.md).

---

## What it costs

Lending Vault economics are set per vault and shown before you deposit:

- **Performance fee** — a percentage of the vault's profits, paid to the curator, charged on the gains your shares earn while your principal stays whole. A typical institutional setup runs 15%.
- **AUM fee** — an annual percentage of total vault assets, paid to the curator, accruing continuously. A typical setup runs 2%.
- **Withdrawal penalty** — an optional curator-set fee on the withdrawn amount that returns to the vault itself, rewarding the depositors who stay. Many vaults set it to zero; where it applies it runs low, on the order of a fraction of a percent, and it is disclosed on the vault before you deposit.

Kamino's own revenue comes from the protocol take rate on the underlying lending, so curator fees go to curators and the platform earns from the credit it powers.

---

## Run your own

Anyone can launch and operate a Lending Vault on Kamino's rails — set the deposit token, the allocation weights and caps, the reserve whitelist, the insurance pool, and the fees, optionally white-labeled on your own front-end. To appear on Kamino's consumer app and earn its distribution, a vault turns on the safety controls and passes a go-live review. [Vault Curation ↗](./curation.md) is the full self-serve platform for standing one up. For a configurable multi-asset, multi-strategy vehicle, see [Meta-Vaults](./meta-vaults.md); for KYC-gated, approved-source deposits, see [Permissioned Vaults](./permissioned-vaults.md).

---

## Explore

- [Yield](./yield.md) — the hub: how Lending Vaults sit alongside [Meta-Vaults](./meta-vaults.md), [Institutional Yield](./institutional-yield.md), and [Permissioned Vaults](./permissioned-vaults.md)
- [Markets](./markets.md) — the lending engine vaults allocate into
- [The vault engine](./vault-engine.md) — allocation, conditional liquidity, withdrawals, and the safety engine
- [Vault Curation ↗](./curation.md) — launch and operate your own vault
- [Fixed Rates](./fixed-rates.md) — the fixed-rate credit conditional liquidity funds
- [Security](./security.md) — the audit program, formal verification, and the $0-bad-debt record

---

**Supply one asset. A named curator with first-loss capital runs the book, and you hold a single share that compounds as borrowers pay.**

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
