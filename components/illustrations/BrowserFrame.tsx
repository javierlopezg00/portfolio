import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  /** Text shown in the fake address bar — a brand name, not a real URL. */
  label?: string;
  className?: string;
  children: ReactNode;
}

// A desktop browser window for illustrations. Every illustration on the
// site (hero, services, growth story, work previews) shares this frame so
// they read as one family — and as "a website", instantly.
export function BrowserFrame({
  label,
  className,
  children,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface @container overflow-hidden rounded-xl border shadow-lg",
        className,
      )}
    >
      <div className="border-border bg-background flex items-center gap-2 border-b px-3 py-2">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="bg-border-strong h-2 w-2 rounded-full" />
          ))}
        </span>
        {label && (
          <span className="bg-surface border-border text-text-secondary mx-auto hidden h-5 max-w-40 items-center truncate rounded-full border px-3 text-[10px] leading-none @xs:flex">
            {label}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
