import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  signal?: string;
};

export function ServiceCard({ title, description, icon: Icon, signal }: ServiceCardProps) {
  return (
    <article className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded border border-white/10 bg-white/[0.035] p-6 shadow-inner-line transition duration-300 hover:-translate-y-1 hover:border-signal/45 hover:bg-white/[0.055]">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/55 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded border border-white/10 bg-deepblue/35 text-signal">
            <Icon aria-hidden="true" size={22} />
          </div>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel">
            module.loaded
          </span>
        </div>
        <h3 className="mt-7 text-xl font-semibold leading-7 text-porcelain">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel">{description}</p>
      </div>
      <div className="mt-7 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel transition duration-300 group-hover:text-signal">
            status: {signal ?? "ready"}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-ember/80 shadow-[0_0_18px_rgba(218,180,104,0.55)]" />
        </div>
      </div>
    </article>
  );
}
