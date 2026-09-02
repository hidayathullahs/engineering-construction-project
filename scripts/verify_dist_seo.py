import os
import xml.etree.ElementTree as ET
import re
import sys
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

print("=== DIST SEO AUDIT ===")

# 1. Verify dist/sitemap.xml
sitemap_path = 'dist/sitemap.xml'
if not os.path.exists(sitemap_path):
    print("❌ dist/sitemap.xml does NOT exist!")
    sys.exit(1)

tree = ET.parse(sitemap_path)
root = tree.getroot()
namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
locs = [elem.text for elem in root.findall('.//ns:loc', namespace)]

print(f"✅ dist/sitemap.xml is valid XML with {len(locs)} URLs:")
errors = 0
for i, l in enumerate(locs, 1):
    if not l.startswith('https://buildmydream-6q5x.onrender.com'):
        print(f"  ❌ Invalid host in sitemap: {l}")
        errors += 1
    if 'buildmydream.in' in l or 'localhost' in l or '127.0.0.1' in l:
        print(f"  ❌ Forbidden domain in sitemap: {l}")
        errors += 1
    
    # Check if corresponding physical static file exists in dist/
    path_part = l.replace('https://buildmydream-6q5x.onrender.com', '')
    if path_part == '' or path_part == '/':
        target_file = 'dist/index.html'
    else:
        target_file = f"dist{path_part}/index.html"
    
    if os.path.exists(target_file):
        print(f"  [{i:02d}] ✓ {l} (Physical file: {target_file})")
    else:
        print(f"  [{i:02d}] ⚠️ {l} (Physical file missing: {target_file})")
        errors += 1

# 2. Verify dist/robots.txt
robots_path = 'dist/robots.txt'
with open(robots_path, 'r', encoding='utf-8') as f:
    robots_text = f.read()

print(f"\n✅ dist/robots.txt contents:\n{robots_text.strip()}")
if 'buildmydream.in' in robots_text:
    print("❌ robots.txt contains buildmydream.in!")
    errors += 1
if 'Sitemap: https://buildmydream-6q5x.onrender.com/sitemap.xml' not in robots_text:
    print("❌ robots.txt missing correct sitemap directive!")
    errors += 1

# 3. Check for any remaining buildmydream.in in dist
print("\nScanning dist/ for any occurrence of buildmydream.in...")
dist_matches = []
for root, dirs, files in os.walk('dist'):
    for f in files:
        fp = os.path.join(root, f)
        if f.endswith(('.html', '.xml', '.txt', '.js', '.json')):
            with open(fp, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                if 'buildmydream.in' in content:
                    dist_matches.append(fp)

if dist_matches:
    print(f"❌ Found buildmydream.in in {len(dist_matches)} files in dist/:")
    for dm in dist_matches:
        print(f"   {dm}")
    errors += 1
else:
    print("✅ ZERO occurrences of buildmydream.in in dist/!")

if errors == 0:
    print("\n🎉 ALL LOCAL SEO & SITEMAP AUDITS PASSED WITH 0 ERRORS!")
else:
    print(f"\n❌ FAILED with {errors} errors!")
    sys.exit(1)
