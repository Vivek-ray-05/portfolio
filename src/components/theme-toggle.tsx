"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggleTheme() {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="group grid size-10 place-items-center rounded-full border border-ink/15 bg-ivory/70 text-ink transition hover:border-green hover:text-green dark:border-ivory/15 dark:bg-ink/70 dark:text-ivory dark:hover:border-sage dark:hover:text-sage"
    >
      <span className="relative block size-4 rounded-full border border-current">
        <span className="absolute -right-1 -top-1 size-2 rounded-full bg-vermilion transition group-hover:scale-125" />
      </span>
    </button>
  );
}
