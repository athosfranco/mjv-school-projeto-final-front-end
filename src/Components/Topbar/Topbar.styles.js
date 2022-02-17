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
  ${({ scroll }) => scroll > 0 && "box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06)"}; ;
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
`;

export const WelcomeMsg = styled.span`
  margin-top: 5px;
`;

export const UserAvatar = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 22px;
  margin-right: 10px;
`;
