import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import BottomSection from "./BottomSection";
import Story from "../pages/Story";
import { KingFlow } from "../../data/KingFlow";
import { courtLadyFlow } from "../../data/courtLadyFlow";
import { officialFlow } from "../../data/officialFlow";

interface Page {
  component: React.ReactNode;
  title: string;
  characterImg?: string;
  flow: string[];
}

interface MainLayoutProps {
  pages: Page[];
}

type Role = "king" | "courtLady" | "official";

const MainLayout = ({ pages }: MainLayoutProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleNextPage = () => {
    setCurrentStep((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    setSelectedRole(null); // 페이지 이동 시 역할 초기화
  };

  const handlePrevPage = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    setSelectedRole(null);
  };

  const handleSelectRole = (role: Role) => {
    setSelectedRole(role);
  };

  const currentPage = pages[currentStep];

  // 역할 선택 시 해당 Story로 분기
  if (currentPage.title === "역할 선택" && selectedRole) {
    if (selectedRole === "king") {
      return <Story flow={KingFlow} startId="start" heritageId={0} />;
    }
    if (selectedRole === "courtLady") {
      return <Story flow={courtLadyFlow} startId="start" heritageId={1} />;
    }
    if (selectedRole === "official") {
      return <Story flow={officialFlow} startId="start" heritageId={2} />;
    }
  }

  // Choice에 onSelectRole 전달
  const pageComponent =
    currentPage.title === "역할 선택"
      ? React.cloneElement(
          currentPage.component as React.ReactElement,
          {
            onSelectRole: handleSelectRole,
          } as React.ComponentProps<any>
        )
      : currentPage.component;

  // Story가 렌더링되는지 확인
  const isStory =
    (currentPage.title === "역할 선택" && selectedRole) ||
    (React.isValidElement(currentPage.component) &&
      typeof currentPage.component.type === "function" &&
      ((currentPage.component.type as { name?: string }).name === "Story" ||
        (currentPage.component.type as { name?: string }).name === "Quiz"));

  return (
    <div style={styles.container}>
      {!isStory && <Header title={currentPage.title} onBack={handlePrevPage} />}
      <Content component={pageComponent} />
      {currentPage.flow &&
      currentPage.flow.length > 0 &&
      currentPage.characterImg ? (
        <BottomSection
          onComplete={handleNextPage}
          characterImg={currentPage.characterImg}
          flow={currentPage.flow}
        />
      ) : null}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
};

export default MainLayout;
