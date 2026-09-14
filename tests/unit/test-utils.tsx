import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/getDictionary";

export function renderWithLocale(
  ui: ReactElement,
  { locale = "en" }: { locale?: Locale } = {},
  options?: RenderOptions,
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    ),
    ...options,
  });
}
