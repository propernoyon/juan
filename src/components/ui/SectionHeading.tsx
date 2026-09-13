import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { WordRise } from "./WordRise";

type SectionHeadingProps = {
  /** e.g. "02 — Selected Work" */
  eyebrow: string;
  title: string;
  accentWord?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-[clamp(2rem,5.2vw,3.6rem)]">
        <WordRise text={title} accentWord={accentWord} />
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-lg text-[0.975rem] leading-relaxed text-ink-dim",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="label flex items-center gap-2.5">
      <span className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}
