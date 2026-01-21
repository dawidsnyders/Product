# Kamino App Navigation Redesign

## The Problem

We're rebuilding the Kamino app and need to rethink navigation. The current structure has 5 header items (Swap, Earn, Borrow, Multiply, Liquidity), and we're adding new products:

- **Kamino USD** — One-click managed yield, intended to become THE primary yield product
- **Private Credit** — On-chain users lending into off-chain BTC-backed institutional demand
- **Assets page** — RWA discovery and data, with CTAs to deploy into Kamino products

Adding these to an already full navigation would create cognitive overload. We needed to step back and think about structure, not just placement.

---

## Key Insights From Our Thinking

### 1. Products cluster into clear user intents

When we looked at what users actually want to DO, patterns emerged:

| Intent | Products |
|--------|----------|
| "I want to trade" | Swap |
| "I want yield" | Kamino USD, Lending, Private Credit, Liquidity |
| "I want leverage" | Borrow (Markets), Multiply |
| "I want to explore RWAs" | Assets |

This gave us our structure: **Swap, Earn, Borrow, Assets**.

### 2. Borrow and Multiply are conceptually linked but both critical

Multiply is essentially one-click leveraged borrowing — it automates what power users do manually in Borrow. They're two modes of the same core action: using collateral to get exposure.

But Multiply can't be buried as a "feature" — it represents ~$1B of $1.3B in total borrows. It's the product, especially for RWA leverage which is a growing focus.

**Decision:** Keep them under one "Borrow" header, but treat Markets and Multiply as equal siblings (tabs or segments), not parent-child.

### 3. Earn can hold multiple products without becoming bloated

We debated whether grouping Kamino USD, Lending, Private Credit, and Liquidity under "Earn" was too much surface area.

Conclusion: It's fine. Users understand "Earn = I want yield." The dropdown and page structure can clearly differentiate the options. What matters is:
- Kamino USD gets hero treatment (it's the simple, recommended path)
- Other products are clearly accessible for users who want specific strategies

### 4. The dropdown + clickable header pattern

This emerged as the preferred interaction model:

- **Hover** on a header item → Dropdown shows all products with visuals and key info
- **Click** a dropdown item → Goes directly to that product
- **Click** the header itself → Goes to the category page (e.g., Earn page with Kamino USD featured)

This serves both user types:
- Returning users who know exactly what they want can go direct
- Exploring users can see options and make a choice

### 5. Assets is a discovery + conversion play

The Assets page serves two purposes:
1. Content/discovery — Be the place for RWA data on Solana (like RWA.xyz)
2. Conversion — When users click into an asset, show rich info AND strong CTAs to deploy into Kamino products

We already do this with Prime (buy form + multiply prompt on the asset page). This becomes the pattern for all RWAs.

---

## The Final Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]     Swap     Earn ▾     Borrow ▾     Assets            │
└─────────────────────────────────────────────────────────────────┘
```

### Swap
- Direct link, no dropdown
- Swap interface with limit orders

### Earn (dropdown + clickable)
Dropdown contents:
- **Kamino USD** — One-click managed yield (featured/starred)
- **Lending** — Supply assets, earn interest
- **Private Credit** — Institutional BTC-backed yield
- **Liquidity** — Automated LP strategies

Clicking "Earn" header goes to Earn page with Kamino USD as the first tab and hero section.

### Borrow (dropdown + clickable)
Dropdown contents:
- **Markets** — Borrow against your collateral
- **Multiply** — One-click leveraged positions

Clicking "Borrow" header goes to Borrow page with Markets and Multiply as equal-weight tabs.

### Assets
- Direct link (could add dropdown later for categories)
- RWA discovery with individual asset pages
- Strong CTAs to deploy into Kamino products

---

## Why This Works

1. **4 items instead of 7+** — Reduces cognitive load while covering all products
2. **User intent mapping** — Navigation matches what users want to do, not internal product org
3. **Kamino USD gets prominence** — Featured in dropdown, hero on Earn page, but doesn't need its own nav slot
4. **Multiply stays visible** — Equal treatment with Markets under Borrow, not buried as a sub-feature
5. **Scales for the future** — New yield products go under Earn, new leverage products go under Borrow
6. **Serves both user types** — Power users go direct via dropdown, explorers browse via category pages

---

## What This Enables

This navigation is for the "advanced mode" of the app. After this redesign ships, we'll build a consumer/non-pro mode with an even simpler interface.

The structure we've chosen makes this transition easier — the category-based thinking (Earn, Borrow) translates well to a simplified consumer experience where we might just show Kamino USD for yield and hide the complexity entirely.

---

## Open Design Questions

1. **Dropdown richness** — How much live data (APYs, TVL) to show in dropdowns?
2. **Borrow page layout** — Tabs vs segmented control for Markets/Multiply?
3. **Mobile treatment** — Hamburger menu or bottom navigation?
4. **Assets naming** — Keep "Assets" or use "RWAs"?

---

*Last updated: January 2026*
