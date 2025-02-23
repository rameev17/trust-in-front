import React from "react";
import ModalCenter from "../Modal";

const ImageModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen}>
      <img
        src={require("../../images/map.png")}
        style={{
          width: "90vw",
          height: "auto",
          maxWidth: "90%",
          maxHeight: "90%",
        }}
      />
    </ModalCenter>
  );
};

export default ImageModal;
