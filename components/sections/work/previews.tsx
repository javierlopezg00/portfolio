import { cn } from "@/lib/cn";

// Same reasoning as the evolution section's mockup: real, readable copy and
// small icons rather than abstract bars, since bars-only testing poorly
// with older viewers. Still not photorealistic fake screenshots — each
// scene is generic to its business type (a booking flow, a menu, a
// practice-areas grid), not a literal copy of a real client's site. Each
// uses @container query classes so the desktop/mobile toggle in
// DeviceFrame produces genuine reflow, not two hand-built static states.

interface ClinicPreviewContent {
  logo: string;
  navLinks: string[];
  headline: string;
  subtext: string;
  cta: string;
  steps: string[];
}

export function ClinicPreview({ content }: { content: ClinicPreviewContent }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-text text-xs font-semibold">{content.logo}</span>
        <div className="hidden gap-3 @sm:flex">
          {content.navLinks.map((link) => (
            <span key={link} className="text-text-secondary text-[11px]">
              {link}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-text text-sm leading-snug font-semibold">
          {content.headline}
        </p>
        <p className="text-text-secondary text-xs leading-snug">
          {content.subtext}
        </p>
        <span className="bg-accent-strong mt-2 inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-white">
          {content.cta}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-3">
        {content.steps.map((step, i) => (
          <div
            key={step}
            className="border-border bg-background/40 flex flex-col gap-2 rounded-md border p-3"
          >
            <span className="bg-accent flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold text-white">
              {i + 1}
            </span>
            <span className="text-text-secondary text-[11px] leading-tight">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="text-text-secondary/50 h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.25" fill="currentColor" stroke="none" />
      <path d="M21 15l-5-5-4 4-3-3-6 6" />
    </svg>
  );
}

interface RestaurantPreviewContent {
  logo: string;
  cta: string;
  menu: { item: string; price: string }[];
}

export function RestaurantPreview({
  content,
}: {
  content: RestaurantPreviewContent;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-text text-xs font-semibold">{content.logo}</span>
        <span className="bg-accent-strong inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-white">
          {content.cta}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 @sm:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-text-secondary/10 flex aspect-square items-center justify-center rounded-md",
              i > 2 && "hidden @sm:flex",
            )}
          >
            <GalleryIcon />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        {content.menu.map((dish) => (
          <div
            key={dish.item}
            className="flex items-baseline justify-between gap-4"
          >
            <span className="text-text-secondary text-[11px] leading-tight">
              {dish.item}
            </span>
            <span className="text-text text-[11px] font-medium">
              {dish.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="text-accent h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function OperationsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="text-accent h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <circle cx="9" cy="7" r="1.75" fill="currentColor" stroke="none" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="15" cy="12" r="1.75" fill="currentColor" stroke="none" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <circle cx="11" cy="17" r="1.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="text-accent h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <line x1="5" y1="19" x2="5" y2="13" />
      <line x1="12" y1="19" x2="12" y2="9" />
      <line x1="19" y1="19" x2="19" y2="5" />
    </svg>
  );
}

// Indexed to practiceAreas — a fixed 3-item structural design (Strategy,
// Operations, Finance), not arbitrary reorderable content, so pairing by
// position rather than matching against the localized label text is fine.
const PRACTICE_ICONS = [StrategyIcon, OperationsIcon, FinanceIcon];

interface ConsultingPreviewContent {
  logo: string;
  navLinks: string[];
  headline: string;
  subtext: string;
  practiceAreas: string[];
}

export function ConsultingPreview({
  content,
}: {
  content: ConsultingPreviewContent;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-text text-xs font-semibold">{content.logo}</span>
        <div className="hidden gap-3 @sm:flex">
          {content.navLinks.map((link) => (
            <span key={link} className="text-text-secondary text-[11px]">
              {link}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-text text-sm leading-snug font-semibold">
          {content.headline}
        </p>
        <p className="text-text-secondary text-xs leading-snug">
          {content.subtext}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-3">
        {content.practiceAreas.map((area, i) => {
          const Icon = PRACTICE_ICONS[i];
          return (
            <div
              key={area}
              className="border-border bg-background/40 flex flex-col gap-2 rounded-md border p-3"
            >
              {Icon && <Icon />}
              <span className="text-text-secondary text-[11px] leading-tight">
                {area}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
