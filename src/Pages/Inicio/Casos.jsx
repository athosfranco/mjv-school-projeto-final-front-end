import React from "react";
import { CasesContainer, Table, TableCell, TableHead, TableRow, TableRowValues } from "./Inicio.styles";

const Casos = () => {
  return (
    <CasesContainer>
      <Table>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead>Paciente</TableHead>
          <TableHead>Idade</TableHead>
          <TableHead>Tipo de Caso</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
        <TableRowValues>
          <TableCell>21/02/22</TableCell>
          <TableCell>11:00</TableCell>
          <TableCell>Athos</TableCell>
          <TableCell>26</TableCell>
          <TableCell>Cirurgia</TableCell>
          <TableCell>Analisar</TableCell>
        </TableRowValues>
      </Table>
    </CasesContainer>
  );
};

export default Casos;
