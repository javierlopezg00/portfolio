import { cn } from "@/lib/cn";

// Abstract wireframe layouts, same visual language as Evolution/Services —
// not photorealistic fake screenshots. Each uses @container query classes
// so the desktop/mobile toggle in DeviceFrame produces genuine reflow,
// not two hand-built static states.

export function ClinicPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="bg-text/60 h-2 w-16 rounded-full" />
        <div className="hidden gap-3 @sm:flex">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-text-secondary/30 h-1.5 w-8 rounded-full"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-text/70 h-3 w-3/4 rounded-full" />
        <div className="bg-text-secondary/40 h-2 w-1/2 rounded-full" />
        <div className="bg-accent mt-2 h-7 w-32 rounded-full" />
      </div>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border-border bg-background/40 flex flex-col gap-2 rounded-md border p-3"
          >
            <div className="bg-accent/30 h-8 w-8 rounded-full" />
            <div className="bg-text-secondary/40 h-2 w-full rounded-full" />
            <div className="bg-text-secondary/30 h-2 w-2/3 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function RestaurantPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="bg-text/60 h-2 w-16 rounded-full" />
        <div className="bg-accent h-7 w-24 rounded-full" />
      </div>
      <div className="grid grid-cols-2 gap-2 @sm:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-text-secondary/15 aspect-square rounded-md",
              i > 2 && "hidden @sm:block",
            )}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="bg-text-secondary/40 h-2 flex-1 rounded-full" />
            <div className="bg-text/50 h-2 w-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConsultingPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="bg-text/60 h-2 w-16 rounded-full" />
        <div className="hidden gap-3 @sm:flex">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-text-secondary/30 h-1.5 w-8 rounded-full"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-text/70 h-3 w-2/3 rounded-full" />
        <div className="bg-text-secondary/40 h-2 w-1/2 rounded-full" />
      </div>
      <div className="grid grid-cols-1 gap-4 @sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border-border bg-background/40 flex flex-col gap-1 rounded-md border p-3"
          >
            <div className="bg-accent/60 h-4 w-12 rounded-full" />
            <div className="bg-text-secondary/30 h-2 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
