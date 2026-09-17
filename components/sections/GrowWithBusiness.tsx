import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { GrowthStory } from "./growth/GrowthStory";

export async function GrowWithBusiness() {
  const dict = await getServerDictionary();

  return (
    <Section theme="soft" id="growth" ariaLabelledBy="growth-heading">
      <Container>
        <div className="max-w-2xl">
          <Heading id="growth-heading" size="h2">
            {dict.growth.heading}
          </Heading>
          <Text tone="secondary" size="lg" className="mt-4">
            {dict.growth.subhead}
          </Text>
        </div>
        <div className="mt-14">
          <GrowthStory />
        </div>
        <Text size="lg" className="mt-16 text-center font-medium">
          {dict.growth.closing}
        </Text>
      </Container>
    </Section>
  );
}
