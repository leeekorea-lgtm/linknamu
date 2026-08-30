import Image from "next/image";

interface AvatarProps {
  name: string;
  avatarUrl?: string;
}

export default function Avatar({ name, avatarUrl }: AvatarProps) {
  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={name}
        width={150}
        height={150}
        className="h-28 w-28 rounded-full object-cover shadow-[0_10px_30px_-8px_rgba(180,90,30,0.45)] ring-4 ring-white/80 dark:ring-white/10"
      />
    );
  }

  const initial = name.trim().charAt(0) || "?";

  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-neutral-200 text-3xl font-semibold text-neutral-700 shadow-[0_10px_30px_-8px_rgba(180,90,30,0.45)] ring-4 ring-white/80 dark:bg-neutral-700 dark:text-neutral-200 dark:ring-white/10">
      {initial}
    </div>
  );
}
