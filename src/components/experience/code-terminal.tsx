import { Terminal } from "lucide-react";

type CodeTerminalProps = {
  className?: string;
  lines: string[];
};

export function CodeTerminal({ className, lines }: CodeTerminalProps) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="rounded border border-matrix/20 bg-ink/[0.84] font-mono text-xs shadow-premium">
        <div className="flex items-center gap-2 border-b border-matrix/15 px-4 py-3 text-matrix">
          <Terminal size={15} />
          <p>cero_y_uno.build</p>
        </div>
        <ul className="grid gap-2 p-4 leading-6 text-steel">
          {lines.map((line) => (
            <li key={line}>
              <span className="mr-2 text-matrix/75">&gt;</span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
