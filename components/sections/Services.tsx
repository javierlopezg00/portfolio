import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { ServiceCategoryCard } from "./services/ServiceCategoryCard";
import {
  CustomPreview,
  IntegrationsPreview,
  WebAppPreview,
  WebsitePreview,
} from "./services/previews";

const previews = [
  <WebsitePreview key="websites" />,
  <WebAppPreview key="web-apps" />,
  <IntegrationsPreview key="integrations" />,
  <CustomPreview key="custom" />,
];

export async function Services() {
  const dict = await getServerDictionary();

  return (
    <Section theme="light" id="services" ariaLabelledBy="services-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="services-heading" size="h2">
            {dict.services.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.services.subhead}
          </Text>
        </div>

        <Grid className="mt-12 grid-cols-1 sm:grid-cols-2">
          {dict.services.categories.map((category, i) => (
            <ServiceCategoryCard
              key={category.id}
              category={category}
              preview={previews[i]}
            />
          ))}
        </Grid>

        <Text tone="secondary" size="sm" className="mt-8">
          {dict.services.pricingSignal}
        </Text>
      </Container>
    </Section>
  );
}
