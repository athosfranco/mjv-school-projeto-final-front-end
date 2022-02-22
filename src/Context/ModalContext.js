import { createContext } from "react";

const ModalCtx = createContext({
  display: false,
  title: "Título",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eaque.",
  modalWithBtn: false,
  confirmBtnTxt: "Confirmar",
  cancelBtnTxt: "Cancelar",
  cancelHandler: null,
  confirmHandler: null,
});

export default ModalCtx;
