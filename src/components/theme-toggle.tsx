"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore, type MouseEvent } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const transitioning = useRef(false);

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    if (transitioning.current) return;

    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(nextTheme);
      return;
    }

    const button = event.currentTarget.getBoundingClientRect();
    const x = button.left + button.width / 2;
    const y = button.top + button.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;

    root.style.setProperty("--theme-origin-x", `${x}px`);
    root.style.setProperty("--theme-origin-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);
    root.classList.add("theme-transitioning");
    transitioning.current = true;

    const transition = document.startViewTransition(() => new Promise<void>((resolve) => {
      const finish = () => {
        observer.disconnect();
        clearTimeout(timeout);
        resolve();
      };
      const observer = new MutationObserver(() => {
        if (root.classList.contains(nextTheme)) finish();
      });
      const timeout = window.setTimeout(finish, 700);
      observer.observe(root, { attributes: true, attributeFilter: ["class"] });
      setTheme(nextTheme);
      if (root.classList.contains(nextTheme)) finish();
    }));

    const cleanup = () => {
      root.classList.remove("theme-transitioning");
      root.style.removeProperty("--theme-origin-x");
      root.style.removeProperty("--theme-origin-y");
      root.style.removeProperty("--theme-reveal-radius");
      transitioning.current = false;
    };
    void transition.finished.then(cleanup, cleanup);
  }

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={mounted && resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
    >
      {mounted && resolvedTheme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
