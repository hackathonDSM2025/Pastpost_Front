import React, { useState } from "react";

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
      <h1 style={styles.headerTitle}>{title}</h1>
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
    fontSize: "24px",
    cursor: "pointer",
    border: "none",
    background: "none",
    paddingRight: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    margin: 0,
    marginLeft: "-24px",
  },
};

export default Header;
