# White-Label Vaults

> Ship a yield product your users open in your own app, under your own brand, powered by Kamino's lending and vault engine. Marinade runs one today: its users deposit and earn entirely inside Marinade's product, while the lending, pricing, and liquidations run on Kamino's audited contracts.

**[Contact sales](./contact-sales.md)** · [Launch App](https://kamino.com/home)

---

## What a white-label vault is

A white-label vault is a [Kamino vault](./vault-engine.md) your users reach through your own interface, carrying your name. Deposits flow into your branded vault, capital is supplied across [Kamino lending markets](./markets.md) on a strategy you define, and depositors hold an auto-compounding share token whose value grows as borrowers pay interest. You own the brand, the interface, the deposit flow, and the fee economics. Kamino supplies the live, audited contracts, the [Scope oracle](./scope.md), the [liquidation engine](./liquidation-engine.md), and the insurance pool that already secure billions in deposits across the protocol.

[Marinade](./customers.md) runs one today. Its vault is operated on Kamino's [vault engine](./vault-engine.md) and lives entirely on the Marinade interface: Marinade's users deposit and earn without ever leaving Marinade's product, and the lending happens on Kamino underneath. Any team that wants a yield product their users open in their own app can stand up the same deployment.

This is the seam where Kamino's two-sided platform meets. You operate the venue through [Curation](./curation.md), and you embed it into your own surface through [BuildKit](./buildkit.md). White-label is both at once: a curated vault, presented as part of your product.

---

## What your users experience

A depositor in your white-label vault deposits a single token — USDC, SOL, USDS, whatever the vault is built around — and receives a share token sized at the vault's current exchange rate. Each share's redemption value rises as the underlying loans accrue interest; the share count a depositor holds stays fixed, and all of the yield shows up in the exchange rate they redeem at.

- **Deposit** in one token, hold one share token.
- **Earn** automatically — the vault routes capital across [Kamino lending markets](./markets.md) and the borrowers' interest compounds back into the share price.
- **Withdraw** instantly when liquidity is available. When capital is fully deployed or committed to fixed-rate reserves, redemptions enter a fair queue where lender exits take precedence over new borrows, so a depositor's place in line is protected.

Your users see a balance that grows and a withdraw button that works. The market routing, rebalancing, and risk monitoring run silently underneath, so the product they hold stays as simple as a savings balance.

---

## What you control as the operator

You are the curator of your vault. That gives you the levers that define the product your users get, set through [Curation](./curation.md) at kamino.com/curators:

- **Allocation strategy** — choose which [Kamino markets](./markets.md) the vault supplies into, with a weight, cap, and priority per reserve. An automated rebalancing process keeps the vault near your targets as deposits, withdrawals, and interest move it off them.
- **Standard and conditional allocations** — keep capital always deployed, or hold it ready and deploy only when a borrower arrives, so the vault can earn floating yield while standing by to fund fixed-rate term loans.
- **Risk controls** — turn on **whitelisted reserves** to bind the vault, at the smart-contract level, to only protocol-verified reserves, so capital can never be allocated into an unapproved market. Post an **insurance pool** of your own first-loss capital that absorbs losses before depositors; Kamino matches your contribution up to $250K per vault, with a 30-day cooldown.
- **Branding** — your vault's name, logo, description, and site URL are yours to set, and they carry through to every surface the vault appears on.
- **Access** — gate deposits when you need to. A [permissioned vault](./permissioned-vaults.md) accepts capital only from approved wallets or a specific source, enforced through [Permissioning](./permissioning.md), with KYC handled by your own onboarding off-chain.

Admin authority is separated so no single key can move capital: the role that governs the vault is distinct from the role that adjusts allocation weights and caps, and operations run through multisig governance.

---

## How you put it in front of your users

White-label vaults reach your interface through whichever path fits your team.

- **No-code** — stand up and operate the vault entirely through [Curation](./curation.md) at kamino.com/curators, then point your users at it. This is how a curated vault appears on a partner's own UI today.
- **SDK** — the TypeScript SDK composes the on-chain transactions for deposit, withdraw, and the redemption queue, and reads vault state, performance, and user positions, so you can build the deposit-and-earn flow natively inside your app.
- **API** — the REST surface returns the vault list, performance metrics, per-user positions, and history for the screens and statements your product renders.

The [Portfolio API](./developers.md) gives you a consolidated view of every user's positions, history, and PnL out of the box, so your app can render real account screens and statements from day one. The full build reference lives in the [Developers hub](./developers.md).

---

## The trust you inherit

The reason white-label works is that the hard parts are already solved and already audited. Standing up a credit-backed yield product from scratch means building and underwriting an oracle, a liquidation engine, a rebalancing safety engine, and years of production hardening before you can take a single deposit. A white-label vault inherits all of it. When a vault carries your brand, it carries Kamino's security posture:

- **Audited, verifiable contracts** — the lending and vault engine carries 20 independent security audits and 4 formal verifications, open-sourced with reproducible on-chain build verification.
- **Scope oracle pricing** — every collateral price your vault depends on comes from [Scope](./scope.md), with multi-source composition, divergence and staleness guards, and scam-wick protection at the oracle layer.
- **A proven liquidation engine** — the [liquidation engine](./liquidation-engine.md) behind your vault's reserves has cleared $120M+ across 100k+ liquidations with $0 bad debt. Underwriting that record yourself is the single hardest part of running credit; here you inherit it.
- **The insurance pool and whitelisted reserves** — depositor protections that make your branded product credible to the people putting capital into it.

Your users get a product that looks and feels like yours, backed by infrastructure that has run in production for three years without a security incident. Full diligence material lives on the [Security](./security.md) page.

---

## Economics

White-label keeps the revenue with the operator. You set a **performance fee** on vault profits and an **AUM fee** charged annually on assets under management — a typical institutional configuration runs 15% performance and 2% AUM — and both accrue continuously in the deposit token, collected when you call the fee instruction. Those curator fees are yours to keep. Kamino earns a protocol take rate on the underlying lending the vault secures. You grow the vault and keep the management economics; Kamino earns on the credit it secures underneath.

A private vault deployed for your own users can carry its own revenue-share arrangement; the [Yield API](./institutional-yield-api.md) packages this further as yield-in-a-box with a configurable user cap and revenue share for fintechs that want the product without operating a vault themselves.

---

## Where this fits

White-label vaults are one expression of a broader platform.

- **[Curation](./curation.md)** — the suite you operate the vault through, on either the permissionless or the curated plane.
- **[BuildKit](./buildkit.md)** — embed Kamino credit, yield, and swap more broadly across your product in a few lines.
- **[Embedded Wallets](./embedded-wallets.md)** — auto-deploy idle embedded-wallet balances into curated vaults.
- **[Yield API](./institutional-yield-api.md)** — packaged, regulated yield for fintechs, revenue-share built in.
- **[Lending Vaults](./lending-vaults.md)** and **[Meta-Vaults](./meta-vaults.md)** — the underlying vault products your white-label deployment is built from.

Built for the teams on the **[Fintechs & apps](./fintechs-apps.md)** page, and a core piece of **[launching a managed fund](./uc-launch-a-managed-fund.md)** and **[embedding yield in your app](./uc-embed-yield.md)**.

---

## Put your brand on yield that already works

Tell us the product you want your users to open, and we'll stand up the vault that powers it.

**[Contact sales](./contact-sales.md)** · [Launch App](https://kamino.com/home)
