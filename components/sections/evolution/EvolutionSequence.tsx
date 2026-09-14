"use client";

import dynamic from "next/dynamic";
import { useIsClient } from "@/lib/hooks/useIsClient";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { SteppedSequence } from "./SteppedSequence";

// GSAP only ships to users who actually get the pinned experience —
// mobile and prefers-reduced-motion visitors (the majority on real
// traffic) never download it. SteppedSequence stays a static import: it's
// the SSR-safe default and what most users see, so it needs to be ready
// immediately rather than waiting on a chunk fetch.
const PinnedSequence = dynamic(
  () => import("./PinnedSequence").then((m) => m.PinnedSequence),
  { ssr: false },
);

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
