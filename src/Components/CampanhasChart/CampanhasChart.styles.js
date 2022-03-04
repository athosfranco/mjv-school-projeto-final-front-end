import styled from "styled-components";

export const CampanhasChartContainer = styled.div`
  //style
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  padding: 18px;
  margin: 20px 0;
`;
