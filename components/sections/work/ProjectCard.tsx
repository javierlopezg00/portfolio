"use client";

import { useState, type ReactNode } from "react";
import { Badge, Card, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { WorkProject } from "@/lib/content/work";
import { DeviceFrame, type DeviceMode } from "./DeviceFrame";

const MODES: DeviceMode[] = ["desktop", "mobile"];

interface ProjectCardProps {
  project: WorkProject;
  preview: ReactNode;
}

export function ProjectCard({ project, preview }: ProjectCardProps) {
  const [mode, setMode] = useState<DeviceMode>("desktop");

  return (
    <Card className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">Conceptual Project</Badge>
          <Badge>{project.vertical}</Badge>
        </div>

        <div>
          <Heading size="h3">{project.name}</Heading>
          <Text tone="secondary" className="mt-3">
            {project.description}
          </Text>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>

        <div
          role="group"
          aria-label="Preview device"
          className="border-border bg-background/40 flex w-fit gap-1 rounded-full border p-1"
        >
          {MODES.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={cn(
                "text-body-sm duration-fast focus-visible:ring-focus-ring rounded-full px-3 py-1.5 capitalize transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
                mode === m
                  ? "bg-accent-strong text-white"
                  : "text-text-secondary hover:text-text",
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <DeviceFrame mode={mode}>{preview}</DeviceFrame>
      </div>
    </Card>
  );
}
