# Marinor NTNU – analyse av Framer-nettsiden

Grunnlag for å bygge en ny Marinor-nettside. Analysen er gjort 25.09.2026 direkte mot Framer-prosjektet
(via Framer MCP): alle sider, alle kodekomponenter, alle hjelpefiler, farger og tekststiler.

- **Produksjon:** https://marinorntnu.no
- **Staging:** https://cultural-table-666294.framer.app
- **Språk på siden:** engelsk (all tekst under er gjengitt ordrett slik den vises i dag)

> Innhold i `«…»` / kodeblokker er den teksten som faktisk vises på siden **etter** at
> tekstoppdateringslaget (`CopyUpdates.tsx`, se 2.4) har byttet ut gammel tekst.

---

## 0. Kort oppsummert

- Siden er i praksis **ikke bygget med vanlige Framer-lag**. Hver side består av én stor React-kodekomponent
  (`HomePage`, `AboutPage`, `ArgusShowcase` …) som legges inn i Desktop-rammen. Resten av Framer-prosjektet
  er rester fra en Framer-mal (36 komponenter, tekststiler og farger som ikke brukes på sidene).
- Alt deler ett felles designsystem i `SiteKit.tsx`: farger, fonter, typografi, knapper, kort, «reveal»-animasjoner,
  container queries for responsivitet, og en egen klikk-ruter.
- Uttrykket er **lyst og rolig**: lys lavendel bakgrunn (`#EEEBFD`), nesten svart tekst, Marinor-lilla (`#7C469C`)
  som aksent, lys lavendel (`#D6BAEC`) på mørke flater. Store fotokort med mørke gradienter, mørke «paneler» med
  svake dybdekurver (som på et sjøkart), mono-etiketter i versaler.
- 13 sider: Home, About, Projects (+ Argus, Proteus), Team (+ 2025, 2026), Competitions (+ Njord, RoboBoat),
  Sponsor, Join. Proteus og Team 2026 er «Coming soon».
- Ingen CMS-samlinger. Alt innhold ligger i koden (standardverdier) og i props på canvas.
- Tre URL-er har skrivefeil: `/competitions/njord-challange`, `/competitions/roboat`, `/want-to-spons-us`.

---

## 1. Hvordan analysen er gjort, og hva jeg ikke fikk sett

**Lest:** prosjektstruktur, XML for alle sider jeg fikk tilgang til, kildekoden til alle 39 kodekomponenter og 2
override-filer, pluss 5 skjulte hjelpefiler som ikke står i prosjektlisten (`HomeKit.tsx`, `AboutKit.tsx`,
`SponsorKit.tsx`, `ArgusPhotos.tsx` og `CopyUpdates.tsx`). Jeg har også lest
fargestiler, tekststiler og CMS (tom).

**Begrensninger:**
- `marinorntnu.no`, `framer.com` og `framerusercontent.com` er blokkert av nettverksregelen i dette skymiljøet, så
  jeg har ikke sett den publiserte siden i nettleser, og jeg har ikke lastet ned bildene.
- Framer MCP ga feil («Node is not a text node») på sidene **/competitions** og **/team/team-2026**. Innholdet der er
  utledet fra koden: `/competitions` bruker med stor sannsynlighet `CompetitionsHub`, og kommentaren i
  `ComingSoon.tsx` sier at den brukes for «Team 2026, Proteus …».
- **Lister (arrays) som er lagret på canvas vises ikke i XML-en.** Der en side har lister (statistikk, team,
  sponsorer, tidslinje osv.) har jeg dokumentert standardlistene fra koden. De er med stor sannsynlighet det som
  vises, men en eldre liste kan ligge lagret på canvas.
- SEO-innstillinger (title/description per side, favicon, OG-bilde) er ikke tilgjengelige via MCP.

---

## 2. Teknisk oppbygging i Framer

### 2.1 Sider, breakpoints og rammer
- Hver side har tre breakpoints: **Desktop 1200 px**, **Tablet 810 px**, **Phone 390 px**.
- Desktop-rammen har bakgrunnsfargen `/Primary 10%` (= `rgba(82,53,239,.1)` på hvitt ≈ `rgb(238,235,253)`,
  som også er `PAGE_BG` i koden).
- Vanlig innpakning: Desktop (padding `120px 40px`) → Stack (`maxWidth 1240px`) → én sidekomponent.
  Home bruker ingen padding og legger `HomePage` rett i Desktop (full bredde).
- Navigasjon (`SiteNav`) og footer (`SiteFooter`) er kodekomponenter. De ligger som referanse-instanser på
  Design-siden. På websidene vises de ikke i XML-en, så de er trolig lagt inn som felles lag/layout for alle sider.

### 2.2 Filstruktur for koden (39 kodefiler + hjelpefiler)
| Område | Filer | Rolle |
|---|---|---|
| Felles | `SiteKit.tsx` | Designsystem: tokens, CSS, `Page`, `Reveal`, `Label`, `SectionHead`, `Button`, `Photo`, `Contours`, `Stat(s)`, `CtaPanel`, `Intro`, `SiteLogo`, ikoner, `CopyButton`, ruter |
| Felles | `SiteNav.tsx`, `SiteFooter.tsx` | Meny og bunntekst |
| Felles | `CopyUpdates.tsx` | Bytter gammel tekst → ny tekst (se 2.4) |
| Home | `HomePage` + `HomeHero`, `HomeStory`, `HomeSponsors`, `HomeWorld`, `HomeLife`, `HomeKit` (bilder) | `HomeArgus.tsx` (BuildStory) er ubrukt |
| About | `AboutPage` + `AboutTop`, `AboutJourney`, `AboutBottom`, `AboutKit` | |
| Argus | `ArgusShowcase` + `ArgusTop`, `ArgusTech`, `ArgusNav`, `ArgusJourney`, `ArgusGallery`, `ArgusEnd`, `ArgusKit`, `ArgusPhotos` | |
| Hubs | `ProjectsHub`, `CompetitionsHub` | Gjenbruker `DoorCard` fra `HomeWorld` |
| Konkurranser | `NjordChallenge` + `NjordTop`, `NjordBottom`, `NjordLinks`, `NjordKit`; `RoboBoat` | RoboBoat = NjordChallenge med eget innhold |
| Sponsor | `SponsorPage` + `SponsorHero`, `SponsorSections`, `SponsorTiers`, `SponsorKit` | `SponsorTiers` brukes også på Home |
| Team | `TeamHub`, `Team2025Showcase`, `ResponsivePhoto` | |
| Diverse | `JoinPage`, `ComingSoon` | |
| Overrides | `Team2025Effects.tsx` (`withPhotoReveal`), `Examples.tsx` (Framer-standard, ubrukt) | |

### 2.3 Prinsipper i koden (verdt å ta med videre)
- **Container queries i stedet for media queries.** `.mr-page` er en container (`container-name: mr`), og all
  responsiv CSS er `@container mr (max-width: …)`. Da ser Tablet/Phone-rammene i Framer riktige ut, og riktig layout
  vises før JavaScript har lastet. Reserve for gamle nettlesere: `@media` med +60 px.
- **Flytende størrelser:** `clamp(min, n cqi, max)` med `vw` som reserve (`fluid()`).
- **Animasjon er CSS, og siden er synlig uten JS.** `Reveal` skjuler bare det som ligger under skjermkanten når siden
  lastes, og viser det når det scrolles inn (IntersectionObserver). Barna kommer ett og ett (80 ms forsinkelse).
- **Bevegelse bare når det gir mening:** parallax bare med mus (`hover: hover` og `pointer: fine`) og bredde ≥ 1000 px.
  `prefers-reduced-motion` og Framer-canvas slår av animasjoner («still»).
- **Bilder:** Framers bilde-CDN skalerer ned (`?scale-down-to=512/1024/2048/4096`) med `srcset` og `sizes`.
- **Ruter:** alle klikk på interne lenker går via Framers ruter (`useSiteRouter`), og klikk på `#anker` på samme side
  scroller mykt.
- **Side-marger:** `--mr-gut: clamp(20px, 5vw, 40px)`, beregnet slik at Framer-rammens egen padding ikke dobles.
- `html, body { overflow-x: clip }` hindrer sideveis vingling på mobil.

### 2.4 Tekstoppdateringslaget (`CopyUpdates.tsx`)
Mange sider har eldre tekst lagret på canvas. `freshCopy(props)` går gjennom alle tekst-props og bytter ut kjente
gamle setninger med ny tekst (en liste med ca. 170 par, gammel → ny). Konsekvenser:
- Teksten i Framer-panelet er ofte **ikke** den som vises. Teksten i dette dokumentet er den som vises.
- Laget virker bare på tekst-props på toppnivå, ikke på lister (arrays).
- Retningen i omskrivingen er tydelig: **kortere, enklere og mer konkret språk**, færre superlativer, ingen tankestreker
  («–»). Eksempler: «Driving ASV innovation from Trondheim.» → «Autonomous boats, built by students.»;
  «One boat. Every skill we have.» → «About Argus»; «From Trondheim to the world stage.» → «Where we compete.»
  Denne tonen bør den nye siden følge.

### 2.5 Rester fra malen (brukes ikke på sidene)
- 36 Framer-komponenter fra malen: Badge, Button, Client Image, Step Item, Icon Feature, Testimonial, List Item,
  Button Round Icon, Social Icon, Footer, Navigation (gammel meny med logo), Counter Item, Team Item, Button Form,
  Accordian, Accordian Wrapper, Feature Item One/Two/Three, Pricing, Nav Links, CTA Section, Quote, Button Waitlist,
  Blog, Load More, Remix Template Button, Alert Bar, Comparision Item, Step Tab, Step Item Boxed, Icon List Item,
  Popup Button, Testimonial List, Testimonial Card, Avatar.
- Fargestiler fra malen: `/Primary rgb(82,53,239)`, `/Secondary rgb(135,113,255)`, `/Dark rgb(16,16,17)`,
  `/Gray 1–4`, `/White`, `/Black`, `/Dark 40%`, `/Dark 80%`, `/Transparent`, `/Primary 10/20/50%`.
  Egen: **`/Marinor Lilla rgb(124,70,156)`**.
- Tekststiler fra malen: Headings 1 Jumbo (90) / 1 (70) / 2 (48) / 3 (40) / 4 (32) / 5 (28) / 6 (22) i Inter Display,
  og Paragraphs (12–20 px) i Switzer. Kodekomponentene bruker ikke disse, de har egen typografi.

---

## 3. Sidekart

| URL (som i dag) | Komponent | Status |
|---|---|---|
| `/` | `HomePage` | Ferdig |
| `/about` | `AboutPage` | Ferdig |
| `/projects` | `ProjectsHub` | Ferdig |
| `/projects/argus` | `ArgusShowcase` | Ferdig, den rikeste siden |
| `/projects/proteus` | `ComingSoon` | Plassholder |
| `/team` | `TeamHub` (header + 2 kort) | Ferdig |
| `/team/team-2025` | `Team2025Showcase` + `ResponsivePhoto` | Ferdig |
| `/team/team-2026` | (trolig `ComingSoon`) | Plassholder |
| `/competitions` | (trolig `CompetitionsHub`) | Ferdig |
| `/competitions/njord-challange` ⚠ skrivefeil | `NjordChallenge` | Ferdig |
| `/competitions/roboat` ⚠ skrivefeil | `RoboBoat` | Ferdig |
| `/want-to-spons-us` ⚠ skrivefeil | `SponsorPage` | Ferdig |
| `/join` | `JoinPage` | Ferdig |

Ankere som brukes: `/about#about-journey`, `#about-vision`, `#argus-journey`, `#argus-autonomy`,
`#sponsor-benefits`, `#our-sponsors`.

**Menystruktur (SiteNav):**
- About us → `/about`
- Projects ▾ → Argus («Our first autonomous boat», bilde av Argus) · Proteus («Our next boat, in the works», stiplet
  båtikon) · «All projects»
- Team ▾ → Team 2026 («This season's crew», mørk rute med «’26») · Team 2025 («The founding crew», lys rute med «’25») · «All teams»
- Competitions ▾ → Njord Challenge («Trondheim, Norway», Njord-bilde) · RoboBoat («Florida, USA», logo) · «All competitions»
- Sponsor us → `/want-to-spons-us`
- Knapp: **Join Marinor** → `/join` (på smal skjerm: «Join»)

---

## 4. Designsystem

### 4.1 Farger
| Token | Verdi | Bruk |
|---|---|---|
| `DARK` | `rgb(16,16,17)` / `#101011` | Tekst, mørke paneler og knapper |
| `GRAY` | `rgb(92,94,100)` / `#5C5E64` | Brødtekst, ingress |
| `ACCENT` | `rgb(124,70,156)` / **`#7C469C`** «Marinor Lilla» | Etiketter, lenker, aktive tilstander, aksentord |
| `LAVENDER` | `rgb(214,186,236)` / **`#D6BAEC`** | Aksent på mørk bakgrunn, uthevet ord i hero |
| `PAGE_BG` | `rgb(238,235,253)` / **`#EEEBFD`** | Sidebakgrunn |
| Hvit | `#FFFFFF` | Kort |
| Bildeplassholder | `rgb(222,216,236)` | Før bilder har lastet |
| «Live»-prikk | `rgb(110,222,160)` + ring `rgba(110,222,160,.25)` | «On the water», «Open for partners» |
| Gull / sølv / bronse | `rgb(212,168,58)` / `rgb(170,177,186)` / `rgb(184,120,74)` | Sponsornivåer |
| Blueprint-bakgrunn | `linear-gradient(160deg, rgb(30,22,50), rgb(16,16,17))` + rutenett 28–30 px i lavendel 7–8 % | Proteus, 2028-tegning |
| Kartbakgrunn | `radial-gradient(120% 100% at 80% 0%, rgb(56,30,100), rgb(22,17,34) 55%, rgb(16,16,17))` | Rutekart på Home |

Kantlinjer: `rgba(16,16,17,.07)` på kort, `rgba(16,16,17,.14–.16)` på skillelinjer, `rgba(124,70,156,.13–.25)` i lilla.
Fotogradienter: typisk `rgba(10–12,12,16,…)` fra ~.4 øverst via ~.05 til ~.9 nederst.

### 4.2 Typografi
| Rolle | Font | Detaljer |
|---|---|---|
| Display | **Inter Display** (700, noen steder 600) | Titler og tall, stram sporing |
| Brødtekst | **Switzer** (500 / 600) | Tekst, knapper |
| Mono | `ui-monospace, "SF Mono", Menlo, Consolas` | Etiketter, datoer, tall, VERSALER |

| Klasse | Størrelse | Linjehøyde / sporing |
|---|---|---|
| `.mr-h1` | clamp(46px, 7.2cqi, 108px) | .94 / -.045em, `text-wrap: balance` |
| `.mr-intro .mr-h1` (sidetitler) | clamp(58px, 12cqi, 164px) | .9 / -.055em, siste ord i aksent |
| `.mr-h2` | clamp(32px, 4.4cqi, 60px) | 1.04 / -.04em |
| `.mr-h3` | 24px (21 på mobil) | 1.12 / -.03em |
| `.mr-lead` | clamp(17px, 1.5cqi, 19px), grå | 1.55 / -.01em, maks 62ch |
| `.mr-text` | 16px, grå | 1.55 |
| `.mr-small` | 14px | 1.5 |
| `.mr-label` (eyebrow) | mono 12px VERSALER, `.08em`, aksentfarge, 18 px strek foran | Lavendel på mørk bakgrunn |
| Stat-tall | clamp(40px, 4.6cqi, 64px), `tabular-nums` | Suffiks i aksent, 55 % størrelse |

Store utsagn («Statement»): Inter Display 700, clamp(28px, 4.2–4.4cqi, 58–62px), grå (34 %) med utvalgte ord i full svart.
Heltetitler på foto: hvite, 60–172 px.

### 4.3 Form, avstand og mønstre
- **Radius:** knapper 12, tagger 8, kort 16–20, store kort/paneler 24–28 (20 på mobil).
- **Maksbredde:** innhold 1320 px (`.mr-wrap`, padding 40/20), sider 1240 px.
- **Rytme:** avstand mellom seksjoner 136 px (tablet 104, mobil 80). Inne i en seksjon: 48 px (34 på mobil).
- **Knapper:** 50 px høye (48 på mobil), padding 0 22 px, 15.5 px/600. Varianter: `dark`, `accent`, `light`,
  `outline`, `ghost` (glass på mørk bakgrunn). Pil-ikon som flytter seg 3 px ved hover. Hover: løft 2 px, skala 1.04, skygge.
  Eksterne lenker får en pil skrått opp og åpnes i ny fane. Knapper til ankere får pil ned.
- **Tagger** (`.mr-tag`): 30 px, mono 11.5 px VERSALER. Varianter: glass (mørk blur), light, soft (lilla 10 %).
- **Kort** (`.mr-card`): hvite, tynn kant, løftes 4–6 px ved hover med lilla kant og myk skygge.
- **Mørkt panel** (`.mr-panel.mr-dark`): radius 28 og **dybdekurver** nederst (tre bølgelinjer i SVG, 16 % hvit, som
  sakte driver sidelengs) – Marinors «sjøkart»-signatur.
- **Fotokollasjer:** ett stort bilde og ett mindre som overlapper i motsatt hjørne, med en 7 px ring i sidefargen,
  og en tag eller chip oppå.
- **«Door»-kort:** store fotokort (600–640 px høye) med status-tag øverst, enorm tittel, tekst, glass-tagger og CTA.
  På desktop vokser kortet du holder over (flex-grow 1.35 mot 0.85).
- **Nummerering:** 01, 02 … i mono aksentfarge går igjen overalt (lister, mål, steg, kort).
- **Rutenett:** 4 kolonner stats, 3 kolonner kort, 2 kolonner tekst/bilde. Faller til 2 og så 1 kolonne.

### 4.4 Breakpoints (bredden på sidekomponenten, ikke vinduet)
`lg ≤ 1099` · `md ≤ 859` (tablet) · `sm ≤ 599` (mobil) · `xs ≤ 399`. Menyen bytter til hamburger under **1080 px**.
Footeren har egne brudd: 979 / 759 / 639 / 479.

### 4.5 Bevegelse
- Easing: `cubic-bezier(.22,1,.36,1)` og `cubic-bezier(.2,.7,.2,1)`.
- Heltetekst: `mr-rise` (opp 26 px + fade, 0.9 s) med 0.05–0.34 s forsinkelse per linje.
- Scroll-reveal: barna glir opp 28 px én etter én. H2 glir opp ut av en maske (`clip-path`). Bilder «setter seg» fra
  skala 1.14. Strek foran etiketter tegnes (scaleX). Tall kommer inn (ingen opptelling).
- Første store bilde på en side zoomer sakte inn på plass (2.4 s).
- Parallax: hero-bilde 10–12 % (Home, Argus), teambildet ±5 %.
- Tidslinjer: en linje som fylles mens du scroller (Argus vertikalt, About horisontal «sticky» fremdriftslinje).
- SVG-tegninger «tegnes» når de kommer inn (Proteus-blueprint, kystkart, 2028-tegning, rutepunkter på Njord).
- Små båter som seiler langs en rute med `animateMotion` (Trondheim → Sarasota 14 s, norskekysten 18 s).
- Sponsorgalleri: festet horisontal scroll på desktop med mus.
- Logo: ikonet roterer 90° ved hover.

---

## 5. Globale elementer

### 5.1 Navigasjon (`SiteNav`)
- Ligger øverst på et mykt lilla bånd (`linear-gradient(180deg, rgba(124,70,156,.22), .08, 0)`), 104 px høy.
- Etter scroll blir den en smal hvit linje (72 px, 97 % hvit, lilla kantlinje, skygge). Logoen krymper
  (ikon 56 → 42 px, ordmerke 150 → 128 px).
- Skjules når du scroller nedover (etter 200 px) og kommer tilbake når du scroller opp.
- Rullegardiner (320 px, hvit, radius 18, med en liten pil) med miniatyrbilde (46 px), tittel, undertekst og pil ved hover.
  Aktiv side får en prikk.
- Under 1080 px: hamburger (46 px) → fullskjermmeny med gradient hvit → lys lilla, store lenker (31 px Inter Display),
  underlenker som «chips», stor lilla «Join Marinor»-knapp, e-post og Instagram/LinkedIn nederst. Esc lukker.

### 5.2 Footer (`SiteFooter`)
- Bakgrunn fra hvit til lilla 30 % nederst, med en tynn bølgelinje langs toppen.
- Rutenett: merkevarekolonne (1.5 fr) + 3 lenkekolonner.
  - **Merkevare:** logo · «A student organisation at NTNU in Trondheim that builds autonomous boats.» ·
    ✉ marinorntnu@gmail.com + «Copy»-knapp · 📍 Høgskoleringen 1, 7034 Trondheim (lenke til Google Maps) ·
    knapper «Instagram» og «LinkedIn».
  - **Marinor:** Home · About us · Team · Competitions
  - **Our work:** Argus · Proteus · Njord Challenge · RoboBoat
  - **Get involved:** Join the crew · Sponsor us · Email us
- Bunnlinje: «© {år} Marinor NTNU» · «Org.nr. 936 064 809» · «Back to top ↑».

### 5.3 Logo
- Logomerke (ikon): `https://framerusercontent.com/images/BO2urvxgz7PCfU3cj5LFakOZRKs.png`
- Ordmerke: `https://framerusercontent.com/images/7JK8ZyEUioMp7EwhkipkjxdPib0.png`
- Stor logo (ligger på canvas ved About): `https://framerusercontent.com/images/6nCPTtU3MVJN6DO5DTdwmcRWIg.png` (305×371)
- Reserve i tekst hvis bildet feiler: *MARINOR* (800) *NTNU* (300), kursiv Inter Display, i aksentfarge.

---

## 6. Side for side (innhold som vises)

### 6.1 Home `/`
1. **Hero** – fullbreddebilde av Argus (`okoPvPfG…`), høyde clamp(680 px, 100vh, 1000 px), mørk gradient oppe og til
   venstre, overgang til sidefargen nederst. Oppe til høyre (bare desktop), i mono: «Argus on Trondheim harbour · 63.44° N · 10.42° E».
   - Etikett: `Marinor NTNU · Trondheim`
   - H1 (hvit): `Where robotics meets the sea.` – «sea.» i lavendel med en håndtegnet bølgestrek under som tegnes inn.
   - Tekst: `We are a student organisation at NTNU that builds autonomous boats. Our first boat, Argus, sailed in the Njord Challenge in Trondheim in 2026.`
   - Knapper: **Meet Argus** → `/projects/argus` · **Become a partner** → `/want-to-spons-us`
   - Under 1000 px: overskriften står på bildet (700 px høyt, 560 px på mobil), mens tekst og knapper står under bildet på lys bakgrunn.
2. **Who we are** – tekst til venstre, bildekollasj til høyre (580 px).
   - `Who we are` / H2 `Autonomous boats, built by students.`
   - Stort avsnitt (Inter Display 600, grått, utvalgte ord i svart): `Our members study **robotics**, **automation**, **marine** **technology** and other subjects at NTNU. We work with the Department of Engineering Cybernetics, and we build, program and test the boats **ourselves** in Trondheim.`
   - Knapper: **More about us** → `/about` · **Meet the team** → `/team`
   - Bilder: teambilde (`vejpeUPa…webp`) stort, skrog i verkstedet (`XCTH8UnF…`) lite. Glass-tag: `Marinor NTNU • Trondheim • Est. 2025`. Mørk chip med grønn prikk: `35+ members`.
3. **Sponsorer** – mørkt panel (maks 1480 px) med dybdekurver.
   - `Our sponsors` / `Thanks to our partners.` / `These companies and organisations support Marinor NTNU. Without them we could not build our boats or travel to competitions.`
   - Nivåer (se 7.6), deretter en boks: `Want to see your logo here?` + **Become a partner**.
4. **Our projects** – `Our projects` / `Our boats.` / `Argus is finished and has been tested in the harbour. Proteus is the next boat, and we are designing it now.`
   - Door-kort **Argus**: status «On the water» (grønn prikk) · `Our first autonomous boat. A catamaran with LiDAR, a stereo depth camera and a Kongsberg Seapath 130.` · tagger `Catamaran · LiDAR · Stereo camera · Seapath 130` · «Explore Argus»
   - Door-kort **Proteus**: animert blueprint (wireframe-båt i lavendel, «PROTEUS · DRAFT», «REV 0.1») · status «In development» · `Our next boat. We are working on the design now.` · tagg «Coming soon» · «Follow Proteus»
5. **Competitions** – `Competitions` / `Where we compete.` / `We took Argus to the Njord Challenge in Trondheim in 2026. Next we want to go to RoboBoat in Florida.`
   - Venstre: **rutekart** (3:2, mørk lilla): «Where we're headed», en rute fra Trondheim til Sarasota med en liten båt som seiler, «≈ 7 450 KM». Nåler: «Trondheim, Norway – Njord · every August» og «Sarasota, Florida – RoboBoat · every February». Under: tre steg: `2026 First time at Njord` · `2027 Win Njord` · `Then RoboBoat` (mørk).
   - Høyre: små door-kort **Njord** («We compete here», `A student competition in Trondheim where autonomous boats solve tasks in the harbour without anyone steering.`, «Explore Njord») og **RoboBoat** («Next goal», logo, `A large competition for autonomous boats, held every February in Sarasota, Florida.`, «Explore RoboBoat»).
6. **Get involved** (sentrert) – `Get involved` / `Join us or support us.` – to store fotokort (540 px):
   - «For students» · `Join the team.` · `We need students in software, electronics, mechanics, design and more. You do not need any boat experience.` · **Join Marinor** (teambilde)
   - «For companies» · `Become a partner.` · `Support the team and get to know students in robotics, automation and marine technology at NTNU.` · **Partner with us** (Argus i vannet, `iD5n7P5P…`)

### 6.2 About `/about`
1. **Hero** (2 kolonner): `About Marinor NTNU` / H1 `Students who build **autonomous boats**` (de to siste ordene i aksent) /
   `Marinor NTNU is a student organisation at NTNU in Trondheim. We build autonomous boats and enter them in student competitions.` /
   **Join Marinor** · **Timeline ↓**. Kollasj med tre bilder (båt, bryggearbeid, sensorer) og en hvit tag `Founded 2025 · Trondheim`.
2. **Statement:** `We build our boats in the workshop and test them in the harbour in Trondheim.`
3. **Who we are:** bilder til venstre (`4TVFbItx…`, `e4K2lW5C…`). `Who we are` / `A student organisation at NTNU.`
   > Marinor NTNU is a technical student organisation at NTNU. We build autonomous boats that find their way on the water without anyone steering.
   > Our members study robotics, automation, marine technology and other subjects. We work with the Department of Engineering Cybernetics.
   > Marinor was founded in 2025 and has more than 35 members.
   - «Founded by» (chips med initialer): **Kasper Tufte Langland**, **Johannes Embretsen Gunnarshaug**, **Oskar Fredrik Eliassen**, **Emil Mohr-Skogan**
4. **Stats:** `2025` the year Marinor NTNU was founded in Trondheim · `35+` members in 2026 · `4` students started Marinor · `23` teams in the 2026 Njord Challenge, Marinor included
5. **Timeline** `#about-journey` – `Timeline` / `What we have done so far.` / `We started in 2025. Here is what we have done and what we plan next.` En «sticky» fremdriftslinje 2025 → 2028. Årstall i kjempestørrelse (76–150 px):
   - **2025** · «Founded» · *Marinor is founded* · `Four students start Marinor NTNU in Trondheim. The first members build the hulls for Argus in the workshop.` · bilde fra verkstedet · «See how we built Argus»
   - **2026** · «Njord Challenge» · *First Njord Challenge* · `We sail Argus in Njord: The Autonomous Ship Challenge in Trondheim, against university teams from several countries.` · Njord-bilde · «About Njord»
   - **2027** (årstall i aksent) · «Next goal» (mørk) · *Win Njord, then RoboBoat* · `In 2027 we want to win the Njord Challenge. After that we want to enter RoboBoat in Florida.` · RoboBoat-logo på lyst lavendelpanel · «Njord», «RoboBoat»
   - **2028** (årstall som omriss) · «Planned» (stiplet) · *A bigger boat* · `In 2028 we plan to start building a much bigger boat. The long-term goal is a boat that can sail the Norwegian coast on its own with a crew on board.` · teknisk tegning: liten, heltrukket Argus («Argus – 2025 · built») ved siden av en stor, stiplet båt med mannskap («The big boat – 2028 · planned», merket «Sensors» og «Crew») · «About the long-term goal ↓»
6. **Vision** `#about-vision` – mørkt panel med Argus-bilde svakt i bakgrunnen: `The long run` / `Along the Norwegian coast.` / `In the long run we want to scale up our competition boat. The goal is a boat that sails the whole Norwegian coast on its own, with people on board.`
   - 01 **Crew on board** – People sail with the boat · 02 **Fully autonomous** – No one at the wheel · 03 **The whole coast** – From Kristiansand to Kirkenes
   - **Kystkart** over Norge (SVG etter ekte koordinater), med en lavendel rute som tegnes, byer som dukker opp (Kristiansand, Stavanger, Bergen, Ålesund, **Trondheim · home port**, Bodø, Tromsø, Nordkapp, Kirkenes) og en båt som seiler langs kysten.
7. **What we do** – `What we do` / `What we do.` – tre bilder med tekst: 01 **We build** – Members make the hulls, electronics and software themselves and test them in the harbour. · 02 **We work with NTNU** – We work with the Department of Engineering Cybernetics and with companies that support us. · 03 **We meet people** – Members get to know other students, researchers and companies that work with autonomous boats.
8. **Galleri** (bento, 4 kolonner) – `Photos` / `From the workshop and the harbour.` – Out on the water · Work on the dock · Getting ready · Eyes of the boat · Long days in the workshop · Testing in the harbour
9. **CTA** – `Join the crew` / `Want to join?` / `We need students in software, electronics, mechanics, design and more. You do not need any boat experience.` / **Join Marinor** · **Meet Argus**

### 6.3 Projects `/projects`
1. Intro: `Marinor NTNU · Projects` / H1 `Pick a project.` / `Read about Argus, the boat we have built and tested, or Proteus, the boat we are designing now.` Fakta til høyre: **2** projects · **1** on the water · **1** in development.
2. Høye door-kort (640 px) for Argus og Proteus (samme tekst som på Home, tagger for Proteus: «Coming soon»).
3. `From one boat to the next` / `Everything we learn on Argus goes into Proteus.` – 4 steg: **2025** Marinor is founded – Four students start Marinor. · **2026** Argus hits the water – Argus goes in the water in Trondheim harbour. · **2026** Njord Challenge – We enter the Njord Challenge with Argus. · **Next** Proteus – Our next boat. Work has started.
4. CTA: `Be part of the next one` / `Want to help build the next boat?` / `Join the team, or support us as a partner while we build Proteus.` / **Join Marinor** · **Become a partner**

### 6.4 Argus `/projects/argus`
1. **Hero-kort** (min 740 px, radius 28, bilde med parallax): `Marinor NTNU · Project Argus` + tag `Autonomous Surface Vessel` / H1 `Meet Argus` (opptil 172 px) / `Our first autonomous boat. A catamaran built by students in Trondheim and tested in the harbour.` / **Open the interface** ↗ (https://gui.marinorntnu.no, ny fane) · **See the build ↓** (`#argus-journey`)
2. **Stats:** `1st` autonomous surface vessel built by Marinor NTNU · `2` hulls in a stable catamaran design · `5` months from the first hull to launch day · `4` propellers, so Argus can turn 360 degrees while it moves forward
3. **About Argus** – `The project` / `About Argus`
   > Argus is our first autonomous surface vessel. It finds its way on the water with no one at the wheel.
   > The hulls, electronics, sensors, control system and software all have to work together on one boat. Our members made every part of it.
   - Kollasj (`iD5n7P5P…`, `Xt3NToRp…`) + hvit merkelapp «Tested in Trondheim harbour».
4. **What is on board** – `On board` / `What is on board` / `The sensors and hardware Argus uses to see, find its position and steer.` Bildet (sensorer, 640 px) står fast mens listen scrolles. Tag «Sensing», bildetekst «Sensors mounted on top of the electronics case». Se liste 7.3.
5. **How Argus finds its way** `#argus-autonomy` (mørkt panel) – `Autonomy` / `How Argus finds its way` / `From what the sensors see to the signal that turns the propellers, in the order it happens on board.` Seks kort der et lys løper langs toppkanten (se 7.4), og en stiplet boks **5G to shore** med animerte signalstreker: `All data from Argus is sent to land over 5G, so we can follow its internal state and get important information while it sails.`
6. **How we built it** `#argus-journey` – `The build` / `How we built it` / `The build, from the first hull in the workshop to the first test in the harbour.` En midtlinje fylles mens du scroller, og radene veksler mellom kort og bilde (se 7.5).
7. **Galleri** – `Behind the scenes` / `Photos from the dock`. Masonry i 3 kolonner, bildetekst ved hover, lysboks (piltaster, Esc). Se 7.8.
8. **Our goals** (3 kort med aksentkant øverst): Goal 01 **A fully autonomous boat** – Get Argus to solve all four Njord tasks on its own. · Goal 02 **More partners** – Work more with the Department of Engineering Cybernetics and with the companies that support us. · Goal 03 **Next projects** – Use what we learn from Argus when we build Proteus and the bigger boat.
9. **CTA** (venstrestilt): `Project Argus` / `Open the Argus interface` / `Our GUI team built a web interface for following Argus while it sails. You can open it here.` / **Open the interface** ↗ · **Join Marinor**

### 6.5 Proteus `/projects/proteus` (plassholder)
Mørkt panel (min 680 px): `Marinor NTNU · Project Proteus` / (lavendel) `Project info` / H1 `Coming soon` / `Proteus is our next boat. This page is not ready yet.` / blinkende «In progress» / **See Project Argus**.

### 6.6 Team `/team`
- Intro: `Marinor NTNU` / H1 `Our **Team**` / `The students behind Marinor NTNU. Choose a year to see who was on the team.`
- To kort (340 px høye, side om side): **Team 2026** – mørkt kort med dybdekurver og stort lavendel «’26», tag «Current season» → `/team/team-2026` · **Team 2025** – gruppebilde, tag «Founding season» → `/team/team-2025`.

### 6.7 Team 2025 `/team/team-2025`
- Intro: `Marinor NTNU · Season 2025` / H1 `Team **2025**` / `The students who started Marinor NTNU and built Argus.`
- Gruppebilde (`fUF3HR5F…`), 3:2 (5:4 på mobil), radius 28, svak parallax.
- `Our groups`: rutenett med ett kort per gruppe (bilde, navn, «N members», navneliste). Se 7.1.
- CTA: `Want to join the team?` / `We need students in robotics, automation, marine technology and other subjects.` / **Join Marinor**

### 6.8 Team 2026 `/team/team-2026`
Kunne ikke leses (MCP-feil). Trolig `ComingSoon`-plassholder. **Det finnes ingen data om Team 2026.**

### 6.9 Competitions `/competitions` (utledet fra `CompetitionsHub`)
1. Intro: `Marinor NTNU · Competitions` / H1 `Pick a competition.` / `Read about Njord in Trondheim, where we sail Argus, or RoboBoat in Florida, where we want to go next.` Fakta: **2** competitions · **2** continents · **1** boat: Argus.
2. Door-kort: **Njord** («We compete here», tagger «Trondheim · August · Njord NTNU») og **RoboBoat** («Next goal», tagger «Sarasota, FL · February · RoboNation», logo).
3. `Side by side` / `Two competitions, one kind of boat.` – tabell:

   | | Njord | RoboBoat |
   |---|---|---|
   | Where | Nyhavna, Trondheim | Sarasota, Florida |
   | When | Five days in August | Every February |
   | Run by | Njord NTNU | RoboNation |
   | Marinor | Took part in 2026 | Our goal after Njord |
4. `The road ahead` / `Where we compete.` – **2026** First time at Njord – Argus sails the Njord Challenge in Trondheim with 22 other teams. · **2027** Win Njord – Back in Nyhavna, this time to win. · **Then** RoboBoat – Enter RoboBoat in Florida with what we learn at Njord.
5. CTA: `Come along` / `Follow us to the start line.` / `See the boat we compete with, or support us as a partner.` / **Meet Argus** · **Become a partner**

### 6.10 Njord Challenge `/competitions/njord-challange`
1. **Hero-kort** (Njord-bilde): `Competitions · Njord` / H1 `The Njord Challenge` / `A student competition for autonomous boats, held every August in Trondheim. Teams from several countries bring boats they have built and let them sail on their own.` / glass-chips: Nyhavna, Trondheim · Five days in August · Student teams from many countries / **Njord's website** ↗ · **Meet Argus**
2. **Stats:** `4` tasks on the water: manoeuvring, path finding, collision avoidance and docking · `5 days` of competition in Nyhavna, Trondheim · `2019` the year Njord was started by students at NTNU · `23` teams signed up for the 2026 challenge, Marinor among them
3. `What it is` / `What Njord is.`
   > Njord: The Autonomous Ship Challenge is run by Njord NTNU, a student organisation started in Trondheim in 2019. Every August student teams come to Nyhavna in Trondheim.
   > Each team builds and runs its own autonomous boat. During the week the boats solve tasks on the water with no one steering. In 2025 eleven teams from eight countries took part, and Navier USN from Norway won.
   - Kollasj: Argus senkes i vannet (`2E7XId6D…`) + Argus på vannet.
4. `On the water` / `The four tasks.` / `The boats sail a course in the harbour and get one task at a time. The team is not allowed to steer.` Oppgavene står som veipunkter på en stiplet rute som tegnes (loddrett på mobil):
   - Task 01 **Manoeuvring** – The boat has to steer through a marked course on the water and show that it can control its own movement.
   - Task 02 **Path finding** – The boat has to read the sea markers and find its own way through the course, without help from the team.
   - Task 03 **Collision avoidance** – Another vessel crosses the path. The boat has to see it in time and go around it safely.
   - Task 04 **Docking** – The last task is to find the right spot at the dock and park the boat there on its own.
5. `What is out on the course.` / `The course has the same kind of marks a boat meets at sea, and the boat has to read them.` – 01 **Buoys** – Floating markers that show where the course goes and where the boat must not sail. · 02 **Cardinal marks** – Sea marks that show which side is safe to pass. · 03 **AR tags** – Printed markers the boat reads with its camera to find the right dock or gate. · 04 **The Otter** – A small vessel from the organisers that moves across the course in the collision task.
6. `How the teams are judged.` / `The jury also gives points for the report, the presentation and the inspection.` – 01 **The four tasks** – Most points come from what the boat does on the water during the week. · 02 **Technical report** – The team writes about the design and the choices behind the boat. · 03 **Team presentation** – Every team presents their work for the jury and the other teams. · 04 **Technical inspection** – The boat is checked against the rules for size, safety and power before it may sail. · 05 **Data and interface** – Teams show the data and the interface they use to follow the boat. · 06 **Special awards** – There are also prizes for team spirit, sportsmanship and best presentation.
7. Bilde (`4TVFbItx…`) + `Marinor and Njord` / `Marinor at Njord.` / `Marinor NTNU is on the team list for the Njord Challenge 2026. We built Argus for these four tasks: find the way, see what is around it, avoid other boats and dock.`
8. `Links` / `Follow Njord online.` / `Rules, teams, results and news are on Njord's own website.` – stort mørkt kort + tre kort, se 9.
9. CTA: `Njord Challenge` / `Want to know more about Njord?` / `The rules, the schedule and the team list are on Njord's website. You can also read how we built our boat.` / **Go to njordchallenge.com** · **Read about Argus**

### 6.11 RoboBoat `/competitions/roboat` (samme oppsett som Njord)
1. Hero (RoboBoat-bilde, med logo i et hvitt kort oppe til høyre): `Competitions · RoboBoat` / H1 `RoboBoat` / `An international student competition in Florida. Teams build small autonomous boats and let them solve a course on the water, with no one steering.` / Sarasota, Florida · Every February · Run by RoboNation / **RoboBoat 2026** ↗ · **Meet Argus**
2. Stats: `19th` RoboBoat competition was held in 2026 · `6 days` in February at Nathan Benderson Park in Florida · `25+` student teams from many countries took part in 2026 · `3` members is the smallest team allowed to sign up
3. `What it is` / `What RoboBoat is.`
   > RoboBoat is run by RoboNation in the USA. Student teams from all over the world design, build and test their own autonomous surface vessel, and then bring it to Florida.
   > The tasks are based on work boats do at sea, like watching a coastline or keeping a port safe. The boats are judged on how they move, how they are built and what they carry on board.
   > RoboBoat 2026 was the 19th competition. It was held from 19 to 24 February at Nathan Benderson Park in Sarasota, Florida.
4. `How it works` / `A year of work, then a week in Florida.` / `Teams work on their boats for most of the year before the competition week.` – Task 01 **Build a boat** – Teams read the rules and then design, build and test their own small autonomous boat during the year. · 02 **Sail the course** – In Florida the boat has to run a set course on its own. The team is not allowed to steer it. · 03 **Show the work** – Every team hands in a technical report and a video, and presents the boat to the judges. · 04 **Collect points** – Points come from the course, the design and the documents. The team with the most points wins.
5. `Good to know.` / `The short version of where, when and who can take part.` – **Where**: Nathan Benderson Park in Sarasota, Florida. · **When**: Every February. In 2026 it ran from the 19th to the 24th. · **Who can join**: High school and college teams, with at least three members. · **Who runs it**: RoboNation, who also run RoboSub and RobotX.
6. `What the judges look at.` / `The judges also give points for the report, the video and the presentation.` – Course runs · Technical design report · Team video · Presentation · Systems assessment · Community work (med korte tekster).
7. Bilde (Argus i vannet) + `Marinor and RoboBoat` / `Why RoboBoat.` / `RoboBoat is one of the biggest competitions for autonomous boats in the world. Teams we meet at Njord sail here too, for example Navier USN from Norway and AGH Solar Boat from Poland. The skills are the same ones we build with Argus: find the way, see what is around the boat, and dock on your own.`
8. `Links` / `Follow RoboBoat online.` / `Dates, rules, teams and results are on RoboBoat's own website.`
9. CTA: `RoboBoat` / `Want to know more about RoboBoat?` / `The rules, dates and team lists are on RoboBoat's website. You can also read about Njord, the competition we sail in.` / **Go to RoboBoat 2026** · **Read about Njord**

### 6.12 Sponsor `/want-to-spons-us`
1. **Hero-kort** (min 760 px, teambilde): `Marinor NTNU · Partnerships` + glass-tag med grønn prikk «Open for partners» / H1 `Become our next partner.` / `We are looking for new sponsors and partners. If your company wants to support us, contact our Head of Sponsorship and Branding.` / **Contact us** (mailto) · **Why partner with us ↓**. Til høyre et glass-kontaktkort: «Get in touch» / **Head of Sponsorship and Branding** / andreas.furst@marinorntnu.no / «Copy email».
2. Statement: `We want to work with companies that care about new **technology** and want to help **students** build it.`
3. Stats: `2025` founded at NTNU in Trondheim · `35+` members from robotics, automation and marine technology · `7` groups, from perception and control to hardware and PR · `23` teams in the 2026 Njord Challenge, Marinor included
4. `#sponsor-benefits` – `Why partner with Marinor` / `What you get as a partner.` / `This is what a partnership gives you.` – 5 kort (01 er et bredt fotokort med teambildet, 05 et fotokort med Argus): 01 **Meet students** – Get to know engineering students at NTNU before they graduate. · 02 **Help us early** – Marinor started in 2025, so partners have a real say in how we grow. · 03 **Support new technology** – Your support goes into boats that sail without anyone steering. · 04 **Work with us** – Give us problems from your company, or join our tests and projects. · 05 **Visibility** – Your logo on our website, our boat and our posts from competitions.
5. `What you support` / `What your support pays for.` / `Materials, electronics, sensors and travel to competitions. Here is some of the work.` – festet horisontalt galleri på desktop (sveip-rad ellers), 8 kort: 01 Shaping the first hull · 02 Sanding and finishing · 03 First float test · 04 Wiring on the dock · 05 Sensors on board · 06 Testing in the harbour · 07 Argus on the water · 08 The team behind it
6. `How it works` / `Three steps to a partnership.` – 01 **Send us an email** – Tell us a little about your company and what you are interested in. · 02 **We find the right fit** – We meet and agree on what the partnership should look like. · 03 **Build it together** – You follow the project and hear from us during the year and at competitions.
7. Sponsornivåer (lys versjon, `#our-sponsors`) med samme overskrift og tekst som på Home.
8. CTA: `Let's talk` / `Get in touch.` / `Send us an email and we will answer. We can tell you more about Marinor and what a partnership could look like.` / stor e-postknapp + «Copy email»

### 6.13 Join `/join`
1. **Hero** (mørkt panel, 2 kolonner): `Marinor NTNU · Recruitment` / H1 `Join **Marinor.**` (siste ord i lavendel) / `We build autonomous boats in Trondheim. All NTNU students can apply, and you do not need to know anything about boats.`
   - Statusboks: «● STATUS» / **We are not recruiting right now** / `We take in new members at set times. Follow us on Instagram, where we post when applications open.`
   - **Follow us on Instagram** ↗ · **Meet the team** → `/team/team-2025`
   - Bilde til høyre: gruppebildet fra 2025 med glass-tag «The 2025 crew»
2. `Seven groups` / `Our groups.` / `These are our seven groups. Have a look, so you know which one to apply for.` – tabell med nummer, navn, beskrivelse og tagger (se 7.2)
3. `What you get out of it.` – **You build real boats** – You work on a boat that goes in the water and enters competitions. · **You work across subjects** – Software, electronics and mechanics students work on the same boat. · **You meet companies** – Our sponsors and partners follow the project and meet the team.
4. (Skjult: et «Ask us anything»-panel som kan slås på.)

---

## 7. Innholdsdata

### 7.1 Team 2025 (grupper og medlemmer)
| Gruppe | Medlemmer | Gruppebilde |
|---|---|---|
| Leader | Kasper Tufte Langland | `XEpmBBtEvBO4PSWTN8RRtlOvw.jpeg` |
| Perception | Emil Gaustad, Johannes Embretsen Gunnarshaug, Kasper Tufte Langland, Såvi Midtveit, Emil Mohr-Skogan | `JovExWAPbKYOkeeHXr3RYOcI67Y.jpeg` |
| Autonomy | Oskar Fredrik Eliassen, Vegard Hovstad, Magnus Skourup Rognebakke, Matteo Bonora Sevenius | `BfHh25OHRJlZw83QrlZp6I7iHU.jpeg` |
| Control | Sigurd Werner Aatsæther, Peder Aasmundtveit Hoff | *(ikke bilde, mørkt kort)* |
| GUI | Emil Sørgaard Djupvik, Aslak Myhre | `XkgagUSOg49xXxzKBEZ1LBQ1h0.jpeg` |
| Hardware | Are Odberg Algrøy, Jacob Hansson, Magnus Kalvenes, Gardar Benneche Skansbo, Paul Johan Slungård | `NAN587lOnw5hQoiitkckLyvyYVM.jpeg` |
| Economy | Jonas Aanensen | `6zm7txRmwqFrKATugJuXPjmKc.jpeg` |
| PR | Marte Madslien Bakken | `t3K8fBiWn2DvrZOUrKPQgZMU6M.jpeg` |

20 unike personer. Grunnleggere: Kasper Tufte Langland, Johannes Embretsen Gunnarshaug, Oskar Fredrik Eliassen, Emil Mohr-Skogan.
Kontakt for sponsorer: Head of Sponsorship and Branding, andreas.furst@marinorntnu.no. Navnet står ikke på siden, og e-postadressen hører ikke til noen på Team 2025-listen.

### 7.2 De sju gruppene (Join)
| # | Gruppe | Beskrivelse | Tagger |
|---|---|---|---|
| 01 | Perception | LiDAR, cameras and the software that lets the boat understand what is around it. | Sensors · Computer vision · Data |
| 02 | Autonomy | Planning and decision making, so the boat finds a safe route on its own. | Path planning · Algorithms · Simulation |
| 03 | Control | Steering and thrust. Keeps the boat on the planned path in wind and waves. | Control theory · Modelling · Testing |
| 04 | GUI | The interface where we follow the boat, read its data and send it commands. | Web · UX · Visualisation |
| 05 | Hardware | Hulls, frame, power and electronics. | Electronics · CAD · Building |
| 06 | Economy | Budget, sponsors, travel and other practical work. | Budget · Sponsors · Applications |
| 07 | PR | Social media, photos and this website. | Content · Design · Web |

### 7.3 Argus – om bord (gjeldende liste)
1. **Two hulls** – Argus is a catamaran. The two hulls give a wide and stable platform for the sensors and electronics.
2. **Four propellers** – With four propellers Argus can turn a full 360 degrees while it keeps moving forward.
3. **Kongsberg Seapath 130** – A GNSS-aided inertial navigation system. It combines multi-frequency GNSS receivers with gyroscopes and accelerometers, and gives Argus its position, heading, speed, roll and pitch.
4. **Stereo depth camera** – Two lenses measure the distance to things in front of the boat. The images are also used to recognise what the objects are.
5. **LiDAR** – Measures the distance to docks, buoys, boats and other obstacles around the boat.
6. **Pixhawk flight controller** – Controls the motors. It calculates the PWM signal that sets the speed of each propeller.
7. **5G link** – Sends all data from the boat to land, so we can follow its internal state while it sails.
8. **Waterproof electronics case** – The computer, power and wiring are kept dry inside one sealed case.

> Den gamle listen («Twin hulls», «3D LiDAR», «Dual GNSS antennas», «Electric thrusters») byttes automatisk ut i koden
> og skal **ikke** brukes lenger.

### 7.4 Argus – autonomikjeden
| # | Type | Tittel | Tekst |
|---|---|---|---|
| 01 | See | Stereo camera and LiDAR | The depth camera measures distance and recognises objects like buoys and boats. The LiDAR measures the distance to everything around the boat. |
| 02 | Locate | Kongsberg Seapath 130 | GNSS receivers give the position and heading. Gyroscopes and accelerometers fill in between the satellite fixes and keep the estimate going if the signal drops out. Correction data over 5G makes the position more accurate. (+ lenke «Seapath 130 at Kongsberg») |
| 03 | Map | Cost map | What the sensors find goes into a map of the water around the boat. Obstacles, and the water close to them, cost more to sail through. |
| 04 | Decide | State machine | Keeps track of what Argus is doing right now, for example following the course, going around another boat or docking, and switches when something changes. |
| 05 | Plan | Field D* | The path planning algorithm finds the cheapest route across the cost map, and plans again when the map changes. |
| 06 | Drive | Pixhawk | The flight controller turns the plan into PWM signals for the four motors. |
| – | 5G to shore | | All data from Argus is sent to land over 5G, so we can follow its internal state and get important information while it sails. |

### 7.5 Argus – byggetidslinje
| Dato | Tittel | Tekst | Bilde |
|---|---|---|---|
| 16 November 2025 | Shaping the hulls | Work starts in the workshop with the first hull. | `XCTH8UnFJpPlbZTWKyEdvdjsN1A.jpg` |
| 8 January 2026 | Sanding and finishing | Long days of sanding, filling and painting to make the hulls smooth and watertight. | `sscihEc0vW6hGiMootkpCcppvtg.jpg` |
| 8 March 2026 | First time on the water | The first float test in the harbour. It floats. | `4TVFbItxOj73jH3lRTCoPsZy9z4.jpg` |
| 19 April 2026 | Putting it all together | Hulls, frame and electronics are joined together on the dock for the first time. | `Xt3NToRpvd0fFTDvicZcgFlrjiE.jpeg` |
| 26 April 2026 | Launch day | Argus goes into the water with all sensors on board, ready for testing. | `iD5n7P5PmXPXewIrUMJsfhii2rQ.jpeg` |

### 7.6 Sponsorer
| Nivå | Sponsor | Nettside | Logo |
|---|---|---|---|
| Gold partner | Kongsberg Discovery | https://www.kongsberg.com/discovery/ | `7QrKtTqKzIYR85VrJ0iAfBNSkrI.png` |
| Silver partners | DNV | https://www.dnv.com | `1pSSbaZETmTQr2YM0tgWpR50Ozw.png` |
| Silver partners | Telenor | https://www.telenor.no | `QqyKUM2vSwDQ7mI6cp0FjiulL4.png` |
| Bronze partners | NTNU | https://www.ntnu.no | `MUp34G7Qt4MbMcEutaJFB5fLIU.png` |
| Bronze partners | Frifond | https://frifond.no | `s8vuqdph74nH2cOIezUgXyD9Sc.png` |

Visning: gull 560×300, sølv 300×160, bronse 180×108, alle hvite logokort. Nivåoverskrift med farget prikk og linjer
på hver side. Kortene lenker til sponsorens nettside i ny fane, og en liten pil vises ved hover.

### 7.7 Tall som går igjen
Stiftet **2025** · **4** grunnleggere · **35+** medlemmer (2026) · **7** grupper · **23** lag i Njord 2026 (Marinor + 22) ·
Argus: **2** skrog, **4** propeller, **5** måneder fra første skrog til sjøsetting, sjøsatt **26.04.2026** ·
Njord: startet **2019**, **5** dager i august, **4** oppgaver, 2025: **11** lag fra **8** land (vinner Navier USN) ·
RoboBoat: **19.** gang i 2026, **19.–24. februar**, **25+** lag, minst **3** medlemmer · Trondheim → Sarasota ≈ **7 450 km** ·
Trondheim havn **63.44° N · 10.42° E**.

### 7.8 Bildetekster i gallerier
- **Argus-galleriet (7):** Wiring the electronics on the dock · Last checks before launch · Lowering Argus into the water · Working on the hull · Rolling Argus out to the harbour · Ready on the dock · The team behind Argus
- **About-bento (6):** Out on the water · Work on the dock · Getting ready · Eyes of the boat · Long days in the workshop · Testing in the harbour
- **Sponsorgalleriet (8):** se 6.12

---

## 8. Bildebibliotek

Alle bilder ligger på `https://framerusercontent.com/images/<id>` (Framers CDN). Beskrivelsene kommer fra
kommentarene i koden (DSCF-numrene er kamerafilnavn).

| ID | Motiv | Brukes på |
|---|---|---|
| `okoPvPfG1Mc7SjtWCqN6BRlnKQ.jpeg` | DSCF6237 – Argus på vannet (**hovedbildet**, båten lavt i bildet med åpent vann over) | Home-hero, Argus-hero, door-kort, About, Njord, meny |
| `iD5n7P5PmXPXewIrUMJsfhii2rQ.jpeg` | DSCF6216 – Argus i vannet / sjøsettingsdagen | Home («For companies»), Argus story, tidslinje, RoboBoat, About vision |
| `Xt3NToRpvd0fFTDvicZcgFlrjiE.jpeg` | DSCF6185 – arbeid på bryggen (stående) | Argus story, 19 April, About |
| `wE8Fd622sKOX4zZ47Yd5LTp9oo.jpeg` | DSCF6178 – sensorer på elektronikkboksen | Argus tech, About |
| `e4K2lW5CTwePm1UXtq3SxHSsjM.jpeg` | DSCF6189 – på bryggen (stående) | About, Argus-galleri |
| `2E7XId6Dx1tZgYXAEGufUkarzk.jpeg` | DSCF6206 – Argus senkes i vannet | Njord, Argus-galleri |
| `8chMXzdhjcFqVfnM9pVnEK7Bis.jpeg` | DSCF6222 | Argus-galleri |
| `wYxgqlESpg8tAsvJy8vgPrQSQGI.jpeg` | DSCF6226 | Argus-galleri |
| `xPkG7WlvZAhgtjCo7wtwrNjhzE.jpeg` | DSCF6192 | Argus-galleri |
| `XCTH8UnFJpPlbZTWKyEdvdjsN1A.jpg` | 16. nov 2025 – skrog i verkstedet | Home, tidslinjer, About |
| `sscihEc0vW6hGiMootkpCcppvtg.jpg` | 8. jan 2026 – sliping | Tidslinje, About, Sponsor |
| `4TVFbItxOj73jH3lRTCoPsZy9z4.jpg` | ⚠ merket både «8. mars – første flytetest» og «19. april – team på bryggen» | Tidslinje, About, Njord, Argus-galleri |
| `CiY3EgLbeTY7Sd1n3pSqiTaJG10.jpg` | Flytetest i havna (gammelt hero-bilde) | Ubrukt |
| `vejpeUPaXWhQEjooH4OycbpXan8.webp` | Team.jpg – nytt teambilde | Home, Sponsor-hero, Argus-galleri |
| `fUF3HR5F9cbPVuyf7I6Qd6Ndug.jpeg` | Gruppebilde Team 2025 | Team-kort, Team 2025, Join |
| `gVtb0YIZKv3qgIFUEzjyykwgHS8.png` | Njord-bilde (1238×617) | Njord, Home, About 2026, meny |
| `aFSAiq4VrhmVHpI2PQY4CqkQ2g.png` | RoboBoat-bilde | RoboBoat-hero, Home, Competitions |
| `TQPxBN7JTlcvM55CKZspxhPPM.png` | «Roboat bilde» | RoboBoat about |
| `AWh67USU8Gbpps2zpfmK4qVcec.png` | RoboBoat | RoboBoat about |
| `LrBmF25Tu6AkREtPrSt4ZFu3PhI.webp` | RoboBoat-logo (750×561) | Hero-logo, About 2027, meny |
| Gruppebilder Team 2025 | se 7.1 | Team 2025 |
| Sponsorlogoer | se 7.6 | Home, Sponsor |
| Logoer | se 5.3 | Meny, footer |

---

## 9. Kontaktinfo og eksterne lenker

- **E-post (generell):** marinorntnu@gmail.com
- **Sponsoransvarlig:** andreas.furst@marinorntnu.no (Head of Sponsorship and Branding)
- **Adresse:** Høgskoleringen 1, 7034 Trondheim · [Google Maps](https://www.google.com/maps/search/?api=1&query=H%C3%B8gskoleringen%201%2C%207034%20Trondheim)
- **Org.nr.:** 936 064 809
- **Instagram:** https://www.instagram.com/marinorntnu/
- **LinkedIn:** https://www.linkedin.com/company/marinor-ntnu
- **Argus-grensesnitt (GUI):** https://gui.marinorntnu.no
- **Institutt:** Department of Engineering Cybernetics (Institutt for teknisk kybernetikk), NTNU
- **Njord:** https://www.njordchallenge.com/ · 2026-utfordringen: https://www.njordchallenge.com/2026-challenge/2026-challenge · Lag 2026: https://www.njordchallenge.com/teams/2026 · Resultater 2026 (PDF): https://cdn.prod.website-files.com/5d2cc41999a6902b5b3973b6/6a86e963cd66c0b8f2a5a59b_Njordchallnge2026score.pdf
- **RoboBoat:** https://roboboat.org/ · 2026: https://roboboat.org/programs/2026/ · Resultater: https://roboboat.org/2026/results · Håndbok: https://robonation.gitbook.io/roboboat-resources
- **Kongsberg Seapath 130:** https://www.kongsberg.com/what-we-do/ocean-space/inertial-solutions/seapath/seapath-130-series/

---

## 10. Observasjoner og ting å rette i en ny side

1. **URL-skrivefeil:** `njord-challange` → `njord-challenge`, `roboat` → `roboboat`, `want-to-spons-us` → f.eks.
   `/sponsor` eller `/partners`. Legg inn videresending (301) fra de gamle adressene, siden de kan være delt.
2. **To plassholdersider:** Proteus og Team 2026. Enten fyll dem med innhold eller skjul dem fra menyen til de er klare.
3. **Gammel tekst på canvas:** hele `CopyUpdates`-laget finnes bare fordi det ligger utdatert tekst i Framer.
   En ny side bør bruke én kilde for innhold (f.eks. én innholdsfil eller et CMS), og bare den nye teksten.
4. **Bildet `4TVFbItx…`** har to motstridende beskrivelser (flytetest 8. mars eller teamet på bryggen 19. april). Sjekk før gjenbruk.
5. **Tid:** Home sier «Argus sailed in the Njord Challenge … in 2026» (fortid), mens About sier «We sail Argus in Njord …»
   (nåtid) og Njord-siden «is on the team list for … 2026». Njord 2026 er over (august), så teksten bør oppdateres. Det
   finnes en lenke til resultatlisten for 2026, men Marinors resultat står ingen steder.
6. **To e-postdomener:** gmail for alt generelt, `@marinorntnu.no` for sponsor. Vurder `post@marinorntnu.no` eller lignende.
7. **Farge-avvik:** omrisset rundt årstallet 2028 bruker malens `rgb(82,53,239)` i stedet for Marinor-lilla.
8. **Rester i Framer:** 36 ubrukte malkomponenter, malens tekststiler og farger, `Examples.tsx`, `HomeArgus.tsx`, samt
   `heroPlace`-feltet på Home, som ikke brukes.
9. **Bare engelsk.** Hvis målgruppen også er norske bedrifter og nye studenter, kan det være aktuelt med en norsk versjon.
10. **Ikke sett:** SEO-titler, metabeskrivelser, favicon og OG-bilder. Sjekk dem i Framer under Site Settings før bygging.

---

## 11. Den påbegynte 3D-siden i dette repoet

Repoet (`claude/framer-website-analysis-5o84fj`) har allerede en påbegynt ny side fra en tidligere økt
(commit `70c26bb`, «WIP: new 3D Marinor website»):

- **Stack:** Vite 5 + `vite-plugin-singlefile` (alt bygges til én `index.html`), three.js 0.169, GSAP 3, Lenis (myk scroll).
  Fonter: Big Shoulders Display (800), Instrument Sans (variabel), JetBrains Mono.
- **Konsept:** én mørk side, «en nattehavn sett gjennom båtens egne sensorer». 3D-scene bak alt: sjø med
  bølge-shader og LiDAR-sveip, himmel, stjerner og åser (`sea.js`, `waves.js`); Argus bygget av enkle former som
  kan «eksplodere» del for del (`argus.js`); en Njord-bane med bøyer, kardinalmerker, Otter-båten og kai med AR-tag
  (`course.js`); Norge som punktsky med rute langs kysten (`coast.js`). Et HUD med telemetri, dybdemåler og markør.
- **Seksjoner i `index.html`:** Hero («Boats that steer themselves») → Argus (6 deler) → Njord (4 oppgaver, simulert) →
  Timeline (langs kysten) → Crew (7 grupper, tall, grunnleggere) → Bilde-rull fra bryggen → Partners (nivåer +
  sponsorkontakt) → Join → Footer.
- **Farger:** `--abyss #07060d`, `--violet #7c469c`, `--lavender #d6baec`, `--foam #efebf7`, `--cardinal #f2c230`, `--port #e25a4f`, `--stbd #45c07f`.
- **Status:** ikke byggbar. `src/main.js` (som skal koble scene, scroll og DOM sammen) mangler.
- **Avvik fra dagens innhold:** Argus-delene i WIP-siden er den **gamle** listen (Twin hulls, 3D LiDAR, Dual GNSS
  antennas, Electric thrusters). Dagens innhold er Seapath 130, fire propeller, Pixhawk og 5G (se 7.3). Dette må
  rettes hvis konseptet videreføres. Resten av teksten (tidslinje, grupper, sponsorer, kontakt) stemmer med Framer.

---

## 12. Spørsmål å avklare før bygging

1. **Retning:** videreføre den mørke 3D-«sensor»-siden i repoet, eller bygge videre på det lyse, rolige uttrykket fra
   Framer (lavendel og lilla, store fotokort), eventuelt en blanding?
2. **Én side eller flere:** Framer-siden har 13 undersider. WIP-siden er én lang side. Skal alle undersidene med?
3. **Språk:** bare engelsk som i dag, eller også norsk?
4. **Hosting:** fortsatt Framer (koden kan limes inn som kodekomponenter) eller en statisk side (Vite) på eget domene?
5. **Nytt innhold:** Team 2026, Proteus, Njord 2026-resultatet og ev. nye bilder.
6. **Bilder:** skal den nye siden laste bildene rett fra `framerusercontent.com`, eller skal de lastes ned i repoet?
   For å laste dem ned herfra må `framerusercontent.com` legges til i nettverkstilgangen for skymiljøet.
