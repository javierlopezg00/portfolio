import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResultsMetrics } from "@/components/sections/work/ResultsMetrics";

describe("ResultsMetrics", () => {
  it("renders each result's label and value", () => {
    render(
      <ResultsMetrics
        results={[
          { label: "Booking time", value: "-40%" },
          { label: "No-shows", value: "-15%" },
        ]}
      />,
    );

    expect(screen.getByText("Booking time")).toBeInTheDocument();
    expect(screen.getByText("-40%")).toBeInTheDocument();
    expect(screen.getByText("No-shows")).toBeInTheDocument();
    expect(screen.getByText("-15%")).toBeInTheDocument();
  });
});
