import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Configurator } from "@/components/sections/configurator/Configurator";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const dict = en.configurator;

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
    renderWithLocale(<Configurator />);

    await user.click(screen.getByRole("button", { name: dict.next }));

    expect(
      screen.getByText(en.validation.projectTypeRequired),
    ).toBeInTheDocument();
    expect(screen.getByText(/Step 1 of 6/)).toBeInTheDocument();
  });

  it("walks through every step, reviews, and submits successfully", async () => {
    const user = userEvent.setup();
    renderWithLocale(<Configurator />);

    // Step 1: project type
    await user.click(
      screen.getByRole("radio", { name: dict.options.projectType[0].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    // Step 2: needs (multi-select)
    expect(screen.getByText(/Step 2 of 6/)).toBeInTheDocument();
    await user.click(
      screen.getByRole("checkbox", { name: dict.options.needs[0].label }),
    );
    await user.click(
      screen.getByRole("checkbox", { name: dict.options.needs[1].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    // Step 3: budget
    expect(screen.getByText(/Step 3 of 6/)).toBeInTheDocument();
    await user.click(
      screen.getByRole("radio", { name: dict.options.budget[1].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    // Step 4: timeline
    expect(screen.getByText(/Step 4 of 6/)).toBeInTheDocument();
    await user.click(
      screen.getByRole("radio", { name: dict.options.timeline[1].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    // Step 5: contact — invalid email blocks advancing to the review step.
    // The button here reads "Next", not "Send Project Request" — that
    // label is reserved for the actual last step (review) now.
    expect(screen.getByText(/Step 5 of 6/)).toBeInTheDocument();
    await user.type(screen.getByLabelText(dict.contact.name), "Ada Lovelace");
    await user.type(screen.getByLabelText(dict.contact.email), "not-an-email");
    await user.click(screen.getByRole("button", { name: dict.next }));
    expect(screen.getByText(en.validation.emailInvalid)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();

    // Fix the email and advance to the review step.
    await user.clear(screen.getByLabelText(dict.contact.email));
    await user.type(
      screen.getByLabelText(dict.contact.email),
      "ada@example.com",
    );
    await user.click(screen.getByRole("button", { name: dict.next }));

    // Step 6: review — everything answered shows up read-only, then submit.
    expect(screen.getByText(/Step 6 of 6/)).toBeInTheDocument();
    expect(
      screen.getByText(dict.options.projectType[0].label),
    ).toBeInTheDocument();
    expect(screen.getByText(dict.options.budget[1].label)).toBeInTheDocument();
    expect(screen.getByText(/Ada Lovelace/)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: dict.requestProposal }),
    );

    await waitFor(() => {
      expect(screen.getByText(dict.successTitle)).toBeInTheDocument();
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
      budget: "tier-2",
      timeline: "1-2-months",
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
  });

  it("allows navigating back to change an earlier answer", async () => {
    const user = userEvent.setup();
    renderWithLocale(<Configurator />);

    await user.click(
      screen.getByRole("radio", { name: dict.options.projectType[0].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));
    expect(screen.getByText(/Step 2 of 6/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: dict.back }));
    expect(screen.getByText(/Step 1 of 6/)).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: dict.options.projectType[0].label }),
    ).toBeChecked();
  });

  it("lets you jump from the review step to edit an earlier answer", async () => {
    const user = userEvent.setup();
    renderWithLocale(<Configurator />);

    await user.click(
      screen.getByRole("radio", { name: dict.options.projectType[0].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));
    await user.click(
      screen.getByRole("checkbox", { name: dict.options.needs[0].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));
    await user.click(
      screen.getByRole("radio", { name: dict.options.budget[1].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));
    await user.click(
      screen.getByRole("radio", { name: dict.options.timeline[1].label }),
    );
    await user.click(screen.getByRole("button", { name: dict.next }));
    await user.type(screen.getByLabelText(dict.contact.name), "Ada Lovelace");
    await user.type(
      screen.getByLabelText(dict.contact.email),
      "ada@example.com",
    );
    await user.click(screen.getByRole("button", { name: dict.next }));
    expect(screen.getByText(/Step 6 of 6/)).toBeInTheDocument();

    // Review rows render in a fixed order: project type, needs, budget,
    // timeline, contact — the third "Edit" button is the budget row.
    const editButtons = screen.getAllByRole("button", {
      name: dict.review.editLabel,
    });
    await user.click(editButtons[2]);

    expect(screen.getByText(/Step 3 of 6/)).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: dict.options.budget[1].label }),
    ).toBeChecked();
  });
});
