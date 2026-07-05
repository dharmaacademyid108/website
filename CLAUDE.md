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
    ├── PROJECT_OVERVIEW.md
    ├── SITE_STRUCTURE.md
    ├── HOMEPAGE_PLAN.md
    ├── DESIGN_LANGUAGE.md
    ├── COMPONENT_RULES.md
    ├── SEO_GUIDELINES.md
    ├── INTEGRATIONS.md
    └── GENERAL_CLAUDE_INSTRUCTION.md
```

## Design system (key CSS variables in style.css)
```css
--color-bg:          #FAF8F4;   /* warm cream */
--color-bg-alt:      #F2EAE0;
--color-bg-dark:     #2A1F14;   /* dark brown */
--color-accent:      #8B4513;   /* saddlebrown */
--color-accent-2:    #C8962A;   /* gold */
--font-display: 'Lora', Georgia, serif;
--font-body:    'Plus Jakarta Sans', system-ui, sans-serif;
--max-width: 1100px;
```
CSS follows BEM-inspired naming: `.block__element--modifier`

## Current state
- Homepage (`index.html`) is complete with placeholder content
- All 8 sections built: Hero, Who We Are, Legitimacy Banner, What We Teach, Classes, Events, Books, CTA
- Remaining pages (about, lesson, event, book, contact, donation, privilege) are not yet built
- Real content (photos, copy, social links, WhatsApp/email) is TBD — placeholders used throughout

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
