# Kamino Landing Website Context

> A new landing website that serves as both a consumer product showcase and a B2B sales tool for institutions, asset issuers, and fintechs.

## Last Updated
2026-01-21

---

## Executive Summary

Kamino is rebuilding its public-facing website to serve two distinct audiences:

1. **Consumers** - Users who want to earn yield, borrow, and access DeFi products
2. **Institutions/B2B** - Asset issuers, fintechs, and institutional partners who want to integrate Kamino infrastructure

The website will function like Coinbase: non-users see the landing page and product pages, while existing users (with connected wallets/cookies) go directly to the webapp.

This represents a strategic shift from a purely product-focused marketing site to a **dual-purpose platform** that can close institutional deals while also converting retail users.

---

## 1. The Users

### User Type A: Consumer (Retail DeFi User)

**Who specifically:**
- Crypto-native users with assets on Solana (SOL, stablecoins, LSTs)
- Range from DeFi beginners to experienced yield farmers
- May be coming from TradFi seeking better USD yields
- Often discovered Kamino through Solana ecosystem, CT, or word-of-mouth

**What they care about:**
- Yield/APY (the number)
- Safety and security ("is this going to get hacked?")
- Simplicity ("can I just deposit and forget?")
- Legitimacy signals (audits, TVL, time in production)

**What makes them give up:**
- Complexity or too many choices
- Unclear risk profiles
- Poor mobile experience
- No clear path to action

**What makes them pay attention:**
- Competitive APY numbers with proof
- Comparison to TradFi alternatives
- Social proof from known entities
- One-click simplicity

**Current workflow:**
- Compare yields across protocols
- Check Twitter/Discord for sentiment
- Look for audit reports
- Deposit and monitor positions

---

### User Type B: Institution / Asset Issuer / Fintech

**Who specifically:**
- **Asset Issuers:** RWA tokenizers wanting distribution and liquidity (treasury bills, private credit, real estate tokens)
- **Fintechs:** Consumer apps wanting to offer yield to their users without building DeFi infrastructure
- **Institutional Treasuries:** Companies wanting to deploy treasury into DeFi yield
- **Crypto Funds:** Looking for infrastructure to execute strategies at scale

**What they care about:**
- Regulatory posture and compliance pathway
- Infrastructure reliability and uptime
- API quality and integration simplicity
- Customization (white-label, permissioned markets)
- Risk management and audit trail

**What makes them give up:**
- Having to "figure it out" themselves
- No clear point of contact
- Unclear compliance story
- No evidence of enterprise-grade infrastructure

**What makes them pay attention:**
- Existing institutional partnerships
- RWA focus and infrastructure
- Clear integration pathways
- Volume of assets already on platform
- Specific use cases that match their needs

**Their journey today:**
- Research DeFi protocols for integration
- Evaluate technical documentation
- Need to justify choice to compliance/legal
- Want to speak to someone (not just self-serve)

---

## 2. The Problem

### For Consumers

> "I see all these DeFi protocols promising yields but I don't know which ones are safe. I just want to park my USDC somewhere that beats my savings account without having to become a DeFi expert."

> "Kamino has too many options. What's the difference between all these vaults? Just tell me where to put my money."

**When this pain occurs:**
- First visit to the site
- Comparing Kamino to competitors
- Trying to decide between products

### For Institutions

> "We want to offer yield to our users but building DeFi infrastructure is not our core competency. We need a partner, not just a protocol."

> "How do we launch our tokenized treasury bills on Solana and get them into lending markets with real demand?"

> "Our compliance team needs to understand the risk framework before we can integrate."

**When this pain occurs:**
- Evaluating DeFi partners
- Presenting to internal stakeholders
- Trying to find the right integration approach

---

## 3. Website Behavior Model

### The Coinbase Pattern

```
First-time visitor → kamino.com
                        ↓
                   Landing Website
                   (marketing pages, product info, institutional pages)
                        ↓
                   [Launch App] or [Connect Wallet]
                        ↓
                   Webapp (app.kamino.com or kamino.com/app)

Returning user with session → kamino.com
                        ↓
                   Direct to Webapp
                   (skip landing, go straight to product)
```

### Detection Logic
- Cookie/localStorage for returning users
- Connected wallet detection
- "Always show landing" toggle in settings for users who want marketing info

---

## 4. Information Architecture

### Primary Navigation (Landing Site)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  [Kamino Logo]                                                              │
│                                                                             │
│  Products ▾    Solutions ▾    Developers    Company ▾    [Launch App]      │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

### Sitemap

```
kamino.com/
│
├── /                           # Landing page (dual-audience hero)
│
├── PRODUCTS (Consumer-focused)
│   ├── /earn                   # Earn overview (vaults, yield products)
│   ├── /borrow                 # Borrow overview
│   ├── /multiply               # Leverage/Multiply products
│   ├── /swap                   # Trading/swap
│   └── /assets                 # RWA discovery & asset pages
│
├── SOLUTIONS (B2B-focused)
│   ├── /institutions           # Institutional overview
│   ├── /asset-issuers          # For RWA/token issuers
│   ├── /fintechs               # For fintech integrators
│   └── /enterprise             # Enterprise/treasury solutions
│
├── DEVELOPERS
│   ├── /developers             # Developer hub overview
│   ├── /docs                   # → docs.kamino.finance
│   ├── /api                    # API reference
│   └── /integrate              # Integration guides
│
├── COMPANY
│   ├── /about                  # About Kamino
│   ├── /security               # Security overview + audits
│   ├── /blog                   # → blog.kamino.finance
│   └── /careers                # Jobs
│
└── /app                        # → Webapp redirect
```

---

## 5. Page-by-Page Specifications

### LANDING PAGE (/)

The landing page must serve both audiences with a clear path for each.

#### Hero Section

**Headline options (test):**
- "Institutional-Grade DeFi for Everyone"
- "The Financial Infrastructure Layer for Solana"
- "Earn, Borrow, Build on Solana's Leading DeFi Protocol"

**Subheadline:**
"$5B+ in assets. 17+ markets. Trusted by the world's leading institutions and fintechs."

**Dual CTA:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│        [ Start Earning ]     [ For Institutions → ]            │
│           (primary)              (secondary)                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 2: Borrow Capacity (from brief)

**Purpose:** Showcase USDC borrow product with accepted collateral

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   BORROW AGAINST YOUR CRYPTO                                   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │                                                          │ │
│   │  Up to $XXX,XXX                                         │ │
│   │  Available to borrow in USDC                            │ │
│   │                                                          │ │
│   │  Accepted Collateral:                                    │ │
│   │  [SOL] [cbBTC] [xBTC] [JitoSOL] [+12 more]              │ │
│   │                                                          │ │
│   │                    [ Borrow Now ]                        │ │
│   │                                                          │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
│   $16B          132K           18+                             │
│   Total         Active         Collateral                      │
│   Borrowed      Loans          Assets                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 3: Yield Performance (from brief)

**Purpose:** Prove Kamino yields beat TradFi and DeFi alternatives

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   CONSISTENT USD YIELDS THAT OUTPERFORM                        │
│   Kamino's stablecoin products consistently outperform         │
│   USD products across DeFi and TradFi                          │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │                                                          │ │
│   │   5.44% 180D Avg APY                                    │ │
│   │                                                          │ │
│   │   vs USTs: 3.44% (2.00% lower)                          │ │
│   │   vs DeFi Avg: 4.88% (0.56% lower)                      │ │
│   │                                                          │ │
│   │   [LINE CHART: Kamino vs UST vs DeFi over 180 days]     │ │
│   │                                                          │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
│                    [ Earn on USDC ]                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 4: Security Highlights (from brief)

**Purpose:** Build trust through security credentials

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   BATTLE-TESTED SECURITY                                       │
│                                                                 │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│   │ 3 Years │ │  $16B   │ │ Onchain │ │   18    │ │  $1.5M  │ │
│   │  Live   │ │ Volume  │ │Verified │ │ Audits  │ │ Bounty  │ │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ │
│                                                                 │
│   Audited by:                                                   │
│   [Certora] [OtterSec] [Ackee] [Offside Labs] [Sec3]          │
│                                                                 │
│                    [ View Security Page ]                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 5: Curated Products (from brief)

**Purpose:** Showcase top yield products with clear risk profiles

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   CHOOSE YOUR STRATEGY                                         │
│                                                                 │
│   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│   │                 │ │                 │ │                 │ │
│   │   USDC Prime    │ │ USDC High-Yield │ │ Sentora PYUSD   │ │
│   │                 │ │                 │ │                 │ │
│   │   9.74% APY     │ │   13.32% APY    │ │   11.53% APY    │ │
│   │   (90D Avg)     │ │   (90D Avg)     │ │   (90D Avg)     │ │
│   │                 │ │                 │ │                 │ │
│   │   Conservative  │ │    Balanced     │ │   Conservative  │ │
│   │                 │ │                 │ │                 │ │
│   │   [Deposit →]   │ │   [Deposit →]   │ │   [Deposit →]   │ │
│   │                 │ │                 │ │                 │ │
│   └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│                                                                 │
│   Hover reveals: strategy description and allocation details   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 6: Product Overview (from brief)

**Purpose:** Explain all product capabilities

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   EVERYTHING YOU NEED IN ONE PROTOCOL                          │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │ EARN      │ Generate returns on your assets              │ │
│   ├───────────┼─────────────────────────────────────────────┤ │
│   │ BORROW    │ Borrow against your crypto collateral        │ │
│   ├───────────┼─────────────────────────────────────────────┤ │
│   │ MULTIPLY  │ Boost yields or directional exposure         │ │
│   ├───────────┼─────────────────────────────────────────────┤ │
│   │ SWAP      │ Best prices on Solana, zero fees            │ │
│   └───────────┴─────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 7: Scale & Stats (from brief)

**Purpose:** Demonstrate protocol scale and leadership position

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   WHAT SETS KAMINO APART                                       │
│   Kamino leads the Solana ecosystem in scale and safety        │
│                                                                 │
│   [Horizontal scrolling stats]                                 │
│                                                                 │
│   $5.03B assets deployed across 17+ markets                    │
│   132,141 active loans                                          │
│   $104M interest generated for users                            │
│   7.85% 180D Avg APY on USD stablecoins                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 8: Institutional Integration (NEW - B2B focus)

**Purpose:** Convert institutional/fintech visitors

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   BUILD ON KAMINO                                              │
│   Consumer platforms around the world are integrating          │
│   Kamino to give their users access to institutional-grade     │
│   DeFi infrastructure                                          │
│                                                                 │
│   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│   │                 │ │                 │ │                 │ │
│   │  FOR FINTECHS   │ │  FOR ISSUERS    │ │  FOR ENTERPRISE │ │
│   │                 │ │                 │ │                 │ │
│   │  Integrate      │ │  Launch your    │ │  Treasury       │ │
│   │  yield & borrow │ │  RWA on Solana  │ │  management     │ │
│   │  for your users │ │  with instant   │ │  with DeFi      │ │
│   │                 │ │  liquidity      │ │  yields         │ │
│   │                 │ │                 │ │                 │ │
│   │  [Learn More]   │ │  [Learn More]   │ │  [Learn More]   │ │
│   │                 │ │                 │ │                 │ │
│   └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│                                                                 │
│        [ Integrate Kamino ]        [ Talk to Us ]              │
│           (primary)                 (secondary)                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 9: Social Proof (from brief)

**Purpose:** Testimonials from institutional partners

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   TRUSTED BY INDUSTRY LEADERS                                  │
│                                                                 │
│   [Horizontal carousel of testimonials]                        │
│                                                                 │
│   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.    │
│    Kamino has transformed how we offer yield to our users."    │
│    — [Partner Name], [Company]                                 │
│                                                                 │
│   [Partner logos: to be filled with real partners]            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Section 10: Footer CTA (from brief)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   READY TO GET STARTED?                                        │
│                                                                 │
│   [ Launch App ]        [ Contact Sales ]                      │
│                                                                 │
│   Newsletter signup: [email]  [Subscribe]                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### INSTITUTIONAL PAGE (/institutions)

**Purpose:** Primary B2B landing page for all institutional inquiries

#### Hero

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   INSTITUTIONAL-GRADE DEFI INFRASTRUCTURE                      │
│                                                                 │
│   The most trusted lending and yield protocol on Solana,       │
│   built for institutions, asset issuers, and fintechs.         │
│                                                                 │
│   [ Talk to Our Team ]      [ View Documentation ]             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Why Institutions Choose Kamino

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   WHY INSTITUTIONS CHOOSE KAMINO                               │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │                                                          │ │
│   │  SCALE                                                   │ │
│   │  $5B+ TVL, $16B+ originated, 17+ markets                │ │
│   │                                                          │ │
│   │  SECURITY                                                │ │
│   │  18 audits, $1.5M bug bounty, 3 years battle-tested     │ │
│   │                                                          │ │
│   │  FLEXIBILITY                                             │ │
│   │  Permissioned markets, custom risk parameters,           │ │
│   │  white-label options                                     │ │
│   │                                                          │ │
│   │  RWA INFRASTRUCTURE                                      │ │
│   │  Purpose-built for tokenized real-world assets           │ │
│   │  with integrated compliance pathways                     │ │
│   │                                                          │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Use Cases

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   BUILT FOR YOUR USE CASE                                      │
│                                                                 │
│   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│   │                 │ │                 │ │                 │ │
│   │  ASSET ISSUERS  │ │    FINTECHS     │ │   TREASURIES    │ │
│   │                 │ │                 │ │                 │ │
│   │  Launch tokens  │ │  Embed yield &  │ │  Earn yield on  │ │
│   │  with instant   │ │  borrow into    │ │  corporate      │ │
│   │  DeFi utility   │ │  your product   │ │  stablecoin     │ │
│   │                 │ │                 │ │  holdings       │ │
│   │  [Learn More →] │ │  [Learn More →] │ │  [Learn More →] │ │
│   │                 │ │                 │ │                 │ │
│   └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Integration Options

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   FLEXIBLE INTEGRATION OPTIONS                                 │
│                                                                 │
│   API Integration                                              │
│   Full programmatic access to all Kamino functionality         │
│                                                                 │
│   SDK & Libraries                                              │
│   TypeScript, Python, Rust SDKs for rapid integration          │
│                                                                 │
│   White-Label                                                  │
│   Custom-branded yield products for your users                 │
│                                                                 │
│   Permissioned Markets                                         │
│   KYC-gated markets for regulated assets                       │
│                                                                 │
│   [ View Developer Docs ]      [ Request Demo ]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ASSET ISSUERS PAGE (/asset-issuers)

**Purpose:** Convert RWA token issuers to launch on Kamino

#### Hero

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   LAUNCH YOUR TOKENIZED ASSETS ON SOLANA                       │
│                                                                 │
│   Kamino provides the infrastructure for RWA issuers to        │
│   bring real-world assets onchain with instant DeFi utility.   │
│                                                                 │
│   • Treasury bills & money markets                             │
│   • Private credit                                              │
│   • Real estate                                                 │
│   • Commodities                                                 │
│                                                                 │
│   [ Talk to Our RWA Team ]                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### What Issuers Get

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   WHAT YOU GET AS AN ISSUER                                    │
│                                                                 │
│   INSTANT COLLATERAL STATUS                                    │
│   Your token becomes borrowable collateral in Kamino markets   │
│                                                                 │
│   LENDING MARKET INTEGRATION                                   │
│   Users can lend against your asset, creating organic demand   │
│                                                                 │
│   LIQUIDITY BOOTSTRAPPING                                      │
│   Access to Kamino's LP infrastructure and user base           │
│                                                                 │
│   PERMISSIONED OPTIONS                                         │
│   KYC-gated markets for regulatory compliance                  │
│                                                                 │
│   ANALYTICS & REPORTING                                        │
│   Full visibility into how your asset is being used            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Current RWAs on Kamino

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   RWAs LIVE ON KAMINO                                          │
│                                                                 │
│   [Showcase of current RWA integrations with logos]            │
│   - Private Credit products                                     │
│   - Tokenized treasuries                                        │
│   - etc.                                                        │
│                                                                 │
│   [ View Assets Page ]                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### FINTECHS PAGE (/fintechs)

**Purpose:** Convert fintech apps to integrate Kamino as backend

#### Hero

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   GIVE YOUR USERS ACCESS TO DEFI YIELD                         │
│   WITHOUT BUILDING DEFI INFRASTRUCTURE                         │
│                                                                 │
│   Kamino powers yield and borrowing for consumer apps          │
│   around the world. Focus on your product — we handle the      │
│   DeFi complexity.                                             │
│                                                                 │
│   [ Integrate Kamino ]      [ View API Docs ]                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### What Fintechs Get

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   WHAT YOU CAN BUILD                                           │
│                                                                 │
│   YIELD FOR YOUR USERS                                         │
│   Let users earn 5-15% APY on stablecoins through your app     │
│                                                                 │
│   CRYPTO-BACKED LOANS                                          │
│   Offer instant loans against crypto collateral                │
│                                                                 │
│   AUTOMATED STRATEGIES                                         │
│   Give users access to managed yield strategies                │
│                                                                 │
│   TRADING                                                      │
│   Best-execution swaps across Solana DEXs                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Integration Benefits

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   WHY BUILD ON KAMINO                                          │
│                                                                 │
│   ✓ Battle-tested: 3 years, $16B volume, 18 audits            │
│   ✓ Simple APIs: Get started in hours, not months              │
│   ✓ Compliance-ready: KYC integration, permissioned options    │
│   ✓ Support: Dedicated integration support team                │
│   ✓ Economics: Competitive revenue share models                │
│                                                                 │
│   [ Schedule Integration Call ]                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### SECURITY PAGE (/security)

**Purpose:** Comprehensive security information for both audiences

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   SECURITY AT KAMINO                                           │
│                                                                 │
│   Security isn't a feature — it's the foundation.              │
│   Every line of code is written with security first.           │
│                                                                 │
│   ─────────────────────────────────────────────────────────── │
│                                                                 │
│   AUDIT HISTORY                                                │
│                                                                 │
│   18 independent security audits by:                           │
│   [Certora] [OtterSec] [Ackee] [Offside Labs] [Sec3]          │
│                                                                 │
│   [View All Audit Reports on GitHub]                           │
│                                                                 │
│   ─────────────────────────────────────────────────────────── │
│                                                                 │
│   BUG BOUNTY PROGRAM                                           │
│                                                                 │
│   $1.5M maximum bounty through Immunefi                        │
│   [View Bug Bounty Details]                                    │
│                                                                 │
│   ─────────────────────────────────────────────────────────── │
│                                                                 │
│   TRACK RECORD                                                 │
│                                                                 │
│   • 3 years in production                                      │
│   • $16B+ in loan volume processed                             │
│   • Zero protocol exploits                                     │
│   • 100% on-chain verifiable                                   │
│                                                                 │
│   ─────────────────────────────────────────────────────────── │
│                                                                 │
│   RISK MANAGEMENT                                              │
│                                                                 │
│   • Isolated markets limit contagion risk                      │
│   • Conservative collateral factors                            │
│   • Real-time liquidation engine                               │
│   • Oracle redundancy                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. What's Different from the Original Brief

| Original Brief | New Direction |
|----------------|---------------|
| Product-heavy, feature-focused | Dual-audience with B2B sales focus |
| Single hero for consumers | Dual CTA serving both audiences |
| No institutional content | Full Solutions section for institutions |
| No RWA narrative | RWA infrastructure as key differentiator |
| No integration/fintech focus | Dedicated fintech integration pages |
| Just "Contact Us" | Structured B2B conversion funnel |

---

## 7. Constraints

### Technical
- Must detect returning users and route to webapp
- Must work with existing webapp codebase
- Should use existing design system tokens where possible
- SEO-optimized for both consumer and B2B search terms

### Business
- Landing site should not cannibalize webapp engagement
- B2B conversion forms need proper CRM integration
- Must support multiple languages eventually

### Design
- Maintain Kamino brand identity
- Must work on mobile (significant traffic)
- Should feel "institutional" without losing consumer appeal
- Charts and data need to be real-time or clearly dated

### The constraints that will actually change what gets built:
1. **Dual-audience clarity** — Every page must have clear paths for both user types
2. **B2B conversion infrastructure** — Contact forms, calendly integration, CRM

---

## 8. Success Metrics

**How we'll know it worked:**

### Consumer Metrics
- [ ] Increase in new user signups from landing page
- [ ] Decrease in bounce rate vs current site
- [ ] Increase in TVL attributed to landing page traffic
- [ ] Time-to-first-deposit for new users

### B2B Metrics
- [ ] Number of qualified institutional leads per month
- [ ] Conversion rate from landing → contact form
- [ ] Number of integration inquiries
- [ ] Asset issuer pipeline growth

**"Good enough to ship" looks like:**
- Landing page with dual-audience hero and CTAs
- Security page complete
- At least one B2B page (/institutions) live
- Returning user detection working

**"10/10 success" looks like:**
- Full sitemap implemented
- Real-time yield data integrated
- B2B leads flowing to sales team
- Asset issuer applications coming in
- Measurable lift in both retail signups and institutional conversations

---

## 9. Open Questions

- [ ] What's the technical approach for user detection? (cookies, wallet, etc.)
- [ ] Should webapp be at app.kamino.com or kamino.com/app?
- [ ] What CRM/sales tools need integration for B2B leads?
- [ ] Which current institutional partners can we feature as logos/testimonials?
- [ ] What's the compliance review process for B2B claims?
- [ ] How do we handle users in restricted regions?

---

## 10. Related Resources

- [Navigation Redesign Context](/context/navigation-redesign.md)
- [Kamino.com User Journey Map](/webapp-mapping/kamino-com-user-journey-map.md)
- [Kamino App User Journey Map](/webapp-mapping/kamino-user-journey-map.md)
- Audits: https://github.com/Kamino-Finance/audits
- Bug Bounty: https://immunefi.com/bug-bounty/kamino/information/
