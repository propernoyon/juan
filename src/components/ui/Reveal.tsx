import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { EASE, VIEWPORT } from "../../lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  /** Disables the blur pass — use on large sections for cheaper paint. */
  plain?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.85,
  plain = false,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={plain ? { opacity: 0, y } : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={plain ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
