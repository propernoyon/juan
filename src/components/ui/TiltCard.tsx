import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { useHasFinePointer, usePrefersReducedMotion } from "../../lib/hooks";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. Keep it small — this is a hint, not a ride. */
  max?: number;
  lift?: number;
};

/** Pointer-reactive 3D tilt, driven entirely by springs. */
export function TiltCard({ children, className, max = 4.5, lift = 6 }: TiltCardProps) {
  const reduced = usePrefersReducedMotion();
  const fine = useHasFinePointer();
  const enabled = fine && !reduced;
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 170, damping: 20, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 170, damping: 20, mass: 0.5 });
  const translateY = useSpring(0, { stiffness: 170, damping: 20, mass: 0.5 });

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!enabled || !el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
    translateY.set(-lift);
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    translateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={
        enabled
          ? { rotateX, rotateY, y: translateY, transformPerspective: 1200 }
          : undefined
      }
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
