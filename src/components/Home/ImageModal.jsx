import React from "react";
import ModalCenter from "../Modal";

const ImageModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen}>
      <img
        src={require("../../images/tylekterSany.png")}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </ModalCenter>
  );
};

export default ImageModal;
