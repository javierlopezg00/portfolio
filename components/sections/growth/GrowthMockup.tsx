import Image from "next/image";
import { BrowserFrame } from "@/components/illustrations/BrowserFrame";
import {
  CalendarIcon,
  CardIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
} from "@/components/illustrations/icons";
import { cn } from "@/lib/cn";
import { images, MOCKUP_IMAGE_SIZES } from "@/lib/content/images";
import type { Dictionary } from "@/lib/i18n/dictionary";

interface GrowthMockupProps {
  /** 0 = get online, 1 = get customers, 2 = sell online, 3 = work smarter */
  stage: number;
  content: Dictionary["growth"]["mockup"];
  className?: string;
}

// One fictional salon's website, drawn at four moments in its life:
//   0  a clean business website
//   1  + a booking panel and a WhatsApp button
//   2  + a product with an online payment
//   3  the owner's dashboard: today's numbers, upcoming appointments,
//      reminders sent automatically
// Additive by design — each stage keeps what came before, so the story
// reads as "the same site, growing", not four unrelated screens. Purely
// decorative (aria-hidden): the stage text next to it carries the meaning.
export function GrowthMockup({ stage, content, className }: GrowthMockupProps) {
  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <BrowserFrame label={content.brand}>
        <div className="flex min-h-[340px] flex-col gap-5 p-5 sm:min-h-[380px] sm:p-6">
          {stage < 3 ? (
            <WebsiteStages stage={stage} content={content} />
          ) : (
            <DashboardStage content={content} />
          )}
        </div>
      </BrowserFrame>

      {/* Floating WhatsApp button from stage 1 on — the kind of thing a
          customer taps without thinking, and a strong visual cue for
          "now people can reach you". */}
      {stage >= 1 && stage < 3 && (
        <span className="bg-whatsapp animate-fade-in absolute -right-2 -bottom-3 flex items-center gap-2 rounded-full py-2 pr-4 pl-3 text-xs font-medium text-white shadow-md sm:-right-4">
          <ChatIcon width={16} height={16} />
          {content.whatsapp}
        </span>
      )}

      {stage === 2 && (
        <span className="border-border bg-surface animate-fade-in absolute -top-3 -left-2 flex items-center gap-2 rounded-full border py-1.5 pr-4 pl-1.5 shadow-md sm:-left-4">
          <span className="bg-success/15 text-success flex h-6 w-6 items-center justify-center rounded-full">
            <CheckIcon width={12} height={12} />
          </span>
          <span className="text-text text-[11px] font-semibold">
            {content.paid}
          </span>
        </span>
      )}
    </div>
  );
}

function WebsiteStages({
  stage,
  content,
}: {
  stage: number;
  content: Dictionary["growth"]["mockup"];
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-text text-sm font-semibold">{content.brand}</span>
        <div className="flex items-center gap-4">
          <span className="text-text-secondary hidden gap-3 text-[11px] @sm:flex">
            {content.navLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </span>
          <span className="bg-accent-strong rounded-full px-3 py-1 text-[11px] font-medium text-white">
            {stage >= 1 ? content.ctaBook : content.cta}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-4",
          stage >= 1 ? "grid-cols-[1.2fr_1fr]" : "grid-cols-[1.4fr_1fr]",
        )}
      >
        <div className="flex flex-col justify-center gap-2">
          <p className="text-text text-lg leading-tight font-semibold sm:text-xl">
            {content.headline}
          </p>
          <p className="text-text-secondary text-xs leading-snug sm:text-sm">
            {content.subtext}
          </p>
        </div>

        {stage === 0 && (
          <Image
            src={images.beautySalon}
            alt=""
            sizes={MOCKUP_IMAGE_SIZES}
            placeholder="blur"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        )}

        {stage >= 1 && (
          <div className="border-border bg-background animate-fade-in flex flex-col gap-2 rounded-lg border p-3">
            <span className="text-text flex items-center gap-1.5 text-[11px] font-medium">
              <CalendarIcon width={13} height={13} className="text-accent" />
              {content.bookingTitle}
            </span>
            <div className="grid grid-cols-3 gap-1">
              {content.bookingTimes.map((time, i) => (
                <span
                  key={time}
                  className={cn(
                    "rounded-md py-1 text-center text-[10px] font-medium",
                    i === 1
                      ? "bg-accent-strong text-white"
                      : "bg-surface border-border text-text-secondary border",
                  )}
                >
                  {time}
                </span>
              ))}
            </div>
            <span className="bg-accent-soft text-accent rounded-full py-1 text-center text-[10px] font-semibold">
              {content.bookingConfirm}
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {content.services.map((service, i) => (
          <div
            key={service}
            className={cn(
              "border-border bg-background flex flex-col gap-2 rounded-lg border p-3",
              stage === 2 && i === 2 && "hidden",
            )}
          >
            <span className="bg-accent-soft h-6 w-6 rounded-md" />
            <span className="text-text text-[11px] leading-tight font-medium">
              {service}
            </span>
          </div>
        ))}
        {stage === 2 && (
          <div className="border-accent/40 bg-accent-soft/60 animate-fade-in flex flex-col gap-1.5 rounded-lg border p-3">
            <span className="text-text flex items-center gap-1.5 text-[11px] font-medium">
              <CardIcon width={13} height={13} className="text-accent" />
              {content.productTitle}
            </span>
            <span className="text-text text-sm font-semibold">
              {content.productPrice}
            </span>
            <span className="bg-accent-strong rounded-full py-1 text-center text-[10px] font-medium text-white">
              {content.pay}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

function DashboardStage({
  content,
}: {
  content: Dictionary["growth"]["mockup"];
}) {
  return (
    <div className="animate-fade-in flex gap-5">
      <div className="hidden flex-col gap-2 @sm:flex">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "h-6 w-6 rounded-md",
              i === 0 ? "bg-accent-strong" : "bg-surface-soft",
            )}
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-text text-sm font-semibold">
            {content.dashboardTitle}
          </span>
          <span className="text-text-secondary text-[11px]">
            {content.brand}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-border bg-background flex flex-col gap-1 rounded-lg border p-3"
            >
              <span className="text-text-secondary text-[10px] leading-tight">
                {stat.label}
              </span>
              <span className="text-text text-base leading-tight font-semibold">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
        <div className="border-border bg-background rounded-lg border p-3">
          <span className="text-text-secondary text-[10px] font-medium tracking-wide uppercase">
            {content.scheduleTitle}
          </span>
          <ul className="divide-border mt-2 flex flex-col divide-y">
            {content.schedule.map((row) => (
              <li
                key={row.name}
                className="flex items-center justify-between gap-3 py-2"
              >
                <span className="flex items-center gap-2">
                  <span className="bg-accent-soft text-accent flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold">
                    {row.name[0]}
                  </span>
                  <span className="text-text text-[11px] font-medium">
                    {row.name}
                  </span>
                </span>
                <span className="text-text-secondary flex items-center gap-1 text-[10px]">
                  <ClockIcon width={11} height={11} />
                  {row.time}
                </span>
                <span
                  className={cn(
                    "hidden items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium @xs:flex",
                    row.status === content.schedule[1].status
                      ? "bg-accent-soft text-accent"
                      : "bg-success/15 text-success",
                  )}
                >
                  <CheckIcon width={10} height={10} />
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
