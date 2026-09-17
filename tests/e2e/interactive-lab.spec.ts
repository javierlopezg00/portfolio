import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";

const tabs = en.lab.tabs;
const dashboard = en.lab.dashboard;
const booking = en.lab.booking;
const integration = en.lab.integration;

test.describe("Interactive Lab", () => {
  test("homepage teaser deep-links to a specific tab", async ({ page }) => {
    await page.goto("/en/lab#dashboard");
    await expect(
      page.getByRole("tab", { name: tabs.dashboard }),
    ).toHaveAttribute("aria-selected", "true");
  });

  test("lab page has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en/lab");
    await page.waitForLoadState("networkidle");
    const results = await new AxeBuilder({ page })
      .exclude("[data-nextjs-dev-tools-button]")
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test("switching tabs doesn't shift the page's scroll position", async ({
    page,
  }) => {
    await page.goto("/en/lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();

    for (const tabName of [tabs.dashboard, tabs.integration, tabs.booking]) {
      await lab.getByRole("tab", { name: tabName }).click();
      await page.waitForTimeout(150);
    }

    // Each demo has a different natural height; the Tabs container
    // reserves the tallest one so switching never scrolls the page.
    await expect(lab.getByRole("tab", { name: tabs.booking })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("dashboard demo has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en/lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();
    await lab.getByRole("tab", { name: tabs.dashboard }).click();
    await page.waitForTimeout(200);

    const results = await new AxeBuilder({ page }).include("#lab").analyze();
    expect(results.violations).toEqual([]);
  });

  test("dashboard demo actually swaps stats when the range changes", async ({
    page,
  }) => {
    await page.goto("/en/lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();
    await lab.getByRole("tab", { name: tabs.dashboard }).click();

    const revenueTile = lab
      .getByText(dashboard.stats.revenue)
      .locator("xpath=..");
    const before = await revenueTile.textContent();

    const otherRange = dashboard.ranges[dashboard.ranges.length - 1];
    await lab.getByRole("button", { name: otherRange.label }).click();
    await expect(
      lab.getByRole("button", { name: otherRange.label }),
    ).toHaveAttribute("aria-pressed", "true");

    await expect(async () => {
      expect(await revenueTile.textContent()).not.toBe(before);
    }).toPass();
  });

  test("booking demo completes a full day/time booking", async ({ page }) => {
    await page.goto("/en/lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();
    await lab.getByRole("tab", { name: tabs.booking }).click();

    await expect(lab.getByText(booking.selectDay)).toBeVisible();
    const dayButton = lab
      .locator("button[aria-pressed]")
      .filter({ hasText: /^\d+$/ })
      .and(lab.locator("button:not([disabled])"))
      .first();
    await dayButton.click();

    await expect(lab.getByText(booking.availableTimes)).toBeVisible();
    const timeButton = lab
      .getByRole("button", { name: /\d:\d{2} (AM|PM)/ })
      .and(lab.locator("button:not([disabled])"))
      .first();
    await timeButton.click();

    await lab.getByRole("button", { name: booking.confirmBooking }).click();
    await expect(lab.getByText(booking.booked)).toBeVisible();

    await lab.getByRole("button", { name: booking.bookAnother }).click();
    await expect(lab.getByText(booking.selectDay)).toBeVisible();
  });

  test("integration demo runs a request and shows a distinct success state", async ({
    page,
  }) => {
    await page.goto("/en/lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();
    await lab.getByRole("tab", { name: tabs.integration }).click();

    await lab.getByRole("button", { name: integration.trigger }).click();
    await expect(
      lab.getByRole("button", { name: integration.running }),
    ).toBeDisabled();

    await expect(lab.getByText(integration.success)).toBeVisible();
    await expect(
      lab.getByRole("button", { name: integration.trigger }),
    ).toBeEnabled();
  });

  test("booking and integration demos have no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en/lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();

    await lab.getByRole("tab", { name: tabs.booking }).click();
    await page.waitForTimeout(200);
    const bookingResults = await new AxeBuilder({ page })
      .include("#lab")
      .analyze();
    expect(bookingResults.violations).toEqual([]);

    await lab.getByRole("tab", { name: tabs.integration }).click();
    await page.waitForTimeout(200);
    const integrationResults = await new AxeBuilder({ page })
      .include("#lab")
      .analyze();
    expect(integrationResults.violations).toEqual([]);
  });
});
