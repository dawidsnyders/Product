# Embedded Wallets

> Platform product — part of [Build on Kamino](./buildkit.md). Lives in the Developers hub and on the [Fintechs & apps](./fintechs-apps.md) solution page.

---

## Hero

# Turn every embedded wallet into a yield-bearing account

You already issue wallets to your users, secured by your auth and funded through your app. Most of the stablecoins sitting in them earn zero between transactions. Embedded Wallets connects those balances to Kamino's curated lending vaults, so idle capital earns from the moment it lands and stays instantly spendable. The user signs with the wallet they already have. You write the policy. Kamino runs the yield.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## What it does

A user funds your wallet, holds USDC for a few days, then swaps or sends — and the capital earns zero the whole time it waits. Embedded Wallets closes that gap. Balances above a buffer you define route into a curated Kamino vault, accrue auto-compounding yield continuously, and unwind back to spendable cash the instant the user needs them.

The integration sits on the wallet infrastructure you already run. If you issue embedded wallets through a provider like Privy, the same wallet that signs a payment signs a vault deposit. The whole flow stays inside your app, on your screens, under one balance the user already understands. The yield is a property of holding a balance with you.

- **Auto-deploy on a rule you set** — define an idle threshold and a target buffer; balances above the buffer move into the vault, the buffer stays liquid for spending.
- **Continuous, auto-compounding yield** — deposits earn the lending rate of the underlying [vault](./lending-vaults.md), compounded automatically, accruing into the share token the wallet holds.
- **Instant access** — withdrawals draw from the vault's idle buffer first, then redeem from markets with available liquidity, so a user's spendable balance reconstitutes on demand.
- **The user's own signature** — every deposit and withdrawal is a transaction the user's embedded wallet signs locally. Keys stay in your wallet stack and never reach Kamino.

---

## How it works

Embedded Wallets is a deposit-and-withdraw flow against the [Vault engine](./vault-engine.md), wired so the signing happens inside the wallet you already issue.

**1. Request a deposit.** When a balance crosses the threshold you set, your backend asks Kamino for a deposit transaction — naming the wallet, the curated vault, and the amount. Kamino assembles a ready-to-sign Solana transaction and hands it back.

**2. Sign in the user's wallet.** The user's embedded wallet signs the transaction locally. The private key stays in your wallet stack and never reaches Kamino. Kamino composes the on-chain instructions; the user holds the signature.

**3. Accrue.** Once submitted, the wallet receives the vault's auto-compounding share token, and yield begins accruing immediately as the capital is supplied to borrowers in the vault's markets.

**4. Withdraw on demand.** A withdrawal runs the same request-sign-submit loop in reverse and returns spendable tokens to the wallet. Withdrawals settle instantly when the vault's idle buffer covers them, and draw from market liquidity when the request runs larger. The vault's exit queue engages only when the idle buffer and the markets' available liquidity are both exhausted at once — a tail condition for the curated, blue-chip-collateral vaults these balances deploy into — and it fills positions fairly as borrowers repay and liquidity returns. Sizing the buffer to your spend patterns keeps the common case instant.

Build against this flow through the [TypeScript SDK](./developers.md) for richer in-app composition, the [REST API](./developers.md) for backend orchestration, or the [Rust crate](./developers.md) for high-throughput services. Read positions, balances, and accrued yield through the same surface; the byte-level transaction details live in the [Developers hub](./developers.md).

---

## The vault underneath

Auto-deployed balances land in a curated [Lending Vault](./lending-vaults.md), run on the same [Vault engine](./vault-engine.md) that powers Kamino's consumer Earn product and its institutional mandates. That gives an embedded balance the full apparatus a sophisticated allocator would demand:

- **A named curator** sets the vault's allocation strategy — which markets it supplies, at what weights and caps. The professional roster running these vaults includes Gauntlet, Steakhouse, Allez, and others.
- **An automated safety engine** monitors the vault and pulls capital out of an asset on danger signals: an unbacked mint, a depeg, drying exit liquidity, or an oracle diverging from the market.
- **Whitelisted reserves** restrict a vault to Kamino-verified markets, so deposited capital can only flow where the controls allow.
- **A first-loss insurance pool** has the curator post capital that absorbs losses before depositors, with Kamino matching it up to $250K per vault.

You choose which curated vault your users' balances deploy into. The yield they earn is the real lending rate borrowers pay, compounded — anchored to the same [Markets](./markets.md) and priced by the same [Scope oracle](./scope.md) that underwrite billions in on-chain credit.

For balances that must stay inside a compliance boundary, route them into a [Permissioned Vault](./permissioned-vaults.md): deposits accepted only from wallets your onboarding has approved, gated by Kamino's [Permissioning](./permissioning.md) layer with KYC enforced through your own flow.

---

## What your users see

A balance that grows on its own. A user holding funds in your app watches the number climb while the mechanics — the threshold, the deposit, the share token, the auto-compounding, the withdrawal path — run beneath the surface you control. You decide how to present it: a yield line on the balance, an opt-in toggle, an always-on account default. The capital-markets machinery stays invisible, and the experience stays yours.

---

## Economics

Your revenue is the spread: the vault earns a gross lending rate, you decide how much of it to pass to users, and you keep the difference — the net interest margin on every balance you deploy. Embedded Wallets carries no platform fee for the integration itself. Underneath your spread, Kamino takes a protocol rate on the lending the deployed capital funds, and the curator's performance and management fees are set on the vault (a typical institutional configuration is 15% performance / 2% AUM). Both come out of the gross yield before it reaches your margin. Revenue-share terms on packaged configurations are agreed with sales.

---

## Where it fits

Embedded Wallets is one of four ways to put Kamino inside your product — alongside BuildKit, the Yield API, and White-Label vaults — and they compose:

- **[BuildKit](./buildkit.md)** — the embed kit and components for shipping Kamino credit, yield, and swap into your app.
- **[Yield API](./institutional-yield-api.md)** — packaged regulated-credit yield with a configurable user cap and revenue share.
- **[White-Label vaults](./white-label.md)** — run Kamino vaults under your own brand, on your own front-end.

Embedded Wallets composes with all three: it auto-deploys idle balances as a standing default, and BuildKit adds explicit earn-and-borrow surfaces for users who want to act on their balance directly.

This is the build path for the [Embed yield in your app](./uc-embed-yield.md) use-case, and the integration teams reach for on the [Fintechs & apps](./fintechs-apps.md) solution page. Engineers start in the [Developers hub](./developers.md).

**Proof:** Phantom runs embedded-wallet integration with Kamino; OneKey embeds Kamino borrowing. The wallets your users already trust are already building on these rails.

---

## Why a wallet provider can underwrite this

A wallet provider is underwriting where its users' balances go, so the diligence bar is the institutional one. Kamino's record is built to clear it: 20 external audits, 4 formal verifications, three years live in production, and $0 of bad debt across $120M+ liquidated in 100k+ liquidations. The vault engine's safety triggers, whitelisted reserves, and first-loss insurance pool are live on every curated vault. Pricing runs through Scope, which has processed $19.33B with zero oracle exploits. Throughout, your users' wallet keys stay in your stack: Kamino composes each transaction, the user's wallet signs it. Full diligence lives on the [Security](./security.md) page, with the live transparency dashboards behind it.

---

## Get started

Talk to us about the vault selection, the deployment policy, and the revenue-share terms for your user base, then your engineers wire it up from the Developers hub.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
