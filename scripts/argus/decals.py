"""The sponsor stickers on Argus' starboard hull, laid out as on the real boat:
DNV, then the Kongsberg crest beside the KONGSBERG name, then telenor, in one
row under the hatch. Made from the logo files the site already uses
(public/media/img/sponsors-*.png); the Kongsberg crest and name are taken from
an upscaled copy (kongsberg-2k.png, 4x via Higgsfield) so they stay sharp up close.
Writes sponsors.png next to this file: 3072 x 384 for 0.86 m x 0.1075 m of hull."""
import os

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..", "..")
W, H = 4096, 512
PX = W / 0.86  # pixels per metre
BASE = 470  # the logos stand on one line near the bottom


def white_to_alpha(img):
    """a logo on white: the white becomes see-through, colours keep their own strength"""
    a = np.asarray(img.convert("RGB")).astype(np.float32) / 255
    alpha = np.clip((1 - a.min(-1)) * 3.2, 0, 1)
    # un-mix the white from the edge pixels so they don't leave a light halo
    rgb = np.where(alpha[..., None] > 0.01, (a - (1 - alpha[..., None])) / np.maximum(alpha[..., None], 0.01), a)
    out = np.dstack([np.clip(rgb, 0, 1), alpha])
    return Image.fromarray((out * 255).astype(np.uint8), "RGBA")


def place(canvas, img, x_m, height_m=None, width_m=None):
    """put img with its left edge at x_m (metres from the stern end of the row), standing on BASE"""
    w, h = img.size
    if width_m:
        nw = int(width_m * PX)
        nh = int(h * nw / w)
    else:
        nh = int(height_m * PX)
        nw = int(w * nh / h)
    img = img.resize((nw, nh), Image.LANCZOS)
    canvas.alpha_composite(img, (int(x_m * PX), BASE - nh))
    return nw / PX


canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))

# DNV: the lines over the name
dnv = Image.open(os.path.join(ROOT, "public/media/img/sponsors-dnv.png")).convert("RGBA")
place(canvas, dnv, 0.0, width_m=0.155)

# Kongsberg: crest, and the name beside it (the site file has them stacked)
k = Image.open(os.path.join(HERE, "kongsberg-2k.png")).convert("RGB")
crest = white_to_alpha(k.crop((538, 0, 1618, 1614)))
word = white_to_alpha(k.crop((0, 1880, 2160, 2160)))
x = 0.233
x += place(canvas, crest, x, height_m=0.075) + 0.008
place(canvas, word, x, width_m=0.33)

# telenor
tel = Image.open(os.path.join(ROOT, "public/media/img/sponsors-telenor.png")).convert("RGBA")
place(canvas, tel, 0.666, width_m=0.19)

# keep the colour under the see-through parts as the nearest logo colour (no dark fringes when filtered)
arr = np.asarray(canvas).copy()
arr[arr[..., 3] == 0, :3] = 255
# few colours in a logo: a palette keeps the file small (the GLB carries it)
out = Image.fromarray(arr, "RGBA").resize((3072, 384), Image.LANCZOS)
out.quantize(colors=96, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE).save(os.path.join(HERE, "sponsors.png"), optimize=True)
print("sponsors.png", W, H)
