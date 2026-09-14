import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import { serviceCategories } from "@/lib/content/services";
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

export function Services() {
  return (
    <Section theme="light" id="services" ariaLabelledBy="services-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="services-heading" size="h2">
            What we build.
          </Heading>
          <Text tone="secondary" className="mt-4">
            Four categories. One team, end to end.
          </Text>
        </div>

        <Grid className="mt-12 grid-cols-1 sm:grid-cols-2">
          {serviceCategories.map((category, i) => (
            <ServiceCategoryCard
              key={category.id}
              category={category}
              preview={previews[i]}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
