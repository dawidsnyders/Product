# Launch your own on-chain money market

> **Solutions · use-case (by what you want to do)** · framed for the institution that wants to run a closed-loop credit and yield market for its own clients, under its own brand. Composes: [Markets](./markets.md) · [Permissioned Markets](./permissioned-markets.md) · [Custodial Borrowing](./custodial-borrowing.md) · [Scope](./scope.md) · [Multiply](./multiply.md) · [RWA Liquidity](./rwa-liquidity.md) · [Yield API](./institutional-yield-api.md). Cross-links: [Institutions](./institutions.md) · [Asset issuers](./asset-issuers.md) · [Institutions — wealth & asset managers](./institutions-wealth-asset-managers.md). CTA: Contact sales (primary) · Launch App (secondary).

---

## Hero

# Launch your own on-chain money market

Take a fund or a tokenized asset your clients already hold, stand up a white-glove credit market that carries your institution's name and authorization rules, and run it on your own branded stablecoin. Your clients who hold the fund borrow your stablecoin against it to lever their position. Your clients who hold idle cash supply that same stablecoin and earn the interest the borrowers pay. The market closes the loop on itself: the leverage demand on one side funds the yield on the other, and both sides stay inside a perimeter you control, on infrastructure Kamino prices, secures, and operates with you.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)

---

## The closed loop, in one picture

A money market has two sides. Most institutions can build one and have to rent the other. This use case gives you both, wired together, under one brand.

- **The fund holders (the borrow side).** Clients who hold your tokenized fund deposit it as collateral and borrow your stablecoin against it. They use that borrow to loop — adding amplified exposure to the same fund — or simply to draw liquidity without selling. They pay interest on the stablecoin they borrow.
- **The stablecoin suppliers (the yield side).** Clients with idle cash hold your stablecoin and supply it into the same market. Their capital is what the fund holders borrow, and the interest the borrowers pay flows to them as yield on the stablecoin.

The interest the loopers pay *is* the yield the suppliers earn. The stablecoin is the medium that connects the two, so the loop closes inside your own market: client leverage funds client yield, and every basis point that would otherwise leak to a third-party venue stays in your franchise. Below, the loop gets built one component at a time.

---

## 1. Price the fund — the gate that opens the market

Nothing in the loop runs until the fund can be priced safely on-chain. Collateral value, loan health, liquidation triggers, and the stablecoin supplier's accounting all read from one source: [Scope](./scope.md), Kamino's in-house pricing engine. A tokenized fund is exactly the asset a generic crypto oracle handles badly: its value comes from a NAV published on a schedule, with quiet windows between prints and corporate-action gaps a continuous-market feed would misread. Scope carries purpose-built entry types for that shape:

- A **most-recent-of-sources** price takes the freshest NAV across up to four sources, each held to a staleness window and a divergence tolerance, so a single stale or rogue print trips the guard and the feed reverts before it reaches a loan.
- A **capped-and-floored** price clamps the value to a ceiling, a floor, or both, with the bounds themselves expressed as oracle entries so they can move as the fund's mandate requires.
- Pricing **pauses through NAV-pause signals and corporate-action windows** on the assets that need them, so a scheduled gap in the NAV never produces a wrong liquidation.

Around every feed sits a guard stack: a staleness window, a divergence tolerance across sources, and a reference-price check that reverts any update diverging beyond tolerance (5% by default). The effect is to convert oracle risk into bounded, governed risk. Scope has priced $19.33B of activity with zero oracle exploits, all of it watchable in real time at oracles.kamino.fi. This guarded feed is the gate; everything below depends on it.

→ [How Scope prices the hard assets](./scope.md)

---

## 2. Stand up the market under your identity — Permissioned Markets

Once the fund can be priced, it becomes collateral in a lending [market](./markets.md) that carries your institution's name and your authorization rules. A market on Kamino is a self-contained, isolated venue; risk in one never touches another. Standing one up is a configuration exercise across roughly 50 parameters — borrow and deposit caps, daily flow limits, LTV and liquidation thresholds, the full interest-rate curve, liquidation economics, the oracle config and its guards, term, and access rules — with no new code.

The market runs as a [permissioned venue](./permissioned-markets.md): every wallet that supplies, borrows, or liquidates is one your team has named, screened, and approved. The same engine that runs Kamino's open markets — the same liquidation logic, the same audited code — operates as your gated venue once permissioning is on. Identity verification happens off-chain through your own KYC or KYB provider; the chain holds only the cleared-wallet list. You gate **deposit collateral**, **supply liquidity**, **borrow**, and **liquidate** independently, per wallet, and the gate is reversible in a single step with no fork and no disruption to live positions. **Withdraw and repay always stay open**, so an approved client can always exit and repay; capital is screened on the way in.

For sensitive positions, liquidation is restricted to whitelisted liquidators your team has vetted, so only approved parties can act when a position breaches. The result is a venue your underwriters, your auditors, and your compliance team can each sign off on, because every participant in it is one your institution authorized.

→ [Compliant credit markets, gated to exactly who you allow](./permissioned-markets.md) · [The configurable lending engine](./markets.md)

---

## 3. Issue your own branded stablecoin — the borrow liquidity

The market needs a borrow currency, and in this loop that currency is **your own branded stablecoin**, issued through **Coinbase's stablecoin-as-a-service**. Your stablecoin is the unit of account your clients supply, borrow, hold, and redeem. Your clients see your token, in your interface, carrying your brand; the credit market underneath it is Kamino's.

Issuing the borrow currency yourself is what closes the loop economically. When the borrow asset is a third-party stablecoin, the interest paid on it earns for whoever issues and distributes that token elsewhere. When it is your stablecoin, supplied by your clients into your market, the interest the fund holders pay flows to your clients as yield on the token your institution issued. The currency, the credit demand, and the yield all sit inside one franchise.

The same packaging is available through the [Yield API](./institutional-yield-api.md), where your branded stablecoin is the unit of account and balances flow into a tailored Meta-Vault structure that earns — the embeddable form of running your own stablecoin yield product. In this use case, that yield is funded by the credit demand from your own fund holders.

→ [Run a yield product under your own brand and stablecoin](./institutional-yield-api.md)

---

## 4. The borrow side — fund holders lever against the fund

A client who holds your tokenized fund deposits it as collateral and borrows your stablecoin against it. The simplest version is a straight draw: liquidity against the fund without selling it, repayable at any time, priced by the market's utilization curve.

The version that drives the loop is leverage. [Multiply](./multiply.md) lets a holder loop the fund and the stablecoin debt in a single one-click position to take amplified exposure of up to ~10x, drawing on a correlated-asset risk group for high LTV and routing the loop through best execution. Each loop is incremental borrow demand for your stablecoin and incremental utilization on the supply side. The more your clients lever the fund, the more interest flows to the clients supplying the stablecoin — the borrow side feeding the yield side directly.

Where the fund sits in regulated custody, [Custodial Borrowing](./custodial-borrowing.md) extends the same credit against assets that stay at a qualified custodian. The collateral is governed by a tripartite account-control agreement among the borrower, the lending operation, and the custodian: the custodian holds the assets independently of both sides, the borrower keeps ownership, and the lender holds a contractual lien it cannot move during the term. Assets stay bankruptcy-remote. Positions are monitored continuously against a per-asset liquidation LTV, with an LTV notification and a top-up window before any position is frozen. A client who needs liquidity while keeping the fund in regulated custody can borrow your stablecoin against it without the asset ever leaving the custodian.

→ [One-click leverage](./multiply.md) · [Borrow against custodied collateral](./custodial-borrowing.md)

---

## 5. The yield side — stablecoin suppliers earn the loop's interest

The clients who supply your stablecoin into the market are the lenders, and the interest the fund holders pay is their yield. A supplier deposits your stablecoin and holds an auto-compounding share balance; as the market earns, the share value climbs, so interest reinvests continuously and the gain shows up in the balance the client already holds.

The supply APY is the loop's economics made plain: `supply APY ≈ borrow rate × utilization × (1 − protocol take rate)`. Walk a representative market. Say the fund holders are paying a 9% borrow rate on your stablecoin and the market runs at 80% utilization. Before the protocol take rate, that puts roughly **7.2%** in interest into the hands of the stablecoin suppliers — your clients with idle cash earning on the leverage demand from your clients holding the fund. The protocol take rate is the only outside claim on that flow; the rest stays between the two sides of your own market.

This is the property that distinguishes a closed loop from a yield product bolted onto someone else's liquidity: the suppliers' return is generated by the borrowers in the same venue, both of them your clients, both of them transacting in your stablecoin. The cash side earns, the fund side levers, and the spread is internal to your franchise.

For idle balances that should earn the moment they arrive, the supply side packages as the [Yield API](./institutional-yield-api.md), so a client's stablecoin starts accruing as soon as it lands, with a configurable per-client cap and the transparency feed wired in.

→ [Run a yield product under your own brand and stablecoin](./institutional-yield-api.md)

---

## 6. Liquidity to enter, exit, and liquidate — RWA Liquidity

A money market needs holders to be able to move into and out of the fund, and it needs liquidation to clear cleanly when a position breaches. [RWA Liquidity](./rwa-liquidity.md) gives the tokenized fund a tradable pool from the day it lists, priced off its Scope feed. Quotes are derived from the feed at a controlled spread, so a single pool prices the fund accurately from the first trade. Your institution seeds it and it is live; pricing comes from the oracle, and a resident market maker is optional. RWA pairs already make up a large share of the liquidity on Kamino, with live pools for PRIME, syrupUSDC (Maple), tokenized gold (XAUt0), and USDe (Ethena).

The same pool gives liquidation a venue. When a fund holder's position crosses its liquidation threshold, it is unwound at the [Scope](./scope.md) oracle price by one of your whitelisted liquidators, against the pool's oracle-anchored pricing, holding the borrower clear of a forced sale into thin secondary liquidity.

→ [Oracle-priced liquidity for tokenized assets](./rwa-liquidity.md)

---

## How it runs end to end

Read the loop as a single sequence:

1. **Price.** A guarded [Scope](./scope.md) feed values your tokenized fund safely enough to underwrite credit against it.
2. **List.** The fund becomes collateral in a [permissioned market](./permissioned-markets.md) carrying your identity and authorization rules, gated to wallets your team approved.
3. **Fund the borrow side.** Your clients supply your [branded stablecoin](./institutional-yield-api.md), issued via Coinbase's stablecoin-as-a-service, as the market's borrow liquidity.
4. **Lever the fund.** Fund holders borrow your stablecoin against the fund and loop it with [Multiply](./multiply.md) for amplified exposure, or borrow against custodied holdings through [Custodial Borrowing](./custodial-borrowing.md).
5. **Pay the yield.** The interest the loopers pay flows to the stablecoin suppliers as yield, closing the loop inside your own market.
6. **Stay liquid.** [RWA Liquidity](./rwa-liquidity.md) gives holders a way in and out of the fund and gives liquidation a clean venue, both priced off the same feed.

Every component is a setting on infrastructure that is already live, priced, secured, and operated by Kamino.

---

## The infrastructure beneath the loop

The loop runs on Kamino's in-house oracle ([Scope](./scope.md)), the tiered liquidity logic of the [vault engine](./vault-engine.md), the [liquidation engine](./liquidation-engine.md) that winds down breached positions, and a white-glove integration, with operational support and defined SLAs on monitoring, liquidation, and redemption.

→ [Security & transparency](./security.md)

---

## The proof beneath the loop

Both sides of the loop ride the same safety stack, and every claim is verifiable on-chain.

- **Scale.** $2.5B AUM, $21B+ in loans originated, and $120M+ in interest generated, with $0 bad debt across more than three years in production.
- **Liquidations.** The [liquidation engine](./liquidation-engine.md) has cleared $120M+ across 100,000+ liquidations with **$0 bad debt**, using auction and soft/auto-deleverage liquidations and oracle-layer scam-wick protection that rejects prices outside a band of the last close.
- **Pricing.** [Scope](./scope.md) has priced $19.33B with zero oracle exploits, every feed watchable live at oracles.kamino.fi.
- **Security.** 20 external audits and 4 formal verifications across three years in production without a security incident, all reports public, a $1.5M bug bounty, and every multisig and oracle feed watchable live at multisig.kamino.fi and oracles.kamino.fi.

PRIME — the tokenized private-credit market built on Kamino with $1B+ in deposits — is the worked example of a fund priced, listed in a permissioned venue, made liquid, and scaled as borrower demand followed. The same pattern runs for Maple's syrupUSDC, OnRe's ONyc, and tokenized equities through xStocks.

→ [Read the customer stories](./customers.md) · [Security](./security.md)

---

## Who this is for

- **[Institutions](./institutions.md)** — run a closed-loop credit and yield market for your own clients, under your own brand.
- **[Institutions — wealth & asset managers](./institutions-wealth-asset-managers.md)** — give clients who hold your funds a way to lever them and clients with idle cash a trusted yield, both inside one branded market.
- **[Asset issuers](./asset-issuers.md)** — make your tokenized fund the collateral at the center of a market your institution operates end to end.

---

## Get started

Tell us the fund, the stablecoin you want to run, and who your clients are. Pricing, the permissioned market, the stablecoin issuance, the borrow and leverage paths, the supplier yield, and the liquidity are all settings on infrastructure that is already live.

**[Contact sales →](./contact-sales.md)**  ·  [Launch App →](https://kamino.com/home)
