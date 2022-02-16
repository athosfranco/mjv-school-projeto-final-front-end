import React, { useContext, useEffect } from "react";
import LoginCtx from "../../Context/LoginContext";
import LoginModal from "../../Components/LoginModal/LoginModal";
import { getCurrentYear } from "../../GeneralFunctions";
import { PageContainer } from "./LoginPage.styles";

const year = getCurrentYear();

const LoginPage = () => {
  const { dispatch } = useContext(LoginCtx);

  const loginHandler = (user, pwd) => {
    dispatch({ type: "LOGIN", value: { userInput: user, pwdInput: pwd } });
  };

  return (
    <PageContainer>
      <main>
        <LoginModal onGetCredentials={loginHandler} />
      </main>
      <footer>
        <span>Junta Dashboard v.0.1</span>
        <a href="http://rocketstudio.com.br/" target="_blank" rel="noreferrer">
          Rocket Studio - {year} 🚀
        </a>
      </footer>
    </PageContainer>
  );
};

export default LoginPage;
