import { Code2, Gauge, MousePointerClick, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Small list of deliverables shown under the description. */
  deliverables: string[];
};

/* ------------------------------------------------------------------
   EDIT ME — three or four cards both work well.
------------------------------------------------------------------- */
export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Production frontends built to last — typed, tested and fast on the devices your visitors actually use.",
    icon: Code2,
    deliverables: ["React & Next.js", "Headless CMS", "Core Web Vitals"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces with a clear point of view — strong hierarchy, honest copy and no decoration for decoration's sake.",
    icon: PenTool,
    deliverables: ["Figma files", "Design systems", "Prototypes"],
  },
  {
    id: "interactive",
    title: "Interactive Experiences",
    description:
      "Motion and interaction that serve the story. Smooth, purposeful, and never in the way of the content.",
    icon: MousePointerClick,
    deliverables: ["Micro-interactions", "Scroll storytelling", "WebGL-lite"],
  },
  {
    id: "performance",
    title: "Performance & Optimization",
    description:
      "Audits and rebuilds that turn a slow site into one that feels instant — measured, not guessed.",
    icon: Gauge,
    deliverables: ["Lighthouse audits", "Bundle diet", "Accessibility pass"],
  },
];
