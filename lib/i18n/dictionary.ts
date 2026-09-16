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
    ctaExplore: string;
  };
  whyCustom: {
    heading: string;
    subhead: string;
    items: { title: string; description: string }[];
  };
  evolution: {
    heading: string;
    subhead: string;
    stages: { id: string; title: string; description: string }[];
    // Real, readable copy for the mockup's own interface — deliberately
    // generic (no specific client), but words rather than abstract bars.
    // User testing with older viewers found the bars-only version didn't
    // read as "a website" without this.
    mockup: {
      logo: string;
      navLinks: string[];
      heroHeadline: string;
      heroSubtext: string;
      heroButton: string;
      // Shown only on the landing stage (0), where the mockup box otherwise
      // has a lot of empty space below a short hero — real value props, not
      // filler, since this section is meant to help sell the product.
      heroHighlights: string[];
      cards: { title: string; subtitle: string }[];
      dashboardStats: { label: string; value: string }[];
      // Same reasoning as heroHighlights — the dashboard stages (app,
      // connected, custom) had a lot of empty box below the stat tiles and
      // chart. Day labels under the chart and a short activity list fill
      // it with real content instead of dead space.
      dashboardChartLabel: string;
      dashboardDayLabels: string[];
      dashboardActivityLabel: string;
      dashboardActivity: { name: string; status: string }[];
      // "Connected Platform" and "Web Application" rendered identically on
      // phones — the connection-node diagram that's the only real
      // difference between those two stages is sm+ only (it needs room
      // outside the box that doesn't exist on a phone). This is the
      // in-box, phone-sized substitute for that stage specifically.
      dashboardConnectedLabel: string;
    };
  };
  services: {
    heading: string;
    subhead: string;
    categories: {
      id: string;
      title: string;
      description: string;
      items: string[];
    }[];
    // One line signaling roughly where projects start — currency matches
    // the locale's own budget tiers below (USD in English, GTQ in Spanish),
    // not a second pricing system.
    pricingSignal: string;
  };
  lab: {
    heading: string;
    subhead: string;
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
  whoIWorkWith: {
    heading: string;
    subhead: string;
    items: { title: string; description: string }[];
  };
  work: {
    heading: string;
    subhead: string;
    conceptualProjectBadge: string;
    previewDeviceAriaLabel: string;
    deviceModes: { desktop: string; mobile: string };
    projects: {
      id: string;
      name: string;
      vertical: string;
      description: string;
      tags: string[];
    }[];
    // Real, readable copy for each project's mockup — same reasoning as
    // evolution.mockup: abstract bars didn't read as "a real website" to
    // viewers, so this makes each preview a concrete little scene of the
    // actual business (a booking flow, a menu, a practice-areas grid)
    // rather than generic placeholder shapes.
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
    viewCaseStudy: string;
    caseStudy: {
      conceptualNote: string;
      backToWork: string;
      approachHeading: string;
      resultsHeading: string;
    };
    // Keyed by project id (see WORK_PROJECT_IDS in lib/content/work.ts) —
    // UX/engineering/product-thinking points only, never invented business
    // outcomes.
    caseStudies: Record<string, { title: string; description: string }[]>;
    // The Meridian clinic case study's own booking flow (app/[locale]/work/
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
    // Shown at the end of every case study (Meridian, Ember & Oak, Kestrel)
    // via the shared CaseStudyCTA component — never lets a case study page
    // end passively at the footer.
    caseStudyCta: {
      heading: string;
      body: string;
      primaryCta: string;
      secondaryCta: string;
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
    // timeline (reuses configurator.options.timeline), then a summary that
    // ends in the same primary/secondary CTA as CaseStudyCTA rather than a
    // fake submission.
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
  process: {
    heading: string;
    subhead: string;
    steps: { number: string; title: string; description: string }[];
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
  about: {
    heading: string;
    body: string[];
    principles: { title: string; description: string }[];
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  maintenance: {
    heading: string;
    subhead: string;
    items: { title: string; description: string }[];
  };
  finalCta: {
    heading: string;
    body: string;
    cta: string;
  };
  // Low-friction alternative to the configurator — a plain mailto: link
  // (see secondaryContactHref in lib/content/nav.ts), reused on the
  // homepage's closing CTA and at the end of every case study.
  secondaryContact: {
    prompt: string;
    cta: string;
  };
  footer: {
    tagline: string;
    footerAriaLabel: string;
    startAProject: string;
    copyright: (year: number) => string;
    builtWith: string;
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
    ogHeadline: string;
    ogTagline: string;
    structuredDataAreaServed: string;
    structuredDataServiceTypes: string[];
  };
}
