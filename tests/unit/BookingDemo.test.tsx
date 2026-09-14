import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingDemo } from "@/components/sections/lab/BookingDemo";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const dict = en.lab.booking;

describe("BookingDemo", () => {
  it("prompts to select a day before showing times", () => {
    renderWithLocale(<BookingDemo />);
    expect(screen.getByText(dict.selectDay)).toBeInTheDocument();
  });

  it("disables the confirm button until a time is picked", async () => {
    const user = userEvent.setup();
    renderWithLocale(<BookingDemo />);

    const dayButtons = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.hasAttribute("disabled") && /^\d+$/.test(btn.textContent ?? ""),
      );
    expect(dayButtons.length).toBeGreaterThan(0);
    await user.click(dayButtons[0]);

    expect(screen.getByText(dict.availableTimes)).toBeInTheDocument();
    const confirmButton = screen.getByRole("button", {
      name: dict.confirmBooking,
    });
    expect(confirmButton).toBeDisabled();
  });

  it("completes the booking flow and can start over", async () => {
    const user = userEvent.setup();
    renderWithLocale(<BookingDemo />);

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
      name: dict.confirmBooking,
    });
    expect(confirmButton).toBeEnabled();
    await user.click(confirmButton);

    expect(screen.getByText(dict.booked)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: dict.bookAnother }));
    expect(screen.getByText(dict.selectDay)).toBeInTheDocument();
  });
});
