import type { Dictionary } from "./dictionary";

export const es = {
  intlLocale: "es",
  nav: {
    links: [
      { href: "#work", label: "Trabajo" },
      { href: "#services", label: "Servicios" },
      { href: "#lab", label: "Laboratorio" },
      { href: "#about", label: "Sobre mí" },
    ],
    startAProject: "Iniciar un proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuLabel: "Menú",
    primaryAriaLabel: "Principal",
  },
  skipLink: "Saltar al contenido",
  hero: {
    heading: "Creamos experiencias digitales que funcionan.",
    subhead: "Sitios web · Aplicaciones web · Software · Automatización",
    ctaPrimary: "Iniciar un proyecto",
    ctaExplore: "Explorar",
  },
  evolution: {
    heading: "De sitio web a software.",
    subhead: "La misma interfaz, evolucionando junto con tu negocio.",
    stages: [
      {
        id: "landing",
        title: "Sitio web simple",
        description: "Una landing page limpia: un mensaje, una acción.",
      },
      {
        id: "business",
        title: "Sitio web empresarial",
        description:
          "La navegación, los servicios y el contenido real toman forma.",
      },
      {
        id: "app",
        title: "Aplicación web",
        description:
          "La interfaz se convierte en una aplicación real y funcional.",
      },
      {
        id: "connected",
        title: "Plataforma conectada",
        description: "Pagos, datos y automatización se conectan a ella.",
      },
      {
        id: "custom",
        title: "Software a medida",
        description: "Todo lo que tu negocio necesita.",
      },
    ],
  },
  services: {
    heading: "Lo que construimos.",
    subhead: "Cuatro categorías. Un solo equipo, de principio a fin.",
    categories: [
      {
        id: "websites",
        title: "Sitios web",
        description: "Sitios de marketing y tiendas diseñados para convertir.",
        items: [
          "Landing pages",
          "Sitios web empresariales",
          "Sitios web corporativos",
          "E-commerce",
        ],
      },
      {
        id: "web-apps",
        title: "Aplicaciones web",
        description:
          "Software real que tu equipo y tus clientes usan a diario.",
        items: [
          "Paneles de control",
          "Sistemas de reservas",
          "Portales de clientes",
          "Herramientas internas",
        ],
      },
      {
        id: "integrations",
        title: "Integraciones",
        description:
          "Conectamos las herramientas con las que ya opera tu negocio.",
        items: ["Pagos", "APIs", "CRM", "Correo y WhatsApp"],
      },
      {
        id: "custom",
        title: "Software a medida",
        description:
          "Para necesidades que no encajan en una categoría estándar.",
        items: [
          "Arquitectura y alcance",
          "Desarrollos a medida",
          "Colaboración continua",
        ],
      },
    ],
  },
  lab: {
    heading: "Pruébalo tú mismo.",
    subhead: "Interacciones reales y pequeñas, no capturas de pantalla.",
    tabs: {
      booking: "Reservas",
      dashboard: "Panel",
      integration: "Integración",
    },
    demoBadge: "Demo · Datos de ejemplo",
    dashboard: {
      dateRangeAriaLabel: "Rango de fechas",
      ranges: [
        { id: "7d", label: "7 días" },
        { id: "30d", label: "30 días" },
        { id: "1y", label: "1 año" },
      ],
      stats: {
        revenue: "Ingresos",
        visitors: "Visitantes",
        conversionRate: "Tasa de conversión",
        bookings: "Reservas",
      },
      chartLabels: {
        Mon: "lun",
        Tue: "mar",
        Wed: "mié",
        Thu: "jue",
        Fri: "vie",
        Sat: "sáb",
        Sun: "dom",
        W1: "S1",
        W2: "S2",
        W3: "S3",
        W4: "S4",
        Jan: "ene",
        Feb: "feb",
        Mar: "mar",
        Apr: "abr",
        May: "may",
        Jun: "jun",
        Jul: "jul",
        Aug: "ago",
        Sep: "sep",
        Oct: "oct",
        Nov: "nov",
        Dec: "dic",
      },
      chartAriaLabel: (from, to, min, max) =>
        `Gráfico de ${from} a ${to}, valores de ${min} a ${max}`,
      chartPointAriaLabel: (label, value) => `${label}: ${value}`,
    },
    booking: {
      selectDay: "Selecciona un día",
      availableTimes: "Horarios disponibles",
      booked: "Reservado",
      bookAnother: "Reservar otro",
      confirmBooking: "Confirmar reserva",
      dayAriaLabel: (monthLabel, day, available) =>
        `${monthLabel} ${day}${available ? "" : ", no disponible"}`,
      weekdayLabels: ["D", "L", "M", "M", "J", "V", "S"],
    },
    integration: {
      trigger: "Iniciar solicitud",
      running: "Procesando…",
      diagramAriaLabel:
        "Diagrama de una solicitud que viaja desde el sitio web a través de la API hacia el CRM y Pagos, luego a la base de datos, y de vuelta al sitio web.",
    },
  },
  work: {
    heading: "Trabajos seleccionados.",
    subhead:
      "Proyectos conceptuales creados para mostrar variedad — casos reales próximamente.",
    conceptualProjectBadge: "Proyecto conceptual",
    previewDeviceAriaLabel: "Dispositivo de vista previa",
    deviceModes: { desktop: "Escritorio", mobile: "Móvil" },
    projects: [
      {
        id: "clinic",
        name: "Meridian Health",
        vertical: "Clínica médica",
        description:
          "Un sitio web centrado en reservas que lleva a los pacientes de la búsqueda a una cita agendada en tres pasos.",
        tags: ["Sitio web", "Reservas en línea", "Diseño responsivo"],
      },
      {
        id: "restaurant",
        name: "Ember & Oak",
        vertical: "Restaurante",
        description:
          "Un sitio orientado a reservas, construido en torno al menú y al espacio — rápido, visual y fácil de actualizar.",
        tags: ["Sitio web", "Reservas", "CMS"],
      },
      {
        id: "consulting",
        name: "Kestrel Partners",
        vertical: "Servicios profesionales",
        description:
          "Un sitio corporativo que posiciona a la firma ante clientes empresariales, con un flujo de contacto que califica leads.",
        tags: ["Sitio web", "Captación de leads", "CMS"],
      },
    ],
  },
  process: {
    heading: "Cómo trabajamos.",
    subhead: "Cuatro pasos, de principio a fin — sin sorpresas en el camino.",
    steps: [
      {
        number: "01",
        title: "Descubrimiento",
        description:
          "Un breve brief del proyecto — objetivos, requisitos y restricciones — antes de comenzar cualquier diseño.",
      },
      {
        number: "02",
        title: "Diseño",
        description:
          "Se define la experiencia y el sistema, de modo que la estructura queda decidida antes de escribir código.",
      },
      {
        number: "03",
        title: "Desarrollo",
        description:
          "Desarrollado de forma transparente — ves el progreso a medida que ocurre, no solo al final.",
      },
      {
        number: "04",
        title: "Lanzamiento y soporte",
        description:
          'Publicado, medido y mantenido — el software nunca está realmente "terminado" al lanzarse.',
      },
    ],
  },
  configurator: {
    heading: "Definamos el alcance de tu proyecto.",
    subhead:
      "Cinco preguntas rápidas — sin compromiso, solo una idea más clara.",
    steps: [
      { key: "projectType", label: "¿Qué quieres construir?" },
      { key: "needs", label: "¿Qué necesita tu negocio?" },
      { key: "budget", label: "Presupuesto aproximado" },
      { key: "timeline", label: "Plazo" },
      { key: "contact", label: "Tus datos" },
    ],
    back: "Atrás",
    next: "Siguiente",
    sending: "Enviando…",
    requestProposal: "Solicitar propuesta",
    successTitle: "Gracias — ya lo recibimos.",
    successBody: (email) =>
      `Te contactaremos a ${email} dentro de un día hábil.`,
    genericError:
      "Ocurrió un error al enviar tu solicitud. Por favor, inténtalo de nuevo.",
    stepIndicator: (current, total, label) =>
      `Paso ${current} de ${total} — ${label}`,
    contact: {
      heading: "¿Cómo podemos contactarte?",
      name: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
      whatsapp: "WhatsApp",
      optional: "Opcional",
      honeypotLabel: "Deja este campo vacío",
    },
    needs: {
      heading: "¿Qué necesita tu negocio?",
      selectAllThatApply: "Selecciona todas las que correspondan.",
    },
    options: {
      projectType: [
        { id: "website", label: "Sitio web" },
        { id: "ecommerce", label: "E-commerce" },
        { id: "web-app", label: "Aplicación web" },
        { id: "custom-software", label: "Software a medida" },
        { id: "not-sure", label: "Aún no lo sé" },
      ],
      needs: [
        { id: "bookings", label: "Reservas en línea" },
        { id: "payments", label: "Pagos" },
        { id: "accounts", label: "Cuentas de cliente" },
        { id: "dashboard", label: "Panel de administración" },
        { id: "whatsapp", label: "WhatsApp" },
        { id: "crm", label: "Integración con CRM" },
        { id: "api", label: "Integraciones de API" },
        { id: "analytics", label: "Analítica" },
        { id: "automation", label: "Automatización" },
        { id: "other", label: "Algo más" },
      ],
      budget: [
        { id: "3-5k", label: "$3k – $5k" },
        { id: "5-10k", label: "$5k – $10k" },
        { id: "10-25k", label: "$10k – $25k" },
        { id: "25k-plus", label: "$25k+" },
      ],
      timeline: [
        { id: "asap", label: "Lo antes posible" },
        { id: "1-2-months", label: "1–2 meses" },
        { id: "3-6-months", label: "3–6 meses" },
        { id: "flexible", label: "Flexible / sin definir" },
      ],
    },
  },
  about: {
    heading: "Una persona, full-stack.",
    body: [
      "Este sitio está construido y mantenido por un solo desarrollador — no es una gran agencia, ni una plantilla sin código. Cada proyecto recibe ingeniería directa y práctica de principio a fin.",
      "Las mismas herramientas y técnicas que se muestran en este sitio — React moderno, un trabajo cuidadoso de rendimiento, accesibilidad real — son las que se usan también en los proyectos de los clientes.",
    ],
    principles: [
      {
        title: "Comunicación directa",
        description:
          "Hablas directamente con quien lo está construyendo — sin gestores de cuenta, sin traspasos.",
      },
      {
        title: "Ingeniería moderna",
        description:
          "El mismo stack que se demuestra en todo este sitio: Next.js, TypeScript y herramientas de nivel de producción.",
      },
      {
        title: "Construido para durar",
        description:
          "Código mantenible y estructura clara, no solo algo que funcione el día del lanzamiento.",
      },
    ],
  },
  faq: {
    heading: "Preguntas frecuentes.",
    items: [
      {
        question: "¿Cuánto tiempo toma un proyecto?",
        answer:
          "Un sitio web de marketing enfocado suele tomar entre 2 y 4 semanas. Las aplicaciones web y el software a medida varían más — normalmente entre 6 y 12 semanas, según el alcance. El plazo es una de las preguntas del configurador de proyectos anterior, así que las estimaciones se mantienen ajustadas a lo que realmente estás construyendo.",
      },
      {
        question: "¿Cuánto cuesta un proyecto?",
        answer:
          "Depende completamente del alcance — una landing page y una plataforma a medida no se cotizan de la misma manera. El paso de presupuesto del configurador ofrece un rango inicial, y cada proyecto recibe una propuesta con detalles antes de que comience cualquier trabajo.",
      },
      {
        question:
          "No estoy seguro de qué necesito exactamente — ¿podemos hablar igual?",
        answer:
          'Sí. "Aún no lo sé" es una de las opciones del configurador de proyectos, precisamente por esta razón. La mayoría de los proyectos comienzan como una idea general y se definen juntos.',
      },
      {
        question:
          "¿Solo construyes sitios web, o también aplicaciones completas?",
        answer:
          "Ambos, además de las integraciones y la automatización que hay en el medio — pagos, CRMs, sistemas de reservas, paneles de administración. Las secciones de Laboratorio Interactivo y Servicios anteriores muestran ese alcance de forma concreta, en lugar de solo enumerarlo.",
      },
      {
        question: "¿Hay soporte después del lanzamiento?",
        answer:
          "Sí. El lanzamiento no es la meta final — el soporte continuo y la iteración forman parte de cómo se define el alcance de los proyectos, no son un añadido de último momento.",
      },
      {
        question: "¿Qué tecnologías utilizas?",
        answer:
          "Herramientas modernas de nivel de producción — Next.js, TypeScript y Tailwind CSS forman el stack por defecto, con integraciones específicas (pagos, CRM, automatización) elegidas según cada proyecto, en lugar de forzarlas en una plantilla única para todos.",
      },
    ],
  },
  finalCta: {
    heading: "¿Listo para construir algo?",
    body: "Cuéntanos en qué estás trabajando — el configurador de proyectos toma alrededor de dos minutos.",
    cta: "Iniciar un proyecto",
  },
  footer: {
    tagline:
      "Sitios web, aplicaciones web y software a medida — diseñados y desarrollados de principio a fin.",
    footerAriaLabel: "Pie de página",
    startAProject: "Iniciar un proyecto",
    copyright: (year) => `© ${year} JL. Todos los derechos reservados.`,
    builtWith: "Construido con Next.js, TypeScript y Tailwind CSS.",
  },
  notFound: {
    eyebrow: "404",
    heading: "Esta página no existe.",
    body: "La página que buscas fue movida, renombrada o nunca existió.",
    backHome: "Volver al inicio",
  },
  errorPage: {
    eyebrow: "Error",
    heading: "Algo salió mal.",
    body: "Ocurrió un error inesperado. Puedes intentarlo de nuevo o volver al inicio.",
    tryAgain: "Intentar de nuevo",
    backHome: "Volver al inicio",
  },
  validation: {
    projectTypeRequired: "Selecciona una opción para continuar",
    needsRequired: "Selecciona al menos una",
    budgetRequired: "Selecciona un rango de presupuesto",
    timelineRequired: "Selecciona un plazo",
    nameRequired: "El nombre es obligatorio",
    emailInvalid: "Ingresa un correo electrónico válido",
  },
  localeSwitcher: {
    ariaLabel: "Idioma",
  },
  seo: {
    title: "Javier López — Desarrollo de Software",
    description:
      "Estudio de desarrollo de software premium — sitios web, aplicaciones web y software a medida.",
    keywords: [
      "desarrollo web",
      "desarrollo de aplicaciones web",
      "desarrollo de software a medida",
      "desarrollador Next.js",
      "ingeniero de software",
    ],
    ogHeadline: "Creamos experiencias digitales que funcionan.",
    ogTagline: "Sitios web · Aplicaciones web · Software · Automatización",
    structuredDataServiceTypes: [
      "Desarrollo web",
      "Desarrollo de aplicaciones web",
      "Desarrollo de software a medida",
      "Integración de sistemas",
    ],
  },
} satisfies Dictionary;
