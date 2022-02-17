import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  position: fixed;
  width: 20vw;
   //animation
   animation: slide-left 1000ms ease-out forwards;
  @keyframes slide-left {
  from {
    opacity: 0;
    transform: translateX(-6rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SidebarLogo = styled.img`
  margin-top: 10px;
  width: 158px;
  height: 85.5px;
  cursor: pointer;
  align-self: center;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 97vh;
  width: 100%;
`;
