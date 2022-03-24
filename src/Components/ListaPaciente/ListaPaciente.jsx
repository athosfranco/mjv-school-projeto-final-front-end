import React from "react";
import { ListaContainer, PacienteRow, PacienteTd, StyledTable, Tbody, Th, Thead, Tr } from "./ListaPaciente.styles";

const ListaPaciente = ({ lista }) => {
  console.log(lista);
  return (
    <ListaContainer>
      <StyledTable hover responsive>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome Completo</Th>
            <Th>Matrícula Pl. Saúde</Th>
            <Th>E-mail</Th>
            <Th>Telefone</Th>
            <Th>Idade</Th>
            <Th>Data de Inclusão</Th>
            <Th>Última Alteração</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {lista?.map((paciente) => {
            return (
              <PacienteRow key={paciente.id} onClick={() => {}}>
                <PacienteTd>{paciente.id}</PacienteTd>
                <PacienteTd>{paciente.pessoa.nomeCompleto}</PacienteTd>
                <PacienteTd>{paciente.matriculaPlanoDeSaude}</PacienteTd>
                <PacienteTd>{paciente.pessoa.email}</PacienteTd>
                <PacienteTd>{paciente.pessoa.telefone}</PacienteTd>
                <PacienteTd>{paciente.pessoa.dataNascimento}</PacienteTd>
                <PacienteTd>{paciente.dataInclusao}</PacienteTd>
                <PacienteTd>{paciente.dataAlteracao ? paciente.dataAlteracao : "Nunca alterado"}</PacienteTd>
                <PacienteTd>Detalhes | Editar | Excluir</PacienteTd>
              </PacienteRow>
            );
          })}
        </Tbody>
      </StyledTable>
    </ListaContainer>
  );
};

export default ListaPaciente;
