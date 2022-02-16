import { createContext } from "react";

const LoginCtx = createContext({
  userLoggedIn: null,
  accessLevel: null,
  userInput: null,
  pwdInput: null,
});

export default LoginCtx;
