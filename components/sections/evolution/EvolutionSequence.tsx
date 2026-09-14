"use client";

import { useIsClient } from "@/lib/hooks/useIsClient";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { PinnedSequence } from "./PinnedSequence";
import { SteppedSequence } from "./SteppedSequence";

export function EvolutionSequence() {
  const isClient = useIsClient();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reducedMotion = useReducedMotion();

  // SteppedSequence is the safe, SSR-matching default — it's also the
  // real fallback for mobile and prefers-reduced-motion. PinnedSequence
  // only takes over once we know, client-side, that scroll-jacking a
  // desktop viewport is actually appropriate here.
  const usePinned = isClient && isDesktop && !reducedMotion;

  return usePinned ? <PinnedSequence /> : <SteppedSequence />;
}
