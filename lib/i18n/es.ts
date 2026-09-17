import type { Dictionary } from "./dictionary";

export const es = {
  intlLocale: "es",
  nav: {
    links: [
      { href: "#work", label: "Proyectos" },
      { href: "#services", label: "Servicios" },
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
    heading: "Sitios web y software que hacen crecer tu negocio.",
    subhead:
      "Sitios web profesionales, reservas en línea y herramientas a la medida — diseñados y desarrollados para negocios como el tuyo.",
    ctaPrimary: "Iniciar un proyecto",
    ctaSecondary: "Ver proyectos",
    audience:
      "Para clínicas, restaurantes, servicios profesionales y negocios en crecimiento.",
    showcase: {
      brand: "Alma Wellness",
      navLinks: ["Servicios", "Equipo", "Contacto"],
      headline: "Siéntete mejor, muévete mejor.",
      subtext: "Fisioterapia y bienestar en el corazón de la ciudad.",
      cta: "Agendar sesión",
      services: ["Fisioterapia", "Masajes", "Pilates"],
      phone: {
        title: "Tu cita",
        detail: "Mar 14 · 10:30",
        with: "con Ana Morales",
        cta: "Confirmar",
      },
      toast: { title: "Nueva reserva", body: "Laura G. · Mañana, 9:00" },
    },
  },
  services: {
    heading: "Lo que puedo construir para ti.",
    subhead: "Desde tu primer sitio web hasta software hecho para tu negocio.",
    categories: [
      {
        id: "websites",
        title: "Sitios web para negocios",
        description:
          "Sitios profesionales que hacen que tu negocio sea fácil de entender, confiar y contactar.",
        examples: [
          "Se ve perfecto en el celular",
          "Contacto y WhatsApp integrados",
          "Fácil de encontrar para tus clientes",
        ],
        pricing: "Desde aproximadamente Q7,500",
      },
      {
        id: "online",
        title: "Negocio en línea",
        description:
          "Permite que tus clientes reserven, compren, paguen o interactúen con tu negocio en línea.",
        examples: [
          "Reservas en línea",
          "Pagos y tienda en línea",
          "Cuentas para clientes",
        ],
        pricing: "Se cotiza según el alcance",
      },
      {
        id: "software",
        title: "Software a la medida",
        description:
          "Software diseñado alrededor de cómo funciona realmente tu negocio.",
        examples: [
          "Paneles de control",
          "Herramientas internas",
          "Automatización",
        ],
        pricing: "Se cotiza según el alcance",
      },
    ],
  },
  work: {
    heading: "Míralo en acción.",
    subhead: "Proyectos de ejemplo que muestran cómo podría verse tu sitio.",
    viewProject: "Ver proyecto",
    conceptualProjectBadge: "Proyecto de ejemplo",
    projects: [
      {
        id: "clinic",
        name: "Meridian Health",
        vertical: "Sitio web para clínica",
        summary:
          "Servicios, citas en línea y una experiencia pensada para el celular.",
        description:
          "Un sitio moderno para clínica donde los pacientes encuentran a su médico, eligen un horario y agendan su cita en tres pasos — desde cualquier celular.",
        tags: ["Sitio web", "Citas en línea", "Pensado para celular"],
      },
      {
        id: "restaurant",
        name: "Ember & Oak",
        vertical: "Sitio web para restaurante",
        summary: "Menú, reservas y una experiencia impecable en el celular.",
        description:
          "Un sitio para restaurante construido alrededor del menú y del espacio — los comensales ven los platillos, conocen el lugar y reservan mesa en segundos.",
        tags: ["Sitio web", "Reservas", "Menú"],
      },
      {
        id: "consulting",
        name: "Kestrel Partners",
        vertical: "Servicios profesionales",
        summary: "Un mensaje claro y un proceso de contacto sin fricción.",
        description:
          "Un sitio para una firma de servicios profesionales que explica qué hace, genera confianza y convierte visitas en consultas calificadas.",
        tags: ["Sitio web", "Formulario de contacto", "Posicionamiento"],
      },
    ],
    previewContent: {
      clinic: {
        logo: "Meridian Health",
        navLinks: ["Servicios", "Médicos"],
        headline: "Agenda tu cita en línea",
        subtext: "Consulta la disponibilidad de cualquier médico al instante",
        cta: "Agendar ahora",
        steps: ["Elige un médico", "Elige un horario", "Confirma tu cita"],
      },
      restaurant: {
        logo: "Ember & Oak",
        cta: "Reservar mesa",
        menu: [
          { item: "Costilla braseada", price: "Q185" },
          { item: "Tacos de salmón", price: "Q160" },
          { item: "Risotto de hongos", price: "Q125" },
        ],
      },
      consulting: {
        logo: "Kestrel Partners",
        navLinks: ["Servicios", "Equipo", "Contacto"],
        headline: "Asesoría estratégica para empresas en crecimiento",
        subtext: "Claridad y ejecución para decisiones complejas",
        practiceAreas: ["Estrategia", "Operaciones", "Finanzas"],
      },
    },
    caseStudy: {
      conceptualNote:
        "Proyecto de ejemplo — una demostración realista creada para mostrar el enfoque, no el sitio real de un cliente.",
      backToWork: "Volver a proyectos",
      approachHeading: "Por qué funciona",
      resultsHeading: "Resultados",
    },
    caseStudies: {
      clinic: [
        {
          title: "Citas en tres pasos",
          description:
            "El paciente elige servicio, médico y horario — sin llamadas ni idas y vueltas.",
        },
        {
          title: "Todo lo que busca un paciente",
          description:
            "Servicios, médicos, ubicación y horarios fáciles de encontrar desde cualquier celular.",
        },
        {
          title: "Accesible para todos",
          description:
            "Funciona con teclado y con lectores de pantalla, para que ningún paciente se quede fuera.",
        },
      ],
      restaurant: [
        {
          title: "Un menú que actualizas tú mismo",
          description:
            "Los platillos y precios son contenido real, no un PDF — cámbialos cuando quieras sin rediseñar nada.",
        },
        {
          title: "Pensado primero para el celular",
          description:
            "La mayoría de los comensales llegan desde Instagram o Maps. El sitio está hecho justo para ese momento.",
        },
        {
          title: "Rápido, incluso con mala señal",
          description:
            "Las páginas cargan al instante para que nadie se vaya antes de ver el menú.",
        },
      ],
      consulting: [
        {
          title: "Empieza por lo que hace la firma",
          description:
            "Las áreas de práctica son lo primero que ve el visitante — sin frases vacías.",
        },
        {
          title: "Profesional sin ser genérico",
          description:
            "Un diseño sobrio y creíble, a la altura de una firma de servicios y de sus clientes.",
        },
        {
          title: "Un formulario de contacto más inteligente",
          description:
            "El visitante cuenta qué necesita antes de la primera llamada, así cada conversación empieza preparada.",
        },
      ],
    },
    clinicShowcase: {
      badge: "Ejemplo de sitio para clínica",
      tagline:
        "Un sitio moderno para tu clínica que tus pacientes sí van a usar.",
      highlights: [
        "Citas en línea en tres pasos",
        "Médicos y servicios de un vistazo",
        "WhatsApp y cómo llegar a un toque",
        "Se ve perfecto en cualquier celular",
      ],
      servicesHeading: "Servicios",
      services: [
        { name: "Consulta general", note: "Disponibilidad esta misma semana" },
        { name: "Pediatría", note: "Atención para niños de todas las edades" },
        { name: "Dermatología", note: "Salud de la piel, cabello y uñas" },
        {
          name: "Cita de seguimiento",
          note: "Control rápido después del tratamiento",
        },
      ],
      doctorsHeading: "Nuestros médicos",
      doctorsIntro:
        "Cada médico tiene un perfil desde el que los pacientes pueden agendar directamente.",
      mobileHeading: "Hecho para el celular",
      mobileBody:
        "La mayoría de los pacientes agendan desde su celular. Citas, WhatsApp y cómo llegar están siempre a un toque.",
      locationHeading: "Cómo llegar",
      address: "12 Calle 1-25, Zona 10 · Ciudad de Guatemala",
      hours: "Lun–Vie 8:00–18:00 · Sáb 8:00–13:00",
      phone: "+502 2222 0000",
      whatsapp: "Escribir por WhatsApp",
      directions: "Ver en el mapa",
      trustHeading: "Por qué los pacientes confían",
      trustPoints: [
        "Disponibilidad real — sin citas duplicadas",
        "Recordatorios automáticos que reducen las ausencias",
        "Privado por diseño — no se recopila información médica",
      ],
      demoNote:
        "Clínica, médicos y datos de contacto ficticios — nada en esta página es real ni se guarda.",
    },
    clinicBooking: {
      heading: "Agenda una cita",
      subhead:
        "Prueba el flujo de citas — elige un servicio y un médico, escoge un horario y confirma.",
      steps: {
        service: "Elige un servicio",
        doctor: "Elige un médico",
        schedule: "Elige día y hora",
        contact: "Tus datos",
      },
      services: [
        { id: "consultation", label: "Consulta general" },
        { id: "pediatrics", label: "Pediatría" },
        { id: "dermatology", label: "Dermatología" },
        { id: "followup", label: "Cita de seguimiento" },
      ],
      doctors: [
        { id: "ruiz", name: "Dra. Elena Ruiz", specialty: "Medicina general" },
        { id: "chen", name: "Dr. Marcus Chen", specialty: "Pediatría" },
        { id: "patel", name: "Dra. Aisha Patel", specialty: "Dermatología" },
      ],
      contactFields: { name: "Nombre completo", email: "Correo electrónico" },
      disclosure:
        "Solo es una demostración — no se guarda ni se envía ninguna información.",
      back: "Atrás",
      next: "Siguiente",
      confirm: "Confirmar cita",
      confirmedHeading: "Cita agendada",
      confirmedBody: (service, doctor, day, time) =>
        `${service} con ${doctor} — ${day} a las ${time}.`,
      bookAnother: "Agendar otra cita",
      summary: { service: "Servicio", doctor: "Médico", when: "Cuándo" },
    },
    // Aún no existen resultados reales de clientes — se deja vacío en
    // lugar de rellenar con números de ejemplo. Ver el comentario del
    // tipo en dictionary.ts.
    caseStudyResults: {},
    caseStudyCta: {
      heading: "¿Quieres algo así para tu negocio?",
      body: "Cuéntame sobre tu proyecto y te respondo en un día hábil.",
      primaryCta: "Iniciar un proyecto",
    },
    reservationDemo: {
      heading: "Reserva una mesa",
      subhead:
        "Prueba el flujo de reservas — elige cuántas personas, la fecha y la hora, y confirma.",
      steps: {
        partySize: "Número de personas",
        date: "Elige una fecha",
        time: "Elige una hora",
        summary: "Confirmar reserva",
      },
      partySizes: [
        { id: "2", label: "2 personas" },
        { id: "4", label: "4 personas" },
        { id: "6", label: "6 personas" },
        { id: "8", label: "8+ personas" },
      ],
      back: "Atrás",
      next: "Siguiente",
      confirm: "Confirmar reserva",
      confirmedHeading: "Reserva confirmada",
      confirmedBody: (partySize, day, time) =>
        `Mesa para ${partySize} — ${day} a las ${time}.`,
      bookAnother: "Hacer otra reserva",
      summaryLabels: { partySize: "Personas", when: "Cuándo" },
      disclosure:
        "Solo es una demostración — no se realiza ni se guarda ninguna reserva.",
    },
    leadQualificationDemo: {
      heading: "Solicita una consultoría",
      subhead:
        "Prueba el flujo de contacto — cuenta qué necesitas y la firma da seguimiento preparada.",
      steps: {
        service: "¿En qué necesitas ayuda?",
        companySize: "Tamaño de la empresa",
        timeline: "Plazo",
        summary: "Resumen",
      },
      companySizes: [
        { id: "1-10", label: "1–10 empleados" },
        { id: "11-50", label: "11–50 empleados" },
        { id: "51-200", label: "51–200 empleados" },
        { id: "200+", label: "200+ empleados" },
      ],
      back: "Atrás",
      next: "Siguiente",
      summaryHeading: "Según lo que compartiste",
      summaryLabels: {
        service: "Servicio",
        companySize: "Tamaño de la empresa",
        timeline: "Plazo",
      },
      disclosure: "Solo es una demostración — no se envía ninguna información.",
    },
  },
  growth: {
    heading: "Tu sitio web puede crecer con tu negocio.",
    subhead: "Empieza con lo que necesitas hoy. Agrega más cuando estés listo.",
    closing: "Empieza simple. Agrega más cuando tu negocio lo necesite.",
    stages: [
      {
        id: "online",
        eyebrow: "Etapa 1",
        title: "Estar en línea",
        label: "Sitio web profesional",
        description:
          "Ayuda a tus clientes a encontrarte y a entender lo que ofreces.",
      },
      {
        id: "customers",
        eyebrow: "Etapa 2",
        title: "Conseguir clientes",
        label: "Reservas y consultas",
        description: "Haz que sea fácil contactarte o reservar contigo.",
      },
      {
        id: "sell",
        eyebrow: "Etapa 3",
        title: "Vender en línea",
        label: "Pagos y comercio",
        description:
          "Permite que tus clientes compren o paguen directamente en línea.",
      },
      {
        id: "smarter",
        eyebrow: "Etapa 4",
        title: "Trabajar mejor",
        label: "Herramientas a la medida",
        description:
          "Automatiza el trabajo repetitivo y administra tu negocio con menos esfuerzo.",
      },
    ],
    mockup: {
      brand: "Lumi Salón",
      navLinks: ["Servicios", "Equipo", "Contacto"],
      headline: "Luce y siéntete increíble.",
      subtext: "Cabello, uñas y cuidado de la piel en un solo lugar.",
      cta: "Contáctanos",
      ctaBook: "Reservar en línea",
      services: ["Corte", "Color", "Uñas"],
      whatsapp: "WhatsApp",
      bookingTitle: "Agenda tu cita",
      bookingTimes: ["9:00", "10:30", "12:00"],
      bookingConfirm: "Confirmar",
      productTitle: "Tarjeta de regalo",
      productPrice: "Q250",
      pay: "Pagar ahora",
      paid: "Pago recibido",
      dashboardTitle: "Hoy",
      stats: [
        { label: "Citas", value: "14" },
        { label: "Ventas", value: "Q3,450" },
        { label: "Clientes nuevos", value: "5" },
      ],
      scheduleTitle: "Próximas citas",
      schedule: [
        { name: "María P.", time: "10:30", status: "Recordatorio enviado" },
        { name: "Ana L.", time: "11:00", status: "Confirmada" },
        { name: "Sofía R.", time: "12:30", status: "Recordatorio enviado" },
      ],
    },
  },
  verticals: {
    heading: "Hecho para negocios como el tuyo.",
    items: [
      {
        id: "healthcare",
        title: "Salud",
        description: "Clínicas y consultorios privados",
      },
      {
        id: "hospitality",
        title: "Hospitalidad",
        description: "Restaurantes y hospedajes",
      },
      {
        id: "professional",
        title: "Servicios profesionales",
        description: "Consultores, despachos y especialistas",
      },
      {
        id: "growing",
        title: "Negocios en crecimiento",
        description: "Equipos que necesitan herramientas digitales propias",
      },
    ],
  },
  process: {
    heading: "Cómo funciona.",
    subhead: "Tres pasos simples, sin sorpresas.",
    steps: [
      {
        number: "01",
        title: "Cuéntame qué necesitas",
        description:
          "Definimos juntos tus objetivos, el alcance y el presupuesto.",
      },
      {
        number: "02",
        title: "Lo diseño y lo construyo",
        description: "Ves el avance durante todo el proyecto.",
      },
      {
        number: "03",
        title: "Lo lanzamos",
        description: "Tu proyecto sale en vivo, con soporte continuo opcional.",
      },
    ],
  },
  about: {
    heading: "Hola, soy Javier.",
    body: "Soy ingeniero de software y construyo sitios web y software para negocios que necesitan más que una solución genérica.",
    points: [
      {
        title: "Comunicación directa",
        description: "Hablas directamente con quien construye tu proyecto.",
      },
      {
        title: "Responsabilidad técnica",
        description:
          "Una sola persona responsable desde la idea hasta el lanzamiento.",
      },
      {
        title: "Desarrollo de principio a fin",
        description:
          "Diseño, desarrollo y lanzamiento — todo en un mismo lugar.",
      },
    ],
    photoAlt: "Javier López",
  },
  labTeaser: {
    heading: "¿Quieres ver lo que puedo construir?",
    body: "Demostraciones funcionales que puedes probar — sin registro.",
    cta: "Explorar el Laboratorio Interactivo",
    demos: [
      {
        id: "booking",
        title: "Demo de reservas",
        description: "Elige día y hora, como lo harían tus clientes.",
      },
      {
        id: "dashboard",
        title: "Demo de panel de control",
        description: "Los números de tu negocio de un vistazo.",
      },
      {
        id: "integration",
        title: "Demo de automatización",
        description: "Mira cómo una solicitud recorre tus herramientas sola.",
      },
    ],
  },
  lab: {
    heading: "Laboratorio Interactivo",
    subhead:
      "Interacciones pequeñas y reales — no capturas de pantalla. Todo funciona en tu navegador con datos de ejemplo.",
    backHome: "Volver al inicio",
    tabs: {
      booking: "Reservas",
      dashboard: "Panel",
      integration: "Automatización",
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
      trigger: "Enviar una solicitud",
      running: "Procesando…",
      success: "Solicitud completada",
      diagramAriaLabel:
        "Diagrama de una solicitud que viaja desde el sitio web a través de la API hacia el CRM y Pagos, luego a la base de datos, y de vuelta al sitio web.",
    },
  },
  contact: {
    heading: "Construyamos algo para tu negocio.",
    body: "Envíame un mensaje o cotiza tu proyecto en dos minutos.",
    whatsapp: "Escríbeme por WhatsApp",
    whatsappMessage: "Hola Javier, me gustaría hablar sobre un proyecto.",
    email: "Enviar correo",
    replyNote: "Respondo en un día hábil.",
  },
  configurator: {
    heading: "Cotiza tu proyecto",
    subhead: "Unas preguntas rápidas — dos minutos, sin compromiso.",
    steps: [
      { key: "projectType", label: "¿Qué necesitas?" },
      { key: "needs", label: "¿Para qué te debe servir?" },
      { key: "budget", label: "Presupuesto" },
      { key: "timeline", label: "Plazo" },
      { key: "contact", label: "Tus datos" },
      { key: "review", label: "Revisar y enviar" },
    ],
    back: "Atrás",
    next: "Siguiente",
    sending: "Enviando…",
    requestProposal: "Enviar solicitud",
    successTitle: "¡Gracias! Ya lo recibí.",
    successBody: (email) => `Te respondo a ${email} en un día hábil.`,
    genericError:
      "Ocurrió un error al enviar tu solicitud. Por favor, inténtalo de nuevo.",
    stepIndicator: (current, total, label) =>
      `Paso ${current} de ${total} — ${label}`,
    contact: {
      heading: "¿Cómo te contacto?",
      name: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
      whatsapp: "WhatsApp",
      optional: "Opcional",
      honeypotLabel: "Deja este campo vacío",
    },
    needs: {
      heading: "¿Para qué te debe servir tu sitio web?",
      selectAllThatApply: "Elige todo lo que aplique.",
    },
    budgetStep: {
      heading: "¿Qué presupuesto tienes en mente?",
      helperText:
        "Un estimado es suficiente — me ayuda a recomendarte la solución adecuada.",
    },
    review: {
      heading: "¿Todo está bien?",
      editLabel: "Editar",
      sectionLabels: {
        projectType: "Proyecto",
        needs: "Objetivos",
        budget: "Presupuesto",
        timeline: "Plazo",
        contact: "Datos de contacto",
      },
      notProvided: "No indicado",
    },
    options: {
      projectType: [
        { id: "website", label: "Un sitio web nuevo" },
        { id: "online", label: "Reservas, pagos o ventas en línea" },
        { id: "software", label: "Software a la medida para mi negocio" },
        { id: "not-sure", label: "Aún no lo sé" },
      ],
      needs: [
        { id: "inquiries", label: "Recibir más consultas" },
        { id: "bookings", label: "Aceptar reservas o citas" },
        { id: "sell", label: "Vender en línea" },
        { id: "payments", label: "Aceptar pagos" },
        { id: "accounts", label: "Dar a mis clientes una cuenta" },
        { id: "automation", label: "Ahorrar tiempo con automatización" },
        { id: "other", label: "Algo más" },
      ],
      budget: [
        { id: "tier-1", label: "Q7,500 – Q15,000" },
        { id: "tier-2", label: "Q15,000 – Q30,000" },
        { id: "tier-3", label: "Q30,000 – Q60,000" },
        { id: "tier-4", label: "Q60,000+" },
        { id: "guidance", label: "Necesito orientación sobre el presupuesto" },
      ],
      timeline: [
        { id: "asap", label: "Lo antes posible" },
        { id: "1-2-months", label: "1–2 meses" },
        { id: "3-6-months", label: "3–6 meses" },
        { id: "flexible", label: "Flexible / sin definir" },
      ],
    },
  },
  faq: {
    heading: "Preguntas frecuentes.",
    items: [
      {
        question: "¿Cuánto cuesta un sitio web?",
        answer:
          "Los sitios web profesionales suelen empezar alrededor de Q7,500. El software más complejo se cotiza según el alcance.",
      },
      {
        question: "¿Cuánto tiempo toma?",
        answer:
          "La mayoría de los sitios web profesionales toman entre 2 y 4 semanas. Las aplicaciones más grandes pueden tomar más, según el alcance.",
      },
      {
        question: "¿Y si no sé exactamente qué necesito?",
        answer: "No pasa nada. Definimos juntos la solución adecuada.",
      },
      {
        question: "¿Ofreces soporte después del lanzamiento?",
        answer:
          "Sí. Hay planes opcionales de soporte y mantenimiento continuo.",
      },
    ],
  },
  footer: {
    tagline: "Sitios web y software para negocios que quieren crecer.",
    footerAriaLabel: "Pie de página",
    lab: "Laboratorio Interactivo",
    startAProject: "Iniciar un proyecto",
    copyright: (year) =>
      `© ${year} Javier López Digital. Todos los derechos reservados.`,
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
    title: "Javier López Digital — Sitios web y software para tu negocio",
    description:
      "Sitios web profesionales, reservas en línea, pagos y software a la medida para clínicas, restaurantes, empresas de servicios y negocios en crecimiento.",
    keywords: [
      "sitio web para negocios",
      "diseño de páginas web",
      "sistema de reservas en línea",
      "software a la medida",
      "desarrollador web Guatemala",
    ],
    labTitle: "Laboratorio Interactivo",
    labDescription:
      "Pequeñas demostraciones funcionales — una pantalla de reservas, un panel de negocio y un flujo automatizado — corriendo en tu navegador.",
    ogHeadline: "Sitios web y software que hacen crecer tu negocio.",
    ogTagline:
      "Sitios web profesionales, reservas en línea y herramientas a la medida — diseñados y desarrollados para negocios como el tuyo.",
    structuredDataAreaServed: "Mundial",
    structuredDataServiceTypes: [
      "Diseño de sitios web",
      "Sistemas de reservas en línea",
      "Comercio electrónico",
      "Software a la medida",
    ],
  },
} satisfies Dictionary;
