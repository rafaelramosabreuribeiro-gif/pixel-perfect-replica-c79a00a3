import { describe, expect, it } from "vitest";

import { buildQuoteMessage, quoteSchema } from "@/lib/quote";
import { whatsappLink } from "@/lib/site";

describe("quote form", () => {
  it("rejects a request without a name", () => {
    const r = quoteSchema.safeParse({ name: "", contact: "a@b.com", type: "Landing Page", message: "I need a website" });
    expect(r.success).toBe(false);
  });

  it("puts the client's details into the WhatsApp message", () => {
    const msg = buildQuoteMessage({
      name: "Ana",
      contact: "ana@email.com",
      type: "Business Website",
      message: "Website for my bakery",
    });
    expect(msg).toContain("*Name:* Ana");
    expect(msg).toContain("*Project type:* Business Website");
    expect(whatsappLink(msg)).toContain(encodeURIComponent("*Name:* Ana"));
  });
});
