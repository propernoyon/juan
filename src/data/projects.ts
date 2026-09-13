export type Project = {
  id: string;
  /** Display name, e.g. "Product Launch Campaign". */
  name: string;
  /** One-line positioning, e.g. "Campaign Strategy & Customer Outreach". */
  summary: string;
  /**
   * Short paragraph shown on the card. Written as
   * Objective / Approach / Outcome — replace the bracketed placeholders.
   */
  description: string;
  /** Small uppercase chip, e.g. "Lead Generation". */
  category: string;
  year: string;
  /** Focus-area chips shown on the card. */
  tech: string[];
  /**
   * Replace the file in /public/images/projects/ with the same name,
   * or point this at any URL or imported asset.
   */
  image: string;
  href: string;
  /** Layout weight inside the grid. */
  size: "lg" | "md" | "wide";
};

/* ------------------------------------------------------------------
   EDIT ME — swap in your own campaigns. Add or remove freely; the grid
   adapts to however many entries exist. Bracketed text is a placeholder.
------------------------------------------------------------------- */
export const projects: Project[] = [
  {
    id: "product-launch",
    name: "Product Launch Campaign",
    summary: "Campaign Strategy & Customer Outreach",
    description:
      "Objective: build awareness and early demand for [Product/Service]. Planned the messaging and promotional activity, then followed up with qualified prospects. Outcome: [Add measurable result here].",
    category: "Product Launch",
    year: "2024",
    tech: ["Market Research", "Brand Promotion", "Outreach"],
    image: "/images/projects/nova.svg",
    href: "#",
    size: "lg",
  },
  {
    id: "lead-generation",
    name: "Lead Generation Initiative",
    summary: "Prospect Acquisition & Sales Support",
    description:
      "Objective: grow a qualified pipeline for [Product/Service]. Researched target accounts, ran targeted outreach and passed qualified leads into the sales process. Outcome: [Add measurable result here].",
    category: "Lead Generation",
    year: "2024",
    tech: ["Prospecting", "Qualification", "Sales Support"],
    image: "/images/projects/flux.svg",
    href: "#",
    size: "md",
  },
  {
    id: "brand-awareness",
    name: "Brand Awareness Campaign",
    summary: "Marketing & Customer Engagement",
    description:
      "Objective: increase visibility for [Brand] with a defined audience. Coordinated campaign messaging across channels and engaged customers through consistent communication. Outcome: [Add measurable result here].",
    category: "Brand Awareness",
    year: "2023",
    tech: ["Content", "Social Channels", "Engagement"],
    image: "/images/projects/orbit.svg",
    href: "#",
    size: "md",
  },
  {
    id: "customer-retention",
    name: "Customer Retention Initiative",
    summary: "Relationship Management & Retention",
    description:
      "Objective: strengthen relationships with existing customers and reduce churn. Built a regular follow-up rhythm, gathered feedback and resolved concerns early. Outcome: [Add measurable result here].",
    category: "Retention",
    year: "2023",
    tech: ["CRM", "Follow-up", "Feedback"],
    image: "/images/projects/lumina.svg",
    href: "#",
    size: "lg",
  },
  {
    id: "sales-growth",
    name: "Sales Growth Campaign",
    summary: "Sales Strategy & Business Development",
    description:
      "Objective: support revenue growth for [Product/Service]. Combined outbound prospecting with account development and coordinated with internal teams on pricing and proposals. Outcome: [Add measurable result here].",
    category: "Business Development",
    year: "2022",
    tech: ["Business Development", "Negotiation", "Sales Planning"],
    image: "/images/projects/halo.svg",
    href: "#",
    size: "wide",
  },
];
