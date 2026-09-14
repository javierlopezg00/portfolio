"use client";

import { useEffect, useState } from "react";

function getInitialScrolled(threshold: number): boolean {
  if (typeof window === "undefined") return false;
  return window.scrollY > threshold;
}

export function useScrolledPast(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(() => getInitialScrolled(threshold));

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

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
