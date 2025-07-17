import React from "react";
import {
  Heritage,
  MainExperience,
} from "../components/pages";
import bubble from "../assets/bubble.svg";
import {
  gyeongbokgungFlow,
} from "../data/index";

const introFlow = [
  "실제 경복궁에서 어떻게 생활했는지 체험하러 가볼까?",
  "어떤 역할을 체험해보고 싶어?",
];

const pages = [
  {
    component: <Heritage imgSrc="/gyeongbokgung/jw-E-aTKtrrGFY-unsplash.jpg" />,
    title: "문화유산 설명",
    characterImg: bubble,
    flow: gyeongbokgungFlow,
  },
  {
    component: <MainExperience imgSrc="/gyeongbokgung/경복궁복원.jpg" />,
    title: "인트로",
    flow: introFlow,
  },
  // 역할 선택 페이지(Choice)는 제거
];

export default pages; 