import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";

export async function FAQ() {
  const dict = await getServerDictionary();

  return (
    <Section id="faq" ariaLabelledBy="faq-heading">
      <Container className="max-w-3xl">
        <Heading id="faq-heading" size="h2">
          {dict.faq.heading}
        </Heading>

        <div className="mt-10 flex flex-col gap-3">
          {dict.faq.items.map((item) => (
            // The padding lives on <summary>, not <details> — only
            // <summary>'s own box is the native click/tap target, so
            // padding on the parent would look like part of the row
            // without actually being tappable.
            <details
              key={item.question}
              className="group border-border bg-surface rounded-lg border shadow-sm"
            >
              <summary className="text-body text-text focus-visible:ring-focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-4 font-medium focus-visible:ring-2 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronIcon className="text-text-secondary duration-fast shrink-0 transition-transform ease-out group-open:rotate-180" />
              </summary>
              <Text tone="secondary" className="px-5 pb-5">
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
