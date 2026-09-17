import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneFrameProps {
  className?: string;
  children: ReactNode;
}

// A phone for illustrations — pairs with BrowserFrame to show the same
// business on a small screen, which is where most customers will meet it.
export function PhoneFrame({ className, children }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface @container overflow-hidden rounded-[22px] border-4 shadow-lg",
        className,
      )}
    >
      <div className="flex justify-center pt-2 pb-1">
        <span className="bg-border-strong h-1 w-10 rounded-full" />
      </div>
      {children}
    </div>
  );
}
