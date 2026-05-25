import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group flex min-h-64 flex-col justify-between rounded border border-white/10 bg-white/[0.035] p-6 shadow-inner-line transition duration-300 hover:-translate-y-1 hover:border-signal/45 hover:bg-white/[0.055]">
      <div>
        <div className="grid h-11 w-11 place-items-center rounded border border-white/10 bg-deepblue/35 text-signal">
          <Icon aria-hidden="true" size={22} />
        </div>
        <h3 className="mt-7 text-xl font-semibold leading-7 text-porcelain">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel">{description}</p>
      </div>
      <div className="mt-7 h-px w-full bg-gradient-to-r from-signal/45 via-white/10 to-transparent" />
    </article>
  );
}
