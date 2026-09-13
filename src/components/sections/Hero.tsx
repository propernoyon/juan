import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
import { EASE } from "../../lib/motion";
import { Button } from "../ui/Button";
import { WordRise } from "../ui/WordRise";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { scrollY } = useScroll();
  const yVisual = useTransform(scrollY, [0, 900], [0, -110]);
  const yContent = useTransform(scrollY, [0, 900], [0, -34]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24 sm:pt-32 lg:pt-36 lg:pb-32"
    >
      <div className="shell grid w-full items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <motion.div style={{ y: yContent }} className="lg:col-span-7">
          {site.availability ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink/[0.03] py-1.5 pr-4 pl-3 backdrop-blur-md">
                <span className="relative grid size-1.5 place-items-center">
                  <span className="animate-pulse-dot absolute inset-0 rounded-full bg-accent" />
                </span>
                <span className="label text-[10px] tracking-[0.14em] text-ink-dim">
                  {site.availability}
                </span>
              </span>
            </motion.div>
          ) : null}

          <h1 className="text-display mt-7 text-[clamp(2.65rem,8.6vw,6.25rem)]">
            <WordRise
              text={site.hero.greeting}
              accentWord={site.name}
              immediate
              delay={0.14}
              stagger={0.07}
              accentClassName="serif-accent text-accent"
            />
          </h1>

          <p className="mt-8 max-w-2xl text-[clamp(1.15rem,2.5vw,1.6rem)] leading-[1.34] tracking-[-0.025em] text-ink-dim">
            <WordRise
              text={site.hero.statement}
              accentWord={site.hero.statementAccent}
              accentClassName="serif-accent text-ink"
              immediate
              delay={0.46}
              stagger={0.035}
            />
          </p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-ink-faint"
          >
            {site.hero.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="#work" size="lg" magnetic icon={ArrowDown}>
              {site.hero.primaryCta}
            </Button>
            <Button href="#contact" variant="outline" size="lg" magnetic icon={ArrowUpRight}>
              {site.hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yVisual }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.25 }}
          className="hidden md:block lg:col-span-5"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="label text-[9px]">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-line-strong">
          <span className="animate-scroll-dot absolute inset-x-0 top-0 h-1/2 bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}
