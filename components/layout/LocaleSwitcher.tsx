"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { getDictionary, locales } from "@/lib/i18n/getDictionary";
import { LOCALE_COOKIE } from "@/lib/i18n/negotiateLocale";
import { useLocale } from "@/lib/i18n/useLocale";

function swapLocale(pathname: string | null, target: string) {
  if (!pathname) return `/${target}`;
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

// Remembers a manual language choice so the proxy doesn't bounce the
// visitor back to their browser's preferred locale the next time they
// land on an unprefixed URL (e.g. an external link straight to "/").
function rememberLocale(target: string) {
  document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
}

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "text-body-sm text-text-secondary flex items-center gap-1",
        className,
      )}
      aria-label={dict.localeSwitcher.ariaLabel}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true">/</span>}
          <NextLink
            href={swapLocale(pathname, l)}
            onClick={() => rememberLocale(l)}
            aria-current={l === locale ? "true" : undefined}
            className={cn(
              "duration-fast rounded-sm px-1.5 py-1 uppercase transition-colors ease-out",
              l === locale ? "text-text font-semibold" : "hover:text-text",
            )}
          >
            {l}
          </NextLink>
        </span>
      ))}
    </div>
  );
}
