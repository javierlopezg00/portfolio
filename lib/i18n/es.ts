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
    heading: "Un sitio web es solo el principio.",
    subhead:
      "Diseño y desarrollo el software que hay detrás — plataformas, integraciones y automatización para negocios que necesitan más que una plantilla.",
    ctaPrimary: "Iniciar un proyecto",
    ctaExplore: "Explorar",
  },
  whyCustom: {
    heading: "Construido alrededor de tu negocio.",
    subhead:
      "Las herramientas genéricas te piden que te adaptes a ellas. El software a medida funciona al revés.",
    items: [
      {
        title: "Se adapta a tu forma de trabajar",
        description:
          "Construido según cómo opera realmente tu negocio, no según las suposiciones genéricas de una plantilla.",
      },
      {
        title: "Sin funciones que no usas",
        description:
          "Las plantillas y plataformas SaaS agrupan funciones para todo tipo de cliente. Tú obtienes exactamente lo que tu negocio necesita.",
      },
      {
        title: "Crece contigo",
        description:
          "A medida que el negocio cambia, el software cambia con él — sin depender de la hoja de ruta o los precios de otra empresa.",
      },
    ],
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
    mockup: {
      logo: "Marca",
      navLinks: ["Inicio", "Servicios", "Contacto"],
      heroHeadline: "Todo lo que necesitas, en un solo lugar.",
      heroSubtext: "Un sitio simple que dice quién eres.",
      heroButton: "Contáctanos",
      heroHighlights: [
        "Se ve bien en cualquier dispositivo",
        "Rápido y fácil de navegar",
        "Diseñado a la medida de tu marca",
      ],
      cards: [
        { title: "Servicios", subtitle: "Lo que ofrecemos" },
        { title: "Nosotros", subtitle: "Nuestra historia" },
        { title: "Contacto", subtitle: "Escríbenos" },
      ],
      dashboardStats: [
        { label: "Clientes", value: "482" },
        { label: "Ventas", value: "$12.4k" },
        { label: "Pedidos", value: "128" },
      ],
      dashboardChartLabel: "Actividad semanal",
      dashboardDayLabels: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"],
      dashboardActivityLabel: "Pedidos recientes",
      dashboardActivity: [
        { name: "Ava Martínez", status: "Completado" },
        { name: "Noah Chen", status: "En proceso" },
        { name: "Liam Patel", status: "Completado" },
      ],
      dashboardConnectedLabel: "Conectado a",
    },
  },
  services: {
    heading: "Lo que construyo.",
    subhead: "Cuatro categorías, un solo punto de contacto.",
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
          "Conecto las herramientas con las que ya opera tu negocio.",
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
    pricingSignal: "Los proyectos suelen comenzar alrededor de Q7,500.",
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
      success: "Solicitud completada",
      diagramAriaLabel:
        "Diagrama de una solicitud que viaja desde el sitio web a través de la API hacia el CRM y Pagos, luego a la base de datos, y de vuelta al sitio web.",
    },
  },
  whoIWorkWith: {
    heading: "Con quién trabajo.",
    subhead:
      "Negocios independientes que necesitan más que una plantilla — no empresas con un equipo de ingeniería interno.",
    items: [
      {
        title: "Negocios de servicios",
        description:
          "Clínicas, salones, consultorías y agencias — cualquier negocio basado en reservas o atención al cliente.",
      },
      {
        title: "Negocios locales y regionales",
        description:
          "Restaurantes, comercios y despachos profesionales listos para dejar atrás un creador de sitios genérico.",
      },
      {
        title: "Fundadores y equipos pequeños",
        description:
          "Productos en etapa temprana que necesitan un ingeniero real, no solo un prototipo no-code.",
      },
    ],
  },
  work: {
    heading: "Trabajos seleccionados.",
    subhead: "Proyectos conceptuales creados para mostrar variedad.",
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
    previewContent: {
      clinic: {
        logo: "Meridian Health",
        navLinks: ["Servicios", "Doctores"],
        headline: "Reserva tu cita en línea",
        subtext:
          "Consulta la disponibilidad de cualquier médico en tiempo real",
        cta: "Reservar ahora",
        steps: ["Elige un médico", "Elige un horario", "Confirma tu cita"],
      },
      restaurant: {
        logo: "Ember & Oak",
        cta: "Reservar mesa",
        menu: [
          { item: "Costilla braseada", price: "$28" },
          { item: "Salmón asado", price: "$24" },
          { item: "Risotto de hongos silvestres", price: "$19" },
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
    viewCaseStudy: "Ver caso de estudio",
    caseStudy: {
      conceptualNote:
        "Proyecto conceptual — creado para demostrar el enfoque de ingeniería y UX, no el sitio real de un cliente.",
      backToWork: "Volver a proyectos",
      approachHeading: "Enfoque",
      resultsHeading: "Resultados",
    },
    caseStudies: {
      clinic: [
        {
          title: "Reservas sin fricción",
          description:
            "Un selector real de día y hora, con formato según el idioma y lógica de disponibilidad — no una captura de pantalla estática, sino la misma interacción que necesita un widget de reservas para funcionar de verdad.",
        },
        {
          title: "Contenido estructurado como una clínica real",
          description:
            "Servicios, médicos y flujo de reserva organizados como los necesitaría un sitio real de una clínica, no una plantilla genérica con el logo cambiado.",
        },
        {
          title: "Accesible por defecto",
          description:
            "El calendario, las tarjetas de opciones y el paso de confirmación son operables con teclado y están etiquetados para lectores de pantalla desde el inicio, no ajustados después.",
        },
      ],
      restaurant: [
        {
          title: "Un menú que en verdad es contenido estructurado",
          description:
            "Platillos, precios y categorías modelados como datos reales, no como párrafos de texto — la estructura que hace que actualizar un menú después sea un cambio de contenido, no un rediseño.",
        },
        {
          title: "Pensado para el reflujo, no solo para el diseño",
          description:
            "Las vistas previas de escritorio y móvil son el mismo componente respondiendo a container queries reales, no dos versiones hechas a mano que puedan desalinearse.",
        },
        {
          title: "Rápido por construcción",
          description:
            "Renderizado estático por defecto y sin JavaScript de cliente innecesario para contenido que no necesita ser interactivo.",
        },
      ],
      consulting: [
        {
          title: "Las áreas de práctica como punto de entrada",
          description:
            "La página principal comienza con lo que la firma realmente hace, no con un hero genérico — las áreas de práctica son el primer contenido real que ve un visitante.",
        },
        {
          title: "Profesional sin ser genérico",
          description:
            "Un diseño sobrio, centrado en el texto, pensado para transmitir credibilidad en una firma de servicios, distinto de los patrones más visuales usados en los proyectos de la clínica y el restaurante.",
        },
        {
          title: "Mismo sistema de diseño, otra voz",
          description:
            "Construido con la misma librería de componentes que el resto del sitio, lo que demuestra que el sistema se adapta a distintos rubros sin necesitar un rediseño por proyecto.",
        },
      ],
    },
    clinicBooking: {
      heading: "Reserva una cita",
      subhead:
        "Un flujo de reservas funcional — elige un servicio y un médico, escoge un horario y confirma.",
      steps: {
        service: "Elige un servicio",
        doctor: "Elige un médico",
        schedule: "Elige día y hora",
        contact: "Tus datos",
      },
      services: [
        { id: "checkup", label: "Chequeo general" },
        { id: "pediatrics", label: "Pediatría" },
        { id: "dermatology", label: "Dermatología" },
        { id: "dental", label: "Limpieza dental" },
      ],
      doctors: [
        {
          id: "ruiz",
          name: "Dra. Elena Ruiz",
          specialty: "Medicina General",
        },
        { id: "chen", name: "Dr. Marcus Chen", specialty: "Pediatría" },
        { id: "patel", name: "Dra. Aisha Patel", specialty: "Dermatología" },
      ],
      contactFields: { name: "Nombre completo", email: "Correo electrónico" },
      disclosure:
        "Solo demostrativo — no se guarda ni se envía ninguna información.",
      back: "Atrás",
      next: "Siguiente",
      confirm: "Confirmar cita",
      confirmedHeading: "Cita reservada",
      confirmedBody: (service, doctor, day, time) =>
        `${service} con ${doctor} — ${day} a las ${time}.`,
      bookAnother: "Reservar otra cita",
      summary: { service: "Servicio", doctor: "Médico", when: "Cuándo" },
    },
    // Aún no existen resultados reales de clientes — se deja vacío en
    // lugar de rellenar con números de ejemplo. Ver el comentario del
    // tipo en dictionary.ts.
    caseStudyResults: {},
  },
  process: {
    heading: "Cómo trabajo.",
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
    heading: "Cuéntame sobre tu proyecto.",
    subhead:
      "Algunas preguntas rápidas — sin compromiso, solo una idea más clara.",
    steps: [
      { key: "projectType", label: "¿Qué quieres construir?" },
      { key: "needs", label: "¿Qué necesita tu negocio?" },
      { key: "budget", label: "Presupuesto aproximado" },
      { key: "timeline", label: "Plazo" },
      { key: "contact", label: "Tus datos" },
      { key: "review", label: "Revisar y enviar" },
    ],
    back: "Atrás",
    next: "Siguiente",
    sending: "Enviando…",
    requestProposal: "Enviar solicitud de proyecto",
    successTitle: "Gracias — ya lo recibí.",
    successBody: (email) => `Te contactaré a ${email} dentro de un día hábil.`,
    genericError:
      "Ocurrió un error al enviar tu solicitud. Por favor, inténtalo de nuevo.",
    stepIndicator: (current, total, label) =>
      `Paso ${current} de ${total} — ${label}`,
    contact: {
      heading: "¿Cómo puedo contactarte?",
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
    budgetStep: {
      heading: "¿Qué presupuesto tienes en mente para el proyecto?",
      helperText:
        "No necesitas tener un presupuesto exacto. Esto me ayuda a recomendarte la solución adecuada para tu proyecto.",
    },
    review: {
      heading: "Revisa tu proyecto.",
      editLabel: "Editar",
      sectionLabels: {
        projectType: "Tipo de proyecto",
        needs: "Necesidades",
        budget: "Presupuesto",
        timeline: "Plazo",
        contact: "Datos de contacto",
      },
      notProvided: "No proporcionado",
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
        { id: "tier-1", label: "Q7.500 – Q15.000" },
        { id: "tier-2", label: "Q15.000 – Q30.000" },
        { id: "tier-3", label: "Q30.000 – Q60.000" },
        { id: "tier-4", label: "Q60.000+" },
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
  about: {
    heading: "Colaboración directa. Responsabilidad de principio a fin.",
    body: [
      "Hola, soy Javier — ingeniero de software, construyo sitios web y software para negocios que necesitan más que una solución genérica.",
      "Eso significa responsabilidad técnica de principio a fin — frontend, backend, integraciones y todo lo que el proyecto realmente necesite, no solo la parte que encaja en una especialidad.",
      "Las mismas herramientas y técnicas que se muestran en este sitio — React moderno, un trabajo cuidadoso de rendimiento, accesibilidad real — son las que uso también en los proyectos de mis clientes.",
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
          "Software que aguanta — construido con las mismas herramientas modernas y de nivel de producción que se muestran en este sitio.",
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
          "Sí — el soporte continuo y la iteración forman parte de cómo se define el alcance de los proyectos, no son un añadido de último momento. La sección de Mantenimiento más abajo detalla qué incluye.",
      },
      {
        question: "¿Qué tecnologías utilizas?",
        answer:
          "Lo que haga falta para que funcione de forma confiable — en la práctica, eso suele ser Next.js, TypeScript y Tailwind CSS, con integraciones específicas (pagos, CRM, automatización) elegidas según cada proyecto, en lugar de forzarlas en una plantilla única para todos.",
      },
    ],
  },
  maintenance: {
    heading: "El lanzamiento no es el final.",
    subhead:
      "Todo proyecto incluye un camino para lo que sigue — correcciones, actualizaciones y espacio para crecer.",
    items: [
      {
        title: "Correcciones y actualizaciones",
        description:
          "Actualización de dependencias, parches de seguridad y compatibilidad con navegadores — al día en lugar de acumular deuda técnica.",
      },
      {
        title: "Monitoreo",
        description:
          "Monitoreo de rendimiento y errores integrado desde el lanzamiento, para detectar problemas antes de que los noten los clientes.",
      },
      {
        title: "Iteración",
        description:
          "Mejoras pequeñas y nuevas funciones a medida que el negocio crece — no una entrega única y definitiva.",
      },
    ],
  },
  finalCta: {
    heading: "¿Listo para construir algo?",
    body: "Cuéntame en qué estás trabajando — el configurador de proyectos toma alrededor de dos minutos.",
    cta: "Iniciar un proyecto",
  },
  footer: {
    tagline:
      "Sitios web, aplicaciones web y software a medida — diseñados y desarrollados de principio a fin.",
    footerAriaLabel: "Pie de página",
    startAProject: "Iniciar un proyecto",
    copyright: (year) =>
      `© ${year} Javier López Digital. Todos los derechos reservados.`,
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
    title: "Javier López Digital — Desarrollo de Software",
    description:
      "Estudio de desarrollo de software premium — sitios web, aplicaciones web y software a medida.",
    keywords: [
      "desarrollo web",
      "desarrollo de aplicaciones web",
      "desarrollo de software a medida",
      "desarrollador Next.js",
      "ingeniero de software",
    ],
    ogHeadline: "Un sitio web es solo el principio.",
    ogTagline:
      "Diseño y desarrollo el software que hay detrás — plataformas, integraciones y automatización para negocios que necesitan más que una plantilla.",
    structuredDataAreaServed: "Mundial",
    structuredDataServiceTypes: [
      "Desarrollo web",
      "Desarrollo de aplicaciones web",
      "Desarrollo de software a medida",
      "Integración de sistemas",
    ],
  },
} satisfies Dictionary;
