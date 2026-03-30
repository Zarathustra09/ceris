# CERIS Homeowners Association Inc.
## Design System & Integrity Guide

> This document is the single source of truth for the CERIS HOA web project. Every developer, designer, or AI assistant working on this project must follow this guide to maintain a consistent, professional, and homely user experience from end to end.

---

## 1. Brand Identity

### Logo
The official CERIS logo features the wordmark **"CERIS"** in bold white on a lime-green background, with a stylized **bamboo-and-leaf icon** replacing the letter "I". The logo encapsulates the brand values: growth, nature, community, and security.

- **Logo file:** `public/images/ceris-logo.jpg`
- **Always use the actual logo image** in the Header and Footer — never replace it with a text-only or icon-only fallback unless the image truly cannot load.
- The logo renders inside a **rounded-2xl container** (`border-radius: 1rem`) with a subtle border (`border border-primary/20`) and a drop shadow (`shadow-md`).
- On hover: `group-hover:shadow-lg` and `group-hover:scale-105` for a warm, interactive feel.

### Brand Personality
| Trait | Expression |
|---|---|
| **Homely** | Warm surfaces, soft shadows, rounded corners, familiar layouts |
| **Professional** | Clear hierarchy, generous whitespace, restrained color use |
| **Modern** | Smooth motion, clean typography, subtle glass effects |
| **Trustworthy** | High contrast text, accessible touch targets, semantic HTML |

---

## 2. Color Palette

All colors are defined as DaisyUI theme tokens in `resources/css/app.css`. **Never hardcode hex or rgb values in components** — always use DaisyUI tokens or the exact `oklch()` values below when inline styles are unavoidable.

### Core Tokens

| Token | oklch Value | Hex Approx | Usage |
|---|---|---|---|
| `primary` | `oklch(76% 0.18 128)` | `#8DC63F` | Lime-green from logo — CTAs, active states, accents, badges |
| `secondary` | `oklch(50% 0.13 152)` | `#2E7D52` | Dark bamboo-green — announcement strip, section labels, hover text |
| `accent` | `oklch(65% 0.15 140)` | `#5BA05A` | Mid-sage — subtle accent elements |
| `base-100` | `oklch(100% 0 0)` | `#FFFFFF` | Main page surface, cards |
| `base-200` | `oklch(96.5% 0.008 128)` | `#F4F7EE` | Section alternating bg, form inputs |
| `base-300` | `oklch(91% 0.015 128)` | `#E5ECD8` | Borders, dividers, input borders |
| `base-content` | `oklch(22% 0.02 145)` | `#1E2A1F` | Primary text — near-black with green tint |
| `neutral` | `oklch(28% 0.025 148)` | `#273328` | Dark surfaces if needed |
| `primary-content` | `oklch(100% 0 0)` | `#FFFFFF` | Text on primary bg — always white |
| `secondary-content` | `oklch(100% 0 0)` | `#FFFFFF` | Text on secondary bg — always white |

### Semantic Tokens

| Token | Usage |
|---|---|
| `success` | Confirmed payments, active status indicators |
| `warning` | Reminder badges, due-date alerts |
| `error` | Important/urgent announcement badges |
| `info` | Informational callouts |

### Opacity Scale for Text
Use Tailwind's opacity modifier on `text-base-content` to create hierarchy without introducing new colors:

| Class | Usage |
|---|---|
| `text-base-content` | Primary body text, headings |
| `text-base-content/75` | Secondary body text |
| `text-base-content/60` | Descriptive paragraphs, card excerpts |
| `text-base-content/50` | Captions, metadata, secondary labels |
| `text-base-content/40` | Section sub-labels (uppercase tracking) |
| `text-base-content/30` | Placeholder-style labels |
| `text-base-content/35` | Footer legal text, timestamps |

### Color Usage Rules
- **Never** use raw `green-*` Tailwind colors — always use `primary`, `secondary`, or `accent` tokens.
- **Primary** is for primary CTAs, active/focus rings, badges on key announcements, and decorative accents only. Do not overuse.
- **Secondary** is for the announcement strip, section eyebrow labels (`text-primary` is preferred for eyebrows), and hover text color on nav links.
- **Background alternation:** Sections alternate between `bg-base-100` (white) and `bg-base-200/50` (light lime-tinted). Never use `bg-base-300` as a full section background.

---

## 3. Typography

### Font Family
**Instrument Sans** is the sole display and UI font for this project.

```css
font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif;
```

It is loaded via Google Fonts in `app.blade.php` and registered as `--font-sans` in `app.css`. Do not introduce any other font families.

### Type Scale & Usage

| Element | Classes | Notes |
|---|---|---|
| **Hero H1** | `text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1]` | Always Instrument Sans via inline style |
| **Section H2** | `text-3xl sm:text-4xl font-bold tracking-tight` | Page section titles |
| **Card H3** | `text-xl font-bold leading-snug` | Featured card titles |
| **Small card title** | `text-sm font-semibold` | List-style card titles |
| **Eyebrow label** | `text-xs font-bold uppercase tracking-[0.15em] text-primary` | Above every section H2 |
| **Body / descriptions** | `text-base leading-relaxed text-base-content/60` | Paragraph text under headings |
| **Small body** | `text-sm leading-relaxed text-base-content/60` | Card excerpts |
| **Micro label** | `text-[10px] font-bold uppercase tracking-widest text-base-content/35` | Form field labels, column headers in footer |
| **Badge text** | `text-[10px] font-semibold` | Inside `badge` components |

### Typography Rules
- All `H1` and `H2` elements must use `style="font-family:'Instrument Sans',sans-serif;"` inline to ensure the font applies even if Tailwind purges it.
- **Letter spacing** on headings: `tracking-tight` (`letter-spacing: -0.025em`). Never use default or loose tracking on large headings.
- Line height on hero headings: `leading-[1.1]`. On section headings: default (`leading-tight`).
- **Eyebrow labels always appear above H2s** — small, uppercase, `tracking-[0.15em]`, `text-primary`.

---

## 4. Spacing & Layout

### Max Width & Padding
All sections use a consistent container:
```html
<div class="max-w-7xl mx-auto px-6 sm:px-8">
```
- Max width: `7xl` (80rem / 1280px)
- Mobile padding: `px-6` (1.5rem)
- Desktop padding: `px-8` (2rem)

### Section Vertical Rhythm
| Context | Class |
|---|---|
| Standard content section | `py-20` |
| Hero section | `py-20 lg:py-28` |
| CTA strip | `py-16` |
| Header height | `h-[4.5rem]` |

**Never** mix `py-12`, `py-16`, and `py-20` randomly. Use `py-20` for all main content sections. Use `py-16` only for compact strips (announcement bar area, CTA strip).

### Section Alternation
Pages alternate backgrounds for visual rhythm:
```
Hero          → base-100 (white) with gradient overlay
Announcements → base-100
Amenities     → base-200/50
Board         → base-100
Contact       → base-200/50
CTA Strip     → gradient secondary→primary
```
Always follow this alternating white / light-green-tint pattern when adding new sections.

### Grid System
| Layout | Classes |
|---|---|
| Two-column (hero, board) | `grid grid-cols-1 lg:grid-cols-2 gap-12` |
| Featured + side (announcements) | `grid grid-cols-1 lg:grid-cols-5 gap-5` (3+2 split) |
| Amenity tiles | `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4` |
| Footer columns | `grid grid-cols-1 md:grid-cols-12 gap-10` |

---

## 5. Border Radius (Roundness)

This project uses a deliberately **warm, rounded** radius system. The rounded corners communicate friendliness and approachability — a key part of the "homely" feel.

| Element | Class | rem |
|---|---|---|
| Large cards, panels, form containers | `rounded-3xl` | 1.5rem |
| Standard cards, meeting rows, contact info rows | `rounded-2xl` | 1rem |
| Inputs, textareas | `rounded-xl` | 0.75rem |
| Buttons | `rounded-2xl` | 1rem |
| Small badges, pills | `rounded-full` | 9999px |
| Icon containers (small) | `rounded-xl` | 0.75rem |
| Logo container | `rounded-2xl` | 1rem |
| Avatar/initials circles | `rounded-2xl` | 1rem |

**Rule:** Never use `rounded` (4px) or `rounded-lg` (8px) on cards or buttons — they feel too sharp for this design. Minimum on interactive surfaces is `rounded-xl`.

---

## 6. Shadows

Shadows should feel soft and warm — never harsh or heavy. Use `primary`-tinted shadows on primary-colored elements.

| Context | Style |
|---|---|
| Standard cards | `shadow-sm` or `border border-base-200` only |
| Hovered cards | `shadow-md` |
| Primary CTA button | `box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4)` |
| Floating cards (hero panel) | `shadow-xl` |
| Logo image container | `shadow-md`, hover → `shadow-lg` |
| Navbar | `box-shadow: 0 1px 16px 0 oklch(76% 0.18 128 / 0.07)` |
| Modal / overlay panels | `shadow-2xl` |

**Rule:** Cards at rest use borders (`border border-base-200`) rather than shadows. Shadows appear on hover or for floating elements (hero cards, modals). This keeps the base page light and airy.

---

## 7. Borders

| Context | Class |
|---|---|
| Default card border | `border border-base-200` |
| Hovered card border | `hover:border-primary/30` |
| Active/focused input | `focus:border-primary/40` |
| Section dividers | `border-t border-base-300/50` |
| Navbar bottom | `border-b border-base-300/50` |
| Footer top | `border-t border-base-300/50` |
| Logo container | `border border-primary/20` |
| Board meeting card | `border border-primary/15` (with `bg-primary/10` fill) |

**Rule:** Always use `/50` or lower opacity on borders — full-opacity borders (`border-base-200` at 100%) read as too heavy. Structural dividers use `/50`.

---

## 8. Components

### Buttons

**Primary CTA (full weight):**
```html
<a class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content
          font-semibold rounded-2xl text-sm hover:brightness-105 hover:-translate-y-0.5
          transition-all duration-200"
   style="box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);">
  Button Label
</a>
```

**Ghost / secondary CTA:**
```html
<a class="inline-flex items-center gap-2 px-6 py-3 bg-base-100 border border-base-300
          text-base-content/70 font-medium rounded-2xl text-sm hover:bg-base-200
          hover:border-primary/30 transition-all duration-200">
  Button Label
</a>
```

**Outlined small button:**
```html
<a class="inline-flex items-center gap-2 px-5 py-2.5 border border-base-300
          text-sm font-medium text-base-content/60 rounded-xl hover:bg-base-200
          hover:border-primary/25 transition-all duration-200">
  Button Label
</a>
```

**Button rules:**
- Always include a **leading icon** (SVG, `w-4 h-4`) on primary CTAs.
- Primary buttons: `rounded-2xl`. Small utility buttons: `rounded-xl`.
- Interactive feedback: primary CTA uses `hover:-translate-y-0.5` (subtle lift). Motion buttons use `whileHover: { scale: 1.02 }` and `whileTap: { scale: 0.98 }`.
- Never use DaisyUI `btn btn-primary` on full-page CTAs — use the custom pattern above for the primary shadow effect. DaisyUI `btn` is acceptable for mobile menu and small inline actions.

### Cards

**Standard content card:**
```html
<div class="bg-base-100 border border-base-200 rounded-2xl p-5
            hover:border-primary/30 hover:shadow-md transition-all duration-200">
```

**Featured / highlight card:**
```html
<div class="bg-gradient-to-br from-primary/8 to-secondary/10 border border-primary/15
            rounded-3xl p-8">
```

**Stat / accent card (primary bg):**
```html
<div class="bg-primary rounded-3xl p-5 shadow-xl text-primary-content">
```

**Stat / accent card (secondary bg):**
```html
<div class="bg-secondary rounded-3xl p-6 shadow-xl text-secondary-content">
```

**Card rules:**
- Body text inside cards: `text-sm text-base-content/60 leading-relaxed`
- Card titles: `text-sm font-semibold text-base-content` (small cards) or `text-xl font-bold` (featured)
- Card padding: `p-5` for compact, `p-6` for standard, `p-8` for featured/hero cards
- Icon container inside card: `w-10–14 h-10–14 rounded-xl–2xl bg-primary/10`

### Badges / Pills

Always use DaisyUI `badge` with `rounded-full` and custom size overrides:

| Badge Type | Class |
|---|---|
| Important (announcements) | `badge badge-error badge-sm rounded-full font-semibold` |
| Events | `badge badge-primary badge-sm rounded-full font-semibold` |
| Reminder | `badge badge-warning badge-sm rounded-full font-semibold` |
| Status (e.g. "Open") | `badge badge-primary badge-sm rounded-full font-bold` |
| Role label (e.g. "President") | `badge badge-primary badge-sm rounded-full font-semibold` |
| Eyebrow pill (hero) | Custom: `bg-primary/10 border border-primary/25 text-secondary rounded-full px-4 py-2 text-xs font-semibold` |

### Form Inputs

All form fields use a custom style (not DaisyUI `input`) for a more refined look:
```html
<input class="w-full px-4 py-3 text-sm bg-base-200/50 border border-base-300/60
              rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/25
              focus:border-primary/40 focus:bg-base-100 transition-all
              placeholder:text-base-content/25" />
```

Field label style:
```html
<label class="block text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-1.5">
```

### Icon Containers
Small icon tiles used throughout cards, contact rows, footer, and amenities:
```html
<!-- Standard icon tile -->
<div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">
  🏊
</div>

<!-- Larger icon tile (amenities) -->
<div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
     style="background: oklch(93% 0.04 215);">
  🏊
</div>
```

### Section Eyebrow Pattern
Every major section follows this exact heading pattern:
```html
<p class="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
  Short Label
</p>
<h2 class="text-3xl sm:text-4xl font-bold text-base-content tracking-tight"
    style="font-family:'Instrument Sans',sans-serif;">
  Section Title
</h2>
```

### Avatar / Initials
Board member avatars and similar:
```html
<div class="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm
            text-primary-content shadow-sm"
     style="background: linear-gradient(135deg, oklch(76% 0.18 128), oklch(50% 0.13 152))">
  MR
</div>
```

---

## 9. Animation System

All animations use **motion-v** (`npm install motion-v`). Two reusable components handle most animation needs:

### `FadeIn.vue` — Scroll-triggered entrance
Wraps any block. Fades and slides up when scrolled into view.
```html
<FadeIn :delay="0.1">
  <YourComponent />
</FadeIn>
```
Props: `delay` (seconds, default `0`), `distance` (px, default `32`), `once` (boolean, default `true`).

Use `FadeIn` on: section headers, card grids, board member rows, meeting rows, contact info rows, and the contact form.

### `SplitText.vue` — Character entrance
Animates text character by character on page load. Use sparingly — only for the most important headline or tagline per page.

### `motion.*` primitives — Direct motion-v usage

Use `motion.div`, `motion.h1`, `motion.span`, `motion.path`, `motion.a`, `motion.button` for page-load animations and interactive micro-effects.

### Animation Timing Standards

| Effect | duration | delay | ease |
|---|---|---|---|
| Page-load entrance (badge, body text) | `0.5` | staggered `0.1–0.5` | `easeOut` |
| Hero headline slide-up | `0.7` | `0.1` | `[0.22, 1, 0.36, 1]` |
| Hero floating card | `0.8` | `0.2–0.65` | `[0.22, 1, 0.36, 1]` |
| SVG path draw (underline) | `0.9` | `0.7` | `easeInOut` |
| FadeIn scroll reveal | `0.6` | prop-controlled | `[0.25, 0.1, 0.25, 1]` |
| Button whileHover scale | `—` | `—` | spring default |
| Mobile menu Transition | `0.3` enter / `0.2` leave | `—` | `ease-out` / `ease-in` |

### Animation Rules
- **Hero section:** Use `motion.*` directly with `initial`/`animate` (fires on mount).
- **Below the fold:** Always use `FadeIn` (IntersectionObserver-driven). Never use `motion.div` with `:animate` hardcoded to visible state on below-fold content — it won't respect scroll.
- **Stagger cards in a grid:** Increment `delay` by `0.06–0.10` per item.
- **Button interactions:** `whileHover: { scale: 1.02 }` + `whileTap: { scale: 0.98 }` on primary action buttons only. Do not apply to nav links or text links.
- **Never animate layout properties** (width, height, position) — only opacity, transform (y, x, scale), and filter.

---

## 10. Background Textures & Decorative Elements

### Dot Grid
Used in the hero and CTA strip to add subtle texture without noise:
```html
<div class="absolute inset-0 pointer-events-none opacity-40"
     style="background-image: radial-gradient(circle, oklch(76% 0.18 128 / 0.25) 1.5px, transparent 1.5px);
            background-size: 36px 36px;">
</div>
```

### Gradient Blobs
Hero background uses two soft blurred circles:
```html
<div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl bg-primary/12"></div>
<div class="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl bg-secondary/10"></div>
```

### CTA Strip Gradient
```html
<div class="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary"></div>
```
Always overlay dot grid on top of gradient CTAs for depth.

### SVG Underline Accent
Used on the hero headline keyword. Animate with `motion.path` and `pathLength`:
```html
<svg viewBox="0 0 240 10" fill="none" preserveAspectRatio="none">
  <motion.path d="M2 7 C40 3, 80 3, 120 6 C160 9, 200 3, 238 6"
    stroke="oklch(76% 0.18 128 / 0.55)" stroke-width="3" stroke-linecap="round"
    :initial="{ pathLength: 0 }" :animate="{ pathLength: 1 }"
    :transition="{ duration: 0.9, delay: 0.7, ease: 'easeInOut' }" />
</svg>
```
Use this effect **once per page** on the most important keyword in the hero headline.

---

## 11. Navigation (Header)

- **Sticky** with `backdrop-blur-md` and `bg-base-100/96` for a frosted glass effect.
- Height: `h-[4.5rem]`
- Max width container: `max-w-7xl mx-auto px-5 sm:px-8`
- Logo: actual image + wordmark, always left-aligned.
- Nav links (desktop): `text-sm font-medium text-base-content/65`, hover → `text-secondary`. Animated underline with `scale-x-0 group-hover:scale-x-100 bg-primary` span.
- Right side: "Log In" ghost link + "Resident Portal" primary button.
- Mobile: hamburger (☰ / ✕ toggle), animated `<Transition>` panel with full nav links and both CTAs.
- Announcement strip above navbar: `bg-secondary text-secondary-content`, hidden on mobile (`hidden sm:block`).

---

## 12. Footer

- Background: `bg-base-200` with `border-t border-base-300/50`
- 12-column grid: brand (4 col) + Navigate (2 col) + Residents (2 col) + Contact (4 col)
- Column headers: `text-[10px] font-bold uppercase tracking-[0.15em] text-base-content/35`
- Links: `text-sm text-base-content/60 hover:text-primary transition-colors`
- Social icon buttons: `w-9 h-9 rounded-xl bg-base-300/60 hover:bg-primary/15 hover:text-primary`
- Bottom bar: `py-5`, copyright left, legal links right, separated by `·`
- Copyright and legal text: `text-xs text-base-content/35`

---

## 13. Tech Stack Reference

| Layer | Tool |
|---|---|
| Backend | Laravel (VILT stack) |
| Frontend framework | Vue 3 (Composition API, `<script setup>`) |
| Routing / SSR bridge | Inertia.js |
| CSS framework | Tailwind CSS v4 |
| Component library | DaisyUI v5 |
| Animation | motion-v |
| Font | Instrument Sans (Google Fonts) |
| Build tool | Vite |
| Theme | DaisyUI `"light"` (default: true) |

---

## 14. New Page Checklist

When building any new page or major component, verify:

- [ ] Uses `max-w-7xl mx-auto px-6 sm:px-8` container
- [ ] Sections alternate `bg-base-100` and `bg-base-200/50`
- [ ] Every section H2 is preceded by an eyebrow `<p>` in `text-primary uppercase tracking-[0.15em]`
- [ ] H2 has `style="font-family:'Instrument Sans',sans-serif;"` inline
- [ ] Cards use `rounded-2xl` (standard) or `rounded-3xl` (featured), never less than `rounded-xl`
- [ ] Buttons follow the primary CTA or ghost pattern — no bare DaisyUI `btn` on main CTAs
- [ ] Below-fold content wrapped in `<FadeIn>` with staggered `delay` on grid items
- [ ] No hardcoded hex colors — only `oklch()` or DaisyUI tokens
- [ ] No raw `green-*` Tailwind colors used anywhere
- [ ] Text hierarchy uses `text-base-content/{opacity}` modifiers correctly
- [ ] All interactive elements have `transition-all duration-200`
- [ ] Hover states on cards: `hover:border-primary/30 hover:shadow-md`
- [ ] Logo image referenced at `/images/ceris-logo.jpg`
- [ ] Mobile responsive — tested at 375px and 768px breakpoints

---

## 15. Do's and Don'ts

### ✅ Do
- Use `text-primary` for eyebrow labels and key accents
- Use `text-secondary` for nav hover states and announcement strips
- Use `oklch()` for any inline style colors, matching the token values
- Keep section spacing consistent at `py-20`
- Animate only opacity + transform (never layout)
- Wrap scroll content in `<FadeIn>` from `@/components/FadeIn.vue`
- Use `rounded-2xl` and `rounded-3xl` for all card-like surfaces
- Test all new components against the alternating section background pattern

### ❌ Don't
- Don't use `green-400`, `green-700`, or any raw Tailwind color
- Don't use `rounded`, `rounded-md`, or `rounded-lg` on cards or buttons
- Don't introduce new font families — Instrument Sans only
- Don't hardcode `#8DC63F` or any hex color in templates
- Don't use `motion.*` `initial/animate` for below-fold content — use `<FadeIn>` instead
- Don't add shadows to resting-state cards — use borders only, shadows on hover
- Don't create full-width solid `bg-base-300` section backgrounds
- Don't use the DaisyUI `btn btn-primary` class for main page CTAs — use the custom shadow button pattern
- Don't skip the eyebrow label above section headings
- Don't use `tracking-widest` on headings — only on micro labels (10px uppercase)

---

*Last updated: March 2025 — CERIS HOA Web Project*
