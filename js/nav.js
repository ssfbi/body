/* ============================================================
   NAV — Menú de navegación móvil
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('.nav-toggle');
    const enlaces = document.querySelector('.nav-links');

    if (!boton || !enlaces) return;

    boton.addEventListener('click', () => {
        const abierto = enlaces.classList.toggle('abierto');
        boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        boton.textContent = abierto ? '✕' : '☰';
    });

    // Cierra el menú al elegir una opción
    enlaces.querySelectorAll('a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            enlaces.classList.remove('abierto');
            boton.textContent = '☰';
            boton.setAttribute('aria-expanded', 'false');
        });
    });
});
