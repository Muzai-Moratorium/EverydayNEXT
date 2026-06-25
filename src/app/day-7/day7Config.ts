interface Day7ConfigTypes {
  id: number;
  text: string;
}

export const Day7Config: Day7ConfigTypes[] = [
  { id: 1, text: "오늘 한거" },
  {
    id: 2,
    text: "SoC연습!",
  },
  {
    id: 3,
    text: "모달 만들기연습",
  },
] as const;
