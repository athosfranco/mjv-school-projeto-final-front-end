import { createContext } from "react";

const LoginCtx = createContext({
  userLoggedIn: null,
  accessLevel: null,
  loginAttemptSuccess: null,
});

export default LoginCtx;
