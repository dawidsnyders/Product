# Product Development Environment

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
Activates ultrathink + plan mode for deep strategic planning.

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

## Project Structure

```
Product/
├── CLAUDE.md              # This file - project context
├── .claude/
│   └── commands/          # Custom slash commands
├── context/               # Context documents for different projects
├── prototypes/            # Quick prototypes and experiments
├── figma-exports/         # Exported Figma designs for reference
└── research/              # User research, quotes, insights
```

## Tools Integration

This environment is designed to work with:
- **Figma**: Export designs to `figma-exports/` for reference during prototyping
- **Motion.dev**: For animation prototypes
- **Code prototypes**: React/HTML/CSS for interactive testing

## Context Document Structure

Each project should have a context doc in `context/[project-name].md` with:
1. The specific user (not a persona - real details)
2. The problem in their words (direct quotes)
3. What good looks like (examples)
4. What's been tried and failed
5. Constraints that shape the solution
6. How we'll know it worked

## Working with Claude

### For Product Thinking
- Start with `/goal` or `/interview`
- Don't let Claude jump to solutions
- Push for specifics and examples
- Stay in problem space until it's crystal clear

### For Prototyping
- Feed context docs before building
- Ask for 2-3 different approaches
- React and iterate, don't perfect upfront
- Use prototypes to learn, not to ship

### For Evaluation
- "Is this actually solving the problem?"
- "Does it handle the edge cases that matter?"
- "Is this the version we should ship or just the version that runs?"
