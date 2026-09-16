"use client";

import { Button, Heading, Text } from "@/components/ui";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";

interface ReviewFormState {
  projectType: string;
  needs: string[];
  budget: string;
  timeline: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
}

interface StepReviewProps {
  state: ReviewFormState;
  onEdit: (stepKey: string) => void;
}

// A read-only summary of everything answered so far, with a per-field
// "Edit" affordance — no new fields, no new validation, no change to what
// gets submitted. Each Edit button jumps straight to that field's step via
// the reducer's existing SET_STEP (Configurator.tsx already supports an
// arbitrary index; goBack() just happens to only ever use step - 1).
export function StepReview({ state, onEdit }: StepReviewProps) {
  const dict = getDictionary(useLocale());
  const { options } = dict.configurator;
  const { sectionLabels, notProvided } = dict.configurator.review;

  const labelFor = (list: { id: string; label: string }[], id: string) =>
    list.find((opt) => opt.id === id)?.label ?? id;

  const rows: { key: string; label: string; value: string }[] = [
    {
      key: "projectType",
      label: sectionLabels.projectType,
      value: labelFor(options.projectType, state.projectType),
    },
    {
      key: "needs",
      label: sectionLabels.needs,
      value: state.needs.map((id) => labelFor(options.needs, id)).join(", "),
    },
    {
      key: "budget",
      label: sectionLabels.budget,
      value: labelFor(options.budget, state.budget),
    },
    {
      key: "timeline",
      label: sectionLabels.timeline,
      value: labelFor(options.timeline, state.timeline),
    },
    {
      key: "contact",
      label: sectionLabels.contact,
      value: [
        state.name,
        state.email,
        state.company || notProvided,
        state.whatsapp || notProvided,
      ].join(" · "),
    },
  ];

  return (
    <div>
      <Heading size="h3">{dict.configurator.review.heading}</Heading>
      <div className="mt-6 flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.key} className="border-border rounded-lg border p-4">
            <div className="flex items-start justify-between gap-4">
              <Text
                size="sm"
                tone="secondary"
                className="tracking-wide uppercase"
              >
                {row.label}
              </Text>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => onEdit(row.key)}
              >
                {dict.configurator.review.editLabel}
              </Button>
            </div>
            <Text className="mt-1.5 font-medium">{row.value}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
