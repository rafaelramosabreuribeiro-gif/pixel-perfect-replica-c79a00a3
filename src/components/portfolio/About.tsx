import { Brain, Sparkles, Target } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: Brain,
    title: "Raciocínio analítico",
    text: "Antes do código, entendo o seu público, a sua oferta e o caminho que leva o visitante até o contato.",
  },
  {
    icon: Sparkles,
    title: "Velocidade com IA",
    text: "Uso ferramentas de IA no fluxo de trabalho para entregar em dias o que antes levava semanas — sem abrir mão da qualidade.",
  },
  {
    icon: Target,
    title: "Foco em conversão",
    text: "Cada seção tem um propósito: gerar valor real e mais clientes para o seu negócio.",
  },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="sobre mim" title={<>Olá, eu sou o <span className="text-gradient">Rafael Ramos</span></>} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Sou desenvolvedor web e crio sites e landing pages para negócios que querem ser encontrados, transmitir
              confiança e vender mais pela internet.
            </p>
            <p>
              Combino um olhar analítico com a agilidade das ferramentas de IA para entregar projetos rápidos,
              bonitos e, principalmente, que trazem resultado para o cliente.
            </p>
          </div>

          <div className="glass mt-8 rounded-2xl p-5 font-mono text-sm">
            <p>
              <span className="text-code-keyword">const</span> rafael = {"{"}
            </p>
            <p className="pl-5">
              stack: [<span className="text-code-string">"React"</span>, <span className="text-code-string">"TypeScript"</span>,{" "}
              <span className="text-code-string">"Tailwind"</span>],
            </p>
            <p className="pl-5">
              objetivo: <span className="text-code-string">"seu crescimento"</span>,
            </p>
            <p>{"}"};</p>
          </div>
        </div>

        <ul className="grid gap-5">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="glass glow-border flex gap-5 rounded-3xl p-6 shadow-card transition-transform duration-500 hover:-translate-y-1"
              style={{ marginLeft: `${i * 1.5}rem` }}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
