import styled from "styled-components";

export const StatisticsContainer = styled.div`
  margin: 10px;

  padding: 20px 35px;

  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);

  //display
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const YearSelectionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
