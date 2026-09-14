import { Container, Heading, Section, Text } from "@/components/ui";
import { EvolutionSequence } from "./evolution/EvolutionSequence";

export function SoftwareEvolution() {
  return (
    <Section id="evolution" ariaLabelledBy="evolution-heading">
      <Container className="text-center">
        <Heading id="evolution-heading" size="h2">
          From website to software.
        </Heading>
        <Text tone="secondary" className="mx-auto mt-4 max-w-xl">
          The same interface, evolving as your business grows.
        </Text>
      </Container>
      <div className="mt-16">
        <EvolutionSequence />
      </div>
    </Section>
  );
}
