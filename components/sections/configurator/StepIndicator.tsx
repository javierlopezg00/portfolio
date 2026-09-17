import { cn } from "@/lib/cn";

interface StepIndicatorProps {
  current: number;
  total: number;
  text: string;
  /** See OptionCard — "demo" keeps a conceptual project's own blue. */
  tone?: "brand" | "demo";
}

export function StepIndicator({
  current,
  total,
  text,
  tone = "brand",
}: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <p aria-live="polite" className="text-body-sm text-text-secondary">
        {text}
      </p>
      <div className="bg-border mt-3 h-1 w-full overflow-hidden rounded-full">
        <div
          className={cn(
            "duration-base h-1 rounded-full transition-all ease-out",
            tone === "demo" ? "bg-demo" : "bg-accent",
          )}
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
