import NextLink from "next/link";
import { SITE_NAME } from "@/lib/seo/site";

interface WordmarkProps {
  href: string;
  className?: string;
}

// The site name as a link — a small accent mark plus the full name, shared
// by the navigation bar, the mobile menu and the footer.
export function Wordmark({ href, className }: WordmarkProps) {
  return (
    <NextLink
      href={href}
      className={`text-text flex shrink-0 items-center gap-2.5 rounded-full py-1 pr-2 font-semibold tracking-tight whitespace-nowrap ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="bg-accent-strong flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
      >
        JL
      </span>
      {SITE_NAME}
    </NextLink>
  );
}
