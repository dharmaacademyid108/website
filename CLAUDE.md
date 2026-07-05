# Dharma Academy Indonesia — Website Project

## What this is
Static HTML/CSS/JS website for Dharma Academy Indonesia, a Jodo Shinshu (Pureland Buddhist) teaching organization affiliated with Shinrankai, Japan. Taught in Indonesian. 1-man operation run by Bobo (the user).

## Tech stack
- Plain HTML5 / CSS3 / vanilla JS — no frameworks, no build pipeline
- Deployed via Cloudflare Pages (auto-deploys on git push to main)
- GitHub repo: `https://github.com/dharmaacademyid108/website`
- Live site: `website-bwu.pages.dev`

## File structure
```
website/
├── CLAUDE.md           ← you are here
├── index.html          ← homepage (complete)
├── style.css           ← all shared styles
├── main.js             ← mobile nav, scroll-reveal, scroll-to-top
└── docs/               ← design specs — READ THESE before making decisions
    ├── GUIDELINES.md    ← plain-language source of truth, Bobo edits this directly. Check this FIRST for content/design direction.
    ├── PROJECT_OVERVIEW.md
    ├── SITE_STRUCTURE.md
    ├── HOMEPAGE_PLAN.md
    ├── DESIGN_LANGUAGE.md
    ├── COMPONENT_RULES.md
    ├── SEO_GUIDELINES.md
    ├── INTEGRATIONS.md
    └── GENERAL_CLAUDE_INSTRUCTION.md
```

**Note:** `GUIDELINES.md` is the plain-language, Bobo-editable version of the plan. If it ever conflicts with the other technical docs, `GUIDELINES.md` wins — it reflects the latest direct decisions.

## Design system (key CSS variables in style.css)
```css
--color-bg:          #FFF8F1;   /* warm cream */
--color-bg-alt:      #FFEFE2;   /* soft peach */
--color-bg-dark:     #2B2420;   /* footer/dark sections */
--color-accent:      #D97F56;   /* terracotta — links, icon tints */
--color-primary:     #2F5D50;   /* deep teal — primary buttons, Japan banner */
--font-body: 'Nunito', system-ui, sans-serif;
--max-width: 1100px;
```
Warm, rounded, community-feel direction (confirmed 2026-07-05, replacing the earlier brown/gold and pink/purple "Lollipop" test — both retired). CSS follows BEM-inspired naming: `.block__element--modifier`. Logo mark and hero/section illustrations are hand-built placeholder SVGs in `assets/images/` — swap for real logo/photos when ready, same filenames/dimensions.

## Current state
- Homepage (`index.html`) is rebuilt around the new `docs/GUIDELINES.md` direction: Hero, Who We Are, Japan Connection banner, What We Teach, 4 Activities (Kelas Intro, Good Karma Lab, Jadi Siswa Resmi, Acara Jepang), Recent Events, Books, Final CTA
- Remaining pages (about, lesson, event, book, contact, donation, privilege) are not yet built — same design system, to be built next
- Real content (photos, logo, copy details, social links, WhatsApp/email) is still placeholder

## Working rules
- **No frameworks** — plain HTML/CSS/JS only
- **All styles in style.css** — no page-specific `<style>` blocks unless trivial
- **Shared JS in main.js** — no inline scripts
- **Images:** use `assets/images/` subfolders: `hero/`, `events/`, `books/`, `temple/`
- **Language:** Indonesian throughout (page copy, alt text, aria-labels)
- **Responsive:** breakpoints at 900px and 640px (already in style.css)
- Read `docs/COMPONENT_RULES.md` before adding new HTML patterns
- Read `docs/DESIGN_LANGUAGE.md` before making visual decisions

## Deployment workflow
```bash
git add .
git commit -m "description"
git push
# Cloudflare auto-deploys in ~1 minute
```

## Local dev
```bash
npx live-server
# Opens localhost:8080, auto-reloads on file save
```

## Notes for Claude Code
- Bobo is not a coder — keep explanations minimal, just do the work
- Always read the relevant `docs/` file before building a new page or component
- Prefer editing existing files over creating new ones
- When building new pages, copy the HTML shell from `index.html` (header/footer/nav are identical)
- The `upload-to-github.html` file in the repo is junk — safe to delete
