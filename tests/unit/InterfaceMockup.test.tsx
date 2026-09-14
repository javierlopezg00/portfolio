import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { InterfaceMockup } from "@/components/sections/evolution/InterfaceMockup";
import { evolutionStages } from "@/components/sections/evolution/stages";

describe("InterfaceMockup", () => {
  it("shows only the hero block at stage 0 (landing)", () => {
    render(<InterfaceMockup stage={0} />);
    expect(screen.queryByText("PAYMENTS")).not.toBeInTheDocument();
    expect(
      screen.queryByText(evolutionStages[0].description),
    ).not.toBeInTheDocument();
  });

  it("shows connection labels from stage 3 (connected) onward", () => {
    const { rerender } = render(<InterfaceMockup stage={2} />);
    expect(screen.queryByText("PAYMENTS")).not.toBeInTheDocument();

    rerender(<InterfaceMockup stage={3} />);
    expect(screen.getByText("PAYMENTS")).toBeInTheDocument();
    expect(screen.getByText("AUTOMATION")).toBeInTheDocument();
  });

  it("shows the final message only at stage 4 (custom)", () => {
    const { rerender } = render(<InterfaceMockup stage={3} />);
    expect(
      screen.queryByText(evolutionStages[4].description),
    ).not.toBeInTheDocument();

    rerender(<InterfaceMockup stage={4} />);
    expect(
      screen.getByText(evolutionStages[4].description),
    ).toBeInTheDocument();
  });
});
