import React from "react";
import { Btn } from "./Button.styles";

const Button = ({ children, type, onClick }) => {
  return (
    <Btn
      onClick={(e) => {
        e.preventDefault();
        if (type !== "disabled") onClick();
      }}
      type={type}
    >
      {children}
    </Btn>
  );
};

export default Button;
