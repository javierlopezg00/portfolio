import NextLink from "next/link";
import { Container } from "@/components/ui";
import { primaryCtaHref } from "@/lib/content/nav";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

const currentYear = new Date().getFullYear();

export async function Footer() {
  const dict = await getServerDictionary();

  return (
    <footer className="border-border bg-background border-t">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <span className="text-body-sm text-text font-semibold tracking-wide">
              JL
            </span>
            <p className="text-body-sm text-text-secondary mt-3">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label={dict.footer.footerAriaLabel} className="flex gap-12">
            <ul className="flex flex-col gap-3">
              {dict.nav.links.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-body-sm text-text-secondary duration-fast hover:text-text transition-colors ease-out"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <NextLink
                  href={primaryCtaHref}
                  className="text-body-sm text-text-secondary duration-fast hover:text-text transition-colors ease-out"
                >
                  {dict.footer.startAProject}
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-border text-caption text-text-secondary flex flex-col gap-2 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>{dict.footer.copyright(currentYear)}</p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </Container>
    </footer>
  );
}
