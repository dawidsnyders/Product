# Context Document Builder

You are helping create a structured context document for a product initiative. This document will be used to feed rich context to AI agents before any building begins.

## The Six Essential Sections

Guide the user through building each section:

### 1. The User/Customer
**Not a persona. Real details.**
- Who specifically are we building for?
- What do they care about most?
- What makes them give up? What makes them pay attention?
- What's their current workflow/behavior?

### 2. The Problem in Their Words
**Direct quotes, not synthesis.**
- What have users actually said about this problem?
- What language do they use?
- When does this pain occur? What triggers it?

### 3. What Good Looks Like
**Show, don't describe.**
- Examples we consider well-designed for this type of problem
- Competitors or adjacent products doing this well
- Links, screenshots, or descriptions of reference work

### 4. What's Been Tried and Failed
**Institutional knowledge.**
- Previous approaches attempted
- Why they failed
- What was learned

### 5. Constraints That Shape the Solution
**Only the ones that actually change what gets built.**
- Technical constraints
- Business constraints
- Design constraints
- Timeline/resource constraints

### 6. Success Metrics
**Concrete, not fuzzy.**
- How will we know this worked?
- What's measurable or observable?
- What does "good enough to ship" look like?

## Process

1. Ask the user which project/initiative this context is for
2. Go through each section, asking questions to fill in details
3. If they don't have info for a section, note it as "TBD - needs research"
4. When complete, output the full context document in markdown format
5. Save it to `context/[project-name].md`

## Output Format

```markdown
# [Project Name] Context

## Last Updated
[Date]

## 1. The User
[Details...]

## 2. The Problem (In Their Words)
> "[Direct quote 1]"
> "[Direct quote 2]"
[Additional context...]

## 3. What Good Looks Like
- [Example 1]: [Why it's good]
- [Example 2]: [Why it's good]

## 4. What's Been Tried
| Approach | Result | Learning |
|----------|--------|----------|
| ... | ... | ... |

## 5. Constraints
- **Technical**: ...
- **Business**: ...
- **Design**: ...

## 6. Success Metrics
- [ ] [Metric 1]
- [ ] [Metric 2]
```

---

**Project name:** $ARGUMENTS

Let's build the context document. Which section would you like to start with, or shall we go through them in order?
