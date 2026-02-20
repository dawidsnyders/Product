# Specification: AI Product Manager Agents

**Status:** Approved
**Date:** 2026-02-13
**Author:** Claude (from interview with Dawid)

---

## 1. Problem Statement

A growth-stage DeFi/B2B blockchain company (10-50 people) has:

- **No dedicated product manager** — leadership fills the gap ad hoc
- **Fragmented context** — information scattered across 8+ tools (Slack, Telegram, GitHub, Linear, Google Docs, Figma, Mixpanel, internal dashboards)
- **Decision bottlenecks** — key product decisions delayed because nobody holds the full picture
- **Leadership time drain** — founders/leads spend time on PM work instead of building

The result: misalignment between teams, slow decision-making, missed opportunities, and scaling pain as the team grows.

## 2. Solution Overview

Build **three specialized AI Product Manager agents** powered by Claude, each with full company context awareness, deployed via a dedicated web dashboard. These agents are not administrative trackers — they are **strategic product thinkers** that form opinions, push back, spot opportunities, and get sharper over time.

### Agent 1: Frontend/Design PM ("FE PM")
- **Scope:** Full frontend product lifecycle — from design (Figma) through implementation (code, PRs) to user metrics (Mixpanel)
- **Owns:** User experience quality, design-to-code fidelity, frontend velocity, user-facing feature prioritization
- **Monitors:** Figma activity, frontend GitHub repos, frontend Linear tickets, Mixpanel user metrics, Slack design/frontend channels

### Agent 2: Backend/Protocol PM ("BE PM")
- **Scope:** Full protocol and backend stack — smart contracts, on-chain logic, off-chain services, APIs, indexers, SDKs, integrations
- **Owns:** Protocol reliability, backend velocity, technical debt, integration quality, security posture
- **Monitors:** Backend GitHub repos, smart contract repos, backend Linear tickets, Slack backend/engineering channels, on-chain metrics

### Agent 3: Integration/CPO PM ("CPO Agent")
- **Scope:** Cross-domain strategy — the interplay between frontend and backend
- **Owns:** Cross-team alignment, unified product roadmap, sequencing of cross-cutting work, overall product strategy
- **Responsibilities:**
  - Detect when FE and BE teams are building things that don't fit together
  - Prioritize cross-team dependencies
  - Synthesize both domains into a unified product strategy
  - Resolve conflicts between Agent 1 and Agent 2 recommendations
- **Monitors:** Everything Agent 1 and Agent 2 see, plus cross-channel conversations and meeting summaries

## 3. Data Sources

| Source | Type | What to Ingest | API |
|--------|------|---------------|-----|
| **Slack** | Communication | All channels (messages, threads, reactions) | Slack API (OAuth) |
| **Telegram** | Communication | External partner discussions + management chat | Telegram Bot API |
| **GitHub** | Code & collaboration | PRs, issues, commits, code reviews, comments | GitHub API (OAuth) |
| **Linear** | Workflow management | Issues, projects, cycles, status changes, assignees | Linear API (OAuth) |
| **Google Docs** | Meeting intelligence | AI-generated meeting summaries | Google Docs API (OAuth) |
| **Figma** | Design | Only files explicitly referenced in Slack or tagged in Linear (design files are unstructured — don't crawl proactively) | Figma API |
| **Mixpanel** | Product analytics | User events, funnels, retention, feature usage | Mixpanel API |
| **Kamino Product** | Product context | kamino.com/build (developer docs, SDK, APIs) | Public web |

**Data freshness:** Daily sync (batch processing overnight)
**Historical backfill:** 6-12 months of data from all sources
**Volume:** Moderate (~500-2000 Slack messages/day, 10+ PRs/week, daily meetings)

## 4. Core Capabilities (All Must-Haves for V1)

### 4.1 Daily Status Reports
Each agent produces a daily report covering:
- **What happened** — key activities, decisions, and changes in their domain
- **What's blocked** — issues that are stuck and why
- **What's at risk** — things that might go wrong soon
- **What's next** — upcoming priorities and their rationale
- **Opportunities spotted** — things the team might be missing
- **Cross-domain impacts** (CPO Agent) — how FE and BE work affects each other

### 4.2 Interactive Q&A
Team members can ask any agent questions and get context-rich answers:
- "What's the status of the new vault feature?"
- "Why did we deprioritize the SDK update?"
- "Who should I talk to about the indexer latency issue?"
- "What's the biggest risk to shipping by end of month?"

Answers should reference specific Slack conversations, PRs, Linear tickets, and meeting notes as evidence.

### 4.3 Priority Recommendations
Agents proactively suggest what to focus on:
- Ranked priority list with reasoning
- Trade-off analysis (what you gain vs. lose)
- Confidence level for each recommendation
- Historical context ("we tried this before and X happened")

### 4.4 Proactive Blocker/Risk Alerts
Agents flag issues as they're detected during daily processing:
- Stalled PRs or tickets with no activity
- Conflicting priorities between teams
- Dependencies that are at risk
- Scope creep detected in conversations
- Key decisions that haven't been made yet

## 5. Agent Personality & Behavior

### Communication Style
- **Constructive but unflinching** — never sugarcoats, always suggests solutions alongside problems
- Points out uncomfortable truths clearly and directly
- Backs up opinions with data and evidence from ingested sources
- Forms independent views and challenges the team when warranted

### Knowledge Depth
The quality bar is an agent that feels like **a PM who's been at the company for a year**:
- **Knows people** — who works on what, who to ask about what, individual strengths and patterns
- **Understands context** — knows WHY decisions were made, not just WHAT was decided
- **Has opinions** — doesn't just summarize, forms views based on accumulated context and pushes back
- **Remembers patterns** — recognizes recurring issues, knows what's been tried before

### Privacy Handling
- **Full access** to all data sources (no pre-filtering)
- **Smart output filtering** — agents are instructed to not surface sensitive personal information, salary discussions, or security vulnerabilities in their public outputs
- Sensitive findings are flagged to leadership only

## 6. Learning & Improvement

### Observation-Based Learning
Agents track:
- Which of their recommendations were followed vs. ignored
- Outcomes of decisions they flagged (were they right?)
- Which of their alerts turned out to be real issues
- Team response patterns to different types of insights

Over time, agents calibrate their recommendations based on what actually works for this team.

### Context Accumulation
- Each daily sync adds to a growing knowledge base
- Agents build a richer model of people, projects, patterns, and priorities over time
- The longer they run, the more valuable they become

## 7. Agency Roadmap

### Phase 1 (V1): Advisory Only
- Agents observe, analyze, and recommend
- All actions taken by humans
- Output via dashboard only

### Phase 2: Light Actions
- Post summaries to Slack channels
- Create Linear tickets for identified blockers
- Tag relevant people on flagged issues
- Draft meeting agendas based on current priorities

### Phase 3: Full Autonomy
- Assign tasks and update priorities in Linear
- Initiate conversations in Slack with relevant team members
- Trigger workflows (e.g., escalation paths)
- Manage sprint planning recommendations that auto-populate

## 8. Technical Architecture (Recommended)

### Stack Recommendation

**Why Python + Next.js:**
- Python excels at data pipelines, LLM orchestration, and API integrations
- Next.js provides a polished, fast dashboard experience
- This split plays to each language's strengths

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **LLM** | Claude API (Anthropic) | Best reasoning, long context, instruction following |
| **Agent framework** | Python with Claude Agent SDK or LangGraph | Mature agent orchestration with tool use |
| **Data pipeline** | Python (async) | ETL from 8 sources, daily batch processing |
| **Vector store** | PostgreSQL + pgvector (or Pinecone) | Store embeddings for RAG-based context retrieval |
| **Database** | PostgreSQL | Structured data, agent state, user preferences |
| **Dashboard frontend** | Next.js (TypeScript) | Fast, modern, real-time updates |
| **Dashboard backend** | Next.js API routes + Python API | Serve agent outputs, handle Q&A requests |
| **Hosting** | Vercel (frontend) + Railway/Fly.io (Python services) | Simple deployment, reasonable cost |
| **Job scheduler** | Cron / Temporal / simple scheduler | Daily sync orchestration |
| **Auth** | NextAuth.js | Team authentication for dashboard |

### Architecture Diagram (Conceptual)

```
Data Sources (8)
    │
    ▼
[Data Pipeline] ── Daily Sync ──► [Raw Data Store (PostgreSQL)]
    │                                        │
    ▼                                        ▼
[Embedding Pipeline] ──────────► [Vector Store (pgvector)]
    │
    ▼
[Agent Orchestrator]
    ├── FE PM Agent (Claude)
    ├── BE PM Agent (Claude)
    └── CPO Agent (Claude)
            │
            ▼
    [Agent Output Store]
            │
            ▼
    [Next.js Dashboard]
        ├── Daily Reports
        ├── Q&A Interface
        ├── Priority Board
        └── Alert Feed
```

### Data Flow

1. **Nightly sync** pulls latest data from all 8 sources
2. **ETL pipeline** normalizes, deduplicates, and stores raw data
3. **Embedding pipeline** creates vector embeddings for semantic search
4. **Agent runs** — each agent processes its domain's data with full context via RAG
5. **Outputs stored** — reports, recommendations, and alerts written to database
6. **Dashboard serves** — Next.js frontend displays agent outputs and handles Q&A
7. **Q&A flow** — user question → relevant context retrieved via RAG → Claude generates answer → displayed in dashboard

### Context Management Strategy

The biggest technical challenge is fitting enough context into Claude's window. Strategy:

1. **Hierarchical summarization** — Raw data → daily summaries → weekly summaries → monthly themes
2. **RAG retrieval** — For Q&A, pull the most relevant chunks from the vector store
3. **Agent memory files** — Each agent maintains a persistent "knowledge base" document that captures key facts, decisions, people, and patterns
4. **Tiered context loading:**
   - Always loaded: agent personality, team roster, current priorities, recent summaries
   - Loaded on demand: specific conversations, PR details, ticket history
   - Archived: older data accessible via RAG only

## 9. Cost Estimate

| Item | Monthly Cost |
|------|-------------|
| Claude API (3 agents, daily processing + Q&A) | $300-600 |
| Hosting (Vercel + Railway/Fly.io) | $50-100 |
| Database (PostgreSQL managed) | $30-50 |
| Vector store (if using Pinecone) | $70-100 |
| Total (using pgvector instead of Pinecone) | **$380-750** |
| Total (using Pinecone) | **$450-850** |

Fits within the $500-1000/month budget.

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Agent outputs are shallow/generic** | High — defeats the purpose | Deep prompt engineering, hierarchical context, persistent agent memory, iterative refinement |
| **Context window limits** | Medium — agents can't hold enough info | RAG + hierarchical summarization + tiered context loading |
| **API integration failures** | Medium — missing data = bad recommendations | Robust error handling, data freshness monitoring, alerts when sources go stale |
| **LLM hallucinations** | High — wrong info erodes trust | Always cite sources, confidence scoring, cross-reference between agents |
| **Cost overruns** | Low — budget is comfortable | Token usage monitoring, smart caching, smaller models for summarization tasks |
| **Team doesn't trust agents** | Medium — adoption failure | Start with advisory only, build trust through accuracy, gradual autonomy |

## 11. Success Criteria

The system is successful when:

1. **Within 2 weeks:** All 3 agents produce daily reports that team members actually read
2. **Within 1 month:** Team regularly uses Q&A to get context instead of searching Slack/Linear manually
3. **Within 2 months:** Agent recommendations influence at least 50% of sprint planning decisions
4. **Within 3 months:** Agents catch at least 2 real blockers or misalignments per week that humans missed
5. **Within 6 months:** Leadership spends 50% less time on PM coordination work

## 12. Out of Scope (V1)

- Actions/write-back to any service (Phase 2+)
- Real-time streaming (daily batch is sufficient)
- Mobile app (web dashboard only)
- External-facing outputs (internal team tool only)
- Multi-company/multi-tenant support (single company only)
- Proactive Figma crawling (only ingest files referenced in Slack/Linear)

## 13. Resolved Questions

| # | Question | Answer |
|---|---------|--------|
| 1 | Internal dashboards | kamino.com/build (developer docs hub — Earn vaults, Borrow/Lend, SDK, APIs). manage.kamino.com is a management portal, not a dashboard. |
| 2 | Telegram structure | Two chat types: (a) external partner discussions, (b) management chat. Both should be ingested. |
| 3 | Figma organization | Design files are unstructured. **Only ingest Figma files explicitly referenced/shared in Slack or tagged in Linear.** Do not crawl Figma proactively. |
| 4 | Linear workspace structure | To be discovered by connecting to Linear API during implementation. Teams include FE, Design, Marketing (and BE soon). |
| 5 | Google Docs meeting summaries | Consistent format, but **no centralized location yet.** A system needs to be set up to route all org meeting notes to a single ingestible location. **This is a prerequisite dependency.** |
| 6 | Team roster | Derived automatically from Slack members and Linear assignees. No manual roster needed — agents build their people knowledge from data. |

## 14. Prerequisites & Dependencies

Before the agent system can be fully operational, these must be in place:

### 14.1 Meeting Notes Centralization (BLOCKING)
- **Problem:** Meeting notes are scattered — no single location for all org meeting summaries
- **Required:** Set up a system that ensures ALL meeting notes across the entire org go to one ingestible location
- **Options:**
  - Google Drive shared folder with enforced naming convention
  - Notion database with meeting template
  - Dedicated Slack channel where AI summaries are auto-posted
  - Custom intake form that writes to a central store
- **Must be solved before:** Google Docs ingestion pipeline can be built

### 14.2 API Access Verification
- Confirm API tokens/OAuth for: Slack, Telegram, GitHub, Linear, Google Docs, Figma, Mixpanel
- Most are reportedly set up — needs verification during implementation

### 14.3 Linear Backend Team Onboarding
- Backend team is not yet fully on Linear
- **Mitigation:** Until BE migrates to Linear, their work is visible through GitHub (PRs, issues, commits, reviews) — the BE PM agent will lean more heavily on GitHub data in the interim

---

**Next step:** Review this spec. Once approved, we'll create a detailed implementation plan.
