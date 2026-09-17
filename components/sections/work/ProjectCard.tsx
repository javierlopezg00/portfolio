import NextLink from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/illustrations/icons";
import { Badge, Heading, Text } from "@/components/ui";
import type { Locale } from "@/lib/i18n/getDictionary";
import { DeviceFrame } from "./DeviceFrame";

interface ProjectCardProps {
  locale: Locale;
  project: { id: string; name: string; vertical: string; summary: string };
  viewProjectLabel: string;
  preview: ReactNode;
}

// The two supporting projects. Same anatomy as the featured one at half
// the scale: tinted media panel on top, then type. No technical tags —
// those live on the case study for anyone who goes looking.
export function ProjectCard({
  locale,
  project,
  viewProjectLabel,
  preview,
}: ProjectCardProps) {
  const href = `/${locale}/work/${project.id}`;

  return (
    <article className="group border-border bg-surface rounded-signature-lg relative flex flex-col overflow-hidden border shadow-sm transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Fixed-height media well: the two previews are naturally very
          different heights (a photo menu vs. three practice areas), and
          cropping them to the same window is what keeps the pair
          balanced — the way a real screenshot would be. */}
      <div
        aria-hidden="true"
        className="bg-surface-sand h-60 overflow-hidden px-6 pt-8 sm:h-72 sm:px-8 sm:pt-10"
      >
        <DeviceFrame
          mode="desktop"
          label={project.name}
          className="rounded-signature rounded-b-none border-transparent shadow-lg"
        >
          {preview}
        </DeviceFrame>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <Badge>{project.vertical}</Badge>
        <div className="flex-1">
          <Heading size="h3" as="h3">
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
        <span className="text-accent text-body-sm flex items-center gap-2 font-medium">
          {viewProjectLabel}
          <ArrowRightIcon
            width={16}
            height={16}
            className="duration-fast transition-transform ease-out group-hover:translate-x-1"
          />
        </span>
      </div>
    </article>
  );
}
