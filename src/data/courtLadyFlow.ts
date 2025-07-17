export const courtLadyFlow: Record<string, CourtLadyScene> = {
  start: {
    id: "start",
    text: "(아침 종소리)",
    image: "/gyeongbokgung/zero-take-hHYzAUSoHrE-unsplash.jpg",
    choices: [
      {
        text: "일어난다",
        nextId: "work_select",
        answer: "부지런한 궁녀네요!",
        isCorrect: true,
      },
      {
        text: "잔다",
        nextId: "scolded",
        answer: "지각하면 혼나요!",
        isCorrect: false,
      },
    ],
  },

  work_select: {
    id: "work_select",
    text: "오늘은 어디의 일을 하게 될까?",
    image: "/gyeongbokgung/zero-take-hHYzAUSoHrE-unsplash.jpg",
    choices: [
      {
        text: "의복 제작",
        nextId: "sewing",
        answer: "바느질은 궁녀의 중요한 일 중 하나예요.",
        isCorrect: true,
      },
      {
        text: "왕실 시중",
        nextId: "serving",
        answer: "왕실 시중은 매우 중요한 역할입니다.",
        isCorrect: true,
      },
      {
        text: "음식 준비",
        nextId: "cooking",
        answer: "수라간에서 음식 준비를 합니다.",
        isCorrect: true,
      },
      {
        text: "약 제조",
        nextId: "medicine",
        answer: "약방에서 약을 만듭니다.",
        isCorrect: true,
      },
      {
        text: "빨래",
        nextId: "laundry",
        answer: "우물가에서 빨래를 합니다.",
        isCorrect: true,
      },
    ],
  },

  scolded: {
    id: "scolded",
    text: "지각으로 크게 혼났다.",
    image: "/gyeongbokgung/image (11).png",
    choices: [
      {
        text: "다시 일어난다",
        nextId: "work_select",
        answer: "이제는 늦지 않게 일어나요!",
        isCorrect: true,
      },
    ],
  },

  sewing: {
    id: "sewing",
    text: "의복 제작 (바느질)",
    image: "/gyeongbokgung/image (12).png",
    choices: [
      {
        text: "다음",
        nextId: "quiz",
        answer: "궁녀의 바느질 실력은 최고! 이제 퀴즈로 가볼까요?",
        isCorrect: true,
      },
    ],
  },

  serving: {
    id: "serving",
    text: "왕실 시중",
    image: "/gyeongbokgung/image (5).png",
    choices: [
      {
        text: "다음",
        nextId: "quiz",
        answer: "왕실 시중을 잘 마쳤어요! 이제 퀴즈로 가볼까요?",
        isCorrect: true,
      },
    ],
  },

  cooking: {
    id: "cooking",
    text: "음식 준비 (수라간)",
    image: "/gyeongbokgung/image (6).png",
    choices: [
      {
        text: "다음",
        nextId: "quiz",
        answer: "음식 준비 완료! 이제 퀴즈로 가볼까요?",
        isCorrect: true,
      },
    ],
  },

  medicine: {
    id: "medicine",
    text: "약 제조 (약방)",
    image: "/gyeongbokgung/image (7).png",
    choices: [
      {
        text: "다음",
        nextId: "quiz",
        answer: "약 제조 완료! 이제 퀴즈로 가볼까요?",
        isCorrect: true,
      },
    ],
  },

  laundry: {
    id: "laundry",
    text: "빨래 (우물가)",
    image: "/gyeongbokgung/image (8).png",
    choices: [
      {
        text: "다음",
        nextId: "accident",
        answer: "빨래를 하다 발목을 삐었어요.",
        isCorrect: false,
      },
    ],
  },

  accident: {
    id: "accident",
    text: "발목이 꺾여 넘어짐. 병사가 괜찮냐고 물어본다.",
    image: "/gyeongbokgung/image (9).png",
    choices: [
      {
        text: "고백한다",
        nextId: "forbidden_love",
        answer: "궁녀는 왕의 여자로서 다른 남자와 사랑은 금지!",
        isCorrect: false,
      },
      {
        text: "감사 인사를 한다",
        nextId: "ending",
        answer: "서로 인사하고 끝!",
        isCorrect: true,
      },
    ],
  },

  forbidden_love: {
    id: "forbidden_love",
    text: "궁녀 설명: 왕의 여자로서 다른 남자와 사랑은 금지. 적발 시 처벌.",
    image: "/gyeongbokgung/image (11).png",
    choices: [
      {
        text: "퀴즈 풀러가기",
        nextId: "quiz",
        answer: "궁녀의 하루가 끝났어요! 이제 퀴즈로 가볼까요?",
        isCorrect: true,
      },
    ],
  },

  ending: {
    id: "ending",
    text: "서로 인사하고 끝.",
    image: "/gyeongbokgung/image (10).png",
    choices: [
      {
        text: "퀴즈 풀러가기",
        nextId: "quiz",
        answer: "궁녀의 하루가 끝났어요! 이제 퀴즈로 가볼까요?",
        isCorrect: true,
      },
    ],
  },
};
