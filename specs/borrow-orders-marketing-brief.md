# Borrow Orders — Marketing Brief

**Feature:** Borrow Orders
**Product:** Kamino Finance
**Initial Market:** Prime
**Date:** 2026-02-16
**Audience:** Head of Marketing + Content Team

---

## 1. What Are We Launching?

Borrow Orders — a new order type that lets users queue borrows in advance. Instead of racing to grab liquidity the moment it appears, users place a standing order that fills automatically as supply becomes available. Think of it as a limit order, but for borrowing.

Launching first in the **Prime market** with PRIME as collateral and USDC as the borrow asset.

---

## 2. Why This Matters

### The Problem (Lead With This)

In high-demand markets, borrowing on DeFi is broken. When supply is scarce, getting a borrow means:

- **Refreshing the page** hoping liquidity appears
- **Watching Discord/Telegram** for supply announcements, then rushing to transact
- **Writing bots** to front-run other borrowers
- **Losing out** to faster, more technical users every time

This isn't lending. This is a lottery. And it excludes the vast majority of users from accessing capital efficiently.

### The Finance Parallel

In traditional credit markets, this problem was solved decades ago. Corporate borrowers don't sit by the phone waiting for a bank to have funds available. They place orders — requests for credit at specified terms — and those orders are filled as capital is allocated. This is standard in:

- **Revolving credit facilities** — draw requests are queued and filled as the facility has capacity
- **Bond markets** — orders are placed and filled as the book builds
- **RFQ (Request for Quote) systems** — borrowers broadcast their intent, lenders fill as they can

DeFi lending has been missing this primitive. Borrow Orders bring this to on-chain lending for the first time.

### The Kamino Angle

Kamino is the first lending protocol to introduce standing borrow orders. This positions Kamino as:

- **Infrastructure-grade lending** — not just a UI on top of a pool, but a sophisticated capital allocation system
- **The protocol that solves real user problems** — not just shipping features, but removing actual friction from borrowing
- **The bridge between TradFi and DeFi** — bringing proven financial primitives on-chain

---

## 3. Key Messaging

### Primary Message
> **Stop racing. Start ordering.**
> Place a borrow order, set your terms, and your position fills automatically as liquidity becomes available. No bots. No refreshing. No luck required.

### Supporting Messages

**For borrowers:**
> "Your borrow order costs nothing to place. No interest accrues until your order fills. Set it, forget it, and let the liquidity come to you."

**For the market:**
> "Borrow Orders are DeFi's first standing order system for lending. Kamino is bringing institutional-grade capital allocation to on-chain borrowing."

**For supply-constrained markets:**
> "Prime market demand exceeds supply. Instead of making borrowers fight for scraps, Borrow Orders queue demand intelligently and fill it fairly as supply grows."

### Positioning Line
> Kamino Borrow Orders: Limit orders, but for lending.

---

## 4. Feature Highlights (For Content)

| Feature | Why It Matters | How to Frame |
|---|---|---|
| **Partial fills** | Orders don't need to fill all at once — they build incrementally | "Your position builds as the market grows. A $300K order might fill $50K at a time — each fill goes straight to your wallet." |
| **No interest until fill** | Zero cost to have an open order | "Place your order today. Pay nothing until it fills. Your order is free to maintain." |
| **Auto-adjusting orders** | If collateral value drops, order size adjusts automatically to keep you safe | "Built-in protection. Your order adapts to market conditions so your position stays healthy." |
| **One-click cancel** | Cancel anytime, keep your filled borrows, no penalties | "Changed your mind? Cancel instantly. Any borrows already filled stay active. No penalties, ever." |
| **Set and forget** | Expiry dates mean orders manage themselves | "Set your order, set your expiry, and walk away. Kamino handles the rest." |

---

## 5. Target Audiences

### Primary: Active Kamino Borrowers (Prime Market)
- Already want to borrow in Prime but frustrated by supply scarcity
- Have experienced the "refresh and race" problem firsthand
- Will immediately understand the value proposition
- **Message:** "The feature you've been asking for. Stop racing, start ordering."

### Secondary: Sophisticated DeFi Users (Not Yet on Kamino)
- Borrow across multiple protocols
- Understand yield strategies that require reliable borrow access
- May have built their own bots — this replaces that need
- **Message:** "Institutional-grade borrowing infrastructure. No bots required."

### Tertiary: TradFi-Adjacent / RWA-Focused Users
- Familiar with credit facility mechanics, RFQs, order books
- Interested in DeFi but frustrated by primitive UX
- Prime (yield-bearing RWA) is their entry point
- **Message:** "Borrow orders work like they should — the way credit markets have worked for decades, now on-chain."

---

## 6. Content Recommendations

### Launch Content

1. **Announcement Thread (Twitter/X)**
   - Problem → Solution → How it works → Available now
   - Use the "stop racing, start ordering" line
   - Visual: Before (refreshing, racing, bots) vs. After (place order, walk away, fills come in)

2. **Blog Post / Mirror Article**
   - Title suggestion: "Introducing Borrow Orders: Limit Orders for Lending"
   - Structure: Why borrowing in high-demand markets is broken → How Borrow Orders fix it → The TradFi parallel → How it works step-by-step → What's next (fixed rates, more markets)
   - Include the credit markets context (revolving facilities, RFQ systems)
   - ~1,200 words

3. **Short Explainer Video / Animation (30-60s)**
   - Show the old flow: user watching, refreshing, missing borrows
   - Show the new flow: place order → walk away → notification that order filled
   - End with: "Borrow Orders. Live now in Prime."

4. **Documentation / Help Center**
   - Step-by-step guide: How to place a borrow order
   - FAQ: What happens if my order partially fills? What is post-fill LTV? Can I cancel?
   - Glossary update: Borrow Order, Post-Fill LTV, Auto-Reduction

### Ongoing Content

5. **Usage Stats Thread (Week 1, Month 1)**
   - Total order volume placed
   - Fill rates
   - Number of unique users
   - "X users placed borrow orders instead of running bots"

6. **User Testimonial / Case Study**
   - Find a Prime borrower who was previously frustrated → now uses borrow orders
   - Before/after narrative

---

## 7. Finance & Credit Context (For Content Depth)

Use this context to add credibility and depth to long-form content. Borrow Orders aren't a novel invention — they're a proven primitive being brought on-chain.

### Credit Facility Analogy
In corporate finance, a **revolving credit facility** allows a borrower to draw funds up to a committed limit. When the facility is fully drawn, new draw requests are queued and filled as repayments create capacity. Borrow Orders work the same way — users place their draw request, and it fills as the lending pool has capacity.

### Order Book Lending
In traditional fixed-income markets, lending and borrowing happens through order books. A borrower places a request for capital at a specified rate and term. Market makers and lenders fill these orders as they allocate capital. Kamino's Borrow Orders bring this model to DeFi lending — starting with variable rates, and extending to fixed rates with user-specified rates and terms.

### RFQ (Request for Quote) Parallel
In institutional credit markets, borrowers broadcast an RFQ — "I want to borrow $X at approximately Y% for Z months." Dealers respond with quotes, and the borrower selects the best offer. Borrow Orders are a simplified, automated version of this: the user states their intent, and the protocol fills it as supply permits. No negotiation, no manual matching — just automatic, fair execution.

### Why DeFi Has Lacked This
Most DeFi lending protocols operate on a **pool model** where borrowing is instantaneous: if there's supply, you borrow; if there isn't, you can't. There's no concept of "waiting for supply." This works in deep, liquid markets but breaks down when demand exceeds supply. Borrow Orders add the missing layer — a demand queue that converts unmet borrowing intent into filled positions over time.

### The "Interest-Free Optionality" Angle
A Borrow Order is effectively **free optionality** on future borrowing. The user locks in their collateral and expresses intent to borrow, but pays nothing until the borrow actually executes. In options terms, it's a zero-premium call on borrowing capacity. This is genuinely novel in DeFi and worth highlighting — traditional credit facilities charge commitment fees for undrawn capacity. Kamino charges nothing.

---

## 8. Competitive Positioning

| Protocol | Borrow Experience in Supply-Constrained Markets |
|---|---|
| **Aave / Compound** | If supply isn't available, you can't borrow. Period. No queue, no orders. |
| **Morpho** | Peer-to-peer matching improves rates but doesn't solve the "supply not available" problem |
| **Kamino (now)** | Place a borrow order. It fills as supply comes in. First to solve this. |

**Key differentiator:** Kamino is the only lending protocol where unmet borrow demand is captured and filled over time rather than simply rejected.

---

## 9. Visual / Design Notes for Marketing

- The "My Position" view shows Active Borrow and Open Borrow Order as separate line items — this visual distinction is content-worthy
- Before/after comparison of the borrowing experience is the strongest visual narrative

---

## 10. Timeline & Coordination

| Milestone | Marketing Action |
|---|---|
| Feature in staging | Prepare screenshots, draft content |
| Feature on mainnet (Prime) | Publish announcement thread + blog post |
| Week 1 post-launch | Usage stats thread |
| Month 1 post-launch | Case study / testimonial |
| Fixed rates launch | "Borrow Orders V2" campaign — same UX, now with rate and term selection |
