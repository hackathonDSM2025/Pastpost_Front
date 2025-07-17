export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

// 환경에 따른 API Base URL
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://pastport.ijw.app";

const token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE3NTI3NjU0NDEsImlhdCI6MTc1MjcyOTQ0MX0.QJ69stVkqIJqfB0YD1NRIf1Nxw1VxjWWTpo05r1Zu-k";

export const fetchQuiz = async (
  heritageId: number
): Promise<QuizQuestion[]> => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/api/quiz/${heritageId}`, {
    headers: {
      Authorization: `Bearer ${token1}`,
    },
  });
  const data = await response.json();
  if (!data.success) throw new Error("퀴즈 조회 실패");
  return data.data.questions;
};
