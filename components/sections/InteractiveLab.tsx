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
