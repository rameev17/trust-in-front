import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  title,
  width = "60%",
  customClose,
  customHeader,
}) => {
  const onClose = () => {
    if (customClose) {
      customClose();
    } else {
      setIsOpen(false);
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={onClose} isOpen={isOpen}>
      <Content onClick={stopPropagation} isOpen={isOpen} width={width}>
        {customHeader ? (
          customHeader
        ) : (
          <ModalHeader>
            <Typography variant="xLarge" color="primary">
              {title}
            </Typography>
            <CloseButton onClick={onClose}>
              <CloseOutlined />
            </CloseButton>
          </ModalHeader>
        )}
        {children}
      </Content>
    </Backdrop>
  );
};

const ModalHeader = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  gap: 16px;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 16px 0px #0000001f;
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
  z-index: 999;
  background: ${({ isOpen }) => (isOpen ? "#19273abd" : "none")};
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease;
  width: ${({ width }) => width};
  height: 100%;
  align-self: flex-start;
  margin-left: auto;
  box-shadow: 0px 8px 16px -2px #1b242c1f, 0px 2px 2px -1px #1b232c0a;
  border-left: 1px solid #10284817;
  background: linear-gradient(
      0deg,
      rgba(16, 40, 72, 0.09),
      rgba(16, 40, 72, 0.09)
    ),
    linear-gradient(0deg, #ffffff, #ffffff);

  @media (max-width: 768px) {
    width: 100%;
    height: 80%; /* Adjust this percentage as needed */
    align-self: flex-end;
    border-left: none;
    border-top: 1px solid #10284817;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(100%)"};
  }
`;

const Typography = styled.p`
  font-size: 18px;
  font-family: "Montserat-600";
`;

export default Modal;
