import MainLayout from "./components/layout/MainLayout";
import pages from "./data/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BadgePage from "./components/pages/BadgePage";
import FailPage from "./components/pages/FailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout pages={pages} />} />
        <Route path="/end" element={<BadgePage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
