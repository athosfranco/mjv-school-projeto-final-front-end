import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import fundoLogin from "../../Assets/fundo-login.jpg";

export const PageContainer = styled.div`
  /* The image used */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${fundoLogin});

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /////
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    margin-bottom: 15px;
  }
  //shadow
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 45px;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  transition: 0.1s ease all;
  cursor: pointer;
  color: #0077b5;

  &:hover {
    transform: scale(1.3);
  }
`;

export const GithubIcon = styled(FaGithubSquare)`
  transition: 0.1s ease all;
  cursor: pointer;
  color: #211f1f;

  &:hover {
    transform: scale(1.3);
  }
`;
