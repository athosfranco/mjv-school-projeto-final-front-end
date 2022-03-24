import React, { useContext } from "react";
import ListaMedico from "../../Components/ListaMedico/ListaMedico";
import { DataCtx } from "../Dashboard/Dashboard";
import { Divider, SectionContainer, SectionTitle } from "../Pages.styles";
import CadastrarMedico from "./CadastrarMedico/CadastrarMedico";

const Medicos = () => {
  const { medicos } = useContext(DataCtx);
  return (
    <div>
      <CadastrarMedico tipoFormulario={"cadastro"} />
      <SectionContainer>
        <SectionTitle>Lista de Medicos Cadastrados</SectionTitle>
        <Divider />
        <ListaMedico lista={medicos?.data} />
      </SectionContainer>
    </div>
  );
};

export default Medicos;
