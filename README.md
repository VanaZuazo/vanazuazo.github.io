# vanacode · portafolio

Mi portafolio con forma de perfil de hi5, en negro y rosado, con chat de MSN incluido.

## Páginas

| Archivo | Qué es |
|---|---|
| `index.html` | Perfil (home) |
| `proyectos.html` | Álbum con todos los proyectos |
| `proyecto.html` | Página de cada proyecto. Se abre como `proyecto.html?p=portafolio` |
| `servicios.html` | Servicios, cómo trabajo y testimonios |

Notas lleva a mi blog en Neocities.

## Carpetas

```
css/estilos.css   todos los estilos
js/datos.js       enlaces, proyectos, servicios, comentarios, canciones y respuestas del chat
js/comun.js       chat MSN, zumbido, guiños, brillitos, enlaces y comentarios
js/perfil.js      estado, reproductor, Top 8
js/proyectos.js   álbum de proyectos
js/proyecto.js    página de un proyecto
js/servicios.js   tarjetas de servicios
img/              avatar, foto emo, avatar pensativa, gato y fondo
```

## Cómo actualizar

Casi todo se cambia en `js/datos.js`, sin tocar el HTML:

- **Mis redes y el blog**: cambia las direcciones de `ENLACES`. Todos los botones de redes de todas las páginas se actualizan solos.
- **Agregar un proyecto**: copia uno de la lista `proyectos` y cambia sus datos. El `id` va sin espacios ni tildes. Los 8 primeros salen en el Top 8 del perfil.
- **Escribir un caso**: llena los `bloques` del proyecto. Un bloque vacío aparece como "pendiente".
- **Testimonios**: reemplaza los de `comentarios`, que ahora son de ejemplo.

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio.
2. En el repositorio: Settings → Pages → Branch `main`, carpeta `/ (root)`.
3. Si el repositorio se llama `tu-usuario.github.io`, el sitio queda en esa dirección.
