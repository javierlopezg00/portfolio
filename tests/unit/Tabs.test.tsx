import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "@/components/ui/Tabs";

const items = [
  { value: "a", label: "Tab A", content: <p>Content A</p> },
  { value: "b", label: "Tab B", content: <p>Content B</p> },
  { value: "c", label: "Tab C", content: <p>Content C</p> },
];

describe("Tabs", () => {
  it("shows the first tab's content by default", () => {
    render(<Tabs items={items} />);
    expect(screen.getByText("Content A")).toBeVisible();
    // Inactive panels are not mounted, so a heavy tab (e.g. a future demo)
    // doesn't render until it's selected.
    expect(screen.queryByText("Content B")).not.toBeInTheDocument();
  });

  it("switches tabs on click", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    await user.click(screen.getByRole("tab", { name: "Tab B" }));

    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("Content B")).toBeVisible();
  });

  it("moves focus and selection with arrow keys", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole("tab", { name: "Tab A" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveFocus();
    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("wraps from the last tab to the first with ArrowRight", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);

    screen.getByRole("tab", { name: "Tab A" }).focus();
    await user.keyboard("{ArrowRight}"); // -> B
    await user.keyboard("{ArrowRight}"); // -> C
    await user.keyboard("{ArrowRight}"); // -> wraps to A

    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveFocus();
  });
});
