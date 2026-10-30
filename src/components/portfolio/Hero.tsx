import { ArrowUpRight, Gauge, Mail, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTilt } from "@/hooks/use-tilt";

function CodeMockup() {
  const tilt = useTilt<HTMLDivElement>(5);
  const k = "text-code-keyword";
  const s = "text-code-string";
  const f = "text-code-fn";
  const t = "text-code-tag";
  const c = "text-code-comment";

  return (
    <div className="relative min-w-0">
      <div className="absolute -inset-10 orb-neon" aria-hidden />
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className="glass glow-border tilt spotlight relative overflow-hidden rounded-3xl shadow-card"
      >
        <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
          <span className="size-3 rounded-full bg-destructive/80" />
          <span className="size-3 rounded-full bg-code-fn/80" />
          <span className="size-3 rounded-full bg-primary/80" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">LandingPage.tsx</span>
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[0.78rem] leading-relaxed sm:text-sm">
          <code>
            <span className={c}>{"// built to convert"}</span>
            {"\n"}
            <span className={k}>export default function</span> <span className={f}>LandingPage</span>() {"{"}
            {"\n  "}
            <span className={k}>const</span> visitor = <span className={f}>useVisitor</span>();
            {"\n\n  "}
            <span className={k}>return</span> (
            {"\n    "}
            <span className={t}>&lt;Hero</span>
            {"\n      "}title=<span className={s}>"Your business, online"</span>
            {"\n      "}performance=<span className={s}>{"{100}"}</span>
            {"\n      "}mobile=<span className={s}>"flawless"</span>
            {"\n    "}
            <span className={t}>/&gt;</span>
            {"\n    "}
            <span className={t}>&lt;CTA</span> onClick={"{"}() =&gt; visitor.<span className={f}>convert</span>(){"}"}{" "}
            <span className={t}>/&gt;</span>
            {"\n  "});
            {"\n"}
            {"}"}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink" />
          </code>
        </pre>
      </div>

      <div className="glass absolute -bottom-8 -left-6 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-card animate-float sm:flex">
        <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
          <Gauge className="size-5" />
        </span>
        <div className="leading-tight">
          <p className="font-mono text-lg font-semibold text-primary">100</p>
          <p className="text-xs text-muted-foreground">Performance</p>
        </div>
      </div>

      <div
        className="glass absolute -right-3 -top-5 hidden items-center gap-2 rounded-full px-4 py-2 shadow-card animate-float sm:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <Smartphone className="size-4 text-accent" />
        <span className="text-xs font-medium">Mobile-first</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-44">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -right-40 top-10 size-[520px] orb-cyan" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-pulse-glow" />
            Available for new projects
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
            Creative Web Developer & <span className="text-gradient">UI Specialist</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I craft high-converting, modern, and responsive landing pages built with React, TypeScript, and
            Tailwind CSS.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="neon" size="xl">
              <a href="#projects">
                View Projects <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">
                <Mail /> Contact Me
              </a>
            </Button>
          </div>
        </div>

        <CodeMockup />
      </div>
    </section>
  );
}
