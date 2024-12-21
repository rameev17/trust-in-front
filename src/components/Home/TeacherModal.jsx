import React from "react";
import Modal from "../ModalRightSide";
import styled from "styled-components";
import PdfViewer from "../PdfViewer";
import { useTranslation } from "react-i18next";

const TeachersModal = ({ isOpen, setIsOpen, selectedTeacher }) => {
  const { t } = useTranslation();

  return (
    <Modal
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      title={`${selectedTeacher?.user?.first_name} ${selectedTeacher?.user?.last_name}`}
    >
      <Container>
        <Block>
          <Title>{t("PPS_BIO")}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: selectedTeacher?.bio }}
          />
        </Block>
        {selectedTeacher?.cv && (
          <Block>
            <Title>{t("PPS_CV")}</Title>
            <PdfViewer pdfUrl={selectedTeacher?.cv} />
          </Block>
        )}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  background-color: white;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 24px;

  /* Adjust padding and gap for smaller screens */
  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Montserat-600";
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Montserat-400";
`;

export default TeachersModal;
