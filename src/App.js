import Navbar from "./components/Navbar/Navbar";
import "./App.css";
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

function App() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const routes = [
    {
      path: "/home/*",
      name: `Біз туралы`,
      requiredAccessToPage: "home",
      subPages: [
        {
          path: "about",
          name: `Біздің миссия`,
        },
        {
          path: "managment",
          name: `Қамқоршылық кеңес`,
        },
        {
          path: "documents",
          name: `Заңды құжаттар`,
        },
      ],
      element: <HomeRouter />,
    },
    {
      path: "/alumni/*",
      requiredAccessToPage: "alumni",
      name: `Түлектер`,
      subPages: [
        {
          path: "",
          name: `Вакансия`,
        },
        {
          path: "reports",
          name: `Есептер`,
        },
      ],
      element: <VacansyRouter />,
    },
    {
      path: "/news/*",
      requiredAccessToPage: "news",
      name: `Жаңалықтар`,
      element: <NewsRouter />,
    },

    {
      path: "/projects/*",
      requiredAccessToPage: "projects",
      name: `Жобалар`,
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
  z-index: 100; /* Adjust z-index as needed */
  background-color: ${({ isNavbarFixed }) =>
    isNavbarFixed ? "#222222" : "#fdfdfd"}; /* Change background color */
  transition: background-color 0.3s ease; /* Smooth transition */
`;

export default App;
