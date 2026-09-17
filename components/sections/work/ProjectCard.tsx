import NextLink from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/illustrations/icons";
import { Badge, Heading, Text } from "@/components/ui";
import type { Locale } from "@/lib/i18n/getDictionary";
import { DeviceComposition } from "./DeviceComposition";

interface ProjectCardProps {
  locale: Locale;
  project: {
    id: string;
    name: string;
    vertical: string;
    summary: string;
  };
  viewProjectLabel: string;
  preview: ReactNode;
  mobilePreview: ReactNode;
}

// One large visual card per project: the site on desktop with the same
// site on a phone overlapping the corner, then a name, a plain-language
// type ("Clinic Website") and one line about it. No technical tags —
// those live on the case study page for people who go looking. The whole
// card is the link (stretched from the heading) so the tap target is big.
export function ProjectCard({
  locale,
  project,
  viewProjectLabel,
  preview,
  mobilePreview,
}: ProjectCardProps) {
  const href = `/${locale}/work/${project.id}`;

  return (
    <article className="group border-border bg-surface duration-base hover:border-border-strong relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-[border-color,box-shadow] ease-out hover:shadow-md">
      <div className="bg-surface-soft overflow-hidden px-5 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
        {/* Capped width: the previews are drawn for a ~700px window, and
            stretching them across the whole card made their tiles huge. */}
        <DeviceComposition
          label={project.name}
          preview={preview}
          mobilePreview={mobilePreview}
          className="mx-auto max-w-2xl"
        />
      </div>

      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div className="max-w-md">
          <Badge>{project.vertical}</Badge>
          <Heading size="h3" as="h3" className="mt-3">
            <NextLink
              href={href}
              className="focus-visible:ring-focus-ring rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none"
            >
              {project.name}
            </NextLink>
          </Heading>
          <Text tone="secondary" className="mt-2">
            {project.summary}
          </Text>
        </div>
        <span className="text-accent text-body-sm flex shrink-0 items-center gap-1.5 font-medium">
          {viewProjectLabel}
          <ArrowRightIcon
            width={16}
            height={16}
            className="duration-fast transition-transform ease-out group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </article>
  );
}
