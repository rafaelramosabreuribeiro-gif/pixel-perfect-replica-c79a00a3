import { Github, Mail } from "lucide-react";

import { navLinks, site, whatsappLink } from "@/lib/site";
import { Logo } from "./Header";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-muted-foreground">Sites e landing pages que geram resultado.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Rodapé">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          {[
            { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon, external: true },
            { href: `mailto:${site.email}`, label: "E-mail", Icon: Mail, external: false },
            { href: site.github, label: "GitHub", Icon: Github, external: true },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name} · Feito com React & Tailwind CSS
      </p>
    </footer>
  );
}
