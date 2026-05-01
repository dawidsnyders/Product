# Kamino Landing Rebuild — Page Handoff Specs Index

> Cross-cutting overview for downstream agents building the twelve individual pages that sit beneath the homepage in Kamino's 2026 landing rebuild.

## What this folder is

Each file in this folder is a **handoff brief** — not a final page spec. A downstream agent (copywriter + designer) will take a single file and produce the full page spec, copy, layout, and visual direction for one route. Your job as the downstream agent is to read the master spec first, then the brief for your page, then the research artifacts the brief points you to, then draft.

The authority order is:

1. **`/Users/dawid/Github/Product/landing page rebuild/landing-website.md`** — master site spec. Every locked decision, principle, and site-wide rule. Read this first, in full. Nothing here overrides it.
2. **This folder** — page-level briefs. Orientation, strategic framing, substantive material, required sections.
3. **Research artifacts** — listed per-brief. Consult depth as needed.

## What's locked site-wide (reinforced in every brief)

- **Hero copy:** *"Connecting global capital / to the new financial system"* — not a tagline; the organizing positioning.
- **Audience router label:** *"Powering every part of the onchain economy."* Four equal-weight boxes: Individuals · Institutions · Issuers · Fintechs.
- **Copy framing principles** (master spec §2). Fifteen non-negotiable rules. The ones that bite hardest across pages:
  - Never frame by negation. Describe what a thing IS.
  - Lead with institutional vocabulary: *capital, credit, liquidity, infrastructure, markets*.
  - "Onchain" qualifies; it does not position on its own line.
  - "DeFi" used sparingly and in context; default frame is "onchain finance."
  - Do not name Institutional Yield counterparties (lending operation, data provider, accounting firm, custodians). Only the regulator (Liechtenstein FMA) is nameable.
  - No forward-risk claims ("zero bad debt" as a forward commitment). Use point-in-time: *"zero security incidents to date," "three years in production."*
  - Partnership-focused partner copy — explain *how Kamino works with the partner*, not who the partner is.
  - No "V2" publicly. No KMNO exchange-listing mentions. American spelling.
- **Site behavior:** Coinbase pattern. First-time visitors land on marketing; returning users with cookies/wallets route straight to webapp. Every CTA must be aware of this.
- **Sitemap and nav:** Products (mega-menu, Retail/Enterprise/Platform) · Solutions (audience pages) · Resources · Company · [Launch App]. Retail products link *into* the webapp; Enterprise + Platform link to the marketing pages in this folder.
- **Contact routing:** Sales is `institutional@kamino-foundation.com` / `mark@kamino-foundation.com` / `cheryl@kamino-foundation.com`. Partnerships (issuer) to Mark. Integrations (fintech) to the team — exact address TBD in several cases.

## How to use a brief

Each brief follows the same eleven-section template. Read top to bottom before drafting.

- Section 1 (purpose) and 2 (audience) tell you who you're writing for and what the page is supposed to do in the funnel.
- Section 3 (strategic context) explains why the page exists in the 2026 rebrand. Don't skip it — the rebrand is a strategic move and the page has to carry that weight.
- Section 4 (starting context) is the densest. It is the substantive material — facts, stats, partners, quotes, competitive framing. If you don't know something that shows up here, the brief will cite where to find it. Consult those sources before inventing.
- Sections 5–9 specify register, required vs. suggested sections, copy principles that bite hardest on this page, linking behavior, and visual direction.
- Section 10 lists everything you should read to go deeper.
- Section 11 is where decisions are deferred back to you. Flag factual gaps to Dawid before inventing.

## Critical reading list before any drafting

Every downstream agent should read these regardless of which page they're assigned:

1. `/Users/dawid/Github/Product/landing page rebuild/landing-website.md` — master spec. All 1,470 lines.
2. `/Users/dawid/Github/Product/landing page rebuild/research/02-kamino-deep-comprehension.md` — strategic anatomy; product stack; brand voice with verbatim quotes; competitive landscape; open tensions.
3. `/Users/dawid/Github/Product/landing page rebuild/research/partners-04-synthesis.md` — per-partner factual material. Use when referencing a named partner on any page.

Additional per-page reading is specified in each brief's §10.

## Build order recommendation

The master spec recommends:

1. Individuals (warmer voice, simpler content)
2. Institutions, Issuers, Fintechs (audience pages, increasing complexity)
3. Institutional Yield (flagship product page — carries the rebrand)
4. Off-Chain Collateral, Fixed Rates, Vaults, RWA DEX (remaining Enterprise)
5. BuildKit, Institutional Yield API (Platform)
6. Oracles

Agents assigned later-order pages benefit from reading the earlier-order agents' outputs to preserve consistency (especially on product mechanics that appear across multiple pages — IY shows up on /institutions, /individuals, and /institutional-yield; Off-Chain Collateral on /institutions, /off-chain-collateral; Multiply on /individuals and /issuers).

## Cross-page consistency notes

- **Numbers must match.** $19B+ originated, $104M+ interest generated, $600M+ PRIME, zero security incidents to date, 20 audits, 4 formal verifications, $1.5M Immunefi bug bounty. If you state a different number on your page, flag it in §11.
- **Product name conventions.** "Kamino Institutional Yield" (proper noun) or "Institutional Yield" / "IY" in running text. "Off-Chain Collateral" (hyphenated, title-cased). "Fixed Rates" (plural). "Multiply" (capitalized, single word). "BuildKit" (no space). "Institutional Yield API" (spell out). "PRIME Market" not "Prime market." "kiUSDC" lowercase-"ki" uppercase-"USDC."
- **Solana Company (Nasdaq: HSDT)** is the canonical name of the pilot institutional borrower, co-managed by Pantera and Summer Capital. Not "Summer Capital's vehicle" or similar. It is upcoming, not executed — the borrow has not yet occurred as of April 2026.
- **IY target capacity is $25M at launch.** It is not yet scaled past that. Copy that implies current $500M+ capacity is wrong.

## Final note

If something in a brief seems wrong, or contradicts the master spec, or contradicts another brief — flag it. Do not paper over. The briefs were written progressively and cross-page tensions may have slipped through.

---

*End of index.*
