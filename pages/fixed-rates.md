# Fixed Rates

**Borrow at a rate that holds to maturity.** Lock a known cost of capital for a known term — 1, 3, 6, or 12 months. As rates and terms fill across the grid, they form an on-chain yield curve: live price discovery for duration on Solana.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)

---

## Rate certainty as a primitive

A basis trade penciled at a 5% cost of capital stops working when funding drifts to 9% mid-trade. A fund running that trade, a treasury financing a position, a desk borrowing against tokenized collateral — each prices a strategy whose economics depend on the cost of capital staying where it was when the trade went on. Fixed Rates pins that number for the life of the loan. You borrow at a rate set the day you draw, and it holds through whatever the variable market does over the term. A 5% three-month loan stays 5% for three months, so the carry you penciled is the carry you keep.

The mechanism is a grid. Term durations run along one axis — 1, 3, 6, and 12 months; discrete rate levels run along the other, each tenor priced in fixed steps so the cells line up into a readable curve. Each cell is its own reserve: a distinct, borrowable fixed-rate product with its own supplied liquidity. You choose the duration that matches your strategy and the rate ceiling you'll accept, and the protocol fills you at the best available rate up to that ceiling.

Curators and governance decide which cells exist and how deep each one is, so liquidity concentrates where demand is real. The populated cells, read together, are the curve.

---

## The emerging on-chain yield curve

When the same asset has fixed-rate liquidity at one month, three months, and six months, the rates across those terms describe a term structure. The spread between the one-month and six-month rate for the same token is the term premium — the extra yield lenders require to commit capital for longer, set by on-chain supply and demand, where every quote is a live order other participants have posted against.

That curve does real work. It gives borrowers a transparent menu for pricing duration. It gives lenders a market signal for where committed capital is scarce. And it gives the tokenized economy a visible, tradeable price for time across the term structure — the reference layer fixed-income desks price against, now on Solana.

[RFQ](./rfq.md) extends this — solver-filled quotes provide price discovery and entry and exit around fixed-rate positions, so a desk can quote against the curve and trade into or out of a fixed-rate position on demand.

---

## How a fixed-rate loan works

**You place a borrow order.** A fixed-rate borrow order specifies four things: the debt token you want, a rate ceiling, a term, and an amount. It posts on-chain and waits.

**It fills against committed liquidity.** When matching liquidity exists, the order executes atomically and the borrowed funds arrive in your wallet. Large orders fill incrementally — a $300,000 request can fill in successive chunks as supply arrives — and interest accrues only on the filled portion. The unfilled remainder sits as an open order at no charge until it fills or you cancel it. Orders at a given rate level fill as matching supply arrives, on equal footing regardless of size or submission time, so a $10k order and a $10M order have the same standing at the level.

**The rate locks to maturity.** Once matched, your rate is fixed for the entire term. The variable market can move underneath you and your cost of capital stays put.

**At maturity, the protocol rolls you forward.** You set a rollover preference when you originate the loan, and at maturity the protocol applies it in order of precedence:

1. **Same reserve** — extends at the existing rate when liquidity is available and no withdrawal queue is blocking it.
2. **Better rate** — migrates you into a lower-rate fixed reserve when one exists, falling back to the same reserve.
3. **Variable fallback** — converts the position to a variable-rate reserve when fixed liquidity is unavailable.

When the configured path can't be filled, a short grace period precedes liquidation eligibility, so the wind-down stays orderly and predictable.

**Early repayment is clean.** Exit during your first term carries an early-cancellation charge, bounded and disclosed up front so your worst-case cost is set the moment you borrow. Once you've rolled into a new term, that charge falls away: you can exit at any time and pay only the interest accrued to that point.

---

## The supply side: conditional liquidity

Fixed-rate credit works only when there's capital ready to fund it the moment a borrower draws, and the hard problem is funding large term loans while keeping that capital productive against demand that may not arrive. Kamino solves it with **conditional liquidity**, supplied through the [vault engine](./vault-engine.md).

A curator allocating to a fixed-rate reserve can choose **conditional allocation**: the capital stays deployed in a floating-rate reserve, earning yield, until a matching fixed-rate borrow order appears. At that moment the capital moves into the fixed-rate reserve and the loan executes — in a single atomic transaction. The committed liquidity earns yield the entire time: the floating rate while it waits, the locked fixed rate once it's drawn.

For lenders, the economics are direct. A fixed-rate reserve runs at 100% utilization for the life of the loan, so every supplied dollar earns the full borrow rate for the locked term (net of the protocol take rate). For borrowers, it means a $50 million term loan can be funded just-in-time from capital that stayed productive the whole time it stood ready.

This is what lets the supply side quote a fixed-rate curve at institutional size. The same [vault engine](./vault-engine.md) and the [Lending Vaults](./lending-vaults.md) that fund variable borrowing supply the fixed-rate curve, so a curator can serve both kinds of demand from one book.

---

## Proof: institutional desks borrowing fixed

**FalconX** was the first institutional desk to borrow on Kamino at fixed rates — a global digital-asset prime brokerage drawing on-chain fixed-term credit at desk scale. For a prime broker, fixed-term funding is structural: it finances a book whose carry has to be predictable, and it backs client-facing obligations that themselves carry fixed costs and dates. A rate that holds to maturity lets that book be priced once and held, and a funding source deep enough to draw against without moving the market lets it scale.

The same structure serves a fund locking borrowing costs for a multi-month trade, a treasury financing against holdings with a known carry, and an issuer's credit provider pricing duration on a tokenized asset. Each one gets a borrow order, a rate fixed for the term, and an orderly rollover when it ends.

[See how funds and trading firms use Kamino →](./institutions-funds-trading-firms.md)

---

## Built on the lending engine

Every fixed-rate loan happens inside a [market](./markets.md). Fixed term is one configuration of a standard Kamino market, so a fixed-rate venue inherits everything a Kamino market provides — open or [KYC-gated](./permissioning.md) access, on-chain or custodied collateral, high-LTV correlated-asset grouping — and runs on the same engine as every other market on the protocol.

Pricing comes from [Scope](./scope.md), Kamino's oracle layer. Every Kamino position, fixed-rate ones included, is valued and liquidated under the same divergence, staleness, and price-band guards that reject a manipulated wick. The result is a fixed-rate loan priced on the hardened oracle the rest of the protocol runs on, with a clean maturity-liquidation path managed by the [liquidation engine](./liquidation-engine.md) — the engine behind Kamino's record of $120M+ liquidated across 100k+ events with $0 bad debt.

---

## Where fixed rates fit

- **[Credit hub](./credit.md)** — fixed rates alongside variable borrowing, custodial borrowing, permissioned markets, and Multiply.
- **[Multiply](./multiply.md)** — lock the cost of a leverage loop for its full term with fixed-rate Multiply.
- **[Markets](./markets.md)** — the configurable venue every fixed-rate loan runs in.
- **[Vault engine](./vault-engine.md)** — conditional liquidity, the supply side that funds the curve.
- **[RFQ](./rfq.md)** — solver-filled price discovery and liquidity around fixed-rate positions.
- **[BTC-backed credit](./uc-btc-backed-credit.md)** — borrow against BTC at a rate that holds to maturity.

---

## Economics

**What you pay as a borrower:** the fixed rate you lock on the grid, for the term you lock it, plus the bounded early-exit charge if you leave the first term ahead of maturity. The rate on the grid is the whole price — access to fixed rates is built into it, and your maximum cost is known before you borrow.

**How the economics work behind it:** Kamino earns a protocol take rate on the underlying lending. The curator supplying the reserve earns performance and management fees (a typical institutional configuration is 15% performance / 2% AUM), drawn from the supply-side yield that the borrow rate generates. Those fees sit on the lender's side of the ledger; the rate you lock is your only cost.

---

## Lock your rate

Institutional desks and treasuries: [contact sales](./contact-sales.md) to size fixed-rate credit against your collateral and access. Everyone else can borrow fixed today in the app.

[Contact sales](./contact-sales.md) · [Launch App](https://kamino.com/home)
