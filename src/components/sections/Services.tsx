import { motion } from "framer-motion";
import { services } from "../../data/services";
import { pad } from "../../lib/utils";
import { fadeUp, staggerParent, VIEWPORT_EARLY } from "../../lib/motion";
import { useSpotlight } from "../../lib/hooks";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Sheen } from "../ui/Sheen";

export function Services() {
  const spotlight = useSpotlight<HTMLDivElement>();

  return (
    <Section id="services">
      <SectionHeading
        eyebrow="06 — Services"
        title="How I can help."
        description="Four ways most engagements start. Happy to shape something around what you actually need."
      />

      <motion.div
        variants={staggerParent(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_EARLY}
        className="mt-16 grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            onPointerMove={spotlight}
            className="group relative overflow-hidden bg-void-soft p-7 transition-colors duration-500 ease-expo hover:bg-surface sm:p-9"
          >
            <Sheen size={380} />

            <div className="relative z-10 flex items-start justify-between gap-6">
              <span className="label text-[10px] text-accent/70 transition-colors duration-500 group-hover:text-accent">
                {pad(index + 1)}
              </span>
              <span className="grid size-11 place-items-center rounded-xl border border-line bg-ink/[0.03] text-ink-dim transition-all duration-500 ease-expo group-hover:-rotate-6 group-hover:border-accent/40 group-hover:text-accent">
                <service.icon className="size-[18px]" strokeWidth={1.6} />
              </span>
            </div>

            <h3 className="relative z-10 mt-8 text-[1.4rem] font-medium tracking-[-0.03em]">
              {service.title}
            </h3>
            <p className="relative z-10 mt-3.5 max-w-md text-[0.9rem] leading-relaxed text-ink-faint">
              {service.description}
            </p>

            <ul className="relative z-10 mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[11.5px] text-ink-faint">
                  <span className="size-1 rounded-full bg-accent/50" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
