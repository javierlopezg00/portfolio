import NextLink from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChartIcon,
  SparkIcon,
} from "@/components/illustrations/icons";
import {
  Container,
  Grid,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import {
  getServerDictionary,
  getServerLocale,
} from "@/lib/i18n/getServerDictionary";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  booking: CalendarIcon,
  dashboard: ChartIcon,
  integration: SparkIcon,
};

// A short invitation to the Interactive Lab on /lab. The lab is where the
// more technical demos live now; the homepage only needs to say "there's
// something to try" and link to it — each card deep-links to its tab.
export async function LabTeaser() {
  const locale = await getServerLocale();
  const dict = await getServerDictionary();

  return (
    <Section id="lab" ariaLabelledBy="lab-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Heading id="lab-heading" size="h2">
              {dict.labTeaser.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-4">
              {dict.labTeaser.body}
            </Text>
          </div>
          <NextLink
            href={`/${locale}/lab`}
            className={buttonStyles({ variant: "secondary" })}
          >
            {dict.labTeaser.cta}
            <ArrowRightIcon width={16} height={16} />
          </NextLink>
        </div>

        <Grid className="mt-10 grid-cols-1 gap-4 sm:grid-cols-3">
          {dict.labTeaser.demos.map((demo) => {
            const Icon = ICONS[demo.id] ?? SparkIcon;
            return (
              <NextLink
                key={demo.id}
                href={`/${locale}/lab#${demo.id}`}
                className="group border-border bg-surface duration-base hover:border-accent/50 focus-visible:ring-focus-ring flex items-start gap-4 rounded-xl border p-5 shadow-sm transition-[border-color,box-shadow] ease-out hover:shadow-md focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="bg-accent-soft text-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                  <Icon width={22} height={22} />
                </span>
                <span className="flex-1">
                  <span className="text-text flex items-center gap-2 font-semibold">
                    {demo.title}
                    <ArrowRightIcon
                      width={14}
                      height={14}
                      className="text-accent duration-fast opacity-0 transition-[opacity,transform] ease-out group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </span>
                  <span className="text-body-sm text-text-secondary mt-1 block">
                    {demo.description}
                  </span>
                </span>
              </NextLink>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
