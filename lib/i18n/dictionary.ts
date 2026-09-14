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
  evolution: {
    heading: string;
    subhead: string;
    stages: { id: string; title: string; description: string }[];
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
      diagramAriaLabel: string;
    };
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
  finalCta: {
    heading: string;
    body: string;
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
    structuredDataServiceTypes: string[];
  };
}
