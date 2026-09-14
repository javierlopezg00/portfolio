"use client";

import { useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Tabs({
  items,
  defaultValue,
  value,
  onValueChange,
  className,
}: TabsProps) {
  const baseId = useId();
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? items[0]?.value,
  );
  const activeValue = value ?? internalValue;

  const setActive = (next: string) => {
    setInternalValue(next);
    onValueChange?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = items.findIndex((item) => item.value === activeValue);
    if (index === -1) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = items[(index + 1) % items.length];
      setActive(next.value);
      document.getElementById(`${baseId}-tab-${next.value}`)?.focus();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = items[(index - 1 + items.length) % items.length];
      setActive(prev.value);
      document.getElementById(`${baseId}-tab-${prev.value}`)?.focus();
    }
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="border-border flex gap-2 border-b"
      >
        {items.map((item) => {
          const selected = item.value === activeValue;
          return (
            <button
              key={item.value}
              id={`${baseId}-tab-${item.value}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.value}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.value)}
              className={cn(
                "text-body-sm duration-fast focus-visible:ring-focus-ring relative px-4 py-3 font-medium transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
                selected ? "text-text" : "text-text-secondary hover:text-text",
              )}
            >
              {item.label}
              {selected && (
                <span
                  className="bg-accent absolute inset-x-4 -bottom-px h-0.5"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.value}
          role="tabpanel"
          id={`${baseId}-panel-${item.value}`}
          aria-labelledby={`${baseId}-tab-${item.value}`}
          hidden={item.value !== activeValue}
          tabIndex={0}
          className="pt-6 focus-visible:outline-none"
        >
          {item.value === activeValue ? item.content : null}
        </div>
      ))}
    </div>
  );
}
