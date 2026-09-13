import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Renders the hairline separator above the section. */
  divided?: boolean;
};

export function Section({ id, children, className, divided = true }: SectionProps) {
  return (
    <section id={id} className="relative">
      {divided ? (
        <div className="shell">
          <div className="hairline" />
        </div>
      ) : null}
      <div className={cn("shell py-24 sm:py-32 lg:py-40", className)}>{children}</div>
    </section>
  );
}
