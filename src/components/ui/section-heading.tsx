import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium text-signal">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-7 text-steel md:text-lg">{children}</p> : null}
    </div>
  );
}
