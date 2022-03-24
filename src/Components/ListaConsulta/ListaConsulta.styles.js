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
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
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

export const Th = styled.th`
  padding: 5px;
`;

export const Tbody = styled.tbody``;

export const ConsultaRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const ConsultaTd = styled.td`
  text-align: center;
  padding: 5px 15px;
  outline: none;
  border-bottom: 1px solid darkgray;
  font-size: 16px;
`;
