import * as THREE from "three"
import { waveHeight, waveSlope } from "./world/waves.js"

/* ================================================================
   Online: everyone who plays is in the same harbour
   (request: "gjøre spillet online med proximity chat og en option der du kan slå den på og av
   og din egen mikrofon på og av så når du møter på andre båter kan du snakke med de. alle som
   er online skal være i samme verden eller på samme server")
   · The browsers find each other through public Nostr relays (Trystero) and then talk to each
     other directly (WebRTC): where each boat is, ten times a second, and the voices. There is
     no server of our own, and nothing is stored.
   · The other players' boats: a copy of Argus with a name tag (and a dot on the radar).
   · Proximity chat: a voice is clear close by, fades away further off and is gone beyond about
     a hundred metres; it comes from the side the boat is on.
   · Settings (the game menu): online on/off, hear the others on/off, my microphone on/off.
     The microphone is never on by itself: only when you turn it on (C at the helm).
   Everything that comes from another player is checked: numbers in range, a short plain name.
   ================================================================ */

const APP = "marinor-ntnu-harbour-game"
// everyone is in one harbour; ?room=name gives a harbour of its own (letters, digits and dashes)
const ROOM = (() => {
    try {
        const r = new URLSearchParams(location.search).get("room")
        if (r && /^[a-z0-9-]{3,24}$/i.test(r)) return "harbour-" + r.toLowerCase()
    } catch (e) {
        /* the address could not be read */
    }
    return "harbour-1"
})()
const SEND_EVERY = 0.1 // seconds between position updates
const HEAR_FULL = 14 // scene units: a voice is at full strength this close
const HEAR_MAX = 100 // and silent beyond this
const WORLD = 4000 // no boat is further out than this
const STALE = 6 // seconds without news: the boat is hidden
const TAG_LAYER = 3 // the name tags (the water's reflection camera only sees layer 0)
const DRAW_MAX = 700 // boats further off than this are not drawn (they are still on the radar)
// well-known public Nostr relays that every player uses to find the others (any one shared is enough)
const RELAYS = (() => {
    // for tests only: ?debug&relay=ws://127.0.0.1:port (a relay on this machine)
    try {
        const q = new URLSearchParams(location.search)
        const r = q.get("relay")
        if (q.has("debug") && r && /^wss?:\/\/(127\.0\.0\.1|localhost)(:\d+)?\/?$/.test(r)) return [r]
    } catch (e) {
        /* the address could not be read */
    }
    return ["wss://relay.damus.io", "wss://nos.lol", "wss://relay.primal.net", "wss://nostr.mom", "wss://relay.snort.social", "wss://offchain.pub"]
})()
const COLORS = ["#c39cf0", "#7cc4ff", "#9fe3b5", "#ff8a6c", "#ffd36b", "#ff7fbf", "#7ff0ff", "#b8f27c"]

const store = {
    get(k, d) {
        try {
            const v = localStorage.getItem("marinor-" + k)
            return v == null ? d : v
        } catch (e) {
            return d
        }
    },
    set(k, v) {
        try {
            localStorage.setItem("marinor-" + k, v)
        } catch (e) {
            /* no storage: only for this visit */
        }
    },
}
const num = (v, lim) => typeof v === "number" && isFinite(v) && Math.abs(v) <= lim
const cleanName = (n) =>
    String(n == null ? "" : n)
        .replace(/[^\p{L}\p{N} ._'-]/gu, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 18) || "Sailor"
const clamp01 = (v) => Math.max(0, Math.min(1, v))

// a name tag over a boat: a dark pill with the player's colour, and sound waves while they talk
function tagTexture(name, color, talking) {
    const c = document.createElement("canvas")
    c.width = 512
    c.height = 128
    const g = c.getContext("2d")
    g.font = "600 50px system-ui, -apple-system, 'Segoe UI', sans-serif"
    const tw = Math.min(360, g.measureText(name).width)
    const w = tw + (talking ? 150 : 104)
    const x0 = (512 - w) / 2
    g.fillStyle = "rgba(12, 9, 20, 0.78)"
    g.beginPath()
    if (g.roundRect) g.roundRect(x0, 22, w, 84, 42)
    else g.rect(x0, 22, w, 84)
    g.fill()
    g.lineWidth = 4
    g.strokeStyle = talking ? color : "rgba(255,255,255,0.22)"
    g.stroke()
    g.fillStyle = color
    g.beginPath()
    g.arc(x0 + 44, 64, 13, 0, Math.PI * 2)
    g.fill()
    g.fillStyle = "#ffffff"
    g.textBaseline = "middle"
    g.fillText(name, x0 + 72, 66, 360)
    if (talking) {
        g.strokeStyle = color
        g.lineCap = "round"
        g.lineWidth = 7
        const sx = x0 + 72 + tw + 26
        for (const [i, h] of [16, 30, 20].entries()) {
            g.beginPath()
            g.moveTo(sx + i * 16, 64 - h / 2)
            g.lineTo(sx + i * 16, 64 + h / 2)
            g.stroke()
        }
    }
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return t
}

const MIC_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/><path class="mic-off" d="M4 4l16 16"/></svg>'

export function createOnline({ scene, drive, camera, getModel }) {
    camera.layers.enable(TAG_LAYER)
    let enabled = store.get("online", "on") !== "off"
    let hear = store.get("voice", "on") !== "off"
    let micOn = false
    let micStream = null
    let micLevel = 0
    let micAn = null
    let micBuf = null

    let colorI = parseInt(store.get("color", ""), 10)
    if (!(colorI >= 0 && colorI < COLORS.length)) {
        colorI = Math.floor(Math.random() * COLORS.length)
        store.set("color", String(colorI))
    }
    let myName = store.get("name", "")
    if (!myName) {
        myName = "Sailor " + (100 + Math.floor(Math.random() * 900))
        store.set("name", myName)
    }
    myName = cleanName(myName)

    let room = null
    let joining = false
    let retryAt = 0 // after a failed try: wait a little before the next
    let act = null // { st, hi }
    let sendT = 0
    let status = "off" // off | joining | on
    const peers = new Map()
    const listeners = []
    const changed = () => {
        renderHud()
        for (const f of listeners) f()
    }

    // ---- sound: one context for the voices, started on a click or a key (browsers ask for that) ----
    let actx = null
    let master = null
    function ensureAudio() {
        if (actx) return actx
        const AC = window.AudioContext || window.webkitAudioContext
        if (!AC) return null
        actx = new AC()
        master = actx.createGain()
        master.gain.value = hear ? 1 : 0
        master.connect(actx.destination)
        return actx
    }
    const wake = () => {
        if (actx && actx.state === "suspended") actx.resume().catch(() => {})
        for (const p of peers.values()) if (p.el && p.el.paused) p.el.play().catch(() => {})
    }
    addEventListener("pointerdown", wake, true)
    addEventListener("keydown", wake, true)

    // ---- the HUD: how many are online, and the microphone ----
    const pill = document.createElement("span")
    pill.className = "hud-online"
    pill.hidden = true
    pill.innerHTML = `<i aria-hidden="true"></i><span class="ho-text">Online</span>`
    const tag = drive.hud.querySelector(".hud-tag")
    if (tag) tag.after(pill)
    else drive.hud.appendChild(pill)
    const micBtn = document.createElement("button")
    micBtn.type = "button"
    micBtn.className = "hud-btn hud-mic"
    micBtn.setAttribute("aria-pressed", "false")
    micBtn.innerHTML = `${MIC_SVG}<span class="hm-mic-text">Mic off</span> <kbd>C</kbd>`
    micBtn.addEventListener("click", () => setMic(!micOn))
    const menuBtn = drive.actions.querySelector(".hud-menu")
    if (menuBtn) drive.actions.insertBefore(micBtn, menuBtn)
    else drive.actions.appendChild(micBtn)

    function renderHud() {
        const n = peers.size
        pill.hidden = !enabled
        pill.dataset.state = status
        pill.querySelector(".ho-text").textContent = status === "on" ? (n ? `${n + 1} online` : "Online · just you") : status === "joining" ? "Going online …" : "Offline"
        micBtn.hidden = !enabled
        micBtn.classList.toggle("is-on", micOn)
        micBtn.setAttribute("aria-pressed", micOn ? "true" : "false")
        micBtn.setAttribute("aria-label", micOn ? "Microphone on: turn it off" : "Microphone off: turn it on")
        micBtn.querySelector(".hm-mic-text").textContent = micOn ? "Mic on" : "Mic off"
    }

    // ---- other boats ----
    function peer(id) {
        let p = peers.get(id)
        if (!p) {
            p = { id, name: "Sailor", color: COLORS[0], x: 0, z: 0, h: 0, vx: 0, vz: 0, tx: 0, tz: 0, th: 0, lid: 0, at: 0, seen: false, obj: null, model: null, tag: null, talking: false, talkT: 0 }
            peers.set(id, p)
            changed()
        }
        return p
    }
    function makeBoat(p) {
        const g = new THREE.Group()
        g.visible = false
        const mat = new THREE.SpriteMaterial({ map: tagTexture(p.name, p.color, false), transparent: true, depthWrite: false })
        const sp = new THREE.Sprite(mat)
        sp.scale.set(9, 2.25, 1)
        sp.position.y = 6.2
        sp.renderOrder = 5
        // a layer of their own: seen by the camera, not mirrored in the water
        sp.layers.set(TAG_LAYER)
        g.add(sp)
        p.tag = sp
        p.obj = g
        scene.add(g)
        addModel(p)
    }
    // a copy of Argus (the meshes only; it shares the materials with ours)
    function addModel(p) {
        if (p.model || !p.obj) return
        const src = getModel()
        if (!src || !src.children.length) return
        const m = src.clone(true)
        const drop = []
        m.traverse((o) => {
            if (o.isPoints || o.isSprite || o.isLine) drop.push(o)
        })
        for (const o of drop) o.removeFromParent()
        p.model = m
        p.obj.add(m)
    }
    function retag(p) {
        if (!p.tag) return
        const old = p.tag.material.map
        p.tag.material.map = tagTexture(p.name, p.color, p.talking)
        p.tag.material.needsUpdate = true
        if (old) old.dispose()
    }
    function drop(id) {
        const p = peers.get(id)
        if (!p) return
        if (p.obj) {
            scene.remove(p.obj)
            if (p.tag) {
                p.tag.material.map && p.tag.material.map.dispose()
                p.tag.material.dispose()
            }
        }
        stopVoice(p)
        peers.delete(id)
        changed()
    }

    // ---- voices: each one through its own volume and left/right, louder the closer the boat ----
    function attachVoice(id, stream) {
        const p = peer(id)
        if (!ensureAudio()) return
        stopVoice(p)
        // Chrome only lets a remote voice into Web Audio while an element plays it too (silent here)
        const el = new Audio()
        el.muted = true
        el.srcObject = stream
        el.play().catch(() => {})
        const src = actx.createMediaStreamSource(stream)
        const gain = actx.createGain()
        gain.gain.value = 0
        const pan = actx.createStereoPanner ? actx.createStereoPanner() : null
        const an = actx.createAnalyser()
        an.fftSize = 512
        src.connect(an)
        src.connect(gain)
        if (pan) {
            gain.connect(pan)
            pan.connect(master)
        } else gain.connect(master)
        Object.assign(p, { el, stream, src, gain, pan, an, buf: new Uint8Array(an.fftSize) })
        const tracks = stream.getAudioTracks()
        for (const t of tracks) t.addEventListener("ended", () => p.stream === stream && stopVoice(p))
    }
    function stopVoice(p) {
        if (p.src) {
            try {
                p.src.disconnect()
                p.gain.disconnect()
                if (p.pan) p.pan.disconnect()
            } catch (e) {
                /* already gone */
            }
        }
        if (p.el) p.el.srcObject = null
        p.el = p.src = p.gain = p.pan = p.an = p.stream = null
        if (p.talking) {
            p.talking = false
            retag(p)
        }
    }

    // ---- the room ----
    async function join() {
        if (room || joining || !enabled || !drive.active) return
        joining = true
        status = "joining"
        changed()
        try {
            const { joinRoom } = await import("trystero")
            if (!enabled || !drive.active) return
            room = joinRoom({ appId: APP, relayConfig: { urls: RELAYS, warnOnRelayFailure: false } }, ROOM)
            const st = room.makeAction("st")
            const hi = room.makeAction("hi")
            act = { st, hi }
            hi.onMessage = (d, meta) => {
                if (!d || typeof d !== "object" || !meta) return
                const p = peer(meta.peerId)
                const name = cleanName(d.n)
                const c = Number.isInteger(d.c) && d.c >= 0 && d.c < COLORS.length ? COLORS[d.c] : COLORS[0]
                if (name !== p.name || c !== p.color) {
                    p.name = name
                    p.color = c
                    retag(p)
                    changed()
                }
            }
            st.onMessage = (d, meta) => {
                if (!Array.isArray(d) || d.length < 6 || !meta) return
                const [x, z, h, vx, vz, lid] = d
                if (!num(x, WORLD) || !num(z, WORLD) || !num(h, 1e4) || !num(vx, 80) || !num(vz, 80)) return
                const p = peer(meta.peerId)
                if (!p.obj) makeBoat(p)
                if (!p.seen) {
                    p.x = x
                    p.z = z
                    p.h = h
                    p.seen = true
                }
                p.tx = x
                p.tz = z
                p.th = h
                p.vx = vx
                p.vz = vz
                p.lid = lid ? 1 : 0
                p.at = performance.now() / 1000
            }
            room.onPeerJoin = (id) => {
                peer(id)
                hi.send({ n: myName, c: colorI }, { target: id }).catch(() => {})
                if (micStream) room.addStream(micStream, { target: id })
            }
            room.onPeerLeave = (id) => drop(id)
            room.onPeerStream = (stream, id) => attachVoice(id, stream)
            status = "on"
        } catch (e) {
            console.warn("[online] could not go online:", e)
            room = null
            retryAt = performance.now() / 1000 + 15
        } finally {
            joining = false
            status = room ? "on" : "off"
            changed()
        }
    }
    function leave() {
        if (room) {
            try {
                if (micStream) room.removeStream(micStream)
            } catch (e) {
                /* gone */
            }
            try {
                room.leave()
            } catch (e) {
                /* gone */
            }
        }
        room = null
        act = null
        for (const id of [...peers.keys()]) drop(id)
        status = "off"
        changed()
    }

    // ---- the microphone: only on when you turn it on ----
    async function setMic(on) {
        if (on === micOn) return
        if (on) {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                toast("This browser has no microphone for the game")
                return
            }
            let s
            try {
                s = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false })
            } catch (e) {
                toast("The microphone was not allowed")
                return
            }
            micStream = s
            micOn = true
            if (ensureAudio()) {
                const src = actx.createMediaStreamSource(s)
                micAn = actx.createAnalyser()
                micAn.fftSize = 512
                micBuf = new Uint8Array(micAn.fftSize)
                src.connect(micAn)
            }
            if (room) room.addStream(micStream)
            toast(peers.size ? "Mic on: boats close by can hear you" : "Mic on: boats that come close can hear you")
        } else {
            micOn = false
            if (micStream) {
                if (room)
                    try {
                        room.removeStream(micStream)
                    } catch (e) {
                        /* gone */
                    }
                for (const t of micStream.getTracks()) t.stop()
            }
            micStream = null
            micAn = null
            micLevel = 0
            micBtn.style.removeProperty("--mic")
        }
        changed()
    }

    function setEnabled(on) {
        enabled = !!on
        store.set("online", enabled ? "on" : "off")
        if (!enabled) {
            setMic(false)
            leave()
        } else join()
        changed()
    }
    function setHear(on) {
        hear = !!on
        store.set("voice", hear ? "on" : "off")
        if (master) master.gain.setTargetAtTime(hear ? 1 : 0, actx.currentTime, 0.05)
        changed()
    }

    // a short note at the top of the screen
    const note = document.createElement("div")
    note.className = "hud-online-note"
    note.setAttribute("role", "status")
    drive.hud.appendChild(note)
    let noteT = 0
    function toast(text) {
        note.textContent = text
        note.classList.add("is-on")
        clearTimeout(noteT)
        noteT = setTimeout(() => note.classList.remove("is-on"), 3200)
    }

    // C at the helm: the microphone on or off
    addEventListener("keydown", (e) => {
        if (!drive.active || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return
        if (e.key.toLowerCase() !== "c") return
        const t = e.target
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return
        if (!enabled) return
        setMic(!micOn)
    })

    const rms = (an, buf) => {
        an.getByteTimeDomainData(buf)
        let s = 0
        for (let i = 0; i < buf.length; i++) {
            const v = (buf[i] - 128) / 128
            s += v * v
        }
        return Math.sqrt(s / buf.length)
    }
    const right = new THREE.Vector3()
    const others = []

    return {
        get enabled() {
            return enabled
        },
        get hear() {
            return hear
        },
        get mic() {
            return micOn
        },
        get count() {
            return peers.size
        },
        get status() {
            return status
        },
        get name() {
            return myName
        },
        // for tests: what is known of the others
        get peers() {
            return [...peers.values()].map((p) => ({ name: p.name, x: Math.round(p.x), z: Math.round(p.z), voice: !!p.src, talking: p.talking, shown: !!(p.obj && p.obj.visible), model: !!p.model }))
        },
        setEnabled,
        setHear,
        setMic,
        onChange(f) {
            listeners.push(f)
        },
        update(t, dt, { gain = 1 } = {}) {
            // on the water: in the room; off it: out of it
            if (drive.active && enabled && !room && !joining && performance.now() / 1000 > retryAt) join()
            if (!drive.active && (room || peers.size)) {
                setMic(false)
                leave()
            }
            if (!room) {
                drive.state.others = null
                return
            }
            // where I am, ten times a second
            sendT -= dt
            if (sendT <= 0 && act) {
                sendT = SEND_EVERY
                const r = (v) => Math.round(v * 100) / 100
                const v = drive.vel
                act.st.send([r(drive.pos.x), r(drive.pos.z), r(drive.heading), r(v.x), r(v.z), drive.lidOpen ? 1 : 0]).catch(() => {})
            }
            const now = performance.now() / 1000
            const k = 1 - Math.exp(-dt * 8)
            right.setFromMatrixColumn(camera.matrixWorld, 0)
            others.length = 0
            for (const p of peers.values()) {
                if (!p.obj) continue
                if (!p.model) addModel(p)
                const fresh = now - p.at < STALE
                const far = Math.hypot(p.x - drive.pos.x, p.z - drive.pos.z) > DRAW_MAX
                p.obj.visible = p.seen && fresh && !far
                if (p.seen && fresh && far) {
                    // far off: no gliding, just where it was last heard of (for the radar and the distance)
                    p.x = p.tx
                    p.z = p.tz
                    p.h = p.th
                    others.push({ x: p.x, z: p.z, color: p.color })
                }
                if (!p.obj.visible) {
                    if (p.gain) p.gain.gain.setTargetAtTime(0, actx.currentTime, 0.1)
                    continue
                }
                // glide towards the last place we heard of, carried on by its speed meanwhile
                const ahead = Math.min(now - p.at, 0.5)
                const tx = p.tx + p.vx * ahead
                const tz = p.tz + p.vz * ahead
                p.x += (tx - p.x) * k
                p.z += (tz - p.z) * k
                let dh = p.th - p.h
                dh = Math.atan2(Math.sin(dh), Math.cos(dh))
                p.h += dh * k
                const hgt = waveHeight(p.x, p.z, t, 1)
                const [sx, sz] = waveSlope(p.x, p.z, t, 1)
                p.obj.position.set(p.x, hgt * 0.8, p.z)
                p.obj.rotation.set(0, 0, 0)
                const q = p.obj
                q.rotateY(p.h)
                q.rotateZ((sx * Math.cos(p.h) - sz * Math.sin(p.h)) * 1.1)
                q.rotateX(-(sx * Math.sin(p.h) + sz * Math.cos(p.h)) * 1.1)
                // the name tag stays upright and readable
                p.tag.material.color.setScalar(gain)
                others.push({ x: p.x, z: p.z, color: p.color })
                // the voice: full close by, fading out with distance, from the side the boat is on
                if (p.gain) {
                    const d = Math.hypot(p.x - drive.pos.x, p.z - drive.pos.z)
                    const v = d <= HEAR_FULL ? 1 : d >= HEAR_MAX ? 0 : Math.pow(1 - (d - HEAR_FULL) / (HEAR_MAX - HEAR_FULL), 1.6)
                    p.gain.gain.setTargetAtTime(v, actx.currentTime, 0.12)
                    if (p.pan) {
                        const dx = p.x - camera.position.x
                        const dz = p.z - camera.position.z
                        const l = Math.max(1, Math.hypot(dx, dz))
                        p.pan.pan.setTargetAtTime(Math.max(-1, Math.min(1, ((dx * right.x + dz * right.z) / l) * 0.85)), actx.currentTime, 0.12)
                    }
                    // talking? (the tag shows sound waves)
                    const lvl = p.an ? rms(p.an, p.buf) : 0
                    if (lvl > 0.035) p.talkT = 0.5
                    else p.talkT -= dt
                    const talking = p.talkT > 0 && v > 0.01
                    if (talking !== p.talking) {
                        p.talking = talking
                        retag(p)
                    }
                }
            }
            drive.state.others = others.length ? others : null
            // my own microphone: the button lights up while I talk
            if (micAn && micOn) {
                const lvl = rms(micAn, micBuf)
                micLevel = Math.max(lvl, micLevel - dt * 0.6)
                micBtn.style.setProperty("--mic", clamp01(micLevel * 6).toFixed(2))
            }
        },
    }
}
