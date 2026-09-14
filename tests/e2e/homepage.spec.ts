import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with every major section present", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /We build digital experiences/,
      }),
    ).toBeVisible();

    for (const id of [
      "#evolution",
      "#services",
      "#lab",
      "#work",
      "#process",
      "#configurator",
      "#about",
      "#faq",
      "#contact",
    ]) {
      await expect(page.locator(id)).toBeAttached();
    }

    await expect(page.locator("footer")).toBeVisible();
  });

  test("has exactly one h1 and no skipped heading levels", async ({ page }) => {
    await page.goto("/");

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
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      // The dev-only Next.js indicator isn't part of the shipped site.
      .exclude("[data-nextjs-dev-tools-button]")
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("skip link moves focus to main content", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to content" }),
    ).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });
});
