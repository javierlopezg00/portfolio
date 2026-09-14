import { Heading, Text } from "@/components/ui";
import { needsOptions } from "@/lib/content/configurator-options";
import { OptionCard } from "./OptionCard";

interface StepNeedsProps {
  value: string[];
  onChange: (needs: string[]) => void;
  error?: string;
}

export function StepNeeds({ value, onChange, error }: StepNeedsProps) {
  function toggle(id: string) {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id],
    );
  }

  return (
    <div>
      <Heading size="h3">What does your business need?</Heading>
      <Text tone="secondary" size="sm" className="mt-2">
        Select all that apply.
      </Text>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {needsOptions.map((opt) => (
          <OptionCard
            key={opt.id}
            type="checkbox"
            name="needs"
            value={opt.id}
            label={opt.label}
            checked={value.includes(opt.id)}
            onChange={() => toggle(opt.id)}
          />
        ))}
      </div>
      {error && (
        <p role="alert" className="text-caption mt-3 text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
