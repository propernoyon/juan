import type { Transition, Variants } from "framer-motion";

/** The house easing curve — fast out, long settle. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Shared viewport config for scroll-triggered reveals. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;
export const VIEWPORT_EARLY = { once: true, amount: 0.05 } as const;

export const transition = (duration = 0.8, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: transition(0.85) },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: transition(1) },
};

export const blurUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: transition(0.9) },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: transition(1) },
};

export const staggerParent = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});
