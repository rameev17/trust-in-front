import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Vacansies from "./Vacansy";
import VacansyPage from "./VacansyPage";
import ReportPage from "../Home/Report";

const HomeRoot = () => {
  return (
    <>
      <Vacansies />
      <Outlet />
    </>
  );
};
const VacansyRouter = () => {
  return (
    <Routes>
      <Route index element={<HomeRoot />} />
      <Route path=":id" element={<VacansyPage />} />
      <Route path="reports" element={<ReportPage />} />

      <Route index element={<Navigate to="" />} />
    </Routes>
  );
};

export default VacansyRouter;
