import { ImageResponse } from "next/og";
import {
  defaultLocale,
  getDictionary,
  isLocale,
} from "@/lib/i18n/getDictionary";

// The `alt` export can't be a function — it's fixed at the module level,
// so it can't vary per locale the way the rendered image itself can.
export const alt = "Javier López Digital — Software Development";
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
        backgroundColor: "#08090b",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 28, color: "#4f7cff", letterSpacing: 2 }}>JL</div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 900,
          marginTop: 24,
          color: "#f4f4f5",
        }}
      >
        {dict.seo.ogHeadline}
      </div>
      <div style={{ fontSize: 28, color: "#9ea3ae", marginTop: 32 }}>
        {dict.seo.ogTagline}
      </div>
    </div>,
    { ...size },
  );
}
