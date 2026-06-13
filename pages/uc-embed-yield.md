# Embed yield in your app

> Solutions · By what you want to do

## Hero

# Give your users yield, on the rails institutions already trust

Wallets, neobanks, and exchanges turn idle balances into a returning customer. Kamino gives you the yield engine to do it: curated lending vaults, regulated BTC-backed credit yield, and compliant access controls, delivered through an API, an SDK, and a no-code portal. Your brand, your users, your front-end. Kamino runs the capital markets underneath.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## The problem you're actually solving

Your users are holding stablecoins, SOL, and BTC in balances that earn nothing. Every dollar sitting idle is a dollar they could move to an app that pays them. The yield is the retention lever, the deposit magnet, and the revenue line all at once.

Building it yourself means standing up a lending protocol, getting it audited, sourcing borrower demand, pricing collateral safely, clearing liquidations cleanly through every market cycle, and answering a compliance team's questions about every one of those. That is a multi-year infrastructure company, and it is the one Kamino has already built and run for three years in production with $0 bad debt.

You embed the result. Your users see a yield product inside your app. Behind it sits a lending engine that has processed billions, an oracle that has priced $19.33B with zero exploits, and a liquidation engine with a 100,000+ liquidation track record — all reached through an API, an SDK, and a no-code portal.

---

## What you can embed

Kamino's yield comes in tiers, and you choose how much of the stack to expose. Each one is a live product with its own page; this page is how they fit together for an app builder.

### Curated lending vaults — yield on what your users already hold

A user deposits one asset — USDC, SOL, JLP — and receives an auto-compounding share token. Deposit 1,000 USDC at a $1.00 share price and you hold 1,000 kvUSDC; as the vault earns, say the share price climbs to $1.06, and those same shares are worth 1,060 USDC. The share count stays fixed and the price rises, so interest reinvests continuously on its own and the gain shows up in the share value the user already holds.

Underneath, a professional curator allocates that capital across Kamino's lending markets at set weights and caps, earning the interest borrowers pay. Your user never picks a market or watches utilization. The curator roster running these vaults includes [Gauntlet, Steakhouse, Allez, and others](./lending-vaults.md) — names your risk committee can diligence and your users can trust.

→ [Lending Vaults](./lending-vaults.md)

### Institutional Yield — regulated, BTC-backed credit yield

For users who want yield with an institutional risk profile, embed Institutional Yield: a target APY in the high single digits, funded by overcollateralized loans to institutional borrowers. Every loan is backed by Bitcoin held at qualified custodians under tri-party agreements, with the loan-to-value, the rehypothecation terms, and the regulatory supervision documented on the [Institutional Yield](./institutional-yield.md) page.

Depositors hold a yield-bearing share token (kiUSDC for USDC) and watch the book in the open: a real-time loan-level feed showing live loan-to-value per loan, weekly collateral reporting, and a monthly independent attestation from a qualified accounting firm. For the embedding fintech, those three artifacts are what a compliance team asks to see before it signs off on a yield product.

→ [Institutional Yield](./institutional-yield.md)

### Meta-Vaults — a blended yield product, configured to your thesis

When a single-asset vault is too narrow, [Meta-Vaults](./meta-vaults.md) compose multiple assets and strategies into one share — USD yield, leveraged exposure, treasuries, and tokenized equities in a single vehicle that rebalances on a schedule. You embed one product; your users get a diversified yield strategy you (or a curator) configured.

→ [Meta-Vaults](./meta-vaults.md)

---

## How you ship it

Three integration depths, one underlying engine. Start with a few API calls and graduate to a fully branded experience.

### BuildKit — the embed kit

[BuildKit](./buildkit.md) is how a fintech integrates Kamino lending and yield into its own app. Your engineers work against:

- **Data APIs (REST)** — query the list of vaults, performance metrics, market data, user positions, loan health, and historical yield. This is what powers the balance, the live APY, and the PnL your users see in your UI.
- **Transaction APIs and SDKs in TypeScript and Rust** — compose deposit, withdraw, borrow, and repay transactions on-chain, in the language your stack already speaks.
- **A no-code portal** — deploy and operate a vault entirely from a browser, with the configuration handled through a UI.

Your engineering team lives in the [Developers hub](./developers.md), where the full API reference, the SDKs, and working code examples are.

### Yield API — yield-in-a-box

Institutional Yield is the underlying product — the regulated, BTC-backed credit vault described above. The [Yield API](./institutional-yield-api.md) is how you embed that vault as one packaged integration: a configurable user cap so you control your exposure, a revenue share so the yield product earns for you, and the transparency feed wired in. Your users deposit, the share token accrues, and you take a share of the spread.

### Embedded Wallets — yield with zero deposit friction

If your app runs embedded wallets, idle balances can [auto-deploy into curated vaults](./embedded-wallets.md) the moment they land. A balance starts accruing yield as soon as it hits the wallet, with the same single balance the user already sees. For a consumer fintech, that turns yield into a default property of holding money in your app, reaching every user the instant they fund and earning across the whole balance the moment it arrives.

→ [Embedded Wallets](./embedded-wallets.md)

### White-Label — your front-end, invisibly powered

Run Kamino vaults entirely inside your own interface, presented under your name and your design. [White-Label](./white-label.md) is the seam where embedding and operating meet: your users see your product, while Kamino runs the markets, the liquidations, and the security underneath. Marinade runs a white-label vault on this model.

→ [White-Label](./white-label.md)

---

## Compliance is built into the rails

The question that gates a fintech yield product is whether the compliance team can sign off on who is allowed in. Kamino's [permissioning layer](./permissioning.md) answers it by putting that gate in your hands.

Permissioning adds a single approval check to entry operations. You verify your users through your own onboarding — your KYC provider, your flow — and whitelist their wallets through an API. The on-chain layer stays identity-agnostic; your compliance posture is the gate. Deposits run through that approval check on the way in. Withdraw and repay stay permanently open, so an approved user can exit their position at any time, and a user who later falls outside your mandate can always get their money out.

For a yield product your users actually deposit into, [Permissioned Vaults](./permissioned-vaults.md) productize this: a gated vault scoped to approved wallets only, gated by source of funds where your mandate requires it, with the gate switchable instantly as your mandate changes and the underlying vault running uninterrupted throughout. A regulated app gets compliant yield with the credit engine intact and the venue closed to exactly the users it approves.

→ [Permissioning](./permissioning.md) · [Permissioned Vaults](./permissioned-vaults.md)

---

## The trust you're inheriting

When you embed Kamino, your users' yield rides the same infrastructure institutions borrow against custodied capital on:

- **$0 bad debt** across 100,000+ liquidations and $120M+ liquidated, in live production for three years.
- **20 external audits and 4 formal verifications**, with a $1.5M bug bounty and reproducible on-chain build verification — the contracts you depend on are open source and verifiable.
- **An oracle that has priced $19.33B with zero exploits**, with scam-wick protection that rejects bad prices before they can trigger a wrong liquidation. This is [Scope](./scope.md), and it's why the collateral behind your users' yield is priced safely.
- **Live transparency dashboards** at multisig.kamino.fi and oracles.kamino.fi — your security team can verify the rails in real time, today, before they sign.

The whole stack — [the lending markets](./markets.md), [the vault engine](./vault-engine.md), the liquidations, the pricing — is the same one [institutions](./institutions.md) and [asset issuers](./asset-issuers.md) deploy on. You ship it to your users in days; the diligence behind it took years.

→ [Security](./security.md)

---

## The economics

You earn on the yield you distribute. The Yield API carries a revenue share you set against a configurable user cap, so the spread between the borrower rate and the depositor rate becomes a line in your P&L. To make it concrete: if borrowers pay 10% and your users earn an 8% deposit APY, the 2% spread on embedded balances is yours to keep, scaling with the deposits your app brings in. On curated lending vaults, curator performance and AUM fees flow to the curator (a typical institutional setup is 15% performance / 2% AUM); Kamino's revenue is the protocol take rate on the underlying lending. Those two lines are the complete fee stack: the curator's fees and the protocol's take rate, with your revenue share sitting on top of the spread.

The deposits stay yours: your users, your interface, your relationship. Kamino runs the capital markets and charges the rails.

---

## Built by app builders, on these rails

Wallets, neobanks, and exchanges already run on this stack. Phantom uses Kamino through an embedded-wallet integration; OneKey ships borrowing to its users; Marinade runs a white-label vault. Each one keeps its users and its brand while Kamino supplies the credit and yield engine underneath.

**Marinade — a yield vault under its own brand.** Marinade, one of Solana's largest staking products, wanted to offer its users a lending-based yield product alongside staking, with the experience contained entirely in Marinade's own interface. Marinade embedded a [White-Label](./white-label.md) vault on BuildKit: its users deposit and see a Marinade-branded product, and Kamino runs the lending markets, the liquidations, and the pricing underneath. Marinade shipped a new yield surface to its existing user base on infrastructure Kamino already operates, in the time it takes to integrate an SDK.

→ [Read the customer stories](./customers.md)

---

## Where this fits

This is the embed story told as a job. The audience page tells it as an identity:

- **[Fintechs & apps](./fintechs-apps.md)** — the full commercial pitch for wallets, neobanks, and exchanges, with the proof band and the routing into the build.
- **[Developers](./developers.md)** — where your engineers get the API reference, the SDKs, and the code.
- **[Launch a managed fund](./uc-launch-a-managed-fund.md)** — the adjacent job, for when you want to run the vehicle as well as embed it.

---

## Ship yield your users will move money for

Tell us what you're building. We'll map the right tier — curated vaults, regulated yield, or a blended portfolio — to your app, your users, and your compliance needs, and get your engineers everything they need to integrate.

**[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
