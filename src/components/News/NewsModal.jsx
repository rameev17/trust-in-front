import React from "react";
import Modal from "../ModalRightSide";
import styled from "styled-components";

const NewsModal = ({ isOpen, setIsOpen, selectedNews }) => {
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} title={selectedNews?.title}>
      <Container>
        <Block>
          <Description
            dangerouslySetInnerHTML={{ __html: selectedNews?.content }}
          />
        </Block>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  background-color: white;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 24px;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 8px;
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  font-family: "Montserat-400";
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export default NewsModal;
