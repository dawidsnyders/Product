# PRIME on Kamino — Product Page Specification

**Status:** Draft — Awaiting Approval
**Date:** 2026-02-20
**Author:** Claude (from interview with Dawid)

---

## 1. Overview

A world-class, standalone product page for PRIME on Kamino — targeting institutional investors. The page transforms the existing investor deck into a cinematic, scroll-driven web experience with motion.dev animations, interactive data visualizations, and progressive disclosure of the full PRIME story.

**Think:** Linear's product pages meets Stripe's polish meets the information density of a Bloomberg terminal — but for a DeFi RWA product.

---

## 2. Audience & Goal

| | |
|---|---|
| **Primary audience** | Institutional investors — funds, family offices, large allocators doing due diligence on PRIME |
| **Primary CTA** | Contact / inquire (form, email, or Telegram to Cheryl Chan / Kamino Strategy team) |
| **Secondary CTA** | Download materials (deck PDF, product explainer, DD pack) where contextually relevant |
| **Tertiary CTA** | Link to Kamino to start using PRIME (for investors ready to act) |
| **Distribution** | Standalone site (own domain/subdomain, e.g. prime.kamino.finance) |
| **Success metric** | Investor contacts the team after viewing the page |

---

## 3. Brand & Design System

### Foundation (from the deck)
- **Font:** Aeonik (Light, Regular, Medium, Bold, Black) — already available as woff2 files
- **Primary colors:** Black (#000), White (#FFF), Ice-blue (#C8F0F0)
- **Iconography:** Kamino's stacked dot-grid/bar pattern system

### Evolution for web
- Slightly richer palette: introduce a very subtle warm gray (#F7F7F5) for alternating section backgrounds instead of pure white
- Deeper ice-blue variants for hover/active states (#A8E0E0, #88D0D0)
- Subtle gradient overlays on hero photography
- More generous whitespace than the deck — let content breathe
- Micro-interactions on hover for cards, stats, and buttons
- Dark section(s) for dramatic contrast moments (e.g., capital preservation section, final CTA)

### Imagery Strategy
- **Mostly abstract/minimal** — pure typography, shapes, data, motion
- **Strategic photography** in 1-2 moments: hero section (aerial suburban homes with Kamino dot-pattern overlay, similar to deck cover) and optionally the Figure section
- Kamino dot-grid patterns used as decorative elements throughout

---

## 4. Technical Architecture

| | |
|---|---|
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **Animations** | motion.dev (Motion for React) |
| **Charts** | Lightweight charting (recharts or custom SVG with motion) |
| **Typography** | Self-hosted Aeonik woff2 |
| **Data** | Static/hardcoded, but structured in a data file for easy swap to API later |
| **Deployment** | Vercel-ready |

### Data Architecture
All numbers stored in a central `data/prime-stats.ts` file:
```ts
export const primeStats = {
  apy: "~8%",
  marketCap: "$300M",
  ficoScore: "744+",
  warehouseDays: "~42",
  delinquencyPeak: "<1.75%",
  riskRating: "7.1/10",
  kaminoMarketSize: "$550M",
  totalBorrowed: "$230M",
  activeLoans: "3,219",
  badDebt: "Zero",
  // ... etc
}
```
This makes it trivial to swap to live API data later.

---

## 5. Page Structure & Sections

The page is a single, continuous scroll experience — **no navigation bar**. It reads like a cinematic story from top to bottom, with each section flowing organically into the next.

### Section 1: Hero
**Purpose:** Immediate hook — establish what PRIME is in one powerful moment.

- Full-viewport hero
- Background: Aerial suburban homes photograph with Kamino dot-pattern overlay + subtle dark gradient
- Large headline: **"Institutional-grade HELOC yield, amplified on-chain."** (Aeonik Black, massive)
- Subheadline: Brief one-liner expanding the concept
- Kamino logo mark in corner
- Subtle scroll indicator at bottom
- Key stats floating in from sides on load: ~8% APY | $300M Market Cap | 744+ FICO
- Motion: Headline types/fades in, background has subtle parallax, stats animate in with stagger

### Section 2: What is PRIME (Overview)
**Purpose:** The 30-second elevator pitch with three value columns.

- Section headline: **"Real yield. Established track record."** (matching deck)
- Three-column layout (from deck slide 3):
  - **What is PRIME?** — Yield-bearing token backed by short-term US HELOC warehouse lending
  - **How does the yield work?** — T-bill base + warehouse spread during ~42-day hold
  - **Why Kamino?** — Multiply amplifies to 11-21% APY, fastest-growing RWA in DeFi
- Kamino stacked icon decorating the section
- Motion: Cards fade up with stagger as section enters viewport

### Section 3: PRIME at a Glance (Key Stats)
**Purpose:** The "wow" numbers — animated counters that build credibility instantly.

- 6-stat grid (matching deck slide 4):
  - ~8% Underlying APY
  - $300M Market cap on Solana
  - 744+ Weighted average FICO
  - ~42 Days average warehouse hold
  - <1.75% Peak severe delinquency
  - 7.1/10 Independent risk rating (A)
- Motion: Numbers count up from 0 as they enter viewport (countUp animation)
- Ice-blue card backgrounds

### Section 4: How PRIME Works (Animated Flow)
**Purpose:** The critical "how" — makes the abstract warehouse lending concept tangible.

- Section headline: **"How PRIME Works"**
- **Scroll-triggered animated flow diagram:**
  - As user scrolls, each step builds on screen one at a time:
    1. Figure → US Borrowers (origination)
    2. Licensed Originators → Warehouse Facility (collateral posting)
    3. Solana DeFi Users → PRIME Token (capital provision)
    4. Warehouse → AAA Securitization (exit, ~42 days)
    5. Yield flows to Solana via Chainlink CCIP
  - Each step has a numbered callout with explanation text (matching deck slide 5)
  - Connection lines animate between nodes
  - Nodes light up as each step activates
- Left side: Step descriptions (text)
- Right side: The visual flow diagram
- Motion: Scroll-linked animation — diagram builds as user progresses through section

### Section 5: Figure — The Sponsor
**Purpose:** Establish the institutional credibility of the originator.

- Section headline: **"Figure Technology Solutions"**
- Subheadline: "Nasdaq: FIGR — Largest non-bank HELOC originator in the US"
- Optional: Subtle Figure corporate photography or logo treatment
- Key financial stats (animated counters):
  - $505M+ FY2025 Revenue
  - $132M FY2025 Net Income
  - $1.1B Cash Position
  - $22B+ Total Originated
- 7-Year Track Record timeline:
  - 2020-2021 (COVID) → <2% delinquencies, no losses
  - 2022-2023 (Rate hikes) → Zero capital losses
  - 2023 (Banking crisis) → Maintained access
  - H2 2025 → $946M AAA securitizations
  - FY2025 → $8.4B volume (+63% YoY)
- Motion: Stats count up, timeline items fade in sequentially

### Section 6: Collateral Quality
**Purpose:** Show the borrower profile and why this is "prime" quality.

- Section headline: **"Collateral Quality"**
- Left side: Large typography treatment of headline
- Right side: Borrower Profile data table (from deck slide 7):
  - FICO 744-754
  - Home Value $709,085
  - Income $182K-$195K
  - Combined LTV 62-65%
  - DTI 36.6%
  - Coupon 9.0-9.2%
  - Loan Size ~$90,000
  - Fixed-rate, fully amortizing
- Contextual note: "744+ FICO = ~60th percentile of US credit scores"
- Motion: Table rows slide in with stagger

### Section 7: Credit Performance (Interactive Chart)
**Purpose:** The proof — visual evidence of through-cycle performance.

- Section headline: **"Credit Performance"**
- Subheadline: "Figure HELOC MoB Performance (180+DQ by Yearly Vintage)"
- **Interactive vintage curve chart:**
  - Lines animate in one vintage at a time as chart enters viewport
  - Each vintage (2019-2025) in a different color
  - Hover/click on a vintage to highlight it and see details
  - Annotation: "Peak below 1.75% across all vintages"
  - Y-axis: 0% to 2%
  - Clear legend with year colors
- Right-side or below: "Historical Loss Performance" text box with key observations
- Motion: Lines draw themselves sequentially, grid fades in, annotations appear

### Section 8: Capital Preservation (Safety Architecture)
**Purpose:** Address the "but is it safe?" question. Dark section for dramatic contrast.

- **Dark background section** (black or very dark gray) for visual drama
- Section headline: **"Built for capital preservation."** (white text)
- Subheadline about AAA ratings from S&P, Moody's, DBRS, KBRA
- Four protection cards (from deck slide 9):
  1. Overcollateralization & Auto-Markdown
  2. SEC 1940 Act Registration
  3. Qualified Custody (UMB Bank)
  4. Short Duration (~42 Days)
- Each card has an icon, title, and description
- Motion: Cards reveal with stagger, icons have subtle pulse animation

### Section 9: PRIME on Kamino (Growth)
**Purpose:** Show the explosive growth and market validation.

- Section headline: **"PRIME on Kamino"**
- Animated counter stats:
  - $550M PRIME on Kamino (Feb 2026)
  - $230M Total Borrowed
  - 3,219 Active Loans
  - Zero Bad Debt
- **Animated area chart** below:
  - Deposits (black/dark) and Borrows (ice-blue) stacked area
  - X-axis: Dec 2025 → Feb 2026
  - Chart fills in from left to right as it enters viewport
  - "PRIME is now the largest RWA actively deployed in DeFi" annotation
- Note about zero incentives driving growth
- Motion: Counters count up, area chart draws from left to right

### Section 10: Risk-Adjusted Opportunities (Tranche Structure)
**Purpose:** Explain the different risk/return profiles available.

- Section headline: **"Risk-Adjusted Opportunities"**
- Tranche structure explanation
- Three-row table/card layout:
  - Multiply (Junior) → First loss → 11-23% APY
  - Stablecoin Lenders (Senior) → Protected by loopers → 5-5.5% APY
  - PRIME Holders (Base) → Direct exposure → ~8% APY
- Visual hierarchy showing the tranche layers

### Section 11: PRIME Multiply (Interactive Calculator)
**Purpose:** Let investors explore the yield amplification mechanics.

- Section headline: **"PRIME Multiply"**
- Explanation of positive carry mechanics
- **Interactive leverage calculator:**
  - Slider from 1x to 9x leverage
  - As slider moves, yield updates in real-time
  - Shows: Base yield, borrow cost, net yield, effective APY
  - Visual bar chart that grows/shrinks with the slider
  - Key data points labeled: 1x = ~8%, 3x = 12.45%, 5x = 16.64%, 8x = 23.14%
- "How it Works" steps:
  1. Deposit PRIME as collateral (~8% base yield)
  2. Borrow stablecoins (paying ~5-7%)
  3. Buy more PRIME
  4. Repeat — up to 9x in a single transaction
- Safeguards section: utilization cap, LTV buffer, verified performance
- Motion: Calculator is interactive (not scroll-driven), bars animate on slider change

### Section 12: Multiply Performance (Chart)
**Purpose:** Show the actual performance data.

- Section headline: **"PRIME Multiply Performance"**
- **Animated multi-line chart:**
  - PRIME 1x (8% APY) — blue
  - Multiply 3x (12.45%) — red
  - Multiply 5x (16.64%) — green
  - Multiply 8x (23.14%) — orange
  - Lines draw sequentially as chart enters viewport
- X-axis: Dec 2025 → Feb 2026
- Disclaimer: Past performance note

### Section 13: Battle-Tested. Transparent. Trusted.
**Purpose:** Social proof and trust signals.

- Section headline: **"Battle-tested. Transparent. Trusted."**
- Description of Kamino's infrastructure credentials
- **Prominent partner/trust logo section:**
  - Bybit, OKX, Bitget, Anchorage Digital, PayPal, Figure, Paxos
  - Logos in grayscale that subtly animate to color on hover
- Stats grid:
  - $17B+ Loans Originated
  - 18 Audits
  - 3 Formal Verifications
  - Zero Bad Debt
- Motion: Logos fade in with stagger, stats count up

### Section 14: Get in Touch (CTA)
**Purpose:** Convert — the investor takes action.

- **Full-viewport section**, potentially dark or with a dramatic background
- Large headline: **"Get in Touch"**
- Contact information:
  - Cheryl Chan, Head of Strategy, Kamino Finance
  - Email: cheryl@kamino-foundation.com
  - Phone: +6592982416
- Contact form or prominent "Email Us" / "Schedule a Call" button
- **Secondary CTAs:**
  - Download Deck (PDF)
  - Download Product Explainer
  - View on Kamino →
- Motion: Elements fade in elegantly

### Section 15: Footer / Disclaimer
**Purpose:** Legal compliance.

- Dark background
- Disclaimer text (matching deck slide 17)
- Kamino logo
- Copyright

---

## 6. Animation & Motion Strategy

### Philosophy
Motion should serve comprehension, not decoration. Every animation helps the investor understand the story better or creates a moment of delight that reinforces trust and polish.

### Technical Implementation
- **motion.dev** (Motion for React) for all animations
- **Scroll-triggered reveals:** `whileInView` with `viewport={{ once: true }}` for most sections
- **Scroll-linked animations:** `useScroll` + `useTransform` for the How It Works flow diagram and parallax effects
- **Number counters:** Custom hook using motion's `animate` function to count numbers up
- **Chart animations:** SVG path animation with `pathLength` for line charts, clip-path reveal for area charts
- **Stagger children:** `staggerChildren` variants for card grids and table rows
- **Hover states:** `whileHover` with subtle scale/shadow transforms on interactive elements

### Performance
- All animations GPU-accelerated (transform/opacity only)
- `viewport={{ once: true }}` to prevent re-triggering
- Lazy load below-the-fold sections
- Preload Aeonik font files

---

## 7. Responsive Behavior

The primary target is **desktop** (institutional investors use desktop). However, the page should gracefully adapt:

| Breakpoint | Treatment |
|---|---|
| **1280px+** | Full experience — all animations, multi-column layouts |
| **768px-1279px** | Tablet — simplified layouts, reduced motion where needed |
| **<768px** | Mobile — single column, simplified charts (static fallbacks), core content preserved |

---

## 8. Data File Structure

```
data/
  prime-stats.ts        # All hardcoded numbers
  vintage-data.ts       # Credit performance chart data (yearly vintage curves)
  growth-data.ts        # Kamino market growth data (deposits/borrows over time)
  multiply-data.ts      # Leverage yield calculator data points
  partners.ts           # Partner logos and names
```

All data isolated so swapping to API calls later requires zero component changes.

---

## 9. File Structure

```
prime-product-page/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── StatsGlance.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FigureSponsor.tsx
│   │   ├── CollateralQuality.tsx
│   │   ├── CreditPerformance.tsx
│   │   ├── CapitalPreservation.tsx
│   │   ├── PrimeOnKamino.tsx
│   │   ├── RiskAdjusted.tsx
│   │   ├── PrimeMultiply.tsx
│   │   ├── MultiplyPerformance.tsx
│   │   ├── TrustLogos.tsx
│   │   ├── GetInTouch.tsx
│   │   └── Footer.tsx
│   ├── charts/
│   │   ├── VintageChart.tsx
│   │   ├── GrowthChart.tsx
│   │   ├── MultiplyChart.tsx
│   │   └── LeverageCalculator.tsx
│   ├── ui/
│   │   ├── AnimatedCounter.tsx
│   │   ├── StatCard.tsx
│   │   ├── SectionHeadline.tsx
│   │   └── ScrollReveal.tsx
│   └── icons/
│       └── KaminoIcon.tsx
├── data/
│   ├── prime-stats.ts
│   ├── vintage-data.ts
│   ├── growth-data.ts
│   ├── multiply-data.ts
│   └── partners.ts
├── fonts/
│   ├── aeonik-light.woff2
│   ├── aeonik-regular.woff2
│   ├── aeonik-medium.woff2
│   ├── aeonik-bold.woff2
│   └── aeonik-black.woff2
├── public/
│   ├── hero-bg.jpg          # Aerial homes photo (from deck or similar)
│   └── prime-deck.pdf       # Downloadable deck
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 10. Key Design Decisions

1. **No navigation bar** — pure cinematic scroll, like an Apple product page
2. **Dark section for safety/capital preservation** — creates dramatic contrast and emphasizes trust
3. **Interactive charts over static images** — institutional investors want to explore data, not just look at it
4. **Progressive disclosure** — full content coverage but layered so it never feels overwhelming
5. **Contact as primary CTA, not "buy"** — matches institutional sales process
6. **Static data in isolated files** — designed for eventual API swap without component changes
7. **Aeonik throughout** — brand consistency with the deck
8. **motion.dev for all animation** — single animation library, no GSAP/Framer Motion mix

---

## 11. Out of Scope (V1)

- Live API data integration
- User authentication / gated content
- Blog or news section
- Multi-language support
- A/B testing infrastructure
- CMS integration
- Analytics (can be added trivially later)

---

## 12. Reference Materials

- Investor deck: `prime-heloc/deck/PRIME on Kamino.pdf`
- Product explainer: `prime-heloc/prime-product-explainer.md`
- On Chain Times articles: `prime-heloc/the-leverage-ladder.md`, `prime-heloc/what-the-heloc.md`
- Existing HTML deck: `prime-heloc/deck/prime-deck.html`
- Aeonik fonts: `prime-heloc/deck/fonts/`
- Brand assets: Kamino dot-grid iconography from deck
