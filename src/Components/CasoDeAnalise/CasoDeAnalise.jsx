import React, { useState, useContext } from "react";
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
  TabContent,
} from "./CasoDeAnalise.styles";
import TabDescAvaliador from "./TabDescAvaliador";
import TabDescricaoCaso from "./TabDescricaoCaso";
import TabDocAnexado from "./TabDocAnexado";
import TabValorCampanha from "./TabValorCampanha";
import ModalCtx from "../../Context/ModalContext";

// document.body.style.overflow = "hidden";

const CasoDeAnalise = () => {
  const { modalDispatch } = useContext(ModalCtx);

  const [activeTab, setActiveTab] = useState(1);

  const currentTabHandler = () => {
    if (activeTab === 1) {
      return <TabDescricaoCaso />;
    } else if (activeTab === 2) {
      return <TabDocAnexado />;
    } else if (activeTab === 3) {
      return <TabDescAvaliador />;
    } else if (activeTab === 4) {
      return <TabValorCampanha />;
    }
  };

  const rejectHandler = () => {
    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Rejeitar Caso",
        text: `Confirmar REJEIÇÃO deste caso?`,
        modalWithBtn: true,
        confirmBtnTxt: "Confirmar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
      },
    });
  };
  const analysisHandler = () => {
    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Rejeitar Caso",
        text: `Marcar este caso como EM ANÁLISE?`,
        modalWithBtn: true,
        confirmBtnTxt: "Confirmar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
      },
    });
  };
  const approvedHandler = () => {
    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Rejeitar Caso",
        text: `Deseja confirmar a APROVAÇÃO deste caso?`,
        modalWithBtn: true,
        confirmBtnTxt: "Confirmar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
      },
    });
  };

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
            <Button type="danger" mright="10px" onClick={rejectHandler}>
              Recusar
            </Button>
            <Button type="warning" mright="10px" onClick={analysisHandler}>
              Analisar
            </Button>
            <Button type="success" onClick={approvedHandler}>
              Aprovar
            </Button>
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
        <TabContent>{currentTabHandler()}</TabContent>
      </Container>
      <Overlay />
    </>
  );
};

export default CasoDeAnalise;
