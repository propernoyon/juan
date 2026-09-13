import { motion, useSpring } from "framer-motion";
import { Code2, Gauge, Sparkles } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { useHasFinePointer, usePrefersReducedMotion } from "../../lib/hooks";

type Chip = {
  icon: LucideIcon;
  label: string;
  value: string;
  className: string;
  delay: string;
};

const CHIPS: Chip[] = [
  {
    icon: Code2,
    label: "TypeScript",
    value: "strict mode",
    className: "left-[2%] top-[12%]",
    delay: "0s",
  },
  {
    icon: Sparkles,
    label: "Framer Motion",
    value: "native 60fps",
    className: "right-[0%] top-[42%]",
    delay: "-2.6s",
  },
  {
    icon: Gauge,
    label: "Performance",
    value: "99 / 100",
    className: "left-[6%] bottom-[14%]",
    delay: "-5.1s",
  },
];

/**
 * The hero's centrepiece: nested orbital rings, a thin rotating arc and a
 * small core light, with a few floating capability chips. Everything here is
 * decorative and hidden from assistive tech.
 */
export function HeroVisual() {
  const reduced = usePrefersReducedMotion();
  const fine = useHasFinePointer();
  const enabled = fine && !reduced;
  const ref = useRef<HTMLDivElement>(null);

  const offsetX = useSpring(0, { stiffness: 60, damping: 20, mass: 0.6 });
  const offsetY = useSpring(0, { stiffness: 60, damping: 20, mass: 0.6 });

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!enabled || !el) return;
    const rect = el.getBoundingClientRect();
    offsetX.set(((event.clientX - rect.left) / rect.width - 0.5) * 26);
    offsetY.set(((event.clientY - rect.top) / rect.height - 0.5) * 26);
  };

  const onLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden
      className="pointer-events-none relative mx-auto aspect-square w-full max-w-[300px] select-none sm:max-w-[420px] lg:max-w-[540px]"
    >
      <motion.div
        style={enabled ? { x: offsetX, y: offsetY } : undefined}
        className="absolute inset-0"
      >
        {/* Accent bloom */}
        <div
          className="animate-aurora absolute inset-[2%] rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(circle at 38% 32%, color-mix(in oklab, var(--accent) 22%, transparent), color-mix(in oklab, var(--accent) 5%, transparent) 46%, transparent 72%)",
          }}
        />

        {/* Static outer ring */}
        <div className="absolute inset-[3%] rounded-full border border-line" />

        {/* Dashed ring, slow rotation */}
        <div className="animate-spin-slow absolute inset-[11%] rounded-full border border-dashed border-line-strong" />

        {/* Thin rotating arc — the signature detail */}
        <div
          className="absolute inset-[19%] rounded-full"
          style={{
            background:
              "conic-gradient(from 90deg, transparent 0deg, color-mix(in oklab, var(--accent) 65%, transparent) 34deg, transparent 96deg)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 62%, #000 63.5%, #000 65.5%, transparent 67%)",
            maskImage:
              "radial-gradient(circle, transparent 62%, #000 63.5%, #000 65.5%, transparent 67%)",
            animation: "spin 18s linear infinite",
          }}
        />

        {/* Inner disc */}
        <div className="absolute inset-[27%] overflow-hidden rounded-full border border-line bg-void-soft">
          <div className="grid-plane absolute inset-0 opacity-70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 118%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 62%)",
            }}
          />
        </div>

        {/* Core light */}
        <div className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_38px_10px_var(--node-glow)]" />

        {CHIPS.map((chip) => (
          <div
            key={chip.label}
            className={cn(
              "animate-float absolute hidden items-center gap-3 rounded-2xl border border-line bg-ink/[0.045] px-3.5 py-2.5 backdrop-blur-md md:flex",
              chip.className,
            )}
            style={{ animationDelay: chip.delay }}
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-ink/[0.06] text-accent">
              <chip.icon className="size-3.5" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[12px] font-medium whitespace-nowrap">{chip.label}</span>
              <span className="label mt-1.5 text-[9px] whitespace-nowrap">{chip.value}</span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
