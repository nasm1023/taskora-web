import { Navigate, Route, Routes } from "react-router";
import { MainLayout } from "./components/layouts/MainLayout";
import { ProjectsPage } from "./views/Projects";
import { ProjectDetailPage } from "./views/ProjectDetail";
import { LoginPage } from "./views/Auth/LoginPage";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;