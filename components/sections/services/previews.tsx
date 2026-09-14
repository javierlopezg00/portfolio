import { cn } from "@/lib/cn";

// Illustrative previews, not functional demos — real interactive software
// lives in the Interactive Lab section. Reuses the same wireframe visual
// language as the Software Evolution sequence for consistency. All
// animation here is plain CSS group-hover; no JS needed for this.

export function WebsitePreview() {
  return (
    <div className="border-border bg-background/40 flex h-full flex-col gap-2 rounded-md border p-3">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="bg-text-secondary/30 h-1.5 w-1.5 rounded-full"
          />
        ))}
      </div>
      <div className="mt-1 flex flex-col gap-1.5">
        <div className="bg-text/60 duration-base h-2 w-2/3 rounded-full opacity-60 transition-opacity ease-out group-hover:opacity-100" />
        <div
          className="bg-text-secondary/40 duration-base h-1.5 w-1/2 rounded-full opacity-60 transition-opacity ease-out group-hover:opacity-100"
          style={{ transitionDelay: "60ms" }}
        />
        <div
          className="bg-accent duration-base mt-1 h-4 w-10 rounded-full opacity-60 transition-opacity ease-out group-hover:opacity-100"
          style={{ transitionDelay: "120ms" }}
        />
      </div>
    </div>
  );
}

export function WebAppPreview() {
  const bars = [40, 70, 55, 85];
  return (
    <div className="border-border bg-background/40 flex h-full gap-2 rounded-md border p-3">
      <div className="flex flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "h-2 w-2 rounded-sm",
              i === 0 ? "bg-accent/70" : "bg-text-secondary/30",
            )}
          />
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="bg-accent/60 duration-base flex-1 origin-bottom scale-y-75 rounded-t-sm opacity-60 transition-all ease-out group-hover:scale-y-100 group-hover:opacity-100"
            style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export function IntegrationsPreview() {
  const nodes = ["API", "CRM", "PAY", "MAIL"];
  return (
    <div className="border-border bg-background/40 relative grid h-full grid-cols-2 grid-rows-2 place-items-center gap-1 rounded-md border p-3">
      <span className="bg-accent pointer-events-none absolute h-2 w-2 rounded-full" />
      {nodes.map((node, i) => (
        // The "recede until hover" treatment lives on the border/background
        // only — those are non-text UI elements (WCAG 1.4.11, 3:1). The
        // text itself stays at full opacity/contrast always; fading it
        // too dropped it to 2.28:1 on the light Services section, well
        // under the 4.5:1 normal-text minimum.
        <span
          key={node}
          className="bg-surface text-text-secondary duration-base group-hover:border-accent/40 group-hover:bg-accent/5 rounded-full border border-transparent px-2 py-0.5 font-mono text-[9px] tracking-wide transition-colors ease-out"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {node}
        </span>
      ))}
    </div>
  );
}

export function CustomPreview() {
  return (
    <div className="border-border bg-background/40 flex h-full items-center justify-center gap-2 rounded-md border p-3">
      <span className="bg-accent/40 duration-base h-8 w-8 rotate-6 rounded-lg transition-transform ease-out group-hover:rotate-0" />
      <span
        className="bg-text-secondary/30 duration-base h-10 w-6 -rotate-3 rounded-full transition-transform ease-out group-hover:rotate-0"
        style={{ transitionDelay: "40ms" }}
      />
      <span
        className="bg-text-secondary/20 duration-base h-6 w-10 rotate-3 rounded-md transition-transform ease-out group-hover:rotate-0"
        style={{ transitionDelay: "80ms" }}
      />
    </div>
  );
}
