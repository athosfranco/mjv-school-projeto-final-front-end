import styled from "styled-components";

export const PedidoDestaqueContainer = styled.div`
  //style
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  padding: 18px;
  margin: 10px;
  z-index: 5;

  //size
  width: 340px;
  height: 250px;

  //display
  display: flex;
  flex-direction: column;
  //media query
  @media only screen and (max-width: 980px) {
    width: 250px;
    height: 200px;
    padding: 10px;
    margin: 0 5px;
  }
`;

export const PedidoHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderPic = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 18px;
  margin-right: 15px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 14px;
  }
`;

export const Data = styled.span`
  font-family: "Poppins", sans-serif;
  color: #a3a3a3;
  font-size: 14px;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 10px;
  }
`;

export const PedidoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PedidoDesc = styled.p`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  line-height: 2;
  //media query
  @media only screen and (max-width: 980px) {
    line-height: 2;
    font-size: 12px;
  }
`;
