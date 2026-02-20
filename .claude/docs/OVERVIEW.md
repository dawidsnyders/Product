# Kamino Blog

## What This Is
A blog frontend for Kamino Finance — a DeFi protocol on Solana. The blog serves product updates, protocol insights, and announcements. It's a Next.js 16 app that pulls content from a Ghost CMS headless instance and is designed to be embedded at `kamino.com/blog` via a `basePath` configuration.

## Current State
**Phase: Initial build complete, not yet deployed. Nothing committed beyond the initial `create-next-app` scaffolding — all work is uncommitted.**

What's built and working:
- Full Ghost CMS integration (`src/lib/ghost.ts`) — all CRUD operations for posts, tags, authors
- Homepage with featured post hero + post grid + category filter (`src/app/page.tsx`)
- Individual post pages with full metadata, related posts, author cards, share buttons (`src/app/[slug]/page.tsx`)
- Category pages filtered by Ghost tag (`src/app/category/[slug]/page.tsx`)
- Author pages with bio, social links, and their posts (`src/app/author/[slug]/page.tsx`)
- Client-side search using Fuse.js (`src/app/search/page.tsx`, `src/lib/search.ts`)
- Dark/light theme toggle via `next-themes`
- RSS feed at `/blog/rss.xml`
- Dynamic sitemap generation (`src/app/sitemap.ts`)
- JSON-LD structured data on post pages (`src/components/seo/JsonLd.tsx`)
- Webhook-based revalidation endpoint (`src/app/api/revalidate/route.ts`)
- Custom 404 page
- Complete design system with Kamino brand colors, custom spacing scale, Aeonik font
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)

What's NOT built yet / known gaps:
- "Load more" button in `PostGrid` has no click handler — pagination is visual only
- Newsletter signup component (`NewsletterSignup.tsx`) likely needs a real form action
- No analytics integration
- Ghost CMS not connected (using env vars from `.env.local.example`)
- Nothing is committed — all changes are unstaged

## Tech Stack & Key Dependencies
- **Framework:** Next.js 16.1.6 (App Router, React 19)
- **CMS:** Ghost CMS (headless, via `@tryghost/content-api` v1.12.3)
- **Styling:** Tailwind CSS v4 with custom `@theme` design tokens in `globals.css`
- **Theming:** `next-themes` for dark/light mode
- **Search:** Fuse.js for client-side fuzzy search
- **Dates:** date-fns
- **Fonts:** Aeonik (local, woff2 in `public/fonts/`)
- **Package manager:** pnpm

## Architecture Notes
```
src/
├── app/                    # Next.js App Router pages
│   ├── [slug]/             # Individual post pages
│   ├── api/revalidate/     # Webhook for Ghost → Next.js cache invalidation
│   ├── author/[slug]/      # Author archive pages
│   ├── category/[slug]/    # Tag/category archive pages
│   ├── rss.xml/            # RSS feed (route handler)
│   ├── search/             # Search page
│   ├── globals.css         # Design tokens + dark mode
│   ├── layout.tsx          # Root layout (font, theme, header/footer)
│   ├── not-found.tsx       # 404
│   ├── page.tsx            # Homepage
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── blog/               # Post-related components (PostCard, FeaturedPost, PostGrid, etc.)
│   ├── common/             # Shared components (ThemeToggle, NewsletterSignup, SearchInput)
│   ├── layout/             # Header, Footer
│   └── seo/                # JsonLd structured data
├── lib/
│   ├── ghost.ts            # Ghost CMS API client + all data-fetching functions
│   ├── search.ts           # Fuse.js search index setup
│   └── utils.ts            # Date formatting, reading time, URL helpers
└── types/
    └── ghost.d.ts          # TypeScript declarations for @tryghost/content-api
```

- ISR with 60-second revalidation on all pages
- Ghost webhook hits `/api/revalidate` for on-demand invalidation
- All pages are server components except `PostGrid` (client, for future load-more) and `SearchInput` (client, for Fuse.js)
- `basePath: '/blog'` in `next.config.ts` — the app assumes it lives at `kamino.com/blog`
- Design tokens defined as CSS custom properties in Tailwind v4's `@theme` block

## What's Next
1. Wire up the "Load more" button in PostGrid for real pagination
2. Connect to actual Ghost CMS instance (set env vars)
3. Wire up NewsletterSignup to a real endpoint
4. Commit all current work
5. Deploy (target platform TBD)
6. Add analytics
