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
  const show = (key: LayerKey) => VISIBILITY[key][stage];
  const connectionsInset =
    "pointer-events-none absolute -inset-x-6 -inset-y-8 sm:-inset-x-16 sm:-inset-y-10";

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

        <div className="relative flex min-h-[300px]">
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
                <TopNavLayer />
              </div>
            )}
            {show("hero") && (
              <div className="absolute inset-x-6 top-16">
                <HeroBlockLayer />
              </div>
            )}
            {show("cards") && (
              <div className="absolute inset-x-6 top-48">
                <CardsGridLayer />
              </div>
            )}
            {show("dashboard") && (
              <div className="absolute inset-x-6 top-16">
                <DashboardLayer />
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
