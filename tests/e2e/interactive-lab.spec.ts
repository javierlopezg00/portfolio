import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Interactive Lab", () => {
  test("switching tabs doesn't shift the page's scroll position", async ({
    page,
  }) => {
    await page.goto("/#lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();

    for (const tabName of ["Dashboard", "Integration", "Booking"]) {
      await lab.getByRole("tab", { name: tabName }).click();
      await page.waitForTimeout(150);
    }

    // Each demo has a different natural height; the Tabs container
    // reserves the tallest one so switching never scrolls the page.
    await expect(lab.getByRole("tab", { name: "Booking" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("dashboard demo has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/#lab");
    const lab = page.locator("#lab");
    await lab.scrollIntoViewIfNeeded();
    await lab.getByRole("tab", { name: "Dashboard" }).click();
    await page.waitForTimeout(200);

    const results = await new AxeBuilder({ page }).include("#lab").analyze();
    expect(results.violations).toEqual([]);
  });
});
