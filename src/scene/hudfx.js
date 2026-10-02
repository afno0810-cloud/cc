/* Confetti over the helm's HUD, for a medal or a set of places seen:
   a canvas of paper bits that burst up from the middle and fall. It
   removes itself when they are down. Nothing with reduced motion. */

const COLORS = ["#f2c230", "#c39cf0", "#7c469c", "#9fe3b5", "#7cc4ff", "#ffffff", "#ff8a6c"]

export function confetti(host, { count = 140, colors = COLORS, y = 0.42 } = {}) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const c = document.createElement("canvas")
    c.className = "hud-confetti"
    c.setAttribute("aria-hidden", "true")
    host.appendChild(c)
    const dpr = Math.min(devicePixelRatio || 1, 2)
    const W = (c.width = Math.round(innerWidth * dpr))
    const H = (c.height = Math.round(innerHeight * dpr))
    const g = c.getContext("2d")
    const bits = []
    for (let i = 0; i < count; i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2
        const v = (0.5 + Math.random() * 0.7) * H * 1.15
        bits.push({
            x: W / 2 + (Math.random() - 0.5) * W * 0.12,
            y: H * y,
            vx: Math.cos(a) * v,
            vy: Math.sin(a) * v,
            w: (5 + Math.random() * 6) * dpr,
            h: (8 + Math.random() * 8) * dpr,
            r: Math.random() * 6.28,
            vr: (Math.random() - 0.5) * 14,
            flip: Math.random() * 6.28,
            col: colors[Math.floor(Math.random() * colors.length)],
        })
    }
    let last = performance.now()
    const t0 = last
    const step = (now) => {
        const dt = Math.min(0.05, (now - last) / 1000)
        last = now
        const age = (now - t0) / 1000
        g.clearRect(0, 0, W, H)
        let alive = 0
        for (const b of bits) {
            b.vy += H * 1.25 * dt
            b.vx *= Math.exp(-dt * 1.4)
            b.vy *= Math.exp(-dt * 0.9)
            b.x += b.vx * dt + Math.sin(age * 3 + b.flip) * 30 * dpr * dt
            b.y += b.vy * dt
            b.r += b.vr * dt
            if (b.y > H + 20) continue
            alive++
            g.save()
            g.translate(b.x, b.y)
            g.rotate(b.r)
            g.scale(1, Math.cos(age * 7 + b.flip))
            g.globalAlpha = Math.min(1, Math.max(0, 3.6 - age))
            g.fillStyle = b.col
            g.fillRect(-b.w / 2, -b.h / 2, b.w, b.h)
            g.restore()
        }
        if (alive && age < 4) requestAnimationFrame(step)
        else c.remove()
    }
    requestAnimationFrame(step)
}
