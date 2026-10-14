# Status projekta — 2026-09-17

## Kratak rezime

MaisonDental & Aesthetic je statični HTML/CSS/JS sajt (9 stranica) spreman za GitHub Pages, tehnički solidno urađen: SEO metapodaci su jedinstveni po stranici, JSON-LD schema postoji, svi interni linkovi rade, deploy workflow je ispravno konfigurisan. Dvojezičnost je najvećim delom gotova — SR i EN rečnik su savršeno simetrični (304 = 304 ključa, nula nedostajućih prevoda) — **ali ~67 prevedenih ključeva nije povezano u HTML**, pa veliki blokovi teksta ostaju na srpskom kad se prebaci na engleski. Produkciju blokiraju tri stvari: **nijedna stvarna fotografija ne postoji** (21 placeholder slot), **kontakt forma ne šalje ništa** (lažni „uspeh", bez backend-a), i nekoliko konkretnih grešaka (pogrešan domen/tipo na `cenovnik.html`, `cenovnik.html` fali u sitemap-u). README je zastareo i ne opisuje stvarno stanje.

> Napomena o lokaciji: repo se stvarno nalazi u `.../maisondental/cd maisondental/`. Folderi `cd maisondental` i `mkdir maisondental` su artefakt pogrešno izvršene shell komande (`mkdir maisondental` je prazan). Preporuka: preimenovati/premestiti repo u čist folder pre daljeg rada.

---

## Spremno

- **9 stranica postoji i sve se učitavaju**: `index`, `o-nama`, `galerija`, `kontakt`, `cenovnik`, `404` + `usluge/{stomatologija, invisalign, anti-ageing}`.
- **SEO metapodaci**: `<title>` i `<meta description>` su **jedinstveni po svakoj stranici** (nema ponavljanja). `<html lang="sr">` na svim stranicama.
- **JSON-LD**: `index.html` (`Dentist` + `PostalAddress`) i `kontakt.html` (`ContactPage` + `Dentist` + `PostalAddress`) — tačno kako se očekuje.
- **Interni linkovi**: svih ~80 internih href-ova vodi na postojeće datoteke, uključujući relativne `../` putanje iz `usluge/` poddirektorijuma. Cenovnik je uvezan u navigaciju na svim stranicama.
- **Dvojezični rečnik**: `js/i18n.js` — SR 304 ključa, EN 304 ključa, potpuno simetrični. Svih 237 ključeva korišćenih u HTML-u postoji u oba jezika. Prekidač jezika pamti izbor (`localStorage['md-lang']`), menja `<html lang>`, i prisutan je na 8/9 stranica.
- **Deploy**: `.github/workflows/deploy.yml` je ispravan GitHub Pages Actions workflow (push na `main` + `workflow_dispatch`, upload `.`, `deploy-pages@v4`). Bez placeholder-a.
- **Infrastruktura**: `robots.txt` postoji i ispravno pokazuje na `https://maisondental.rs/sitemap.xml`. `sitemap.xml` postoji.
- **Ispravljeno 14 od 15 grešaka** iz prvobitne analize (detalji niže).

---

## Nedostaje pre puštanja u rad
*(poređano po prioritetu)*

1. **Fotografije — 21 placeholder slot, 0 stvarnih slika** *(zavisi od klijenta; ~1–2 snimanja + 1–2h obrade/ubacivanja)*
   Nijedna slika ne postoji u `images/` (samo README.md). Folder `images/galerija/` uopšte ne postoji. Raspored slotova:
   - `index.html` — 5 (hero portret, 3 kartice usluga, about foto)
   - `o-nama.html` — 1 (portret Dr Ane)
   - `galerija.html` — 12 (6 pre/posle parova: 3 Invisalign + 3 veneeri)
   - `usluge/{invisalign, anti-ageing, stomatologija}.html` — po 1
   - Plus `images/og-preview.jpg` (1200×630, social preview) — putanja postavljena, fajl ne postoji.

2. **Kontakt forma ne šalje ništa** *(~30 min + nalog na servisu)*
   `js/main.js:114–119` — forma nakon submita samo posle 800ms prikaže poruku o uspehu, a **ne šalje podatke nigde**. Formspree/Netlify integracija je ostavljena samo kao zakomentarisan primer sa placeholder-om `formspree.io/f/YOUR_ID` (`js/main.js:109`). Klijent bi mislio da upiti stižu, a ne stižu. Forma nema ni `action` atribut. Treba povezati Formspree/Netlify Forms i uneti pravi ID.

3. **`cenovnik.html` — pogrešan canonical i OG na tuđem domenu + tipografska greška** *(~5 min)*
   Linije 10, 11, 13 koriste `https://mrpaki.github.io/masiondental/...` — pogrešan domen (github.io umesto `maisondental.rs`) **i** tipo „**mas**iondental" umesto „maisondental". Sve ostale stranice koriste ispravno `https://maisondental.rs/`. Ovo je regresija greške #10.

4. **`cenovnik.html` fali u `sitemap.xml`** *(~5 min)*
   Sitemap navodi 8 URL-ova (index, o-nama, 3 usluge, galerija, kontakt, 404) ali **ne i `cenovnik.html`**, iako stranica postoji i uvezana je u nav. Dodatno: `404.html` je u sitemap-u (priority 0.1) — obično se ne indeksira, poželjno izbaciti.

5. **Povezati 67 prevedenih ključeva u HTML (EN prekid dvojezičnosti)** *(~2–3h)* — vidi „Poznati problemi".

---

## Poznati problemi

- **Dvojezičnost polovična — 67 ključeva prevedeno ali NIJE povezano u HTML.** Prevod postoji u `i18n.js`, ali elementi nemaju `data-i18n` atribut, pa na EN ostaju na srpskom:
  - **`usluge/*.html` (sve 3)** — glavni sadržaj hardkodiran srpski. Svaka stranica ima samo 21 `data-i18n` (nav/hero/CTA); ne prevode se **FAQ pitanja i odgovori** (`stom/inv/anti.faq.q1–5` i `a1–5` = 30 ključeva), **telo teksta** (`stom.p1–5`, `inv.p1–6`, `anti.p1–6`), i podnaslovi (`stom.h2.1`, `inv.h2.2`, `anti.h2.3`, `stom.faq.eyebrow`).
  - **`o-nama.html`** — biografija (`oNama.bio.p1–7`) i opisi na timeline-u (`oNama.tl.2–5.p`) ostaju srpski.
  - **`404.html`** — **uopšte nije povezan na i18n**: nema prekidača jezika, nema `js/i18n.js`, 0 `data-i18n` atributa. Ključevi `404.h1`, `404.p`, `btn.back-home` postoje ali se ne koriste. Cela 404 stranica je samo srpski.
  - Breadcrumbs `bc.home`, `bc.services` takođe nepovezani.
- **`href="#"` na „Usluge" u nav-u (svih 8 stranica).** To je dropdown-toggle (`aria-haspopup="true"`), otvara podmeni preko JS hovera (`main.js`), ali na dodir/bez JS-a ne vodi nigde. Funkcionalno OK na desktopu, granično na mobilnom.
- **Neispraćena izmena u radnom stablu**: `git status` prijavljuje obrisan `images/~$README.md` (Word lock-fajl) — bezopasno, ali `.gitignore` bi trebalo da hvata `~$*`.

### Status 15 grešaka iz prvobitne analize

| # | Greška | Status |
|---|--------|--------|
| 1 | Razmak u imenu logo fajla | ✅ Ispravljeno (CSS logo, nema `.svg` reference) |
| 2 | Identičan `<title>` svuda | ✅ Jedinstven po stranici |
| 3 | Identičan `<meta description>` | ✅ Jedinstven po stranici |
| 4 | 3 usluge → isti `/minimal` URL | ✅ 3 posebne stranice |
| 5 | Pokvaren footer link `Kontakt (<>)` | ✅ Nema praznih/pokvarenih href-ova |
| 6 | Tipo „izvazivnim" | ✅ Ispravljeno („invazivn*") |
| 7 | `tel://` protokol | ✅ `tel:+381637178337` |
| 8 | PDF ime sa `&` | ✅ Rešeno (cenovnik je sad HTML, PDF se ne referencira) |
| 9 | OG image je SVG | ✅ Putanja na `og-preview.jpg` (fajl još ne postoji) |
| 10 | OG relativne putanje | ⚠️ **REGRESIJA** — apsolutne `maisondental.rs` svuda **osim `cenovnik.html`** (github.io + tipo) |
| 11 | Nema `lang` atributa | ✅ `lang="sr"` na svima |
| 12 | Nema `robots.txt` | ✅ Postoji |
| 13 | Nema `sitemap.xml` | ⚠️ Postoji, ali **fali `cenovnik.html`** |
| 14 | Nema LocalBusiness JSON-LD | ✅ index + kontakt (`Dentist`) |
| 15 | Nema landing stranica po usluzi | ✅ 3 stranice u `usluge/` |

**Rezultat: 14/15 ispravljeno, #10 regresirao na `cenovnik.html`, #13 nepotpun.**

---

## Zavisi od klijenta

- **Fotografije** — 21 realna slika (portreti Dr Ane, kartice usluga, 6 pre/posle parova za galeriju) + `og-preview.jpg` 1200×630. Ovo je glavni blokator; verovatno 1–2 snimanja.
- **Backend za kontakt formu** — odluka i nalog: Formspree (besplatan tier) ili Netlify Forms; potreban pravi endpoint/ID.
- **Domen** — potvrda da GitHub Pages servira `maisondental.rs` (custom domen / CNAME) da bi canonical/OG/sitemap URL-ovi bili tačni. Trenutno je bar `cenovnik.html` na `mrpaki.github.io`.
- **Provera cena** u `cenovnik.html` (ako se menjaju u odnosu na 2026).

---

## Odstupanja README-a od stvarnog stanja

- README **ne pominje `cenovnik.html`** — ni u sekciji „Struktura projekta", iako stranica postoji, ima 128 `data-i18n` atributa i uvezana je u nav.
- README **ne pominje `js/i18n.js` ni dvojezičnost (SR/EN prekidač)** — u strukturi navodi samo `js/main.js`. Ceo i18n sistem (dodat u kasnijim commit-ovima) je nedokumentovan.
- README sadrži neispunjen **`YOUR_USERNAME`** placeholder u git clone URL-u (`README.md:17`).
- README tvrdi da je OG image putanja apsolutna `https://maisondental.rs/images/...` (greška #10 „ispravljena") — tačno za 8 stranica, ali `cenovnik.html` to krši.
- README ne pominje `.gitignore`, `_extracted/` sadržaj je opisan, `404.html` je naveden ali njegova nepovezanost na i18n nije spomenuta.
- `images/README.md` navodi tačan spisak od 22 slike — to je pouzdaniji izvor od korenskog README-a.
