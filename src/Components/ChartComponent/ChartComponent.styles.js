import styled from "styled-components";

export const ChartComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ////style
  padding: 24px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  margin: 10px;
  width: 31%;
  height: 400px;
  //media query
  @media only screen and (max-width: 980px) {
    width: 100%;
    margin: 5px;
    height: 320px;
  }
`;

export const ComponentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  cursor: default;
`;

export const VerTodos = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  cursor: pointer;
`;

export const Value = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #00a389;
  font-size: 42px;
  cursor: default;
`;

export const ChartContainer = styled.div``;
