import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";

test.describe("Case studies", () => {
  test("project card links to its case study", async ({ page }) => {
    await page.goto("/en/#work");
    await page.locator("#work").scrollIntoViewIfNeeded();
    const link = page
      .getByRole("link", { name: new RegExp(en.work.viewCaseStudy) })
      .first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/en\/work\//);
  });

  test("restaurant case study renders the right project and approach content", async ({
    page,
  }) => {
    await page.goto("/en/work/restaurant");
    await expect(
      page.getByRole("heading", { level: 1, name: "Ember & Oak" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: en.work.caseStudy.approachHeading }),
    ).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("clinic route renders the booking flow instead of the generic case study", async ({
    page,
  }) => {
    await page.goto("/en/work/clinic");
    await expect(
      page.getByRole("heading", { level: 1, name: "Meridian Health" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: en.work.clinicBooking.heading }),
    ).toBeVisible();
  });

  test("unknown case study id 404s", async ({ page }) => {
    const res = await page.goto("/en/work/not-a-real-project");
    expect(res?.status()).toBe(404);
  });

  test("no fabricated results or testimonials appear on any current case study", async ({
    page,
  }) => {
    // None of the three conceptual projects has real testimonial/results
    // data yet (dict.work.caseStudyResults is empty) — the Testimonial and
    // ResultsMetrics components only render when that data exists, so this
    // is a regression guard against ever shipping placeholder content.
    for (const id of ["restaurant", "consulting", "clinic"]) {
      await page.goto(`/en/work/${id}`);
      await expect(
        page.getByRole("heading", { name: en.work.caseStudy.resultsHeading }),
      ).toHaveCount(0);
      await expect(page.locator("blockquote")).toHaveCount(0);
    }
  });

  test("case study pages have no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/en/work/restaurant");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
