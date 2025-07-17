import React from "react";
import bubble from "../../assets/bubble.svg";
import mascotO from "../../assets/mascotO.svg";
import mascotX from "../../assets/mascotX.svg";

interface CharacterSectionProps {
  text: string | string[];
  feedback: { type: "correct" | "wrong"; answer?: string } | null;
}

const CharacterSection = ({ text, feedback }: CharacterSectionProps) => {
  let characterImg = bubble;
  if (feedback) {
    characterImg = feedback.type === "correct" ? mascotO : mascotX;
  }
  return (
    <div style={styles.container}>
      <img src={characterImg} alt="캐릭터" style={styles.bubble} />
      <div style={styles.textBox}>
        {Array.isArray(text)
          ? text.map((t, i) => <p key={i}>{t}</p>)
          : <p>{text}</p>}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
  },
  bubble: {
    width: 120,
    height: "auto",
    marginBottom: 8,
  },
  textBox: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: 16,
    padding: 20,
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    maxWidth: 400,
  },
};

export default CharacterSection; 