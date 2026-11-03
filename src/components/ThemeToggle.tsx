import { useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

type TransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionLock = useRef(false);
  const isDark = resolvedTheme === "dark";

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    if (transitionLock.current) return;

    const root = document.documentElement;
    const bounds = event.currentTarget.getBoundingClientRect();
    const hasPointerPosition = event.detail > 0;
    const originX = hasPointerPosition
      ? event.clientX
      : bounds.left + bounds.width / 2;
    const originY = hasPointerPosition
      ? event.clientY
      : bounds.top + bounds.height / 2;
    const nextTheme = isDark ? "light" : "dark";
    const viewTransitionDocument = document as TransitionDocument;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.style.setProperty("--theme-toggle-x", `${originX}px`);
    root.style.setProperty("--theme-toggle-y", `${originY}px`);

    const updateTheme = () => {
      flushSync(() => setTheme(nextTheme));
    };

    // Fall back to an immediate theme update when transitions are unsupported or disabled.
    if (!viewTransitionDocument.startViewTransition || prefersReducedMotion) {
      updateTheme();
      return;
    }

    transitionLock.current = true;
    setIsTransitioning(true);

    try {
      const transition =
        viewTransitionDocument.startViewTransition(updateTheme);
      const releaseTransitionLock = () => {
        transitionLock.current = false;
        setIsTransitioning(false);
      };
      void transition.finished.then(
        releaseTransitionLock,
        releaseTransitionLock,
      );
    } catch {
      updateTheme();
      transitionLock.current = false;
      setIsTransitioning(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 dark:bg-background-800 p-2 text-slate-300 transition-colors hover:dark:bg-background-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 disabled:cursor-wait"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
