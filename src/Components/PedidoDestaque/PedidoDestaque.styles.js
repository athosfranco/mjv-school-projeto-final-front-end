import styled from "styled-components";

export const PedidoDestaqueContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);

  cursor: pointer;

  //display
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
  }
`;

export const PedidoHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const HeaderPic = styled.img``;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span``;
