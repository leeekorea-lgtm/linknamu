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
      className="block w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      {label}
    </a>
  );
}
