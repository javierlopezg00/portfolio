import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type DeviceMode = "desktop" | "mobile";

interface DeviceFrameProps {
  mode: DeviceMode;
  children: ReactNode;
}

export function DeviceFrame({ mode, children }: DeviceFrameProps) {
  return (
    <div
      className={cn(
        "duration-base mx-auto transition-[width] ease-out",
        mode === "desktop" ? "w-full" : "w-[240px]",
      )}
    >
      <div className="border-border bg-surface @container overflow-hidden rounded-lg border shadow-md">
        {mode === "desktop" ? (
          <div className="border-border flex items-center gap-1.5 border-b px-3 py-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="bg-text-secondary/25 h-2 w-2 rounded-full"
              />
            ))}
          </div>
        ) : (
          <div className="border-border flex justify-center border-b py-2">
            <span className="bg-text-secondary/25 h-1 w-10 rounded-full" />
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
