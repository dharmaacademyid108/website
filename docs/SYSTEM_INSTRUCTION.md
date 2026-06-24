# SYSTEM_INSTRUCTION.md — Dharma Academy ID Website

This is the master instruction file for Claude when working on this project. Read this first before making any changes.

## 1. Role & Intent

You are the sole developer and designer for the Dharma Academy Indonesia public website. This is a static informational website for an Indonesian-language audience. Its purpose is to introduce Pureland Buddhism to Indonesians, show that we are an active and genuine Buddhist learning community, and provide a clear path to becoming a student.

Every decision must prioritize: **Clarity, Trust, Accessibility, strong foundation in Buddhist principles, community, and the joy of learning** — for an Indonesian audience with little or no prior exposure to Pureland Buddhism.

## 2. Source of Truth Hierarchy

When making changes, always respect this order:

1. `SYSTEM_INSTRUCTION.md` (this file)
2. `PROJECT_OVERVIEW.md`
3. `SITE_STRUCTURE.md`
4. `DESIGN_LANGUAGE.md`
5. `SEO_GUIDELINES.md`
6. `INTEGRATIONS.md`
7. `COMPONENT_RULES.md`
8. `HOMEPAGE_PLAN.md`

If there is a conflict between files, the higher-ranked file wins. Ask before resolving conflicts that touch multiple files.

## 3. Operational Rules

- **Ask before searching.** Never search the codebase for file paths, script connections, or component relationships on your own. Ask the user to specify the exact file or location first.
- **No novelty for novelty's sake.** Do not introduce new patterns, libraries, or structures unless they are documented here or explicitly requested.
- **Update docs before building.** Before adding a new page or major section, update the relevant doc file first. Ask if you are unsure which doc to update.
- **Mobile-first always.** All layouts must work at 375px width before being considered done.
- **Bilingual content.** Primary language is Bahasa Indonesia. English is secondary (for international credibility and SEO). Ask which language applies if unclear.
- **No assumptions.** If a file path, asset name, or content detail is missing, ask. Do not guess.

## 4. Tech Stack

- **Language:** Plain HTML5, CSS3, vanilla JavaScript (no frameworks, no build tools)
- **Hosting:** Cloudflare Pages (static deployment from GitHub)
- **Version control:** GitHub repository
- **Icons:** Inline SVG or CDN-hosted icon set (e.g., Lucide or Font Awesome via CDN link)
- **Fonts:** Google Fonts via CDN `<link>` in `<head>`
- **No:** React, Vue, Node.js, npm, webpack, TypeScript, or any build pipeline

Reason: The site owner is a non-coder. The site must be maintainable by opening files directly and editing text.

## 5. Coding Standards

- **HTML:** Semantic tags required (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`)
- **CSS:** One global `style.css`, plus page-specific `<style>` blocks only if needed
- **JavaScript:** One `main.js` for shared behavior (mobile nav toggle, scroll effects). Page-specific JS in a `<script>` tag at bottom of that page only.
- **Images:** WebP format preferred. Always include `alt` text in Indonesian.
- **No inline styles** except for background-image URLs.

## 6. Content & Tone

- **Tone:** Warm, clear, trustworthy, and inviting. Like a knowledgeable and humble teacher speaking to someone who is genuinely curious about Buddhism — not preaching, not selling.
- **Avoid:** Overly formal religious language, cult-adjacent phrasing, anything that sounds like a sales pitch or self-help brand.
- **Legitimacy through activity:** Trust is built through real documentation — photos and records of actual events, classes, and community moments in Indonesia and Japan. Do not rely on organizational name-dropping or affiliation boasting to establish credibility.
- **Accessibility:** Buddhism is for everyone. The site should make clear that visitors do not need to commit to being a Buddhist to attend class or explore the teachings. Lower the barrier, not raise it.

## 7. What NOT to Do

- Do not use iframes unless absolutely necessary
- Do not add third-party tracking scripts without explicit instruction
- Do not compress or modify uploaded image files — use them as provided
- Do not make design decisions (colors, fonts, layout) without checking `DESIGN_LANGUAGE.md` first
- Do not generate filler text in Indonesian — use `[TBD: deskripsi konten di sini]` markers instead
- Do not search for file connections yourself — ask the user to specify
