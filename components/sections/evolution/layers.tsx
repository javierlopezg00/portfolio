import { cn } from "@/lib/cn";

// A stand-in interface for "a website" in general, not any specific real
// client — but real, readable words rather than abstract bars. It used to
// be pure schematic blocks; user testing with viewers over 50 found that
// version didn't read as "a website" at all without text to anchor it.

interface TopNavLayerProps {
  logo: string;
  links: string[];
}

export function TopNavLayer({ logo, links }: TopNavLayerProps) {
  return (
    <div className="flex items-center gap-6">
      <span className="text-text text-xs font-semibold tracking-wide">
        {logo}
      </span>
      <div className="flex gap-4">
        {links.map((link) => (
          <span key={link} className="text-text-secondary text-xs">
            {link}
          </span>
        ))}
      </div>
    </div>
  );
}

interface HeroBlockLayerProps {
  headline: string;
  subtext: string;
  button: string;
  // Only passed on the landing stage (0) — the one stage where hero is the
  // *only* content, so the mockup needs real value props to avoid reading
  // as an empty box. Business-stage hero (stage 1, alongside nav + cards)
  // omits these; the cards below already carry that weight.
  highlights?: string[];
}

export function HeroBlockLayer({
  headline,
  subtext,
  button,
  highlights,
}: HeroBlockLayerProps) {
  return (
    <div className="flex items-start gap-4 lg:gap-8">
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <p className="text-text max-w-[180px] text-sm leading-snug font-semibold lg:max-w-[260px] lg:text-lg">
          {headline}
        </p>
        <p className="text-text-secondary max-w-[170px] text-xs leading-snug lg:max-w-[240px] lg:text-sm">
          {subtext}
        </p>
        <span className="bg-accent-strong mt-3 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium text-white lg:px-5 lg:py-2 lg:text-sm">
          {button}
        </span>

        {/* Nested in the hero's own flow (rather than a separately
            positioned layer) since InterfaceMockup — the only caller that
            passes this — renders one stage at a time with no crossfade to
            coordinate against. PinnedSequence needs the standalone
            HighlightsLayer below instead; see its usage for why. */}
        {highlights && (
          <ul className="mt-5 flex flex-col gap-2 lg:mt-8 lg:gap-3">
            {highlights.map((item) => (
              <HighlightItem key={item} label={item} />
            ))}
          </ul>
        )}
      </div>
      {/* A stand-in for a hero photo — real sites almost always pair a
          headline with an image, and text-only made the mockup read as
          incomplete rather than "simple." A generic frame-and-mountain
          glyph, not a real photo, for the same reason the rest of this
          mockup stays abstract: it represents "a website," not one
          specific client. Sized up substantially at lg — that breakpoint
          only ever applies to the desktop pinned sequence, where the box
          is much wider and a small icon reads as an empty box, not a hero
          image. */}
      <div
        aria-hidden="true"
        className="border-border bg-accent/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border sm:h-20 sm:w-20 lg:h-28 lg:w-64"
      >
        <svg
          viewBox="0 0 24 24"
          className="text-accent/60 h-6 w-6 sm:h-7 sm:w-7 lg:h-10 lg:w-10"
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
      </div>
    </div>
  );
}

function HighlightItem({ label }: { label: string }) {
  return (
    <li className="text-text-secondary flex items-center gap-2 text-xs lg:text-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="text-accent h-3.5 w-3.5 shrink-0 lg:h-4 lg:w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      {label}
    </li>
  );
}

interface HighlightsLayerProps {
  items: string[];
}

// The standalone counterpart to HeroBlockLayer's nested `highlights` prop —
// for PinnedSequence, where hero stays visible (crossfading, not
// unmounting) across the landing→business transition. Nesting the list
// inside hero there would leave it overlapping the cards that fade in at
// the same slot; giving it its own independently-faded layer, reusing that
// slot, avoids that.
export function HighlightsLayer({ items }: HighlightsLayerProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <HighlightItem key={item} label={item} />
      ))}
    </ul>
  );
}

interface CardsGridLayerProps {
  cards: { title: string; subtitle: string }[];
}

export function CardsGridLayer({ cards }: CardsGridLayerProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="border-border bg-background/40 flex flex-col gap-1.5 rounded-md border p-3"
        >
          <div className="bg-accent/60 h-5 w-5 rounded-full" />
          <span className="text-text text-[11px] leading-tight font-medium">
            {card.title}
          </span>
          <span className="text-text-secondary text-[10px] leading-tight">
            {card.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
}

export function SidebarIconsLayer() {
  return (
    <div className="flex flex-col items-center gap-4">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            "h-6 w-6 rounded-md",
            i === 0 ? "bg-accent/70" : "bg-text-secondary/30",
          )}
        />
      ))}
    </div>
  );
}

interface DashboardLayerProps {
  stats: { label: string; value: string }[];
}

export function DashboardLayer({ stats }: DashboardLayerProps) {
  const bars = [40, 65, 50, 80, 60, 90, 70];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-border bg-background/40 flex flex-col gap-1.5 rounded-md border p-3"
          >
            <span className="text-text-secondary text-[10px] leading-tight">
              {stat.label}
            </span>
            <span className="text-text text-sm leading-tight font-semibold">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      <div className="border-border bg-background/40 flex h-20 items-end gap-1.5 rounded-md border p-3">
        {bars.map((h, i) => (
          <div
            key={i}
            className="bg-accent/60 flex-1 rounded-t-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function MessageOverlayLayer({ text }: { text: string }) {
  return (
    <div className="bg-background/90 absolute inset-0 flex items-center justify-center px-8 text-center backdrop-blur-sm">
      <p className="text-h3 text-text sm:text-h2 font-semibold">{text}</p>
    </div>
  );
}

interface ExternalNode {
  label: string;
  x: number;
  y: number;
}

const EXTERNAL_NODES: ExternalNode[] = [
  { label: "PAYMENTS", x: 0.04, y: 0.15 },
  { label: "API", x: 0.96, y: 0.08 },
  { label: "DATABASE", x: 0.97, y: 0.42 },
  { label: "CRM", x: 0.03, y: 0.58 },
  { label: "ANALYTICS", x: 0.06, y: 0.88 },
  { label: "AUTOMATION", x: 0.94, y: 0.82 },
];

// Split in two so callers can sandwich the window between them: lines
// render first (the window's opaque background then correctly covers the
// stub between node and window edge) and labels render after the window
// (so a window that happens to be narrower than expected never clips a
// label's tail — text width isn't something we can predict exactly).

export function ConnectionLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      {EXTERNAL_NODES.map((node) => {
        const cx = node.x * 100;
        const cy = node.y * 100;
        const edgeX = node.x < 0.5 ? 12 : 88;
        return (
          <line
            key={node.label}
            x1={cx}
            y1={cy}
            x2={edgeX}
            y2={cy}
            className="stroke-border-strong"
            strokeWidth={0.25}
          />
        );
      })}
    </svg>
  );
}

export function ConnectionLabels() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {EXTERNAL_NODES.map((node) => (
        <div
          key={node.label}
          className="absolute flex items-center gap-1.5"
          style={{
            left: `${node.x * 100}%`,
            top: `${node.y * 100}%`,
            transform: `translate(${node.x < 0.5 ? "0" : "-100%"}, -50%)`,
            flexDirection: node.x < 0.5 ? "row" : "row-reverse",
          }}
        >
          <span className="bg-accent h-1.5 w-1.5 shrink-0 rounded-full" />
          <span className="text-text-secondary font-mono text-[10px] tracking-wide">
            {node.label}
          </span>
        </div>
      ))}
    </div>
  );
}
