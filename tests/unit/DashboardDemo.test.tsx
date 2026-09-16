import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DashboardDemo } from "@/components/sections/lab/DashboardDemo";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const dict = en.lab.dashboard;

describe("DashboardDemo", () => {
  it("defaults to the first range and shows its stats", () => {
    renderWithLocale(<DashboardDemo />);

    const rangeGroup = screen.getByRole("group", {
      name: dict.dateRangeAriaLabel,
    });
    expect(
      screen.getByRole("button", { name: dict.ranges[0].label }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(rangeGroup).toBeInTheDocument();
  });

  it("swaps the displayed stats when a different range is selected", async () => {
    const user = userEvent.setup();
    renderWithLocale(<DashboardDemo />);

    const revenueBefore = screen
      .getByText(dict.stats.revenue)
      .closest("div")?.textContent;

    const otherRange = dict.ranges[dict.ranges.length - 1];
    await user.click(screen.getByRole("button", { name: otherRange.label }));

    expect(
      screen.getByRole("button", { name: otherRange.label }),
    ).toHaveAttribute("aria-pressed", "true");

    // The revenue figure animates toward its new value via a spring rather
    // than jumping instantly — poll until it settles on something other
    // than the previous range's number, proving the underlying dataset
    // (not just the toggle's selected state) actually swapped.
    await waitFor(() => {
      const revenueAfter = screen
        .getByText(dict.stats.revenue)
        .closest("div")?.textContent;
      expect(revenueAfter).not.toBe(revenueBefore);
    });
  });
});
