import type { ReactNode } from "react";
import {
  CalendarIcon,
  CardIcon,
  ChartIcon,
  ChatIcon,
  CheckIcon,
  GlobeIcon,
} from "@/components/illustrations/icons";

// Small, static illustrations for the three service cards. They reuse the
// same "tiny real interface" language as the hero — a website, a booking
// with a payment, a dashboard — so a visitor recognizes each service
// before reading a word. All aria-hidden; the card copy carries meaning.

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="bg-surface-soft flex h-36 items-center justify-center overflow-hidden rounded-lg px-6"
    >
      {children}
    </div>
  );
}

export function WebsiteIllustration() {
  return (
    <Frame>
      <div className="border-border bg-surface w-full max-w-56 rounded-lg border shadow-sm">
        <div className="border-border flex items-center gap-1 border-b px-2 py-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="bg-border-strong h-1.5 w-1.5 rounded-full"
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center justify-between">
            <span className="bg-text/80 h-1.5 w-10 rounded-full" />
            <span className="bg-accent-strong h-3 w-10 rounded-full" />
          </div>
          <span className="bg-text/70 mt-1 h-2 w-3/4 rounded-full" />
          <span className="bg-text-secondary/40 h-1.5 w-1/2 rounded-full" />
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="bg-accent-soft h-7 rounded-md" />
            ))}
          </div>
        </div>
      </div>
      <GlobeIcon className="text-accent -ml-3 hidden h-6 w-6 shrink-0 @sm:block" />
    </Frame>
  );
}

export function OnlineIllustration() {
  return (
    <Frame>
      <div className="flex w-full max-w-60 items-center gap-3">
        <div className="border-border bg-surface flex flex-1 flex-col gap-2 rounded-lg border p-3 shadow-sm">
          <span className="text-text-secondary flex items-center gap-1.5 text-[10px]">
            <CalendarIcon width={12} height={12} />
            <span className="bg-text-secondary/40 h-1.5 w-12 rounded-full" />
          </span>
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={
                  i === 4
                    ? "bg-accent-strong h-4 rounded-md"
                    : "bg-accent-soft h-4 rounded-md"
                }
              />
            ))}
          </div>
        </div>
        <div className="border-border bg-surface flex flex-1 flex-col gap-2 rounded-lg border p-3 shadow-sm">
          <span className="text-text-secondary flex items-center gap-1.5 text-[10px]">
            <CardIcon width={12} height={12} />
            <span className="bg-text-secondary/40 h-1.5 w-10 rounded-full" />
          </span>
          <span className="text-text text-sm font-semibold">Q350</span>
          <span className="bg-success/15 text-success flex items-center gap-1 self-start rounded-full px-2 py-0.5">
            <CheckIcon width={10} height={10} />
            <span className="bg-success/60 h-1.5 w-8 rounded-full" />
          </span>
        </div>
        <ChatIcon className="text-whatsapp hidden h-6 w-6 shrink-0 @sm:block" />
      </div>
    </Frame>
  );
}

export function SoftwareIllustration() {
  return (
    <Frame>
      <div className="border-border bg-surface flex w-full max-w-60 gap-3 rounded-lg border p-3 shadow-sm">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={
                i === 0
                  ? "bg-accent-strong h-2.5 w-2.5 rounded-sm"
                  : "bg-border-strong h-2.5 w-2.5 rounded-sm"
              }
            />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="bg-background border-border flex h-7 flex-col justify-center gap-1 rounded-md border px-1.5"
              >
                <span className="bg-text-secondary/40 h-1 w-5 rounded-full" />
                <span className="bg-text/70 h-1.5 w-7 rounded-full" />
              </span>
            ))}
          </div>
          <div className="bg-background border-border flex h-10 items-end gap-1 rounded-md border px-2 pt-2 pb-1">
            {[35, 55, 45, 75, 60, 90].map((h, i) => (
              <span
                key={i}
                className="bg-accent/60 flex-1 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <ChartIcon className="text-accent hidden h-5 w-5 shrink-0 self-start @sm:block" />
      </div>
    </Frame>
  );
}
