import { cn } from "@/lib/utils";

type BinaryDividerProps = {
  className?: string;
  label?: string;
};

export function BinaryDivider({ className, label = "compile.flow" }: BinaryDividerProps) {
  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden bg-ink", className)}>
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-signal/35 to-white/10" />
        <div className="rounded border border-white/10 bg-white/[0.035] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-steel">
          {label}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-ember/25 to-transparent" />
      </div>
    </div>
  );
}
