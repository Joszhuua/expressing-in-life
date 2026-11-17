// ============================================================
//  DATOS DE CONTACTO — edita solo esta parte.
//  whatsapp: código de país + número, sin "+", espacios ni guiones
//            (Guatemala: 502 + 8 dígitos, p. ej. "50212345678").
//  Los enlaces de redes que queden vacíos no se muestran.
// ============================================================
const CONFIG = {
  whatsapp: '',
  instagram: 'https://www.instagram.com/expressing.in.life',
  facebook: '',
  tiktok: 'https://www.tiktok.com/@expressing.in.life.com',
  zona: '', // p. ej. 'Entregas en la Ciudad de Guatemala y alrededores'
}

// Botones de WhatsApp: cada uno trae su mensaje en data-wa.
// Sin número configurado se quedan apuntando a #contacto (no se rompen).
if (CONFIG.whatsapp) {
  for (const a of document.querySelectorAll('[data-wa]')) {
    a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(a.dataset.wa)}`
    a.target = '_blank'
    a.rel = 'noopener'
  }
}

for (const a of document.querySelectorAll('[data-social]')) {
  const url = CONFIG[a.dataset.social]
  if (url) {
    a.href = url
    a.target = '_blank'
    a.rel = 'noopener'
    a.hidden = false
  }
}

const zona = document.querySelector('[data-zona]')
if (zona && CONFIG.zona) {
  zona.textContent = CONFIG.zona
  zona.hidden = false
}

document.querySelector('[data-year]').textContent = new Date().getFullYear()
