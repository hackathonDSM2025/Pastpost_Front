import React from "react";

interface ContentProps {
  component: React.ReactNode;
}

const Content = ({ component }: ContentProps) => {
  return <main style={styles.content}>{component}</main>;
};

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    height: "100%",
    flex: 1,
    minHeight: 0,
  },
};

export default Content;
