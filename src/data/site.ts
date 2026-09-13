import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

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
  title: "Marketing & Sales Officer",
  role: "Marketing & Sales Officer",
  location: "Lisbon, Portugal",
  email: "hello@example.com",

  /** Availability pill in the hero. Set to null to hide it. */
  availability: "Open to New Opportunities",

  hero: {
    /** Split across two lines on desktop. */
    greeting: "Hi, I'm Juan.",
    /** The italic word in `statement` gets the serif treatment. */
    statement: "Turning marketing strategies into measurable growth.",
    /** Rendered in the serif italic accent face. */
    statementAccent: "growth",
    paragraph:
      "Marketing & Sales professional focused on building strong customer relationships, creating effective marketing strategies, generating opportunities, and driving sustainable business growth.",
    primaryCta: "View My Experience",
    secondaryCta: "Let's Connect",
  },

  about: {
    heading: "A results-driven marketing and sales professional.",
    intro: "I turn customer conversations into measurable business growth.",
    body: [
      "I'm a results-oriented Marketing & Sales professional with experience in developing marketing initiatives, engaging customers, supporting sales growth and building lasting business relationships. I enjoy understanding what customers actually need, identifying opportunities, and turning conversations into meaningful business results.",
      "My day-to-day sits between the market and the customer — planning campaigns, generating and qualifying leads, preparing proposals, and keeping existing clients close. I work closely with internal teams so that marketing activity and sales targets move in the same direction.",
      "What I care about most is consistency: clear communication, honest follow-through, and relationships that keep customers coming back.",
    ],
    /** Paragraphs that appear after the intro line. */
    portrait: {
      src: "/images/portrait.svg",
      alt: "Portrait of Juan",
    },
    /** Small print under the portrait. Set to null to hide. */
    portraitCaption: "Lisbon, PT",
  },

  /** Editable counters. These are placeholders — replace with real numbers. */
  stats: [
    { value: 5, suffix: "+", label: "Years in marketing & sales" },
    { value: 100, suffix: "+", label: "Client relationships" },
    { value: 25, suffix: "+", label: "Campaigns supported" },
  ],

  contact: {
    heading: "Let's create opportunities together.",
    subheading:
      "Interested in a marketing initiative, a sales opportunity, or a potential collaboration?",
    /** Rendered in the serif italic accent face. */
    subheadingAccent: "opportunity",
    body: "Tell me what you have in mind — I usually reply within one business day.",
    cta: "Let's Connect",
  },

  footerNote:
    "Marketing and sales professional focused on growth, relationships and results.",

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
    { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  ] satisfies Social[],
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Campaigns" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/** Monospace strip under the hero. */
export const marqueeItems: string[] = [
  "Marketing Strategy",
  "Sales Growth",
  "Lead Generation",
  "Customer Relationships",
  "Market Research",
  "Campaign Management",
  "Brand Promotion",
  "Negotiation",
  "Business Development",
  "Reporting & Analytics",
];
