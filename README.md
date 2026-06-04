# MaisonDental & Aesthetic — Website

![Preview](images/og-preview.jpg)

Kompletan redizajn sajta [maisondental.rs](https://maisondental.rs/) kao **pure HTML/CSS/JS static site** spreman za GitHub Pages deploy.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

---

## Kako pokrenuti lokalno

```bash
git clone https://github.com/YOUR_USERNAME/maisondental.git
cd maisondental
```

Otvorite `index.html` u browser-u — nema build koraka, nema npm-a.

---

## Deployment

### GitHub Pages (automatski)

1. Push na `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) automatski deploji sajt
3. Aktivirajte GitHub Pages: **Settings → Pages → Source: GitHub Actions**

### Manualno

1. **Settings → Pages → Deploy from branch**
2. Branch: `main`, Folder: `/ (root)`
3. Sačuvajte

---

## Slike

Sve slike u `images/` su placeholder-i. Zamijenite ih realnim fotografijama:

| Fajl | Stranica | Opis |
|------|----------|------|
| `images/dr-ana-hero.webp` | Početna — hero | Portrait Dr Ane, vertikalan |
| `images/dr-ana-about.webp` | Početna — o nama | Dr Ana u ordinaciji |
| `images/dr-ana-portrait.webp` | O nama | Formalni portret |
| `images/usluga-stomatologija.webp` | Početna — kartice usluga | Stomatološki tretman |
| `images/usluga-invisalign.webp` | Početna — kartice usluga | Invisalign folije |
| `images/usluga-anti-ageing.webp` | Početna — kartice usluga | Anti-ageing tretman |
| `images/og-preview.jpg` | Sve stranice (OG tag) | 1200×630px, JPEG |
| `images/galerija/` | Galerija | Pre/posle fotografije |

Detaljna lista u `images/README.md`.

---

## Poznati problemi sa originalnim sajtom (svi ispravci u ovom buildu)

| # | Problem | Ispravka |
|---|---------|----------|
| 1 | Razmak u imenu logo fajla: `Main logo black.svg` | Korišćen CSS logotip bez eksternog fajla |
| 2 | Sve stranice imaju identičan `<title>` | Jedinstven title po stranici |
| 3 | Sve stranice imaju identičan `<meta description>` | Jedinstven description po stranici |
| 4 | Sve 3 usluge vode na isti URL `/minimal` | Posebne stranice: `/usluge/stomatologija.html`, `/usluge/invisalign.html`, `/usluge/anti-ageing.html` |
| 5 | Pokvareni footer link `[Kontakt](<>)` na /kontakt | Ispravni href-ovi na svim stranicama |
| 6 | Greška "invazivnim" → "izvazivnim" na naslovnoj | Ispravljeno na svim stranicama |
| 7 | `tel://` protokol (pogrešan) | Korišćen `tel:+381637178337` |
| 8 | PDF filename sa `&` karakterom | Referenciran kao `cenovnik-2026.pdf` |
| 9 | OG image je SVG logo (loše za social sharing) | OG image putanja vodi na `og-preview.jpg` |
| 10 | OG image putanje su relativne `./images/...` | Korišćene apsolutne putanje `https://maisondental.rs/images/...` |
| 11 | Nema `lang` atributa na `<html>` | Dodato `<html lang="sr">` na sve stranice |
| 12 | Nema robots.txt | Kreiran `robots.txt` |
| 13 | Nema sitemap.xml | Kreiran `sitemap.xml` sa svim stranicama |
| 14 | Nema LocalBusiness schema markup | Dodato JSON-LD na `index.html` i `kontakt.html` |
| 15 | Nema posebnih landing page-ova po usluzi | Kreirane 3 posebne stranice u `/usluge/` |

---

## Struktura projekta

```
maisondental/
├── index.html                        ← Početna
├── o-nama.html                       ← O nama + testimonijali
├── galerija.html                     ← Galerija osmeha
├── kontakt.html                      ← Kontakt + forma + mapa
├── 404.html                          ← 404 stranica
├── usluge/
│   ├── stomatologija.html            ← Minimalno invazivna stomatologija
│   ├── invisalign.html               ← Invisalign
│   └── anti-ageing.html              ← Anti-ageing medicina
├── css/
│   └── style.css                     ← Kompletan design system
├── js/
│   └── main.js                       ← Nav, mobile menu, FAQ, reveal, forma
├── images/
│   ├── README.md                     ← Lista slike za zamenu
│   └── og-preview.jpg                ← 1200×630 OG preview (zameniti realnom slikom)
├── _extracted/                       ← Sadržaj sa originalnog sajta (referenca)
│   └── CONTENT_INVENTORY.md
├── robots.txt
├── sitemap.xml
├── .github/
│   └── workflows/
│       └── deploy.yml                ← GitHub Actions → GitHub Pages
└── README.md
```

---

## Tech stack

- **HTML5** — semantički markup, aria atributi
- **CSS3** — Custom Properties, CSS Grid, Flexbox, mobile-first
- **Vanilla JS** — bez frameworks, bez dependencies
- **Google Fonts** — Cormorant (display), Outfit (body)
- **GitHub Actions** — automatski CI/CD deploy
