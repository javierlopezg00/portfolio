"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { GrowthMockup } from "./GrowthMockup";

const DESKTOP_QUERY = "(min-width: 1024px)";

// Four stages, one illustration that grows with them.
//
// On phones and tablets every stage is simply followed by its own picture
// — nothing to observe, nothing that depends on JavaScript. From `lg` up
// the pictures collapse into one sticky illustration beside the list, and
// an IntersectionObserver swaps which stage it shows as the reader scrolls
// past each step. The page scrolls normally throughout: no pinning, no
// scrubbing, nothing to get stuck in. Both layouts come from the same
// markup, so what a screen reader gets never depends on viewport width.
export function GrowthStory() {
  const dict = getDictionary(useLocale());
  const { stages, mockup } = dict.growth;
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    let observer: IntersectionObserver | null = null;

    const connect = () => {
      observer?.disconnect();
      observer = null;
      if (!mediaQuery.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const index = Number(
              (entry.target as HTMLElement).dataset.stageIndex,
            );
            setActive(index);
          }
        },
        // A band across the middle of the viewport: a step becomes active
        // once its text crosses the center, which matches where the eye is.
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      for (const el of stepRefs.current) if (el) observer.observe(el);
    };

    connect();
    mediaQuery.addEventListener("change", connect);
    return () => {
      mediaQuery.removeEventListener("change", connect);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <ol className="flex flex-col gap-14 lg:gap-0">
        {stages.map((stage, index) => {
          const isActive = index === active;
          return (
            <li
              key={stage.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              data-stage-index={index}
              data-active={isActive}
              // Each step reserves a little under half a viewport so the
              // sticky illustration has room to swap, but the first one
              // hugs the top: centering it left ~25vh of empty column
              // between the intro and the story.
              className={cn(
                "flex flex-col lg:min-h-[44vh] lg:py-6",
                index === 0 ? "lg:justify-start lg:pt-2" : "lg:justify-center",
              )}
            >
              {/* Inactive steps (desktop only) step back to the secondary
                  text color rather than fading via opacity — dimmed text
                  fell under the 4.5:1 contrast floor, and these are the
                  real content, not decoration. */}
              <div className="flex gap-5 sm:gap-6">
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-display duration-base shrink-0 text-3xl leading-none transition-colors ease-out sm:text-4xl",
                    isActive
                      ? "text-accent-tint"
                      : "text-accent-tint lg:text-text-secondary",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span
                    className={cn(
                      "text-caption font-semibold tracking-wide uppercase",
                      isActive
                        ? "text-accent"
                        : "text-accent lg:text-text-secondary",
                    )}
                  >
                    {stage.label}
                  </span>
                  <h3
                    className={cn(
                      "text-h3 mt-2 font-semibold",
                      isActive
                        ? "text-text"
                        : "text-text lg:text-text-secondary",
                    )}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-text-secondary mt-2 max-w-sm">
                    {stage.description}
                  </p>
                </div>
              </div>
              <div data-theme="light" className="mt-8 px-1 sm:px-4 lg:hidden">
                <GrowthMockup stage={index} content={mockup} />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:block">
        <div className="sticky top-28 pt-4 pr-4 pl-2">
          {/* The mockups stay a light website on the dark stage — the
              point of the section is watching one site grow, and a site
              that inverted with the background would break that. */}
          <div data-theme="light">
            <GrowthMockup key={active} stage={active} content={mockup} />
          </div>
          <ol
            aria-hidden="true"
            className="mt-8 flex items-center justify-center gap-2"
          >
            {stages.map((stage, index) => (
              <li
                key={stage.id}
                className={cn(
                  "duration-base h-1.5 rounded-full transition-[width,background-color] ease-out",
                  index === active
                    ? "bg-accent-tint w-8"
                    : "bg-border-strong w-1.5",
                )}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
