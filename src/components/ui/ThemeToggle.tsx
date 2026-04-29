"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration matches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-text opacity-50">
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center text-text hover:bg-black/5 dark:hover:bg-white/10 transition-colors overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "rotate-[360deg] scale-100" : "rotate-0 scale-0"
        }`}
      >
        <Moon className="h-5 w-5" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "-rotate-[360deg] scale-0" : "rotate-0 scale-100"
        }`}
      >
        <Sun className="h-5 w-5" />
      </div>
    </button>
  );
}
