"use client";

import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  id,
  className,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-body-sm text-text font-medium">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={cn(hintId, errorId) || undefined}
        className={cn(
          "bg-surface text-body text-text duration-fast placeholder:text-text-secondary focus-visible:ring-focus-ring h-11 rounded-md border px-4 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
          error ? "border-red-500" : "border-border-strong",
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <p id={hintId} className="text-caption text-text-secondary">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-caption text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
