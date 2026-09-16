import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LeadQualificationDemo } from "@/components/work/consulting/LeadQualificationDemo";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const dict = en.work.leadQualificationDemo;
const services = en.work.previewContent.consulting.practiceAreas;
const timelines = en.configurator.options.timeline;

describe("LeadQualificationDemo", () => {
  it("blocks advancing until a service is picked", () => {
    renderWithLocale(<LeadQualificationDemo />);
    expect(screen.getByRole("button", { name: dict.next })).toBeDisabled();
  });

  it("walks through service, company size, and timeline to a read-only summary", async () => {
    const user = userEvent.setup();
    renderWithLocale(<LeadQualificationDemo />);

    await user.click(screen.getByRole("radio", { name: services[0] }));
    await user.click(screen.getByRole("button", { name: dict.next }));

    await user.click(
      screen.getByRole("radio", { name: dict.companySizes[1].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    await user.click(screen.getByRole("radio", { name: timelines[0].label }));
    await user.click(screen.getByRole("button", { name: dict.next }));

    // Summary step is read-only — no further "Next"/submit button, just
    // the recap and a way back to revise.
    expect(screen.getByText(dict.summaryHeading)).toBeInTheDocument();
    expect(screen.getByText(services[0])).toBeInTheDocument();
    expect(screen.getByText(dict.companySizes[1].label)).toBeInTheDocument();
    expect(screen.getByText(timelines[0].label)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: dict.next }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: dict.back }));
    expect(
      screen.getByRole("radio", { name: timelines[0].label }),
    ).toBeChecked();
  });
});
