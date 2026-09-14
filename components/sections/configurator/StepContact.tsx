import { Heading, Input } from "@/components/ui";

interface ContactValues {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  honeypot: string;
}

interface StepContactProps {
  values: ContactValues;
  errors: Record<string, string>;
  onChange: (field: keyof ContactValues, value: string) => void;
}

export function StepContact({ values, errors, onChange }: StepContactProps) {
  return (
    <div>
      <Heading size="h3">How can we reach you?</Heading>
      <div className="mt-6 flex flex-col gap-5">
        <Input
          label="Name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
          error={errors.name}
        />
        <Input
          label="Company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => onChange("company", e.target.value)}
          hint="Optional"
        />
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
        />
        <Input
          label="WhatsApp"
          type="tel"
          autoComplete="tel"
          value={values.whatsapp}
          onChange={(e) => onChange("whatsapp", e.target.value)}
          hint="Optional"
        />

        {/* Honeypot: hidden from real users via sr-only, tabIndex -1 so
            keyboard users skip it. A filled value marks a submission as
            spam server-side. */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website-field">Leave this field empty</label>
          <input
            id="website-field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.honeypot}
            onChange={(e) => onChange("honeypot", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
