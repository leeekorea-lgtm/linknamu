"use client";

import type { LinkItem } from "@/lib/profile";

interface LinkCardProps extends LinkItem {
  count?: number;
  onIncrement?: (id: string) => void;
}

export default function LinkCard({ id, label, url, count, onIncrement }: LinkCardProps) {
  const handleClick = () => {
    onIncrement?.(id);

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 사용자 경험에 영향을 주지 않도록 무시한다.
    });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/50 px-5 py-4 font-medium text-neutral-800 shadow-[0_4px_20px_-10px_rgba(120,72,25,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_8px_24px_-8px_rgba(120,72,25,0.35)] dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-100 dark:hover:bg-white/[0.1]"
    >
      <span>{label}</span>
      <span className="shrink-0 text-xs text-neutral-500 dark:text-neutral-400">
        {count === undefined ? "…" : `${count}회`}
      </span>
    </a>
  );
}
