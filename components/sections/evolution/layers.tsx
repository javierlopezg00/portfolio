import { cn } from "@/lib/cn";

// Abstract, schematic pieces — bars and blocks standing in for text/content,
// not a literal fake product screenshot. Deliberately generic: this
// represents "a website," not any specific real client.

export function TopNavLayer() {
  return (
    <div className="flex items-center gap-6">
      <div className="bg-text/60 h-2 w-10 rounded-full" />
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-text-secondary/40 h-2 w-12 rounded-full" />
        ))}
      </div>
    </div>
  );
}

export function HeroBlockLayer() {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-text/70 h-3 w-40 rounded-full" />
      <div className="bg-text-secondary/40 h-2 w-56 rounded-full" />
      <div className="bg-accent mt-4 h-8 w-28 rounded-full" />
    </div>
  );
}

export function CardsGridLayer() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="border-border bg-background/40 flex flex-col gap-2 rounded-md border p-3"
        >
          <div className="bg-accent/60 h-5 w-5 rounded-full" />
          <div className="bg-text-secondary/40 h-2 w-full rounded-full" />
          <div className="bg-text-secondary/30 h-2 w-2/3 rounded-full" />
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

export function DashboardLayer() {
  const bars = [40, 65, 50, 80, 60, 90, 70];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border-border bg-background/40 flex flex-col gap-1.5 rounded-md border p-3"
          >
            <div className="bg-text-secondary/40 h-2 w-12 rounded-full" />
            <div className="bg-text/70 h-4 w-16 rounded-full" />
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
