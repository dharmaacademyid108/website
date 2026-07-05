# DESIGN_LANGUAGE.md — Dharma Academy ID Website

> **Status:** Section 2 (Color Palette) and Section 3 (Typography) are confirmed as of 2026-07-05 (warm/rounded community direction). See values below.

## 1. Aesthetic Direction

The visual identity should feel **Calm, Credible, Grounded, and Approachable**. It must communicate:
- Institutional legitimacy (we are connected to a real Japan-based organization)
- Spiritual warmth (this is about Buddhism, not a business)
- Indonesian cultural sensibility (accessible to ordinary Indonesians, not just spiritual enthusiasts)

It should not feel like: a new-age wellness brand, a corporate religious institution, or a generic charity website.

Reference tone: The Japan HQ site (https://shinrankai.jp/) for credibility cues. The Philippines site (https://purelandbuddhismph.wixsite.com/purelandph) for scope and community warmth.

## 2. Color Palette

Warm, rounded, community-forward — terracotta + deep teal on a cream base. Avoids both the overly formal "temple brown" look and anything bright/new-age.

```css
--color-bg:          #FFF8F1;   /* cream */
--color-bg-alt:      #FFEFE2;   /* soft peach */
--color-bg-dark:     #2B2420;   /* footer / dark sections */
--color-ink:         #2B2420;
--color-ink-muted:   #6B5F52;
--color-accent:      #D97F56;   /* terracotta — links, icon tints, highlights */
--color-primary:     #2F5D50;   /* deep teal — primary buttons, Japan banner */
--color-border:      #F0E0CC;
```

## 3. Typography

Single rounded, friendly sans-serif family used throughout (headings and body) — no separate serif display font.

```css
--font-body: 'Nunito', system-ui, sans-serif;
```

Weights used: 400 (body), 600, 700, 800 (headings, buttons, emphasis).

**Font sizing scale (use these consistently):**

| Use | Size |
|---|---|
| Hero headline | 2.5rem–3.5rem (clamp) |
| Section heading (h2) | 1.75rem–2.25rem |
| Sub-heading (h3) | 1.25rem–1.5rem |
| Body text | 1rem (16px base) |
| Caption / small | 0.875rem |
| Nav links | 0.9rem–1rem |

## 4. Spacing & Rhythm

- **Base unit:** 8px grid (not 4px — simpler for plain CSS)
- **Mobile side padding:** 20px–24px
- **Desktop side padding:** 60px–100px (centered max-width container: ~1100px)
- **Section vertical gap:** 80px–120px between major sections
- **Internal section gap (between heading and content):** 24px–40px

```css
--spacing-section: 96px;
--spacing-inner: 32px;
--max-width: 1100px;
--padding-x-mobile: 20px;
--padding-x-desktop: 80px;
```

## 5. UI Elements

- **Corners:** Moderate rounding — `8px` for cards, `4px` for buttons and inputs. Not sharp, not pill-shaped.
- **Buttons:**
  - Primary: Filled with `--color-accent`, white text, `border-radius: 4px`
  - Secondary: Outline/ghost style, `--color-accent` border and text
  - Hover: Slight darkening of fill or border
- **Images:**
  - Use real photos — of the Japan temple, classes, students, books
  - Never use stock photos of random monks or generic "Buddhism" imagery
  - Aspect ratios: Hero images `16:9` or `21:9`. Cards `4:3` or `1:1`.
- **Dividers:** Use whitespace and background color changes to separate sections, not heavy horizontal rules.
- **Shadows:** Subtle — `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` for cards only.

## 6. Mobile-First UX

- **Touch targets:** All clickable elements minimum `44×44px`
- **Nav:** Hamburger menu on mobile, drawer overlay with clear close button
- **Images:** Always define `width` and `height` to prevent layout shift
- **Font size:** Never below `14px` for any body/interface text
- **Scroll:** No horizontal scroll on any viewport. Use `overflow-x: hidden` on `body` as a safeguard.
- **CTA:** The "Daftar Kelas" or "Hubungi Kami" button should be reachable in the thumb zone on mobile. Consider a sticky bottom CTA on key pages (Lesson, Contact).
