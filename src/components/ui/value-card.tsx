import type { ReactNode } from "react";

type ValueCardProps = {
  eyebrow?: string;
  title: string;
  id?: string;
  children: ReactNode;
};

export function ValueCard({ eyebrow, title, id, children }: ValueCardProps) {
  return (
    <article className="glass-panel scroll-mt-24 rounded-xl border border-white/15 p-6" id={id}>
      {eyebrow ? <p className="font-mono text-xs text-ember">{eyebrow}</p> : null}
      <h2 className="mt-3 text-xl font-semibold leading-7 text-porcelain">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-steel">{children}</div>
    </article>
  );
}
