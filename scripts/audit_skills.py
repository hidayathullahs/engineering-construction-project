import os
import glob
import re
import sys

# Ensure UTF-8 output on Windows terminal
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

def parse_frontmatter(content):
    name = "unknown"
    desc = ""
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            fm = parts[1]
            m_name = re.search(r"^name:\s*(.+)$", fm, re.MULTILINE)
            if m_name:
                name = m_name.group(1).strip()
            m_desc = re.search(r"^description:\s*(?:[>|]\s*)?(.*)", fm, re.MULTILINE)
            if m_desc:
                desc = m_desc.group(1).strip()
    return name, desc

def inspect_file(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        name, desc = parse_frontmatter(content)
        if name == "unknown":
            name = os.path.basename(os.path.dirname(path))
        return {
            "valid": True,
            "name": name,
            "desc": desc,
            "size": len(content),
            "path": path
        }
    except Exception as e:
        return {
            "valid": False,
            "name": os.path.basename(os.path.dirname(path)),
            "error": str(e),
            "path": path
        }

categories = {
    "Built-in Antigravity Skills": glob.glob(r"C:\Users\bajar\.gemini\antigravity-ide\builtin\skills\*\SKILL.md"),
    "Global Google Cloud & Data Skills": glob.glob(r"C:\Users\bajar\.gemini\config\skills\*\SKILL.md"),
    "Science & Life Sciences Plugin Skills": glob.glob(r"C:\Users\bajar\.gemini\config\plugins\science\skills\*\SKILL.md"),
    "Android Development CLI Skill": glob.glob(r"C:\Users\bajar\.gemini\config\plugins\android-cli-plugin\skills\SKILL.md"),
}

all_skills = []

print("=" * 70)
print("             ANTIGRAVITY SKILLS INSTALLATION AUDIT")
print("=" * 70)

for cat, files in categories.items():
    print(f"\n📁 {cat.upper()} ({len(files)} installed)")
    print("-" * 70)
    for f in sorted(files):
        info = inspect_file(f)
        all_skills.append((cat, info))
        status = "✅ OK" if info["valid"] else "❌ FAILED"
        print(f" {status} | {info['name']:<35} | {info['size']:>6} bytes")

total = len(all_skills)
valid = sum(1 for _, s in all_skills if s["valid"])
failed = total - valid

print("\n" + "=" * 70)
print(f" TOTAL INSTALLED SKILLS DETECTED: {total}")
print(f" SUCCESSFULLY VERIFIED & ACTIVE:  {valid}")
print(f" FAILED / BROKEN SKILLS:          {failed}")
print("=" * 70)
