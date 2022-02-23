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
        localStorage.setItem("JUNTA_SESSION", JSON.stringify(newState));
      } else {
        newState = { ...state, loginAttemptSuccess: "failed" };
      }
      break;
    case "LOGOUT":
      localStorage.removeItem("JUNTA_SESSION");
      return loginInitialState;

    case "CHECK_SESSION":
      if (localStorage.getItem("JUNTA_SESSION")) {
        newState = JSON.parse(localStorage.getItem("JUNTA_SESSION"));
      } else return state;
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
