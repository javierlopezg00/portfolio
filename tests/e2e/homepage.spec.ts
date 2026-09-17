import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { en } from "@/lib/i18n/en";

// The hero illustration fades in with a short CSS entrance animation;
// axe samples colors mid-fade otherwise and reports contrast failures
// that no visitor ever sees.
async function settleAnimations(page: Page) {
  await page.evaluate(() =>
    Promise.all(document.getAnimations().map((a) => a.finished)),
  );
}

test.describe("Homepage", () => {
  test("loads with every major section present", async ({ page }) => {
    await page.goto("/en");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: en.hero.heading,
      }),
    ).toBeVisible();

    for (const id of [
      "#services",
      "#work",
      "#growth",
      "#who-i-work-with",
      "#process",
      "#lab",
      "#about",
      "#contact",
      "#configurator",
      "#faq",
    ]) {
      await expect(page.locator(id)).toBeAttached();
    }

    await expect(page.locator("footer")).toBeVisible();
  });

  test("has exactly one h1 and no skipped heading levels", async ({ page }) => {
    await page.goto("/en");

    const levels = await page
      .locator("h1,h2,h3,h4,h5,h6")
      .evaluateAll((els) => els.map((el) => Number(el.tagName[1])));

    expect(levels.filter((l) => l === 1)).toHaveLength(1);

    let previous = levels[0];
    for (const level of levels.slice(1)) {
      expect(level - previous).toBeLessThanOrEqual(1);
      previous = level;
    }
  });

  test("has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en");
    await page.waitForLoadState("networkidle");
    await settleAnimations(page);

    const results = await new AxeBuilder({ page })
      // The dev-only Next.js indicator isn't part of the shipped site.
      .exclude("[data-nextjs-dev-tools-button]")
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("skip link moves focus to main content", async ({ page }) => {
    await page.goto("/en");

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: en.skipLink })).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("redirects the bare root to a negotiated locale", async ({
    browser,
  }) => {
    // Playwright's dedicated `locale` context option sets Accept-Language
    // consistently for the actual navigation request — manually setting
    // extraHTTPHeaders here was unreliable, since Chromium's own
    // navigation-time header generation doesn't always defer to it.
    const context = await browser.newContext({ locale: "es-ES" });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page).toHaveURL("/es");
    await context.close();
  });

  test("locale switcher swaps the URL and persists the choice", async ({
    page,
  }) => {
    await page.goto("/en");

    // The switcher lives in the desktop nav bar and, separately, inside
    // the mobile drawer — on narrow viewports it's only reachable once
    // the hamburger menu is open.
    const openMenuButton = page.getByRole("button", { name: en.nav.openMenu });
    if (await openMenuButton.isVisible()) {
      await openMenuButton.click();
    }

    await page.getByRole("link", { name: "es", exact: true }).click();
    await expect(page).toHaveURL("/es");

    // A manual choice should stick even if the visitor later lands on an
    // unprefixed URL again (e.g. clicking an external link to "/").
    await page.goto("/");
    await expect(page).toHaveURL("/es");
  });
});
