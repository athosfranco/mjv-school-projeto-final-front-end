import styled from "styled-components";

export const CampanhasChartContainer = styled.div`
  //style
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  padding: 30px;
  margin: 20px 10px;
  @media only screen and (max-width: 980px) {
    padding: 10px;
    margin: 10px;
  }
`;

export const CampanhasTitle = styled.span`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  @media only screen and (max-width: 980px) {
    font-size: 18px;
  }
`;
