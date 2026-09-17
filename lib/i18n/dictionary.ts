export interface NavLinkText {
  href: string;
  label: string;
}

export interface ConfiguratorOptionText {
  id: string;
  label: string;
}

export interface Dictionary {
  // BCP 47 tag used for every Intl.NumberFormat/DateTimeFormat call across
  // the app, so number/date formatting conventions never need a second,
  // per-component locale mapping.
  intlLocale: string;
  nav: {
    // In-page fragments ("#work") — components prefix the locale so they
    // resolve from any route, not just the homepage.
    links: NavLinkText[];
    startAProject: string;
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
    primaryAriaLabel: string;
  };
  skipLink: string;
  hero: {
    heading: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    // One short line under the CTAs naming the kinds of businesses the
    // site is for — the fastest way to tell a visitor "this is for you".
    audience: string;
    // Copy for the hero illustration: a realistic (fictional) small
    // business website plus a phone showing a booking. Real words rather
    // than abstract bars — viewers need to recognize "a website" instantly.
    showcase: {
      brand: string;
      navLinks: string[];
      headline: string;
      subtext: string;
      cta: string;
      services: string[];
      phone: { title: string; detail: string; with: string; cta: string };
      toast: { title: string; body: string };
    };
  };
  services: {
    heading: string;
    subhead: string;
    // Caption inside the "Bookings & Online Sales" illustration, on a
    // sample customer payment — keeps the amount from reading as this
    // site's own pricing.
    paymentLabel: string;
    categories: {
      id: string;
      title: string;
      description: string;
      examples: string[];
      // "Starting around Q7,500" / "Quoted by scope" — a price signal per
      // category so cost is answered on the homepage, not hidden in a FAQ.
      pricing: string;
    }[];
  };
  work: {
    heading: string;
    subhead: string;
    viewProject: string;
    conceptualProjectBadge: string;
    projects: {
      id: string;
      name: string;
      // Short, customer-facing type label: "Clinic Website".
      vertical: string;
      // One line for the homepage card.
      summary: string;
      // Longer description for the case study page and its metadata.
      description: string;
      tags: string[];
    }[];
    // Real, readable copy for each project's mockup — each preview is a
    // concrete little scene of the actual business (a booking flow, a
    // menu, a practice-areas grid) rather than placeholder shapes.
    previewContent: {
      clinic: {
        logo: string;
        navLinks: string[];
        headline: string;
        subtext: string;
        cta: string;
        steps: string[];
      };
      restaurant: {
        logo: string;
        cta: string;
        menu: { item: string; price: string }[];
      };
      consulting: {
        logo: string;
        navLinks: string[];
        headline: string;
        subtext: string;
        practiceAreas: string[];
      };
    };
    caseStudy: {
      conceptualNote: string;
      backToWork: string;
      // Section headings, shared by every case study so the three pages
      // read as one format. Business questions first; the engineering
      // notes sit last, behind a disclosure.
      goalHeading: string;
      experienceHeading: string;
      featuresHeading: string;
      decisionsHeading: string;
      technicalHeading: string;
      technicalNote: string;
      resultsHeading: string;
      // Label on the highlight card that points at the page's own live
      // demo (the booking flow, the reservation flow, the inquiry flow).
      tryItLabel: string;
    };
    // Keyed by project id (see WORK_PROJECT_IDS in lib/content/work.ts).
    // Business-first: what the (fictional) business needed, what its
    // customers can do, the features that matter to them, and why the
    // experience is shaped that way. `technical` is the only place
    // implementation vocabulary is allowed, and it renders collapsed.
    caseStudies: Record<
      string,
      {
        goal: string;
        experience: string;
        features: { title: string; description: string }[];
        decisions: { title: string; description: string }[];
        technical: { title: string; description: string }[];
      }
    >;
    // The Meridian clinic page doubles as a sales demo to send directly to
    // a clinic owner — everything here is fictional (no real doctors,
    // address, or phone), and nothing collects medical information.
    clinicShowcase: {
      badge: string;
      tagline: string;
      highlights: string[];
      servicesHeading: string;
      services: { name: string; note: string }[];
      doctorsHeading: string;
      doctorsIntro: string;
      mobileHeading: string;
      mobileBody: string;
      locationHeading: string;
      address: string;
      hours: string;
      phone: string;
      whatsapp: string;
      directions: string;
      trustHeading: string;
      trustPoints: string[];
      demoNote: string;
    };
    // The Meridian clinic page's own booking flow (app/[locale]/work/
    // clinic) — fictional service/provider content only, no real patient
    // data collected or stored anywhere in this flow.
    clinicBooking: {
      heading: string;
      subhead: string;
      steps: {
        service: string;
        doctor: string;
        schedule: string;
        contact: string;
      };
      services: { id: string; label: string }[];
      doctors: { id: string; name: string; specialty: string }[];
      contactFields: { name: string; email: string };
      disclosure: string;
      back: string;
      next: string;
      confirm: string;
      confirmedHeading: string;
      confirmedBody: (
        service: string,
        doctor: string,
        day: string,
        time: string,
      ) => string;
      bookAnother: string;
      summary: { service: string; doctor: string; when: string };
    };
    // Real testimonial/results data for a case study, keyed by project id.
    // Empty today (see CaseStudyContent in lib/content/work.ts) — the
    // Testimonial/ResultsMetrics components only render when an entry's
    // fields are actually populated, so nothing fabricated can ship by
    // accident. Add an entry here only once real, verifiable content
    // exists for a project.
    caseStudyResults: Record<
      string,
      {
        testimonial?: { quote: string; author: string; role: string };
        results?: { label: string; value: string }[];
      }
    >;
    // Shown at the end of every case study via the shared CaseStudyCTA
    // component — never lets a case study page end passively at the footer.
    caseStudyCta: {
      heading: string;
      body: string;
      primaryCta: string;
    };
    // Ember & Oak's case-study-only reservation demo — party size, date,
    // time, summary. No backend: useReducer state only, discarded on
    // reset, same pattern as the clinic booking flow.
    reservationDemo: {
      heading: string;
      subhead: string;
      steps: { partySize: string; date: string; time: string; summary: string };
      partySizes: { id: string; label: string }[];
      back: string;
      next: string;
      confirm: string;
      confirmedHeading: string;
      confirmedBody: (partySize: string, day: string, time: string) => string;
      bookAnother: string;
      summaryLabels: { partySize: string; when: string };
      disclosure: string;
    };
    // Kestrel's case-study-only lead-qualification demo — service needed
    // (reuses previewContent.consulting.practiceAreas), company size,
    // timeline (reuses configurator.options.timeline), then a summary.
    leadQualificationDemo: {
      heading: string;
      subhead: string;
      steps: {
        service: string;
        companySize: string;
        timeline: string;
        summary: string;
      };
      companySizes: { id: string; label: string }[];
      back: string;
      next: string;
      summaryHeading: string;
      summaryLabels: { service: string; companySize: string; timeline: string };
      disclosure: string;
    };
  };
  // "Your website can grow with your business" — four stages told in
  // customer language (get online → get customers → sell online → work
  // smarter). The stage text carries the meaning; the illustration is
  // decorative and the sequence reads fine with animation disabled.
  growth: {
    heading: string;
    subhead: string;
    closing: string;
    stages: {
      id: string;
      eyebrow: string;
      title: string;
      label: string;
      description: string;
    }[];
    // Copy for the growth illustration — one fictional salon whose website
    // gains a booking panel, a payment, then a dashboard as stages advance.
    mockup: {
      brand: string;
      navLinks: string[];
      headline: string;
      subtext: string;
      cta: string;
      ctaBook: string;
      services: string[];
      whatsapp: string;
      bookingTitle: string;
      bookingTimes: string[];
      bookingConfirm: string;
      productTitle: string;
      productPrice: string;
      pay: string;
      paid: string;
      dashboardTitle: string;
      stats: { label: string; value: string }[];
      scheduleTitle: string;
      schedule: { name: string; time: string; status: string }[];
    };
  };
  verticals: {
    heading: string;
    items: { id: string; title: string; description: string }[];
  };
  process: {
    heading: string;
    subhead: string;
    steps: { number: string; title: string; description: string }[];
  };
  about: {
    heading: string;
    body: string;
    points: { title: string; description: string }[];
    photoAlt: string;
  };
  // Homepage teaser for the Interactive Lab, which lives on its own route
  // (/lab) so the more technical demos never crowd the sales page.
  labTeaser: {
    heading: string;
    body: string;
    cta: string;
    demos: { id: string; title: string; description: string }[];
  };
  lab: {
    heading: string;
    subhead: string;
    backHome: string;
    tabs: { booking: string; dashboard: string; integration: string };
    demoBadge: string;
    dashboard: {
      dateRangeAriaLabel: string;
      ranges: { id: string; label: string }[];
      stats: {
        revenue: string;
        visitors: string;
        conversionRate: string;
        bookings: string;
      };
      // Raw internal labels ("Mon", "W1", "Jan", ...) from dashboard-data.ts
      // map to their localized display text here, so the numeric dataset
      // never needs a second, locale-specific copy.
      chartLabels: Record<string, string>;
      chartAriaLabel: (
        from: string,
        to: string,
        min: string,
        max: string,
      ) => string;
      chartPointAriaLabel: (label: string, value: string) => string;
    };
    booking: {
      selectDay: string;
      availableTimes: string;
      booked: string;
      bookAnother: string;
      confirmBooking: string;
      dayAriaLabel: (
        monthLabel: string,
        day: number,
        available: boolean,
      ) => string;
      // Single-letter weekday column headers, Sunday-first (index matches
      // JS Date#getDay()).
      weekdayLabels: [string, string, string, string, string, string, string];
    };
    integration: {
      trigger: string;
      running: string;
      success: string;
      diagramAriaLabel: string;
    };
  };
  // The closing "Start a Project" section: quick contact options on one
  // side (WhatsApp, email) and the quote configurator on the other, so
  // nobody is forced through a multi-step form just to say hello.
  contact: {
    heading: string;
    body: string;
    whatsapp: string;
    // Pre-filled text for the wa.me link.
    whatsappMessage: string;
    email: string;
    // Shorter, more inviting wording for the same mailto: used where the
    // button sits beside other CTAs (the case-study closing section).
    emailShort: string;
    replyNote: string;
  };
  configurator: {
    heading: string;
    subhead: string;
    steps: { key: string; label: string }[];
    back: string;
    next: string;
    sending: string;
    requestProposal: string;
    successTitle: string;
    successBody: (email: string) => string;
    genericError: string;
    stepIndicator: (current: number, total: number, label: string) => string;
    contact: {
      heading: string;
      name: string;
      company: string;
      email: string;
      whatsapp: string;
      optional: string;
      honeypotLabel: string;
    };
    needs: {
      heading: string;
      selectAllThatApply: string;
    };
    budgetStep: {
      heading: string;
      helperText: string;
    };
    review: {
      heading: string;
      editLabel: string;
      sectionLabels: {
        projectType: string;
        needs: string;
        budget: string;
        timeline: string;
        contact: string;
      };
      notProvided: string;
    };
    options: {
      projectType: ConfiguratorOptionText[];
      needs: ConfiguratorOptionText[];
      budget: ConfiguratorOptionText[];
      timeline: ConfiguratorOptionText[];
    };
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    tagline: string;
    footerAriaLabel: string;
    lab: string;
    startAProject: string;
    copyright: (year: number) => string;
  };
  notFound: {
    eyebrow: string;
    heading: string;
    body: string;
    backHome: string;
  };
  errorPage: {
    eyebrow: string;
    heading: string;
    body: string;
    tryAgain: string;
    backHome: string;
  };
  validation: {
    projectTypeRequired: string;
    needsRequired: string;
    budgetRequired: string;
    timelineRequired: string;
    nameRequired: string;
    emailInvalid: string;
  };
  localeSwitcher: {
    ariaLabel: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    labTitle: string;
    labDescription: string;
    ogHeadline: string;
    ogTagline: string;
    structuredDataAreaServed: string;
    structuredDataServiceTypes: string[];
  };
}
