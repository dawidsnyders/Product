# For asset issuers

> **Solutions → By who you are → Asset issuers**
> Audience page. Frames Kamino for issuers of RWAs, tokenized equities, fund tokens, and stablecoins. Composes: [Markets](./markets.md) · [Scope](./scope.md) · [RWA Liquidity](./rwa-liquidity.md) · [RFQ](./rfq.md) · [Permissioning](./permissioning.md) · [Multiply](./multiply.md) · [Curation](./curation.md) · [Yield API](./institutional-yield-api.md) · [Cross-chain](./cross-chain.md) · [Routing](./routing.md). Cross-links the [credit-against-tokenized-assets](./uc-credit-against-tokenized-assets.md) and [own-stablecoin-market](./uc-own-stablecoin-market.md) use-cases. CTA: Contact sales (primary) · Launch App (secondary).

---

## Hero

# Make your token a working financial asset

You issued the token. Kamino gives it a price, a credit market, two-sided liquidity, and a compliant distribution path — the full set of capabilities that turn a tokenized claim into collateral institutions can borrow against and traders can move in and out of. It runs on infrastructure carrying $2.5B in assets under management, $21B+ in loans originated, and $120M+ in interest generated for lenders, with $0 bad debt across three-plus years in production.

PRIME (Figure / Hastra) took this exact path and now anchors $1B+ in RWA deposits on Kamino. xStocks, Maple's syrupUSDC, and OnRe's ONyc trade and lever on the same rails.

**[Contact sales →](./contact-sales.md)** · [Launch App](https://kamino.com/home)

---

## The issuer's real problem

An asset earns its value from the market around it: a safe, continuous price; a venue where it counts as collateral; liquidity to enter and exit; and access controls that satisfy your regulatory perimeter. Each of those is its own integration — an oracle provider, a lending protocol, market makers, a compliance vendor — and standing all four up means four vendors, four contracts, four audits, and four points where the chain can break.

Kamino runs all four as one system. The same engine that prices your asset feeds the market that lends against it, the liquidity venue that trades it, and the leverage product that drives demand for it. Onboarding a new asset is a configuration exercise across capabilities that are already live and audited.

---

## Step 1 — We can price your asset

Pricing is the gate. Whatever [Scope](./scope.md), Kamino's in-house oracle, can value safely becomes something the rest of the platform can lend against, trade, and lever. Scope composes more than 40 price types into a single source of truth, and it carries purpose-built logic for the assets that break generic crypto oracles:

- **NAV and fund-token assets** honor redemption pricing and pause signals, so a fund token holds its last clean mark through a NAV pause and resumes only when the published value returns.
- **Tokenized treasuries and discounted instruments** price with a discount-to-maturity type that climbs smoothly toward par on the known redemption date — the way a zero-coupon bond or a T-bill actually accrues.
- **Tokenized equities** respect market hours, halts, and corporate-action windows, with pricing suspended through the windows where a naive feed would mark a stale or wrong price.
- **Pegged assets** clamp to a configured ceiling and floor, so a stablecoin or pegged claim can't be marked above or below its band.

Every feed sits behind a guard stack: best-of-several-sources selection with a hard divergence limit, staleness limits, reference-price validation that rejects any update more than a configured tolerance from a separate anchor, and a proof-of-reserves guard that freezes an asset's usable price if its supply spikes against its own running average — a direct defense against an unbacked mint. You can watch every feed for your asset live at [oracles.kamino.fi](https://oracles.kamino.fi).

Scope carries 8 of Kamino's 20 external audits — the heaviest audit concentration of any single component — and has priced $19.33B of value with zero oracle exploits. The result for you: oracle risk becomes bounded, governed risk, and your asset earns a price institutions are willing to underwrite. This is the moat under everything that follows.

→ [How Scope prices hard assets](./scope.md)

---

## Step 2 — Your asset gets its own market

Once Scope prices it, your token becomes an asset in a [Market](./markets.md) — and that is the moment it gains collateral status. A holder can borrow against it; a lender can earn the borrowing interest; a looper can build a leveraged position in it.

A market on Kamino is a configuration over live infrastructure. Each asset is tuned across roughly 50 parameters — borrow and deposit caps, daily flow limits, LTV and liquidation thresholds, the full interest-rate curve, liquidation economics, oracle source and guards, term, and access rules. At the market level you set its name and identity, the correlated-asset risk groups that let tightly-correlated pairs run at high LTV, and any permissioning. You can launch a market **hidden** — fully live on-chain, invisible in the app — for a private preview or a staged rollout before you announce.

This is the path PRIME traveled to $1B+ in RWA deposits, and the path Maple, OnRe, Ethena, and others run on today. Tell us the asset, the risk envelope, the access rules, and the identity you want, and the configuration produces a venue tuned to it.

The economics of running your asset's market sit with you. As the market's operator you set and capture the curator fee on it; Kamino earns the protocol take rate on the underlying lending. Listing itself is a configuration, with the go-live review as the only gate to consumer-app distribution — the fuller fee picture is in Step 6.

→ [The Markets engine](./markets.md) · [Run the market yourself with Curation](./curation.md)

---

## Step 3 — Liquidity from day one

A listed asset needs a way for holders to move in and out. Kamino supplies two complementary venues, both of which quote your asset off infrastructure Kamino already runs, so liquidity is live the moment the market opens — the issuer carries no obligation to recruit or subsidize a standing market maker.

**[RWA Liquidity](./rwa-liquidity.md)** is an oracle-priced AMM where the Scope price *is* the trading price. Because the curve quotes off the guarded oracle, a tokenized asset trades without anyone posting continuous two-sided depth. You control the curve shape, the feeds, the spreads, and the pool status per asset. External aggregators already route into these pools — live examples include PRIME, syrupUSDC, gold (XAUt0), and USDe.

**[RFQ](./rfq.md)** is Kamino's on-chain request-for-quote auction. Solvers bid sub-second to fill an order, co-signed, with no end-user signature in the loop. This is how holders enter and exit a less-liquid asset on demand, and it is how your market makers plug in — they integrate as solvers and quote into your asset directly. RFQ also drives price discovery for fixed-rate credit against the asset.

Together they mean a holder can transact on demand, and a liquidator can source a fill from the oracle-priced pool or through RFQ — the property that makes the asset safe to lend against in the first place.

→ [RWA Liquidity](./rwa-liquidity.md) · [RFQ for issuers and market makers](./rfq.md)

---

## Step 4 — Compliant by configuration

Most regulated and institutional assets can only be held and traded by screened parties. [Permissioning](./permissioning.md) is Kamino's access-control layer, and it turns an open venue into a selectively-gated one with a single approval check.

- **Gate the actions that matter.** Deposit, borrow, and liquidate can each require approval; withdraw and repay always stay open, so a screened holder can never be trapped. Capital is screened on the way in, and exits remain unconditional.
- **Off-chain KYC, on-chain enforcement.** Your KYC or accredited-investor provider verifies the user; the wallet is whitelisted through the API; the on-chain layer stays identity-agnostic. You can tie KYC completion to a wallet and automate whitelisting in seconds.
- **Permissioned markets and permissioned assets.** Gate a whole market to an allowlist, or run a regulated asset deposit-gated while other assets in the same market stay open.
- **Whitelisted liquidators.** Restrict who may liquidate sensitive positions to a set of approved parties.
- **Additive and reversible.** Permissioning switches on and off instantly as a layer over the existing market, so the underlying reserves, rates, and positions keep running untouched while access rules change.

This is what lets a regulated wealth manager, fund, or treasury actually deploy against your asset. Ethena's USDe market is a live demonstration of the full stack — a 1:1-pegged oracle with a 1% halt band, permissioned lending, whitelisted liquidators, and autocompounding collateral.

→ [The permissioning model](./permissioning.md)

---

## Step 5 — Distribution that drives demand

Listing your asset is the start; demand is the goal. [Multiply](./multiply.md) is one-click leverage looping that gives holders a reason to acquire and hold more of your asset — and every leveraged position is net new borrowing demand in your market.

A holder loops collateral and debt into a single position using a correlated-asset risk group for high LTV, with leverage reaching up to ~10x depending on the asset and its risk parameters. Live strategy families show the range:

- **Tokenized equities (xStocks)** like APPLx and SPYx lever directional exposure against USDC debt.
- **Yield-bearing RWAs and stablecoins** — PRIME, syrupUSDC, ONyc — loop against stablecoin debt to compound the spread between the asset's yield and the borrow rate.
- **LSTs** lever staking yield against SOL debt.

Fixed-rate Multiply lets a looper lock the cost of the position for the term, so the leveraged demand holds through rate moves: a looper who has fixed their borrow cost has no reason to unwind when floating rates rise. The effect on your asset is a structural bid: leverage seekers buy and hold it to run the strategy.

→ [Multiply](./multiply.md)

---

## Step 6 — Run the market and keep the economics

Steps 1 through 5 are the linear path from issuance to leveraged distribution. The last decision is who operates the market once it is live.

You can let a professional curator run your asset's market, or run it yourself through the [Curation Suite](./curation.md). Curation is the self-serve platform where you set the parameters, allocations, fees, access rules, and insurance for your own market or vault, optionally white-labeled on your own front-end.

To appear on Kamino's consumer app and earn its distribution, a market turns on the safety controls — whitelisted reserves, insurance pool, multisig governance — and passes a go-live review. The fee economics favor the operator: as curator you set and capture the performance and AUM fees on your market (a typical institutional setup is 15% performance and 2% AUM), and Kamino's revenue comes from the protocol take rate on the underlying lending. You keep control of your asset's terms and capture the operating economics on every dollar it attracts.

→ [Curation Suite](./curation.md)

---

## The marquee outcome — close the loop on your own stablecoin

The six steps stand up a market for your asset. The largest issuers go one step further and run the whole thing under their own branded stablecoin, issued through Coinbase's stablecoin-as-a-service, so a single loop captures both the borrowing demand and the yield it generates.

Here is the loop, for an issuer who has tokenized a fund:

1. **Tokenize the fund** and price it through Scope, exactly as Step 1 describes.
2. **Stand up a white-glove, permissioned market** for it — carrying your identity and your authorization rules, gated to the wallets your KYC provider has screened (Steps 2 and 4).
3. **Make your own branded stablecoin the borrow liquidity** in that market. Your clients who hold the fund token lever it against your stablecoin; your clients who want yield supply that stablecoin and earn it.
4. **Pay the stablecoin yield back to your clients.** The interest the loopers pay on their leveraged positions is the yield the stablecoin suppliers collect. The loop closes on your own balance sheet.

Both sides of the trade are your clients, and both the credit spread and the stablecoin yield stay inside your franchise. Your stablecoin becomes the unit of account for the market, and the [Yield API](./institutional-yield-api.md) packages the supply side as tailored Meta-Vaults your clients' balances flow into and earn from. You own the asset, the market, the stablecoin, and the client relationship on every side of the loop.

→ [Launch your own on-chain money market](./uc-own-stablecoin-market.md) · [Yield API](./institutional-yield-api.md)

---

## If your asset lives on Ethereum

This capability runs in parallel with every step above. If your asset is Ethereum-native — tokenized gold, Ethena's USDe, an ETH-settled fund token — [Cross-chain](./cross-chain.md) makes it safe as Solana collateral. The bridge liquidates and rebalances ETH-native assets on the deep Ethereum venues where their real liquidity lives, so a position collateralized by an off-Solana asset can still be unwound safely. Your asset reaches Solana's borrowers and loopers while its liquidations keep settling against the deep Ethereum books where its real liquidity sits. [Routing](./routing.md) picks the best execution path for every fill so the unwind lands at the tightest price available.

→ [The Ethereum–Solana bridge](./cross-chain.md) · [Routing & best execution](./routing.md)

---

## Proof

| Issuer | Asset | What runs on Kamino |
|---|---|---|
| **PRIME** (Figure / Hastra) | Private-credit RWA | A dedicated market that anchors $1B+ in RWA deposits; oracle-priced liquidity; Multiply |
| **xStocks** | Tokenized equities | Equity-aware Scope pricing through market hours and halts; leveraged exposure via Multiply |
| **Maple** | syrupUSDC | A lending market, an oracle-priced RWA Liquidity pool, and looping demand |
| **OnRe** | ONyc | Yield-bearing collateral with Multiply looping against stablecoin debt |
| **Ethena** | USDe | A fully-tailored permissioned market: 1% halt-band oracle, whitelisted liquidators, autocompounding collateral |

RWA deposits on Kamino have crossed **$1B**, led by PRIME. Scope has priced **$19.33B+** of value with **zero oracle exploits**, and the liquidation engine has cleared **$120M+ across 100,000+ liquidations with $0 bad debt** — the track record that makes institutions willing to lend against a newly-listed asset.

→ [Customer stories](./customers.md) · [Security and transparency](./security.md)

---

## The full path, in one place

Offering and accessing credit against a tokenized asset is the job this page serves end-to-end. The [Offer credit against tokenized assets](./uc-credit-against-tokenized-assets.md) use-case walks the same sequence — price it, list it, fund it, trade it, gate it, lever it — from both the issuer's and the credit provider's side, with a worked case study. To run that sequence under your own branded stablecoin and keep both the credit spread and the yield inside your franchise, [Launch your own on-chain money market](./uc-own-stablecoin-market.md) walks the closed loop in full.

Issuers also overlap with two other doors worth knowing: [Institutions](./institutions.md) are the capital that lends against and allocates into your asset, and [Curators & managers](./curators-managers.md) are the professionals who can operate its market for you.

---

## Bring us your asset

Tell us what you've issued and what you want it to do. Pricing, a tailored market, liquidity, compliant access, and leveraged distribution are configurations on infrastructure that is already live and audited — the onboarding is a conversation about your asset's risk envelope and access rules, and we configure that live infrastructure to fit them.

**[Contact sales →](./contact-sales.md)** · [Launch App](https://kamino.com/home)
