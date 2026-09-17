import Image from "next/image";
import { BrandMotif } from "@/components/illustrations/BrandMotif";
import { Container, Heading, Section, Text } from "@/components/ui";
import { images } from "@/lib/content/images";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

// Editorial rather than another card: the portrait is a real object on
// the page — offset, signature-cornered, with the motif behind it — and
// the three statements sit as a typographic row under the copy instead
// of becoming three more boxes.
export async function About() {
  const dict = await getServerDictionary();

  return (
    <Section theme="muted" id="about" ariaLabelledBy="about-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] md:gap-16">
          <div className="relative mx-auto w-full max-w-xs md:mx-0 md:max-w-none">
            <BrandMotif
              corner="tl"
              className="absolute -top-4 -left-4 h-20 w-20 opacity-70 sm:-top-6 sm:-left-6 sm:h-28 sm:w-28"
            />
            <Image
              src={images.profile}
              alt={dict.about.photoAlt}
              sizes="(min-width: 768px) 420px, 280px"
              placeholder="blur"
              className="rounded-signature-lg relative aspect-[4/5] w-full object-cover shadow-lg"
            />
          </div>

          <div>
            <Heading id="about-heading" size="h2">
              {dict.about.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-5 max-w-lg">
              {dict.about.body}
            </Text>

            <ul className="border-border mt-10 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3 sm:gap-8">
              {dict.about.points.map((point) => (
                <li key={point.title}>
                  <span
                    aria-hidden="true"
                    className="bg-accent-tint mb-3 block h-px w-8"
                  />
                  <Text className="font-semibold">{point.title}</Text>
                  <Text tone="secondary" size="sm" className="mt-1">
                    {point.description}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
