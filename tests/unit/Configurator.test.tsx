import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Configurator } from "@/components/sections/configurator/Configurator";

describe("Configurator", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () => new Response(JSON.stringify({ ok: true }), { status: 200 }),
      ),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("blocks advancing without a project type selection", async () => {
    const user = userEvent.setup();
    render(<Configurator />);

    await user.click(screen.getByRole("button", { name: "Next" }));

    expect(
      screen.getByText("Select an option to continue"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Step 1 of 5/)).toBeInTheDocument();
  });

  it("walks through every step and submits successfully", async () => {
    const user = userEvent.setup();
    render(<Configurator />);

    // Step 1: project type
    await user.click(screen.getByRole("radio", { name: "Website" }));
    await user.click(screen.getByRole("button", { name: "Next" }));

    // Step 2: needs (multi-select)
    expect(screen.getByText(/Step 2 of 5/)).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "Online bookings" }));
    await user.click(screen.getByRole("checkbox", { name: "Payments" }));
    await user.click(screen.getByRole("button", { name: "Next" }));

    // Step 3: budget
    expect(screen.getByText(/Step 3 of 5/)).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "$5k – $10k" }));
    await user.click(screen.getByRole("button", { name: "Next" }));

    // Step 4: timeline
    expect(screen.getByText(/Step 4 of 5/)).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "1–2 months" }));
    await user.click(screen.getByRole("button", { name: "Next" }));

    // Step 5: contact — invalid email blocks submission
    expect(screen.getByText(/Step 5 of 5/)).toBeInTheDocument();
    await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
    await user.type(screen.getByLabelText("Email"), "not-an-email");
    await user.click(screen.getByRole("button", { name: "Request Proposal" }));
    expect(screen.getByText("Enter a valid email address")).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();

    // Fix the email and submit for real.
    await user.clear(screen.getByLabelText("Email"));
    await user.type(screen.getByLabelText("Email"), "ada@example.com");
    await user.click(screen.getByRole("button", { name: "Request Proposal" }));

    await waitFor(() => {
      expect(screen.getByText("Thanks — that's in.")).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/lead",
      expect.objectContaining({ method: "POST" }),
    );
    const [, options] = (global.fetch as ReturnType<typeof vi.fn>).mock
      .calls[0];
    const payload = JSON.parse(options.body as string);
    expect(payload).toMatchObject({
      projectType: "website",
      needs: ["bookings", "payments"],
      budget: "5-10k",
      timeline: "1-2-months",
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
  });

  it("allows navigating back to change an earlier answer", async () => {
    const user = userEvent.setup();
    render(<Configurator />);

    await user.click(screen.getByRole("radio", { name: "Website" }));
    await user.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText(/Step 2 of 5/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Back" }));
    expect(screen.getByText(/Step 1 of 5/)).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Website" })).toBeChecked();
  });
});
