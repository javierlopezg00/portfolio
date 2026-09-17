import { PhoneFrame } from "@/components/illustrations/PhoneFrame";
import {
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/illustrations/icons";
import { ClinicPreview } from "@/components/sections/work/previews";
import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n/dictionary";

interface ClinicShowcaseProps {
  dict: Dictionary;
}

// The parts of Meridian's site a clinic owner would want to see before
// imagining it for their own practice: services, doctors, the phone
// experience, and how patients find and contact the clinic. Everything
// is fictional and nothing here submits anywhere — the WhatsApp/phone
// "buttons" are part of the mockup, not live links.
export function ClinicShowcase({ dict }: ClinicShowcaseProps) {
  const show = dict.work.clinicShowcase;
  const doctors = dict.work.clinicBooking.doctors;

  return (
    <>
      <Section ariaLabelledBy="clinic-services-heading" id="services">
        <Container>
          <Heading id="clinic-services-heading" size="h2">
            {show.servicesHeading}
          </Heading>
          <Grid className="mt-10 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {show.services.map((service) => (
              <div
                key={service.name}
                className="border-border bg-surface rounded-xl border p-6 shadow-sm"
              >
                <span className="bg-accent-soft text-accent flex h-10 w-10 items-center justify-center rounded-lg">
                  <CheckIcon width={18} height={18} />
                </span>
                <Heading size="h4" as="h3" className="mt-4">
                  {service.name}
                </Heading>
                <Text tone="secondary" size="sm" className="mt-1">
                  {service.note}
                </Text>
              </div>
            ))}
          </Grid>

          <div className="mt-16">
            <Heading size="h2" as="h2">
              {show.doctorsHeading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-3 max-w-xl">
              {show.doctorsIntro}
            </Text>
            <Grid className="mt-8 grid-cols-1 gap-4 sm:grid-cols-3">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="border-border bg-surface flex items-center gap-4 rounded-xl border p-5 shadow-sm"
                >
                  {/* Initials, not a generated face — no real photo
                      exists for a fictional doctor. */}
                  <span
                    aria-hidden="true"
                    className="from-accent-soft to-accent/25 text-accent flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-base font-semibold"
                  >
                    {doctor.name
                      .replace(/^Dra?\.\s*/, "")
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <Text className="font-semibold">{doctor.name}</Text>
                    <Text tone="secondary" size="sm">
                      {doctor.specialty}
                    </Text>
                  </div>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <Section theme="soft" ariaLabelledBy="clinic-mobile-heading" id="mobile">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading id="clinic-mobile-heading" size="h2">
                {show.mobileHeading}
              </Heading>
              <Text tone="secondary" size="lg" className="mt-4 max-w-md">
                {show.mobileBody}
              </Text>

              <div className="border-border bg-surface mt-8 rounded-xl border p-6 shadow-sm">
                <Heading size="h4" as="h3">
                  {show.locationHeading}
                </Heading>
                <ul className="mt-4 flex flex-col gap-3">
                  <li className="text-body-sm text-text-secondary flex items-start gap-3">
                    <PinIcon
                      className="text-accent mt-0.5 shrink-0"
                      width={18}
                      height={18}
                    />
                    {show.address}
                  </li>
                  <li className="text-body-sm text-text-secondary flex items-start gap-3">
                    <ClockIcon
                      className="text-accent mt-0.5 shrink-0"
                      width={18}
                      height={18}
                    />
                    {show.hours}
                  </li>
                  <li className="text-body-sm text-text-secondary flex items-start gap-3">
                    <PhoneIcon
                      className="text-accent mt-0.5 shrink-0"
                      width={18}
                      height={18}
                    />
                    {show.phone}
                  </li>
                </ul>
                <div aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
                  <span className="bg-whatsapp inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-white">
                    <WhatsAppIcon width={16} height={16} />
                    {show.whatsapp}
                  </span>
                  <span className="border-border-strong text-text inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium">
                    <PinIcon width={16} height={16} />
                    {show.directions}
                  </span>
                </div>
                <Text tone="secondary" size="caption" className="mt-4">
                  {show.demoNote}
                </Text>
              </div>
            </div>

            <div aria-hidden="true" className="flex justify-center">
              <PhoneFrame className="w-[260px]">
                <div className="flex flex-col gap-4 p-4">
                  <ClinicPreview content={dict.work.previewContent.clinic} />
                  <span className="bg-whatsapp inline-flex h-9 items-center justify-center gap-2 rounded-full text-xs font-medium text-white">
                    <WhatsAppIcon width={14} height={14} />
                    {show.whatsapp}
                  </span>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
