import type { Dictionary } from "./dictionary";
import { en } from "./en";

// Phase A/B stub: identical to `en` so both locale routes build and render
// byte-for-byte the same while the routing/dictionary plumbing is proven
// out. Replaced with real Spanish content once the mechanical wiring
// (every component reading from the dictionary) is verified working.
export const es: Dictionary = en;
