"use client";

import { cn } from "@/lib/cn";
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

interface InterfaceMockupProps {
  stage: number;
  className?: string;
}

export function InterfaceMockup({ stage, className }: InterfaceMockupProps) {
  const dict = getDictionary(useLocale());
  const mockup = dict.evolution.mockup;
  const show = (key: LayerKey) => VISIBILITY[key][stage];
  // The connection labels (PAYMENTS, API, DATABASE, ...) need real
  // horizontal room to sit outside the card without clipping — below the
  // sm breakpoint there isn't any (they were getting cut off at the
  // viewport edge on real phones), so this layer is desktop/tablet only.
  // It's purely decorative (aria-hidden), so hiding it costs nothing.
  const connectionsInset =
    "pointer-events-none absolute hidden sm:block -inset-x-6 -inset-y-8 sm:-inset-x-16 sm:-inset-y-10";
  // Layers are absolutely positioned to build a believable mockup layout
  // (nav above hero above cards, etc.), so the container can't size itself
  // from their content the way normal flow would — it has to be told how
  // tall to be. A single fixed height for every stage (regardless of how
  // little a given stage actually shows) left the opening stage with
  // ~150px of dead space below its content on mobile.
  const minHeight = show("cards")
    ? "min-h-[360px]" // nav + hero + cards: cards sits at top-64
    : show("dashboard")
      ? "min-h-[440px]" // sidebar + dashboard (stages 2-4)
      : "min-h-[360px]"; // nav + hero + highlights (stage 0)

  return (
    <div className={cn("relative", className)}>
      {show("connections") && (
        <div className={connectionsInset}>
          <ConnectionLines />
        </div>
      )}

      <div className="border-border bg-surface relative overflow-hidden rounded-lg border shadow-lg">
        <div className="border-border flex items-center gap-1.5 border-b px-4 py-3">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="bg-text-secondary/25 h-2.5 w-2.5 rounded-full"
            />
          ))}
        </div>

        <div className={cn("relative flex", minHeight)}>
          <div
            className={cn(
              "border-border w-16 shrink-0 border-r pt-6",
              !show("sidebar") && "opacity-0",
            )}
          >
            <SidebarIconsLayer />
          </div>

          <div className="relative flex-1 p-6">
            {show("nav") && (
              <div className="absolute inset-x-6 top-6">
                <TopNavLayer logo={mockup.logo} links={mockup.navLinks} />
              </div>
            )}
            {show("hero") && (
              <div className="absolute inset-x-6 top-16">
                <HeroBlockLayer
                  headline={mockup.heroHeadline}
                  subtext={mockup.heroSubtext}
                  button={mockup.heroButton}
                  highlights={
                    show("highlights") ? mockup.heroHighlights : undefined
                  }
                />
              </div>
            )}
            {show("cards") && (
              <div className="absolute inset-x-6 top-64">
                <CardsGridLayer cards={mockup.cards} />
              </div>
            )}
            {show("dashboard") && (
              <div className="absolute inset-x-6 top-16">
                <DashboardLayer
                  stats={mockup.dashboardStats}
                  chartLabel={mockup.dashboardChartLabel}
                  dayLabels={mockup.dashboardDayLabels}
                  activityLabel={mockup.dashboardActivityLabel}
                  activity={mockup.dashboardActivity}
                />
              </div>
            )}
          </div>

          {show("message") && (
            <div className="absolute inset-0">
              <MessageOverlayLayer
                text={dict.evolution.stages[stage].description}
              />
            </div>
          )}
        </div>
      </div>

      {show("connections") && (
        <div className={connectionsInset}>
          <ConnectionLabels />
        </div>
      )}
    </div>
  );
}
