import { Brain, Sparkles, Target } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: Brain,
    title: "Analytical thinking",
    text: "Before writing code, I study your audience, your offer and the path that turns a visitor into a lead.",
  },
  {
    icon: Sparkles,
    title: "AI-powered speed",
    text: "I use AI tools in my workflow to deliver in days what used to take weeks — without cutting corners on quality.",
  },
  {
    icon: Target,
    title: "Conversion focus",
    text: "Every section has a purpose: creating real value and more customers for your business.",
  },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-20 md:py-24">
      <div ref={ref} className="reveal mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="about me" title={<>Hi, I'm <span className="text-gradient">Rafael Ramos</span></>} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a web developer who builds websites and landing pages for businesses that want to be found, earn
              trust and sell more online.
            </p>
            <p>
              I combine an analytical mindset with the speed of AI tools to deliver projects that are fast, beautiful
              and, above all, bring real results to my clients.
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
              goal: <span className="text-code-string">"your growth"</span>,
            </p>
            <p>{"}"};</p>
          </div>
        </div>

        <ul className="grid gap-5">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`glass glow-border flex gap-5 rounded-3xl p-6 shadow-card transition-transform duration-500 hover:-translate-y-1 ${["", "lg:ml-6", "lg:ml-12"][i]}`}
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
