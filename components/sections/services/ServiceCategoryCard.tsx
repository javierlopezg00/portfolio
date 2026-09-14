import type { ReactNode } from "react";
import { Card, Heading, Text } from "@/components/ui";
import type { ServiceCategory } from "@/lib/content/services";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  preview: ReactNode;
}

export function ServiceCategoryCard({
  category,
  preview,
}: ServiceCategoryCardProps) {
  return (
    <Card interactive className="group flex flex-col gap-5">
      <div>
        <Heading size="h4" as="h3">
          {category.title}
        </Heading>
        <Text size="sm" tone="secondary" className="mt-2">
          {category.description}
        </Text>
      </div>

      <div className="h-24">{preview}</div>

      <ul className="flex flex-col gap-1.5">
        {category.items.map((item) => (
          <li
            key={item}
            className="text-body-sm text-text-secondary flex items-center gap-2"
          >
            <span className="bg-accent h-1 w-1 shrink-0 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
