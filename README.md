# StockVital · Landing page

Landing page de **StockVital** (startup BodegaTech) para el TB3 del curso Diseño y Patrones de Software (UPC).

## Estructura
- `index.html`: landing (inicio, nosotros, compradores, bodegueros, cómo funciona, simulador, testimonios, preguntas frecuentes, contacto).
- `confirmacion.html`: confirmación fija del formulario (simulación).
- `terminos.html`: términos y condiciones y política de privacidad.
- `css/estilos.css`: estilos compartidos y reglas responsive.
- `js/idioma.js`: cambio de idioma español / inglés (i18n, es_419 y en_US).
- `js/simulador.js`: simulador de descuentos con las clases `ReglaDescuento` y `Lote` del diagrama de clases.
- `js/animaciones.js`: aparición al hacer scroll y contador de cifras (respeta `prefers-reduced-motion`).
- `imagenes/`: pantallas de los wireframes del equipo.

## Publicar en GitHub Pages
1. Sube todos los archivos a un repositorio público (por ejemplo `stockvital-landing`).
2. Ve a **Settings → Pages**.
3. En **Branch** elige `main` y `/ (root)`, y presiona **Save**.
4. En unos minutos el sitio estará en `https://<usuario>.github.io/stockvital-landing/`.
