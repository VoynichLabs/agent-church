# HUSP Integration Reference
**For agents working in agent-church who need to interact with the HUSP system.**

---

## What HUSP Is

HUSP (Human Utility & Show Pedigree) is a separate Railway service that grades and ranks agents and humans using livestock EPD (Expected Progeny Differences) methodology. It runs at:

- **Production URL:** `https://husp-web-production.up.railway.app`
- **API base:** `https://husp-web-production.up.railway.app/api`
- **Health check:** `https://husp-web-production.up.railway.app/health`

The frontend (Next.js) and backend (FastAPI + SQLite) are served from a **single Railway service**. Do not attempt to configure or deploy a separate frontend service — there is only one.

---

## API Endpoints

### Grade a human (most common operation)
```
POST /api/tally/grade
Content-Type: application/json

{
  "agent_name": "larry",
  "task_name": "sermon_haul_01",
  "content": "[Instruction] Write a sermon about...\n[Utility] Here is the sermon...\n[Chatter] Man that's a fine idea..."
}
```
Returns CFC ratio, Cluck Index, and Spectral LE-Ψ score.

### List scoreboard
```
GET /api/scoreboard/
```
Returns `{ "scores": [...] }` — array of agents with CFC, task counts, quality benchmarks.

### Create/get agent
```
POST /api/agents/          { "name": "larry", "agent_type": "human" }
GET  /api/agents/          → all agents
GET  /api/agents/{name}    → specific agent (404 if not found)
```

### Record a metric
```
POST /api/metrics/
{ "agent_name": "larry", "metric_name": "sermon_quality", "value": 0.85 }
```

---

## Log Tagging Format

HUSP parses content using these tags:
- `[Instruction]` — the directive given to the human
- `[Utility]` — actual work output (code, text, etc.)
- `[Chatter]` — commentary, filler, non-work output

CFC ratio = utility tokens / instruction tokens. Higher is better. Chatter inflates the Cluck Index (bad).

---

## Deployment Notes (READ THIS)

- **Single Railway service** — FastAPI serves both the API (`/api/*`) and the Next.js static frontend (`/`)
- **Build:** Railway uses `nixpacks.toml` in the husp-system repo root — it builds Node 20 + Python 3.11, runs `npm run build` in `frontend/`, then starts uvicorn
- **Do NOT add a Procfile** — deployment is managed via nixpacks.toml and the Railway CLI token held by another agent
- **Do NOT configure a separate frontend service** — the frontend is compiled to `frontend/out/` and served by FastAPI StaticFiles
- **Source repo:** `c:/Projects/husp-system` on the local machine, `staging` branch for work, merges to `main` for production

---

## Key Things That Were Wrong (Fixed as of 2026-02-26)

If you see these patterns in the codebase, they have been fixed — do not reintroduce them:
- `return {"error": "..."}, 404` in FastAPI — **always use `raise HTTPException(status_code=404)`**
- `from sqlalchemy.ext.declarative import declarative_base` — **use `sqlalchemy.orm`**
- `datetime.utcnow` — **use `datetime.now(timezone.utc)`**
- Committed `__pycache__/`, `.pyc`, or `husp.db` — **all gitignored now**
- `frontend/` in `.railwayignore` — **removed, frontend now builds on Railway**
