export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Smoothly scroll to a section id, honouring scroll-margin-top. */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Format an index as 01, 02, ... */
export function pad(n: number): string {
  return String(n).padStart(2, "0");
}
