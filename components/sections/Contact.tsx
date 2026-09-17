import { MailIcon, WhatsAppIcon } from "@/components/illustrations/icons";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { getWhatsAppHref, siteConfig } from "@/lib/content/site";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { Configurator } from "./configurator/Configurator";

// The one conversion section: quick ways to reach out (WhatsApp, email)
// beside the quote configurator, so a visitor who just wants to say hello
// never has to click through a multi-step form — and one who wants a
// quote gets it in the same place. Dark for contrast; the form itself
// stays a light card so it reads as approachable.
export async function Contact() {
  const dict = await getServerDictionary();
  const whatsappHref = getWhatsAppHref(dict.contact.whatsappMessage);

  return (
    <Section theme="dark" id="contact" ariaLabelledBy="contact-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Heading id="contact-heading" size="h2">
              {dict.contact.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-4 max-w-md">
              {dict.contact.body}
            </Text>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {/* The quote form is the primary action, and from `lg` up it
                  sits right beside this column — so the button that jumps
                  to it only renders where the form is actually off-screen. */}
              <a
                href="#configurator"
                className={buttonStyles({ size: "lg", className: "lg:hidden" })}
              >
                {dict.configurator.heading}
              </a>
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
                href={siteConfig.contact.mailto}
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                <MailIcon width={20} height={20} />
                {dict.contact.email}
              </a>
            </div>
            <Text tone="secondary" size="sm" className="mt-5">
              {dict.contact.replyNote}
            </Text>
          </div>

          <div
            id="configurator"
            data-theme="light"
            data-scroll-target
            className="bg-surface text-text rounded-xl p-6 shadow-lg sm:p-8"
          >
            <Heading size="h3" as="h3">
              {dict.configurator.heading}
            </Heading>
            <Text tone="secondary" className="mt-2">
              {dict.configurator.subhead}
            </Text>
            <div className="mt-8">
              <Configurator />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
