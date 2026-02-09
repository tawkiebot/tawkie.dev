---
name: tawkie
description: Work with voice memos from Talkie.
emoji: 🦞
homepage: https://tawkie.dev
---

# Tawkie

Voice memos from Talkie, delivered to your Claw.

## When you see a talkie.to link

The user has sent a memo via Talkie's "Send to Tawkie" feature.

## Fetch memo details

```bash
web_fetch https://talkie.to/m/{memoId}.json
```

Returns:
```json
{
  "id": "memo_abc123",
  "title": "Meeting notes",
  "transcript": "Full transcript text...",
  "duration": 45.2,
  "audioUrl": "https://cdn.talkie.to/...",
  "createdAt": "2026-02-09T10:30:00Z",
  "tags": ["meeting", "work"]
}
```

## Common actions

- **Summarize the memo** — Give a brief overview
- **Extract action items** — List tasks mentioned
- **Draft a follow-up** — Write email/Slack message
- **Add to task list** — Create tasks from the memo
- **Answer questions** — "What was decided about X?"

## Example conversation

```
User: Check out this memo
Claw: 🎙️ Got it. Let me fetch the details.
(transcript appears)
Claw: Key points:
• Decided to prioritize mobile app
• John will lead iOS work
• Budget approved for Q2

Want me to extract action items or draft a follow-up?
```

## Setup

The user needs to configure their infrastructure:
1. Cloudflare R2 bucket (free tier: 10GB storage, $0 egress)
2. Optional: Convex database
3. Telegram bot for notifications

Run the `tawkie-setup` skill to guide the user through setup.
