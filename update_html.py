with open('V4/index.html', 'r') as f:
    content = f.read()

content = content.replace('<script src="components/slides/S29_Atelier.js?v=10"></script>\n', '')
content = content.replace('<script src="components/slides/S32_Autonomy.js?v=10"></script>', '<script src="components/slides/S29_Atelier.js?v=10"></script>')

with open('V4/index.html', 'w') as f:
    f.write(content)
