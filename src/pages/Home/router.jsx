import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import TeamPage from "./TeamPage";
import DocumentPage from "./Documents";
import ReportPage from "./Report";

const HomeRoot = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};
const HomeRouter = () => {
  return (
    <Routes>
      <Route index element={<HomeRoot />} />
      <Route path="about" element={<About />} />
      <Route path="managment" element={<TeamPage />} />
      <Route path="documents" element={<DocumentPage />} />

      <Route index element={<Navigate to="" />} />
    </Routes>
  );
};

export default HomeRouter;
