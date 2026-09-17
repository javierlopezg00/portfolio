import Image from "next/image";
import { BrowserFrame } from "@/components/illustrations/BrowserFrame";
import { PhoneFrame } from "@/components/illustrations/PhoneFrame";
import {
  CalendarIcon,
  CheckIcon,
  HeartIcon,
  SparkIcon,
} from "@/components/illustrations/icons";
import { HERO_IMAGE_SIZES, images } from "@/lib/content/images";
import type { Dictionary } from "@/lib/i18n/dictionary";

interface HeroShowcaseProps {
  content: Dictionary["hero"]["showcase"];
}

// The hero composition: a fictional wellness studio's website, the same
// business on a phone mid-booking, a "new booking" notification, and a
// fragment of the owner's dashboard peeking from behind. Four layers at
// three depths — the point is that a visitor sees, in one glance, that
// this is someone who builds real interfaces for real businesses.
//
// Decorative as a whole (aria-hidden): the headline and CTAs beside it
// carry the meaning. Entrance animation is CSS-only and collapses to an
// instant reveal under prefers-reduced-motion.
export function HeroShowcase({ content }: HeroShowcaseProps) {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-2xl">
      {/* Layer 1: the website itself. */}
      <BrowserFrame
        label={content.brand}
        className="rounded-signature-lg animate-fade-up relative z-10 w-full border-transparent shadow-xl motion-safe:[animation-delay:120ms] sm:ml-auto sm:w-[85%]"
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

          <div className="grid grid-cols-[1.25fr_1fr] gap-4">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-text text-lg leading-tight font-semibold sm:text-xl">
                {content.headline}
              </p>
              <p className="text-text-secondary text-xs leading-snug sm:text-sm">
                {content.subtext}
              </p>
            </div>
            <Image
              src={images.reception}
              alt=""
              sizes={HERO_IMAGE_SIZES}
              placeholder="blur"
              priority
              className="rounded-signature aspect-[4/3] w-full object-cover"
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

      {/* Layer 2: the phone, overlapping the browser's lower-left corner
          and hanging below it. */}
      <PhoneFrame className="animate-fade-up absolute -right-2 bottom-[-3.5rem] z-20 w-28 border-transparent shadow-xl motion-safe:[animation-delay:360ms] sm:right-auto sm:-left-16 sm:w-40">
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

      {/* Layer 3 (deepest): a compact slice of the owner's dashboard,
          tucked under the browser's lower-right corner — the hint that
          there's software behind the website, without a fourth mockup. */}
      <div className="border-border bg-surface rounded-signature animate-fade-up absolute right-2 bottom-[-3.25rem] z-0 hidden items-center gap-4 border py-3 pr-4 pl-5 shadow-lg motion-safe:[animation-delay:500ms] lg:flex">
        <span className="flex flex-col">
          <span className="text-text-secondary text-[10px] leading-tight">
            {content.stat.label}
          </span>
          <span className="text-text text-lg leading-tight font-semibold">
            {content.stat.value}
          </span>
        </span>
        <span className="flex h-8 items-end gap-1">
          {[38, 62, 48, 80, 66, 94].map((h, i) => (
            <span
              key={i}
              className={
                i === 5
                  ? "bg-warm w-1.5 rounded-t-sm"
                  : "bg-accent/25 w-1.5 rounded-t-sm"
              }
              style={{ height: `${h}%` }}
            />
          ))}
        </span>
        <SparkIcon className="text-warm h-4 w-4" />
      </div>

      {/* Layer 2: the booking notification, top-right, breaking out past
          the browser's edge. */}
      <div className="border-border bg-surface animate-fade-up absolute -top-5 -right-1 z-20 flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-1.5 shadow-lg motion-safe:[animation-delay:640ms] sm:-right-6">
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
