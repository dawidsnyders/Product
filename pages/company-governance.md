# Governance

> **Hero**
> ## How Kamino is governed
> Authority over Kamino's contracts, risk parameters, and treasury is held by multisig signer sets, runs through a public proposal-and-timelock process, and is published in real time at [multisig.kamino.fi](https://multisig.kamino.fi). KMNO holders vote on the parameters, listings, and upgrades that shape the protocol. This page documents how that process works.
>
> **[multisig.kamino.fi](https://multisig.kamino.fi)** · **[oracles.kamino.fi](https://oracles.kamino.fi)**

---

## What governance controls

Governance defines the authority over three things: every program upgrade, every market's risk parameters, and the treasury. For each, it answers two questions — who can change it, and what process the change runs through before it takes effect.

Two principles hold across all three:

- **Distributed control.** Authority over upgrades, risk settings, and treasury funds is held by multisig signer sets with explicit approval thresholds, so a change requires a quorum of independent signers to approve it before it can proceed.
- **Changes are observable before they take effect.** Sensitive actions sit behind a timelock between approval and execution, and the full record — proposals, signatures, timelocks, executions — publishes to a live dashboard that anyone can open without an account. Every change to the protocol is visible while it is pending and after it runs.

---

## The KMNO governance process

KMNO is Kamino's governance token. Staked KMNO carries a vote in on-chain governance over the parameters, listings, and upgrades that shape the protocol. A change moves through the same arc each time:

1. **Discussion.** Proposals, parameter changes, and protocol initiatives are documented and debated in the open on the public governance forum, where curators and risk contributors also publish their analysis.
2. **Signal and vote.** KMNO holders weigh in through on-chain governance on the matters put to a vote — the parameters, listings, and upgrades that govern the protocol.
3. **Execution.** Approved changes are carried out by the multisig that holds authority over the affected contract, market, or treasury, under the proposal-and-timelock process below.

Token distribution, staking rewards, and Seasons belong to the KMNO program; they are documented in the [docs](https://kamino.com/docs/kmno).

---

## The proposal-and-timelock process

Every program upgrade and every treasury movement is authorized through multisig governance. The same model governs each [market](./markets.md) and [vault](./vault-engine.md): each carries an owner authority over its parameters and reserves, and production venues transfer that authority to a multisig before they open to external users.

A governance action follows one path:

1. **Propose.** The change is constructed as a transaction and submitted to the multisig.
2. **Verify.** Each signer independently confirms the proposal matches the intended change before approving.
3. **Approve.** Signers approve until the threshold is met.
4. **Timelock.** Approved sensitive actions enter a mandatory delay — a fixed window between approval and execution. The pending change is public for the full duration, which is the window in which it can be inspected and, if something is wrong, caught before it reaches production.
5. **Execute.** Once the timelock elapses, the approved transaction runs.

Ownership transfers carry an added safeguard: the current owner nominates the new authority, and the receiving multisig must itself claim ownership to finalize. Control moves only when the receiving party confirms it, so a mistake in the nomination step is recoverable. A market can also be made immutable through a one-way switch that permanently freezes its parameters, locking a venue's terms beyond the reach of any future change.

---

## Emergency authority

Day-to-day risk is governed through the same multisig discipline. For fast-moving conditions, each market carries an emergency council scoped to protective actions: reducing supply or borrow caps, triggering auto-deleverage on at-risk positions, enforcing daily flow limits, or pausing a reserve. Each lever is bounded to one protective effect within a scope fixed in advance, and the council's authority is separated from the owner's configuration rights, so emergency action and parameter changes stay distinct powers.

The mechanics these levers operate — soft and auto-deleverage liquidations, maturity liquidations, and oracle-layer price protection — are documented on the [Liquidation engine](./liquidation-engine.md). The continuous risk apparatus behind them — the risk dashboard, the monthly risk report, value-at-risk analysis, and price-shock modeling, together with operational security around the signers — is detailed on [Security](./security.md).

---

## The governance forum

Public governance discussion and reporting live on Kamino's governance forum, organized into two standing tracks:

- **Governance** — proposals, strategic initiatives, distribution and vesting details, and the roster of recognized participants, including Official Vault Curators and Official Risk Contributors.
- **Risk** — the monthly risk reports, individual market analyses, and the post-event stress analyses published after significant market events.

This is where parameter proposals, risk assessments, and protocol initiatives are documented and discussed in the open, and where the curators and risk contributors who operate on the platform publish their work. The professional risk and curation roster this governance supports — Gauntlet, Steakhouse, Allez, and others — is described on [Curators & managers](./curators-managers.md) and in the [Curation Suite](./curation.md).

---

## Watching governance live

Two public dashboards make the process verifiable in real time, with no account required:

- **[multisig.kamino.fi](https://multisig.kamino.fi)** — every multisig across all programs, markets, and vaults: open proposals, who has signed, the timelock on each pending action, and the full execution history. This is the public record of every change to the protocol. A change can be watched from proposal, through its timelock, to exactly what executed.
- **[oracles.kamino.fi](https://oracles.kamino.fi)** — every price feed the protocol reads: sources, feed health, update activity, and the RWA and equity feeds. Pricing authority runs under the same multisig-and-timelock discipline as the contracts that consume it. [Scope](./scope.md) covers how pricing is composed and guarded.

---

## How this maps to building on Kamino

Every operator who launches on Kamino inherits the governance model that controls Kamino's own markets. When you stand up a [market](./markets.md) or a [vault](./vault-engine.md) through the [Curation Suite](./curation.md), you transfer its admin authority to your own multisig and run subsequent changes through the same proposal-and-timelock process before opening to external users. Your venue's governance is then visible on the same public dashboard as Kamino's. For regulated mandates, this pairs with [Permissioning](./permissioning.md) to gate who can participate while keeping the full control record transparent.

---

*Related: [Security](./security.md) · [How Kamino works](./how-kamino-works.md) · [Curation](./curation.md) · [Markets](./markets.md) · [Scope](./scope.md)*
