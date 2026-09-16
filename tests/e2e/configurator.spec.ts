import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";

const dict = en.configurator;

test.describe("Project Configurator", () => {
  test("completes the full 6-step flow, including the review step", async ({
    page,
  }) => {
    await page.goto("/en/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    await cfg.getByText(dict.options.projectType[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 2 of 6/)).toBeVisible();
    await cfg.getByText(dict.options.needs[3].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 3 of 6/)).toBeVisible();
    await cfg.getByText(dict.options.budget[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    await expect(cfg.getByText(/Step 4 of 6/)).toBeVisible();
    await cfg.getByText(dict.options.timeline[2].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();

    // Contact is no longer the last step — the button still reads "Next"
    // here, not the submit label.
    await expect(cfg.getByText(/Step 5 of 6/)).toBeVisible();
    await cfg.getByLabel(dict.contact.name).fill("Ada Lovelace");
    await cfg.getByLabel(dict.contact.email).fill("ada@example.com");
    await cfg.getByRole("button", { name: dict.next }).click();

    // Review step: prior answers are visible read-only before submitting.
    await expect(cfg.getByText(/Step 6 of 6/)).toBeVisible();
    await expect(
      cfg.getByText(dict.options.projectType[2].label),
    ).toBeVisible();
    await expect(cfg.getByText(dict.options.budget[2].label)).toBeVisible();
    await expect(cfg.getByText(/Ada Lovelace/)).toBeVisible();

    await cfg.getByRole("button", { name: dict.requestProposal }).click();
    await expect(cfg.getByText(dict.successTitle)).toBeVisible();
  });

  test("lets you edit an earlier answer from the review step", async ({
    page,
  }) => {
    await page.goto("/en/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    await cfg.getByText(dict.options.projectType[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByText(dict.options.needs[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByText(dict.options.budget[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByText(dict.options.timeline[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByLabel(dict.contact.name).fill("Ada Lovelace");
    await cfg.getByLabel(dict.contact.email).fill("ada@example.com");
    await cfg.getByRole("button", { name: dict.next }).click();
    await expect(cfg.getByText(/Step 6 of 6/)).toBeVisible();

    // Review rows render in a fixed order — the third Edit button is budget.
    await cfg
      .getByRole("button", { name: dict.review.editLabel })
      .nth(2)
      .click();
    await expect(cfg.getByText(/Step 3 of 6/)).toBeVisible();
    await expect(
      cfg.getByRole("radio", { name: dict.options.budget[0].label }),
    ).toBeChecked();

    // Change the answer and confirm it carries through to a fresh review.
    await cfg.getByText(dict.options.budget[1].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await expect(cfg.getByText(/Step 4 of 6/)).toBeVisible();
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

  test("review step has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    await cfg.getByText(dict.options.projectType[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByText(dict.options.needs[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByText(dict.options.budget[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByText(dict.options.timeline[0].label).click();
    await cfg.getByRole("button", { name: dict.next }).click();
    await cfg.getByLabel(dict.contact.name).fill("Ada Lovelace");
    await cfg.getByLabel(dict.contact.email).fill("ada@example.com");
    await cfg.getByRole("button", { name: dict.next }).click();
    await expect(cfg.getByText(/Step 6 of 6/)).toBeVisible();

    const results = await new AxeBuilder({ page })
      .include("#configurator")
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
