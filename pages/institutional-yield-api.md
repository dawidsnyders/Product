# Yield API

**Capability:** Platform product (Build on Kamino) · A product under **[Yield](./yield.md)** · **Audience:** fintechs, wallets, neobanks, exchanges, and wealth & asset managers · **Home:** [Yield](./yield.md) · cross-listed on [Fintechs & apps](./fintechs-apps.md), [Institutions — wealth & asset managers](./institutions-wealth-asset-managers.md), and [Developers](./developers.md)

---

## Hero

# Run a yield product under your own brand and your own stablecoin

The Yield API embeds a BTC-secured institutional yield engine inside your product as a tailored Meta-Vault. Your users hold a balance denominated in your own branded stablecoin and watch it grow; you keep the user, the brand, the interface, and every basis point above a floor you configure. Kamino runs the credit, the custody, the pricing, the rebalancing, and the reporting underneath it.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)  ·  [Build path → Developers](./developers.md)

---

## What it is

The Yield API is a tailorable Meta-Vault packaged for a partner: one integration that turns idle stablecoin balances into an interest-bearing product your users hold inside your app. It is the embeddable form of Kamino's regulated yield engine — built on the same credit book that powers [Institutional Yield](./institutional-yield.md) — packaged so a fintech or an asset manager can stand it up inside their own stack.

A user opts into earn, their stablecoin moves into a Kamino Meta-Vault, and they receive vault shares. As interest accrues, those shares appreciate, so the user's balance grows continuously. Behind the share token sits a Meta-Vault that allocates capital across a configurable set of yield sleeves, holds a liquidity buffer for fast redemptions, and rebalances automatically. Origination, collateral pricing, monthly attestation, and the redemption logic are operated on Kamino's side and surfaced to you as endpoints.

A wallet adds a high-yield balance. A neobank launches an interest-bearing account. An exchange turns parked stablecoins into a yield product. A wealth or asset manager offers clients a trusted cash-alternative yield on idle balances. The same API serves all of them because the hard parts — the regulated lending operation, the custody agreements, the oracle pricing, the on-chain accounting — are solved once and exposed as calls.

---

## Your own stablecoin, integrated end to end

The defining property of the Yield API: the balance your users see is denominated in **your** stablecoin. You issue and operate it through **Coinbase's stablecoin-as-a-service**, and the Meta-Vault earns underneath it.

This is a full integration into your stack. Your stablecoin is the unit of account your users deposit, hold, and redeem. The Meta-Vault accepts it, allocates it across the yield sleeves, and pays redemptions back in it. Your users see your token, in your interface, with a balance that climbs in real time; Kamino chrome appears only where you choose to show it. The credit book and the custody agreements that generate the yield are Kamino's; the brand, the currency, and the relationship are yours.

For a partner who has not issued a stablecoin, Coinbase's stablecoin-as-a-service is the issuance and reserve rail; for one who already runs a stablecoin, the Yield API plugs straight into the token you operate.

To stand up a permissioned, branded money market around that same stablecoin — your tokenized fund as collateral, your stablecoin as the borrow liquidity, and yield on the stablecoin paid back to your clients — see [Launch your own on-chain money market](./uc-own-stablecoin-market.md).

---

## What your users earn, and where it comes from

The yield is the return on a real credit book, blended across sleeves so that liquidity and return are balanced by design. The composition is tailorable to your program — you choose the sleeves and weights with Kamino, and Kamino enforces the safety envelope. The split below is one configurable example, a **20 / 40 / 40** allocation:

| Allocation | Share | Source of yield | Time to liquidity | Contribution |
|---|---|---|---|---|
| **Liquidity buffer** | 20% | Held unallocated at the effective federal funds rate, reserved for instant redemptions | Instant | ~0.73% |
| **PRIME** | 40% | Overcollateralized credit against Figure-originated home-equity loans, supplied into the on-chain PRIME market through a KYB-enabled special-purpose vehicle | 0–2 hours, under SLA | ~2.8% |
| **Bitcoin-backed lending** | 40% | Three-month fixed-term loans, secured by Bitcoin at 60% LTV, originated by a lending operation approved and supervised by the Liechtenstein FMA and supplied into an on-chain private-credit market through a KYB-enabled special-purpose vehicle | Days to weeks, on a rolling basis | ~2.8% |
| **Blended target** | 100% | | | **~6.33%** |

The weights, the number of sleeves, and the liquidity profile are configured at launch and can be retuned as your program scales. Each loan's rate is fixed at origination. Interest paid by borrowers flows back through the structure and into the vault with every Solana block — roughly every 400 milliseconds — so the share price compounds continuously and a holder's balance climbs in real time as the book pays down. The accrued yield is the share-price appreciation, settled on-chain.

| What your users get | Detail |
|---|---|
| **Target yield** | A blended ~6–8% APY at the example allocation, net of fees; the realized rate tracks the sleeves you configure |
| **Balance token** | Vault shares denominated in your stablecoin, appreciating with accrued interest, repricing roughly every 400 ms |
| **Deposit currency** | Your own branded stablecoin, issued via Coinbase's stablecoin-as-a-service; USDC and additional stablecoins are supported |
| **Collateral behind the BTC sleeve** | Bitcoin, 60% LTV, at qualified custodians, rehypothecation contractually prohibited |
| **Minimum deposit** | None |
| **Liquidity** | Tiered to the configured sleeves: instant within the buffer, 0–2 hours through PRIME, days to weeks for the Bitcoin sleeve as fixed-term loans reach rolling maturities |

The transparency that makes this defensible to a compliance team is built in. Each loan book is tracked on an industry-standard loan-management and collateral-tracking platform and exposed as a real-time, per-loan feed. Loan balances, collateral coverage, and portfolio health are independently attested every month by an external accounting firm. You can surface any of this in your own interface or point users to the on-chain vault analytics. The proof travels with the product.

---

## What you control

The API gives you the configuration surface to make the product your own while Kamino enforces the safety envelope.

**Your stablecoin, your unit of account.** Run the Meta-Vault under your Coinbase-issued branded stablecoin and route deposits straight into yield. Your users hold and redeem in your token; the vault earns underneath it across the sleeves you configure. See [Your own stablecoin, integrated end to end](#your-own-stablecoin-integrated-end-to-end).

**A tailorable allocation.** Choose the sleeves and weights that match your program — a buffer-heavy, instant-liquidity posture for a retail cash account, or a credit-weighted posture for a higher target yield. The 20 / 40 / 40 split is one example; the composition is yours to set with Kamino and retune as the program grows.

**A configurable user cap.** Set a per-user deposit ceiling that matches your product's risk posture and your users' onboarding tier — a conservative cap for a new retail cohort, a higher one for verified or premium users. The cap is yours to set and change as your program scales.

**The yield above your floor is yours.** Your users receive everything the vault earns up to an APY floor you set; every basis point above that flows to your revenue-share wallet in real time, as interest accrues with each Solana block. At a 2.5% floor on the ~6.33% example book, that spread is roughly 3.8% APY across your users' balances, settled on-chain and visible in the vault accounting. You can layer performance and management fees on top — for example a 10% performance fee and a 1% management fee — configured as vault parameters you set and change.

**Your brand, your interface.** The integration carries Kamino chrome only where you want it. Pair it with [White-Label vaults](./white-label.md) to run the whole experience inside your own front end, or with [Embedded Wallets](./embedded-wallets.md) so idle user balances deploy into yield automatically.

**Compliance gating that fits your onboarding.** Deposits can be gated to approved users through Kamino's [Permissioning](./permissioning.md) layer: your KYC becomes the gate, wallets are whitelisted through the API, and the on-chain layer stays identity-agnostic. Withdraw and repay always stay open, so a user can always exit. Access is additive and reversible without disrupting the underlying vault.

---

## How the integration works

Three calls cover the core experience; the configuration layer is set once at launch.

**1 — Deposit.** Your user opts into earn and moves your stablecoin into the Meta-Vault. The vault issues shares one-for-one against the deposit value and splits the capital across the sleeves you configured — in the example allocation, 20 / 40 / 40 across the buffer, the PRIME sleeve, and the Bitcoin sleeve. One call, checked against the user cap and the permissioning you configured.

**2 — Read.** Pull a user's balance, accrued yield, and position health, plus loan-book and portfolio data for the transparency you surface in your UI. Balances reflect value accrual continuously as the share price reprices each block.

**3 — Withdraw.** Your user redeems shares back to your stablecoin. The vault settles the redemption against the liquidity buffer and, where needed, draws from the allocations.

Two redemption paths run underneath that single withdraw call:

- **Within the buffer.** When a redemption is smaller than the available buffer, it is served instantly from the unallocated buffer and the user receives funds immediately, with no rebalancing.
- **Buffer overdrawn.** When a redemption exceeds the buffer, the vault rebalances and requests liquidity from the credit sleeves. In the example allocation, the PRIME sleeve restores the buffer to normal levels with instant-to-two-hour redemptions, so the user typically receives funds within 0–2 hours; the Bitcoin sleeve contributes as its three-month fixed-term loans reach their rolling maturities.

Behind those calls, the [Vault engine](./vault-engine.md) handles allocation, the tiered withdrawal logic, and automated safety monitoring; [Scope](./scope.md) prices the Bitcoin collateral with its guard stack; and the regulated lending operations originate and service the loans.

You integrate against a TypeScript SDK and a REST API, configure your vault parameters — sleeves and weights, user cap, revenue-share floor, fees, permissioning — through the management portal, and ship. The same pattern that deploys a simple revenue-sharing earn vault, pointed at a regulated, BTC-backed credit book.

---

## Why build on it

**The yield is real and already running.** You embed an operating credit product with a live loan book, regulated lenders, KYB-enabled special-purpose vehicles, and monthly attestations. The underwriting, custody, and servicing are done; your engineering team integrates endpoints.

**The economics are yours to keep.** Your users earn up to the APY floor you set; everything the book generates above that is your revenue, paid into your wallet in real time. On the same audited rails, [PRIME](./institutional-yield.md) holds $1B+ in tokenized real-world-asset deposits and can supply one of the configured sleeves directly.

**The system you embed is built, secured, and running.** Kamino runs the oracle pricing on [Scope](./scope.md), the vault engine the structure sits on, and the white-glove integration, with operational support and defined redemption SLAs. The credit beneath it is originated by regulated lenders and attested monthly, so the yield you pass to your users traces to a supervised loan book.

**The safety record is the product.** Kamino has originated **$21B+ in loans and generated $120M+ in interest with $0 bad debt across more than three years in production**, and Scope has priced **$19.33B with zero oracle exploits**. The protocol carries 20 external audits and 4 formal verifications. When your compliance team asks what backs the yield, the answer is documented end to end. See [Security](./security.md) for the full diligence pack.

**You keep the relationship.** Your users stay your users, inside your app, under your brand, holding your stablecoin. Kamino is the engine beneath the balance: the credit, the custody, the pricing, the compliance, the reporting. You capture the revenue on top.

---

## Where it fits

The Yield API is one piece of the embed surface. Compose it with the rest of the Build-on-Kamino stack:

- **[BuildKit](./buildkit.md)** — embed Kamino credit, yield, and swap across your product in a few lines of code.
- **[Embedded Wallets](./embedded-wallets.md)** — auto-deploy idle user balances into curated yield.
- **[White-Label vaults](./white-label.md)** — run the whole experience on your own front end.
- **[Institutional Yield](./institutional-yield.md)** — the regulated BTC-backed credit product this API draws on, in full.
- **[Launch your own on-chain money market](./uc-own-stablecoin-market.md)** — your tokenized fund, your branded stablecoin, your permissioned market: the full closed loop around the same Coinbase-issued stablecoin.
- **[Permissioning](./permissioning.md)** — gate deposits to your approved users.

For the buyer view of the whole embed story, see [Fintechs & apps](./fintechs-apps.md), [Institutions — wealth & asset managers](./institutions-wealth-asset-managers.md), and the [Embed yield in your app](./uc-embed-yield.md) use-case. Engineers start in [Developers](./developers.md).

---

## Get started

Talk to our team about your stablecoin, your sleeve composition, your user cap, your revenue share, and your compliance gating, and we will stand up your integration.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)  ·  [Build path → Developers](./developers.md)
