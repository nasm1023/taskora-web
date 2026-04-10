import { Route, Routes } from "react-router";
import { MainLayout } from "./components/layouts/MainLayout";
import { ProjectsPage } from "./views/Projects";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default App;