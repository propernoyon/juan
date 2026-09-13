import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { site } from "../../data/site";
import { EASE, VIEWPORT } from "../../lib/motion";
import { Section } from "../layout/Section";
import { Counter } from "../ui/Counter";
import { Parallax } from "../ui/Parallax";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/*
 * The portrait's reveal is observed on an untransformed wrapper and applied
 * to the inner figure by variant, for the same reason WordRise is built the
 * way it is: a clip-path on the observed element can zero out its own
 * intersection rect.
 */
const figureVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.2, ease: EASE } },
};

const imageVariants: Variants = {
  hidden: { scale: 1.16 },
  show: { scale: 1, transition: { duration: 1.7, ease: EASE } },
};

export function About() {
  const { about, stats } = site;

  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Parallax amount={34}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="overflow-hidden rounded-[20px] border border-line bg-surface"
            >
              <motion.figure variants={figureVariants} className="relative overflow-hidden">
                <motion.img
                  variants={imageVariants}
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 55%, var(--figure-fade) 100%)",
                  }}
                />
                {about.portraitCaption ? (
                  <figcaption className="label absolute bottom-4 left-5 text-[10px] text-ink/70">
                    {about.portraitCaption}
                  </figcaption>
                ) : null}
              </motion.figure>
            </motion.div>
          </Parallax>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <SectionHeading eyebrow="03 — About" title={about.heading} />

          <Reveal delay={0.05}>
            <p className="mt-8 max-w-xl text-[clamp(1.1rem,2.2vw,1.4rem)] leading-[1.42] tracking-[-0.02em] text-ink">
              {about.intro}
            </p>
          </Reveal>

          <div className="mt-7 space-y-5">
            {about.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.08 + index * 0.06} plain>
                <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-faint">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-8 sm:gap-8">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} plain>
                <div className="flex flex-col-reverse gap-2.5">
                  <dt className="label text-[10px] leading-relaxed">{stat.label}</dt>
                  <dd className="text-[clamp(1.6rem,3.6vw,2.35rem)] font-medium tracking-[-0.045em] text-ink">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
