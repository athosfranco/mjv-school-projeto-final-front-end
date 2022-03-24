import styled from "styled-components";
import { Table } from "react-bootstrap";

export const ListaContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  padding: 15px;
  width: 77vw;
  margin-bottom: 20px;
  //layout
  display: flex;
  flex-direction: column;
`;

///////// tabela
export const StyledTable = styled(Table)`
  width: 95%;
  margin-top: 10px;
  margin-bottom: 100px;
  @media only screen and (max-width: 900px) {
    margin-top: 10px;
    margin-bottom: 50px;
    width: 90%;
    font-size: 12px;
  }
`;

export const Thead = styled.thead`
  text-align: center;
`;

export const Tr = styled.tr``;

export const Th = styled.th``;

export const Tbody = styled.tbody``;

export const PacienteRow = styled.tr``;

export const PacienteTd = styled.td`
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid darkgray;
`;
