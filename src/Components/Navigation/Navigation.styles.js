import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;

  //media query
  @media only screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
`;

export const NavItem = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-item: center;
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #a91b1c;
    background-color: #a91b1c26;
  }
  &:active {
    transform: scale(0.95);
  }
  //media query
  @media only screen and (max-width: 980px) {
    margin: 0;
  }
`;

export const NavIcon = styled.div`
  margin-right: 10px;
  font-size: 22px;
`;

export const Text = styled.span`
  margin: 0;
  padding: 0;
  //media query
  @media only screen and (max-width: 980px) {
    ${({ mobileSidebarExpanded }) => !mobileSidebarExpanded && "display: none"};
  }
`;
