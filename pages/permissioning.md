# Permissioning

> Infrastructure · the access-control layer

## The switch that turns open infrastructure into a regulated venue

Permissioning gives any Kamino market, vault, or asset a single on-chain approval check. Turn it on, and the same audited engines that run Kamino's open markets become a venue where only verified, named, or allowlisted parties can act — every borrower KYC'd, every depositor approved, every liquidator vetted. Turn it off, and the venue is open again the instant the setting changes, on the same deployed contracts. This is the layer that lets a regulated wealth manager, a trading firm, a fund, or a tokenized-asset issuer deploy on-chain on terms their compliance team can sign off on: a known borrower set, a controlled liquidator set, and identity kept off-chain with their verification provider. Live today, the Ethena USDe market runs every expression of permissioning at once.

[Contact sales](./contact-sales.md) (primary) · [Launch App](https://kamino.com/home) (secondary)

---

## What it does

Before a gated action executes, the protocol checks the acting wallet against the venue's on-chain allowlist. An address that carries the right approval proceeds; an address without it is rejected on-chain. Approval is granted per wallet and per operation, so the venue controls exactly who can do what.

The gate is precise. A venue chooses exactly which operations to screen:

- **Deposit** — gate who can supply collateral or fund a vault. The most common configuration: screen capital on the way in.
- **Borrow** — gate who can draw credit, down to named counterparties.
- **Liquidate** — gate who can liquidate sensitive positions, so only approved, vetted parties run the unwind.

Withdraw and repay stay open at all times, outside the gate by design. An approved depositor can always redeem their shares, and a borrower can always close their position, so an existing position remains fully redeemable regardless of how the entrance is screened.

The same control applies at four levels of granularity, in any combination:

- **Per market** — a whole lending venue is gated, open only to verified participants.
- **Per operation** — deposits screened while liquidations stay permissionless, or any mix the venue chooses.
- **Per wallet** — each approved address carries its own set of allowed operations. A wallet granted deposit-and-borrow can do both; one granted deposit alone is held to deposit.
- **Per asset** — one regulated token in a market is deposit-gated while every other asset in that same market trades openly.

---

## Identity stays off-chain

A user completes KYC, accreditation, or counterparty onboarding with a verification provider. The provider attests, and the wallet is added to the on-chain allowlist through a single API call. Only a wallet address and a yes/no attestation reach the chain. The KYC documents, accreditation records, and personal data stay with the verification provider. The allowlist itself is the enforcement layer, and the on-chain protocol stays identity-agnostic.

That separation is what makes the model practical at institutional scale. A fintech ties allowlisting to its own onboarding funnel, so its existing compliance flow becomes the gate and the API is the only integration point. An institution running a closed venue manages its allowlist through the same call. Adding or revoking a participant is a single API call, and a revoked participant keeps full access to withdraw and repay, so their existing position remains redeemable.

---

## Additive and reversible

Permissioning layers onto a market or vault while the underlying engine stays the same. Gating is a setting on the same [Markets](./markets.md) and [vault engine](./vault-engine.md) that run every open venue on Kamino, and the same deployed contracts serve both the open and gated states. Turn it on to gate a venue; turn it off and the venue is open again the instant the setting changes. Permission changes can be routed through a venue's existing multisig and timelock, treated as standard governance proposals, so the institution that owns the venue owns the gate.

Permissioning carries no separate fee; the venue's economics — fees, spread, and revenue share — are set in [Curation](./curation.md), which is also where an institution configures the venue it stands up.

---

## The four expressions

### Permissioned markets

KYC-gated and allowlisted credit venues. Deposits, borrows, and liquidations can each be screened independently, so a venue can require verification to supply or borrow while keeping its own rules for who liquidates. This is the foundation of [Permissioned Markets](./permissioned-markets.md) under Credit — compliant lending venues with named counterparties, where every borrower has cleared the venue's onboarding before drawing a dollar.

### Permissioned vaults

Vaults that accept deposits only from approved wallets or a specific source. Four configurations run today: KYC'd-only depositors, accredited-investor restrictions enforced by attestation, app-internal vaults scoped to one partner's users, and counterparty-gated institutional lending vaults. This powers [Permissioned Vaults](./permissioned-vaults.md) under Yield, and it composes cleanly with the rest of the vault engine — whitelisted reserves constrains *where* capital flows, the insurance pool backstops losses, and permissioning controls *who* gets in.

### Permissioned assets

Per-asset gating inside an otherwise open market. A regulated token sits deposit-gated to verified holders while the stablecoins and majors beside it in the same market stay permissionless. Asset issuers use this to bring a compliant token on-chain with the access rules its structure demands while it sits in a shared market alongside deep stablecoin and major-asset liquidity. See how it fits the issuer's path on [Asset issuers](./asset-issuers.md) and [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md).

### Whitelisted liquidators

For sensitive positions — large institutional borrows, regulated collateral, assets with thin secondary markets — liquidation is restricted to an approved set of liquidators. Only vetted parties run the unwind, on a venue's own terms, so a brief market dislocation keeps a sensitive position in approved hands. The underlying safety mechanics — soft and auto-deleverage liquidations, maturity liquidations, and oracle-layer protection against price wicks — are carried by the [liquidation engine](./liquidation-engine.md).

---

## Live: the Ethena USDe market

The USDe market is permissioning running in production across every expression at once. Lending is gated so USDe enters credit only through an approved vault path on the [Institutional Yield](./institutional-yield.md) supply side. Liquidations are restricted to whitelisted liquidators, the first layer of defense for the market. The collateral is priced by a guarded [Scope](./scope.md) feed that pauses automatically on secondary-market anomalies such as a depeg or a supply shock, and the liquidation buffer holds wider than the maximum allowed price divergence, so ordinary volatility stays clear of a forced liquidation. USDe is an Ethereum-native asset earning as Solana collateral, with liquidation routed back to its home chain through [Cross-chain](./cross-chain.md). One market, assembled from permissioning, oracle guards, and the liquidation engine, configured for what a sensitive asset requires.

---

## Distinct from whitelisted reserves

Permissioning gates *who* can act on a venue. Whitelisted reserves gates *where* a vault's capital is allowed to flow — a vault can be restricted to allocate only into Kamino-verified markets, which protects depositors even against a compromised curator key. They solve different problems and run together: permissioning screens the depositor, whitelisted reserves bounds where that deposit can be deployed. Layered with the insurance pool, the combination maps onto how regulated capital is actually allowed to allocate.

---

## Why this is the institutional unlock

Regulated capital allocates only where the borrower set is known and the liquidator set is controlled. Anyone in the world borrowing against the same book, or an anonymous party liquidating an asset on a momentary price glitch, puts a venue outside what a compliance team will approve. Permissioning delivers both controls at the protocol layer. A venue dials from fully open to fully gated — per operation, per asset, per wallet — keeps identity off-chain with the verification provider, and reverses the whole thing the moment the setting changes, on the same deployed contracts. The result is a venue a wealth manager, fund, treasury, or issuer can deploy on with their compliance team's sign-off.

Because gating is a configuration on the live engines, the institutional walk is direct: tell us the access rules — who can deposit, who can borrow, who can liquidate, which assets are restricted — and the venue is stood up on the same audited engines, with the same [security](./security.md) posture, that everything else on Kamino runs on.

---

## Where permissioning shows up

- [Institutions](./institutions.md) — KYC'd borrowers at the legal layer, approved depositors at the wallet layer
- [Permissioned Markets](./permissioned-markets.md) — gated credit venues with named counterparties
- [Permissioned Vaults](./permissioned-vaults.md) — deposit-gated yield, including [Institutional Yield](./institutional-yield.md)
- [Asset issuers](./asset-issuers.md) — per-asset gating for regulated tokens
- [Fintechs & apps](./fintechs-apps.md) — compliance-grade embeds where your own onboarding is the gate
- [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md) — the issuer use case, end to end
- [Curation](./curation.md) — where a venue's access rules and economics are configured
- [Security](./security.md) — the audited, verified foundation beneath it all

---

## Build a venue on terms your compliance team approves

Tell us the access rules and we stand up the market or vault to match — gated at the entrance, open for redemption, reversible at any time.

[Contact sales](./contact-sales.md) (primary) · [Launch App](https://kamino.com/home) (secondary)
