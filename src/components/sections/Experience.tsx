import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "../../data/experience";
import { cn } from "../../lib/utils";
import { fadeUp, staggerParent, VIEWPORT_EARLY } from "../../lib/motion";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <Section id="experience">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="05 — Experience" title="Where I've worked." />
          <p className="mt-6 max-w-xs text-[0.9rem] leading-relaxed text-ink-faint">
            A short history of the teams and problems that shaped how I build.
          </p>
        </div>

        <motion.ol
          ref={listRef}
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
          className="relative lg:col-span-8"
        >
          <span aria-hidden className="absolute top-2 bottom-2 left-[6px] w-px bg-line" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[6px] w-px origin-top bg-gradient-to-b from-accent/80 via-accent/40 to-accent/5"
          />

          {experience.map((item) => (
            <motion.li
              key={`${item.period}-${item.role}`}
              variants={fadeUp}
              className="group relative pb-12 pl-9 last:pb-0"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute top-1.5 left-0 grid size-[13px] place-items-center rounded-full border transition-colors duration-500",
                  item.current
                    ? "border-accent/45 bg-accent/15"
                    : "border-line-strong bg-void group-hover:border-ink-faint",
                )}
              >
                {item.current ? (
                  <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
                ) : null}
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="label text-[10px]">{item.period}</span>
                {item.current ? <span className="label text-[10px] text-accent">Current</span> : null}
              </div>

              <h3 className="mt-3.5 text-[1.35rem] font-medium tracking-[-0.03em]">{item.role}</h3>
              <p className="mt-1 text-[0.95rem] text-ink-dim">{item.company}</p>
              <p className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-ink-faint">
                {item.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-faint"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}
