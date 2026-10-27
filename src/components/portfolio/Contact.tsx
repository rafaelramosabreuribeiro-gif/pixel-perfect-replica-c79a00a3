import { useState, type FormEvent } from "react";
import { Github, Mail, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/use-reveal";
import { buildQuoteMessage, projectTypes, quoteSchema } from "@/lib/quote";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

const fieldClass =
  "h-12 rounded-xl border-border bg-background/60 px-4 text-base focus-visible:border-primary/60 focus-visible:ring-primary/40";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = quoteSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    window.open(whatsappLink(buildQuoteMessage(parsed.data)), "_blank", "noopener,noreferrer");
    toast.success("Abrindo o WhatsApp com seu pedido de orçamento!");
    e.currentTarget.reset();
  }

  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="absolute right-0 top-0 size-[460px] orb-cyan opacity-70" aria-hidden />
      <div ref={ref} className="reveal relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="contato" title={<>Vamos tirar seu projeto <span className="text-gradient">do papel?</span></>}>
            Conte o que você precisa e receba um orçamento sem compromisso. Respondo rapidinho.
          </SectionHeading>

          <div className="mt-9 space-y-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-border flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-neon text-primary-foreground">
                <WhatsAppIcon className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">WhatsApp</span>
                <span className="text-sm text-muted-foreground">Fale comigo direto</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="glass glow-border flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-secondary text-accent">
                <Mail className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">E-mail</span>
                <span className="text-sm text-muted-foreground">{site.email}</span>
              </span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-border flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-secondary text-foreground">
                <Github className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">GitHub</span>
                <span className="text-sm text-muted-foreground">Veja meus repositórios</span>
              </span>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="glass glow-border space-y-5 rounded-3xl p-6 shadow-card sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" placeholder="Seu nome" className={fieldClass} aria-invalid={!!errors.name} />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">E-mail ou WhatsApp</Label>
              <Input id="contact" name="contact" placeholder="voce@email.com" className={fieldClass} aria-invalid={!!errors.contact} />
              {errors.contact && <p className="text-sm text-destructive">{errors.contact}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo de projeto</Label>
            <select
              id="type"
              name="type"
              defaultValue={projectTypes[0]}
              className={`${fieldClass} w-full border outline-none focus-visible:ring-1`}
            >
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-popover text-popover-foreground">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Sobre o projeto</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Conte um pouco sobre o seu negócio e o que você precisa..."
              className="rounded-xl border-border bg-background/60 px-4 py-3 text-base focus-visible:border-primary/60 focus-visible:ring-primary/40"
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>

          <Button type="submit" variant="neon" size="xl" className="w-full">
            <Send /> Solicitar Orçamento
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Ao enviar, o WhatsApp abre com sua mensagem pronta.
          </p>
        </form>
      </div>
    </section>
  );
}
