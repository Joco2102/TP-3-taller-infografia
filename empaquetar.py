import base64, pathlib
d = pathlib.Path(__file__).parent
html = (d/'index.html').read_text('utf-8')
css  = (d/'estilos.css').read_text('utf-8')
js   = (d/'script.js').read_text('utf-8')

def uri(p):
    b = (d/p).read_bytes()
    mime = 'image/jpeg' if p.endswith(('.jpg','.jpeg')) else 'image/png'
    return 'data:%s;base64,%s' % (mime, base64.b64encode(b).decode())

# de la más larga a la más corta, así una ruta no pisa a otra que la contenga
rutas = sorted(('img/'+x.name for x in (d/'img').iterdir()), key=len, reverse=True)
for r in rutas:
    u = uri(r)
    html = html.replace(r, u)
    js   = js.replace(r, u)
    css  = css.replace(r, u)

html = html.replace('<link rel="stylesheet" href="estilos.css">', '<style>\n'+css+'\n</style>')
html = html.replace('<script src="script.js"></script>', '<script>\n'+js+'\n</script>')
(d/'algoritmo-todo-en-uno.html').write_text(html, 'utf-8')

sobran = [r for r in rutas if r in html]
print('todo-en-uno', len(html)//1024, 'KB | rutas sin incrustar:', sobran or 'ninguna')
