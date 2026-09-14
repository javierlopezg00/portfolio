import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingDemo } from "@/components/sections/lab/BookingDemo";

describe("BookingDemo", () => {
  it("prompts to select a day before showing times", () => {
    render(<BookingDemo />);
    expect(screen.getByText("Select a day")).toBeInTheDocument();
  });

  it("disables the confirm button until a time is picked", async () => {
    const user = userEvent.setup();
    render(<BookingDemo />);

    const dayButtons = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.hasAttribute("disabled") && /^\d+$/.test(btn.textContent ?? ""),
      );
    expect(dayButtons.length).toBeGreaterThan(0);
    await user.click(dayButtons[0]);

    expect(screen.getByText("Available times")).toBeInTheDocument();
    const confirmButton = screen.getByRole("button", {
      name: "Confirm booking",
    });
    expect(confirmButton).toBeDisabled();
  });

  it("completes the booking flow and can start over", async () => {
    const user = userEvent.setup();
    render(<BookingDemo />);

    const dayButtons = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.hasAttribute("disabled") && /^\d+$/.test(btn.textContent ?? ""),
      );
    await user.click(dayButtons[0]);

    const availableSlot = screen
      .getAllByRole("button")
      .find(
        (btn) =>
          /\d:\d{2} (AM|PM)/.test(btn.textContent ?? "") &&
          !btn.hasAttribute("disabled"),
      );
    expect(availableSlot).toBeDefined();
    await user.click(availableSlot!);

    const confirmButton = screen.getByRole("button", {
      name: "Confirm booking",
    });
    expect(confirmButton).toBeEnabled();
    await user.click(confirmButton);

    expect(screen.getByText("Booked")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Book another" }));
    expect(screen.getByText("Select a day")).toBeInTheDocument();
  });
});
