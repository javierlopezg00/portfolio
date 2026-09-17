import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { images, MOCKUP_IMAGE_SIZES } from "@/lib/content/images";

// Real, readable copy and small icons rather than abstract bars — bars-only
// mockups tested poorly with non-technical viewers, who couldn't tell they
// were looking at "a website". Still not photorealistic fake screenshots:
// each scene is generic to its business type (a booking flow, a menu, a
// practice-areas grid), not a literal copy of a real client's site. Each
// uses @container query classes so the same component genuinely reflows
// between DeviceFrame's desktop and phone frames.

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
    <div data-brand="meridian" className="flex flex-col gap-4">
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
        <span className="bg-demo-strong mt-2 inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-white">
          {content.cta}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-3">
        {content.steps.map((step, i) => (
          <div
            key={step}
            className="border-border bg-background/40 flex flex-col gap-2 rounded-md border p-3"
          >
            <span className="bg-demo flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold text-white">
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
    <div data-brand="ember" className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-text text-xs font-semibold">{content.logo}</span>
        <span className="bg-demo-strong inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-white">
          {content.cta}
        </span>
      </div>
      {/* Photo gallery — real dishes, since a restaurant site lives or
          dies by its food photography. Wider containers show all six. */}
      <div className="grid grid-cols-2 gap-2 @sm:grid-cols-3 @xl:grid-cols-6">
        {images.dishes.map((dish, i) => (
          <Image
            key={i}
            src={dish}
            alt=""
            sizes={MOCKUP_IMAGE_SIZES}
            placeholder="blur"
            className={cn(
              "aspect-[4/3] w-full rounded-md object-cover",
              i > 2 && "hidden @sm:block",
            )}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        {content.menu.map((dish, i) => (
          <div
            key={dish.item}
            className="flex items-center justify-between gap-4"
          >
            <span className="flex items-center gap-2.5">
              {images.dishes[i] && (
                <Image
                  src={images.dishes[i]}
                  alt=""
                  sizes="40px"
                  className="h-8 w-10 shrink-0 rounded object-cover"
                />
              )}
              <span className="text-text-secondary text-[11px] leading-tight">
                {dish.item}
              </span>
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
      className="text-demo h-4 w-4"
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
      className="text-demo h-4 w-4"
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
      className="text-demo h-4 w-4"
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
  image,
}: {
  content: ConsultingPreviewContent;
  /** Optional photograph for the header band (a workspace, a meeting,
   * the firm's building). Until one exists the band carries a restrained
   * bronze geometric mark instead — a designed placeholder, not stock. */
  image?: ReactNode;
}) {
  return (
    <div data-brand="kestrel" className="flex flex-col gap-4">
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

      {/* The firm's opening statement on its own charcoal band: the one
          strong visual the layout was missing. Serif because a
          professional-services brand earns the editorial voice — it's
          the site's existing display face, not a third family. */}
      <div className="bg-demo-dark relative overflow-hidden rounded-md">
        {image ? (
          <div className="absolute inset-0 opacity-60">{image}</div>
        ) : (
          <KestrelMark />
        )}
        <div className="relative flex flex-col gap-1.5 p-4 @sm:max-w-[70%] @sm:p-5">
          <p className="font-display text-[15px] leading-tight text-[color:#f6f2ea] @sm:text-lg">
            {content.headline}
          </p>
          <p className="text-[11px] leading-snug text-[color:#f6f2ea]/75">
            {content.subtext}
          </p>
          <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-[10px] font-medium tracking-wide text-[color:var(--color-demo-accent)] uppercase">
            <span className="bg-demo-accent h-px w-5" />
            {content.navLinks[0]}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-3">
        {content.practiceAreas.map((area, i) => {
          const Icon = PRACTICE_ICONS[i];
          return (
            <div
              key={area}
              className="bg-demo-soft flex flex-col gap-2 rounded-md p-3"
            >
              {Icon && <Icon />}
              <span className="text-demo-dark text-[11px] leading-tight font-medium">
                {area}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Bronze geometry for the band: two concentric arcs and a short rule,
// drawn thin. Quiet enough to sit behind text, distinctive enough that
// the card reads as a brand rather than as a wireframe.
function KestrelMark() {
  return (
    <svg
      viewBox="0 0 200 120"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      className="text-demo-accent absolute inset-y-0 right-0 h-full w-[55%] opacity-70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <circle cx="150" cy="60" r="46" />
      <circle cx="150" cy="60" r="30" opacity="0.6" />
      <circle cx="150" cy="60" r="14" opacity="0.4" />
      <path d="M104 60h-30" />
      <circle cx="70" cy="60" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
