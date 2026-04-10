# GEMINI.md

- 提案などは日本語で行うこと

## Project Overview

This is a personal portfolio and blog site built with **Nuxt 4**, **Nuxt Content (v3)**, and **Tailwind CSS (v4)**. It is deployed on **Cloudflare Pages** and uses **Cloudflare D1** for content indexing.

### Key Technologies
- **Framework:** [Nuxt 4](https://nuxt.com/docs/getting-started/introduction) (v4.4.2)
- **Content Management:** [Nuxt Content v3](https://content.nuxt.com/) (Markdown-based, v3.12.0)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (v4.2.2)
- **Icons:** [@nuxt/icon](https://nuxt.com/modules/icon) (Lucide and Material Design Icons)
- **Images:** [@nuxt/image](https://image.nuxt.com/) (v2.0.0)
- **Markdown Processing:** 
  - `remark-breaks`: For rendering line breaks.
  - `remark-gfm`: GitHub Flavored Markdown support.
  - `remark-link-card-plus`: For rich link previews (styled in `main.css`).
- **Runtime:** Bun
- **Deployment:** Cloudflare Pages (Git integration)
- **Database:** Cloudflare D1
- **CMS Integration:** Configured for [Pages CMS](https://pages-cms.com/) via `.pages.yml`.

## Building and Running

### Development
To start the development server with hot-module replacement:
```bash
bun run dev
```

### Build
To build the application for production:
```bash
bun run build
```

### Preview
To preview the production build locally:
```bash
bun run preview
```

## Development Conventions

### Content Structure
Content is managed in the `content/` directory and defined in `content.config.ts`:
- **Blog Posts:** Located in `content/blog/`. Collection name: `blog`. Schema includes `title`, `date`, `description`, and `tags` (object list with `name`).
- **Static Pages:** Located in `content/pages/`. Collection name: `pages`. Schema includes `title` and `description`.

### Styling
- **Tailwind CSS v4:** Styled via `@import "tailwindcss";` in `app/assets/css/main.css`.
- **Typography:** Uses "Inter" for sans-serif and "Noto Sans JP" for Japanese text. Optimized via `@plugin "@tailwindcss/typography"`.
- **Softened Monochrome Aesthetic:**
  - **Colors:** Uses `slate-50` (off-white) for backgrounds and `slate-950` (near-black) for text.
  - **Selection:** `bg-slate-950` with `text-white`.
  - **Inline Code:** `bg-slate-200/50` with `slate-800` text and refined borders.
- **Light Mode Only:** The site is locked to light mode.

### Components and Layouts
- **Layouts:** `app/layouts/default.vue`.
- **Common Components:** 
  - `AppHeader`: Navigation and branding.
  - `AppFooter`: Copyright and links.
  - `AppBreadcrumbs`: Navigation path indicators.
  - `PostCard`: Visual summary for blog entries.
  - `TableOfContents`: Dynamic TOC for long-form content.
- **Pages:** 
  - `app/pages/index.vue`: Homepage featuring latest posts.
  - `app/pages/blog/index.vue`: Blog archive.
  - `app/pages/[...slug].vue`: Dynamic rendering for content collections.

### Assets
- **Images:** Stored in `public/images/` and managed via `@nuxt/image`. Supported formats: `webp`, `avif`.

## Notable Configurations
- **`nuxt.config.ts`:** Main configuration file. Includes Tailwind Vite plugin, font preconnects, and Content markdown settings.
- **`.pages.yml`:** Configuration for Pages CMS.
- **`wrangler.toml`:** Cloudflare configuration for D1 bindings and compatibility settings.
