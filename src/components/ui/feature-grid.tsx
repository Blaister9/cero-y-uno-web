import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type FeatureGridProps = {
  children: ReactNode;
  columns?: "two" | "three";
};

export function FeatureGrid({ children, columns = "three" }: FeatureGridProps) {
  const gridClass = columns === "two" ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <Container className="py-20 md:py-24">
      <div className={`grid gap-4 md:grid-cols-2 ${gridClass}`}>{children}</div>
    </Container>
  );
}
