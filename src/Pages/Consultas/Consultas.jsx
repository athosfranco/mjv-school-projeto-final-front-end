import React, { useContext } from "react";
import ListaConsulta from "../../Components/ListaConsulta/ListaConsulta";
import { DataCtx } from "../Dashboard/Dashboard";
import { Divider, SectionContainer, SectionTitle } from "../Pages.styles";
import CadastrarConsulta from "./CadastrarConsulta/CadastrarConsulta";

const Consultas = () => {
  const { consultas } = useContext(DataCtx);
  return (
    <div>
      <CadastrarConsulta tipoFormulario={"cadastro"} />
      <SectionContainer>
        <SectionTitle>Lista de Consultas Cadastradas</SectionTitle>
        <Divider />
        <ListaConsulta lista={consultas?.data} />
      </SectionContainer>
    </div>
  );
};

export default Consultas;
