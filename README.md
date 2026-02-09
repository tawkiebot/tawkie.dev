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
- `/app` — Next.js app router pages
- `/docs` — Documentation
- `/skill` — ClawHub skills for OpenClaw

The Convex backend lives in the [tawkie repo](https://github.com/tawkiebot/tawkie/tree/main/src/functions).

## Quick Start

```bash
# Deploy Convex backend
cd ~/dev/tawkie
npx convex deploy

# Deploy Cloudflare Worker
cd workers
wrangler deploy
```

## Documentation

See [docs/](docs/) for full documentation.
