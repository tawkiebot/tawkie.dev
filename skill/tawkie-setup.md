# SKILL: tawkie-setup

**Purpose:** Help users set up their own Tawkie infrastructure (BYO - Bring Your Own)

**When to use:** User wants to connect Talkie to their own R2/Convex/Telegram

## Prerequisites

User needs:
1. **Cloudflare R2** bucket (10GB free, $0 egress) - https://developers.cloudflare.com/r2/
2. **Convex** account - https://convex.dev/
3. **Telegram bot** - @BotFather on Telegram

## Setup Steps

### Step 1: Convex Setup

```bash
cd ~/dev/tawkie/convex
npx convex login
npx convex deploy
```

This deploys:
- `schema.ts` - Database tables (memos, claims, connections)
- `memos.ts` - CRUD operations for voice memos
- `claims.ts` - One-time config import flow

### Step 2: Get Convex Environment Variables

```bash
npx convex env --help
```

Add to `~/dev/tawkie/.env`:
```env
CONVEX_URL="https://your-project.convex.cloud"
CONVEX_DEPLOY_KEY="your_deploy_key"
```

### Step 3: R2 Configuration

Add to `~/dev/tawkie/.env`:
```env
R2_ACCOUNT_ID="your_cloudflare_account_id"
R2_ACCESS_KEY_ID="your_r2_access_key"
R2_SECRET_ACCESS_KEY="your_r2_secret_key"
R2_BUCKET_NAME="tawkie-memos"
```

### Step 4: Telegram Bot

Get bot token from @BotFather:
1. Message @BotFather on Telegram
2. `/newbot` - Follow prompts
3. Copy the HTTP API token

Add to `~/dev/tawkie/.env`:
```env
TELEGRAM_BOT_TOKEN="your_bot_token"
TELEGRAM_CHAT_ID="your_chat_id"
```

## File Locations

| Component | Location |
|-----------|----------|
| Voice AI | `~/dev/tawkie/src/` |
| Convex Backend | `~/dev/tawkie/convex/` |
| Website (Vercel) | `~/dev/tawkie.dev/` |
| ClawHub Skill | `~/.openclaw/skills/tawkie/` |

## Architecture

```
┌─────────────────────────────────────────────────────┐
│ User's Infrastructure (owned by user)              │
│                                                     │
│  ┌─────────┐    ┌─────────┐    ┌─────────────┐     │
│  │ R2      │    │ Convex  │    │ Telegram    │     │
│  │ Storage │    │ Database│    │ Bot          │     │
│  └────┬────┘    └────┬────┘    └──────┬──────┘     │
│       │              │                 │            │
│       └──────────────┼─────────────────┘            │
│                      ▼                              │
│              ┌─────────────────┐                     │
│              │  Talkie App     │                     │
│              │  (Voice Input)  │                     │
│              └────────┬────────┘                     │
│                       │                              │
│                       ▼                              │
│              ┌─────────────────┐                     │
│              │  OpenClaw        │                     │
│              │  (Automation)    │                     │
│              └─────────────────┘                     │
└─────────────────────────────────────────────────────┘
```

## Commands Reference

| Task | Command |
|------|---------|
| Deploy Convex | `cd ~/dev/tawkie/convex && npx convex deploy` |
| View logs | `npx convex logs` |
| Run dev server | `npx convex dev` |
| Open dashboard | `npx convex dashboard` |

## Troubleshooting

**"Cannot find module './_generated/server'"**
→ Run `npx convex deploy` to generate types

**"R2 access denied"**
→ Check R2 credentials in `.env`
→ Verify bucket name matches

**"Telegram bot not responding"**
→ Test bot token with: `curl https://api.telegram.org/bot<TOKEN>/getMe`

## Notes

- Tawkie follows **BYO infrastructure** - users own their data
- No data flows through tawkie.dev servers
- Convex functions run in user's cloud
- Zero cost for basic usage (R2 10GB free, Convex free tier)
