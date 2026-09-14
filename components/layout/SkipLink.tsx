import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function SkipLink() {
  const dict = await getServerDictionary();

  return (
    <a
      href="#main-content"
      className="focus:bg-accent-strong focus:text-body-sm focus:ring-focus-ring focus:ring-offset-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:px-4 focus:py-2 focus:font-medium focus:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
    >
      {dict.skipLink}
    </a>
  );
}
