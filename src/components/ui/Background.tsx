import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";

/**
 * Fixed atmosphere behind everything: a base wash, a masked technical grid
 * and two very slow drifting glows. Transform/opacity only, so it composites
 * on the GPU. The animation is disabled on small screens to keep mobile cheap.
 * Fades in first so the page-load intro has a settled backdrop to reveal on.
 */
export function Background() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: EASE }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-void" />

      <div
        className="grid-plane absolute inset-0 opacity-60"
        style={{
          maskImage: "radial-gradient(115% 70% at 50% 0%, #000 0%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(115% 70% at 50% 0%, #000 0%, transparent 68%)",
        }}
      />

      <div
        className="animate-aurora absolute -top-[22%] -left-[12%] h-[58vmax] w-[58vmax] rounded-full blur-[110px] will-change-transform max-sm:animate-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 11%, transparent), transparent 62%)",
        }}
      />
      <div
        className="animate-aurora absolute -right-[18%] bottom-[-28%] h-[52vmax] w-[52vmax] rounded-full blur-[120px] will-change-transform max-sm:animate-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ink) 5.5%, transparent), transparent 66%)",
          animationDelay: "-9s",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 90% at 50% 0%, transparent 38%, var(--vignette) 100%)",
        }}
      />
    </motion.div>
  );
}
