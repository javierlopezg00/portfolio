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
    heading: {
      lead: "Sitios web y software que hacen ",
      accent: "crecer",
      tail: " tu negocio.",
    },
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
      stat: { label: "Reservas esta semana", value: "24" },
    },
  },
  services: {
    heading: "Lo que puedo construir para ti.",
    subhead: "Desde tu primer sitio web hasta software hecho para tu negocio.",
    paymentLabel: "Pago de un cliente",
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
        title: "Reservas y ventas en línea",
        description:
          "Permite que tus clientes agenden una cita, reserven una mesa, o compren y paguen en línea.",
        examples: [
          "Citas y reservas",
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
      goalHeading: "El objetivo",
      experienceHeading: "La experiencia",
      featuresHeading: "Funciones clave",
      decisionsHeading: "Decisiones de diseño",
      technicalHeading: "Detalles técnicos",
      technicalNote:
        "Para quien tenga curiosidad: cómo está construido por dentro.",
      resultsHeading: "Resultados",
      tryItLabel: "Pruébalo abajo",
    },
    caseStudies: {
      clinic: {
        goal: "Una clínica privada con cuatro médicos estaba perdiendo citas por teléfono: los pacientes llamaban durante la consulta, nadie contestaba y terminaban agendando en otro lado. Necesitaba un sitio donde agendar no dependiera de una llamada.",
        experience:
          "El paciente encuentra la clínica, ve qué atiende cada médico, elige un horario que de verdad está libre y confirma — en un minuto, casi siempre desde el celular.",
        features: [
          {
            title: "Citas en tres pasos",
            description:
              "Elegir servicio, elegir médico, elegir horario. Sin crear cuenta ni llenar formularios.",
          },
          {
            title: "Médicos y servicios a la vista",
            description:
              "Cada médico tiene su perfil con su especialidad, así el paciente elige bien desde la primera vez.",
          },
          {
            title: "Un toque para contactar la clínica",
            description:
              "WhatsApp, teléfono y cómo llegar siempre a la mano, para quien prefiere preguntar.",
          },
          {
            title: "Ubicación y horarios donde se buscan",
            description:
              "Dirección, horario y mapa — las tres cosas que revisa un paciente antes de salir de casa.",
          },
        ],
        decisions: [
          {
            title: "Agendar es lo primero",
            description:
              "Todo lo demás está a un scroll. La acción que más vale para la clínica ocupa el mejor lugar.",
          },
          {
            title: "Solo se muestra disponibilidad real",
            description:
              "El paciente no puede elegir un horario ya ocupado, así recepción nunca tiene que llamar para reacomodar.",
          },
          {
            title: "No se pide información médica",
            description:
              "Agendar pide un nombre y un correo, nada más. Lo delicado se habla en consulta, no en un formulario web.",
          },
        ],
        technical: [
          {
            title: "Lógica de agenda real, no una captura",
            description:
              "El calendario calcula la disponibilidad por día y por médico, adapta el formato de fecha al idioma del visitante y bloquea horarios pasados o no disponibles.",
          },
          {
            title: "Accesible desde el inicio",
            description:
              "El calendario, las tarjetas de opción y la confirmación funcionan con teclado y están etiquetados para lectores de pantalla desde el principio, no ajustados después.",
          },
          {
            title: "No se guarda nada",
            description:
              "La demostración vive solo en el navegador: ningún dato de paciente se envía ni se almacena.",
          },
        ],
      },
      restaurant: {
        goal: "Un restaurante de barrio mandaba la foto de un menú impreso por WhatsApp y tomaba cada reserva por teléfono. Necesitaba un sitio que mostrara bien la comida y recibiera reservas mientras la cocina está llena.",
        experience:
          "El comensal ve el menú con fotos reales, se hace una idea del lugar, revisa el horario de hoy y reserva mesa — sin llamar ni esperar respuesta.",
        features: [
          {
            title: "Un menú que vende la comida",
            description:
              "Platillos, fotos y precios pensados para leerse en el celular camino a cenar.",
          },
          {
            title: "Reservas en línea",
            description:
              "Cuántas personas, qué día, a qué hora, confirmado. Las reservas siguen entrando mientras el equipo atiende.",
          },
          {
            title: "Ubicación y horarios",
            description:
              "Dónde están y a qué hora abren, visible sin tener que buscarlo.",
          },
          {
            title: "Un toque para llamar o escribir",
            description:
              "Para el grupo grande o la petición especial que necesita a una persona.",
          },
        ],
        decisions: [
          {
            title: "Las fotos van primero",
            description:
              "Un restaurante se elige con los ojos. La comida es el protagonista visual, no un encabezado decorativo.",
          },
          {
            title: "El menú es contenido, no un PDF",
            description:
              "Precios y platillos se cambian en minutos, sin diseñador y sin rediseño — así el menú en línea es el menú de esta noche.",
          },
          {
            title: "Hecho para el celular en la mano",
            description:
              "La mayoría llega desde Instagram o Maps. Todo está dimensionado para un dedo en una pantalla pequeña.",
          },
        ],
        technical: [
          {
            title: "Carga rápida en cualquier dispositivo",
            description:
              "Las páginas se generan por adelantado y las imágenes se redimensionan y comprimen solas, así el menú aparece incluso con mala señal.",
          },
          {
            title: "Un solo diseño para todas las pantallas",
            description:
              "Las vistas de escritorio y celular son el mismo código respondiendo al espacio disponible, así nunca se desalinean.",
          },
          {
            title: "Flujo de reservas sin servidor",
            description:
              "La demostración funciona solo en el navegador; una versión real se conectaría al sistema de reservas del restaurante.",
          },
        ],
      },
      consulting: {
        goal: 'Una firma de asesoría recibía consultas que solo decían "quiero hablar con ustedes" — cada primera llamada empezaba de cero. Necesitaba un sitio que explicara qué hace la firma y reuniera contexto antes de la llamada.',
        experience:
          "El cliente potencial ve de inmediato las áreas de práctica, concluye que la firma es seria y envía una consulta que ya dice qué necesita y para cuándo.",
        features: [
          {
            title: "Un mensaje claro",
            description:
              "Qué hace la firma y para quién, en la primera pantalla — sin frases corporativas vacías.",
          },
          {
            title: "Servicios que el cliente reconoce",
            description:
              "Áreas de práctica descritas en las palabras del cliente, para que se identifique con una.",
          },
          {
            title: "Una consulta guiada, no una caja vacía",
            description:
              "Tres preguntas cortas — qué necesitas, tamaño de la empresa, plazo — y la firma ya sabe con quién habla.",
          },
          {
            title: "Consultas que llegan calificadas",
            description:
              "Cada primera llamada empieza preparada, y eso vale más que recibir muchos mensajes sin contexto.",
          },
        ],
        decisions: [
          {
            title: "Credibilidad antes que decoración",
            description:
              "Un diseño sobrio, centrado en el texto. En servicios profesionales, la mesura se lee como competencia.",
          },
          {
            title: "Preguntar funciona mejor que un formulario",
            description:
              "Tres respuestas a un toque cuestan menos esfuerzo que un campo de mensaje en blanco, y dan información mucho más útil.",
          },
          {
            title: "Ninguna pregunta que el cliente no pueda responder",
            description:
              "El presupuesto y el alcance se hablan en la llamada. El formulario solo pregunta lo que se responde en diez segundos.",
          },
        ],
        technical: [
          {
            title: "Construido con el mismo sistema de diseño",
            description:
              "Este sitio, el de la clínica y el del restaurante comparten una misma librería de componentes — eso es lo que permite que tres negocios muy distintos se vean como ellos mismos sin empezar de cero cada vez.",
          },
          {
            title: "Listo para teclado y lectores de pantalla",
            description:
              "El flujo de consulta se opera por completo sin mouse, y cada paso se anuncia al cambiar.",
          },
          {
            title: "A un paso de un proceso real",
            description:
              "La demostración resume las respuestas en el navegador; una versión real las enviaría al correo o al CRM de la firma.",
          },
        ],
      },
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
      body: "Cuéntame qué quieres construir y te ayudo a definir el mejor camino.",
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
    body: "Soy ingeniero de software y construyo sitios web y software para negocios que necesitan más que una solución genérica. Trabajas directamente con la persona responsable de la ejecución técnica de tu proyecto.",
    points: [
      {
        title: "Comunicación directa",
        description: "Hablas directamente con quien construye tu proyecto.",
      },
      {
        title: "Responsabilidad técnica",
        description:
          "Un solo contacto técnico desde la primera idea hasta el lanzamiento.",
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
    body: "Cotiza tu proyecto en dos minutos, o simplemente escríbeme.",
    whatsapp: "Escríbeme por WhatsApp",
    whatsappMessage: "Hola Javier, me gustaría hablar sobre un proyecto.",
    email: "Enviar correo",
    emailShort: "Enviarme un mensaje",
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
