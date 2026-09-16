import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function WhoIWorkWith() {
  const dict = await getServerDictionary();

  return (
    <Section
      theme="light"
      id="who-i-work-with"
      ariaLabelledBy="who-i-work-with-heading"
    >
      <Container>
        <div className="max-w-xl">
          <Heading id="who-i-work-with-heading" size="h2">
            {dict.whoIWorkWith.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.whoIWorkWith.subhead}
          </Text>
        </div>

        <Grid className="mt-12 grid-cols-1 sm:grid-cols-3">
          {dict.whoIWorkWith.items.map((item) => (
            <div key={item.title} className="border-accent/30 border-l-2 pl-4">
              <Heading size="h4" as="h3">
                {item.title}
              </Heading>
              <Text tone="secondary" size="sm" className="mt-1">
                {item.description}
              </Text>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
