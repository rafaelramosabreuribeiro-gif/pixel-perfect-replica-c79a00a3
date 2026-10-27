import { describe, expect, it } from "vitest";

import { buildQuoteMessage, quoteSchema } from "@/lib/quote";
import { whatsappLink } from "@/lib/site";

describe("quote form", () => {
  it("rejects a request without a name", () => {
    const r = quoteSchema.safeParse({ name: "", contact: "a@b.com", type: "Landing Page", message: "Preciso de um site" });
    expect(r.success).toBe(false);
  });

  it("puts the client's details into the WhatsApp message", () => {
    const msg = buildQuoteMessage({
      name: "Ana",
      contact: "ana@email.com",
      type: "Site Institucional",
      message: "Site para minha padaria",
    });
    expect(msg).toContain("*Nome:* Ana");
    expect(msg).toContain("*Tipo de projeto:* Site Institucional");
    expect(whatsappLink(msg)).toContain(encodeURIComponent("*Nome:* Ana"));
  });
});
