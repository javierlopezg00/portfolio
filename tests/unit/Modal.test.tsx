import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "@/components/ui/Modal";

function Wrapper({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} titleId="test-title">
      <h2 id="test-title">Test modal</h2>
      <button>Confirm</button>
    </Modal>
  );
}

describe("Modal", () => {
  it("renders nothing when closed", () => {
    render(<Wrapper open={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders and focuses the first focusable element when open", async () => {
    render(<Wrapper open={true} onClose={() => {}} />);
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Confirm" })).toHaveFocus();
    });
  });

  it("calls onClose on Escape", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<Wrapper open={true} onClose={onClose} />);
    await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on backdrop click", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<Wrapper open={true} onClose={onClose} />);
    await waitFor(() => expect(screen.getByRole("dialog")).toBeInTheDocument());

    const backdrop = document.querySelector('[aria-hidden="true"]');
    expect(backdrop).not.toBeNull();
    await user.click(backdrop as Element);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
