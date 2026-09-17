import NextLink from "next/link";
import type { ReactNode } from "react";
import { Badge, Container, Heading, Section, Text } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/getDictionary";
import { DeviceComposition } from "./DeviceComposition";

interface CaseStudyHeaderProps {
  locale: Locale;
  dict: Dictionary;
  project: Dictionary["work"]["projects"][number];
  preview: ReactNode;
  /** Optional extra content under the description (e.g. highlight chips). */
  children?: ReactNode;
}

// Shared top of every case study: back link, plain-language type badge,
// name, one-paragraph description, the desktop + phone composition, and
// the "example project" note — in that order, so the picture comes right
// after the visitor knows what they're looking at.
export function CaseStudyHeader({
  locale,
  dict,
  project,
  preview,
  children,
}: CaseStudyHeaderProps) {
  return (
    <Section
      ariaLabelledBy="case-study-heading"
      id="overview"
      className="pt-10 sm:pt-16"
    >
      <Container>
        <NextLink
          href={`/${locale}#work`}
          className="text-body-sm text-text-secondary hover:text-text rounded-sm"
        >
          ← {dict.work.caseStudy.backToWork}
        </NextLink>

        <div className="mt-6 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent">{project.vertical}</Badge>
            <Badge>{dict.work.conceptualProjectBadge}</Badge>
          </div>
          <Heading id="case-study-heading" size="h1" className="mt-4">
            {project.name}
          </Heading>
          <Text tone="secondary" size="lg" className="mt-4">
            {project.description}
          </Text>
          {children}
        </div>

        <div className="bg-surface-soft mt-12 overflow-hidden rounded-xl px-5 pt-8 pb-8 sm:px-12 sm:pt-12 sm:pb-12">
          <DeviceComposition
            label={project.name}
            preview={preview}
            mobilePreview={preview}
            className="mx-auto max-w-2xl"
          />
        </div>
        <Text tone="secondary" size="sm" className="mt-4">
          {dict.work.caseStudy.conceptualNote}
        </Text>
      </Container>
    </Section>
  );
}
