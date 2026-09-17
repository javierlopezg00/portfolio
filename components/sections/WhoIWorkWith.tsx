import type { ComponentType, SVGProps } from "react";
import { BrandMotif } from "@/components/illustrations/BrandMotif";
import {
  BriefcaseIcon,
  GrowthIcon,
  HeartIcon,
  PlateIcon,
} from "@/components/illustrations/icons";
import { Container, Heading, Section, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

// Keyed by the dictionary's vertical ids so neither the icon nor the
// panel treatment depends on translated text or array order.
const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  healthcare: HeartIcon,
  hospitality: PlateIcon,
  professional: BriefcaseIcon,
  growing: GrowthIcon,
};

// Two washes, alternating, so the row has rhythm instead of four
// identical tiles. These panels are built to take photography later:
// drop a next/image behind the content with the same gradient as a
// scrim and nothing else has to change.
// One wash, one tint: the panels differ by their glyph, not by four
// competing colors. Alternating the glyph's strength is enough rhythm.
const WASH = "from-accent-soft via-accent-soft to-surface";

export async function WhoIWorkWith() {
  const dict = await getServerDictionary();

  return (
    <Section
      theme="muted"
      id="who-i-work-with"
      ariaLabelledBy="who-i-work-with-heading"
    >
      <Container>
        <Heading id="who-i-work-with-heading" size="h2" className="max-w-2xl">
          {dict.verticals.heading}
        </Heading>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.verticals.items.map((item, i) => {
            const Icon = ICONS[item.id] ?? GrowthIcon;
            return (
              <li
                key={item.id}
                className={cn(
                  "rounded-signature-lg border-border relative flex min-h-64 flex-col justify-end overflow-hidden border bg-gradient-to-b p-6 shadow-sm sm:min-h-80 lg:p-7",
                  WASH,
                )}
              >
                {/* One oversized glyph, cropped by the panel edge — the
                    panel's image stand-in until real photography exists.
                    Deliberately the only icon here: a second, smaller
                    copy of the same mark read as a mistake. */}
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className={cn(
                    "absolute -top-6 -right-8 h-44 w-44 lg:h-52 lg:w-52",
                    i % 2 === 0 ? "text-accent/25" : "text-accent-tint/40",
                  )}
                />
                {i % 2 === 0 && (
                  <BrandMotif
                    corner="tl"
                    className="absolute top-5 left-5 h-9 w-9 opacity-70"
                  />
                )}
                <div className="relative">
                  <Heading size="h3" as="h3" className="text-balance">
                    {item.title}
                  </Heading>
                  <Text tone="secondary" size="sm" className="mt-1.5">
                    {item.description}
                  </Text>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
