// ===== Configuración: reemplazá estos datos por los reales =====
const CONFIG = {
  whatsapp: "5491100000000", // formato internacional, sin "+" ni espacios
  email: "reservas@transferba.com",
};

const I18N = {
  es: {
    "nav.services": "Servicios",
    "nav.fleet": "Flota",
    "nav.book": "Reservar",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Ezeiza · Aeroparque · CABA",
    "hero.title": "Tu traslado al aeropuerto, sin sorpresas",
    "hero.lead": "Choferes profesionales, tarifa fija y seguimiento de tu vuelo. Te esperamos con cartel en el hall de arribos.",
    "hero.cta": "Reservar ahora",
    "hero.whatsapp": "Escribinos por WhatsApp",
    "hero.b1": "✓ Disponible 24/7",
    "hero.b2": "✓ Precio cerrado",
    "hero.b3": "✓ Español / English",
    "services.title": "Nuestros servicios",
    "services.s1.t": "Llegadas",
    "services.s1.d": "Te recibimos en Ezeiza o Aeroparque con tu nombre en un cartel. Si tu vuelo se demora, esperamos sin costo extra.",
    "services.s2.t": "Salidas",
    "services.s2.d": "Te buscamos en tu hotel, casa u oficina y te dejamos en el aeropuerto con tiempo de sobra.",
    "services.s3.t": "Traslados en la ciudad",
    "services.s3.d": "Entre aeropuertos, terminal de cruceros, Buquebus o cualquier punto de CABA y GBA.",
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
    "wa.greeting": "Hola TransferBA, quiero consultar por un traslado.",
    "wa.booking": "Hola TransferBA, quiero reservar un traslado:",
  },
  en: {
    "nav.services": "Services",
    "nav.fleet": "Fleet",
    "nav.book": "Book",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "hero.eyebrow": "Ezeiza · Aeroparque · Buenos Aires",
    "hero.title": "Your airport transfer, no surprises",
    "hero.lead": "Professional drivers, fixed rates and live flight tracking. We'll meet you with a name sign in the arrivals hall.",
    "hero.cta": "Book now",
    "hero.whatsapp": "Chat on WhatsApp",
    "hero.b1": "✓ Available 24/7",
    "hero.b2": "✓ Fixed price",
    "hero.b3": "✓ English / Español",
    "services.title": "Our services",
    "services.s1.t": "Arrivals",
    "services.s1.d": "We meet you at Ezeiza or Aeroparque with your name on a sign. If your flight is delayed, we wait at no extra cost.",
    "services.s2.t": "Departures",
    "services.s2.d": "We pick you up at your hotel, home or office and get you to the airport with plenty of time.",
    "services.s3.t": "City transfers",
    "services.s3.d": "Between airports, the cruise terminal, Buquebus ferry or anywhere in Buenos Aires.",
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
    "wa.greeting": "Hi TransferBA, I'd like to ask about a transfer.",
    "wa.booking": "Hi TransferBA, I'd like to book a transfer:",
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

// ===== Formulario de reserva =====
const form = document.getElementById("bookingForm");
const flightField = document.getElementById("flightField");
const errorBox = document.getElementById("formError");

function onTypeChange() {
  const type = form.type.value;
  flightField.hidden = type === "city";
  // Sugerir aeropuerto según el tipo de traslado
  if (type === "arrival" && !form.from.value) form.from.value = EZE;
  if (type === "departure" && !form.to.value) form.to.value = EZE;
}

form.querySelectorAll('input[name="type"]').forEach((r) => r.addEventListener("change", onTypeChange));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("[required]").forEach((input) => {
    const ok = input.value.trim() !== "" && input.checkValidity();
    input.closest(".field")?.classList.toggle("invalid", !ok);
    if (!ok) valid = false;
  });
  if (!valid) {
    errorBox.textContent = t("form.error");
    errorBox.hidden = false;
    return;
  }
  errorBox.hidden = true;

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
  if (d.type !== "city" && d.flight) lines.push(`• ${t("form.flight")}: ${d.flight}`);
  lines.push(`• ${t("form.name")}: ${d.name}`, `• ${t("form.phone")}: ${d.phone}`);
  if (d.notes) lines.push(`• ${t("form.notes")}: ${d.notes}`);

  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});

// No permitir fechas pasadas
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
form.date.min = today.toISOString().split("T")[0];

// ===== Menú móvil =====
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// ===== Contacto =====
document.querySelectorAll(".js-phone").forEach((a) => (a.textContent = "+" + CONFIG.whatsapp));
document.querySelectorAll(".js-email").forEach((a) => {
  a.textContent = CONFIG.email;
  a.href = `mailto:${CONFIG.email}`;
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("langToggle").addEventListener("click", () => applyLanguage(lang === "es" ? "en" : "es"));
applyLanguage(initialLanguage());
onTypeChange();
