import React from "react";
import Button from "../../UI/Button/Button";
import {
  BeneficiarioCol,
  BtnWrapper,
  CaseControl,
  CaseSection,
  CaseSectionContent,
  CaseSectionTitle,
  CloseBtn,
  Container,
  InfoValue,
  Header,
  InfoWrapper,
  Overlay,
  SolicitacaoSpan,
  Title,
} from "./CasoDeAnalise.styles";

const CasoDeAnalise = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>Análise de Caso</Title>
          <CloseBtn />
        </Header>
        <CaseControl>
          <InfoWrapper>
            <SolicitacaoSpan>Solicitação | Guia:</SolicitacaoSpan>
            <InfoValue>000123456</InfoValue>
          </InfoWrapper>
          <BtnWrapper>
            <Button type="danger" mright="10px">
              Recusar
            </Button>
            <Button type="warning" mright="10px">
              Analisar
            </Button>
            <Button type="success">Aprovar</Button>
          </BtnWrapper>
        </CaseControl>

        <CaseSection>
          <CaseSectionTitle>Dados pessoais</CaseSectionTitle>
          <CaseSectionContent dir="row">
            <BeneficiarioCol>
              <span>Beneficiário</span>
              <InfoValue>João Silva</InfoValue>
            </BeneficiarioCol>
          </CaseSectionContent>
        </CaseSection>
      </Container>
      <Overlay />
    </>
  );
};

export default CasoDeAnalise;
