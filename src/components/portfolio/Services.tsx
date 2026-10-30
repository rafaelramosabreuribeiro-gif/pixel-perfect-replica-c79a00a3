import { Code2, Gauge, MonitorSmartphone, ShieldCheck, type LucideIcon } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { useTilt } from "@/hooks/use-tilt";
import { SectionHeading } from "./SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Web Development (React + Tailwind CSS)",
    text: "Hand-crafted websites and landing pages built around your brand, your audience and your goals.",
    points: ["Clean, scalable code", "Conversion-focused layouts"],
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile-First & Responsive Design",
    text: "Pixel-perfect on every screen — designed for the phone first, where most of your customers are.",
    points: ["Flawless on any device", "Smooth, intuitive navigation"],
  },
  {
    icon: Gauge,
    title: "High-Speed Performance & SEO Optimization",
    text: "Fast-loading pages structured to rank on Google and keep visitors from bouncing.",
    points: ["Top Lighthouse scores", "Search-ready structure"],
  },
  {
    icon: ShieldCheck,
    title: "SSL Security & Dedicated Hosting Management",
    text: "Your site stays secure, online and up to date, so you can focus on running your business.",
    points: ["HTTPS by default", "Domain & hosting setup"],
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
    <section id="services" className="relative py-20 md:py-24">
      <div className="absolute -left-40 top-1/3 size-[480px] orb-neon opacity-60" aria-hidden />
      <div ref={ref} className="reveal relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="services" title="Services & Solutions">
          Tailored solutions, from the first sketch to your site going live.
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
