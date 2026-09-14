import type { Metadata } from "next";
import { KitchenSinkClient } from "./KitchenSinkClient";

// Internal review-only route — remove before launch (Phase 11 QA).
export const metadata: Metadata = {
  title: "Kitchen Sink",
  robots: { index: false, follow: false },
};

export default function KitchenSinkPage() {
  return <KitchenSinkClient />;
}
