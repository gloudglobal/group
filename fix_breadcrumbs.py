import os

files = ['pagina completa.html', 'cloudglobal.html']
for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the corrupted breadcrumb separator
        content = content.replace('â€º', '/')
        content = content.replace('>â€º<', '>/</')
        content = content.replace('›', '/')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Breadcrumbs fixed")
