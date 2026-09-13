import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/theme";
import { cn } from "../../lib/utils";

/**
 * Swaps between the light and dark palettes. The icon cross-fades so the
 * control reads as one element turning over rather than two buttons.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "relative grid size-10 place-items-center overflow-hidden rounded-full border border-line text-ink-dim transition-colors duration-300 hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      <Sun
        aria-hidden
        strokeWidth={1.75}
        className={cn(
          "absolute size-4 transition-all duration-500 ease-expo",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        aria-hidden
        strokeWidth={1.75}
        className={cn(
          "absolute size-4 transition-all duration-500 ease-expo",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
}
