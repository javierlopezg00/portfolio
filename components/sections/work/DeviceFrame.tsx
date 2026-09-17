import type { ReactNode } from "react";
import { BrowserFrame } from "@/components/illustrations/BrowserFrame";
import { PhoneFrame } from "@/components/illustrations/PhoneFrame";
import { cn } from "@/lib/cn";

export type DeviceMode = "desktop" | "mobile";

interface DeviceFrameProps {
  mode: DeviceMode;
  label?: string;
  className?: string;
  children: ReactNode;
}

// Wraps a work preview in a desktop or phone frame. Both frames are
// container-query roots, so the same preview component genuinely reflows
// between the two — not two hand-built versions that can drift apart.
export function DeviceFrame({
  mode,
  label,
  className,
  children,
}: DeviceFrameProps) {
  if (mode === "mobile") {
    return (
      <PhoneFrame className={cn("mx-auto w-[240px]", className)}>
        <div className="p-4">{children}</div>
      </PhoneFrame>
    );
  }
  return (
    <BrowserFrame label={label} className={cn("w-full", className)}>
      <div className="p-4 sm:p-5">{children}</div>
    </BrowserFrame>
  );
}
