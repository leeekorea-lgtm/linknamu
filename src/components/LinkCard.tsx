"use client";

import type { LinkItem } from "@/lib/profile";

export default function LinkCard({ id, label, url }: LinkItem) {
  const handleClick = () => {
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
      className="block w-full rounded-2xl border border-white/60 bg-white/50 px-5 py-4 text-center font-medium text-neutral-800 shadow-[0_4px_20px_-10px_rgba(120,72,25,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_8px_24px_-8px_rgba(120,72,25,0.35)] dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-100 dark:hover:bg-white/[0.1]"
    >
      {label}
    </a>
  );
}
