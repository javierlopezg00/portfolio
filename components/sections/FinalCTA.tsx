import NextLink from "next/link";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { primaryCtaHref } from "@/lib/content/nav";
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
          <NextLink
            href={primaryCtaHref}
            className={buttonStyles({ size: "lg" })}
          >
            {dict.finalCta.cta}
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
