# Developers

> **Promise:** Build credit, yield, swap, and liquidity into your product on the same audited rails that power Kamino. Three integration surfaces — a REST API, a TypeScript SDK, and a Rust interface crate — backed by full reference docs, working examples, and the embed kit a fintech wires into its own front end to put earn and borrow in front of users.

---

## Hero

# Build Kamino's capital markets into your product.

Kamino runs credit, yield, swap, and liquidity for institutions, issuers, and millions of users. Every one of those products is reachable from your own code. Read live market data, build and simulate transactions, deploy capital into curated vaults, and embed earn and borrow directly into your app — on infrastructure that has cleared 20 audits, four formal verifications, and three years in production with zero bad debt.

[Read the docs →](https://kamino.com/docs/build) · [API reference →](https://kamino.com/docs/build/api-reference/introduction)

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## Three ways to integrate

Pick the surface that matches your stack. Each one reaches the same on-chain programs; the difference is how much you want to compose yourself and what language you work in.

### REST API — `api.kamino.finance`

HTTPS endpoints for data, analytics, and unsigned transactions. Language-agnostic, so any backend can call it. List every vault and market, pull live performance metrics and user positions, read oracle prices, and request fully-formed unsigned transactions you sign and send yourself. Built-in history endpoints carry the time-series and APY snapshots you need for charts, reporting, and reconciliation. Public endpoints are open; authenticated endpoints take a key.

```
GET  /kvaults/vaults                     all Earn vaults
GET  /kvaults/vaults/{pubkey}/metrics    live APY, TVL, utilization
GET  /v2/kamino-market                   all lending markets
GET  /oracles/prices                     Scope oracle feeds
POST /ktx/kvault/deposit                 unsigned deposit transaction
POST /ktx/klend/borrow                   unsigned borrow transaction
```

**Use it when** you want fast data integration, history tracking, and unsigned transaction building across any backend or non-JavaScript environment.

### TypeScript SDK — `@kamino-finance/klend-sdk`

On-chain state reads and full transaction composition for TypeScript and JavaScript. Compose deposits, borrows, repayments, and withdrawals; read account state in real time; simulate before you send; and reach admin-level tools for creating your own vaults. Built on `@solana/kit` for typed, standardized RPC. Working examples cover the most common flows end to end.

```ts
import { KaminoMarket, VaultClient } from '@kamino-finance/klend-sdk';

// build a vault deposit, simulate, sign, send
const tx = await vaultClient.deposit({ vault, owner, amount });
```

**Use it when** you want advanced transaction composition, simulation, and vault creation with full on-chain control from a TS/JS service or frontend.

### Rust interface crate — `klend-interface`

A lightweight instruction builder for Rust clients, high-performance bots, and direct cross-program invocation from your own Solana program. Build instructions for the same lending and vault operations, and call Kamino on-chain from inside your contract. Published to crates.io.

**Use it when** you run Rust-native clients, latency-sensitive bots, or want to invoke Kamino programs directly from an on-chain Solana program.

Still choosing? The [Reference table](#reference) below compares all three on data access, transaction building, simulation, vault creation, and CPI support, and [API vs SDK vs Rust](https://kamino.com/docs/build/developers/api-vs-sdk) walks through the trade-offs in depth.

---

## What you can build

Every product Kamino ships is reachable through these surfaces. The most common builds:

- **Earn** — deposit into curated lending vaults and watch positions accrue auto-compounding yield. Read live APY and TVL, build deposit and withdraw transactions, and surface a curator-managed strategy inside your own product. See [Lending Vaults](./lending-vaults.md) and the [Yield hub](./yield.md).
- **Borrow** — supply collateral and open variable or fixed-rate loans against it, with full position management — deposit, borrow, repay, withdraw. See [Credit](./credit.md), [Fixed Rates](./fixed-rates.md), and [Multiply](./multiply.md).
- **Swap** — route trades through the [execution stack](./routing.md): the kSwap meta-aggregator fans across Solana's venues and Kamino's own on-chain router to return best execution. See [Kamino Swap](./kamino-swap.md).
- **Liquidity** — manage concentrated-liquidity positions with automated ranging and rebalancing. See [Liquidity Vaults](./liquidity-vaults.md).
- **Data** — consolidated positions, history, and PnL for any wallet through the Portfolio endpoints; token metadata and search through the Tokens endpoints; time-series analytics through Kamino Historian.

Start with the [Build overview](https://kamino.com/docs/build) and the [developer overview](https://kamino.com/docs/build/developers/overview), then follow the Earn and Borrow tutorials, which walk through deposit, borrow, and vault creation step by step.

---

## BuildKit — embed Kamino's yield and credit surfaces

BuildKit is the embeddable integration kit for products that want to offer yield and credit by wiring into rails that already run in production. A fintech, wallet, or exchange drops earn and borrow into its own front end and its users reach the same battle-tested infrastructure that institutions deploy on. The kit ships the pieces of the flow you compose into your product: a deposit widget, a live position card, a withdraw flow, and a KYC gate that hands off to your own onboarding.

```ts
import { BuildKit } from '@kamino-finance/buildkit';

const kit = BuildKit({ apiKey, vault });

// render the embeddable deposit widget into your own UI
kit.deposit({ owner, amount }).mount('#earn');
```

The clearest expression is the embedded-wallet flow: idle balances held in your wallet layer deploy automatically into curated on-chain vault strategies, so earning becomes a native part of how money already moves through your product. Permissioning runs underneath: your own onboarding is the gate, verified users are whitelisted through the API, and only those users ever reach a vault — which lets a regulated product offer the embed inside its own compliance perimeter.

BuildKit is the technical build; the commercial story for fintechs and apps — packaged yield with configurable user caps and revenue share, embedded wallets, and white-label vaults — is framed for the buyer on the [Fintechs & apps](./fintechs-apps.md) page and in the [Embed yield in your app](./uc-embed-yield.md) use case.

Explore the platform products:

- **[BuildKit](./buildkit.md)** — the embed kit, the components, and compliance-grade permissioning.
- **[Yield API](./institutional-yield-api.md)** — packaged yield-in-a-box: regulated BTC-backed credit yield with a configurable user cap and revenue share.
- **[Embedded Wallets](./embedded-wallets.md)** — auto-deploy idle wallet balances into curated vaults.
- **[White-Label](./white-label.md)** — run Kamino vaults and markets entirely inside your own front end, under your own brand.

Wallets already build on these surfaces — Phantom embeds a curated yield vault, OneKey embeds borrowing against a user's holdings, and Marinade runs a white-label vault under its own brand. See the [Customers](./customers.md) page.

---

## Run your own venue

Beyond embedding Kamino into your app, you can operate on Kamino — launch and run your own lending market or vault on the audited rails, set every parameter through configuration, and manage it programmatically. The [Kamino Manager CLI](https://kamino.com/docs/build/cli) drives markets, reserves, and vaults from the command line; the SDK exposes the same admin-level creation tools in code.

The full self-serve platform — two operating planes, white-label, curator economics (curator keeps performance and AUM fees; Kamino's revenue is the protocol take rate on the underlying lending) — is covered on the [Curation](./curation.md) page, and audience-framed for [Curators & managers](./curators-managers.md).

---

## Built on infrastructure you can verify

The same rails sit beneath everything you integrate, and they are documented and inspectable.

- **[Markets](./markets.md)** — the configurable lending engine. A deep parameter surface per asset — supply and borrow caps, the full rate curve, LTV and liquidation thresholds, oracle config, and access rules — plus correlated-asset risk groups and optional permissioning. A bespoke market is pure configuration: set the parameters and it is live.
- **[Scope](./scope.md)** — the in-house oracle layer, with roughly 42 composable price types and a guard stack that has processed $19.33B with zero oracle exploits. Live feed health at oracles.kamino.fi.
- **[Permissioning](./permissioning.md)** — the access-control layer that turns open infrastructure into a selectively-gated venue, per market, operation, wallet, or asset. The lever that lets a regulated integration onboard verified users at scale.
- **[Vault engine](./vault-engine.md)** — allocation, the automated danger-trigger safety engine, three-layer withdrawals, and the insurance pool beneath every vault you deposit into.

Code is open source with reproducible on-chain build verification, so you can confirm that what runs on-chain matches what was audited. Program addresses are published in the docs. The full diligence picture — the audit program, formal verification, the $1.5M bug bounty, the liquidation track record, and the live transparency dashboards (multisig.kamino.fi, oracles.kamino.fi) — is on the [Security](./security.md) page.

---

## Reference

| Surface | What it gives you | Where to start |
|---|---|---|
| **REST API** | Data, analytics, unsigned transactions; any language | [API reference](https://kamino.com/docs/build/api-reference/introduction) · `api.kamino.finance` |
| **TypeScript SDK** | State reads, transaction building, simulation, vault creation | `@kamino-finance/klend-sdk` · [examples](https://github.com/Kamino-Finance/klend-sdk/tree/master/examples) |
| **Rust crate** | Instruction builders, on-chain CPI, high-performance bots | `klend-interface` (crates.io) |
| **CLI** | Manage markets, reserves, and vaults | [Kamino Manager CLI](https://kamino.com/docs/build/cli) |
| **Tutorials** | Deposit, borrow, vault creation, end to end | [Earn](https://kamino.com/docs/build/tutorials/earn) · [Borrow](https://kamino.com/docs/build/tutorials/borrow) |

Full index of every page: [kamino.com/docs/llms.txt](https://kamino.com/docs/llms.txt).

---

## Build on the rails institutions trust

The public API and the SDKs are free to build against; commercial terms — user caps, revenue share, and the protocol take rate — attach at the embed, white-label, and venue layer. Read the docs and ship against the public API today. For an embed, a white-label deployment, packaged institutional yield, or a venue tuned to your asset and access rules, our team will scope it with you.

**[Contact sales](./contact-sales.md)** · **[Read the docs →](https://kamino.com/docs/build)** · **[Launch App](https://kamino.com/home)**
