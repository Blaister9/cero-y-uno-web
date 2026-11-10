import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <article className="h-full">
      <Link className="glass-panel glass-interactive group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/15 p-6 transition hover:border-matrix/50 focus-visible:border-matrix/50" href={href}>
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-11 place-items-center rounded-lg border border-matrix/20 bg-matrixdeep/30 text-matrix">
            <Icon aria-hidden="true" size={21} />
          </span>
          <ArrowUpRight aria-hidden="true" className="text-matrix transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" size={19} />
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-7 text-porcelain">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-steel">{description}</p>
      </Link>
    </article>
  );
}
