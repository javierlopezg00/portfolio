import Image from "next/image";
import { BrowserFrame } from "@/components/illustrations/BrowserFrame";
import { PhoneFrame } from "@/components/illustrations/PhoneFrame";
import {
  CalendarIcon,
  CheckIcon,
  HeartIcon,
  SparkIcon,
} from "@/components/illustrations/icons";
import { images, MOCKUP_IMAGE_SIZES } from "@/lib/content/images";
import type { Dictionary } from "@/lib/i18n/dictionary";

interface HeroShowcaseProps {
  content: Dictionary["hero"]["showcase"];
}

// The hero visual: a fictional wellness studio's website on desktop, the
// same business on a phone mid-booking, and a "new booking" notification.
// Real words and recognizable UI — a visitor should know what they're
// looking at within a second, with no technical vocabulary anywhere.
// Purely decorative (aria-hidden): the headline and CTAs beside it carry
// the meaning. Entrance animation is CSS-only and collapses to an instant
// reveal under prefers-reduced-motion.
export function HeroShowcase({ content }: HeroShowcaseProps) {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
      <BrowserFrame
        label={content.brand}
        className="animate-fade-up motion-safe:[animation-delay:120ms]"
      >
        <div className="flex flex-col gap-5 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-text text-sm font-semibold">
              {content.brand}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-text-secondary hidden gap-3 text-[11px] @sm:flex">
                {content.navLinks.map((link) => (
                  <span key={link}>{link}</span>
                ))}
              </span>
              <span className="bg-accent-strong rounded-full px-3 py-1 text-[11px] font-medium text-white">
                {content.cta}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1fr] gap-4">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-text text-lg leading-tight font-semibold sm:text-xl">
                {content.headline}
              </p>
              <p className="text-text-secondary text-xs leading-snug sm:text-sm">
                {content.subtext}
              </p>
            </div>
            <Image
              src={images.massage}
              alt=""
              sizes={MOCKUP_IMAGE_SIZES}
              placeholder="blur"
              priority
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {content.services.map((service, i) => (
              <div
                key={service}
                className="border-border bg-background flex flex-col gap-2 rounded-lg border p-3"
              >
                <span className="bg-accent-soft text-accent flex h-6 w-6 items-center justify-center rounded-md">
                  {i === 0 ? (
                    <HeartIcon width={14} height={14} />
                  ) : i === 1 ? (
                    <SparkIcon width={14} height={14} />
                  ) : (
                    <CalendarIcon width={14} height={14} />
                  )}
                </span>
                <span className="text-text text-[11px] leading-tight font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>

      {/* Phone overlapping the bottom-right corner — the same business on
          a small screen, one tap from confirming an appointment. */}
      <PhoneFrame className="animate-fade-up absolute -right-2 -bottom-12 w-36 motion-safe:[animation-delay:360ms] sm:-right-14 sm:-bottom-16 sm:w-44">
        <div className="flex flex-col gap-3 px-3 pt-2 pb-4">
          <span className="text-text text-[11px] font-semibold">
            {content.brand}
          </span>
          <div className="border-border bg-background rounded-lg border p-2.5">
            <p className="text-text-secondary text-[10px]">
              {content.phone.title}
            </p>
            <p className="text-text mt-1 text-xs leading-tight font-semibold">
              {content.phone.detail}
            </p>
            <p className="text-text-secondary text-[10px]">
              {content.phone.with}
            </p>
          </div>
          <span className="bg-accent-strong rounded-full py-1.5 text-center text-[11px] font-medium text-white">
            {content.phone.cta}
          </span>
        </div>
      </PhoneFrame>

      {/* Notification chip floating off the top-left corner. */}
      <div className="animate-fade-up border-border bg-surface absolute -top-4 -left-2 flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-1.5 shadow-md motion-safe:[animation-delay:600ms] sm:-left-8">
        <span className="bg-success/15 text-success flex h-7 w-7 items-center justify-center rounded-full">
          <CheckIcon width={14} height={14} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-text text-[11px] font-semibold">
            {content.toast.title}
          </span>
          <span className="text-text-secondary text-[10px]">
            {content.toast.body}
          </span>
        </span>
      </div>
    </div>
  );
}
