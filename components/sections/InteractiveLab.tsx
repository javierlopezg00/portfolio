import { Container, Heading, Section, Tabs, Text } from "@/components/ui";
import { BookingDemo } from "./lab/BookingDemo";
import { DashboardDemo } from "./lab/DashboardDemo";
import { IntegrationFlowDemo } from "./lab/IntegrationFlowDemo";

export function InteractiveLab() {
  return (
    <Section id="lab" ariaLabelledBy="lab-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="lab-heading" size="h2">
            Try it yourself.
          </Heading>
          <Text tone="secondary" className="mt-4">
            Small, real interactions — not screenshots.
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
              { value: "booking", label: "Booking", content: <BookingDemo /> },
              {
                value: "dashboard",
                label: "Dashboard",
                content: <DashboardDemo />,
              },
              {
                value: "integration",
                label: "Integration",
                content: <IntegrationFlowDemo />,
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
