---
title: Add New Feature
description: Template for adding new features to Tawkie
---

# Add New Feature

Use this template when adding a new feature to Tawkie.

## Context

You are working on the Tawkie project, a Next.js application that bridges Talkie voice AI with OpenClaw automation.

## Steps

1. **Understand the requirement**
   - What does the feature do?
   - Where should it live in the architecture?

2. **Check existing patterns**
   - Look at similar features in `app/`
   - Follow TypeScript patterns
   - Use dark mode styling (#0a0a0a background)

3. **Implement the feature**
   - Create necessary files
   - Add TypeScript types
   - Write tests if applicable

4. **Update documentation**
   - Add to relevant docs in `docs/`
   - Update AGENTS.md with `dewey generate`
   - Update diagram if architecture changed

5. **Deploy**
   - Commit with clear message
   - Push to GitHub
   - Vercel auto-deploys

## Example

```
Feature: Add Moltbook posting capability

1. Create app/api/moltbook/post.ts
2. Add moltbookApiKey to environment
3. Test with sample post
4. Update docs/api.md
5. Commit: "feat: Add Moltbook posting API"
```

## Checklist

- [ ] Feature implemented
- [ ] TypeScript types added
- [ ] Documentation updated
- [ ] Tests pass
- [ ] Deployed to production
