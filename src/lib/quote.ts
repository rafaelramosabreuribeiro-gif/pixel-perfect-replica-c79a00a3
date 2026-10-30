import { z } from "zod";

export const projectTypes = [
  "Landing Page",
  "Business Website",
  "Redesign / Optimization",
  "SEO & Performance",
  "Other",
] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  contact: z.string().trim().min(5, "Please enter an e-mail or phone number").max(120, "Contact is too long"),
  type: z.enum(projectTypes),
  message: z.string().trim().min(10, "Tell me a bit more about your project").max(1000, "Message is too long"),
});

export type Quote = z.infer<typeof quoteSchema>;

export function buildQuoteMessage(q: Quote) {
  return [
    "Hi Rafael! I'd like to request a quote.",
    "",
    `*Name:* ${q.name}`,
    `*Contact:* ${q.contact}`,
    `*Project type:* ${q.type}`,
    "",
    `*About the project:* ${q.message}`,
  ].join("\n");
}
