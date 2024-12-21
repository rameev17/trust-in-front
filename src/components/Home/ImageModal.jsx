import React from "react";
import ModalCenter from "../Modal";

const ImageModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen}>
      <img
        src={require("../../images/map.png")}
        style={{ width: "auto", height: "auto" }}
      />
    </ModalCenter>
  );
};

export default ImageModal;
