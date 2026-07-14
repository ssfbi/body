/* ============================================================
   FAQ — Acordeón de preguntas frecuentes
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta');

        pregunta.addEventListener('click', () => {
            const yaAbierto = item.classList.contains('abierto');

            // Cierra los demás para mantener la lista ordenada y limpia
            items.forEach(otro => {
                otro.classList.remove('abierto');
                otro.querySelector('.faq-pregunta').setAttribute('aria-expanded', 'false');
            });

            if (!yaAbierto) {
                item.classList.add('abierto');
                pregunta.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
