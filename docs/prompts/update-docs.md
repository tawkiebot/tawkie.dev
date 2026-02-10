---
title: Update Documentation
description: Template for updating Tawkie documentation
---

# Update Documentation

Use this template when updating documentation for Tawkie.

## Context

Tawkie docs live in `docs/` and are processed by Dewey. Run `dewey generate` to update AGENTS.md after changes.

## Documentation Files

- `overview.md` - Project introduction
- `quickstart.md` - Getting started guide
- `setup.md` - Detailed setup instructions
- `architecture.md` - System design (with Arc diagram)
- `skill.md` - Agent skill definitions

## Dewey Commands

```bash
# Check documentation completeness
npx @arach/dewey audit

# Check agent-readiness
npx @arach/dewey agent

# Generate agent files
npx @arach/dewey generate
```

## Style Guidelines

- Dark theme (#0a0a0a background)
- Clean typography
- Concise, serious voice
- Use markdown headers for structure
- Include code examples where helpful

## Checklist

- [ ] Content is accurate
- [ ] Code examples work
- [ ] Links are correct
- [ ] Agent-readiness score improved
- [ ] AGENTS.md regenerated
