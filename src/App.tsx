import MainLayout from "./components/layout/MainLayout";
import pages from "./data/pages";

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MainLayout pages={pages} />
    </div>
  );
};

export default App;
