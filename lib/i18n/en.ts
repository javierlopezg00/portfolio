import type { Dictionary } from "./dictionary";

export const en = {
  intlLocale: "en-US",
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
    heading: "Websites are just the beginning.",
    subhead:
      "I design and build the software behind them — platforms, integrations, and automation for businesses that need more than a template.",
    ctaPrimary: "Start a Project",
    ctaExplore: "Explore",
  },
  whyCustom: {
    heading: "Built around your business.",
    subhead:
      "Off-the-shelf tools ask you to adapt to them. Custom software works the other way around.",
    items: [
      {
        title: "Fits your workflow",
        description:
          "Built around how your business actually operates, not a generic template's assumptions about it.",
      },
      {
        title: "Only what you need",
        description:
          "Every feature earns its place — nothing extra to learn, maintain, or pay for as the project grows.",
      },
      {
        title: "Built to evolve with your business",
        description:
          "As your business changes, the software changes with it — new features and integrations added when you actually need them.",
      },
    ],
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
    mockup: {
      logo: "Brand",
      navLinks: ["Home", "Services", "Contact"],
      heroHeadline: "Everything you need, in one place.",
      heroSubtext: "A simple site that says who you are.",
      heroButton: "Contact us",
      heroHighlights: [
        "Looks great on every device",
        "Fast and easy to navigate",
        "Designed around your brand",
      ],
      cards: [
        { title: "Services", subtitle: "What we offer" },
        { title: "About", subtitle: "Our story" },
        { title: "Contact", subtitle: "Get in touch" },
      ],
      dashboardStats: [
        { label: "Customers", value: "482" },
        { label: "Sales", value: "$12.4k" },
        { label: "Orders", value: "128" },
      ],
      dashboardChartLabel: "Weekly activity",
      dashboardDayLabels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      dashboardActivityLabel: "Recent orders",
      dashboardActivity: [
        { name: "Ava Martinez", status: "Completed" },
        { name: "Noah Chen", status: "Processing" },
        { name: "Liam Patel", status: "Completed" },
      ],
      dashboardConnectedLabel: "Connected to",
    },
  },
  services: {
    heading: "What I build.",
    subhead: "Four categories, one point of contact.",
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
    pricingSignal:
      "Professional website projects typically start around $1,000. Web applications and custom software are quoted based on scope.",
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
      trigger: "Trigger request",
      running: "Running…",
      success: "Request completed",
      diagramAriaLabel:
        "Diagram of a request traveling from the website through the API to CRM and Payments, then to the database, and back to the website.",
    },
  },
  whoIWorkWith: {
    heading: "Who I work with.",
    subhead:
      "Independent businesses, growing companies, and founders that need hands-on technical ownership.",
    items: [
      {
        title: "Service businesses",
        description:
          "Clinics, salons, consultancies, and agencies — anything booking-driven or client-facing.",
      },
      {
        title: "Local & regional businesses",
        description:
          "Restaurants, retail, and professional practices ready to move past a generic website builder.",
      },
      {
        title: "Founders & small teams",
        description:
          "Early-stage products that need a real engineer, not just a no-code prototype.",
      },
    ],
  },
  work: {
    heading: "Selected work.",
    subhead: "Conceptual projects built to show range.",
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
    previewContent: {
      clinic: {
        logo: "Meridian Health",
        navLinks: ["Services", "Doctors"],
        headline: "Book your visit online",
        subtext: "See real-time availability for any provider",
        cta: "Book now",
        steps: ["Choose a provider", "Pick a time", "Confirm your visit"],
      },
      restaurant: {
        logo: "Ember & Oak",
        cta: "Reserve a table",
        menu: [
          { item: "Braised Short Rib", price: "$28" },
          { item: "Roasted Salmon", price: "$24" },
          { item: "Wild Mushroom Risotto", price: "$19" },
        ],
      },
      consulting: {
        logo: "Kestrel Partners",
        navLinks: ["Services", "Team", "Contact"],
        headline: "Strategic advisory for growing enterprises",
        subtext: "Clarity and execution for complex decisions",
        practiceAreas: ["Strategy", "Operations", "Finance"],
      },
    },
    viewCaseStudy: "View case study",
    caseStudy: {
      conceptualNote:
        "Conceptual project — built to demonstrate the engineering and UX approach, not a client's live site.",
      backToWork: "Back to work",
      approachHeading: "Approach",
      resultsHeading: "Results",
    },
    caseStudies: {
      clinic: [
        {
          title: "Booking without friction",
          description:
            "A real day-and-time picker with locale-aware formatting and availability logic, not a static screenshot — the same interaction a scheduling widget actually needs to work.",
        },
        {
          title: "Content structured like a real practice",
          description:
            "Services, doctors, and a booking flow organized the way an actual clinic site needs to be, not a generic template with the logo swapped in.",
        },
        {
          title: "Accessible by default",
          description:
            "The calendar, the option cards, and the confirmation step are all keyboard-operable and screen-reader-labeled from the start, not retrofitted afterward.",
        },
      ],
      restaurant: [
        {
          title: "A menu that's actually structured content",
          description:
            "Items, prices, and categories modeled as real data rather than paragraphs of copy — the kind of structure that makes updating a menu later a content change, not a redesign.",
        },
        {
          title: "Built for the reflow, not just the layout",
          description:
            "The desktop and mobile previews are the same component responding to real container queries, not two hand-built versions that can drift out of sync.",
        },
        {
          title: "Fast by construction",
          description:
            "Static-first rendering and no unnecessary client JavaScript for content that doesn't need to be interactive.",
        },
      ],
      consulting: [
        {
          title: "Practice areas as the entry point",
          description:
            "The homepage leads with what the firm actually does, not a generic hero — practice areas are the first real content a visitor sees.",
        },
        {
          title: "Professional without being generic",
          description:
            "A restrained, text-led layout built to read as credible for a services firm, distinct from the more visual, consumer-facing patterns used for the clinic and restaurant projects.",
        },
        {
          title: "Same design system, different voice",
          description:
            "Built from the same component library as the rest of this site, proving the system flexes across verticals rather than needing a rebuild per project type.",
        },
      ],
    },
    clinicBooking: {
      heading: "Book a visit",
      subhead:
        "A working booking flow — pick a service and provider, choose a time, and confirm.",
      steps: {
        service: "Choose a service",
        doctor: "Choose a provider",
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
      summary: { service: "Service", doctor: "Provider", when: "When" },
    },
    // No real client results exist yet — left empty rather than filled
    // with placeholder numbers. See the type comment in dictionary.ts.
    caseStudyResults: {},
    caseStudyCta: {
      heading: "Need something like this for your business?",
      body: "Every project starts with a conversation — tell me what you're building, or reach out directly.",
      primaryCta: "Start a Project",
      secondaryCta: "Send me a message",
    },
    reservationDemo: {
      heading: "Reserve a table",
      subhead:
        "A working reservation flow — pick a party size, choose a date and time, and confirm.",
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
        "A quick qualification flow — tell me what you need, and I'll follow up.",
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
  process: {
    heading: "How I work.",
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
    heading: "Scope your project.",
    subhead: "A few quick questions — no commitment, just a clearer picture.",
    steps: [
      { key: "projectType", label: "What do you want to build?" },
      { key: "needs", label: "What does your business need?" },
      { key: "budget", label: "Approximate budget" },
      { key: "timeline", label: "Timeline" },
      { key: "contact", label: "Your details" },
      { key: "review", label: "Review & send" },
    ],
    back: "Back",
    next: "Next",
    sending: "Sending…",
    requestProposal: "Send Project Request",
    successTitle: "Thanks — that's in.",
    successBody: (email) =>
      `I'll follow up at ${email} within one business day.`,
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
      heading: "What does your business need?",
      selectAllThatApply: "Select all that apply.",
    },
    budgetStep: {
      heading: "What budget do you have in mind for the project?",
      helperText:
        "You don't need to have an exact budget. This helps me recommend the right solution for your project.",
    },
    review: {
      heading: "Review your project.",
      editLabel: "Edit",
      sectionLabels: {
        projectType: "Project type",
        needs: "Needs",
        budget: "Budget",
        timeline: "Timeline",
        contact: "Contact details",
      },
      notProvided: "Not provided",
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
        { id: "tier-1", label: "$1,000 – $2,000" },
        { id: "tier-2", label: "$2,000 – $4,000" },
        { id: "tier-3", label: "$4,000 – $8,000" },
        { id: "tier-4", label: "$8,000+" },
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
  about: {
    heading: "Direct collaboration. End-to-end ownership.",
    body: [
      "Hi, I'm Javier — a software engineer building websites and software for businesses that need more than an off-the-shelf solution.",
      "That means technical ownership from architecture through launch — across frontend, backend, integrations, and everything else the project actually needs, not just the parts that fit one specialty.",
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
          "Software that holds up — built with the same modern, production-grade tools demonstrated throughout this site.",
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
          "Every project includes a short warranty for launch-related fixes. Ongoing maintenance, monitoring, and improvements are available afterward as optional monthly plans — see the Maintenance section below for what that covers.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "Whatever gets the job done reliably — in practice that's usually Next.js, TypeScript, and Tailwind CSS, with the specific integrations (payments, CRM, automation) chosen per project rather than forced into a one-size-fits-all template.",
      },
    ],
  },
  maintenance: {
    heading: "Launch isn't the end.",
    subhead:
      "Every project includes a short launch warranty for fixes. Ongoing maintenance, monitoring, and improvements continue as optional monthly plans.",
    items: [
      {
        title: "Launch warranty",
        description:
          "Bug fixes and stability issues from the initial build, covered for a short window after launch at no extra cost.",
      },
      {
        title: "Monitoring & analytics",
        description:
          "Performance and error monitoring, available as an ongoing plan so issues get caught before customers notice.",
      },
      {
        title: "Iteration",
        description:
          "New features and improvements as the business grows, scoped and billed separately from the initial project.",
      },
    ],
  },
  finalCta: {
    heading: "Ready to build something?",
    body: "Tell me what you're working on — the project configurator takes about two minutes.",
    cta: "Start a Project",
  },
  secondaryContact: {
    prompt: "Prefer to talk first?",
    cta: "Send me a message",
  },
  footer: {
    tagline:
      "Websites, web applications, and custom software — designed and engineered end to end.",
    footerAriaLabel: "Footer",
    startAProject: "Start a Project",
    copyright: (year) => `© ${year} Javier López Digital. All rights reserved.`,
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
    title: "Javier López Digital — Software Development",
    description:
      "Premium software development studio — websites, web applications, and custom software.",
    keywords: [
      "web development",
      "web application development",
      "custom software development",
      "Next.js developer",
      "software engineer",
    ],
    ogHeadline: "Websites are just the beginning.",
    ogTagline:
      "I design and build the software behind them — platforms, integrations, and automation for businesses that need more than a template.",
    structuredDataAreaServed: "Worldwide",
    structuredDataServiceTypes: [
      "Web Development",
      "Web Application Development",
      "Custom Software Development",
      "System Integration",
    ],
  },
} satisfies Dictionary;
