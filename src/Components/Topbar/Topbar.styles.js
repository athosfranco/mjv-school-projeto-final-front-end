import styled from "styled-components";

export const TopbarContainer = styled.div`
  flex: 5;
  margin: 10px;
  height: 90px;
  display: flex;
  border-radius: 18px;
  justify-content: space-between;
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
