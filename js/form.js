/* ============================================================
   FORM — Envío del formulario de contacto sin salir de la página
   Sustituye la redirección de Formspree por una pantalla de éxito
   dentro del propio sitio, con opción de volver al formulario.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');
    if (!formulario) return;

    const contenedor = document.getElementById('contacto-box');
    const pantallaExito = document.getElementById('pantalla-exito');
    const errorBox = document.getElementById('form-error');
    const botonEnviar = formulario.querySelector('button[type="submit"]');
    const textoBoton = botonEnviar.querySelector('.texto-boton');
    const botonVolver = document.getElementById('boton-volver');

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        errorBox.classList.remove('visible');

        // Estado de carga
        botonEnviar.disabled = true;
        botonEnviar.classList.add('cargando');
        textoBoton.textContent = 'Enviando...';

        try {
            const datos = new FormData(formulario);
            const respuesta = await fetch(formulario.action, {
                method: 'POST',
                body: datos,
                headers: { 'Accept': 'application/json' }
            });

            if (respuesta.ok) {
                // Éxito: se oculta el formulario y se muestra la pantalla de confirmación
                formulario.classList.add('oculto');
                pantallaExito.classList.add('visible');
                formulario.reset();
            } else {
                throw new Error('No se pudo enviar el mensaje.');
            }
        } catch (error) {
            errorBox.textContent = 'Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o escríbenos por WhatsApp.';
            errorBox.classList.add('visible');
        } finally {
            botonEnviar.disabled = false;
            botonEnviar.classList.remove('cargando');
            textoBoton.textContent = 'Enviar Mensaje';
        }
    });

    // "Volver" regresa al formulario en blanco, sin salir de la sección de contacto
    if (botonVolver) {
        botonVolver.addEventListener('click', () => {
            pantallaExito.classList.remove('visible');
            formulario.classList.remove('oculto');
            contenedor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});
