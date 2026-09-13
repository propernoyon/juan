import { ArrowUp } from "lucide-react";
import { navItems, site } from "../../data/site";
import { scrollToTop } from "../../lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-void/40">
      <div className="shell flex flex-col gap-12 py-14 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-xs">
            <span className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-[10px] border border-line-strong bg-ink/[0.03] font-mono text-[13px]">
                {site.monogram}
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.95rem] font-medium tracking-[-0.02em]">{site.name}</span>
                <span className="label mt-1.5 text-[10px]">{site.title}</span>
              </span>
            </span>
            <p className="mt-5 text-[0.85rem] leading-relaxed text-ink-faint">{site.footerNote}</p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10 sm:gap-x-24">
            <nav aria-label="Sections">
              <h2 className="label text-[10px] text-ink-dim">Sections</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="link-line text-[0.85rem] text-ink-faint transition-colors duration-300 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="label text-[10px] text-ink-dim">Elsewhere</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      className="link-line text-[0.85rem] text-ink-faint transition-colors duration-300 hover:text-ink"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="label text-[10px] text-ink-dim">Contact</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-line text-[0.85rem] text-ink-faint transition-colors duration-300 hover:text-ink"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-[0.85rem] text-ink-faint">{site.location}</li>
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex shrink-0 items-center gap-3 self-start"
          >
            <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-line-strong transition-colors duration-500 ease-expo group-hover:border-accent/50">
              <ArrowUp className="size-4 text-ink transition-transform duration-500 ease-expo group-hover:-translate-y-7" strokeWidth={1.75} />
              <ArrowUp
                className="absolute size-4 translate-y-7 text-accent transition-transform duration-500 ease-expo group-hover:translate-y-0"
                strokeWidth={1.75}
              />
            </span>
            <span className="label text-[10px] transition-colors duration-300 group-hover:text-ink">
              Back to top
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[10px]">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="label text-[10px]">React · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
