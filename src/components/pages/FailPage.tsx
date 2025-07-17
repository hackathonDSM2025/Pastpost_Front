import React from "react";
import Header from "../layout/Header";

const HEADER_HEIGHT = 56;

const FailPage = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      background: `url('/gyeongbokgung/konrad-ziemlewski-dNtwZ-VnZ30-unsplash.jpg') center/cover no-repeat, #f5f5f5`,
      position: "relative",
    }}
  >
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 10,
      background: "#fff",
    }}>
      <Header title="퀴즈 결과" onBack={() => window.history.back()} />
    </div>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: HEADER_HEIGHT,
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255,255,255,0.85)",
          borderRadius: 24,
          padding: "32px 24px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>아쉽게도 뱃지 획득에 실패했습니다!</h1>
        <p style={{ fontSize: 20 }}>다시 도전해보세요!</p>
      </div>
    </div>
  </div>
);

export default FailPage; 