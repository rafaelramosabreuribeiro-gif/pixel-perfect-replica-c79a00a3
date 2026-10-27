import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">//</span> {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}
