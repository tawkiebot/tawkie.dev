# tawkie.dev (frontend)

Next.js 14 site for the Tawkie bridge: landing page, docs, API routes, architecture diagrams.

## Commands

```bash
npm run dev       # Next.js dev server
npm run build     # Build + typecheck
npx vercel --prod # Deploy to production
npx @arach/dewey audit    # Check docs coverage
npx @arach/dewey generate # Regenerate docs artifacts
```

## Structure

```
app/
├── layout.tsx            # Root layout
├── page.tsx              # Landing page
├── globals.css           # Global styles (Tailwind 4)
├── docs/                 # Docs pages
api/                      # API route handlers
src/diagrams/             # Arc architecture diagrams
docs/                     # Markdown docs (processed by Dewey)
skill/                    # OpenClaw/ClawHub skills
convex/                   # Convex client config
```

## Conventions

- TypeScript strict mode, Next.js App Router
- Tailwind 4 via `@tailwindcss/postcss`
- Dark mode default (#0a0a0a background), minimal design
- Use `@arach/arc` for diagrams — import via ArcDiagram component
- Use `@arach/dewey` for docs — markdown in `docs/`, config in `dewey.config.ts`
- Path alias: `@/*` maps to project root
- Skills follow the OpenClaw/ClawHub markdown format with YAML frontmatter

## Quick Navigation

- **Diagrams** → `src/diagrams/` (Arc format)
- **Docs** → `docs/` (Dewey markdown)
- **API routes** → `app/api/` or `api/`
- **Skills** → `skill/` (ClawHub format)
- **Styles** → `app/globals.css` (Tailwind 4)
