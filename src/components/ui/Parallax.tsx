import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the element's full scroll range. Keep small. */
  amount?: number;
};

/**
 * Subtle scroll-based depth. The element drifts by `amount` px total as it
 * crosses the viewport, smoothed by a spring so the motion never feels tied
 * to raw scroll ticks. Render-transform only, and disabled under
 * prefers-reduced-motion.
 */
export function Parallax({ children, className, amount = 40 }: ParallaxProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [amount / 2, -amount / 2]);
  const smooth = useSpring(y, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      ref={ref}
      style={reduced ? undefined : { y: smooth }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
