"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="rounded-full border border-white/60 bg-white/40 p-2 text-lg leading-none backdrop-blur-md transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.12]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
