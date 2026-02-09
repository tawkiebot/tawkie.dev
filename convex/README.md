# Convex Backend

The Convex schema and functions live in the main Tawkie project at `~/dev/tawkie/convex/`.

## Deployment

The Convex backend is deployed separately from the Next.js frontend:

```bash
cd ~/dev/tawkie/convex
npx convex deploy
```

## Schema

Located at `~/dev/tawkie/convex/schema.ts`

## Files (in ~/dev/tawkie/convex/)

- `schema.ts` - Database schema
- `memos.ts` - Memo CRUD operations  
- `claims.ts` - One-time claim flow

This directory (`tawkie.dev/convex/`) only contains README documentation.
