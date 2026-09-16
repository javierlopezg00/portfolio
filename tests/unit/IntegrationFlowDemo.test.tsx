import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntegrationFlowDemo } from "@/components/sections/lab/IntegrationFlowDemo";
import { en } from "@/lib/i18n/en";
import { renderWithLocale } from "./test-utils";

const dict = en.lab.integration;

// Forces useReducedMotion() to true so the GSAP timeline's tween durations
// collapse to ~0 instead of the real ~3s sequence — keeps this test fast
// and deterministic rather than racing real animation timing.
beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    (query: string) =>
      ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("IntegrationFlowDemo", () => {
  it("shows a running state while the request is in flight, then a distinct success state", async () => {
    const user = userEvent.setup();
    renderWithLocale(<IntegrationFlowDemo />);

    const trigger = screen.getByRole("button", { name: dict.trigger });
    await user.click(trigger);

    expect(screen.getByRole("button", { name: dict.running })).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByText(dict.success)).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: dict.trigger })).toBeEnabled();
  });

  it("ignores repeated clicks while already running", async () => {
    const user = userEvent.setup();
    renderWithLocale(<IntegrationFlowDemo />);

    const trigger = screen.getByRole("button", { name: dict.trigger });
    await user.click(trigger);
    const runningButton = screen.getByRole("button", { name: dict.running });
    await user.click(runningButton);

    expect(runningButton).toBeDisabled();
  });
});
