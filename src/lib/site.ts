import odontoImg from "@/assets/odonto-prime.jpg.asset.json";
import apexImg from "@/assets/apex-fitness.jpg.asset.json";
import savrImg from "@/assets/savr.jpg";

export const site = {
  name: "Rafael Ramos",
  // TODO: replace with the real WhatsApp number (country + area code, digits only)
  whatsappNumber: "5500000000000",
  // TODO: replace with the real contact e-mail
  email: "contato@rafaelramos.dev",
  github: "https://github.com/rafaelramosabreuribeiro-gif",
};

export function whatsappLink(message = "Hi Rafael! I found your portfolio and I'd like to talk about a project.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
    subtitle: "Dental Clinic & Aesthetics",
    category: "Healthcare & Aesthetics · Showcase Project",
    description:
      "High-converting landing page for a modern dental clinic featuring interactive treatment showcases, online appointment booking, patient reviews, and dark/light UI accents.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: odontoImg.url,
    siteUrl: "https://odonto-prime-smile-guide.lovable.app/",
    codeUrl: "https://github.com/rafaelramosabreuribeiro-gif/screenshot-exact-match",
  },
  {
    index: "02",
    name: "APEX Fitness",
    subtitle: "High Performance Training",
    category: "Sports & Personal Training · Showcase Project",
    description:
      "Ultra-modern landing page for a fitness brand featuring membership tier cards, training program showcases, interactive BMI calculator, and dark neon aesthetics.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: apexImg.url,
    siteUrl: "https://pixel-perfect-mirror-6217.lovable.app/",
    // TODO: add the APEX repository link
    codeUrl: null,
  },
  {
    index: "03",
    name: "SAVR",
    subtitle: "Fine Dining & Gastronomy",
    category: "Hospitality & Gastronomy · Showcase Project",
    description:
      "Sophisticated fine dining landing page with interactive menu filtering, online table reservations via WhatsApp, luxury photo gallery, and refined dark amber visuals.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: savrImg,
    siteUrl: "https://savr-golden-table-experience.lovable.app/",
    // TODO: add the SAVR repository link
    codeUrl: null,
  },
];
