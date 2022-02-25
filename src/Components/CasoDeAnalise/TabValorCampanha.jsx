import React from "react";
import {
  ArrecadadoSmall,
  CampanhaDesc,
  Meta,
  ProgressBar,
  ProgressoContainer,
  TabCampanhaContainer,
  ValorArrecadado,
  ValuesContainer,
} from "./CasoDeAnalise.styles";

const TabValorCampanha = () => {
  return (
    <TabCampanhaContainer>
      <ValorArrecadado>R$ 10.000</ValorArrecadado>
      <CampanhaDesc>
        Até agora, foram arrecadados R$ 5.270 para a campanha de João da Silva, correspondendo a 51% do valor da meta.
      </CampanhaDesc>
      <ProgressoContainer>
        <ProgressBar />
        <ValuesContainer>
          <ArrecadadoSmall>R$ 5.270</ArrecadadoSmall>
          <Meta>R$ 10.000</Meta>
        </ValuesContainer>
      </ProgressoContainer>
    </TabCampanhaContainer>
  );
};

export default TabValorCampanha;
