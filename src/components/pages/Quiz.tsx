import React, { useState, useEffect } from "react";
import bubble from "../../assets/bubble.svg";
import mascotO from "../../assets/mascotO.svg";
import mascotX from "../../assets/mascotX.svg";
import mascot from "../../assets/mascot.svg";
import { fetchQuiz } from "../../services/quizApi";

interface QuizProps {
  heritageId: number;
  onComplete: (isCorrect: boolean) => void;
  onBack?: () => void;
  image?: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const Quiz: React.FC<QuizProps> = ({
  heritageId = 1,
  onComplete,
  onBack,
  image,
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasCorrect, setHasCorrect] = useState(false);

  useEffect(() => {
    console.log("[퀴즈] heritageId:", heritageId);
    setLoading(true);
    fetchQuiz(heritageId)
      .then((qs) => {
        console.log("[퀴즈] fetchQuiz 응답:", qs);
        setQuestions(qs);
        setLoading(false);
      })
      .catch((e) => {
        console.error("[퀴즈] fetchQuiz 에러:", e);
        setError("퀴즈를 불러오지 못했습니다.");
        setLoading(false);
      });
  }, [heritageId]);

  if (loading) return <div>퀴즈를 불러오는 중...</div>;
  if (error) return <div>{error}</div>;
  if (questions.length === 0) return <div>문제가 없습니다.</div>;

  const current = questions[currentIndex];

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === current.correctAnswer) setHasCorrect(true);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        // 마지막 문제도 정답 여부 반영
        onComplete(hasCorrect || index === current.correctAnswer);
      }
    }, 1000);
  };

  const getOptionStyle = (index: number): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      padding: "14px 0",
      margin: "8px 0",
      borderRadius: "8px",
      border: "2px solid #e0e0e0",
      backgroundColor: "#fff",
      cursor: "pointer",
      transition: "all 0.2s ease",
      fontSize: "16px",
      textAlign: "center",
      width: "100%",
    };
    if (selectedAnswer === index) {
      if (index === current.correctAnswer) {
        return {
          ...baseStyle,
          borderColor: "#4CAF50",
          backgroundColor: "#E8F5E8",
        };
      } else {
        return {
          ...baseStyle,
          borderColor: "#f44336",
          backgroundColor: "#FFEBEE",
        };
      }
    }
    if (isAnswered && index === current.correctAnswer) {
      return {
        ...baseStyle,
        borderColor: "#4CAF50",
        backgroundColor: "#E8F5E8",
      };
    }
    return baseStyle;
  };

  // 캐릭터 이미지 결정
  let characterImg = mascot;
  if (isAnswered && selectedAnswer !== null) {
    characterImg = selectedAnswer === current.correctAnswer ? mascotO : mascotX;
  }

  return (
    <div style={styles.container}>
      {/* 나머지 퀴즈 UI만 남김 */}
      <div style={styles.bubbleSection}>
        <img src={mascot} alt="bubble" style={styles.bubble} />
        <div style={styles.question}>{current.question}</div>
      </div>
      <div style={styles.optionsSection}>
        {current.options.map((option, idx) => (
          <button
            key={idx}
            style={getOptionStyle(idx)}
            onClick={() => handleSelectAnswer(idx)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
  },
  bubbleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 24,
    width: "100%",
  },
  bubble: {
    width: 120,
    height: "auto",
    marginBottom: 12,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
    maxWidth: 320,
  },
  optionsSection: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
    margin: "0 auto",
  },
};

export default Quiz;
