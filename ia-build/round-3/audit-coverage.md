# Round 3 Audit — Coverage & Graph Integrity

Adversarial coverage audit of the finalized site IA (`site-ia.md`) against the ground-truth offering inventory (`offering-map/offering-map.md`) and the infrastructure rails (`offering-map/rails-deep-dive.md`). Scope: completeness, orphans, dead-ends, duplication discipline, audience coverage, use-case coverage, infra surfacing, naming consistency.

Verdict in one line: the IA is structurally sound, but it ships with **one fully orphaned offering that is load-bearing for the entire RWA thesis (the cross-chain bridge)**, two infra rails that lack a canonical-home row in the link graph, a missing risk/custody surface that institutional diligence requires, and no wiring between the two Solutions axes. Fix the P0s and P1s before locking.

Line references are to `site-ia.md` unless noted.

---

## P0 — Breaks the IA

### P0-1 · Cross-chain Ethereum–Solana bridge is fully orphaned — no home anywhere
- **Location:** Offering-map L200–201 ("Cross-chain") and Notes L257 name the Ethereum–Solana bridge explicitly: *"what makes off-Solana RWAs (tokenized gold, Ethena USDe) safe as collateral on Solana."* It appears **zero times** in `site-ia.md` — not as infra, not a hub section, not on Asset issuers, not on Scope, not on the tokenized-asset use-case.
- **Why it's P0:** The whole "capital-markets infrastructure for the tokenized economy" thesis leans on RWA collateral, and two of the showcase RWA assets (tokenized gold XAUt0, Ethena USDe) are *off-Solana assets that only work as collateral because the bridge liquidates/rebalances them on Ethereum venues*. RWA Liquidity, the Ethena market, and the Asset-issuers story all silently depend on a mechanism the IA never houses. A diligence buyer asking "how is my Ethereum-native tokenized gold safe to liquidate on Solana?" hits a wall.
- **Fix:** Give it a home. Cleanest: a section on the **Scope** infra page (or **Markets**) — "Cross-chain collateral: off-Solana assets liquidated/rebalanced on their native venue" — and surface it on the **Asset issuers** page and the **Offer-credit-against-tokenized-assets** use-case ("list an Ethereum-native asset as Solana collateral"). Add it to Part 7's infra inventory and add a reuse-graph row in Part 8 with its canonical home.

---

## P1 — Real gap

### P1-1 · Vault engine has no canonical-home row in the link graph, and the doc contradicts itself on whether it has its own page
- **Location:** Part 7 L124 lists "Vault engine" as one of the ~6 standalone infra pages. But Part 8's reuse graph (L146–153) gives canonical-home rows to Markets, Scope, Permissioning, Liquidation engine, Curation, RFQ, Institutional Yield, and Multiply — and **no row for the Vault engine.** Separately, offering-map L114 states the Vault engine's *"Home: the Yield hub + Earn page"* (i.e. not its own page), directly conflicting with site-ia Part 7 which lists it as a dedicated infra page.
- **Why it's P1:** The Vault engine is the supply side of the entire credit machine (conditional liquidity, insurance pool, three-layer withdrawals) and is composed by Curators, Launch-a-managed-fund, and the Yield hub. With no canonical home declared and a contradiction about whether the page exists, the build phase won't know where the full explanation lives, and the three surfaces that "surface-and-link" to it (Yield hub L195, Curators L166, Launch-a-fund L175) point at nothing definite.
- **Fix:** Decide and state the canonical home (recommend its own infra page, consistent with Part 7), then add a Part 8 reuse-graph row: *Vault engine (home: Vault-engine infra page) → Yield hub, Credit (the lenders behind every market + conditional liquidity), Curation, Launch-a-managed-fund, Multiply, white-label/Build.* Reconcile the contradiction with offering-map L114.

### P1-2 · Routing/execution (kSwap + Kobayashi + Limo) has no canonical-home row and the weakest surfacing of any rail
- **Location:** Routing is listed as an infra page (Part 7 L124) and appears only as a "surfaces-and-links" bullet on Credit (L185) and Liquidity (L190). It has **no row in the Part 8 reuse graph.** Offering-map Notes L256 flags this exact stack as *"a major asset that has never been positioned externally — a priority to surface."*
- **Why it's P1:** The proprietary on-chain router (Kobayashi), the meta-aggregator (kSwap), and limit-order infra (Limo) power Swap, Multiply, repay/swap-collateral, liquidations, and the integrator embed. The map calls it a priority to surface; the IA gives it the thinnest treatment of all six rails and no canonical-home declaration. The integrator/Fintech pitch ("swap embed") and the Multiply/Credit "manage-in-place" stories silently depend on it.
- **Fix:** Add a Part 8 reuse-graph row for Routing with its canonical home (the Routing infra page) and its reuse map: Liquidity/Swap, Multiply (one-click enter/exit), Credit (repay-with-collateral, swap collateral/debt), Liquidations, Asset issuers (routing to/from your asset), Build (swap embed). Name Kobayashi/Limo as the named components on the Routing page so the proprietary-stack asset is actually surfaced.

### P1-3 · Custody integration (Anchorage) and proof-of-reserves have no surface
- **Location:** Offering-map L217 ("Custody integration — Anchorage Digital, Account Control Agreement, API + webhooks") and rails L34 / offering-map L184 (proof-of-reserves, anti-infinite-mint guard, monthly independent attestation) underpin Custodial Borrowing and Institutional Yield. Neither Anchorage nor proof-of-reserves appears anywhere in `site-ia.md` — Security's enumerated contents (L98) don't include them, and Custodial Borrowing's composition never names the custodian.
- **Why it's P1:** For a treasury or fund underwriting **Custodial Borrowing** (the BTC-backed-credit and treasury-liquidity stories), "who holds my collateral and how is on-chain debt reconciled to off-chain custody?" is a gating diligence question. The qualified-custody answer (Anchorage ACA + sync service + on-chain proof-of-reserves) is a competitive strength that the IA currently hides.
- **Fix:** Surface Anchorage + the custody-sync mechanism on the **Custodial Borrowing** deep page and the **BTC-backed-credit** use-case; add proof-of-reserves to the **Scope** page's guard stack and to the **Security** page's enumerated contents (L98). Consider naming custody under Security's "whole-stack coverage."

### P1-4 · The risk apparatus (risk team, dashboard, VaR, monthly risk report, price-shock scenarios) has no home
- **Location:** Offering-map L233 details a substantial risk function. In the IA it survives only as a vague composition item on the Curators page ("the risk & first-loss tooling," L166) and is **absent from Security's enumerated contents** (L98, which lists audits/formal-verification/bounty/oracle/liquidation/opsec/whole-stack but not the risk dashboard or risk reporting).
- **Why it's P1:** Institutions allocating into vaults want to see the live risk dashboard, monthly risk report, and VaR/volatility/price-shock methodology — this is core allocate-side diligence and a real differentiator. The "risk tooling" the Curators page promises to link to resolves to no actual page or section.
- **Fix:** Add risk to the **Security** page's enumerated contents (risk dashboard, monthly risk report, VaR/volatility/price-shock modeling, the dedicated risk team/consultants), or give it a section on the **Curation/Curators** surface, and make the Curators-page "risk tooling" reference point there explicitly.

### P1-5 · The two Solutions axes are never wired together — audience pages don't link to use-case pages
- **Location:** Part 9 (audience compositions) and Part 10 (use-case compositions) each link down into product pages, but no audience page links to a use-case page and no use-case page links back to its audiences, despite Part 10 explicitly stating which audiences each job "cuts across." Example: the **Curators & managers** page (L166) composes Curation/Markets/Vault-engine/Managed-Portfolios but never links to **Launch a managed fund** (L175), which lists curators as a cutting-across audience.
- **Why it's P1:** The Solutions menu presents by-who and by-job as two parallel doors into the same offering; a visitor who entered by identity (Curator) should be able to cross into the matching job (Launch a fund) and vice-versa. Without the cross-links the two axes are siloed and the "recombine the same products per entry point" promise (Part 13 L221) is only half-delivered.
- **Fix:** Add explicit cross-axis links: each use-case page surfaces its "cuts across" audiences as links (Part 10 already lists them), and each audience page surfaces the use-cases relevant to it (Institutions → BTC-backed-credit + offer-credit; Asset issuers → offer-credit-against-tokenized-assets; Curators → launch-a-managed-fund; Fintechs → embed-yield + launch-a-fund; Individuals → BTC-backed-credit). Document this as a row class in Part 8.

---

## P2 — Polish (summarized)

- **KMNO/Seasons contradiction.** Part 7 L138 declares "KMNO / token: out of scope," yet the Individuals page composition (L167) lists "KMNO/Seasons" as a component. Either drop it from the Individuals composition or carve a narrow in-scope exception with a home (likely a Kamino-App-page section). Resolve so the build isn't told both.

- **Cross-listing discipline applied unevenly.** Curation carries the ↗ glyph (Market/Vault Curation) and Multiply is documented as "Credit-canonical, referenced from Yield in-page" (L64). But **Institutional Yield** also lives in two places (Yield column + the "Institutional Yield API" on Developers/Build/Fintechs, L152) with no glyph and no stated convention, and Permissioned Vaults/Permissioned Markets are two menu entries fed by one Permissioning rail without a documented cross-list rule. State the rule once: when does a shared thing get a ↗ glyph vs. an in-page reference vs. two distinct menu entries.

- **Liquidity Vaults (CLMM) has no Solutions-side pull.** It's reachable from the Liquidity hub (so not orphaned), but appears on zero audience and zero use-case pages. Kamino Swap is at least covered for Individuals via "Swap" (L167); Liquidity Vaults is covered nowhere on the Solutions axis. Consider surfacing it on Individuals and/or a future "earn on idle liquidity" use-case.

- **Lending Vaults vs Earn naming.** Offering-map calls the engine/product "kVault (Earn)" and the consumer alias is "Earn." The IA's Yield hub product is "Lending Vaults" while the consumer alias remains "Earn" (Part 6 L108). This is intentional but undocumented in the Part 12 naming decisions — add a line so the build doesn't reintroduce "Earn" as the product name.

- **Whitelisted Reserves vs Permissioning distinction not surfaced.** The map is emphatic these are different (permissioning gates *who*, whitelisted reserves gates *where*; rails L58, offering-map L108). The IA folds whitelisted reserves into a Yield-hub "section only" (L194) and never draws the distinction on the Permissioning page — institutions evaluating the safety stack will conflate them. Worth one explicit contrast on the Permissioning and/or Vault-engine page.

- **"Section-only" items have no link target verification.** Items like Borrow Orders, Conditional liquidity, repay-with-collateral (L184) and limit orders (L189) are "section only → links to docs." Confirm in the build that each docs target exists; conditional liquidity in particular is called "the key innovation" (offering-map L116) yet is demoted to a Credit-hub inline section with only a docs link — consider whether it deserves more than section-only treatment given its strategic weight.

---

## Coverage confirmations (checked, no gap)

- **Audience reachability:** All 5 audiences (Institutions, Asset issuers, Fintechs, Curators, Individuals) have pages and each composes the products its jobs need (verified against offering-map L137–141). The only audience-side gaps are the missing risk surface (P1-4) and the absent cross-axis links (P1-5).
- **Use-case product coverage:** All 4 use-cases' composing products are present and have homes — except where they invoke the orphaned bridge (P0-1, on the tokenized-asset use-case) and the under-surfaced custody/Anchorage detail (P1-3, on BTC-backed-credit).
- **Infra surfacing:** Markets, Scope, Permissioning, and the Liquidation engine are genuinely reachable with canonical-home rows in Part 8. The two weak rails are Routing (P1-2) and the Vault engine (P1-1).
- **No unreachable IA pages:** every page in the Part 7 inventory is reached from the menu, a hub, an audience/use-case page, Security, or Developers. No true orphan IA pages found.
- **No hard dead-ends:** every page links onward (hubs → deep pages → docs; audience/use-case → products; everything → docs as the universal layer per L23). The closest thing to a stranding is the Curators page's dangling "risk tooling" reference (P1-4) and the un-homed Vault-engine/Routing links (P1-1/P1-2).
- **Renames are internally consistent in the SSOT:** "Off-Chain Collateral (OCC)" → **Custodial Borrowing**, "RWA DEX" → **RWA Liquidity**, "Meta-Vaults" → **Managed Portfolios** (flagged open). These are consistent throughout `site-ia.md`; only the offering-map retains old names (expected, since site-ia is the source of truth).
