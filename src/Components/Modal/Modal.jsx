import React from "react";
import Button from "../../UI/Button/Button";
import {
  ButtonWrapper,
  CloseModalBtn,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  Overlay,
  Text,
} from "./Modal.styles";

const Modal = ({ text, title, modalWithBtn, confirmBtnTxt, cancelBtnTxt, onCancel, onConfirm }) => {
  return (
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseModalBtn onClick={onCancel} />
        </ModalHeader>
        <ModalBody>
          <Text>{text}</Text>
        </ModalBody>
        {modalWithBtn && (
          <ButtonWrapper>
            <Button type="danger" onClick={onCancel} width={"200px"}>
              {cancelBtnTxt ? cancelBtnTxt : "Cancelar"}
            </Button>
            <Button type="success" onClick={onConfirm} width={"200px"}>
              {confirmBtnTxt ? confirmBtnTxt : "Confirmar"}
            </Button>
          </ButtonWrapper>
        )}
      </ModalContainer>
      <Overlay onClick={onCancel} />
    </>
  );
};

export default Modal;
