"""Surface textures for the Argus model (scripts/argus/build.mjs).

hull_*:  white gelcoat, hand-laid: soft unevenness, faint fibre streaks
         along the hull, scuffs and small scratches, a few dents (normal map).
case_*:  black hard-case plastic with a fine pebble grain.
alu_*:   aluminium profile, brushed along its length.
orm:     glTF metallic-roughness packing: G = roughness, B = metalness.
Writes JPEG files next to this file.  Usage: python3 scripts/argus/textures.py [size]
"""
import os
import sys

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
N = int(sys.argv[1]) if len(sys.argv) > 1 else 1024
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
    Image.fromarray(arr).save(os.path.join(HERE, name), quality=88, optimize=True)


def blur(a, r):
    im = Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))
    from PIL import ImageFilter

    return np.asarray(im.filter(ImageFilter.GaussianBlur(r))).astype(np.float32) / 255.0


# ---------- hull: u along the hull (x), v around the cross-section (y) ----------
mott = fbm(N, 4, 5, 1)  # soft unevenness of a hand-laid hull
fibre = fbm(N, 3, 3, 2)
fibre = 0.5 + 0.5 * np.sin(np.arange(N)[:, None] * 0.9 + fibre * 30.0)  # faint lines along the hull
scuff_big = np.clip((fbm(N, 6, 4, 3) - 0.62) * 4.0, 0, 1)  # dull scuffed patches
scr = streaks(N, "x", 260, 4, (0.01, 0.08)) * (rng.random((N, N)) > 0.2)
scr = blur(scr, 0.6)
dents = np.clip((fbm(N, 10, 3, 5) - 0.7) * 3.0, 0, 1)

base = np.array([0.905, 0.895, 0.87], np.float32)  # sRGB-ish gelcoat
alb = base[None, None, :] * (0.955 + 0.06 * mott[..., None]) * (0.995 + 0.01 * fibre[..., None])
alb *= 1 - 0.07 * scuff_big[..., None]
alb = alb * (1 - 0.18 * scr[..., None]) + np.array([0.55, 0.53, 0.5]) * 0.0
save("hull_albedo.jpg", (np.clip(alb, 0, 1) * 255).astype(np.uint8))
hh = mott * 0.6 + dents * 0.8 - scr * 0.5 + fibre * 0.05
save("hull_normal.jpg", height_to_normal(blur(hh, 1.2), 2.2))
rough = 0.28 + 0.18 * scuff_big + 0.25 * scr + 0.06 * mott
orm = np.stack([np.ones_like(rough), rough, np.zeros_like(rough)], -1)
save("hull_orm.jpg", (np.clip(orm, 0, 1) * 255).astype(np.uint8))

# ---------- case: pebble grain, tiles ----------
M = N // 2
peb = fbm(M, 64, 2, 11)
peb = blur(peb, 0.8)
save("case_normal.jpg", height_to_normal(peb, 3.5))
calb = 0.075 + 0.02 * fbm(M, 8, 3, 12)
save("case_albedo.jpg", (np.clip(np.stack([calb, calb, calb * 1.04], -1), 0, 1) * 255).astype(np.uint8))

# ---------- aluminium: brushed along u ----------
br = np.repeat(rng.random((1, M)), M, axis=0)  # lines along image y = along the profile
br = blur(br.T if False else br, 0.6)
br = 0.5 * br + 0.5 * blur(rng.random((M, M)).astype(np.float32), 0.4)
arough = 0.26 + 0.14 * br
aorm = np.stack([np.ones_like(arough), arough, np.ones_like(arough)], -1)
save("alu_orm.jpg", (np.clip(aorm, 0, 1) * 255).astype(np.uint8))
print("textures", N)
