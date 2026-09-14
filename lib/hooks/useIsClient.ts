"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/** True only after hydration. Use to gate a client-only rendering path
 * (e.g. an enhanced version of content that's already rendered a safe
 * fallback) without a hydration-mismatch warning or an effect-based
 * setState. */
export function useIsClient(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
