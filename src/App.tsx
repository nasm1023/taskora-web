import { Route, Routes } from "react-router";
import { MainLayout } from "./components/layouts/MainLayout";
import { ProjectsPage } from "./views/Projects";
import { ProjectDetailPage } from "./views/ProjectDetail";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;