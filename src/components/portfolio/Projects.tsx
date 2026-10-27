import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { useTilt } from "@/hooks/use-tilt";
import { projects, type Project } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  const tilt = useTilt<HTMLElement>(4);
  return (
    <article
      ref={tilt.ref}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      className="glass glow-border tilt spotlight group relative flex flex-col overflow-hidden rounded-3xl shadow-card"
    >
      <div className="relative aspect-[12/7] overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`Prévia do site ${project.name}`}
          loading="lazy"
          width={1200}
          height={700}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-xs text-primary">
          {project.index}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.category}</p>
        <h3 className="mt-3 font-display text-2xl font-bold">
          {project.name} <span className="font-medium text-muted-foreground">— {project.subtitle}</span>
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <Button asChild variant="neon" size="pill">
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              Acessar Site <ArrowUpRight />
            </a>
          </Button>
          {project.codeUrl ? (
            <Button asChild variant="glass" size="pill">
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Github /> Ver Código
              </a>
            </Button>
          ) : (
            <Button variant="glass" size="pill" disabled>
              <Github /> Código em breve
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projetos" className="relative py-20 md:py-24">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="projetos em destaque" title="Trabalhos recentes">
          Landing pages pensadas para converter, com visual marcante e navegação fluida em qualquer tela.
        </SectionHeading>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.index} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
