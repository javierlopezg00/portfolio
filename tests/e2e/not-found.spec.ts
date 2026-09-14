import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("404 page", () => {
  test("shows the not-found message with a way back home", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(
      page.getByRole("heading", { level: 1, name: /doesn't exist/ }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Back to home" }).click();
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
});
