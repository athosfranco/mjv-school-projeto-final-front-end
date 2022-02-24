import React from "react";
import { Btn } from "./Button.styles";

const Button = ({ children, type, onClick, width, mright }) => {
  return (
    <Btn
      onClick={(e) => {
        e.preventDefault();
        if (type !== "disabled") onClick();
      }}
      type={type}
      width={width}
      mright={mright}
    >
      {children}
    </Btn>
  );
};

export default Button;
