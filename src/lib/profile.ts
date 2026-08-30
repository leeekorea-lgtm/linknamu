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
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/pig.png",
  links: [
    { id: "github", label: "👨‍💼 깃허브", url: "https://github.com/leeekorea-lgtm" },
    { id: "blog", label: "✏️ 블로그", url: "https://blog.naver.com/leeekorea" },
    { id: "email", label: "🖐🏽 이메일", url: "mailto:leeekorea@gmail.com" },
    { id: "instagram", label: "♥️ 인스타그램", url: "https://www.instagram.com/leeekorea/" },
  ],
};
