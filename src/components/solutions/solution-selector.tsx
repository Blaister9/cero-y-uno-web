"use client";

import type { ReactNode } from "react";
import { solutionsPage } from "@/content/solutions";
import { useSolutionSelection } from "@/lib/use-solution-selection";

export function SolutionSelector({ children }: { children: ReactNode }) {
  const selection = useSolutionSelection();
  return (
    <fieldset
      className="solution-explorer"
      ref={selection.ref}
      onChange={selection.onChange}
    >
      <legend className="sr-only">{solutionsPage.explorer.choiceLabel}</legend>
      {children}
    </fieldset>
  );
}
