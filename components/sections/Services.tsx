import { CheckIcon } from "@/components/illustrations/icons";
import { Card, Container, Grid, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import {
  OnlineIllustration,
  SoftwareIllustration,
  WebsiteIllustration,
} from "./services/illustrations";

export async function Services() {
  const dict = await getServerDictionary();
  const illustrations = [
    <WebsiteIllustration key="websites" />,
    <OnlineIllustration key="online" label={dict.services.paymentLabel} />,
    <SoftwareIllustration key="software" />,
  ];

  return (
    <Section theme="white" id="services" ariaLabelledBy="services-heading">
      <Container>
        <div className="max-w-2xl">
          <Heading id="services-heading" size="h2">
            {dict.services.heading}
          </Heading>
          <Text tone="secondary" size="lg" className="mt-4">
            {dict.services.subhead}
          </Text>
        </div>

        <Grid className="mt-12 grid-cols-1 md:grid-cols-3">
          {dict.services.categories.map((category, i) => (
            <Card
              key={category.id}
              className="@container flex flex-col gap-6 p-5 sm:p-5"
            >
              {illustrations[i]}
              <div className="flex flex-1 flex-col gap-4 px-1 pb-1">
                <div>
                  <Heading size="h3" as="h3">
                    {category.title}
                  </Heading>
                  <Text tone="secondary" className="mt-2">
                    {category.description}
                  </Text>
                </div>
                <ul className="flex flex-col gap-2">
                  {category.examples.map((item) => (
                    <li
                      key={item}
                      className="text-body-sm text-text flex items-center gap-2.5"
                    >
                      <CheckIcon
                        className="text-accent shrink-0"
                        width={16}
                        height={16}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Text
                  size="sm"
                  className="border-border mt-auto border-t pt-4 font-medium"
                >
                  {category.pricing}
                </Text>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
