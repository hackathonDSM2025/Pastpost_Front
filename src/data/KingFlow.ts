export const KingFlow: Record<string, Scene> = {
  king_morning: {
    id: "king_morning",
    text: "내시 : (새벽 5시) 전하, 기침하셔야 하옵니다",
    image: "/gyeongbokgung/david-ford-CJYmvgAd01w-unsplash.jpg",
    choices: [
      {
        text: "일어난다",
        nextId: "king_wakes",
        answer: "잘 일어나셨습니다!",
        isCorrect: true,
      },
      {
        text: "그냥 잔다",
        nextId: "king_snooze",
        answer: "더 자면 늦어요!",
        isCorrect: false,
      },
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
        isCorrect: true,
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
        isCorrect: true,
      },
      {
        text: "하러 가지 않는다",
        nextId: "confucian_explanation",
        answer: "유교 사회에서 문안 인사는 매우 중요합니다.",
        isCorrect: false,
      },
    ],
  },

  king_visit: {
    id: "king_visit",
    text: "안녕하세요~",
    image: "/gyeongbokgung/문안인사.jpg",
    bgImage: "/img2.jpg",
    choices: [
      {
        text: "다음",
        nextId: "meal_intro",
        answer: "이제 식사 시간입니다.",
        isCorrect: true,
      },
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
        isCorrect: true,
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
        isCorrect: false,
      },
      {
        text: "기다린다",
        nextId: "queen_eats_first",
        answer: "기미상궁이 먼저 먹는 것이 안전합니다.",
        isCorrect: true,
      },
    ],
  },

  queen_eats_first: {
    id: "queen_eats_first",
    text: "기미상궁이 먼저 먹는다",
    image: "/gyeongbokgung/수라상.jpg",
    choices: [
      {
        text: "다음",
        nextId: "king_study",
        answer: "이제 공부 시간입니다.",
        isCorrect: true,
      },
    ],
  },

  king_eats_first: {
    id: "king_eats_first",
    image: "/gyeongbokgung/수라상.jpg",
    text: [
      "왕의 식사를 먼저 맛보는 사람을 두어 음식에 문제가 있는지 확인했어요",
    ],
    choices: [
      {
        text: "다음",
        nextId: "king_study",
        answer: "이제 공부 시간입니다.",
        isCorrect: false,
      },
    ],
  },

  king_study: {
    id: "king_study",
    text: ["왕의 하루는 어땠나요?", "상상했던 그대로인가요?"],
    image: "/gyeongbokgung/세자공부.jpg",
    choices: [
      {
        text: "퀴즈 풀러가기",
        nextId: "quiz",
        answer: "이제 퀴즈를 풀어볼까요?",
        isCorrect: true,
      },
    ],
  },

  badge: {
    id: "badge",
    text: ["축하합니다!", "경복궁 왕 체험 뱃지를 획득했습니다!"],
    image: "/gyeongbokgung/badge.jpg",
    choices: [
      {
        text: "완료",
        nextId: "end",
        answer: "체험이 완료되었습니다!",
        isCorrect: true,
      },
    ],
  },

  end: {
    id: "end",
    text: "경복궁 체험이 완료되었습니다!",
  },
};
