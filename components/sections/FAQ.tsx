import { Container, Heading, Section, Text } from "@/components/ui";
import { faqItems } from "@/lib/content/faq";

export function FAQ() {
  return (
    <Section id="faq" ariaLabelledBy="faq-heading">
      <Container className="max-w-3xl">
        <div className="max-w-xl">
          <Heading id="faq-heading" size="h2">
            Questions, answered.
          </Heading>
        </div>

        <div className="divide-border border-border mt-12 flex flex-col divide-y border-t border-b">
          {faqItems.map((item) => (
            // The padding lives on <summary>, not <details> — only
            // <summary>'s own box is the native click/tap target, so
            // padding on the parent would look like part of the row
            // without actually being tappable.
            <details key={item.question} className="group">
              <summary className="text-body text-text flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronIcon className="text-text-secondary duration-fast shrink-0 transition-transform ease-out group-open:rotate-180" />
              </summary>
              <Text tone="secondary" size="sm" className="pt-1 pb-5">
                {item.answer}
              </Text>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={18}
      height={18}
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
