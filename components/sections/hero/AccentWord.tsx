import { cn } from "@/lib/cn";

interface AccentWordProps {
  children: string;
  className?: string;
}

// The one typographic signature: a word of the display headline set in
// the serif's italic, with a hand-drawn amber underline beneath it.
//
// The underline is a background image rather than a child <svg> on
// purpose. As an element it became part of the heading's rendered text —
// enough to insert a line break into the accessible name ("grow\n.") and
// to make a screen reader's heading text differ from the visible one.
// As a background it can't: the DOM here is exactly the word.
const UNDERLINE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12' preserveAspectRatio='none'%3E%3Cpath d='M2 8.5C38 3.5 92 2.2 198 5.5' stroke='%23e8a33d' stroke-width='4' stroke-linecap='round' fill='none'/%3E%3C/svg%3E\")";

export function AccentWord({ children, className }: AccentWordProps) {
  return (
    <span
      className={cn(
        "bg-bottom bg-no-repeat pb-[0.12em] italic",
        "[background-size:100%_0.16em]",
        className,
      )}
      style={{ backgroundImage: UNDERLINE }}
    >
      {children}
    </span>
  );
}
