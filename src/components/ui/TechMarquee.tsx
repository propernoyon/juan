import { cn } from "../../lib/utils";
import { marqueeItems } from "../../data/site";

/** Infinite monospace strip used as a divider between sections. */
export function TechMarquee({ className }: { className?: string }) {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={cn(
        "mask-x relative flex w-full overflow-hidden border-y border-line py-5",
        className,
      )}
    >
      <div className="animate-marquee flex w-max shrink-0 items-center">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="label flex items-center whitespace-nowrap">
            <span className="px-6 text-ink-dim/80">{item}</span>
            <span className="size-1 rounded-full bg-accent/40" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
