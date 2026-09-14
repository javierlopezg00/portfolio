"use client";

import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}

export function Checkbox({ label, id, className, ...props }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <label
      htmlFor={checkboxId}
      className="flex cursor-pointer items-start gap-3"
    >
      <input
        id={checkboxId}
        type="checkbox"
        className={cn(
          "border-border-strong bg-surface accent-accent focus-visible:ring-focus-ring mt-0.5 h-5 w-5 shrink-0 rounded focus-visible:ring-2 focus-visible:outline-none",
          className,
        )}
        {...props}
      />
      <span className="text-body-sm text-text-secondary">{label}</span>
    </label>
  );
}
