# Kamino App Navigation Redesign

## The Problem

The current app navigation has 5 header items (Swap, Earn, Borrow, Multiply, Liquidity). With the introduction of Kamino USD, Private Credit, and the Assets page, simply adding more items would create cognitive overload and a cluttered experience.

This requires rethinking the navigation structure — not just where new products go, but how products should be organized overall.

---

## The Thinking

### Products cluster into clear user intents

When looking at what users actually want to DO, patterns emerge:

| Intent | Products |
|--------|----------|
| "I want to trade" | Swap |
| "I want yield" | Kamino USD, Lending, Private Credit, Liquidity |
| "I want leverage" | Borrow (Markets), Multiply |
| "I want to explore RWAs" | Assets |

Navigation should match user intent, not internal product organization.

### Borrow and Multiply are conceptually linked

Multiply is essentially one-click leveraged borrowing — it automates what power users do manually in Borrow. They're two modes of the same core action: using collateral to get exposure.

However, Multiply cannot be treated as a minor feature. It represents ~$1B of $1.3B in total borrows and will become even more significant with the expansion of RWA strategies and the introduction of fixed rates.

The approach: Keep both under one "Borrow" header, but treat Markets and Multiply as equal siblings (tabs or segments), not parent-child.

### Earn can hold multiple products without becoming bloated

Grouping Kamino USD, Lending, Private Credit, and Liquidity under "Earn" might seem like too much surface area — but it works. Users understand "Earn = I want yield."

What matters is hierarchy within the category:
- Kamino USD gets hero treatment as the simple, recommended path
- Other products remain clearly accessible for users who want specific strategies

### The dropdown + clickable header pattern

The preferred interaction model:

- **Hover** on a header item → Dropdown shows all products with visuals and key info
- **Click** a dropdown item → Goes directly to that product
- **Click** the header itself → Goes to the category page (e.g., Earn page with Kamino USD featured)

This serves both user types:
- Returning users who know exactly what they want can go direct
- Exploring users can see options and make a choice

### Assets is a discovery + conversion play

The Assets page serves two purposes:

1. **Content/discovery** — The destination for RWA data on Solana (similar to RWA.xyz)
2. **Conversion** — When users click into an asset, they see rich info AND strong CTAs to deploy into Kamino products

This pattern already exists with Prime (buy form + multiply prompt on the asset page). It becomes the template for all RWAs.

---

## The Navigation Structure

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
- **Kamino USD** — One-click managed yield (featured)
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
2. **User intent mapping** — Navigation matches what users want to do
3. **Kamino USD gets prominence** — Featured in dropdown, hero on Earn page, without needing its own nav slot
4. **Multiply stays visible** — Equal treatment with Markets under Borrow, not buried as a sub-feature
5. **Scales for the future** — New yield products go under Earn, new leverage products go under Borrow
6. **Serves both user types** — Power users go direct via dropdown, explorers browse via category pages

---

## Future Considerations

This navigation is for the advanced mode of the app. A consumer/non-pro mode will follow with an even simpler interface.

The category-based structure (Earn, Borrow) translates well to that simplified experience — potentially showing just Kamino USD for yield and abstracting away the complexity entirely.

---

## Open Design Questions

1. **Dropdown richness** — How much live data (APYs, TVL) to show in dropdowns?
2. **Borrow page layout** — Tabs vs segmented control for Markets/Multiply?
3. **Mobile treatment** — Hamburger menu or bottom navigation?
4. **Assets naming** — Keep "Assets" or use "RWAs"?
