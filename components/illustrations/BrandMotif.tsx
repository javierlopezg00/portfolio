import { cn } from "@/lib/cn";

type MotifTone = "accent" | "ink" | "muted";

const toneClass: Record<MotifTone, string> = {
  accent: "text-accent-tint",
  ink: "text-text",
  muted: "text-border-strong",
};

interface BrandMotifProps {
  /** Which corner the bracket opens from. */
  corner?: "tl" | "tr" | "bl" | "br";
  tone?: MotifTone;
  className?: string;
}

// The notch bracket: an offset quarter-frame taken from the L of the
// monogram — one long stroke, one short one, and a small square sitting
// in the elbow. It appears in exactly five places site-wide (hero
// backdrop, featured project, industries, about portrait, contact), which
// is what makes it read as a mark rather than as decoration.
export function BrandMotif({
  corner = "tl",
  tone = "accent",
  className,
}: BrandMotifProps) {
  const rotation = {
    tl: "",
    tr: "rotate-90",
    br: "rotate-180",
    bl: "-rotate-90",
  }[corner];

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={cn(toneClass[tone], rotation, className)}
    >
      <path
        d="M4 116V28C4 14.7 14.7 4 28 4h44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 116V36c0-8.8 7.2-16 16-16h26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
      <rect x="86" y="1" width="7" height="7" rx="1.5" fill="currentColor" />
    </svg>
  );
}
