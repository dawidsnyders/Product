# Permissioned Vaults

**Yield · deep product page. Audience: institutions, wealth and asset managers, compliant fintechs. CTA: Contact sales (primary) · Launch App (secondary).**

---

## Hero

# Curated yield, open only to the depositors you approve

Permissioned Vaults add a per-wallet allowlist to a curated lending vault: deposits clear only for wallets your KYC provider has verified, screened at the door before any capital moves. Inside the gate the full vault engine runs — auto-compounding shares, whitelisted-reserve allocation, curator first-loss capital, and a real-time view of where the money sits.

It is a yield product a regulated mandate can hold and a fintech can put in front of its own users. The rails underneath have carried institutional capital in production for three years with zero bad debt.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)

---

## What a Permissioned Vault is

A Kamino vault takes one deposit asset, routes it across lending markets at a curator's chosen weights and caps, and pays depositors the borrowers' interest as an auto-compounding share token. A Permissioned Vault is that same vehicle with one control switched on: **deposits require approval.**

The gate is enforced on-chain. The vault's permissioner authorizes a wallet once by adding it to the allowlist; from then on, every deposit checks the depositor's signature against that allowlist, and the contract rejects any wallet outside it before capital moves. The yield mechanics underneath stay the same: depositors hold a share token whose value compounds as the underlying loans accrue interest, and the curator's strategy decides which markets and borrowers that capital backs.

Two things about the gate matter to anyone underwriting it:

- **It screens entry only.** Withdrawals and redemptions stay open at all times. An approved depositor can exit on their own schedule, and a depositor later removed from the allowlist keeps full access to redeem the shares they already hold. The allowlist governs who supplies capital; the right to redeem belongs to the depositor for as long as they hold a share.
- **It is additive and reversible.** Permissioning is a setting on an ordinary vault, toggled on and off in place as a configuration change on the same contract. A curator can gate a vault, change which operations are gated, or open it back up, and the underlying markets, allocations, and depositor positions carry straight through.

---

## How the gate works

Permissioning is built on Kamino's access-control layer — the same mechanism behind [Permissioned Markets](./permissioned-markets.md) and permissioned assets, [documented in full on the Permissioning page](./permissioning.md). On a vault it expresses as a depositor allowlist:

**1 — Turn on the gate.** The curator switches the vault into permissioned mode and chooses which operations to gate. For vaults that means deposits; entry is screened, redemption stays open.

**2 — Verify off-chain.** Your KYC or accredited-investor provider verifies a prospective depositor against your own policy, off-chain. The chain reads one fact at deposit time: whether the wallet sits on the allowlist. Who the wallet belongs to, and how they were verified, lives entirely in your compliance system.

**3 — Whitelist by API.** Once your provider attests a user, your backend calls Kamino's whitelist API with the vault and the wallet, and that wallet is cleared to deposit within seconds. The same API revokes access just as quickly. Onboarding runs at the speed of your own compliance flow: your provider attests, your backend makes one API call, and the user deposits — Kamino handles it programmatically end to end, and the user's existing wallet signature is the only one required.

This is the structure that lets regulated capital sit on shared infrastructure. The asset, the markets, and the curator's strategy can be public and battle-tested; the access to deposit is private and governed by your rules.

---

## Why it unlocks institutional and fintech yield

Two large pools of capital need a yield vault that admits only approved depositors. A regulated mandate has to keep its investor base inside a compliance perimeter, where every holder has cleared the manager's checks. A consumer fintech has to deliver yield to the exact users its app onboarded. Permissioned Vaults give both the curated-yield engine and the entry control their structure demands.

**For institutional mandates and managed yield.** A wealth or asset manager runs a vault to its own mandate — a single deposit asset, a defined set of markets, a chosen risk posture — and admits only wallets that have cleared the manager's KYC and accreditation checks. Pair it with [whitelisted reserves](./vault-engine.md) so the vault can allocate only into Kamino-verified markets, and the result is a yield vehicle whose investor base, allocation universe, and reporting all sit inside a defined compliance perimeter. This is the same vault engine and curation tooling described on [Lending Vaults](./lending-vaults.md) and at [Vault Curation](./curation.md), with the entry gate raised.

**For compliant fintech yield.** A fintech, wallet, or neobank stands up a vault gated to the wallets its app onboards, so yield reaches its verified user base and the allowlist tracks that base automatically as the fintech's own KYC flow drives the API. The same gate scales from a single fund's handful of wallets to a fintech's entire verified user population; one venue admits ten approved addresses, the next admits a million, on identical mechanics. Teams shipping this through an embed start at [BuildKit](./buildkit.md) and the [Yield API](./institutional-yield-api.md).

A permissioned vault can also be locked to deposits from one specific source — for example, accepting capital only from another Kamino vault or from a single approved front-end. That is how a multi-strategy vehicle composes private building blocks into a portfolio, and how a [white-label deployment](./white-label.md) keeps a vault exclusive to one partner's interface.

---

## Hardened by design

Permissioning controls who deposits. The controls that protect the capital once it is inside come from the [vault engine](./vault-engine.md), and a permissioned vault inherits all of them:

- **Whitelisted reserves** — the vault is restricted to allocate only into Kamino-verified markets, so a compromised curator key cannot redirect deposits into an unvetted or fraudulent market. The whitelist is governed by Kamino's multisig; the curator cannot edit it. Every vault featured on Kamino runs this control.
- **Insurance pool** — the curator posts first-loss capital that absorbs losses before any depositor is touched, with Kamino matching it up to $250K per vault and a 30-day withdrawal cooldown that keeps the curator from exiting ahead of depositors.
- **The danger-trigger safety engine** — automated monitoring pulls the vault out of an asset on warning signals: an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market. Collateral is valued throughout by [Scope](./scope.md), Kamino's in-house pricing layer, which has priced $19.33B of on-chain value with zero oracle exploits.
- **Three-layer withdrawals** — redemptions clear first from an idle buffer, then from markets with available liquidity, then through a fair queue on fully-utilized markets where lender exits take precedence over new borrows. An approved depositor's right to exit is structural.

The gate is reviewed at the same standard as the rest of the stack — independent audits, formal verification of the vault and access-control contracts, open source with reproducible on-chain build verification, and a live bug-bounty program. The full diligence picture lives on the [Security page](./security.md).

---

## In production

The access-control layer that powers these vaults runs live across Kamino. Whitelisted reserves are enforced on every featured vault, with Gauntlet, Steakhouse, Allez, Sentora, and RockawayX among the curators running them.

The headline deposit-gated deployment is [Institutional Yield](./institutional-yield.md): regulated BTC-backed credit yield for treasuries, funds, and wealth managers, running on this exact permissioned-vault foundation. Depositors must clear KYC before their wallet is added to the allowlist; the share token they hold, kiUSDC, moves only between approved addresses, so the position stays inside the regulatory perimeter even as an allocator composes it into other approved strategies. The vault publishes weekly collateral reporting and a monthly independent attestation. The same foundation also runs source-locked vaults, where one vault accepts capital only from another approved Kamino vault, letting a multi-strategy vehicle compose private building blocks into a single portfolio.

---

## Economics

There is no platform fee to deposit into or to run a Permissioned Vault. A curator sets the vault's fees — a typical institutional configuration is **15% on performance and 2% on assets under management** — and those fees go to the curator. Performance fees apply only to the yield the vault actually earns; in a down period the curator collects a performance fee again once the vault has recovered past its prior high. Kamino's revenue comes from the protocol take rate on the underlying lending the vault supplies. Turning on permissioning is free; it is a control on an ordinary vault.

When a fintech embeds a Permissioned Vault through the [Yield API](./institutional-yield-api.md), the integration sets a configurable user-facing cap and a revenue-share split, so the embedding partner earns a defined share of the yield it routes to its users. Custom economics for a managed mandate are arranged through [sales](./contact-sales.md).

---

## Where this fits

- **[Yield hub](./yield.md)** — Permissioned Vaults alongside Lending Vaults, Meta-Vaults, and Institutional Yield, with a guide to which one fits which mandate.
- **[Permissioning](./permissioning.md)** — the canonical home of the access-control layer: how it gates deposit, borrow, and liquidate across markets, vaults, and individual assets.
- **[Permissioned Markets](./permissioned-markets.md)** — the same access-control layer applied to credit: KYC-gated borrow markets with named, vetted counterparties.
- **[Lending Vaults](./lending-vaults.md)** and **[Vault Curation](./curation.md)** — the open vault and the tooling to launch and run one.
- **[Meta-Vaults](./meta-vaults.md)** — when the mandate spans multiple assets and strategies in one vehicle.
- **[Launch a managed fund](./uc-launch-a-managed-fund.md)** — the end-to-end path: build the vehicle, gate the investors, integrate it, and get reporting out of the box.
- **[Institutional Yield](./institutional-yield.md)** — regulated BTC-backed credit yield built on the permissioned-vault foundation.

---

## Run a vault your investors can actually hold

Tell us the asset, the mandate, the markets, and who you need to admit. Kamino stands up a permissioned vault tuned to it on rails that have carried institutional capital in production for three years.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)
