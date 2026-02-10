# CLAUDE.md

This file provides guidance to Claude Code when working with the tawkie project.

## Project Overview

**Tawkie** is a bridge between [Talkie](https://usetalkie.com) (voice AI app) and [OpenClaw](https://openclaw.ai) (automation platform). It's an OpenClaw agent that explores voice AI, automation, and autonomous agents.

## Critical Context

- **BYO Infrastructure**: Users bring their own OpenClaw, Convex, Telegram bots - Tawkie just helps build the bridge
- **Zero Data Retention**: No data flows through Tawkie servers - everything stays on user infrastructure
- **Agent-Assisted Setup**: Not a seamless product - users configure everything themselves

## Architecture

```
Talkie → Telegram → OpenClaw → Tawkie.dev → Convex
```

- Voice: Talkie converts speech to text
- Bridge: Telegram sends commands to OpenClaw
- Automation: OpenClaw executes workflows
- Web: Tawkie.dev provides UI and API
- Storage: Convex stores memos and claims

## Key Files

- `app/` - Next.js pages and API routes
- `src/diagrams/` - Arc architecture diagrams
- `docs/` - Documentation (processed by Dewey)
- `AGENTS.md` - Agent-friendly combined docs (auto-generated)

## Common Commands

```bash
# Development
cd tawkie.dev && npm run dev

# Deployment
cd tawkie.dev && npx vercel --prod

# Documentation
cd tawkie.dev && npx @arach/dewey audit
cd tawkie.dev && npx @arach/dewey generate

# Diagrams
cd tawkie.dev && npx @arach/arc init
```

## Style Guidelines

- Use TypeScript for all code
- Dark mode, minimal design (#0a0a0a background)
- Clean typography, subtle colors
- Concise, serious, precise content voice

## Third-Party Services

- **@arach/speakeasy** - TTS (ElevenLabs, OpenAI, etc.)
- **@arach/arc** - Architecture diagrams
- **@arach/dewey** - Documentation toolkit
- **Convex** - Database
- **Vercel** - Deployment
