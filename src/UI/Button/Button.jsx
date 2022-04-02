import React from "react";
import { Btn } from "./Button.styles";

const Button = ({ children, type, onClick, width, mright, margin }) => {
  return (
    <Btn
      onClick={(e) => {
        e.preventDefault();
        if (type !== "disabled") onClick();
      }}
      type={type}
      width={width}
      mright={mright}
      margin={margin}
    >
      {children}
    </Btn>
  );
};

export default Button;
