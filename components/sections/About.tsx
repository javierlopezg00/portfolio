import Image from "next/image";
import { CheckIcon } from "@/components/illustrations/icons";
import { Container, Heading, Section, Text } from "@/components/ui";
import { images } from "@/lib/content/images";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function About() {
  const dict = await getServerDictionary();

  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <Container>
        <div className="border-border bg-surface grid grid-cols-1 gap-8 rounded-xl border p-6 shadow-sm sm:p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
          <Image
            src={images.profile}
            alt={dict.about.photoAlt}
            sizes="(min-width: 640px) 160px, 128px"
            placeholder="blur"
            className="h-32 w-32 rounded-2xl object-cover shadow-sm sm:h-40 sm:w-40"
          />

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
