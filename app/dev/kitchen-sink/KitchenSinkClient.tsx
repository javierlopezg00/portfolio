"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Heading,
  Input,
  Link,
  Section,
  Select,
  Tabs,
  Text,
} from "@/components/ui";
import { Modal } from "@/components/ui/Modal";

export function KitchenSinkClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Section ariaLabelledBy="typography-heading">
        <Container className="flex flex-col gap-8">
          <Heading id="typography-heading" size="h2">
            Typography
          </Heading>
          <div className="flex flex-col gap-4">
            <Heading size="display">Display heading</Heading>
            <Heading size="h1">Heading 1</Heading>
            <Heading size="h2">Heading 2</Heading>
            <Heading size="h3">Heading 3</Heading>
            <Heading size="h4">Heading 4</Heading>
            <Text size="lg">
              Body large — supporting copy under a headline.
            </Text>
            <Text>Body base — the default paragraph size.</Text>
            <Text size="sm" tone="secondary">
              Body small, secondary tone — captions and metadata.
            </Text>
            <Text size="caption" tone="secondary">
              Caption — labels, timestamps, fine print.
            </Text>
          </div>
        </Container>
      </Section>

      <Section ariaLabelledBy="buttons-heading">
        <Container className="flex flex-col gap-8">
          <Heading id="buttons-heading" size="h2">
            Buttons &amp; Links
          </Heading>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Start a Project</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="whatsapp">WhatsApp Me</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
          <Text>
            An inline <Link href="/dev/kitchen-sink">text link</Link> and an{" "}
            <Link href="https://nextjs.org" external>
              external link
            </Link>
            .
          </Text>
        </Container>
      </Section>

      <Section ariaLabelledBy="badges-cards-heading">
        <Container className="flex flex-col gap-8">
          <Heading id="badges-cards-heading" size="h2">
            Badges &amp; Cards
          </Heading>
          <div className="flex flex-wrap gap-3">
            <Badge>Demo · Sample Data</Badge>
            <Badge tone="accent">Clinic Website</Badge>
            <Badge tone="success">Payment received</Badge>
          </div>
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Heading size="h4">Static card</Heading>
              <Text size="sm" tone="secondary" className="mt-2">
                No hover affordance — purely presentational.
              </Text>
            </Card>
            <Card interactive>
              <Heading size="h4">Interactive card</Heading>
              <Text size="sm" tone="secondary" className="mt-2">
                Hover to see the border/shadow respond.
              </Text>
            </Card>
            <Card interactive>
              <Heading size="h4">Interactive card</Heading>
              <Text size="sm" tone="secondary" className="mt-2">
                Same treatment, for grid rhythm.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section ariaLabelledBy="form-heading">
        <Container className="flex max-w-xl flex-col gap-6">
          <Heading id="form-heading" size="h2">
            Form primitives
          </Heading>
          <Input label="Name" placeholder="Ada Lovelace" />
          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            error="Enter a valid email address."
          />
          <Input
            label="Company"
            placeholder="Acme Inc."
            hint="Optional — helps us tailor the proposal."
          />
          <Select
            label="Budget"
            placeholder="Select a range"
            options={[
              { label: "$3k–5k", value: "3-5" },
              { label: "$5k–10k", value: "5-10" },
              { label: "$10k–25k", value: "10-25" },
              { label: "$25k+", value: "25+" },
            ]}
          />
          <Checkbox label="I'd like to receive occasional project updates." />
        </Container>
      </Section>

      <Section ariaLabelledBy="tabs-heading">
        <Container className="flex flex-col gap-8">
          <Heading id="tabs-heading" size="h2">
            Tabs
          </Heading>
          <Tabs
            items={[
              {
                value: "websites",
                label: "Websites",
                content: (
                  <Text tone="secondary">
                    Landing pages, business sites, e-commerce.
                  </Text>
                ),
              },
              {
                value: "apps",
                label: "Web Applications",
                content: (
                  <Text tone="secondary">
                    Dashboards, booking systems, customer portals.
                  </Text>
                ),
              },
              {
                value: "integrations",
                label: "Integrations",
                content: (
                  <Text tone="secondary">Payments, APIs, CRM, automation.</Text>
                ),
              },
            ]}
          />
        </Container>
      </Section>

      <Section ariaLabelledBy="modal-heading">
        <Container className="flex flex-col gap-8">
          <Heading id="modal-heading" size="h2">
            Modal
          </Heading>
          <div>
            <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          </div>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            titleId="modal-title"
          >
            <Heading id="modal-title" size="h3">
              Modal title
            </Heading>
            <Text tone="secondary" className="mt-2">
              Focus is trapped inside, Escape and backdrop click both close it,
              and focus returns to the trigger on close.
            </Text>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>Confirm</Button>
            </div>
          </Modal>
        </Container>
      </Section>

      <Section theme="muted" ariaLabelledBy="muted-section-heading">
        <Container className="flex flex-col gap-6">
          <Heading id="muted-section-heading" size="h2">
            Muted section variant
          </Heading>
          <Text tone="secondary">
            Same light tokens on the tinted surface — used to break up long runs
            of white cards on the page background.
          </Text>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Card interactive className="max-w-sm">
              <Heading size="h4">Card in a muted section</Heading>
              <Text size="sm" tone="secondary" className="mt-2">
                Same component, themed by context.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      <Section theme="dark" ariaLabelledBy="dark-section-heading">
        <Container className="flex flex-col gap-6">
          <Heading id="dark-section-heading" size="h2">
            Dark section variant
          </Heading>
          <Text tone="secondary">
            Every primitive above re-themes automatically here — no props passed
            down, just the data-theme cascade from Section. Used sparingly
            (contact section, footer).
          </Text>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Card interactive className="max-w-sm">
              <Heading size="h4">Card in a dark section</Heading>
              <Text size="sm" tone="secondary" className="mt-2">
                Same component, themed by context.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
