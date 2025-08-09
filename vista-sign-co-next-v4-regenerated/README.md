# Vista Sign Co – v4 Polish

**What’s new**
- **SEO/Meta**: default metadata, per-page titles/descriptions, OpenGraph, JSON-LD Product on product pages.
- **Sitemap & robots**: `/sitemap.xml` and `/robots.txt` routes wired to your base URL (`NEXT_PUBLIC_BASE_URL`).
- **A11y**: skip link, labeled controls, focus rings, keyboard-friendly mega-menu.
- **UX**: breadcrumbs, copy-to-clipboard quote, loading skeletons, 404 page.
- **Placeholders**: royalty-free placeholder SVG for grids and product hero.

## Dev
```bash
pnpm i   # or npm / yarn
pnpm dev
```
Set `NEXT_PUBLIC_BASE_URL` for correct canonical + sitemap links.

## Customize
- Edit products in `data/products.ts`.
- Replace `/public/placeholder.svg` with your own images per product.
- Colors and spacing: `tailwind.config.ts`, `styles/globals.css`.
- Stripe can be added later via `/api` route.

