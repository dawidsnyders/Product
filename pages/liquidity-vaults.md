# Liquidity Vaults

> **Hero**
> ## Concentrated liquidity, managed end to end.
> Deposit a single token. Kamino runs the position on Orca and Raydium — sets the range, harvests the fees, compounds them back in, and re-centers as the market moves. You hold one yield-bearing vault token, and the liquidity works around the clock on the rails Kamino has run on Solana since 2022.
>
> **[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**

---

## The liquidity engine Kamino has run since 2022

Liquidity Vaults were Kamino's first product, shipped in August 2022, and they have been a primary venue for concentrated liquidity on Solana ever since. The mechanics that drew the first deposits are the same ones running today: a depositor puts in capital, receives a vault token that tracks their share, and a managed strategy keeps that capital concentrated where trades actually happen.

Concentrated liquidity is what makes a position productive. A traditional constant-product pool spreads capital across every price from zero to infinity, so a $10M pool might have only $200K earning fees at any moment. A concentrated position placed around the current price can deliver the depth of a $10M+ traditional position with a fraction of the capital. Concentration carries a cost: a tight range earns more fees while the price stays inside it and has to be re-centered more often, while a wide range holds longer and leaves more capital sitting idle. Kamino's vaults run that calculus for you — picking the range, watching the price against it, and re-centering on schedule so the capital stays in the band where fees accrue.

---

## What the vault does for you

**Single-token deposit, correct ratio handled.** Provide either side of a pair and the vault swaps the portion needed to reach the position's target ratio before deploying, routing that swap through [Kamino's execution stack](./routing.md) for best on-chain price. Withdrawals come back in the token you choose. Swap costs are shown before you confirm.

**Auto-compounding returns.** Trading fees and reward tokens are reinvested back into the position. Each compound increases the underlying assets backing every vault token, so the vault token's exchange rate appreciates over time. The vault harvests and reinvests on its own schedule, and every reward token it collects goes straight back into the position.

**Automated re-centering.** When the market price moves out of the position's range, the strategy closes the current position, withdraws the liquidity, and opens a new one centered on the current price. The strategy runs this on its own schedule, returning the capital to the band where fees accrue while the depositor holds a single token and watches the exchange rate climb.

**Yield-bearing collateral.** The vault token is a productive asset in its own right. Supply it as collateral in [Kamino's lending markets](./markets.md) and the same position becomes the base for leveraged liquidity provision and delta-neutral strategies: borrow against the LP position to amplify it in [Multiply](./multiply.md), or hedge the directional exposure while keeping the fee income. One token, earning trading fees and serving as credit collateral at the same time.

---

## Strategies tuned to the pair

A vault's range logic is matched to how its pair actually trades. A stable or pegged pair gets a tight range hugging par, with scheduled resets that step the range as the peg drifts — wide enough to absorb normal noise around the peg, narrow enough that nearly all the capital earns. A volatile pair gets a range that tracks spot, re-centering on a price-move trigger so the band follows the market as it runs. Each strategy is tuned to the combination of range width, fee capture, and rebalance frequency that produces the best net return for that specific pool.

This is what keeps RWA and pegged-asset liquidity deep on-chain. For an asset whose value accrues over time, the vault steps its liquidity range up to follow the redemption rate as it compounds. The [PRIME](./rwa-liquidity.md) credit token is a live example: as its redemption value climbs, the position is re-centered to track it, so traders entering and exiting always meet deep, fairly-priced liquidity around the current value. For asset issuers, this is the liquidity layer that pairs with [oracle-priced RWA liquidity](./rwa-liquidity.md) and [solver-filled RFQ](./rfq.md) to give a newly listed token a working market from day one.

---

## Safety hardening

The risk a managed CLMM vault has to defend against is price manipulation around the moment it deploys or re-centers. Because deploying capital and creating a new position happen as discrete steps, an attacker who could push the pool price, trigger an investment, and reverse the move would profit at depositors' expense — particularly in vaults where the underlying pool is also the price reference.

Kamino's vaults close that vector at the protocol layer:

- **Oracle-bounded deployment.** The vault checks the pool price against an independent oracle before it invests, and refuses to deploy when the two diverge beyond a configured limit. Manipulating the pool away from the true price stops the investment from happening.
- **Pool-versus-TWAP checks.** Each pool's spot price is validated against its own time-weighted average, so a single-block spike can't masquerade as a real move and pull liquidity into a manipulated range.
- **Dynamic deviation limits.** Allowed deviation is tuned per strategy to the pair's real volatility. The narrow, pegged pairs that hold most of the TVL carry the tightest limits, and on those pools the cost of moving the price far enough to matter already exceeds what an attacker could extract.

These properties sit on top of [Scope's pricing guards](./scope.md) — staleness limits, multi-source divergence caps, and scam-wick protection — and every Liquidity Vault carries Kamino's [security posture](./security.md): 20 independent security audits and 4 formal verifications across the stack, with mathematical proof covering the core lending and vault code, continuous fuzzing, three years in production with zero security incidents, and a $1.5M bug bounty run through Immunefi.

---

## Economics

Access to a vault is free, and the strategy's operating cost is taken out of yield before it reaches you. Trading fees and rewards compound into the position before the vault token's exchange rate moves, so the rate you see is already net of strategy operation. Swap costs on single-token deposits and withdrawals, and any slippage on a re-center, are borne by the position and shown before you confirm.

Kamino's revenue comes from a protocol take rate on the underlying activity, the same way it earns across the platform. Curators who run their own pools layer their own economics on top through the [Curation Suite](./curation.md): a configurable performance fee charged on the yield the vault generates and a management fee charged on assets under management, with a typical institutional setup running 15% performance and 2% AUM. Both default to zero, so a venue can run at cost when the mandate calls for it. Curator fees go to the curator; the protocol take rate stays with Kamino.

---

## Where Liquidity Vaults fit

Liquidity Vaults are one of the four products in Kamino's [Liquidity](./liquidity.md) line, alongside [Kamino Swap](./kamino-swap.md) for best-execution trading, [RFQ](./rfq.md) for solver-filled quotes, and [RWA Liquidity](./rwa-liquidity.md) for oracle-priced tokenized-asset pools. The vault tokens they issue plug into [Markets](./markets.md) as collateral and into [Multiply](./multiply.md) for leveraged LP positions. Curators and asset issuers stand up and tune their own liquidity pools through [Curation](./curation.md).

- **Asset issuers** — give your token deep, managed liquidity from listing day. See [RWA Liquidity](./rwa-liquidity.md) and the [asset-issuer solution](./asset-issuers.md).
- **Curators and managers** — run liquidity strategies on audited rails with your own parameters and fees. See [Curation](./curation.md) and [Curators & managers](./curators-managers.md).
- **Individuals** — provide liquidity through a managed strategy that picks the range and re-centers for you, directly in the app. See [the Kamino App](./kamino-app.md).

---

> **Put managed liquidity to work**
> Talk to our team about deploying or curating concentrated-liquidity strategies on Kamino's rails.
>
> **[Contact sales](./contact-sales.md)** · **[Launch App](https://kamino.com/home)**
