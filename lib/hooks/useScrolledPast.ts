"use client";

import { useEffect, useState } from "react";

export function useScrolledPast(threshold = 80): boolean {
  // Always starts false so the client's first render matches the server
  // (which has no window to read scrollY from). Corrected immediately on
  // mount below — a lazy initializer reading window.scrollY here would
  // mismatch whenever the page loads already scrolled, e.g. a URL with a
  // hash anchor like /#services, which the browser jumps to before React
  // hydrates.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

    update();

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
