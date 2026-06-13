# Round 2 — Critic: Newcomer Clarity / Cognitive Load

**My test for every decision:** a person who has never heard of Kamino lands cold, and within seconds knows *what it is, what it offers, who it's for, and where to click.* I protect against jargon, overload, orphans, dead-ends, and duplication that reads as breakage. But the lead buyer is a sophisticated finance institution, so clarity must never tip into baby-talk that makes a CIO feel they're on a retail toy. The bar is *plain-spoken precision*: a label a newcomer can parse on sight and a professional still respects.

I'll judge the three drafts against that bar, then rule on each of the 11 decisions.

---

## How the three drafts stack up on my axis

**Agent 3 (Comprehension)** is closest to my stance by construction, and it gets the big things right: verb hubs, literal Solutions axis headings, the `↗` cross-list glyph, the "Find your path" picker, the plain-language renames, and an explicit orphan/dead-end check. Its core instinct — *a newcomer navigates by what they want to do, not by your internal vocabulary* — is correct and I back it on most counts. Where it over-reaches: it treats "Liquidity → Trade" as a clean win when "Trade" actively narrows and mis-describes the hub (more below), and its `/how-it-works` index is a good idea the other two lack.

**Agent 1 (Institutional)** is the most dangerous draft for a cold visitor, and it knows it — it openly optimizes for the buyer who already understands capital markets. Surfacing five infrastructure rails (Scope, Permissioning, Vault Engine, Markets, Curation, Liquidations) directly in a mega-menu column is the single biggest cognitive-load failure across all three drafts. A newcomer who opens "Platform" and sees *Scope (oracle)*, *kperm*, *Vault Engine*, *Curation*, *Liquidations* has been handed an engineering org chart and asked to self-route through it. Agent 1 is right that the moat is the institutional reason-to-believe, but it confuses "the buyer must be able to reach the moat" with "the moat must be in the front-door menu." Those are different problems with different solutions.

**Agent 2 (Stripe-Craft)** makes the most rigorous *argument* for surfacing rails (Radar/Connect precedent) and lands the cleanest structural insight (a fourth, delivery-shaped "Platform" column is real and the offering-map's BuildKit-in-Developers placement is wrong). But it imports Stripe's answer to a different question. Stripe's buyer does not underwrite Stripe's solvency; Kamino's does — yet that argues for a *Security* front door and a *How-it-works* drill-down, not for dumping six rail names into a menu a first-time visitor has to scan in two seconds. Agent 2's own "keep rails visually subordinate under a rule line" caveat is an admission that the rails don't belong at the same altitude as the hubs.

The throughline: **all three agree infra needs full deep pages and a reachable home. Only Agent 1 and Agent 2 want those names *in the menu*. That is the central fight, and on the newcomer axis the menu placement loses.**

---

## The 11 decisions

### 1. Hub naming — verbs vs nouns; drop "Suite"; debrand

**Verdict: Verbs — Borrow / Earn / Trade is right, with ONE correction: the third hub is "Trade," but it must be scoped so it doesn't read as "Trade" = pure DEX.** Drop "Suite" (unanimous and obviously correct — "Suite" is internal vendor-speak with zero payoff). Debrand: strip "Kamino" from "Kamino Swap" → "Swap"; "Lending Vaults" → "Earn Vaults."

A cold visitor reads the nav in their own vocabulary. "Borrow / Earn / Trade" is self-classifying — a human knows on sight which one they want. "Credit / Liquidity / Yield" demands the reader already think like a capital-markets professional before they can even navigate; that is exactly backwards for the orienting moment. Agent 3 wins this decisively over Agents 1 and 2, who both keep the nouns (Agent 1 even doubles down with "the buyer navigates by mandate, not verbs" — true for the *audience* axis, false for the *capability* axis, which is the one being named here).

**The institutional objection, answered:** Agents 1/2 will say verbs "dumb it down." They don't, if the noun lives one layer in. A wealth manager who clicks **Earn** lands on a page headlined *Institutional yield, managed portfolios, and regulated credit* — the precise vocabulary is taught with context inside, where there's room. The verb is the signpost; the noun is the destination. A signpost that only insiders can read is a broken signpost.

**The one correction the other drafts should force on Agent 3:** "Trade" is the weakest of the three verbs because the hub is not primarily a trading venue — it's *swap, RFQ liquidity, RWA liquidity, limit orders, automated LP*. To a newcomer "Trade" promises a perps/spot exchange and under-delivers; to a pro it under-describes the RWA-liquidity moat. I'd workshop **"Trade"** against **"Swap & Liquidity"** or simply keep the verb but make the hub subtitle carry the load (*"Swap, get instant quotes, and provide liquidity"*). Net: keep verbs, flag "Trade" as the one label to pressure-test.

### 2. Infrastructure visibility in Products — out (with a front door) vs surfaced in the menu

**Verdict: OUT of the menu — full stop — but with a single, clearly-labeled front door: a "How Kamino works" / `/how-it-works` index reachable from the homepage and every hub.** This is Agent 3's resolution and it is the correct one.

This is the hill I will defend hardest (see bottom). Putting *Scope, Permissioning, Vault Engine, Markets, Curation, Liquidations* into the menu (Agent 1's Infrastructure column, Agent 2's "the rails" sub-section) fails the cold-visitor test the instant the menu opens. These are six engine names a newcomer cannot map to any outcome they came for. Agent 2's Radar/Connect precedent is real but mis-applied: Radar ("fraud") and Connect ("multi-party payments") are *named for the job they do for the buyer*; "Scope," "kperm," and "kVault" are named for what they are internally. A faithful translation of the Radar pattern is *plain-job pages reachable from a How-it-works hub*, not raw engine names in the front door.

Both Agent 1 and Agent 2 are right that the sophisticated buyer absolutely interrogates the engine — and the resolution serves that buyer perfectly: a `/how-it-works` index plus full moat-framed deep pages for each rail (everyone agrees these pages must exist), linked from inside the hub pages and from the audience/Security pages where the evaluator actually is. The evaluator who wants to know "what's your oracle, who can I gate, how do liquidations work" is *drilling in*, not *orienting* — and drill-down is exactly where infra belongs. Nobody hides the moat; we stop ambushing the newcomer with it.

### 3. A "Platform" grouping in Products — yes/no + contents

**Verdict: NO Platform column inside the Products menu. The "operate-on / embed-into" platform story gets ONE clearly-labeled home, surfaced as a spanning footer row in the Products menu ("Build on Kamino → Run your own venue · Embed Kamino in your app") and as a real `/curation` page + the Developers hub.**

Agent 2's structural insight is genuinely sharp: the two-sided platform story (Curation + Build + white-label) is currently scattered across three half-homes, and that is a real defect in the offering-map. But Agent 2's fix — a fifth menu column that *also* absorbs the six rails — recreates the overload problem and asks a newcomer to learn the word "Platform" as a distinct thing from "Products." Agent 3's fix is cleaner for comprehension: pull the supplier story into one labeled row that spans the menu so it reads as a different *kind* of thing ("I want to build/operate" vs "I want to use"), without inventing a fifth column of engine names. The platform thesis gets coherence; the newcomer gets a two-axis menu instead of a five-axis one.

If the institutional reviewers insist the platform story needs more prominence than a footer row, the compromise is a single **Build / Platform** entry in the *Solutions*-adjacent area, not a Products column stuffed with rails.

### 4. BuildKit / embed home — Developers vs Products→Platform

**Verdict: Developers is the canonical home for BuildKit and the embed/API products; the *business* framing lives on the Fintechs & Apps solution page.** Reject Agent 2's move of BuildKit into a Products→Platform column.

Agent 2 cites Stripe's "Prebuilt Components" bucket to argue BuildKit belongs in Products. But for a newcomer, the question "where do I integrate Kamino into my app?" resolves to Developers with zero ambiguity — that is where every engineer and technical PM instinctively looks. Splitting embed across a Products column and Developers creates the exact "where do I find X?" confusion the IA must prevent. The offering-map and Agent 3 are right: Developers hub holds docs/API/SDK/**BuildKit**/Institutional Yield API/embedded wallets/white-label; the Fintechs solution page tells the business story and routes engineers to Developers. One canonical home, one business front door.

### 5. Top nav — set, order, and the contested slots

**Verdict:**
```
[Kamino]  Products ▾   Solutions ▾   Developers ▾   Security   Company ▾        [Launch App]
```
- **Products vs Platform:** call it **"Products."** "Platform" (Agent 1) makes a newcomer ask "platform for what?" — it's an abstraction. "Products" is concrete and answers "what can I do here?" The institution is not confused by the word "Products"; they're reassured the company has shipped things.
- **Products-first, not Solutions-first.** Reject Agent 1's Solutions-first ordering. A cold visitor's first question is *"what is this / what does it do"* — that's the capability axis (Products). "Who is it for" (Solutions) is the *second* question, asked once they know what the thing is. Agent 1's "institutions navigate by mandate first" holds for a buyer who *already knows Kamino*; it fails the cold visitor, who can't pick a mandate page until they know what Kamino sells. Products → Solutions matches the actual order of newcomer questions.
- **Security: top-level — yes.** All three drafts converge here and they're right. For a protocol whose entire pitch is "$0 bad debt, 3 years, 30 audits, live dashboards," trust is the gating question, and a top-level Security slot signals confidence. This is the one place copying Stripe (which buries trust) is wrong.
- **Resources: NO top-level slot.** Side with Agent 3 against Agent 2. Kamino's content set is small enough to distribute into Company (blog/press), Developers (docs), Security (dashboards). A Resources tab becomes a vague catch-all that competes with Company and Developers for the same clicks — a comprehension tax.
- **Pricing: NO top-level slot.** Unanimous-enough and correct. A Pricing tab promises a SaaS price card and delivers a take-rate explainer — a dead-end that erodes trust on the click. Commercial terms live in context (Curation page for curator economics, Developers for API). Keep a `/pricing` explainer page reachable from the footer, per Agent 2's sensible compromise.
- **Company: keep as a small dropdown** (About, Careers, Blog, Press, Brand). Agent 1's expansion of Company into a four-column mega-menu with "the thesis," "trust & compliance," partners, etc. is overload for what newcomers actually need from Company.

### 6. Permissioning — own canonical page?

**Verdict: YES — its own canonical page, public-labeled "Permissioning (Access Control)" / `/infrastructure/access-control`.** Unanimous across all three drafts and correct.

Permissioning spans markets *and* vaults *and* assets; folding it into Markets (the open question in the offering-map) would orphan its vault and embed expressions and split the "open ↔ gated, reverses instantly" story across two engines. A standalone page is the one home all those surfaces link back to. From the newcomer angle, add the discipline Agent 3 names: every surface that says "Permissioned" must lead with the plain meaning — *"KYC-gated, named-counterparty venues"* — so a visitor is never stranded on the adjective.

### 7. Use-case pages — how many & which

**Verdict: Start with 4, not 3 and not 6.** Keep the locked three (Borrow against tokenized assets · Borrow against Bitcoin · Launch a managed fund) and add **"Embed yield in your app"** (Agent 2's H5). Hold the rest in a visible pipeline.

Agent 3's conservative 3 leaves the highest-conversion fintech job (embedded yield) on the bench, and Agent 2 is right that building it in Round 1 forces the platform/embed story to prove it composes. But Agent 1's jump to 6 is overload risk: "Earn on idle treasury," "Embed yield," and "List & finance an asset" partly duplicate the audience pages and each other (Agent 1 even admits use-case #6 is a "near-twin" of #1). For a cold visitor, a Solutions menu with 6 nearly-overlapping job links is harder to scan than 4 distinct ones. Four crisp, genuinely-distinct jobs beat six that blur. Show the rest as a clearly-labeled "More coming" row so the menu doesn't go stale (Agent 2's H7 instinct), but don't ship near-twins.

### 8. Meta-Vaults rename + other jargon renames

**Verdict: rename Meta-Vaults → "Managed Portfolios."** Side with Agent 3 (and Agent 2's "Portfolios" direction) over Agent 1's "keep Meta Vaults."

"Meta" tells a newcomer nothing and reads as internal engineering. "Managed Portfolios" says exactly what it is to the wealth managers and fintechs who are the actual buyers — and crucially it does *not* dumb anything down; "managed portfolio" is precise institutional language. Agent 1's defense ("partners already know Meta Vaults") protects a handful of insiders at the cost of every newcomer and every new institutional buyer who doesn't have the decoder ring. The flagship product deserves a name its buyer recognizes on sight.

**Other renames (newcomer label leads, product/pro term in parentheses or inside):**
- **RFQ → "Instant-Quote Trading (RFQ)"** — lead with plain meaning, keep "(RFQ)" as the bridge for pros who search the acronym. (Agent 3.)
- **RWA DEX → "Tokenized-Asset Liquidity (RWA DEX)"** — "RWA DEX" is double jargon; lead with what it does. (Agent 3.)
- **Curation → public label "Run your own market or vault"; "Curation Suite" as the product name inside `/curation`.** A fintech or institution doesn't think "I want to curate." (Agent 3.)
- **Multiply → keep "Multiply"** — it's evocative and already the product name; subtitle it "(leverage)" on first appearance.
- **Permissioned → keep the word, always paired with plain meaning** (see #6).
- **Custodial Borrowing / Off-Chain Collateral → "Borrow against BTC & RWAs" as the buyer-facing label** (Agent 3's `/borrow/btc-rwa`), with "off-chain collateral (OCC)" as the term inside. "Custodial Borrowing" (offering-map's menu label) is opaque to a newcomer; "Off-Chain Collateral" is engineering-speak. The *job* — borrow against assets at your custodian without selling — is the label.

### 9. Solutions axes — by-who + by-job + by-industry/asset

**Verdict: Ship by-who + by-job now, with literal column headings ("By who you are" / "By what you want to do"). Hold by-asset-class as a labeled "More" row, graduate to a third axis only when ≥3 pages have real depth.** This blends Agent 3's literal-heading clarity with Agent 2's disciplined "ship the third axis when it's full" rule.

The literal headings are the highest-value anti-confusion move in the whole Solutions menu — Agent 3 is right that the failure mode is a visitor not knowing which axis they're on. Agent 2's by-asset-class third axis (RWA / BTC / stablecoins / equities / LSTs) is a genuine latent dimension, but shipping it half-empty creates orphan-feeling stubs. A three-column Solutions mega-menu also pushes toward overload; two well-labeled axes plus a "More" row is the right cold-visitor load. Add Agent 3's **"Find your path" picker** — it's the single best defense against the no-label visitor bouncing.

### 10. App tile placement & consumer surfacing

**Verdict: Keep the full-height App tile as the featured tile on the LEFT of the Products menu (Agent 3 / offering-map), plus the persistent "Launch App" button in the nav.** Reject Agent 1's "place the app tile last/rightmost."

For a cold visitor, the app tile is the most concrete, lowest-anxiety thing in the entire menu — "here's the actual thing, click to see it." Leading the Products menu with it answers "what is this?" faster than any hub label. Agent 1 demotes it rightmost to protect the "infrastructure for capital" thesis, but that optimizes the menu for the institution at the cost of the newcomer and the consumer — and the institution isn't harmed by an app tile on the left (it's proof the rails work at retail scale). The consumer story also gets the audience-framed `/solutions/individuals` page and the product-framed `/app` page, cross-linked so neither orphans. Launch App stays a persistent primary CTA so the self-serve action is always one click.

### 11. Other naming

- **"Products" not "Platform"** for the menu/nav label (see #5).
- **Hub URLs as verbs:** `/borrow`, `/earn`, `/trade` — self-evident, no decoding.
- **Infra under one parent** `/infrastructure/*` + a `/how-it-works` index — clean URL story and a single drill-down home (Agent 3).
- **Scope → public label "Pricing & Oracle," product name "Scope" inside** (Agent 3). A newcomer can't parse "Scope"; "Pricing & Oracle" tells them what it is.
- **"Conditional liquidity"** — always introduced as *"capital that funds a loan only when a borrower arrives,"* never bare (Agent 3).
- Avoid "Kamino"-prefix spam; brand the word only where the generic word is ambiguous (Swap is unambiguous → no prefix; Kobayashi/Scope/BuildKit keep their names).

---

## The one decision I feel strongest about

**Infrastructure stays OUT of the Products mega menu, reachable through a single "How Kamino works" front door and from inside the hub/audience/Security pages — never as raw engine names in the menu (Decision #2, and by extension #3).**

This is where I split hardest from Agent 1 and Agent 2, and I'll die on it. The mega-menu is the two-second orienting surface — the one moment a cold visitor decides whether this site is for them. The instant that menu shows *Scope (oracle) · kperm · Vault Engine · Markets · Curation · Liquidations*, the newcomer's read is "this is built for someone who already knows the plumbing — not me," and the bounce risk spikes. Agent 1 and Agent 2 are correct that the moat is the institution's reason-to-believe and that it must be *reachable and fully sold* — and the resolution delivers that with full moat-framed deep pages and a `/how-it-works` index linked from exactly where evaluators land (hub pages, audience pages, Security). What it refuses to do is conflate "reachable for the drill-down evaluator" with "front-and-center for the orienting newcomer." Those are two different visitors at two different moments, and the menu must serve the one who is still deciding whether to stay. Surfacing the rails in the menu trades the newcomer's clarity for an institutional reassurance that is better delivered one click deeper, where there's room to frame each engine by the job it does. The moat doesn't get hidden; it gets sold in the right room.

---

## Crisp verdict list

1. **Hub naming:** Verbs — **Borrow / Earn / Trade**; drop "Suite"; debrand ("Swap," "Earn Vaults"). Pressure-test "Trade" as the one soft label.
2. **Infra in Products menu:** **OUT** — single `/how-it-works` front door + full deep pages reachable from hubs/audiences/Security.
3. **"Platform" grouping in Products:** **NO column** — one labeled spanning footer row ("Build on Kamino: run a venue · embed in your app") + `/curation` + Developers.
4. **BuildKit/embed home:** **Developers** (canonical) + Fintechs solution page (business framing). Not a Products column.
5. **Top nav:** `Products · Solutions · Developers · Security · Company` + Launch App. **Products-first.** Label **"Products"** not "Platform." Security top-level YES. Resources NO. Pricing NO (footer page only).
6. **Permissioning:** **Own page** — `/infrastructure/access-control`, public label "Access Control," always paired with plain meaning.
7. **Use-cases:** **4** — the three locked + "Embed yield in your app"; rest in a visible "More coming" row.
8. **Meta-Vaults:** **Rename → "Managed Portfolios."** Plus RFQ → "Instant-Quote Trading (RFQ)," RWA DEX → "Tokenized-Asset Liquidity," Curation → "Run your own market or vault," Custodial Borrowing/OCC → "Borrow against BTC & RWAs."
9. **Solutions axes:** **by-who + by-job now** with literal headings + "Find your path" picker; by-asset-class held as a "More" row until ≥3 pages have depth.
10. **App tile:** **Featured tile, LEFT/lead** of Products menu + persistent Launch App CTA. Reject demotion to rightmost.
11. **Other naming:** "Products" not "Platform"; verb URLs `/borrow /earn /trade`; Scope → "Pricing & Oracle" (public) / "Scope" (inside); no Kamino-prefix spam.

**Hill to die on:** Infrastructure out of the menu, served via a `/how-it-works` front door and full deep pages — clarity for the orienting newcomer, full depth for the drilling evaluator, the moat hidden from neither.
