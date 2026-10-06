with open('V4/index.html', 'r') as f:
    content = f.read()

# Remove S02_Numbers.js from its current location
line_to_move = '<script src="components/slides/S02_Numbers.js?v=11"></script>\n'
content = content.replace(line_to_move, '')

# Insert it right after S01_Cover.js
target_line = '<script src="components/slides/S01_Cover.js?v=11"></script>\n'
new_content = content.replace(target_line, target_line + line_to_move)

# Bump version to v=12 just to force reload
new_content = new_content.replace('v=11', 'v=12')

with open('V4/index.html', 'w') as f:
    f.write(new_content)
