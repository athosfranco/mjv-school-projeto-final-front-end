import styled from "styled-components";

export const TopbarContainer = styled.div`
  background-color: ${({ scroll, theme }) => (scroll > 0 ? theme.body : "transparent")};
  margin: 10px;
  height: 90px;
  display: flex;
  border-radius: 18px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  width: 77vw;
  cursor: default;
  ${({ scroll }) => scroll > 0 && "box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06)"};
  //media query
  @media only screen and (max-width: 980px) {
    left: 0;
    margin-left: 16vw;
    justify-content: space-between;
    margin-top: 0;
    width: 75vw;
  }
`;

export const LeftTopbarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

export const RightTopbarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentPage = styled.h3`
  font-size: 28px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 18px;
  }
`;

export const WelcomeMsg = styled.span`
  margin-top: 5px;
  font-family: "Poppins", sans-serif;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 12px;
  }
`;

export const UserAvatar = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 22px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
  //media query
  @media only screen and (max-width: 980px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`;
