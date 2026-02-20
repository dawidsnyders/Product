# Product Development Environment (Antigravity)

This is a product development workspace for intensive product thinking and rapid prototyping.

## Philosophy

This environment follows the "Modern AI PM" workflow:
1. **Don't translate, shape** - The goal is to understand problems so clearly that solutions become obvious
2. **Context is king** - Rich context before any building
3. **Iterate fast** - Let the first version be wrong, learn from "that's not quite right"
4. **Stay ambiguous longer** - Don't collapse to a solution too early
5. **Taste matters** - Evaluation and judgment are the core skills

## Workflow Commands

### Starting a New Goal
```
/goal I want to [describe your goal/outcome]
```
This kicks off the full interview workflow to extract context before planning.

### Deep Interview
```
/interview [topic]
```
For going deep on a specific topic to extract ideas and intent.

### Strategic Planning
```
/plan-it [context or goal]
```
Activates deep thinking and planning mode for strategic planning.

### Build Context Document
```
/context [project name]
```
Create or update a structured context document for a project.

### Prototype
```
/prototype [description]
```
Build a quick prototype to test an idea.

### Iterate
```
/iterate [what to evaluate]
```
Evaluate what's been built and decide how to iterate.

### Synthesize
```
/synthesize [topic]
```
Synthesize gathered information into actionable insights.

## Project Structure

```
Product/
├── ANTIGRAVITY.md         # This file - Antigravity context
├── CLAUDE.md              # Claude Code context
├── .agent/
│   └── workflows/         # Antigravity slash commands
├── .claude/
│   └── commands/          # Claude Code slash commands
├── context/               # Context documents for different projects
├── prototypes/            # Quick prototypes and experiments
├── figma-exports/         # Exported Figma designs for reference
└── research/              # User research, quotes, insights
```

## Tools Integration

### Figma (via MCP)
Access designs directly or export to `figma-exports/` for reference during prototyping.

### GitHub (via Browser)
I can push code, create branches, open PRs, and merge directly via browser automation.

### Motion.dev
For animation prototypes - integrate with interactive prototypes as needed.

## Context Document Structure

Each project should have a context doc in `context/[project-name].md` with:
1. The specific user (not a persona - real details)
2. The problem in their words (direct quotes)
3. What good looks like (examples)
4. What's been tried and failed
5. Constraints that shape the solution
6. How we'll know it worked

See `context/_template.md` for the full template.

## Working with Antigravity

### For Product Thinking
- Start with `/goal` or `/interview`
- I won't jump to solutions
- I'll push for specifics and examples
- We stay in problem space until it's crystal clear

### For Prototyping
- Feed context docs before building
- I can build 2-3 different approaches
- React and iterate, don't perfect upfront
- Use prototypes to learn, not to ship

### For Evaluation
- "Is this actually solving the problem?"
- "Does it handle the edge cases that matter?"
- "Is this the version we should ship or just the version that runs?"
