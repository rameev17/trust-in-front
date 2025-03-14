import React from "react";
import ModalCenter from "../Modal";
import styled from "styled-components";
import { TEXT_COLORS } from "../../helper/constants";

const DonationModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen} width={"300px"}>
      <img src={require("../../images/qr.jpg")} />
      <Link>
        Осы{" "}
        <a
          href="https://kaspi.kz/pay/_gate?action=service_with_subservice&service_id=4129&subservice_id=9966&region_id=18"
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
    color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
export default DonationModal;
