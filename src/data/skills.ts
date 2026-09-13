import { Palette, Terminal, Wand2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillGroup = {
  id: string;
  title: string;
  /** Short line under the category title. */
  blurb: string;
  icon: LucideIcon;
  skills: string[];
};

/* ------------------------------------------------------------------
   EDIT ME — group and rename however you like.
------------------------------------------------------------------- */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "The foundation — interfaces that stay fast as they grow.",
    icon: Terminal,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "design",
    title: "Design",
    blurb: "Systems thinking, from first sketch to shipped spec.",
    icon: Palette,
    skills: ["UI/UX", "Figma", "Design Systems", "Prototyping"],
  },
  {
    id: "other",
    title: "Other",
    blurb: "The unglamorous work that makes everything else hold up.",
    icon: Wand2,
    skills: ["Git", "REST APIs", "Performance Optimization"],
  },
];
