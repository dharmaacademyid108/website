# PROJECT_OVERVIEW.md — Dharma Academy ID Website

## 1. Vision & Purpose

Dharma Academy Indonesia is a Pureland Buddhist learning community teaching in Indonesia. The website is the primary public-facing presence for Indonesian audiences.

Its core purpose is fourfold:
1. **Legitimacy** — Show we are a real, active Buddhist community through documentation of genuine events and activities, both in Indonesia and Japan. Not a cult, not a one-man guru project.
2. **Introduction** — Explain what Pureland Buddhism is to an audience with little to no prior exposure, in plain and welcoming language.
3. **Pathway** — Give interested visitors a clear, low-friction path to becoming a student.
4. **Accessibility** — Make clear that Buddhism is for everyone. You don't need to commit to being a Buddhist, or have any prior religious background, to attend class and absorb the teachings.

## 2. Core Goals

- **Legitimacy & Trust (35%)**: Show we are a real, ongoing community — through real event photos, class documentation, and activity records. Credibility comes from proof of life, not from name-dropping affiliations.
- **Information Clarity (35%)**: Explain what we teach, how classes work, what books we have, and what events we've held — in plain, accessible Indonesian.
- **Accessibility & Invitation (20%)**: Make every page feel welcoming to complete beginners and curious non-Buddhists. The tone lowers the bar, not raises it.
- **Call to Action (10%)**: Guide visitors toward contacting us or joining an intro class.

## 3. Tech Stack

- **Language:** Plain HTML5, CSS3, vanilla JavaScript — no frameworks, no build tools
- **Hosting:** Cloudflare Pages (free tier, custom domain supported)
- **Version Control:** GitHub repository
- **Fonts:** Google Fonts via CDN
- **Icons:** Inline SVG or CDN-hosted icon set (Font Awesome or Lucide)
- **No build pipeline required.** Files can be edited directly in any text editor.

## 4. Performance Considerations

- **Images:** Use WebP format. Always set `width` and `height` attributes to prevent layout shift.
- **Lazy loading:** Add `loading="lazy"` to all images below the fold.
- **Fonts:** Preload primary display font. Use system font stack as fallback.
- **No JavaScript dependency for core content** — all text and images must render without JS.

## 5. Accessibility Guidelines

- **Contrast:** Minimum 4.5:1 ratio for body text against background.
- **Semantic HTML:** Proper use of `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`.
- **Alt text:** All images must have descriptive `alt` text in Indonesian.
- **Touch targets:** All interactive elements minimum 44×44px.
- **Language attribute:** `<html lang="id">` for Indonesian pages.

## 6. Future Scalability

- **Bilingual:** Indonesian is primary. English labels/metadata support international credibility and SEO. A full English version is not planned yet.
- **Online payment integration:** Not in scope for V1. Not planned for now.
- **Event calendar:** Not automated for V1. Events page is a static documentation/gallery page.
- **Member portal:** Not on this site. Members use https://www.purelandschool.com/ (English) or equivalent.

## 7. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Perceived as cult or scam | Real event photos, activity documentation, accessible tone — show proof of life |
| Low Indonesian awareness of Pureland Buddhism | Dedicated About page explaining the tradition clearly and simply, no jargon |
| Site owner is non-coder | Plain HTML/CSS/JS — build tools, no npm, no React |
| Content maintenance burden | Simple file structure; all text is in the HTML file for each page |
| Image management | Keep all images in `/assets/images/` with clear, descriptive filenames |

## 8. Reference Sites

| Site | URL | Purpose |
|---|---|---|
| Japan HQ (public) | https://shinrankai.jp/ | Visual reference for temple, tradition scope |
| English members site | https://www.purelandschool.com/ | Curriculum/lesson structure reference |
| Philippines public site | https://purelandbuddhismph.wixsite.com/purelandph | Closest equivalent for our site's scope and tone |
