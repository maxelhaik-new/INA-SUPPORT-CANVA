import os
import re
import glob

files = sorted(glob.glob('V4/components/slides/S*.js'))

for f in files:
    content = open(f).read()
    
    top_match = re.search(r"UI\.top\('([^']+)'\)", content)
    top = top_match.group(1) if top_match else ''
    
    section_match = re.search(r"UI\.section\('\d+', '([^']+)', '([^']+)'\)", content)
    if section_match:
        title = section_match.group(1).replace('<br>', ' ').replace('<em>', '').replace('</em>', '')
        subtitle = section_match.group(2)
        print(f"### {os.path.basename(f)} (Section)")
        print(f"- Titre : {title}")
        print(f"- Sous-titre : {subtitle}")
        print("---")
        continue

    h_match = re.search(r'<div class="h[12][^>]*>(.*?)</div>', content)
    h = h_match.group(1).replace('<em>', '*').replace('</em>', '*') if h_match else ''
    
    # Very naive parsing to grab texts
    print(f"### {os.path.basename(f)}")
    if top: print(f"- Surtitre : {top}")
    if h: print(f"- Titre : {h}")
    
    if '[PROMPT IA]' in re.sub(r"UI\.prompt\([^)]+\)", "[PROMPT IA]", content):
        print("- [Contient des prompts d'itération/génération]")
    print("---")
