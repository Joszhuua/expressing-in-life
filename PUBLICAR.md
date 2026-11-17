# Cómo publicar la página (paso a paso, desde cualquier PC)

La página se publica gratis en **Cloudflare Pages**. El código vive en GitHub:
`https://github.com/Joszhuua/expressing-in-life` (privado).

Hay dos caminos. **Haz el Camino A una sola vez** y después ya no necesitas la terminal:
cada cambio que subas a GitHub se publica solo.

---

## Camino A — Conectar GitHub con Cloudflare (recomendado, una sola vez)

No necesitas instalar nada; todo es en el navegador.

1. Entra a https://dash.cloudflare.com/sign-up y crea tu cuenta (gratis, sin tarjeta).
2. En el menú: **Workers & Pages** → **Create** → pestaña **Pages** → **Connect to Git**.
3. **Connect GitHub** → autoriza a Cloudflare. Cuando pregunte a qué repositorios,
   elige **Only select repositories** → `expressing-in-life`.
4. Selecciona `expressing-in-life` → **Begin setup** y llena así:
   | Campo | Valor |
   |---|---|
   | Project name | `expressing-in-life` |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | *(vacío)* |
   | Build output directory | `/` |
5. **Save and Deploy**. En menos de un minuto queda en
   **https://expressing-in-life.pages.dev** — ese es el enlace para compartir.

### Después: actualizar la página

Cualquier cambio en la rama `main` de GitHub se publica solo (≈1 minuto).

- **Sin instalar nada**: en github.com abre el archivo (p. ej. `main.js`) → ícono del lápiz
  → edita → **Commit changes**. Listo.
- **Fotos nuevas**: en github.com entra a la carpeta `img/` → **Add file** → **Upload files**.
  Luego agrega su tarjeta en `index.html` (ver `README.md` → "Agregar una canasta").
- **Desde una PC con Git**: `git pull`, edita, `git add -A`, `git commit -m "..."`, `git push`.

---

## Camino B — Publicar desde la terminal (sin conectar GitHub)

Úsalo solo si no quieres conectar GitHub. Necesita Node.js.

### 1. Instalar lo necesario (una vez por PC)

- **Git**: https://git-scm.com/downloads
- **Node.js LTS**: https://nodejs.org (en Windows, el instalador `.msi`; deja todo por defecto).

Cierra y vuelve a abrir la terminal después de instalar.
Para comprobar: `git --version` y `node --version` deben mostrar un número.

### 2. Descargar el proyecto

```bash
git clone https://github.com/Joszhuua/expressing-in-life.git
cd expressing-in-life
```

(Como el repositorio es privado, Git te pedirá iniciar sesión en GitHub la primera vez.)

### 3. Conectar con Cloudflare y publicar

```bash
npx wrangler login
npx wrangler pages deploy . --project-name expressing-in-life
```

- `wrangler login` abre el navegador: inicia sesión en Cloudflare y dale **Allow**.
- La primera vez pregunta la rama de producción: responde `main`.
- Para actualizar después: `git pull` y repite solo el comando `deploy`.

> Si ya hiciste el Camino A, **no uses el B**: los dos publican al mismo proyecto y el
> último que publique gana.

---

## Datos que faltan / cosas a revisar

- **WhatsApp**: en `main.js`, línea `whatsapp: ''` → pon el número con código de país,
  sin `+` ni espacios. Ejemplo Guatemala: `whatsapp: '50212345678'`.
  Mientras esté vacío, los botones de WhatsApp llevan a la sección de contacto.
- **Zona de entrega** (opcional): en `main.js`, `zona: 'Entregas en ...'`.
- **Ver la página en tu PC antes de publicar**: desde la carpeta del proyecto,
  `npx serve .` y abre la dirección que muestre.

## Dominio propio (opcional, ≈ US$10–15 al año)

Cloudflare → **Workers & Pages** → `expressing-in-life` → **Custom domains** →
**Set up a custom domain**. Si compras el dominio en Cloudflare
(**Domain Registration**), el DNS se configura solo.

## Problemas comunes

| Mensaje | Solución |
|---|---|
| `npx: command not found` / `node no se reconoce` | Instala Node.js LTS y abre una terminal nueva. |
| `Authentication failed` al clonar | Inicia sesión en GitHub cuando lo pida, o usa GitHub Desktop (https://desktop.github.com) para clonar. |
| La página no cambió | Espera 1–2 minutos y recarga con Ctrl+Shift+R (Cmd+Shift+R en Mac). En Cloudflare → el proyecto → **Deployments** ves si falló. |
