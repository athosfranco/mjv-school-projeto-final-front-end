import React, { useReducer } from "react";
import ModalCtx from "./ModalContext";

const modalReducer = (state, action) => {
  let newState;
  alert("im getting here");

  switch (action.type) {
    case "SET_DISPLAY":
      alert("im getting here!!!!!!!!!!1");
      newState = { ...state, display: action.value };
      break;
    case "SET_TITLE":
      newState = { ...state, title: action.value };
      break;
    case "SET_TEXT":
      newState = { ...state, text: action.value };
      break;
    case "SET_CONFIRM_TXT":
      newState = { ...state, confirmBtnTxt: action.value, modalWithBtn: true };
      break;
    case "SET_CANCEL_TXT":
      newState = { ...state, cancelBtnTxt: action.value, modalWithBtn: true };
      break;
    case "CONFIG_MODAL":
      newState = action.value;
      break;
    default:
      throw new Error();
  }
  return newState;
};

const ModalProvider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, {
    display: false,
    title: "Título",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eaqueLAAAAAAAAAALALALA.",
    modalWithBtn: false,
    confirmBtnTxt: "Confirmar",
    cancelBtnTxt: "Cancelar",
  });

  return <ModalCtx.Provider value={{ modalState, modalDispatch }}>{children}</ModalCtx.Provider>;
};

export default ModalProvider;
