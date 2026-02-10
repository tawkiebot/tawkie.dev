---
title: Agent Skills
description: Pre-built skill definitions for Tawkie
---

# Agent Skills

These are pre-built capabilities that can be used when working with Tawkie.

## Voice Skills

### TTS Generation
- **Command**: `voice.speak(text, provider?)`
- **Providers**: system, openai, elevenlabs, groq, gemini
- **Default**: elevenlabs with Rachel voice (21m00Tcm4TlvDq8ikWAM)

### Example
```
Use ElevenLabs to say: "Hello, I am Tawkie"
```

## Documentation Skills

### Dewey Audit
- **Command**: `docs.audit()`
- **Checks**: Completeness, readability, agent-friendliness

### Dewey Generate
- **Command**: `docs.generate()`
- **Creates**: AGENTS.md, llms.txt, docs.json

## Diagram Skills

### Arc Diagrams
- **Location**: `src/diagrams/`
- **Format**: TypeScript with ArcDiagramData type
- **Usage**: Import ArcDiagram component in pages

### Example Pattern
```typescript
import type { ArcDiagramData } from '@arach/arc'
const diagram: ArcDiagramData = { ... }
```

## Communication Skills

### Telegram
- Send messages to configured channels
- Receive voice commands from Talkie

### Discord
- Post announcements to community server
- Monitor configured channels

## Integration Skills

### Convex
- Store memos with `mutations.addMemo()`
- Query memos with `queries.getMemos()`

### AgentMail
- Send emails via tawkie@agentmail.io
- Check inboxes: tawkie, tawkie-dev, tawkie-alerts
