import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { EvolutionSequence } from "./evolution/EvolutionSequence";

export async function SoftwareEvolution() {
  const dict = await getServerDictionary();

  return (
    <Section id="evolution" ariaLabelledBy="evolution-heading">
      <Container className="text-center">
        <Heading id="evolution-heading" size="h2">
          {dict.evolution.heading}
        </Heading>
        <Text tone="secondary" className="mx-auto mt-4 max-w-xl">
          {dict.evolution.subhead}
        </Text>
      </Container>
      <div className="mt-16">
        <EvolutionSequence />
      </div>
    </Section>
  );
}
