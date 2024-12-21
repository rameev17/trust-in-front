import React from "react";
import styled from "styled-components";
import CloseIcon from "./svg/CloseIcon";

const ModalCenter = ({
  children,
  isOpen,
  setIsOpen,
  title,
  onClose,
  width,
}) => {
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={() => handleClose()} isOpen={isOpen}>
      <Content onClick={stopPropagation} isOpen={isOpen} width={width}>
        <ModalHeader>
          <Typography variant="xLarge" color="primary">
            {title}
          </Typography>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        {children}
      </Content>
    </Backdrop>
  );
};

const ModalHeader = styled.div`
  gap: 16px;
  z-index: 9999;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  padding: 6px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ isOpen }) => (isOpen ? "#19273abd" : "none")};
  transition: background-color 0.3s ease;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  transition: transform 0.3s ease;
  align-self: center;
  display: flex;
  gap: 12px;
  background-color: #ffffff;
  padding: 24px;
  flex-direction: column;
  width: ${({ width }) => (width ? width : 480)};
  border-radius: 12px;
  box-shadow: 0px 8px 16px -2px #1b242c1f;
  box-shadow: 0px 2px 2px -1px #1b232c0a;
`;

const Typography = styled.p`
  font-size: 24px;
  font-family: "Ubuntu" sans-serif;
  font-weight: 600;
`;

export default ModalCenter;
