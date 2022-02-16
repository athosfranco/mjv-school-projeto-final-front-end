import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 10px;
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
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 97vh;
  width: 100%;
`;
