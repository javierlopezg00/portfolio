import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";
import { es } from "@/lib/i18n/es";

test.describe("404 page", () => {
  test("shows the not-found message with a way back home", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(
      page.getByRole("heading", { level: 1, name: en.notFound.heading }),
    ).toBeVisible();

    await page.getByRole("link", { name: en.notFound.backHome }).click();
    await expect(page).toHaveURL("/en");
  });

  test("has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/this-page-does-not-exist");
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .exclude("[data-nextjs-dev-tools-button]")
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("falls back to the global not-found page for paths the proxy never locale-prefixes", async ({
    page,
  }) => {
    // Paths under the proxy's excluded prefixes (icon/apple-icon/etc.)
    // never get a /en or /es prefix, so a bogus path under one of them
    // can't be caught by the per-locale not-found.tsx — only the root
    // global-not-found.tsx (see next.config.ts's globalNotFound flag).
    const response = await page.goto("/icon/this-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page).toHaveURL("/icon/this-does-not-exist");
    await expect(
      page.getByRole("heading", { level: 1, name: en.notFound.heading }),
    ).toBeVisible();
  });

  test("global not-found page respects a manually-chosen locale, even without a URL prefix to go on", async ({
    browser,
  }) => {
    // global-not-found.tsx receives no params — it can't see that the
    // request even had a locale prefix, let alone which one. It has to
    // negotiate the same way the proxy does (cookie, then
    // Accept-Language). This regression-tests that negotiation directly,
    // since it's easy to silently fall back to English-only here.
    const context = await browser.newContext();
    await context.addCookies([
      {
        name: "NEXT_LOCALE",
        value: "es",
        domain: "localhost",
        path: "/",
      },
    ]);
    const page = await context.newPage();

    const response = await page.goto("/icon/this-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { level: 1, name: es.notFound.heading }),
    ).toBeVisible();

    await context.close();
  });
});
