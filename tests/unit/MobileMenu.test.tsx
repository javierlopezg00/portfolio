import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const navLinks = en.nav.links;

describe("MobileMenu", () => {
  it("renders nothing when closed", () => {
    renderWithLocale(
      <MobileMenu id="mobile-menu" open={false} onClose={() => {}} />,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders every nav link when open", async () => {
    renderWithLocale(
      <MobileMenu id="mobile-menu" open={true} onClose={() => {}} />,
    );
    // toBeVisible (not just toBeInTheDocument) — the dialog mounts with
    // opacity 0 and animates in, so asserting right after it appears in the
    // DOM races the animation and is flaky under load (passed reliably
    // locally, failed intermittently in CI).
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());

    for (const link of navLinks) {
      expect(screen.getByRole("link", { name: link.label })).toBeVisible();
    }
  });

  it("calls onClose on Escape", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    renderWithLocale(
      <MobileMenu id="mobile-menu" open={true} onClose={onClose} />,
    );
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when a nav link is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    renderWithLocale(
      <MobileMenu id="mobile-menu" open={true} onClose={onClose} />,
    );
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());

    await user.click(screen.getByRole("link", { name: navLinks[0].label }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
