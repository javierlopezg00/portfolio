"use client";

// GSAP is only used by the Interactive Lab's automation demo (a timeline
// moving a dot along an SVG path), which is code-split behind its tab —
// so the homepage never downloads it. No plugins: the scroll-driven
// sequence that used ScrollTrigger was replaced by an IntersectionObserver.
import gsap from "gsap";

export { gsap };
