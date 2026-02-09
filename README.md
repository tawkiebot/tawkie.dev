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

- `/api` — Claim URL handlers
- `/convex` — Convex schema and functions
- `/workers` — Cloudflare Worker templates
- `/skill` — ClawHub skill for OpenClaw
- `/docs` — tawkie.dev documentation

## Quick Start

```bash
# Deploy Convex schema
npx convex deploy

# Deploy worker
wrangler deploy
```

## Documentation

See [docs/](docs/) for full documentation.
