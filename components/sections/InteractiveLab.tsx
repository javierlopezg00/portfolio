import dynamic from "next/dynamic";
import { Container, Heading, Section, Tabs, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { BookingDemo } from "./lab/BookingDemo";

// Booking is the default-active tab, so it stays a static import — it's
// needed immediately. Dashboard and Integration are already lazy-mounted
// by Tabs (their React tree doesn't render until selected); dynamic()
// takes that a step further so their JS isn't even fetched until then —
// most visitors never open every tab.
const DashboardDemo = dynamic(() =>
  import("./lab/DashboardDemo").then((m) => m.DashboardDemo),
);
const IntegrationFlowDemo = dynamic(() =>
  import("./lab/IntegrationFlowDemo").then((m) => m.IntegrationFlowDemo),
);

export async function InteractiveLab() {
  const dict = await getServerDictionary();

  return (
    <Section id="lab" ariaLabelledBy="lab-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="lab-heading" size="h2">
            {dict.lab.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.lab.subhead}
          </Text>
        </div>

        <div className="mt-12">
          <Tabs
            // The three demos have uneven heights (Dashboard is the
            // tallest). Without a reserved minimum, switching to a
            // shorter tab shrinks the page and the browser yanks scroll
            // position up to compensate — reserving the tallest demo's
            // height keeps the page height constant across tabs.
            className="min-h-[550px] lg:min-h-[690px]"
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
        </div>
      </Container>
    </Section>
  );
}
