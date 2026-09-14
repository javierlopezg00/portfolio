import { cn } from "@/lib/cn";

interface OptionCardProps {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

// Native input + peer-checked styling: full keyboard/AT semantics for
// free, no reinvented ARIA radiogroup/checkbox behavior.
export function OptionCard({
  type,
  name,
  value,
  label,
  checked,
  onChange,
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
          "border-border-strong text-body-sm text-text duration-fast hover:border-accent/50 block cursor-pointer rounded-md border px-4 py-3 transition-colors ease-out",
          "peer-checked:border-accent peer-checked:bg-accent/10",
          "peer-focus-visible:ring-focus-ring peer-focus-visible:ring-2 peer-focus-visible:outline-none",
        )}
      >
        {label}
      </label>
    </div>
  );
}
