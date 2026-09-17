import { BrandMotif } from "@/components/illustrations/BrandMotif";
import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { GrowthStory } from "./growth/GrowthStory";

export async function GrowWithBusiness() {
  const dict = await getServerDictionary();

  return (
    <Section theme="dark" id="growth" ariaLabelledBy="growth-heading">
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
        {/* The closing line is the section's last word — set in the
            display face and given room, rather than another body
            paragraph. */}
        <div className="mt-20 flex flex-col items-center gap-5 text-center">
          <BrandMotif corner="tl" tone="accent" className="h-10 w-10" />
          <Heading size="h3" as="p" className="max-w-lg">
            {dict.growth.closing}
          </Heading>
        </div>
      </Container>
    </Section>
  );
}
