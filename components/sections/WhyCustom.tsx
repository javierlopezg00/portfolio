import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function WhyCustom() {
  const dict = await getServerDictionary();

  return (
    <Section id="why-custom" ariaLabelledBy="why-custom-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="why-custom-heading" size="h2">
            {dict.whyCustom.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.whyCustom.subhead}
          </Text>
        </div>

        <Grid className="mt-12 grid-cols-1 sm:grid-cols-3">
          {dict.whyCustom.items.map((item) => (
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
