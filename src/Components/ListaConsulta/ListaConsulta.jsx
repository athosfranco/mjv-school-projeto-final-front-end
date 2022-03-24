import React from "react";
import { getFormattedDate } from "../../GeneralFunctions";
import { ListaContainer, ConsultaRow, ConsultaTd, StyledTable, Tbody, Th, Thead, Tr } from "./ListaConsulta.styles";
import { useNavigate } from "react-router-dom";

const ListaConsulta = ({ lista }) => {
  //navegaçao programada
  let navigate = useNavigate();

  console.log(lista);
  return (
    <ListaContainer>
      <StyledTable hover responsive>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Paciente</Th>
            <Th>Médico</Th>
            <Th>Motivo</Th>
            <Th>Prescrição</Th>
            <Th>Valor</Th>
            <Th>Data da Consulta</Th>
            <Th>Data de Inclusão</Th>
            <Th>Última Alteração</Th>
          </Tr>
        </Thead>
        <Tbody>
          {lista?.map((consulta) => {
            return (
              <ConsultaRow
                key={consulta.idConsulta}
                onClick={() => {
                  navigate(`/dashboard/detalhesConsulta/?id=${consulta.idConsulta}`, { replace: true });
                }}
              >
                <ConsultaTd>{consulta.idConsulta}</ConsultaTd>
                <ConsultaTd>{consulta.paciente.pessoa.nomeCompleto}</ConsultaTd>
                <ConsultaTd>{consulta.medico.pessoa.nomeCompleto}</ConsultaTd>
                <ConsultaTd>{consulta.motivo.substring(0, 10)}...</ConsultaTd>
                <ConsultaTd>{consulta.prescricao.substring(0, 10)}...</ConsultaTd>
                <ConsultaTd>
                  {consulta.valorConsulta.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </ConsultaTd>
                <ConsultaTd>{getFormattedDate(consulta.dataConsulta, "dd/mm/yy/hr")}</ConsultaTd>
                <ConsultaTd>{getFormattedDate(consulta.dataInclusao, "dd/mm/yy/hr")}</ConsultaTd>
                <ConsultaTd>
                  {consulta.dataAlteracao ? getFormattedDate(consulta.dataAlteracao, "dd/mm/yy/hr") : "Nunca alterado"}
                </ConsultaTd>
              </ConsultaRow>
            );
          })}
        </Tbody>
      </StyledTable>
    </ListaContainer>
  );
};

export default ListaConsulta;
