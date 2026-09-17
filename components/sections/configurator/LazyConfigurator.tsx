"use client";

import dynamic from "next/dynamic";

// The configurator (and the validation library it carries) is the
// heaviest client code on the homepage, and it sits at the very bottom
// of the page. Splitting it into its own chunk keeps that JavaScript from
// competing with the fonts and hero for bandwidth before first paint —
// it still server-renders, so nothing visibly changes; only the chunk
// arrives later. The min-height mirrors the first step so the section
// doesn't shift when the chunk hydrates.
const Configurator = dynamic(
  () => import("./Configurator").then((m) => m.Configurator),
  { loading: () => <div aria-hidden="true" className="min-h-96" /> },
);

export function LazyConfigurator() {
  return <Configurator />;
}
