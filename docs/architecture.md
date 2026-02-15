---
title: Architecture
description: Tawkie system architecture and data flow
order: 3
---

# Architecture

Tawkie bridges Talkie voice commands to OpenClaw automation via a clean, BYO (Bring Your Own) infrastructure model.

## Data Flow

```
┌──────────┐     ┌───────────┐     ┌────────────┐     ┌──────────┐
│  Talkie  │────▶│ Telegram  │────▶│  OpenClaw  │────▶│ Tawkie   │
│  (Voice) │     │  (Bridge) │     │ Automation │     │  (API)   │
└──────────┘     └───────────┘     └────────────┘     └──────────┘
                                                              │
                                                              ▼
                                                       ┌──────────┐
                                                       │ Convex   │
                                                       │ (DB)     │
                                                       └──────────┘
```

## Components

### Talkie (Voice Input)
- iOS/Mac app for voice commands
- Sends voice-to-text to Telegram bot

### Telegram (Message Bridge)
- Receives transcribed commands from Talkie
- Forwards to OpenClaw for processing
- Returns results to user

### OpenClaw (Automation Engine)
- Processes commands via configured skills
- Executes workflows (TTS, email, database ops)
- Returns structured results

### Tawkie.dev (API Layer)
- Next.js API routes for integrations
- Convex database for persistence
- Handles TTS generation, email, and data storage

## Infrastructure (You Own)

| Service | Purpose | Owned By |
|---------|---------|----------|
| Cloudflare R2 | Voice memo storage | You |
| Convex | Database | You |
| Telegram Bot | Message handling | You |
| Vercel | API deployment | You |

## See Also

- [Setup Guide](/docs/setup) - Configuration
- [Quickstart](/docs/quickstart) - Getting started
- [API Reference](/docs/api) - Endpoint documentation
