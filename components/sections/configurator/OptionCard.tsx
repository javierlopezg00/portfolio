import { cn } from "@/lib/cn";

interface OptionCardProps {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  /** Which brand the control belongs to. "brand" is Javier López
   * Digital's own terracotta (the quote configurator); "demo" is the
   * blue the conceptual projects use for their own booking, reservation
   * and inquiry flows — those are the client's forms, not this site's. */
  tone?: "brand" | "demo";
}

// Native input + peer-checked styling: full keyboard/AT semantics for
// free, no reinvented ARIA radiogroup/checkbox behavior.
const toneClass = {
  brand: "peer-checked:border-accent peer-checked:bg-accent-soft",
  demo: "peer-checked:border-demo peer-checked:bg-demo-soft",
} as const;

export function OptionCard({
  type,
  name,
  value,
  label,
  checked,
  onChange,
  tone = "brand",
}: OptionCardProps) {
  const id = `${name}-${value}`;
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <label
        htmlFor={id}
        className={cn(
          "border-border-strong text-body-sm text-text duration-fast hover:border-border block cursor-pointer rounded-md border px-4 py-3 transition-colors ease-out",
          toneClass[tone],
          // The input itself is sr-only, so the visible label carries the
          // focus ring on its behalf.
          "peer-focus-visible:outline-focus-ring peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2",
        )}
      >
        {label}
      </label>
    </div>
  );
}
