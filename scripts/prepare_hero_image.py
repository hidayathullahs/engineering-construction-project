from PIL import Image
import os

src_path = r'C:\Users\bajar\.gemini\antigravity-ide\brain\62130eeb-746e-42d0-ae45-ed01f2ad82c9\.user_uploaded\media_1788266784277.jpg'
out_path = r'c:\Users\bajar\hidayath projects\engineering construction website project\public\images\hero-reference-full.jpg'

im = Image.open(src_path)
w, h = im.size

# The navbar is at the top from y=0 to y=55.
# The hero content starts at y=56.
hero = im.crop((0, 55, w, h))
os.makedirs(os.path.dirname(out_path), exist_ok=True)
hero.save(out_path, quality=98)
print(f"Successfully saved {out_path} with dimensions {hero.size}")
