/**
 * Motion tokens for JS-driven animation (GSAP, motion).
 * Values must stay in sync with the CSS custom properties in app/globals.css —
 * CSS can't be read into JS animation libraries directly, so this is the
 * canonical duplicate for code that isn't pure CSS transitions.
 */

export const duration = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
} as const;

export const durationMs = {
  fast: duration.fast * 1000,
  base: duration.base * 1000,
  slow: duration.slow * 1000,
} as const;

export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  spring: [0.34, 1.56, 0.64, 1],
} as const;

// GSAP-compatible cubic-bezier strings.
export const gsapEase = {
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
