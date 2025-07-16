export interface Choice {
  text: string;
  nextId: string; // 다음 장면 id
  answer?: string; // 선택 시 출력할 피드백
}

export interface Scene {
  id: string;
  text: string | string[]; // 텍스트(문장 또는 배열)
  image?: string;
  choices?: Choice[];
  explanation?: string; // 선택지에 따른 설명용 텍스트
  bgImage?: string; // 배경 이미지
}

export const KingFlow: Record<string, Scene> = {
  start: {
    id: "start",
    text: [
      "실제 경복궁에서 어떻게 생활했는지 체험하러 가볼까?",
      "어떤 역할을 체험해보고 싶어?",
      "(왕 또는 궁녀, 신하 중 선택)",
    ],
    bgImage: "/img1.jpg",
    choices: [
      { text: "왕", nextId: "king_morning", answer: "왕을 선택하셨습니다!" },
      { text: "궁녀", nextId: "maid_intro", answer: "궁녀를 선택하셨습니다!" },
      {
        text: "신하",
        nextId: "minister_intro",
        answer: "신하를 선택하셨습니다!",
      },
    ],
  },

  king_morning: {
    id: "king_morning",
    text: "내시 : (새벽 5시) 전하, 기침하셔야 하옵니다",
    image: "/gyeongbokgung/david-ford-CJYmvgAd01w-unsplash.jpg",
    choices: [
      { text: "일어난다", nextId: "king_wakes", answer: "잘 일어나셨습니다!" },
      { text: "그냥 잔다", nextId: "king_snooze", answer: "더 자면 늦어요!" },
    ],
  },

  king_snooze: {
    id: "king_snooze",
    text: "내시 : 전하, 벌써 새벽 5시옵니다. 기침하셔야 됩니다",
    image: "/gyeongbokgung/david-ford-CJYmvgAd01w-unsplash.jpg",
    choices: [
      {
        text: "일어난다",
        nextId: "king_wakes",
        answer: "이제라도 일어나셨군요!",
      },
    ],
  },

  king_wakes: {
    id: "king_wakes",
    text: "내시 : 문안 인사를 드리러 가시지요",
    image: "/gyeongbokgung/david-ford-CJYmvgAd01w-unsplash.jpg",
    choices: [
      {
        text: "문안인사를 하러 간다",
        nextId: "king_visit",
        answer: "효도는 왕의 미덕입니다!",
      },
      {
        text: "하러 가지 않는다",
        nextId: "confucian_explanation",
        answer: "유교 사회에서 문안 인사는 매우 중요합니다.",
      },
    ],
  },

  king_visit: {
    id: "king_visit",
    text: "안녕하세요~",
    image: "/gyeongbokgung/문안인사.jpg",
    bgImage: "/img2.jpg",
    choices: [
      { text: "다음", nextId: "meal_intro", answer: "이제 식사 시간입니다." },
    ],
  },

  confucian_explanation: {
    id: "confucian_explanation",
    image: "/gyeongbokgung/문안인사.jpg",
    text: ["조선 시대에는 유교 사상이 강력한 영향력을 가지고 있었어요"],
    choices: [
      {
        text: "문안인사를 하러 간다",
        nextId: "king_visit",
        answer: "이제 문안 인사를 하러 갑니다.",
      },
    ],
  },

  meal_intro: {
    id: "meal_intro",
    text: "내시 : 수라상을 들라하겠습니다",
    image: "/gyeongbokgung/수라상.jpg",
    bgImage: "/img3.jpg",
    choices: [
      {
        text: "수라상을 가장 먼저 먹는다",
        nextId: "king_eats_first",
        answer: "왕이 먼저 먹으면 위험할 수 있습니다.",
      },
      {
        text: "기다린다",
        nextId: "queen_eats_first",
        answer: "기미상궁이 먼저 먹는 것이 안전합니다.",
      },
    ],
  },

  queen_eats_first: {
    id: "queen_eats_first",
    text: "기미상궁이 먼저 먹는다",
    image: "/gyeongbokgung/수라상.jpg",
    choices: [
      { text: "다음", nextId: "king_study", answer: "이제 공부 시간입니다." },
    ],
  },

  king_eats_first: {
    id: "king_eats_first",
    image: "/gyeongbokgung/수라상.jpg",
    text: [
      "임금의 식사 설명",
      "왕을 죽이려는 독살 시도는 은밀하게 진행될 수 있어 매우 위험했어요",
      "그래서 왕의 식사를 먼저 맛보는 사람을 두어 음식에 독이 있는지, 혹은 상했는지를 확인하게 했어요",
    ],
    choices: [
      { text: "다음", nextId: "king_study", answer: "이제 공부 시간입니다." },
    ],
  },

  king_study: {
    id: "king_study",
    text: ["왕의 하루는 어땠나요?", "상상했던 그대로인가요?"],
    image: "/gyeongbokgung/세자공부.jpg",
    // bgImage: "/img4.jpg",
    choices: [
      {
        text: "퀴즈 풀러가기",
        nextId: "quiz",
        answer: "이제 퀴즈를 풀어볼까요?",
      },
    ],
  },
};
