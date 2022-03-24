import React from "react";
import { formatarDataSemHora, formatarIdade, getFormattedDate } from "../../GeneralFunctions";
import { ListaContainer, MedicoRow, MedicoTd, StyledTable, Tbody, Th, Thead, Tr } from "./ListaMedico.styles";
import { useNavigate } from "react-router-dom";

const ListaMedico = ({ lista }) => {
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
            <Th>Código CRM</Th>
            <Th>Especialidades</Th>
            <Th>E-mail</Th>
            <Th>Telefone</Th>
            <Th>Data de Nascimento</Th>
            <Th>Data de Inclusão</Th>
            <Th>Última Alteração</Th>
          </Tr>
        </Thead>
        <Tbody>
          {lista?.map((medico) => {
            return (
              <MedicoRow
                key={medico.id}
                onClick={() => {
                  navigate(`/dashboard/detalhesMedico/?id=${medico.id}`, { replace: true });
                }}
              >
                <MedicoTd>{medico.id}</MedicoTd>
                <MedicoTd>{medico.pessoa.nomeCompleto}</MedicoTd>
                <MedicoTd>{formatarIdade(medico.pessoa.dataNascimento)}</MedicoTd>
                <MedicoTd>{medico.codigoCRM}</MedicoTd>
                <MedicoTd>
                  {medico?.especialidades.map((esp) => (
                    <span>{esp.titulo}</span>
                  ))}
                </MedicoTd>
                <MedicoTd>{medico.pessoa.email}</MedicoTd>
                <MedicoTd>{medico.pessoa.telefone}</MedicoTd>
                <MedicoTd>{formatarDataSemHora(medico.pessoa.dataNascimento)}</MedicoTd>
                <MedicoTd>{getFormattedDate(medico.dataInclusao, "dd/mm/yy/hr")}</MedicoTd>
                <MedicoTd>
                  {medico.dataAlteracao ? getFormattedDate(medico.dataAlteracao, "dd/mm/yy/hr") : "Nunca alterado"}
                </MedicoTd>
              </MedicoRow>
            );
          })}
        </Tbody>
      </StyledTable>
    </ListaContainer>
  );
};

export default ListaMedico;
