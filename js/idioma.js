/* =========================================================
   StockVital · Cambio de idioma (i18n) ES / EN
   - El español está escrito directamente en el HTML.
   - Este archivo solo guarda las traducciones al inglés.
   - Patrón Observer: otros scripts (como el simulador) se
     suscriben para enterarse cuando cambia el idioma.
   ========================================================= */

const Idioma = (function () {
  // Textos en inglés. La clave coincide con el atributo data-i18n del HTML.
  const ingles = {
    'titulo-inicio': 'StockVital | Less waste, more savings',
    'titulo-confirmacion': 'Thank you | StockVital',
    'titulo-terminos': 'Terms and privacy | StockVital',
    'menu-negocio': 'The business',
    'menu-objetivos': 'Objectives',
    'menu-productos': 'Products and services',
    'menu-servicios': 'Services',
    'menu-donde': 'Where we are',
    'alt-panel': 'Store owner dashboard with active batches, sales and waste avoided',
    'neg-etiqueta': 'The business',
    'neg-titulo': 'We turn waste into savings for the neighborhood.',
    'neg-lead': 'StockVital is a digital platform that helps neighborhood stores sell products close to expiry in time.',
    'neg-1-t': 'The problem',
    'neg-1': 'Many stores lose money on products that are close to their expiry date or sell slowly, and have little way to track their batches.',
    'neg-2-t': 'Our solution',
    'neg-2': 'An app that records batches, applies automatic discounts based on the days left until expiry and shows the deals to nearby shoppers.',
    'neg-3-t': 'The benefit',
    'neg-3': 'The store recovers part of its investment, families save on everyday essentials and less food is wasted.',
    'obj-etiqueta': 'Objectives',
    'obj-titulo': 'What we want to achieve with StockVital.',
    'obj-gen-t': 'General objective',
    'obj-gen': 'To develop a digital platform that reduces commercial waste in neighborhood stores through a batch-based inventory control system and discounts based on how close products are to their expiry dates.',
    'obj-esp-t': 'Specific objectives',
    'obj-1': 'Track the batches and expiry dates of every store’s products.',
    'obj-2': 'Apply automatic discount rules based on the days left until expiry.',
    'obj-3': 'Let shoppers see nearby stores and their deals.',
    'obj-4': 'Offer digital reservation and payment with a receipt for pickup.',
    'obj-5': 'Send alerts when a clearance sale is approaching.',
    'obj-6': 'Reduce food waste in the city.',
    'prod-etiqueta': 'Products',
    'prod-titulo': 'One app for each side of the neighborhood.',
    'prod-lead': 'StockVital has two versions: one for those who buy and one for those who sell.',
    'alt-detalle': 'Deal details with the discounted price and a reserve button',
    'alt-pago': 'Payment with Yape or Plin and reservation confirmation',
    'alt-registrar': 'Registering a batch with expiry date and automatic discount',
    'alt-reportes': 'Sales and waste avoided reports',
    'serv-etiqueta': 'Services',
    'serv-titulo': 'Everything StockVital includes.',
    'serv-lead': 'Six services that work together so no product goes to waste.',
    'serv-1-t': 'Batch control',
    'serv-1': 'Product records with stock and expiry date, tracking each batch.',
    'serv-2-t': 'Automatic discounts',
    'serv-2': 'The price drops by itself based on the days left until expiry, with rules each store can adjust.',
    'serv-3-t': 'Nearby deals',
    'serv-3': 'A map of the stores and deals close to the shopper, with filters and routes.',
    'serv-4-t': 'Digital reservation and payment',
    'serv-4': 'Payment by card, Yape or Plin, a receipt and a QR code to pick up the order.',
    'serv-5-t': 'Alerts and notifications',
    'serv-5': 'Notices about deals, reservations about to expire and clearance sales from your favorite stores.',
    'serv-6-t': 'Reports and reviews',
    'serv-6': 'Sales history, waste avoided and ratings from shoppers.',
    'don-etiqueta': 'Where we are',
    'don-titulo': 'From Lima, for neighborhoods across Peru.',
    'don-texto': 'Our team works from Lima and StockVital will start with stores in Metropolitan Lima.',
    'don-ciudad-t': 'City',
    'don-ciudad': 'Lima, Peru',
    'don-ref-t': 'Reference',
    'don-ref': 'UPC, Monterrico Campus (Santiago de Surco)',
    'don-zona-t': 'Starting area',
    'don-zona': 'Stores in Metropolitan Lima',
    'don-nota': 'Approximate location of the academic project team.',
    'don-mapa': 'Map showing the location in Lima',
    'menu-quienes': 'About us',
    'saltar': 'Skip to content',
    'lema': 'Less waste, more savings',
    'nav-principal': 'Main navigation',
    'menu-inicio': 'Home',
    'menu-nosotros': 'About',
    'menu-soluciones': 'Solutions',
    'menu-compradores': 'Shopper app',
    'menu-bodegueros': 'Store owner app',
    'menu-simulador': 'Discount simulator',
    'menu-como': 'How it works',
    'menu-preguntas': 'FAQ',
    'menu-contacto': 'Contact us',

    'hero-etiqueta': 'Neighborhood stores · Products close to expiry',
    'hero-titulo': 'Fresh products at a better price',
    'hero-texto': 'We connect neighborhood stores that have products close to expiry with shoppers looking for real savings nearby.',
    'hero-boton-comprador': 'I am a shopper',
    'hero-boton-bodeguero': 'I am a store owner',
    'alt-app-inicio': 'StockVital home screen with the options I am a shopper and I am a store owner',
    'stat-bodegas': 'Active stores',
    'stat-merma': 'Waste avoided per month',
    'stat-compradores': 'Shoppers',

    'nos-etiqueta': 'About us',
    'nos-titulo': 'We are BodegaTech, Software Engineering students.',
    'nos-p1': 'We are a team from the Universidad Peruana de Ciencias Aplicadas (UPC) developing StockVital as a project for the Software Design and Patterns course.',
    'nos-p2': 'We believe technology can also help the corner store, so we designed a simple app that connects those who sell with those who want to save.',
    'nos-mision-t': 'Our mission',
    'nos-mision': 'To reduce waste in neighborhood stores through batch control and automatic discounts based on expiry dates.',
    'nos-vision-t': 'Our vision',
    'nos-vision': 'A world where no product in good condition goes to waste and every family can save in its own neighborhood.',
    'nos-dato': 'neighborhood stores fail in their first year, according to the Peruvian Association of Store Owners (cited in Juárez et al., 2023).',

    'comp-etiqueta': 'Shopper app',
    'comp-titulo': 'Find deals near you and save.',
    'comp-texto': 'Save on everyday essentials by shopping at the stores in your neighborhood.',
    'comp-b1-t': 'Map of nearby deals',
    'comp-b1': 'See the stores with active deals around you on a map.',
    'comp-b2-t': 'Filters that fit you',
    'comp-b2': 'Search by category, price, discount or distance.',
    'comp-b3-t': 'Reserve and pay in the app',
    'comp-b3': 'Pay by card, Yape or Plin and get a pickup code.',
    'comp-b4-t': 'Alerts and total savings',
    'comp-b4': 'Get deal notifications and check how much you have saved.',
    'chip-gps': 'Nearby GPS',
    'chip-40': 'Up to 40% OFF',
    'chip-alertas': 'Alerts',
    'alt-ofertas': 'Deal explorer with category filters and discounted products',
    'alt-mapa': 'Shopper home screen with a map of nearby stores',

    'bod-etiqueta': 'Store owner app',
    'bod-titulo': 'Manage your batches and reduce waste.',
    'bod-texto': 'Register your products with their expiry date and let StockVital apply the discounts for you.',
    'bod-b1-t': 'Batch management',
    'bod-b1': 'Register perishable products, update stock or remove batches.',
    'bod-b2-t': 'Automatic discounts',
    'bod-b2': 'The system calculates the discount based on the days left until expiry. You set the ranges.',
    'bod-b3-t': 'QR code validation',
    'bod-b3': 'Confirm each in-store sale with the shopper’s pickup code.',
    'bod-b4-t': 'Sales and waste reports',
    'bod-b4': 'See how much you sold at a discount and how much waste you avoided.',
    'chip-lotes': 'Batch management',
    'chip-auto': 'Auto-discounts',
    'chip-reportes': 'Reports',
    'alt-lotes': 'Batch management with stock, discounted price and expiry date',
    'alt-reglas': 'Discount rules for high, medium and low risk',

    'como-etiqueta': 'How it works',
    'como-titulo': 'From waste to savings in four steps.',
    'paso1-t': 'The store owner registers a batch',
    'paso1': 'They enter the product, the stock and the expiry date.',
    'paso2-t': 'StockVital applies the discount',
    'paso2': 'The price drops automatically based on the days left until expiry.',
    'paso3-t': 'The shopper reserves and pays',
    'paso3': 'They find the deal on the map, reserve it and pay by card, Yape or Plin.',
    'paso4-t': 'Pick up at the store',
    'paso4': 'They show their pickup code and the store owner validates the sale.',

    'sim-etiqueta': 'Try it here',
    'sim-titulo': 'How much of a discount would your product get?',
    'sim-texto': 'Enter the price and the days left until expiry. The simulator applies StockVital’s default discount rules.',
    'reglas-caption': 'Default discount rules',
    'reglas-nivel': 'Level',
    'reglas-dias': 'Days to expiry',
    'reglas-desc': 'Discount',
    'riesgo-alto': 'High risk',
    'riesgo-medio': 'Medium risk',
    'riesgo-bajo': 'Low risk',
    'sim-precio': 'Original price (S/)',
    'sim-dias': 'Days to expiry',
    'sim-nota': 'Illustrative simulation. In the app, each store owner can customize their ranges and percentages.',

    'faq-etiqueta': 'Frequently asked questions',
    'faq-titulo': 'We answer your questions.',
    'faq-1-p': 'How is a product\u2019s discount calculated?',
    'faq-1-r': 'Based on the days left until expiry. By default: 1 to 3 days, 40%; 4 to 7 days, 25%; and 8 to 14 days, 15%. Each store owner can customize these ranges and percentages.',
    'faq-2-p': 'Are the products in good condition?',
    'faq-2-r': 'Yes. They are published before their expiry date, and each store owner is responsible for keeping them in good condition until pickup.',
    'faq-3-p': 'How do I pay for my reservation?',
    'faq-3-r': 'In the app, by credit or debit card, Yape or Plin. Once the payment is confirmed, you get a receipt and a pickup code.',
    'faq-4-p': 'What happens if I don\u2019t pick up my product on time?',
    'faq-4-r': 'Since these products are close to expiry, there is no refund if you don\u2019t pick them up within the time limit. This policy is shown before you confirm the payment, and the app reminds you before the store closes.',
    'faq-5-p': 'Can I cancel a reservation?',
    'faq-5-r': 'Yes, while the reservation is still active and before it expires. The product becomes available again for other shoppers.',
    'faq-6-p': 'Why does the app ask for my location?',
    'faq-6-r': 'To show you nearby stores with deals and calculate the route. It is only used with your consent, in accordance with Peruvian Personal Data Protection Law No. 29733.',
    'cta-titulo': 'Less waste for your store. More savings for your family.',
    'cta-texto': 'StockVital is coming soon to the App Store and Google Play. Join the waiting list and be one of the first to use it.',
    'cta-boton': 'I want to join',

    'con-etiqueta': 'Contact us',
    'con-titulo': 'Join StockVital.',
    'con-texto': 'Do you own a store and want to reduce waste? Do you want to save in your neighborhood? Leave us your details and we will let you know when the app is available.',
    'con-nota': 'Academic prototype: the form does not save or send real data.',
    'f-nombre': 'Name',
    'f-nombre-ph': 'Example: Rosa',
    'f-correo': 'Email',
    'f-perfil': 'I am interested as a',
    'f-perfil-0': 'Select an option',
    'f-perfil-1': 'Store owner',
    'f-perfil-2': 'Shopper',
    'f-mensaje': 'Message',
    'f-mensaje-ph': 'Tell us about your store or what you are looking for',
    'f-acepto': 'I accept the',
    'f-terminos': 'terms and privacy policy',
    'f-enviar': 'Send',

    'pie-texto': 'A BodegaTech product. Less waste, more savings.',
    'pie-enlaces': 'Links',
    'pie-terminos': 'Terms and conditions',
    'pie-privacidad': 'Privacy policy',
    'pie-redes': 'Follow us',
    'pie-copy': '© 2026 BodegaTech · Academic project for the Software Design and Patterns course (UPC).',

    'conf-etiqueta': 'Message received (demo)',
    'conf-titulo': 'Thank you for your interest in StockVital!',
    'conf-texto': 'This is what the confirmation would look like after joining the waiting list.',
    'conf-aviso-t': 'This is a simulation',
    'conf-aviso': 'This page is fixed: it looks the same for everyone who fills in the form. No data was stored and no email was sent.',
    'conf-sig-t': 'What would happen in a real service?',
    'conf-sig-1': 'We would add your email to the waiting list.',
    'conf-sig-2': 'We would let you know when StockVital is available in your area.',
    'conf-volver': 'Back to home',
    'conf-sim': 'Try the simulator',

    'ter-etiqueta': 'Legal',
    'ter-titulo': 'Terms and conditions',
    'ter-intro': 'These terms describe how StockVital, a BodegaTech product, should be used. This is an academic prototype written following the ACM/IEEE Software Engineering Code of Ethics.',
    'ter-1-t': '1. Use of the service',
    'ter-1': 'StockVital connects neighborhood stores with shoppers. Store owners are responsible for the information they publish about their products, including prices, stock and expiry dates.',
    'ter-2-t': '2. Reservations and payments',
    'ter-2': 'Payments are processed through a certified payment gateway; StockVital does not store card data. The no-refund policy for uncollected reservations is shown before confirming the payment.',
    'ter-3-t': '3. Product quality',
    'ter-3': 'Products are offered before their expiry date. Each store owner must guarantee that the products are in good condition at the time of pickup.',
    'ter-priv-t': 'Privacy policy',
    'ter-priv': 'In accordance with Peruvian Personal Data Protection Law No. 29733, StockVital will request explicit consent before using your location and contact details, and will only use them to show nearby deals and manage your reservations.',
    'ter-nota': 'Document prepared for academic purposes.'
  };

  const CLAVE = 'stockvital-idioma';
  const suscriptores = [];
  const originales = new Map();
  let actual = 'es';

  // Guarda el texto original en español la primera vez, para poder volver a él.
  function guardarOriginal(el, tipo, valor) {
    if (!originales.has(el)) originales.set(el, {});
    const datos = originales.get(el);
    if (!(tipo in datos)) datos[tipo] = valor;
  }

  // Devuelve el texto en inglés si existe; si no, el original en español.
  function texto(el, tipo, clave, valorActual) {
    guardarOriginal(el, tipo, valorActual);
    if (actual === 'en' && ingles[clave]) return ingles[clave];
    return originales.get(el)[tipo];
  }

  function aplicar() {
    document.documentElement.lang = actual === 'en' ? 'en' : 'es';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.innerHTML = texto(el, 'html', el.dataset.i18n, el.innerHTML);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.placeholder = texto(el, 'ph', el.dataset.i18nPh, el.placeholder);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.alt = texto(el, 'alt', el.dataset.i18nAlt, el.alt);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', texto(el, 'aria', el.dataset.i18nAria, el.getAttribute('aria-label')));
    });
    // El botón muestra el idioma al que se puede cambiar.
    document.querySelectorAll('[data-cambiar-idioma]').forEach(function (boton) {
      boton.textContent = actual === 'en' ? 'ES' : 'EN';
      boton.setAttribute('aria-label', actual === 'en' ? 'Cambiar idioma a español' : 'Change language to English');
    });
    // Observer: avisa a los suscriptores que el idioma cambió.
    suscriptores.forEach(function (fn) { fn(actual); });
  }

  function cambiar(nuevo) {
    actual = nuevo === 'en' ? 'en' : 'es';
    try { localStorage.setItem(CLAVE, actual); } catch (e) { /* sin almacenamiento: no pasa nada */ }
    aplicar();
  }

  function suscribir(fn) { suscriptores.push(fn); }
  function obtener() { return actual; }

  // Al cargar la página: recupera el idioma elegido antes y conecta el botón.
  document.addEventListener('DOMContentLoaded', function () {
    let guardado = 'es';
    try { guardado = localStorage.getItem(CLAVE) || 'es'; } catch (e) { guardado = 'es'; }
    document.querySelectorAll('[data-cambiar-idioma]').forEach(function (boton) {
      boton.addEventListener('click', function () { cambiar(actual === 'es' ? 'en' : 'es'); });
    });
    cambiar(guardado);
  });

  return { cambiar: cambiar, suscribir: suscribir, obtener: obtener };
})();
