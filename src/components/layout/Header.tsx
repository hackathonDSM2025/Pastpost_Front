import React, { useState } from "react";
import { typography } from "../../../font/font";

interface HeadProps {
  title: string;
  onBack: () => void;
}

const Header = ({ title, onBack }: HeadProps) => {
  return (
    <header style={styles.header}>
      <button onClick={onBack} style={styles.backButton} aria-label="뒤로가기">
        ←
      </button>
      <h1 style={(styles.headerTitle, typography.headerMedium)}>{title}</h1>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "2% 5%",
    borderBottom: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    height: "5%",
  },
  backButton: {
    cursor: "pointer",
    border: "none",
    background: "none",
    fontSize: "Bold",
    paddingRight: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    margin: 0,
    marginLeft: "-24px",
  },
};

export default Header;
