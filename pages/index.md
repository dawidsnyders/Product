# Kamino marketing site — page index

The complete map of the site. Top nav, every page grouped by section, with what each page is and where it links. The canonical IA is in [`../site-ia.md`](../site-ia.md); the build blueprint is [`_manifest.md`](_manifest.md); the canonical facts are [`_facts.md`](_facts.md); the institutional framing mandate is [`_framing-lens.md`](_framing-lens.md).

**Top navigation:** Products · Solutions · Developers · Security · Resources · Company · `[Launch App]` `[Contact sales]`

---

## Spine
- [Homepage](homepage.md) — what Kamino is: capital-markets infrastructure for the tokenized economy.
- [How Kamino works](how-kamino-works.md) — how the infrastructure fits together as one system.

## Products

### Credit (hub) — [credit.md](credit.md)
Borrow against anything, at fixed or floating rates.
- [Fixed Rates](fixed-rates.md) · [Custodial Borrowing](custodial-borrowing.md) · [Permissioned Markets](permissioned-markets.md) · [Multiply](multiply.md) · [Liquidation Engine](liquidation-engine.md)

### Liquidity (hub) — [liquidity.md](liquidity.md)
Best execution and on-chain liquidity.
- [Kamino Swap](kamino-swap.md) · [RFQ](rfq.md) · [RWA Liquidity](rwa-liquidity.md) · [Liquidity Vaults](liquidity-vaults.md)

### Yield (hub) — [yield.md](yield.md)
Curated and managed on-chain yield.
- [Lending Vaults](lending-vaults.md) · [Meta-Vaults](meta-vaults.md) · [Institutional Yield](institutional-yield.md) · [Yield API](institutional-yield-api.md) · [Permissioned Vaults](permissioned-vaults.md)

### Build on Kamino (platform line)
- [Curation](curation.md) — run your own market or vault (surfaced as Market Curation under Credit, Vault Curation under Yield) · [BuildKit](buildkit.md) · [Embedded Wallets](embedded-wallets.md) · [White-Label](white-label.md)

## Infrastructure (not in the menu; linked from hubs, Security, How-it-works, audiences)
- [Markets](markets.md) · [Scope](scope.md) (oracle / pricing) · [Permissioning](permissioning.md) · [Routing](routing.md) · [Vault Engine](vault-engine.md) · [Cross-chain](cross-chain.md)

## Solutions

### By who you are (audiences)
- [Institutions](institutions.md) — and the sub-segments: [Wealth & asset managers](institutions-wealth-asset-managers.md) · [Funds & trading firms](institutions-funds-trading-firms.md) · [Treasuries & corporates](institutions-treasuries-corporates.md)
- [Asset issuers](asset-issuers.md) · [Fintechs & apps](fintechs-apps.md) · [Curators & managers](curators-managers.md) · [Individuals](individuals.md)

### By what you want to do (use-cases)
- [Offer credit against tokenized assets](uc-credit-against-tokenized-assets.md) · [BTC-backed credit](uc-btc-backed-credit.md) · [Launch a managed fund](uc-launch-a-managed-fund.md) · [Embed yield in your app](uc-embed-yield.md) · [Launch your own on-chain money market](uc-own-stablecoin-market.md)

## Trust
- [Security](security.md) — audits, formal verification, oracle resilience, the liquidation record, custody & proof-of-reserves, opsec & multisig governance, the risk apparatus, the live dashboards.

## Delivery & developers
- [Kamino App](kamino-app.md) — the consumer product experience · [Developers](developers.md) — docs, API reference, SDKs, the embed build.

## Conversion & proof
- [Contact sales](contact-sales.md) — the institutional / white-glove entry · [Customers](customers.md) — the case-study hub.

## Company & resources
- [About](company-about.md) · [Careers](company-careers.md) · [Governance](company-governance.md) · [Blog](resources-blog.md) · [Research](resources-research.md) · [Brand & Press](resources-brand.md)

---

### The reuse graph (what lives in more than one place)
- **Markets, Scope, Permissioning, Routing, Vault Engine, Cross-chain** — infrastructure pages surfaced inside the hubs, Security, How-it-works, and the audience pages, each framed for that context.
- **Curation** — its own page, surfaced as Market Curation (Credit) and Vault Curation (Yield), and on the Curators, Asset-issuers, and Launch-a-managed-fund pages.
- **Yield API** — under Yield, surfaced on Fintechs and Wealth & asset managers, and in the Embed-yield use-case.
- **Multiply** — under Credit, referenced on Yield, Individuals, and the tokenized-asset & BTC use-cases.
- Every **use-case** links to the **audiences** it serves and back; every **audience** links to the use-cases that cut across it.
