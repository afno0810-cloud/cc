"""The sponsor names on Argus' starboard hull, as on the real boat (DNV, KONGSBERG, telenor).
Plain lettering, not the companies' logo artwork. Writes sponsors.png next to this file."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 2048, 256
img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
book = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
navy = (22, 40, 92, 255)
blue = (0, 120, 200, 255)

# DNV: three lines above the name
x0 = 60
for i, c in enumerate([(0, 150, 200, 255), (0, 110, 170, 255), (90, 170, 80, 255)]):
    d.rectangle([x0, 40 + i * 16, x0 + 300, 50 + i * 16], fill=c)
d.text((x0 + 70, 100), "DNV", font=ImageFont.truetype(book, 92), fill=navy)

# KONGSBERG with a small red crest
x1 = 560
d.rounded_rectangle([x1, 60, x1 + 70, 160], radius=10, fill=(150, 20, 30, 255))
d.text((x1 + 95, 70), "KONGSBERG", font=ImageFont.truetype(bold, 100), fill=navy)

# telenor
x2 = 1520
d.ellipse([x2, 80, x2 + 60, 140], fill=blue)
d.text((x2 + 80, 66), "telenor", font=ImageFont.truetype(book, 100), fill=blue)

img.save(os.path.join(os.path.dirname(__file__), "sponsors.png"), optimize=True)
print(img.size)
