import "./App.css";
import "../src/css/typography.css";
import "../src/css/text-colors.css";
import "../src/css/project.css";

import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomeRouter from "./pages/Home/router";
import { AnimatePresence } from "framer-motion";
import MotionWrapper from "./components/MotionWrapper";
import VacansyRouter from "./pages/Alumni/router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsRouter from "./pages/Projects/router";
import NewsRouter from "./pages/News/router";
import { use } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const { t } = useTranslation();
  const routes = [
    {
      path: "/home/*",
      name: t("header_about_us"),
      requiredAccessToPage: "home",
      subPages: [
        {
          path: "about",
          name: t("header_mission"),
        },
        {
          path: "managment",
          name: t("header_kenes"),
        },
        {
          path: "documents",
          name: t("header_documents"),
        },
      ],
      element: <HomeRouter />,
    },
    {
      path: "/alumni/*",
      requiredAccessToPage: "alumni",
      name: t("header_alumni"),
      subPages: [
        {
          path: "",
          name: t("header_vacancy"),
        },
        {
          path: "reports",
          name: t("header_reports"),
        },
      ],
      element: <VacansyRouter />,
    },
    {
      path: "/news/*",
      requiredAccessToPage: "news",
      name: t("header_news"),
      element: <NewsRouter />,
    },

    {
      path: "/projects/*",
      requiredAccessToPage: "projects",
      name: t("header_projects"),
      element: <ProjectsRouter />,
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (scrollPosition === 0 && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarFixed]);

  return (
    <Container>
      <NavbarWrapper className={isNavbarFixed ? "fixed" : ""}>
        <Navbar routes={routes} />
      </NavbarWrapper>
      <AnimatePresence>
        <Routes>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              element={<MotionWrapper>{route.element}</MotionWrapper>}
              key={i}
            />
          ))}

          <Route index element={<Navigate to="/home" />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Container>
  );
}
const Container = styled.div`
  overflow-x: hidden;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;

  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ isNavbarFixed }) =>
    isNavbarFixed ? "#222222" : "#fdfdfd"};
  transition: background-color 0.3s ease;
`;

export default App;
