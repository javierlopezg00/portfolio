import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { Configurator } from "./configurator/Configurator";

export async function ProjectConfigurator() {
  const dict = await getServerDictionary();

  return (
    <Section
      theme="light"
      id="configurator"
      ariaLabelledBy="configurator-heading"
    >
      <Container className="max-w-2xl">
        <div className="text-center">
          <Heading id="configurator-heading" size="h2">
            {dict.configurator.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.configurator.subhead}
          </Text>
        </div>

        <div className="mt-12">
          <Configurator />
        </div>
      </Container>
    </Section>
  );
}
