import React, { useContext, useState, useEffect } from "react";
import { MdOutlineNightlight } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import {
  FirstText,
  ForgotPassSpan,
  ErrorMsg,
  Form,
  InputWrapper,
  ModalContainer,
  SecondText,
  TextContentWrapper,
  UserInput,
  Actions,
  IconWrapper,
} from "./LoginModal.styles";
import Button from "../../UI/Button/Button";
import { ThemeCtx } from "../../App";
import LoginCtx from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import ClinicLogo from "../ClinicLogo/ClinicLogo";

const LoginModal = ({ onGetCredentials }) => {
  let navigate = useNavigate();
  const { handleToggleTheme, theme } = useContext(ThemeCtx);
  const { state } = useContext(LoginCtx);

  const [showError, setShowError] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [pwdInput, setPwdInput] = useState(null);

  const submitHandler = () => onGetCredentials(userInput, pwdInput);

  useEffect(() => {
    if (state.loginAttemptSuccess === "failed") {
      setShowError(true);
    } else if (state.loginAttemptSuccess === "success") {
      navigate("/dashboard", { replace: true });
    }
  }, [state]);

  return (
    <>
      <ModalContainer>
        <ClinicLogo />

        <TextContentWrapper>
          <FirstText>Olá! Bem vindo ao Admin Dashboard.</FirstText>
          <SecondText>Utilize suas credenciais para ter acesso.</SecondText>
          {showError && <ErrorMsg>Usuário ou senha incorretos.</ErrorMsg>}
        </TextContentWrapper>

        <Form>
          <InputWrapper>
            <UserInput
              type="text"
              placeholder={"Usuário"}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              maxLength="6"
            />
          </InputWrapper>
          <InputWrapper>
            <UserInput
              type="password"
              placeholder={"Senha"}
              onChange={(e) => {
                setPwdInput(e.target.value);
              }}
              maxLength="6"
            />
          </InputWrapper>
          <Actions>
            <ForgotPassSpan>Esqueci a senha</ForgotPassSpan>

            <Button
              type={userInput?.length > 0 && pwdInput?.length > 0 ? "success" : "disabled"}
              onClick={submitHandler}
            >
              Entrar
            </Button>
          </Actions>
        </Form>
      </ModalContainer>
      <IconWrapper onClick={handleToggleTheme}>{theme == "light" ? <MdOutlineNightlight /> : <BsSun />}</IconWrapper>
    </>
  );
};

export default LoginModal;
