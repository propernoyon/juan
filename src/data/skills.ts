import { Megaphone, TrendingUp, Users } from "lucide-react";
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
    id: "marketing",
    title: "Marketing",
    blurb: "Planning and running initiatives that reach the right customers.",
    icon: Megaphone,
    skills: [
      "Marketing Strategy",
      "Brand Promotion",
      "Digital Marketing",
      "Campaign Management",
      "Market Research",
    ],
  },
  {
    id: "sales",
    title: "Sales",
    blurb: "Building pipeline and turning interest into closed business.",
    icon: TrendingUp,
    skills: [
      "Sales & Business Development",
      "Lead Generation",
      "Sales Planning",
      "Negotiation",
      "Proposals & Presentations",
    ],
  },
  {
    id: "clients",
    title: "Client & Communication",
    blurb: "The relationship work that keeps customers and teams aligned.",
    icon: Users,
    skills: [
      "Customer Relationship Management",
      "Client Management",
      "Customer Retention",
      "Communication",
      "Reporting & Analytics",
    ],
  },
];
