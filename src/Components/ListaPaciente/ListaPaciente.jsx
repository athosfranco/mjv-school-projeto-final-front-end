import React from "react";
import { formatarDataSemHora, formatarIdade, getFormattedDate } from "../../GeneralFunctions";
import { ListaContainer, PacienteRow, PacienteTd, StyledTable, Tbody, Th, Thead, Tr } from "./ListaPaciente.styles";
import { useNavigate } from "react-router-dom";

const ListaPaciente = ({ lista }) => {
  //navegaçao programada
  let navigate = useNavigate();

  console.log(lista);
  return (
    <ListaContainer>
      <StyledTable hover responsive>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome Completo</Th>
            <Th>Idade</Th>
            <Th>Mat. PS</Th>
            <Th>E-mail</Th>
            <Th>Telefone</Th>
            <Th>Data de Nascimento</Th>
            <Th>Data de Inclusão</Th>
            <Th>Última Alteração</Th>
          </Tr>
        </Thead>
        <Tbody>
          {lista?.map((paciente) => {
            return (
              <PacienteRow
                key={paciente.id}
                onClick={() => {
                  navigate(`/dashboard/detalhesPaciente/?id=${paciente.id}`, { replace: true });
                }}
              >
                <PacienteTd>{paciente.id}</PacienteTd>
                <PacienteTd>{paciente.pessoa.nomeCompleto}</PacienteTd>
                <PacienteTd>{formatarIdade(paciente.pessoa.dataNascimento)}</PacienteTd>
                <PacienteTd>{paciente.matriculaPlanoDeSaude}</PacienteTd>
                <PacienteTd>{paciente.pessoa.email}</PacienteTd>
                <PacienteTd>{paciente.pessoa.telefone}</PacienteTd>
                <PacienteTd>{formatarDataSemHora(paciente.pessoa.dataNascimento)}</PacienteTd>
                <PacienteTd>{getFormattedDate(paciente.dataInclusao, "dd/mm/yy/hr")}</PacienteTd>
                <PacienteTd>
                  {paciente.dataAlteracao ? getFormattedDate(paciente.dataAlteracao, "dd/mm/yy/hr") : "Nunca alterado"}
                </PacienteTd>
              </PacienteRow>
            );
          })}
        </Tbody>
      </StyledTable>
    </ListaContainer>
  );
};

export default ListaPaciente;
