import styled from "styled-components";
import { ImFileExcel } from "react-icons/im";
import { AiOutlineFileDone } from "react-icons/ai";

export const CardContainer = styled.div`
  margin: 10px;
  padding: 20px 35px;
  width: 31%;
  height: 190px;
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
  //media query
  @media only screen and (max-width: 1150px) {
    width: 100%;
    margin: 5px;
  }
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  //font
  font-family: "Poppins", sans-serif;
`;

export const Value = styled.span`
  font-weight: 600;
  font-size: 52px;
  //font
  font-family: "Poppins", sans-serif;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 44px;
  }
`;
export const ValueSmall = styled.span`
  font-weight: 600;
  font-size: 25px;
  //font
  font-family: "Poppins", sans-serif;
  color: ${({ value }) => (value > 0 ? "green" : "tomato")};
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 14px;
  }
`;

export const Img = styled.img`
  width: 100px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardButtonExcel = styled.button`
  width: 150px;
  background-color: ${({ theme }) => theme.cardButton};
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 9px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #20744a;
  cursor: pointer;
  &:hover {
    background-color: #20744a;
    color: #eeeeee;
  }
`;
export const CardButtonRelatorios = styled.button`
  width: 150px;
  background-color: ${({ theme }) => theme.cardButton};
  color: #2999f2;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 9px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #2999f2;
    color: #eeeeee;
  }
`;

export const BtnIconExcel = styled(ImFileExcel)`
  font-size: 18px;
`;
export const BtnIconRelatorios = styled(AiOutlineFileDone)`
  font-size: 20px;
`;

export const BtnTxt = styled.span`
  margin-left: 10px;
`;
