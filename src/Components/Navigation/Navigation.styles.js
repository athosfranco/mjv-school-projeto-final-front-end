import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
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
`;

export const NavIcon = styled.div`
  margin-right: 10px;
  font-size: 22px;
`;

export const Text = styled.span`
  margin: 0;
  padding: 0;
`;
