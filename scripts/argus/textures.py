"""Surface textures for the Argus model (scripts/argus/build.mjs).

hull_*:  white gelcoat, hand-laid: soft unevenness, faint fibre streaks
         along the hull, scuffs and small scratches, a few dents (normal map).
case_*:  black hard-case plastic with a fine pebble grain.
alu_*:   aluminium profile, brushed along its length.
orm:     glTF metallic-roughness packing: G = roughness, B = metalness.
Writes JPEG files next to this file, and a half-size copy of each (name-lite.jpg) for
the light model.  Usage: python3 scripts/argus/textures.py [size]
"""
import os
import sys

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
N = int(sys.argv[1]) if len(sys.argv) > 1 else 2048
rng = np.random.default_rng(7)


def smooth_noise(n, cells, seed):
    """tileable value noise: random grid, bicubic-ish upscale with wrap"""
    r = np.random.default_rng(seed)
    g = r.random((cells, cells))
    # tile by wrapping, then resize with PIL (bicubic) and crop the middle
    big = np.tile(g, (3, 3))
    im = Image.fromarray((big * 255).astype(np.uint8)).resize((n * 3, n * 3), Image.BICUBIC)
    a = np.asarray(im).astype(np.float32)[n : 2 * n, n : 2 * n] / 255.0
    return a


def fbm(n, base, octaves, seed):
    s = np.zeros((n, n), np.float32)
    amp, tot = 1.0, 0.0
    for o in range(octaves):
        s += amp * smooth_noise(n, base * 2**o, seed + o * 13)
        tot += amp
        amp *= 0.5
    return s / tot


def streaks(n, along_axis, count, seed, length=(0.05, 0.3), width=1):
    """thin straight marks (scratches) running mostly along one axis"""
    r = np.random.default_rng(seed)
    m = np.zeros((n, n), np.float32)
    for _ in range(count):
        x, y = r.random() * n, r.random() * n
        L = (length[0] + r.random() * (length[1] - length[0])) * n
        ang = (r.random() - 0.5) * 0.35 + (0 if along_axis == "x" else np.pi / 2)
        steps = int(L)
        xs = (x + np.cos(ang) * np.arange(steps)).astype(int) % n
        ys = (y + np.sin(ang) * np.arange(steps)).astype(int) % n
        k = r.random() * 0.8 + 0.2
        for w in range(width):
            m[(ys + w) % n, xs] = np.maximum(m[(ys + w) % n, xs], k)
    return m


def height_to_normal(h, strength):
    dx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * strength
    dy = (np.roll(h, -1, 0) - np.roll(h, 1, 0)) * strength
    nz = np.ones_like(h)
    l = np.sqrt(dx * dx + dy * dy + nz * nz)
    nx, ny, nz = -dx / l, -dy / l, nz / l
    rgb = np.stack([nx, ny, nz], -1) * 0.5 + 0.5
    return (np.clip(rgb, 0, 1) * 255).astype(np.uint8)


def save(name, arr):
    im = Image.fromarray(arr)
    im.save(os.path.join(HERE, name), quality=88, optimize=True)
    im.resize((im.width // 2, im.height // 2), Image.LANCZOS).save(os.path.join(HERE, name.replace(".jpg", "-lite.jpg")), quality=86, optimize=True)


def blur(a, r):
    im = Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))
    from PIL import ImageFilter

    return np.asarray(im.filter(ImageFilter.GaussianBlur(r))).astype(np.float32) / 255.0


# ---------- hull: u along the hull (x), v around the cross-section ----------
# white paint over cloth: soft lumps, creases where the cloth folded, faint weave, scuffs
mott = fbm(N, 4, 5, 1)
weave = 0.5 + 0.25 * np.sin(np.arange(N)[None, :] * 1.7) + 0.25 * np.sin(np.arange(N)[:, None] * 1.9)
# creases: long thin ridges, mostly along the hull, a few at an angle
creases = np.zeros((N, N), np.float32)
for i, (cnt, ang, ln) in enumerate([(70, "x", (0.04, 0.22)), (25, "y", (0.03, 0.1))]):
    creases = np.maximum(creases, streaks(N, ang, cnt, 20 + i, ln, width=2))
creases = blur(creases, 2.2)
scuff_big = np.clip((fbm(N, 6, 4, 3) - 0.6) * 4.0, 0, 1)
scr = streaks(N, "x", 180, 4, (0.01, 0.06)) * (rng.random((N, N)) > 0.25)
scr = blur(scr, 0.6)
dirt = np.clip((fbm(N, 3, 4, 9) - 0.55) * 2.5, 0, 1)

base = np.array([0.93, 0.925, 0.905], np.float32)
alb = base[None, None, :] * (0.96 + 0.05 * mott[..., None]) * (0.99 + 0.012 * weave[..., None])
alb *= 1 - 0.06 * scuff_big[..., None] - 0.05 * dirt[..., None] * np.array([1.0, 1.0, 1.25])[None, None, :]
alb *= 1 - 0.1 * scr[..., None]
alb *= 1 - 0.04 * creases[..., None]
# grey streaks where rain ran down the sides, and dirt in the creases
runs = blur(streaks(N, "y", 90, 31, (0.05, 0.18), width=1), 1.4) * (fbm(N, 5, 3, 32) > 0.45)
alb *= 1 - 0.07 * runs[..., None] * np.array([1.0, 0.98, 0.95])[None, None, :]
alb *= 1 - 0.05 * blur(creases, 3.0)[..., None]
save("hull_albedo.jpg", (np.clip(alb, 0, 1) * 255).astype(np.uint8))
hh = mott * 0.9 + creases * 1.6 - scr * 0.4 + weave * 0.03
save("hull_normal.jpg", height_to_normal(blur(hh, 1.0), 2.6))
rough = 0.55 + 0.15 * scuff_big + 0.15 * scr + 0.08 * mott
orm = np.stack([np.ones_like(rough), rough, np.zeros_like(rough)], -1)
save("hull_orm.jpg", (np.clip(orm, 0, 1) * 255).astype(np.uint8))

# ---------- case: pebble grain, tiles ----------
M = N // 2
peb = fbm(M, 64, 2, 11)
peb = blur(peb, 0.8)
save("case_normal.jpg", height_to_normal(peb, 3.5))
calb = 0.07 + 0.018 * fbm(M, 8, 3, 12)
dust = np.clip((fbm(M, 5, 4, 13) - 0.5) * 2.2, 0, 1) * 0.06
scuffs = blur(np.maximum(streaks(M, "x", 45, 14, (0.02, 0.09)), streaks(M, "y", 35, 16, (0.02, 0.07))), 0.8) * 0.12
prints = np.clip((fbm(M, 24, 2, 15) - 0.62) * 3.0, 0, 1) * 0.03
c = calb + dust + scuffs + prints
save("case_albedo.jpg", (np.clip(np.stack([c, c, c * 1.04], -1), 0, 1) * 255).astype(np.uint8))
cr = 0.5 + dust * 4.0 + scuffs * 1.5 - prints * 3.0
corm = np.stack([np.ones_like(cr), np.clip(cr, 0.25, 0.95), np.zeros_like(cr)], -1)
save("case_orm.jpg", (np.clip(corm, 0, 1) * 255).astype(np.uint8))

# ---------- aluminium: brushed along u ----------
br = np.repeat(rng.random((1, M)), M, axis=0)  # lines along image y = along the profile
br = blur(br.T if False else br, 0.6)
br = 0.5 * br + 0.5 * blur(rng.random((M, M)).astype(np.float32), 0.4)
arough = 0.26 + 0.14 * br
aorm = np.stack([np.ones_like(arough), arough, np.ones_like(arough)], -1)
save("alu_orm.jpg", (np.clip(aorm, 0, 1) * 255).astype(np.uint8))
print("textures", N)
