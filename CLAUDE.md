# CLAUDE.md — MaisonDental & Aesthetic Website Redesign

> Paste this file into the root of your project folder, then run `claude` in that directory.
> Claude Code reads CLAUDE.md automatically at startup.

---

## Mission

Scrape the live website at **https://maisondental.rs/**, extract all content and structure,
then build a complete, modern redesign as a **pure HTML/CSS/JS static site** ready for
GitHub Pages deployment. Fix all known technical issues. Do not change any factual content
(doctor bio, testimonials, contact info, services descriptions).

---

## Context

- **Client:** Dr Ana Miladinović — dental & aesthetic medicine clinic, Voždovac, Belgrade
- **Live site:** https://maisondental.rs/
- **Tech stack:** Pure HTML5 / CSS3 / Vanilla JS — no frameworks, no build tools, no npm
- **Hosting target:** GitHub Pages (static, works with any `.html` file served from repo root)
- **Design direction:** Refined minimalist — warm off-white palette, generous whitespace,
  elegant serif display font (Cormorant from Google Fonts), clean sans for body (Outfit),
  warm sand/gold accent. Premium clinic feel, not generic/corporate.

---

## Phase 1 — Content Extraction

Fetch every page of the live site using curl or the Bash tool. Extract ALL text content,
navigation structure, meta tags, and contact information. Save raw content to
`_extracted/` for reference during build.

Pages to fetch:
```
https://maisondental.rs/                          → _extracted/home.txt
https://maisondental.rs/o_nama                    → _extracted/o-nama.txt
https://maisondental.rs/minimal                   → _extracted/usluge.txt
https://maisondental.rs/before                    → _extracted/galerija.txt
https://maisondental.rs/kontakt                   → _extracted/kontakt.txt
https://maisondental.rs/pdf/MaisonDental&Aesthetic_Cenovnik2026.pdf  → note: link only, do not embed
```

Also fetch:
- All `<meta>` tags (title, description, keywords, og:*)
- All navigation links and their labels
- Doctor biography text (full, verbatim)
- All testimonials (author name, location, full text)
- Contact information (address, phone, email, working hours)
- All service descriptions (full text)
- Instagram handle and WhatsApp number

After extraction, create `_extracted/CONTENT_INVENTORY.md` listing what was found.

---

## Phase 2 — Audit Findings (Fix These)

These bugs are confirmed on the live site. Fix every single one in the new build:

| # | Issue | Fix |
|---|-------|-----|
| 1 | Space in logo filename: `Main logo black.svg` | Use `logo.svg` with no spaces |
| 2 | All pages have identical `<title>` "Početna - MaisonDental&Aesthetic" | Unique title per page |
| 3 | All pages have identical `<meta description>` | Unique description per page |
| 4 | All 3 services link to same URL `/minimal` | Create separate pages per service |
| 5 | Broken footer link `[Kontakt](<>)` on /kontakt page | Fix href or remove duplicate |
| 6 | Typo "minimalno **izvazivnim**" on homepage | Correct to "invazivnim" |
| 7 | `tel://` protocol (wrong) | Use `tel:+381637178337` |
| 8 | PDF filename contains `&` character | Reference as `cenovnik-2026.pdf` |
| 9 | OG image is SVG logo (bad for social sharing) | Set OG image to a proper JPG placeholder |
| 10 | OG image paths are relative `./images/...` | Use absolute paths `https://maisondental.rs/images/...` |
| 11 | No `lang` attribute on `<html>` | Add `<html lang="sr">` |
| 12 | No robots.txt | Create `robots.txt` |
| 13 | No sitemap.xml | Create `sitemap.xml` |
| 14 | No LocalBusiness schema markup | Add JSON-LD on index.html |
| 15 | No separate landing pages per service | Build `/usluge/stomatologija.html`, `/usluge/invisalign.html`, `/usluge/anti-ageing.html` |

---

## Phase 3 — File Structure to Build

Create this exact structure:

```
maisondental/
├── index.html                        ← Homepage
├── o-nama.html                       ← O nama (Dr Ana bio + testimonials)
├── galerija.html                     ← Galerija osmeha
├── kontakt.html                      ← Kontakt + forma + mapa
├── usluge/
│   ├── stomatologija.html            ← Minimalno invazivna stomatologija
│   ├── invisalign.html               ← Invisalign
│   └── anti-ageing.html              ← Anti-ageing & regenerativna medicina
├── css/
│   └── style.css                     ← Complete design system + all page styles
├── js/
│   └── main.js                       ← Nav scroll, mobile menu, FAQ accordion,
│                                        IntersectionObserver reveal, form handling
├── images/
│   ├── README.md                     ← "Place real photos here" instructions
│   └── og-preview.jpg                ← 1200×630 placeholder (create via CSS/canvas or note)
├── robots.txt
├── sitemap.xml
├── 404.html                          ← Simple 404 page matching site design
├── .github/
│   └── workflows/
│       └── deploy.yml                ← GitHub Actions → GitHub Pages auto-deploy
├── README.md                         ← Project README for GitHub
└── CLAUDE.md                         ← This file
```

Do NOT create:
- Any `node_modules/`, `package.json`, or build tooling
- Any framework (React, Vue, Astro, etc.)
- Any CSS preprocessor files (.scss, .less)
- Any JavaScript bundler config

---

## Phase 4 — Design System (CSS)

Implement in `css/style.css` using CSS Custom Properties. No hardcoded values.

### Color Tokens
```css
:root {
  --c-bg:          #FAFAF8;   /* warm off-white — default background */
  --c-bg-alt:      #F3F0EB;   /* slightly warmer — alternate sections */
  --c-bg-dark:     #1A1917;   /* near-black — dark sections */
  --c-white:       #FFFFFF;
  --c-ink:         #1A1917;   /* primary text */
  --c-ink-2:       #6B685E;   /* secondary text */
  --c-ink-3:       #A8A49A;   /* muted/hint text */
  --c-accent:      #C4A882;   /* warm sand/gold — accent */
  --c-accent-dark: #8B6F4E;   /* darker accent — hover states */
  --c-accent-light:#EDE4D7;   /* lightest accent — backgrounds */
  --c-border:      rgba(26, 25, 23, 0.10);
  --c-border-2:    rgba(26, 25, 23, 0.06);
}
```

### Typography
```css
/* Google Fonts import at top of style.css */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

--font-display: 'Cormorant', Georgia, serif;  /* headings, hero, quotes */
--font-body:    'Outfit', system-ui, sans-serif; /* all body text */
```

### Key Design Rules
- Display headings: Cormorant, weight 400 or 500, `letter-spacing: -0.01em`
- Body text: Outfit, weight 400, `line-height: 1.7`
- Eyebrow labels: 0.7rem, `font-weight: 600`, `letter-spacing: 0.14em`, `text-transform: uppercase`, color `--c-accent-dark`
- Buttons: pill-shaped (`border-radius: 60px`), two variants — filled dark + outline
- Cards: `border-radius: 16px`, `border: 1px solid var(--c-border)`, subtle lift on hover
- Section padding: `clamp(4rem, 8vw, 9rem)` top/bottom
- Max content width: 1200px, centered with `auto` margins
- Responsive: mobile-first, breakpoints at 480px, 768px, 1024px

---

## Phase 5 — Page Specifications

### index.html (Homepage)
Sections in order:
1. `<nav>` — sticky, transparent initially, solid/blur on scroll, mobile hamburger
2. Hero — split layout (text left, doctor photo placeholder right), large Cormorant heading with italic word, two CTA buttons, floating badge cards showing "15+ godina" and "Invisalign od 2016"
3. Strip — 4 horizontal differentiators (minimally invasive / London experience / Invisalign certified / holistic approach)
4. Services — 3 cards grid (photo placeholder + title + description + "Saznajte više" link)
5. About Dr Ana — split (photo left, bio excerpt right, credential bullets, link to o-nama.html)
6. Stats — dark background, 4 numbers: `15+` / `500+` / `2` / `100%`
7. Testimonials — 3 cards with real testimonial text from extracted content
8. CTA Banner — dark background, "Zakažite konsultaciju" heading, WhatsApp + phone buttons
9. Footer — logo, contact info, nav links, social icons, copyright

### o-nama.html
- Page hero with breadcrumb
- Full doctor biography (verbatim from extracted content)
- Education timeline (Beograd 2008 → London → Invisalign 2016 → Anti-ageing → present)
- All 9 testimonials from the live site (verbatim, with author names)
- CTA to contact

### usluge/stomatologija.html
- Unique title: "Minimalno invazivna estetska stomatologija | MaisonDental Beograd"
- Unique description targeting "stomatolog Beograd", "estetska stomatologija"
- Full content from /minimal (stomatology section only)
- FAQ accordion with 4–5 relevant questions
- CTA

### usluge/invisalign.html
- Unique title: "Invisalign Beograd — Providne folije | MaisonDental"
- Full content from /minimal (Invisalign section only)
- FAQ accordion answering: Šta je Invisalign? / Koliko traje? / Kako se poredi sa drugim brendovima? etc.
- CTA

### usluge/anti-ageing.html
- Unique title: "Anti-ageing i regenerativna estetska medicina Beograd | MaisonDental"
- Full content from /minimal (anti-ageing section only)
- FAQ accordion
- CTA

### galerija.html
- 3-column responsive grid of before/after placeholders
- Note in HTML comments: "Replace placeholder divs with real before/after images"

### kontakt.html
- Page hero
- Two-column layout: contact info left, form right
- Contact info: address, tel (as `tel:+381637178337`), email, working hours
- Embedded Google Maps iframe (use the existing embed URL from live site)
- Contact form with fields: Ime, Email, Telefon (optional), Usluga (select), Poruka
- Form note about response time
- JSON-LD ContactPage schema

---

## Phase 6 — SEO & Technical Files

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://maisondental.rs/sitemap.xml
```

### sitemap.xml
Include all 8 HTML pages with `<lastmod>` set to current date and appropriate `<priority>`.
Homepage priority 1.0, service pages 0.8, others 0.6.

### JSON-LD Schema (index.html only)
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "MaisonDental & Aesthetic",
  "telephone": "+381637178337",
  "email": "info@maisondental.rs",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tikveška 22",
    "addressLocality": "Beograd",
    "addressRegion": "Voždovac",
    "postalCode": "11000",
    "addressCountry": "RS"
  },
  "medicalSpecialty": ["Dentistry", "CosmeticDentistry"],
  "sameAs": ["https://www.instagram.com/smile_by_dr_ana/"]
}
```

### .github/workflows/deploy.yml
GitHub Actions workflow that:
1. Triggers on push to `main`
2. Uses `actions/upload-pages-artifact` and `actions/deploy-pages`
3. Deploys the entire repo root as static site to GitHub Pages
4. No build step needed (pure static)

---

## Phase 7 — JavaScript (js/main.js)

Implement these features with vanilla JS only:

1. **Nav scroll**: Add class `scrolled` to `.nav` when `window.scrollY > 24` — triggers background + blur
2. **Mobile menu**: Toggle `.open` on burger button and mobile nav panel; trap focus; close on Escape or link click; prevent body scroll when open
3. **Active link**: Add `.active` class to nav link matching current page filename
4. **Scroll reveal**: `IntersectionObserver` watching `.reveal` elements — add `.is-visible` when 12% visible, then unobserve (CSS handles the animation)
5. **FAQ accordion**: Toggle `.open` on `.faq-item`, close others when opening one, animate max-height
6. **Contact form**: Prevent default submit, show loading state, simulate success (swap form content with thank-you message) — note in comment where to integrate Formspree/Netlify Forms
7. **Smooth scroll**: For `a[href^="#"]` anchors

No jQuery. No libraries. No external scripts except Google Fonts.

---

## Phase 8 — README.md for GitHub

Write a professional `README.md` that includes:
- Project name and description
- Screenshot placeholder `![Preview](images/og-preview.jpg)`
- **Kako pokrenuti lokalno** section: `git clone` → open `index.html` in browser (no build step)
- **Deployment** section: GitHub Pages setup (Settings → Pages → Deploy from branch: main)
- **Slike** section: Table listing which image files need to be replaced with real photos
- **Poznati problemi sa originalnim sajtom** section: Summary of 15 bugs fixed
- **Struktura projekta** section: File tree
- Tech stack badges

---

## Constraints & Rules

- **Never modify extracted content** — Doctor bio, testimonials, and service descriptions must be verbatim from the live site
- **No frameworks** — Pure HTML/CSS/JS only, zero dependencies
- **No inline styles** — All styling through CSS classes in `style.css`
- **Accessibility** — Every image needs `alt`, every interactive element needs proper `aria-*`, semantic HTML5 elements (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- **Performance** — No blocking scripts (defer/async), lazy-load images (`loading="lazy"`), Google Fonts loaded via `@import` with `display=swap`
- **Consistent navigation** — Exact same `<nav>` and `<footer>` HTML across all pages (copy-paste, not dynamically generated)
- **Working links** — Every internal link must point to an actual file that exists in the repo
- **Image placeholders** — Where real photos are needed, use a `<div>` with class `img-placeholder` and a CSS gradient background + `<!-- Replace with: filename.webp -->`  comment

---

## Success Criteria

The project is complete when:

- [ ] `_extracted/CONTENT_INVENTORY.md` exists and is complete
- [ ] All 8 HTML pages exist and open without errors
- [ ] `robots.txt` and `sitemap.xml` exist
- [ ] `deploy.yml` GitHub Actions workflow exists
- [ ] All 15 bugs from the audit are fixed (check against the table in Phase 2)
- [ ] Every page has a unique `<title>` and `<meta name="description">`
- [ ] Every page has `<html lang="sr">`
- [ ] No `tel://` — only `tel:+381...`
- [ ] No spaces in any file or image URL
- [ ] Navigation works (all links resolve to real files)
- [ ] Mobile menu opens/closes correctly (verify in HTML structure)
- [ ] Google Fonts are imported in `style.css`
- [ ] `README.md` is complete with setup instructions
- [ ] Run `find . -name "*.html" | xargs grep -l 'tel://'` — must return nothing
- [ ] Run `find . -name "*.html" | xargs grep -l 'izvazivnim'` — must return nothing

---

## How to Start

When you read this file, immediately begin Phase 1. Fetch the live site pages one by one
using `curl -s "URL"`. Parse the HTML output (strip tags if needed with sed/python).
Do not ask for clarification — you have all the information you need.
Execute phases sequentially. After each phase, summarize what was found/built before
moving to the next.
