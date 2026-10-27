import { Building2, MonitorSmartphone, Rocket, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { useTilt } from "@/hooks/use-tilt";
import { WhatsAppIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type Service = {
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  points: string[];
};

const services: Service[] = [
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    text: "Páginas focadas em um objetivo: transformar visitas em contatos, agendamentos e vendas.",
    points: ["Copy e estrutura persuasivas", "CTAs estratégicos"],
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    text: "Presença profissional para sua empresa, com páginas claras sobre serviços, equipe e contato.",
    points: ["Visual alinhado à marca", "Otimizado para o Google"],
  },
  {
    icon: MonitorSmartphone,
    title: "Otimização Mobile & Redesign",
    text: "Seu site atual mais rápido, moderno e impecável no celular — onde está a maioria dos seus clientes.",
    points: ["Carregamento ultrarrápido", "Layout 100% responsivo"],
  },
  {
    icon: WhatsAppIcon,
    title: "Integração com WhatsApp",
    text: "Botões e formulários que levam o cliente direto para a sua conversa, com mensagem pronta.",
    points: ["Atendimento imediato", "Mensagens pré-preenchidas"],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const tilt = useTilt<HTMLElement>(6);
  const Icon = service.icon;
  return (
    <article
      ref={tilt.ref}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      className="glass glow-border tilt spotlight group relative rounded-3xl p-7 shadow-card"
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-gradient-neon text-primary-foreground shadow-neon transition-transform duration-500 group-hover:scale-110">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{service.text}</p>
      <ul className="mt-5 space-y-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-center gap-2 font-mono text-xs text-foreground/80">
            <span className="text-primary">▹</span> {p}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute -left-40 top-1/3 size-[480px] orb-neon opacity-60" aria-hidden />
      <div ref={ref} className="reveal relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="serviços" title="Como posso ajudar o seu negócio">
          Soluções sob medida, do primeiro rascunho ao site no ar.
        </SectionHeading>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
