"""Make web-sized versions of the photos in framer-export/images.

Every photo gets a WebP at 800, 1600 and 2400 px wide (never upscaled) in
public/media/img/<folder>-<name>-<w>.webp. Logos keep PNG. Run again after
adding photos:  python3 scripts/build-media.py
"""
import json, os
from PIL import Image, ImageOps

SRC = "framer-export/images"
OUT = "public/media/img"
WIDTHS = [800, 1600, 2400]
os.makedirs(OUT, exist_ok=True)
manifest = {}
for folder in sorted(os.listdir(SRC)):
    d = os.path.join(SRC, folder)
    if not os.path.isdir(d):
        continue
    for f in sorted(os.listdir(d)):
        name, _ = os.path.splitext(f)
        slug = f"{folder}-{name}".lower()
        im = ImageOps.exif_transpose(Image.open(os.path.join(d, f)))
        w, h = im.size
        entry = {"w": w, "h": h, "files": {}}
        if folder in ("logo", "sponsors"):
            out = f"{slug}.png"
            im.save(os.path.join(OUT, out), optimize=True)
            entry["files"]["png"] = out
            if im.mode in ("RGBA", "LA", "P"):
                im = im.convert("RGBA")
            im.save(os.path.join(OUT, f"{slug}.webp"), quality=90)
            entry["files"]["webp"] = f"{slug}.webp"
        else:
            rgb = im.convert("RGB")
            for tw in WIDTHS:
                if tw > w and tw != WIDTHS[0]:
                    continue
                r = rgb if tw >= w else rgb.resize((tw, round(h * tw / w)), Image.LANCZOS)
                out = f"{slug}-{min(tw, w)}.webp"
                r.save(os.path.join(OUT, out), quality=80, method=6)
                entry["files"][str(min(tw, w))] = out
        manifest[slug] = entry
json.dump(manifest, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print(len(manifest), "images")
