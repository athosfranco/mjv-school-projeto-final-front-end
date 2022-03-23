import React, { useContext, useEffect } from "react";
import LoginCtx from "../../Context/LoginContext";
import LoginModal from "../../Components/LoginModal/LoginModal";
import { getCurrentYear } from "../../GeneralFunctions";
import { PageContainer, IconWrapper, LinkedinIcon, GithubIcon } from "./LoginPage.styles";

const year = getCurrentYear();

const LoginPage = () => {
  const { dispatch } = useContext(LoginCtx);

  const loginHandler = (user, pwd) => {
    dispatch({ type: "LOGIN", value: { userInput: user, pwdInput: pwd } });
  };

  //verifica se usuário está logado
  useEffect(() => {
    dispatch({ type: "CHECK_SESSION" });
  }, []);

  return (
    <PageContainer>
      <main>
        <LoginModal onGetCredentials={loginHandler} />
      </main>
      <IconWrapper>
        <a href="https://www.linkedin.com/in/athosfranco/">
          {" "}
          <LinkedinIcon />
        </a>
        <a href="https://github.com/athosfranco">
          <GithubIcon />
        </a>
      </IconWrapper>
      <footer>
        <span>MJV Clinic (v.1.0)</span>
        <a href="https://athosfranco.netlify.app/" target="_blank" rel="noreferrer">
          Desenvolvido com 💗 por Athos Franco - {year}
        </a>
      </footer>
    </PageContainer>
  );
};

export default LoginPage;
