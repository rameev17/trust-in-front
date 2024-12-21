import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";

const ProjectsRouter = () => {
  return (
    <Routes>
      <Route index element={<Projects />} />
      <Route path=":id" element={<ProjectPage />} />
    </Routes>
  );
};

export default ProjectsRouter;
