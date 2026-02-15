---
title: API Reference
description: Tawkie API endpoints and usage
order: 4
---

# API Reference

Tawkie exposes REST API endpoints for integration with OpenClaw and other automation tools.

## Base URL

```
https://tawkie.dev/api
```

## Endpoints

### Voice

#### POST /api/voice/speak
Generate speech from text using ElevenLabs.

**Request:**
```json
{
  "text": "Hello, this is Tawkie",
  "voice": "Rachel",
  "provider": "elevenlabs"
}
```

**Response:**
```json
{
  "audioUrl": "https://tawkie.dev/audio/xxx.mp3"
}
```

#### POST /api/voice/memo
Save a voice memo.

**Request:**
```json
{
  "audioUrl": "https://r2.bucket/xxx.mp3",
  "transcript": "Voice memo content",
  "tags": ["meeting", "todo"]
}
```

**Response:**
```json
{
  "memoId": "conv_xxx",
  "createdAt": "2026-02-15T08:00:00Z"
}
```

### Memos

#### GET /api/memos
List memos with optional filters.

**Query Parameters:**
- `limit` (default: 20)
- `tag` - Filter by tag
- `since` - ISO timestamp

**Response:**
```json
{
  "memos": [
    {
      "id": "conv_xxx",
      "transcript": "Meeting notes...",
      "tags": ["meeting"],
      "createdAt": "2026-02-15T08:00:00Z"
    }
  ]
}
```

#### GET /api/memos/:id
Get a specific memo.

**Response:**
```json
{
  "memo": {
    "id": "conv_xxx",
    "transcript": "Meeting notes...",
    "audioUrl": "https://r2.bucket/xxx.mp3",
    "tags": ["meeting"],
    "createdAt": "2026-02-15T08:00:00Z"
  }
}
```

### Email

#### POST /api/email/send
Send an email via AgentMail.

**Request:**
```json
{
  "to": "user@example.com",
  "subject": "Test email",
  "body": "Email content",
  "from": "tawkie@agentmail.io"
}
```

**Response:**
```json
{
  "messageId": "msg_xxx",
  "sentAt": "2026-02-15T08:00:00Z"
}
```

### Webhook

#### POST /api/webhook/telegram
Telegram webhook endpoint for incoming commands.

**Headers:**
- `X-Telegram-Bot-Api-Secret-Token`: Secret token for verification

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CONVEX_URL` | Convex deployment URL |
| `R2_*` | Cloudflare R2 credentials |
| `ELEVENLABS_API_KEY` | ElevenLabs TTS API key |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token |
| `AGENTMAIL_API_KEY` | AgentMail API key |

## Rate Limits

- 100 requests/minute per IP
- Voice generation: 10/minute
- Webhooks: unlimited

## Errors

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests"
  }
}
```

## See Also

- [Architecture](/docs/architecture) - System design
- [Quickstart](/docs/quickstart) - Getting started
- [Setup Guide](/docs/setup) - Configuration
