import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function Process() {
  const dict = await getServerDictionary();

  return (
    <Section id="process" ariaLabelledBy="process-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="process-heading" size="h2">
            {dict.process.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.process.subhead}
          </Text>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step) => (
            <li key={step.number}>
              <span className="text-caption text-accent font-mono tracking-wide">
                {step.number}
              </span>
              <Heading size="h4" as="h3" className="mt-3">
                {step.title}
              </Heading>
              <Text tone="secondary" size="sm" className="mt-2">
                {step.description}
              </Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
