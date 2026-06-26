"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { cn } from "@lib/utils";


interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/80 bg-white/80 text-amber-500 shadow-sm backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-amber-300 dark:hover:bg-zinc-900",
            className
          )}
          onClick={() => setTheme('light')}
          aria-label="Switch to light mode"
        >
          <FaSun className="text-sm" />
        </button>
      )
    }

    return (
      <button
        type="button"
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/80 bg-white/80 text-zinc-800 shadow-sm backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-900",
          className
        )}
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
      >
        <FaMoon className="text-sm" />
      </button>
    )
  };

  return (
    <>
      {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher;