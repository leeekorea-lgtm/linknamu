export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ProfileData {
  name: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
}

export const profile: ProfileData = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  links: [
    { id: "github", label: "GitHub", url: "https://github.com" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
    { id: "blog", label: "블로그", url: "https://example.com/blog" },
  ],
};
