# The Stripe Marketing-Site Playbook

A reference for auditing another company's marketing site to Stripe's craft bar.

**Method:** Every pattern below was extracted by fetching the live stripe.com pages with WebFetch on 2026-06-13, not from memory. Verbatim quotes are marked with quotation marks. Pages verified:

- Homepage — https://stripe.com
- Product hub (payments) — https://stripe.com/payments
- Product hub (billing) — https://stripe.com/billing
- Platform/embed product (Connect) — https://stripe.com/connect
- Deep/standalone product (Radar) — https://stripe.com/radar
- Deep/standalone product (Checkout) — https://stripe.com/payments/checkout
- Solution by segment (Enterprise) — https://stripe.com/enterprise
- Solution by segment (Startups) — https://stripe.com/startups
- Solution by use-case (Embedded finance) — https://stripe.com/use-cases/embedded-finance
- Proof hub (Customers) — https://stripe.com/customers
- Developer docs entry — https://docs.stripe.com (note: https://stripe.com/developers returns 404; docs.stripe.com is the canonical developer entry)

---

## Cross-cutting craft patterns (true on every page)

These hold across the whole site and form the backbone of the audit checklist.

1. **The H1 is a verb-led promise that names the business outcome, never the product category.** "Financial infrastructure to grow your revenue." (home). "Monetize faster with Stripe Billing." (billing). "Fight fraud with the strength of the Stripe network" (radar). Every H1 leads with what the buyer gets, and the product name appears as the means.

2. **The subhead immediately enumerates concrete scope, often with a range.** Home: "Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth." Payments: "Accept payments online, in person, and around the world… from scaling startups to global enterprises." The "first transaction to your billionth" / "pre-seed to post-IPO" range device recurs to signal the product spans the buyer's whole lifecycle.

3. **Two CTAs, always the same pair, role-split by buyer.** Primary = "Start now" / "Start accepting payments" (self-serve, links to dashboard registration). Secondary = "Contact sales." Self-serve products lead with "Start now"; sales-led solution pages (Enterprise) demote or drop "Start now" and make "Contact sales" the dominant CTA. A persistent tertiary "Try the demo" / "Explore the docs" shows up on hands-on product pages.

4. **Every claim is quantified.** Numbers are everywhere and specific: "$1.9T in payments volume processed in 2025," "99.999% historical uptime," "500M API requests per day," "11.9% average revenue uplift," "92% chance a card has been seen before on the Stripe network," "reducing fraud by 32% on average." Metrics carry a year ("in 2025") and a basis ("on average") so they read as measured, not marketing.

5. **Mechanism is explained plainly, then proven with a number.** Radar: "Radar's AI scans every payment and account using hundreds of signals from across the Stripe network to help detect and prevent fraud before it hits your business, reducing fraud by 32% on average." The pattern is: name the mechanism in one sentence of plain English, then attach the measured outcome to the same sentence.

6. **Copy is short declarative sentences, benefit-first, bullets for feature lists.** Prose paragraphs run 1-3 sentences. Feature clusters become heading + one-line description pairs ("Custom rules — Set precise rules to flag, block, or apply adaptive 3D Secure to certain transactions"). Density is low; whitespace and visuals carry weight.

7. **Named customers are used as proof at three altitudes:** logo bands (recognition: Amazon, Shopify, Airbnb, OpenAI), inline metrics tied to a named company ("Retool recovered $600K in failed payments"; "Slack… 99% authorization rate"), and full attributed quotes with name + title + company. The bigger the page's altitude, the more it leans on logos and metrics over long quotes.

8. **A hub explains a little inline, then links out — it never tries to fully explain a sub-product.** Hubs give each sub-product a name, a one-line description, and an "Explore [Product]" link to its own page. Depth lives on the dedicated page; the hub is a router.

9. **Analyst/third-party validation appears as a discrete trust band.** "Gartner ranked Stripe as a Leader," "Stripe named a Leader in The Forrester Wave™." Placed late, after the product story, before the final CTA.

10. **Every page closes the same way:** a "Ready to get started?" CTA block repeating the primary/secondary CTA pair, then a deep footer with a locale selector and the full product/solution/developer/resources/company link map.

---

## Page type 1 — Homepage (https://stripe.com)

**Section sequence (hero → footer):**
1. Header nav (Products, Solutions, Developers, Resources, Pricing)
2. Hero (H1 + subhead + CTA pair)
3. Customer logo carousel
4. Solutions grid — "Flexible solutions for every business model"
5. Statistics bar — "The backbone of global commerce"
6. Data visualization
7. Enterprise proof block (Hertz, URBN, Instacart, Le Monde)
8. Professional services
9. Startups section
10. Platforms section with testimonials
11. Developer-infrastructure section
12. "What's happening" news grid
13. Publications / annual letter
14. Final CTA — "Ready to get started?"
15. Footer

**Hero pattern:** H1 "Financial infrastructure to grow your revenue." — a noun phrase (the category Stripe wants to own, "financial infrastructure") fused to a verb-led benefit ("to grow your revenue"). Subhead enumerates three things the platform does plus the lifecycle range: "Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth." CTAs: primary "Get started" / "Start now," secondary "Contact sales," plus "Sign up with Google."

**How offerings are presented and mixed:** The homepage is a directory, not an explainer. It surfaces ~20 product names (Payments, Checkout, Payment Links, Billing, Subscriptions, Terminal, Connect, Issuing, Radar, Sigma, Treasury, Capital, Tax, Identity, etc.) grouped by buyer type (Enterprises / Startups / Platforms / Crypto / SaaS) rather than by product taxonomy. Each gets a one-line gloss ("Accept and optimize payments globally—online and in person") and links out. An integration-path selector ("Don't code?" / "Use a pre-integrated platform" / "Build your own integration") routes by technical readiness.

**Copy voice (verbatim):**
- "Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together."
- "Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods."
- "From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services."

**Proof placement:** Logo carousel high (recognition). A stats bar mid-page ("$1.9T in payments volume processed in 2025," "99.999% historical uptime," "50% of Fortune 100 companies," "200M+ active subscriptions"). Per-segment testimonials lower down (Mindbody, Jobber, Substack, Lightspeed), each a single attributed sentence.

**Navigation aids:** Mega-menu with Products / Solutions (by stage, by use case, by industry) / Developers / Resources / Pricing. Integration-path selector. Segment-based entry tiles.

---

## Page type 2 — Product hub (https://stripe.com/payments and https://stripe.com/billing)

A product hub sells one product family and routes to its sub-products.

**Section sequence — Payments:**
1. Nav → 2. Hero → 3-6. Four benefit blocks (Convert more / Global reach / Less fraud / Move faster) → 7. Logo bar → 8-17. "Online payments" subsection (checkout, payment page, payment links, embedded form, Elements, payment-method surfacing, Link) with testimonials → 18-23. "Global payments" subsection (markets, 100+ methods, local currencies, multi-currency) with regional examples → 24-27. "In-person payments" subsection (Terminal) with case studies → 28-37. "Payments intelligence suite" (AI optimizations, Authorization Boost, Radar, dispute management, insights) with success stories → 38-43. "Unified platform" (reliability, compliance, security, Forrester recognition) → 44. Footer.

The hub is built as **labelled subsections** ("Online payments," "Global payments," "In-person payments," "Payments intelligence suite," "Unified platform"), each with its own benefit headline, inline demo, and "Explore [Product]" links. This is the signature hub move: group sub-products into a few outcome-named buckets, give each a visual + one-liner, link out for depth.

**Hero pattern:** H1 "Unified, global payments to grow your revenue" (adjective stack naming the differentiator + the outcome). Subhead names the scope and the buyer range: "Accept payments online, in person, and around the world with a payments solution built for any business—from scaling startups to global enterprises." CTAs: "Start accepting payments" / "Contact sales," plus per-section "Explore [X]" secondaries.

**How offerings are presented and mixed:** Each sub-product gets name + one-liner + link, never a full explanation: Payment Links ("No-code payments"), Checkout ("Prebuilt payment UIs"), Elements ("Flexible UI components"), Terminal ("In-person payments"), Radar ("Fraud prevention"), Link ("Accelerated checkout"). Adjacent products (Billing, Tax, Treasury, Connect) are cross-linked at the edges so the hub feeds the rest of the system.

**Copy voice (verbatim):**
- "Stripe's Optimized Checkout Suite delivers a frictionless customer experience. Increase revenue and save thousands of engineering hours with prebuilt payment UIs, easy access to more than 100 payment methods, and Link, Stripe's one-click checkout."
- "Turn on the most popular payment methods from the Stripe Dashboard, and then use Stripe's AI models to dynamically show customers the most relevant ones you've enabled."
- "With more than 500M API requests per day and daily capacity tests, Stripe is the only major payment processor to publish its uptime."

**Billing hero/voice (verbatim):** H1 "Monetize faster with Stripe Billing." Subhead "Manage pricing, reduce churn, and grow revenue—on one platform." Body: "AI-powered Smart Retries, card account updater, and cancellation surveys work together to keep revenue flowing." Billing leans heavily on recovered-revenue math: "$8.2B in failed payments recovered in 2025," "$14 recovered for every $1 spent in 2025," "Businesses using Stripe recover 55% of failed payments on average."

**Proof placement:** Logo bar after the benefit blocks; per-subsection testimonials and metrics (Slack "53% fraud reduction," "3.5% conversion increase"; GitHub Sponsors "52% increase in total contributions"; Dines "150% jump in revenue per venue"). Billing names Atlassian, Figma, OpenAI, Nasdaq, Intercom and attaches a metric to each (Figma "doubled their product suite"; ClickFunnels "saved $1M annually in engineering costs"; Intercom "only 3 months to implement usage-based billing").

**Navigation aids:** Tabbed/labelled subsections; an in-page product breadcrumb (Overview → Usage-based billing → Subscriptions → Invoicing → Pricing); a feature-comparison table ("Authorization Boost / Network tokens / Card account updater"); a pricing tier table on billing (Starter / Professional / Enterprise); a "Key features included" matrix (Sell | Bill | Collect | Report). Docs cross-link (docs.stripe.com/payments).

---

## Page type 3 — Platform / embed product (https://stripe.com/connect)

Connect sells an embeddable building block to companies who will resell it. Its job is to make a complex, multi-party product feel governable.

**Section sequence:** Nav → Hero → market-leadership stats → dashboard visuals → four benefit blocks (Launch in weeks / Manage at scale / Grow globally / Build revenue) → "Embed payments with confidence" → foundation stats → three business-model pathways (platforms / marketplaces / enterprise) → enterprise routing → "How it works: onboarding" → payments/payouts dashboards → account management → accept-payments-and-tax → monetization → **interactive fund-flow control (8 money-movement scenarios with code samples)** → platform management at scale → security & compliance → unified payments stack (6 cross-linked products) → "under the hood" deep dive → Organizations → resources → CTA → pricing → footer.

**Hero pattern:** H1 "The market leader for platform and marketplace payments" (Connect leads with a *category-leadership* claim rather than a verb, because the buyer is choosing infrastructure they'll bet their business on). Subhead does heavy lifting — names anchor customers, lists capabilities, and gives a time-to-value promise: "The world's most successful platforms and marketplaces, including Shopify and DoorDash, use Stripe Connect to embed payments into their products. Connect offers seamless onboarding, embedded components, global payouts, and more—go live in weeks instead of quarters, build a profitable payment business, and scale with ease." CTAs: "Start now" / "Contact sales," plus "Read the docs" and "See all features."

**How offerings are presented and mixed:** Two layers. (a) Connect's own features explained inline with visuals and code (Onboarding, dashboards, account management, payment-method controls, Instant Payouts, Adaptive Pricing). (b) A "unified payments stack" of adjacent products each get name + "Explore [Product]" link (Terminal, Tax, Billing, Capital, Issuing, Invoicing, Sigma). Deeper feature lists (Direct Charges, Destination Charges, Separate Charges & Transfers, etc.) are deferred to /connect/features.

**The standout craft move — the fund-flow control section:** an interactive toggle of eight money-movement models (Direct Charges, Destination Charges, split payouts, top-ups, payouts, Instant Payouts, subscriptions, account debits) each shown with a real transaction breakdown (DoorDash "$17.00 total: base $1, restaurant $11, delivery $2, tip $3"; Lyft "$8.32: Lyft fee $1, driver $7.32") and a code sample. This demonstrates flexibility concretely instead of asserting it.

**Copy voice (verbatim):**
- "Connect supports almost any type of money movement you can dream up. Pay out users quickly and reduce operational overhead with Connect's global routing and payout engine."
- "Connect shifts payment obligations from you to Stripe. Under the hood, Connect tokenizes card data to help with PCI compliance; manages identity verifications, KYC, and sanctions checks while onboarding your users to Connect; leverages Stripe's licenses around the world; and more."
- "Increase sign-up conversion with Connect Onboarding. Support 46+ countries in 14 languages. Automatically keep up with global payment requirements. Users who already have a Stripe account can get started in just one click with networked onboarding."

**Proof placement:** Stats high (16,000+ active platforms, 13+ years, 11M+ onboarded accounts). Anchor logos in hero (Shopify, DoorDash). Attributed quotes placed right after the section they validate — Shopify's COO quote after monetization, WeTravel's CPO quote after compliance. The quote-placement rule: put the testimonial immediately after the claim it backs.

**Navigation aids:** Three business-model pathway cards routing to /connect/platforms, /connect/marketplaces, /enterprise. The interactive fund-flow toggle. "Find what's right for you" → /personalize. Per-feature "Read the docs" links to docs.stripe.com/connect.

---

## Page type 4 — Deep / standalone products (https://stripe.com/radar, https://stripe.com/payments/checkout)

These sell a single product in depth to a buyer who already knows they have the problem.

### Radar

**Section sequence:** Nav → Hero → "Fight fraud with richer signals" → "Protect against shifting fraud vectors" → "Stay ahead of emerging threats" → "Plug into your existing stack" → logos → "Trained on payment volume" → "Strength in numbers" → "Better outcomes with AI" → "More accurate than third-party tools" → data-integration layers → signal-types deep dive → Radar for Fraud Teams → abuse prevention → dispute prevention → Radar for platforms → resources → "Radar built into Stripe" → pricing callout → footer.

**Hero pattern:** H1 "Fight fraud with the strength of the Stripe network" (verb-led, names the differentiator — the network). Subhead quantifies in the first breath: "Identify and prevent fraud in real time with AI trained on over $1 trillion in annual payment volume." CTAs: "Start now" / "Contact sales," plus "Explore advanced fraud tools" and "Pricing details."

**How features are presented:** heading + one-liner pairs, grouped. Radar for Fraud Teams: "Custom rules — Set precise rules to flag, block, or apply adaptive 3D Secure to certain transactions"; "Block and allow lists — Sync existing lists of trusted or blocked users." Signal types: "Device fingerprints — Tie multiple signals into a single device profile"; "Proxy detection — Identify IP spoofing and proxy usage."

**Copy voice — how a technical mechanism is explained (verbatim):**
- "By learning from millions of global businesses processing more than $1.9 trillion in payments each year, Radar assigns risk scores to every payment and automatically blocks high-risk payments."
- "Radar's AI scans every payment and account using hundreds of signals from across the Stripe network to help detect and prevent fraud before it hits your business, reducing fraud by 32% on average."
- "Radar ingests data from every layer of the financial stack, integrating checkout flow data, rich payments data, and card network and bank information to assess fraud risk."

The mechanism is described in plain operational terms (scans, signals, scores, blocks) and every claim lands on a number (92%, 32%, $1.9T, 197 countries). Notably, Radar carries logos (OpenAI, Mindbody, La Redoute, Samsonite) but no long quotes — at this depth, the network-scale numbers are the proof.

### Checkout

**Hero pattern:** H1 "We built Checkout so you don't have to" — a rare first-person, slightly playful headline that frames the value as offloaded work. Subhead lists the four integration options inline: "Launch a secure, customizable, conversion-optimized checkout experience with Stripe Checkout. Choose a full-page flow, embed a form in your site, share a payment link, or integrate elements—each option supports one-time payments and subscriptions." CTAs: "Start now" / "Try the demo," plus "Explore the docs."

**Copy voice (verbatim):**
- "We obsess over every detail of the checkout page—from its load time to the smallest animation. By using Checkout, you have a team of Stripe engineers and designers working continually to increase sales on your behalf."
- "Checkout supports 30+ languages, 135+ currencies, localizes pricing with Adaptive Pricing, and dynamically shows the payment methods and currency most likely to improve conversion."

**Proof placement (Checkout):** Heavy on attributed conversion-lift quotes from smaller named companies — GroupGreeting ("conversion rates that were 8% higher—so we switched!", Anthony Doctolero, Founder & CEO), Tiller, VCA Animal Hospital, Glitch. A standalone product page can use more (and longer) quotes than a hub, because each quote directly validates the one product being sold.

**Deep-product staples:** A live embedded demo (Powdur checkout across four languages); a four-path integration comparison (prebuilt form / payment links / embedded form / Elements) shown side-by-side; a "What's in the box" feature matrix; transparent per-transaction pricing (2.9% + 30¢). Decision support is concrete: show the options as a comparison, expose real pricing.

---

## Page type 5 — Solutions by segment (https://stripe.com/enterprise, https://stripe.com/startups)

Solution pages recombine the *same products* around a *buyer*, organized by that buyer's outcomes and journey rather than by product taxonomy.

### How a solution page differs from a product page (the core distinction)

| | Product page | Solution-by-segment page |
|---|---|---|
| Organizing principle | Product features / sub-products | Buyer outcomes; products clustered into 3-4 outcome buckets |
| H1 | Product + outcome ("Monetize faster with Stripe Billing.") | Buyer's ambition ("Build the next era of your enterprise"; "Start. Scale. Grow.") |
| Opening proof | Product metrics | Named peer companies in the hero ("from Amazon's rapid expansion… to BMW's") |
| Primary CTA | "Start now" (self-serve) | Enterprise: "Contact sales" dominates, "Start now" demoted/absent. Startups: "Start now" + "Apply now" to the program |
| Body register | Mechanism + feature depth | Journey narrative + business outcomes; products are *means*, named only in passing |
| Products shown | One family in depth | Many families, each one line, clustered |

### Enterprise

**Section sequence:** Nav → Hero → featured-content carousel → enterprise logos → Global Payments cluster → Platform Payments cluster → Finance Automation cluster → Authorization Optimization → "Working with Stripe" (support/TAM) → use-cases-by-category → resources → Organizations/account management → "Contact sales" CTA → footer.

**Hero:** H1 "Build the next era of your enterprise." Subhead recombines proof and ambition: "Leading enterprises use Stripe to revolutionize their business—from Amazon's rapid expansion into global markets to BMW's reimagination of the customer experience." Primary CTA is "Contact sales" (appears 4+ times); "Explore" jumps to anchored sections. No prominent "Start now."

**Product recombination:** products are grouped into three outcome clusters — *Global Payments* (Payments, Payment Methods, Checkout, Link, Terminal, Radar, Authorization Boost), *Platform Payments* (Connect, Issuing, Capital, Treasury), *Finance Automation* (Billing, Subscriptions, Invoicing, Tax, Revenue Recognition, Sigma, Data Pipeline). Each cluster leads with a buyer metric, not a feature.

**Copy voice (verbatim):**
- "Enterprises from Airbnb to Unilever optimize payments with a single integration that works across 47 countries, 75+ payment methods, and 135 currencies, including stablecoins."
- "Companies like NVIDIA use Stripe to recover more revenue, minimize development time, and improve efficiency across their existing ERP systems."

**Proof:** Enterprise logo wall (H&M, Maersk, Marriott, BMW, Amazon, Salesforce, Le Monde, Unilever, URBN, Toyota). Cluster-level metrics ("Grow revenue by 11.9% on average," "300K+ businesses," "99.999% uptime," "250M+ API requests/day"). A support-specific quote (NordSecurity's Head of Payments on Enterprise Support + a named technical account manager) — enterprise pages prove the *relationship*, not just the product.

### Startups

**Hero:** H1 "Start. Scale. Grow." — a three-beat journey headline. Subhead frames the lifecycle: "Ambitious startups have grown into multibillion-dollar businesses on Stripe—scaling from pre-seed to post-IPO. Incorporate your company, test and accept payments with no-code tools, and automate financial operations to move faster." CTAs: "Start now" + "Apply now" (to the Stripe Startups program) — a segment page can introduce a *program* as its own conversion path.

**Product recombination — by business model:** AI, SaaS, Marketplaces, Embedded Finance, Ecommerce, Crypto, Creator Economy, each mapped to a product set (AI → usage-based billing + Checkout; Marketplaces → Connect + payouts; Embedded Finance → Issuing + Capital + Treasury). A unified tooling layer (Atlas incorporation, Sigma, Data Pipeline, Stripe Apps) sits across all.

**Copy voice (verbatim):**
- "Designed for venture-backed businesses that are just getting started, Stripe's startup program gives founders access to financial benefits, a focused community, and expert resources to help accelerate growth."
- "Stripe offers a range of options to accept payments, from no-code to low-code to powerful APIs."

**Proof:** Founder quotes (Runway, ElevenLabs, Retool, Hex) emphasizing longevity and partnership ("We've been on Stripe since day one"). Velocity metrics ("4,600 new businesses launching on Stripe every week"). Case-study links framed as growth stories (OpenAI monetizing ChatGPT; GitHub Sponsors).

---

## Page type 6 — Solution by use-case (https://stripe.com/use-cases/embedded-finance)

A use-case page is narrower than a segment page: it sells one *job to be done* and the specific product bundle that does it.

**Section sequence:** Nav → Hero → differentiation (4 feature cards) → growth benefits (3 subsections) → learning resources → "How it works" → 4 detailed case studies → professional services → CTA → legal disclaimers → footer.

**Hero:** H1 "Launch financial services on your platform." Subhead names the outcome and the exact bundle: "Become the one-stop shop for your customer's financial needs by embedding financial services into your platform, including accounts, cards, and financing." CTAs: "Contact sales" primary, "Get started" secondary, "Watch the video" tertiary.

**Product recombination around the job:** Payments+Connect+Terminal (acceptance), Capital (financing), Treasury+Financial Accounts (accounts), Issuing (cards), Radar+Identity+Financial Connections (fraud/compliance). The bundle is presented as a complete solution to the job, with the message that you don't assemble vendors yourself.

**Copy voice (verbatim):**
- "Enable customers to earn, store, manage, and move money—all without leaving your platform."
- "Stripe enables you to build the services you need without integrating multiple technology partners—whether for payments, cash advances and loans, financial accounts, cards, or all of the above."
- "We handle the fundamentals—such as backend compliance requirements, bank partner negotiations, and infrastructure—so you can focus on creating tailored experiences for your customers."

**Proof:** Four deep case studies, each with attributed quote + metric (Shopify; Lopay "Launched Visa rewards card in six days"; Tekion "90% of customers adopt"; Housecall Pro "four-fold increase in engagement"). Plus aggregate platform outcomes ("80% customer retention rate on embedded finance offerings," "40% increase in customer lifetime value"). A use-case page proves with *deeper, fewer* case studies than a segment page's logo wall.

**Navigation aids:** Related-use-case cross-links (Platforms, Marketplaces, SaaS) so adjacent jobs are one click away; product cross-links throughout; "How it works" section to lower the perceived complexity of a multi-product solution.

---

## Page type 7 — Proof hub (https://stripe.com/customers)

**Section sequence:** Nav → Hero → results stats → "Customers by size" tabs (Startup/Growth/Enterprise) → featured-stories carousel → "Building together" (partnerships) → "Customers by use case" tabs → "Customers by solution" tabs → "Ready to get started?" CTA → footer.

**Hero:** H1 "The payments platform behind millions of businesses." Subhead is the company mission: "We're building a platform for ambitious companies around the world to make moving money as simple, borderless, and programmatic as the rest of the internet."

**Organization — the key pattern:** stories are filterable on three axes simultaneously — **by size** (Startup / Growth / Enterprise), **by use case** (Marketplaces / SaaS / Platforms / Ecommerce), **by solution** (Accept payments / Billing / Payouts / Checkout / Fraud reduction / Global payments / Conversion / Embedded finance). The same buyer can find a peer story by who-they-are, what-they-do, or which-product-they're-evaluating.

**Story card anatomy:** logo + headline metric ("$70M total increase in Postmates' annual revenue"; "99% authorization rate in the US" for Slack; "22% increase in average order value after migrating to the Payment Element") + product tags (Billing, Connect, Payments — each a clickable link back to the product page) + "Read story" / "Watch video." Every card is metric-first.

**How it feeds the system:** product tags on each card link back to /payments, /billing, /connect, etc., so the proof hub is also a routing layer back into the product pages. "See all stories" → /customers/all.

---

## Page type 8 — Developer entry (https://docs.stripe.com)

Note: https://stripe.com/developers returns 404. The canonical developer entry is docs.stripe.com, reached from the top-nav "Developers" menu.

**Structure:** Tagline "Documentation — Explore our guides and examples to integrate Stripe." Then three entry layers: (1) **Use cases** — six outcome-named quickstarts (Accept payments online, Sell subscriptions, etc.); (2) **Getting started** — "Set up your development environment," "Build on Stripe with AI," quickstarts; (3) **Browse by product** — four categories mirroring the marketing IA (Payments / Revenue / Money management / Prebuilt components).

**Pattern for the audit:** the developer entry offers three parallel on-ramps — by outcome (use case), by setup step (getting started), and by product — so a developer can arrive from any mental model. Voice is terse and imperative ("Set up your development environment," "Build on Stripe with AI"). The product taxonomy here matches the marketing-site product menu exactly, so a buyer moving from marketing to docs sees the same names.

---

## How to apply this to a capital-markets infrastructure company (Kamino's context)

Kamino is B2B-led infrastructure for on-chain capital markets, with a consumer-facing app on top. It is not Stripe, and several Stripe patterns must be adapted rather than copied. Concrete do's per page type, with the deviations called out.

### Homepage
- **Do:** Open with a verb-led outcome H1 that claims the category ("infrastructure for on-chain capital markets / on-chain credit," or whatever Kamino's owned category is), not "the Kamino app." Mirror Stripe's lifecycle-range device with something true for Kamino (e.g. retail saver through institutional allocator).
- **Do:** Build a directory homepage that routes by audience (institutions / developers / individuals) the way Stripe routes by Enterprises/Startups/Platforms. Give each product a name + one-liner + link; do not explain anything fully on the home page.
- **Do:** Run a stats band with current, dated, sourced numbers (TVL, cumulative volume, loans originated, uptime), each carrying a basis and date the way Stripe writes "in 2025" and "on average."
- **Deviate:** Stripe can publish raw counterparty logos freely. In capital markets, named-institution proof is often restricted by the counterparty. Where logos aren't permitted, substitute on-chain-verifiable, auditable metrics (contract addresses, audited TVL, third-party dashboards) as proof — this is a *credibility advantage* DeFi has that Stripe lacks, so lead with it.

### Product hub
- **Do:** Structure each product family as 3-4 outcome-named subsections (Stripe's "Online / Global / In-person / Intelligence" pattern), each with a visual + one-liner + "Explore" link. Defer depth to dedicated pages.
- **Do:** Quantify every mechanism claim. For a lending/credit product the equivalent of Stripe's "$8.2B recovered… $14 for every $1" is dated, sourced yield/utilization/liquidation-performance numbers.
- **Deviate:** Kamino must explain *risk* where Stripe explains *features*. A capital-markets hub needs a plainly worded risk/collateralization/liquidation mechanism section near the security/compliance slot Stripe uses for "reliability and compliance." Treat risk transparency as a trust feature, not a disclaimer to bury.

### Platform / embed product (Kamino's equivalent of Connect)
- **Do:** Copy the Connect "interactive fund-flow with real numbers + code" move for any composable/embeddable Kamino primitive. Walking through a real position or money-flow with concrete amounts and a code/contract snippet is the single highest-craft pattern on Stripe's site and translates directly to on-chain mechanics.
- **Do:** Lead with a category-leadership/proof claim in the hero plus a time-to-value promise ("integrate in days") the way Connect does.
- **Do:** Place each testimonial immediately after the claim it validates.

### Deep / standalone product
- **Do:** Use a verb-led H1 that names the differentiator (Radar's "strength of the network" → Kamino's equivalent moat: liquidity depth, oracle design, audited risk engine). Quantify in the subhead's first breath.
- **Do:** Present integration/option choices as a side-by-side comparison with transparent economics, the way Checkout shows four integration paths and real pricing. For Kamino, expose real fees/rates rather than hiding them.
- **Do:** For a technical-buyer product, network-scale numbers can replace quotes as proof (Radar carries logos, no quotes). Kamino's on-chain metrics can play this role.

### Solutions by segment (institutions vs individuals/developers)
- **Do:** Recombine the same products into 3-4 outcome clusters per audience. Institutions page: lead with peer-named ambition headline, make "Talk to us / Contact" the dominant CTA, demote self-serve, and prove the *relationship* (support, SLAs, dedicated coverage) the way Enterprise proves TAM support.
- **Do:** Individuals/retail page: use a journey headline (Stripe's "Start. Scale. Grow.") and keep self-serve "Start" prominent.
- **Deviate:** Kamino's institutional buyer cares about counterparty risk, custody, audits, regulatory posture, and compliance far more than Stripe's enterprise buyer needs surfaced. The institutions page must elevate audits, security history, legal/regulatory framing, and risk controls to first-class sections — these belong above the fold-region of the buyer journey, not in the footer.

### Solution by use-case
- **Do:** Sell one job-to-be-done with the exact product bundle that does it, plus a "how it works" section to defuse perceived complexity. Prove with deeper, fewer case studies (4 detailed) rather than a logo wall.
- **Do:** Cross-link adjacent use-cases so related jobs are one click away.

### Proof hub
- **Do:** Build a filterable customers/proof hub on three axes (by who / by use-case / by product). Make every card metric-first and tag it with the products used, linking back to product pages so proof routes back into the funnel.
- **Deviate:** Where named-customer quotes are limited, make the proof hub partly an *on-chain proof / transparency hub*: audits, security reviews, live protocol metrics, third-party risk dashboards. This is the capital-markets-native equivalent of Stripe's logo-and-quote wall and is more credible to a sophisticated allocator than testimonials.

### Developer entry
- **Do:** Offer three parallel on-ramps (by outcome / by getting-started step / by product) and keep the developer-side product taxonomy identical to the marketing-site product names, so a buyer crossing from marketing to docs sees the same vocabulary. Keep the voice terse and imperative.

### Site-wide
- **Do:** Standardize one CTA pair and role-split it by page (self-serve "Start" on product/retail pages; "Talk to us / Contact" dominant on institutional pages). Close every page with a repeated-CTA block and a deep, well-mapped footer.
- **Do:** Quantify everything, date every number, name the basis.
- **Deviate from Stripe's freedom to omit risk:** every Kamino page that makes a yield/return/credit claim must pair it with a plainly worded risk explanation in the same visual region. Stripe never has to do this; Kamino always does, and doing it well is itself a craft and trust differentiator.
