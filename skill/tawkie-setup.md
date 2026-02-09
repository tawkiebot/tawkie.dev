---
name: tawkie-setup
description: Set up Tawkie infrastructure for your Claw.
emoji: 🦞
---

# Tawkie Setup

Guide the user through setting up their Tawkie infrastructure.

## Step 1: Storage (Required)

The user needs somewhere to store audio files.

**Recommended: Cloudflare R2**
- 10 GB free storage
- $0 egress fees (this is the killer feature)
- S3-compatible API

```bash
# Create R2 bucket
wrangler r2 bucket create tawkie-memos
```

**Alternative: Backblaze B2**
- 10 GB free storage
- 1 GB/day egress free

**Skip: AWS S3**
- Free tier expires
- Egress costs money
- Too complex for DIY users

## Step 2: Database (Optional)

For memo metadata and sharing features.

**Recommended: Convex**
- Real-time subscriptions
- TypeScript schema + functions
- Free tier: 1M function calls/month

```bash
# Deploy Convex schema
npx convex deploy
```

**Skip for MVP**
- Telegram message IS the database
- R2 stores audio
- No additional database needed

## Step 3: Notifications (Required)

How the Claw receives memo notifications.

**Telegram (Recommended)**
- Already have Telegram for OpenClaw
- Free, unlimited
- BotFather setup is conversational

```bash
# User creates bot via @BotFather
# Copy bot token and chat ID
```

## Generate Config

Once the user has all pieces, generate their config:

```json
{
  "version": 1,
  "name": "My Claw",
  "storage": {
    "provider": "r2",
    "bucket": "tawkie-memos",
    "endpoint": "https://abc123.r2.cloudflarestorage.com",
    "accessKeyId": "...",
    "secretAccessKey": "..."
  },
  "notify": {
    "provider": "telegram",
    "botToken": "123456:ABC...",
    "chatId": "-100123456789"
  }
}
```

## Tell the User

Once config is generated:

1. "Here's your tawkie-config.json"
2. "Paste this into Talkie → Settings → Tawkie"
3. "Or open: talkie://tawkie/connect?token=abc123"

## Example Conversation

```
User: Help me set up Tawkie
Claw: I'll walk you through setting up your Tawkie infrastructure:

1. STORAGE (required)
   I'll create a Cloudflare R2 bucket for you. R2 has:
   • 10 GB free storage
   • Zero egress fees (audio playback is free!)
   
   Run: wrangler r2 bucket create tawkie-memos
   Done? Let me know when you're ready for step 2.

User: Done!
Claw: Great! Now for notifications. I'll set up your Telegram bot.
   
   1. Open Telegram, search for @BotFather
   2. Send /newbot
   3. Name it (e.g., "My Tawkie")
   4. Copy the bot token
   5. Create a group and add the bot
   6. Get the group chat ID
   
   Paste your bot token and chat ID when ready.

User: [pastes credentials]
Claw: Perfect! Testing notification...
✅ Notification sent successfully!

Generating your config...
📋 Here's your tawkie-config.json:
[JSON appears]

Next:
• Open Talkie → Settings → Tawkie
• Paste the config or open: talkie://tawkie/connect?token=abc123
• You're done! 🎉
```
