import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { cn, pad } from "../../lib/utils";
import { useSpotlight } from "../../lib/hooks";
import { fadeUp } from "../../lib/motion";
import { Sheen } from "../ui/Sheen";
import { TiltCard } from "../ui/TiltCard";

/** How each card weight sits in the 12-column grid. */
const SPAN: Record<Project["size"], string> = {
  lg: "md:col-span-7",
  md: "md:col-span-5 md:mt-12",
  wide: "md:col-span-12 md:mt-2",
};

const ASPECT: Record<Project["size"], string> = {
  lg: "aspect-[4/3]",
  md: "aspect-[4/3]",
  wide: "aspect-[4/3] sm:aspect-[21/9]",
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const spotlight = useSpotlight<HTMLAnchorElement>();
  const number = pad(index + 1);

  return (
    <motion.article variants={fadeUp} className={cn("relative", SPAN[project.size])}>
      <TiltCard max={3.2} lift={5}>
        <a
          href={project.href}
          onPointerMove={spotlight}
          aria-label={`${project.name} — ${project.summary}`}
          className="group block"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-surface transition-colors duration-500 ease-expo group-hover:border-line-strong">
            <div className={cn("relative overflow-hidden", ASPECT[project.size])}>
              <img
                src={project.image}
                alt={`${project.name} — ${project.summary}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full scale-[1.01] object-cover transition-[transform,filter] duration-[1100ms] ease-expo group-hover:scale-[1.055] group-hover:brightness-[1.04]"
              />

              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-void via-void/35 to-transparent opacity-85 transition-opacity duration-700 ease-expo group-hover:opacity-95"
              />

              <Sheen size={420} />

              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="label rounded-full border border-ink/10 bg-void/35 px-3 py-1.5 text-[10px] text-ink/80 backdrop-blur-md">
                  {project.category}
                </span>
                <span className="label text-[10px] text-ink/45">{project.year}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-4 sm:p-5">
                <span className="flex translate-y-2 items-center gap-2.5 opacity-0 transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[13px] font-medium text-ink">View Case Study</span>
                  <span className="grid size-8 place-items-center overflow-hidden rounded-full bg-accent text-void">
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </span>
                <span className="label absolute right-4 bottom-4 text-[10px] text-ink/40 transition-opacity duration-500 group-hover:opacity-0 sm:right-5 sm:bottom-5">
                  {number}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
            <div className="flex items-baseline gap-3.5">
              <span className="label text-[10px] text-accent/70 transition-colors duration-400 group-hover:text-accent">
                {number}
              </span>
              <div>
                <h3 className="text-[1.3rem] font-medium tracking-[-0.03em]">{project.name}</h3>
                <p className="mt-1 text-[0.9rem] text-ink-dim">{project.summary}</p>
              </div>
            </div>

            <ul className="flex flex-wrap items-center gap-1.5">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] tracking-[-0.01em] text-ink-faint transition-colors duration-400 group-hover:border-line-strong"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-ink-faint">
            {project.description}
          </p>
        </a>
      </TiltCard>
    </motion.article>
  );
}
