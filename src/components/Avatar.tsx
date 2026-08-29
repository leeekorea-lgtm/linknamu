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
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
      />
    );
  }

  const initial = name.trim().charAt(0) || "?";

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-200 text-3xl font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      {initial}
    </div>
  );
}
