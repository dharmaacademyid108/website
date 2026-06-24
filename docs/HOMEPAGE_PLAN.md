# HOMEPAGE_PLAN.md — Dharma Academy ID Website

## Overview

The homepage is the first thing most visitors see. The primary job is to answer three questions within the first 5 seconds:
1. **What is this?** — A Buddhist learning organization
2. **Is this legit?** — Yes, connected to a real Japanese Buddhist institution (Shinrankai)
3. **What can I do here?** — Learn Buddhism, join a class, contact us

Refer to `SITE_STRUCTURE.md` for the section order summary. This doc provides full detail on each section.

---

## 1. Homepage Goals

**The homepage must immediately communicate:**
- We are a Buddhist learning center, not a cult, not a wellness brand
- We are affiliated with Shinrankai, a real organization headquartered in Japan
- Jodo Shinshu Pureland Buddhism is accessible to ordinary Indonesians
- There is a clear next step (join intro class / contact us)

**Content balance:**
- **40% Legitimacy & Trust:** Japan connection, real temple photos, transparent organizational info
- **35% Informational Clarity:** What we teach, how classes work, who the teacher is
- **25% Emotional Warmth:** Community photos, student stories (if available), approachability

---

## 2. Section Breakdown

### Section 1 — Hero

- **Purpose:** First impression. Establish what this is and who it's for.
- **H1:** [TBD — tagline in Indonesian, e.g., "Belajar Ajaran Buddha dari Guru yang Berpengalaman"]
- **Subtext:** 1–2 short sentences contextualizing the organization (Indonesian + Japan)
- **CTA button:** "Daftar Kelas Intro" → links to `lesson.html`
- **Background image:** [TBD — ideally a photo of the Japan temple exterior, or a serene Dharma-teaching photo]
- **Visual:** Full-width image with dark overlay for text readability. No looping video for V1.

### Section 2 — Who We Are

- **Purpose:** Quick organizational introduction. Answer "is this legit?"
- **Format:** `.content-split` — photo on one side, text on the other
- **Text content:** [TBD — 2–3 paragraph description of Dharma Academy Indonesia]
- **Key points to include:**
  - What Jodo Shinshu / Pureland Buddhism is (1 sentence)
  - Our connection to Shinrankai Japan (prominently stated)
  - Who we teach (Indonesians interested in Buddhism)
- **Photo:** [TBD — Japan temple photo, or teacher photo, or class photo]
- **Link:** "Pelajari Lebih Lanjut Tentang Kami" → `about.html`

### Section 3 — Japan Connection / Legitimacy Banner

- **Purpose:** Visually reinforce the Japan HQ connection. This is a trust signal.
- **Format:** `.cta-band` style or a simple highlighted callout block
- **Content:** Logo/photo of Japan temple + "Bagian dari Shinrankai, organisasi Buddhis Jodo Shinshu yang berpusat di Jepang" + link to https://shinrankai.jp/
- **Why this is its own section:** Indonesian visitors are reasonably skeptical of unfamiliar religious organizations. Making this explicit and prominent is critical.

### Section 4 — What We Teach

- **Purpose:** Briefly explain Jodo Shinshu and Pureland Buddhism to someone with no prior knowledge
- **Format:** `.content-split--reverse` (text left, image right)
- **Text:** [TBD — simple, jargon-free explanation of what Pureland Buddhism teaches and why it matters]
- **Photo:** [TBD — calm, teaching-related image]
- **Link:** "Lihat Kurikulum" → `lesson.html`

### Section 5 — Our Classes

- **Purpose:** Show there is a real class structure with a pathway to join
- **Format:** 2–3 simple feature blocks (icon + heading + short description)
- **Content to cover:**
  - Kelas Intro (free or low-cost intro class for newcomers)
  - Kelas Reguler (ongoing study for enrolled students)
  - Format online (Zoom)
- **CTA:** "Lihat Detail Kelas" → `lesson.html`

### Section 6 — Recent Events

- **Purpose:** Prove this is an active, ongoing community — not a dormant project
- **Format:** `.card-grid` — 2–3 event cards with photo, event name, brief description
- **Photos:** [TBD — real event documentation photos]
- **Link:** "Lihat Semua Acara" → `event.html`

### Section 7 — Books

- **Purpose:** Show the depth of teaching material available
- **Format:** `.card-grid` — 2–3 featured books with cover image, title, short description
- **Content:** [TBD — book covers and descriptions]
- **Link:** "Lihat Semua Buku" → `book.html`

### Section 8 — Final CTA

- **Purpose:** Close the page with a clear action prompt
- **Format:** `.cta-band`
- **Heading:** [TBD — e.g., "Siap Mulai Perjalanan Dharma Anda?"]
- **Subtext:** 1 sentence inviting them to reach out
- **Button:** "Hubungi Kami" → `contact.html`

### Footer

- Organization name + tagline
- Navigation links
- Social media icons (Instagram, YouTube, WhatsApp)
- Link to Shinrankai Japan: https://shinrankai.jp/
- Copyright

---

## 3. SEO Notes

- `<h1>` must contain primary keyword naturally (see `SEO_GUIDELINES.md` for keyword list)
- Each section should have a descriptive `<h2>` — not just "Tentang Kami" but something like "Belajar Ajaran Buddha Asli dari Jepang"
- All images must have Indonesian `alt` text
- OG image for homepage: [TBD — hero image, 1200×630px, file < 300KB]

---

## 4. Content TBD Checklist

Before building the homepage, confirm the following with the site owner:

- [ ] Final Indonesian tagline (H1)
- [ ] 2–3 paragraph "Who We Are" text
- [ ] Hero background image (file path)
- [ ] Japan temple photo (file path)
- [ ] Teacher photo or class photo (file path)
- [ ] 2–3 recent event photos + event names + brief descriptions
- [ ] 2–3 book cover photos + titles + 1-sentence descriptions
- [ ] Final CTA heading text
- [ ] Organization name as it should appear publicly (Indonesian)
- [ ] Email address and/or WhatsApp number for contact