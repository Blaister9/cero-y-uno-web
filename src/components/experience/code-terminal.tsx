import { Terminal } from "lucide-react";

type CodeTerminalProps = {
  className?: string;
  lines?: string[];
};

const defaultLines = [
  "> booting cero_y_uno.system",
  "> reading ideas...",
  "> compiling architecture...",
  "> transforming complexity...",
  "> deploying software..."
];

export function CodeTerminal({ className, lines = defaultLines }: CodeTerminalProps) {
  return (
    <div className={className}>
      <div className="rounded border border-white/10 bg-ink/78 shadow-inner-line backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <Terminal aria-hidden="true" className="text-signal" size={16} />
          <p className="font-mono text-xs text-steel">cero_y_uno.build</p>
        </div>
        <div className="grid gap-2 p-4 font-mono text-xs leading-6 text-steel">
          {lines.map((line) => (
            <p key={line}>
              <span className="text-signal/80">{line.slice(0, 1)}</span>
              {line.slice(1)}
            </p>
          ))}
          <div className="mt-2 rounded border border-white/10 bg-white/[0.035] p-3 text-porcelain">
            <p>
              <span className="text-ember">const</span> idea = <span className="text-signal">&quot;lo que otros imaginan&quot;</span>;
            </p>
            <p>
              <span className="text-ember">const</span> sistema = ceroYUno.build(idea);
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
