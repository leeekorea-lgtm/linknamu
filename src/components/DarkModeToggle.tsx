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
      className="rounded-full border border-neutral-200 p-2 text-lg leading-none transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
