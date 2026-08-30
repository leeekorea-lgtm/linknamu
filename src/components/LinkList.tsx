"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import type { LinkItem } from "@/lib/profile";

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: { counts?: Record<string, number> }) => {
        if (!cancelled) setCounts(data.counts ?? {});
      })
      .catch(() => {
        if (!cancelled) setCounts({});
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleIncrement = (id: string) => {
    setCounts((prev) => {
      const base = prev ?? {};
      return { ...base, [id]: (base[id] ?? 0) + 1 };
    });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts ? counts[link.id] ?? 0 : undefined}
          onIncrement={handleIncrement}
        />
      ))}
    </div>
  );
}
