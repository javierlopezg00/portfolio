interface StepIndicatorProps {
  current: number;
  total: number;
  text: string;
}

export function StepIndicator({ current, total, text }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <p aria-live="polite" className="text-body-sm text-text-secondary">
        {text}
      </p>
      <div className="bg-border mt-3 h-1 w-full overflow-hidden rounded-full">
        <div
          className="bg-accent duration-base h-1 rounded-full transition-all ease-out"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
