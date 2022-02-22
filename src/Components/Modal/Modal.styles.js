import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContainer = styled.div`
  //display
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //position center and above all
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 300px;
  margin-top: -150px;
  margin-left: -250px;
  z-index: 1000;

  //styling
  background-color: ${({ theme }) => theme.body};
  border-radius: 18px;
  padding: 15px;

  //animation
  animation: slide-down 500ms ease-out forwards;
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  //media query
  @media only screen and (max-width: 980px) {
    width: 350px;
    margin-left: -175px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export const CloseModalBtn = styled(AiOutlineClose)`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => `color: ${theme.primary}`};
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
