import type { ComponentType, SVGProps } from "react";
import {
  BriefcaseIcon,
  GrowthIcon,
  HeartIcon,
  PlateIcon,
} from "@/components/illustrations/icons";
import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

// Keyed by the dictionary's vertical ids so the icon never depends on
// translated text or array order.
const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  healthcare: HeartIcon,
  hospitality: PlateIcon,
  professional: BriefcaseIcon,
  growing: GrowthIcon,
};

export async function WhoIWorkWith() {
  const dict = await getServerDictionary();

  return (
    <Section id="who-i-work-with" ariaLabelledBy="who-i-work-with-heading">
      <Container>
        <Heading
          id="who-i-work-with-heading"
          size="h2"
          className="max-w-2xl text-center sm:mx-auto"
        >
          {dict.verticals.heading}
        </Heading>

        <Grid className="mt-12 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.verticals.items.map((item) => {
            const Icon = ICONS[item.id] ?? GrowthIcon;
            return (
              <div
                key={item.id}
                className="border-border bg-surface flex items-center gap-4 rounded-xl border p-5 shadow-sm lg:flex-col lg:items-start lg:p-6"
              >
                <span className="bg-accent-soft text-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                  <Icon width={24} height={24} />
                </span>
                <div>
                  <Heading size="h4" as="h3">
                    {item.title}
                  </Heading>
                  <Text tone="secondary" size="sm" className="mt-1">
                    {item.description}
                  </Text>
                </div>
              </div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
