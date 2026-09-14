export function ScrollCue() {
  return (
    <div
      aria-hidden="true"
      className="text-text-secondary absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={20}
        height={20}
      >
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
    </div>
  );
}
