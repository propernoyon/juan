import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
import { EASE, VIEWPORT } from "../../lib/motion";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Parallax } from "../ui/Parallax";
import { WordRise } from "../ui/WordRise";

export function Contact() {
  const { contact } = site;

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[min(900px,120%)] -translate-x-1/2 rounded-full blur-[120px] max-sm:animate-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 13%, transparent), transparent 65%)",
        }}
      />

      <div className="relative flex flex-col items-center text-center">
        {site.availability ? (
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink/[0.03] py-1.5 pr-4 pl-3 backdrop-blur-md">
            <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
            <span className="label text-[10px] tracking-[0.14em] text-ink-dim">
              {site.availability}
            </span>
          </span>
        ) : null}

        <h2 className="mt-8 max-w-4xl text-[clamp(2.3rem,7vw,5rem)]">
          <Parallax amount={22} className="block">
            <WordRise text={contact.heading} blur />
          </Parallax>
        </h2>

        <p className="mt-6 max-w-2xl text-[clamp(1.15rem,3vw,1.9rem)] leading-[1.35] tracking-[-0.025em] text-ink-dim">
          <WordRise
            text={contact.subheading}
            accentWord={contact.subheadingAccent}
            accentClassName="serif-accent text-ink"
            delay={0.1}
          />
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ink-faint"
        >
          {contact.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE, delay: 0.35 }}
          className="mt-10"
        >
          <Button href={`mailto:${site.email}`} size="lg" magnetic icon={ArrowUpRight}>
            {contact.cta}
          </Button>
        </motion.div>

        <a href={`mailto:${site.email}`} className="group mt-16 flex flex-col items-center gap-2.5">
          <span className="label text-[10px]">Or email me directly</span>
          <span className="text-[clamp(1.05rem,3.4vw,1.85rem)] tracking-[-0.03em] text-ink">
            {site.email}
          </span>
          <span className="h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-expo group-hover:scale-x-100" />
        </a>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-1.5">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={social.label}
                className="flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-[12.5px] text-ink-dim transition-all duration-400 ease-expo hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
              >
                <social.icon className="size-3.5" strokeWidth={1.75} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
