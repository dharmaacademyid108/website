# INTEGRATIONS.md — Dharma Academy ID Website

All integrations for V1 are link-based or embed-free. No API keys, no payment processing, no dynamic data fetching. Keep it simple and maintainable.

## 1. Social Media Links

| Platform | Purpose | Status |
|---|---|---|
| Instagram | Visual content, event updates | [TBD: provide URL] |
| YouTube | Dharma talks, event recordings | [TBD: provide URL] |
| WhatsApp | Direct inquiry from visitors | [TBD: provide number] |
| Facebook | Community group (if applicable) | [TBD: provide URL or mark N/A] |

**Implementation:** All social links open in a new tab (`target="_blank" rel="noopener"`). Use SVG icons, not emoji or image files. Display in the nav (mobile drawer), footer, and Contact page.

**WhatsApp direct link format:**
```html
<a href="https://wa.me/[number_without_plus]?text=[URL-encoded pre-filled message]" target="_blank">
  Hubungi via WhatsApp
</a>
```

## 2. Japan HQ Link

- **Link:** https://shinrankai.jp/
- **Placement:** About page (prominent), footer (text link), Home page (supporting legitimacy section)
- **Display:** Show as a real link with the domain visible, not just a button. Builds trust.

## 3. English Members Site

- **Link:** https://www.purelandschool.com/
- **Placement:** Student Privilege page (to show the extent of English learning resources)
- **Context:** Mention this is for students who want to access English-language materials

## 4. Payment (Lesson / Donation)

V1: **No payment gateway integration.** Payment instructions are written content only.

For Lesson page monthly contribution:
- State the amount in IDR clearly
- State that it goes to Shinrankai Japan HQ (not to the local teacher)
- Provide bank transfer details as plain text: [TBD — bank name, account number, account name]
- Note: consider a dedicated section or callout box to make payment info easy to find

For Donation page:
- Same approach: plain text with bank transfer info
- Explain generally what donations are used for (supporting the Japan temple / Dharma propagation)

## 5. Event Documentation (Social Media Embed)

For the Event page, V1 approach: **No live social media embeds.**
- Instagram embeds are unreliable and add performance overhead
- Instead: download and host event photos directly in `assets/images/events/`
- Link to the Instagram/social post as a text link below each event entry
- This keeps the page fast and always working, regardless of Instagram embed status

## 6. Contact Form

V1 options (pick one — confirm with site owner):

**Option A (Simplest):** `mailto:` link
```html
<a href="mailto:[TBD: email address]">Kirim Email</a>
```

**Option B (Form with Formspree — free tier):**
```html
<form action="https://formspree.io/f/[form-id]" method="POST">
  ...
</form>
```
No backend needed. Formspree handles submission and sends to email. Free for up to 50 submissions/month. Upgrade if needed.

**[TBD: Site owner to confirm email address and preferred contact form option]**

## 7. Error Handling

Since all links are static HTML `<a>` tags pointing to external sites, there's no runtime error to handle. The only risk is a broken external link. Mitigation:
- Keep a list of all external links in this file
- Review and test all external links before every significant content update
