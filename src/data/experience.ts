export type ExperienceItem = {
  /** e.g. "2024 — Present" */
  period: string;
  role: string;
  company: string;
  description: string;
  /** Highlighted chips, e.g. ["Design systems", "Motion"]. */
  highlights: string[];
  /** Marks the current role with an accent dot. */
  current?: boolean;
};

/* ------------------------------------------------------------------
   EDIT ME — listed newest first.
------------------------------------------------------------------- */
export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Developer",
    company: "Northbound Studio",
    description:
      "Lead the frontend on product and marketing work for fintech and AI clients. Introduced a shared design system that cut new-page build time roughly in half.",
    highlights: ["Design systems", "Next.js", "Team mentoring"],
    current: true,
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Fieldwork Digital",
    description:
      "Built interactive campaign sites and dashboards for global brands. Owned motion and performance, holding a 90+ Lighthouse score on every launch.",
    highlights: ["React", "Motion", "Performance"],
  },
  {
    period: "2021 — 2022",
    role: "UI Developer",
    company: "Kite & Co.",
    description:
      "Translated design systems into production components, and worked directly with designers to close the gap between the file and the build.",
    highlights: ["Accessibility", "Component libraries"],
  },
  {
    period: "2020 — 2021",
    role: "Freelance Developer",
    company: "Independent",
    description:
      "Partnered with small studios and founders on sites and storefronts — scoping, building and shipping end to end.",
    highlights: ["Webflow", "React", "Client work"],
  },
];
