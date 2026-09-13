import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { staggerParent, VIEWPORT_EARLY } from "../../lib/motion";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="02 — Campaigns"
        title="Selected campaigns"
        description="A few marketing and sales initiatives I've supported — from first outreach through follow-up, each measured against a goal."
      />

      <motion.div
        variants={staggerParent(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_EARLY}
        className="mt-16 grid grid-cols-1 items-start gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
