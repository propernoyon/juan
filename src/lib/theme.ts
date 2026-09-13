import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const SYSTEM_QUERY = "(prefers-color-scheme: dark)";
const THEME_COLOR: Record<Theme, string> = { dark: "#08090a", light: "#f5f5f2" };

const listeners = new Set<() => void>();

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

/** The visitor's explicit choice, or null when they are following the OS. */
function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

function readInitialTheme(): Theme {
  const fromDom = document.documentElement.dataset.theme;
  /* index.html sets data-theme before paint, so trust it first. */
  return isTheme(fromDom) ? fromDom : (readStoredTheme() ?? readSystemTheme());
}

function readSystemTheme(): Theme {
  return window.matchMedia(SYSTEM_QUERY).matches ? "dark" : "light";
}

let theme: Theme = readInitialTheme();

function emit(): void {
  listeners.forEach((listener) => listener());
}

/** Writes the theme to the DOM and notifies every subscriber. */
function commit(next: Theme): void {
  theme = next;
  const root = document.documentElement;
  root.dataset.theme = next;
  root.style.colorScheme = next;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[next]);
  emit();
}

commit(theme);

/* Follow the OS, but only while the visitor has not chosen explicitly. */
window.matchMedia(SYSTEM_QUERY).addEventListener("change", (event) => {
  if (readStoredTheme()) return;
  commit(event.matches ? "dark" : "light");
});

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Theme {
  return theme;
}

/** Reads and sets the page theme; shared across every caller. */
export function useTheme() {
  const value = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Private mode — the theme still applies for this session. */
    }
    commit(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, [setTheme]);

  return { theme: value, setTheme, toggleTheme };
}
