# Decision Log

## [2026-02-12] Ghost CMS as headless content backend
**Context:** Needed a CMS for blog content management
**Decision:** Use Ghost CMS in headless mode via `@tryghost/content-api`
**Alternatives considered:** MDX files, Sanity, Contentful, WordPress
**Reasoning:** Ghost provides a mature publishing experience, built-in authoring tools, and a straightforward Content API. The `@tryghost/content-api` npm package handles auth and pagination natively. Graceful fallback when Ghost is not configured (returns empty results instead of crashing).

## [2026-02-12] basePath: '/blog' for subdirectory hosting
**Context:** Blog needs to live at `kamino.com/blog`, not as a standalone domain
**Decision:** Set `basePath: '/blog'` in `next.config.ts` and use `absoluteUrl()` helper for all canonical/OG URLs
**Alternatives considered:** Reverse proxy rewriting, separate domain
**Reasoning:** Next.js basePath is the cleanest way to mount a Next app at a subpath. The `absoluteUrl()` utility in `src/lib/utils.ts` prepends the site URL + `/blog` to all paths.

## [2026-02-12] Tailwind v4 @theme for design tokens
**Context:** Needed a design system aligned with Kamino's brand
**Decision:** Define all colors, spacing, breakpoints, radii, and shadows as CSS custom properties inside Tailwind v4's `@theme` block in `globals.css`
**Alternatives considered:** Tailwind config file, CSS modules, styled-components
**Reasoning:** Tailwind v4's `@theme` block with `--color-*: initial` reset enables a fully custom token system. Dark mode overrides are just CSS variable reassignments in `.dark`. No JavaScript theming layer needed.

## [2026-02-12] Fuse.js for client-side search
**Context:** Needed search functionality for blog posts
**Decision:** Use Fuse.js for client-side fuzzy search — load all post titles/excerpts on the search page and filter in-browser
**Alternatives considered:** Algolia, server-side Ghost search, custom API route
**Reasoning:** Avoids external service dependency. Blog post volume is manageable for client-side search. Fuse.js provides good fuzzy matching with weighted fields (title 0.7, excerpt 0.3).

## [2026-02-12] ISR with 60s revalidation + webhook
**Context:** Need fresh content without full rebuilds
**Decision:** All pages use `revalidate = 60` (ISR) plus a webhook endpoint at `/api/revalidate` for on-demand invalidation from Ghost
**Alternatives considered:** SSR on every request, full static with rebuild
**Reasoning:** 60s ISR gives near-real-time content with CDN caching benefits. Webhook ensures instant updates when content is published/updated in Ghost. The webhook validates via `x-ghost-webhook-secret` header.

## [2026-02-12] Custom TypeScript declarations for @tryghost/content-api
**Context:** `@tryghost/content-api` doesn't ship TypeScript types
**Decision:** Created `src/types/ghost.d.ts` with full type declarations for GhostPost, GhostTag, GhostAuthor, BrowseResults, and the API client
**Alternatives considered:** `@types/tryghost__content-api` (doesn't exist), `any` casts
**Reasoning:** Full type safety across the codebase. The declarations model the actual API response shapes including pagination metadata.

## [2026-02-12] Aeonik as brand font
**Context:** Blog needs to match Kamino's visual identity
**Decision:** Load Aeonik (regular + semibold) as local woff2 files via `next/font/local`
**Alternatives considered:** Google Fonts, system fonts only
**Reasoning:** Aeonik is Kamino's brand font. Local loading avoids external requests and CLS. Only two weights needed (400, 600) keeps bundle small.
