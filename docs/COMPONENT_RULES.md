# COMPONENT_RULES.md — Dharma Academy ID Website

Since this project uses plain HTML/CSS/JS (no React or components framework), "components" here means **reusable HTML patterns + CSS classes** that should be applied consistently across all pages.

## 1. File Structure

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
├── style.css           ← ALL shared styles go here
├── main.js             ← shared JS: mobile nav, scroll-to-top, etc.
└── assets/
    ├── images/
    │   ├── hero/       ← hero images per page
    │   ├── events/     ← event documentation photos
    │   ├── books/      ← book cover photos
    │   └── temple/     ← Japan temple & general organization photos
    └── icons/          ← standalone SVG files if needed
```

## 2. Shared HTML Structure (Every Page)

Every `.html` file follows this shell:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | Dharma Academy Indonesia</title>
  <!-- SEO meta tags (see SEO_GUIDELINES.md) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="[Google Fonts URL]" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="site-header">
    <!-- nav here -->
  </header>

  <main>
    <!-- page content here -->
  </main>

  <footer class="site-footer">
    <!-- footer here -->
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

## 3. Reusable CSS Patterns

### `.section` — Standard section wrapper
```css
.section {
  padding: var(--spacing-section) var(--padding-x-desktop);
  max-width: var(--max-width);
  margin: 0 auto;
}
```
Used on every content section. Wraps the actual content inside a centered max-width container.

### `.section-header` — Section title block
```html
<div class="section-header">
  <h2>Judul Bagian</h2>
  <p class="subtitle">Kalimat pengantar singkat di sini.</p>
</div>
```
Always used to open a section. H2 is the section title. Optional subtitle below.

### `.content-split` — Two-column image + text
```html
<div class="content-split">
  <div class="content-split__image">
    <img src="..." alt="..." loading="lazy" width="600" height="400">
  </div>
  <div class="content-split__text">
    <h3>Sub-heading</h3>
    <p>Body text...</p>
    <a href="..." class="btn btn-primary">Pelajari Lebih Lanjut</a>
  </div>
</div>
```
On mobile: image stacks above text. On desktop: 50/50 side by side. Can use modifier `.content-split--reverse` to flip image to the right.

### `.card-grid` — Grid of cards
```html
<div class="card-grid">
  <div class="card">
    <img src="..." alt="..." loading="lazy">
    <div class="card__body">
      <h3 class="card__title">Judul</h3>
      <p class="card__text">Deskripsi singkat...</p>
      <a href="..." class="btn btn-secondary">Detail</a>
    </div>
  </div>
  <!-- repeat -->
</div>
```
Used for: Books, Events, Student Privileges. Default: 3 columns desktop, 1 column mobile.

### `.hero-section` — Page hero
```html
<section class="hero-section" style="background-image: url('assets/images/hero/[page]-hero.webp')">
  <div class="hero-section__content">
    <h1>Judul Halaman</h1>
    <p class="hero-section__subtitle">Tagline atau sub-kalimat</p>
    <a href="..." class="btn btn-primary">CTA Utama</a>
  </div>
</section>
```

### `.cta-band` — Full-width call to action strip
```html
<section class="cta-band">
  <h2>Siap Belajar Lebih Lanjut?</h2>
  <a href="contact.html" class="btn btn-primary">Hubungi Kami</a>
</section>
```
Used to punctuate sections. Appears near the bottom of most pages.

### `.btn` — Buttons
```html
<a class="btn btn-primary" href="...">Label</a>
<a class="btn btn-secondary" href="...">Label</a>
```
- `.btn-primary`: filled accent color, white text
- `.btn-secondary`: outline style, accent color text/border
- Minimum height: 44px. Padding: 12px 24px.

## 4. Navigation (shared)

```html
<header class="site-header">
  <nav class="site-nav">
    <a href="index.html" class="site-nav__logo">
      <img src="assets/images/logo.webp" alt="Dharma Academy Indonesia" height="48">
    </a>
    <ul class="site-nav__links">
      <li><a href="about.html">Tentang Kami</a></li>
      <li><a href="lesson.html">Pelajaran</a></li>
      <li><a href="event.html">Acara</a></li>
      <li><a href="book.html">Buku</a></li>
      <li><a href="contact.html" class="btn btn-primary">Hubungi Kami</a></li>
    </ul>
    <button class="site-nav__toggle" aria-label="Buka menu" aria-expanded="false">☰</button>
  </nav>
  <!-- Mobile drawer -->
  <div class="site-nav__drawer" hidden>
    <!-- duplicate links + social icons -->
  </div>
</header>
```

## 5. Animation Rules

Keep animations minimal and purposeful. No animation libraries needed.

- **Fade-in on scroll:** Use `IntersectionObserver` in `main.js` to add a `.visible` class to sections as they enter the viewport.
- **CSS transition:** `opacity 0.4s ease, transform 0.4s ease` — sections start at `opacity: 0; transform: translateY(16px)` and animate to `opacity: 1; transform: none`.
- **Nav drawer:** `transition: transform 0.3s ease` — slide in from the right on mobile.
- **No heavy animation on images or text** — keep the site feeling calm and dignified.

## 6. Maintenance Rules

- If a section of HTML exceeds ~60 lines and is repeated across pages, consider extracting it to a reusable HTML snippet and noting where it's used in this doc.
- All new CSS classes must follow the BEM-inspired pattern: `.block__element--modifier`.
- Do not add a new CSS class for a one-off style. Use an inline style or reconsider the design choice.
- If a page-specific style block exceeds 30 lines, ask whether it should be in `style.css` instead.
