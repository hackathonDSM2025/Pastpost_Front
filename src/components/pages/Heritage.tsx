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
    height: "100vh",
    objectFit: "cover",
    display: "block",
  },
};

export default Heritage;
