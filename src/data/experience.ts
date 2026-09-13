export type ExperienceItem = {
  /** e.g. "2024 — Present" */
  period: string;
  role: string;
  company: string;
  description: string;
  /** Highlighted chips, e.g. ["Campaign execution", "Lead follow-up"]. */
  highlights: string[];
  /** Marks the current role with an accent dot. */
  current?: boolean;
};

/* ------------------------------------------------------------------
   EDIT ME — listed newest first. Replace the bracketed placeholders
   with real companies and dates.
------------------------------------------------------------------- */
export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Marketing & Sales Officer",
    company: "[Company Name]",
    description:
      "Execute marketing campaigns and promotional activities, follow up with potential customers, and keep existing client relationships strong — while supporting sales targets and reporting on market trends.",
    highlights: ["Campaign execution", "Lead follow-up", "Client relationships"],
    current: true,
  },
  {
    period: "2022 — 2024",
    role: "Sales & Marketing Executive",
    company: "[Previous Company]",
    description:
      "Generated and followed up on sales leads, supported customer acquisition and promotional campaigns, and prepared proposals and presentations that contributed to monthly sales targets.",
    highlights: ["Lead generation", "Client communication", "Sales proposals"],
  },
];
