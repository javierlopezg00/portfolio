import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#08090b",
        color: "#4f7cff",
        fontSize: 16,
        fontWeight: 700,
        fontFamily: "sans-serif",
        letterSpacing: -0.5,
      }}
    >
      JL
    </div>,
    { ...size },
  );
}
