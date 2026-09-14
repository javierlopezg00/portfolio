"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { gsap } from "@/lib/animation/gsap";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import {
  CardsGridLayer,
  ConnectionLabels,
  ConnectionLines,
  DashboardLayer,
  HeroBlockLayer,
  MessageOverlayLayer,
  SidebarIconsLayer,
  TopNavLayer,
} from "./layers";
import { VISIBILITY, type LayerKey } from "./visibility";

// Multiple DOM refs (e.g. the connection lines *and* labels) can share the
// same stage-visibility data, so refs are keyed separately from VISIBILITY.
type RefKey = LayerKey | "connectionsLabels";
const REF_VISIBILITY: Record<RefKey, LayerKey> = {
  nav: "nav",
  hero: "hero",
  cards: "cards",
  sidebar: "sidebar",
  dashboard: "dashboard",
  message: "message",
  connections: "connections",
  connectionsLabels: "connections",
};

export function PinnedSequence() {
  const dict = getDictionary(useLocale());
  const evolutionStages = dict.evolution.stages;
  const pinRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<Partial<Record<RefKey, HTMLDivElement | null>>>({});
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const pinTarget = pinRef.current;
    if (!pinTarget) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTarget,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate(self) {
            const stage = Math.min(
              4,
              Math.max(0, Math.round(self.progress * 4)),
            );
            setActiveStage((prev) => (prev === stage ? prev : stage));
          },
        },
      });

      evolutionStages.forEach((s, i) => tl.addLabel(s.id, i));

      (Object.keys(REF_VISIBILITY) as RefKey[]).forEach((refKey) => {
        const el = layerRefs.current[refKey];
        if (!el) return;
        const visibility = VISIBILITY[REF_VISIBILITY[refKey]];

        gsap.set(el, {
          autoAlpha: visibility[0] ? 1 : 0,
          y: visibility[0] ? 0 : 16,
        });

        for (let stage = 1; stage < visibility.length; stage++) {
          if (visibility[stage] === visibility[stage - 1]) continue;
          const showing = visibility[stage];
          tl.to(
            el,
            {
              autoAlpha: showing ? 1 : 0,
              y: showing ? 0 : 16,
              duration: 1,
              ease: "power2.inOut",
            },
            stage - 1,
          );
        }
      });
    }, pinTarget);

    return () => ctx.revert();
    // evolutionStages is stable per locale (getDictionary returns the same
    // en/es singleton object every call), and a real locale switch is a
    // full route navigation that remounts this component anyway — so this
    // never re-runs mid-lifecycle in practice, only listed for correctness.
  }, [evolutionStages]);

  const stage = evolutionStages[activeStage];

  return (
    <div ref={pinRef} className="relative">
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <p
          aria-live="polite"
          className="text-accent mb-2 font-mono text-sm tracking-wide uppercase"
        >
          {stage.title}
        </p>
        <div className="mb-10 flex items-center gap-2" aria-hidden="true">
          {evolutionStages.map((s, i) => (
            <span
              key={s.id}
              className={cn(
                "duration-base h-1.5 rounded-full transition-all ease-out",
                i === activeStage
                  ? "bg-accent w-6"
                  : "bg-text-secondary/30 w-1.5",
              )}
            />
          ))}
        </div>

        <div className="relative w-full max-w-3xl">
          <div
            ref={(el) => {
              layerRefs.current.connections = el;
            }}
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 sm:-inset-x-20 sm:-inset-y-14"
          >
            <ConnectionLines />
          </div>

          <div className="border-border bg-surface relative overflow-hidden rounded-lg border shadow-lg">
            <div className="border-border flex items-center gap-1.5 border-b px-4 py-3">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="bg-text-secondary/25 h-2.5 w-2.5 rounded-full"
                />
              ))}
            </div>

            <div className="relative flex min-h-[400px]">
              <div
                ref={(el) => {
                  layerRefs.current.sidebar = el;
                }}
                className="border-border w-16 shrink-0 border-r pt-6"
              >
                <SidebarIconsLayer />
              </div>

              <div className="relative flex-1 p-8">
                <div
                  ref={(el) => {
                    layerRefs.current.nav = el;
                  }}
                  className="absolute inset-x-8 top-8"
                >
                  <TopNavLayer />
                </div>
                <div
                  ref={(el) => {
                    layerRefs.current.hero = el;
                  }}
                  className="absolute inset-x-8 top-20"
                >
                  <HeroBlockLayer />
                </div>
                <div
                  ref={(el) => {
                    layerRefs.current.cards = el;
                  }}
                  className="absolute inset-x-8 top-56"
                >
                  <CardsGridLayer />
                </div>
                <div
                  ref={(el) => {
                    layerRefs.current.dashboard = el;
                  }}
                  className="absolute inset-x-8 top-20"
                >
                  <DashboardLayer />
                </div>
              </div>

              <div
                ref={(el) => {
                  layerRefs.current.message = el;
                }}
                className="absolute inset-0"
              >
                {/* The message layer only ever fades in during the final
                    stage (see VISIBILITY.message), so its text is pinned to
                    that stage rather than the shared `activeStage` bucket —
                    that bucket flips on a different boundary than the fade's
                    own GSAP timing, which briefly showed the prior stage's
                    text ghosting in mid-fade. */}
                <MessageOverlayLayer
                  text={evolutionStages[evolutionStages.length - 1].description}
                />
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              layerRefs.current.connectionsLabels = el;
            }}
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 sm:-inset-x-20 sm:-inset-y-14"
            aria-hidden="true"
          >
            <ConnectionLabels />
          </div>
        </div>
      </div>
    </div>
  );
}
