import { Heading } from "@/components/ui";
import type { ConfiguratorOption } from "@/lib/content/configurator-options";
import { OptionCard } from "./OptionCard";

interface StepSingleSelectProps {
  heading: string;
  name: string;
  options: ConfiguratorOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

// Shared by the project-type, budget, and timeline steps — structurally
// identical single-select questions, just different options.
export function StepSingleSelect({
  heading,
  name,
  options,
  value,
  onChange,
  error,
}: StepSingleSelectProps) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <div>
      <Heading size="h3">{heading}</Heading>
      <div
        role="radiogroup"
        aria-label={heading}
        aria-describedby={errorId}
        className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {options.map((opt) => (
          <OptionCard
            key={opt.id}
            type="radio"
            name={name}
            value={opt.id}
            label={opt.label}
            checked={value === opt.id}
            onChange={() => onChange(opt.id)}
          />
        ))}
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-caption text-error mt-3">
          {error}
        </p>
      )}
    </div>
  );
}
