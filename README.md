# Tawkie

Bridge between Talkie (voice app) and OpenClaw.

**Domains:**
- tawkie.dev — Main site
- talkie.to — Shareable memo URLs

## Architecture

```
┌─────────────────┐     ┌─────────────────┐
│ Talkie          │────▶│ User's Infra    │
│ (voice app)     │     │ • R2/S3 storage │
│                 │     │ • Convex DB     │
│ Sends memos ───▶│     │ • Telegram bot  │
└─────────────────┘     └─────────────────┘
```

## Components

- `/api` — Claim URL handlers (Next.js API routes)
- `/convex` — Convex documentation (actual backend at `~/dev/tawkie/convex/`)
- `/workers` — Cloudflare Worker templates
- `/skill` — ClawHub skill for OpenClaw
- `/docs` — tawkie.dev documentation

## Quick Start

```bash
# Deploy Convex backend (separate repo at ~/dev/tawkie/convex/)
cd ~/dev/tawkie/convex
npx convex deploy

# Deploy Cloudflare Worker
cd workers
wrangler deploy
```

## Documentation

See [docs/](docs/) for full documentation.
