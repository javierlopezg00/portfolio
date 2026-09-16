import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonial } from "@/components/sections/work/Testimonial";

describe("Testimonial", () => {
  it("renders the quote, author, and role", () => {
    render(
      <Testimonial
        quote="This changed how we run the clinic."
        author="Jane Doe"
        role="Practice Manager"
      />,
    );

    expect(
      screen.getByText(/This changed how we run the clinic\./),
    ).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Practice Manager")).toBeInTheDocument();
  });
});
