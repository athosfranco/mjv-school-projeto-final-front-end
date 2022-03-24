import React from "react";
import { Container, InfoTitle, InfoWrap, InfoValue } from "./UnidadePaciente.styles";

const UnidadePaciente = ({ unid }) => {
  console.log(unid);
  return (
    <Container>
      <InfoWrap>
        <InfoTitle>ID</InfoTitle>
        <InfoValue>{unid?.id}</InfoValue>
      </InfoWrap>
    </Container>
  );
};

export default UnidadePaciente;
