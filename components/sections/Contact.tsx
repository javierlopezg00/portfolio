import { BrandMotif } from "@/components/illustrations/BrandMotif";
import {
  ArrowRightIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/illustrations/icons";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { getWhatsAppHref, siteConfig } from "@/lib/content/site";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { LazyConfigurator } from "./configurator/LazyConfigurator";

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
            </div>
            {/* Tertiary: a plain text link, deliberately below the two
                buttons in weight so it never competes with the quote. */}
            <a
              href={siteConfig.contact.mailto}
              className="text-text hover:text-accent duration-fast group mt-5 inline-flex w-fit items-center gap-2 rounded-sm font-medium transition-colors ease-out"
            >
              <MailIcon width={18} height={18} />
              {dict.contact.email}
              <ArrowRightIcon
                width={16}
                height={16}
                className="duration-fast transition-transform ease-out group-hover:translate-x-0.5"
              />
            </a>
            {/* The address in plain sight: some people would simply
                rather write it down than click anything. */}
            <div className="mt-6 flex flex-col gap-0.5">
              <Text tone="secondary" size="sm" className="select-all">
                {siteConfig.contact.email}
              </Text>
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
              <LazyConfigurator />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
