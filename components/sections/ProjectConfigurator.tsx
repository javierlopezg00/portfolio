import { Container, Heading, Section, Text } from "@/components/ui";
import { Configurator } from "./configurator/Configurator";

export function ProjectConfigurator() {
  return (
    <Section
      theme="light"
      id="configurator"
      ariaLabelledBy="configurator-heading"
    >
      <Container className="max-w-2xl">
        <div className="text-center">
          <Heading id="configurator-heading" size="h2">
            Let&apos;s scope your project.
          </Heading>
          <Text tone="secondary" className="mt-4">
            Five quick questions — no commitment, just a clearer picture.
          </Text>
        </div>

        <div className="mt-12">
          <Configurator />
        </div>
      </Container>
    </Section>
  );
}
