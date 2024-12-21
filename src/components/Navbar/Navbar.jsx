import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import DropdownIcon from "../../icons/DropdownIcon";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = ({ routes }) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const mainUrl = currentUrl.split("/")[1];
  const [activeTab, setActiveTab] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveTab(`/${mainUrl}`);
  }, [mainUrl]);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Container>
      <LogoContainer to="home">
        <LogoImg src={require("../../images/logo.png")} />
      </LogoContainer>
      <MobileMenuIcon onClick={handleMobileMenuToggle}>
        <MenuOutlined />
      </MobileMenuIcon>
      <RightSide isOpen={mobileMenuOpen}>
        <NavItems>
          {routes.map((page, i) => (
            <NavItemContainer
              key={i}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(i);
              }}
            >
              <NavItem
                to={page.requiredAccessToPage}
                isActive={currentUrl.startsWith(page.requiredAccessToPage)}
                onClick={() => {
                  handleMobileMenuToggle();
                }}
              >
                {page.name}
              </NavItem>
              {page?.subPages?.length && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <DropdownIcon />
                </div>
              )}

              {page.subPages && (
                <DropdownMenu
                  isOpen={dropdownOpen === i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: dropdownOpen === i ? 1 : 0,
                    y: dropdownOpen === i ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {page.subPages.map((subPage, j) => (
                    <DropdownItemContainer key={j}>
                      <DropdownItem
                        to={`${page.requiredAccessToPage}/${subPage.path}`}
                        onClick={() => {
                          handleMobileMenuToggle();
                        }}
                      >
                        {subPage.name}
                      </DropdownItem>
                    </DropdownItemContainer>
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 8px 150px;
  background-color: #fdfdfd;
  align-items: center;
  @media (max-width: 768px) {
    padding: 8px 48px;
  }
`;

const LogoContainer = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: 350px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  align-items: center;
  gap: 16px;
`;
const LogoImg = styled.img`
  width: auto;
  height: 60px;
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 1300px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const RightSide = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1300px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fdfdfd;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-bottom: 100px;
    transition: max-height 0.3s ease;
    overflow: auto;
    max-height: ${(props) => (props.isOpen ? "fit-content" : "0px")};
  }
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 1300px) {
    padding: 16px;

    flex-direction: column;
    gap: 16px;
  }
`;

const NavItemContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto" sans-serif;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease;

  &.active {
    color: #26395f;
  }

  &:hover {
    color: #26395f;
  }
`;

const DropdownMenu = styled(motion.div)`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-10px)"};
  position: absolute;
  top: 150%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 100%;
  padding: 8px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const DropdownItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;

const DropdownItem = styled(NavLink)`
  padding: 8px 16px;
  font-size: 14px;
  color: #222;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto" sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export default Navbar;
