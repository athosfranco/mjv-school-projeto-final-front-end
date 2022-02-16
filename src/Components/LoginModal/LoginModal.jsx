import React, { useContext, useState, useEffect } from "react";
import { MdOutlineNightlight } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import {
  FirstText,
  ForgotPassSpan,
  ErrorMsg,
  Form,
  InputWrapper,
  Logo,
  ModalContainer,
  SecondText,
  TextContentWrapper,
  UserInput,
  Actions,
  Image,
  IconWrapper,
} from "./LoginModal.styles";
import Button from "../../UI/Button/Button";
import { ThemeCtx } from "../../App";
import logo from "../../Assets/junta_cor.png";
import LoginCtx from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";

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
        <Logo>
          <Image src={logo} />
        </Logo>

        <TextContentWrapper>
          <FirstText>Acesso ao sistema junta</FirstText>
          <SecondText>Acesso ao sistema administrativo</SecondText>
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
