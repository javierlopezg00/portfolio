import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function Process() {
  const dict = await getServerDictionary();

  return (
    <Section theme="white" id="process" ariaLabelledBy="process-heading">
      <Container>
        <div className="max-w-2xl">
          <Heading id="process-heading" size="h2">
            {dict.process.heading}
          </Heading>
          <Text tone="secondary" size="lg" className="mt-4">
            {dict.process.subhead}
          </Text>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {dict.process.steps.map((step) => (
            <li
              key={step.number}
              className="border-border bg-surface flex gap-5 rounded-xl border p-6 shadow-sm md:flex-col md:gap-6 md:p-8"
            >
              <span className="bg-accent-strong flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white">
                {step.number}
              </span>
              <div>
                <Heading size="h4" as="h3">
                  {step.title}
                </Heading>
                <Text tone="secondary" className="mt-2">
                  {step.description}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
