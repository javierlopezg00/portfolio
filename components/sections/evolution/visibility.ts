// Which of the mockup's layers are visible at each of the 5 stages
// (landing, business, app, connected, custom). Shared by the GSAP-driven
// desktop sequence and the static mobile/reduced-motion fallback so the
// two renderings can never drift apart.
export const VISIBILITY = {
  nav: [false, true, false, false, false],
  hero: [true, true, false, false, false],
  cards: [false, true, false, false, false],
  sidebar: [false, false, true, true, true],
  dashboard: [false, false, true, true, true],
  connections: [false, false, false, true, true],
  message: [false, false, false, false, true],
} as const satisfies Record<string, boolean[]>;

export type LayerKey = keyof typeof VISIBILITY;
