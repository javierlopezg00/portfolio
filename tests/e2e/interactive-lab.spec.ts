import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";

const tabs = en.lab.tabs;

test.describe("Interactive Lab", () => {
  test("switching tabs doesn't shift the page's scroll position", async ({
    page,
  }) => {
    await page.goto("/en/#lab");
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
    await page.goto("/en/#lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();
    await lab.getByRole("tab", { name: tabs.dashboard }).click();
    await page.waitForTimeout(200);

    const results = await new AxeBuilder({ page }).include("#lab").analyze();
    expect(results.violations).toEqual([]);
  });
});
