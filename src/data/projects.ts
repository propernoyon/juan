export type Project = {
  id: string;
  /** Display name, e.g. "Nova". */
  name: string;
  /** One-line positioning, e.g. "AI SaaS Platform". */
  summary: string;
  /** Short paragraph shown on the card. */
  description: string;
  /** Small uppercase chip, e.g. "Product Design". */
  category: string;
  year: string;
  /** Tech stack chips. */
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
   EDIT ME — swap in your own case studies. Add or remove freely;
   the grid adapts to however many entries exist.
------------------------------------------------------------------- */
export const projects: Project[] = [
  {
    id: "nova",
    name: "Nova",
    summary: "AI SaaS Platform",
    description:
      "End-to-end product design and frontend for an AI workspace — real-time streaming output, keyboard-first flows and a component library that scales across six surfaces.",
    category: "Product Design & Build",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/images/projects/nova.svg",
    href: "#",
    size: "lg",
  },
  {
    id: "flux",
    name: "Flux",
    summary: "Creative Agency Website",
    description:
      "An editorial, motion-led site for a design studio. Long-scroll storytelling with scroll-linked transitions that stay smooth on low-end devices.",
    category: "Art Direction",
    year: "2025",
    tech: ["React", "Tailwind CSS", "Sanity"],
    image: "/images/projects/flux.svg",
    href: "#",
    size: "md",
  },
  {
    id: "orbit",
    name: "Orbit",
    summary: "Developer Dashboard",
    description:
      "Observability tooling for engineering teams. Dense data made calm through strong hierarchy, restrained colour and 60fps charting.",
    category: "Product Frontend",
    year: "2024",
    tech: ["React", "TypeScript", "Zustand"],
    image: "/images/projects/orbit.svg",
    href: "#",
    size: "md",
  },
  {
    id: "lumina",
    name: "Lumina",
    summary: "E-commerce Experience",
    description:
      "A premium storefront built around product photography — headless commerce, instant filtering and a checkout that gets out of the way.",
    category: "Design & Build",
    year: "2024",
    tech: ["Next.js", "Shopify", "Tailwind CSS"],
    image: "/images/projects/lumina.svg",
    href: "#",
    size: "lg",
  },
  {
    id: "halo",
    name: "Halo",
    summary: "Design System & Docs",
    description:
      "A token-driven system of 80+ accessible components, documented for both designers and engineers with live, editable examples.",
    category: "Systems",
    year: "2023",
    tech: ["TypeScript", "Radix", "Storybook"],
    image: "/images/projects/halo.svg",
    href: "#",
    size: "wide",
  },
];
