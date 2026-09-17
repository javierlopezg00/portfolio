"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Tabs } from "@/components/ui";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { BookingDemo } from "./BookingDemo";

// Booking is the default-active tab, so it stays a static import — it's
// needed immediately. Dashboard and Integration are already lazy-mounted
// by Tabs (their React tree doesn't render until selected); dynamic()
// takes that a step further so their JS isn't even fetched until then —
// most visitors never open every tab.
const DashboardDemo = dynamic(() =>
  import("./DashboardDemo").then((m) => m.DashboardDemo),
);
const IntegrationFlowDemo = dynamic(() =>
  import("./IntegrationFlowDemo").then((m) => m.IntegrationFlowDemo),
);

const TAB_IDS = ["booking", "dashboard", "integration"] as const;
type TabId = (typeof TAB_IDS)[number];

function isTabId(value: string): value is TabId {
  return (TAB_IDS as readonly string[]).includes(value);
}

export function LabTabs() {
  const dict = getDictionary(useLocale());
  const [value, setValue] = useState<TabId>("booking");

  // The homepage's teaser cards deep-link to a tab via the URL hash
  // (/lab#dashboard). Read after mount rather than in the state
  // initializer: the server has no hash, so reading it during render
  // would mismatch on hydration. Setting state here is the intended
  // exception — it can't be computed any earlier.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isTabId(hash)) setValue(hash);
  }, []);

  return (
    <Tabs
      // The three demos have uneven heights (Dashboard is the tallest).
      // Without a reserved minimum, switching to a shorter tab shrinks the
      // page and the browser yanks scroll position up to compensate —
      // reserving the tallest demo's height keeps the page height constant
      // across tabs.
      className="min-h-[550px] lg:min-h-[690px]"
      value={value}
      onValueChange={(next) => {
        if (isTabId(next)) setValue(next);
      }}
      items={[
        {
          value: "booking",
          label: dict.lab.tabs.booking,
          content: <BookingDemo />,
        },
        {
          value: "dashboard",
          label: dict.lab.tabs.dashboard,
          content: <DashboardDemo />,
        },
        {
          value: "integration",
          label: dict.lab.tabs.integration,
          content: <IntegrationFlowDemo />,
        },
      ]}
    />
  );
}
