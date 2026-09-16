import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { InterfaceMockup } from "@/components/sections/evolution/InterfaceMockup";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const evolutionStages = en.evolution.stages;

describe("InterfaceMockup", () => {
  it("doesn't show connections or the final message at stage 0 (landing)", () => {
    renderWithLocale(<InterfaceMockup stage={0} />);
    expect(screen.queryByText("PAYMENTS")).not.toBeInTheDocument();
    expect(
      screen.queryByText(evolutionStages[0].description),
    ).not.toBeInTheDocument();
  });

  it("shows connection labels from stage 3 (connected) onward", () => {
    const { rerender } = renderWithLocale(<InterfaceMockup stage={2} />);
    expect(screen.queryByText("PAYMENTS")).not.toBeInTheDocument();

    // Two variants exist at this stage — the sm+ diagram around the box
    // and a phone-only in-box row (see DashboardLayer's connectedLabel) —
    // toggled by a CSS breakpoint jsdom doesn't evaluate, so both are
    // present in the tree regardless of viewport.
    rerender(<InterfaceMockup stage={3} />);
    expect(screen.getAllByText("PAYMENTS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AUTOMATION").length).toBeGreaterThan(0);
  });

  it("shows the final message only at stage 4 (custom)", () => {
    const { rerender } = renderWithLocale(<InterfaceMockup stage={3} />);
    expect(
      screen.queryByText(evolutionStages[4].description),
    ).not.toBeInTheDocument();

    rerender(<InterfaceMockup stage={4} />);
    expect(
      screen.getByText(evolutionStages[4].description),
    ).toBeInTheDocument();
  });
});
