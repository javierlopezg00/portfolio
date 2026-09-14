import { ImageResponse } from "next/og";

export const alt = "Javier López — Software Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        We build digital experiences that work.
      </div>
      <div style={{ fontSize: 28, color: "#9ea3ae", marginTop: 32 }}>
        Websites · Web Apps · Software · Automation
      </div>
    </div>,
    { ...size },
  );
}
