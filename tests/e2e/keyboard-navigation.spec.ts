import { expect, test } from "@playwright/test";

// Other specs mostly interact via .click() — this file exists specifically
// to prove the two most complex flows on the site (the Configurator's
// review step and the Meridian clinic booking flow) are actually operable
// with a keyboard alone, not just clickable and axe-clean.

test.describe("Keyboard navigation", () => {
  test("configurator review step is keyboard operable end to end", async ({
    page,
  }) => {
    await page.goto("/en/#configurator");
    const cfg = page.locator("#configurator");
    await cfg.scrollIntoViewIfNeeded();

    // Each step: focus the relevant control directly (proving it's a real
    // focusable element with the right role) and drive it via keyboard
    // only — arrow keys for radiogroups, Space for checkboxes, Enter to
    // submit.
    await cfg.getByRole("radio").first().focus();
    await page.keyboard.press("ArrowDown");
    await cfg.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(cfg.getByText(/Step 2 of 6/)).toBeVisible();

    await cfg.getByRole("checkbox").first().focus();
    await page.keyboard.press("Space");
    await cfg.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(cfg.getByText(/Step 3 of 6/)).toBeVisible();

    await cfg.getByRole("radio").first().focus();
    await page.keyboard.press("ArrowDown");
    await cfg.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(cfg.getByText(/Step 4 of 6/)).toBeVisible();

    await cfg.getByRole("radio").first().focus();
    await page.keyboard.press("ArrowDown");
    await cfg.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(cfg.getByText(/Step 5 of 6/)).toBeVisible();

    await cfg.getByLabel("Name").focus();
    await page.keyboard.type("Ada Lovelace");
    await cfg.getByLabel("Email").focus();
    await page.keyboard.type("ada@example.com");
    await cfg.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(cfg.getByText(/Step 6 of 6/)).toBeVisible();

    // Review step: Edit buttons are real, labeled, focusable buttons that
    // respond to Enter — jumping back to the budget step (index 2).
    const editButtons = cfg.getByRole("button", { name: "Edit" });
    await editButtons.nth(2).focus();
    await expect(editButtons.nth(2)).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(cfg.getByText(/Step 3 of 6/)).toBeVisible();
  });

  test("clinic booking flow is keyboard operable end to end", async ({
    page,
  }) => {
    await page.goto("/en/work/clinic#book");
    const flow = page.locator("#book");
    await flow.scrollIntoViewIfNeeded();

    await flow.getByRole("radio", { name: "General checkup" }).focus();
    await page.keyboard.press("Space");
    await flow.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(flow.getByText(/Step 2 of 4/)).toBeVisible();

    await flow.getByRole("radio", { name: /Dr\. Elena Ruiz/ }).focus();
    await page.keyboard.press("Space");
    await flow.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(flow.getByText(/Step 3 of 4/)).toBeVisible();

    const dayButton = flow
      .locator("button[aria-pressed]:not([disabled])")
      .first();
    await dayButton.focus();
    await page.keyboard.press("Enter");
    const timeButton = flow
      .locator("button[aria-pressed]")
      .filter({ hasNotText: /^\d{1,2}$/ })
      .first();
    await timeButton.focus();
    await page.keyboard.press("Enter");
    await flow.getByRole("button", { name: "Next" }).focus();
    await page.keyboard.press("Enter");
    await expect(flow.getByText(/Step 4 of 4/)).toBeVisible();

    await flow.getByLabel("Full name").focus();
    await page.keyboard.type("Ada Lovelace");
    await flow.getByLabel("Email").focus();
    await page.keyboard.type("ada@example.com");
    await flow.getByRole("button", { name: "Confirm visit" }).focus();
    await page.keyboard.press("Enter");
    await expect(flow.getByText("Visit booked")).toBeVisible();
  });
});
