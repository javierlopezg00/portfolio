import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { DeviceFrame } from "./DeviceFrame";

interface DeviceCompositionProps {
  label: string;
  preview: ReactNode;
  /** The same preview rendered again inside a phone, overlapping the
   * desktop's right edge — hidden below `sm` where there's no room. The
   * phone hangs from just under the desktop's title bar and runs off the
   * bottom of whatever (overflow-hidden) box holds the composition, so a
   * tall preview never pokes out above the picture. */
  mobilePreview: ReactNode;
  className?: string;
}

// Desktop and phone views of one site, composed as a single picture.
// Shared by the homepage project cards and the case study headers so a
// project looks the same wherever it appears. Decorative: the surrounding
// copy names and describes the project.
export function DeviceComposition({
  label,
  preview,
  mobilePreview,
  className,
}: DeviceCompositionProps) {
  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <DeviceFrame mode="desktop" label={label} className="shadow-md">
        {preview}
      </DeviceFrame>
      <DeviceFrame
        mode="mobile"
        className="absolute top-10 -right-4 hidden w-40 shadow-md sm:block md:-right-12"
      >
        {mobilePreview}
      </DeviceFrame>
    </div>
  );
}
