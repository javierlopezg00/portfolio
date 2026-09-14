import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";

const dict = en.configurator;

test.describe("Project Configurator", () => {
  test("completes the full 5-step flow", async ({ page }) => {
    await page.goto("/en/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    await cfg.getByText(dict.options.projectType[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 2 of 5/)).toBeVisible();
    await cfg.getByText(dict.options.needs[3].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 3 of 5/)).toBeVisible();
    await cfg.getByText(dict.options.budget[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 4 of 5/)).toBeVisible();
    await cfg.getByText(dict.options.timeline[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 5 of 5/)).toBeVisible();
    await cfg.getByLabel(dict.contact.name).fill("Ada Lovelace");
    await cfg.getByLabel(dict.contact.email).fill("ada@example.com");
    await cfg.getByRole("button", { name: dict.requestProposal }).click();

    await expect(cfg.getByText(dict.successTitle)).toBeVisible();
  });

  test("shows an accessible error without accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    // Trigger the step-1 validation error state and scan it — error states
    // are a common place for accessibility regressions to hide.
    await cfg.getByRole("button", { name: dict.next }).click();
    await expect(
      cfg.getByText(en.validation.projectTypeRequired),
    ).toBeVisible();

    const results = await new AxeBuilder({ page })
      .include("#configurator")
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
