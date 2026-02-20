# Borrow Flow Redesign Context

## Last Updated
2026-01-09

---

## 1. The User

**Who specifically:**
DeFi natives who understand lending, borrowing, and risk. Power users managing multiple positions, often with tens of millions of dollars. These are not newcomers to DeFi.

**What they care about:**
- Understanding their position risk at all times
- Feeling comfortable bringing more capital
- Efficient position management
- Discovering new opportunities (markets, pairs, incentives)

**What makes them give up:**
- Overwhelming complexity when trying to find/manage positions
- Unclear risk exposure
- Hidden or scattered information

**Current workflow:**
- Most users: single-collateral, single-debt positions (pair-based behavior)
- Power users: multiple positions, potentially multi-collateral/multi-debt
- Portfolio page is most clicked page—users gravitate there to see everything

---

## 2. The Problem

### Why This Redesign Exists

**Product Evolution: V1 → V2**
- V1: Single lending market (Main Market)
- V2: Explosion of markets (vaults, market layers, new ecosystems)
- Current borrow page has become **overwhelming** with enormous expandable market list
- Each market expands to show assets → intense, cluttered experience
- **The page design has been outgrown by the product**

**Capability Gaps:**
- Current flow: only ONE loan per market
- New flow needed: **multiple loans per market**
- Current flow doesn't support **fixed rates** well
- Pair-based incentives are hidden in current design

**UX Fragmentation:**
- Position management from too many places (list page, expanded rows, dashboard)
- Rich dashboard hidden behind button most users don't find
- Inconsistent with Lend and Multiply products

### The Core Problem Statement

> The borrow page tries to be everything—a discovery tool AND a management tool—and succeeds at neither. As the product scaled to many markets, the "manage everything from the list" pattern broke down. Users want to see their portfolio (most clicked page), but we send them to a cluttered list instead.

---

## 3. What Good Looks Like

### Design Principle: Separation of Concerns

| Page Type | Purpose | Actions Allowed |
|-----------|---------|-----------------|
| **Borrow List Page** | Discovery & Navigation | Browse, filter, click into |
| **Market/Pair Detail Page** | Deep dive & Management | Supply, Borrow, Repay, Withdraw, view analytics |
| **Portfolio/Dashboard** | Overview & Entry Point | See all positions, navigate to any position |

### Reference: Morpho.org
- Pair-based borrow UX
- Clean separation between discovery and management
- Worth studying for patterns

### "10/10 Success" Looks Like:
- User with existing position lands on Dashboard, sees everything at a glance
- New user lands on Borrow, filters to what they want, clicks in, understands immediately
- All position management happens INSIDE the market/pair page
- Fixed rates and multi-loan feel native, not bolted on
- More borrows, bigger positions, higher comfort

---

## 4. The Drivers (Ordered by Priority)

1. **Product has outgrown the page design**
   - Market explosion made list overwhelming
   - Can't keep expanding the expansion pattern

2. **Multiple loans per market**
   - New capability the old UI fundamentally can't support
   - Users need to compartmentalize risk

3. **Pair-based borrows match user behavior**
   - Majority of users: single collateral + single debt
   - Pair view gives better insight into actual position
   - Better for showing pair-specific incentives

4. **Fixed rates coming**
   - Current design doesn't accommodate
   - Pair view handles this naturally

5. **UX consolidation across app**
   - Lend, Multiply, Borrow should follow same pattern
   - Management IN the page, not FROM the list

6. **Portfolio as default landing**
   - Most clicked page already
   - Natural "home base" for users with positions

---

## 5. Constraints

### Technical
- V2 architecture: vaults + market layers
- Solana blockchain
- Existing smart contracts

### Business
- "Ready for dev" pressure
- Can't alienate power users with multiple positions
- Need to support growth (more markets coming)

### Design
- Dark theme, data-dense UI
- Existing design system
- Must feel consistent with Lend/Multiply patterns

---

## 6. Success Metrics

**Primary:**
- [ ] More borrows (always the goal)
- [ ] Larger average positions (user comfort)

**Secondary:**
- [ ] Portfolio/Dashboard becomes stickiest page
- [ ] Time to first borrow decreases for new users
- [ ] Discovery of new markets increases

**Qualitative:**
- Users understand their risk at all times
- New features (fixed rates, multi-loan) feel native
- Power users not slowed down

---

## 7. Open Questions for Product Thinking

### On the Pairs vs Markets Architecture
- [ ] Is the toggle between Pairs and Markets the right pattern?
- [ ] Could there be a unified view that doesn't require switching?
- [ ] Does the toggle add friction for the 80% pair-based users?

### On Multi-Loan UX
- [ ] Is "Loan #1, Loan #2" the right mental model?
- [ ] How do users think about multiple loans? By asset? By strategy?
- [ ] Can we make multi-loan feel like a natural extension, not a power feature?

### On the Click-Into Pattern
- [ ] Does this solve the core problem or just move it?
- [ ] Is the market detail page itself at risk of becoming overwhelming?
- [ ] What's the minimum viable market detail page?

### Alternatives Worth Exploring
- [ ] Could filtering + smart defaults reduce need for Pairs view?
- [ ] Is there a "focused mode" vs "full mode" rather than Pairs vs Markets?
- [ ] What if Portfolio IS the borrow page for existing users?

---

## 8. Related Resources

- [Current Flow Video](https://jam.dev/c/8dd0f1c6-80d5-4daf-9ac7-19117616b9e5)
- [New Figma Walkthrough Video](https://jam.dev/c/784d9f0e-7e47-4278-97e0-8dfbd43decce)
- [Figma Designs](https://www.figma.com/design/cHUK2ofXzNGTBGYH7tSirn/Playground-New-Borrow-Flow)
- [Morpho.org](https://morpho.org) - Pair-based reference
- V2 Announcement & Overview (TBD - awaiting context)
