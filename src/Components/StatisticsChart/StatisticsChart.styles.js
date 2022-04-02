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

  flex-direction: column;
`;

export const YearSelectionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const YearOption = styled.div`
  margin: 8px;
  cursor: pointer;
  padding: 8px 16px;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.primary : theme.body)};
  color: ${({ theme, isSelected }) => (isSelected ? "#fff" : theme.text)};
  border-radius: 24px;
  box-shadow: 0px 12px 19px rgba(0, 0, 0, 0.06);
  &:hover {
    transform: scale(1.2);
  }
`;
