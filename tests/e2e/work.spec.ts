import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { en } from "@/lib/i18n/en";

test.describe("Case studies", () => {
  test("project card links to its case study", async ({ page }) => {
    await page.goto("/en/#work");
    await page.locator("#work").scrollIntoViewIfNeeded();
    // The whole card links to the case study, stretched from the project
    // name — so the accessible link is the name itself.
    const link = page
      .locator("#work")
      .getByRole("link", { name: en.work.projects[0].name });
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
    for (const heading of [
      en.work.caseStudy.goalHeading,
      en.work.caseStudy.experienceHeading,
      en.work.caseStudy.featuresHeading,
      en.work.caseStudy.decisionsHeading,
    ]) {
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    }
    // Engineering notes exist but stay collapsed — business content leads.
    const technical = page.getByText(en.work.caseStudy.technicalNote);
    await expect(technical).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: en.work.caseStudies.restaurant.technical[0].title,
      }),
    ).toBeHidden();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("clinic route renders the full sales demo: services, doctors, location and booking", async ({
    page,
  }) => {
    await page.goto("/en/work/clinic");
    await expect(
      page.getByRole("heading", { level: 1, name: "Meridian Health" }),
    ).toBeVisible();
    const show = en.work.clinicShowcase;
    // Scoped by section: a few of these headings are deliberately echoed
    // by the "try it below" card up in Key Features.
    for (const [section, name] of [
      ["#services", show.servicesHeading],
      ["#services", show.doctorsHeading],
      ["#mobile", show.mobileHeading],
      ["#mobile", show.locationHeading],
      ["#book", show.trustHeading],
      ["#book", en.work.clinicBooking.heading],
    ] as const) {
      await expect(
        page.locator(section).getByRole("heading", { name, exact: true }),
      ).toBeVisible();
    }
    await expect(page.getByText(show.address)).toBeVisible();
    // Nothing on the demo page collects data: no form posts anywhere.
    await expect(page.locator("form[action]")).toHaveCount(0);
  });

  test("each case study links to its own live demo from Key Features", async ({
    page,
  }) => {
    for (const [id, anchor] of [
      ["restaurant", "#reservation-demo"],
      ["consulting", "#lead-qualification-demo"],
      ["clinic", "#book"],
    ] as const) {
      await page.goto(`/en/work/${id}`);
      const link = page
        .locator("#features")
        .getByRole("link", { name: new RegExp(en.work.caseStudy.tryItLabel) });
      await expect(link).toHaveAttribute("href", anchor);
      await link.click();
      await expect(page.locator(anchor)).toBeVisible();
    }
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
    for (const id of ["restaurant", "consulting", "clinic"]) {
      await page.goto(`/en/work/${id}`);
      await page.waitForLoadState("networkidle");
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
    }
  });

  test("every case study ends with the CaseStudyCTA, not the footer directly", async ({
    page,
  }) => {
    for (const id of ["restaurant", "consulting", "clinic"]) {
      await page.goto(`/en/work/${id}`);
      await expect(
        page.getByRole("heading", { name: en.work.caseStudyCta.heading }),
      ).toBeVisible();
      await expect(
        page
          .locator("#next-steps")
          .getByRole("link", { name: en.contact.emailShort }),
      ).toHaveAttribute("href", /^mailto:/);
    }
  });

  test("case study CaseStudyCTA's primary button navigates back to the homepage contact section", async ({
    page,
  }) => {
    // Regression test for a real dead-end bug: the CTA used to link to a
    // bare fragment, which resolves to nothing on any page other than the
    // homepage.
    await page.goto("/en/work/restaurant");
    await page
      .locator("#next-steps")
      .getByRole("link", { name: en.work.caseStudyCta.primaryCta })
      .click();
    await expect(page).toHaveURL(/\/en#contact$/);
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("nav's Start a Project button also navigates home from a case study page", async ({
    page,
  }) => {
    await page.goto("/en/work/clinic");
    await page
      .getByRole("link", { name: en.nav.startAProject })
      .first()
      .click();
    await expect(page).toHaveURL(/\/en#contact$/);
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("nav section links resolve from a case study page, not just the homepage", async ({
    page,
  }) => {
    await page.goto("/en/work/consulting");
    const workLink = page.getByRole("link", { name: en.nav.links[0].label });
    if (!(await workLink.first().isVisible())) {
      await page.getByRole("button", { name: en.nav.openMenu }).click();
    }
    await workLink.first().click();
    await expect(page).toHaveURL(/\/en#work$/);
    await expect(page.locator("#work")).toBeVisible();
  });

  test("restaurant case study's reservation demo completes a full flow", async ({
    page,
  }) => {
    const dict = en.work.reservationDemo;
    await page.goto("/en/work/restaurant");
    const demo = page.locator("#reservation-demo");
    await demo.scrollIntoViewIfNeeded();

    await demo.getByText(dict.partySizes[0].label, { exact: true }).click();
    await demo.getByRole("button", { name: dict.next }).click();

    const dayButton = demo
      .locator("button[aria-pressed]:not([disabled])")
      .first();
    await dayButton.click();
    await demo.getByRole("button", { name: dict.next }).click();
    const timeButton = demo
      .locator("button[aria-pressed]")
      .filter({ hasNotText: /^\d{1,2}$/ })
      .first();
    await timeButton.click();
    await demo.getByRole("button", { name: dict.confirm }).click();

    await expect(demo.getByText(dict.confirmedHeading)).toBeVisible();
  });

  test("consulting case study's lead qualification demo walks to a summary", async ({
    page,
  }) => {
    const dict = en.work.leadQualificationDemo;
    const services = en.work.previewContent.consulting.practiceAreas;
    const timelines = en.configurator.options.timeline;
    await page.goto("/en/work/consulting");
    const demo = page.locator("#lead-qualification-demo");
    await demo.scrollIntoViewIfNeeded();

    await demo.getByText(services[0], { exact: true }).click();
    await demo.getByRole("button", { name: dict.next }).click();
    await demo.getByText(dict.companySizes[0].label, { exact: true }).click();
    await demo.getByRole("button", { name: dict.next }).click();
    await demo.getByText(timelines[0].label, { exact: true }).click();
    await demo.getByRole("button", { name: dict.next }).click();

    await expect(demo.getByText(dict.summaryHeading)).toBeVisible();
    await expect(demo.getByRole("button", { name: dict.next })).toHaveCount(0);
  });
});
