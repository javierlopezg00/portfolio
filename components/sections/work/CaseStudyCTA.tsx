import { MailIcon, WhatsAppIcon } from "@/components/illustrations/icons";
import { StartProjectLink } from "@/components/layout/StartProjectLink";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { getWhatsAppHref, secondaryContactHref } from "@/lib/content/nav";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

// Rendered at the end of every case study and the lab so a visitor who
// reads the whole page never lands passively on the footer — the same
// three ways to get in touch as the homepage's contact section.
export async function CaseStudyCTA() {
  const dict = await getServerDictionary();
  const cta = dict.work.caseStudyCta;
  const whatsappHref = getWhatsAppHref(dict.contact.whatsappMessage);

  return (
    <Section
      theme="dark"
      ariaLabelledBy="case-study-cta-heading"
      id="next-steps"
    >
      <Container className="max-w-2xl text-center">
        <Heading id="case-study-cta-heading" size="h2">
          {cta.heading}
        </Heading>
        <Text tone="secondary" size="lg" className="mx-auto mt-4 max-w-lg">
          {cta.body}
        </Text>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <StartProjectLink className={buttonStyles({ size: "lg" })}>
            {cta.primaryCta}
          </StartProjectLink>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ variant: "whatsapp", size: "lg" })}
            >
              <WhatsAppIcon width={20} height={20} />
              {dict.contact.whatsapp}
            </a>
          )}
          <a
            href={secondaryContactHref}
            className={buttonStyles({ variant: "secondary", size: "lg" })}
          >
            <MailIcon width={20} height={20} />
            {dict.contact.email}
          </a>
        </div>
      </Container>
    </Section>
  );
}
