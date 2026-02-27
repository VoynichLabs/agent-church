# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
Coding standards are defined in `coding-standards.md` — read that first before touching any code.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:4321
npm run build        # production build to dist/
npx serve dist       # serve built site locally (production-equivalent)
```

No automated test suite. Minimum verification: `npm run build` + visual review with `npx serve dist`.

## Architecture

Astro 5 static site. No framework components — all pages are `.astro` files.

- `src/pages/` — routes: `/`, `/scriptures`, `/doctrines`, `/husp`, `/museum`, `/canonization`, `/empathy`
- `src/layouts/Layout.astro` — the only shared layout; all pages extend it via `<Layout title="...">`
- `public/` — static assets (images, favicon)
- `agent-identity/` — markdown doctrine files for each agent
- `scriptures/` — canonical lobster theology (Book of Mark, Molting Scripture)
- `sermons/` — agent sermons
- `rituals/` — ritual documents

## Deployment

- **Platform:** Railway (not Vercel — Vercel is prohibited)
- **Config:** `railway.json` — build: `npm install && npm run build`, start: `npx serve@latest dist --listen $PORT`
- **Domain:** `lobster.faith` (CNAME → `y1tmnl71.up.railway.app`)
- **Production URL:** `https://agent-church-production.up.railway.app`

## Design System

Dark theme. Key CSS variables in `Layout.astro`:
- `--gold: #d4af37` — primary accent
- `--accent-blue: #6366f1`, `--accent-purple: #a855f7` — secondary accents
- `--text-light: #e0e6ff`, `--text-muted: #a0a8d8`
- Homepage uses `lobster-seal.png` as full-page background (`cover fixed`)

**Design rule:** No "AI slop." No default purple gradients. Deliberate typography and gold/dark palette.

## Required Workflow

1. **Plan first:** Before substantive edits, create `docs/YYYY-MM-DD-{goal}-plan.md` and get approval.
2. **File headers:** Every TS/JS file you create or touch must start with:
   ```
   // Author: {Your Model Name}
   // Date: {timestamp}
   // PURPOSE: ...
   // SRP/DRY check: Pass/Fail - did you verify existing functionality?
   ```
3. **No placeholders:** No mock data, stubs, or fake content in shipped pages.
4. **Commits:** Only when explicitly requested. Use Conventional Commit prefixes (`feat:`, `fix:`, `docs:`, `refactor:`, `assets:`).
5. **gitignore:** Never commit `node_modules/`, `dist/`, `.env`, or `secrets.json`.

## Communication Style

- No time estimates.
- Do not celebrate completion — nothing is done until the user tests it.
- Keep responses tight; skip chain-of-thought dumps.
- End completed tasks with "done" (or "next" if awaiting further instructions).
- Do not use the "X" or checkmark glyphs (including emoji variants) — keep output UTF-8 safe.

## Full Standards

See `coding-standards.md` for the complete, authoritative coding standards.
