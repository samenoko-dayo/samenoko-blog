# Design System: Softened Monochrome

This document defines the visual language and UI constraints for the project. All new components and stylistic updates must adhere to these rules.

## Core Palette (Slate-based)
We avoid pure #000 and #FFF to reduce eye strain while maintaining a high-contrast, professional look.
- **Base Background:** `slate-50` (`#f8fafc`)
- **Card/Section Background:** `white` (`#ffffff`)
- **Primary Text:** `slate-950` (`#020617`) for headings and body.
- **Secondary Text:** `slate-600` (`#475569`) for metadata and descriptions.
- **Muted Text:** `slate-400` (`#94a3b8`) for placeholders and subtle details.
- **Borders:** `slate-200` (`#e2e8f0`) for primary dividers, `slate-300` for active or strong separation.
- **Highlight:** `slate-900` for emphasis elements (pills, dots).

## Typography
- **Primary Font:** "Inter" (Sans-serif) for high legibility.
- **Japanese Font:** "Noto Sans JP".
- **Scale:**
  - H1: `text-4xl` to `text-6xl`, `font-extrabold`, `tracking-tight`.
  - H2: `text-2xl`, `font-bold`.
  - Body: `text-base` or `text-lg`.

## Geometry & Spacing
- **Border Radius:**
  - `rounded-md`: Small elements (inline code, tags).
  - `rounded-lg`: Link cards.
  - `rounded-xl`: Post cards and interactive containers.
  - `rounded-2xl`: Hero sections and prose containers.
  - `rounded-full`: Decorative markers.
- **Container:** Max-width `7xl` (`max-w-7xl`) with `px-6` horizontal padding.

## Layout Patterns
- **Section Headers:** Section titles often feature a decorative marker: `<span class="w-1.5 h-6 bg-slate-900 rounded-full"></span>`.
- **Grid Layout:** 1-column on mobile, 2-column on tablet (`md`), 3-column on desktop (`lg`) for post lists.
- **Prose Content:** `max-w-none` prose using `prose-slate`. 12-column grid on large screens with sidebar. Prose containers use `p-8` (`2rem`) padding to maintain a refined density.

## Components & Interactive Behavior
- **Icons:** Exclusively use Lucide icons via `<Icon name="lucide:..." />`.
- **Transitions:** Default `duration-300` or `duration-200` for smooth state changes.
- **Cards (PostCard):** 
  - `hover:border-slate-400` and `hover:shadow-md`.
  - Internal images use `@nuxt/image` with `aspect-video` or similar.
- **Link Cards (remark-link-card-plus):** 
  - Flex layout for horizontal preview on larger screens.
  - `border-slate-200` with subtle hover transitions.
- **Buttons/Links:** 
  - `group-hover:translate-x-1` for arrow icons.
  - `active:scale-95` for tactile click effects.

## Prose & Technical Elements
- **H2 Decoration:** `border-b border-slate-200 pb-2 !mb-6`.
- **Inline Code:** `bg-slate-200/50 text-slate-800 px-1.5 py-0.5 rounded-md border border-slate-200`.
- **Code Blocks:** `bg-slate-900` background with `border-slate-200` and custom Shiki theme (Catppuccin Macchiato).
- **Scrolling:** `scroll-behavior: smooth` with `scroll-padding-top: 96px` to avoid header overlap.
