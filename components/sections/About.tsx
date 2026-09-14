import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function About() {
  const dict = await getServerDictionary();

  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Heading id="about-heading" size="h2">
              {dict.about.heading}
            </Heading>
            <div className="mt-6 flex flex-col gap-4">
              {dict.about.body.map((paragraph) => (
                <Text key={paragraph} tone="secondary">
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {dict.about.principles.map((principle) => (
              <div
                key={principle.title}
                className="border-accent/30 border-l-2 pl-4"
              >
                <Heading size="h4" as="h3">
                  {principle.title}
                </Heading>
                <Text tone="secondary" size="sm" className="mt-1">
                  {principle.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
