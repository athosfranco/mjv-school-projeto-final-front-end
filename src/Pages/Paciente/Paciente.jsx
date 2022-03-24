import React, { useContext } from "react";
import ListaPaciente from "../../Components/ListaPaciente/ListaPaciente";
import { DataCtx } from "../Dashboard/Dashboard";
import { Divider, SectionContainer, SectionTitle } from "../Pages.styles";
import CadastrarPaciente from "./CadastrarPaciente/CadastrarPaciente";

const Paciente = () => {
  const { pacientes } = useContext(DataCtx);
  return (
    <div>
      <CadastrarPaciente />
      <SectionContainer>
        <SectionTitle>Lista de Pacientes Cadastrados</SectionTitle>
        <Divider />
        <ListaPaciente lista={pacientes?.data} />
      </SectionContainer>
    </div>
  );
};

export default Paciente;
