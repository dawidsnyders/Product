# Vault Engine

> Infrastructure · the supply side of credit. Surfaced from [Yield](./yield.md), [Curation](./curation.md), [Developers](./developers.md), and the [launch-a-managed-fund](./uc-launch-a-managed-fund.md) use-case.

---

## The engine that turns deposits into credit

A curator points one deposit token at a set of lending markets, sets the weights, the caps, the access rules, and the loss waterfall — and the vault engine runs the venue from there. It routes the capital across those markets and keeps it earning, holds the allocation to its targets through an automated rebalance, defends it against the failure modes that ruin on-chain yield, and lets depositors exit in a defined, lender-first order even when every market is fully drawn. Every curated yield product on Kamino runs on this engine: single-asset [Lending Vaults](./lending-vaults.md), regulated [Institutional Yield](./institutional-yield.md), multi-strategy [Meta-Vaults](./meta-vaults.md), and [white-label vaults](./white-label.md) running on a partner's own front end.

It is the supply side of Kamino's credit machine. The [Markets](./markets.md) engine is where borrowers draw; the vault engine is where the capital that funds them lives and earns the interest they pay.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## What a deposit becomes

A depositor supplies a single token — say USDC — and receives a share token in return, minted at the vault's current exchange rate. The share balance stays constant; value lives in the redemption rate. As interest and rewards accumulate in the vault, each share redeems for progressively more of the underlying asset over time. A share named `kvUSDC` held through a quarter of lending redeems for more USDC at the end than at the start.

Behind that single token sits a managed allocation across many lending markets, a rebalancing process that holds the allocation to its targets, a monitoring layer that pulls capital out of an asset the moment it shows signs of compromise, and a withdrawal path that puts a redeeming lender ahead of the borrowers drawing on the same reserve.

---

## Allocation — where the capital goes

A vault's strategy is expressed as a set of allocations, one per reserve, each defined by four settings.

- **Type** — *Standard* (capital is deployed and earning continuously) or *Conditional* (capital is held in reserve and deployed only when a borrower actually arrives).
- **Weight** — a relative integer that sets each Standard reserve's share. Reserves weighted 500 / 300 / 200 take 50% / 30% / 20% of deployed capital. Conditional allocations ignore weight; only the cap applies.
- **Cap** — a hard ceiling on the tokens the vault will deploy into a single reserve, independent of its weight. When a weight-based share would exceed the cap, the excess redistributes across the other allocations.
- **Priority** — which Standard reserves may serve as the funding source when a Conditional allocation fills. Capital flows into a Conditional reserve only from Standard reserves whose priority sits at or below it, so higher-priority capital is shielded from being drawn down.

Allocations are *targets*. As deposits, withdrawals, and accrued yield push the live distribution away from those targets, a permissionless rebalance realigns the vault: anyone can trigger it, and in practice an automated keeper runs it about every 15 minutes. The strategy sets intent; the automation does the moving.

---

## Conditional liquidity — fixed-rate credit funded just in time

Conditional allocation is the mechanism that lets Kamino quote a fixed-rate yield curve while the capital backing it keeps earning floating yield until the moment a term borrower draws. The capital sits inside a Standard floating-rate reserve, earning. The Conditional allocation is a signal that the vault stands ready to fund a specific fixed-rate reserve up to a cap. The capital stays in the floating reserve, earning, until a draw pulls it across.

When a borrower draws a fixed-rate, fixed-term loan, the fill executes inside the borrow transaction: capital moves out of the floating source, into the fixed-rate reserve, and serves the borrow atomically in a single transaction. The depositor's capital earns floating yield right up to the instant a term borrower needs it, then locks in at the fixed rate for the term.

This is what makes large institutional term loans fundable on open infrastructure. Gross of the protocol fee, a floating reserve at 70% utilization paying a 6% borrow rate passes 4.2% to lenders; a fixed-rate reserve filled to full utilization passes the whole 6% for the locked term. The difference is the term premium, captured by the supply side. It is how [Fixed Rates](./fixed-rates.md) credit, drawn by institutional counterparties such as FalconX, is funded the moment it is needed.

---

## Continuous risk monitoring and automated pullout

On-chain yield fails in recognizable ways: an asset gets minted out of thin air, a stablecoin loses its peg, a reserve's exit liquidity dries up, an oracle drifts away from the real market. The vault engine watches for each of these continuously and pulls capital out before the loss lands.

An automated monitor scores every reserve a vault is invested in against a catalog of danger triggers, graded by severity:

- **Catastrophic, binary signals fire an immediate pullout.** An *infinite-mint* signal trips when a token's supply jumps abnormally between checks. An *exchange-rate anomaly* trips when a reserve's collateral-to-token rate falls — a rate that should only ever rise, so any decrease points to a loss in the reserve. Either one, on its own, pulls the vault out.
- **Graduated signals escalate with magnitude and can force a pullout once they cross their threshold.** *Insufficient exit liquidity* scores how much of the vault's position the reserve can actually return. *Oracle-versus-market divergence* and *secondary-market depeg* measure how far the on-chain price has drifted from the real one. *Unrealistic supply APY* flags a yield too high to be real. Each one is bounded, scored, and acts when it gets severe enough.
- **Red flags raise the weight of every other signal.** An un-revoked mint or freeze authority, the vault being a dominant share of a reserve's supply, a saturated deposit cap, an abnormal borrow spike, a stale oracle, a suspicious governance parameter change — each one sharpens the monitor's read on the others, so a reserve carrying several of them crosses its thresholds sooner.

The result is a vault that defends its capital at machine speed and on rules a curator and a depositor can read in advance, layered on top of the protocol-level safeguards in the [Liquidation engine](./liquidation-engine.md) and the price guards in [Scope](./scope.md).

---

## Three-layer withdrawals

A depositor's right to exit is the hardest promise to keep when capital is fully lent. The engine fills a withdrawal through three layers, in order.

1. **Idle buffer.** A vault holds a slice of assets unallocated — typically 5–10%, governed by an unallocated weight and a hard cap. Withdrawals served from here settle instantly. A larger buffer means more instant exits and slightly lower yield; the curator sets the trade-off.
2. **Market redemption.** When the buffer is short, the vault redeems from deployed reserves that still hold uncommitted liquidity, in the same transaction. Fully-utilized reserves can't be tapped this way, so the request rolls to the next layer.
3. **Fair withdrawal queue.** Anything still unmet enters a per-reserve FIFO queue built on one principle: a redeeming lender stands first in line for the reserve's next freed liquidity. A queued ticket claims a borrower's repayment at maturity ahead of that borrower's rollover and ahead of any new borrow drawing on the reserve. The queue advances as borrowers repay, new deposits arrive, and liquidation proceeds land. Tickets cost nothing to hold and can be canceled and resubmitted at will.

The queue is what lets a vault run fully lent out while every depositor keeps a defined, lender-first path to the door, advancing in order as repayments and new deposits land.

---

## The insurance pool — the curator's first loss

A curated vault carries a backstop the curator funds themselves. The curator deposits into the vault, takes the share tokens, and stakes them into the vault's insurance pool. Those funds are deployed into the vault like any other capital, so they earn the vault's APY while locked — and they absorb losses first. When a vault takes bad debt, the loss is socialized on-chain and the curator's staked capital compensates depositors before any depositor bears a loss.

The structure makes the commitment real and visible:

- **Kamino matches the curator's first-loss capital up to $250K** per vault — a $200K curator commitment becomes $400K of first-loss coverage. The match caps at $250K; capital the curator stakes beyond it still earns the vault's APY and still absorbs losses first.
- **A mandatory 30-day cooldown** governs withdrawals from the pool, published on-chain, so the curator's skin in the game stays locked and visible for 30 days after they signal an exit, giving depositors time to react to any problem.
- **Emergency withdrawal exists for one purpose** — releasing first-loss capital to compensate depositors after a loss — and is gated behind a 2-of-2 multisig between Kamino's security council and a curator-nominated wallet, so the only thing it can do is push first-loss capital to the depositors who took the loss.

Run alongside [whitelisted reserves](./yield.md) (which confine a vault's capital to protocol-verified markets) and [Permissioning](./permissioning.md) (which gates who can deposit), the insurance pool gives regulated capital the three things its mandate demands before it allocates: a known set of markets, a known set of depositors, and a named party standing first in the loss waterfall.

---

## One engine, four products

The same engine carries the full yield range by configuration alone.

| Product | What the engine provides |
|---|---|
| [Lending Vaults](./lending-vaults.md) | Curated single-asset yield: one deposit token allocated across markets by a named curator, auto-compounding. |
| [Institutional Yield](./institutional-yield.md) | A permissioned vault funding overcollateralized, BTC-backed regulated credit, with first-loss capital and built-in transparency. |
| [Meta-Vaults](./meta-vaults.md) | Multi-asset, multi-strategy vehicles that rebalance via auctions — a managed fund in a box. |
| [White-label vaults](./white-label.md) | The same vault, run on a partner's own front end and surfaced entirely inside the partner's product. |

Curators set the allocation, the caps, the access rules, and the insurance pool. The roster operating on this engine includes Gauntlet, Steakhouse, Allez, Sentora, RockawayX, Hyperithm, and Galaxy.

### Economics

Two revenue streams sit side by side on every vault and never touch.

- **The curator's fees, to the curator.** A vault carries two fees the curator sets at any level: a **performance fee** on the yield the vault generates, and a **management fee** on assets under management, annualized. Both accrue continuously in the deposit token and are collected on demand. Set both to zero and the venue runs at cost.
- **Kamino's revenue, from the rails.** Kamino earns a protocol take rate on the underlying lending, embedded directly in the supply-APY math (`supply APY ≈ borrow rate × utilization × (1 − protocol take rate)`). It applies to every venue on the engine and leaves curator fees untouched, which keeps Kamino's incentives aligned with the volume curators bring.

---

## Why it holds, and who operates it

The vault engine sits inside Kamino's audited, formally-verified core. The Earn vaults and the limit-order system carry Certora and OtterSec formal verification, the code is open-source with reproducible on-chain build verification, and the engine prices on the same [Scope](./scope.md) oracle and relies on the same [Liquidation engine](./liquidation-engine.md) that have closed out more than $120M across 100,000+ liquidations with $0 bad debt. The danger triggers add a vault-level defense on top of that protocol-level safety. See the full diligence on [Security](./security.md).

A curator sets the strategy and manages the risk. The engine underneath runs on the [Scope](./scope.md) prices it acts on, the danger-trigger framework that pulls capital before a loss lands, the liquidation machinery that backs the loans, and audited, formally-verified contracts. The economics and the diligence resolve to the same place.

Markets are the demand side; the vault engine is the supply side; conditional liquidity is the bridge that lets one quote a fixed-rate curve and fund term credit the moment it is drawn. That is how depositor capital and institutional borrowing become one machine.

---

**Build a venue on this engine** → [Curation](./curation.md) · **Allocate into it** → [Yield](./yield.md) · **Embed it** → [Developers](./developers.md) · **Stand up a fund on it** → [Launch a managed fund](./uc-launch-a-managed-fund.md)

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
