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

## Public website (GitHub Pages)

`docs/` holds the whole site as one page with relative paths (the same build as the preview, `scripts/build-preview.mjs`), so GitHub Pages can serve it from this repo:

1. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
2. Branch: `claude/framer-website-analysis-5o84fj`, folder: `/docs`, then **Save**.
3. After a minute the site is at `https://afno0810-cloud.github.io/cc/`.

After changing the site, run `npm run build:pages`, then commit and push `docs/`.

## Argus model and the game (round 6)

- **Argus** (`public/media/models/argus.glb`, `argus-lite.glb`) is built in code from photos of the real boat: `python3 scripts/argus/textures.py && node scripts/argus/build.mjs`. Deep cloth-wrapped hulls with hatches and cable loops, the aluminium frame on flat bars with grey tape at the crossings, the case lengthwise with the stereo camera on the bow end and the LiDAR on the lid, the Seapath antennas on red posts at the stern, four thrusters with eight-sided guards, cables and wires. The script prints the waterline lift and the part positions used in `src/scene/index.js`. (Higgsfield's one-photo 3D, SAM, could not see the whole boat and got it wrong; a multi-view model needs image generation, which the current Higgsfield plan does not include.)
- **The game** is the drive mode, also on its own page: `/game/` (on GitHub Pages: `/cc/spill/`). W A S D drive, **Q E turn the hull while it keeps its course**, Shift more power, Space LiDAR ping, T time of day.
- **Light**: the sun casts shadows on the boat (a shadow map that follows it), the water darkens against the hulls, the town has windows by day too.
- **Solid world**: the whole hull collides with the shore, the quay, the wharves, the moored boats and the pontoon (`COLLIDERS` in `terrain.js`, `colliders` in `props.js`) and slides along them.
- **Trondheim from the water**: a row of painted wharf houses on piles with windows that light up at night (`createWharfRow` in `terrain.js`), town colours, forest texture on the hills, northern lights on clear nights (`sky.js`).

## Weather, missions and harbour life (round 7)

- **Weather** (`V` or the Weather button at the helm): clear, cloudy, fog and rain. The sky panorama is baked with a grey cloud deck (`setOvercast` in `sky.js`), the air and the water fog close in, the sun and its shadows fade, rain falls past the camera (`world/rain.js`), drops ring the water and the sea gets choppier (`uRain`, `uChop` in `sea.js`), and the boat goes wet and glossy (`uWetAll` in `argus.js`). The site pages are always clear.
- **Missions** (replaced by the four Njord tasks in round 11), after the Njord tasks, in `src/scene/missions.js`: Gates (red to port, green to starboard), Buoy channel, Give way (a boat crosses from starboard: pass behind it), and Docking (find the berth with the tag and stop in it, bow first). A countdown, a clock, +5 s for each buoy touched, +10 s for not giving way or for a collision, a light pillar and a line on the water at the next target, a blue mark on the compass and the radar. Best times are kept in the browser.
- **Harbour life**: two small boats go round the harbour on slow loops; they are solid (`traffic` in `props.js`).
- **Argus**: wet and darker at the waterline, dust and scuffs on the case, rain streaks on the hulls.
- **Edges**: the mirror image in the water is softened (no stair steps), and phones without multisampling get FXAA (`post.js`).

## Inside Argus, the e-stop and the stickers (round 8)

- **Open the lid** at the helm (`L` or the button by the throttle): the lid of the case turns on its hinges (port side) and the camera comes close from starboard. Inside, as on the boat: in the lid the finned heat sinks, the 5G router, the red flight controller and an orange relay board, with the orange gasket round the rim; in the box the battery, the computer boards and the wiring. The names from the site (Pixhawk flight controller, 5G link, Computer, Power) are shown on the parts. The lid is its own node in the GLB (`lid`), and empty `mark-*` nodes mark where the parts are.
- **Controls** (`H` or `?` at the helm): every key and what it does, and how to drive on a phone.
- **The emergency stop**: a yellow box with a red mushroom button on the port hull, just ahead of the bow beam.
- **The sponsor stickers** on the starboard hull are made from the logo files the site already uses, laid out as on the boat: DNV, the Kongsberg crest beside the name, telenor (`scripts/argus/decals.py`). The Kongsberg logo was upscaled with Higgsfield (`scripts/argus/kongsberg-2k.png`) so it stays sharp up close.
- The latches and handle of the case face starboard and the hinges port, as on the boat.
- **Picture**: the glow (bloom) no longer takes in the full brightness of the sun and its glitter, so looking towards the sun stays clear; the sun rays only gather from what is on screen; the chase camera sits lower so the shore and the town show over the water; more boats lie in the harbour.

## Sharper, and the land the right way up (round 9)

- **Resolution**: up to 2× pixel density on sharp screens (the scene still lowers it on the fly if a machine can't keep up), 4096 shadow map, a finer and multisampled mirror image in the water, a 512 × 256 sky panorama, finer small waves, and Argus' textures at 2048 px (the light model for phones takes half-size copies, `*-lite.jpg`).
- **The land was upside down**: its triangles faced downwards, so only the backs of the far ridges were drawn, lit from below, and the sky showed through between the water and the hills (the pale band along every shore). It now faces up (`terrain.js`), so the hills are green and lit by the sun.
- **Background**: twice as fine a mesh with crags on the ridges, forest that catches the light (bumps at several sizes, out to the far hills), grey rock on steep slopes, darker and lighter patches of forest far off, houses in small groups along the shores round the fjord (`createCoastHouses`), clear air (about 35 km) over land and water, no shine on the land at grazing angles, and less colour fringing at the frame edges. The land is built a few rings at a time so the page doesn't freeze.

## Gulls, boats at the right depth, forests (round 10)

- **Gulls**: a Higgsfield text-to-3D model of a gliding gull (`scripts/gull/gull-higgsfield.glb`), made into a herring gull by `node scripts/gull/build.mjs` (legs off, wings drawn out to a gull's span, painted: white body, grey back and wings, black tips, yellow bill) → `public/media/models/world/gull.glb`. In `birds.js` the wings beat in the shader with the hand bending more than the arm; the gulls glide in circles, bank into turns, flap in bouts, and some rest on the water riding the waves.
- **Boats at the right depth**: the yachts were measured with their mast, so they lay with the whole hull under water; their waterline is now just above the keel. The small boats lie a little higher too.
- **Background**: stands of spruce and birch along the shores (some birches in October yellow), so the hillsides and ridges have a wooded edge; distant roofs no longer black; fewer shore houses; the water's mirror no longer draws a bright line where land meets water.

## The Njord tasks, places to visit, medals (round 11)

- **The four Njord tasks** (`M` or the Njord tasks button; the game page opens with the list), as on the Njord page, in `src/scene/missions.js`. Each opens with a briefing (the task in the Njord page's words, how to do it here, the rules), a countdown, and is scored out of 100: −1 a second over par, −5 for each buoy touched, and the task's own deductions. 90 is gold, 75 silver, 50 bronze. The best scores are kept in the browser.
  - **01 Manoeuvring**: a slalom of gates, and halfway a ring on the water where the boat has to turn a full 360° (`Q`/`E`); the ring fills up as it turns.
  - **02 Path finding**: no line to follow; five cardinal marks (north, south, east and west, with their own colours and cone topmarks) and a finish gate. Pass each mark on its safe side (−20 for the wrong side). The briefing shows the four marks, and the bar shows the next one.
  - **03 Collision avoidance**: the Otter, a small catamaran drone, crosses from starboard, timed to meet you: pass behind it. Then it comes head on: pass port to port. −10 closer than 4.5 m, −20 for the wrong side, −30 for a collision. The bar shows the distance.
  - **04 Docking**: four berths with four different AR tags; find the one shown in the briefing and the bar, stop in it bow first and hold. −15 for stopping in the wrong berth.
  - **Full Njord run**: all four in a row, out of 400, with the running total on each result.
- **Places to visit** (`P` or the Places button), in `src/scene/places.js`: eight info buoys round the harbour, with a sign over each. Sail up to one and a card opens with what the site says: Argus (with a button to open the lid), Marinor NTNU, the Njord Challenge and what is out on its course (with a button to the tasks), RoboBoat, the partners, Proteus and how to join, each with a link to its page. The list shows how far away each place is and which way, and can set a course (the compass and the radar point to it). Places not yet visited show as violet marks on the compass tape and the radar. Visited places are kept in the browser.
- Esc closes the open panel or card before it leaves the helm.

## Menus with the arrow keys, more boats, more to see (round 12)

- **Menus**: in every menu at the helm (the Njord tasks, the briefings and results, the places, the controls) the arrow keys move between the choices and scroll the long ones, Enter picks, Esc closes; while a menu is open the arrows don't steer (`addMenu` in `drive.js`). A card that pops up at a post takes the arrows once you press Enter. The menus have a coloured edge, a chosen row is marked, and the keys are shown at the foot.
- **The briefings** show a moving sketch of each course (`taskart.js`): your boat goes round it past the gates, the 360° ring, the cardinal marks (as a map, north up, with the safe sides in green), the two Otters, or into the berth with the tag. The list has an icon for each task; the controls panel is in groups (Drive, Argus, Game, Menus).
- **The compass now turns the right way**: a turn to starboard turns the heading up, and the blue mark sits on the side you have to turn to (east is −x in the world, north +z). The east and west marks in the path finding course were swapped to match, so the course is the same.
- **More posts on the water** (`places.js`, 24 in all, in the list by kind with how many you have seen): the timeline from the about page (2025 to the long run) on tall posts in a row; how we built Argus, five frames on rafts with the photos from the site (they turn to face you); how Argus finds its way, six numbered buoys from the sensors to the propellers. A faint line on the water leads from post to post. The cards show the site's photos (and the partners' logos).
- **More boats** (`world/boats.js`), built from lofted hulls painted in bands: a RIB going fast round the east harbour, three sailing dinghies on a triangle (they heel and swing the boom away from the wind), kayaks with paddlers, a tug with tyres along its sides, a fishing boat and a small ferry going back and forth. They are solid, show on the LiDAR, and leave a wake of foam. Phones get fewer.
- **More happening**: sounds with the sound on (the countdown, the start, a gate, a penalty, a medal, a new place, the Otter's horn), confetti for a medal or a row of posts seen (`hudfx.js`), and the camera shakes on a hard bump.

## Autonomous mode, a saved score, livelier posts, more boats (round 13)

- **Autonomous mode** (`G` or the Autonomous button; `src/scene/autopilot.js`): Argus sails on its own, the way the Argus page describes it. What is around it (quays, boats, buoys, posts, the Otter, and where the moving boats will be in a few seconds) goes into a cost map of the water: blocked close to things, dearer near them, shown as a grid of cells round the boat. A planner finds the cheapest way across it (the bright line on the water) and plans again as things move; boxes mark what the sensors see. A small state machine picks what to do (following the course, giving way to a boat from starboard, keeping to starboard when one comes head on, going round a boat, turning 360°, reading the marks, docking), and the steering follows the line. The panel shows the state, where it is going and the site's pipeline from the sensors to the Pixhawk. It can **tour the harbour** (the places not yet seen, one after another), go to the nearest new place or any place, or **sail the Njord tasks on its own** (Argus' scores are kept apart from yours, and shown in the list). Any drive key takes the helm back; the camera swings slowly round meanwhile.
- **The harbour score** (`score.js`), kept in the browser: points for a new place (100), a whole row of posts (250), every place (1000), a Njord task (its points, plus 50/30/15 for a medal, 100 for a full run), 500 m sailed (20), letting Argus sail, and ten things to find out once (open the lid, ping the LiDAR, full power, a full turn with Q/E, sail at night, in every weather, out to the lighthouse, 3 km in all ...). Every 500 points is a level. The chip by the name shows the score and level, points rise from it as you earn them, and it opens the **logbook** (`B`): the score, the numbers, the things found out and the last points.
- **Something happening at every post** (`postfx.js`): a hologram of Argus over its buoy, the Marinor mark turning, flags round the Njord buoy, a small Otter going round a cardinal mark, a globe with the way from Trondheim to Florida, the sponsors' logos going round, the seven groups as lights, a hull drawn line by line for Proteus; the years of the timeline high in beams of light; a lamp over each build photo; and for how Argus finds its way a LiDAR sweep, satellites with their signals, a cost map on the water, the state machine, a path being planned and four propellers with their signals. Light rises round the posts not yet visited.
- **More boats and small things** (`world/boats.js`): a speedboat, a rowing boat with its oars going, a sailing yacht, a jet ski, boats swinging on their moorings in the west, and a fish farm with its feed barge out in the fjord; navigation lights at dusk (red, green, white), smoke from the funnels, flags on the sterns, a collar of foam round every buoy and post, white sails far out in the fjord, and gulls following the fishing boat.
- **Controls** is now a button with its name (it was a "?"); on phones the button labels are shorter, and the panels sit under however many rows of buttons there are.

## Better boats and people, buoys at the right height (round 14)

- **The green buoys float as high as the red ones**: the green model has its float low down, so it now sits less deep in the water (`BUOY_SINK` in `world/props.js`, used for the harbour buoys and the Njord task buoys); the lamp sits on top of each buoy.
- **The boats, rebuilt** with a new kit of parts (`world/boatkit.js`): the hulls were drawn inside out (only the far side showed), so they are now solid, with a glossy clear coat; decks sit under a bulwark on the tug, the fishing boat and the ferry, and in a sunken cockpit on the speedboat, the dinghies and the yacht. Cabins have raked fronts, rounded edges, glass all round with pillars, and wheelhouse windows that glow warm after dusk; there are rubbing strakes, rails on posts with a pulpit at the bow, fenders on the moored boats, life rings, port lights, life rafts, radars that turn, aerials, a towing hook and winch on the tug, a net drum and fish boxes on the fishing boat, a T-top and an outboard on the RIB, a curved windscreen and seats on the speedboat, a cockpit with benches and a wheel on the yacht, and stays, spreaders and sails with a belly that fills on the lee side.
- **People** have jackets, life jackets with a collar and a reflective band, hair or a cap, beanie, helmet or sou'wester, arms and legs; they sit or stand, hold the wheel, and the kayakers and the rower keep their hands on the paddle and the oars as they move.
- **The Otter** has a rounded deck and house, a camera ahead, and the two GNSS domes on a cross bar.
- What never moves on a boat is merged into one mesh per material, so the extra detail costs few draw calls.
- The Higgsfield account had too few credits to make new models (and its ready-made catalogue has no people and only stylised boats), so the boats and people are built in code.
