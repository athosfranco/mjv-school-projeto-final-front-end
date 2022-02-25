import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import {
  BeneficiarioRow,
  BtnWrapper,
  CaseControl,
  CaseSection,
  CaseSectionContent,
  CaseSectionTitle,
  CloseBtn,
  Container,
  FieldTitle,
  FieldValue,
  FieldWrapper,
  Header,
  InfoWrapper,
  Overlay,
  SolicitacaoSpan,
  Title,
  TabController,
  Tab,
} from "./CasoDeAnalise.styles";

const CasoDeAnalise = () => {
  const [activeTab, setActiveTab] = useState(1);
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
            <FieldValue>000123456</FieldValue>
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

          <CaseSectionContent dir="col">
            <span>Beneficiário</span>
            <BeneficiarioRow>
              <FieldWrapper>
                <FieldTitle>Nome:</FieldTitle>
                <FieldValue>João Silva</FieldValue>
              </FieldWrapper>
              <FieldWrapper>
                <FieldTitle>Idade:</FieldTitle>
                <FieldValue>33 anos</FieldValue>
              </FieldWrapper>
              <FieldWrapper>
                <FieldTitle>Sexo:</FieldTitle>
                <FieldValue>Masculino</FieldValue>
              </FieldWrapper>
            </BeneficiarioRow>
          </CaseSectionContent>
        </CaseSection>

        <TabController>
          <Tab onClick={() => setActiveTab(1)} active={activeTab === 1}>
            Descrição do Caso
          </Tab>
          <Tab onClick={() => setActiveTab(2)} active={activeTab === 2}>
            Documentos Anexados
          </Tab>
          <Tab onClick={() => setActiveTab(3)} active={activeTab === 3}>
            Descrição final do avaliador
          </Tab>
          <Tab onClick={() => setActiveTab(4)} active={activeTab === 4}>
            Valor da Campanha
          </Tab>
        </TabController>
      </Container>
      <Overlay />
    </>
  );
};

export default CasoDeAnalise;
