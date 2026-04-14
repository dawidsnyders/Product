# Loan Dashboard Design Brief — Product Lead Feedback

**Date:** 2026-03-03
**In response to:** [Loan Dashboard Design Brief](https://linear.app/kamino/document/loan-dashboard-design-brief-7a9d0b979dd6) by Anya Poltoratskaya
**Author:** Dawid

---

## Overall Assessment

The brief is thorough and well-structured. The data-driven approach (Mixpanel data, action volumes, tab click rates) is exactly what was needed. The DeFi Saver competitive analysis is valuable reference material. Below are my positions on the open decisions and specific feedback on key sections.

---

## Open Decisions

### Decision 1: Borrow + Multiply Unification — It's Complicated

**Not a simple yes or no.** In a vacuum, unification is appealing. In practice, there are significant product implications that need to be worked through before committing.

**Why Multiply can't just become a "leverage tab" inside Borrow:**

- Multiply is an extremely well-known, established product with strong brand recognition
- Yield-bearing products (PRIME is a prime example) benefit enormously from a **dedicated Multiply dashboard** with multiply-specific stats and data
- There are multiply-specific things that cannot be meaningfully surfaced inside a borrow product:
  - Average net APY over time
  - Projected position growth simulation
  - Multiply-specific product page content tailored to leveraged positions
- **We cannot kill Multiply entirely.** The product-specific context is too valuable.

**Questions that must be answered before proceeding:**

1. If we enable leverage from the borrow flow — when and how do we surface multiply-specific information? Do we even need to?
2. After a user opens a leveraged position from borrow, **where do they manage it?** At the Multiply page? Does the loan dashboard become multiply-specific for that position? Do we kill the Multiply management page?
3. Does clicking the "leverage" tab in borrow redirect them to the Multiply product for that pair?
4. Do we limit leverage only to volatile pairs?
5. **Possible middle ground:** Enable one-click leverage as part of the loan opening flow, but the position is treated as a normal borrow position from the user's perspective. The Multiplier product lives separately. Basically: you can take leverage from the borrow page, but it doesn't become a "Multiply position" — it's a borrow position with leverage. Multiply remains its own product for users who want the full multiply experience (dedicated stats, APY projections, etc.).

**Bottom line:** The architecture should accommodate leverage in the borrow flow, but the product decision of how (and whether) to fully unify requires more thought. Don't design as if Multiply is being absorbed — design so leverage can be added without breaking anything.

---

### Decision 2: Form Simulation Driving the Overview — Yes

**Yes, big fan.** Making the simulation more visual and having it drive the position overview is the right call. Definitely do this.

---

### Decision 3: Collapse Tabs — No, Keep Tabs

**Hard disagree with collapsing to a single scrollable page.**

I would not move away from the tab structure. The 93% stat is interesting but doesn't justify removing tabs — it means the default tab is serving 93% of users well, which is the point.

**Specific pushback:**

- **Transaction History must absolutely NOT become a link or collapsible section.** It is imperative to see which transactions occurred inside a specific loan within this dashboard. I need to see how I managed a position — what actions were taken, when liquidations occurred, etc. I should not have to go to the home page and try to filter for my specific loan from a global transaction list.
- The tab structure provides clean separation for users who want depth. Scrollable pages create noise for the 80% who are just checking health.
- Reduce from 5 to 3 tabs if the data supports merging some — but don't flatten everything.

---

### Decision 4: Markets List — Must Keep

**Hard yes on keeping the markets list on the dashboard.**

There absolutely needs to be a full market overview in the Loan Dashboard page. This is critical for two reasons:

1. **Taking actions** — users need to see available markets to decide what to supply, borrow, or adjust
2. **Advanced users assessing risk** — looking at LTVs, looking at available liquidity, evaluating market conditions

This cannot be removed. The "design toward removing it, validate with users first" approach underestimates how important this is for power users and risk-conscious users. Keep it.

---

### Decision 5: Position Risk Visualization — Keep the LTV Bar

**I would not move away from the LTV bar.**

This is a very established UX pattern and a very established data point across our entire product suite. Switching to collateral/debt bars with threshold marking is a regression in clarity, not an improvement.

**What we should do instead:**
- Keep the LTV bar as the primary risk visualization
- Make it richer — show simulations on the bar, add ghost/projected states, enhance the color zones
- Use the LTV bar as the canvas for the simulation model (Decision 2) — this is where "before vs. after" should be most visible
- All the nice visualizations and simulations DeFi Saver does with their separate bars, we can do on a single, richer LTV bar

The LTV bar as a single focused signal is a strength, not a limitation. Don't dilute it with two separate bars showing the same information differently.

---

## Section-by-Section Feedback

### Automations — 100% Agree, Most Already Exist

All of the following already live in the codebase. We just haven't pulled them into the new version of the app:

- **Stop loss** — exists, needs frontend integration
- **Take profit** — exists, needs frontend integration
- **Collateral swaps** — exists, integrates into KaminoSwap, just needs frontend
- **Debt swaps** — same as above, easy, just needs frontend
- **Automated auto-deleverage at specific LTD thresholds** — 100% need to do this
- **Notification setup** — 100% need to do this

These are not aspirational features. They are backend-complete features waiting for UI. Prioritize accordingly.

### One-Click Close Position — Nuanced

We already have this in Multiply. For borrow positions, it becomes significantly harder when there is:

- More than one debt asset
- More than one collateral asset

The odds of incurring heavy slippage are much higher with multi-asset positions. With bigger positions, slippage becomes very intense.

**"Repay with Collateral" achieves virtually the same thing as one-click close**, except the user has more control over the execution. For single-asset pair positions, one-click close is fine. For multi-asset positions, guide the user through "Repay with Collateral" instead of hiding the complexity behind a one-click button that might cost them significant slippage.

### Swap Collateral / Swap Debt — Easy Win

Very easy to implement. Already exists. Already integrates into KaminoSwap. Just needs to be added to the frontend. Should be prioritized as a quick win.

### Interactive Stress Test — Like It

The slider-based "what if" tool replacing the Liq & Risk + Scenario Analysis tabs is a good idea. Visual, interactive, answers the same questions with less cognitive load.

---

## Summary of Positions

| Decision | Brief's Lean | My Position |
|---|---|---|
| 1. Borrow + Multiply unification | Yes | **It's complicated** — architect for it, but don't commit to full unification yet. Many open questions about where Multiply-specific features live. |
| 2. Simulation drives overview | Yes | **Yes** — fully agree |
| 3. Collapse tabs to single page | Yes | **No** — keep tabs, reduce from 5 to 3 if needed. Transaction history must stay as a tab. |
| 4. Remove markets list | Lean toward removing | **No** — must keep. Critical for actions and risk assessment. |
| 5. Replace LTV bar with collateral/debt bars | Lean toward replacing | **No** — keep and enrich the LTV bar. Established pattern across our product suite. |
