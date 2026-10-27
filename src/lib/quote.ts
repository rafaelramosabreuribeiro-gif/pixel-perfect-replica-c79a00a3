import { z } from "zod";

export const projectTypes = [
  "Landing Page",
  "Site Institucional",
  "Otimização / Redesign",
  "Integração com WhatsApp",
  "Outro",
] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80, "Nome muito longo"),
  contact: z.string().trim().min(5, "Informe um e-mail ou telefone").max(120, "Contato muito longo"),
  type: z.enum(projectTypes),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o projeto").max(1000, "Mensagem muito longa"),
});

export type Quote = z.infer<typeof quoteSchema>;

export function buildQuoteMessage(q: Quote) {
  return [
    "Olá, Rafael! Gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${q.name}`,
    `*Contato:* ${q.contact}`,
    `*Tipo de projeto:* ${q.type}`,
    "",
    `*Sobre o projeto:* ${q.message}`,
  ].join("\n");
}
