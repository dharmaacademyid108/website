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
--color-bg:          #F8F5EF;   /* warm paper */
--color-bg-alt:      #EEE7DB;   /* soft linen */
--color-ink:         #2F2F2C;   /* charcoal ink — primary text */
--color-primary:     #3F544A;   /* forest green — primary buttons, Japan banner */
--color-accent:      #B4715B;   /* muted clay — links, tags */
--color-highlight:   #C9A227;   /* morning gold — logo, CTA button */
--font-display: 'DM Serif Display', Georgia, serif;
--font-body: 'Inter', 'Noto Sans', system-ui, sans-serif;
--max-width: 1140px;
```
"Dharma Academy ID" brand — editorial, tranquil, Scandinavian x Japanese direction, built from a PDF brief + mood board (2026-07-18). This is the same visual system as Website #3, but with structural depth borrowed from plumvillage.org as a *pattern* reference (not visual — see `body::before` background texture, `.home-hero__carousel`, `.featured-grid`/`.featured-list` for the "one big + smaller list" layout, `.text-separator`, `.quote-card`, `.card__tag`, and `washi-*.svg` line-illustration accents in `assets/images/illustrations/`).

## Current state
All 8 pages built: `index`, `about`, `lesson`, `event`, `book`, `privilege`, `contact`, `donation`.

- **Illustrations:** real sumi-e ink-wash art in `assets/images/illustrations/ink-*.jpg` (branch, teacup, figures, book), generated in Canva, applied via `mix-blend-mode: multiply` so the cream plate blends into the paper background. Used as `.ink-divider`, `.page-hero .ink-accent`, and the hero `.ink-mini`.
- **Photography** is Canva-AI-generated placeholder (warm editorial style) — swap for real photos when ready, same filenames.
- **Still to fill in (marked `[Akan dilengkapi]` in the HTML):** email, WhatsApp, Instagram/YouTube URLs, monthly contribution amount, bank transfer details (both lesson + donation), Good Karma Lab registration process. Gallery/card image slots on about/event/book are empty placeholder boxes awaiting real photos.
- **Curriculum topics on `lesson.html` are drafted, not confirmed** — the 8 intro topic titles/descriptions were written as plausible placeholders and need Bobo's real curriculum.

## Naming rule (important)
Always pair "Shinrankai" with its context (Toyama, Japan; Kentetsu Takamori Sensei). Never lead with "International Buddhist Academy" alone — that phrase alone surfaces an unrelated Nepal organisation in search. Never raise "cult" concerns proactively; let documented activity speak.
- This branch (`website-2-plum-village`) and Website #3 (`website-3-dharma-academy-id/` on branch `website-3-dharma-academy-id`) share the same brand; #2 is the more structurally complete build. Website #1 (`main` branch, `website/`) is the original live warm/rounded design, unrelated brand.

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
