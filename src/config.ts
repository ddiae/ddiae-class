export type Link = {
  title: string;
  description: string;
  href: string;
  label: string;
  thumbnail?: string;
};

export const LINKS: Link[] = [
  {
    title: "오리엔테이션",
    description: "나를 소개하고, 나의 코딩 성향을 분석해요.",
    href: "https://coding-personality.vercel.app/",
    label: "고학년",
    thumbnail: "/thumbnails/personality.png"
  },
  {
    title: "컴퓨터 입력장치 알기",
    description: "마우스와 키보드 사용법을 익혀요.",
    href: "https://computer-input-basics.vercel.app/",
    label: "1-2학년",
    thumbnail: "/thumbnails/input-basics.png"
  },
  {
    title: "컴퓨터 입력장치 알기 2",
    description: "키보드 입력 연습을 해봐요.",
    href: "https://computer-input-practice.vercel.app/",
    label: "1-2학년",
    thumbnail: "/thumbnails/input-practice.png"
  },
  {
    title: "블록코딩 시작하기",
    description: "블록 코딩으로 햄버거를 만들어요.",
    href: "https://burger-block.vercel.app/",
    label: "1-2학년",
    thumbnail: "/thumbnails/burger-block.png"
  }
];
