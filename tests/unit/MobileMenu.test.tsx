import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/lib/content/nav";

describe("MobileMenu", () => {
  it("renders nothing when closed", () => {
    render(<MobileMenu id="mobile-menu" open={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders every nav link when open", async () => {
    render(<MobileMenu id="mobile-menu" open={true} onClose={() => {}} />);
    await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());

    for (const link of navLinks) {
      expect(screen.getByRole("link", { name: link.label })).toBeVisible();
    }
  });

  it("calls onClose on Escape", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<MobileMenu id="mobile-menu" open={true} onClose={onClose} />);
    await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when a nav link is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<MobileMenu id="mobile-menu" open={true} onClose={onClose} />);
    await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());

    await user.click(screen.getByRole("link", { name: navLinks[0].label }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
