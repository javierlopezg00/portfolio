import { BrandMotif } from "@/components/illustrations/BrandMotif";
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
    <Section
      theme="dark"
      id="contact"
      ariaLabelledBy="contact-heading"
      className="relative overflow-hidden"
    >
      <BrandMotif
        corner="bl"
        className="absolute bottom-6 left-4 h-24 w-24 opacity-40 sm:h-32 sm:w-32 lg:bottom-10 lg:left-10"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Heading
              id="contact-heading"
              size="h1"
              as="h2"
              className="max-w-md"
            >
              {dict.contact.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-5 max-w-md">
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
            {/* The address in plain sight: some people would simply
                rather write it down than click anything. */}
            <div className="mt-8 flex flex-col gap-1">
              <a
                href={siteConfig.contact.mailto}
                className="text-text hover:text-accent focus-visible:ring-focus-ring duration-fast w-fit rounded-sm text-lg font-medium underline decoration-[color:var(--color-warm)] decoration-2 underline-offset-[6px] transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none"
              >
                {siteConfig.contact.email}
              </a>
              <Text tone="secondary" size="sm">
                {dict.contact.replyNote}
              </Text>
            </div>
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
