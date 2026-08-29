import Avatar from "./Avatar";
import type { ProfileData } from "@/lib/profile";

type ProfileHeaderProps = Pick<ProfileData, "name" | "bio" | "avatarUrl">;

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Avatar name={name} avatarUrl={avatarUrl} />
      <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{name}</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
    </div>
  );
}
