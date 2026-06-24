# SEO_GUIDELINES.md — Dharma Academy ID Website

## 1. Global SEO Strategy

Primary goal: rank for Indonesian-language searches related to Buddhism, Pureland Buddhism, and learning Buddhism online in Indonesia.

Target keywords (Indonesian):
- `belajar agama Buddha online`
- `Pureland Buddhism Indonesia`
- `Jodo Shinshu Indonesia`
- `kelas Buddha online Indonesia`
- `Shinrankai Indonesia`
- `ajaran Buddha Tanah Suci`

Secondary (English, for international credibility):
- `Pureland Buddhism Indonesia`
- `Jodo Shinshu teacher Indonesia`
- `Shinrankai Indonesia`

## 2. Technical SEO

**Every page must have:**

```html
<html lang="id">
<head>
  <title>[Page Title] | Dharma Academy Indonesia</title>
  <meta name="description" content="[150–160 character description in Indonesian]">
  <meta name="keywords" content="[relevant keywords]">
  <link rel="canonical" href="[full URL of this page]">

  <!-- OpenGraph (for WhatsApp & Facebook link previews) -->
  <meta property="og:title" content="[Page Title] | Dharma Academy Indonesia">
  <meta property="og:description" content="[same as meta description]">
  <meta property="og:image" content="[absolute URL to a representative image]">
  <meta property="og:type" content="website">
  <meta property="og:url" content="[full URL]">
  <meta property="og:locale" content="id_ID">
</head>
```

**Important:** OpenGraph images matter a lot for WhatsApp sharing (dominant in Indonesia). Every page should have a distinct, high-quality OG image (1200×630px recommended).

## 3. Page-Specific Strategy

| Page | Primary `<h1>` direction | Target keywords |
|---|---|---|
| Home | Brand intro + tradition | Dharma Academy, Buddha Indonesia, belajar Buddha |
| About | Organization legitimacy | Shinrankai, Jodo Shinshu, Buddha Tanah Suci |
| Lesson | Learning format and access | kelas Buddha online, belajar Buddha dari rumah |
| Event | Community activity | komunitas Buddha Indonesia, kegiatan Dharma |
| Book | Books and teachings | buku Dharma, buku Buddha, ajaran Buddha |
| Student Privilege | Member benefits | manfaat siswa, belajar Buddha mendalam |
| Contact | Contact & inquiry | hubungi kami, tanya tentang Buddha |
| Donation | Support the mission | donasi Buddha, dukung Dharma |

## 4. Content Strategy

- **Headings tell a story:** Use `<h1>` → `<h2>` → `<h3>` hierarchy meaningfully. Not just "Tentang Kami" — something like "Siapa Kami dan Mengapa Kami Mengajarkan Ajaran Buddha Tanah Suci."
- **First paragraph of each page** should contain primary keyword naturally.
- **Image alt text:** In Indonesian, descriptive and keyword-relevant. Example: `alt="Siswa belajar ajaran Buddha bersama guru di kelas online Dharma Academy Indonesia"`
- **Internal links:** Each page should link to at least one other relevant page. Lesson page → Contact. About page → Lesson.

## 5. Structured Data (JSON-LD)

Add to `<head>` of `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Dharma Academy Indonesia",
  "description": "[TBD: one-sentence description in English]",
  "url": "[TBD: final domain URL]",
  "sameAs": [
    "https://shinrankai.jp/",
    "[TBD: Instagram URL]",
    "[TBD: YouTube URL]"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "Shinrankai",
    "url": "https://shinrankai.jp/"
  }
}
</script>
```

## 6. WhatsApp Optimization (Indonesian Context)

WhatsApp is the dominant sharing channel in Indonesia. Prioritize:
- OG image size: exactly 1200×630px, file size under 300KB
- OG title: clear and direct, not clever
- OG description: what this is and who it's for, in 2 short sentences
- Test all pages via https://developers.facebook.com/tools/debug/ before launch
