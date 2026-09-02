import xml.etree.ElementTree as ET
import re
import os

tree = ET.parse('public/sitemap.xml')
root = tree.getroot()

namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
locs = [elem.text for elem in root.findall('.//ns:loc', namespace)]

print(f"Total URLs in public/sitemap.xml: {len(locs)}")
for i, l in enumerate(locs, 1):
    print(f"{i:2d}. {l}")

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

app_routes = re.findall(r'path="([^"]+)"', app_code)
print(f"\nTotal routes in src/App.jsx: {len(app_routes)}")
for r in app_routes:
    print('  route:', r)

# Check route alignment
base = 'https://buildmydream-6q5x.onrender.com'
sitemap_paths = [l.replace(base, '') or '/' for l in locs]

missing_in_routes = [p for p in sitemap_paths if p not in app_routes and p != '/']
print(f"\nSitemap paths not in App.jsx routes: {missing_in_routes}")

routes_not_in_sitemap = [r for r in app_routes if r != '*' and not r.startswith('/projects/:') and ((base + r) if r != '/' else (base + '/')) not in locs]
print(f"App routes not in sitemap: {routes_not_in_sitemap}")
