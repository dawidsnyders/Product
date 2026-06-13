# BuildKit

*Platform product · home: [Developers](./developers.md) + [Fintechs & apps](./fintechs-apps.md). B2B page — CTA: Contact sales (primary), Launch App (secondary).*

---

## Hero

# Put credit, yield, and swap inside your product

BuildKit is the integration kit for embedding Kamino's lending, yield, and swap rails directly into your wallet, exchange, neobank, or app. Your users borrow against their assets, earn curated on-chain yield, and swap at best execution, all inside your interface. Underneath runs infrastructure that has settled $120M+ in liquidations across $19.33B priced by Scope with $0 of bad debt. You ship a financial product in days; Kamino runs the protocol, the pricing, the liquidations, and the compliance controls.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](./kamino-app.md)

---

## What you embed

Three product surfaces, each exposed through the same toolkit, each backed by the live Kamino protocol.

**Yield.** Offer your users a return on idle balances. A deposit flows into a curated [Lending Vault](./lending-vaults.md) or a [Managed Portfolio](./meta-vaults.md) run by a named professional curator, gets routed across lending markets by the [vault engine](./vault-engine.md), and accrues auto-compounding yield in a share token. You surface the APY, the deposit, and the withdrawal. The allocation, rebalancing, and safety monitoring run underneath.

**Credit.** Let your users post collateral and draw a loan without leaving your app. The kit builds the full obligation lifecycle — deposit collateral, borrow, repay, withdraw — and exposes live loan health: LTV, health factor, liquidation distance. Every loan settles in a [market](./markets.md) priced by [Scope](./scope.md) and protected by the [liquidation engine](./liquidation-engine.md).

**Swap.** Route any token-to-token trade through [Kamino Swap](./kamino-swap.md), the meta-aggregator that fans across the major Solana venues plus Kamino's own on-chain router and returns best execution. That router is [Routing](./routing.md), the same execution layer that powers in-app conversions, collateral swaps, and the entry and exit legs of a leveraged position.

**[Multiply](./multiply.md) ties the three together.** One-click leverage looping and the position-management actions — repay-with-collateral, swap collateral or debt — build on the same primitives, so an integrator takes a user from a flat balance to a leveraged yield position inside a single flow. This is the composability that lets one embed carry an entire financial product.

---

## Three ways to integrate, one protocol underneath

BuildKit meets your stack where it is. Every path drives the same on-chain markets and vaults, so what you build inherits the full security and risk apparatus from day one.

**REST API.** Language-agnostic HTTPS endpoints that return data, analytics, and unsigned transactions. Your backend requests a deposit, borrow, or swap; the API returns a ready-to-sign transaction your client signs and submits. Built-in history endpoints serve APY trends, TVL, user positions, PnL, and loan health for charting and reporting. This is the fastest path for a web service, a backend, or any stack outside the TypeScript world.

**TypeScript SDK.** A JavaScript and TypeScript toolkit for on-chain state reads and transaction composition. You compose deposits, borrows, repayments, withdrawals, and swaps with full on-chain control — simulate before you send, batch instructions, and deploy your own vaults programmatically. This is the path for an app that wants to own the transaction logic end to end.

**Rust interface crate.** A lightweight, Rust-native instruction builder for clients, bots, and on-chain composition. A Solana program can call Kamino lending directly on-chain, so your own contract invokes the protocol in the same transaction as the rest of your logic. This is the path for high-performance systems and on-chain composability.

The Developers hub carries the getting-started flow, the full [API reference](./developers.md), the SDK packages, and working examples for each product. Engineers start there; the commercial conversation happens on the [Fintechs & apps](./fintechs-apps.md) page.

---

## Compliance-grade permissioning, built in

The same access-control layer that lets a regulated wealth manager deploy on Kamino is exposed to you. [Permissioning](./permissioning.md) gates who can deposit, borrow, or liquidate — at the level of a market, an operation, an individual wallet, or a single asset — while withdraw and repay always stay open, so a user can always exit.

For an embed, this means your own onboarding becomes the gate. You verify a user through your existing KYC provider, whitelist their wallet through the API, and only verified users can transact in your gated market or [permissioned vault](./permissioned-vaults.md). Identity stays off-chain in your system; the on-chain layer stays identity-agnostic. Permissioning is additive and reversible — switch it on for a regulated product line, leave it off for an open one, and reconfigure it later in place through the API.

This is what lets a fintech ship a yield or credit product that satisfies a compliance team: the controls a regulator expects, expressed as configuration on infrastructure that has already passed institutional diligence.

---

## What you inherit underneath

You rent a protocol that institutions already underwrite. The pricing, the liquidation system, and the audit program all run beneath your embed, so your team builds the product surface and operates nothing under it.

- **Pricing.** [Scope](./scope.md) values every position through composed, guarded feeds — the same oracle layer that has processed $19.33B with zero oracle exploits, with scam-wick protection and proof-of-reserves guards built into the price your users borrow against.
- **Liquidations.** The [liquidation engine](./liquidation-engine.md) protects every loan your users open. $120M+ liquidated across 100k+ liquidations, with $0 of bad debt.
- **Yield supply.** Deposits flow through the [vault engine](./vault-engine.md) and curated vaults run by names like Gauntlet, Steakhouse, and Allez — the curator is the risk manager, with first-loss capital and a built-in insurance pool behind the strategy.
- **Security.** 20 external audits, 4 formal verifications, three years in production without incident, open-source and verifiably-built contracts, and a $1.5M bug bounty. The full picture lives on [Security](./security.md).

Your users get a financial product. Your team ships the product surface; the lending protocol, oracle, liquidation system, and audit program already exist beneath it.

---

## Proof

Wallets and apps already run on these rails.

**Phantom** — one of the most widely used self-custody wallets on Solana — reaches a Gauntlet-curated, RWA-backed yield vault from inside the wallet through [Embedded Wallets](./embedded-wallets.md) and BuildKit, so users earn without leaving the app and Gauntlet manages the risk.

**OneKey** embedded Kamino borrowing into its multi-chain wallet in a few lines, surfacing credit against a user's holdings inside the wallet, with [Markets](./markets.md) and the [liquidation engine](./liquidation-engine.md) providing the venue and safety layer behind every loan.

**Marinade** runs a RockawayX-curated [white-label vault](./white-label.md) entirely inside its own front-end, giving its large staking user base curated lending yield where the deposit, the APY, and the brand all carry Marinade's identity end to end.

Behind the same rails, **PRIME** holds $1B+ in tokenized real-world-asset deposits and **FalconX** borrows against them at fixed rates. See the full set on [Customers](./customers.md).

---

## How it composes with the rest of the platform

BuildKit is the embed seam of the two-sided platform. [Curation](./curation.md) lets a partner operate a venue on Kamino's rails; BuildKit lets a partner embed Kamino into their app. [White-label vaults](./white-label.md) are where the two meet — a curated vault that runs entirely inside your UI, carrying your brand from deposit to APY to withdrawal while Kamino runs the strategy underneath.

For a packaged path, the [Yield API](./institutional-yield-api.md) ships yield-in-a-box with a configurable user cap and a revenue share. [Embedded wallets](./embedded-wallets.md) auto-deploy idle user balances into curated vaults. A fintech putting yield in front of users follows the end-to-end story on the [Embed yield in your app](./uc-embed-yield.md) use-case; a partner launching an investment vehicle on Kamino follows [Launch a managed fund](./uc-launch-a-managed-fund.md), where BuildKit and the data APIs integrate the fund into the manager's own surface. The commercial framing for the buyer is on [Fintechs & apps](./fintechs-apps.md).

---

## Economics

You integrate the kit at no license cost; Kamino's revenue comes from the protocol take rate on the underlying lending activity, the same take rate every market pays. Integrators that drive deposits and loans can attribute that activity through a referrer on each position and earn a share of the fees their volume generates — the referral wiring is part of the borrow and earn integration paths. Curator performance and management fees — a typical institutional setup runs 15% performance and 2% AUM — accrue to whoever runs the vault your users deposit into. The packaged [Yield API](./institutional-yield-api.md) carries its own configurable revenue share. Exact terms are set with your team.

---

## Get started

Engineers can start building today from the [Developers hub](./developers.md): docs, the API reference, the SDK packages, and the working examples for each product. To scope an embed, a white-label vault, or a revenue-share arrangement for your product, talk to our team.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](./kamino-app.md)
