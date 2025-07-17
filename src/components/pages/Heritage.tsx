import React from "react";

interface HeritageProps {
  imgSrc: string;
}

const Heritage = ({ imgSrc }: HeritageProps) => {
  return <img src={imgSrc} style={styles.backgroundImg} />;
};

const styles: { [key: string]: React.CSSProperties } = {
  backgroundImg: {
    width: "100vw",
    height: "90vh",
    maxHeight: "100%",
    objectFit: "cover",
    display: "block",
    marginBottom: "-80%", // bubble과 텍스트가 더 위로 붙도록
    overflow: "hidden", // 스크롤 방지
    zIndex: 1,
  },
};

export default Heritage;
