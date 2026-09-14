import type { Dictionary } from "./dictionary";

export const en = {
  nav: {
    links: [
      { href: "#work", label: "Work" },
      { href: "#services", label: "Services" },
      { href: "#lab", label: "Lab" },
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
    heading: "We build digital experiences that work.",
    subhead: "Websites · Web Apps · Software · Automation",
    ctaPrimary: "Start a Project",
    ctaExplore: "Explore",
  },
  evolution: {
    heading: "From website to software.",
    subhead: "The same interface, evolving as your business grows.",
    stages: [
      {
        id: "landing",
        title: "Simple Website",
        description: "A clean landing page — one message, one action.",
      },
      {
        id: "business",
        title: "Business Website",
        description: "Navigation, services, and real content take shape.",
      },
      {
        id: "app",
        title: "Web Application",
        description: "The interface becomes a real, working application.",
      },
      {
        id: "connected",
        title: "Connected Platform",
        description: "Payments, data, and automation connect to it.",
      },
      {
        id: "custom",
        title: "Custom Software",
        description: "Whatever your business needs.",
      },
    ],
  },
  services: {
    heading: "What we build.",
    subhead: "Four categories. One team, end to end.",
    categories: [
      {
        id: "websites",
        title: "Websites",
        description: "Marketing sites and storefronts built to convert.",
        items: [
          "Landing pages",
          "Business websites",
          "Corporate websites",
          "E-commerce",
        ],
      },
      {
        id: "web-apps",
        title: "Web Applications",
        description: "Real software your team and customers use daily.",
        items: [
          "Dashboards",
          "Booking systems",
          "Customer portals",
          "Internal tools",
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        description: "Connecting the tools your business already runs on.",
        items: ["Payments", "APIs", "CRM", "Email & WhatsApp"],
      },
      {
        id: "custom",
        title: "Custom Software",
        description: "For requirements that don't fit a standard category.",
        items: [
          "Architecture & scoping",
          "Bespoke builds",
          "Ongoing partnership",
        ],
      },
    ],
  },
  lab: {
    heading: "Try it yourself.",
    subhead: "Small, real interactions — not screenshots.",
    tabs: {
      booking: "Booking",
      dashboard: "Dashboard",
      integration: "Integration",
    },
    demoBadge: "Demo · Sample Data",
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
    },
    booking: {
      selectDay: "Select a day",
      availableTimes: "Available times",
      booked: "Booked",
      bookAnother: "Book another",
      confirmBooking: "Confirm booking",
      dayAriaLabel: (monthLabel, day, available) =>
        `${monthLabel} ${day}${available ? "" : ", unavailable"}`,
      dateLocale: "en-US",
    },
    integration: {
      trigger: "Trigger request",
      running: "Running…",
      diagramAriaLabel:
        "Diagram of a request traveling from the website through the API to CRM and Payments, then to the database, and back to the website.",
    },
  },
  work: {
    heading: "Selected work.",
    subhead:
      "Conceptual projects built to show range — real case studies coming soon.",
    conceptualProjectBadge: "Conceptual Project",
    previewDeviceAriaLabel: "Preview device",
    deviceModes: { desktop: "Desktop", mobile: "Mobile" },
    projects: [
      {
        id: "clinic",
        name: "Meridian Health",
        vertical: "Medical Clinic",
        description:
          "A booking-first website that gets patients from search to a scheduled appointment in three steps.",
        tags: ["Website", "Online Booking", "Responsive Design"],
      },
      {
        id: "restaurant",
        name: "Ember & Oak",
        vertical: "Restaurant",
        description:
          "A reservation-driven site built around the menu and the room — fast, visual, and easy to update.",
        tags: ["Website", "Reservations", "CMS"],
      },
      {
        id: "consulting",
        name: "Kestrel Partners",
        vertical: "Professional Services",
        description:
          "A corporate site that positions the firm for enterprise clients, with a lead-qualifying contact flow.",
        tags: ["Website", "Lead Capture", "CMS"],
      },
    ],
  },
  process: {
    heading: "How we work.",
    subhead: "Four steps, start to finish — no surprises in between.",
    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "A short project brief — goals, requirements, and constraints — before any design work starts.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "The experience and system get mapped out, so structure is decided before code is written.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Engineered in the open — you see progress as it happens, not just at the end.",
      },
      {
        number: "04",
        title: "Launch & Support",
        description:
          'Shipped, measured, and maintained — software is never really "done" at launch.',
      },
    ],
  },
  configurator: {
    heading: "Let's scope your project.",
    subhead: "Five quick questions — no commitment, just a clearer picture.",
    steps: [
      { key: "projectType", label: "What do you want to build?" },
      { key: "needs", label: "What does your business need?" },
      { key: "budget", label: "Approximate budget" },
      { key: "timeline", label: "Timeline" },
      { key: "contact", label: "Your details" },
    ],
    back: "Back",
    next: "Next",
    sending: "Sending…",
    requestProposal: "Request Proposal",
    successTitle: "Thanks — that's in.",
    successBody: (email) =>
      `We'll follow up at ${email} within one business day.`,
    genericError:
      "Something went wrong sending your request. Please try again.",
    stepIndicator: (current, total, label) =>
      `Step ${current} of ${total} — ${label}`,
    contact: {
      heading: "How can we reach you?",
      name: "Name",
      company: "Company",
      email: "Email",
      whatsapp: "WhatsApp",
      optional: "Optional",
      honeypotLabel: "Leave this field empty",
    },
    needs: {
      heading: "What does your business need?",
      selectAllThatApply: "Select all that apply.",
    },
    options: {
      projectType: [
        { id: "website", label: "Website" },
        { id: "ecommerce", label: "E-commerce" },
        { id: "web-app", label: "Web application" },
        { id: "custom-software", label: "Custom software" },
        { id: "not-sure", label: "Not sure yet" },
      ],
      needs: [
        { id: "bookings", label: "Online bookings" },
        { id: "payments", label: "Payments" },
        { id: "accounts", label: "Customer accounts" },
        { id: "dashboard", label: "Admin dashboard" },
        { id: "whatsapp", label: "WhatsApp" },
        { id: "crm", label: "CRM integration" },
        { id: "api", label: "API integrations" },
        { id: "analytics", label: "Analytics" },
        { id: "automation", label: "Automation" },
        { id: "other", label: "Something else" },
      ],
      budget: [
        { id: "3-5k", label: "$3k – $5k" },
        { id: "5-10k", label: "$5k – $10k" },
        { id: "10-25k", label: "$10k – $25k" },
        { id: "25k-plus", label: "$25k+" },
      ],
      timeline: [
        { id: "asap", label: "As soon as possible" },
        { id: "1-2-months", label: "1–2 months" },
        { id: "3-6-months", label: "3–6 months" },
        { id: "flexible", label: "Flexible / not sure" },
      ],
    },
  },
  about: {
    heading: "One person, full-stack.",
    body: [
      "This site is built and maintained by a single developer — not a large agency, and not a no-code template. Every project gets direct, hands-on engineering from start to finish.",
      "The same tools and techniques shown throughout this site — modern React, careful performance work, real accessibility — are what get used on client projects too.",
    ],
    principles: [
      {
        title: "Direct communication",
        description:
          "You talk to the person actually building it — no account managers, no hand-offs.",
      },
      {
        title: "Modern engineering",
        description:
          "The same stack demonstrated across this site: Next.js, TypeScript, and production-grade tooling.",
      },
      {
        title: "Built to last",
        description:
          "Maintainable code and clear structure, not just something that works on launch day.",
      },
    ],
  },
  faq: {
    heading: "Questions, answered.",
    items: [
      {
        question: "How long does a project take?",
        answer:
          "A focused marketing website typically takes 2–4 weeks. Web applications and custom software vary more — usually 6–12 weeks depending on scope. Timeline is one of the questions in the project configurator above, so estimates stay grounded in what you're actually building.",
      },
      {
        question: "What does a project cost?",
        answer:
          "It depends entirely on scope — a landing page and a custom platform aren't priced the same way. The configurator's budget step gives a starting range, and every project gets a proposal with specifics before any work begins.",
      },
      {
        question: "I'm not sure exactly what I need — can we still talk?",
        answer:
          'Yes. "Not sure yet" is one of the options in the project configurator for exactly this reason. Most projects start as a rough idea and get scoped together.',
      },
      {
        question: "Do you only build websites, or full applications too?",
        answer:
          "Both, plus the integrations and automation in between — payments, CRMs, booking systems, admin dashboards. The Interactive Lab and Services sections above show the range concretely rather than just listing it.",
      },
      {
        question: "Is there support after launch?",
        answer:
          "Yes. Launch isn't the finish line — ongoing support and iteration are part of how projects are scoped, not an afterthought bolted on later.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "Modern, production-grade tools — Next.js, TypeScript, and Tailwind CSS form the default stack, with the specific integrations (payments, CRM, automation) chosen per project rather than forced into a one-size-fits-all template.",
      },
    ],
  },
  finalCta: {
    heading: "Ready to build something?",
    body: "Tell us what you're working on — the project configurator takes about two minutes.",
    cta: "Start a Project",
  },
  footer: {
    tagline:
      "Websites, web applications, and custom software — designed and engineered end to end.",
    footerAriaLabel: "Footer",
    startAProject: "Start a Project",
    copyright: (year) => `© ${year} JL. All rights reserved.`,
    builtWith: "Built with Next.js, TypeScript, and Tailwind CSS.",
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
    title: "Javier López — Software Development",
    description:
      "Premium software development studio — websites, web applications, and custom software.",
    keywords: [
      "web development",
      "web application development",
      "custom software development",
      "Next.js developer",
      "software engineer",
    ],
    ogHeadline: "We build digital experiences that work.",
    ogTagline: "Websites · Web Apps · Software · Automation",
    structuredDataServiceTypes: [
      "Web Development",
      "Web Application Development",
      "Custom Software Development",
      "System Integration",
    ],
  },
} satisfies Dictionary;
