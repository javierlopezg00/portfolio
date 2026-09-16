import { ConfiguratorCtaLink } from "@/components/layout/ConfiguratorCtaLink";
import {
  Container,
  Heading,
  Link,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { secondaryContactHref } from "@/lib/content/nav";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

// Rendered at the end of every case study (Meridian, Ember & Oak, Kestrel)
// so a visitor who reads the whole page never lands passively on the
// footer — same dual primary/secondary CTA pattern as the homepage's
// FinalCTA, reused here rather than duplicated.
export async function CaseStudyCTA() {
  const dict = await getServerDictionary();
  const cta = dict.work.caseStudyCta;

  return (
    <Section ariaLabelledBy="case-study-cta-heading" id="next-steps">
      <Container className="max-w-2xl text-center">
        <Heading id="case-study-cta-heading" size="h2">
          {cta.heading}
        </Heading>
        <Text tone="secondary" className="mx-auto mt-4 max-w-lg">
          {cta.body}
        </Text>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ConfiguratorCtaLink className={buttonStyles({ size: "lg" })}>
            {cta.primaryCta}
          </ConfiguratorCtaLink>
          <Link href={secondaryContactHref} className="text-body underline">
            {cta.secondaryCta}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
