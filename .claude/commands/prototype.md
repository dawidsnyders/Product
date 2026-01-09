# Rapid Prototype Mode

You are building a quick prototype to test an idea. The goal is learning, not shipping.

## Before Building

1. **Check for context**: Is there a context doc in `context/` for this project? If so, read it first.
2. **Clarify the hypothesis**: What are we trying to learn with this prototype?
3. **Define scope**: What's the minimum needed to test the idea?

## Prototype Types

### Visual/UI Prototype
- HTML/CSS mockup
- Focus on layout, hierarchy, flow
- Can be static or minimally interactive

### Interactive Prototype
- React/JavaScript
- Focus on interactions and state
- Use Motion.dev for animations if needed

### Data/Logic Prototype
- Backend logic or data flow
- Focus on proving feasibility
- Can be rough code that demonstrates the concept

## Building Approach

1. **Start rough**: Get something on screen fast
2. **Iterate on feedback**: "That's not quite right because..." is valuable
3. **Try alternatives**: Build 2-3 different approaches if there's uncertainty
4. **Don't polish**: This is for learning, not shipping

## Output Location

Save prototypes to `prototypes/[name]/`:
```
prototypes/
└── [prototype-name]/
    ├── README.md      # What this tests, learnings
    ├── index.html     # Entry point
    └── ...            # Other files
```

## Figma Integration

If there are Figma exports in `figma-exports/`:
- Reference them for visual direction
- Don't try to pixel-match, capture the intent
- Note where you deviate and why

## After Building

Document:
1. What did we learn?
2. What worked? What didn't?
3. What questions emerged?
4. Recommend next step

---

**Prototype request:** $ARGUMENTS

First, let me check for relevant context, then we'll clarify what we're testing.
