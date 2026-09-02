import glob
import re
import os

pages = glob.glob('src/pages/**/*.jsx', recursive=True)
print(f"Inspecting {len(pages)} pages for SEOHead...")

for p in sorted(pages):
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match <SEOHead ... /> across multiple lines
    m = re.search(r'<SEOHead\s+([^>]+)/>', content, re.DOTALL)
    if m:
        props_str = m.group(1)
        # Find canonicalUrl
        c_match = re.search(r'canonicalUrl=["\']([^"\']+)["\']', props_str)
        canon = c_match.group(1) if c_match else 'DEFAULT (window.location.pathname)'
        # Find title
        t_match = re.search(r'title=["\']([^"\']+)["\']', props_str)
        title = t_match.group(1) if t_match else 'NO TITLE'
        print(f"{p:<55} | {canon:<50} | {title[:40]}")
    else:
        print(f"{p:<55} | NO SEOHead")
