# Implementation Plan: AI Product Manager Agents

**Spec:** [specs/pm-agents.md](../specs/pm-agents.md)
**Date:** 2026-02-13
**Status:** Approved

---

## Overview

Build a system of 3 AI PM agents (FE PM, BE PM, CPO Agent) powered by Claude that ingest data from 8 sources nightly, produce daily reports, answer questions interactively, recommend priorities, and flag blockers — all through a dedicated web dashboard.

**Architecture:** Python monolith for data pipeline + agent orchestration, Next.js for dashboard, PostgreSQL + pgvector for storage, Claude API for reasoning.

**Why monolith over microservices:** At this scale (3 agents, daily batch, <20 users), a single Python service is simpler to deploy, debug, and maintain. We can decompose later if needed.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    NIGHTLY CRON JOB                      │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Data Pipeline (Python)                │  │
│  │                                                   │  │
│  │  Slack ─┐                                         │  │
│  │  Telegram─┤                                       │  │
│  │  GitHub ──┤   ┌──────────┐   ┌────────────────┐   │  │
│  │  Linear ──┼──►│ ETL /    │──►│ PostgreSQL     │   │  │
│  │  GDocs ───┤   │ Normalize│   │ (raw + struct) │   │  │
│  │  Figma ───┤   └──────────┘   └───────┬────────┘   │  │
│  │  Mixpanel─┤                          │            │  │
│  │  Web ─────┘                          ▼            │  │
│  │                              ┌────────────────┐   │  │
│  │                              │ pgvector       │   │  │
│  │                              │ (embeddings)   │   │  │
│  │                              └───────┬────────┘   │  │
│  └──────────────────────────────────────┼────────────┘  │
│                                         │               │
│  ┌──────────────────────────────────────┼────────────┐  │
│  │           Agent Orchestrator (Python) │            │  │
│  │                                      ▼            │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │  │
│  │  │  FE PM   │ │  BE PM   │ │   CPO Agent      │  │  │
│  │  │  Agent   │ │  Agent   │ │ (reads FE+BE     │  │  │
│  │  │          │ │          │ │  outputs first)   │  │  │
│  │  └────┬─────┘ └────┬─────┘ └────────┬─────────┘  │  │
│  │       │             │                │            │  │
│  │       └─────────────┼────────────────┘            │  │
│  │                     ▼                             │  │
│  │           ┌──────────────────┐                    │  │
│  │           │ Output Store     │                    │  │
│  │           │ (reports, alerts,│                    │  │
│  │           │  recommendations)│                    │  │
│  │           └──────────────────┘                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                 ALWAYS-ON SERVICES                       │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │            Python API (FastAPI)                    │  │
│  │  POST /qa          — interactive Q&A              │  │
│  │  GET  /reports     — daily reports                │  │
│  │  GET  /alerts      — active alerts                │  │
│  │  GET  /priorities  — priority recommendations     │  │
│  │  GET  /health      — system health + freshness    │  │
│  └───────────────────────┬───────────────────────────┘  │
│                          │                              │
│  ┌───────────────────────┼───────────────────────────┐  │
│  │        Next.js Dashboard (Vercel)                 │  │
│  │                       │                           │  │
│  │  ┌─────────┐ ┌───────┴──┐ ┌──────────┐ ┌──────┐ │  │
│  │  │ Reports │ │   Q&A    │ │Priorities│ │Alerts│ │  │
│  │  │  View   │ │ Interface│ │  Board   │ │ Feed │ │  │
│  │  └─────────┘ └──────────┘ └──────────┘ └──────┘ │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Key design decisions:**
- CPO Agent runs AFTER FE PM and BE PM, so it can read their outputs and synthesize
- Figma ingestion is triggered by detecting Figma URLs in Slack messages or Linear tickets (not by crawling Figma)
- Agent "memory" is a persistent markdown document per agent, updated after each daily run, stored in the database
- Q&A uses RAG (vector search) to find relevant context, then Claude generates the answer

---

## Phases

### Phase 0: Prerequisites & Setup
**Goal:** Resolve blocking dependencies and set up the project skeleton.

- [ ] **0.1 Meeting notes centralization** — Set up a dedicated Google Drive folder (or Slack channel) where all org meeting summaries are posted. Document the process for the team. This unblocks Google Docs ingestion.
- [x] **0.2 API access audit** — Verify API tokens/OAuth for all 8 sources. Create a checklist:
  - [x] Slack: Using xoxc/xoxd tokens (direct API). Verified — connects to Kamino workspace as dawid. Stored in `.env`.
  - [x] Telegram: Using session string (direct API). Stored in `.env`.
  - [x] Linear: Using official Linear MCP server (`https://mcp.linear.app/mcp`) via OAuth. Configured in `~/.claude/.mcp.json`.
  - [ ] GitHub: Personal access token or OAuth app with repo read access
  - [ ] Google Docs: OAuth with Drive read access to meeting notes folder
  - [ ] Figma: Personal access token with file read access (Figma MCP already configured for interactive use)
  - [ ] Mixpanel: Service account or API secret for data export
  - [ ] Anthropic: API key for Claude
- [ ] **0.3 Initialize monorepo**
  ```
  pm-agents/
  ├── pipeline/              # Python: data ingestion + ETL
  │   ├── connectors/        # One module per data source
  │   │   ├── slack.py
  │   │   ├── telegram.py
  │   │   ├── github.py
  │   │   ├── linear.py
  │   │   ├── gdocs.py
  │   │   ├── figma.py
  │   │   ├── mixpanel.py
  │   │   └── web.py
  │   ├── etl.py             # Normalize + deduplicate
  │   └── embeddings.py      # Chunk + embed for vector store
  ├── agents/                # Python: agent logic
  │   ├── base.py            # Shared agent framework
  │   ├── fe_pm.py           # FE PM agent
  │   ├── be_pm.py           # BE PM agent
  │   ├── cpo.py             # CPO agent
  │   ├── prompts/           # System prompts per agent
  │   │   ├── fe_pm.md
  │   │   ├── be_pm.md
  │   │   └── cpo.md
  │   └── memory/            # Persistent agent memory (templates)
  │       ├── fe_pm_memory.md
  │       ├── be_pm_memory.md
  │       └── cpo_memory.md
  ├── api/                   # Python: FastAPI backend
  │   ├── main.py
  │   ├── routes/
  │   │   ├── qa.py
  │   │   ├── reports.py
  │   │   ├── alerts.py
  │   │   └── priorities.py
  │   └── auth.py
  ├── dashboard/             # Next.js: frontend
  │   ├── src/
  │   │   ├── app/
  │   │   ├── components/
  │   │   └── lib/
  │   └── package.json
  ├── db/                    # Database migrations
  │   └── migrations/
  ├── scripts/               # Utility scripts
  │   ├── run_pipeline.py    # Manual pipeline trigger
  │   ├── run_agents.py      # Manual agent trigger
  │   └── backfill.py        # Historical data backfill
  ├── docker-compose.yml     # Local dev (Postgres + pgvector)
  ├── pyproject.toml
  ├── .env.example
  └── README.md
  ```
- [ ] **0.4 Set up local dev environment** — Docker Compose with PostgreSQL + pgvector, Python venv, Next.js dev server
- [ ] **0.5 Design database schema** — See schema below

**Database Schema (core tables):**

```sql
-- Raw ingested data from all sources
CREATE TABLE raw_events (
    id BIGSERIAL PRIMARY KEY,
    source VARCHAR(20) NOT NULL,        -- slack, telegram, github, linear, gdocs, figma, mixpanel, web
    source_id VARCHAR(255),             -- unique ID from the source
    event_type VARCHAR(100),            -- message, pr, issue, ticket, meeting_note, etc.
    author VARCHAR(255),                -- who created this
    content TEXT,                        -- raw content
    metadata JSONB,                      -- source-specific metadata
    source_timestamp TIMESTAMPTZ,       -- when it happened in the source
    ingested_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(source, source_id)
);

-- Vector embeddings for RAG
CREATE TABLE embeddings (
    id BIGSERIAL PRIMARY KEY,
    raw_event_id BIGINT REFERENCES raw_events(id),
    chunk_index INT,                     -- for multi-chunk documents
    content_text TEXT,                   -- the text that was embedded
    embedding vector(1536),             -- embedding vector
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX ON embeddings USING ivfflat (embedding vector_cosine_ops);

-- Agent daily reports
CREATE TABLE agent_reports (
    id BIGSERIAL PRIMARY KEY,
    agent VARCHAR(20) NOT NULL,          -- fe_pm, be_pm, cpo
    report_date DATE NOT NULL,
    report_type VARCHAR(50),             -- daily_status, priority_rec, etc.
    content JSONB NOT NULL,              -- structured report content
    raw_markdown TEXT,                   -- rendered markdown version
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(agent, report_date, report_type)
);

-- Proactive alerts
CREATE TABLE alerts (
    id BIGSERIAL PRIMARY KEY,
    agent VARCHAR(20) NOT NULL,
    alert_type VARCHAR(50),              -- blocker, risk, misalignment, opportunity
    severity VARCHAR(10),                -- high, medium, low
    title VARCHAR(500),
    description TEXT,
    evidence JSONB,                      -- references to source data
    status VARCHAR(20) DEFAULT 'active', -- active, acknowledged, resolved
    created_at TIMESTAMPTZ DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- Q&A conversation history
CREATE TABLE qa_sessions (
    id BIGSERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    agent VARCHAR(20) NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    sources JSONB,                       -- references used in answer
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Agent persistent memory
CREATE TABLE agent_memory (
    id BIGSERIAL PRIMARY KEY,
    agent VARCHAR(20) NOT NULL UNIQUE,
    memory_content TEXT NOT NULL,         -- markdown knowledge base
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Observation tracking (for learning loop)
CREATE TABLE recommendations (
    id BIGSERIAL PRIMARY KEY,
    agent VARCHAR(20) NOT NULL,
    recommendation TEXT,
    recommended_at TIMESTAMPTZ DEFAULT NOW(),
    outcome VARCHAR(20),                 -- followed, ignored, partially_followed, unknown
    outcome_notes TEXT,
    outcome_recorded_at TIMESTAMPTZ
);

-- Pipeline run tracking
CREATE TABLE pipeline_runs (
    id BIGSERIAL PRIMARY KEY,
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    status VARCHAR(20),                  -- running, completed, failed
    sources_synced JSONB,                -- per-source sync status
    events_ingested INT,
    errors JSONB
);

-- Team directory (auto-populated from Slack + Linear)
CREATE TABLE team_members (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    slack_id VARCHAR(50),
    linear_id VARCHAR(50),
    github_username VARCHAR(100),
    telegram_username VARCHAR(100),
    role VARCHAR(255),                   -- inferred from activity
    team VARCHAR(50),                    -- fe, be, design, marketing, etc.
    active BOOLEAN DEFAULT TRUE,
    metadata JSONB,                      -- activity patterns, strengths, etc.
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

### Phase 1: Data Pipeline — Connectors
**Goal:** Build connectors for all 8 data sources. Each connector pulls data via API and writes normalized events to `raw_events`.

- [ ] **1.1 Connector base class** — Shared interface: `fetch_since(timestamp) -> List[RawEvent]`, pagination handling, rate limiting, error handling, logging
- [ ] **1.2 Slack connector** — Fetch all channel messages, threads, reactions since last sync. Map users to `team_members`. Handle pagination (Slack uses cursor-based).
- [ ] **1.3 Telegram connector** — Fetch messages from partner + management chats via Bot API. Map usernames.
- [ ] **1.4 GitHub connector** — Fetch PRs (with reviews, comments), issues, commits across all org repos. This is the primary BE visibility source until Linear migration.
- [ ] **1.5 Linear integration (via MCP)** — Use the official Linear MCP server (`https://mcp.linear.app/mcp`) instead of a custom connector. The agents interact with Linear through MCP tools. Map Linear teams to agent domains (FE/Design/Marketing → FE PM, future BE → BE PM).
- [ ] **1.6 Google Docs connector** — Fetch meeting notes from the centralized folder. Parse AI-generated summaries.
- [ ] **1.7 Figma connector** — Reactive only: when Slack messages or Linear tickets contain Figma URLs, fetch file metadata + comments for those specific files.
- [ ] **1.8 Mixpanel connector** — Export key metrics: DAU, feature usage, funnel conversion, retention cohorts. Daily snapshot.
- [ ] **1.9 Web scraper (kamino.com/build)** — Periodic scrape of developer docs to keep agents aware of the public product surface.
- [ ] **1.10 Pipeline orchestrator** — Runs all connectors in sequence, handles failures gracefully (one connector failing shouldn't block others), writes to `pipeline_runs`.
- [ ] **1.11 Team directory auto-population** — Cross-reference Slack users, Linear assignees, GitHub usernames, Telegram usernames into `team_members` table.

**Validation:** Run pipeline manually, verify data in all `raw_events` rows, check each source shows expected volume.

---

### Phase 2: Embedding & RAG Pipeline
**Goal:** Chunk raw events, generate embeddings, and build a retrieval pipeline that can find relevant context for any query.

- [ ] **2.1 Chunking strategy** — Define how each source type gets chunked:
  - Slack messages: group by thread (one chunk per thread, max ~2000 tokens)
  - GitHub PRs: one chunk per PR (title + description + review comments)
  - Linear tickets: one chunk per ticket (title + description + comments)
  - Meeting notes: split by section headers
  - Mixpanel: one chunk per daily metrics snapshot
- [ ] **2.2 Embedding generation** — Use Anthropic's embedding model (or OpenAI's `text-embedding-3-small` if more cost-effective) to embed all chunks. Store in `embeddings` table with pgvector.
- [ ] **2.3 Retrieval function** — `retrieve(query: str, agent: str, top_k: int = 20) -> List[Chunk]` — Returns the most relevant chunks for a query, filtered by agent domain:
  - FE PM: prioritize Slack frontend channels, frontend repos, design tickets, Mixpanel
  - BE PM: prioritize Slack backend channels, backend repos, protocol tickets
  - CPO: search across everything
- [ ] **2.4 Hierarchical summarization pipeline** — After daily sync:
  1. Summarize each source's daily activity into a ~500 word summary
  2. Weekly: roll up daily summaries into weekly themes
  3. Monthly: roll up weekly summaries into monthly strategic overview
  - Store summaries as special entries in `raw_events` (source: "summary")
- [ ] **2.5 Historical backfill** — Run the full pipeline for 6-12 months of historical data. This will be a one-time batch job. Estimate: may take several hours depending on API rate limits.

**Validation:** Test retrieval with sample queries ("What's happening with the vault feature?", "Who's working on the SDK?"). Verify relevant chunks are returned.

---

### Phase 3: Agent Core
**Goal:** Build the agent framework, write system prompts, and get daily report generation working.

- [ ] **3.1 Agent base class** — Shared framework that:
  - Loads agent system prompt from `prompts/{agent}.md`
  - Loads persistent memory from `agent_memory` table
  - Loads today's context (daily summaries + relevant RAG chunks)
  - Calls Claude API with assembled context
  - Parses structured output (report sections, alerts, recommendations)
  - Updates persistent memory after each run
- [ ] **3.2 Context assembly** — For each daily run, assemble:
  - System prompt (~2K tokens)
  - Agent memory (~5K tokens)
  - Team roster (~1K tokens)
  - Today's source summaries (~3K tokens per source × 4-5 relevant sources = ~15K tokens)
  - Recent alerts and their status (~2K tokens)
  - Last 3 daily reports from this agent (~5K tokens)
  - Total: ~30K tokens input, well within Claude's context window
- [ ] **3.3 FE PM system prompt** — Write the personality, scope definition, output format, and instructions. Key aspects:
  - Domain expertise: UI/UX, frontend development, user metrics, design systems
  - Monitors: Figma references, frontend repos, design/FE Linear tickets, Mixpanel data
  - Tone: constructive but unflinching, cites specific evidence
  - Output structure: daily report sections, priority list, alerts
- [ ] **3.4 BE PM system prompt** — Same structure, backend domain:
  - Domain expertise: smart contracts (Solana), backend infra, APIs, SDKs, protocol security
  - Monitors: backend repos, BE GitHub activity, BE Linear tickets (when available), Slack engineering channels
  - Special instruction: lean on GitHub data until BE Linear migration completes
- [ ] **3.5 CPO Agent system prompt** — Synthesis agent:
  - Receives FE PM and BE PM reports as additional input
  - Looks for: misalignment, dependency conflicts, sequencing issues, unified strategy
  - Produces: cross-domain report, unified priority ranking, misalignment alerts
- [ ] **3.6 Daily report generation** — Orchestrate the nightly run:
  1. Run data pipeline (Phase 1)
  2. Generate embeddings for new data (Phase 2)
  3. Generate daily summaries (Phase 2)
  4. Run FE PM agent → store report + alerts
  5. Run BE PM agent → store report + alerts
  6. Run CPO Agent (with FE+BE reports as input) → store report + alerts
  7. Update agent memories
  8. Log run to `pipeline_runs`
- [ ] **3.7 Agent memory update logic** — After each run, agent reviews its memory and updates it:
  - Add new key facts (new team members, new projects, key decisions)
  - Update ongoing items (ticket progressed, blocker resolved)
  - Remove stale items
  - Record patterns ("X always ships late", "Y team velocity increased")
- [ ] **3.8 Alert generation** — Each agent identifies alerts during its run:
  - Stalled items (no activity for N days)
  - Risk signals (scope creep language, missed deadlines)
  - Misalignment (FE building something BE isn't ready for)
  - Opportunities (positive signals the team should lean into)

**Validation:** Run full pipeline + agents end-to-end. Review all 3 reports manually. Are they specific? Do they reference real data? Do they have opinions? Iterate on prompts until quality bar is met.

---

### Phase 4: API Layer
**Goal:** Build the FastAPI backend that serves agent outputs and handles Q&A.

- [ ] **4.1 FastAPI setup** — Project structure, CORS config, error handling, API key auth (simple shared key for V1, since whole team has access)
- [ ] **4.2 Reports endpoint** — `GET /reports?agent=fe_pm&date=2026-02-13` — Returns daily report for an agent. Also: `GET /reports/latest` for most recent reports from all 3 agents.
- [ ] **4.3 Alerts endpoint** — `GET /alerts?status=active` — Returns active alerts across all agents. `PATCH /alerts/:id` to acknowledge/resolve.
- [ ] **4.4 Priorities endpoint** — `GET /priorities?agent=cpo` — Returns the latest priority recommendations from an agent.
- [ ] **4.5 Q&A endpoint** — `POST /qa` with `{ agent: "fe_pm", question: "..." }` — Flow:
  1. Retrieve relevant context via RAG (Phase 2 retrieval function)
  2. Load agent system prompt + memory
  3. Call Claude with question + context
  4. Return answer with source references
  5. Store in `qa_sessions`
- [ ] **4.6 Health endpoint** — `GET /health` — Returns pipeline freshness (last successful run), per-source sync status, error counts.
- [ ] **4.7 Team endpoint** — `GET /team` — Returns auto-populated team directory from `team_members`.

**Validation:** Test all endpoints with curl/Postman. Verify Q&A returns relevant, source-cited answers.

---

### Phase 5: Dashboard
**Goal:** Build the Next.js dashboard where the team interacts with all 3 agents.

- [ ] **5.1 Next.js project setup** — App router, Tailwind CSS, dark mode (DeFi aesthetic), API client for Python backend
- [ ] **5.2 Auth** — NextAuth.js with simple provider (Google OAuth tied to company domain, or magic link). Whole team access, no role-based restrictions in V1.
- [ ] **5.3 Layout & navigation** — Sidebar with:
  - Overview (all 3 agents at a glance)
  - FE PM (dedicated view)
  - BE PM (dedicated view)
  - CPO (dedicated view)
  - Ask a Question (Q&A interface)
  - Alerts (unified feed)
  - Settings
- [ ] **5.4 Overview page** — Three-column layout showing the most recent report headline + top alert + top priority from each agent. Quick health indicators (last sync time, data freshness).
- [ ] **5.5 Agent detail page** — For each agent (FE PM, BE PM, CPO):
  - Today's full daily report (markdown rendered)
  - Historical reports (date picker)
  - Active alerts from this agent
  - Priority recommendations from this agent
  - Quick-ask Q&A (inline)
- [ ] **5.6 Q&A interface** — Chat-style interface:
  - Select which agent to ask (or "all" for CPO to route)
  - Type question → get answer with source citations
  - Source citations are clickable (link to Slack message, PR, Linear ticket, etc.)
  - Conversation history
- [ ] **5.7 Alerts feed** — Unified alert feed across all agents:
  - Filter by agent, severity, type
  - Acknowledge / resolve actions
  - Alert detail shows evidence and recommended action
- [ ] **5.8 Priority board** — Kanban-style or ranked list view:
  - Each agent's priority recommendations side by side
  - CPO's unified priority ranking highlighted
  - Confidence indicators
  - Click through to see reasoning

**Validation:** Full walkthrough of all views with real agent data. Test on desktop (primary use case). Review with a team member for UX feedback.

---

### Phase 6: Learning Loop
**Goal:** Implement observation-based learning so agents calibrate over time.

- [ ] **6.1 Recommendation tracking** — When agents make recommendations, store them in `recommendations` table with status "pending".
- [ ] **6.2 Outcome detection** — During each daily run, agents review their past recommendations and check if:
  - A recommended Linear ticket was moved to "In Progress" or "Done" → followed
  - A flagged blocker was resolved → alert was useful
  - A deprioritization recommendation was ignored and the work continued → ignored
  - Record outcomes in `recommendations` table
- [ ] **6.3 Calibration prompt injection** — When generating new recommendations, include a summary of past recommendation accuracy:
  - "Your last 10 recommendations: 7 followed, 2 ignored, 1 unknown"
  - "Recommendations that were ignored tended to be about X — consider this pattern"
- [ ] **6.4 Memory evolution** — Agents update their persistent memory with meta-observations:
  - "The team tends to prioritize customer-facing features over tech debt"
  - "Recommendations about security are always followed immediately"
  - "Sprint estimates for the SDK team are consistently 1.5x actual"

**Validation:** After 2 weeks of daily runs, verify that agent memories contain learned patterns. Check that recommendation accuracy tracking is working.

---

### Phase 7: Production Deployment
**Goal:** Deploy to production, set up monitoring, and hand off to the team.

- [ ] **7.1 Production infrastructure:**
  - PostgreSQL: Managed instance (Neon, Supabase, or Railway Postgres) with pgvector extension
  - Python services: Railway or Fly.io (pipeline + API)
  - Dashboard: Vercel
  - Cron: Railway cron or GitHub Actions scheduled workflow (daily at 6 AM)
- [ ] **7.2 Environment & secrets** — Production environment variables for all API keys, database URL, Claude API key. Use platform-native secret management.
- [ ] **7.3 Monitoring & alerting:**
  - Pipeline health: alert if nightly run fails or any source sync errors
  - API health: uptime monitoring
  - Cost tracking: Claude API usage per day
  - Data freshness: alert if any source hasn't synced in 48+ hours
- [ ] **7.4 Backfill historical data** — Run the 6-12 month backfill against production database. Monitor for rate limits and errors.
- [ ] **7.5 Agent prompt tuning** — Run agents on historical data, review output quality, iterate on prompts until the quality bar is met (knows people, understands context, has opinions).
- [ ] **7.6 Team onboarding:**
  - Share dashboard URL + auth instructions
  - Brief team on what the agents do and how to use Q&A
  - Set expectations: agents improve over time, first week will be rougher
- [ ] **7.7 Runbook** — Document:
  - How to manually trigger a pipeline run
  - How to restart services
  - How to update agent prompts
  - How to add a new data source
  - Common failure modes and fixes

**Validation:** Full end-to-end run in production. All 3 reports generated. Q&A works. Alerts appear. Dashboard loads. Team can access.

---

## File Structure (Final)

```
pm-agents/
├── pipeline/
│   ├── __init__.py
│   ├── connectors/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── slack.py
│   │   ├── telegram.py
│   │   ├── github.py
│   │   ├── linear.py
│   │   ├── gdocs.py
│   │   ├── figma.py
│   │   ├── mixpanel.py
│   │   └── web.py
│   ├── etl.py
│   ├── embeddings.py
│   └── summarizer.py
├── agents/
│   ├── __init__.py
│   ├── base.py
│   ├── fe_pm.py
│   ├── be_pm.py
│   ├── cpo.py
│   ├── context.py           # Context assembly logic
│   ├── memory.py            # Memory update logic
│   └── prompts/
│       ├── fe_pm.md
│       ├── be_pm.md
│       └── cpo.md
├── api/
│   ├── __init__.py
│   ├── main.py
│   ├── auth.py
│   ├── deps.py              # Shared dependencies (db session, etc.)
│   └── routes/
│       ├── qa.py
│       ├── reports.py
│       ├── alerts.py
│       ├── priorities.py
│       ├── health.py
│       └── team.py
├── db/
│   ├── models.py            # SQLAlchemy models
│   ├── database.py          # Connection setup
│   └── migrations/
│       └── 001_initial.sql
├── dashboard/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Overview
│   │   │   ├── agent/[id]/page.tsx   # Agent detail
│   │   │   ├── ask/page.tsx          # Q&A
│   │   │   ├── alerts/page.tsx       # Alerts feed
│   │   │   └── api/auth/[...nextauth]/route.ts
│   │   ├── components/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── ReportCard.tsx
│   │   │   ├── AlertCard.tsx
│   │   │   ├── PriorityList.tsx
│   │   │   ├── ChatInterface.tsx
│   │   │   └── HealthIndicator.tsx
│   │   └── lib/
│   │       ├── api.ts                # API client
│   │       └── types.ts
│   ├── tailwind.config.ts
│   ├── next.config.js
│   └── package.json
├── scripts/
│   ├── run_pipeline.py
│   ├── run_agents.py
│   ├── backfill.py
│   └── test_retrieval.py
├── tests/
│   ├── test_connectors.py
│   ├── test_agents.py
│   └── test_api.py
├── docker-compose.yml
├── Dockerfile
├── pyproject.toml
├── .env.example
└── README.md
```

## Testing Strategy

| Phase | What to Test | How |
|-------|-------------|-----|
| Phase 1 | Each connector pulls data correctly | Manual run + inspect `raw_events` count per source |
| Phase 2 | RAG retrieval returns relevant chunks | Test queries with known answers, verify correct chunks returned |
| Phase 3 | Agent reports are specific and opinionated | Manual review of report quality — iterate on prompts |
| Phase 4 | All API endpoints return correct data | Integration tests with pytest + httpx |
| Phase 5 | Dashboard renders correctly, Q&A works | Manual walkthrough of all views |
| Phase 6 | Recommendation tracking updates correctly | Verify outcome detection after 1 week of data |
| Phase 7 | Full system works in production | End-to-end smoke test: pipeline → agents → dashboard |

**Quality gate for agent outputs:** Before launching to the team, agent reports must pass a manual review where they:
1. Reference specific people by name
2. Cite specific Slack messages, PRs, or tickets as evidence
3. Express at least one opinion or pushback per report
4. Identify at least one risk or opportunity the team hasn't explicitly discussed

## Rollback Plan

| Scenario | Action |
|----------|--------|
| Pipeline breaks | Agents use last successful data. Dashboard shows "data stale" warning with last sync timestamp. |
| Agent produces bad output | Reports are versioned by date. Previous day's report remains accessible. Agent prompts can be hot-fixed without redeployment. |
| Database corruption | Daily automated backups (managed Postgres). Restore from backup. |
| Full system down | Dashboard shows "system offline" page. No data loss — pipeline will catch up on next successful run. |
| Cost spike | Claude API usage alerts. Can reduce agent processing scope or switch to cheaper model for summarization. |

---

**Next step:** Review this plan. Say "go" to start Phase 0.
