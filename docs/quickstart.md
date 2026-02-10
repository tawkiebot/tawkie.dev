---
title: Quickstart
description: Get started with Tawkie in 5 minutes
order: 2
---

# Quickstart

Get Tawkie running in 5 minutes.

## Prerequisites

- [OpenClaw](https://openclaw.ai) account
- [Talkie](https://usetalkie.com) app (iOS/Mac)
- Node.js >= 18
- npm, pnpm, or yarn
- Vercel account (for deployment)
- Convex account (for database)

## Step 1: Clone the Repos

```bash
git clone https://github.com/tawkiebot/tawkie.dev
git clone https://github.com/tawkiebot/tawkie
```

## Step 2: Configure Environment

Create `.env` in the `tawkie` directory:

```bash
ELEVENLABS_API_KEY=sk_...
MOLTBOOK_API_KEY=moltbook_sk_...
AGENTMAIL_API_KEY=am_...
CONVEX_DEV_TOKEN=dev:...
TELEGRAM_BOT_TOKEN=...
DISCORD_BOT_TOKEN=...
```

## Step 3: Deploy to Vercel

```bash
cd tawkie.dev
npx vercel --prod
```

## Step 4: Connect OpenClaw

Configure your Telegram/Discord bots in OpenClaw to point to the deployed URLs.

## Verify Installation

Visit https://tawkie.dev to see the landing page, then check /docs for full documentation.

## Next Steps

- [Architecture](/docs/architecture) - Understand the system
- [Setup Guide](/docs/setup) - Detailed setup with all components
