import React from "react";
import Header from "../layout/Header";
import Badge from "../../assets/badge.svg";

const HEADER_HEIGHT = 56;

const BadgePage = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      background: `url('/gyeongbokgung/konrad-ziemlewski-dNtwZ-VnZ30-unsplash.jpg') center/cover no-repeat, #f5f5f5`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 10,
        background: "#fff",
      }}
    >
      <Header title="퀴즈 결과" onBack={() => window.history.back()} />
    </div>
    <div
      style={{
        width: "100vw",
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: HEADER_HEIGHT,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          zIndex: 2,
          background: "rgba(255,255,255,0.85)",
          borderRadius: 24,
          padding: "32px 24px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <img src={Badge} alt="뱃지" style={{ width: 200, marginBottom: 32 }} />
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>축하합니다!</h1>
        <p style={{ fontSize: 20 }}>경복궁 왕 체험 뱃지를 획득했습니다!</p>
      </div>
    </div>
  </div>
);

export default BadgePage;
