(function () {
  'use strict';

  var translations = {
    sr: {
      /* NAV */
      'nav.home':               'Početna',
      'nav.about':              'O nama',
      'nav.services':           'Usluge',
      'nav.services.stom':      'Minimalno invazivna stomatologija',
      'nav.services.inv':       'Invisalign',
      'nav.services.anti':      'Anti-ageing & estetska medicina',
      'nav.gallery':            'Galerija osmeha',
      'nav.prices':             'Cenovnik',
      'nav.contact':            'Kontakt',
      'nav.cta':                'Zakažite konsultaciju',

      /* FOOTER */
      'footer.desc':            'Privatna stomatološka ordinacija u Beogradu. Minimalno invazivna stomatologija, Invisalign i anti-ageing procedura.',
      'footer.nav':             'Navigacija',
      'footer.services':        'Usluge',
      'footer.contact':         'Kontakt',
      'footer.rights':          '© 2026 MaisonDental & Aesthetic. Sva prava zadržana.',

      /* COMMON BUTTONS */
      'btn.book':               'Zakažite konsultaciju',
      'btn.whatsapp':           'WhatsApp',
      'btn.about':              'O nama',
      'btn.more':               'Saznajte više',
      'btn.all-reviews':        'Pročitajte sva iskustva',
      'btn.contact-form':       'Kontakt forma',
      'btn.back-home':          'Nazad na početnu',

      /* BREADCRUMBS */
      'bc.home':                'Početna',
      'bc.services':            'Usluge',

      /* CTA SECTION */
      'cta.eyebrow':            'Zakažite pregled',
      'cta.index.h2':           'Spremi za promenu?',
      'cta.index.p':            'Kontaktirajte nas i zakažite konsultaciju. Odgovaramo brzo.',
      'cta.oNama.h2':           'Kontaktirajte nas danas',
      'cta.oNama.p':            'Rado odgovaramo na sva vaša pitanja i zakažemo konsultaciju.',
      'cta.stom.h2':            'Zakažite konsultaciju danas',
      'cta.stom.p':             'Kontaktirajte nas i saznajte koja opcija je prava za vas.',
      'cta.inv.h2':             'Zakažite Invisalign konsultaciju',
      'cta.inv.p':              'Saznajte da li ste kandidat za Invisalign i dobijte individualni plan terapije.',
      'cta.anti.h2':            'Zakažite konsultaciju',
      'cta.anti.p':             'Detaljnom analizom lica pronalazimo optimalni plan tretmana za vas.',
      'cta.galerija.h2':        'Vaša transformacija počinje ovde',
      'cta.galerija.p':         'Zakažite konsultaciju i napravite prvi korak ka savršenom osmehu.',
      'cta.kontakt.h2':         'Konsultacija je besplatna',
      'cta.kontakt.p':          'Zakažite pregled i dobijte tačnu procenu za vaš slučaj.',

      /* INDEX */
      'index.hero.eyebrow':     'Dr Ana Miladinović — Beograd & London',
      'index.hero.h1':          'Vaš osmeh,',
      'index.hero.h1em':        'naša misija',
      'index.hero.lead':        'U ordinaciji MaisonDental & Aesthetic, posvećeni smo etičkoj stomatološkoj praksi, sa misijom da pacijentima pružimo dugoročno očuvanje zdravlja, funkcije i estetike zuba.',
      'index.hero.badge1.num':  '15+',
      'index.hero.badge1.lbl':  'godina iskustva',
      'index.hero.badge2.num':  'Invisalign',
      'index.hero.badge2.lbl':  'sertifikovani od 2016.',
      'index.hero.img.alt':     'Fotografija Dr Ane Miladinović',

      'index.strip.1.title':    'Minimalno invazivno',
      'index.strip.1.text':     'Čuvamo vaše prirodne zube bez nepotrebnog brušenja',
      'index.strip.2.title':    'Londonsko iskustvo',
      'index.strip.2.text':     'Kings College London, Eastman Dental Institute',
      'index.strip.3.title':    'Invisalign certifikat',
      'index.strip.3.text':     'Sertifikovani provajder od 2016. — stotine zadovoljnih pacijenata',
      'index.strip.4.title':    'Holistički pristup',
      'index.strip.4.text':     'Stomatologija, Invisalign i anti-ageing procedura pod jednim krovom',

      'index.services.eyebrow': 'Naše usluge',
      'index.services.h2':      'Šta nudimo',
      'index.s1.eyebrow':       'Stomatologija',
      'index.s1.h3':            'Minimalno invazivna estetska stomatologija',
      'index.s1.text':          'Savršen osmeh bez nepotrebnog brušenja zdravih zuba — koristeći kompozitne materijale poslednje generacije i digitalnu tehnologiju.',
      'index.s2.eyebrow':       'Ortodoncija',
      'index.s2.h3':            'Invisalign',
      'index.s2.text':          'Jedini originalni američki sistem providnih folija za ispravljanje zuba. Diskretan, komforan i predvidiv tretman za odrasle.',
      'index.s3.eyebrow':       'Estetska medicina',
      'index.s3.h3':            'Anti-ageing & regenerativna medicina',
      'index.s3.text':          'Moderni minimalno invazivni tretmani za prirodan, svež i odmoran izgled — kolagen stimulatori, egzosomi, botoks.',

      'index.about.eyebrow':    'Dr Ana Miladinović',
      'index.about.h2':         'Petnaest godina posvećenosti savršenom osmehu',
      'index.about.p1':         'Dr Ana Miladinović je diplomirala na Stomatološkom Fakultetu Univerziteta u Beogradu 2008. godine. Nakon položenog stručnog ispita odlazi u London, gde nastavlja edukaciju na Kings College London i Eastman Dental Institute.',
      'index.about.p2':         'Dr Ana se specijalizuje u minimalno invazivnim transformacijama osmeha koje podrazumevaju upotrebu Invisalign folija i kompozitnih materijala poslednje generacije — bez brušenja i oštećenja zuba.',
      'index.about.cred1':      'Stomatološki fakultet Beograd, diplomirala 2008.',
      'index.about.cred2':      'Kings College London & Eastman Dental Institute',
      'index.about.cred3':      'Invisalign sertifikovani provajder od 2016.',
      'index.about.cred4':      'Postdiplomske studije — minimalno invazivna stomatologija, 2018.',
      'index.about.cred5':      'Anti-ageing i regenerativna estetska medicina',
      'index.about.btn':        'Saznajte više o Dr Ani',

      'index.stats.1.num':      '15+',
      'index.stats.1.lbl':      'godina iskustva',
      'index.stats.2.num':      '500+',
      'index.stats.2.lbl':      'Invisalign pacijenata',
      'index.stats.3.num':      '2',
      'index.stats.3.lbl':      'ordinacije — Beograd i London',
      'index.stats.4.num':      '100%',
      'index.stats.4.lbl':      'minimalno invazivni pristup',

      'index.test.eyebrow':     'Iskustva naših pacijenata',
      'index.test.h2':          'Šta kažu pacijenti',

      /* O NAMA */
      'oNama.hero.eyebrow':     'Dr Ana Miladinović',
      'oNama.hero.h1':          'O nama',
      'oNama.hero.p':           'Petnaest godina posvećenosti minimalno invazivnoj stomatologiji i estetskoj medicini.',
      'oNama.bio.eyebrow':      'Biografija',
      'oNama.bio.h2':           'Dr Ana Miladinović',
      'oNama.bio.p1':           'Dr Ana Miladinović je diplomirala na Stomatološkom Fakultetu Univerziteta u Beogradu 2008 godine. Nakon završenog staža i položenog stručnog ispita odlazi u London, Veliku Britaniju gde nostrifikuje diplomu i nastavlja rad u privatnoj praksi.',
      'oNama.bio.p2':           'Početak svoje profesionalne karijere posvetila je brojnim edukacijama iz oblasti stomatološke protetike i smile design-a na najistaknutijim univerzitetskim klinikama u Londonu — Kings College London, Eastman Dental Institute učeći od najboljih svetskih stručnjaka.',
      'oNama.bio.p3':           '2017. godine postaje sertifikovani Invisalign provajder i do danas je uspešno tretirala stotine zadovoljnih pacijenata ovim revolucionarnim ortodontskim sistemom.',
      'oNama.bio.p4':           '2018. godine završava postdiplomske studije iz savremene estetske i restaurativne stomatologije sa posebnim fokusom na minimalno invazivnu stomatologiju.',
      'oNama.bio.p5':           'Dr Ana se specijalizuje u minimalno invazivnim transformacijama osmeha koje između ostalih metoda, podrazumevaju upotrebu Invisalign folija za ispravljanje zuba i kompozitnih materijala poslednje generacije koji omogućavaju neinvazivnu korekciju oblika i boje zuba (bez brušenja i oštećenja zuba) gde kao rezultat pacijenti dobijaju savršen spoj funkcije i estetike bez nepotrebnog žrtvovanja zubnog tkiva.',
      'oNama.bio.p6':           'Dr Ana se od 2016. godine paralelno usavršava u oblasti estetske medicine i anti-ageing procedura a poslednjih godina i regenerativnoj estetskoj medicini upotrebom polinukleotida i exosoma sve u cilju održavanja prirodnog, negovanog i svežeg izgleda vašeg lica i kože.',
      'oNama.bio.p7':           'Dr Miladinović redovno tretira internacionalne pacijente u Centralnom Londonu, Wimpole Street, Marylebone.',
      'oNama.timeline.eyebrow': 'Karijera',
      'oNama.timeline.h2':      'Obrazovanje i iskustvo',
      'oNama.tl.1.h4':          'Diplomirala',
      'oNama.tl.1.p':           'Stomatološki Fakultet, Univerzitet u Beogradu',
      'oNama.tl.2.h4':          'London — Privatna praksa',
      'oNama.tl.2.p':           'Kings College London, Eastman Dental Institute — smile design, protetika',
      'oNama.tl.3.h4':          'Invisalign sertifikat',
      'oNama.tl.3.p':           'Sertifikovani Invisalign provajder — do danas tretirala stotine pacijenata',
      'oNama.tl.4.h4':          'Postdiplomske studije',
      'oNama.tl.4.p':           'Savremena estetska i restaurativna stomatologija — minimalno invazivna stomatologija',
      'oNama.tl.5.h4':          'Anti-ageing & regenerativna medicina',
      'oNama.tl.5.p':           'Polinukleotidi, egzosomi, botoks — Beograd i Wimpole Street, London',
      'oNama.test.eyebrow':     'Iskustva naših pacijenata',
      'oNama.test.h2':          'Šta kažu pacijenti',

      /* GALERIJA */
      'galerija.hero.eyebrow':  'Pre i posle',
      'galerija.hero.h1':       'Galerija osmeha',
      'galerija.hero.p':        'Stvarne transformacije naših pacijenata — Invisalign, kompozitni veneeri, estetska stomatologija.',
      'galerija.inv.eyebrow':   'Invisalign',
      'galerija.inv.h2':        'Ispravljanje zuba folijama',
      'galerija.ven.eyebrow':   'Estetska stomatologija',
      'galerija.ven.h2':        'Kompozitni veneeri i smile design',

      /* KONTAKT */
      'kontakt.hero.eyebrow':   'Zakažite pregled',
      'kontakt.hero.h1':        'Kontakt',
      'kontakt.hero.p':         'Pišite nam, pozovite ili popunite formu — javimo se u najkraćem roku.',
      'kontakt.info.h2':        'MAISON DENTAL & AESTHETIC',
      'kontakt.lbl.address':    'Adresa',
      'kontakt.lbl.phone':      'Telefon',
      'kontakt.lbl.email':      'Email',
      'kontakt.lbl.whatsapp':   'WhatsApp',
      'kontakt.lbl.instagram':  'Instagram',
      'kontakt.wa.link':        'Pišite nam na WhatsApp',
      'kontakt.form.h2':        'Pošaljite poruku',
      'kontakt.form.ime':       'Ime i prezime *',
      'kontakt.form.email':     'Email adresa *',
      'kontakt.form.telefon':   'Telefon (opciono)',
      'kontakt.form.usluga':    'Usluga koja vas zanima',
      'kontakt.form.opt0':      '— Izaberite uslugu —',
      'kontakt.form.opt1':      'Minimalno invazivna stomatologija',
      'kontakt.form.opt2':      'Invisalign',
      'kontakt.form.opt3':      'Anti-ageing & estetska medicina',
      'kontakt.form.opt4':      'Ostalo',
      'kontakt.form.poruka':    'Poruka *',
      'kontakt.form.note':      'Odgovaramo u roku od 24 sata radnim danom.',
      'kontakt.form.submit':    'Pošaljite poruku',
      'kontakt.success.h3':     'Hvala vam!',
      'kontakt.success.p':      'Vaša poruka je primljena. Javimo se uskoro.',

      /* STOMATOLOGIJA */
      'stom.hero.eyebrow':      'Usluge',
      'stom.hero.h1':           'Minimalno invazivna estetska stomatologija',
      'stom.hero.p':            'Savršen osmeh bez oštećenja vaših prirodnih zuba — uz materijale i tehnike poslednje generacije.',
      'stom.h2.1':              'Koje su prednosti minimalno invazivne u odnosu na tradicionalnu stomatologiju?',
      'stom.p1':                'Izbegavanjem nepotrebnog brušenja zdravog zubnog tkiva našim pacijentima omogućavamo dugoročno očuvanje prirodne denticije i minimalnu potrebu za budućim invazivnim tretmanima. Edukacija o izbegavanju rizika i obučavanje pacijenata pravilnoj oralnoj higijeni igra ključnu ulogu u ovom konceptu kao i redovne stomatološke kontrole. Posebnu pažnju posvećujemo nezi dečijih zuba i činimo da posete stomatologu budu pravo zadovoljstvo. Primenjujemo minimalno invazivni pristup u svim stomatološkim intervencijama.',
      'stom.h2.2':              'Šta kada je brušenje neizbežno?',
      'stom.p2':                'Za Vas biramo neinvazivne ili minimalno invazivne tehnike preparacije i direktne (zubne ispune — plombe) ili indirektne (inleje, onleje, vinire ili krunice) restauracije od netoksičnih estetskih materijala poslednje generacije. U radu koristimo uveličavajuće dentalne lupe i digitalnu tehnologiju koja nam omogućava savršenu preciznost u radu. Kao rezultat dobijate funkcionalne i estetske nadoknade koje traju a ne štete vašim prirodnim zubima.',
      'stom.h2.3':              'Sanjate da i vi imate "Hollywood smile"?',
      'stom.p3':                'Decenijama unazad trend "Holivudskog osmeha" ne gubi na popularnosti ali obično podrazumeva preparaciju (takozvano \'brušenje\') zuba pacijenta kako bi stomatolog kasnije dobijene patrljke prekrio krunicama ili mostovima. Ova radikalna metoda često vremenom dovodi do ireverzibilnog oštećenja pulpe tj nerva zuba, potpornog aparata zuba i u nekim slučajevima gubitka jednog ili više zuba.',
      'stom.p4':                '"Holivudske" transformacije osmeha u poslednje vreme dobijaju negativnu konotaciju i u Velikoj Britaniji su nazvani "Turkey teeth" po Turskom dentalnom turizmu gde ovaj trend podrazumeva nebezbedan, ultra brz protokol destruktivnog brušenja gde se kao rezultat dobijaju neprirodno beli i očigledno veštački zubi. U našoj ordinaciji ne podržavamo ovaj trend, naročito ne kod mladih pacijenata.',
      'stom.p5':                'Dobra vest je da možemo postići atraktivan i zdrav osmeh i bez oštećenja zuba! Imamo rešenje za svaku vrstu problema, bilo da je to nepravilnost položaja, oblika ili nedostatak jednog ili više zuba. Dr Ana se specijalizuje u minimalno invazivnim transformacijama osmeha koje pored ostalog uključuju tretman Invisalign folijama za korekciju položaja zuba i upotrebu kompozitnih materijala radi korekcije oblika i nijanse vaših prirodnih zuba.',
      'stom.faq.eyebrow':       'Česta pitanja',
      'stom.faq.q1':            'Da li je minimalno invazivna stomatologija za mene?',
      'stom.faq.a1':            'Minimalno invazivna stomatologija je idealna za svakoga ko želi da sačuva što više prirodnog zubnog tkiva. Dr Ana će na konsultaciji proceniti vaše specifično stanje i predložiti najadekvatniji tretman.',
      'stom.faq.q2':            'Šta su kompozitni veneeri?',
      'stom.faq.a2':            'Kompozitni veneeri su tanki slojevi estetskog materijala koji se nanose direktno na površinu zuba bez ili sa minimalnim brušenjem. Koriguju oblik, boju i poziciju zuba — bez trajnog oštećenja zubne supstance.',
      'stom.faq.q3':            'Koliko traje jedan tretman?',
      'stom.faq.a3':            'Trajanje zavisi od kompleksnosti slučaja. Jednostavniji tretmani (ispun, korekcija oblika) mogu biti gotovi za jedan sat. Složenije transformacije osmeha zahtevaju više poseta. Na prvoj konsultaciji dobit ćete preciznu procenu.',
      'stom.faq.q4':            'Da li je tretman bolan?',
      'stom.faq.a4':            'Primenjujemo lokalna anestezija gde je potrebno. Naš pristup je uvek pažljiv i opušten — pacijenti sa anksioznošću posebno su dobrodošli jer Dr Ana ima bogato iskustvo u radu sa nervoznim pacijentima.',
      'stom.faq.q5':            'Koje materijale koristite?',
      'stom.faq.a5':            'Koristimo isključivo netoksične, estetske materijale poslednje generacije — kompozitne smole, keramičke inleje i onleje, cirkonijumske krunice. Svi materijali su biokompatibilni i proverene kvalitete.',

      /* INVISALIGN */
      'inv.hero.eyebrow':       'Ortodoncija',
      'inv.hero.h1':            'Invisalign',
      'inv.hero.p':             'Jedini originalni američki sistem providnih folija za ispravljanje zuba. Diskretan, komforan, predvidiv.',
      'inv.h2.1':               'Šta je Invisalign?',
      'inv.p1':                 'Invisalign je jedini originalni, američki sistem patentiranih folija (alajnera) za ispravljanje zuba. Ovim naprednim sistemom mogu se ispraviti čak i veoma kompleksne nepravilnosti položaja zuba i zagrižaja. Ove udobne i gotovo neprimetne folije su posebno popularne među odraslom populacijom i zbog svog diskretnog izgleda, izbor poslovnih ljudi širom sveta.',
      'inv.p2':                 'Brzina tretmana, komfor pri nošenju, i predvidivost samog plana terapije su važni faktori koje pacijenti smatraju presudnima pri odlučivanju za ovaj sistem. Uz sve navedeno, najvažniji faktor je iskustvo ordinirajućeg doktora i zato sa ponosom ističemo da je Dr Ana Miladinović sertifikovani provajder ovog prestižnog sistema od 2016 godine i da je od tada uspešno tretirala stotine zadovoljnih pacijenata.',
      'inv.h2.2':               'Kako se Invisalign poredi sa drugim brendovima providnih folija?',
      'inv.p3':                 'Invisalign alajneri se prave od patentiranog Smart track materijala procesom 3D štampanja. Ovaj sofisticirani materijal se karakteriše savršenom ravnotežom između čvrstoće i elastičnosti te tako omogućava udobnost tokom nošenja uz predvidljivo pomeranje zuba. Folije drugih brendova su napravljene od plastike različite debljine koja se oblikuje vakum aparatom te nema podjednako dobra svojstva.',
      'inv.h2.3':               'Koliko dugo traje terapija?',
      'inv.p4':                 'Dužina trajanja terapije zavisi od stepena nepravilnosti zuba. Svakom pacijentu se na početku tretmana određuje individualni plan terapije koji diktira broj folija. Svaka folija se nosi 20–22 sata dnevno, 7–10 dana i onda se prelazi na narednu.',
      'inv.p5':                 'Dužina terapije za najblaže nepravilnosti traje oko 3 meseca dok je uobičajeno trajanje tretmana između 6 i 9 meseci. Folije postepeno postavljaju zube u pravilan položaj i kao krajnji rezultat pacijent dobija sjajan estetski i funkcionalan rezultat koji je postignut bez ikakvog oštećenja zubne supstance.',
      'inv.p6':                 'Ukoliko postoje nepravilnosti oblika jednog ili više zuba, nakon završenog ispravljanja radi se korigovanje oblika kompozitnim materijalima.',
      'inv.faq.q1':             'Da li Invisalign boli?',
      'inv.faq.a1':             'Invisalign je neuporedivo udobniji od metalnih aparatića. Može doći do blage nelagodnosti pri prvom nošenju svake nove folije — ovo je normalno i znak da zubi pomeraju. Nelagodnost prolazi za 1–2 dana.',
      'inv.faq.q2':             'Da li folije smetaju pri govoru?',
      'inv.faq.a2':             'Većina pacijenata se prilagodi za nekoliko dana. Folije su tanke i precizno se prilagođavaju obliku vaših zuba, tako da ometanje govora je minimalno i prolazno.',
      'inv.faq.q3':             'Mogu li da jedem sa folijama?',
      'inv.faq.a3':             'Folije se vade pri svakom obroku. To je jedna od prednosti Invisalign-a — možete jesti šta god želite, bez ograničenja kao kod metalnih aparatića. Potrebno ih je nositi 20–22 sata dnevno.',
      'inv.faq.q4':             'Kolika je cena Invisalign tretmana?',
      'inv.faq.a4':             'Cena zavisi od kompleksnosti slučaja i broja potrebnih folija. Na besplatnoj konsultaciji Dr Ana će proceniti vaš slučaj i dati preciznu ponudu. Pogledajte naš cenovnik za orjentacione cene.',
      'inv.faq.q5':             'Šta je retainer i da li je obavezan posle tretmana?',
      'inv.faq.a5':             'Nakon završetka tretmana obavezno se nosi retainer — fiksni (žičica sa unutrašnje strane zuba) ili mobilni (providna folija samo za noć). Retainer čuva postignut rezultat dugoročno.',

      /* ANTI-AGEING */
      'anti.hero.eyebrow':      'Estetska medicina',
      'anti.hero.h1':           'Anti-ageing & regenerativna estetska medicina',
      'anti.hero.p':            'Moderni minimalno invazivni tretmani za prirodan, svež i odmoran izgled.',
      'anti.h2.1':              'Individualni pristup i konsultacija',
      'anti.p1':                'Savremene tehnike i najkvalitetniji proizvodi dostupni na tržištu, koje koristimo u našoj ordinaciji, omogućiće vam da izgledate kao najbolja verzija sebe, a ne kao neko drugi. Negujemo vašu individualnost i vraćamo samopouzdanje diskretnim korekcijama koje za cilj imaju svežiji i odmorniji izgled.',
      'anti.p2':                'Detaljna konsultacija i analiza lica je najznačajniji korak i zato joj posvećujemo posebnu pažnju i vreme. Možete očekivati odgovore na sva pitanja i nedoumice i detaljan dugoročni plan terapije jer iz iskustva znamo da najbolje prirodne transformacije zahtevaju vreme i posvećenost.',
      'anti.h2.2':              'Kolagen stimulatori i Egzosomi',
      'anti.p3':                'Kolagen je glavni protein zastupljen u koži čija proizvodnja počinje da opada već u tridesetim godinama. Ključ usporavanja procesa starenja upravo jeste nadoknada i očuvanje ove dragocene supstance. Kolagen stimulatori su proizvodi nove generacije koji deluju na ćelijskom nivou stimulacijom fibroblasta — ćelija koje proizvode kolagen.',
      'anti.p4':                'Egzosomi su napravili revoluciju na svetskom tržištu estetske medicine u poslednjih par godina i doživeli značajan rast u popularnosti upravo zbog sposobnosti da stimulišu regeneraciju oštećenih ćelija. U ordinaciji Maison Dental & Aesthetic primenjujemo brojne minimalno invazivne procedure koji za cilj imaju proces "buđenja kože" i stimulisanja ćelijskih procesa regeneracije a sve u cilju postizanja prirodnih rezultata u vidu jedre, blistave, podmlađene kože.',
      'anti.h2.3':              'Botoks u terapiji bruksizma, migrene i prekomernog znojenja',
      'anti.p5':                'Osim za ublažavanje i prevenciju bora na licu, botoks se u medicini bezbedno koristi dugi niz godina za lečenje migrene, prekomernog znojenja kao i u stomatologiji za terapiju bruksizma (stiskanje i škripanje zubima).',
      'anti.p6':                'Dr Ana ima višegodišnje iskustvo u ovim naprednim tehnikama lečenja kao i u upotrebi botoksa u estetske svrhe — tretman horizontalnih bora na čelu, između obrva, oko očiju.',
      'anti.faq.q1':            'Da li su tretmani bezbedni?',
      'anti.faq.a1':            'Svi tretmani koje primenjujemo su klinički potvrđeni i bezbedni kada ih sprovodi iskusan lekar. Dr Ana koristi isključivo sertifikovane proizvode od proverenih dobavljača i primenjuje minimalne efektivne doze.',
      'anti.faq.q2':            'Koliko dugo traju efekti botoksa?',
      'anti.faq.a2':            'Efekti botoksa traju 3–6 meseci u zavisnosti od tretiranog područja, individualne metabolizacije i primenjene doze. Redovni tretmani tokom vremena produžuju trajanje efekta.',
      'anti.faq.q3':            'Šta su egzosomi i kako deluju?',
      'anti.faq.a3':            'Egzosomi su mikroskopske vezikule koje prenose biološke informacije između ćelija. U estetskoj medicini stimulišu regeneraciju i obnovu kože na ćelijskom nivou — rezultat je svežija, jedra i blistava koža.',
      'anti.faq.q4':            'Da li je tretman bolan?',
      'anti.faq.a4':            'Tretmani su minimalno invazivni. Po potrebi koristimo anestetičke kreme koje znatno smanjuju nelagodnost. Većina pacijenata opisuje tretman kao blagu nelagodnost, a ne bol.',
      'anti.faq.q5':            'Koliko vremena je potrebno za oporavak?',
      'anti.faq.a5':            'Većina tretmana nema period oporavka — možete nastaviti sa normalnim aktivnostima odmah. Može doći do blagog crvenila ili manjih modrica koje prolaze za dan-dva.',

      /* CENOVNIK */
      'cenovnik.eyebrow':       'Transparentne cene',
      'cenovnik.h1':            'Cenovnik 2026',
      'cenovnik.p':             'Sve cene su u dinarima (RSD). Za kompleksne slučajeve cena se određuje nakon pregleda.',

      /* 404 */
      '404.h1':                 'Stranica nije pronađena',
      '404.p':                  'Stranica koju tražite ne postoji ili je premeštena.',
    },

    en: {
      /* NAV */
      'nav.home':               'Home',
      'nav.about':              'About',
      'nav.services':           'Services',
      'nav.services.stom':      'Minimally Invasive Dentistry',
      'nav.services.inv':       'Invisalign',
      'nav.services.anti':      'Anti-ageing & Aesthetic Medicine',
      'nav.gallery':            'Smile Gallery',
      'nav.prices':             'Price List',
      'nav.contact':            'Contact',
      'nav.cta':                'Book a Consultation',

      /* FOOTER */
      'footer.desc':            'Private dental practice in Belgrade. Minimally invasive dentistry, Invisalign and anti-ageing treatments.',
      'footer.nav':             'Navigation',
      'footer.services':        'Services',
      'footer.contact':         'Contact',
      'footer.rights':          '© 2026 MaisonDental & Aesthetic. All rights reserved.',

      /* COMMON BUTTONS */
      'btn.book':               'Book a Consultation',
      'btn.whatsapp':           'WhatsApp',
      'btn.about':              'About Us',
      'btn.more':               'Learn More',
      'btn.all-reviews':        'Read all reviews',
      'btn.contact-form':       'Contact form',
      'btn.back-home':          'Back to home',

      /* BREADCRUMBS */
      'bc.home':                'Home',
      'bc.services':            'Services',

      /* CTA SECTION */
      'cta.eyebrow':            'Book an appointment',
      'cta.index.h2':           'Ready for a change?',
      'cta.index.p':            'Contact us and book a consultation. We respond quickly.',
      'cta.oNama.h2':           'Contact us today',
      'cta.oNama.p':            'We are happy to answer all your questions and schedule a consultation.',
      'cta.stom.h2':            'Book a consultation today',
      'cta.stom.p':             'Contact us and find out which option is right for you.',
      'cta.inv.h2':             'Book an Invisalign consultation',
      'cta.inv.p':              'Find out if you are a candidate for Invisalign and get an individual treatment plan.',
      'cta.anti.h2':            'Book a consultation',
      'cta.anti.p':             'Through a detailed facial analysis we find the optimal treatment plan for you.',
      'cta.galerija.h2':        'Your transformation starts here',
      'cta.galerija.p':         'Book a consultation and take the first step towards a perfect smile.',
      'cta.kontakt.h2':         'Consultation is free',
      'cta.kontakt.p':          'Schedule an appointment and get an accurate estimate for your case.',

      /* INDEX */
      'index.hero.eyebrow':     'Dr Ana Miladinović — Belgrade & London',
      'index.hero.h1':          'Your smile,',
      'index.hero.h1em':        'our mission',
      'index.hero.lead':        'At MaisonDental & Aesthetic, we are dedicated to ethical dental practice, with the mission of providing patients with long-term preservation of the health, function and aesthetics of their teeth.',
      'index.hero.badge1.num':  '15+',
      'index.hero.badge1.lbl':  'years of experience',
      'index.hero.badge2.num':  'Invisalign',
      'index.hero.badge2.lbl':  'certified since 2016',
      'index.hero.img.alt':     'Photo of Dr Ana Miladinović',

      'index.strip.1.title':    'Minimally invasive',
      'index.strip.1.text':     'We preserve your natural teeth without unnecessary drilling',
      'index.strip.2.title':    'London experience',
      'index.strip.2.text':     'Kings College London, Eastman Dental Institute',
      'index.strip.3.title':    'Invisalign certified',
      'index.strip.3.text':     'Certified provider since 2016 — hundreds of satisfied patients',
      'index.strip.4.title':    'Holistic approach',
      'index.strip.4.text':     'Dentistry, Invisalign and anti-ageing treatments under one roof',

      'index.services.eyebrow': 'Our services',
      'index.services.h2':      'What we offer',
      'index.s1.eyebrow':       'Dentistry',
      'index.s1.h3':            'Minimally Invasive Aesthetic Dentistry',
      'index.s1.text':          'A perfect smile without unnecessary drilling — using the latest generation of composite materials and digital technology.',
      'index.s2.eyebrow':       'Orthodontics',
      'index.s2.h3':            'Invisalign',
      'index.s2.text':          'The only original American system of clear aligners for straightening teeth. Discreet, comfortable and predictable treatment for adults.',
      'index.s3.eyebrow':       'Aesthetic Medicine',
      'index.s3.h3':            'Anti-ageing & Regenerative Medicine',
      'index.s3.text':          'Modern minimally invasive treatments for a natural, fresh and rested appearance — collagen stimulators, exosomes, botox.',

      'index.about.eyebrow':    'Dr Ana Miladinović',
      'index.about.h2':         'Fifteen years dedicated to the perfect smile',
      'index.about.p1':         'Dr Ana Miladinović graduated from the Faculty of Dentistry, University of Belgrade in 2008. After passing her professional exam she moved to London, where she continued her education at Kings College London and the Eastman Dental Institute.',
      'index.about.p2':         'Dr Ana specialises in minimally invasive smile transformations involving the use of Invisalign aligners and the latest generation of composite materials — without drilling or damaging teeth.',
      'index.about.cred1':      'Faculty of Dentistry Belgrade, graduated 2008',
      'index.about.cred2':      'Kings College London & Eastman Dental Institute',
      'index.about.cred3':      'Invisalign certified provider since 2016',
      'index.about.cred4':      'Postgraduate studies — minimally invasive dentistry, 2018',
      'index.about.cred5':      'Anti-ageing and regenerative aesthetic medicine',
      'index.about.btn':        'Learn more about Dr Ana',

      'index.stats.1.num':      '15+',
      'index.stats.1.lbl':      'years of experience',
      'index.stats.2.num':      '500+',
      'index.stats.2.lbl':      'Invisalign patients',
      'index.stats.3.num':      '2',
      'index.stats.3.lbl':      'practices — Belgrade & London',
      'index.stats.4.num':      '100%',
      'index.stats.4.lbl':      'minimally invasive approach',

      'index.test.eyebrow':     'Patient experiences',
      'index.test.h2':          'What patients say',

      /* O NAMA */
      'oNama.hero.eyebrow':     'Dr Ana Miladinović',
      'oNama.hero.h1':          'About Us',
      'oNama.hero.p':           'Fifteen years of dedication to minimally invasive dentistry and aesthetic medicine.',
      'oNama.bio.eyebrow':      'Biography',
      'oNama.bio.h2':           'Dr Ana Miladinović',
      'oNama.bio.p1':           'Dr Ana Miladinović graduated from the Faculty of Dentistry, University of Belgrade in 2008. After completing her internship and passing her professional exam she moved to London, United Kingdom, where she had her diploma recognised and continued working in private practice.',
      'oNama.bio.p2':           'She dedicated the beginning of her professional career to extensive training in dental prosthetics and smile design at the most prestigious university clinics in London — Kings College London and the Eastman Dental Institute, learning from the world\'s leading experts.',
      'oNama.bio.p3':           'In 2017 she became a certified Invisalign provider and has since successfully treated hundreds of satisfied patients with this revolutionary orthodontic system.',
      'oNama.bio.p4':           'In 2018 she completed postgraduate studies in modern aesthetic and restorative dentistry with a special focus on minimally invasive dentistry.',
      'oNama.bio.p5':           'Dr Ana specialises in minimally invasive smile transformations which, among other methods, involve the use of Invisalign aligners for straightening teeth and the latest generation of composite materials for non-invasive correction of tooth shape and colour (without drilling or damaging teeth), resulting in a perfect combination of function and aesthetics.',
      'oNama.bio.p6':           'Since 2016 Dr Ana has simultaneously been advancing her knowledge in aesthetic medicine and anti-ageing procedures, and in recent years in regenerative aesthetic medicine using polynucleotides and exosomes — all with the aim of maintaining a natural, well-groomed and fresh appearance of your face and skin.',
      'oNama.bio.p7':           'Dr Miladinović regularly treats international patients in Central London, Wimpole Street, Marylebone.',
      'oNama.timeline.eyebrow': 'Career',
      'oNama.timeline.h2':      'Education & Experience',
      'oNama.tl.1.h4':          'Graduated',
      'oNama.tl.1.p':           'Faculty of Dentistry, University of Belgrade',
      'oNama.tl.2.h4':          'London — Private Practice',
      'oNama.tl.2.p':           'Kings College London, Eastman Dental Institute — smile design, prosthetics',
      'oNama.tl.3.h4':          'Invisalign Certificate',
      'oNama.tl.3.p':           'Certified Invisalign provider — hundreds of patients treated to date',
      'oNama.tl.4.h4':          'Postgraduate Studies',
      'oNama.tl.4.p':           'Modern aesthetic and restorative dentistry — minimally invasive dentistry',
      'oNama.tl.5.h4':          'Anti-ageing & Regenerative Medicine',
      'oNama.tl.5.p':           'Polynucleotides, exosomes, botox — Belgrade and Wimpole Street, London',
      'oNama.test.eyebrow':     'Patient experiences',
      'oNama.test.h2':          'What patients say',

      /* GALERIJA */
      'galerija.hero.eyebrow':  'Before & After',
      'galerija.hero.h1':       'Smile Gallery',
      'galerija.hero.p':        'Real patient transformations — Invisalign, composite veneers, aesthetic dentistry.',
      'galerija.inv.eyebrow':   'Invisalign',
      'galerija.inv.h2':        'Teeth straightening with aligners',
      'galerija.ven.eyebrow':   'Aesthetic Dentistry',
      'galerija.ven.h2':        'Composite veneers & smile design',

      /* KONTAKT */
      'kontakt.hero.eyebrow':   'Book an appointment',
      'kontakt.hero.h1':        'Contact',
      'kontakt.hero.p':         'Write to us, call or fill in the form — we will get back to you shortly.',
      'kontakt.info.h2':        'MAISON DENTAL & AESTHETIC',
      'kontakt.lbl.address':    'Address',
      'kontakt.lbl.phone':      'Phone',
      'kontakt.lbl.email':      'Email',
      'kontakt.lbl.whatsapp':   'WhatsApp',
      'kontakt.lbl.instagram':  'Instagram',
      'kontakt.wa.link':        'Message us on WhatsApp',
      'kontakt.form.h2':        'Send a message',
      'kontakt.form.ime':       'Full name *',
      'kontakt.form.email':     'Email address *',
      'kontakt.form.telefon':   'Phone (optional)',
      'kontakt.form.usluga':    'Service you are interested in',
      'kontakt.form.opt0':      '— Select a service —',
      'kontakt.form.opt1':      'Minimally invasive dentistry',
      'kontakt.form.opt2':      'Invisalign',
      'kontakt.form.opt3':      'Anti-ageing & aesthetic medicine',
      'kontakt.form.opt4':      'Other',
      'kontakt.form.poruka':    'Message *',
      'kontakt.form.note':      'We respond within 24 hours on business days.',
      'kontakt.form.submit':    'Send message',
      'kontakt.success.h3':     'Thank you!',
      'kontakt.success.p':      'Your message has been received. We will be in touch soon.',

      /* STOMATOLOGIJA */
      'stom.hero.eyebrow':      'Services',
      'stom.hero.h1':           'Minimally Invasive Aesthetic Dentistry',
      'stom.hero.p':            'A perfect smile without damaging your natural teeth — with the latest generation materials and techniques.',
      'stom.h2.1':              'What are the advantages of minimally invasive over traditional dentistry?',
      'stom.p1':                'By avoiding unnecessary drilling of healthy tooth tissue, we allow our patients to preserve their natural dentition long-term and minimise the need for future invasive treatments. Education on risk avoidance and training patients in proper oral hygiene plays a key role in this concept, as do regular dental check-ups. We pay special attention to children\'s teeth and make dental visits a real pleasure. We apply a minimally invasive approach in all dental interventions.',
      'stom.h2.2':              'What when drilling is unavoidable?',
      'stom.p2':                'We choose non-invasive or minimally invasive preparation techniques and direct (fillings) or indirect (inlays, onlays, veneers or crowns) restorations using non-toxic aesthetic materials of the latest generation. We use magnifying dental loupes and digital technology that enables perfect precision. The result is functional and aesthetic restorations that last without harming your natural teeth.',
      'stom.h2.3':              'Dreaming of a Hollywood smile?',
      'stom.p3':                'The "Hollywood smile" trend has not lost its popularity for decades, but it usually involves the preparation (so-called "drilling") of the patient\'s teeth so that the dentist can later cover the stumps with crowns or bridges. This radical method often leads over time to irreversible damage to the pulp (nerve) of the tooth, the supporting apparatus of the tooth and in some cases the loss of one or more teeth.',
      'stom.p4':                'Hollywood smile transformations have recently gained a negative connotation and in the UK they are called "Turkey teeth" after Turkish dental tourism, where this trend involves an unsafe, ultra-fast protocol of destructive drilling resulting in unnaturally white and obviously artificial teeth. We do not support this trend in our practice, especially not in young patients.',
      'stom.p5':                'The good news is that we can achieve an attractive and healthy smile without damaging teeth! We have a solution for every type of problem, whether it is a positional irregularity, a shape problem or the absence of one or more teeth. Dr Ana specialises in minimally invasive smile transformations which include Invisalign aligner treatment for correcting tooth position and the use of composite materials to correct the shape and shade of your natural teeth.',
      'stom.faq.eyebrow':       'Frequently asked questions',
      'stom.faq.q1':            'Is minimally invasive dentistry right for me?',
      'stom.faq.a1':            'Minimally invasive dentistry is ideal for anyone who wants to preserve as much natural tooth tissue as possible. Dr Ana will assess your specific condition at the consultation and recommend the most appropriate treatment.',
      'stom.faq.q2':            'What are composite veneers?',
      'stom.faq.a2':            'Composite veneers are thin layers of aesthetic material applied directly to the tooth surface with no or minimal drilling. They correct the shape, colour and position of teeth — without permanently damaging tooth substance.',
      'stom.faq.q3':            'How long does a treatment take?',
      'stom.faq.a3':            'Duration depends on the complexity of the case. Simpler treatments (filling, shape correction) can be completed in one hour. More complex smile transformations require multiple visits. You will receive an accurate estimate at your first consultation.',
      'stom.faq.q4':            'Is the treatment painful?',
      'stom.faq.a4':            'We use local anaesthesia where needed. Our approach is always careful and relaxed — patients with anxiety are especially welcome as Dr Ana has extensive experience working with nervous patients.',
      'stom.faq.q5':            'What materials do you use?',
      'stom.faq.a5':            'We use exclusively non-toxic, aesthetic materials of the latest generation — composite resins, ceramic inlays and onlays, zirconia crowns. All materials are biocompatible and of proven quality.',

      /* INVISALIGN */
      'inv.hero.eyebrow':       'Orthodontics',
      'inv.hero.h1':            'Invisalign',
      'inv.hero.p':             'The only original American system of clear aligners for straightening teeth. Discreet, comfortable, predictable.',
      'inv.h2.1':               'What is Invisalign?',
      'inv.p1':                 'Invisalign is the only original, American system of patented aligners for straightening teeth. This advanced system can correct even very complex positional irregularities of teeth and bite. These comfortable and almost invisible aligners are especially popular among adults and, due to their discreet appearance, are the choice of business people around the world.',
      'inv.p2':                 'Speed of treatment, wearing comfort, and predictability of the treatment plan are important factors that patients consider decisive when choosing this system. Most importantly, the experience of the treating doctor is key — and we are proud that Dr Ana Miladinović has been a certified provider of this prestigious system since 2016 and has successfully treated hundreds of satisfied patients.',
      'inv.h2.2':               'How does Invisalign compare to other clear aligner brands?',
      'inv.p3':                 'Invisalign aligners are made from patented SmartTrack material using a 3D printing process. This sophisticated material is characterised by a perfect balance between rigidity and elasticity, enabling wearing comfort with predictable tooth movement. Aligners from other brands are made from plastic of varying thickness shaped by a vacuum machine and do not have equally good properties.',
      'inv.h2.3':               'How long does the treatment take?',
      'inv.p4':                 'The length of treatment depends on the degree of tooth irregularity. Each patient receives an individual treatment plan at the start of treatment which dictates the number of aligners. Each aligner is worn for 20–22 hours per day, for 7–10 days, then the next one is placed.',
      'inv.p5':                 'Treatment for the mildest irregularities lasts about 3 months, while the typical treatment duration is between 6 and 9 months. The aligners gradually move the teeth into the correct position and the end result is an excellent aesthetic and functional outcome achieved without any damage to tooth substance.',
      'inv.p6':                 'If there are shape irregularities in one or more teeth, shape correction with composite materials is performed after straightening is complete.',
      'inv.faq.q1':             'Does Invisalign hurt?',
      'inv.faq.a1':             'Invisalign is incomparably more comfortable than metal braces. There may be mild discomfort when first wearing each new aligner — this is normal and a sign that the teeth are moving. The discomfort passes within 1–2 days.',
      'inv.faq.q2':             'Do the aligners affect speech?',
      'inv.faq.a2':             'Most patients adjust within a few days. The aligners are thin and precisely adapt to the shape of your teeth, so speech interference is minimal and temporary.',
      'inv.faq.q3':             'Can I eat with the aligners in?',
      'inv.faq.a3':             'Aligners are removed for every meal. This is one of the advantages of Invisalign — you can eat whatever you want, without the restrictions of metal braces. They need to be worn for 20–22 hours per day.',
      'inv.faq.q4':             'How much does Invisalign treatment cost?',
      'inv.faq.a4':             'The cost depends on the complexity of the case and the number of aligners needed. At a free consultation Dr Ana will assess your case and provide an accurate quote. See our price list for indicative prices.',
      'inv.faq.q5':             'What is a retainer and is it mandatory after treatment?',
      'inv.faq.a5':             'After treatment it is mandatory to wear a retainer — fixed (wire on the inside of the teeth) or removable (clear aligner worn only at night). The retainer maintains the achieved result long-term.',

      /* ANTI-AGEING */
      'anti.hero.eyebrow':      'Aesthetic Medicine',
      'anti.hero.h1':           'Anti-ageing & Regenerative Aesthetic Medicine',
      'anti.hero.p':            'Modern minimally invasive treatments for a natural, fresh and rested appearance.',
      'anti.h2.1':              'Individual approach and consultation',
      'anti.p1':                'The modern techniques and highest quality products available on the market that we use in our practice will allow you to look like the best version of yourself, not someone else. We nurture your individuality and restore confidence through discreet corrections aimed at a fresher and more rested appearance.',
      'anti.p2':                'A detailed consultation and facial analysis is the most important step, so we dedicate special attention and time to it. You can expect answers to all your questions and concerns and a detailed long-term treatment plan, because experience tells us that the best natural transformations require time and dedication.',
      'anti.h2.2':              'Collagen stimulators and Exosomes',
      'anti.p3':                'Collagen is the main protein in skin, and its production begins to decline as early as the thirties. The key to slowing down the ageing process is precisely the replenishment and preservation of this precious substance. Collagen stimulators are new generation products that act at the cellular level by stimulating fibroblasts — the cells that produce collagen.',
      'anti.p4':                'Exosomes have revolutionised the global aesthetic medicine market in recent years and have experienced significant growth in popularity precisely because of their ability to stimulate the regeneration of damaged cells. At MaisonDental & Aesthetic we apply numerous minimally invasive procedures aimed at the process of "awakening the skin" and stimulating cellular regeneration processes — all with the aim of achieving natural results in the form of firm, radiant, rejuvenated skin.',
      'anti.h2.3':              'Botox in the treatment of bruxism, migraine and excessive sweating',
      'anti.p5':                'In addition to reducing and preventing facial wrinkles, botox has been safely used in medicine for many years to treat migraines, excessive sweating and in dentistry for the treatment of bruxism (clenching and grinding of teeth).',
      'anti.p6':                'Dr Ana has many years of experience in these advanced treatment techniques as well as in the use of botox for aesthetic purposes — treatment of horizontal forehead wrinkles, between the eyebrows, around the eyes.',
      'anti.faq.q1':            'Are the treatments safe?',
      'anti.faq.a1':            'All treatments we apply are clinically validated and safe when performed by an experienced doctor. Dr Ana uses only certified products from trusted suppliers and applies minimum effective doses.',
      'anti.faq.q2':            'How long do the effects of botox last?',
      'anti.faq.a2':            'The effects of botox last 3–6 months depending on the treated area, individual metabolism and the dose applied. Regular treatments over time extend the duration of the effect.',
      'anti.faq.q3':            'What are exosomes and how do they work?',
      'anti.faq.a3':            'Exosomes are microscopic vesicles that carry biological information between cells. In aesthetic medicine they stimulate skin regeneration and renewal at the cellular level — the result is fresher, firmer and more radiant skin.',
      'anti.faq.q4':            'Is the treatment painful?',
      'anti.faq.a4':            'Treatments are minimally invasive. Where needed we use anaesthetic creams that significantly reduce discomfort. Most patients describe the treatment as mild discomfort rather than pain.',
      'anti.faq.q5':            'How much recovery time is needed?',
      'anti.faq.a5':            'Most treatments have no recovery period — you can resume normal activities immediately. There may be mild redness or minor bruising that passes within a day or two.',

      /* CENOVNIK */
      'cenovnik.eyebrow':       'Transparent pricing',
      'cenovnik.h1':            'Price List 2026',
      'cenovnik.p':             'All prices are in Serbian dinars (RSD). For complex cases the price is determined after consultation.',

      /* 404 */
      '404.h1':                 'Page not found',
      '404.p':                  'The page you are looking for does not exist or has been moved.',
    }
  };

  var currentLang = localStorage.getItem('md-lang') || 'sr';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('md-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = translations[lang] && translations[lang][key];
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = translations[lang] && translations[lang][key];
      if (val) el.placeholder = val;
    });

    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-label');
      var val = translations[lang] && translations[lang][key];
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = translations[lang] && translations[lang][key];
      if (val) el.alt = val;
    });

    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      btn.querySelector('[data-lang-sr]').style.fontWeight = lang === 'sr' ? '700' : '400';
      btn.querySelector('[data-lang-en]').style.fontWeight = lang === 'en' ? '700' : '400';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var target = e.target.closest('[data-lang-sr], [data-lang-en]');
        if (!target) return;
        var lang = target.hasAttribute('data-lang-sr') ? 'sr' : 'en';
        applyLang(lang);
      });
    });

    applyLang(currentLang);
  });

  window.mdI18n = { apply: applyLang };
})();
