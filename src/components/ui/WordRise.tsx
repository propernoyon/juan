import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "../../lib/utils";
import { EASE, VIEWPORT } from "../../lib/motion";

type WordRiseProps = {
  text: string;
  /** Word that receives the serif italic treatment (punctuation-insensitive). */
  accentWord?: string;
  accentClassName?: string;
  /** Delay before the first word starts, in seconds. */
  delay?: number;
  /** Delay between consecutive words, in seconds. */
  stagger?: number;
  /** Starts on mount instead of on scroll. Use inside the first viewport. */
  immediate?: boolean;
  /** Adds a subtle blur→sharp pass to each word. Use sparingly — it paints. */
  blur?: boolean;
  className?: string;
};

/**
 * Word-by-word masked reveal: each word rises out of an overflow-hidden
 * wrapper.
 *
 * The in-view observer lives on the *untransformed* outer span. It has to:
 * the words start translated 115% down, so inside their clipping wrapper
 * their own intersection rect is empty and they would never trigger a
 * reveal of their own. The wrapper is observed once and the words animate
 * by variant propagation.
 */
export function WordRise({
  text,
  accentWord,
  accentClassName = "serif-accent",
  delay = 0,
  stagger = 0.05,
  immediate = false,
  blur = false,
  className,
}: WordRiseProps) {
  const words = text.split(" ");
  const accent = accentWord?.toLowerCase().replace(/[^a-z]/g, "");

  const parent: Variants = { hidden: {}, show: {} };

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      variants={parent}
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: VIEWPORT })}
    >
      {words.map((word, index) => {
        const isAccent = !!accent && word.toLowerCase().replace(/[^a-z]/g, "") === accent;

        const wordVariants: Variants = {
          hidden: { y: "115%", opacity: 0, filter: blur ? "blur(9px)" : "blur(0px)" },
          show: {
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.95, ease: EASE, delay: delay + index * stagger },
          },
        };

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom"
          >
            <motion.span
              variants={wordVariants}
              className={cn("inline-block will-change-transform", isAccent && accentClassName)}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
