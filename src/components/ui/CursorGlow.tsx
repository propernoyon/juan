import { useEffect, useRef } from "react";
import { useHasFinePointer, usePrefersReducedMotion } from "../../lib/hooks";

const SIZE = 620;

/**
 * A soft light that trails the cursor. One rAF loop, one transform write per
 * frame, no React re-renders. Desktop pointers only, and never under
 * prefers-reduced-motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useHasFinePointer();
  const reduced = usePrefersReducedMotion();
  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return;

    const target = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.32 };
    const current = { ...target };
    let revealed = false;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!revealed && ref.current) {
        revealed = true;
        ref.current.style.opacity = "1";
      }
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.085;
      current.y += (target.y - current.y) * 0.085;
      const el = ref.current;
      if (el) {
        el.style.transform = `translate3d(${current.x - SIZE / 2}px, ${current.y - SIZE / 2}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 opacity-0 transition-opacity duration-1000 will-change-transform"
      style={{
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--accent) 7.5%, transparent), color-mix(in oklab, var(--ink) 3%, transparent) 38%, transparent 68%)",
      }}
    />
  );
}
