import { cn } from "../../lib/utils";

/**
 * Cursor-following highlight. Sits inside a `group` and reads the
 * `--mx` / `--my` custom properties written by the pointer handler.
 */
export function Sheen({ className, size = 320 }: { className?: string; size?: number }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-expo group-hover:opacity-100",
        className,
      )}
      style={{
        background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--ink) 7%, transparent), transparent 62%)`,
      }}
    />
  );
}
