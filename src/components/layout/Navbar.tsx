import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "../../lib/motion";
import { navItems, site } from "../../data/site";
import { cn, pad } from "../../lib/utils";
import { useActiveSection, useScrollLock, useScrolled } from "../../lib/hooks";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

const SECTION_IDS = navItems.map((item) => item.id);

export function Navbar() {
  const scrolled = useScrolled(20);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  useScrollLock(open);

  /* Scroll only after the overlay has unlocked the page. */
  useEffect(() => {
    if (open || !pendingTarget) return;
    const target = document.getElementById(pendingTarget);
    setPendingTarget(null);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [open, pendingTarget]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-expo",
            scrolled
              ? "border-line bg-void/70 backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-transparent",
          )}
        >
          <div
            className={cn(
              "shell flex items-center justify-between gap-6 transition-[height] duration-500 ease-expo",
              scrolled ? "h-16" : "h-20 sm:h-24",
            )}
          >
            <a href="#home" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
              <span className="relative grid size-9 place-items-center rounded-[10px] border border-line-strong bg-ink/[0.03] font-mono text-[13px] text-ink transition-colors duration-500 ease-expo group-hover:border-accent/50">
                {site.monogram}
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="text-[0.95rem] font-medium tracking-[-0.02em]">{site.name}</span>
                <span className="label mt-1.5 text-[10px]">{site.title}</span>
              </span>
            </a>

            <nav className="hidden items-center rounded-full border border-line bg-ink/[0.02] p-1 backdrop-blur-md md:flex">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className="relative isolate rounded-full px-4 py-2 text-[13px] transition-colors duration-300"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full border border-line-strong bg-ink/[0.055]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    <span className={cn(isActive ? "text-ink" : "text-ink-dim hover:text-ink")}>
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                href="#contact"
                size="sm"
                magnetic
                icon={ArrowUpRight}
                className="hidden sm:inline-flex"
              >
                Let's Talk
              </Button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-line-strong md:hidden"
              >
                <Menu className="size-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="absolute inset-0 bg-void/95 backdrop-blur-2xl" />

            <div className="relative flex h-full flex-col">
              <div className="shell flex h-20 shrink-0 items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-[10px] border border-line-strong bg-ink/[0.03] font-mono text-[13px]">
                    {site.monogram}
                  </span>
                  <span className="text-[0.95rem] font-medium tracking-[-0.02em]">{site.name}</span>
                </span>
                <span className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="grid size-10 place-items-center rounded-full border border-line text-ink"
                  >
                    <X className="size-4" strokeWidth={1.75} />
                  </button>
                </span>
              </div>

              <nav className="shell flex flex-1 flex-col justify-center gap-0 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setPendingTarget(item.id);
                    }}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.05 + index * 0.055 }}
                    className="group flex items-baseline gap-4 border-b border-line py-5 text-left"
                  >
                    <span className="label text-accent/70">{pad(index + 1)}</span>
                    <span className="text-[2rem] font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-ink-dim">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="shell flex shrink-0 flex-wrap items-center justify-between gap-4 pb-10"
              >
                <a href={`mailto:${site.email}`} className="link-line text-sm text-ink-dim">
                  {site.email}
                </a>
                <ul className="flex items-center gap-1">
                  {site.socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={social.label}
                        className="grid size-10 place-items-center rounded-full border border-line text-ink-dim transition-colors duration-300 hover:border-line-strong hover:text-ink"
                      >
                        <social.icon className="size-4" strokeWidth={1.75} />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
