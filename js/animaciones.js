/* =========================================================
   StockVital · Animaciones
   1. Las tarjetas y secciones aparecen al hacer scroll.
   2. Las cifras del inicio cuentan desde 0.
   Usa IntersectionObserver (el navegador "observa" los
   elementos y avisa cuando entran en la pantalla).
   Si el usuario pidió reducir el movimiento o el navegador
   no lo soporta, todo se muestra sin animación.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducirMovimiento || !('IntersectionObserver' in window)) return;

  /* ---------- 1. Aparecer al hacer scroll ---------- */
  const grupos = [
    '.tarjetas-mision .tarjeta',
    '.beneficios li',
    '.pantallas .telefono',
    '.pasos li',
    '.reglas',
    '.simulador',
    '.faq details',
    '.testimonios blockquote',
    '.formulario'
  ];

  const observadorRevelar = new IntersectionObserver(function (entradas, observador) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target); // se anima una sola vez
      }
    });
  }, { threshold: 0.15 });

  grupos.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el, indice) {
      el.classList.add('revelar');
      // Los elementos de un mismo grupo aparecen uno tras otro.
      el.style.transitionDelay = Math.min(indice, 5) * 90 + 'ms';
      observadorRevelar.observe(el);
    });
  });

  /* ---------- 2. Contador de cifras ---------- */
  function animarContador(el) {
    const meta = Number(el.dataset.contador);
    const prefijo = el.dataset.prefijo || '';
    const sufijo = el.dataset.sufijo || '';
    const duracion = 1400;
    const inicio = performance.now();

    function paso(ahora) {
      const avance = Math.min((ahora - inicio) / duracion, 1);
      const suavizado = 1 - Math.pow(1 - avance, 3); // empieza rápido y frena al final
      const valor = Math.round(meta * suavizado);
      el.textContent = prefijo + valor.toLocaleString('en-US') + sufijo;
      if (avance < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  const observadorContador = new IntersectionObserver(function (entradas, observador) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        animarContador(entrada.target);
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-contador]').forEach(function (el) {
    // Empieza en 0; sin JavaScript se queda el valor final escrito en el HTML.
    el.textContent = (el.dataset.prefijo || '') + '0' + (el.dataset.sufijo || '');
    observadorContador.observe(el);
  });
});
