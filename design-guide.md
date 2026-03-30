# CERIS Homeowners Association - Design Guide

## 1. Brand Essence & Vision
The CERIS subdivision digital presence should feel fresh, natural, community-oriented, and secure.
The design draws inspiration from the official logo, using green shades to represent nature, growth, and tranquility.
The interface must stay clean, readable, and accessible for residents of all ages.

## 2. Color Palette
Colors are managed globally via DaisyUI theme tokens in `resources/css/app.css`.

- Primary (Leaf Green): `oklch(78% 0.16 132)`
  - Usage: Primary calls to action, active states, key highlights.
- Secondary (Forest Green): `oklch(53% 0.14 148)`
  - Usage: Secondary buttons, supporting actions, structural highlights.
- Base (White/Grays):
  - Usage: `bg-base-100` for main surfaces and `bg-base-200` for section separation.

## 3. Typography
- Font Family: Sans-serif (system defaults or `Instrument Sans` from theme tokens).
- Style: Use clear weights and strong heading contrast.
- Hierarchy:
  - H1: Hero banners and page titles.
  - H2: Section headers such as Amenities, News, and Contact.
  - Body: High contrast using `text-base-content`.

## 4. UI Framework: Tailwind CSS + DaisyUI
- Strict DaisyUI usage: Prefer components like `navbar`, `hero`, `btn`, `card`, and `footer`.
- Radius system: `--radius-box: 0.5rem` for soft, welcoming surfaces.
- Spacing: Use generous vertical spacing (`py-12`, `py-16`) between major sections.
- Shadows: Keep subtle (`shadow-sm`, `shadow-md`) to preserve a clean look.

## 5. Layout & Structure (VILT Stack)
- Navigation: Sticky top `navbar` with clean white surface (`bg-base-100`).
- Hero: Welcoming intro with primary and secondary CTAs.
- Content blocks: Use DaisyUI `card` components for announcements, amenities, and board updates.
- Footer: Distinct section (`bg-base-200`) with legal, social, and contact links.

## 6. Accessibility & UX Notes
- Maintain clear color contrast for all text and interactive controls.
- Use semantic headings and landmark elements (`header`, `main`, `footer`).
- Keep CTA labels action-oriented and easy to understand.
- Ensure touch targets are comfortable on mobile.

## 7. Implementation Notes
- Theme is named `light` with `default: true` in DaisyUI, so it applies automatically.
- If explicit theme targeting is needed, set `data-theme="light"` on `<html>`.
- Keep custom CSS minimal and prefer utility classes + DaisyUI component classes.

