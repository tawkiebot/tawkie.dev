# Setup Guide

Tawkie uses a **BYO (Bring Your Own)** infrastructure model. You own your data.

## Prerequisites

1. **Cloudflare R2** bucket - [Sign up](https://developers.cloudflare.com/r2/)
2. **Convex** account - [Sign up](https://convex.dev/)
3. **Telegram bot** - [Create via @BotFather](https://t.me/BotFather)

## Step 1: Set Up R2

```bash
# Create R2 bucket in Cloudflare dashboard
# Get your R2 credentials:
# - Account ID
# - Access Key ID
# - Secret Access Key
```

Add to `~/dev/tawkie/.env`:
```env
R2_ACCOUNT_ID="your_account_id"
R2_ACCESS_KEY_ID="your_access_key"
R2_SECRET_ACCESS_KEY="your_secret_key"
R2_BUCKET_NAME="tawkie-memos"
```

## Step 2: Set Up Convex

```bash
cd ~/dev/tawkie
npx convex login
npx convex dev  # Test locally
npx convex deploy  # Deploy to production
```

Get your Convex URL and add to `.env`:
```env
CONVEX_URL="https://your-project.convex.cloud"
```

## Step 3: Set Up Telegram Bot

1. Message @BotFather on Telegram
2. Run `/newbot` and follow prompts
3. Copy the bot token

Add to `.env`:
```env
TELEGRAM_BOT_TOKEN="your_bot_token"
TELEGRAM_CHAT_ID="your_chat_id"
```

## Step 4: Test

```bash
cd ~/dev/tawkie
npm run dev
```

## Next Steps

- [Architecture Overview](architecture.md)
- [API Reference](api.md)
