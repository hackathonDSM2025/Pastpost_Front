import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import Header from "../layout/Header";
import bubble from "../../assets/bubble.svg";
import mascotO from "../../assets/mascotO.svg";
import mascotX from "../../assets/mascotX.svg";

interface StoryProps {
  flow: Record<
    string,
    { image?: string; choices?: Choice[]; text: string | string[] }
  >;
  startId: string;
  heritageId: number; // 반드시 부모에서 넘겨줘야 함
}

interface Choice {
  text: string;
  nextId: string;
  answer?: string;
  isCorrect?: boolean; // 추가: 선택지의 정답 여부
}

const Story = ({ flow, startId, heritageId }: StoryProps) => {
  const [currentSceneId, setCurrentSceneId] = useState(startId);
  const [feedback, setFeedback] = useState<null | {
    type: "correct" | "wrong";
    answer?: string;
  }>(null);
  const navigate = useNavigate();

  // "quiz" scene이면 Quiz만 렌더
  if (currentSceneId === "quiz") {
    return (
      <div style={styles.container}>
        <Header title="퀴즈" onBack={() => {}} />
        <Quiz
          heritageId={heritageId}
          onComplete={(isAnyCorrect) => {
            if (isAnyCorrect) {
              navigate("/end");
            } else {
              navigate("/fail");
            }
          }}
        />
      </div>
    );
  }

  const scene = flow[currentSceneId];
  if (!scene) {
    console.error(`Scene with id "${currentSceneId}" not found`);
    return <div>Scene not found</div>;
  }

  // 다음 scene id를 찾는 함수 (선택지가 없을 때만 사용)
  const getNextSceneId = () => {
    if (scene.choices && scene.choices.length === 1) {
      return scene.choices[0].nextId;
    }
    return null;
  };

  // 바탕화면 클릭 핸들러: 선택지가 없을 때만 동작
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scene.choices && scene.choices.length > 0 && !feedback) return;
    if ((e.target as HTMLElement).tagName === "BUTTON") return;
    if (feedback) return;
    const nextId = getNextSceneId();
    if (nextId) setCurrentSceneId(nextId);
  };

  const handleChoiceClick = (choiceText: string, nextId: string) => {
    const selectedChoice = scene.choices?.find((c) => c.text === choiceText);
    const answer = selectedChoice?.answer;
    const isCorrect = selectedChoice?.isCorrect;
    setFeedback({ type: isCorrect ? "correct" : "wrong", answer });
    setTimeout(() => {
      setFeedback(null);
      setCurrentSceneId(nextId);
    }, 1000);
  };

  // 캐릭터 이미지 결정
  let characterImg = bubble;
  if (feedback?.type === "correct") characterImg = mascotO;
  if (feedback?.type === "wrong") characterImg = mascotX;

  return (
    <div
      style={{
        ...styles.background,
        position: "relative",
      }}
      onClick={handleBackgroundClick}
    >
      {/* 배경 이미지 (image가 있으면 꽉 채움) */}
      {scene?.image && (
        <img src={scene.image} alt="scene background" style={styles.bgImg} />
      )}
      {/* 선택지 영역 (말풍선 위) */}
      {scene.choices && scene.choices.length > 0 && !feedback && (
        <div style={styles.choicesContainer}>
          {scene.choices.map((choice) => (
            <button
              key={choice.text}
              onClick={() => handleChoiceClick(choice.text, choice.nextId)}
              style={styles.choiceButton}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}
      {/* 캐릭터와 말풍선(대사) */}
      <div style={styles.characterSection}>
        {/* 말풍선(대사) - 캐릭터 바로 위 */}
        <div style={styles.bubbleContainer}>
          <div style={styles.bubble}>
            {feedback && feedback.answer ? (
              <div
                style={{
                  color: feedback.type === "wrong" ? "#e53e3e" : "#3182ce",
                  fontWeight: 300,
                }}
              >
                {feedback.answer}
              </div>
            ) : Array.isArray(scene.text) ? (
              scene.text.map((line: string, i: number) => (
                <p key={i} style={styles.bubbleText}>
                  {line}
                </p>
              ))
            ) : (
              <p style={styles.bubbleText}>{scene.text}</p>
            )}
          </div>
        </div>
        {/* 캐릭터 이미지 */}
        <img src={characterImg} alt="캐릭터" style={styles.characterImg} />
      </div>
    </div>
  );
};

// styles 객체는 기존과 동일하게 유지
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  background: {
    width: "100vw",
    height: "94.5vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 1,
  },
  bgImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    zIndex: 0,
    pointerEvents: "none",
  },
  characterSection: {
    position: "relative",
    width: "100%",
    height: 400,
    zIndex: 2,
  },
  bubbleContainer: {
    width: "60%",
    position: "absolute",
    bottom: "32%",
    left: "40%",
    transform: "translateX(-50%)",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "auto",
    height: "15%",
  },
  bubble: {
    minWidth: 240,
    maxWidth: 480,
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleText: {
    fontSize: 12,
    color: "blcak",
    margin: 0,
    marginBottom: 6,
    textAlign: "center",
    lineHeight: 1.6,
    fontWeight: 400,
  },
  choicesContainer: {
    position: "absolute",
    top: "10%",
    left: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    zIndex: 3,
    pointerEvents: "auto",
  },
  choiceButton: {
    padding: "12px 32px",
    fontSize: 12,
    borderRadius: 10,
    border: "none",
    background: "#e6f0ff",
    color: "#1a237e",
    fontWeight: 300,
    cursor: "pointer",
    marginBottom: 4,
    transition: "background 0.2s",
  },
  characterImg: {
    position: "absolute",
    bottom: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    width: "90%",
    maxWidth: "100%",
    height: "auto",
    pointerEvents: "none",
  },
};

export default Story;
