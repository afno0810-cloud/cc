# Marinor NTNU – website

The new website for Marinor NTNU (marinorntnu.no): a dark 3D harbour with Argus in it, and all the
content from the old Framer site. 13 pages + 404, in English, as a static site built with Vite.

## Run it

```bash
npm install
npm run dev       # local server with live reload
npm run build     # static site in dist/ – upload that folder to any web host
npm run preview   # look at the built site locally
```

`dist/` works on any static host (Netlify, Cloudflare Pages, Vercel, GitHub Pages, a plain web server).
`public/_redirects` sends the old Framer addresses to the new ones on Netlify and Cloudflare Pages; the
same old addresses also have small redirect pages in `public/`, so they work on any host:

| Old address | New address |
|---|---|
| `/competitions/njord-challange` | `/competitions/njord-challenge/` |
| `/competitions/roboat` | `/competitions/roboboat/` |
| `/want-to-spons-us` | `/sponsor/` |

## Where things are

| What | Where |
|---|---|
| Pages | `index.html`, `about/`, `projects/` (+ `argus/`, `proteus/`), `team/` (+ `team-2025/`, `team-2026/`), `competitions/` (+ `njord-challenge/`, `roboboat/`), `sponsor/`, `join/`, `404.html` |
| Shared head, menu, footer, icons, contact info | `scripts/site-html.js` (`SITE` at the top has the e-mail addresses, address, org.nr. and social links) |
| Styles | `src/styles/main.css` (colours, fonts, buttons, menu, footer), `sections.css` (building blocks), `pages.css` (page-specific) |
| Page scripts (menu, reveals, lightbox, copy e-mail, sideways gallery) | `src/main.js` |
| 3D scene | `src/scene/index.js` + `src/scene/world/` (sea, waves, Njord course, Norwegian coast) |
| Photos, videos, 3D models, share images | `public/media/` |
| The old site (analysis, texts, original photos) | `docs/framer-analyse.md`, `framer-export/` |

### Small tags used in the pages

The build replaces these, so every page stays short:

- `<site-head title="…" description="…" image="/media/og/….jpg"></site-head>` – title, SEO and share tags
- `<site-nav></site-nav>` and `<site-footer></site-footer>`
- `<m-img src="argus-argus-on-water-dscf6237" alt="…" sizes="…" priority></m-img>` – responsive WebP photo
  (the names are in `public/media/img/manifest.json`)
- `{{icon:arrow}}` – an inline icon (see `ICONS` in `scripts/site-html.js`)

### The 3D stages

A section with `data-stage` drives the camera while you scroll past it:

- `data-stage="hero"` – the first screen, close to the boat (`data-view="home"` or `"argus"`,
  `data-title="…"` for a 3D title behind the boat). Pages with `data-loader` on `<body>` show a loader first.
- `data-stage="argus"` – orbits Argus and switches to scan mode. `data-parts="lidar,gnss,…"` picks the
  labelled parts. With `data-mode="list"` the boat turns to the part in the list nearest the middle of the
  screen (`data-part`).
- `data-stage="course"` – follows the boat through the Njord course; `[data-task]` items light up in turn.
- `data-stage="coast"` – the route along the Norwegian coast; city labels go in `[data-cities]`.

`data-offset` moves the boat sideways on screen (−0.25 = to the left). Without WebGL, or with
"reduce motion" turned on, the pages work fine without the scene.

## Adding photos

Put the original in `framer-export/images/<folder>/` and run `python3 scripts/build-media.py`
(needs Pillow). It writes 800/1600/2400 px WebP versions to `public/media/img/` and updates the manifest.

## The 3D

- **Argus** is a 3D model made with Higgsfield from our own photos (`public/media/models/argus.glb`,
  `argus-lite.glb` for phones). The same model is also sampled into a LiDAR-style point cloud.
- **First screen** (home and Argus): the points fly in and a scan line turns them into the boat. On the
  Argus page the title stands in 3D behind the boat. The boat and the title are mirrored in the water.
- **Scan mode** (`data-stage="argus"`): the boat turns into a see-through point cloud and the part you
  read about lights up.
- **Post-processing** (`src/scene/post.js`): bloom, tone mapping, a violet grade, vignette and grain.
- **Desktop extras** (`src/main.js`): crosshair cursor that locks onto buttons, magnetic buttons, cards
  that tilt, numbers that count up and mono labels that decode. Page changes use view transitions.
- With "reduce motion" on, or without WebGL, the pages work without all of this.

Add `?debug` to a URL to get `window.__dbg` in the console (scene, camera, `setIntro(seconds)`).

All text, photos, team and sponsor info come from the old site; nothing is made up.
