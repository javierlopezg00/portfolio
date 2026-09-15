import { describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/lead/route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  projectType: "website",
  needs: ["bookings"],
  budget: "tier-2",
  timeline: "1-2-months",
  name: "Ada Lovelace",
  company: "",
  email: "ada@example.com",
  whatsapp: "",
};

describe("POST /api/lead", () => {
  it("rejects an invalid payload", async () => {
    const res = await POST(makeRequest({ projectType: "" }));
    expect(res.status).toBe(400);
  });

  it("accepts a valid payload and logs instead of emailing when unconfigured", async () => {
    const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    const res = await POST(makeRequest(validPayload));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(infoSpy).toHaveBeenCalled();
    infoSpy.mockRestore();
  });

  it("pretends success on a honeypot-tripped submission without logging it as a lead", async () => {
    const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    const res = await POST(makeRequest({ ...validPayload, honeypot: "spam" }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(infoSpy).not.toHaveBeenCalled();
    infoSpy.mockRestore();
  });
});
