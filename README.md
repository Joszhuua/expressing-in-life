# Expressing in Life — landing page

Página estática (HTML + CSS + un poco de JS, sin build) para publicar en **Cloudflare Pages** (plan gratuito, permite uso comercial).

## Editar

| Qué | Dónde |
|---|---|
| WhatsApp, Instagram, Facebook, TikTok, zona de entrega | `main.js` → objeto `CONFIG` (arriba del archivo) |
| Textos, nombres y descripciones de canastas | `index.html` |
| Colores y estilos | `styles.css` (variables en `:root`) |
| Fotos | `img/` |

### Agregar una canasta

1. Copia la foto a `img/` (ideal: `.webp`, máximo 1200 px por lado, < 200 KB).
2. En `index.html` duplica un bloque `<li class="card">…</li>` del catálogo y cambia
   `src`, `alt` (descripción de la foto), `width`/`height` (tamaño real de la foto),
   el título, el texto y el mensaje de `data-wa`.

No hay límite práctico de fotos (Cloudflare Pages admite 20 000 archivos); se cargan
solo cuando la persona se acerca a ellas (`loading="lazy"`).

## Publicar en Cloudflare Pages

### Opción A — conectado a GitHub (recomendada: cada `git push` publica solo)

1. Sube este repositorio a GitHub.
2. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → elige el repo.
3. Configuración de build: *Framework preset* **None**, *Build command* vacío,
   *Build output directory* `/`.
4. **Save and Deploy**. Queda en `https://<nombre-del-proyecto>.pages.dev`.

### Opción B — subir desde la terminal

```bash
npx wrangler login
npx wrangler pages deploy . --project-name expressing-in-life
```

### Dominio propio (opcional)

En el proyecto de Pages → **Custom domains** → agrega el dominio y sigue los pasos de DNS.

## Vista previa local

```bash
python3 -m http.server 4321
```

y abre http://localhost:4321
