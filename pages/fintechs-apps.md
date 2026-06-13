# For fintechs & apps

> **Audience page — Solutions · By who you are.** Capital-markets vocabulary. CTA: Contact sales (primary) · Launch App (secondary).

---

## Hero

# Yield, credit, and swaps your users will never have to leave for

Add a savings rate, a loan against holdings, and best-execution swaps to your wallet, exchange, or neobank. Your users see your brand and earn, borrow, and swap inside your app. Kamino runs the markets, the pricing, the liquidation engine, and the compliance controls underneath, and your engineers wire it in a few lines.

<sub>$120M+ liquidated · 100k+ liquidations · $0 bad debt</sub>

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)

Already building? Your engineers start at the **[Developer hub →](./developers.md)**.

---

## The problem you're solving

Your users hold balances that do nothing. Stablecoins sit idle. Tokens sit untouched when the holder would rather keep the position and borrow against it for liquidity. Every one of those is a product you could offer, and a reason for the user to keep the balance with you.

Building it yourself means writing a lending protocol, sourcing an oracle that can price the assets your users actually hold, standing up a liquidation engine that holds the line at zero bad debt through every crash, passing security audits, and carrying the regulatory weight of custodied yield. That's a multi-year program with a permanent on-call burden.

Kamino is the engine for all of it. You embed the surfaces; Kamino operates the rails — the same rails that run the Kamino consumer app, that carry $1B+ in tokenized real-world-asset deposits across Kamino's markets including the PRIME home-loan market, and that institutions like FalconX borrow against at fixed rates.

---

## What you can offer your users

### Earn — a savings rate on idle balances

Embed a yield product backed by Kamino's curated lending vaults. A user's stablecoins are deposited, allocated across vetted lending markets by a professional curator, and earn the interest borrowers pay — auto-compounding into a share token the user holds. You surface a rate and a balance; the [Vault engine](./vault-engine.md) handles allocation, rebalancing, and a three-layer withdrawal path so users can redeem.

For balances that should never sit still, **[Embedded Wallets](./embedded-wallets.md)** make the savings rate automatic, so the balance earns by default and stays spendable. The auto-deploy mechanic is covered as integration path three below.

### Borrow — loans against what users already hold

Let a user borrow stablecoins against the assets in their wallet without selling them. This is the integration **OneKey** ships: borrowing on Kamino's lending markets, inside their own wallet. Variable-rate borrowing is live today; fixed-rate, fixed-term loans give users a locked cost to maturity. The [Liquidation engine](./liquidation-engine.md) protects every position with auction and soft-liquidation paths and oracle-level scam-wick protection — the machinery behind the $0-bad-debt record.

### Swap — best execution, embedded

Route your users' swaps through [Kamino Swap](./kamino-swap.md), a meta-aggregator that fans an order across Jupiter, DFlow, Titan, 0x, OKX, and Kamino's own on-chain router, ranks the routes, and returns the best fill. The same execution layer powers repay-with-collateral and one-click leverage, so a swap embed becomes the foundation for richer flows later.

### Yield API — a regulated savings rate, embedded as yield-in-a-box

The **[Yield API](./institutional-yield-api.md)** packages a regulated credit product into endpoints you wire into your own stack. Your users deposit a stablecoin and hold a yield-bearing share token (kiUSDC) that appreciates as the loan book pays interest, targeting **6–8% APY**. A deposit call, a withdraw call, and a balance read sit on top; Kamino runs the origination, the custody, the compliance, and the reporting underneath. Deposits fund overcollateralized loans to KYC-verified institutional borrowers, secured by Bitcoin held at qualified custodians under tri-party agreements with rehypothecation contractually prohibited, at a maximum 60% loan-to-value, originated by a lending operation supervised by Liechtenstein's Financial Market Authority. A real-time per-loan feed, weekly collateral reporting, and monthly independent attestation travel with the product, so you can show users the dollar value of their balance and put the same proof in front of your compliance team.

You decide the unit of account. Run the product under USDC, or **issue your own branded stablecoin through Coinbase's stablecoin-as-a-service** and make it the currency your users hold and earn in. Your stablecoin becomes the balance on the user's screen; under it, deposits flow into a Meta-Vault structure tailored to your product, and the interest the loan book generates accrues to that stablecoin. Your users see your brand on the money itself, the yield compounds into the same denomination, and the entire savings experience carries your name end to end. This is the foundation for standing up a complete on-chain money market under your own stablecoin — your currency as both the savings balance and the borrow liquidity — walked through on the **[own-stablecoin money market →](./uc-own-stablecoin-market.md)** page.

Set a per-user deposit cap that matches each onboarding tier, and keep every basis point above a 2.5% APY floor as your spread, paid into your wallet in real time as interest accrues. A wallet adds a high-yield balance, a neobank launches an interest-bearing account, an exchange turns idle stablecoins into a yield product — all against the same API.

---

## Three ways to integrate

You consume the same products three ways. Most partners blend them.

**1. Embed the surfaces — BuildKit.** [BuildKit](./buildkit.md) gives you composable transaction builders and data endpoints for Earn and Borrow. Deposit, withdraw, borrow, and repay are methods you call; vault lists, APYs, user positions, and history are endpoints you read. A working earn or borrow flow ships in a few lines. Reach it the way your stack already works: a TypeScript SDK for app code, a REST API for any language, and a Rust crate for on-chain programs.

**2. Run it on your own front-end — White-Label.** With **[White-Label vaults](./white-label.md)**, a Kamino vault runs invisibly behind your interface — your branding, your UX, Kamino's engine. This is how **Marinade** runs a Kamino vault as its own product. A no-code management portal handles deployment for teams that would rather configure than code.

**3. Auto-deploy idle balances — Embedded Wallets.** If you run embedded wallets, idle balances earn automatically. **Phantom** ships embedded-wallet support on this path, and Kamino's adapters cover the major embedded-wallet providers including Privy.

---

## Your onboarding becomes the on-chain gate

Offering credit and yield to verified users means gating who can deposit and borrow. Kamino's [Permissioning](./permissioning.md) layer does this at the wallet level. Your application runs its own KYC; once a user clears, you whitelist their wallet through an API and their next deposit clears the on-chain check. Unverified wallets are rejected at transaction time.

The controls are precise. Gate deposit, borrow, or specific actions per market, per asset, or per wallet. Withdraw and repay always stay open, so a user can always exit and repay regardless of allowlist state. Permissioning is additive and reversible: turn it on for a regulated product and off for an open one with a configuration change that touches the same markets and the same code. Your onboarding decides who clears; Kamino enforces that decision on-chain at transaction time.

---

## The economics

You earn a revenue share on the activity you originate. The most specific lever is the [Yield API](./institutional-yield-api.md): it ships with a configurable user cap and an explicit revenue share for the integrating partner — your users earn up to a 2.5% APY floor, and everything the book generates above that is yours — so you set the share and the volume bounds when you stand up the product.

The same structure runs through BuildKit. You deploy a vault with a fee configuration and set a fee on it; that fee accrues to your address as your users earn, on top of the yield they see. Kamino earns a protocol take rate on the underlying lending, and your share sits above that on the originated activity. The SDKs, APIs, and docs are open to build against today, with the commercial terms scaling to the volume you bring.

---

## Why build on Kamino

**The pricing covers what your users actually hold.** [Scope](./scope.md), Kamino's in-house oracle, composes ~42 price types and has valued $19.33B with zero oracle exploits. It prices the hard assets a generic feed can't — tokenized equities through market hours and halts, NAV-based fund tokens, gold, and yield-bearing tokens — with staleness, divergence, and cap-floor guards on every feed. Whatever Scope can price safely, your users can earn on, borrow against, and swap.

**The safety record is the product.** $120M+ liquidated across 100k+ liquidations with $0 of bad debt. 20 external audits, 4 formal verifications, three years in production without an incident, a $1.5M bug bounty, and open-source, reproducibly-built contracts. The full diligence story lives on the [Security](./security.md) page, with live transparency dashboards behind it.

**One integration reaches the whole platform.** The markets your users borrow from are the markets institutions borrow from. The vaults they earn in are run by curators like Gauntlet and Steakhouse. The day Kamino lists a new tokenized asset or ships fixed-rate Multiply, your existing integration can offer it through the same APIs you already wired, with no new plumbing.

---

## Proof

- **Phantom** — embedded-wallet support, idle balances earning on Kamino's vault engine.
- **OneKey** — borrowing on Kamino's lending markets, embedded in their wallet.
- **Marinade** — a Kamino vault running white-label as Marinade's own product.
- **PRIME** — the flagship real-world-asset home-loan market, part of $1B+ in RWA deposits across Kamino's markets, on the same rails you'd integrate.

Read the full stories on the **[Customers →](./customers.md)** page.

---

## Where to go next

- **[Embed yield in your app →](./uc-embed-yield.md)** — the end-to-end build: BuildKit, the Yield API, Embedded Wallets, White-Label, and the underlying vaults, composed for a yield integration.
- **[Launch your own on-chain money market →](./uc-own-stablecoin-market.md)** — run the whole product under your own branded stablecoin, with your currency as both the savings balance and the borrow liquidity.
- **[Developer hub →](./developers.md)** — docs, API reference, and SDKs. Send your engineers here.
- **[BuildKit →](./buildkit.md)** · **[Yield API →](./institutional-yield-api.md)** · **[Embedded Wallets →](./embedded-wallets.md)** · **[White-Label →](./white-label.md)** · **[Permissioning →](./permissioning.md)**

---

## Talk to us

Tell us what you want to ship — a savings rate, loans against holdings, swaps, or a regulated yield product — and the segment you serve. We'll map the integration, the compliance controls, and the revenue share to your product.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)
