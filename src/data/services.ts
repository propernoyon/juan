import { BarChart3, Handshake, Megaphone, Target, TrendingUp, Users } from "lucide-react";
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
    id: "marketing-strategy",
    title: "Marketing Strategy",
    description:
      "Developing focused marketing initiatives aligned with customer needs, brand objectives and business growth.",
    icon: Target,
    deliverables: ["Positioning", "Campaign planning", "Budget priorities"],
  },
  {
    id: "sales-business-development",
    title: "Sales & Business Development",
    description:
      "Identifying new opportunities, nurturing prospects and building relationships that support sustainable sales growth.",
    icon: TrendingUp,
    deliverables: ["Prospecting", "Pipeline development", "Partnerships"],
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Finding and qualifying potential customers through targeted outreach and effective marketing activities.",
    icon: Users,
    deliverables: ["Prospect research", "Targeted outreach", "Qualification"],
  },
  {
    id: "customer-relationship-management",
    title: "Customer Relationship Management",
    description:
      "Keeping customers close with consistent communication, dependable follow-through and service that earns repeat business.",
    icon: Handshake,
    deliverables: ["Client communication", "Account care", "Retention"],
  },
  {
    id: "campaign-management",
    title: "Campaign Management",
    description:
      "Coordinating campaigns end to end — planning, messaging, execution and follow-up across every touchpoint.",
    icon: Megaphone,
    deliverables: ["Campaign execution", "Promotional activities", "Performance review"],
  },
  {
    id: "market-research",
    title: "Market Research",
    description:
      "Turning customer feedback and market trends into clear, practical insight for the next decision.",
    icon: BarChart3,
    deliverables: ["Competitor review", "Customer feedback", "Market insights"],
  },
];
