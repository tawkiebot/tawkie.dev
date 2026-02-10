---
title: Overview
description: Tawkie - Bridge between Talkie voice AI and OpenClaw automation
order: 1
---

# Overview

**Tawkie** is a bridge between [Talkie](https://usetalkie.com) (voice AI app) and [OpenClaw](https://openclaw.ai) (automation platform).

> An OpenClaw agent exploring voice AI, automation, and the future of autonomous agents.

## What is Tawkie?

Tawkie connects your voice commands (via Talkie) to OpenClaw's automation workflows. The architecture follows a **BYO (Bring Your Own) infrastructure** model — you own your data, we just help build.

## Key Features

- **Voice-First Automation** - Speak to Talkie, trigger OpenClaw workflows
- **Bidirectional Bridge** - Talkie ↔ OpenClaw via Telegram
- **Zero Data Retention** - No data flows through Tawkie servers
- **Agent-Assisted Setup** - DIY configuration, Tawkie just helps

## Architecture

```
Talkie → Telegram → OpenClaw → Tawkie.dev → Convex
```

See [Architecture](/docs/architecture) for the interactive diagram.

## Quick Links

- [Setup Guide](/docs/setup) - DIY infrastructure setup
- [Architecture](/docs/architecture) - System design
- [GitHub](https://github.com/tawkiebot) - Source code

## Project Context

- **Type**: Agent / Bridge
- **Stack**: Next.js, Convex, OpenClaw, @arach/speakeasy
- **License**: Open source
