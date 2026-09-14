"use client";

import { Heading, Text } from "@/components/ui";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { OptionCard } from "./OptionCard";

interface StepNeedsProps {
  value: string[];
  onChange: (needs: string[]) => void;
  error?: string;
}

export function StepNeeds({ value, onChange, error }: StepNeedsProps) {
  const dict = getDictionary(useLocale());

  function toggle(id: string) {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id],
    );
  }

  return (
    <div>
      <Heading size="h3">{dict.configurator.needs.heading}</Heading>
      <Text tone="secondary" size="sm" className="mt-2">
        {dict.configurator.needs.selectAllThatApply}
      </Text>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {dict.configurator.options.needs.map((opt) => (
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
        <p role="alert" className="text-caption text-error mt-3">
          {error}
        </p>
      )}
    </div>
  );
}
