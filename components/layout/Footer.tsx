import NextLink from "next/link";
import { Container } from "@/components/ui";
import { contactEmail, getWhatsAppHref } from "@/lib/content/nav";
import {
  getServerDictionary,
  getServerLocale,
} from "@/lib/i18n/getServerDictionary";
import { StartProjectLink } from "./StartProjectLink";
import { Wordmark } from "./Wordmark";

const currentYear = new Date().getFullYear();

const linkClass =
  "text-body-sm text-text-secondary duration-fast hover:text-text focus-visible:ring-focus-ring inline-block rounded-sm py-1 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none";

export async function Footer() {
  const locale = await getServerLocale();
  const dict = await getServerDictionary();
  const whatsappHref = getWhatsAppHref(dict.contact.whatsappMessage);

  return (
    <footer data-theme="dark" className="bg-background text-text">
      <Container className="flex flex-col gap-12 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Wordmark href={`/${locale}`} />
            <p className="text-body-sm text-text-secondary mt-4">
              {dict.footer.tagline}
            </p>
          </div>

          <nav
            aria-label={dict.footer.footerAriaLabel}
            className="flex flex-col gap-8 sm:flex-row sm:gap-16"
          >
            <ul className="flex flex-col gap-2">
              {dict.nav.links.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={`/${locale}${link.href}`}
                    className={linkClass}
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
              <li>
                <NextLink href={`/${locale}/lab`} className={linkClass}>
                  {dict.footer.lab}
                </NextLink>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <StartProjectLink className={linkClass}>
                  {dict.footer.startAProject}
                </StartProjectLink>
              </li>
              {whatsappHref && (
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className={`${linkClass} break-all`}
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="border-border text-caption text-text-secondary border-t pt-8">
          {dict.footer.copyright(currentYear)}
        </p>
      </Container>
    </footer>
  );
}
