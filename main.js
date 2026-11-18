// ============================================================
//  DATOS DE CONTACTO — edita solo esta parte.
//  mensajes: a dónde llevan los botones "Cotizar" (chat directo).
//            ig.me/m/<usuario> abre el chat de Instagram.
//  Los enlaces de redes que queden vacíos no se muestran.
// ============================================================
const CONFIG = {
  mensajes: 'https://ig.me/m/expressing.in.life',
  instagram: 'https://www.instagram.com/expressing.in.life',
  facebook: 'https://www.facebook.com/profile.php?id=100088294076976',
  tiktok: 'https://www.tiktok.com/@expressing.in.life.com',
  zona: '', // p. ej. 'Entregas en la Ciudad de Guatemala y alrededores'
}

const abrir = (a, url) => {
  a.href = url
  a.target = '_blank'
  a.rel = 'noopener'
}

// Botones "Cotizar": sin enlace configurado se quedan apuntando a #contacto.
if (CONFIG.mensajes) for (const a of document.querySelectorAll('[data-dm]')) abrir(a, CONFIG.mensajes)

for (const a of document.querySelectorAll('[data-social]')) {
  const url = CONFIG[a.dataset.social]
  if (url) {
    abrir(a, url)
    a.hidden = false
  }
}

const zona = document.querySelector('[data-zona]')
if (zona && CONFIG.zona) {
  zona.textContent = CONFIG.zona
  zona.hidden = false
}

document.querySelector('[data-year]').textContent = new Date().getFullYear()
