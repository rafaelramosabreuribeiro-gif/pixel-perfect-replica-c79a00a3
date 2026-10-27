import odontoImg from "@/assets/odonto-prime.jpg.asset.json";
import apexImg from "@/assets/apex-fitness.jpg.asset.json";

export const site = {
  name: "Rafael Ramos",
  // TODO: replace with the real WhatsApp number (country + area code, digits only)
  whatsappNumber: "5500000000000",
  // TODO: replace with the real contact e-mail
  email: "contato@rafaelramos.dev",
  github: "https://github.com/rafaelramosabreuribeiro-gif",
};

export function whatsappLink(message = "Olá, Rafael! Vim pelo seu portfólio e gostaria de um orçamento.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export type Project = {
  index: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  siteUrl: string;
  codeUrl: string | null;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Odonto Prime",
    subtitle: "Landing Page para Clínica Odontológica",
    category: "Saúde & Bem-Estar · Projeto Conceitual",
    description:
      "Landing page moderna com foco em agendamento de consultas via WhatsApp, usabilidade e apresentação de tratamentos.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: odontoImg.url,
    siteUrl: "https://odonto-prime-smile-guide.lovable.app/",
    codeUrl: "https://github.com/rafaelramosabreuribeiro-gif/screenshot-exact-match",
  },
  {
    index: "02",
    name: "APEX",
    subtitle: "Consultoria Fitness & Personal Trainer",
    category: "Esportes & Saúde · Projeto Conceitual",
    description:
      "Landing page interativa e de alto impacto para consultoria fitness, com foco em conversão de alunos, tabela de planos, interatividade e estética néon.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: apexImg.url,
    siteUrl: "https://pixel-perfect-mirror-6217.lovable.app/",
    // TODO: add the APEX repository link
    codeUrl: null,
  },
];
