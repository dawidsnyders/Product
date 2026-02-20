# Project Instructions

## Default Behavior

When the user says **"I want..."** or describes a goal/outcome:

1. **STOP** - Do not implement anything yet
2. **INTERVIEW** - Ask 10-20 clarifying questions to deeply understand:
   - The real problem being solved
   - Who will use this and how
   - What success looks like
   - Technical preferences and constraints
   - Trade-offs they'd accept
   - Edge cases and error handling
   - Integration requirements
   - Security/performance needs
3. **THINK DEEPLY** - Use extended thinking (ultrathink) to analyze
4. **SPEC** - Write a clear specification document
5. **CONFIRM** - Get explicit approval before any implementation
6. **PLAN** - Create detailed implementation plan
7. **EXECUTE** - Only after user says "go" or "approved"

## Interview Guidelines

- Use AskUserQuestion tool extensively
- Offer multiple choice options when helpful
- Challenge assumptions politely
- Ask follow-up questions on every answer
- Don't assume - always verify
- Summarize understanding back to user

## User Preferences

- User prefers natural language interaction
- Claude handles all technical work (coding, file management, git, etc.)
- Keep explanations concise
- Be proactive about creating files and making commits
- Push changes without asking unless destructive

## Quick Commands

- `/goal` - Start the full interview workflow
- `/spec` - Generate specification from current context
- `/plan` - Enter planning mode for current spec

---

## Current Project: AI Product Manager Agents

**Status:** Spec approved, plan approved, ready to build (Phase 0).

### Key Documents
- **Spec:** `specs/pm-agents.md` — 3 AI PM agents (FE PM, BE PM, CPO) for a DeFi company (Kamino Finance)
- **Plan:** `plans/pm-agents-plan.md` — 7-phase implementation plan (Phase 0 through Phase 7)

### Architecture Decisions
- **Python monolith** for data pipeline + agent orchestration
- **Next.js** for dashboard frontend
- **PostgreSQL + pgvector** for storage + embeddings
- **Claude API** for agent reasoning

### Data Source Integration Strategy
| Source | Integration Method | Credentials |
|--------|-------------------|-------------|
| **Slack** | Direct API (xoxc/xoxd tokens) | `.env` — verified, Kamino workspace |
| **Telegram** | Direct API (session string) | `.env` — stored |
| **Linear** | MCP server (`https://mcp.linear.app/mcp`) | OAuth via `~/.claude/.mcp.json` — authorized |
| **GitHub** | Direct API | Not yet set up |
| **Google Docs** | Direct API | Not yet set up |
| **Figma** | MCP (interactive) / API (batch) | Figma MCP already configured |
| **Mixpanel** | Direct API | Not yet set up |
| **Web (kamino.com)** | Scraper | Public, no auth needed |

### Credentials
- **`.env`** — Slack xoxc/xoxd tokens, Telegram session string (gitignored)
- **`~/.claude/.mcp.json`** — Slack MCP (xoxc/xoxd), Linear MCP (OAuth), Figma MCP

### Build Progress
- [x] Phase 0.2: Slack, Telegram, Linear credentials verified
- [ ] Phase 0.1: Meeting notes centralization (blocking dependency)
- [ ] Phase 0.2: Remaining credentials (GitHub, GDocs, Figma, Mixpanel, Anthropic)
- [ ] Phase 0.3: Initialize monorepo
- [ ] Phase 0.4: Local dev environment
- [ ] Phase 0.5: Database schema
