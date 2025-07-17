import React, { useState } from "react";
import Choice from "./Choice";
import Story from "./Story";
import { KingFlow, courtLadyFlow, officialFlow } from "../../data/index";

interface MainExperienceProps {
  imgSrc: string;
}

const MainExperience = ({ imgSrc }: MainExperienceProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showRoleGuide, setShowRoleGuide] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "king" | "courtLady" | "official" | null
  >(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowRoleGuide(true);
  };

  const handleRoleGuideComplete = () => {
    setShowRoleGuide(false);
  };

  const handleRoleSelect = (role: "king" | "courtLady" | "official") => {
    setSelectedRole(role);
  };

  if (selectedRole) {
    let flow:
      | Record<
          string,
          {
            image?: string;
            choices?: { text: string; nextId: string; answer?: string }[];
            text: string | string[];
          }
        >
      | undefined = undefined;
    let startId: string | undefined = undefined;
    if (selectedRole === "king") {
      flow = KingFlow;
      startId = "king_morning";
    } else if (selectedRole === "courtLady") {
      flow = courtLadyFlow;
      startId = "start";
    } else if (selectedRole === "official") {
      flow = officialFlow;
      startId = "start";
    }
    if (flow && startId) {
      return <Story flow={flow} startId={startId} heritageId={1} />;
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "94.5vh",
        position: "relative",
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {showIntro && (
        <div
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 28,
            fontWeight: 600,
            background: "rgba(0,0,0,0.3)",
            cursor: "pointer",
            zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onClick={handleIntroComplete}
        >
          화면을 클릭해서 시작하세요
        </div>
      )}
      {!showIntro && showRoleGuide && (
        <div
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 28,
            fontWeight: 600,
            background: "rgba(0,0,0,0.3)",
            cursor: "pointer",
            zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onClick={handleRoleGuideComplete}
        >
          어떤 역할을 체험해보고 싶어?
        </div>
      )}
      {!showIntro && !showRoleGuide && !selectedRole && (
        <Choice imgSrc="" onSelectRole={handleRoleSelect} />
      )}
    </div>
  );
};

export default MainExperience;
