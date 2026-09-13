import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import { staggerParent, VIEWPORT_EARLY } from "../../lib/motion";
import { pad } from "../../lib/utils";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Sheen } from "../ui/Sheen";
import { useSpotlight } from "../../lib/hooks";

export function Skills() {
  const spotlight = useSpotlight<HTMLDivElement>();

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="04 — Expertise"
        title="What I work with."
        description="The tools I reach for most — chosen for how they hold up once real users arrive."
      />

      <motion.div
        variants={staggerParent(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_EARLY}
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            onPointerMove={spotlight}
            className="group relative overflow-hidden rounded-[20px] border border-line bg-ink/[0.015] p-6 transition-colors duration-500 ease-expo hover:border-line-strong sm:p-7"
          >
            <Sheen size={340} />

            <div className="relative z-10 flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-xl border border-line bg-ink/[0.03] text-accent transition-transform duration-500 ease-expo group-hover:scale-105">
                <group.icon className="size-4" strokeWidth={1.75} />
              </span>
              <span className="label text-[10px]">{pad(index + 1)}</span>
            </div>

            <h3 className="relative z-10 mt-7 text-[1.35rem] font-medium tracking-[-0.03em]">
              {group.title}
            </h3>
            <p className="relative z-10 mt-2.5 text-[0.875rem] leading-relaxed text-ink-faint">
              {group.blurb}
            </p>

            <ul className="relative z-10 mt-7 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="group/tag inline-flex cursor-default items-center gap-2 rounded-full border border-line bg-void-soft px-3 py-1.5 text-[12.5px] tracking-[-0.01em] text-ink-dim transition-all duration-400 ease-expo hover:-translate-y-0.5 hover:border-accent/45 hover:text-ink">
                    <span className="size-1 shrink-0 rounded-full bg-line-strong transition-colors duration-400 group-hover/tag:bg-accent" />
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
