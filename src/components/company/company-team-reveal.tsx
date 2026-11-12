"use client";

import type { ReactNode } from "react";

import { useTeamReveal } from "@/lib/use-team-reveal";

export function CompanyTeamReveal({ children }: { children: ReactNode }) {
  const ref = useTeamReveal();

  return <div className="company-team-grid" ref={ref}>{children}</div>;
}
