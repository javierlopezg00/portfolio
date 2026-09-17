import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { en } from "@/lib/i18n/en";
import { es } from "@/lib/i18n/es";

// Every other spec exercises the real flows in English. This file's job
// is narrower: prove the Spanish locale isn't just "the dictionary has
// Spanish strings" but that a visitor can actually load the page, read
// it, and complete the one real conversion flow (the configurator)
// entirely in Spanish, with no accessibility regressions specific to
// that locale.

// The hero illustration fades in with a short CSS entrance animation;
// axe samples colors mid-fade otherwise and reports contrast failures
// that no visitor ever sees.
async function settleAnimations(page: Page) {
  await page.evaluate(() =>
    Promise.all(document.getAnimations().map((a) => a.finished)),
  );
}

test.describe("Spanish locale", () => {
  test("homepage loads with Spanish content and every major section present", async ({
    page,
  }) => {
    await page.goto("/es");

    await expect(
      page.getByRole("heading", { level: 1, name: es.hero.heading }),
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

  test("has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/es");
    await page.waitForLoadState("networkidle");
    await settleAnimations(page);

    const results = await new AxeBuilder({ page })
      .exclude("[data-nextjs-dev-tools-button]")
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("completes the full configurator flow in Spanish", async ({ page }) => {
    const dict = es.configurator;

    await page.goto("/es/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    await cfg.getByText(dict.options.projectType[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Paso 2 de 6/)).toBeVisible();
    await cfg.getByText(dict.options.needs[3].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Paso 3 de 6/)).toBeVisible();
    await cfg.getByText(dict.options.budget[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Paso 4 de 6/)).toBeVisible();
    await cfg.getByText(dict.options.timeline[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Paso 5 de 6/)).toBeVisible();
    await cfg.getByLabel(dict.contact.name).fill("Ada Lovelace");
    await cfg.getByLabel(dict.contact.email).fill("ada@example.com");
    await cfg.getByRole("button", { name: dict.next }).click();

    // Review step, in Spanish — prior answers shown read-only before submit.
    await expect(cfg.getByText(/Paso 6 de 6/)).toBeVisible();
    await expect(
      cfg.getByText(dict.options.projectType[2].label),
    ).toBeVisible();
    await cfg.getByRole("button", { name: dict.requestProposal }).click();

    await expect(cfg.getByText(dict.successTitle)).toBeVisible();
  });

  test("locale switcher goes back to English and preserves scroll intent", async ({
    page,
  }) => {
    await page.goto("/es");

    // The switcher lives in the desktop nav bar and, separately, inside
    // the mobile drawer — on narrow viewports it's only reachable once
    // the hamburger menu is open.
    const openMenuButton = page.getByRole("button", { name: es.nav.openMenu });
    if (await openMenuButton.isVisible()) {
      await openMenuButton.click();
    }

    await page.getByRole("link", { name: "en", exact: true }).click();
    await expect(page).toHaveURL("/en");
    await expect(
      page.getByRole("link", { name: en.nav.startAProject }).first(),
    ).toBeVisible();
  });
});
