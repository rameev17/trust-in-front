import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import DropdownIcon from "../../icons/DropdownIcon";

const Navbar = ({ routes }) => {
  const location = useLocation();
  const mainUrl = location.pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(`/${mainUrl}`);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setDropdownOpen(null);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveTab(`/${mainUrl}`);
  }, [mainUrl]);

  return (
    <Container onMouseLeave={() => setDropdownOpen(null)}>
      <LogoContainer to="/home">
        <LogoImg src={require("../../images/logo.png")} alt="Logo" />
      </LogoContainer>
      <MobileMenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <MenuOutlined />
      </MobileMenuIcon>
      <RightSide isOpen={mobileMenuOpen}>
        <NavItems>
          {routes.map((page, i) => (
            <NavItemContainer key={i}>
              <NavItem
                to={page.requiredAccessToPage}
                isActive={location.pathname.startsWith(
                  page.requiredAccessToPage
                )}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={() => setDropdownOpen(i)}
              >
                {page.name}
              </NavItem>
              {page?.subPages?.length > 0 && (
                <DropdownToggle
                  onClick={() => setDropdownOpen(dropdownOpen === i ? null : i)}
                >
                  <DropdownIcon />
                </DropdownToggle>
              )}
              {page.subPages && (
                <DropdownMenu
                  isOpen={dropdownOpen === i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: dropdownOpen === i ? 1 : 0,
                    y: dropdownOpen === i ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {page.subPages.map((subPage, j) => (
                    <DropdownItem
                      key={j}
                      to={`${page.requiredAccessToPage}/${subPage.path}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subPage.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </NavItemContainer>
          ))}
        </NavItems>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 150px;
  background: #fdfdfd;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 8px 24px;
  }
`;

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

const LogoImg = styled.img`
  height: 60px;
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fdfdfd;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    max-height: ${(props) => (props.isOpen ? "fit-content" : "0")};
    overflow: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: max-height 0.3s ease-in-out;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  transition: color 0.3s;

  &.active,
  &:hover {
    color: #26395f;
  }
`;

const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 150%;
  left: 0;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 160px;
  padding: 8px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  color: #222;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

export default Navbar;
