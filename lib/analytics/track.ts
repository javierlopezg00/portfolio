import { track as vercelTrack } from "@vercel/analytics";

type EventProperties = Record<string, string | number | boolean | null>;

/**
 * Thin wrapper around Vercel Analytics custom events. Centralizing this
 * one function keeps event names/shapes consistent and gives us a single
 * place to swap providers later without touching call sites.
 */
export function track(event: string, properties?: EventProperties) {
  if (typeof window === "undefined") return;
  vercelTrack(event, properties);
}
