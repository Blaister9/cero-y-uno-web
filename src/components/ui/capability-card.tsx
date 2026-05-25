import type { LucideIcon } from "lucide-react";

type CapabilityCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function CapabilityCard({ title, description, icon: Icon }: CapabilityCardProps) {
  return (
    <article className="group min-h-64 rounded border border-white/10 bg-white/[0.035] p-6 shadow-inner-line transition hover:border-signal/35 hover:bg-white/[0.055]">
      <div className="grid h-11 w-11 place-items-center rounded border border-white/10 bg-ink text-signal">
        <Icon aria-hidden="true" size={22} />
      </div>
      <h3 className="mt-7 text-xl font-semibold leading-7 text-porcelain">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-steel">{description}</p>
    </article>
  );
}
