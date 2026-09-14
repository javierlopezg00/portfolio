"use client";

import { useId, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export function Select({
  label,
  options,
  placeholder,
  error,
  id,
  className,
  defaultValue,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-body-sm text-text font-medium">
        {label}
      </label>
      <select
        id={selectId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        defaultValue={defaultValue ?? ""}
        className={cn(
          "bg-surface text-body text-text duration-fast focus-visible:ring-focus-ring h-11 rounded-md border px-4 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
          error ? "border-red-500" : "border-border-strong",
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="text-caption text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
