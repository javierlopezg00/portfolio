import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReservationDemo } from "@/components/work/restaurant/ReservationDemo";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const dict = en.work.reservationDemo;

describe("ReservationDemo", () => {
  it("blocks advancing until a party size is picked", () => {
    renderWithLocale(<ReservationDemo />);
    expect(screen.getByRole("button", { name: dict.next })).toBeDisabled();
  });

  it("completes the full party size / date / time flow and can start over", async () => {
    const user = userEvent.setup();
    renderWithLocale(<ReservationDemo />);

    await user.click(
      screen.getByRole("radio", { name: dict.partySizes[0].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    const dayButtons = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          !btn.hasAttribute("disabled") && /^\d+$/.test(btn.textContent ?? ""),
      );
    expect(dayButtons.length).toBeGreaterThan(0);
    await user.click(dayButtons[0]);
    await user.click(screen.getByRole("button", { name: dict.next }));

    const availableSlot = screen
      .getAllByRole("button")
      .find(
        (btn) =>
          /\d:\d{2} (AM|PM)/.test(btn.textContent ?? "") &&
          !btn.hasAttribute("disabled"),
      );
    expect(availableSlot).toBeDefined();
    await user.click(availableSlot!);

    const confirmButton = screen.getByRole("button", { name: dict.confirm });
    expect(confirmButton).toBeEnabled();
    await user.click(confirmButton);

    expect(screen.getByText(dict.confirmedHeading)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: dict.bookAnother }));
    expect(screen.getByRole("button", { name: dict.next })).toBeDisabled();
  });
});
