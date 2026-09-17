import type { Dictionary } from "./dictionary";

export const en = {
  intlLocale: "en-US",
  nav: {
    links: [
      { href: "#work", label: "Work" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
    ],
    startAProject: "Start a Project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Menu",
    primaryAriaLabel: "Primary",
  },
  skipLink: "Skip to content",
  hero: {
    heading: "Websites and software that help your business grow.",
    subhead:
      "Professional websites, online booking and custom tools — designed and built for businesses like yours.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "See My Work",
    audience:
      "For clinics, restaurants, professional services and growing businesses.",
    showcase: {
      brand: "Alma Wellness",
      navLinks: ["Services", "Team", "Contact"],
      headline: "Feel better, move better.",
      subtext: "Physiotherapy and wellness in the heart of the city.",
      cta: "Book a session",
      services: ["Physiotherapy", "Massage", "Pilates"],
      phone: {
        title: "Your appointment",
        detail: "Tue 14 · 10:30 AM",
        with: "with Ana Morales",
        cta: "Confirm",
      },
      toast: { title: "New booking", body: "Laura G. · Tomorrow, 9:00 AM" },
    },
  },
  services: {
    heading: "What I can build for you.",
    subhead: "From your first website to software made for your business.",
    categories: [
      {
        id: "websites",
        title: "Business Websites",
        description:
          "Professional websites that make your business easy to understand, trust and contact.",
        examples: [
          "Looks great on phones",
          "Contact and WhatsApp built in",
          "Easy for customers to find you",
        ],
        pricing: "Starting around Q7,500",
      },
      {
        id: "online",
        title: "Online Business",
        description:
          "Let customers book, buy, pay or interact with your business online.",
        examples: [
          "Online booking",
          "Payments and online store",
          "Customer accounts",
        ],
        pricing: "Quoted based on scope",
      },
      {
        id: "software",
        title: "Custom Software",
        description:
          "Software designed around the way your business actually works.",
        examples: ["Dashboards", "Internal tools", "Business automation"],
        pricing: "Quoted based on scope",
      },
    ],
  },
  work: {
    heading: "See it in action.",
    subhead: "Example projects that show what your website could look like.",
    viewProject: "View project",
    conceptualProjectBadge: "Example project",
    projects: [
      {
        id: "clinic",
        name: "Meridian Health",
        vertical: "Clinic Website",
        summary:
          "Services, online booking and a mobile-first patient experience.",
        description:
          "A modern clinic website where patients find a doctor, pick a time and book a visit in three steps — from any phone.",
        tags: ["Website", "Online booking", "Mobile-first"],
      },
      {
        id: "restaurant",
        name: "Ember & Oak",
        vertical: "Restaurant Website",
        summary: "Menu, reservations and a polished mobile experience.",
        description:
          "A restaurant website built around the menu and the room — guests browse dishes, see the space and reserve a table in seconds.",
        tags: ["Website", "Reservations", "Menu"],
      },
      {
        id: "consulting",
        name: "Kestrel Partners",
        vertical: "Professional Services",
        summary: "Clear positioning and a streamlined inquiry experience.",
        description:
          "A professional services website that explains what the firm does, builds trust, and turns visitors into qualified inquiries.",
        tags: ["Website", "Inquiry form", "Positioning"],
      },
    ],
    previewContent: {
      clinic: {
        logo: "Meridian Health",
        navLinks: ["Services", "Doctors"],
        headline: "Book your visit online",
        subtext: "See real-time availability for any doctor",
        cta: "Book now",
        steps: ["Choose a doctor", "Pick a time", "Confirm your visit"],
      },
      restaurant: {
        logo: "Ember & Oak",
        cta: "Reserve a table",
        menu: [
          { item: "Braised Short Rib", price: "$28" },
          { item: "Salmon Tacos", price: "$24" },
          { item: "Wild Mushroom Risotto", price: "$19" },
        ],
      },
      consulting: {
        logo: "Kestrel Partners",
        navLinks: ["Services", "Team", "Contact"],
        headline: "Strategic advisory for growing companies",
        subtext: "Clarity and execution for complex decisions",
        practiceAreas: ["Strategy", "Operations", "Finance"],
      },
    },
    caseStudy: {
      conceptualNote:
        "Example project — a realistic demonstration built to show the approach, not a client's live site.",
      backToWork: "Back to all work",
      approachHeading: "What makes it work",
      resultsHeading: "Results",
    },
    caseStudies: {
      clinic: [
        {
          title: "Booking in three steps",
          description:
            "Patients pick a service, a doctor and a time — no phone calls, no back-and-forth.",
        },
        {
          title: "Everything a patient looks for",
          description:
            "Services, doctors, location and hours are easy to find on any phone.",
        },
        {
          title: "Accessible to everyone",
          description:
            "Works with a keyboard and with screen readers, so no patient is left out.",
        },
      ],
      restaurant: [
        {
          title: "A menu you can update yourself",
          description:
            "Dishes and prices are real content, not a PDF — change them any time without a redesign.",
        },
        {
          title: "Designed for phones first",
          description:
            "Most guests arrive from Instagram or Maps. The site is built for exactly that moment.",
        },
        {
          title: "Fast, even on slow connections",
          description:
            "Pages load instantly so nobody gives up before seeing the menu.",
        },
      ],
      consulting: [
        {
          title: "Leads with what the firm does",
          description:
            "Practice areas are the first thing a visitor sees — no vague hero copy.",
        },
        {
          title: "Professional without being generic",
          description:
            "A calm, credible layout that suits a services firm and its clients.",
        },
        {
          title: "A smarter contact form",
          description:
            "Visitors say what they need before the first call, so every conversation starts prepared.",
        },
      ],
    },
    clinicShowcase: {
      badge: "Clinic website example",
      tagline: "A modern clinic website your patients will actually use.",
      highlights: [
        "Online booking in three steps",
        "Doctors and services at a glance",
        "WhatsApp and directions one tap away",
        "Looks great on every phone",
      ],
      servicesHeading: "Services",
      services: [
        { name: "General consultation", note: "Same-week availability" },
        { name: "Pediatrics", note: "Care for kids of all ages" },
        { name: "Dermatology", note: "Skin, hair and nail health" },
        { name: "Follow-up visit", note: "Quick check-ins after treatment" },
      ],
      doctorsHeading: "Our doctors",
      doctorsIntro: "Every doctor has a profile patients can book directly.",
      mobileHeading: "Built for phones",
      mobileBody:
        "Most patients book from their phone. Booking, WhatsApp and directions are always one tap away.",
      locationHeading: "Find us",
      address: "12 Calle 1-25, Zone 10 · Guatemala City",
      hours: "Mon–Fri 8:00–18:00 · Sat 8:00–13:00",
      phone: "+502 2222 0000",
      whatsapp: "Message on WhatsApp",
      directions: "Get directions",
      trustHeading: "Why patients trust it",
      trustPoints: [
        "Real availability — no double bookings",
        "Automatic reminders reduce no-shows",
        "Private by design — no medical information is collected",
      ],
      demoNote:
        "Fictional clinic, doctors and contact details — nothing on this page is real or stored.",
    },
    clinicBooking: {
      heading: "Book a visit",
      subhead:
        "Try the booking flow — pick a service and doctor, choose a time, and confirm.",
      steps: {
        service: "Choose a service",
        doctor: "Choose a doctor",
        schedule: "Pick a day and time",
        contact: "Your details",
      },
      services: [
        { id: "consultation", label: "General Consultation" },
        { id: "pediatrics", label: "Pediatrics" },
        { id: "dermatology", label: "Dermatology" },
        { id: "followup", label: "Follow-up Visit" },
      ],
      doctors: [
        { id: "ruiz", name: "Dr. Elena Ruiz", specialty: "General Medicine" },
        { id: "chen", name: "Dr. Marcus Chen", specialty: "Pediatrics" },
        { id: "patel", name: "Dr. Aisha Patel", specialty: "Dermatology" },
      ],
      contactFields: { name: "Full name", email: "Email" },
      disclosure: "Demo only — no information is stored or sent anywhere.",
      back: "Back",
      next: "Next",
      confirm: "Confirm visit",
      confirmedHeading: "Visit booked",
      confirmedBody: (service, doctor, day, time) =>
        `${service} with ${doctor} — ${day} at ${time}.`,
      bookAnother: "Book another visit",
      summary: { service: "Service", doctor: "Doctor", when: "When" },
    },
    // No real client results exist yet — left empty rather than filled
    // with placeholder numbers. See the type comment in dictionary.ts.
    caseStudyResults: {},
    caseStudyCta: {
      heading: "Want something like this for your business?",
      body: "Tell me about your project and I'll reply within one business day.",
      primaryCta: "Start a Project",
    },
    reservationDemo: {
      heading: "Reserve a table",
      subhead:
        "Try the reservation flow — pick a party size, choose a date and time, and confirm.",
      steps: {
        partySize: "Party size",
        date: "Choose a date",
        time: "Choose a time",
        summary: "Confirm reservation",
      },
      partySizes: [
        { id: "2", label: "2 guests" },
        { id: "4", label: "4 guests" },
        { id: "6", label: "6 guests" },
        { id: "8", label: "8+ guests" },
      ],
      back: "Back",
      next: "Next",
      confirm: "Confirm reservation",
      confirmedHeading: "Reservation confirmed",
      confirmedBody: (partySize, day, time) =>
        `Table for ${partySize} — ${day} at ${time}.`,
      bookAnother: "Make another reservation",
      summaryLabels: { partySize: "Party size", when: "When" },
      disclosure: "Demo only — no reservation is actually made or stored.",
    },
    leadQualificationDemo: {
      heading: "Request a consultation",
      subhead:
        "Try the inquiry flow — say what you need, and the firm follows up prepared.",
      steps: {
        service: "What do you need help with?",
        companySize: "Company size",
        timeline: "Timeline",
        summary: "Summary",
      },
      companySizes: [
        { id: "1-10", label: "1–10 employees" },
        { id: "11-50", label: "11–50 employees" },
        { id: "51-200", label: "51–200 employees" },
        { id: "200+", label: "200+ employees" },
      ],
      back: "Back",
      next: "Next",
      summaryHeading: "Based on what you shared",
      summaryLabels: {
        service: "Service",
        companySize: "Company size",
        timeline: "Timeline",
      },
      disclosure: "Demo only — no information is submitted anywhere.",
    },
  },
  growth: {
    heading: "Your website can grow with your business.",
    subhead: "Start with what you need today. Add more when you're ready.",
    closing: "Start simple. Add more when your business needs it.",
    stages: [
      {
        id: "online",
        eyebrow: "Stage 1",
        title: "Get online",
        label: "Professional website",
        description: "Help customers find you and understand what you offer.",
      },
      {
        id: "customers",
        eyebrow: "Stage 2",
        title: "Get customers",
        label: "Bookings & inquiries",
        description: "Make it easy for customers to contact or book with you.",
      },
      {
        id: "sell",
        eyebrow: "Stage 3",
        title: "Sell online",
        label: "Payments & commerce",
        description: "Let customers buy or pay directly online.",
      },
      {
        id: "smarter",
        eyebrow: "Stage 4",
        title: "Work smarter",
        label: "Custom tools",
        description:
          "Automate repetitive work and manage your business more efficiently.",
      },
    ],
    mockup: {
      brand: "Lumi Salon",
      navLinks: ["Services", "Team", "Contact"],
      headline: "Look and feel your best.",
      subtext: "Hair, nails and skincare in one place.",
      cta: "Contact us",
      ctaBook: "Book online",
      services: ["Haircut", "Color", "Nails"],
      whatsapp: "WhatsApp",
      bookingTitle: "Book an appointment",
      bookingTimes: ["9:00", "10:30", "12:00"],
      bookingConfirm: "Confirm",
      productTitle: "Gift card",
      productPrice: "Q250",
      pay: "Pay now",
      paid: "Payment received",
      dashboardTitle: "Today",
      stats: [
        { label: "Appointments", value: "14" },
        { label: "Sales", value: "Q3,450" },
        { label: "New clients", value: "5" },
      ],
      scheduleTitle: "Upcoming",
      schedule: [
        { name: "María P.", time: "10:30", status: "Reminder sent" },
        { name: "Ana L.", time: "11:00", status: "Confirmed" },
        { name: "Sofía R.", time: "12:30", status: "Reminder sent" },
      ],
    },
  },
  verticals: {
    heading: "Built for businesses like yours.",
    items: [
      {
        id: "healthcare",
        title: "Healthcare",
        description: "Clinics & private practices",
      },
      {
        id: "hospitality",
        title: "Hospitality",
        description: "Restaurants & stays",
      },
      {
        id: "professional",
        title: "Professional Services",
        description: "Consultants, firms & specialists",
      },
      {
        id: "growing",
        title: "Growing Businesses",
        description: "Teams that need custom digital tools",
      },
    ],
  },
  process: {
    heading: "How it works.",
    subhead: "Three simple steps, no surprises.",
    steps: [
      {
        number: "01",
        title: "Tell me what you need",
        description: "We define your goals, scope and budget.",
      },
      {
        number: "02",
        title: "I design and build it",
        description: "You see progress throughout the project.",
      },
      {
        number: "03",
        title: "We launch",
        description: "Your project goes live, with optional ongoing support.",
      },
    ],
  },
  about: {
    heading: "Hi, I'm Javier.",
    body: "I'm a software engineer who builds websites and software for businesses that need more than an off-the-shelf solution.",
    points: [
      {
        title: "Direct communication",
        description: "You talk to the person actually building your project.",
      },
      {
        title: "Technical ownership",
        description: "One person responsible from the first idea to launch.",
      },
      {
        title: "End-to-end development",
        description: "Design, build and launch — all in one place.",
      },
    ],
    photoAlt: "Javier López",
  },
  labTeaser: {
    heading: "Want to see what I can build?",
    body: "Small working demos you can click around — no sign-up.",
    cta: "Explore the Interactive Lab",
    demos: [
      {
        id: "booking",
        title: "Booking demo",
        description: "Pick a day and time, like your customers would.",
      },
      {
        id: "dashboard",
        title: "Dashboard demo",
        description: "Your business numbers at a glance.",
      },
      {
        id: "integration",
        title: "Automation demo",
        description: "A request moving through your tools on its own.",
      },
    ],
  },
  lab: {
    heading: "Interactive Lab",
    subhead:
      "Small, real interactions — not screenshots. Everything here runs in your browser with sample data.",
    backHome: "Back to home",
    tabs: {
      booking: "Booking",
      dashboard: "Dashboard",
      integration: "Automation",
    },
    demoBadge: "Demo · Sample data",
    dashboard: {
      dateRangeAriaLabel: "Date range",
      ranges: [
        { id: "7d", label: "7 days" },
        { id: "30d", label: "30 days" },
        { id: "1y", label: "1 year" },
      ],
      stats: {
        revenue: "Revenue",
        visitors: "Visitors",
        conversionRate: "Conversion rate",
        bookings: "Bookings",
      },
      chartLabels: {
        Mon: "Mon",
        Tue: "Tue",
        Wed: "Wed",
        Thu: "Thu",
        Fri: "Fri",
        Sat: "Sat",
        Sun: "Sun",
        W1: "W1",
        W2: "W2",
        W3: "W3",
        W4: "W4",
        Jan: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Apr: "Apr",
        May: "May",
        Jun: "Jun",
        Jul: "Jul",
        Aug: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dec: "Dec",
      },
      chartAriaLabel: (from, to, min, max) =>
        `Chart from ${from} to ${to}, values from ${min} to ${max}`,
      chartPointAriaLabel: (label, value) => `${label}: ${value}`,
    },
    booking: {
      selectDay: "Select a day",
      availableTimes: "Available times",
      booked: "Booked",
      bookAnother: "Book another",
      confirmBooking: "Confirm booking",
      dayAriaLabel: (monthLabel, day, available) =>
        `${monthLabel} ${day}${available ? "" : ", unavailable"}`,
      weekdayLabels: ["S", "M", "T", "W", "T", "F", "S"],
    },
    integration: {
      trigger: "Send a request",
      running: "Running…",
      success: "Request completed",
      diagramAriaLabel:
        "Diagram of a request traveling from the website through the API to CRM and Payments, then to the database, and back to the website.",
    },
  },
  contact: {
    heading: "Let's build something for your business.",
    body: "Send a message, or request a quote in two minutes.",
    whatsapp: "WhatsApp Me",
    whatsappMessage: "Hi Javier, I'd like to talk about a project.",
    email: "Email me",
    replyNote: "I reply within one business day.",
  },
  configurator: {
    heading: "Get a quote",
    subhead: "A few quick questions — about two minutes, no commitment.",
    steps: [
      { key: "projectType", label: "What do you need?" },
      { key: "needs", label: "What should it help you do?" },
      { key: "budget", label: "Budget" },
      { key: "timeline", label: "Timeline" },
      { key: "contact", label: "Your details" },
      { key: "review", label: "Review & send" },
    ],
    back: "Back",
    next: "Next",
    sending: "Sending…",
    requestProposal: "Send request",
    successTitle: "Thanks — I got it.",
    successBody: (email) => `I'll reply at ${email} within one business day.`,
    genericError:
      "Something went wrong sending your request. Please try again.",
    stepIndicator: (current, total, label) =>
      `Step ${current} of ${total} — ${label}`,
    contact: {
      heading: "How can I reach you?",
      name: "Name",
      company: "Company",
      email: "Email",
      whatsapp: "WhatsApp",
      optional: "Optional",
      honeypotLabel: "Leave this field empty",
    },
    needs: {
      heading: "What should your website help you do?",
      selectAllThatApply: "Choose everything that applies.",
    },
    budgetStep: {
      heading: "What budget do you have in mind?",
      helperText:
        "An estimate is enough — it helps me recommend the right solution.",
    },
    review: {
      heading: "Does this look right?",
      editLabel: "Edit",
      sectionLabels: {
        projectType: "Project",
        needs: "Goals",
        budget: "Budget",
        timeline: "Timeline",
        contact: "Contact details",
      },
      notProvided: "Not provided",
    },
    options: {
      projectType: [
        { id: "website", label: "A new website" },
        { id: "online", label: "Bookings, payments or online sales" },
        { id: "software", label: "Custom software for my business" },
        { id: "not-sure", label: "Not sure yet" },
      ],
      needs: [
        { id: "inquiries", label: "Get more inquiries" },
        { id: "bookings", label: "Accept bookings" },
        { id: "sell", label: "Sell online" },
        { id: "payments", label: "Accept payments" },
        { id: "accounts", label: "Give customers an account" },
        { id: "automation", label: "Save time through automation" },
        { id: "other", label: "Something else" },
      ],
      budget: [
        { id: "tier-1", label: "Q7,500 – Q15,000" },
        { id: "tier-2", label: "Q15,000 – Q30,000" },
        { id: "tier-3", label: "Q30,000 – Q60,000" },
        { id: "tier-4", label: "Q60,000+" },
        { id: "guidance", label: "I need guidance on the budget" },
      ],
      timeline: [
        { id: "asap", label: "As soon as possible" },
        { id: "1-2-months", label: "1–2 months" },
        { id: "3-6-months", label: "3–6 months" },
        { id: "flexible", label: "Flexible / not sure" },
      ],
    },
  },
  faq: {
    heading: "Common questions.",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "Professional website projects typically start around Q7,500. More complex software is quoted based on scope.",
      },
      {
        question: "How long does it take?",
        answer:
          "Most professional websites take about 2–4 weeks. Larger applications may take longer depending on scope.",
      },
      {
        question: "What if I don't know exactly what I need?",
        answer: "That's okay. We can define the right solution together.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes. Optional ongoing support and maintenance plans are available.",
      },
    ],
  },
  footer: {
    tagline: "Websites and software for businesses that want to grow.",
    footerAriaLabel: "Footer",
    lab: "Interactive Lab",
    startAProject: "Start a Project",
    copyright: (year) => `© ${year} Javier López Digital. All rights reserved.`,
  },
  notFound: {
    eyebrow: "404",
    heading: "This page doesn't exist.",
    body: "The page you're looking for was moved, renamed, or never existed.",
    backHome: "Back to home",
  },
  errorPage: {
    eyebrow: "Error",
    heading: "Something went wrong.",
    body: "An unexpected error occurred. You can try again, or head back to the homepage.",
    tryAgain: "Try again",
    backHome: "Back to home",
  },
  validation: {
    projectTypeRequired: "Select an option to continue",
    needsRequired: "Select at least one",
    budgetRequired: "Select a budget range",
    timelineRequired: "Select a timeline",
    nameRequired: "Name is required",
    emailInvalid: "Enter a valid email address",
  },
  localeSwitcher: {
    ariaLabel: "Language",
  },
  seo: {
    title: "Javier López Digital — Websites & Software for Your Business",
    description:
      "Professional websites, online booking, payments and custom software for clinics, restaurants, service companies and growing businesses.",
    keywords: [
      "business website",
      "website design",
      "online booking system",
      "custom software",
      "web developer",
    ],
    labTitle: "Interactive Lab",
    labDescription:
      "Small working demos — a booking screen, a business dashboard and an automated workflow — running live in your browser.",
    ogHeadline: "Websites and software that help your business grow.",
    ogTagline:
      "Professional websites, online booking and custom tools — designed and built for businesses like yours.",
    structuredDataAreaServed: "Worldwide",
    structuredDataServiceTypes: [
      "Website Design",
      "Online Booking Systems",
      "E-commerce",
      "Custom Software",
    ],
  },
} satisfies Dictionary;
