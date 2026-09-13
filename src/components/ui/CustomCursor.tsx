import { useEffect, useRef, useState } from "react";
import { useHasFinePointer, usePrefersReducedMotion } from "../../lib/hooks";

const DOT_SIZE = 5;
const RING_SIZE = 30;

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor]";

/**
 * A restrained, professional pointer: a small neutral dot with a thin ring
 * that tracks the pointer 1:1 — the same latency as the native cursor, no
 * trailing. Interactive elements shrink the dot and ease the ring open a
 * touch. Only the scale/colour of the ring is animated; position is exact.
 *
 * Position is written straight to the DOM from one rAF loop (no React
 * re-renders per frame); hover state is a single boolean driving CSS
 * transitions. Desktop pointers only, never under prefers-reduced-motion,
 * and the native cursor is hidden only while this is active.
 */
export function CustomCursor() {
  const fine = useHasFinePointer();
  const reduced = usePrefersReducedMotion();
  const enabled = fine && !reduced;

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("cursor-none");

    let x = -100;
    let y = -100;
    let visible = false;
    let frame = 0;

    const setVisible = (next: boolean) => {
      visible = next;
      for (const layer of [dotRef, ringRef]) {
        if (layer.current) layer.current.style.opacity = next ? "1" : "0";
      }
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) setVisible(true);
    };

    const onOver = (event: PointerEvent) => {
      const el = event.target instanceof Element ? event.target : null;
      setActive(Boolean(el?.closest(INTERACTIVE_SELECTOR)));
    };

    const onLeaveWindow = () => setVisible(false);

    const tick = () => {
      const transform = `translate3d(${x}px, ${y}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = transform;
      if (ringRef.current) ringRef.current.style.transform = transform;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    frame = requestAnimationFrame(tick);

    return () => {
      root.classList.remove("cursor-none");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringScale = active ? 1.34 : 1;
  const dotScale = active ? 0.55 : 1;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div ref={dotRef} className="absolute top-0 left-0 opacity-0 will-change-transform">
        <div
          className="rounded-full"
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            marginLeft: -DOT_SIZE / 2,
            marginTop: -DOT_SIZE / 2,
            backgroundColor: "color-mix(in oklab, var(--ink) 78%, transparent)",
            transform: `scale(${dotScale})`,
            transition: "transform 260ms cubic-bezier(0.16, 1, 0.3, 1), opacity 260ms ease-out",
          }}
        />
      </div>

      <div ref={ringRef} className="absolute top-0 left-0 opacity-0 will-change-transform">
        <div
          className="rounded-full border"
          style={{
            width: RING_SIZE,
            height: RING_SIZE,
            marginLeft: -RING_SIZE / 2,
            marginTop: -RING_SIZE / 2,
            borderColor: active
              ? "color-mix(in oklab, var(--ink) 50%, transparent)"
              : "color-mix(in oklab, var(--ink) 26%, transparent)",
            transform: `scale(${ringScale})`,
            transition:
              "transform 340ms cubic-bezier(0.16, 1, 0.3, 1), border-color 260ms ease-out",
          }}
        />
      </div>
    </div>
  );
}
