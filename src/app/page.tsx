import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-12 sm:px-8 sm:py-20">
      <div className="flex w-full max-w-md flex-col items-center gap-10 sm:gap-12">
        <div className="flex w-full justify-end">
          <DarkModeToggle />
        </div>
        <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
        <LinkList links={profile.links} />
      </div>
    </main>
  );
}
