/* =========================================================
   StockVital · Simulador de descuentos
   Usa las mismas clases del diagrama de clases del TB2:
   ReglaDescuento (rango de días y porcentaje) y Lote, que
   calcula su descuento según los días restantes.
   ========================================================= */

class ReglaDescuento {
  constructor(nivel, diasMin, diasMax, porcentaje) {
    this.nivel = nivel;            // clave de texto: riesgo-alto, riesgo-medio, riesgo-bajo
    this.diasRestantesMin = diasMin;
    this.diasRestantesMax = diasMax;
    this.porcentajeDescuento = porcentaje;
  }

  aplica(dias) {
    return dias >= this.diasRestantesMin && dias <= this.diasRestantesMax;
  }
}

class Lote {
  constructor(precio, diasRestantes) {
    this.precio = precio;
    this.diasRestantes = diasRestantes;
  }

  // Busca la regla que corresponde a los días restantes del lote.
  buscarRegla(reglas) {
    return reglas.find((regla) => regla.aplica(this.diasRestantes)) || null;
  }

  aplicarDescuento(regla) {
    const porcentaje = regla ? regla.porcentajeDescuento : 0;
    return this.precio * (1 - porcentaje / 100);
  }
}

// Reglas predeterminadas, tomadas del wireframe "Reglas de Descuento".
const reglasPredeterminadas = [
  new ReglaDescuento('riesgo-alto', 1, 3, 40),
  new ReglaDescuento('riesgo-medio', 4, 7, 25),
  new ReglaDescuento('riesgo-bajo', 8, 14, 15)
];

const textosSimulador = {
  es: {
    'riesgo-alto': 'Riesgo alto', 'riesgo-medio': 'Riesgo medio', 'riesgo-bajo': 'Riesgo bajo',
    'sin-riesgo': 'Sin descuento todavía',
    detalle: (p, ahorro) => `Con ${p}% de descuento ahorras ${ahorro}.`,
    sinDescuento: 'Faltan más de 14 días: el producto se vende a precio normal.',
    invalido: 'Ingresa un precio válido mayor a 0.'
  },
  en: {
    'riesgo-alto': 'High risk', 'riesgo-medio': 'Medium risk', 'riesgo-bajo': 'Low risk',
    'sin-riesgo': 'No discount yet',
    detalle: (p, ahorro) => `With a ${p}% discount you save ${ahorro}.`,
    sinDescuento: 'More than 14 days left: the product sells at its regular price.',
    invalido: 'Enter a valid price greater than 0.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const precio = document.getElementById('precio');
  const dias = document.getElementById('dias');
  if (!precio || !dias) return; // la página no tiene simulador

  const diasValor = document.getElementById('dias-valor');
  const resultado = document.getElementById('resultado');
  const nivel = document.getElementById('resultado-nivel');
  const final = document.getElementById('resultado-final');
  const original = document.getElementById('resultado-original');
  const detalle = document.getElementById('resultado-detalle');
  const soles = (n) => 'S/ ' + n.toFixed(2);
  const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let precioMostrado = null;
  let animacion = null;

  // Animación: el precio final "cuenta" desde el valor anterior hasta el nuevo.
  function mostrarPrecio(nuevo) {
    if (animacion) cancelAnimationFrame(animacion);
    if (reducirMovimiento || precioMostrado === null || Math.abs(nuevo - precioMostrado) < 0.005) {
      precioMostrado = nuevo;
      final.textContent = soles(nuevo);
      return;
    }
    const desde = precioMostrado;
    const inicio = performance.now();
    const duracion = 350;
    final.classList.add('cambio');
    function paso(ahora) {
      const avance = Math.min((ahora - inicio) / duracion, 1);
      precioMostrado = desde + (nuevo - desde) * avance;
      final.textContent = soles(precioMostrado);
      if (avance < 1) {
        animacion = requestAnimationFrame(paso);
      } else {
        precioMostrado = nuevo;
        final.classList.remove('cambio');
      }
    }
    animacion = requestAnimationFrame(paso);
  }

  function actualizar() {
    const idioma = typeof Idioma !== 'undefined' ? Idioma.obtener() : 'es';
    const t = textosSimulador[idioma];
    const valorPrecio = parseFloat(precio.value);
    const valorDias = parseInt(dias.value, 10);
    diasValor.textContent = valorDias >= 15 ? '15+' : valorDias;

    if (!(valorPrecio > 0)) {
      resultado.className = 'resultado';
      nivel.textContent = '';
      if (animacion) cancelAnimationFrame(animacion);
      precioMostrado = null;
      final.textContent = '—';
      original.textContent = '';
      detalle.textContent = t.invalido;
      return;
    }

    const lote = new Lote(valorPrecio, valorDias);
    const regla = lote.buscarRegla(reglasPredeterminadas);
    const precioFinal = lote.aplicarDescuento(regla);

    resultado.className = 'resultado ' + (regla ? regla.nivel : 'sin-riesgo');
    nivel.textContent = regla ? t[regla.nivel] : t['sin-riesgo'];
    mostrarPrecio(precioFinal);
    original.textContent = regla ? soles(valorPrecio) : '';
    detalle.textContent = regla
      ? t.detalle(regla.porcentajeDescuento, soles(valorPrecio - precioFinal))
      : t.sinDescuento;
  }

  precio.addEventListener('input', actualizar);
  dias.addEventListener('input', actualizar);
  document.getElementById('form-simulador').addEventListener('submit', (e) => e.preventDefault());

  // Observer: cuando cambia el idioma, el simulador vuelve a escribir sus textos.
  if (typeof Idioma !== 'undefined') Idioma.suscribir(actualizar);
  actualizar();
});
