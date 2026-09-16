import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { ConfiguratorCtaLink } from "@/components/layout/ConfiguratorCtaLink";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function FinalCTA() {
  const dict = await getServerDictionary();

  return (
    <Section id="contact" ariaLabelledBy="final-cta-heading">
      <Container className="max-w-2xl text-center">
        <Heading id="final-cta-heading" size="display" as="h2">
          {dict.finalCta.heading}
        </Heading>
        <Text tone="secondary" size="lg" className="mx-auto mt-6 max-w-lg">
          {dict.finalCta.body}
        </Text>
        <div className="mt-10 flex justify-center">
          <ConfiguratorCtaLink className={buttonStyles({ size: "lg" })}>
            {dict.finalCta.cta}
          </ConfiguratorCtaLink>
        </div>
      </Container>
    </Section>
  );
}
