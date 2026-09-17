import { ImageResponse } from "next/og";
import {
  defaultLocale,
  getDictionary,
  isLocale,
} from "@/lib/i18n/getDictionary";

// The `alt` export can't be a function — it's fixed at the module level,
// so it can't vary per locale the way the rendered image itself can.
export const alt =
  "Javier López Digital — Websites & Software for Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fafaf7",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 28,
          fontWeight: 600,
          color: "#1d2633",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 14,
            backgroundColor: "#3451d1",
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          JL
        </div>
        Javier López Digital
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 900,
          marginTop: 24,
          color: "#1d2633",
        }}
      >
        {dict.seo.ogHeadline}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#5b6575",
          marginTop: 32,
          maxWidth: 900,
          lineHeight: 1.4,
        }}
      >
        {dict.seo.ogTagline}
      </div>
    </div>,
    { ...size },
  );
}
