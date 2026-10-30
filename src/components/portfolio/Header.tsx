import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <a href="#home" className="font-mono text-[0.95rem] font-semibold tracking-tight" aria-label="Rafael Ramos — home">
      <span className="text-muted-foreground">&lt;</span>
      <span className="text-foreground">Rafael</span>
      <span className="text-gradient">Ramos</span>
      <span className="text-muted-foreground"> /&gt;</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
          scrolled ? "glass-strong shadow-card" : "border border-transparent",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="neon" size="pill" className="hidden sm:inline-flex">
            <a href="#contact">Get a Quote</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 shadow-card md:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col" aria-label="Mobile menu">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="neon" size="xl" className="mt-2 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
