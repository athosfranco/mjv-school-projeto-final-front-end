import styled from "styled-components";

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

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
  }
  //media query
  @media only screen and (max-width: 980px) {
    width: 100%;
    margin: 5px;
  }
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

export const Img = styled.img``;
