import React, { use, useState, useEffect } from "react";
import choiceImg from "../../assets/choiceImg.svg";

interface BottomSectionProps {
  onComplete: () => void;
  characterImg?: string;
  flow?: string[];
}

const BottomSection = ({
  onComplete,
  characterImg,
  flow = [],
}: BottomSectionProps) => {
  const [index, setIndex] = useState(0);

  // flow가 바뀔 때마다 index 초기화
  useEffect(() => {
    setIndex(0);
  }, [flow]);

  if (flow.length === 0) {
    return null; // 혹은 기본 UI 표시
  }

  const handleNext = () => {
    if (!flow) return;

    if (index >= flow.length - 1) {
      onComplete();
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section onClick={handleNext} style={styles.bottomSection}>
      <img
        src={characterImg}
        alt="캐릭터 이미지"
        style={characterImg === choiceImg ? styles.choice : styles.image}
      />
      <span
        style={characterImg === choiceImg ? styles.choiceText : styles.text}
      >
        {flow[index] ?? ""}
      </span>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  bottomSection: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: "0 2% 2% 2%",
    marginBottom: "10%",
    position: "relative",
  },
  choice: {
    display: "block",
    width: "100%",
    height: "100%",
    marginBottom: "40%",
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    marginBottom: "10%",
  },
  choiceText: {
    width: "65%",
    height: "30%",
    position: "absolute",
    top: "20%",
    left: "37%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "100%",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
  },
  text: {
    width: "65%",
    height: "30%",
    position: "absolute",
    top: "58%",
    left: "37%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "100%",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
  },
};

export default BottomSection;
