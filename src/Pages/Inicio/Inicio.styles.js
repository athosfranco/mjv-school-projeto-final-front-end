import styled from "styled-components";

export const CasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 980px) {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  cursor: default;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 12px;
  }
`;

export const TableRowValues = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverOnCases};
  }
`;

export const TableHead = styled.th`
  text-align: left;
  @media only screen and (max-width: 980px) {
    text-align: center;
    padding: 0 10px;
  }
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderCases};
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 12px;
    text-align: center;
  }
`;
