# SITE_STRUCTURE.md — Dharma Academy ID Website

## 1. Page Hierarchy

All pages are top-level (flat structure). No sub-pages for V1.

| Page | URL | Purpose |
|---|---|---|
| Home | `/` or `index.html` | First impression — who we are, legitimacy, hero, CTA |
| About | `/about.html` | Jodo Shinshu, Shinrankai, IBA, Japan connection, our story |
| Lesson | `/lesson.html` | Intro class, full class, curriculum, format, monthly contribution |
| Event | `/event.html` | Past event documentation, social links, image gallery |
| Book | `/book.html` | Published books with descriptions, photos, and IDR pricing |
| Student Privilege | `/privilege.html` | Resources available to enrolled students |
| Contact | `/contact.html` | Email, contact form, general inquiries |
| Donation | `/donation.html` | How to donate, what funds are used for (no detail, just general) |

## 2. Navigation Structure

**Desktop Nav:**
- Left: Logo / Nama Organisasi
- Right links: Tentang Kami | Pelajaran | Acara | Buku | Kontak
- CTA button (right, highlighted): "Daftar Kelas Intro" or "Hubungi Kami"

**Mobile Nav:**
- Top bar: Logo + Hamburger (☰)
- Drawer/overlay: Full link list + social icons + CTA button

**Active state:** Current page link is visually marked (underline or different color).

**Footer (all pages):**
- Organization name + tagline
- Nav links (repeat of main nav)
- Social media icons (Instagram, YouTube, WhatsApp)
- Link to Japan HQ: https://shinrankai.jp/
- Copyright line

## 3. Homepage Section Order

See `HOMEPAGE_PLAN.md` for full detail. Summary:

1. Hero — tagline, hero image, primary CTA
2. Who We Are — one-paragraph intro + Japan connection callout
3. What We Teach — brief overview of Jodo Shinshu Pureland Buddhism
4. Our Classes — short intro to class format, link to Lesson page
5. Recent Events — photo snippets, link to Event page
6. Books —  2–3 featured books, link to Book page
7. Contact / CTA section — "Ready to learn more?" with contact button

## 4. Reusable HTML/CSS Patterns

These are the core layout patterns used across pages. Defined in `COMPONENT_RULES.md`.

- **`.hero-section`** — Full-width image or color block with centered text overlay
- **`.content-split`** —  2-column layout: image on one side, text on the other (stacks on mobile)
- **`.card-grid`** — Grid of equal-sized cards (for books, events, privileges)
- **`.section-header`** — Centered `<h2>` + subtitle `<p>` used to open each section
- **`.cta-band`** — Full-width colored band with a heading and a button, used to punctuate sections

## 5. File & Folder Structure

```
/
├── index.html
├── about.html
├── lesson.html
├── event.html
├── book.html
├── privilege.html
├── contact.html
├── donation.html
├── style.css           ← global styles
├── main.js             ← shared JS (mobile nav, scroll behavior)
├── assets/
│   ├── images/        ← all photos and illustrations (WebP preferred)
│   ├── icons/           ← any standalone SVG icons
│   └── fonts/          ← only if self-hosting fonts (otherwise use Google Fonts CDN)
└── docs/              ← this folder (design documentation, not deployed)
```
