export interface DayProject {
  day: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export const dayProjects: DayProject[] = [
  {
    day: 1,
    title: "기본 라우팅과 컴포넌트",
    description:
      "App Router 기반의 기본 페이지 구성, 라우팅 그룹 (pages) 생성 및 헤더 컴포넌트 실습",
    tags: ["App Router", "CSS Modules"],
    href: "/day-1",
  },
  {
    day: 2,
    title: "설정 파일 및 동적 멤버 렌더링",
    description:
      "기존 멤버 구성 정보 객체를 활용한 화면 데이터 렌더링 및 헤더/푸터 공통 레이아웃 구성 실습",
    tags: ["Data Rendering", "Layouts"],
    href: "/day-2",
  },
  {
    day: 3,
    title: "다크모드 상태 관리 및 컴포넌트 분리",
    description:
      "useState와 useEffect를 이용한 다크모드 구현, 버튼 컴포넌트 분리 및 fixed 스타일링 실습",
    tags: ["useState", "useEffect", "Global SCSS"],
    href: "/day-3",
  },
  {
    day: 4,
    title: "커스텀 훅 다크모드 & 버튼 컨벤션",
    description:
      "커스텀 훅을 활용한 다크모드 상태 관리 구현 및 공통 Button 컴포넌트의 HTML 속성 지원 리팩토링",
    tags: ["Custom Hook", "SCSS Modules"],
    href: "/day-4",
  },
];
