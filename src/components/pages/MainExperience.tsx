import React, { useState } from "react";
import BottomSection from "../layout/BottomSection";
import Choice from "./Choice";
import { KingFlow, courtLadyFlow, officialFlow } from "../../data/index";
import bubble from "../../assets/bubble.svg";

interface MainExperienceProps {
  imgSrc: string;
}

const MainExperience = ({ imgSrc }: MainExperienceProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedFlow, setSelectedFlow] = useState<string[] | null>(null);
  const [characterImg, setCharacterImg] = useState(bubble);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setCharacterImg(bubble); // 인트로에서는 무조건 bubble 유지
  };

  const handleRoleSelect = (role: "king" | "courtLady" | "official") => {
    switch (role) {
      case "king":
        setSelectedFlow(KingFlow);
        // setCharacterImg(kingImg); // 이미지 필요하면 추가
        break;
      case "courtLady":
        setSelectedFlow(courtLadyFlow);
        // setCharacterImg(courtLadyImg);
        break;
      case "official":
        setSelectedFlow(officialFlow);
        // setCharacterImg(officialImg);
        break;
    }
  };

  const handleFlowComplete = () => {
    console.log("체험 끝!");
    // 필요하면 다음 동작 추가
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!showIntro && !selectedFlow && (
        <Choice
          imgSrc="" // Choice 컴포넌트가 배경 이미지를 다시 그리지 않도록 빈 문자열 전달
          onSelectRole={handleRoleSelect}
        />
      )}
      {selectedFlow && (
        <BottomSection
          flow={selectedFlow}
          characterImg={characterImg}
          onComplete={handleFlowComplete}
        />
      )}
    </div>
  );
};

export default MainExperience;
