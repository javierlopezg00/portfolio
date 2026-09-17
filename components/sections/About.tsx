import { CheckIcon } from "@/components/illustrations/icons";
import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function About() {
  const dict = await getServerDictionary();

  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <Container>
        <div className="border-border bg-surface grid grid-cols-1 gap-8 rounded-xl border p-6 shadow-sm sm:p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
          {/* A placeholder, not a real photo — none exists in the repo yet
              and generating one is off the table. Sized and shaped like an
              actual headshot slot so dropping in a real `next/image` later
              is a one-element swap (replace the monogram span with
              `<Image fill className="object-cover" alt={dict.about.photoAlt} />`),
              not a layout change. */}
          <div
            aria-hidden="true"
            className="from-accent-soft to-accent/25 text-accent relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br text-3xl font-semibold sm:h-40 sm:w-40"
          >
            JL
          </div>

          <div>
            <Heading id="about-heading" size="h2">
              {dict.about.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-4 max-w-xl">
              {dict.about.body}
            </Text>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
              {dict.about.points.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="bg-accent-soft text-accent mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckIcon width={13} height={13} />
                  </span>
                  <div>
                    <Text className="font-semibold">{point.title}</Text>
                    <Text tone="secondary" size="sm" className="mt-0.5">
                      {point.description}
                    </Text>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
