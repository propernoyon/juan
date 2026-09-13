import { useEffect, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../../lib/hooks";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

/** Numbers count up once, when they scroll into view. */
export function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
