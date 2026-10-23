// ===== Configuración: reemplazá estos datos por los reales =====
const CONFIG = {
  whatsapp: "5491178281990", // formato internacional, sin "+" ni espacios
  whatsappDisplay: "+54 9 11 7828-1990",
  email: "transferprivateba@gmail.com",
};

const I18N = {
  es: {
    "nav.services": "Servicios",
    "nav.fleet": "Flota",
    "nav.book": "Reservar",
    "nav.business": "Empresas",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Ezeiza · Aeroparque · CABA",
    "hero.title": "Tu traslado al aeropuerto, sin sorpresas",
    "hero.lead": "Choferes profesionales, tarifa fija y seguimiento de tu vuelo. Te esperamos con cartel en el hall de arribos.",
    "hero.cta": "Reservar ahora",
    "hero.whatsapp": "Escribinos por WhatsApp",
    "hero.b1": "Disponible 24/7",
    "hero.b2": "Precio cerrado",
    "hero.b3": "Español / English",
    "services.title": "Nuestros servicios",
    "services.s1.t": "Llegadas",
    "services.s1.d": "Te recibimos en Ezeiza o Aeroparque con tu nombre en un cartel. Si tu vuelo se demora, esperamos sin costo extra.",
    "services.s2.t": "Salidas",
    "services.s2.d": "Te buscamos en tu hotel, casa u oficina y te dejamos en el aeropuerto con tiempo de sobra.",
    "services.s3.t": "Traslados en la ciudad",
    "services.s3.d": "Entre aeropuertos, terminal de cruceros, Buquebus o cualquier punto de CABA y GBA.",
    "services.s4.t": "Viajes de larga distancia",
    "services.s4.d": "Viajes a la Costa Atlántica, el interior o a otras provincias, con el mismo confort y una tarifa a medida.",
    "fleet.title": "Nuestra flota",
    "fleet.f1.t": "Sedán",
    "fleet.f1.m": "Hasta 3 pasajeros · 2 valijas grandes",
    "fleet.f1.d": "Ideal para viajeros solos, parejas o viajes de negocios.",
    "fleet.f2.t": "SUV / Minivan",
    "fleet.f2.m": "Hasta 6 pasajeros · 5 valijas grandes",
    "fleet.f2.d": "Más espacio para familias o grupos con mucho equipaje.",
    "fleet.f3.t": "Van",
    "fleet.f3.m": "Hasta 15 pasajeros · 12 valijas grandes",
    "fleet.f3.d": "Para grupos, contingentes y eventos corporativos.",
    "book.title": "Reservá tu traslado",
    "book.lead": "Completá el formulario y te confirmamos el precio por WhatsApp en minutos.",
    "book.step1": "Completá los datos de tu viaje",
    "book.step2": "Te enviamos la cotización y confirmás",
    "book.step3": "Tu chofer te espera el día del viaje",
    "form.type": "Tipo de traslado",
    "form.arrival": "Llegada",
    "form.departure": "Salida",
    "form.city": "Ciudad",
    "form.long": "Larga distancia",
    "form.from": "Desde",
    "form.to": "Hasta",
    "form.date": "Fecha",
    "form.time": "Hora",
    "form.passengers": "Pasajeros",
    "form.luggage": "Valijas",
    "form.vehicle": "Vehículo",
    "form.flight": "N° de vuelo",
    "form.name": "Nombre y apellido",
    "form.phone": "Teléfono / WhatsApp",
    "form.notes": "Comentarios (opcional)",
    "form.notesPh": "Silla para bebé, paradas extra, etc.",
    "form.submit": "Enviar reserva por WhatsApp",
    "form.note": "Sin pago anticipado. Pagás al chofer en efectivo, transferencia o tarjeta.",
    "form.error": "Completá los campos marcados para continuar.",
    "biz.eyebrow": "Para empresas",
    "biz.title": "Traslados corporativos",
    "biz.lead": "Movemos a tu equipo, clientes y visitas con la misma puntualidad, todos los días. Una cuenta, un solo contacto y una factura a fin de mes.",
    "biz.b1.t": "Cuenta corriente",
    "biz.b1.d": "Sin pagos por viaje: facturación mensual con factura A o B.",
    "biz.b2.t": "Ejecutivo asignado",
    "biz.b2.d": "Un único contacto para reservas, cambios y urgencias, 24/7.",
    "biz.b3.t": "Tarifas preferenciales",
    "biz.b3.d": "Precios fijos por convenio según el volumen de viajes.",
    "biz.b4.t": "Reportes de viajes",
    "biz.b4.d": "Detalle mensual por pasajero y centro de costos.",
    "biz.b5.t": "Eventos y grupos",
    "biz.b5.d": "Logística para congresos, viajes de incentivo y comitivas.",
    "biz.form.title": "Pedí una propuesta para tu empresa",
    "biz.form.company": "Empresa",
    "biz.form.cuit": "CUIT (opcional)",
    "biz.form.contact": "Persona de contacto",
    "biz.form.role": "Cargo (opcional)",
    "biz.form.email": "Email",
    "biz.form.volume": "Viajes estimados por mes",
    "biz.form.volumeMax": "Más de 100",
    "biz.form.message": "Contanos qué necesitás (opcional)",
    "biz.form.messagePh": "Traslados de ejecutivos, visitas de clientes, un evento puntual...",
    "biz.form.submit": "Solicitar propuesta por WhatsApp",
    "biz.form.note": "¿Preferís email? Escribinos a",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Qué pasa si mi vuelo se atrasa?",
    "faq.a1": "Seguimos tu vuelo en tiempo real y ajustamos la hora de búsqueda. La espera por demoras del vuelo no tiene costo.",
    "faq.q2": "¿Dónde me encuentra el chofer?",
    "faq.a2": "En el hall de arribos, a la salida de aduana, con un cartel con tu nombre.",
    "faq.q3": "¿Cómo pago?",
    "faq.a3": "Podés pagar al chofer en pesos, dólares, transferencia o tarjeta. No pedimos pago por adelantado.",
    "faq.q4": "¿Con cuánta anticipación tengo que reservar?",
    "faq.a4": "Recomendamos reservar al menos 24 horas antes, pero también tomamos reservas de último momento según disponibilidad.",
    "faq.q5": "¿Puedo cancelar?",
    "faq.a5": "Sí, la cancelación es gratuita hasta 12 horas antes del traslado.",
    "footer.tag": "Traslados privados en Buenos Aires.",
    "nav.skip": "Ir a reservar",
    "quote.title": "Cotizá tu viaje",
    "quote.toPh": "Hotel, dirección o barrio",
    "quote.submit": "Continuar reserva",
    "why.w1.t": "Seguimiento de vuelo",
    "why.w1.d": "Ajustamos la búsqueda a la hora real de aterrizaje.",
    "why.w2.t": "Choferes profesionales",
    "why.w2.d": "Puntuales, discretos y bilingües.",
    "why.w3.t": "Tarifa cerrada",
    "why.w3.d": "Sabés el precio antes de viajar. Sin recargos.",
    "why.w4.t": "Atención 24/7",
    "why.w4.d": "Reservas y asistencia todos los días del año.",
    "footer.nav": "Navegación",
    "footer.coverage": "Cobertura",
    "footer.cov3": "CABA y Gran Buenos Aires",
    "footer.cov4": "Puerto y terminales",
    "footer.cov5": "Viajes de larga distancia",
    "footer.hours": "Atención 24 horas, todos los días",
    "wa.greeting": "Hola TransferBA, quiero consultar por un traslado.",
    "wa.booking": "Hola TransferBA, quiero reservar un traslado:",
    "wa.business": "Hola TransferBA, quiero una propuesta de traslados para mi empresa:",
  },
  en: {
    "nav.services": "Services",
    "nav.fleet": "Fleet",
    "nav.book": "Book",
    "nav.business": "Business",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "hero.eyebrow": "Ezeiza · Aeroparque · Buenos Aires",
    "hero.title": "Your airport transfer, no surprises",
    "hero.lead": "Professional drivers, fixed rates and live flight tracking. We'll meet you with a name sign in the arrivals hall.",
    "hero.cta": "Book now",
    "hero.whatsapp": "Chat on WhatsApp",
    "hero.b1": "Available 24/7",
    "hero.b2": "Fixed price",
    "hero.b3": "English / Español",
    "services.title": "Our services",
    "services.s1.t": "Arrivals",
    "services.s1.d": "We meet you at Ezeiza or Aeroparque with your name on a sign. If your flight is delayed, we wait at no extra cost.",
    "services.s2.t": "Departures",
    "services.s2.d": "We pick you up at your hotel, home or office and get you to the airport with plenty of time.",
    "services.s3.t": "City transfers",
    "services.s3.d": "Between airports, the cruise terminal, Buquebus ferry or anywhere in Buenos Aires.",
    "services.s4.t": "Long-distance trips",
    "services.s4.d": "Trips to the Atlantic coast, the countryside or other provinces, with the same comfort and a tailored rate.",
    "fleet.title": "Our fleet",
    "fleet.f1.t": "Sedan",
    "fleet.f1.m": "Up to 3 passengers · 2 large suitcases",
    "fleet.f1.d": "Ideal for solo travelers, couples or business trips.",
    "fleet.f2.t": "SUV / Minivan",
    "fleet.f2.m": "Up to 6 passengers · 5 large suitcases",
    "fleet.f2.d": "More room for families or groups with lots of luggage.",
    "fleet.f3.t": "Van",
    "fleet.f3.m": "Up to 15 passengers · 12 large suitcases",
    "fleet.f3.d": "For groups, tours and corporate events.",
    "book.title": "Book your transfer",
    "book.lead": "Fill out the form and we'll confirm your price on WhatsApp within minutes.",
    "book.step1": "Enter your trip details",
    "book.step2": "We send you a quote and you confirm",
    "book.step3": "Your driver is waiting on the day",
    "form.type": "Transfer type",
    "form.arrival": "Arrival",
    "form.departure": "Departure",
    "form.city": "City",
    "form.long": "Long distance",
    "form.from": "From",
    "form.to": "To",
    "form.date": "Date",
    "form.time": "Time",
    "form.passengers": "Passengers",
    "form.luggage": "Suitcases",
    "form.vehicle": "Vehicle",
    "form.flight": "Flight number",
    "form.name": "Full name",
    "form.phone": "Phone / WhatsApp",
    "form.notes": "Comments (optional)",
    "form.notesPh": "Baby seat, extra stops, etc.",
    "form.submit": "Send booking via WhatsApp",
    "form.note": "No prepayment. Pay your driver in cash, bank transfer or card.",
    "form.error": "Please fill in the highlighted fields to continue.",
    "biz.eyebrow": "For companies",
    "biz.title": "Corporate transfers",
    "biz.lead": "We move your team, clients and visitors with the same punctuality, every day. One account, one point of contact and one invoice at the end of the month.",
    "biz.b1.t": "Corporate account",
    "biz.b1.d": "No per-trip payments: monthly billing with official invoices.",
    "biz.b2.t": "Dedicated account manager",
    "biz.b2.d": "A single contact for bookings, changes and emergencies, 24/7.",
    "biz.b3.t": "Preferential rates",
    "biz.b3.d": "Fixed contract prices based on your trip volume.",
    "biz.b4.t": "Trip reports",
    "biz.b4.d": "Monthly breakdown by passenger and cost center.",
    "biz.b5.t": "Events and groups",
    "biz.b5.d": "Logistics for conferences, incentive trips and delegations.",
    "biz.form.title": "Request a proposal for your company",
    "biz.form.company": "Company",
    "biz.form.cuit": "Tax ID / CUIT (optional)",
    "biz.form.contact": "Contact person",
    "biz.form.role": "Job title (optional)",
    "biz.form.email": "Email",
    "biz.form.volume": "Estimated trips per month",
    "biz.form.volumeMax": "More than 100",
    "biz.form.message": "Tell us what you need (optional)",
    "biz.form.messagePh": "Executive transfers, client visits, a one-off event...",
    "biz.form.submit": "Request proposal via WhatsApp",
    "biz.form.note": "Prefer email? Write to us at",
    "faq.title": "Frequently asked questions",
    "faq.q1": "What if my flight is delayed?",
    "faq.a1": "We track your flight in real time and adjust the pickup time. Waiting due to flight delays is free.",
    "faq.q2": "Where will the driver meet me?",
    "faq.a2": "In the arrivals hall, right after customs, holding a sign with your name.",
    "faq.q3": "How do I pay?",
    "faq.a3": "You can pay the driver in pesos, US dollars, bank transfer or card. No prepayment required.",
    "faq.q4": "How far in advance should I book?",
    "faq.a4": "We recommend booking at least 24 hours ahead, but we also take last-minute bookings subject to availability.",
    "faq.q5": "Can I cancel?",
    "faq.a5": "Yes, cancellation is free up to 12 hours before the transfer.",
    "footer.tag": "Private transfers in Buenos Aires.",
    "nav.skip": "Skip to booking",
    "quote.title": "Get a quote",
    "quote.toPh": "Hotel, address or neighborhood",
    "quote.submit": "Continue booking",
    "why.w1.t": "Flight tracking",
    "why.w1.d": "We adjust pickup to your actual landing time.",
    "why.w2.t": "Professional drivers",
    "why.w2.d": "Punctual, discreet and bilingual.",
    "why.w3.t": "Fixed rate",
    "why.w3.d": "Know your price before you travel. No surcharges.",
    "why.w4.t": "24/7 service",
    "why.w4.d": "Bookings and assistance every day of the year.",
    "footer.nav": "Navigation",
    "footer.coverage": "Coverage",
    "footer.cov3": "Buenos Aires City & Greater BA",
    "footer.cov4": "Port and terminals",
    "footer.cov5": "Long-distance trips",
    "footer.hours": "Open 24 hours, every day",
    "wa.greeting": "Hi TransferBA, I'd like to ask about a transfer.",
    "wa.booking": "Hi TransferBA, I'd like to book a transfer:",
    "wa.business": "Hi TransferBA, I'd like a transfer proposal for my company:",
  },
};

const EZE = "Aeropuerto Ezeiza (EZE)";
let lang = "es";

function t(key) {
  return I18N[lang][key] ?? I18N.es[key] ?? key;
}

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

function applyLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.getElementById("langToggle").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll(".js-whatsapp").forEach((a) => {
    a.href = waLink(t("wa.greeting"));
    a.target = "_blank";
    a.rel = "noopener";
  });
  try { localStorage.setItem("lang", lang); } catch (_) {}
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && I18N[saved]) return saved;
  } catch (_) {}
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

// Marca los campos obligatorios vacíos o inválidos y devuelve si el formulario está completo
function validate(f) {
  let valid = true;
  f.querySelectorAll("[required]").forEach((input) => {
    const ok = input.value.trim() !== "" && input.checkValidity();
    input.closest(".field")?.classList.toggle("invalid", !ok);
    if (!ok) valid = false;
  });
  const errorBox = f.querySelector(".form__error");
  errorBox.textContent = valid ? "" : t("form.error");
  errorBox.hidden = valid;
  return valid;
}

// ===== Formulario de reserva =====
const form = document.getElementById("bookingForm");
const flightField = document.getElementById("flightField");

function onTypeChange() {
  const type = form.type.value;
  flightField.hidden = type === "city" || type === "long";
  // Sugerir aeropuerto según el tipo de traslado
  if (type === "arrival" && !form.from.value) form.from.value = EZE;
  if (type === "departure" && !form.to.value) form.to.value = EZE;
}

form.querySelectorAll('input[name="type"]').forEach((r) => r.addEventListener("change", onTypeChange));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validate(form)) return;

  const d = Object.fromEntries(new FormData(form));
  const typeLabel = t(`form.${d.type}`);
  const vehicleLabel = form.vehicle.options[form.vehicle.selectedIndex].textContent;
  const lines = [
    t("wa.booking"),
    "",
    `• ${t("form.type")}: ${typeLabel}`,
    `• ${t("form.from")}: ${d.from}`,
    `• ${t("form.to")}: ${d.to}`,
    `• ${t("form.date")}: ${d.date} ${d.time}`,
    `• ${t("form.passengers")}: ${d.passengers}`,
    `• ${t("form.luggage")}: ${d.luggage}`,
    `• ${t("form.vehicle")}: ${vehicleLabel}`,
  ];
  if (!flightField.hidden && d.flight) lines.push(`• ${t("form.flight")}: ${d.flight}`);
  lines.push(`• ${t("form.name")}: ${d.name}`, `• ${t("form.phone")}: ${d.phone}`);
  if (d.notes) lines.push(`• ${t("form.notes")}: ${d.notes}`);

  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});

// ===== Formulario de empresas =====
const bizForm = document.getElementById("bizForm");
bizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validate(bizForm)) return;

  const d = Object.fromEntries(new FormData(bizForm));
  const lines = [
    t("wa.business"),
    "",
    `• ${t("biz.form.company")}: ${d.company}`,
  ];
  if (d.cuit) lines.push(`• CUIT: ${d.cuit}`);
  lines.push(`• ${t("biz.form.contact")}: ${d.contact}${d.role ? ` (${d.role})` : ""}`);
  lines.push(`• ${t("biz.form.email")}: ${d.email}`, `• ${t("form.phone")}: ${d.phone}`);
  lines.push(`• ${t("biz.form.volume")}: ${bizForm.volume.options[bizForm.volume.selectedIndex].textContent}`);
  if (d.message) lines.push(`• ${d.message}`);

  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});

// ===== Cotizador rápido de la portada: completa el formulario de reserva =====
const quoteForm = document.getElementById("quoteForm");
const AIRPORT = /aeropuerto|aeroparque|airport|\b(EZE|AEP|EPA)\b/i;

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = Object.fromEntries(new FormData(quoteForm));
  const type = AIRPORT.test(q.from) ? "arrival" : AIRPORT.test(q.to) ? "departure" : "city";
  form.querySelector(`input[name="type"][value="${type}"]`).checked = true;
  form.from.value = q.from;
  form.to.value = q.to;
  form.date.value = q.date;
  form.passengers.value = q.passengers || 1;
  const pax = Number(form.passengers.value);
  form.vehicle.value = pax > 6 ? "van" : pax > 3 ? "suv" : "sedan";
  onTypeChange();

  document.getElementById("reservar").scrollIntoView({ behavior: "smooth" });
  const firstEmpty = [...form.querySelectorAll("[required]")].find((i) => !i.value.trim());
  firstEmpty?.focus({ preventScroll: true });
});

// No permitir fechas pasadas
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
form.date.min = quoteForm.date.min = today.toISOString().split("T")[0];

// ===== Header: sólido al hacer scroll o con el menú abierto =====
const header = document.getElementById("header");
const nav = document.getElementById("nav");
function updateHeader() {
  header.classList.toggle("header--solid", window.scrollY > 40 || nav.classList.contains("open"));
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// ===== Menú móvil =====
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  updateHeader();
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", false);
  updateHeader();
}));

// ===== Aparición suave de secciones =====
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".section__title, .card, .booking__intro, .form, details, .why__item").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// ===== Contacto =====
document.querySelectorAll(".js-phone").forEach((a) => (a.textContent = CONFIG.whatsappDisplay));
document.querySelectorAll(".js-email").forEach((a) => {
  a.textContent = CONFIG.email;
  a.href = `mailto:${CONFIG.email}`;
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("langToggle").addEventListener("click", () => applyLanguage(lang === "es" ? "en" : "es"));
applyLanguage(initialLanguage());
onTypeChange();
