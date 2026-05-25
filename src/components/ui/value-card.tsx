import type { ReactNode } from "react";

type ValueCardProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function ValueCard({ eyebrow, title, children }: ValueCardProps) {
  return (
    <article className="rounded border border-white/10 bg-white/[0.035] p-6 shadow-inner-line">
      {eyebrow ? <p className="font-mono text-xs text-ember">{eyebrow}</p> : null}
      <h2 className="mt-3 text-xl font-semibold leading-7 text-porcelain">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-steel">{children}</div>
    </article>
  );
}
