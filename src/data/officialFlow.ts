export interface OfficialChoice {
  text: string;
  nextId: string;
  answer?: string;
}

export interface OfficialScene {
  id: string;
  text: string | string[];
  image?: string;
  choices?: OfficialChoice[];
}

export const officialFlow: Record<string, OfficialScene> = {
  start: {
    id: "start",
    text: "이른 아침, 출근 준비",
    image: "/official/img1.jpg",
    choices: [
      { text: "출근한다", nextId: "gwanghwamun", answer: "오늘도 힘찬 하루의 시작!" },
    ],
  },
  gwanghwamun: {
    id: "gwanghwamun",
    text: "광화문으로 들어선다.",
    image: "/official/img2.jpg",
    choices: [
      { text: "왼쪽 길", nextId: "palace", answer: "궁으로 들어갑니다." },
      { text: "가운데 길", nextId: "royal_road", answer: "가운데 길은 임금 전용 길(어도)입니다." },
      { text: "오른쪽 길", nextId: "palace", answer: "궁으로 들어갑니다." },
    ],
  },
  palace: {
    id: "palace",
    text: "궁으로 들어간다. 임금과 논의, 업무 후 퇴근",
    image: "/official/img3.jpg",
    choices: [
      { text: "다음", nextId: "quiz", answer: "오늘 하루도 수고하셨습니다! 이제 퀴즈로 가볼까요?" },
    ],
  },
  royal_road: {
    id: "royal_road",
    text: "가운데 길은 임금 전용 길(어도). 일반인은 사용 금지.",
    image: "/official/img4.jpg",
    choices: [
      { text: "다시 선택", nextId: "gwanghwamun", answer: "다른 길을 선택해보세요." },
    ],
  },
};
