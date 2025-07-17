import React from "react";
import choiceImg from "../../assets/choiceImg.svg";

interface ChoiceProps {
  imgSrc: string;
  onSelectRole?: (role: "king" | "courtLady" | "official") => void;
}

const Choice = ({ imgSrc, onSelectRole }: ChoiceProps) => {
  return (
    <div style={styles.container}>
      <img src={imgSrc} style={styles.backgroundImg} alt="배경" />

      <div style={styles.content}>
        <img src={choiceImg} style={styles.characterImg} alt="캐릭터" />
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => onSelectRole && onSelectRole("king")}
          >
            왕
          </button>
          <button
            style={styles.button}
            onClick={() => onSelectRole && onSelectRole("courtLady")}
          >
            궁녀
          </button>
          <button
            style={styles.button}
            onClick={() => onSelectRole && onSelectRole("official")}
          >
            신하
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2vh",
  },
  characterImg: {
    width: "100%",
    maxWidth: "90%",
    height: "auto",
  },
  buttonContainer: {
    width: "95%",
    marginTop: "-38%",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    padding: "10% 10%",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
};

export default Choice;
