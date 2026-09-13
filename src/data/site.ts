import { Dribbble, Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Social = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavItem = {
  id: string;
  label: string;
};

/* ------------------------------------------------------------------
   EDIT ME — identity, copy and links all live in this file.
------------------------------------------------------------------- */
export const site = {
  /** Short name used in the navbar and footer. */
  name: "Juan",
  /** Single-letter monogram for the logo mark. */
  monogram: "J",
  /** Shown under the logo on desktop and used in the page title. */
  title: "Creative Developer",
  role: "Creative Developer",
  location: "Manila, Philippines",
  email: "hello@juan.dev",

  /** Availability pill in the hero. Set to null to hide it. */
  availability: "Available for freelance work",

  hero: {
    /** Split across two lines on desktop. */
    greeting: "Hi, I'm Juan.",
    /** The italic word in `statement` gets the serif treatment. */
    statement: "I build digital experiences designed to be remembered.",
    /** Rendered in the serif italic accent face. */
    statementAccent: "remembered",
    paragraph:
      "Creative developer focused on building modern, interactive and high-performance digital experiences — where considered design meets engineering that holds up in production.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Talk",
  },

  about: {
    heading: "A little about me.",
    intro: "I turn complex ideas into simple, beautiful and interactive digital experiences.",
    body: [
      "I'm a creative developer who enjoys turning complex ideas into simple, beautiful and interactive digital experiences. My work sits where design and engineering meet — close enough to the pixels to care about the details, deep enough in the code to make them real.",
      "Most of what I build is for the web: product interfaces, marketing sites and design systems. I care about rhythm, hierarchy and how a thing feels the first time you touch it — then about making sure it stays fast and accessible for everyone.",
      "When I'm not building, I'm usually taking long exposures of empty streets, or reading about type.",
    ],
    /** Paragraphs that appear after the intro line. */
    portrait: {
      src: "/images/portrait.svg",
      alt: "Portrait of Juan",
    },
    /** Small print under the portrait. Set to null to hide. */
    portraitCaption: "Manila, PH — 2026",
  },

  /** Editable counters. Keep them honest. */
  stats: [
    { value: 5, suffix: "+", label: "Years experience" },
    { value: 30, suffix: "+", label: "Projects shipped" },
    { value: 20, suffix: "+", label: "Happy clients" },
  ],

  contact: {
    heading: "Have a project in mind?",
    subheading: "Let's build something remarkable together.",
    /** Rendered in the serif italic accent face. */
    subheadingAccent: "remarkable",
    body: "Tell me what you're working on. I usually reply within one business day.",
    cta: "Start a Conversation",
  },

  footerNote: "Designed and built from scratch — no templates.",

  socials: [
    { label: "GitHub", href: "https://github.com/", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "X", href: "https://x.com/", icon: Twitter },
    { label: "Dribbble", href: "https://dribbble.com/", icon: Dribbble },
    { label: "Email", href: "mailto:hello@juan.dev", icon: Mail },
  ] satisfies Social[],
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/** Monospace strip under the hero. */
export const marqueeItems: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Design Systems",
  "Figma",
  "Accessibility",
  "Performance",
  "REST APIs",
  "Git",
];
