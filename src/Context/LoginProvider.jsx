import React, { useReducer } from "react";
import LoginCtx from "./LoginContext";

const loginInitialState = {
  userLoggedIn: null,
  accessLevel: null,
  loginAttemptSuccess: null,
};

const loginReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "LOGIN":
      if (action.value.userInput === "admin" && action.value.pwdInput === "0000") {
        newState = { userLoggedIn: "admin", accessLevel: 0, loginAttemptSuccess: "success" };
      } else {
        newState = { ...state, loginAttemptSuccess: "failed" };
      }
      break;
    default:
      throw new Error();
  }
  return newState;
};

const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  return <LoginCtx.Provider value={{ state, dispatch }}>{children}</LoginCtx.Provider>;
};

export default LoginProvider;
