import React from "react";
import ModalCenter from "../Modal";
import styled from "styled-components";

const DonationModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen} width={"300px"}>
      <img src={require("../../images/donateQr.PNG")} />
      <Link>
        Осы{" "}
        <a
          href="https://kaspi.kz/pay/OOTrustinCommunity"
          target="_blank"
          rel="noreferrer"
        >
          сілтеме
        </a>{" "}
        арқылы Kaspi-ден төлем жасай аласыз
      </Link>
    </ModalCenter>
  );
};
const Link = styled.div`
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
  color: #222222;
  font-family: "Roboto", sans-serif;
  margin: 0;
  a {
    cursor: pointer;
    color: #26395f;
  }
`;
export default DonationModal;
