import styled from "styled-components";
import { VscListSelection } from "react-icons/vsc";

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  position: fixed;
  width: 20vw;
  z-index: 999;
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
  }
  //media query
  @media only screen and (max-width: 980px) {
    width: ${({ mobileSidebarExpanded }) => (mobileSidebarExpanded ? "95vw" : "15vw")};
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
  //media query
  @media only screen and (max-width: 980px) {
    display: none;
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

export const SidebarMenuBtn = styled(VscListSelection)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  color: darkgray;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media only screen and (min-width: 980px) {
    display: none;
  }
`;
