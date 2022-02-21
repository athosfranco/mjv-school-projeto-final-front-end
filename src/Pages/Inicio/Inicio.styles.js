import styled from "styled-components";

export const CasesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  cursor: default;
`;

export const TableRowValues = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverOnCases};
  }
`;

export const TableHead = styled.th`
  text-align: left;
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderCases};
`;
