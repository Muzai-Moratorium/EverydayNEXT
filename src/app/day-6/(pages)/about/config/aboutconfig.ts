import type { AboutConfigType } from "../types/aboutConfigTypes";

export const AboutConfig: AboutConfigType[] = [
  { id: 1, text: "시간이 부족해서 " },
  { id: 2, text: "1시간 20분 작업 했습니다." },
  { id: 3, text: "30분 초과헀습니다." },
  { id: 4, text: "오늘 한 작업!!" },
  {
    id: 5,
    text: "기본 페이지 템플릿 제작, 커스텀 훅으로 시스템 감지 다크모드 구현",
  },
  {
    id: 6,
    text: "컴포넌트 관심사 분리(SoC) 및 배럴 파일(_index.ts) 구조화",
  },
  {
    id: 7,
    text: "next/image 웹 접근성(alt) 준수 및 Static Import로 이미지 최적화",
  },
  {
    id: 8,
    text: "CSS absolute 포지셔닝을 통한 WebGL(EvilEye) 전체 화면 렌더링 버그 디버깅 및 배경 배치",
  },
  {
    id: 9,
    text: "컴포넌트 내부 하드코딩 방지를 위한 설정 데이터(config.ts) 및 타입 정의(types.ts) 분리 작업",
  },
];
