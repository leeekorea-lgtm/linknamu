import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-end">
          <DarkModeToggle />
        </div>
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-neutral-200 p-6 shadow-sm sm:p-8 dark:border-neutral-800">
          <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
          <LinkList links={profile.links} />
        </div>
      </div>
    </main>
  );
}
