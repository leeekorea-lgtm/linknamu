import Avatar from "./Avatar";
import type { ProfileData } from "@/lib/profile";

type ProfileHeaderProps = Pick<ProfileData, "name" | "bio" | "avatarUrl">;

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Avatar name={name} avatarUrl={avatarUrl} />
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {name}
        </h1>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
