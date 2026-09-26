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
- `data-stage="globe"` – the globe with the route from Trondheim to Sarasota (continents from the
  `world-atlas` package). Labels are `[data-globe-pin]` elements; `data-arc-start` sets when the arc is drawn,
  `data-anchor=".box"` fits the globe into a box on the page, `data-through` for sections that are not pinned.
- `data-stage="photo"` on a photo (`data-src` = the image) – the photo forms from points in 3D, then the real
  photo fades in.

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
- **Globe** (Competitions and Home): the continents as points and a gold arc from Trondheim to Sarasota.
- **Team photo from points** (Team 2025 and Join): the photo assembles from coloured points before the real
  photo takes over.
- **Atmosphere**: sea spray drifting past the camera, and a moon path that glints on the water.
- **Post-processing** (`src/scene/post.js`): bloom, tone mapping, a light grade, vignette and grain.
- **Animations** (`src/main.js`): headings whose letters flip up in 3D, photos wiped in with a scan line
  plus parallax, running bands of words that react to scroll speed, a progress line, numbers that count up
  and mono labels that decode.
- **Desktop extras**: crosshair cursor that locks onto buttons, magnetic buttons with a sheen, cards that
  tilt. Page changes use view transitions.
- With "reduce motion" on, or without WebGL, the pages work without all of this.

Add `?debug` to a URL to get `window.__dbg` in the console (scene, camera, `setIntro(seconds)`).

All text, photos, team and sponsor info come from the old site; nothing is made up.

## The realistic harbour (round 4)

- **Sky** (`src/scene/world/sky.js`): computed from the physics of the air (Rayleigh and Mie scattering, ozone). It is baked into a small panorama whenever the sun moves; that panorama is the sky, the lighting (PMREM) and the haze far things fade into (`air.js`). The sun goes down as you scroll: afternoon at the top of a page, night at the bottom. `<body data-sun="9">` sets the sun height at the top.
- **Water** (`sea.js`): a grid of rings around the camera, a real planar reflection of the scene, Fresnel, sun or moon glitter, foam around the hulls, a wake, and ripples where you click.
- **Land** (`terrain.js`): hills and mountains around the fjord, Trondheim with lit windows at night, a quay with cranes and silos.
- **Higgsfield models** (`public/media/models/world/`, `props.js`): Munkholmen, the wharves, Nidaros cathedral, a lighthouse, a pontoon, boats, a coastal ship and buoys (image → 3D with SAM 3D). Argus itself was rebuilt with Tripo from four views made from our own photos.
- **Drive mode** (`src/scene/drive.js`): "Drive Argus" on the home and Argus pages (and a button on every page). WASD/arrows, Shift, Space for a LiDAR ping, T for the time of day, drag to look around, a stick on touch screens.
- **Camera** (`post.js`): auto exposure, bloom, sun rays and a lens flare that only shows when the sun is really visible.

## Light pages (round 5)

The pages are white and lilla like the old site again. The 3D harbour shows through rounded windows: the scene clips its canvas to every `.win-box` and `[data-win]` box on screen (`clipToWindows` in `src/scene/index.js`) and draws nothing when none is visible. Colours are tokens in `src/styles/main.css`; photos, the harbour and the dark panels are "dark islands" that set their own tokens. The normal mouse pointer is used.

## 3D on the Framer site

Two parts of the 3D can be put on the old Framer site as code components:

- `framer/MarinorHarbour.tsx`: the harbour with Argus (view, sun height, move the boat sideways, LiDAR scan, mouse, camera speed).
- `framer/MarinorGlobe.tsx`: the globe with the route Trondheim → Sarasota and the texts of the old site.

They load `framer/marinor-3d.js` and the models from this repo through jsDelivr, pinned to one commit, so a later change here does not change the Framer site. The Framer canvas shows `framer/*-poster.jpg`; the 3D runs in Preview and on the published site.

To change the 3D: edit `src/embed/`, run `npm run build:embed`, commit, and put the new commit hash in the `BASE` line of both components.
