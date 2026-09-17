import NextLink from "next/link";
import type { ReactNode } from "react";
import { BrandMotif } from "@/components/illustrations/BrandMotif";
import { ArrowRightIcon } from "@/components/illustrations/icons";
import { Badge, Heading, Text } from "@/components/ui";
import type { Locale } from "@/lib/i18n/getDictionary";
import { DeviceFrame } from "./DeviceFrame";

interface FeaturedProjectProps {
  locale: Locale;
  project: { id: string; name: string; vertical: string; summary: string };
  viewProjectLabel: string;
  preview: ReactNode;
  mobilePreview: ReactNode;
}

// The lead project, given roughly twice the visual weight of the two
// beneath it. Hierarchy comes from scale and from the media breaking out
// of its panel — not from another badge or a longer description.
export function FeaturedProject({
  locale,
  project,
  viewProjectLabel,
  preview,
  mobilePreview,
}: FeaturedProjectProps) {
  const href = `/${locale}/work/${project.id}`;

  return (
    <article className="group border-border bg-surface rounded-signature-lg relative overflow-hidden border shadow-sm transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-12">
          <Badge tone="accent">{project.vertical}</Badge>
          <div>
            <Heading size="h2" as="h3">
              <NextLink
                href={href}
                className="focus-visible:ring-focus-ring rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none"
              >
                {project.name}
              </NextLink>
            </Heading>
            <Text tone="secondary" size="lg" className="mt-3 max-w-sm">
              {project.summary}
            </Text>
          </div>
          <span className="text-accent text-body flex items-center gap-2 font-medium">
            {viewProjectLabel}
            <ArrowRightIcon
              width={18}
              height={18}
              className="duration-fast transition-transform ease-out group-hover:translate-x-1"
            />
          </span>
        </div>

        {/* The media panel runs to the card's own edges and the phone
            hangs off the browser, so the composition reads as a scene
            rather than a screenshot in a box. */}
        <div
          aria-hidden="true"
          className="bg-surface-sand relative overflow-hidden px-6 pt-10 pb-10 sm:px-10 sm:pt-14 lg:pb-14"
        >
          <BrandMotif
            corner="tl"
            className="absolute top-4 left-4 h-14 w-14 opacity-60 sm:h-20 sm:w-20"
          />
          <div className="relative mx-auto max-w-xl">
            <DeviceFrame
              mode="desktop"
              label={project.name}
              className="rounded-signature border-transparent shadow-lg"
            >
              {preview}
            </DeviceFrame>
            {/* Cropped deliberately: the phone shows the top of the same
                page and runs off the bottom of the panel, which reads as
                depth rather than as a second, shorter screenshot. */}
            <DeviceFrame
              mode="mobile"
              className="absolute -right-2 bottom-[-2.5rem] hidden max-h-64 w-28 overflow-hidden border-transparent shadow-xl sm:block lg:-right-6 lg:w-32"
            >
              {mobilePreview}
            </DeviceFrame>
          </div>
        </div>
      </div>
    </article>
  );
}
