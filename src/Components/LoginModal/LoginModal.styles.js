import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  width: 400px;
  height: 500px;
  padding: 24px;
  //position fixed centered
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px; /* Negative half of height. */
  margin-left: -200px; /* Negative half of width. */
  //shadow
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  //animation
  animation: slide-down 1000ms ease-out forwards;
  @keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-6rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstText = styled.span`
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  margin-bottom: 20px;
`;

export const SecondText = styled.span`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  position: relative;
`;

export const UserInput = styled.input`
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  width: 100%;
  padding: 15px 20px;
  outline: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin-bottom: 10px;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.text};
  &:focus {
    border: 2px solid #2196f3;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.text};
    opacity: 0.5; /* Firefox */
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ForgotPassSpan = styled.span`
  font-size: 12px;
  cursor: pointer;
  text-align: right;
  margin-bottom: 80px;
  &:hover {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
  }
`;

export const LoginBtn = styled.button`
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.text};
  margin-top: 80px;
  width: 100%;
  padding: 15px;
  background-color: ${({ type, theme }) =>
    type === "success"
      ? theme.success
      : type === "danger"
      ? theme.danger
      : type === "warning"
      ? theme.warning
      : type === "info" && theme.info};
`;

export const IconWrapper = styled.div`
  position: absolute;
  font-size: 24px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const ErrorMsg = styled.span`
  font-size: 12px;
  font-style: italic;
  color: tomato;
  text-align: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  h1 {
    margin: 0;
    padding: 0;
  }
`;
